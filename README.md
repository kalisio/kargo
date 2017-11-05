# kargo
A Docker container based solution to deploy geospatial services

## Prerequisites

To install Kargo, you should have a version of Docker Engine and Docker Compose installed supporting version 3 of compose file. 
If not installed, please follow the instructions on https://docs.docker.com/engine/installation/ and https://docs.docker.com/compose/install/.

## Installation

1. Clone the kargo repository in the directory of your choice

`git clone https://github.com/kalisio/kargo.git`

1. Create a network kargo

`docker network create kargo`

2. Setting up the services

`docker-compose up -d` 

## Adding a reverse proxy

If you need to expose all the services behind a reverse proxy, we recomend to use the solution proposed by Jason Wilder:
https://github.com/jwilder/nginx-proxy

1. Run the container

`docker run --name nginx-proxy -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy`

2. Attach the container to the kargo network (https://github.com/jwilder/nginx-proxy#multiple-networks)

`docker network connect kargo nginx-proxy`


