# kargo

A Docker container based solution to deploy geospatial services.

## Overview of kargo

### What is Kargo ?

**kargo** is a docker-compose file for defining and running multi-container Docker geospatial applications supporting most of the OGC standards. 

**kargo** relies on the following open source projects and docker solutions:
1. **PostGis**: http://postgis.net/, https://hub.docker.com/r/mdillon/postgis/
2. **GeoServer**: http://geoserver.org/, https://hub.docker.com/r/winsent/geoserver/
3. **MapProxy**: https://mapproxy.org/, https://hub.docker.com/r/yagajs/mapproxy/
4. **TileServer-GL**: http://tileserver.org/, https://hub.docker.com/r/klokantech/tileserver-gl/

> Even if **kargo** let you configure and manage all the services using one YAML file, we assume you are enough familiar with these tools to be able to customise their configurations in order to address your needs.

### Overview

## Installing kargo

### Prerequisites

To install **kargo**, you should have a version of Docker Engine and Docker Compose installed supporting version 3 of compose file. 
If not installed, please follow the instructions on https://docs.docker.com/engine/installation/ and https://docs.docker.com/compose/install/.

## Install kargo

1. Clone the **kargo** repository in the directory of your choice

`git clone https://github.com/kalisio/kargo.git`

1. Create a network named **kargo**

`docker network create kargo`

2. Setting up the services

`docker-compose up -d` 

## Using a reverse proxy

If you need to expose all the services behind a reverse proxy, we recomend to use the solution proposed by Jason Wilder:
https://github.com/jwilder/nginx-proxy

1. Run the container

`docker run --name nginx-proxy -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy`

2. Attach the container to the kargo network (https://github.com/jwilder/nginx-proxy#multiple-networks)

`docker network connect kargo nginx-proxy`


