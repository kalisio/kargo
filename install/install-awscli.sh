#!/bin/bash

if [ -z "$1" -o -z "$2" ]; then
  echo error: the command \"install-awscli\" requires two arguments.
  echo usage: install-awscli \<access_key_id\> \<secret_access_key\>
  exit 1 
fi

# Install AWS CLI
curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
python get-pip.py > /dev/null
pip install awscli > /dev/null

# Configure AWS CLI
mkdir .aws
echo "[default]" > .aws/credentials
echo "aws_access_key_id = $1" >> .aws/credentials
echo "aws_secret_access_key = $2" >> .aws/credentials