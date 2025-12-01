{{/*
Builds a cronjob to backup and another to restore the specified mariadb instance.
The restore cronjob is suspended to be started manually.
@param .context         The caller's root scope
@param .args            The parameters for the backup cronjob. The template expects the following:
  - image               The image to use to pull mariadb-dump
  - host                The host where the dabatabase is running
  - username            The database username to use to perform the dump
  - password            The username password
  - rcloneSecret        The name of the secret where rclone.conf can be found
  - backupCron          The schedule expression "0 * * * *"
  - restoreTimestamp    The timestamp to use as restore archive
  - remotePath          The folder where the backup will be transfered (the filename is generated).
  - ignoreBackup        If true the backup cronjob is not created (default false)
  - ignoreRestore       If true the restore cronjob is not created (default false)
  - nameSuffix          If defined, this suffix will be added to the backup filename (and to the cronjob names) (default "")
*/}}
{{- define "kargo.mariadb-backup-restore-cronjobs" -}}
{{- $remotePath := include "kargo.tplvalues.render" (dict "value" .args.remotePath "context" .context) }}
{{- $rcloneSecret := include "kargo.tplvalues.render" (dict "value" .args.rcloneSecret "context" .context) }}
{{- $name := print .args.host (.args.nameSuffix | default "") }}
{{- $dbSecret := print "backup-restore-" $name }}
{{- $restoreFile := print $name "-" .args.restoreTimestamp ".sql.gz" }}
apiVersion: v1
kind: Secret
metadata:
  name: {{ $dbSecret }}
  namespace: {{ .context.Release.Namespace }}
type: Opaque
stringData:
  my.cnf: |-
    [client]
    password={{ .args.password }}

{{- if eq (include "kargo.tplvalues.render" (dict "value" (.args.ignoreBackup | default false) "context" .context) | trim | lower) "false" }}
---
apiVersion: {{ .context.Capabilities.APIVersions.Has "batch/v1" | ternary "batch/v1" "batch/v1beta1" }}
kind: CronJob
metadata:
  name: backup-{{ $name }}
  namespace: {{ .context.Release.Namespace | quote }}
spec:
  schedule: "{{ .args.backupCron }}"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      ttlSecondsAfterFinished: 3600
      template:
        spec:
          restartPolicy: Never
          initContainers:
            - name: db-dump
              image: {{ .args.image }}
              command:
                - /bin/sh
              args:
                - -c
                - >-
                  TIMESTAMP=$(date +%Y%m%d-%H%M) &&
                  BACKUP_FILE={{ $name }}-$TIMESTAMP.sql.gz &&
                  echo "Dumping {{ .args.host }} to $BACKUP_FILE ..." &&
                  mariadb-dump --defaults-extra-file=/kalisio/my.cnf --host={{ .args.host }} --user={{ .args.username }} --lock-tables --all-databases --add-drop-database | gzip > /backup/$BACKUP_FILE
              volumeMounts:
                - mountPath: /kalisio/my.cnf
                  name: db-secret
                  subPath: my.cnf
                  readOnly: true
                - mountPath: /backup
                  name: db-dump-temp
          containers:
            - name: rclone-dump
              image: rclone/rclone
              command:
                - /bin/sh
              args:
                - -c
                - rclone copy /backup {{ $remotePath }} --progress --include "{{ $name }}-*.sql.gz"
              volumeMounts:
                - mountPath: /backup
                  name: db-dump-temp
                  readOnly: true
                - mountPath: /config/rclone/rclone.conf
                  name: rclone-config
                  subPath: rclone.conf
                  readOnly: true
          volumes:
            - name: db-dump-temp
              emptyDir: {}
            - name: db-secret
              secret:
                secretName: {{ $dbSecret }}
            - name: rclone-config
              secret:
                secretName: {{ $rcloneSecret }}

{{- end -}}
{{- if eq (include "kargo.tplvalues.render" (dict "value" (.args.ignoreRestore | default false) "context" .context) | trim | lower) "false" }}
---
apiVersion: {{ .context.Capabilities.APIVersions.Has "batch/v1" | ternary "batch/v1" "batch/v1beta1" }}
kind: CronJob
metadata:
  name: restore-{{ $name }}
  namespace: {{ .context.Release.Namespace | quote }}
