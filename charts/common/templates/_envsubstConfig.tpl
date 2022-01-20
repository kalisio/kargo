{{/*
Renders an object that contains a list of key/value properties that can be transformed into environement variables
Usage:
{{ include "common.environment.render" . }}
*/}}
{{- define "common.envsubstConfig.renderInitContainer" -}}
- name: envsubst-config
  image: bhgedigital/envsubst
  command:
    - find
    - -L
    - /templated
    - '('
    - -type
    - f
    - -o
    - -type
    - l
    - ')'
    - '!'
    - -path
    - /templated/..*
    - -exec
    - sh
    - -c
    - OUT_FILE=$(echo "$0" | sed -e "s#^/templated#/rendered#") && OUT_DIR=$(dirname "$OUT_FILE") && mkdir -p "$OUT_DIR" && envsubst < "$0" > "$OUT_FILE"
#    - OUT_FILE=$(echo "$0" | sed -e "s#^/templated#/rendered#") && OUT_DIR=$(dirname "$OUT_FILE") && echo "$OUT_DIR" && echo "$0" && echo "$OUT_FILE"
    - '{}'
    - ';'
  env:
    {{- include "common.environment.renderImpl" (dict "env" .args.env "context" .context) | indent 4 }}
  volumeMounts:
    - mountPath: /templated
      name: envsubst-template-config
      readOnly: true
    - mountPath: /rendered
      name: {{ .args.renderedVolumeName }}
{{- end -}}

{{/*
Renders an object that contains a list of key/value properties that can be transformed into environement variables
Usage:
{{ include "common.environment.render" . }}
*/}}
{{- define "common.envsubstConfig.renderVolume" -}}
- name: envsubst-template-config
  configMap:
    name: {{ include "common.tplvalues.render" ( dict "value" .args.configMapName "context" .context ) }}
{{- end -}}
