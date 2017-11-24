# kargo

A Docker container based solution to enable geospatial web services deployment.

## Overview of kargo

### What is kargo ?

**kargo** consists in a docker-compose file which allows you to set up and deploy the following geospatial web applications: 
1. [**PostGis**](http://postgis.net/): https://hub.docker.com/r/mdillon/postgis/
2. [**GeoServer**](http://geoserver.org/): https://hub.docker.com/r/winsent/geoserver/
3. [**MapProxy**](https://mapproxy.org/): https://hub.docker.com/r/yagajs/mapproxy/
4. [**TileServer-GL**](http://tileserver.org/): https://hub.docker.com/r/klokantech/tileserver-gl/

The diagram below illustrates how the containers interact:

![Kargo overview](https://raw.githubusercontent.com/kalisio/kargo/master/kargo-diagram.png)

### Why use kargo ?

Using **kargo**, you will be able to deliver your own data in a few minutes using open standards. Indeed, **kargo** relies on well known Open Source geospatial solutions and takes advantages of their strongest features. It is designed to be highly interoperable and could be easily extended.

> Even if **kargo** let you configure and manage all the services using a single YAML file, we assume you are enough familiar with the underlying technologies to be able to customise their configurations in order to address your needs.

## Installing kargo

### Prerequisites

Installing **kargo** is quite easy. Howerver, you need to have a version of Docker Engine and Docker Compose installed supporting version 3 of compose file. 

If you already have these, congratulations ! If not, please follow the installation instructions on https://docs.docker.com/engine/installation/ and https://docs.docker.com/compose/install/.

### Install kargo

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
# Uncomment and update the above lines if you use an nginx-proxy based solutions in front of kargo
#GEOSERVER_VHOST=geoserver.your-domain.com
#MAPPROXY_VHOST=mapproxy.your-domain.com
#TILESERVERGL_VHOST=tileserver-gl.your-domain.com
```

5. Tell docker to start the services

```
docker-compose up -d
```

## Using a reverse proxy

If you need to expose all the services behind a reverse proxy, we recomend to use the solution proposed by Jason Wilder:
https://github.com/jwilder/nginx-proxy

1. Run the container

```
docker run --name nginx-proxy -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
```

2. Attach the container to the kargo network (https://github.com/jwilder/nginx-proxy#multiple-networks)

```
docker network connect kargo nginx-proxy
docker-compose -f docker-compose.yml -f docker-compose.nginx.yml up -d
```


