#!/bin/bash
set -a
. ./.env
set +a

EXISTING_DOCKER_NETWORK=`docker network ls | grep $DOCKER_NETWORK`
if [ "$EXISTING_DOCKER_NETWORK" = "" ]; then
  docker network create -d overlay --attachable $DOCKER_NETWORK
fi
docker stack deploy -c tileservergl.yml -c tileservergl.swarm.yml -c mapproxy.yml -c mapproxy.swarm.yml -c vigicrues.yml -c vigicrues.swarm.yml kargo

