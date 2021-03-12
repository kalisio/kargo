#!/bin/bash
set -euo pipefail

usage() {
  echo "usage: drop-database <postgis|mariadb> <database>"
}

help() {
  echo "Drop the specified database"
}

exec() {
  local MANAGER=$1
  local DATABASE=$3
  local MANAGER_IMAGE=${MANAGER^^}_IMAGE
  local MANAGER_TAG=${MANAGER^^}_TAG
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} ${!MANAGER_IMAGE}:${!MANAGER_TAG}"

  local MYSQL="mysql --host=mariadb --password=${MARIADB_ROOT_PASSWORD}"
  local PSQL="psql -d postgresql://${POSTGIS_USER}:${POSTGIS_PASSWORD}@postgis"

  if [ $MANAGER = "mariadb" ]; then
    ${DOCKER_RUN} ${MYSQL} "CREATE DATABASE ${DATABASE};"
  else
    ${DOCKER_RUN} ${PSQL} -c "dropdb -f ${DATABASE}"
  fi
}

if [ "$#" -ne 2 ]; then
  echo error: illegal number of arguments
  usage
  exit 1
fi

case $1 in
  -h|--help) help;;
  postgis) exec "$1" "$2";;
  mariadb) exec "$1" "$2";;
  *) usage
esac