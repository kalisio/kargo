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
| `weacast-loaders` | The list of the loaders to be build is read from the `WEACAST_MODELS` variable. For all the loaders to be built, the version and database url are read from the `WEACAST_LOADER_TAG` and `WEACAST_DB_URL` variables. |

### configure

`usage: kargo configure`

Generate the configuration by merging the default configuration with your workspace's configuration. The merged configuration files is stored in the `.kargo` directory at the root directory of **Kargo**

### deploy

`usage: kargo deploy <stack|all> [delay]`

Deploys the specified stack. The stack must be defined in the `STACKS`.

When specifying `all`, it deploys all the stacks. The stacks are deployed in the order defined in the `STACKS` variable and a `delay` (in seconds) can be specified to wait before deploying each stack. By default the delay is `5` seconds.

### exec

`usage: kargo exec <script>`

Tells **Kargo** to execute the given script. The script must be stored in the `scripts` folder. 

::: tip
Using the `exec` command allows you to take into account the environment within your scripts.
:::


### image load

`usage: kargo image load <service`

Load from an archive the docker image corresponding to the given service and push it to the **registry**. The archive to be imported is read from the variable `<SERVICE>_ARCHIVE`. It could be an URL that point to a file on the host or a remote file. To import a remote archive, the URL must begin with:
* `http` or `https` if the archive is accessible using the **HTTP** protocol 
* an existing **rclone** remote source if the archive is stored on a well-known store (i.e. Google Driver, OpenStack Object Store, AWS S3...).

The following parameters allow to import the archive `dummy-1.2.1` from a remote `bucket` using **rclone**. The source `store` must be defined in your **rclone** configuration file.

```bash
DUMMY_ARCHIVE=store:bucket/dummy-1.2.1.tgz
./kargo image load dummy
```

::: tip
The downloaded archive is stored in the `archives` directory.
:::

### image save

`usage: kargo image save <service`

Save the image of a the given service to the an archive. The archive is stored in the `archives` directory. 

::: tip
If the service is defined to use an archived image, the process is skipped as the image is already available in the `archives` directory.
If the image is not in the **registry**, the image is automatically pulled.
:::

::: warning
The service should be running before archiving.
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

### update

`usage: kargo update [--force|-f] <stack|all>`

Tells **Kargo** to update the services of the given stack. You can force the update with the option `--force`. 

::: tip
The `--force` flag causes the service’s tasks to be shut down and replaced with new ones.
:::

### use

`usage: kargo use <workspace>`

Tells **Kargo** to use the specified workspace.

