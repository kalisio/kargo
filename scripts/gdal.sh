#!/usr/bash
[[ ! -z "${K_GDAL-}" ]] && return
K_GDAL=1

# Include useful scripts
source ${KARGO_SCRIPTS_PATH}/log.sh

make_tile_index_from_remote_directory() {
    local BUCKET=$1
    local OUTPUT_PREFIX=$2

    # split bucket at ':' to get object storage source and path
    local REMOTE=$(echo ${BUCKET} | awk -F ':' '{ print $1 }')
    local SOURCE=$(echo ${BUCKET} | awk -F ':' '{ print $2 }')

    # split to get output directory and tile index prefix
    local WORK_DIR=$(dirname ${OUTPUT_PREFIX})
    local TILE_INDEX_NAME=$(basename ${OUTPUT_PREFIX})
    
    # list files in bucket
    log_info Listing files on ${BUCKET} ...
    rclone lsf -R --files-only ${BUCKET} > ${WORK_DIR}/tiles.lst
    # patch the tile list to allow gdal virtual access using vsis3
    sed -i -e "s#^\(.*\)\$#/vsis3/${SOURCE}/\1#" ${WORK_DIR}/tiles.lst

    # fetch required env vars to access the object storage
    AWS_S3_ENDPOINT=$(rclone config dump | jq -r ".${REMOTE}.endpoint")
    AWS_REGION=$(rclone config dump | jq -r ".${REMOTE}.region")
    AWS_SECRET_ACCESS_KEY=$(rclone config dump | jq -r ".${REMOTE}.secret_access_key")
    AWS_ACCESS_KEY_ID=$(rclone config dump | jq -r ".${REMOTE}.access_key_id")

    # run gdaltindex from gdal docker
    log_info Generating tile index ...
    docker run \
        -e AWS_S3_ENDPOINT="${AWS_S3_ENDPOINT}" \
        -e AWS_REGION="${AWS_REGION}" \
        -e AWS_SECRET_ACCESS_KEY="${AWS_SECRET_ACCESS_KEY}" \
        -e AWS_ACCESS_KEY_ID="${AWS_ACCESS_KEY_ID}" \
        -v ${WORK_DIR}:/data \
        -w /data \
        kalisio/gdal:3.1.2 \
        gdaltindex \
        -tileindex location \
        -t_srs EPSG:4326 \
        -src_srs_name tile_srs \
        -src_srs_format EPSG \
        ${TILE_INDEX_NAME}.shp \
        --optfile tiles.lst

    log_info All good, tile index is here: ${WORK_DIR}/${TILE_INDEX_NAME}.shp   
}
