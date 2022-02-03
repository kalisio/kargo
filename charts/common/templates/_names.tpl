{{/* vim: set filetype=mustache: */}}

{{/*
Names ares truncated at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
*/}}

{{/*
Expand the name of the chart.
*/}}
{{- define "common.names.name" -}}
{{- .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "common.names.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create host name used by ingress host.
*/}}
{{- define "common.names.host" -}}
{{- printf "%s.%s" ((hasKey .Values "hostOverride") | ternary .Values.hostOverride .Chart.Name) .Values.global.subdomain | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create secret name used by common environement variables
*/}}
{{- define "common.names.secret" -}}
{{- default .Release.Name .Values.global.secret | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
If release name contains chart name it will be used as a full name.
*/}}
{{- define "common.names.fullname" -}}
{{- if contains .Chart.Name .Release.Name -}}
{{- .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
