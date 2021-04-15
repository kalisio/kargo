#!/bin/bash
[[ ! -z "${K_MAPCACHE-}" ]] && return
K_MAPCACHE=1

# Include useful scripts
source ${KARGO_SCRIPTS_PATH}/log.sh
source ${KARGO_SCRIPTS_PATH}/file.sh
source ${KARGO_SCRIPTS_PATH}/swarm.sh

# Define common variables
K_MAPCACHE_CONFIG_PATH="${KARGO_BUILD_PATH}/configs/mapcache"
K_MAPCACHE_DOCKER_RUN="docker run --rm \
    --network=${DOCKER_BACK_NETWORK} \
    --user=www-data:www-data \
    --volume=${MAPCACHE_DATA_PATH}:/mnt/data \
    --volume=${K_MAPCACHE_CONFIG_PATH}:/etc/mapcache \
    ${MAPCACHE_IMAGE}:${MAPCACHE_TAG}"

check_mapcache_area_file() {
    # Make sure ${AREA} file is in the mapcache config folder
    local FILENAME=${K_MAPCACHE_CONFIG_PATH}/$1
    if ! file_exists $FILENAME; then
        log_error \"$1\" file must be located in ${K_MAPCACHE_CONFIG_PATH}
        return 1
    fi

    return 0
}

delete_mapcache_tiles() {
    local LAYER=$1
    local FROM_Z=$2
    local TO_Z=$3
    local AREA=${4:-}

    local MAPCACHE_SEED="mapcache_seed -c /etc/mapcache/mapcache.xml -t ${LAYER} -z ${FROM_Z},${TO_Z} -m delete"
    if [ -z "${AREA}" ]; then
        log_info deleting ${LAYER} [${FROM_Z} ${TO_Z}] over the planet
        ${K_MAPCACHE_DOCKER_RUN} ${MAPCACHE_SEED}
    else
        if ! check_mapcache_area_file ${AREA}; then
            return 1
        fi
        log_info deleting ${LAYER} [${FROM_Z} ${TO_Z}] over ${AREA}
        ${K_MAPCACHE_DOCKER_RUN} ${MAPCACHE_SEED} -d ${AREA}
    fi
}

seed_mapcache_tiles() {
    local LAYER=$1
    local FROM_Z=$2
    local TO_Z=$3
    local NUM_THREADS=$4
    local AREA=${5:-}

    local MAPCACHE_SEED="mapcache_seed -c /etc/mapcache/mapcache.xml -t ${LAYER} -z ${FROM_Z},${TO_Z} -n ${NUM_THREADS} -m seed"
    if [ -z "${AREA}" ]; then
        log_info seeding ${LAYER} [${FROM_Z} ${TO_Z}] over the planet
        ${K_MAPCACHE_DOCKER_RUN} ${MAPCACHE_SEED}
    else
        if ! check_mapcache_area_file ${AREA}; then
            return 1
        fi
        log_info seeding ${LAYER} [${FROM_Z} ${TO_Z}] over ${AREA}
        ${K_MAPCACHE_DOCKER_RUN} ${MAPCACHE_SEED} -d ${AREA}
    fi
}
