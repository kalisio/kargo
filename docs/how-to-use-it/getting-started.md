---
sidebar: auto
---

# Getting started

::: warning Prerequisites
To play with **Kargo** you must have an operational Docker Swarm infrastructure. If you already have these, congratulations ! 
If not you may have a look at [**Kaabah**](https://kalisio.github.io/kaabah/).
:::

Using **kargo** is quite easy and basically the approach to setup your Geospatial infrastructure is the following:

1. Prepare your infrastructure: install Kargo, provision your infrastructure with the data you want to expose, place constraints on a Swarm architecture...
2. Setup your services: build and configures the services you want to deploy
3. Manage the services: deploy, update and stop the services

## Prepare the infrastructure

### Install  kargo

1. On the manager node, clone the **kargo** repository in the directory of your choice

```bash
$git clone https://github.com/kalisio/kargo.git
```

2. On the workers worker share the `configs` directory of the **Kargo** repository

```bash
mkdir -p /home/ubuntu/kargo/configs
sshfs ubuntu@<swam manager ip>:/home/ubuntu/kargo/configs /home/ubuntu/kargo/configs -o IdentityFile=/home/ubuntu/.ssh/ssh.pem -o allow_other
```

::: warning SSHFS
To share the `configs` directory among the workers, we rely on **SSHFS**. If not installed on your infrastructure, you may run the following procedure:
```bash
sudo apt-get install sshfs
# Edit fuse conf to enable the allow_other option
sudo nano /etc/fuse.conf and uncomment the line
#user_allow_other
```
:::

### Provision the data

It is up to you to copy your data to the different nodes. You must have to keep in mind that these data will have to be accessible by the services that you want to deploy.

::: tip
We can provide datasets from different sources such as public catalogs and those of our partners such as [OpenMapTiles](https://openmaptiles.com/), [PlanetObserver](https://www.planetobserver.com/). Do bot hesitate to contact us !
:::

### Define placement constraints

Once you have copy the datasets to the different nodes, you need to define placement constraints on the nodes to force the deployment strategy.

```bash
$sudo docker node update --label-add postgis=true {node}
```

## Setup the services

### Configure the services

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

## Manage the services

### Deploy the services

```bash
$./deploy-kargo.sh
```

### Stop the services

```bash
$./remove-kargo.sh
```
