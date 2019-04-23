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
| `mapproxy` | the **MapProxy** application. The version to build is read from the `MAPPROXY_TAG` variable. |
| `geoserver` | the **GeoServer**. The version as well as the list of plugins to build are read from the `GEOSERVER_TAG`  and `GEOSERVER_PLUGINS` variables. |
| `maputnik` | the **maputnik**. The version to build is read from the `MAPUTNIK_TAG` variable. |
| `weacast-loaders` | The list of the loaders to be build is read from the `WEACAST_MODELS` variable. For all the loaders to be built, the version and database url are read from the `WEACAST_LOADER_TAG` and `WEACAST_DB_URL` variables. |

### configure

`usage: kargo configure`

Generate the configuration by merging the default configuration with your workspace's configuration. The merged configuration files is stored in the `.kargo` directory at the root directory of **Kargo**

### deploy

`usage: kargo deploy <stack|all>`

Deploys the specified stack. The stack must be defined in the `STACKS`.

When specifying `all`, it deploys all the stacks. The stacks are deployed in the order defined in the `STACKS` variable.

### info

`usage: kargo info`

Displays some information about the current workspace

### pull

`usage: kargo pull`

Pulls the workspace from the remote **Git** repository.

### remove

`usage: kargo remove <stack|all>`

Removes the specified stack. The stack must be defined in the `STACKS` variable.

When specifying `all`, it removes Removes all the stacks. The stacks are removed in the inverse order defined in the `STACKS` variable.

### use

`usage: kargo use <workspace>`

Tells **Kargo** to use the specified workspace.

