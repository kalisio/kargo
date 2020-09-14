---
sidebarDepth: 3
---

# Advanced usage

## Configuring proxy settings

When you choose an on-premises deployment, it may be necessary to configure **Kargo** to use the corporate proxy server.
To use a proxy, you can set the environment variables `HTTP_PROXY`, `HTTPS_PROXY`, `FTP_PROXY` and `NO_PROXY`. 

Depending on the traffic type, set the required variables in your `.env` file:

```env
HTTP_PROXY="http://USER:PASSWORD@PROXY_SERVER:PORT"
HTTPS_PROXY="https://USER:PASSWORD@PROXY_SERVER:PORT"
FTP_PROXY="http://USER:PASSWORD@PROXY_SERVER:PORT"
NO_PROXY="localhost"
```

::: warning
The `NO_PROXY` must at least contain the value `localhost` to let the Krawler jobs healthcheck work correctly.
:::

## Using the API Gateway

As a reminder, an API gateway allows you to map endpoints to a set of services or applications using url rules. Moreover it is possible to protect those endpoints using various authorization strategies ([Key authentication](https://en.wikipedia.org/wiki/Key_authentication), [JSON Web Tokens](https://jwt.io/), [OAuth](https://oauth.net/2/)...) and defining quotas and rate limiting. To enable such a features **Kargo** relies on [express gateway](https://www.express-gateway.io/). 

::: tip
We recommend that you read the **express gateway** [documentation](https://www.express-gateway.io/docs/) before starting.
:::

::: tip
**express gateway** relies on [Redis](https://redis.io/) to store the consumers data. In order to check your configuration, [Redis Commander](https://joeferner.github.io/redis-commander/) is a convenient solution to explore the **Redis** data store. These 2 applications are easily deployable with **Kargo**
:::

### Configuring the gateway

#### Defining the gateway

To define you gateway, you simply need to:
1. create a `gateway.config.yml` file in the `configs\express-gateway` directory of your workspace
2. edit the file and define your gateway. Check the documentation [here](https://www.express-gateway.io/docs/configuration/gateway.config.yml/)

Here is an example of gateway implementing the mapping illustrated by the following schema:

![kargo-gateway](../assets/kargo-gateway.svg)

```yml
http:
  port: 8080
admin:
  port: 9876
  host: localhost
apiEndpoints:
  admin:
    host: 'express-gateway'
  wms:
    host: '*'
    paths: '/wms*'
    scopes: ["wms"]
  wmts:
    host: '*'
    paths: '/wmts/*'
    scopes: ["wmts"] 
  k2:
    host: '*'
    paths: '/k2/*'
    scopes: ["k2"]

serviceEndpoints:
  admin: 
    url: 'http://localhost:9876'
  wms:
    url: 'http://mapproxy:8080'
  wmts:
    url: 'http://mapproxy:8080/wmts'      
  k2:
    url: 'http://k2:8080' 

policies:
  - cors
  - proxy

pipelines:
  admin:
    apiEndpoints:
      - admin
    policies:
      - proxy:
          - action:
              serviceEndpoint: admin
              changeOrigin: true
              stripPath: true
  wms:
    apiEndpoints:
      - wms
    policies:            
      - cors:
      - proxy:
          - action:
              serviceEndpoint: wms 
              changeOrigin: true
              stripPath: true       
  wmts:
    apiEndpoints:
      - wmts
    policies:           
      - cors:
      - proxy:
          - action:
              serviceEndpoint: wmts 
              changeOrigin: true
              stripPath: true                            

  k2:
    apiEndpoints:
      - k2
    policies:              
      - cors:
      - proxy:
          - action:
              serviceEndpoint: k2
              changeOrigin: true
              stripPath: true
```

**Kargo** comes with various plugins that extends the **express-gateway** capabilities:

| Plugin | Description |
|---| --- |
| **populate** | It populates the gateway according the `consumers.config.js` file. |
| **scopes** | It provides a **policy** that can be used to check the consumer scopes against the endpoint scopes. |
| **metrics** | It provides a `metrics` route to the gateway application that can be used by [Prometheus](https://prometheus.io/) to scrape requests metrics. |
| **s3** | It provides a `s3` route to the admin application that can be uses to proxy the requests to an **S3** bucket. The service endpoint to be used is: `http://localhost:9876/s3`|
| **healthcheck** | It provides a `healthcheck` route to be used to check the health of **express gateway**. **Kargo** uses this route to ensure the healthcheck of the service. |

#### Defining the consumers

Once the gateway is implemented and started, it is necessary to define the consumers.
1. create a `consumers.config.js` file in the `configs\express-gateway` directory of your workspace
2. edit the file and define your consumers using the following formalism:

<<< @/../configs/express-gateway/consumers.config.js

::: tip
Refer to the [consumer-management](https://www.express-gateway.io/docs/consumer-management/) section to learn mode about `keyId` and `keySecret`.
:::
   
#### Running the gateway

You must simply execute the following procedure:

1. define a stack with the `express-gateway` service

```bash
# do not forget to declare the stack in STACKS
API_STACK="express-gateway"
```

2. configure **Kargo**: 

```bash
$./kargo configure kargo
```

3. build the **express gateway** docker image: 

```bash
$./kargo build express-gateway
```

4. deploy the stack

```bash
$./kargo deploy api
```

::: tip
**Kargo** used the `populate` plugin to automatically populate the gateway at startup. 
:::

### Managing the gateway

**Kargo** relies on the [express-gateway cli](https://www.express-gateway.io/docs/cli/) to manage the gateway:

```bash
$docker exec -ti <express-gateway-container-id> sh
> eg users list
{
  "isActive": true,
  "username": "Kalisio",
  "id": "64760494-f8d7-4f1b-b845-f56f6dde5c07",
  "createdAt": "Mon Dec 02 2019 14:52:56 GMT+0000 (Coordinated Universal Time)",
  "updatedAt": "Mon Dec 02 2019 14:52:56 GMT+0000 (Coordinated Universal Time)"
}
>eg apps list
{
  "isActive": true,
  "id": "977223ed-a3e8-4305-9b12-322a67ba5b83",
  "userId": "64760494-f8d7-4f1b-b845-f56f6dde5c07",
  "name": "kano",
  "scopes": "wms,wmts,wfs,wcs,s3",
  "createdAt": "Mon Dec 02 2019 14:52:56 GMT+0000 (Coordinated Universal Time)",
  "updatedAt": "Mon Dec 02 2019 14:52:56 GMT+0000 (Coordinated Universal Time)"
}
> eg credentials list
{
  "consumerId": "977223ed-a3e8-4305-9b12-322a67ba5b83",
  "id": "3d981c1b-b0af-4139-a2ca-e304a4f018a6",
  "createdAt": "Mon Dec 02 2019 14:52:56 GMT+0000 (Coordinated Universal Time)",
  "updatedAt": "Mon Dec 02 2019 14:52:56 GMT+0000 (Coordinated Universal Time)",
  "scopes": [
    "wms",
    "wmts",
    "wfs",
    "wcs",
    "s3"
  ],
  "isActive": true,
  "keyId": "ID",
  "keySecret": "SECRET",
  "type": "jwt"
}
```

## Extending the services

**Kargo** allows you to extend the default services settings for a given cluster. You can either overwrite the default settings files of a service or extend the way the service will be deployed (specify the healthcheck, add some constraints...)

For this you must create a directory structure in your workspace similar to that of **Kargo** where you will put your stuff. 

For instance, if we have 2 services, `service-1` and `service-2`, and we want to:
*  overwrite the configuration of `service-1` as well as extend the its deployment method.
*  overwrite the configuration of `service-2` only.

Then, the directory structure will look like:

```bash
<workspace>
|_ deploy
|   |_ <service-1>-<label>.yml   the yml extension you want to apply when deployin the service-1
|_ configs
|   |_ <service-1>
|   |    |_ ....         the settings files of the service-1 you need to overwrite 
|   |_ <service-2>
|        |_ ....         the settings files of the service-2 you need to overwrite 
```

When extending the deployment method of a service, you must tell **Kargo** which file to add when deploying the service. 
For each service, you need to declare a variable in the `.env` file which tell the name of the `yml` file to take into account. In the previous example, the entry in the `.env` file should look like:

```bash
<SERVICE-1>_EXTENSION=<service-1>-<label>
```

::: warning
Before deploying, do not forget to make the **merged configuration** using the [configure](../reference/cli.md#configure) command.
:::

## Packaging the services

It may be useful to package images of certain services (be.g. built services) to store a version or to deliver to a client who cannot access the registers.
To do this, you can use the [image save](../reference/cli.md#image-save) command:

```bash
$./kargo image save vigicrues
$./kargo image save tileservergl
$./kargo image save mongodb
$./kargo image save redis
$./kargo image save thredds
$ls -al archives
total 1369520
drwxrwxr-x  2 ubuntu ubuntu      4096 Feb 29 10:22 .
drwxrwxr-x 14 ubuntu ubuntu      4096 Feb 28 21:25 ..
-rw-rw-r--  1 ubuntu ubuntu         0 Feb 28 19:09 .gitkeep
-rw-rw-r--  1 ubuntu ubuntu 130735307 Feb 28 21:36 kalisio.k-vigicrues_1.0.0.tar.gz
-rw-rw-r--  1 ubuntu ubuntu 468515606 Feb 28 21:28 klokantech.tileserver-gl_v2.4.0.tar.gz
-rw-rw-r--  1 ubuntu ubuntu 128983975 Feb 28 21:26 mongo_3.6.5.tar.gz
-rw-rw-r--  1 ubuntu ubuntu  34773857 Feb 28 21:26 redis_5.tar.gz
-rw-rw-r--  1 ubuntu ubuntu 508610419 Feb 28 21:32 unidata.thredds-docker_4.6.11.tar.gz
```

Or better, you can write your own script to packages the required services and use the command [exec](../reference/cli.md#exec) to launch the process. The following scripts iterates through the services and generate an archive. Once finished it copies the archives to an ObjectStorage using [rclone](https://rclone.org/).

```bash
#!/bin/bash
# DELIERY is defined in your .env file
# DELIVERY="vigicrues tileservergl mongodb redis thredds"
cd ../..
for SERVICE in $DELIVERY; do
  echo packaging $SERVICE
  ./kargo image save $SERVICE
done
rclone copy archives s3:bucket/path --include *.gz
```
