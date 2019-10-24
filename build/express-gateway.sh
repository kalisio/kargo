#!/bin/bash
cd express-gateway
docker build --pull --force-rm --build-arg TAG=$EXPRESS_GATEWAY_TAG -f dockerfile -t localhost:5000/express-gateway:$EXPRESS_GATEWAY_TAG .
docker push localhost:5000/express-gateway:$EXPRESS_GATEWAY_TAG
