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

curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
$SUDO python get-pip.py > /dev/null
rm get-pip.py
$SUDO pip install awscli > /dev/null

# Configure AWS CLI
mkdir .aws
echo "[default]" > .aws/credentials
echo "aws_access_key_id = $1" >> .aws/credentials
echo "aws_secret_access_key = $2" >> .aws/credentials