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
    "revision": "6f3dad7242e8809f4d265fd78f60381e"
  },
  {
    "url": "about/contact.html",
    "revision": "8b9bb7d774759d8e1b2cd6f087d151f8"
  },
  {
    "url": "about/contributing.html",
    "revision": "dce2f5b77a37147680c0c5a2ae1c8503"
  },
  {
    "url": "about/introduction.html",
    "revision": "58717bb4c9e0e0f79dcf462b8f6313f5"
  },
  {
    "url": "about/license.html",
    "revision": "a682018cd4ccb86a138019c712038a24"
  },
  {
    "url": "about/roadmap.html",
    "revision": "25bc8430bb8b19fba97cf3b36e5c977e"
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
    "url": "assets/js/8.bd45d044.js",
    "revision": "ffd054ff6d75ebf1cc2b34544ffd79a3"
  },
  {
    "url": "assets/js/9.09ad2f39.js",
    "revision": "3fdb34f849126c7bc98cb050d7aaf2fd"
  },
  {
    "url": "assets/js/app.d1bd404c.js",
    "revision": "5f0942de818d3c915bee554e11b0db3f"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "0dca079e3e47e8b4989448ce183daefb"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "2c858ef7a78bc2c4b588e1c6848715f4"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "2a303050bc84eedd19715c70ca8bb383"
  },
  {
    "url": "index.html",
    "revision": "59f19e95f224bd657777b5e5554d84a7"
  },
  {
    "url": "reference/cli.html",
    "revision": "69b4202123771b4cb69f3bae7244aa9b"
  },
  {
    "url": "reference/environment.html",
    "revision": "6b45e9d4d69203d7126a0bc231ddf438"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "6104823cae9eccd1033786f08e7080b2"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "8aeb9f0405698aa487fbbd4c832cdce6"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "562473a5c779b554d652b6d9da058f3e"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "f3488cbcfea37a7a9e1a50a8ec7995d9"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "6893d004714ab14396544979f90b5130"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "eebd59730f2c864adbd3fd85636eab1d"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "69a4138bda03bf8d4b2f2c6b8f116f5d"
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
