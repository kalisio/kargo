---
sidebarDepth: 3
---

# Infrastructure management

In this guide, basic knowledge of [Helm](https://helm.sh) releases and [Kubernetes](https://kubernetes.io/docs/home/) concepts are assumed.

Infrastructures are managed using the **kaptain** script. This script is a bash script wrapping calls to [Helmfile](https://helmfile.readthedocs.io/en/latest/) adding policies we found interesting.

**Helmfile** is a tool that sits on top of **Helm**, it allows to manage a set of Helm releases through it's `helmfile.yaml` configuration file. With this set of tools (Helmfile, Helm and Kubernetes), it becomes possible to setup a source repository where configuration for a whole infrastructure is checked under revision. Managing what's deployed on the cluster, configuration options and every other infrastructure aspect now goes through editing of the proper yaml file (or template).

## The kaptain script

The **kaptain** script provides the following commands:
* *config* to install only the Helm releases that are labelled as `config` for the infrastructure
* *install* to install all the releases required by the infrastructure.
* *uninstall* to undo what *install* did (minus the config releases).
* *provision* to setup and trigger the job that will provision data on the infrastructure (this is optional)
* *diff* to diff what's about to be installed through the *install* command with what's currently deployed on the infrastructure

Internally, **kaptain** calls helmfile with the proper set of options.
* *config* will ask helmfile to deploy all releases labelled as `action: config` in the `helmfile.yaml`
* *install* will ask helmfile to deploy all releases labelled as `action: install` in the `helmfile.yaml`. Usually there's a direct dependency between releases labelled for install and those labelled for config, meaning it will first deploy configs, and then proceed to install.
* *provision* will ask helmfile to deploy all releases labelles as `action: provision`.

Theses [labels](https://helmfile.readthedocs.io/en/latest/#labels-overview) are the only requirements of the `helmfile.yaml` to be usable with **kaptain**.

## Sample infrastructure definition

Let's start with a folder where we'll define our infrastructure. The first file to add is `helmfile.yaml`.

```yaml
# Declare required helm repositories here
repositories:
  # Bitnami
  - name: bitnami
    url: https://charts.bitnami.com/bitnami
  # Others ...
  - name: foo
    url: https://charts.foo.bar/blah
```

We often have two additional yaml files along the helmfile :
* `global.yaml` is where we put a bunch of infrastructure scope variables, we want them to be available in Helm and Helmfile templates.
* `secret.yaml` is where we put a bunch of infrastructure scope secrets, we usually deploy a secret named as the infrastructure where we pack all those values.

In order to use values from `global.yaml` in our helmfile templates, we usually add the following to the `helmfile.yaml`: 

```yaml
# Values listed here will be available in _helmfile_ templates
values:
  - global.yaml
  # This one is defined by kaptain, as it is required, helmfile will stop if it's undefined
  - namespace: {{ requiredEnv "KAPTAIN_NAMESPACE" }}
```

And to use those values from helm templates, we usually factorize configuration using the following :

```yaml
# This factorize reusable definitions
templates:
  install: &install
    # namespace where to deploy
    namespace: {{ .Values.namespace }}
    values:
       # where to lookup release values.yaml (.gotmpl mean that helmfile must run it throught template evaluation)
      - configs/{{`{{ .Release.Name }}`}}/values.yaml.gotmpl
      # also add values from global.yaml in Helm values
      - global.yaml
    set:
      - name: global.secret
        value: {{ .Values.namespace }}
    # selector label
    labels:
      action: install
    # install _after_ provision-configs
    needs:
      - provision-configs
```

This block defines a set of default configuration options for releases we'll label using `action: install` :
* the namespace the release will be deployed into: `namespace: { { .Values.namespace } }`. This is a Helmfile template, and values are looked up from what we defined with the `values` block earlier.
* where to lookup release values. From our `global.yaml` file and from a file named `values.yaml.gotmpl` located in a subfolder named as the release in the `configs` folder.
* it also defines a special value named `global.secret` we use in our [kargo](https://github.com/kalisio/kargo/charts) charts.
* it defines the release label(s). Here it's `action: install` which means it's a release that'll get deployed as part of `kaptain install`
* a direct dependency on the `provision-configs` release.

With all this in place, we can start adding releases to deploy in our `helmfile.yaml` :

```yaml
releases:
  # This chart is _always_ installed first
  - name: provision-configs
    chart: provision-configs
    namespace: {{ .Values.namespace }}
    values:
      - global.yaml
      - secret.yaml
      - configs/{{`{{ .Release.Name }}`}}/values.yaml.gotmpl
    labels:
      action: config
  - name: redis
    chart: bitnami/redis
    version: ~15.7.0
    <<: *install
  - name: redis-commander
    chart: kalisio/redis-commander
    <<: *install
```

`redis` and `redis-commander` are releases sharing the `install` definitions we added earlier.

`provision-configs` is a local chart labelled using `action: config`. It'll be installed first (because `install` labelled releases depend on it). We usually use this chart to deploy a bunch of infrastructure scope kubernetes manifests such as the rclone config secret, config maps for charts that don't generate their own and instead rely on user generated objects, the infrastructure secret built from the `secret.yaml`file, various cronjobs ...

## Sample provision-configs chart

This chart can be used to deploy infrastructure config objects before other releases are installed. This is where you can add all the custom kubernetes manifests you may need. In the previous sample, the `provision-configs` release was defined as : 

```yaml
releases:
  # This chart is _always_ installed first
  - name: provision-configs
    chart: provision-configs
    namespace: {{ .Values.namespace }}
    values:
      - global.yaml
      - secret.yaml
      - configs/{{`{{ .Release.Name }}`}}/values.yaml.gotmpl
    labels:
      action: config
```

This states that we'll deploy the chart in the same namespace as other charts, that content from `global.yaml` and `secret.yaml` will be available to Helm templates, along with `provision-config's` values.yaml. It also defines the `action: config` label which mean this will be deployed as part of `kaptain config`.

We ususally find at least the following manifests in it's `template` folder :

### namespace-secret.yaml

```yaml
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  name: {{ .Release.Namespace }}
stringData:
  {{- toYaml .Values.secret | nindent 2 }}
```

This will contain all the secrets from the `secret.yaml` file.

### namespace-configmap.yaml

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: {{ .Release.Namespace }}
data:
{{ .Values.configKeys | toYaml | indent 2 }}
```

This will embed everything defined under `configKeys` in the release values.yaml

### rclone-config-secret.yaml

```yaml
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  name: rclone-config
stringData:
  rclone.conf: |
{{ (.Files.Get ".kaptain/rclone.conf") | indent 4 }}
```

This will create a secret from the `rclone.conf` file.

## Kaptain's hooks

Before calling helmfile with the proper set of options, the **kaptain** script runs user defined hooks. These are defined in the `hooks.sh` file. This file is sourced from the main **kaptain** script with the hook name as first parameter. The following environment variables are available in the hooks:
 * **KAPTAIN_NAMESPACE**: the namespace we're deploying releases into
 * **KAPTAIN_NAMESPACE_DIRECTORY**: the directory where the helmfile.yaml is located
 * **KAPTAIN_WORKING_DIRECTORY**: the directory from where we started the kaptain script

Hooks are defined as `pre-$ACTION` and `post-$ACTION` where `$ACTION` is one of the **kaptain**'s command (*install*, *config*, ...). There's an additional hook, named `make-config` which is called prior to *install*, *provision*, *config* and *diff* commands. This hook is commonly used to setup local charts, such as `provision-configs`. It is used for example to copy config files that must be turned into configmaps into the `provision-configs` hierarchy. It is required because Helm won't allow files from outside the chart to be read during the template evaluation.

This `make-config` hook is what makes possible to put the content of the `rclone.conf` file in the [rclone config secret](./#rclone-config-secret.yaml) sample. The template uses `(.Files.Get ".kaptain/rclone.conf")` to read the file's content, but Helm will only agree to read files included in the chart it is currently processing (here, the `provision-config`chart).

Here's an example of `hooks.sh`:

```shell
# The name of the hook being run
HOOK=$1

if [ "$HOOK" = "make-config" ]; then
    # These are used in the namespace-configmap
    export REPO_REVISION=$(git -C $KAPTAIN_WORKING_DIRECTORY describe --tags --always --dirty=+)
    export REPO_BRANCH=$(git -C $KAPTAIN_WORKING_DIRECTORY rev-parse --abbrev-ref HEAD)

    embed_config express-gateway
    rclone_config tileservergl
    embed_config mapserver
    embed_config mapcache
    embed_config weacast
    embed_config kano
    # add gdal-wmts sources to both mapserver & mapcache
    rclone copy "$KAPTAIN_WORKING_DIRECTORY/configs/gdal-wmts/" "$KAPTAIN_NAMESPACE_DIRECTORY/provision-configs/.kaptain/mapserver"
    rclone copy "$KAPTAIN_WORKING_DIRECTORY/configs/gdal-wmts/" "$KAPTAIN_NAMESPACE_DIRECTORY/provision-configs/.kaptain/mapcache"
fi
```

`embed_config`, `rclone_config` are helper functions defined in the **kaptain** script.

Those hooks could probably be replaced by [helmfile hooks](https://helmfile.readthedocs.io/en/latest/#hooks) but this is still work in progress ...
