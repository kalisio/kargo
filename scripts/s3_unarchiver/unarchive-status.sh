#!/usr/bin/env bash
set -euo pipefail
# Status entry point. Routes to the restoration status or the move status.
# Usage: ./unarchive-status.sh <request|move> <start> <end> <in_path> <pattern> <out_path>
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [ "$#" -lt 1 ]; then
    echo "Usage: $0 <request|move> <start_date> <end_date> <input_path> <input_pattern> <output_path>" >&2
    exit 1
fi
WHICH="$1"; shift
case "$WHICH" in
    request) exec "$HERE/unarchive-request-status.sh" "$@" ;;
    move)    exec "$HERE/unarchive-move-status.sh" "$@" ;;
    *) echo "Unknown status target: $WHICH (expected request|move)" >&2; exit 1 ;;
esac
