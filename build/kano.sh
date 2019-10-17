#!/bin/bash
cd kano
# Create the archives to be merged 
tar cvf src.tgz src
tar cvf config.tgz config
# Build the image
docker build --pull --build-arg TAG=$KANO_TAG -f dockerfile -t localhost:5000/kano:$KANO_TAG .
docker push localhost:5000/kano:$KANO_TAG
