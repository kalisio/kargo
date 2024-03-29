---
sidebarDepth: 3
---

# Getting Started

Using **kargo** is quite easy and basically the approach to setup your Geospatial platform is the following:

* [Prepare the infrastructure](#prepare-the-infrastructure)
* [Setup the services](#setup-the-services)
* [Manage the services](#manage-the-services)
 
In the following guides, we will explain how to deploy a complete set of services on a given infrastructure such as illustrated in this diagram:

![kargo-example-assumptions](../assets/kargo-example-assumptions.svg)

Thus, we assume you already have a running Swarm infrastructure with:
* A manager node 
* Multiple worker nodes with sufficient disk space to store the data

Check your infrastructure using the command `docker node ls`, you should have a response similar to:

```bash
$docker node ls
ID                            HOSTNAME            STATUS              AVAILABILITY        MANAGER STATUS      ENGINE VERSION
jqtuxajexk18ypiylk6i6dv0q     worker-0            Ready               Active                                  18.03.1-ce
x6tc2sqi99vp106icwf2nmyp0 *   manager             Ready               Active              Leader              18.03.1-ce
wfr5hwhfd5413p2ql9hwitbkw     worker-1            Ready               Active                                  18.03.1-ce
8980x3d76x1r7kxoa7h5lzob8     worker-2            Ready               Active                                  18.03.1-ce
```

::: warning Prerequisites
If you do not have such an infrastructure, you may have a look at [**Kaabah**](https://kalisio.github.io/kaabah/). 
:::

## Prepare the infrastructure

### Install the prerequisites

#### Install rclone

**rclone** is used to provision the nodes with the static data that are used by the services (i.e. geospatial datasets, docker images...). **rclone** allows you to retrieve these data from most 
of the well know stores such as **AWS S3**, **OpenStack Object Store**, **Google Drive**. 
You need to install **rclone** on each worker:

1. Install **rclone**

```bash
sudo apt-get install rclone
```

2. Configure **rclone** 
   
Use the [following guide](https://rclone.org/docs/#configure) to setup **rclone**

#### Install jq

**[jq](https://stedolan.github.io/jq/)** is a lightweight and flexible command-line JSON processor. The CLI uses **jq** to extract some information from the `package.json` file.

On the manager, type the following command:

```bash
sudo apt-get install jq
```

#### Install yq

**[yq](https://github.com/mikefarah/yq)** is a lightweight and portable command-line YAML processor. The CLI uses **yq** to merge configuration files.

Please refer to the [installation section](https://github.com/mikefarah/yq#install) to install **yq**

#### Install GlusterFS

To use **Kargo**, it is required to share the configuration among the nodes of the swarm. To create a shared filesystem, we recommend to use **[GlusterFS](https://www.gluster.org/)**. Please refer to the [documentation](https://docs.gluster.org/en/latest/Quick-Start-Guide/Quickstart/).

### Install kargo

1. Clone the **Kargo** repository

On the manager node and clone the repository in the shared directory of your choice:

```bash
$git clone https://github.com/kalisio/kargo.git
```

### Provision the data

It is up to you to copy your data to the different nodes. You must have to keep in mind that these data will have to be accessible by the services that you want to deploy. 

::: tip Looking for data ?
We can provide datasets from different sources such as public catalogs and those of our partners such as [OpenMapTiles](https://openmaptiles.com/), [PlanetObserver](https://www.planetobserver.com/). Do bot hesitate to contact us at **contact@kalisio.com.**
:::

## Setup the services

### Setup your workspace

1. Create a directory to store your configuration stuff. Give it the name of your choice.

2. Create the **Environment** file by making a copy of the `.env.sample` file into your configuration. Rename it as `.env`

3. Edit the `.env` file and configure the services you want to deploy. See the section [Environment](./reference/environment) to have the complete reference of the services settings.

4. Define node constraints. For each node, define a variable `<NODE_NAME>_LABELS` listing the labels to be assigned to the node

```bash
MANAGER_LABELS=""
WORKER_0_LABELS="tileservergl=true mongodb=true"
WORKER_1_LABELS="tileservergl=true"
```

::: tip
To check you node labels mapping, use the following command:
```bash
$docker node ls -q | xargs docker node inspect -f '{{ .ID }} [{{ .Description.Hostname }}]: {{ .Spec.Labels }}'
```
:::

::: tip
The labels you define on nodes can be used as placement constraints for the services you'll deploy, see [here](../reference/environment#placement-constraints)
:::

5. Define the stacks you want to deploy:
   1. Define the `STACKS` variable listing the stacks
   2. For each stack, define a variable `<STACK_NAME>_STACK` listing the services to deploy

```bash
STACKS="dbs weacast hydro air apps"
APPS_STACK="tileservergl mapserver mapcache maputnik thredds kano"
DBS_STACK="mongodb"
WEACAST_STACK="arpege-world-loader arpege-europe-loader arome-france-loader gfs-world-loader weacast"
VIGICRUES_HYDRO="vigicrues hubeau-stations hubeau-observations"
AIR_STACK="teleray openaq"
```

6. Tell kargo to use your workspace

```bash
$./kargo use <path/to/your/workspace/directory>
```

::: tip
We strongly recommend to use **Git** to manage your workspace. If using **Git**, you can take advantage of the command `kargo pull` to pull the workspace.
:::

7. Configure Kargo

```bash
$./kargo configure
```

8. Create the constraint labels on the nodes

```bash
$./kargo labels add
```

### Build the services

Some of the services provided By **Kargo** need to be built and pushed to the local registry in order to be able to deploy them. 
You simply need to run the command:

```bash
$./kargo build <service>
```

## Manage the services

### Getting information

You can retrieve some information about the current configuration using the command `info`

```bash
$./kargo info
```

### Deploy the services

You can either deploy a given stack or deploy all the stacks.

* Deploy a stack

```bash
$./kargo deploy <stack>
```

* Deploy all the stacks

```bash
$./deploy deploy all
```

### Remove the services

You can either remove a given stack or remove all the stacks.

* Remove a stack

```bash
$./kargo remove <stack>
```

* Remove all the stacks

```bash
$./remove remove all
```


