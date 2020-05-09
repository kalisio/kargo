#!/bin/bash
cd mapserver
docker build --pull --force-rm --build-arg VERSION=$MAPSERVER_TAG -f dockerfile -t localhost:5000/mapserver:$MAPSERVER_TAG .
docker push localhost:5000/mapserver:$MAPSERVER_TAG
