# Tips

## How to use GDAL Utilities ?

To be able to use [GDAL Utilities ](http://www.gdal.org/gdal_utilities.html), we recommend to run a GDAL container and mount the data partition:

```bash
$docker run  -v /mnt/data:/data -t -i kalisio/kargo-toolbox:latest /bin/bash
```

You are now able to use GDAL:

```bash
$gdalinfo <path_to_the_file>
```

If you need to access another container you will need to run the GDAL container within the same network. For instance, the following command will allow you to link the GDAL container to an existing `Postgis` container in the network `kargo`.

```bash
$docker run --network=kargo  -v /mnt/data:/data -t -i kalisio/kargo-toolbox:latest /bin/bash
```

## How to post process an MBTiles file ?

The **kargo-toolbox** project comes with the [sqlitepipe](https://github.com/icetan/sqlitepipe) utility that can be used for this purpose. The following example shows how to use **sqlitepipe** and [ImageMagick](https://www.imagemagick.org/) to make white pixels transparent on all of the tiles stored within the MBTiles file.

```bash
sqlite3 my-mbtiles.mbtiles
UPDATE tiles SET tile_data=pipe(tile_data, '/usr/bin/convert', '-transparent', 'white', 'png:-', 'png:-');
VACUUM tiles;
.quit
```

::: tip
Note that **kargo-toolbox** provides the **ImageMagick** tool
:::

## How to execute a long process from your SSH session ?

When running a process that last a long time, your SSH connection can be shut down causing the process to stop. To avoid this problem, one solution is to use [screen](https://en.wikipedia.org/wiki/GNU_Screen). 

Here are the basics to know:
1. Create a screen: `sreen -S my-session`
2. Launch your process: `execute my long process`
3. Leave your screen: `[ctrl]+[a]` then `[d]`
4. Going back to your screen: `screen -r my-session`

Check the [doc](https://www.gnu.org/software/screen/manual/screen.html) to learn more.

