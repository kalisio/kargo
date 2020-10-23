
#!/bin/bash

usage() {
  echo "usage: seed-cache <options...>"
}

help() {
  echo "Seeds the given layer using the given options"
  usage
}

exec() {
  local OPTIONS=$@
  echo "Seeding with options $OPTIONS"
  local CONFIG_PATH=`pwd`/../configs/mapcache
  k-worker-foreach -c "docker run -d --rm --network=$DOCKER_NETWORK --user=www-data:www-data --volume=$MAPCACHE_DATA_PATH:/mnt/data --volume=$CONFIG_PATH:/etc/mapcache kalisio/mapcache:1.10 mapcache_seed -c /etc/mapcache/mapcache.xml $OPTIONS"
}

if [ $# -eq 0 ]; then
    usage
    exit 1
fi

case $1 in
  -h|--help) help;;
  *) exec "$@"
esac

