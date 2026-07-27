import { createHash } from "node:crypto";
import { createReadStream, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { appendFile, rename, stat, unlink } from "node:fs/promises";
import { join } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import pg from "pg";

const execFileAsync = promisify(execFile);

// =============================================================================
//  Configuration
// =============================================================================

const config = {
  filesBase: process.env.FILES_BASE ?? "/data/files",
  logDir: process.env.LOG_DIR ?? "/logs",

  dryRun: process.env.DRY_RUN === "1",
  ageDays: Number(process.env.AGE_DAYS ?? 365),
  minSizeKB: Number(process.env.MIN_SIZE_KB ?? 100),
  batchLimit: Number(process.env.BATCH_LIMIT ?? 500),

  pdfQuality: process.env.PDF_QUALITY ?? "ebook", // screen / ebook / printer
  imageQuality: Number(process.env.IMAGE_QUALITY ?? 60), // 1-100
  imageMaxDim: Number(process.env.IMAGE_MAX_DIM ?? 1920), // px
};

// =============================================================================
//  Stats
// =============================================================================

const stats = {
  processed: 0,
  compressed: 0,
  skipped: 0,
  errors: 0,
  savedBytes: 0,
};

// =============================================================================
//  Logger
// =============================================================================

function createLogger(logDir) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, "").slice(0, 15);
  const logFile = join(logDir, `compress_attachments_${timestamp}.log`);
  mkdirSync(logDir, { recursive: true });

  return {
    logFile,
    info: (msg) => writeLog("INFO", msg, logFile),
    warn: (msg) => writeLog("WARN", msg, logFile),
    error: (msg) => writeLog("ERROR", msg, logFile),
  };
}

function writeLog(level, msg, logFile) {
  const line = `[${new Date().toISOString()}] [${level}] ${msg}`;
  console.log(line);
  appendFile(logFile, line + "\n").catch(() => {});
}

// =============================================================================
//  File Path
// =============================================================================

/**
 * Canvas stores files using partitioned ID paths:
 *   ID 42        -> /data/files/0000/0042/filename.pdf
 *   ID 100000001 -> /data/files/0001/0000/0001/filename.pdf
 */
function attachmentPath(id, filename) {
  let padded = String(id).padStart(8, "0");

  if (padded.length % 4 !== 0) {
    const target = Math.ceil(padded.length / 4) * 4;
    padded = padded.padStart(target, "0");
  }

  const chunks = padded.match(/.{4}/g);
  return join(config.filesBase, ...chunks, filename);
}

// =============================================================================
//  Compression
// =============================================================================

async function compressPdf(src, dst) {
  await execFileAsync("gs", [
    "-sDEVICE=pdfwrite",
    "-dCompatibilityLevel=1.4",
    `-dPDFSETTINGS=/${config.pdfQuality}`,
    "-dNOPAUSE",
    "-dQUIET",
    "-dBATCH",
    `-sOutputFile=${dst}`,
    src,
  ]);
}

async function compressImage(src, dst, contentType) {
  const args = [
    src,
    "-resize",
    `${config.imageMaxDim}x${config.imageMaxDim}>`,
    "-quality",
    String(config.imageQuality),
  ];
  if (contentType !== "image/gif") {
    args.push("-strip");
  }
  args.push(dst);
  await execFileAsync("convert", args);
}

async function validatePdf(path) {
  await execFileAsync("gs", ["-dNODISPLAY", "-dQUIET", "-dBATCH", path]);
}

// =============================================================================
//  Hash
// =============================================================================

function computeSha512(filePath) {
  return new Promise((resolve, reject) => {
    const hash = createHash("sha512");
    const stream = createReadStream(filePath);
    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("end", () => resolve(hash.digest("hex")));
    stream.on("error", reject);
  });
}

// =============================================================================
//  Database
// =============================================================================

function createDb() {
  const pool = new pg.Pool();

  return {
    async query(text, params) {
      return pool.query(`SET search_path TO public; ${text}`, params);
    },

    async getTargets() {
      const { rows } = await pool.query(
        `SET search_path TO public;
         SELECT a.id, a.filename, a.content_type, a.size
         FROM public.attachments a
         INNER JOIN public.attachment_associations aa
           ON aa.attachment_id = a.id
           AND aa.context_type = 'Submission'
         WHERE a.file_state = 'available'
           AND a.content_type IN (
             'application/pdf',
             'image/jpeg', 'image/png', 'image/gif', 'image/webp'
           )
           AND a.size > $1
           AND a.created_at < NOW() - make_interval(days => $2)
         GROUP BY a.id
         ORDER BY a.size DESC
         LIMIT $3`,
        [config.minSizeKB * 1024, config.ageDays, config.batchLimit],
      );
      return rows;
    },

    async updateAttachment(id, size, hash) {
      await pool.query(
        `SET search_path TO public;
         UPDATE public.attachments
         SET size = $1, md5 = $2, updated_at = NOW()
         WHERE id = $3`,
        [size, hash, id],
      );
    },

    async end() {
      await pool.end();
    },
  };
}

// =============================================================================
//  Lock
// =============================================================================

async function acquireLock(db, log) {
  const { rows } = await db.query("SELECT pg_try_advisory_lock(8401739201)");
  if (!rows[0].pg_try_advisory_lock) {
    log.error("Another compression job is already running. Exiting.");
    process.exit(1);
  }
}

