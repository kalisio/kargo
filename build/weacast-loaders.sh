#!/bin/bash
for WEACAST_MODEL in $WEACAST_MODELS; do
  TAG_NAME=${WEACAST_MODEL}_LOADER_TAG
  TAG=${!TAG_NAME}
  docker build https://github.com/weacast/weacast-loader.git -f dockerfile.$WEACAST_MODEL -t $WEACAST_MODEL-loader:$TAG
  docker tag $WEACAST_MODEL-loader:$TAG 127.0.0.1:5000/$WEACAST_MODEL-loader:$TAG
  docker push 127.0.0.1:5000/$WEACAST_MODEL-loader:$TAG
done
