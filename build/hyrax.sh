#!/bin/bash

# OLFS
OLFS_GIT_URL=https://github.com/OPENDAP/hyrax-docker/hyrax-${HYRAX_TAG}/hyrax/olfs/Dockerfile

docker build --pull --build-arg TAG=$HYRAX_TAG -f dockerfile -t hyrax-olfs:$HYRAX_TAG $OLFS_GIT_URL
docker tag hyrax-olfs:$HYRAX_TAG 127.0.0.1:5000/hyrax-olfs:$HYRAX_TAG
docker push 127.0.0.1:5000/hyrax-olfs:$HYRAX_TAG

# BES
BES_GIT_URL=https://github.com/OPENDAP/hyrax-docker/hyrax-${HYRAX_TAG}/hyrax/bes/Dockerfile

docker build --pull --build-arg TAG=$HYRAX_TAG -f dockerfile -t hyrax-bes:$HYRAX_TAG $BES_GIT_URL
docker tag hyrax-olfs:$HYRAX_TAG 127.0.0.1:5000/hyrax-bes:$HYRAX_TAG
docker push 127.0.0.1:5000/hyrax-bes:$HYRAX_TAG
