#!/bin/bash
cd kano
# Create the archives to be merged 
tar cvf src.tgz src
tar cvf config.tgz config
# Build the image
docker build --build-arg TAG=$KANO_TAG -f dockerfile -t kano:$KANO_TAG .
docker tag kano:$KANO_TAG 127.0.0.1:5000/kano:$KANO_TAG
docker push 127.0.0.1:5000/kano:$KANO_TAG
