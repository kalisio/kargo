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

Builds the docker image corresponding to the desired service and push it to the **registry**. 

The services that can be built are the following:

| command parameter | services |
| --- | --- |
| `kano` | the **Kano** application. The version to build is read from the `KANO_TAG` variable. |
| `mapproxy` | the **MapProxy** application. The version to build is read from the `MAPPROXY_TAG` variable. |
| `maputnik` | the **maputnik**. The version to build is read from the `MAPUTNIK_TAG` variable. |
| `mapserver` | the **MapServer** application. The version to build is read from the `MAPSERVER_TAG` variable. |
| `mapcache` | the **MapCache** application. The version to build is read from the `MAPCACHE_TAG` variable. |

### configure

`usage: kargo configure`

Generate the configuration by merging the default configuration with your workspace's configuration. The merged configuration files is stored in the `.kargo` directory at the root directory of **Kargo**

### deploy

`usage: kargo deploy <stack|all> [delay]`

Deploys the specified stack. The stack must be defined in the `STACKS`.

When specifying `all`, it deploys all the stacks. The stacks are deployed in the order defined in the `STACKS` variable and a `delay` (in seconds) can be specified to wait before deploying each stack. By default the delay is `5` seconds.

### exec

`usage: kargo exec <script> <arguments>`

Tells **Kargo** to execute the given script. The script must be stored in the `scripts` folder. 

::: tip
Using the `exec` command allows you to take into account the environment within your scripts.
:::

::: warning
If you need to provide multiple arguments to the script, it requires double quotes around the arguments list.
:::

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

### redeploy

`usage: kargo redeploy <stack|all>`

Re-deploys the specified stack. The stack must be defined in the `STACKS` variable.

::: tip
This is a convenient command that run the series of commands: `remove`, `configure` and `deploy`.
:::

### use

`usage: kargo use <workspace>`

Tells **Kargo** to use the specified workspace.

