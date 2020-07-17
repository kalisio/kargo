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
    "revision": "87bc25b9559b326739b0f9d4468633e0"
  },
  {
    "url": "about/contact.html",
    "revision": "db1a0a5f0c67463d2eed91a062be0ad3"
  },
  {
    "url": "about/contributing.html",
    "revision": "ad669ebf6230fc1d9f6281dd6c5d9399"
  },
  {
    "url": "about/introduction.html",
    "revision": "12f4015b8a6387a294f99743d3f589d7"
  },
  {
    "url": "about/license.html",
    "revision": "4577ff9dbdafd8fa937dd8792d6d3d48"
  },
  {
    "url": "about/roadmap.html",
    "revision": "7303d83e6c08a7da3662b7d687640a41"
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
    "url": "assets/js/18.ed41658f.js",
    "revision": "23ad8d6b1794cafa00aebece61ad224d"
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
    "url": "assets/js/app.5a0b29d5.js",
    "revision": "9c26ea7dcb49063d26cb0dfa29e5262c"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "3b40dd52c4c83646314d727363cad815"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "cebd15270818a105e0b2024c94327a1f"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "6c9f78d16b6a0ff99c64c08e61a5d439"
  },
  {
    "url": "index.html",
    "revision": "ace06fdf860537b1575b6d5c17ab2fd4"
  },
  {
    "url": "reference/cli.html",
    "revision": "04365fdcd4a4dc6f43dd8c340a73f47c"
  },
  {
    "url": "reference/environment.html",
    "revision": "dd1432236bf738a79617a9e60681c408"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "73436e2b1993efd9eb48811b03fe5cff"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "58566912757600566f19263a1eb79a37"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "0087e8edcf131259ab146c543dbac04d"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "db9c73e98bc4f3da4cbecb767570bc7f"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "815586ff30cc907f1654e02576e3ace2"
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
