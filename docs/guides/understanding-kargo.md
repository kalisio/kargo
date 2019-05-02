# Understanding Kargo

::: warning 
**Kargo** mainly relies on [Docker Swarm](https://docs.docker.com/engine/swarm/). We assume that you are enough familiar with this technology. If not, you should take a little time to learn about it !
:::

## Key concepts

**Kargo** let you manipulate 4 kind of entities:
* **configuration**: a collection of everything **Kargo** needs to create and manage the services to deploy on the infrastructure.
* **Environment**: a set of environment variables used to specify the stacks of services to deploy and how to deploy them.
* **Stack**: a group of interrelated services that can be orchestrated and scaled together.
* **Service**: an application or a piece of application deployed on your **Cluster**.

The following image illustrates how these entities interact:

![Kargo principle](../assets/kargo-principle.svg)

## Configuration

As presented in the previous diagram, we distinguish three types of configuration:
* the **default configuration**: by default **Kargo** provides a mean to deploy preconfigure services. The settings for these services are often minimalist and you may need to overwrite them to configure the services as you wish.
* the **user configuration**: a directory where you store the **Environment** file as well as the settings of the different services you want to overwrite.
* the **merged configuration**: a directory where **Kargo** merges the two previous configuration. The directory is named `.kargo` and is located at the root of the **Kargo** folder. 
  
::: tip
The **user configuration** may store some sensitive data (passwords, api access keys...) thus we recommend to store your it on a private repository.
:::

::: warning
The **merged configuration** must be generated before building or deploying the services. See the command [make-kargo](../cli.md#make-kargo).
:::

## Environment

The **environment** is group of environment variables declared in a file named `.env`.
It allows to define:
* the main settings of **Kargo**
* the stacks of services to deploy
* the deployment settings for each service

For convenience, a sample of an environment file is provided [here](https://github.com/kalisio/kargo/blob/master/.env.sample)

## Stack

A **stack** of interrelated services that can be orchestrated and scaled together.
**Kargo** provides some [commands](../reference/cli.md) to deploy and remove the stacks independently.

## Service

A **service** is an application to be deployed over the Swarm cluster. **Kargo** provides the default settings for deploying the following services/applications:

  * [k2]([https://github.com/kalisio/k2)
  * [kano](https://github.com/kalisio/kano)
  * [GeoServer](http://geoserver.org/)
  * [MapProxy](https://mapproxy.org/)
  * [MapServer](https://https://mapserver.org)
  * [maputnik](https://maputnik.github.io/)
  * [MongoDB](https://www.mongodb.com/fr)
  * [PostGis](https://postgis.net/)
  * [Seeder](https://github.com/kalisio/k-seeder)
  * [Teleray](https://github.com/kalisio/k-teleray)
  * [TileServer GL](http://tileserver.org/)
  * [Thredds](https://www.unidata.ucar.edu/software/thredds/current/tds/)
  * [Vigicrues](https://github.com/kalisio/k-vigicrues) 
  * [Weacast API](https://weacast.github.io/weacast-docs/)
  * [Weacast loaders](https://weacast.github.io/weacast-docs/)

By default, most of the images of the services are pulled from the [Docker Hub](https://hub.docker.com/). Meanwhile **Kargo** provides a mean to build some of them to ensure better maintainability:

* GeoServer
* MapProxy
* MapServer
* maputnik
* The Weacast loaders

