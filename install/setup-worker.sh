#!/bin/bash

if [ -z "$1" ]; then
    echo error: the command \"setup-worker\" requires one argument.
    echo usage: setup-worker \<manager__private_ip\>
    exit 1 
  fi

MANAGER_PRIVATE_IP=$1
SSHFS="sshfs $USER@$MANAGER_PRIVATE_IP:$HOME/kargo/.kargo $HOME/kargo/.kargo -o IdentityFile=$HOME/.ssh/ssh.pem -o allow_other -o StrictHostKeyChecking=no"

mkdir -p $HOME/kargo/.kargo
$SSHFS
echo "@reboot $SSHFS" | crontab -