spec:
  suspend: true
  schedule: "* * * * *"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      ttlSecondsAfterFinished: 3600
      template:
        spec:
          restartPolicy: Never
          initContainers:
            - name: rclone-dump
              image: rclone/rclone
              command:
                - /bin/sh
              args:
                - -c
                - rclone copy {{ $remotePath }}/{{ $restoreFile }} /restore --progress
              volumeMounts:
                - mountPath: /restore
                  name: db-dump-temp
                - mountPath: /config/rclone/rclone.conf
                  name: rclone-config
                  subPath: rclone.conf
                  readOnly: true
          containers:
            - name: db-restore
              image: {{ .args.image }}
              command:
                - /bin/sh
              args:
                - -c
                - >-
                  echo "Restoring from {{ $restoreFile }} ..." &&
                  gunzip < /restore/{{ $restoreFile }} | mariadb --defaults-extra-file=/kalisio/my.cnf --host={{ .args.host }} --user={{ .args.username }}
              volumeMounts:
                - mountPath: /kalisio/my.cnf
                  name: db-secret
                  subPath: my.cnf
                  readOnly: true
                - mountPath: /restore
                  name: db-dump-temp
                  readOnly: true
          volumes:
            - name: db-dump-temp
              emptyDir: {}
            - name: db-secret
              secret:
                secretName: {{ $dbSecret }}
            - name: rclone-config
              secret:
                secretName: {{ $rcloneSecret }}

{{- end -}}
{{- end -}}

{{/*
Builds a cronjob to backup and another to restore the specified postgresql instance.
The restore cronjob is suspended to be started manually.
@param .context         The caller's root scope
@param .args            The parameters for the backup cronjob. The template expects the following:
  - image               The image to use to pull mariadb-dump
  - host                The host where the dabatabase is running
  - username            The database username to use to perform the dump
  - password            The username password
  - rcloneSecret        The name of the secret where rclone.conf can be found
  - backupCron          The schedule expression "0 * * * *"
  - remotePath          The folder where the backup will be transfered (the filename is generated).
  - restoreTimestamp    The timestamp to use as restore archive
  - ignoreBackup        If true the backup cronjob is not created (default false)
  - ignoreRestore       If true the restore cronjob is not created (default false)
  - nameSuffix          If defined, this suffix will be added to the backup filename (and to the cronjob names) (default "")
*/}}
{{- define "kargo.postgresql-backup-restore-cronjobs" -}}
{{- $remotePath := include "kargo.tplvalues.render" (dict "value" .args.remotePath "context" .context) }}
{{- $rcloneSecret := include "kargo.tplvalues.render" (dict "value" .args.rcloneSecret "context" .context) }}
{{- $name := print .args.host (.args.nameSuffix | default "") }}
{{- $dbSecret := print "backup-restore-" $name }}
{{- $restoreFile := print $name "-" .args.restoreTimestamp ".sql.gz" }}
apiVersion: v1
kind: Secret
metadata:
  name: {{ $dbSecret }}
  namespace: {{ .context.Release.Namespace }}
type: Opaque
stringData:
  pgpass: {{ .args.host }}:5432:*:{{ .args.username }}:{{ .args.password }}

{{- if eq (include "kargo.tplvalues.render" (dict "value" (.args.ignoreBackup | default false) "context" .context) | trim | lower) "false" }}
---
apiVersion: {{ .context.Capabilities.APIVersions.Has "batch/v1" | ternary "batch/v1" "batch/v1beta1" }}
kind: CronJob
metadata:
  name: backup-{{ $name }}
  namespace: {{ .context.Release.Namespace | quote }}
spec:
  schedule: "{{ .args.backupCron }}"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      ttlSecondsAfterFinished: 3600
      template:
        spec:
          restartPolicy: Never
          initContainers:
            - name: db-dump
              image: {{ .args.image }}
              command:
                - /bin/sh
              args:
                - -c
                - >-
                  TIMESTAMP=$(date +%Y%m%d-%H%M) &&
                  BACKUP_FILE={{ $name }}-$TIMESTAMP.sql.gz &&
                  PGPASSFILE=/tmp/pgpass &&
                  cp /pgpass $PGPASSFILE &&
                  chown 1001 $PGPASSFILE &&
                  chmod 0600 $PGPASSFILE &&
                  echo "Dumping {{ .args.host }} to $BACKUP_FILE ..." &&
                  pg_dumpall --dbname="postgresql://{{ .args.username }}@{{ .args.host }}:5432?passfile=$PGPASSFILE" --no-password --clean | gzip > /backup/$BACKUP_FILE
              volumeMounts:
                - mountPath: /pgpass
                  name: db-secret
                  subPath: pgpass
                  readOnly: true
                - mountPath: /backup
                  name: db-dump-temp
          containers:
            - name: rclone-dump
              image: rclone/rclone
              command:
                - /bin/sh
              args:
                - -c
                - rclone copy /backup {{ $remotePath }} --progress --include "{{ $name }}-*.sql.gz"
              volumeMounts:
                - mountPath: /backup
                  name: db-dump-temp
                  readOnly: true
                - mountPath: /config/rclone/rclone.conf
                  name: rclone-config
                  subPath: rclone.conf
                  readOnly: true
          volumes:
            - name: db-dump-temp
              emptyDir: {}
            - name: db-secret
              secret:
                secretName: {{ $dbSecret }}
            - name: rclone-config
              secret:
                secretName: {{ $rcloneSecret }}

