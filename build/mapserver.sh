#!/bin/bash
cd mapserver
docker build --pull --build-arg TAG=$MAPSERVER_TAG -f dockerfile -t mapserver:$MAPSERVER_TAG .
docker tag mapserver:$MAPSERVER_TAG 127.0.0.1:5000/mapserver:$MAPSERVER_TAG
docker push 127.0.0.1:5000/mapserver:$MAPSERVER_TAG
