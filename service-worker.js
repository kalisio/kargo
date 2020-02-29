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
    "revision": "074a25ce0cd3558d0e26ecf1ae3e9645"
  },
  {
    "url": "about/contact.html",
    "revision": "85a2297d1a45955e6e94c542e1b6608f"
  },
  {
    "url": "about/contributing.html",
    "revision": "de75f0d4a439ce96daa7236200f51062"
  },
  {
    "url": "about/introduction.html",
    "revision": "0e3360deb1561de1995ed0e8f557961a"
  },
  {
    "url": "about/license.html",
    "revision": "6edb0a839567865a4db4e9257b6856d4"
  },
  {
    "url": "about/roadmap.html",
    "revision": "5a64b6d4621584c158849543a0bbd120"
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
    "url": "assets/js/17.f4a847a1.js",
    "revision": "2e03cdcf3b160a94d150be7a5368729f"
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
    "url": "assets/js/app.f82e9e0b.js",
    "revision": "75bd67aaf407ccde67c0712a246d990c"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "ed1306d27b34b6623aa6ce0500cfefe0"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "9bde276f965b4073f8fe91d57cb82660"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "130182e9ef9e06868e3c4ee79144b892"
  },
  {
    "url": "index.html",
    "revision": "4f34e9ee12f55f21713af87ced01edd2"
  },
  {
    "url": "reference/cli.html",
    "revision": "cd6bc67e82e33670c930506251b3ecaa"
  },
  {
    "url": "reference/environment.html",
    "revision": "845e4960b0b96a6c5bb5428a94395a65"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "41f1e67430a522cffc96a1c67e50ba48"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "8568d9f196883ad3199cb80cbc4dd6a3"
  },
  {
    "url": "tips/packaging-images.html",
    "revision": "89a6ce66796ea22f7f532548b7697236"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "950bc4d3ded436f72bc8fbe4be650955"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "a9bfbfa93e14ff73771b4cbef770b8dc"
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
