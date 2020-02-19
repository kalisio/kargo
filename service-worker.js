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
    "revision": "d9b34b6a8813cabae4d4f5e694d7c1f0"
  },
  {
    "url": "about/contact.html",
    "revision": "cf1e05f8b45b1978625a07de602ff837"
  },
  {
    "url": "about/contributing.html",
    "revision": "7d817dc897c2e28ff5a642094106c435"
  },
  {
    "url": "about/introduction.html",
    "revision": "2ce404ee4de3ac9f6be7b7e47252b3cf"
  },
  {
    "url": "about/license.html",
    "revision": "63fe9f2536a67cc39e10ff26949e526d"
  },
  {
    "url": "about/roadmap.html",
    "revision": "a9299146f1f816ed52ee11e76cde716f"
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
    "url": "assets/js/10.2fa1d16a.js",
    "revision": "0e08b05eb896ba5e353cc909cf0b02e9"
  },
  {
    "url": "assets/js/11.d46dd993.js",
    "revision": "ab876ad3dba04d14226faaa589c62fb6"
  },
  {
    "url": "assets/js/12.60747495.js",
    "revision": "27d638c098dec50e062fdc40b68b31e7"
  },
  {
    "url": "assets/js/13.2d02879c.js",
    "revision": "1d92145d143061e9f17d93ce5ec9ecf2"
  },
  {
    "url": "assets/js/14.aae7fdee.js",
    "revision": "8fbd7442276168187508fcc25009bb6c"
  },
  {
    "url": "assets/js/15.ab7b5c4a.js",
    "revision": "403ac6bd5516deccef1684714266f313"
  },
  {
    "url": "assets/js/16.6451c9c3.js",
    "revision": "64ce2ec585920bd4ec143085eb0f537e"
  },
  {
    "url": "assets/js/17.bb68e981.js",
    "revision": "c2b755bc4c9d91778455d86768b7f496"
  },
  {
    "url": "assets/js/18.c7bd9ded.js",
    "revision": "ec93a7d99ba156d718b309594b2fb741"
  },
  {
    "url": "assets/js/19.1e23fde3.js",
    "revision": "bad56adf5268c0d8e945c53169205ce2"
  },
  {
    "url": "assets/js/2.6128cff5.js",
    "revision": "568c183b17a75808bcc6111cccca538b"
  },
  {
    "url": "assets/js/20.dab2cbc9.js",
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
    "url": "assets/js/5.4344d132.js",
    "revision": "ccf59aa5918692d169c0f16b1d1f613c"
  },
  {
    "url": "assets/js/6.6c2e1f83.js",
    "revision": "7d98f19801981afa65d78041b8a3f5a3"
  },
  {
    "url": "assets/js/7.219bb992.js",
    "revision": "6df9e8e2b6d20d1889f8a348cebaff71"
  },
  {
    "url": "assets/js/8.42c5943a.js",
    "revision": "a57709c9a5d3a78178c199d312c36cd8"
  },
  {
    "url": "assets/js/9.eac62e32.js",
    "revision": "1518938d13c8c6ec29ed71b5ca8bae5e"
  },
  {
    "url": "assets/js/app.e7bbe8cb.js",
    "revision": "364d488ea39b8b9892e841f97de62ac2"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "611935a8189a3f8341e4672faaae22d8"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "85db191d7e4b42e38d50a891275697e8"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "a5d15cbc270219bb6c3474b1619dc00e"
  },
  {
    "url": "index.html",
    "revision": "37afcc8c99620ea0af7a18209bed2816"
  },
  {
    "url": "reference/cli.html",
    "revision": "8c22d4be206d94fee4863c36ce3206e4"
  },
  {
    "url": "reference/environment.html",
    "revision": "e4732ef9fa63fa031503841df82e76a1"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "301796cbfabdbe22caa9dea28ba3c104"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "93f02591d68db2ffe83cd73dc13d439a"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "a63fd79ef85161ecc008b46e04fed4fc"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "89f13e257cb122d1dc8d1fe6a5ebc96b"
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