{{- end -}}
{{- if eq (include "kargo.tplvalues.render" (dict "value" (.args.ignoreRestore | default false) "context" .context) | trim | lower) "false" }}
---
apiVersion: {{ .context.Capabilities.APIVersions.Has "batch/v1" | ternary "batch/v1" "batch/v1beta1" }}
kind: CronJob
metadata:
  name: restore-{{ $name }}
  namespace: {{ .context.Release.Namespace | quote }}
spec:
  suspend: true
  schedule: "* * * * *"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      ttlSecondsAfterFinished: 3600
      template:
        spec:
          restartPolicy: Never
          initContainers:
            - name: rclone-dump
              image: rclone/rclone
              command:
                - /bin/sh
              args:
                - -c
                - rclone copy {{ $remotePath }}/{{ $restoreFile }} /restore --progress
              volumeMounts:
                - mountPath: /restore
                  name: db-dump-temp
                - mountPath: /config/rclone/rclone.conf
                  name: rclone-config
                  subPath: rclone.conf
                  readOnly: true
          containers:
            - name: db-restore
              image: {{ .args.image }}
              command:
                - /bin/sh
              args:
                - -c
                - >-
                  PGPASSFILE=/tmp/pgpass &&
                  cp /pgpass $PGPASSFILE &&
                  chown 1001 $PGPASSFILE &&
                  chmod 0600 $PGPASSFILE &&
                  echo "Restoring from {{ $restoreFile }} ..." &&
                  gunzip < /restore/{{ $restoreFile }} | psql --dbname="postgresql://{{ .args.username }}@{{ .args.host }}:5432?passfile=$PGPASSFILE" --file=- --no-password
              volumeMounts:
                - mountPath: /pgpass
                  name: db-secret
                  subPath: pgpass
                  readOnly: true
                - mountPath: /restore
                  name: db-dump-temp
                  readOnly: true
          volumes:
            - name: db-dump-temp
              emptyDir: {}
            - name: db-secret
              secret:
                secretName: {{ $dbSecret }}
            - name: rclone-config
              secret:
                secretName: {{ $rcloneSecret }}

{{- end -}}
{{- end -}}

{{/*
Builds a cronjob to backup and another to restore the specified mongodb instance.
The restore cronjob is suspended to be started manually.
@param .context         The caller's root scope
@param .args            The parameters for the backup cronjob. The template expects the following:
  - image               The image to use to pull mongodump & mongorestore
  - host                The host where the dabatabase is running
  - username            The database username to use to perform the dump
  - password            The username password
  - rcloneSecret        The name of the secret where rclone.conf can be found
  - backupCron          The schedule expression "0 * * * *"
  - remotePath          The folder where the backup will be transfered (the filename is generated).
  - restoreTimestamp    The timestamp to use as restore archive
  - ignoreBackup        If true the backup cronjob is not created (default false)
  - ignoreRestore       If true the restore cronjob is not created (default false)
  - nameSuffix          If defined, this suffix will be added to the backup filename (and to the cronjob names) (default "")
*/}}
{{- define "kargo.mongodb-backup-restore-cronjobs" -}}
{{- $remotePath := include "kargo.tplvalues.render" (dict "value" .args.remotePath "context" .context) }}
{{- $rcloneSecret := include "kargo.tplvalues.render" (dict "value" .args.rcloneSecret "context" .context) }}
{{- $name := print .args.host (.args.nameSuffix | default "") }}
{{- $dbSecret := print "backup-restore-" $name }}
{{- $restoreFile := print $name "-" .args.restoreTimestamp ".gz" }}
apiVersion: v1
kind: Secret
metadata:
  name: {{ $dbSecret }}
  namespace: {{ .context.Release.Namespace }}
