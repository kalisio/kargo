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
    "revision": "ff709547d40c788c2527a47f3f74d73e"
  },
  {
    "url": "about/contact.html",
    "revision": "3b32f4cd117edb9611f3af74a6655e34"
  },
  {
    "url": "about/contributing.html",
    "revision": "2cf4f7bda5af3c8a4bee27b5270ee372"
  },
  {
    "url": "about/introduction.html",
    "revision": "2701ff4b66167909bdfe2e2709d31b3a"
  },
  {
    "url": "about/license.html",
    "revision": "bc763cfeb1b78fcadca85150245755ab"
  },
  {
    "url": "about/roadmap.html",
    "revision": "4f5030cd059ffd9506cf104fdd2485a1"
  },
  {
    "url": "assets/css/0.styles.4394fa43.css",
    "revision": "a610e36f9f4ee5a70513f93fb78e0742"
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
    "url": "assets/img/kargo-traefik.21ca1aa0.svg",
    "revision": "21ca1aa02c5cc1512f8ecc6265ef6978"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.dcec99e5.js",
    "revision": "645c2513fd2a576605122d65f6caca64"
  },
  {
    "url": "assets/js/11.cc1484dc.js",
    "revision": "2b6e37db98493d026d932d9cdbceb143"
  },
  {
    "url": "assets/js/12.b1f6a54c.js",
    "revision": "cf6008386ebd5bc4d6dea62a0caaea14"
  },
  {
    "url": "assets/js/13.2d2cffee.js",
    "revision": "e81f17461be357fb36f8da2b58d1b0ba"
  },
  {
    "url": "assets/js/14.21014635.js",
    "revision": "46923a8321d2424071a455970b4a7d49"
  },
  {
    "url": "assets/js/15.baf6adf1.js",
    "revision": "09ad76258ab13a8eb1e4d743b12819c1"
  },
  {
    "url": "assets/js/16.f6e7af4c.js",
    "revision": "16e42faff070e9983daa802154159346"
  },
  {
    "url": "assets/js/17.ee666562.js",
    "revision": "fbf06d50353065cc3ff07a6e090a218b"
  },
  {
    "url": "assets/js/18.fe82ed66.js",
    "revision": "d0e2708d121c178e47d10bfe1b91f85b"
  },
  {
    "url": "assets/js/19.9bb2d897.js",
    "revision": "9e7eb738abc4ea2ad63cedb7f0463358"
  },
  {
    "url": "assets/js/2.137cd41d.js",
    "revision": "6acb87cdb62541e87747c6cbd375cff0"
  },
  {
    "url": "assets/js/20.a055a1e9.js",
    "revision": "3b331443d2c296c609cdcf9a1dc7a77a"
  },
  {
    "url": "assets/js/21.dbd76632.js",
    "revision": "291b966f5827281261131ebc3f37783d"
  },
  {
    "url": "assets/js/22.5ad8b46a.js",
    "revision": "03bcc6a16066e7fdb77506ec4eebb5ae"
  },
  {
    "url": "assets/js/23.440b70cf.js",
    "revision": "9a2a4063057961ce2e11998554abb20f"
  },
  {
    "url": "assets/js/24.a02e3385.js",
    "revision": "43cf258bb73ca51ec03b0d486d1acc09"
  },
  {
    "url": "assets/js/25.84120997.js",
    "revision": "5d7f76436df03ebf32e0f7266267c094"
  },
  {
    "url": "assets/js/3.10e6b22f.js",
    "revision": "d8436e3a24b15784aed0c4c5b5f2f689"
  },
  {
    "url": "assets/js/4.9bed809e.js",
    "revision": "b19d403ebe15999a902197be8b8c5d66"
  },
  {
    "url": "assets/js/5.76422ff7.js",
    "revision": "05018a2e44c9dea9ec7a8d866f676105"
  },
  {
    "url": "assets/js/6.2e651cde.js",
    "revision": "eea5ce8bae177e3a6cc9e8285e7350bf"
  },
  {
    "url": "assets/js/7.5da558fd.js",
    "revision": "0032ff7a94ac3cde63581ec6763b83f6"
  },
  {
    "url": "assets/js/8.4c2a9a62.js",
    "revision": "0e697a210096a0d28252fb4dfc5694e5"
  },
  {
    "url": "assets/js/9.5a2f9245.js",
    "revision": "622e6f59b48d091ee14c0fd1c69f0aa5"
  },
  {
    "url": "assets/js/app.d57a0166.js",
    "revision": "e3bfb81613c1465df4aab7d5db68d20a"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "0ad62df5a258f80e477adcb4592c36de"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "f394057daa4cb308565148258fb32775"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "58a3843c265b58c3384e068901932323"
  },
  {
    "url": "index.html",
    "revision": "048b9863d884edeb8610bf097d5fe3fa"
  },
  {
    "url": "reference/cli.html",
    "revision": "69efbb32e20146c537a4954c3493c43f"
  },
  {
    "url": "reference/environment.html",
    "revision": "87423af9bdd4a9b94f4911a7c7ff684c"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "a1e7c99ab34c9674c9980bc07c1588f8"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "87d03c6c0c87a08906e38e9193de3b3a"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "cb8bd3e25e04050f306856715af03c89"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "754ef9eb6659d69accdd1240ff3bb054"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "64961f77d689e57dc047cb564be8335b"
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
