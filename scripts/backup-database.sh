#!/bin/bash
set -euo pipefail

usage() {
  echo "usage: backup-database <postgis|mariadb> <user> <password> <database> <directory>"
}

help() {
  echo "Backup the specified database"
}

exec() {
  local MANAGER=$1
  local USER=$2
  local PASSWORD=$3
  local DATABASE=$4
  local DIRECTORY=$5
    
  if [ -d "$DIRECTORY" ]; then
    local MANAGER_IMAGE=${MANAGER^^}_IMAGE
    local MANAGER_TAG=${MANAGER^^}_TAG
    local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} --volume=${DIRECTORY}:/tmp ${!MANAGER_IMAGE}:${!MANAGER_TAG}"

    echo backuping ${DATABASE} 
    if [ $MANAGER = "mariadb" ]; then
      ${DOCKER_RUN} bash -c "mysqldump --host=mariadb --user=${USER} --password=${PASSWORD} ${DATABASE} > /tmp/${DATABASE}.sql"
    else # postgis
      ${DOCKER_RUN} bash -c "pg_dump -Ft postgresql://${USER}:${PASSWORD}@postgis/${DATABASE} > /tmp/${DATABASE}.tar"
    fi
  else
    echo error: the specified directory \"${DIRECTORY}\" does not exist
  fi
}

if [ "$#" -ne 5 ]; then
  echo error: illegal number of arguments
  usage
  exit 1
fi

case $1 in
  -h|--help) help;;
  postgis) exec "$1" "$2" "$3" "$4" "$5";;
  mariadb) exec "$1" "$2" "$3" "$4" "$5";;
  *) usage
esac
