{{/*
Builds a config map from all the files in a folder. Files can be templated.
@parap .context   The caller's context
@param .name      The name for the created config map
@param .folder    The folder to scan to create the config map
*/}}
{{- define "configMap.fromFolder" -}}
apiVersion: v1
kind: ConfigMap
metadata:
  name: {{ .name }}
  namespace: {{ .context.Release.Namespace }}
data:
{{- range $path, $_ := (.context.Files.Glob (printf "%s/*" .folder)) }}
  {{ trimPrefix (printf "%s/" $.folder) $path }}: |
    {{- tpl ($.context.Files.Get $path) $.context | nindent 4 }}
{{- end }}
{{- end -}}

