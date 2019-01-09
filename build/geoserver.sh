#!/bin/bash
cd .kargo
set -a
. ./.kargo/.env
set +a
cd ..

cd build/geoserver
docker build --build-arg VERSION=$TAG_VERSION --build-arg "PLUGINS=$GEOSERVER_PLUGINS" -f dockerfile -t geoserver:$TAG_VERSION .
docker tag geoserver:$TAG_VERSION 127.0.0.1:5000/geoserver:$TAG_VERSION
docker push 127.0.0.1:5000/geoserver:$TAG_VERSION