type: Opaque
stringData:
  mongo-config.yml: |-
    password: {{ .args.password | default "" }}
    uri: mongodb://{{ if hasKey .args "username" }}{{ .args.username }}@{{ end }}{{ .args.host }}

{{- if eq (include "kargo.tplvalues.render" (dict "value" (.args.ignoreBackup | default false) "context" .context) | trim | lower) "false" }}
---
apiVersion: {{ .context.Capabilities.APIVersions.Has "batch/v1" | ternary "batch/v1" "batch/v1beta1" }}
kind: CronJob
metadata:
  name: backup-{{ $name }}
  namespace: {{ .context.Release.Namespace | quote }}
spec:
  schedule: "{{ .args.backupCron }}"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      ttlSecondsAfterFinished: 3600
      template:
        spec:
          restartPolicy: Never
          initContainers:
            - name: db-dump
              image: {{ .args.image }}
              command:
                - /bin/sh
              args:
                - -c
                - >-
                  TIMESTAMP=$(date +%Y%m%d-%H%M) &&
                  BACKUP_FILE={{ $name }}-$TIMESTAMP.gz &&
                  echo "Dumping {{ .args.host }} to $BACKUP_FILE ..." &&
                  mongodump --config=/mongo-config.yml --gzip --archive=/backup/$BACKUP_FILE
              volumeMounts:
                - mountPath: /mongo-config.yml
                  name: db-secret
                  subPath: mongo-config.yml
                  readOnly: true
                - mountPath: /backup
                  name: db-dump-temp
          containers:
            - name: rclone-dump
              image: rclone/rclone
              command:
                - /bin/sh
              args:
                - -c
                - rclone copy /backup {{ $remotePath }} --progress --include "{{ $name }}-*.gz"
              volumeMounts:
                - mountPath: /backup
                  name: db-dump-temp
                  readOnly: true
                - mountPath: /config/rclone/rclone.conf
                  name: rclone-config
                  subPath: rclone.conf
                  readOnly: true
          volumes:
            - name: db-dump-temp
              emptyDir: {}
            - name: db-secret
              secret:
                secretName: {{ $dbSecret }}
            - name: rclone-config
              secret:
                secretName: {{ $rcloneSecret }}

{{- end -}}
{{- if eq (include "kargo.tplvalues.render" (dict "value" (.args.ignoreRestore | default false) "context" .context) | trim | lower) "false" }}
---
apiVersion: {{ .context.Capabilities.APIVersions.Has "batch/v1" | ternary "batch/v1" "batch/v1beta1" }}
kind: CronJob
metadata:
  name: restore-{{ $name }}
  namespace: {{ .context.Release.Namespace | quote }}
spec:
  suspend: true
  schedule: "* * * * *"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      ttlSecondsAfterFinished: 3600
      template:
        spec:
          restartPolicy: Never
          initContainers:
            - name: rclone-dump
              image: rclone/rclone
              command:
                - /bin/sh
              args:
                - -c
                - rclone copy {{ $remotePath }}/{{ $restoreFile }} /restore --progress
              volumeMounts:
                - mountPath: /restore
                  name: db-dump-temp
                - mountPath: /config/rclone/rclone.conf
                  name: rclone-config
                  subPath: rclone.conf
                  readOnly: true
          containers:
            - name: db-restore
              image: {{ .args.image }}
              command:
                - /bin/sh
              args:
                - -c
                - >-
                  echo "Restoring from {{ $restoreFile }} ..." &&
                  mongorestore --drop --config=/mongo-config.yml --gzip --archive=/restore/{{ $restoreFile }}
              volumeMounts:
                - mountPath: /mongo-config.yml
                  name: db-secret
                  subPath: mongo-config.yml
                  readOnly: true
                - mountPath: /restore
                  name: db-dump-temp
                  readOnly: true
          volumes:
            - name: db-dump-temp
              emptyDir: {}
            - name: db-secret
              secret:
                secretName: {{ $dbSecret }}
            - name: rclone-config
              secret:
                secretName: {{ $rcloneSecret }}

{{- end -}}
{{- end -}}


