#!/bin/bash
set -a
. ./.env
set +a

# Check whether the network exist or not.
EXISTING_DOCKER_NETWORK=`docker network ls | grep $DOCKER_NETWORK`
if [ "$EXISTING_DOCKER_NETWORK" = "" ]; then
  docker network create -d overlay --attachable $DOCKER_NETWORK
fi

STACK_NAME_UPPERCASE=${1^^}
STACK_SERVICES=${!STACK_STACK_NAME_UPPERCASE}

# Deploy the required services only
SERVICES_TO_DEPLOY=
for SERVICE in $STACK_SERVICES; do
  SERVICES_TO_DEPLOY="$SERVICES_TO_DEPLOY -c deploy/$SERVICE.yml"
done
docker stack deploy $SERVICES_TO_DEPLOY kargo-$1

