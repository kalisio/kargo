#!/bin/bash
MANAGER_IP=$1
WEACAST_MODELS=$2

# Build the images for the different models
for WEACAST_MODEL in $WEACAST_MODELS; do
  docker build https://github.com/weacast/weacast-loader.git -f dockerfile.$WEACAST_MODEL -t weacast-$WEACAST_MODEL
  docker tag weacast-$WEACAST_MODEL localhost:5000/weacast-$WEACAST_MODEL
  docker push localhost:5000/weacast-$WEACAST_MODEL
  sed -e "s/WEACAST_MODEL/$WEACAST_MODEL/g" -e "s/MANAGER_IP/$MANAGER_IP/g" scripts/weacast-loader.tpl > weacast-$WEACAST_MODEL.yml
done
