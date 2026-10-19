#!/usr/bin/env bash
set -euo pipefail
# Usage: ./unarchive.sh <request|move|all> <start> <end> <input_path> <pattern> <output_path>
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/lib-unarchive.sh"

if [ "$#" -lt 1 ]; then
    echo "Usage: $0 <request|move|all> <start_date> <end_date> <input_path> <input_pattern> <output_path>" >&2
    exit 2
fi
MODE="$1"; shift
case "$MODE" in
    request|move|all) ;;
    *) die 2 "unknown mode '$MODE' (expected request|move|all)" ;;
esac
check_setup
parse_args "$@"

case "$MODE" in
    request) run_request ;;
    move)    run_move ;;
    all)
        "$HERE/unarchive.sh" request "$@"
        status=0
        until "$HERE/unarchive-status.sh" move "$@" || { status=$?; [ "$status" -eq 2 ] && exit 2; false; }; do
            log "Not complete yet (status $status), next check in ${POLL_SECONDS}s"
            sleep "$POLL_SECONDS"
        done
        log "Unarchiving complete."
        ;;
esac
