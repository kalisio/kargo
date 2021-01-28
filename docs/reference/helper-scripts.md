---
sidebarDepth: 3
---

# Helper scripts

## clear-cache

### Description

Clears the cache of a given layer

`usage: clear-cache <layer>`

### Example

```bash
$./kargo exec clear-cache osm-bright
```

## seed-cache

### Description

Seeds the cache of a given layer

`usage: seed-cache <options...>`

Where `options` specified the [options](https://mapserver.org/mapcache/seed.html#commandline-options) of the [seeder](https://mapserver.org/mapcache/seed.html) tool provided by **MapCache**.

### Example

* Seed **osm-bright** from levels 0 to 7 over the world using 2 threads
  
```bash
$./kargo exec seed-cache "-t osm-bright -z 0,7 -n 2"  
```

* Seed **osm-bright** from levels 8 to 12 over France using 6 threads
  
```bash
$./kargo exec seed-cache "-t osm-bright -z 8,12 -e -625000,5020000,1250000,6880000 -n 6" 
```

## make-tile-index

### Description

Generates a tile index from all the files located on an object storage path.

`usage: make-tile-index <path> <output_prefix>`

Where `path` is an object storage path (similar to rclone's path) to scan for files and `output_prefix` is a prefix used to name the resulting tile index file. The tile index is generated locally, in a temporary folder the tool will create. When the script successfully complete, it will print the full filename to the tile index.

### Example

```bash
$./kargo exec make-tile-index scw:ign_data/bdortho bdortho_index
```
