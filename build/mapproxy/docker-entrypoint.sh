#!/bin/sh
set -e

if [ "$1" = 'mapproxy' ]; then
  echo "Running additional provisioning"
  for f in /docker-entrypoint-initmapproxy.d/*; do
    case "$f" in
      */*.sh)     echo "$0: running $f"; . "$f" ;;
      */mapproxy.yml)   cp /docker-entrypoint-initmapproxy.d/mapproxy.yml /mapproxy/mapproxy.yaml ;;
      */mapproxy.yaml) cp /docker-entrypoint-initmapproxy.d/mapproxy.yaml /mapproxy/mapproxy.yaml ;;
    esac
    echo
  done

  if [ ! -f /mapproxy/mapproxy.yaml ] ;then
    mapproxy-util create -t base-config /mapproxy/
  fi
  if [ ! -f /mapproxy/app.py ] ;then
    mapproxy-util create -t wsgi-app -f /mapproxy/mapproxy.yaml /mapproxy/app.py
  fi
  echo "Start mapproxy"

  if [ "$2" = 'http' ]; then
    exec uwsgi --wsgi-disable-file-wrapper --http 0.0.0.0:8080 --wsgi-file /mapproxy/app.py --master --enable-threads --processes $MAPPROXY_PROCESSES --threads $MAPPROXY_THREADS --stats 0.0.0.0:9191
    exit
  fi

  exec uwsgi --wsgi-disable-file-wrapper --http-socket 0.0.0.0:8080 --wsgi-file /mapproxy/app.py --master --enable-threads --processes $MAPPROXY_PROCESSES --threads $MAPPROXY_THREADS --stats 0.0.0.0:9191
  exit
fi

exec "$@"

