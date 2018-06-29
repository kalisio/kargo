---
sidebar: auto
---

# Getting started

::: warning
Even if **kargo** let you configure and manage all the services using a single YAML file, we assume you are enough familiar with the underlying technologies to be able to customize their configurations in order to address your needs.
:::

## Prerequisites

Installing **kargo** is quite easy. However, you need to have a version of Docker Engine and Docker Compose installed supporting version 3 of compose file. 

If you already have these, congratulations ! If not, please follow the installation instructions:
1. Docker Engine: https://docs.docker.com/engine/installation/
2. Docker Compose: https://docs.docker.com/compose/install/.

## Install kargo

1. Clone the **kargo** repository in the directory of your choice

```
git clone https://github.com/kalisio/kargo.git
```

2. Create a network with the name of your choice, here: **kargo**

```
docker network create kargo
```

3. Make a copy of our `.env.sample` and rename it to `.env`

4. Update the file with your preferences:

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

