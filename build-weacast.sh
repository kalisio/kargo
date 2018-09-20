#!/bin/bash
set -a
. ./.env
set +a

# Build the images for the different models
for WEACAST_MODEL in $WEACAST_STACK; do
  docker build https://github.com/weacast/weacast-loader.git -f dockerfile.$WEACAST_MODEL -t weacast-$WEACAST_MODEL
  docker tag weacast-$WEACAST_MODEL localhost:5000/weacast-$WEACAST_MODEL:latest
  docker push localhost:5000/weacast-$WEACAST_MODEL:latest
  sed -e "s/WEACAST_MODEL/$WEACAST_MODEL/g" build/weacast-loader.tpl > deploy/$WEACAST_MODEL.yml
done
