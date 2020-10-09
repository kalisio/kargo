#!/bin/bash

usage() {
  echo "usage: seed-cache <layer> <max-level> <nb-threads>"
}

help() {
  echo "Seeds the given layer up to the specified level using the specified number of threads"
  usage
}

exec() {
  local LAYER=$1
  local MAX_LEVEL=$2
  local NB_THREADS=$3
  echo Seeding $LAYER up to $MAX_LEVEL level with $NB_THREADS threads
  local CONFIG_PATH=`pwd`/../configs/mapcache
  k-worker-foreach -c "docker run -d --rm --network=$DOCKER_NETWORK --user=www-data:www-data --volume=$MAPCACHE_DATA_PATH:/mnt/data --volume=$CONFIG_PATH:/etc/mapcache kalisio/mapcache:1.10 mapcache_seed -c /etc/mapcache/mapcache.xml -t $LAYER -z0,$MAX_LEVEL -n $NB_THREADS"
}

if [ "$#" -ne 3 ]; then
  echo error: illegal number of arguments
  usage
  exit 1
fi

case $1 in
  -h|--help) help;;
  *) exec "$1" "$2" "$3"
esac

