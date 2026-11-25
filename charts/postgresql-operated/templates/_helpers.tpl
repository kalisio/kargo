{{/* vim: set filetype=mustache: */}}

{{/* Name of the CNPG Cluster */}}
{{- define "postgresql-operated.clusterName" -}}
{{- printf "%s-postgresql-operated" .Release.Name | trunc 50 | trimSuffix "-" -}}
{{- end -}}

{{/* Name of the barman-cloud ObjectStore */}}
{{- define "postgresql-operated.objectStoreName" -}}
{{- default (printf "%s-backup" (include "postgresql-operated.clusterName" .)) .Values.barmanCloud.objectStoreName -}}
{{- end -}}

{{/* Secret holding the S3 credentials: barmanCloud.s3Secret, else global.secret, else release name */}}
{{- define "postgresql-operated.s3Secret" -}}
{{- default (include "kargo.names.secret" .) .Values.barmanCloud.s3Secret -}}
{{- end -}}

{{/* Name of the secret holding the owner credentials */}}
{{- define "postgresql-operated.ownerSecretName" -}}
{{- printf "%s-owner-credentials" (include "postgresql-operated.clusterName" .) -}}
{{- end -}}

{{/* Image tag: image.version, legacy image.tag, else chart appVersion */}}
{{- define "postgresql-operated.imageTag" -}}
{{- coalesce .Values.image.version .Values.image.tag .Chart.AppVersion -}}
{{- end -}}
