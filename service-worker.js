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
    "revision": "72699e1d941458060ac2e95c341b8bad"
  },
  {
    "url": "about/contact.html",
    "revision": "de32bf20ee18fb08b845c522d090034a"
  },
  {
    "url": "about/contributing.html",
    "revision": "d270b3cf75cdbcd8ac2447312875b431"
  },
  {
    "url": "about/introduction.html",
    "revision": "94c93b0d161be205fd30179fb1abfbee"
  },
  {
    "url": "about/license.html",
    "revision": "78782afa2d9e28c4048e5db2139d7cf2"
  },
  {
    "url": "about/roadmap.html",
    "revision": "d2f158800a104a7c28157b31d92596ea"
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
    "url": "assets/js/12.1b1e9da4.js",
    "revision": "4a0dbcd781335e2c945c31c081f1a768"
  },
  {
    "url": "assets/js/13.37b2095e.js",
    "revision": "eb5fae1a3ab4c24a5c4756e5522bbfaa"
  },
  {
    "url": "assets/js/14.de565671.js",
    "revision": "d7c5f2a744bd63bcb571abea72fa0b36"
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
    "url": "assets/js/17.c3b7dde0.js",
    "revision": "17cc7890aa9e7b1cc9935462872d10f1"
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
    "url": "assets/js/6.0d795b00.js",
    "revision": "34a9b3d7b67cd29f7740f6c174e8d1c0"
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
    "url": "assets/js/app.280390fe.js",
    "revision": "f26df7d8c912d612d31400e5ed3ecfc6"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "2364b48ace3291afdd6e1e7eb0da048b"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "8f9bf47f63be4fbe197c1d93d914a4a9"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "70430a1ef6b79b18776b0965a89e4bae"
  },
  {
    "url": "index.html",
    "revision": "338d5295cbae413913c724243b4c6302"
  },
  {
    "url": "reference/cli.html",
    "revision": "e743a895283f3994fc16b83752ff6a8f"
  },
  {
    "url": "reference/environment.html",
    "revision": "9ae90b5eb2bf96ba94f2340adcee023f"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "874b06b0f8a9765682bafd03aa4b611b"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "8d0f1eff457e265c3e12ec1c5c4b15e2"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "cf7e023c4cb55258121962b4cf0b9244"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "671552d475d345593f49191d0eb3de1a"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "7df7ae5a2ee7521f6c619125c36949c2"
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
