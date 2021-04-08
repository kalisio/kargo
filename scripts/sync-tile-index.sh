#!/usr/bin/env bash
set -euo pipefail

source ${KARGO_SCRIPTS_PATH}/mapserver.sh

usage()
{
    echo "Sync a tile index located on an object storage bucket."
    echo
    echo "Syntax: $0 bucket prefix"
    echo
    echo "  bucket    a string pointing to the bucket where tile index files"
    echo "            are located, eg. aws:some/path/foo"
    echo "  prefix    a string to use as tile index file prefix, ie. the"
    echo "            fetched tile index file will be named \$prefix.shp"
    echo
}

if [ "$#" -eq 1 ] && [ "${1:-}" == "-h" ]; then
    usage
    exit 0
fi

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 bucket prefix"
    exit 1
fi

BUCKET=$1
TILE_INDEX_PREFIX=$2

sync_remote_tile_index $BUCKET/$TILE_INDEX_PREFIX
