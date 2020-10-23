#!/bin/bash

usage() {
  echo "usage: seed-cache <nb-threads> <layer> <min-level> <max-level> [extent]"
}

help() {
  echo "Seeds the given layer up to the specified level using the specified number of threads"
  usage
}

exec() {
  local NB_THREADS=$1
  local LAYER=$2
  local MIN_LEVEL=$3
  local MAX_LEVEL=$4
  local EXTENT=$5
  echo "Seeding $LAYER with $NB_THREADS threads (levels $MIN_LEVEL to $MAX_LEVEL / extent: $EXTENT)"
  local CONFIG_PATH=`pwd`/../configs/mapcache
  k-worker-foreach -c "docker run -d --rm --network=$DOCKER_NETWORK --user=www-data:www-data --volume=$MAPCACHE_DATA_PATH:/mnt/data --volume=$CONFIG_PATH:/etc/mapcache kalisio/mapcache:1.10 mapcache_seed -c /etc/mapcache/mapcache.xml -t $LAYER -z $MIN_LEVEL,$MAX_LEVEL -n $NB_THREADS -e $EXTENT"
}

if [ "$#" -ne 4 ] && [ "$#" -ne 5 ]; then
  echo error: illegal number of arguments
  usage
  exit 1
fi

case $1 in
  -h|--help) help;;
  *) exec "$1" "$2" "$3" "$4" "$5"
esac

