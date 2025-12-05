#!/usr/bin/env bash
set -euo pipefail

LOG_FILE="${LOG_FILE:-/usr/src/app/log/queue.tsv}"
INTERVAL="${INTERVAL:-3}"   # 30〜60秒推奨
TZ="${TZ:-Asia/Tokyo}"

mkdir -p "$(dirname "$LOG_FILE")"
if [ ! -f "$LOG_FILE" ]; then
  echo -e "timestamp\tqueued\tactive\tprocesses" > "$LOG_FILE"
fi
export TZ

while true; do
  TS="$(date '+%Y-%m-%dT%H:%M:%S%z')"
  STATUS="$(passenger-status 2>/dev/null || true)"

  if [[ -z "$STATUS" ]]; then
    echo -e "$TS\tNA\tNA\tNA" >> "$LOG_FILE"
    sleep "$INTERVAL"; continue
  fi

  QUEUED="$(awk -F':' '/Requests in queue/ {gsub(/ /,"",$2); print $2}' <<< "$STATUS")"
  [[ -z "$QUEUED" ]] && QUEUED=0
  ACTIVE="$(awk '/Sessions:/ {sum+=$2} END{print sum+0}' <<< "$STATUS")"
  PROCS="$(awk '/PID:/ {c++} END{print c+0}' <<< "$STATUS")"

  echo -e "$TS\t$QUEUED\t$ACTIVE\t$PROCS" >> "$LOG_FILE"
  sleep "$INTERVAL"
done
