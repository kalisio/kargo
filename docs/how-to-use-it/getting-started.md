---
sidebar: auto
---

# Getting started

::: warning
Even if **Kargo** let you deploy a complete stack of services using a single command, we assume you are enough familiar with the underlying technologies to be able to customize their configurations in order to address your needs.
:::

## Prerequisites

Installing **kargo** is quite easy. However, you need to have a version of Docker Engine and Docker Compose installed supporting version 3 of compose file. 

If you already have these, congratulations ! If not, please follow the installation instructions:
1. Docker Engine: https://docs.docker.com/engine/installation/
2. Docker Compose: https://docs.docker.com/compose/install/.

## Install kargo

1. Clone the **kargo** repository in the directory of your choice

```bash
$git clone https://github.com/kalisio/kargo.git
```

2. In swarm mode only, install SSHFS on each worker to share the `configs` directory

```bash
sudo apt-get install sshfs
# Edit fuse conf to enable the allow_other option
sudo nano /etc/fuse.conf and uncomment the line
#user_allow_other
# Mount the remote file system
mkdir -p /home/ubuntu/kargo/configs
sshfs ubuntu@<swam manager ip>:/home/ubuntu/kargo/configs /home/ubuntu/kargo/configs -o IdentityFile=/home/ubuntu/.ssh/ssh.pem -o allow_other
```

## Configure kargo

1. Make a copy of our `.env.sample` and rename it to `.env`

2. Update the file with your preferences:

```
#
# KARGO
#
# This is the .env file to set up your kargo environment

# The path to your datasets
DATA_PATH=/mnt/data

# Postgis configuration
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
PGDATA=/mnt/data/postgis

# Docker network to be used
NETWORK=kargo

# Virtual hosts 
# Uncomment and update the lines below if you use an nginx-proxy based solution in front of kargo
#GEOSERVER_VHOST=geoserver.your-domain.com
#MAPPROXY_VHOST=mapproxy.your-domain.com
#TILESERVERGL_VHOST=tileservergl.your-domain.com
```

## Deploy kargo

```bash
$./deploy-kargo.sh
```

## Stop kargo

```bash
$./remove-kargo.sh
```

## Swarm mode

To be able to deploy the services on a Swarm infrastructure, the services should be able to access the required data. Therefore, is it needed to:
1. Mount the data required by the services on the different nodes.
1. Define Swarm placement constraints on the nodes to force the deployment strategy

### Mount data on the nodes



### Define placement constraints on the nodes

Define the placement constraints on the nodes you want to host

```bash
$sudo docker node update --label-add postgis=true {node}
```

