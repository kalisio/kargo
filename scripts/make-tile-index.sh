#!/usr/bin/env bash
set -euo pipefail

source ${KARGO_SCRIPTS_PATH}/file.sh
source ${KARGO_SCRIPTS_PATH}/gdal.sh

usage()
{
    echo "Generates a tile index from files located on an object storage bucket."
    echo
    echo "Syntax: $0 bucket prefix"
    echo
    echo "  bucket    a string pointing to the bucket where files are located"
    echo "            located, eg. aws:some/path/foo"
    echo "  prefix    a string to use as tile index file prefix, ie. the"
    echo "            generated tile index file will be named \$prefix.shp"
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

# expects something like scw:kalisio-map-data/blabla/foo
BUCKET=${1:-}
TILE_INDEX_PREFIX=${2:-tile_index}

# create a temp folder where to put output tile index
TILE_INDEX_PATH=$(make_temp_directory mktileindex)/${TILE_INDEX_PREFIX}

make_tile_index_from_remote_folder ${BUCKET} ${TILE_INDEX_PATH}
