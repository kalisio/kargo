#!/bin/bash

LAYER=$1
LEVEL=${2:-9}
THREADS=${3:-4}

echo Seeding $LAYER up to $LEVEL with $THREADS threads
k-worker-foreach -c "docker run -d --rm --network=$DOCKER_NETWORK --user=www-data:www-data --volume=$MAPCACHE_DATA_PATH:/mnt/data --volume=/mnt/share/kargo/.kargo/configs/mapcache:/etc/mapcache kalisio/mapcache:1.10 mapcache_seed -c /etc/mapcache/mapcache.xml -t $LAYER -z0,$LEVEL -n $THREADS"

