#!/bin/bash
cd maputnik
docker build --build-arg VERSION=$TAG_VERSION -f dockerfile -t maputnik:$TAG_VERSION .
docker tag maputnik:$TAG_VERSION 127.0.0.1:5000/maputnik:$TAG_VERSION
docker push 127.0.0.1:5000/mpautnik:$TAG_VERSION

