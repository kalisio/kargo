{{/*
Builds an initContainer definition to perform envsubst on a configMap and store the result to some other volume.
@param .context           The caller's context
@param .args.env          An object with key-value pairs to define environment variables
@param .args.targetVolume The target volume where to copy the configMap content
@param .args.helperSuffix A suffix to use when when requiring more than one invocation of the helper
*/}}
{{- define "kargo.envsubstConfig.renderInitContainer" -}}
- name: envsubst-config{{ default "" .args.helperSuffix }}
  image: bhgedigital/envsubst
  command:
    - find
    - -L
    - /source
    - '('
    - -type
    - f
    - -o
    - -type
    - l
    - ')'
    - '!'
    - -path
    - /source/..*
    - -exec
    - sh
    - -c
    - OUT_FILE=$(echo "$0" | sed -e "s#^/source#/target#") && OUT_DIR=$(dirname "$OUT_FILE") && mkdir -p "$OUT_DIR" && echo "Running envsubst on $OUT_FILE ..." && envsubst < "$0" > "$OUT_FILE"
    - '{}'
    - ';'
  env:
    {{- include "kargo.environment.render" (dict "env" .args.env "context" .context) | indent 4 }}
  volumeMounts:
    - mountPath: /source
      name: envsubst-config-source-config{{ default "" .args.helperSuffix }}
      readOnly: true
    - mountPath: /target
      name: {{ .args.targetVolume }}
{{- end -}}

{{/*
Builds a volume definition that should be used with kargo.envsubstConfig.renderInitContainer
@param .context              The caller's context
@param .args.sourceConfigMap The configMap to use as source for the copy
@param .args.helperSuffix    A suffix to use when when requiring more than one invocation of the helper
*/}}
{{- define "kargo.envsubstConfig.renderVolume" -}}
- name: envsubst-config-source-config{{ default "" .args.helperSuffix }}
  configMap:
    name: {{ include "kargo.tplvalues.render" ( dict "value" .args.sourceConfigMap "context" .context ) }}
{{- end -}}
