---
sidebar: auto
---

# How to use it ?

::: warning
Even if **kargo** let you configure and manage all the services using the simplicity of Docker, we assume you are enough familiar with the underlying technologies (i.e. TileserverGL, Mapproxy, GeoServer, Postgis) to be able to customize their configurations in order to address your needs.
:::


## Prerequisites

Installing **kargo** is quite easy. Howerver, you need to have a version of Docker Engine and Docker Compose installed supporting version 3 of compose file. 

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

5. Tell docker to start the services

```
docker-compose up -d
```

### Using nginx with kargo

If you need to expose all the services behind a reverse proxy, we recomend to use the solution proposed by Jason Wilder:
https://github.com/jwilder/nginx-proxy

1. Run the `nginx-proxy` container
```
docker run --name nginx-proxy -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
```
2. Attach the container to the kargo network (https://github.com/jwilder/nginx-proxy#multiple-networks)
```
docker network connect kargo nginx-proxy
```
3. Run the services using the `docker-compose.nginx.yml` file to enable them to work with `nginx-proxy`
```
docker-compose -f docker-compose.yml -f docker-compose.nginx.yml up -d
```

