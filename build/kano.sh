#!/bin/bash
cd kano
# Create the archive to be merged 
tar cvf kano.tgz ../../configs/kano
# Build the image
docker build --pull --build-arg TAG=$KANO_TAG -f dockerfile -t localhost:5000/kano:$KANO_TAG .
docker push localhost:5000/kano:$KANO_TAG
