#!/bin/sh

# The script assumes:
#  - /etc/mapcache/mapcache.xml is the mapcache config

# The script expects the following env vars:
# - SEED_LAYERS: the layers to seed
# - [ MIN_ZOOM, MAX_ZOOM ]: the zoom interval to seed
# - NUM_THREADS: the number of threads to use for mapcache_seed
# - FORCE_SEED: define to force seed even if tiles already exists

max_attempts=3

# Default mapcache options
#  -q no stats clobbering logs, just fails
#  -n number of threads
#  -P 100 to keep running even if some tiles fail
#  -L /path/to/failed_tiles to record failed tiles in order to try again these
mapcache_opts="-q -c /etc/mapcache/mapcache.xml -n $NUM_THREADS -P 100 -L /tmp/failed_tiles"
if [ -n "$FORCE_SEED" ]; then
    echo "Force seed is enabled"
    # -f to force seed even if tile exists
    mapcache_opts="-f $mapcache_opts"
fi

for layer in $SEED_LAYERS; do
    for zoom in $(seq "$MIN_ZOOM" "$MAX_ZOOM"); do
        echo "Seeding $layer/z$zoom ..."
        rm -f /tmp/failed_tiles
        # Seed and record failed tiles
        mapcache_seed $mapcache_opts -t "$layer" -z "$zoom,$zoom"
        failed_tiles=$(wc -l < /tmp/failed_tiles)
        # Do we have failed tiles ?
        if [ "$failed_tiles" -ne 0 ]; then
            keep_seeding=1
            num_attempts=1
            while [ $keep_seeding -eq 1 ]; do
                echo "Seeding $layer/z$zoom ($num_attempts/$max_attempts) ..."
                # Seed again, using failed tiles file
                mv /tmp/failed_tiles /tmp/retry_tiles
                mapcache_seed $mapcache_opts -t "$layer" -z "$zoom,$zoom" -R /tmp/retry_tiles
                failed_tiles=$(wc -l < /tmp/failed_tiles)
                if [ "$failed_tiles" -eq 0 ]; then
                    echo "Seed for $layer/z$zoom succeeded after $num_attempts attempts"
                    keep_seeding=0
                else
                    num_attempts=$(expr "$num_attempts" + 1)
                    if [ "$num_attempts" -ge $max_attempts ]; then
                        echo "Seed for $layer/z$zoom failed after $num_attempts attempts"
                        keep_seeding=0
                    fi
                fi
            done
        fi
    done
done
