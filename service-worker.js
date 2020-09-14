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
    "revision": "f4b8446dc913246be5740e2d9af5a03e"
  },
  {
    "url": "about/contact.html",
    "revision": "5a125b08c369cf4adfe6d736e3e9dfdb"
  },
  {
    "url": "about/contributing.html",
    "revision": "d7f16a266ed314057a2cb447020e634c"
  },
  {
    "url": "about/introduction.html",
    "revision": "1561507fa2e32ac743f8d72b64e6a734"
  },
  {
    "url": "about/license.html",
    "revision": "1793d467ac6baad592ee51f42aafe4ae"
  },
  {
    "url": "about/roadmap.html",
    "revision": "5ded6c0a67e9b7a7883057f988a90796"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b0c033f8.js",
    "revision": "52fd2c048c6c3caf73eed25508101e86"
  },
  {
    "url": "assets/js/11.66914373.js",
    "revision": "1c3a5af0d689ee8085da5c73612dae81"
  },
  {
    "url": "assets/js/12.019be65d.js",
    "revision": "c24bb44fdece3bbe3820d4a20837f7b5"
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
    "url": "assets/js/15.f6bc977a.js",
    "revision": "bff4a876598d0993b0c2394a2331e353"
  },
  {
    "url": "assets/js/16.08530d15.js",
    "revision": "143b12e37f1e30804cd00247a57b95eb"
  },
  {
    "url": "assets/js/17.4a42c6c0.js",
    "revision": "743952dea22343444ab8e57464e66d14"
  },
  {
    "url": "assets/js/18.ef84563f.js",
    "revision": "4f1a21fd6ab889f48875901d73d5f5d2"
  },
  {
    "url": "assets/js/19.e55a1850.js",
    "revision": "0cbd543ba606cb114f5e50aab5883e66"
  },
  {
    "url": "assets/js/2.47742286.js",
    "revision": "d6ba76be1ae360c3c7a7d286744b3edb"
  },
  {
    "url": "assets/js/20.87649545.js",
    "revision": "eb90e0764035b19f1a85e31591cd6259"
  },
  {
    "url": "assets/js/21.3306f308.js",
    "revision": "f4d0dcc66a18b11c765e1d6482925e34"
  },
  {
    "url": "assets/js/22.25a5ec4d.js",
    "revision": "999841dbdb19449b57bb4354763090c6"
  },
  {
    "url": "assets/js/23.7da6ab87.js",
    "revision": "121989cecd5cc942840cbb08f72b55c1"
  },
  {
    "url": "assets/js/24.685ccc4c.js",
    "revision": "cfcc75f19687b5d3c46d1b179061229b"
  },
  {
    "url": "assets/js/25.ff87dd5d.js",
    "revision": "9a3e2af3ba77c5f6158a8f727b3b7537"
  },
  {
    "url": "assets/js/3.58116aa1.js",
    "revision": "cefebfad0ec7f64dbf8cff5b910608c8"
  },
  {
    "url": "assets/js/4.2376a8cb.js",
    "revision": "7ea67e09d08e15fe9a039a4e2020c646"
  },
  {
    "url": "assets/js/5.24be453c.js",
    "revision": "dd46265c2defda34bfae1a4af6a82792"
  },
  {
    "url": "assets/js/6.468ec870.js",
    "revision": "6b87061649d47ffa81d7edf170af3c46"
  },
  {
    "url": "assets/js/7.4196b11b.js",
    "revision": "2942b6b0f6f8939a29669be33d4e2f56"
  },
  {
    "url": "assets/js/8.c2fc8c82.js",
    "revision": "27e0c2d2b2e89671a343fe6822cc32fd"
  },
  {
    "url": "assets/js/9.aa4bbdfa.js",
    "revision": "f622dcbe58953f3d2d06bd5e150a3def"
  },
  {
    "url": "assets/js/app.e06e51bb.js",
    "revision": "13ac9c50ec872ff3223a7e6078224713"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "d2e8db4fa0b98716f1c664dcb7aaacf2"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "1a30302ee450b26de9994942d237a4c9"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "64fe96ce26be0eb8f81fdb8cf17449d1"
  },
  {
    "url": "index.html",
    "revision": "fde0d54ecb9a4e6d388b8667c873f3c2"
  },
  {
    "url": "reference/cli.html",
    "revision": "3a38453d8b715dd1cb0ee2921b63fa88"
  },
  {
    "url": "reference/environment.html",
    "revision": "990ed1a773f48c75c1da3ff2c010560d"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "42b9802da4db94c0164766f4254b506e"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "a6409220f5eaa577377bc5a152870276"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "bed96ad97a6bdd8b95bc4a811d800c0c"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "455446da70f490a89be13b5428b0042b"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "3d38876974d71962b3c8b41d47da8234"
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
