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
    "revision": "fadd510bf04db5accca48c7d4b435e66"
  },
  {
    "url": "about/contact.html",
    "revision": "3783ddbd36e2a44aa92bac25ecb2901e"
  },
  {
    "url": "about/contributing.html",
    "revision": "3b445e115ab66712e15460f4e38add15"
  },
  {
    "url": "about/introduction.html",
    "revision": "6d40eca5b5b03338bcde947967f796dc"
  },
  {
    "url": "about/license.html",
    "revision": "f06f1320c2efe673f0118b8ca560004f"
  },
  {
    "url": "about/roadmap.html",
    "revision": "2b7977ecd429cc5c79e4089e02abfc68"
  },
  {
    "url": "assets/css/0.styles.f89d1cd1.css",
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
    "url": "assets/js/10.22f4267a.js",
    "revision": "44a06b2e946709e7a93ce592b31e66ec"
  },
  {
    "url": "assets/js/11.33aacc8f.js",
    "revision": "54be8052a757324a5f1fe70f0c0ff55d"
  },
  {
    "url": "assets/js/12.679c3fe3.js",
    "revision": "cad023cbb519e9016c22b2694ac3f96b"
  },
  {
    "url": "assets/js/13.a21f5f57.js",
    "revision": "19d94257351789d968b83cd6eb9387d2"
  },
  {
    "url": "assets/js/14.83a428e6.js",
    "revision": "0da84cd176fca3c6d077521e7a653804"
  },
  {
    "url": "assets/js/15.2e1261f2.js",
    "revision": "508f9b3c4a000cdb9c1e60542130bc92"
  },
  {
    "url": "assets/js/16.332fa3d0.js",
    "revision": "198ae237c44da6fd82f3bfad07669aac"
  },
  {
    "url": "assets/js/17.cf7fc531.js",
    "revision": "127869a57cdf02c1c8cc65818eb0ffaf"
  },
  {
    "url": "assets/js/18.1e1bd5d2.js",
    "revision": "278ade4e2d4de8922d8d4598350c5d8b"
  },
  {
    "url": "assets/js/19.a1f4b125.js",
    "revision": "ac6d84dc49ba5094759c0ff84571725f"
  },
  {
    "url": "assets/js/2.b23a21ec.js",
    "revision": "c0b11f78b2ddf42a13638de969221226"
  },
  {
    "url": "assets/js/20.e6e1eff2.js",
    "revision": "3129611409c14ca6719b8249027e9bda"
  },
  {
    "url": "assets/js/21.f7f025c4.js",
    "revision": "7136ef7005805f16ec566a32abbc137a"
  },
  {
    "url": "assets/js/22.9725668f.js",
    "revision": "c4d1486cdced434f19743ce90fbde405"
  },
  {
    "url": "assets/js/23.66253ca4.js",
    "revision": "286793d40d673ef6a7f45ad84a33b4f2"
  },
  {
    "url": "assets/js/24.545cc69c.js",
    "revision": "187e28634d955a362bc38eb7d95ad6b6"
  },
  {
    "url": "assets/js/25.ccfe7a28.js",
    "revision": "deb8f6b01ff9fd2c5186e0b04aa352b8"
  },
  {
    "url": "assets/js/3.e7a7205c.js",
    "revision": "d3ebd660cf62728c4292efe40a3dde17"
  },
  {
    "url": "assets/js/4.16625184.js",
    "revision": "745faa45365abe1fc1a2608dfe8f603e"
  },
  {
    "url": "assets/js/5.635f2353.js",
    "revision": "74d71a654e344d02a5cd301dd0fa8a48"
  },
  {
    "url": "assets/js/6.6dd5af14.js",
    "revision": "43575f9b9e99518cc860790efddf444e"
  },
  {
    "url": "assets/js/7.11bde131.js",
    "revision": "a0af5d9fcc5e0091b0d988ca4deef504"
  },
  {
    "url": "assets/js/8.044fafb6.js",
    "revision": "388fdd033b9d7813abdd93644b4957d8"
  },
  {
    "url": "assets/js/9.6a87f4e4.js",
    "revision": "92faad8536733b9704a0a1a15dbaf716"
  },
  {
    "url": "assets/js/app.3404ccf1.js",
    "revision": "49448eacc9a58e513b4b49643fdde544"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "8feb3ea20fa90a0c33a7f60d5ba02f66"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "5ef5d869db0d7fabd74ebf57cd9f945f"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "4f97c7ee7aef9960279430c3fb696c82"
  },
  {
    "url": "index.html",
    "revision": "bae3dc3a02fbe0be0c689bb842cf29bd"
  },
  {
    "url": "reference/cli.html",
    "revision": "9b230208201f7e4c1d4cbb31cb7a247f"
  },
  {
    "url": "reference/environment.html",
    "revision": "fd377cdd3dad293014d790b10ee39d2b"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "7e8879c5734ce9454689e7b6c39376df"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "c9b4b5a91f1841263bc0ee1f64fe3716"
  },
  {
    "url": "tips/packaging-images.html",
    "revision": "9dfc7c91c6245ecfe82cfd810d7c5b47"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "ce6fac88c5dc534714ec5fb7f19adf31"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "d33566940173a5db5131d76e62908cb9"
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
