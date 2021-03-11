#!/bin/bash
set -euo pipefail

usage() {
  echo "usage: create-database <postgis|mariadb> <user> <password> <database>"
}

help() {
  echo "Create the specified database"
}

exec() {
  local MANAGER=$1
  local USER=$2
  local PASSWORD=$3
  local DATABASE=$4
  local MANAGER_IMAGE=${MANAGER^^}_IMAGE
  local MANAGER_TAG=${MANAGER^^}_TAG
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} ${!MANAGER_IMAGE}:${!MANAGER_TAG}"

  local MYSQL="mysql --host=mariadb --password=${MARIADB_ROOT_PASSWORD}"
  local PSQL="psql -d postgresql://${POSTGIS_USER}:${POSTGIS_PASSWORD}@postgis"

  local DATABASE_EXISTS   
  if [ $MANAGER = "mariadb" ]; then
    SQL_COMMAND="mysql --host=mariadb --user=${USER} --password=${PASSWORD}"
    DATABASE_EXISTS=`${DOCKER_RUN} ${MYSQL} --qfsBe "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME='${DATABASE}'"`
  else
    DATABASE_EXISTS=`${DOCKER_RUN} ${PSQL} -tc "SELECT 1 FROM pg_database WHERE datname = '${DATABASE}'"`
  fi
  if [ -z "${DATABASE_EXISTS}" ]; then
    echo creating database \"${DATABASE}\"
    if [ $MANAGER = "mariadb" ]; then
      ${DOCKER_RUN} ${MYSQL} "CREATE DATABASE ${DATABASE};"
      ${DOCKER_RUN} ${MYSQL} "CREATE USER '${USER}'@'localhost' IDENTIFIED BY '${PASSWORD}';"
      ${DOCKER_RUN} ${MYSQL} "GRANT ALL PRIVILEGES ON ${USER}.* TO '${USER}'@'localhost';"
      ${DOCKER_RUN} ${MYSQL} "FLUSH PRIVILEGES;"
    else
      ${DOCKER_RUN} ${PSQL} -c "CREATE DATABASE ${DATABASE};"
      ${DOCKER_RUN} ${PSQL} -c "CREATE USER ${USER} WITH ENCRYPTED PASSWORD '${PASSWORD}';"
      ${DOCKER_RUN} ${PSQL} -c "GRANT ALL PRIVILEGES ON DATABASE ${DATABASE} TO ${USER};"
    fi
  else
    echo the database \"${DATABASE}\" already exists
  fi
}

if [ "$#" -ne 4 ]; then
  echo error: illegal number of arguments
  usage
  exit 1
fi

case $1 in
  -h|--help) help;;
  postgis) exec "$1" "$2" "$3" "$4";;
  mariadb) exec "$1" "$2" "$3" "$4";;
  *) usage
esac
