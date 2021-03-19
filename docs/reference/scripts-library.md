---
sidebarDepth: 3
---

# Scripts library

## file

### file_exists

Returns whether the given file exists or not.

Usage: `file_exists <file>`

### directory_exists

Returns whether the given directory exists or not.

Usage: `directory_exists <directory>`
  
### file_path_exists

Returns whether the given file path (file or directory) exists or not.

Usage: `file_path_exists <file_path>`

### delete_file_if_exists

Deletes the given file if it exists.

Usage: `delete_file_if_exist <file>`

### create_directory_if_not_exist

Creates the given directory if it does not exist

Usage: `create_directory_if_not_exist <directory>`

### delete_directory_if_exist

Deletes the given directory if it exists.

Usage: `delete_directory_if_exist <directory>`

### make_temp_directory

Creates a unique temporary directory in the system's temp and prints it's location. You must specify a directory prefix to be used as part of the directory final name.

Usage: `TEMP=$(make_temp_directory <folder_prefix>)`

## gdal

### make_tile_index_from_remote_directory

Creates a tile index from all the files in the given remote directory. Use `remote_location` to specify the bucket where to list files and `tile_index_prefix` to specify where to write the tile index files (on the local file system).

Usage: `make_tile_index_from_remote_directory <remote_location> <tile_index_prefix>`

Example: `make_tile_index_from_remote_directory scw:bunch/of/cog /srv/mapserver/spain` would produce `/srv/mapserver/spain.shp` from all the files located in `scw:bunch/of/cog`.

## log

### log_info

Displays informational messages.

Usage: `log_info <message>`

### log_warning

Displays warning messages.

Usage: `log_warning <message>`

### log_error

Displays error messages.

Usage: `log_error <message>`

## mapcache

### delete_mapcache_tiles

Deletes cached tiles from the given layer. You can control the zoom levels from which it will delete tiles using `from_z` and `to_z` (both included in the deletion). You can also restrict deletion to a given area using a geojson file for example (not required).

Usage: `delete_mapcache_tiles <layer_name> <from_z> <to_z> [area]`

### seed_mapcache_tiles

Seed tiles for the given layer. You can control the zoom levels for which it will seed tiles using `from_z` and `to_z` (both included in the seeding process). You can also restrict seeding to a given area using a geojson file for example (not required).

Usage: `seed_mapcache_tiles <layer_name> <from_z> <to_z> <num_threads> [area]`

## mariadb

### mariadb_db_exists

Returns whether the given database exists.

Usage: `mariadb_db_exists <database>`

### create_mariadb_db

Creates the given database.

Usage: `create_mariadb_db <database>`

### create_mariadb_user

Creates the given user and grants him the privileges to access the specified database.

Usage: `create_mariadb_user <user> <password> <database>`

### drop_mariadb_db

Deletes the given database.

Usage: `drop_mariadb_db <database>`

### drop_mariadb_user

Deletes the given user.

Usage: `drop_mariadb_user <user>`

### backup_mariadb_db

Backup the given database to the specified directory. The generated backup file compressed using **gzip** and is named accordingly the name of the database, e.g. `<database>.gz`.

Usage: `backup_mariadb_db <user> <password> <database> <directory>`

### restore_mariadb_db

Restore the given database from the specified backup file. The backup file must be compressed using **gzip** compression and located in the specified directory.

Usage: `restore_mariadb_db <user> <password> <database> <directory>`

## postgis

### postgis_db_exists

Returns whether the given database exists.

Usage: `postgis_db_exists <database>`

### create_postgis_db

Creates the given database.

Usage: `create_postgis_db <database>`

### create_postgis_user

Creates the given user and grants him the privileges to access the specified database.

Usage: `create_postgis_user <user> <password> <database>`

### drop_postgis_db

Deletes the given database.

Usage: `drop_postgis_db <database>`

### drop_postgis_user

Deletes the given user.

Usage: `drop_postgis_user <user>`

### backup_postgis_db

Backup the given database to the specified directory. The generated backup file compressed using **gzip** and is named accordingly the name of the database, e.g. `<database>.gz`.

Usage: `backup_postgis_db <user> <password> <database> <directory>`

### restore_postgis_db

Restore the given database from the specified backup file. The backup file must be compressed using **gzip** compression and located in the specified directory.

Usage: `restore_postgis_db <user> <password> <database> <directory>`

## rclone

::: tip 
Scripts rely on the **rclone** configuration.
:::

### remote_exists

Returns whether the given remote exists.

Usage: `remote_exists <remote>`
  
### copy_to_remote

Copy the given source to the specified remote location

Usage: `copy_to_remote <remote> <source> <destination>`

### copy_from_remote

Copy from given remote source to the specified location

Usage: `copy_from_remote <remote> <source> <destination>`

## slack

::: warning
To be able to send **Slack** notification you must define the variable `SLACK_WEBHOOK_URL`.
:::

### notify_slack

Send an informational message to slack

Usage: `notify_slack <message> [default|good|danger]`

### notify_slack_good

Send a message with the style `good` to slack.

Usage: `notify_slack_good <message>`

### notify_slack_danger

Send a message with the style `danger` to slack.

Usage: `notify_slack_danger <message>`

## swarm

### all_swarm_nodes

Print the name of all the nodes in the swarm

Usage: `ALL=$(all_swarm_nodes)`

### docker_id_from_name

Print the id of the docker with a matching name

Usage: `DOCKER_ID=$(docker_id_from_name mapserver)`

### other_swarm_nodes

Print the name of the all nodes in the swarm minus the node we're running on.

Usage: `OTHER=$(other_swarm_nodes)`

### this_swarm_node

Print the name of the running node.

Usage: `THIS=$(this_swarm_node)`
