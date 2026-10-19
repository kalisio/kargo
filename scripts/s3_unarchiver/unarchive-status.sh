#!/usr/bin/env bash
set -euo pipefail
# Usage: ./unarchive-status.sh <request|move> <start> <end> <input_path> <pattern> <output_path>
# Exits 0 once everything is restored (request) or in the hot zone (move).
# HEAL=false for a read-only check.
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
. "$HERE/lib-unarchive.sh"

if [ "$#" -lt 1 ]; then
    echo "Usage: $0 <request|move> <start_date> <end_date> <input_path> <input_pattern> <output_path>" >&2
    exit 2
fi
WHICH="$1"; shift
case "$WHICH" in
    request|move) ;;
    *) die 2 "unknown status target '$WHICH' (expected request|move)" ;;
esac
check_setup
parse_args "$@"

case "$WHICH" in
    request) status_request ;;
    move)    status_move ;;
esac
