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
    "revision": "a6fd84ddb124efb00b5cd108501c224a"
  },
  {
    "url": "about/contact.html",
    "revision": "401def572f0eb551d790b680e0797f45"
  },
  {
    "url": "about/contributing.html",
    "revision": "c1f97337eff90ce8a9b8c959debdb25b"
  },
  {
    "url": "about/introduction.html",
    "revision": "fb13d53caa758add67c6dda7e3e8c96b"
  },
  {
    "url": "about/license.html",
    "revision": "98c3ceaf34fd481b390b7f19f3e12d98"
  },
  {
    "url": "about/roadmap.html",
    "revision": "813df80f897961f49b0f8c4154b360e0"
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
    "url": "assets/js/18.3f3596f7.js",
    "revision": "286fc749d2946a54b4d8928c9fa625bf"
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
    "url": "assets/js/6.216a20aa.js",
    "revision": "9014ffe55afef01e318a8e1a23738d6e"
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
    "url": "assets/js/app.ca9a55b1.js",
    "revision": "c9d707a199cff86dcc91180299d8d503"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "e571224be5c0fc206856849c6af91738"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "bf45ccf5d48d6d39592bfabeef1a76ee"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "826f44f5079f1b6e12295e09c5678713"
  },
  {
    "url": "index.html",
    "revision": "df13cd4913105697f6390dc2ba0ff4ee"
  },
  {
    "url": "reference/cli.html",
    "revision": "d24110ee98fa0f5259b35fb0e498a9f0"
  },
  {
    "url": "reference/environment.html",
    "revision": "1c12483dfb51e9553de9408c577f707e"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "5bce57509731188ad902b439cbe1fb91"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "b7e97940c294c03b9d2e890cfb80120e"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "872ec90a91b7636cc0fd491895318e35"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "5c7b33cf5f7d7f8de3c698f9da4f21ef"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "5ccb410f48c16ebb65262d1e50db7a68"
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
