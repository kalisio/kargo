#!/bin/bash
cd kano
tar cvf src.tgz src
docker build --build-arg TAG=$KANO_TAG -f dockerfile -t kano:$KANO_TAG .
docker tag kano:$KANO_TAG 127.0.0.1:5000/kano:$KANO_TAG
docker push 127.0.0.1:5000/kano:$KANO_TAG
