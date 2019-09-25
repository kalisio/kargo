(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{177:function(e,t,a){"use strict";a.r(t);var r=a(0),o=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli","aria-hidden":"true"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("h3",{attrs:{id:"h-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h-help","aria-hidden":"true"}},[e._v("#")]),e._v(" -h, --help")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo -h | --help")])]),e._v(" "),a("p",[e._v("Print basic help to use the command "),a("strong",[e._v("Kargo")])]),e._v(" "),a("h3",{attrs:{id:"v-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-version","aria-hidden":"true"}},[e._v("#")]),e._v(" -v, --version")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo -v | --version")])]),e._v(" "),a("p",[e._v("Print the version of "),a("strong",[e._v("Kargo")])]),e._v(" "),a("h2",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands","aria-hidden":"true"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build","aria-hidden":"true"}},[e._v("#")]),e._v(" build")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo build <service")])]),e._v(" "),a("p",[e._v("Builds the docker image corresponding to the desired service and push it into "),a("strong",[e._v("registry")]),e._v(".")]),e._v(" "),a("p",[e._v("The services that can be built are the following:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("command parameter")]),e._v(" "),a("th",[e._v("services")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("kano")])]),e._v(" "),a("td",[e._v("the "),a("strong",[e._v("Kano")]),e._v(" application. The version to build is read from the "),a("code",[e._v("KANO_TAG")]),e._v(" variable.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("mapproxy")])]),e._v(" "),a("td",[e._v("the "),a("strong",[e._v("MapProxy")]),e._v(" application. The version to build is read from the "),a("code",[e._v("MAPPROXY_TAG")]),e._v(" variable.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("geoserver")])]),e._v(" "),a("td",[e._v("the "),a("strong",[e._v("GeoServer")]),e._v(". The version as well as the list of plugins to build are read from the "),a("code",[e._v("GEOSERVER_TAG")]),e._v("  and "),a("code",[e._v("GEOSERVER_PLUGINS")]),e._v(" variables.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("maputnik")])]),e._v(" "),a("td",[e._v("the "),a("strong",[e._v("maputnik")]),e._v(". The version to build is read from the "),a("code",[e._v("MAPUTNIK_TAG")]),e._v(" variable.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("mapserver")])]),e._v(" "),a("td",[e._v("the "),a("strong",[e._v("MapServer")]),e._v(" application. The version to build is read from the "),a("code",[e._v("MAPSERVER_TAG")]),e._v(" variable.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("weacast-loaders")])]),e._v(" "),a("td",[e._v("The list of the loaders to be build is read from the "),a("code",[e._v("WEACAST_MODELS")]),e._v(" variable. For all the loaders to be built, the version and database url are read from the "),a("code",[e._v("WEACAST_LOADER_TAG")]),e._v(" and "),a("code",[e._v("WEACAST_DB_URL")]),e._v(" variables.")])])])]),e._v(" "),a("h3",{attrs:{id:"configure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure","aria-hidden":"true"}},[e._v("#")]),e._v(" configure")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo configure")])]),e._v(" "),a("p",[e._v("Generate the configuration by merging the default configuration with your workspace's configuration. The merged configuration files is stored in the "),a("code",[e._v(".kargo")]),e._v(" directory at the root directory of "),a("strong",[e._v("Kargo")])]),e._v(" "),a("h3",{attrs:{id:"deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy","aria-hidden":"true"}},[e._v("#")]),e._v(" deploy")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo deploy <stack|all>")])]),e._v(" "),a("p",[e._v("Deploys the specified stack. The stack must be defined in the "),a("code",[e._v("STACKS")]),e._v(".")]),e._v(" "),a("p",[e._v("When specifying "),a("code",[e._v("all")]),e._v(", it deploys all the stacks. The stacks are deployed in the order defined in the "),a("code",[e._v("STACKS")]),e._v(" variable.")]),e._v(" "),a("h3",{attrs:{id:"import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import","aria-hidden":"true"}},[e._v("#")]),e._v(" import")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo import <service")])]),e._v(" "),a("p",[e._v("Import from an archive the docker image corresponding to the given service and push it into "),a("strong",[e._v("registry")]),e._v(". The archive to be imported is read from the variable "),a("code",[e._v("<SERVICE>_ARCHIVE")]),e._v(". It could be an URL that point to a file on the host or a remote file. To import a remote archive, the URL must begin with:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("http")]),e._v(" or "),a("code",[e._v("https")]),e._v(" if the archive is accessible using the "),a("strong",[e._v("HTTP")]),e._v(" protocol")]),e._v(" "),a("li",[e._v("an existing "),a("strong",[e._v("rclone")]),e._v(" remote source if the archive is stored on a well-known store (i.e. Google Driver, OpenStack Object Store, AWS S3...).")])]),e._v(" "),a("p",[e._v("The following parameters allow to import the archive "),a("code",[e._v("dummy-1.2.1")]),e._v(" from a remote "),a("code",[e._v("bucket")]),e._v(" using "),a("strong",[e._v("rclone")]),e._v(". The source "),a("code",[e._v("store")]),e._v(" must be defined in your "),a("strong",[e._v("rclone")]),e._v(" configuration file.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("DUMMY_SERVICE"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("localhost:5000/dummy\nDUMMY_TAG"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1.2.1\nDUMMY_ARCHIVE"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("store:bucket/dummy-1.2.1.tgz\n")])])]),a("h3",{attrs:{id:"info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#info","aria-hidden":"true"}},[e._v("#")]),e._v(" info")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo info")])]),e._v(" "),a("p",[e._v("Displays some information about the current workspace")]),e._v(" "),a("h3",{attrs:{id:"pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull","aria-hidden":"true"}},[e._v("#")]),e._v(" pull")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo pull")])]),e._v(" "),a("p",[e._v("Pulls the workspace from the remote "),a("strong",[e._v("Git")]),e._v(" repository.")]),e._v(" "),a("h3",{attrs:{id:"remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove","aria-hidden":"true"}},[e._v("#")]),e._v(" remove")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo remove <stack|all>")])]),e._v(" "),a("p",[e._v("Removes the specified stack. The stack must be defined in the "),a("code",[e._v("STACKS")]),e._v(" variable.")]),e._v(" "),a("p",[e._v("When specifying "),a("code",[e._v("all")]),e._v(", it removes all the stacks. The stacks are removed in the inverse order defined in the "),a("code",[e._v("STACKS")]),e._v(" variable.")]),e._v(" "),a("h3",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update","aria-hidden":"true"}},[e._v("#")]),e._v(" update")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo update [--force|-f] <stack|all>")])]),e._v(" "),a("p",[e._v("Tells "),a("strong",[e._v("Kargo")]),e._v(" to update the services of the given stack. You can force the update with the option "),a("code",[e._v("--force")]),e._v(".")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("--force")]),e._v(" flag causes the service’s tasks to be shut down and replaced with new ones.")])]),e._v(" "),a("h3",{attrs:{id:"use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[e._v("#")]),e._v(" use")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo use <workspace>")])]),e._v(" "),a("p",[e._v("Tells "),a("strong",[e._v("Kargo")]),e._v(" to use the specified workspace.")])])}],!1,null,null,null);o.options.__file="cli.md";t.default=o.exports}}]);