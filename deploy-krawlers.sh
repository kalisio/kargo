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
KRAWLER_SERVICES_TO_DEPLOY=
for KRAWLER_SERVICE in $KRAWLERS_STACK; do
  KRAWLER_SERVICES_TO_DEPLOY="$KRAWLER_SERVICES_TO_DEPLOY -c deploy/$KRAWLER_SERVICE.yml"
done
docker stack deploy $KRAWLER_SERVICES_TO_DEPLOY kargo-krawlers

