/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "be597afe2f432add8981514479a9ee55"
  },
  {
    "url": "about/contact.html",
    "revision": "a0dfb9264e8b847bdcc0a03113925c68"
  },
  {
    "url": "about/contributing.html",
    "revision": "f318245e3d157e57158ddaaad739295f"
  },
  {
    "url": "about/introduction.html",
    "revision": "33b66928c00f1e90e1f63bb838bf7ff7"
  },
  {
    "url": "about/license.html",
    "revision": "208e63d94f0550cc6cd2baf2fab21343"
  },
  {
    "url": "about/roadmap.html",
    "revision": "7e8b69371a79755e4a351b5e645a1831"
  },
  {
    "url": "assets/css/0.styles.c5cff6b5.css",
    "revision": "a7c2f00a3970bd3ba3a82149562272fd"
  },
  {
    "url": "assets/img/kargo-example-assumptions.0161491c.svg",
    "revision": "0161491c33e7fec4f51f7c08ae848056"
  },
  {
    "url": "assets/img/kargo-gateway.293e1ae6.svg",
    "revision": "293e1ae6a9fba495bb3160f821f7ae2d"
  },
  {
    "url": "assets/img/kargo-overview.d15a93e9.svg",
    "revision": "d15a93e9f37f40a3043013ded5fa3ddf"
  },
  {
    "url": "assets/img/kargo-principle.5032ebad.svg",
    "revision": "5032ebad14713bc2fdde4e1a0ddc90ad"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.454d5f4d.js",
    "revision": "0e08b05eb896ba5e353cc909cf0b02e9"
  },
  {
    "url": "assets/js/11.ff2e891d.js",
    "revision": "ab876ad3dba04d14226faaa589c62fb6"
  },
  {
    "url": "assets/js/12.95d3f653.js",
    "revision": "27d638c098dec50e062fdc40b68b31e7"
  },
  {
    "url": "assets/js/13.7d557cec.js",
    "revision": "4416704c488a4175b147eecab28e0a4d"
  },
  {
    "url": "assets/js/14.8ff2c8af.js",
    "revision": "8fbd7442276168187508fcc25009bb6c"
  },
  {
    "url": "assets/js/15.fb757dd4.js",
    "revision": "403ac6bd5516deccef1684714266f313"
  },
  {
    "url": "assets/js/16.4ecdea1f.js",
    "revision": "64ce2ec585920bd4ec143085eb0f537e"
  },
  {
    "url": "assets/js/17.33e512f0.js",
    "revision": "c2b755bc4c9d91778455d86768b7f496"
  },
  {
    "url": "assets/js/18.244b601b.js",
    "revision": "ec93a7d99ba156d718b309594b2fb741"
  },
  {
    "url": "assets/js/19.679fb730.js",
    "revision": "bad56adf5268c0d8e945c53169205ce2"
  },
  {
    "url": "assets/js/2.abd1cf17.js",
    "revision": "568c183b17a75808bcc6111cccca538b"
  },
  {
    "url": "assets/js/20.a56525f1.js",
    "revision": "948812a9e29220e35bd5fdc2ee4d8b06"
  },
  {
    "url": "assets/js/21.a6cdde23.js",
    "revision": "cee8a6e101017029bd0210379c03b1ad"
  },
  {
    "url": "assets/js/3.981fafe3.js",
    "revision": "19b0ef61bf0bf834194a587e5922853d"
  },
  {
    "url": "assets/js/4.26b6fbeb.js",
    "revision": "2af0a72f2e9941a74d51d48bb65a6f29"
  },
  {
    "url": "assets/js/5.418ccfed.js",
    "revision": "ccf59aa5918692d169c0f16b1d1f613c"
  },
  {
    "url": "assets/js/6.13fed288.js",
    "revision": "7d98f19801981afa65d78041b8a3f5a3"
  },
  {
    "url": "assets/js/7.d80cd23f.js",
    "revision": "6df9e8e2b6d20d1889f8a348cebaff71"
  },
  {
    "url": "assets/js/8.6788ba30.js",
    "revision": "a57709c9a5d3a78178c199d312c36cd8"
  },
  {
    "url": "assets/js/9.eac62e32.js",
    "revision": "1518938d13c8c6ec29ed71b5ca8bae5e"
  },
  {
    "url": "assets/js/app.c7503a24.js",
    "revision": "9ee68d84f4fd46859621491582772948"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "1817c9360ae3c4f6f6668b520d113495"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "5a962a3de98e89d5ce6c4b2da2d4f9d5"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "a4ad8968ad057fb7d8310eb0a163df38"
  },
  {
    "url": "index.html",
    "revision": "cd2c0bb2ea0af51f4c33260bcbdf0510"
  },
  {
    "url": "reference/cli.html",
    "revision": "b564d02e4d4ee21ac2f3981ff6a40ffb"
  },
  {
    "url": "reference/environment.html",
    "revision": "7a7c6bbf63ba48ee0a87bf19fd74629a"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "97682b33c53a635070d14bcd6407ea9f"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "9cd13d8d66508f0b7126135ff38bc199"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "3d15642095df0bfb661a3e43ef9f4248"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "d64f53e2886c9750ee1f5e7755247775"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
