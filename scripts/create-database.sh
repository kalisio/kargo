#!/bin/bash
set -euo pipefail

usage() {
  echo "usage: create-database <postgis|mariadb> <database>"
}

help() {
  echo "Create the specified database"
}

exec_postgis() {
  local DATABASE=$1
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} ${POSTGIS_IMAGE}:${POSTGIS_TAG}"
  local PSQL="psql postgresql://${POSTGIS_USER}:${POSTGIS_PASSWORD}@postgis/${POSTGIS_DATABASE}"

  local DATABASE_EXIST=`${DOCKER_RUN} ${PSQL} -tc "SELECT 1 FROM pg_database WHERE datname = '${DATABASE}'"`
  if [ -z "${DATABASE_EXIST}" ]; then
    echo creating database \"${DATABASE}\"
    ${DOCKER_RUN} ${PSQL} -c "CREATE DATABASE ${DATABASE};"
  else
    echo the database \"${DATABASE}\" already exists
  fi
}

exec_mariadb() {
  local DATABASE=$1
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} ${MARIADB_IMAGE}:${MARIADB_TAG}"
  local PSQL="psql postgresql://${POSTGIS_USER}:${POSTGIS_PASSWORD}@mariadb/${POSTGIS_DATABASE}"

  local DATABASE_EXIST=`${DOCKER_RUN} ${PSQL} -tc "SELECT 1 FROM pg_database WHERE datname = '${DATABASE}'"`
  if [ -z "${DATABASE_EXIST}" ]; then
    echo creating database \"${DATABASE}\"
    ${DOCKER_RUN} ${PSQL} -c "CREATE DATABASE ${DATABASE};"
  else
    echo the database \"${DATABASE}\" already exists
  fi
}

if [ "$#" -ne 2 ]; then
  echo error: illegal number of arguments
  usage
  exit 1
fi

case $1 in
  -h|--help) help;;
  postgis) exec_postgis "$2";;
  mariadb) exec_mariadb "$2";;
  *) usage
esac
