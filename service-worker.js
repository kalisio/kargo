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
    "revision": "a9edde9f8c1d1b88a624338b022eb215"
  },
  {
    "url": "about/contact.html",
    "revision": "4a0ab756659736965344b9bf76490929"
  },
  {
    "url": "about/contributing.html",
    "revision": "027c637366535751131f13cde58144dd"
  },
  {
    "url": "about/introduction.html",
    "revision": "9b2ec589c24b0753bfed4ac5d2060381"
  },
  {
    "url": "about/license.html",
    "revision": "a7905ca6110cebceceaf0d3b05684fc6"
  },
  {
    "url": "about/roadmap.html",
    "revision": "ec0b7eb0722f084283ca4b40e81745fd"
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
    "url": "assets/js/12.b1f6a54c.js",
    "revision": "cf6008386ebd5bc4d6dea62a0caaea14"
  },
  {
    "url": "assets/js/13.8087806b.js",
    "revision": "f0f28eeb0c2959ff43a7363070e494de"
  },
  {
    "url": "assets/js/14.148db465.js",
    "revision": "aac2d5c3d4e7f0c3523287e725cf2def"
  },
  {
    "url": "assets/js/15.55742e87.js",
    "revision": "d3e26b60a330cdcf0a7ba9bb230d7210"
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
    "url": "assets/js/5.a1c18e06.js",
    "revision": "82f084579050a23d4d6324c54d0f926d"
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
    "url": "assets/js/app.e574872b.js",
    "revision": "420303cc51f019766e44148625321339"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "2b6c1ccee7186c00b79377b451504126"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "28a7108d8fb85d41179b3848f5210846"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "e9bcb69d9a5ced05a8b5e552d310760f"
  },
  {
    "url": "index.html",
    "revision": "99c66ba6d585085cba1bac83c642b4f1"
  },
  {
    "url": "reference/cli.html",
    "revision": "eccadcfa9ec9525e3ac305fca8878785"
  },
  {
    "url": "reference/environment.html",
    "revision": "8f9e90be03d68c24aa711aa9d5407f6f"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "ff1437babc39567548775dc86fd254d3"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "d98241e00dda3f48cee2837d4207f572"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "bd998739eabeaa95f712baf168f43f68"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "e5dfc8078113e2a9eb5548ded4274dfa"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "c859c6a4f4b1c3953a50e41e9d6267c9"
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
