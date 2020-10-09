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
$./kargo exec clear-cache "osm-bright 9 6"
```

## seed-cache

### Description

Seeds the cache of a given layer

`usage: seed-cache <layer> <max-level> <nb-threads>`

Where:
* `max-level` specifies the maximum level
* `nb-threads` specifies the number of threads to used when seeding

### Example

```bash
$./kargo exec seed-cache "osm-bright 9 6"
```