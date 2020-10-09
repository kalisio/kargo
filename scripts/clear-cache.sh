#!/bin/bash

usage() {
  echo "usage: clear-cache <layer>"
}

help() {
  echo "Seeds the given layer up to the specified level using the specified number of threads"
  usage
}

exec() {
  local LAYER=$1
  echo Clearing $LAYER
  k-worker-foreach -c "sudo rm -fr $MAPCACHE_DATA_PATH/$LAYER/GLOBAL_WEBMERCATOR"
}

if [ "$#" -ne 1 ]; then
  echo error: illegal number of arguments
  usage
  exit 1
fi

case $1 in
  -h|--help) help;;
  *) exec "$1"
esac

