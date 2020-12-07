#!/bin/bash

envsubst "$MONGORS_NAME" < mongors.yml.tpl > mongors.yml