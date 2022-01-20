{{/*
*/}}
{{- define "common.rcloneConfig.renderInitContainer" -}}
{{- $defaultRcloneSecret := include "common.names.rcloneSecret" .context }}
{{- $source := include "common.tplvalues.render" (dict "value" .args.source "context" .context) }}
- name: rclone-config
  image: rclone/rclone
  command:
    - sh
    - -c
    - SRC_FILE=$(basename {{ $source }}) && cd /target && rclone copy {{ $source }} . --progress && tar -xf "$SRC_FILE" && rm "$SRC_FILE"
  volumeMounts:
    - mountPath: /config/rclone/rclone.conf
      name: rclone-config
      subPath: rclone.conf
      readOnly: true
    - mountPath: /target
      name: {{ .args.targetVolumeName }}
{{- end -}}

{{/*
*/}}
{{- define "common.rcloneConfig.renderVolume" -}}
{{- $defaultRcloneSecret := include "common.names.rcloneSecret" .context }}
- name: rclone-config
  secret:
    secretName: {{ .args.rcloneSecret | default $defaultRcloneSecret }}
{{- end -}}

{{- define "common.rclone.genConfig" -}}
{{- if index .Values.secret "scw-s3-access-key" }}
[scw]
type = s3
provider = Scaleway
env_auth = false
endpoint = s3.fr-par.scw.cloud
access_key_id = {{ index .Values.secret "scw-s3-access-key" }}
secret_access_key = {{ index .Values.secret "scw-s3-secret-access-key" }}
region = fr-par
location_constraint = fr-par
acl = private
server_side_encryption =
storage_class =
{{- end }}
{{- end -}}

{{- define "common.rclone.secret" -}}
apiVersion: v1
kind: Secret
metadata:
  name: {{ include "common.names.rcloneSecret" . }}
  namespace: {{ .Release.Namespace }}
  labels: {{- include "common.labels.standard" . | nindent 4 }}
    {{- if .Values.commonLabels }}
    {{- include "common.tplvalues.render" ( dict "value" .Values.commonLabels "context" $ ) | nindent 4 }}
    {{- end }}
  {{- if .Values.commonAnnotations }}
  annotations: {{- include "common.tplvalues.render" ( dict "value" .Values.commonAnnotations "context" $ ) | nindent 4 }}
  {{- end }}
type: Opaque
data:
  rclone.conf: {{ include "common.rclone.genConfig" . | b64enc }}
{{- end -}}
