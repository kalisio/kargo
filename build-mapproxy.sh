#!/bin/bash
docker build ./build/mapproxy -f dockerfile -t mapproxy
docker tag mapproxy 127.0.0.1:5000/mapproxy:1.10.4-alpine
docker push 127.0.0.1:5000/mapproxy:1.10.4-alpine

