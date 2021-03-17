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

Usage: `create_directory_if_not_exist <directory`

### delete_directory_if_exist

Deletes the given directory if it exists.

Usage: `delete_directory_if_exist <directory`
  
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

### drop_mariadb_user()

Deletes the given user.

Usage: `drop_mariadb_user <user>`

### backup_mariadb_db()

Backup the given database to the specified directory. The generated backup file compressed using **gzip** and is named accordingly the name of the database, e.g. `<database>.gz`.

Usage: `backup_mariadb_db <user> <password> <database> <directory>`

### restore_mariadb_db()

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

### drop_postgis_user()

Deletes the given user.

Usage: `drop_postgis_user <user>`

### backup_postgis_db()

Backup the given database to the specified directory. The generated backup file compressed using **gzip** and is named accordingly the name of the database, e.g. `<database>.gz`.

Usage: `backup_postgis_db <user> <password> <database> <directory>`

### restore_postgis_db()

Restore the given database from the specified backup file. The backup file must be compressed using **gzip** compression and located in the specified directory.

Usage: `restore_postgis_db <user> <password> <database> <directory>`

## rclone

### remote_exists

Returns whether the given remote exists.

Usage: `remote_exists <remote>`
  
### copy_to_remote

Copy the given source to the specified remote location

Usage: `copy_to_store <remote> <source> <destination>`

### copy_from_remote

Copy from given remote source to the specified location

Usage: `copy_from_store <remote> <source> <destination>`

## slack

### notify_slack

Send an informational message to slack

Usage: `notify_slack <message> [default|good|danger]`

### notify_slack_good

Send a message with the style `good` to slack.

Usage: `notify_slack_good <message>`

### notify_slack_danger

Send a message with the style `danger` to slack.

Usage: `notify_slack_danger <message>`
 