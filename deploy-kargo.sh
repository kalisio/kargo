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
SERVICES_TO_DEPLOY=
for SERVICE in $SERVICES; do
  SERVICES_TO_DEPLOY="$SERVICES_TO_DEPLOY -c $SERVICE.yml"
done
docker stack deploy $SERVICES_TO_DEPLOY kargo


