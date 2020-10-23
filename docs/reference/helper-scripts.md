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

Where:
* `nb-threads` specifies the number of threads to used when seeding.
* `layer` specifies the layer to seed.
* `min-level` specifies the minimum level.
* `max-level` specifies the maximum level.
* `extent` specifies the spatial extent, `minx,miny,maxx,maxy` to be taken into account. It must be expressed in the coordinate system of the specified layer.

### Example

```bash
$./kargo exec seed-cache "6 osm-bright 0 7"  # seed osm-bright over the world
$./kargo exec seed-cache "6 osm-bright 8 12 -625000,5020000,1250000,6880000"  # seed osm-bright over France
```