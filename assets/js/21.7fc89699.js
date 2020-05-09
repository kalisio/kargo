(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{362:function(e,a,t){"use strict";t.r(a);var r=t(21),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"using-artillery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-artillery"}},[e._v("#")]),e._v(" Using Artillery")]),e._v(" "),t("p",[t("strong",[e._v("Kargo")]),e._v(" provides an "),t("a",{attrs:{href:"https://github.com/artilleryio/artillery",target:"_blank",rel:"noopener noreferrer"}},[e._v("Artillery"),t("OutboundLink")],1),e._v(" docker image that can be used to perform load testing of your platform.")]),e._v(" "),t("h2",{attrs:{id:"running-artillery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-artillery"}},[e._v("#")]),e._v(" Running Artillery")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$docker")]),e._v(" run -e -ti kalisio/artillery:1.6.0 "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n")])])]),t("p",[e._v("You can also run "),t("strong",[e._v("Artillery")]),e._v(" from the manage node if you need to bench some services that are not exposed.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$docker")]),e._v(" run --network"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("kargo -v /home/ubuntu/kargo/workspaces/my_workspace/benchmark:/benchmark -e -ti kalisio/artillery:1.6.0 "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n")])])]),t("h2",{attrs:{id:"example-benchmarking-the-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-benchmarking-the-api"}},[e._v("#")]),e._v(" Example: benchmarking the API")]),e._v(" "),t("p",[t("strong",[e._v("Kargo")]),e._v(" comes with some files that allow you to perform a load test of the API.")]),e._v(" "),t("p",[e._v("To run the tests, you must define the following environment variables:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("SUBDOMAIN")]),e._v(": the Kargo subdomain like "),t("code",[e._v("test.kalisio.xyz")])]),e._v(" "),t("li",[t("code",[e._v("API_GATEWAY_JWT")]),e._v(": the JWT access token for the API gateway")])]),e._v(" "),t("p",[e._v("The benchmark is available in two different environments:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("public")]),e._v(": when Kargo does not use any API gateway and exposes all web mapping services publicly")]),e._v(" "),t("li",[t("code",[e._v("api")]),e._v(": when Kargo exposes all web mapping services behind the "),t("a",{attrs:{href:"https://www.express-gateway.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Express-Gateway"),t("OutboundLink")],1),e._v(" API gateway")])]),e._v(" "),t("p",[e._v("Select the right environment then run the command:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$artillery")]),e._v(" run -e api --config ./config.yml ./scenarios.yml`\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("To debug, set the "),t("code",[e._v("DEBUG=http*")]),e._v(" environment variable.")])])])}),[],!1,null,null,null);a.default=s.exports}}]);