{{/*
Builds a cronjob to backup and another to restore the specified mariadb database.
The restore cronjob is suspended to be started manually.
When using the restore cronjob, the target database has to exist before running the job.
@param .context         The caller's root scope
@param .args            The parameters for the backup cronjob. The template expects the following:
  - image               The image to use to pull mariadb-dump
  - host                The host where the dabatabase is running
  - username            The database username to use to perform the dump
  - password            The username password
  - database            The database to dump
  - remotePath          The folder where the backup will be transfered (the filename is generated).
  - rcloneSecret        The name of the secret where rclone.conf can be found
  - backupCron          The schedule expression "0 * * * *"
  - restoreTimestamp    The timestamp to use as restore archive
  - ignoreBackup        If true the backup cronjob is not created (default false)
  - ignoreRestore       If true the restore cronjob is not created (default false)
  - nameSuffix          If defined, this suffix will be added to the backup filename (and to the cronjob names) (default "")
*/}}
{{- define "kargo.mariadb-backup-restore-db-cronjobs" -}}
{{- $remotePath := include "kargo.tplvalues.render" (dict "value" .args.remotePath "context" .context) }}
{{- $rcloneSecret := include "kargo.tplvalues.render" (dict "value" .args.rcloneSecret "context" .context) }}
{{- $name := print .args.database (.args.nameSuffix | default "") }}
{{- $dbSecret := print "backup-restore-" $name "-db" }}
{{- $restoreFile := print $name "-" .args.restoreTimestamp ".sql.gz" }}
apiVersion: v1
kind: Secret
metadata:
  name: {{ $dbSecret }}
  namespace: {{ .context.Release.Namespace }}
type: Opaque
stringData:
  my.cnf: |-
    [client]
    password={{ .args.password }}

{{- if eq (include "kargo.tplvalues.render" (dict "value" (.args.ignoreBackup | default false) "context" .context) | trim | lower) "false" }}
---
apiVersion: {{ .context.Capabilities.APIVersions.Has "batch/v1" | ternary "batch/v1" "batch/v1beta1" }}
kind: CronJob
metadata:
  name: backup-{{ $name }}-db
  namespace: {{ .context.Release.Namespace | quote }}
spec:
  schedule: "{{ .args.backupCron }}"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      ttlSecondsAfterFinished: 3600
      template:
        spec:
          restartPolicy: Never
          initContainers:
            - name: db-dump
              image: {{ .args.image }}
              command:
                - /bin/sh
              args:
                - -c
                - >-
                  TIMESTAMP=$(date +%Y%m%d-%H%M) &&
                  BACKUP_FILE={{ $name }}-$TIMESTAMP.sql.gz &&
                  echo "Dumping {{ .args.database }} to $BACKUP_FILE ..." &&
                  mariadb-dump --defaults-extra-file=/kalisio/my.cnf --host={{ .args.host }} --user={{ .args.username }} {{ .args.database }} | gzip > /backup/$BACKUP_FILE
              volumeMounts:
                - mountPath: /kalisio/my.cnf
                  name: db-secret
                  subPath: my.cnf
                  readOnly: true
                - mountPath: /backup
                  name: db-dump-temp
          containers:
            - name: rclone-dump
              image: rclone/rclone
              command:
                - /bin/sh
              args:
                - -c
                - rclone copy /backup {{ $remotePath }} --progress --include "{{ $name }}-*.sql.gz"
              volumeMounts:
                - mountPath: /backup
                  name: db-dump-temp
                  readOnly: true
                - mountPath: /config/rclone/rclone.conf
                  name: rclone-config
                  subPath: rclone.conf
                  readOnly: true
          volumes:
            - name: db-dump-temp
              emptyDir: {}
            - name: db-secret
              secret:
                secretName: {{ $dbSecret }}
            - name: rclone-config
              secret:
                secretName: {{ $rcloneSecret }}

{{- end -}}
{{- if eq (include "kargo.tplvalues.render" (dict "value" (.args.ignoreRestore | default false) "context" .context) | trim | lower) "false" }}
---
apiVersion: {{ .context.Capabilities.APIVersions.Has "batch/v1" | ternary "batch/v1" "batch/v1beta1" }}
kind: CronJob
metadata:
  name: restore-{{ $name }}-db
  namespace: {{ .context.Release.Namespace | quote }}
