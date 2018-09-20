#!/bin/bash
set -a
. ./.env
set +a

# Check whether the network exist or not.
EXISTING_DOCKER_NETWORK=`docker network ls | grep $DOCKER_NETWORK`
if [ "$EXISTING_DOCKER_NETWORK" = "" ]; then
  docker network create -d overlay --attachable $DOCKER_NETWORK
fi

# Deploy the required services only
DB_SERVICES_TO_DEPLOY=
for DB_SERVICE in $DBS_STACK; do
  DB_SERVICES_TO_DEPLOY="$DB_SERVICES_TO_DEPLOY -c stacks/dbs/$DB_SERVICE.yml"
done
docker stack deploy $DB_SERVICES_TO_DEPLOY kargo-dbs


