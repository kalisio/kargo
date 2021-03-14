#!/bin/bash
[[ ! -z "${K_POSTGIS-}" ]] && return
K_POSTGIS=1

# Include useful scripts
K_PATH=`dirname $0`
source ${K_PATH}/log.sh
source ${K_PATH}/file.sh

# Define common variables
K_POSTGIS_DOCKER_RUN="docker run --rm --network=${DOCKER_BACK_NETWORK} ${POSTGIS_IMAGE}:${POSTGIS_TAG}"

postgis_db_exists() {
  local DATABASE="$1"
  local PSQL="psql -d postgresql://${POSTGIS_USER}:${POSTGIS_PASSWORD}@postgis"
  
  local DATABASE_EXISTS=`${K_POSTGIS_DOCKER_RUN} ${PSQL} -tc "SELECT 1 FROM pg_database WHERE datname = '${DATABASE}'"`
  if [ -z "${DATABASE_EXISTS}" ]; then
    return 1
  else
    return 0
  fi
}

create_postgis_db() {
  local DATABASE="$1"
  local PSQL="psql -d postgresql://${POSTGIS_USER}:${POSTGIS_PASSWORD}@postgis"

  log_info creating database \"${DATABASE}\"
  ${K_POSTGIS_DOCKER_RUN} ${PSQL} -c "CREATE DATABASE ${DATABASE};"
}

create_postgis_user() {
  local USER="$1"
  local PASSWORD="$2"
  local DATABASE="$3"
  local PSQL="psql -d postgresql://${POSTGIS_USER}:${POSTGIS_PASSWORD}@postgis"

  log_info creating user \"${USER}\"
  ${K_POSTGIS_DOCKER_RUN} ${PSQL} -c "CREATE USER ${USER} WITH ENCRYPTED PASSWORD '${PASSWORD}';"
  ${K_POSTGIS_DOCKER_RUN} ${PSQL} -c "GRANT ALL PRIVILEGES ON DATABASE ${DATABASE} TO ${USER};"
}

drop_postgis_db() {
  local USER=$1
  local PSQL="psql -d postgresql://${POSTGIS_USER}:${POSTGIS_PASSWORD}@postgis"

  echo droping database \"${DATABASE}\"
  ${K_POSTGIS_DOCKER_RUN} ${PSQL} -c "DROP DATABASE ${DATABASE}"
}

drop_postgis_user() {
  local USER=$1
  local PSQL="psql -d postgresql://${POSTGIS_USER}:${POSTGIS_PASSWORD}@postgis"

  log_info droping user \"${USER}\"
  ${K_POSTGIS_DOCKER_RUN} ${PSQL} -c "DROP ROLE ${USER}"
}

backup_postgis_db() {
  local USER=$1
  local PASSWORD=$2
  local DATABASE=$3
  local DIRECTORY=$4

  if [ -d "$DIRECTORY" ]; then
    log_info backuping ${DATABASE} 
    ${K_POSTGIS_DOCKER_RUN} bash -c "pg_dump -Fc postgresql://${USER}:${PASSWORD}@postgis/${DATABASE} > /tmp/${DATABASE}.gz"
  else
    log_error error: the specified directory \"${DIRECTORY}\" does not exist
  fi
}

restore_postgis_db() {
  local USER=$1
  local PASSWORD=$2
  local DATABASE=$3
  local DIRECTORY=$4
  local BACKUP_FILE=${DIRECTORY}/${DATABASE}.gz

  if [ -f "${BACKUP_FILE}" ]; then
    log_info restoring ${DATABASE}
    ${K_POSTGIS_DOCKER_RUN} bash -c "pg_restore -d postgresql://${USER}:${PASSWORD}@postgis/${DATABASE} < /tmp/${DATABASE}.gz"
  else
    log_error error: the specified backup file \"${BACKUP_FILE}\" does not exist
  fi
}
