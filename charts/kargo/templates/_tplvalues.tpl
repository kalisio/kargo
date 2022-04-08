{{/* vim: set filetype=mustache: */}}

{{/*
Renders a value that contains template.
Usage:
{{ include "kargo.tplvalues.render" ( dict "value" .Values.path.to.the.Value "context" $) }}
source from https://github.com/bitnami/charts/blob/master/bitnami/common/templates/
*/}}
{{- define "kargo.tplvalues.render" -}}
    {{- if typeIs "string" .value }}
        {{- tpl .value .context }}
    {{- else }}
        {{- tpl (.value | toYaml) .context }}
    {{- end }}
{{- end -}}
