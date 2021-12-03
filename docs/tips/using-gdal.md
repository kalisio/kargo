---
sidebarDepth: 3
---

# Using GDAL

**Kargo** provides a [GDAL](https://www.gdal.org/index.html) docker image shipped with a set of additional tools:
* [ImageMagick](https://www.imagemagick.org/)
* [sqlitepipe](https://github.com/icetan/sqlitepipe)

::: tip
The **GDAL** image extends the official [OSGEO image](https://hub.docker.com/r/osgeo/gdal).
:::

## Basic usage

Simply run the following command on a given worker node:

```bash
$docker run  -v /path/to/your/data:/data -t -i kalisio/gdal:3.4.0 /bin/bash
$cd /data
$gdalinfo path/to/my/dataset
```

If you need to access another container you will need to run the GDAL container within the same network. For instance, the following command will allow you to link the GDAL container to an existing `Postgis` container in the network `kargo`.

```bash
$docker run --network=kargo  -v /mnt/data:/data -t -i kalisio/gdal:3.4.0 /bin/bash
```

If you need to use the AWS CLI, you may need to share your credentials:

```bash
$docker run  -v /path/to/your/data:/data /home/ubuntu/.aws:/root/.aws -t -i kalisio/gdal:latest /bin/bash
```

## Use cases

### How to post process an MBTiles file ?

The **gdal** image comes with the [sqlitepipe](https://github.com/icetan/sqlitepipe) utility that can be used for this purpose. The following example shows how to use **sqlitepipe** and [ImageMagick](https://www.imagemagick.org/) to make white pixels transparent on all of the tiles stored within the MBTiles file.

```bash
$sqlite3 my-mbtiles.mbtiles
sqlite>UPDATE tiles SET tile_data=pipe(tile_data, '/usr/bin/convert', '-transparent', 'white', 'png:-', 'png:-');
sqlite>VACUUM tiles;
sqlite>.quit
```

::: warning

According the size of the MBTiles to process you may encounter some memory errors and have such an output: `Error: database or disk is full` 
You should tell **sqlite** to use a free disk space to work with the temp files:

```bash
sqlite> pragma temp_store = 1;
sqlite> pragma temp_store_directory = '/directory/with/lots/of/space';
```
:::

### How to create a tile index from an S3 mosaic ?

1. list the tiles in a file while prefixing the tile path with the driver `viss3`

```bash
$aws s3 ls s3://<bucket>/<path>/ | awk '{print $4}' | sed 's/^/\/vsis3\/<bucket>\/<path>\//' > tiles.txt
```

2. Create the tile index

```bash
$gdaltindex <mosaic>.shp --optfile tiles.txt
```

::: tip

If you want to serve the mosaic using **MapServer**, it is recommended to apply the `shptree` command in order
to optimize the index:

```bash
$shptree <mosaic>.shp
```

In addition you will probably need to provide some parameters, such as `wcs_extent` and `wcs_resolution`. You can get them by building a [VRT](https://gdal.org/drivers/raster/vrt.html):

```bash
$gdalbuildvrt -input_file_list tiles.txt <mosaic>.vrt
$gdalinfo <mosaic>.vrt
```
:::
