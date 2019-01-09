#!/bin/bash
cd geoserver
docker build --build-arg VERSION=$GEOSERVER_TAG  --build-arg "PLUGINS=$GEOSERVER_PLUGINS" -f dockerfile -t geoserver:$GEOSERVER_TAG .
docker tag geoserver:$GEOSERVER_TAG 127.0.0.1:5000/geoserver:$GEOSERVER_TAG
docker push 127.0.0.1:5000/geoserver:$GEOSERVER_TAG

