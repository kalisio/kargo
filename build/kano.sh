#!/bin/bash
cd kano
# Create the archive to be merged 
tar cvf kano.tgz -C ../../configs/kano .
# Build the image
docker build --pull --force-rm --build-arg TAG=$KANO_TAG --build-arg SUBDOMAIN --build-arg NODE_APP_INSTANCE --build-arg NODE_ENV -f dockerfile -t $KANO_IMAGE:$KANO_TAG .
if [ -n "$REGISTRY_USERNAME" ]; then
    # Extract registry url from image
    REGISTRY_URL=$(echo $KANO_IMAGE | awk -F '/' '{ print $1 }')
    docker login "$REGISTRY_URL" -u "$REGISTRY_USERNAME" -p "$REGISTRY_PASSWORD"
fi
docker push $KANO_IMAGE:$KANO_TAG
