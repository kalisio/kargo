#!/usr/bin/env bash
set -euo pipefail

usage()
{
    echo "Generates tile index from files located on an object storage bucket."
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

# split bucket at ':' to get object storage source and path
SOURCE=$(echo $BUCKET | awk -F ':' '{ print $1 }')
BUCKET_PATH=$(echo $BUCKET | awk -F ':' '{ print $2 }')

# generates a temp working directory
WORK_DIR=$(mktemp -d --tmpdir mktileindex.XXXXXX)

# list files in bucket
printf "Listing files on the bucket ...\n"
rclone lsf -R --files-only $1 > $WORK_DIR/tiles.lst
# patch the tile list to allow gdal virtual access using vsis3
sed -i -e "s#^\(.*\)\$#/vsis3/$BUCKET_PATH/\1#" $WORK_DIR/tiles.lst

# fetch required env vars to access the object storage
RCLONE_SECTION=$(cat $HOME/.config/rclone/rclone.conf | grep -A 10 "\[$SOURCE\]")
AWS_S3_ENDPOINT=$(echo "$RCLONE_SECTION" | grep "endpoint" | awk -F '=' '{ print $2 }' | xargs)
AWS_REGION=$(echo "$RCLONE_SECTION" | grep "region" | awk -F '=' '{ print $2 }' | xargs)
AWS_SECRET_ACCESS_KEY=$(echo "$RCLONE_SECTION" | grep "secret_access_key" | awk -F '=' '{ print $2 }' | xargs)
AWS_ACCESS_KEY_ID=$(echo "$RCLONE_SECTION" | grep "access_key_id" | awk -F '=' '{ print $2 }' | xargs)

# run gdaltindex from gdal docker
printf "Generating tile index ...\n"
docker run \
    -e AWS_S3_ENDPOINT="$AWS_S3_ENDPOINT" \
    -e AWS_REGION="$AWS_REGION" \
    -e AWS_SECRET_ACCESS_KEY="$AWS_SECRET_ACCESS_KEY" \
    -e AWS_ACCESS_KEY_ID="$AWS_ACCESS_KEY_ID" \
    -v $WORK_DIR:/data \
    -w /data \
    kalisio/gdal:3.1.2 \
    gdaltindex \
    -tileindex location \
    -t_srs EPSG:4326 \
    -src_srs_name tile_srs \
    -src_srs_format EPSG \
    $TILE_INDEX_PREFIX.shp \
    --optfile tiles.lst

printf "All good, tile index is here: %s\n" $WORK_DIR/$TILE_INDEX_PREFIX.shp
