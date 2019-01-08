#!/bin/bash

cd .kargo
set -a
. ./.env
set +a
cd ..

cd build/mapproxy
docker build --build-arg MAPPROXY_VERSION=$MAPPROXY_TAG -f dockerfile -t mapproxy:$MAPPROXY_TAG .
docker tag mapproxy:$MAPPROXY_TAG 127.0.0.1:5000/mapproxy:$MAPPROXY_TAG
docker push 127.0.0.1:5000/mapproxy:$MAPPROXY_TAG

