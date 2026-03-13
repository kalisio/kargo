{{/*
Expand the name of the chart.
*/}}
{{- define "postgresql-operated.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "postgresql-operated.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Define version app
*/}}
{{- define "postgresql-operated.appVersion" -}}
{{- if .Values.image.version }}
{{- printf "%s" .Values.image.version }}
{{- else -}}
{{- printf "%s" .Chart.AppVersion }}
{{- end }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "postgresql-operated.labels" -}}
helm.sh/chart: {{ include "postgresql-operated.chart" . }}
app.kubernetes.io/version: {{ include "postgresql-operated.appVersion" . }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}
