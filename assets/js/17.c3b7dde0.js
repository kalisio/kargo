(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{380:function(e,t,a){"use strict";a.r(t);var s=a(27),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[e._v("#")]),e._v(" CLI")]),e._v(" "),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("h3",{attrs:{id:"h-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#h-help"}},[e._v("#")]),e._v(" -h, --help")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo -h | --help")])]),e._v(" "),a("p",[e._v("Print basic help to use the command "),a("strong",[e._v("Kargo")])]),e._v(" "),a("h3",{attrs:{id:"v-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v-version"}},[e._v("#")]),e._v(" -v, --version")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo -v | --version")])]),e._v(" "),a("p",[e._v("Print the version of "),a("strong",[e._v("Kargo")])]),e._v(" "),a("h2",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[e._v("#")]),e._v(" Commands")]),e._v(" "),a("h3",{attrs:{id:"build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build"}},[e._v("#")]),e._v(" build")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo build <service")])]),e._v(" "),a("p",[e._v("Builds the docker image corresponding to the desired service and push it to the "),a("strong",[e._v("registry")]),e._v(".")]),e._v(" "),a("p",[e._v("The services that can be built are the following:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("command parameter")]),e._v(" "),a("th",[e._v("services")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("kano")])]),e._v(" "),a("td",[e._v("the "),a("strong",[e._v("Kano")]),e._v(" application. The version to build is read from the "),a("code",[e._v("KANO_TAG")]),e._v(" variable.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("mapproxy")])]),e._v(" "),a("td",[e._v("the "),a("strong",[e._v("MapProxy")]),e._v(" application. The version to build is read from the "),a("code",[e._v("MAPPROXY_TAG")]),e._v(" variable.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("maputnik")])]),e._v(" "),a("td",[e._v("the "),a("strong",[e._v("maputnik")]),e._v(". The version to build is read from the "),a("code",[e._v("MAPUTNIK_TAG")]),e._v(" variable.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("mapserver")])]),e._v(" "),a("td",[e._v("the "),a("strong",[e._v("MapServer")]),e._v(" application. The version to build is read from the "),a("code",[e._v("MAPSERVER_TAG")]),e._v(" variable.")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("mapcache")])]),e._v(" "),a("td",[e._v("the "),a("strong",[e._v("MapCache")]),e._v(" application. The version to build is read from the "),a("code",[e._v("MAPCACHE_TAG")]),e._v(" variable.")])])])]),e._v(" "),a("h3",{attrs:{id:"configure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configure"}},[e._v("#")]),e._v(" configure")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo configure")])]),e._v(" "),a("p",[e._v("Generate the configuration by merging the default configuration with your workspace's configuration. The merged configuration files is stored in the "),a("code",[e._v(".kargo")]),e._v(" directory at the root directory of "),a("strong",[e._v("Kargo")])]),e._v(" "),a("h3",{attrs:{id:"deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[e._v("#")]),e._v(" deploy")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo deploy <stack|all> [delay]")])]),e._v(" "),a("p",[e._v("Deploys the specified stack. The stack must be defined in the "),a("code",[e._v("STACKS")]),e._v(".")]),e._v(" "),a("p",[e._v("When specifying "),a("code",[e._v("all")]),e._v(", it deploys all the stacks. The stacks are deployed in the order defined in the "),a("code",[e._v("STACKS")]),e._v(" variable and a "),a("code",[e._v("delay")]),e._v(" (in seconds) can be specified to wait before deploying each stack. By default the delay is "),a("code",[e._v("5")]),e._v(" seconds.")]),e._v(" "),a("h3",{attrs:{id:"exec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exec"}},[e._v("#")]),e._v(" exec")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo exec <script> <arguments>")])]),e._v(" "),a("p",[e._v("Tells "),a("strong",[e._v("Kargo")]),e._v(" to execute the given script. The script must be stored in the "),a("code",[e._v("scripts")]),e._v(" folder.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Using the "),a("code",[e._v("exec")]),e._v(" command allows you to take into account the environment within your scripts.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("If you need to provide multiple arguments to the script, it requires double quotes around the arguments list.")])]),e._v(" "),a("h3",{attrs:{id:"image-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-load"}},[e._v("#")]),e._v(" image load")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo image load <service")])]),e._v(" "),a("p",[e._v("Load from an archive the docker image corresponding to the given service and push it to the "),a("strong",[e._v("registry")]),e._v(". The archive to be imported is read from the variable "),a("code",[e._v("<SERVICE>_ARCHIVE")]),e._v(". It could be an URL that point to a file on the host or a remote file. To import a remote archive, the URL must begin with:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("http")]),e._v(" or "),a("code",[e._v("https")]),e._v(" if the archive is accessible using the "),a("strong",[e._v("HTTP")]),e._v(" protocol")]),e._v(" "),a("li",[e._v("an existing "),a("strong",[e._v("rclone")]),e._v(" remote source if the archive is stored on a well-known store (i.e. Google Driver, OpenStack Object Store, AWS S3...).")])]),e._v(" "),a("p",[e._v("The following parameters allow to import the archive "),a("code",[e._v("dummy-1.2.1")]),e._v(" from a remote "),a("code",[e._v("bucket")]),e._v(" using "),a("strong",[e._v("rclone")]),e._v(". The source "),a("code",[e._v("store")]),e._v(" must be defined in your "),a("strong",[e._v("rclone")]),e._v(" configuration file.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("DUMMY_ARCHIVE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("store:bucket/dummy-1.2.1.tgz\n./kargo image load dummy\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The downloaded archive is stored in the "),a("code",[e._v("archives")]),e._v(" directory.")])]),e._v(" "),a("h3",{attrs:{id:"image-save"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-save"}},[e._v("#")]),e._v(" image save")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo image save <service")])]),e._v(" "),a("p",[e._v("Save the image of a the given service to the an archive. The archive is stored in the "),a("code",[e._v("archives")]),e._v(" directory.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If the service is defined to use an archived image, the process is skipped as the image is already available in the "),a("code",[e._v("archives")]),e._v(" directory.\nIf the image is not in the "),a("strong",[e._v("registry")]),e._v(", the image is automatically pulled.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("The service should be running before archiving.")])]),e._v(" "),a("h3",{attrs:{id:"info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[e._v("#")]),e._v(" info")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo info")])]),e._v(" "),a("p",[e._v("Displays some information about the current workspace")]),e._v(" "),a("h3",{attrs:{id:"labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labels"}},[e._v("#")]),e._v(" labels")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo labels <add|remove>")])]),e._v(" "),a("p",[e._v("Add or remove the labels assigned to the nodes. The node list is read from the environment variable "),a("code",[e._v("NODES")]),e._v(" and the labels are read for each node from the environment variable "),a("code",[e._v("<NODE_NAME>_LABLELS")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pull"}},[e._v("#")]),e._v(" pull")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo pull")])]),e._v(" "),a("p",[e._v("Pulls the workspace from the remote "),a("strong",[e._v("Git")]),e._v(" repository.")]),e._v(" "),a("h3",{attrs:{id:"remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[e._v("#")]),e._v(" remove")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo remove <stack|all>")])]),e._v(" "),a("p",[e._v("Removes the specified stack. The stack must be defined in the "),a("code",[e._v("STACKS")]),e._v(" variable.")]),e._v(" "),a("p",[e._v("When specifying "),a("code",[e._v("all")]),e._v(", it removes all the stacks. The stacks are removed in the inverse order defined in the "),a("code",[e._v("STACKS")]),e._v(" variable.")]),e._v(" "),a("h3",{attrs:{id:"redeploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redeploy"}},[e._v("#")]),e._v(" redeploy")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo redeploy <stack|all>")])]),e._v(" "),a("p",[e._v("Re-deploys the specified stack. The stack must be defined in the "),a("code",[e._v("STACKS")]),e._v(" variable.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This is a convenient command that run the series of commands: "),a("code",[e._v("remove")]),e._v(", "),a("code",[e._v("configure")]),e._v(" and "),a("code",[e._v("deploy")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[e._v("#")]),e._v(" update")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo update [--force|-f] <stack|all>")])]),e._v(" "),a("p",[e._v("Tells "),a("strong",[e._v("Kargo")]),e._v(" to update the services of the given stack. You can force the update with the option "),a("code",[e._v("--force")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("--force")]),e._v(" flag causes the service’s tasks to be shut down and replaced with new ones.")])]),e._v(" "),a("h3",{attrs:{id:"use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use"}},[e._v("#")]),e._v(" use")]),e._v(" "),a("p",[a("code",[e._v("usage: kargo use <workspace>")])]),e._v(" "),a("p",[e._v("Tells "),a("strong",[e._v("Kargo")]),e._v(" to use the specified workspace.")])])}),[],!1,null,null,null);t.default=o.exports}}]);