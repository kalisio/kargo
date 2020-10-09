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
    "revision": "92480a01e7432923a93f63078d624183"
  },
  {
    "url": "about/contact.html",
    "revision": "a6d9d7b4615850281f509838f9dafcaf"
  },
  {
    "url": "about/contributing.html",
    "revision": "ba64f47a6449cb70bfa8fab6a50cb59e"
  },
  {
    "url": "about/introduction.html",
    "revision": "0ac3db4cbfb80b1dbd2386d5c96ea87b"
  },
  {
    "url": "about/license.html",
    "revision": "55f4be6f1d8360f50acd9a81ad899312"
  },
  {
    "url": "about/roadmap.html",
    "revision": "c5d98256e0364b6a46d29abbcd08cf33"
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
    "url": "assets/js/app.4dbb9ec0.js",
    "revision": "061dacad7e3dc3508a885b3f0bbfbc0a"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "fffeb987e82d3fdc2baa637b7853b4fc"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "458f7af19641c200dacd7bb879295442"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "a6ffcf6127c5814a068aa9eb4aedcd1c"
  },
  {
    "url": "index.html",
    "revision": "ad3c163d18002fe1e4de0482a214be09"
  },
  {
    "url": "reference/cli.html",
    "revision": "6b0b0f09fa79147eec700ed5c7d12f1d"
  },
  {
    "url": "reference/environment.html",
    "revision": "a4977dbf8e4403e2b3936615079bd674"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "aeaace30ea60661b64da9ec0e57680fb"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "70b75687238a270cf0654ce4e3230ff1"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "cb65c2aaba4360b86be52503bf03c599"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "c97c3921142f81e7fae1f0265f534514"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "52f084e5a8d87d982e1ad8d2c1a8a623"
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
