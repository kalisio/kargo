#!/bin/bash
cd weacast-api
# Create the archives to be merged 
tar cvf src.tgz src
tar cvf config.tgz config
# Build the image
docker build --pull --build-arg TAG=$WEACAST_TAG -f dockerfile -t localhost:5000/kano:$WEACAST_TAG .
docker push localhost:5000/weacast-api:$WEACAST_TAG
