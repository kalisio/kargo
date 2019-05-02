# Advanced usage

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
Before deploying, do not forget to make the **merged configuration** using the [](../reference/cli.md#configure) subcommand.
:::
