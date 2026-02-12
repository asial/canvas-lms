FROM node:20-bookworm-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
      ghostscript \
      imagemagick \
    && rm -rf /var/lib/apt/lists/*

# ImageMagick: allow PDF processing (disabled by default)
RUN find /etc -name "policy.xml" -path "*/ImageMagick*" -exec \
    sed -i 's/rights="none" pattern="PDF"/rights="read|write" pattern="PDF"/' {} \;

WORKDIR /app

COPY docker-compose/compressor/package.json ./
RUN npm install --omit=dev

COPY docker-compose/compressor/compress.mjs ./

CMD ["node", "compress.mjs"]
