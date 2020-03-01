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
    "revision": "4e847d4eae82c3c449aa3ed6bf83c0d1"
  },
  {
    "url": "about/contact.html",
    "revision": "e20eb8b9303ff7dc03ed3a262e2101f1"
  },
  {
    "url": "about/contributing.html",
    "revision": "a7ccf86b251b3f9e65c6e7dd2e59ee5c"
  },
  {
    "url": "about/introduction.html",
    "revision": "9ddae7ec7761ee8eee79113ee07c7085"
  },
  {
    "url": "about/license.html",
    "revision": "c9fb095ef38aeaec55478912e3611f05"
  },
  {
    "url": "about/roadmap.html",
    "revision": "bd18ed08ae42066c713848442c6399e2"
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
    "url": "assets/js/app.852d2bde.js",
    "revision": "14a0c622a0871d59880abf881e93548f"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "98133d801a70431491045536bc102e2f"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "5e36883de61eacb70faff468e919343f"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "8ed6c8d42ff9da6e97c0b0d7b565bdd0"
  },
  {
    "url": "index.html",
    "revision": "3c990cc9edf14d36afb57ec4f4990fb0"
  },
  {
    "url": "reference/cli.html",
    "revision": "fd2a023a48bfae73aa585cf082bf6dd3"
  },
  {
    "url": "reference/environment.html",
    "revision": "683b52c5bcf96c17a279073d2de49596"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "6e5fe6c6fcfb75ad8575bfc1b9f96702"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "3a1a4ac56e324431a33692921b3ef862"
  },
  {
    "url": "tips/packaging-images.html",
    "revision": "6d7981386f11b0373d237dd074699dd2"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "f264e41c9679af9f05f517c65ba7dd2c"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "41beab41754b7a77165981ea5ac4f599"
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