spec:
  suspend: true
  schedule: "* * * * *"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      ttlSecondsAfterFinished: 3600
      template:
        spec:
          restartPolicy: Never
          initContainers:
            - name: rclone-dump
              image: rclone/rclone
              command:
                - /bin/sh
              args:
                - -c
                - rclone copy {{ $remotePath }}/{{ $restoreFile }} /restore --progress
              volumeMounts:
                - mountPath: /restore
                  name: db-dump-temp
                - mountPath: /config/rclone/rclone.conf
                  name: rclone-config
                  subPath: rclone.conf
                  readOnly: true
          containers:
            - name: db-restore
              image: {{ .args.image }}
              command:
                - /bin/sh
              args:
                - -c
                - >-
                  echo "Restoring from {{ $restoreFile }} ..." &&
                  gunzip < /restore/{{ $restoreFile }} | mariadb --defaults-extra-file=/kalisio/my.cnf --host={{ .args.host }} --user={{ .args.username }} {{ .args.database }}
              volumeMounts:
                - mountPath: /kalisio/my.cnf
                  name: db-secret
                  subPath: my.cnf
                  readOnly: true
                - mountPath: /restore
                  name: db-dump-temp
                  readOnly: true
          volumes:
            - name: db-dump-temp
              emptyDir: {}
            - name: db-secret
              secret:
                secretName: {{ $dbSecret }}
            - name: rclone-config
              secret:
                secretName: {{ $rcloneSecret }}

{{- end -}}
{{- end -}}


{{/*
Builds a cronjob to backup and another to restore the specified postgresql database.
The restore cronjob is suspended to be started manually.
When using the restore cronjob, the target database has to exist before running the job.
@param .context         The caller's root scope
@param .args            The parameters for the backup cronjob. The template expects the following:
  - image               The image to use to pull mariadb-dump
  - host                The host where the dabatabase is running
  - username            The database username to use to perform the dump
  - password            The username password
  - database            The database to dump
  - remotePath          The folder where the backup will be transfered (the filename is generated).
  - rcloneSecret        The name of the secret where rclone.conf can be found
  - backupCron          The schedule expression "0 * * * *"
  - restoreTimestamp    The timestamp to use as restore archive
  - ignoreBackup        If true the backup cronjob is not created (default false)
  - ignoreRestore       If true the r
  - nameSuffix          If defined, this suffix will be added to the backup filename (and to the cronjob names) (default "")
store cronjob is not created (default false)
*/}}
{{- define "kargo.postgresql-backup-restore-db-cronjobs" -}}
{{- $remotePath := include "kargo.tplvalues.render" (dict "value" .args.remotePath "context" .context) }}
{{- $rcloneSecret := include "kargo.tplvalues.render" (dict "value" .args.rcloneSecret "context" .context) }}
{{- $name := print .args.database (.args.nameSuffix | default "") }}
{{- $dbSecret := print "backup-restore-" $name "-db" }}
{{- $restoreFile := print $name "-" .args.restoreTimestamp ".sql.gz" }}
apiVersion: v1
kind: Secret
metadata:
  name: {{ $dbSecret }}
  namespace: {{ .context.Release.Namespace }}
type: Opaque
stringData:
  pgpass: {{ .args.host }}:5432:*:{{ .args.username }}:{{ .args.password }}

{{- if eq (include "kargo.tplvalues.render" (dict "value" (.args.ignoreBackup | default false) "context" .context) | trim | lower) "false" }}
---
apiVersion: {{ .context.Capabilities.APIVersions.Has "batch/v1" | ternary "batch/v1" "batch/v1beta1" }}
kind: CronJob
metadata:
  name: backup-{{ $name }}-db
  namespace: {{ .context.Release.Namespace | quote }}
spec:
  schedule: "{{ .args.backupCron }}"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      ttlSecondsAfterFinished: 3600
      template:
        spec:
          restartPolicy: Never
          initContainers:
            - name: db-dump
              image: {{ .args.image }}
              command:
                - /bin/sh
              args:
                - -c
                - >-
                  TIMESTAMP=$(date +%Y%m%d-%H%M) &&
                  BACKUP_FILE={{ $name }}-$TIMESTAMP.sql.gz &&
                  PGPASSFILE=/tmp/pgpass &&
                  cp /pgpass $PGPASSFILE &&
                  chown 1001 $PGPASSFILE &&
                  chmod 0600 $PGPASSFILE &&
                  echo "Dumping {{ .args.database }} to $BACKUP_FILE ..." &&
                  pg_dump --dbname="postgresql://{{ .args.username }}@{{ .args.host }}:5432/{{ .args.database }}?passfile=$PGPASSFILE" --no-password | gzip > /backup/$BACKUP_FILE
              volumeMounts:
                - mountPath: /pgpass
                  name: db-secret
                  subPath: pgpass
                  readOnly: true
                - mountPath: /backup
                  name: db-dump-temp
          containers:
            - name: rclone-dump
              image: rclone/rclone
              command:
                - /bin/sh
              args:
                - -c
                - rclone copy /backup {{ $remotePath }} --progress --include "{{ $name }}-*.sql.gz"
              volumeMounts:
                - mountPath: /backup
                  name: db-dump-temp
                  readOnly: true
                - mountPath: /config/rclone/rclone.conf
                  name: rclone-config
                  subPath: rclone.conf
                  readOnly: true
          volumes:
            - name: db-dump-temp
              emptyDir: {}
            - name: db-secret
              secret:
                secretName: {{ $dbSecret }}
            - name: rclone-config
              secret:
                secretName: {{ $rcloneSecret }}