async function releaseLock(db) {
  await db.query("SELECT pg_advisory_unlock(8401739201)").catch(() => {});
}

// =============================================================================
//  Helpers
// =============================================================================

function kb(bytes) {
  return Math.floor(bytes / 1024);
}

function mb(bytes) {
  return Math.floor(bytes / 1024 / 1024);
}

async function safeUnlink(path) {
  await unlink(path).catch(() => {});
}

// =============================================================================
//  Process One Attachment
// =============================================================================

async function processAttachment(row, db, log) {
  const { id, filename, content_type } = row;
  const filePath = attachmentPath(id, filename);

  if (!existsSync(filePath)) {
    log.warn(`File not found: id=${id} path=${filePath}`);
    stats.skipped++;
    return;
  }

  const originalSize = (await stat(filePath)).size;

  if (config.dryRun) {
    log.info(
      `[DRY RUN] Would compress: id=${id} type=${content_type} ` +
        `size=${kb(originalSize)}KB file=${filename}`,
    );
    return;
  }

  // Temp paths (same directory = same filesystem = atomic rename)
  const tmpPath = `${filePath}.compress.${process.pid}.tmp`;
  const backupPath = `${filePath}.bak.${process.pid}`;

  // -- 1. Compress to temp file --
  try {
    if (content_type === "application/pdf") {
      await compressPdf(filePath, tmpPath);
      await validatePdf(tmpPath);
    } else {
      await compressImage(filePath, tmpPath, content_type);
    }
  } catch (err) {
    log.error(`Compression failed: id=${id} file=${filename} ${err.message}`);
    stats.errors++;
    await safeUnlink(tmpPath);
    return;
  }

  // -- 2. Check size gain --
  const newSize = (await stat(tmpPath)).size;
  if (newSize >= originalSize || newSize === 0) {
    log.info(
      `Skip (no gain): id=${id} ${kb(originalSize)}KB -> ${kb(newSize)}KB`,
    );
    stats.skipped++;
    await safeUnlink(tmpPath);
    return;
  }

  // -- 3. Compute hash --
  const hash = await computeSha512(tmpPath);

  // -- 4. Backup original -> Replace file -> Update DB --
  //    If anything fails, restore the original from backup.
  try {
    await rename(filePath, backupPath);
    await rename(tmpPath, filePath);
    await db.updateAttachment(id, newSize, hash);
  } catch (err) {
    log.error(`Replace/DB failed: id=${id} ${err.message}`);
    stats.errors++;
    // Restore original from backup
    await safeUnlink(filePath);
    await rename(backupPath, filePath).catch((restoreErr) => {
      log.error(`CRITICAL: Backup restore failed: id=${id} ${restoreErr.message}`);
    });
    await safeUnlink(tmpPath);
    return;
  }

  // -- 5. All succeeded -> remove backup --
  await safeUnlink(backupPath);

  const saved = originalSize - newSize;
  const pct = Math.round((saved / originalSize) * 100);
  stats.savedBytes += saved;
  stats.compressed++;
  log.info(
    `Compressed: id=${id} ${kb(originalSize)}KB -> ${kb(newSize)}KB ` +
      `(saved ${kb(saved)}KB, ${pct}%)`,
  );
}

// =============================================================================
//  Preflight
// =============================================================================

function preflight(log) {
  log.info("=== Attachment compression started ===");
  log.info(`Mode: ${config.dryRun ? "DRY RUN" : "LIVE"}`);
  log.info(`Cutoff: ${config.ageDays} days, Min size: ${config.minSizeKB} KB`);
  log.info(
    `PDF quality: /${config.pdfQuality}, Image quality: ${config.imageQuality}`,
  );
  log.info(`Files base: ${config.filesBase}`);

  for (const cmd of ["gs", "convert"]) {
    try {
      execFileSync("which", [cmd], { stdio: "ignore" });
    } catch {
      log.error(`Required command not found: ${cmd}`);
      process.exit(1);
    }
  }

  if (!existsSync(config.filesBase)) {
    log.error(`Files directory not found: ${config.filesBase}`);
    process.exit(1);
  }
}

// =============================================================================
//  Main
// =============================================================================

async function main() {
  const log = createLogger(config.logDir);
  preflight(log);

  const db = createDb();

  try {
    await db.query("SELECT 1");
  } catch (err) {
    log.error(`Cannot connect to PostgreSQL: ${err.message}`);
    process.exit(1);
  }

  await acquireLock(db, log);

  try {
    log.info("Querying target attachments...");
    const targets = await db.getTargets();
    log.info(`Target attachments: ${targets.length}`);

    if (targets.length === 0) {
      log.info("No attachments to compress. Exiting.");
      return;
    }

    for (const row of targets) {
      stats.processed++;
      await processAttachment(row, db, log);

      if (stats.processed % 50 === 0) {
        log.info(`Progress: ${stats.processed}/${targets.length}`);
      }
    }

    log.info("=== Compression complete ===");
    log.info(`Processed: ${stats.processed}`);
    log.info(`Compressed: ${stats.compressed}`);
    log.info(`Skipped: ${stats.skipped}`);
    log.info(`Errors: ${stats.errors}`);
    log.info(`Total saved: ${mb(stats.savedBytes)} MB`);
  } finally {
    await releaseLock(db);
    await db.end();
  }
}

main().catch((err) => {
  console.error(`Fatal: ${err.message}`);
  process.exit(1);
});
