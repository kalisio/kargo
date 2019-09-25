---
sidebarDepth: 3
---

# CLI

## Options

### -h, --help

`usage: kargo -h | --help`

Print basic help to use the command **Kargo**

### -v, --version

`usage: kargo -v | --version`

Print the version of **Kargo**

## Commands

### build

`usage: kargo build <service`

Builds the docker image corresponding to the desired service and push it into **registry**. 

The services that can be built are the following:

| command parameter | services |
| --- | --- |
| `kano` | the **Kano** application. The version to build is read from the `KANO_TAG` variable. |
| `mapproxy` | the **MapProxy** application. The version to build is read from the `MAPPROXY_TAG` variable. |
| `maputnik` | the **maputnik**. The version to build is read from the `MAPUTNIK_TAG` variable. |
| `mapserver` | the **MapServer** application. The version to build is read from the `MAPSERVER_TAG` variable. |
| `weacast-loaders` | The list of the loaders to be build is read from the `WEACAST_MODELS` variable. For all the loaders to be built, the version and database url are read from the `WEACAST_LOADER_TAG` and `WEACAST_DB_URL` variables. |

### configure

`usage: kargo configure`

Generate the configuration by merging the default configuration with your workspace's configuration. The merged configuration files is stored in the `.kargo` directory at the root directory of **Kargo**

### deploy

`usage: kargo deploy <stack|all>`

Deploys the specified stack. The stack must be defined in the `STACKS`.

When specifying `all`, it deploys all the stacks. The stacks are deployed in the order defined in the `STACKS` variable.

### import

`usage: kargo import <service`

Import from an archive the docker image corresponding to the given service and push it into **registry**. The archive to be imported is read from the variable `<SERVICE>_ARCHIVE`. It could be an URL that point to a file on the host or a remote file. To import a remote archive, the URL must begin with:
* `http` or `https` if the archive is accessible using the **HTTP** protocol 
* an existing **rclone** remote source if the archive is stored on a well-known store (i.e. Google Driver, OpenStack Object Store, AWS S3...).

The following parameters allow to import the archive `dummy-1.2.1` from a remote `bucket` using **rclone**. The source `store` must be defined in your **rclone** configuration file.

```bash
DUMMY_SERVICE=localhost:5000/dummy
DUMMY_TAG=1.2.1
DUMMY_ARCHIVE=store:bucket/dummy-1.2.1.tgz
```

### info

`usage: kargo info`

Displays some information about the current workspace

### pull

`usage: kargo pull`

Pulls the workspace from the remote **Git** repository.

### remove

`usage: kargo remove <stack|all>`

Removes the specified stack. The stack must be defined in the `STACKS` variable.

When specifying `all`, it removes all the stacks. The stacks are removed in the inverse order defined in the `STACKS` variable.

### update

`usage: kargo update [--force|-f] <stack|all>`

Tells **Kargo** to update the services of the given stack. You can force the update with the option `--force`. 

::: tip
The `--force` flag causes the service’s tasks to be shut down and replaced with new ones.
:::

### use

`usage: kargo use <workspace>`

Tells **Kargo** to use the specified workspace.