{{- end -}}
{{- if eq (include "kargo.tplvalues.render" (dict "value" (.args.ignoreRestore | default false) "context" .context) | trim | lower) "false" }}
---
apiVersion: {{ .context.Capabilities.APIVersions.Has "batch/v1" | ternary "batch/v1" "batch/v1beta1" }}
kind: CronJob
metadata:
  name: restore-{{ $name }}-db
  namespace: {{ .context.Release.Namespace | quote }}
spec:
  suspend: true
  schedule: "* * * * *"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      ttlSecondsAfterFinished: 3600
      template:
        spec:
          restartPolicy: Never
          initContainers:
            - name: rclone-dump
              image: rclone/rclone
              command:
                - /bin/sh
              args:
                - -c
                - rclone copy {{ $remotePath }}/{{ $restoreFile }} /restore --progress
              volumeMounts:
                - mountPath: /restore
                  name: db-dump-temp
                - mountPath: /config/rclone/rclone.conf
                  name: rclone-config
                  subPath: rclone.conf
                  readOnly: true
          containers:
            - name: db-restore
              image: {{ .args.image }}
              command:
                - /bin/sh
              args:
                - -c
                - >-
                  PGPASSFILE=/tmp/pgpass &&
                  cp /pgpass $PGPASSFILE &&
                  chown 1001 $PGPASSFILE &&
                  chmod 0600 $PGPASSFILE &&
                  echo "Restoring from {{ $restoreFile }} ..." &&
                  gunzip < /restore/{{ $restoreFile }} | psql --dbname="postgresql://{{ .args.username }}@{{ .args.host }}:5432/{{ .args.database }}?passfile=$PGPASSFILE" --file=- --no-password
              volumeMounts:
                - mountPath: /pgpass
                  name: db-secret
                  subPath: pgpass
                  readOnly: true
                - mountPath: /restore
                  name: db-dump-temp
                  readOnly: true
          volumes:
            - name: db-dump-temp
              emptyDir: {}
            - name: db-secret
              secret:
                secretName: {{ $dbSecret }}
            - name: rclone-config
              secret:
                secretName: {{ $rcloneSecret }}

{{- end -}}
{{- end -}}

{{/*
Builds a cronjob to backup and another to restore the specified mongodb database.
The restore cronjob is suspended to be started manually.
@param .context         The caller's root scope
@param .args            The parameters for the backup cronjob. The template expects the following:
  - image               The image to use to pull mongodump & mongorestore
  - host                The host where the dabatabase is running
  - username            The database username to use to perform the dump
  - password            The username password
  - database            The database to dump
  - remotePath          The folder where the backup will be transfered (the filename is generated).
  - rcloneSecret        The name of the secret where rclone.conf can be found
  - backupCron          The schedule expression "0 * * * *"
  - restoreTimestamp    The timestamp to use as restore archive
  - ignoreBackup        If true the backup cronjob is not created (default false)
  - ignoreRestore       If true the restore cronjob is not created (default false)
  - nameSuffix          If defined, this suffix will be added to the backup filename (and to the cronjob names) (default "")
*/}}
{{- define "kargo.mongodb-backup-restore-db-cronjobs" -}}
{{- $remotePath := include "kargo.tplvalues.render" (dict "value" .args.remotePath "context" .context) }}
{{- $rcloneSecret := include "kargo.tplvalues.render" (dict "value" .args.rcloneSecret "context" .context) }}
{{- $name := print .args.database (.args.nameSuffix | default "") }}
{{- $dbSecret := print "backup-restore-" $name "-db" }}
{{- $restoreFile := print $name "-" .args.restoreTimestamp ".gz" }}
apiVersion: v1
kind: Secret
metadata:
  name: {{ $dbSecret }}
  namespace: {{ .context.Release.Namespace }}
