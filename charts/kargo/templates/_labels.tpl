{{/* vim: set filetype=mustache: */}}

{{/*
Expand Kubernetes standard labels
source from https://github.com/bitnami/charts/blob/master/bitnami/common/templates/
*/}}
{{- define "kargo.labels.standard" -}}
app.kubernetes.io/name: {{ include "kargo.names.name" . }}
helm.sh/chart: {{ include "kargo.names.chart" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end -}}

{{/*
Expand Labels to use on deploy.spec.selector.matchLabels and svc.spec.selector
source from https://github.com/bitnami/charts/blob/master/bitnami/common/templates/
*/}}
{{- define "kargo.labels.matchLabels" -}}
app.kubernetes.io/name: {{ include "kargo.names.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end -}}
