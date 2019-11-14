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

#### Install a local Registry

Some of the services proposed by **Kargo** need to be built before you can deploy it. For this reason, it is necessary to have a local Registry on the Manager node to store the images.

To install it you can run the command `docker stack deploy -c registry.yml registry` where the Compose file `registry.yml` has the following content:

```
version: '3.5'

services:
  registry:
    image: registry:2
    ports:
      - 5000:5000
    networks:
      - swarm-network
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.role == manager

networks:
  swarm-network:
    name: <swarm network>
    external: true
```

#### Install SSHFS

As we will see later, **SSHFS** is used to share the **Kargo** configuration among the nodes. You need to install **SSHFS** on each worker. 
To install **SSHFS** you may run the following procedure:

```bash
sudo apt-get install sshfs
# Edit fuse conf to enable the allow_other option
sudo nano /etc/fuse.conf and uncomment the line
#user_allow_other
```

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

### Install kargo

1. Clone the **Kargo** repository

On the manager node, clone the repository in your home directory:

```bash
$git clone https://github.com/kalisio/kargo.git
```

2. Share the **Kargo** configuration with the workers.

On each worker, use `sshfs` to share the `configs` directory. The path to the shared directory must be the same on the workers as on the manager.

```bash
mkdir -p /home/ubuntu/kargo/.kargo/configs
sshfs ubuntu@<swam manager ip>:/home/ubuntu/kargo/.kargo/configs /home/ubuntu/kargo/.kargo/configs -o IdentityFile=/home/ubuntu/.ssh/ssh.pem -o allow_other
```

For the volume to be permanently mounted (even at restart), we can add the following entry in the crontab:

```bash
@reboot sshfs ubuntu@<swam manager ip>:/home/ubuntu/kargo/.kargo/configs /home/ubuntu/kargo/.kargo/configs -o IdentityFile=/home/ubuntu/.ssh/ssh.pem -o allow_other -o StrictHostKeyChecking=no
```

::: warning
As we faced various issues using `/etc/fstab` to automatically mount the the shared directory, we found more convenient to use use the crontab solution.
:::

::: tip
**Kargo** provides an helper script that can be used to share the configuration. You have to copy the script on each nodes and execute it with the manager private IP:
```bash
$./setup-worker <manager_private_ip>
```
:::

### Provision the data

It is up to you to copy your data to the different nodes. You must have to keep in mind that these data will have to be accessible by the services that you want to deploy. 

::: tip Looking for data ?
We can provide datasets from different sources such as public catalogs and those of our partners such as [OpenMapTiles](https://openmaptiles.com/), [PlanetObserver](https://www.planetobserver.com/). Do bot hesitate to contact us at contact@kalisio.com.
:::

### Define node constraints

Once you have copy the datasets to the different nodes, you need to add some labels to the nodes that can be used to specify constraints when deploying the services.

In our case, we need to add the following labels:

```bash
# On worker-0
$docker node update --label-add tileservergl=true jqtuxajexk18ypiylk6i6dv0q
# On worker-1 
$docker node update --label-add weacast=true wfr5hwhfd5413p2ql9hwitbkw
# On worker-2
$docker node update --label-add mongodb=true 8980x3d76x1r7kxoa7h5lzob8
$docker node update --label-add postgis=true 8980x3d76x1r7kxoa7h5lzob8
```

Check your node labels mapping: 

```bash
$docker node ls -q | xargs sudo docker node inspect -f '{{ .ID }} [{{ .Description.Hostname }}]: {{ .Spec.Labels }}'
jqtuxajexk18ypiylk6i6dv0q [worker-0]: map[tileservergl:true]
x6tc2sqi99vp106icwf2nmyp0 [manager]: map[]
wfr5hwhfd5413p2ql9hwitbkw [worker-1]: map[weacast:true]
8980x3d76x1r7kxoa7h5lzob8 [worker-2]: map[mongodb:true postgis:true]
```

## Setup the services

### Setup your workspace

1. Create a directory to store your configuration stuff. Give it the name of your choice.

2. Create the **Environment** file by making a copy of the `.env.sample` file into your configuration. Rename it as `.env`

3. Edit the `.env` file and configure the services you want to deploy. See the section [Environment](./reference/environment) to have the complete reference of the services settings.

4. Define the stacks you want to deploy:
   1. Define the `STACKS` variable listing the stacks
   2. For each stacks, define a variable `<NAME>_STACK` listing the services to deploy

```bash
STACKS="dbs weacast hydro air apps"
APPS_STACK="tileservergl mapproxy maputnik thredds kano"
DBS_STACK="mongodb"
WEACAST_STACK="arpege-world-loader arpege-europe-loader arome-france-loader gfs-world-loader weacast"
VIGICRUES_HYDRO="vigicrues hubeau-stations hubeau-observations"
AIR_STACK="teleray openaq"
```

5. Tell kargo to use your workspace

```bash
$./kargo use <path/to/your/workspace/directory>
```

::: tip
We strongly recommend to use **Git** to manage your workspace
:::

### Generate the configuration

Since **Kargo** allows you to override the default configuration with your workspace configuration, it is required to generate the merged configuration before deploying the services. Simply, run the command:

```bash
$./kargo update
```

::: tip
When using **Git** to manage your workspace, you can take advantage of the command `kargo pull` to pull the workspace.
:::

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


