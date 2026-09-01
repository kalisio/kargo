#!/usr/bin/env bash
set -euo pipefail
# Main entry point. Routes to the right script depending on the mode.
# Usage: ./unarchive.sh <request|move|all> <start> <end> <in_path> <pattern> <out_path>
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/lib-unarchive.sh"

if [ "$#" -lt 1 ]; then
    echo "Usage: $0 <request|move|all> <start_date> <end_date> <input_path> <input_pattern> <output_path>" >&2
    exit 1
fi
MODE="$1"; shift

case "$MODE" in
    request) exec "$HERE/unarchive-request.sh" "$@" ;;
    move)    exec "$HERE/unarchive-move.sh" "$@" ;;
    all)
        parse_args "$@"
        "$HERE/unarchive-request.sh" "$@"
        log "Waiting for restorations (every ${POLL_SECONDS}s)"
        until "$HERE/unarchive-move-status.sh" "$@" >/dev/null 2>&1; do
            "$HERE/unarchive-move.sh" "$@" || true
            log "Not complete yet, next check in ${POLL_SECONDS}s"
            sleep "$POLL_SECONDS"
        done
        "$HERE/unarchive-move.sh" "$@"
        log "Restore complete."
        ;;
    *) echo "Unknown mode: $MODE (expected request|move|all)" >&2; exit 1 ;;
esac
