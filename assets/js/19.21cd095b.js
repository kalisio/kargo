(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{530:function(t,a,e){"use strict";e.r(a);var s=e(13),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"infrastructure-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#infrastructure-management"}},[t._v("#")]),t._v(" Infrastructure management")]),t._v(" "),e("p",[t._v("In this guide, basic knowledge of "),e("a",{attrs:{href:"https://helm.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("Helm"),e("OutboundLink")],1),t._v(" releases and "),e("a",{attrs:{href:"https://kubernetes.io/docs/home/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kubernetes"),e("OutboundLink")],1),t._v(" concepts are assumed.")]),t._v(" "),e("p",[t._v("Infrastructures are managed using the "),e("strong",[t._v("kaptain")]),t._v(" script. This script is a bash script wrapping calls to "),e("a",{attrs:{href:"https://helmfile.readthedocs.io/en/latest/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Helmfile"),e("OutboundLink")],1),t._v(" adding policies we found interesting.")]),t._v(" "),e("p",[e("strong",[t._v("Helmfile")]),t._v(" is a tool that sits on top of "),e("strong",[t._v("Helm")]),t._v(", it allows to manage a set of Helm releases through it's "),e("code",[t._v("helmfile.yaml")]),t._v(" configuration file. With this set of tools (Helmfile, Helm and Kubernetes), it becomes possible to setup a source repository where configuration for a whole infrastructure is checked under revision. Managing what's deployed on the cluster, configuration options and every other infrastructure aspect now goes through editing of the proper yaml file (or template).")]),t._v(" "),e("h2",{attrs:{id:"the-kaptain-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-kaptain-script"}},[t._v("#")]),t._v(" The kaptain script")]),t._v(" "),e("p",[t._v("The "),e("strong",[t._v("kaptain")]),t._v(" script provides the following commands:")]),t._v(" "),e("ul",[e("li",[e("em",[t._v("config")]),t._v(" to install only the Helm releases that are labelled as "),e("code",[t._v("config")]),t._v(" for the infrastructure")]),t._v(" "),e("li",[e("em",[t._v("install")]),t._v(" to install all the releases required by the infrastructure.")]),t._v(" "),e("li",[e("em",[t._v("uninstall")]),t._v(" to undo what "),e("em",[t._v("install")]),t._v(" did (minus the config releases).")]),t._v(" "),e("li",[e("em",[t._v("provision")]),t._v(" to setup and trigger the job that will provision data on the infrastructure (this is optional)")]),t._v(" "),e("li",[e("em",[t._v("diff")]),t._v(" to diff what's about to be installed through the "),e("em",[t._v("install")]),t._v(" command with what's currently deployed on the infrastructure")])]),t._v(" "),e("p",[t._v("Internally, "),e("strong",[t._v("kaptain")]),t._v(" calls helmfile with the proper set of options.")]),t._v(" "),e("ul",[e("li",[e("em",[t._v("config")]),t._v(" will ask helmfile to deploy all releases labelled as "),e("code",[t._v("action: config")]),t._v(" in the "),e("code",[t._v("helmfile.yaml")])]),t._v(" "),e("li",[e("em",[t._v("install")]),t._v(" will ask helmfile to deploy all releases labelled as "),e("code",[t._v("action: install")]),t._v(" in the "),e("code",[t._v("helmfile.yaml")]),t._v(". Usually there's a direct dependency between releases labelled for install and those labelled for config, meaning it will first deploy configs, and then proceed to install.")]),t._v(" "),e("li",[e("em",[t._v("provision")]),t._v(" will ask helmfile to deploy all releases labelles as "),e("code",[t._v("action: provision")]),t._v(".")])]),t._v(" "),e("p",[t._v("Theses "),e("a",{attrs:{href:"https://helmfile.readthedocs.io/en/latest/#labels-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("labels"),e("OutboundLink")],1),t._v(" are the only requirements of the "),e("code",[t._v("helmfile.yaml")]),t._v(" to be usable with "),e("strong",[t._v("kaptain")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"sample-infrastructure-definition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sample-infrastructure-definition"}},[t._v("#")]),t._v(" Sample infrastructure definition")]),t._v(" "),e("p",[t._v("Let's start with a folder where we'll define our infrastructure. The first file to add is "),e("code",[t._v("helmfile.yaml")]),t._v(".")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Declare required helm repositories here")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("repositories")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Bitnami")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bitnami\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//charts.bitnami.com/bitnami\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Others ...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//charts.foo.bar/blah\n")])])]),e("p",[t._v("We often have two additional yaml files along the helmfile :")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("global.yaml")]),t._v(" is where we put a bunch of infrastructure scope variables, we want them to be available in Helm and Helmfile templates.")]),t._v(" "),e("li",[e("code",[t._v("secret.yaml")]),t._v(" is where we put a bunch of infrastructure scope secrets, we usually deploy a secret named as the infrastructure where we pack all those values.")])]),t._v(" "),e("p",[t._v("In order to use values from "),e("code",[t._v("global.yaml")]),t._v(" in our helmfile templates, we usually add the following to the "),e("code",[t._v("helmfile.yaml")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Values listed here will be available in _helmfile_ templates")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" global.yaml\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This one is defined by kaptain, as it is required, helmfile will stop if it's undefined")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(' requiredEnv "KAPTAIN_NAMESPACE" '),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("And to use those values from helm templates, we usually factorize configuration using the following :")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This factorize reusable definitions")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("templates")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("install")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token important"}},[t._v("&install")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# namespace where to deploy")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" .Values.namespace "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# where to lookup release values.yaml (.gotmpl mean that helmfile must run it throught template evaluation)")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" configs/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" .Release.Name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/values.yaml.gotmpl\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# also add values from global.yaml in Helm values")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" global.yaml\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" global.secret\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" .Values.namespace "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# selector label")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" install\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# install _after_ provision-configs")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("needs")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" provision"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configs\n")])])]),e("p",[t._v("This block defines a set of default configuration options for releases we'll label using "),e("code",[t._v("action: install")]),t._v(" :")]),t._v(" "),e("ul",[e("li",[t._v("the namespace the release will be deployed into: "),e("code",[t._v("namespace: { { .Values.namespace } }")]),t._v(". This is a Helmfile template, and values are looked up from what we defined with the "),e("code",[t._v("values")]),t._v(" block earlier.")]),t._v(" "),e("li",[t._v("where to lookup release values. From our "),e("code",[t._v("global.yaml")]),t._v(" file and from a file named "),e("code",[t._v("values.yaml.gotmpl")]),t._v(" located in a subfolder named as the release in the "),e("code",[t._v("configs")]),t._v(" folder.")]),t._v(" "),e("li",[t._v("it also defines a special value named "),e("code",[t._v("global.secret")]),t._v(" we use in our "),e("a",{attrs:{href:"https://github.com/kalisio/kargo/charts",target:"_blank",rel:"noopener noreferrer"}},[t._v("kargo"),e("OutboundLink")],1),t._v(" charts.")]),t._v(" "),e("li",[t._v("it defines the release label(s). Here it's "),e("code",[t._v("action: install")]),t._v(" which means it's a release that'll get deployed as part of "),e("code",[t._v("kaptain install")])]),t._v(" "),e("li",[t._v("a direct dependency on the "),e("code",[t._v("provision-configs")]),t._v(" release.")])]),t._v(" "),e("p",[t._v("With all this in place, we can start adding releases to deploy in our "),e("code",[t._v("helmfile.yaml")]),t._v(" :")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("releases")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This chart is _always_ installed first")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" provision"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configs\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" provision"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configs\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" .Values.namespace "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" global.yaml\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" secret.yaml\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" configs/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" .Release.Name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/values.yaml.gotmpl\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bitnami/redis\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ~15.7.0\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("<<")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token important"}},[t._v("*install")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" redis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("commander\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kalisio/redis"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("commander\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("<<")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token important"}},[t._v("*install")]),t._v("\n")])])]),e("p",[e("code",[t._v("redis")]),t._v(" and "),e("code",[t._v("redis-commander")]),t._v(" are releases sharing the "),e("code",[t._v("install")]),t._v(" definitions we added earlier.")]),t._v(" "),e("p",[e("code",[t._v("provision-configs")]),t._v(" is a local chart labelled using "),e("code",[t._v("action: config")]),t._v(". It'll be installed first (because "),e("code",[t._v("install")]),t._v(" labelled releases depend on it). We usually use this chart to deploy a bunch of infrastructure scope kubernetes manifests such as the rclone config secret, config maps for charts that don't generate their own and instead rely on user generated objects, the infrastructure secret built from the "),e("code",[t._v("secret.yaml")]),t._v("file, various cronjobs ...")]),t._v(" "),e("h2",{attrs:{id:"sample-provision-configs-chart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sample-provision-configs-chart"}},[t._v("#")]),t._v(" Sample provision-configs chart")]),t._v(" "),e("p",[t._v("This chart can be used to deploy infrastructure config objects before other releases are installed. This is where you can add all the custom kubernetes manifests you may need. In the previous sample, the "),e("code",[t._v("provision-configs")]),t._v(" release was defined as :")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("releases")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This chart is _always_ installed first")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" provision"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configs\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("chart")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" provision"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configs\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" .Values.namespace "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("values")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" global.yaml\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" secret.yaml\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" configs/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" .Release.Name "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("`"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("/values.yaml.gotmpl\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" config\n")])])]),e("p",[t._v("This states that we'll deploy the chart in the same namespace as other charts, that content from "),e("code",[t._v("global.yaml")]),t._v(" and "),e("code",[t._v("secret.yaml")]),t._v(" will be available to Helm templates, along with "),e("code",[t._v("provision-config's")]),t._v(" values.yaml. It also defines the "),e("code",[t._v("action: config")]),t._v(" label which mean this will be deployed as part of "),e("code",[t._v("kaptain config")]),t._v(".")]),t._v(" "),e("p",[t._v("We ususally find at least the following manifests in it's "),e("code",[t._v("template")]),t._v(" folder :")]),t._v(" "),e("h3",{attrs:{id:"namespace-secret-yaml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#namespace-secret-yaml"}},[t._v("#")]),t._v(" namespace-secret.yaml")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Secret\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Opaque\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" .Release.Namespace "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stringData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" toYaml .Values.secret "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" nindent 2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This will contain all the secrets from the "),e("code",[t._v("secret.yaml")]),t._v(" file.")]),t._v(" "),e("h3",{attrs:{id:"namespace-configmap-yaml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#namespace-configmap-yaml"}},[t._v("#")]),t._v(" namespace-configmap.yaml")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ConfigMap\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" .Release.Namespace "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" .Values.configKeys "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" toYaml "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" indent 2 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This will embed everything defined under "),e("code",[t._v("configKeys")]),t._v(" in the release values.yaml")]),t._v(" "),e("h3",{attrs:{id:"rclone-config-secret-yaml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rclone-config-secret-yaml"}},[t._v("#")]),t._v(" rclone-config-secret.yaml")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Secret\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Opaque\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rclone"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("config\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stringData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rclone.conf")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(' (.Files.Get ".kaptain/rclone.conf") '),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" indent 4 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("This will create a secret from the "),e("code",[t._v("rclone.conf")]),t._v(" file.")]),t._v(" "),e("h2",{attrs:{id:"kaptain-s-hooks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kaptain-s-hooks"}},[t._v("#")]),t._v(" Kaptain's hooks")]),t._v(" "),e("p",[t._v("Before calling helmfile with the proper set of options, the "),e("strong",[t._v("kaptain")]),t._v(" script runs user defined hooks. These are defined in the "),e("code",[t._v("hooks.sh")]),t._v(" file. This file is sourced from the main "),e("strong",[t._v("kaptain")]),t._v(" script with the hook name as first parameter. The following environment variables are available in the hooks:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("KAPTAIN_NAMESPACE")]),t._v(": the namespace we're deploying releases into")]),t._v(" "),e("li",[e("strong",[t._v("KAPTAIN_NAMESPACE_DIRECTORY")]),t._v(": the directory where the helmfile.yaml is located")]),t._v(" "),e("li",[e("strong",[t._v("KAPTAIN_WORKING_DIRECTORY")]),t._v(": the directory from where we started the kaptain script")])]),t._v(" "),e("p",[t._v("Hooks are defined as "),e("code",[t._v("pre-$ACTION")]),t._v(" and "),e("code",[t._v("post-$ACTION")]),t._v(" where "),e("code",[t._v("$ACTION")]),t._v(" is one of the "),e("strong",[t._v("kaptain")]),t._v("'s command ("),e("em",[t._v("install")]),t._v(", "),e("em",[t._v("config")]),t._v(", ...). There's an additional hook, named "),e("code",[t._v("make-config")]),t._v(" which is called prior to "),e("em",[t._v("install")]),t._v(", "),e("em",[t._v("provision")]),t._v(", "),e("em",[t._v("config")]),t._v(" and "),e("em",[t._v("diff")]),t._v(" commands. This hook is commonly used to setup local charts, such as "),e("code",[t._v("provision-configs")]),t._v(". It is used for example to copy config files that must be turned into configmaps into the "),e("code",[t._v("provision-configs")]),t._v(" hierarchy. It is required because Helm won't allow files from outside the chart to be read during the template evaluation.")]),t._v(" "),e("p",[t._v("This "),e("code",[t._v("make-config")]),t._v(" hook is what makes possible to put the content of the "),e("code",[t._v("rclone.conf")]),t._v(" file in the "),e("RouterLink",{attrs:{to:"/guides/#rclone-config-secret.yaml"}},[t._v("rclone config secret")]),t._v(" sample. The template uses "),e("code",[t._v('(.Files.Get ".kaptain/rclone.conf")')]),t._v(" to read the file's content, but Helm will only agree to read files included in the chart it is currently processing (here, the "),e("code",[t._v("provision-config")]),t._v("chart).")],1),t._v(" "),e("p",[t._v("Here's an example of "),e("code",[t._v("hooks.sh")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The name of the hook being run")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HOOK")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$HOOK")]),t._v('"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"make-config"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# These are used in the namespace-configmap")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("REPO_REVISION")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -C $KAPTAIN_WORKING_DIRECTORY describe --tags --always --dirty"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("+"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("REPO_BRANCH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" -C $KAPTAIN_WORKING_DIRECTORY rev-parse --abbrev-ref HEAD"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n\n    embed_config express-gateway\n    rclone_config tileservergl\n    embed_config mapserver\n    embed_config mapcache\n    embed_config weacast\n    embed_config kano\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# add gdal-wmts sources to both mapserver & mapcache")]),t._v("\n    rclone copy "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$KAPTAIN_WORKING_DIRECTORY")]),t._v('/configs/gdal-wmts/"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$KAPTAIN_NAMESPACE_DIRECTORY")]),t._v('/provision-configs/.kaptain/mapserver"')]),t._v("\n    rclone copy "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$KAPTAIN_WORKING_DIRECTORY")]),t._v('/configs/gdal-wmts/"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$KAPTAIN_NAMESPACE_DIRECTORY")]),t._v('/provision-configs/.kaptain/mapcache"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),e("p",[e("code",[t._v("embed_config")]),t._v(", "),e("code",[t._v("rclone_config")]),t._v(" are helper functions defined in the "),e("strong",[t._v("kaptain")]),t._v(" script.")]),t._v(" "),e("p",[t._v("Those hooks could probably be replaced by "),e("a",{attrs:{href:"https://helmfile.readthedocs.io/en/latest/#hooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("helmfile hooks"),e("OutboundLink")],1),t._v(" but this is still work in progress ...")])])}),[],!1,null,null,null);a.default=n.exports}}]);