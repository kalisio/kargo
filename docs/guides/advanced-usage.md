---
sidebarDepth: 3
---

# Advanced usage

## Routing the traffic

**Kargo** relies on [Traefik](https://containo.us/traefik/) to manage the incoming requests to the platform. **Traefik** is a reverse proxy and load balancer that help routes the incoming requests to the deployed services (backend) using so called [frontends](https://docs.traefik.io/v1.7/basics/#frontends). A frontend consists of a set of rules that determine how incoming requests are forwarded from an entry point to a backend.

![kargo-traefik](../assets/kargo-traefik.svg)

By default **Traefik** is configured with 2 entry points:
* `80`: this port ensures HTTP traffic. It is mainly used to enable [Let's Encrypt](https://letsencrypt.org/) ACME management. However, the port is redirected to the port `443`
* `443`: this port ensures HTTPS traffic.
  
The services provided by **Kargo** are already configured to be automatically discovered by **Traefik** once deployed. Sometimes you may need to override or extend this configuration. See the section [extending the services](#extending-the-services).

::: warning
**Kargo** still uses the version `1.7` of **Traefik**. Check the documentation [here](https://docs.traefik.io/v1.7/)
::: 

::: warning
When testing the your configuration, we highly recommend to use the **staging** mode provided by **Let's Encrypt** otherwise you may reach the [rate limits](https://letsencrypt.org/docs/rate-limits/).
Setup the variable `TRAEFIK_ACME_SERVER` with the following url `https://acme-staging-v02.api.letsencrypt.org/directory`
:::

::: warning
For security reason, **Traefik** relies on [docker-socket-proxy](https://github.com/Tecnativa/docker-socket-proxy) to secure the access to the Docker socket. Read this [note](https://docs.traefik.io/providers/docker/#docker-api-access) to learn more about this security concern.
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
    url: 'http://mapserver:80/cgi-bin/mapserv'
  wmts:
    url: 'http://mapcache:80/mapcache/wmts'     
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

#### Extending the gateway 

**Kargo** comes with various plugins that extends the **express-gateway** capabilities:

| Plugin | Description |
|---| --- |
| **populate** | It populates the gateway according the `consumers.config.js` file. |
| **scopes** | It provides a **policy** that can be used to check the consumer scopes against the endpoint scopes. |
| **metrics** | It provides a `metrics` route to the gateway application that can be used by [Prometheus](https://prometheus.io/) to scrape requests metrics. |
| **s3** | It provides a `s3` route to the admin application that can be used to proxy the requests to an **S3** bucket. The service endpoint to be used is: `http://localhost:9876/s3`|
| **healthcheck** | It provides a `healthcheck` route to be used to check the health of **express gateway**. **Kargo** uses this route to ensure the healthcheck of the service. |
| **storage** | It provides a `s3` route to the admin application that can be used to proxy the requests to an **S3** compatible bucket. Contrary to the `s3` plugin which works only with the **AWS** provider, the `storage` plugin allows to you to handle multiple providers. Check out the `system.config.yml.tpl` to understand how to configure the plugin. The service endpoint to be used is: `http://localhost:9876/s3`|

::: warning
It is recommended to use the **storage** plugin insted of the **s3** plugin. 
:::

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

## Using Mongors

**Kargo** provides a [Mongors](../reference/environment.md#mongors) service that can help you setting up a [MongoDB Replica Set](https://docs.mongodb.com/manual/replication/). It creates 3 **MongoDB** instances, `mongodb0`, `mongodb1` and `mongodb2`, configured to be used as a **Replica Set** named `mongors`.

### Setting up the Replica Set

Execute the following procedure

1. You first need to assign a constraint label on the nodes where you want to deploy the **MongoDB** instances.

2. Declare the service **mongors** within a stack of your choice. We recommend to use a dedicated stack.

3. Deploy the stack and therefore the service
   
4. Start a session on the **Primary** container:

```bash
$docker exec -ti <constainer_id> bash
```

5. [Initiate](https://docs.mongodb.com/manual/tutorial/deploy-replica-set/#initiate-the-replica-set) the **Replica Set**

```bash
$mongo --host mongors0 --eval 'rs.initiate({ _id: "mongors", version: 1, members: [ { _id: 0, host : "mongors0:27017" }, { _id: 1, host : "mongors1:27017" }, { _id: 2, host : "mongors2:27017" } ] })'
```

6. [Maybe define a bigger OpLog size](https://docs.mongodb.com/manual/core/replica-set-oplog/#workloads-that-might-require-a-larger-oplog-size). You'll need to run this on all replica set members that may become primary.

```bash
$mongo --host mongors0 --eval 'db.adminCommand({replSetResizeOplog: 1, size: 51200})'
$mongo --host mongors1 --eval 'db.adminCommand({replSetResizeOplog: 1, size: 51200})'
$mongo --host mongors2 --eval 'db.adminCommand({replSetResizeOplog: 1, size: 51200})'
```

7. [Check the status](https://docs.mongodb.com/manual/tutorial/troubleshoot-replica-sets/#check-replica-set-status) of the **Replica Set**

```bash
$mongo --host mongors0 --eval 'rs.status()'
```

::: tip
You can override the name of the **Replica Set** (as well as the **MongoDB** instances) by setting the `MONGORS_NAME` variable. By default the **Replica Set** is named `mongors`.
:::

### Troubleshooting the Replica Set

A member of a replica set could enter `RECOVERING` state when it is not ready to accept reads. 
To restore the instance in a core state, you may want to turn off the container, remove the volume and restart the container. The member will begin an initial sync and remain in `STARTUP2` state. Afterwards, the member will transit to  `RECOVERING` state and then its core state.

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

## Using placement constraints

For each service defined there's a `$(NAME_OF_SERVICE)_CONSTRAINTS` variable that you can define to specify placement constraints. The content of these variable should follow the [docker service constraints syntax](https://docs.docker.com/engine/reference/commandline/service_create/#specify-service-constraints---constraint). Spaces are not allowed in the variable content, except to specify multiple constraints, in which case space is used as a separator.

## Using hooks

Sometimes, it may be useful to execute some scripts before or after a service is deployed. This is the purpose of the hooks.
To declare a before or an after hook, create a script in the `deploy` folder named `<service>_before.sh` or `<service>_after.sh`.
The script will automatically executed when deploying the service.

::: warning
Note that `after` hooks are executed once the complete stack is deployed.
:::

