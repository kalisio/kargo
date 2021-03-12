#!/bin/bash
set -euo pipefail

create_postgis_db() {
  local USER=$1
  local PASSWORD=$2
  local DATABASE=$3
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} ${POSTGIS_IMAGE}:${POSTGIS_TAG}"
  local PSQL="psql -d postgresql://${POSTGIS_USER}:${POSTGIS_PASSWORD}@postgis"

  local DATABASE_EXISTS=`${DOCKER_RUN} ${PSQL} -tc "SELECT 1 FROM pg_database WHERE datname = '${DATABASE}'"`
  if [ -z "${DATABASE_EXISTS}" ]; then
    echo creating database \"${DATABASE}\"
    ${DOCKER_RUN} ${PSQL} -c "CREATE DATABASE ${DATABASE};"
    ${DOCKER_RUN} ${PSQL} -c "CREATE USER ${USER} WITH ENCRYPTED PASSWORD '${PASSWORD}';"
    ${DOCKER_RUN} ${PSQL} -c "GRANT ALL PRIVILEGES ON DATABASE ${DATABASE} TO ${USER};"
  else
    echo the database \"${DATABASE}\" already exists
  fi
}

create_mariadb_db() {
  local USER=$1
  local PASSWORD=$2
  local DATABASE=$3
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} ${MARIADB_IMAGE}:${MARIADB_TAG}"
  local MYSQL="mysql --host=mariadb --password=${MARIADB_ROOT_PASSWORD}"

  local DATABASE_EXISTS=`${DOCKER_RUN} ${MYSQL} --qfsBe "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME='${DATABASE}'"`
  if [ -z "${DATABASE_EXISTS}" ]; then
    echo creating database \"${DATABASE}\"
    ${DOCKER_RUN} ${MYSQL} "CREATE DATABASE ${DATABASE};"
    ${DOCKER_RUN} ${MYSQL} "CREATE USER '${USER}'@'localhost' IDENTIFIED BY '${PASSWORD}';"
    ${DOCKER_RUN} ${MYSQL} "GRANT ALL PRIVILEGES ON ${USER}.* TO '${USER}'@'localhost';"
    ${DOCKER_RUN} ${MYSQL} "FLUSH PRIVILEGES;"
  else
    echo the database \"${DATABASE}\" already exists
  fi
}

drop_postgis_db(){
  local USER=$1
  local DATABASE=$2
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} ${POSTGIS_IMAGE}:${POSTGIS_TAG}"
  local PSQL="psql -d postgresql://${POSTGIS_USER}:${POSTGIS_PASSWORD}@postgis"

  ${DOCKER_RUN} ${PSQL} -c "DROP DATABASE ${DATABASE}"
  ${DOCKER_RUN} ${PSQL} -c "DROP ROLE ${USER}"
}

drop_mariadb_db(){
  local DATABASE=$1
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} ${MARIADB_IMAGE}:${MARIADB_TAG}"
  local MYSQL="mysql --host=mariadb --password=${MARIADB_ROOT_PASSWORD}"

  ${DOCKER_RUN} ${MYSQL} "DROP DATABASE ${DATABASE};"
  ${DOCKER_RUN} ${MYSQL} "DROP ROLE ${USER}"
}

backup_postgis_db() {
  local USER=$1
  local PASSWORD=$2
  local DATABASE=$3
  local DIRECTORY=$4
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} --volume=${DIRECTORY}:/tmp ${POSTGIS_IMAGE}:${POSTGIS_TAG}"

  if [ -d "$DIRECTORY" ]; then
    echo backuping ${DATABASE} 
    ${DOCKER_RUN} bash -c "pg_dump -Fc postgresql://${USER}:${PASSWORD}@postgis/${DATABASE} > /tmp/${DATABASE}.gz"
  else
    echo error: the specified directory \"${DIRECTORY}\" does not exist
  fi
}

backup_mariadb_db() {
  local USER=$1
  local PASSWORD=$2
  local DATABASE=$3
  local DIRECTORY=$4
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} --volume=${DIRECTORY}:/tmp ${MARIADB_IMAGE}:${MARIADB_TAG}"

  if [ -d "$DIRECTORY" ]; then
    echo backuping ${DATABASE} 
    ${DOCKER_RUN} bash -c "mysqldump --host=mariadb --user=${USER} --password=${PASSWORD} ${DATABASE} | gzip -v > /tmp/${DATABASE}.gz"
  else
    echo error: the specified directory \"${DIRECTORY}\" does not exist
  fi
}

restore_postgis_db() {
  local USER=$1
  local PASSWORD=$2
  local DATABASE=$3
  local DIRECTORY=$4
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} --volume=${DIRECTORY}:/tmp ${POSTGIS_IMAGE}:${POSTGIS_TAG}"
  local BACKUP_FILE=${DIRECTORY}/${DATABASE}.gz

  if [ -f "${BACKUP_FILE}" ]; then
    echo restoring ${DATABASE}
    ${DOCKER_RUN} bash -c "pg_restore -d postgresql://${USER}:${PASSWORD}@postgis/${DATABASE} < /tmp/${DATABASE}.gz"
  else
    echo error: the specified backup file \"${BACKUP_FILE}\" does not exist
  fi
}

restore_mariadb_db() {
  local USER=$1
  local PASSWORD=$2
  local DATABASE=$3
  local DIRECTORY=$4
  local DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} --volume=${DIRECTORY}:/tmp ${MARIADB_IMAGE}:${MARIADB_TAG}" 
  local BACKUP_FILE=${DIRECTORY}/${DATABASE}.gz

  if [ -f "${BACKUP_FILE}" ]; then
    echo restoring ${DATABASE}
    ${DOCKER_RUN} bash -c "gunzip < /tmp/${DATABASE}.gz | mysql --host=mariadb --user=${USER} --password=${PASSWORD} ${DATABASE}"
  else
    echo error: the specified backup file \"${BACKUP_FILE}\" does not exist
  fi
}