type: Opaque
stringData:
  mongo-config.yml: |-
    password: {{ .args.password | default "" }}
    uri: mongodb://{{ if hasKey .args "username" }}{{ .args.username }}@{{ end }}{{ .args.host }}/{{ .args.database }}

{{- if eq (include "kargo.tplvalues.render" (dict "value" (.args.ignoreBackup | default false) "context" .context) | trim | lower) "false" }}
---
apiVersion: {{ .context.Capabilities.APIVersions.Has "batch/v1" | ternary "batch/v1" "batch/v1beta1" }}
kind: CronJob
metadata:
  name: backup-{{ $name }}-db
  namespace: {{ .context.Release.Namespace | quote }}
spec:
  schedule: "{{ .args.backupCron }}"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      ttlSecondsAfterFinished: 3600
      template:
        spec:
          restartPolicy: Never
          initContainers:
            - name: db-dump
              image: {{ .args.image }}
              command:
                - /bin/sh
              args:
                - -c
                - >-
                  TIMESTAMP=$(date +%Y%m%d-%H%M) &&
                  BACKUP_FILE={{ $name }}-$TIMESTAMP.gz &&
                  echo "Dumping {{ .args.database }} to $BACKUP_FILE ..." &&
                  mongodump --config=/mongo-config.yml --gzip --archive=/backup/$BACKUP_FILE
              volumeMounts:
                - mountPath: /mongo-config.yml
                  name: db-secret
                  subPath: mongo-config.yml
                  readOnly: true
                - mountPath: /backup
                  name: db-dump-temp
          containers:
            - name: rclone-dump
              image: rclone/rclone
              command:
                - /bin/sh
              args:
                - -c
                - rclone copy /backup {{ $remotePath }} --progress --include "{{ $name }}-*.gz"
              volumeMounts:
                - mountPath: /backup
                  name: db-dump-temp
                  readOnly: true
                - mountPath: /config/rclone/rclone.conf
                  name: rclone-config
                  subPath: rclone.conf
                  readOnly: true
          volumes:
            - name: db-dump-temp
              emptyDir: {}
            - name: db-secret
              secret:
                secretName: {{ $dbSecret }}
            - name: rclone-config
              secret:
                secretName: {{ $rcloneSecret }}

{{- end -}}
{{- if eq (include "kargo.tplvalues.render" (dict "value" (.args.ignoreRestore | default false) "context" .context) | trim | lower) "false" }}
---
apiVersion: {{ .context.Capabilities.APIVersions.Has "batch/v1" | ternary "batch/v1" "batch/v1beta1" }}
kind: CronJob
metadata:
  name: restore-{{ $name }}-db
  namespace: {{ .context.Release.Namespace | quote }}
spec:
  suspend: true
  schedule: "* * * * *"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      ttlSecondsAfterFinished: 3600
      template:
        spec:
          restartPolicy: Never
          initContainers:
            - name: rclone-dump
              image: rclone/rclone
              command:
                - /bin/sh
              args:
                - -c
                - rclone copy {{ $remotePath }}/{{ $restoreFile }} /restore --progress
              volumeMounts:
                - mountPath: /restore
                  name: db-dump-temp
                - mountPath: /config/rclone/rclone.conf
                  name: rclone-config
                  subPath: rclone.conf
                  readOnly: true
          containers:
            - name: db-restore
              image: {{ .args.image }}
              command:
                - /bin/sh
              args:
                - -c
                - >-
                  echo "Restoring from {{ $restoreFile }} ..." &&
                  mongorestore --drop --config=/mongo-config.yml --nsInclude="*" --gzip --archive=/restore/{{ $restoreFile }}
              volumeMounts:
                - mountPath: /mongo-config.yml
                  name: db-secret
                  subPath: mongo-config.yml
                  readOnly: true
                - mountPath: /restore
                  name: db-dump-temp
                  readOnly: true
          volumes:
            - name: db-dump-temp
              emptyDir: {}
            - name: db-secret
              secret:
                secretName: {{ $dbSecret }}
            - name: rclone-config
              secret:
                secretName: {{ $rcloneSecret }}

{{- end -}}
{{- end -}}
