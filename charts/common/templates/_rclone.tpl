{{/*
Builds an initContainer using rclone to pull an archive of the config from an object storage.
@param .context   The caller's context
@param .args      The parameters for the template, expects the following:
  - sourceArchive The source file to copy from the object storage (can be templated)
  - targetVolume  The name of the volume on which the config will be extracted
*/}}
{{- define "common.rcloneConfig.renderInitContainer" -}}
{{- $source := include "common.tplvalues.render" (dict "value" .args.sourceArchive "context" .context) }}
- name: rclone-config
  image: rclone/rclone
  command:
    - sh
    - -c
    - SRC_FILE=$(basename {{ $source }}) && cd /target && echo "Rcloning from {{ $source }} ..." && rclone copy {{ $source }} . --progress && tar -xf "$SRC_FILE" && rm "$SRC_FILE"
  volumeMounts:
    - mountPath: /config/rclone/rclone.conf
      name: rclone-config
      subPath: rclone.conf
      readOnly: true
    - mountPath: /target
      name: {{ .args.targetVolume }}
{{- end -}}

{{/*
Builds a volume to mount the rclone config.
@param .context   The caller's context
@param .args      The parameters for the template, expects the following:
  - rcloneSecret   The name of the secret containing the rclone.conf (can be templated)
*/}}
{{- define "common.rcloneConfig.renderVolume" -}}
- name: rclone-config
  secret:
    secretName: {{ include "common.tplvalues.render" (dict "value" .args.rcloneSecret "context" .context) }}
{{- end -}}
