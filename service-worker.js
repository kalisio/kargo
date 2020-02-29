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
    "revision": "ce035aeec761cd9a77241202643e1729"
  },
  {
    "url": "about/contact.html",
    "revision": "fd7dd9cf3af96b70f939fb40a5ce8e66"
  },
  {
    "url": "about/contributing.html",
    "revision": "0835f0b16bab2b41c9c45d52dfba528e"
  },
  {
    "url": "about/introduction.html",
    "revision": "2896bca7734a321683aef5b4e8df4fd8"
  },
  {
    "url": "about/license.html",
    "revision": "b9f12771d7f40f7de606defa11f3b385"
  },
  {
    "url": "about/roadmap.html",
    "revision": "568f21b2edd221ca7bf21b32d87f0cb8"
  },
  {
    "url": "assets/css/0.styles.4122b163.css",
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
    "url": "assets/js/10.51c7d0cd.js",
    "revision": "44a06b2e946709e7a93ce592b31e66ec"
  },
  {
    "url": "assets/js/11.934f6414.js",
    "revision": "54be8052a757324a5f1fe70f0c0ff55d"
  },
  {
    "url": "assets/js/12.0446ccd4.js",
    "revision": "cad023cbb519e9016c22b2694ac3f96b"
  },
  {
    "url": "assets/js/13.e89ce6eb.js",
    "revision": "19d94257351789d968b83cd6eb9387d2"
  },
  {
    "url": "assets/js/14.3046c808.js",
    "revision": "0da84cd176fca3c6d077521e7a653804"
  },
  {
    "url": "assets/js/15.e6edeebf.js",
    "revision": "508f9b3c4a000cdb9c1e60542130bc92"
  },
  {
    "url": "assets/js/16.e8c5ebbb.js",
    "revision": "8f03263865b9853645c1845e0f745497"
  },
  {
    "url": "assets/js/17.8646a618.js",
    "revision": "e0e583762f89d4f1380b4c85eec2fca1"
  },
  {
    "url": "assets/js/18.0276928f.js",
    "revision": "278ade4e2d4de8922d8d4598350c5d8b"
  },
  {
    "url": "assets/js/19.f6aa1893.js",
    "revision": "ac6d84dc49ba5094759c0ff84571725f"
  },
  {
    "url": "assets/js/2.5d610dd7.js",
    "revision": "9b6f6eba129757e69eb1ec67dd62642c"
  },
  {
    "url": "assets/js/20.95f9cb00.js",
    "revision": "3129611409c14ca6719b8249027e9bda"
  },
  {
    "url": "assets/js/21.aed3fbb2.js",
    "revision": "7136ef7005805f16ec566a32abbc137a"
  },
  {
    "url": "assets/js/22.b890f2af.js",
    "revision": "c4d1486cdced434f19743ce90fbde405"
  },
  {
    "url": "assets/js/23.24ef6b5a.js",
    "revision": "286793d40d673ef6a7f45ad84a33b4f2"
  },
  {
    "url": "assets/js/24.ebbd316a.js",
    "revision": "187e28634d955a362bc38eb7d95ad6b6"
  },
  {
    "url": "assets/js/25.cd870338.js",
    "revision": "deb8f6b01ff9fd2c5186e0b04aa352b8"
  },
  {
    "url": "assets/js/3.3c1fec2a.js",
    "revision": "d3ebd660cf62728c4292efe40a3dde17"
  },
  {
    "url": "assets/js/4.5fbd8c02.js",
    "revision": "745faa45365abe1fc1a2608dfe8f603e"
  },
  {
    "url": "assets/js/5.e198f124.js",
    "revision": "74d71a654e344d02a5cd301dd0fa8a48"
  },
  {
    "url": "assets/js/6.178496c3.js",
    "revision": "1175d1b38c89a6797208e3160e6ba0f1"
  },
  {
    "url": "assets/js/7.2242b1eb.js",
    "revision": "56e336e112db1cee00133bca1064ad34"
  },
  {
    "url": "assets/js/8.6de8f968.js",
    "revision": "388fdd033b9d7813abdd93644b4957d8"
  },
  {
    "url": "assets/js/9.829b1ec7.js",
    "revision": "92faad8536733b9704a0a1a15dbaf716"
  },
  {
    "url": "assets/js/app.f564f8ee.js",
    "revision": "98f2acf1439d9369ac48111574d48d3e"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "50747b583b7f0a203fb86cd5ff8ff5bd"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "b41f45bf2318f0d1903240b990d88bb8"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "cc8f2a1e2eb401983355c1194bd08142"
  },
  {
    "url": "index.html",
    "revision": "e021ae2973657db03ce7f0096d981009"
  },
  {
    "url": "reference/cli.html",
    "revision": "8502c85cd00a58be2994b8f882c48356"
  },
  {
    "url": "reference/environment.html",
    "revision": "2cbf50b97b96b2e65fc6cf557f65f0e5"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "16442451ebdecf16f4dc615b0945be69"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "7fa47680f0e85cc006562213512e8dca"
  },
  {
    "url": "tips/packaging-images.html",
    "revision": "e05bc7c60098186a2c8bbd9a001ba809"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "a7574ef0811c82e95860c68099fa34ac"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "d30e7c1dea3b3486f99efc6fe5d1f6ab"
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
