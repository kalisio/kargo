#!/bin/bash
cd weacast-api
# Create the archive to be merged 
tar cvf weacast.tgz ../../configs/weacast
# Build the image
docker build --pull --force-rm --build-arg TAG=$WEACAST_TAG -f dockerfile -t localhost:5000/weacast-api:$WEACAST_TAG .
docker push localhost:5000/weacast-api:$WEACAST_TAG
