{{/*
Renders an object that contains a list of key/value properties that can be transformed into environement variables
Usage:
{{ include "common.environment.render" (dict "env" .Values.path.to.the.env "context" $) }}
*/}}
{{- define "common.environment.render" -}}
{{- $defaultSecret := include "common.names.secret" .context }}
{{- range $key, $value := .env }}
- name: {{ $key | snakecase | upper}}
  {{- if kindIs "map" $value }}
  valueFrom:
    secretKeyRef:
      name: {{ $value.secret | default $defaultSecret }}
      key: {{ $value.key | default (kebabcase $key) }}
  {{- else }}
  value: {{ include "common.tplvalues.render" (dict "value" $value "context" $.context) | quote }}
  {{- end }}
{{- end }}
{{- end -}}
