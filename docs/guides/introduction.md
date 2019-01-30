# Introduction

Using **kargo** is quite easy and basically the approach to setup your Geospatial infrastructure is the following:

1. [Prepare your Swarm infrastructure](./prepare-the-infrastructure.md): install **Kargo** with the prerequisites, provision your infrastructure with the data you want to expose, place constraints.
2. [Setup the services](./setup-the-services.md): configure and build (if necessary) the services you want to deploy
3. [Manage the services](./manage-the-services.md): deploy, update and stop the services

In the following guides, we will explain how to deploy a complete set of services on a given infrastructure such as illustrated in this diagram:

![kargo-example-assumptions](./../assets/kargo-example-assumptions.svg)

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



