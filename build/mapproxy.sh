#!/bin/bash
cd mapproxy
docker build --pull --force-rm --build-arg VERSION=$MAPPROXY_TAG -f dockerfile -t localhost:5000/mapproxy:$MAPPROXY_TAG .
docker push localhost:5000/mapproxy:$MAPPROXY_TAG

