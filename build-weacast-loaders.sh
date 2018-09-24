#!/bin/bash
set -a
. ./.env
set +a

# Build the images for the different models
for WEACAST_MODEL in $WEACAST_MODELS; do
  docker build https://github.com/weacast/weacast-loader.git -f dockerfile.$WEACAST_MODEL -t $WEACAST_MODEL-loader
  docker tag $WEACAST_MODEL-loader localhost:5000/weacast-$WEACAST_MODEL:latest
  docker push localhost:5000/$WEACAST_MODEL-loader:latest
done
