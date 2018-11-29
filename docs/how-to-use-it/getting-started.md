---
sidebar: auto
---

# Getting started

Using **kargo** is quite easy and basically the approach to setup your Geospatial infrastructure is the following:

1. Prepare your Swarm infrastructure: install the prerequisites, provision your infrastructure with the data you want to expose, place constraints.
2. Setup **Kargo**: install **Kargo**, configures and build, if necessary, the services you want to deploy
3. Manage **Kargo**: deploy, update and stop the services

In the following sections, we will explain how to deploy a complete set of services on a given infrastructure such as illustrated in this diagram:


![kargo-example-assumptions](./../assets/kargo-example-assumptions.svg)


We are assuming, you already have a running Swarm infrastructure with:
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

### Provision the data

It is up to you to copy your data to the different nodes. You must have to keep in mind that these data will have to be accessible by the services that you want to deploy. 

::: tip Looking for data ?
We can provide datasets from different sources such as public catalogs and those of our partners such as [OpenMapTiles](https://openmaptiles.com/), [PlanetObserver](https://www.planetobserver.com/). Do bot hesitate to contact us !
:::

### Define node labels

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

### Configure the services

1. Make a copy of our `.env.sample` and rename it to `.env`

2. Update the file with your preferences:

```
TODO
```

### Build the services

Some of the services provided By **Kargo** need to be built and pushed to the local registry in order to be able to deploy them. 
You simply need to run the command:

```bash
$./build-kargo.sh
```

## Manage the services

### Deploy the services

You can either deploy a given stack or deploy all the stacks.

* Deploy a stack

```bash
$./deploy-stack.sh <apps|dbs|jobs|weacast>
```

* Deploy all the stacks

```bash
$./deploy-kargo.sh
```

### Remove the services

You can either remove a given stack or remove all the stacks.

* Stop a stack

```bash
$./remove-stack.sh <apps|dbs|jobs|weacast>
```

* Stop all the stacks

```bash
$./remove-kargo.sh
```
