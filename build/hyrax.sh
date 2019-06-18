#!/bin/bash

echo Building HYRAX $HYRAX_TAG

GIT_URL=https://github.com/OPENDAP/hyrax-docker.git

# OLFS
docker build --pull --build-arg TAG=$HYRAX_TAG -t hyrax-olfs:$HYRAX_TAG $GIT_URL#:hyrax-${HYRAX_TAG}/olfs
docker tag hyrax-olfs:$HYRAX_TAG 127.0.0.1:5000/hyrax-olfs:$HYRAX_TAG
docker push 127.0.0.1:5000/hyrax-olfs:$HYRAX_TAG

# BES
docker build --pull --build-arg TAG=$HYRAX_TAG -t hyrax-bes:$HYRAX_TAG $GIT_URL#:hyrax-${HYRAX_TAG}/bes
docker tag hyrax-olfs:$HYRAX_TAG 127.0.0.1:5000/hyrax-bes:$HYRAX_TAG
docker push 127.0.0.1:5000/hyrax-bes:$HYRAX_TAG
