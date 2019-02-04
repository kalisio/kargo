# Using the Kargo toolbox

The [kargo-toolbox](https://github.com/kalisio/kargo-toolbox) is a docker image shipping a set of tools to help processing geospatial data. Precisely it comes with:
* [GDAL](https://www.gdal.org/index.html)
* [ImageMagick](https://www.imagemagick.org/)
* [sqlitepipe](https://github.com/icetan/sqlitepipe)

## Basic usage

Simply run the following command on a given worker node:

```bash
$docker run  -v /path/to/your/data:/data -t -i kalisio/kargo-toolbox:latest /bin/bash
$cd data
$gdalinfo path/to/my/dataset
```

If you need to access another container you will need to run the GDAL container within the same network. For instance, the following command will allow you to link the GDAL container to an existing `Postgis` container in the network `kargo`.

```bash
$docker run --network=kargo  -v /mnt/data:/data -t -i kalisio/kargo-toolbox:latest /bin/bash
```

## Use cases

### How to post process an MBTiles file ?

The **kargo-toolbox** project comes with the [sqlitepipe](https://github.com/icetan/sqlitepipe) utility that can be used for this purpose. The following example shows how to use **sqlitepipe** and [ImageMagick](https://www.imagemagick.org/) to make white pixels transparent on all of the tiles stored within the MBTiles file.

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
