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
    "revision": "231c257cea8f348c112f3feaf1f61c2e"
  },
  {
    "url": "about/contact.html",
    "revision": "968546f26879394f867d39959e85e99b"
  },
  {
    "url": "about/contributing.html",
    "revision": "f6963bca60c3b97e19b3330f6475ea99"
  },
  {
    "url": "about/introduction.html",
    "revision": "f5337a63278689c0e37618ee3050e6f9"
  },
  {
    "url": "about/license.html",
    "revision": "ea54565ff5d04b4a3a3156abf7717f6f"
  },
  {
    "url": "about/roadmap.html",
    "revision": "c9080ae0a4f3f01bbadddb2304e71ab4"
  },
  {
    "url": "assets/css/0.styles.21f892e9.css",
    "revision": "cb218daf71841c4b9fb1d6e3c1be1018"
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
    "url": "assets/js/10.5242a69b.js",
    "revision": "6384b1fa1d53fb4c109f1670b639e728"
  },
  {
    "url": "assets/js/11.629febd6.js",
    "revision": "3288f2cfdeacc40caa1d15e09c002755"
  },
  {
    "url": "assets/js/12.32088f54.js",
    "revision": "3c0ae1181d6f7f3d9350008c80b35db7"
  },
  {
    "url": "assets/js/13.7bfc96da.js",
    "revision": "cf63593caca66fc170876efb9f92d64b"
  },
  {
    "url": "assets/js/14.fef6b623.js",
    "revision": "5c51f8876af4dbd3be01801f6912f4cf"
  },
  {
    "url": "assets/js/15.8f6428ca.js",
    "revision": "c4f08d062125c35101b860680b6dfef7"
  },
  {
    "url": "assets/js/16.c407c2f1.js",
    "revision": "993350762e3221a8e73980d919356e98"
  },
  {
    "url": "assets/js/17.ff63ab84.js",
    "revision": "821099863aac2df3fbfe3035d7816699"
  },
  {
    "url": "assets/js/18.d5f0e9d8.js",
    "revision": "91953c25c5e6687eae56559074f5a1d2"
  },
  {
    "url": "assets/js/19.1fdac110.js",
    "revision": "8f8dd4b7e502ecf545cc0c326570462a"
  },
  {
    "url": "assets/js/2.aadf217f.js",
    "revision": "d1c506cf895a7b06b9b4414dcebe06c7"
  },
  {
    "url": "assets/js/20.052a1270.js",
    "revision": "6e18c8d1407d61ed8872524fde7e7aba"
  },
  {
    "url": "assets/js/21.08d1714b.js",
    "revision": "0f1836f628b99205101252cbdaf1fa2d"
  },
  {
    "url": "assets/js/22.266c3b88.js",
    "revision": "00ccddcf73c7485636bb372836877adf"
  },
  {
    "url": "assets/js/23.d885bd2b.js",
    "revision": "4639ca1cc1e128fdd0051116b041fdcf"
  },
  {
    "url": "assets/js/24.3952441e.js",
    "revision": "c68669e897d886007b0ce6d23fbc880c"
  },
  {
    "url": "assets/js/25.c8c15d63.js",
    "revision": "52af4e09a978c906df07ebf143d87d21"
  },
  {
    "url": "assets/js/26.c9f07b37.js",
    "revision": "0ce8e4e6cd3ff590173245a4fb72812f"
  },
  {
    "url": "assets/js/27.35d3b59c.js",
    "revision": "d681f8a48ca4c2a167ba954e9c1c2435"
  },
  {
    "url": "assets/js/28.9b96dd73.js",
    "revision": "248df2035ca40da11c9a2c996baa1f61"
  },
  {
    "url": "assets/js/29.23749e29.js",
    "revision": "fa7d78b6d502dc07ad5066d44033be0d"
  },
  {
    "url": "assets/js/3.2a46a756.js",
    "revision": "e49631f83202760d91f8c0cf369bb29b"
  },
  {
    "url": "assets/js/30.117c6bd4.js",
    "revision": "af150974c78660aefdd4c9f82a388789"
  },
  {
    "url": "assets/js/31.f3e3d35a.js",
    "revision": "366bc4ef4f54c5205a937a3caf60e36d"
  },
  {
    "url": "assets/js/32.d4caaded.js",
    "revision": "91d7f29042d5490dedda37c50ba2783d"
  },
  {
    "url": "assets/js/33.cef21e18.js",
    "revision": "77a8a6ff2c027452ef5e41d64d49b9af"
  },
  {
    "url": "assets/js/34.5bae7d60.js",
    "revision": "680db84a39193c32beb6d4d53567ce74"
  },
  {
    "url": "assets/js/35.cd896010.js",
    "revision": "49aff4f3cd8fa8ff1076142161820341"
  },
  {
    "url": "assets/js/4.1b74af09.js",
    "revision": "570f5395468ed3fdf48afe2acd78b09b"
  },
  {
    "url": "assets/js/5.b4fe35da.js",
    "revision": "3c2fecb370b30a6cddfa30f51d44ca48"
  },
  {
    "url": "assets/js/6.ef3c43be.js",
    "revision": "534d0f80087c0ebc4fa02b42f729c763"
  },
  {
    "url": "assets/js/7.24c688a2.js",
    "revision": "c0b5f79a8f35287179b402722714bf35"
  },
  {
    "url": "assets/js/8.92991761.js",
    "revision": "aaa791795405b69f2142dc02cb16fae6"
  },
  {
    "url": "assets/js/9.1eff0c26.js",
    "revision": "3fdb34f849126c7bc98cb050d7aaf2fd"
  },
  {
    "url": "assets/js/app.5fd6aaec.js",
    "revision": "d1319e312a4319e52b2e3f77cc4f65ba"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "5d57e756ac70f74a0183e28dde94ede9"
  },
  {
    "url": "guides/docker-images-helm-charts.html",
    "revision": "1ab7edacc69c8a57ad95fe849764a6b5"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "c09614bc447d560e1ad1a610772b0729"
  },
  {
    "url": "guides/infrastructure-management.html",
    "revision": "6fef2b5b001b17489ac2fa0fa5f3c074"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "01eb5b8f3bf9514d94e8955209df3a45"
  },
  {
    "url": "index.html",
    "revision": "7d12fede8a9586b15bb49df33d8b9926"
  },
  {
    "url": "reference/cli.html",
    "revision": "71d6deed87b88a8a02203c7b5cf0389d"
  },
  {
    "url": "reference/environment.html",
    "revision": "991eb2e964821d827f2a8cd6cf9e79d0"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "1607a92f4644ebee66d7e08b0ac76412"
  },
  {
    "url": "reference/scripts-library.html",
    "revision": "3ac82d5d94f4c86cf98450e9a50f2a02"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "aa6aa020d2b14de5037b275eeed94065"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "d5438cf150a94d780ccf185f12911907"
  },
  {
    "url": "tips/running-express-gateway.html",
    "revision": "ace3b718f5d7af1066f82138659fe47a"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "5f5f3c3c7504d564f365359ff13bce7e"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "c997fa13d69eeec8c684ee6f8ee05ea8"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "056b638bd813b706c018cee1855d9923"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "a942f51826b2435391f884a8d577cfa9"
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
