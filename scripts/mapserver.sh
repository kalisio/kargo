#!/bin/bash
[[ ! -z "${K_MAPSERVER-}" ]] && return
K_MAPSERVER=1

# Include useful scripts
source ${KARGO_SCRIPTS_PATH}/log.sh
source ${KARGO_SCRIPTS_PATH}/rclone.sh
source ${KARGO_SCRIPTS_PATH}/swarm.sh

sync_remote_tile_index() {
    local REMOTE_TILE_INDEX=$1

    local TILE_INDEX=$(basename ${REMOTE_TILE_INDEX})
    local REMOTE=$(echo ${REMOTE_TILE_INDEX} | awk -F ':' '{ print $1 }')
    local SOURCE=$(echo ${REMOTE_TILE_INDEX} | awk -F ':' '{ print $2 }')

    # copy tile index files to mapserver data path
    for EXT in shp shx dbf prj; do
        copy_from_remote ${REMOTE} ${SOURCE}.${EXT} ${MAPSERVER_DATA_PATH}
    done

    # run shptree
    local DOCKER_ID=$(docker_id_from_name mapserver)
    docker exec -w /mnt/data ${DOCKER_ID} shptree ${TILE_INDEX}.shp
    # update owner
    sudo chown $USER:$USER $MAPSERVER_DATA_PATH/$TILE_INDEX.qix
}
