#!/bin/bash
set -euo pipefail

usage() {
  echo "usage: backup-postgis-db <database> <directory>"
}

help() {
  echo "Backup the specified Postgres/Postgis database"
}

exec() {
  local DATABASE=$1
  local DIRECTORY=$2
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} --volume=${DIRECTORY}:/tmp ${POSTGIS_IMAGE}:${POSTGIS_TAG}"
  
  if [ -d "$DIRECTORY" ]; then
    echo backuping ${DATABASE}
    ${DOCKER_RUN} bash -c "pg_dump -Ft postgresql://${POSTGIS_USER}:${POSTGIS_PASSWORD}@postgis/${DATABASE} > /tmp/${DATABASE}.tar"
  else
    echo error: the specified directory \"$DIRECTORY\" does not exist
  fi
}

if [ "$#" -ne 2 ]; then
  echo error: illegal number of arguments
  usage
  exit 1
fi

case $1 in
  -h|--help) help;;
  *) exec "$1" "$2"
esac
