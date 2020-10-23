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