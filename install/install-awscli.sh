#!/bin/bash

if [ -z "$1" -o -z "$2" ]; then
  echo error: the command \"install-awscli\" requires two arguments.
  echo usage: install-awscli \<access_key_id\> \<secret_access_key\>
  exit 1 
fi

# Install AWS CLI
SUDO=""
if [ "$USER" != "root" ]; then
  if [ "$SUDO_USER" == "" ]; then
    SUDO="sudo"
  fi
fi
$SUDO apt install -y awscli

# Configure AWS CLI
mkdir .aws
echo "[default]" > .aws/credentials
echo "aws_access_key_id = $1" >> .aws/credentials
echo "aws_secret_access_key = $2" >> .aws/credentials