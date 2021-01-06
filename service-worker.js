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
    "revision": "3970bfa346413006b2d79994bb8de366"
  },
  {
    "url": "about/contact.html",
    "revision": "94645ce5f6a34394372efbd64c52061f"
  },
  {
    "url": "about/contributing.html",
    "revision": "fd6fb1c582a6c3296c95865d3467a612"
  },
  {
    "url": "about/introduction.html",
    "revision": "b5e6a6bedb519da9a0f53319cb92e8ca"
  },
  {
    "url": "about/license.html",
    "revision": "582e06f983645ed0ff31215ab6654bc2"
  },
  {
    "url": "about/roadmap.html",
    "revision": "883c869eec5f64040137629147b9728e"
  },
  {
    "url": "assets/css/0.styles.7357db9c.css",
    "revision": "89cbb38fba8eef641e041d2ceb23f315"
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
    "url": "assets/js/10.aef55381.js",
    "revision": "0e00e957aa6704df8e23db646658440f"
  },
  {
    "url": "assets/js/11.0c36b719.js",
    "revision": "f1a309044195c4e9c28b37eb39aa2b5b"
  },
  {
    "url": "assets/js/12.a39d9573.js",
    "revision": "3c0ae1181d6f7f3d9350008c80b35db7"
  },
  {
    "url": "assets/js/13.34b67b37.js",
    "revision": "a18a05ddcf40c7b87112c6c045b9aa41"
  },
  {
    "url": "assets/js/14.d94d5659.js",
    "revision": "5c51f8876af4dbd3be01801f6912f4cf"
  },
  {
    "url": "assets/js/15.5734fc38.js",
    "revision": "da8de7dff48ed166556bc5f79a2ce802"
  },
  {
    "url": "assets/js/16.b3bcda79.js",
    "revision": "993350762e3221a8e73980d919356e98"
  },
  {
    "url": "assets/js/17.b923da4c.js",
    "revision": "821099863aac2df3fbfe3035d7816699"
  },
  {
    "url": "assets/js/18.c1aa1da1.js",
    "revision": "91953c25c5e6687eae56559074f5a1d2"
  },
  {
    "url": "assets/js/19.a77ab062.js",
    "revision": "8d4d47b650f8b0c5030ed61f4c793094"
  },
  {
    "url": "assets/js/2.7cc61a80.js",
    "revision": "f41ccb7ceb6f704dadb086d681d8c1c3"
  },
  {
    "url": "assets/js/20.10d173a7.js",
    "revision": "eb1504260c881a5c06bcf76e6d48a647"
  },
  {
    "url": "assets/js/21.3d75223e.js",
    "revision": "096e6a3a86bca567f153ccf2c7326efd"
  },
  {
    "url": "assets/js/22.b0b9aea4.js",
    "revision": "8242a556a3a482bf862c1ba9295d89c9"
  },
  {
    "url": "assets/js/23.780bdd47.js",
    "revision": "3d9cf88e3e6b7bdd50bd0c22857f390b"
  },
  {
    "url": "assets/js/24.b724bf7a.js",
    "revision": "9634facbaf71016081252df2335380c5"
  },
  {
    "url": "assets/js/25.83145eb1.js",
    "revision": "650836934572608db20e7869e18e8ac2"
  },
  {
    "url": "assets/js/26.cdee886b.js",
    "revision": "cd9724cae6cab15341492617e7ddbad6"
  },
  {
    "url": "assets/js/27.f68ca9cc.js",
    "revision": "a6acd231f3ebf5361f8660f948ef117a"
  },
  {
    "url": "assets/js/28.a17440ae.js",
    "revision": "4905e73b95132d0ed4ee5378dd692fc5"
  },
  {
    "url": "assets/js/29.d0736baf.js",
    "revision": "9cb29840892643f034554b4687c617ed"
  },
  {
    "url": "assets/js/3.f09f66f6.js",
    "revision": "e49631f83202760d91f8c0cf369bb29b"
  },
  {
    "url": "assets/js/30.28cb2ad0.js",
    "revision": "3d161a299e443ab327cf0299ffe3bff7"
  },
  {
    "url": "assets/js/31.35927d37.js",
    "revision": "b40c4d59fbd37a397abf2ef4f8d9ecb5"
  },
  {
    "url": "assets/js/4.5c2690c3.js",
    "revision": "570f5395468ed3fdf48afe2acd78b09b"
  },
  {
    "url": "assets/js/5.72e42440.js",
    "revision": "e84883882f74e574e0d50e8b241db181"
  },
  {
    "url": "assets/js/6.208b90d5.js",
    "revision": "534d0f80087c0ebc4fa02b42f729c763"
  },
  {
    "url": "assets/js/7.65777dff.js",
    "revision": "c0b5f79a8f35287179b402722714bf35"
  },
  {
    "url": "assets/js/8.d217babf.js",
    "revision": "0b2398844d5d13394d71e635e98092bd"
  },
  {
    "url": "assets/js/9.09ad2f39.js",
    "revision": "3fdb34f849126c7bc98cb050d7aaf2fd"
  },
  {
    "url": "assets/js/app.d1b1ca3d.js",
    "revision": "3bb0500ef8539b0e854285c3d6cdd18d"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "d66c81a4f16ff6f1048774a61c23aceb"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "61585f53a0796177d48a379863321cce"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "addbbbe2878a18650c155c7f3d4cac07"
  },
  {
    "url": "index.html",
    "revision": "9f0c1140cedd2b4b82ff2fc6abb61bdf"
  },
  {
    "url": "reference/cli.html",
    "revision": "e3102a7325f5433e8df9c582095b3d29"
  },
  {
    "url": "reference/environment.html",
    "revision": "7c653b4a494563dbbad345392df60fd2"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "000cd77647942bb5ccb7dce6c088d888"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "6a5e5d3f2d33cd69f0f7c58691c007ac"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "ee755ed5fdee1d5b47a213f9df434b0f"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "6873e373864bd5d3f28313ab31dff502"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "b1a15fc5e60698094cb125c0b28b0dcc"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "3ed328e217f035833630b81bfeab673a"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "d0c897d5ad585cfd49b91d8ef93b7d0e"
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
