---
sidebarDepth: 3
---

# Packaging images


It may be useful to package images of certain services (be.g. built services) to store a version or to deliver to a client who cannot access the registers.
To do this, you can use the [image save](../reference/cli.md#image-save) command:

```bash
$./kargo image save vigicrues
$./kargo image save tileservergl
$./kargo image save mongodb
$./kargo image save redis
$./kargo image save thredds
$ls -al archives
total 1369520
drwxrwxr-x  2 ubuntu ubuntu      4096 Feb 29 10:22 .
drwxrwxr-x 14 ubuntu ubuntu      4096 Feb 28 21:25 ..
-rw-rw-r--  1 ubuntu ubuntu         0 Feb 28 19:09 .gitkeep
-rw-rw-r--  1 ubuntu ubuntu 130735307 Feb 28 21:36 kalisio.k-vigicrues_1.0.0.tar.gz
-rw-rw-r--  1 ubuntu ubuntu 468515606 Feb 28 21:28 klokantech.tileserver-gl_v2.4.0.tar.gz
-rw-rw-r--  1 ubuntu ubuntu 128983975 Feb 28 21:26 mongo_3.6.5.tar.gz
-rw-rw-r--  1 ubuntu ubuntu  34773857 Feb 28 21:26 redis_5.tar.gz
-rw-rw-r--  1 ubuntu ubuntu 508610419 Feb 28 21:32 unidata.thredds-docker_4.6.11.tar.gz
```

Or better, you can write your own script to packages the required services and use the command [exec](../reference/cli.md#exec) to launch the process. The following scripts iterates through the services and generate an archive. Once finished it copies the archives to an ObjectStorage using [rclone](https://rclone.org/).

```bash
#!/bin/bash
# DELIERY is defined in your .env file
# DELIVERY="vigicrues tileservergl mongodb redis thredds"
cd ../..
for SERVICE in $DELIVERY; do
  echo packaging $SERVICE
  ./kargo image save $SERVICE
done
rclone copy archives s3:bucket/path --include *.gz
```

