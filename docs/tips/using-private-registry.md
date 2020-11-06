---
sidebarDepth: 3
---

# Using a private registry

You must first login to the registry using the following [`docker login`](https://docs.docker.com/engine/reference/commandline/login/) command.

```bash
$docker login registry.portal.kalisio.com
```

Then you will be asked to enter your credentials to log in.

```bash
Username: my_username
Password: my_password
```

Once logged in, you credentials will be stored by default in the **Docker** config file. 

