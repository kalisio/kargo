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
    "revision": "e99cf01e5383247a4aade3ebb8bb4b7e"
  },
  {
    "url": "about/contact.html",
    "revision": "56ddf29560b4ee92ea103d3be27fe783"
  },
  {
    "url": "about/contributing.html",
    "revision": "ae63a7910e02b2e14aa9883f75a3a512"
  },
  {
    "url": "about/introduction.html",
    "revision": "e9a12c1f14299ae9d806b1dd2cbdb5aa"
  },
  {
    "url": "about/license.html",
    "revision": "0c829d0d83cca3e3d0064a56cc43a83c"
  },
  {
    "url": "about/roadmap.html",
    "revision": "614b3b962bc72531bd42ff1c5bda88f3"
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
    "url": "assets/js/16.f0d807e7.js",
    "revision": "8f03263865b9853645c1845e0f745497"
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
    "url": "assets/js/6.ce9fdec6.js",
    "revision": "1175d1b38c89a6797208e3160e6ba0f1"
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
    "url": "assets/js/app.fca4b774.js",
    "revision": "a066426eb60baafc57707d8bbfb5be2d"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "3a9816e49f3a8be95c2a8a960348844d"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "aa2680dad7a1686200a9cb6003f741bb"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "924a174573702a49f50d8a014974660b"
  },
  {
    "url": "index.html",
    "revision": "e1fe0f171c5337c99c5d2594cc79a191"
  },
  {
    "url": "reference/cli.html",
    "revision": "b641886b3d212133292a7767f2f7bac2"
  },
  {
    "url": "reference/environment.html",
    "revision": "f56cd60deb74d5ea825ef0c8ad9f74b1"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "a9a050dadeeaa13d17583105e75979a8"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "5374ed580b597be639f46ef7a9d5975e"
  },
  {
    "url": "tips/packaging-images.html",
    "revision": "a287881b7f52433777d9ff850eefa200"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "effe721cb5d77be9d0111256b8e5f0b9"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "2a3387e8c5c5328ae880482c0136dce8"
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
