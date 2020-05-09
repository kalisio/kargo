#!/bin/bash
cd express-gateway
docker build --pull --force-rm --build-arg VERSION=$EXPRESS_GATEWAY_TAG -f dockerfile -t $EXPRESS_GATEWAY_IMAGE:$EXPRESS_GATEWAY_TAG .
docker push $EXPRESS_GATEWAY_IMAGE:$EXPRESS_GATEWAY_TAG
