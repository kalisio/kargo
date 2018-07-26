---
sidebar: auto
---

# Tips

## How to use GDAL Utilities ?

To be able to use [GDAL Utilities ](http://www.gdal.org/gdal_utilities.html), we recommend to run a GDAL container and mount the data partition:

```bash
$docker run  -v /mnt/data:/data -t -i geodata/gdal:latest /bin/bash
```

You are now able to use GDAL:

```bash
$gdalinfo /data/IGN/bdortho_5m.mbtiles
```

If you need to access another container you will need to run the GDAL container within the same network. For instance, the following command will allow you to link the GDAL container to an existing `Postgis` container in the network `kargo`.

```bash
$docker run --network=kargo --link postgis:postgis -v /mnt/data:/data -t -i webmapp/gdal-docker:latest /bin/bash
```

::: tip 
When running a process that last a long time, your SSH connection can be shut down causing the process to stop. To avoid this problem, one solution is to use [screen](https://en.wikipedia.org/wiki/GNU_Screen). 

Here are the basics to know:
1. Create a screen: `sreen -S my-session`
2. Launch your process: `execute my long process`
3. Leave your screen: `[ctrl]+[a]` then `[d]`
4. Going back to your screen: `screen -r my-session`

Check the [doc](https://www.gnu.org/software/screen/manual/screen.html) to learn more.
:::

## How to clip rasters with GeoJSON polygons ?

```bash
$gdalwarp -of MBTILES -crop_to_cutline -cutline france.geojson bdortho_5m.mbtiles bdortho_5m_cut.mbtiles
```

