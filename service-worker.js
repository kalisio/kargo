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
    "revision": "610c62c9550e4ecae4a9fab8ea57e5fc"
  },
  {
    "url": "about/contact.html",
    "revision": "4711ae9888a2158d689c55e1ca935712"
  },
  {
    "url": "about/contributing.html",
    "revision": "529bd3e12a54792ef662ad30cffa546f"
  },
  {
    "url": "about/introduction.html",
    "revision": "9b7d6e5dc7ee4184aaa20d3dcd3bf1f6"
  },
  {
    "url": "about/license.html",
    "revision": "e4caed07a772e79b098423c4a9cf5a6b"
  },
  {
    "url": "about/roadmap.html",
    "revision": "9f739d0cca00dae837478af5c9755233"
  },
  {
    "url": "assets/css/0.styles.5cd31058.css",
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
    "url": "assets/js/10.80e27cde.js",
    "revision": "ce4b25deafcc45cd4584c65a378a0396"
  },
  {
    "url": "assets/js/11.8402b5c3.js",
    "revision": "67b09a25d4a8ec988f67f01ef7487ea6"
  },
  {
    "url": "assets/js/12.a39d9573.js",
    "revision": "3c0ae1181d6f7f3d9350008c80b35db7"
  },
  {
    "url": "assets/js/13.3e18226b.js",
    "revision": "28a9a79e8f4cd6c8ee05f7401a86d3fd"
  },
  {
    "url": "assets/js/14.d94d5659.js",
    "revision": "5c51f8876af4dbd3be01801f6912f4cf"
  },
  {
    "url": "assets/js/15.c7477235.js",
    "revision": "c4f08d062125c35101b860680b6dfef7"
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
    "url": "assets/js/19.7ea57692.js",
    "revision": "7fb35ec87d09dc21544c2f52b63c0b76"
  },
  {
    "url": "assets/js/2.7cc61a80.js",
    "revision": "f41ccb7ceb6f704dadb086d681d8c1c3"
  },
  {
    "url": "assets/js/20.cb03d716.js",
    "revision": "185b7d799839441181c50ccad191ae40"
  },
  {
    "url": "assets/js/21.7edf6010.js",
    "revision": "b1d006d5862d835069498bfd38e537de"
  },
  {
    "url": "assets/js/22.c42293df.js",
    "revision": "79f87605ce4d39da4294f2a0fdd7fddb"
  },
  {
    "url": "assets/js/23.762a5aae.js",
    "revision": "52435439e4801cfe1a7cfce6c182fd63"
  },
  {
    "url": "assets/js/24.6f696da0.js",
    "revision": "831a8bfdd69e247b51b2dd833605f6f1"
  },
  {
    "url": "assets/js/25.e0436793.js",
    "revision": "62c3cdbcc16fcc5c4b84891ca27b5a0c"
  },
  {
    "url": "assets/js/26.dba5eea9.js",
    "revision": "b8fe2412facad795860d9ff731409b77"
  },
  {
    "url": "assets/js/27.1424f40b.js",
    "revision": "49c8bf1c263fe4f3f13c81113edf764c"
  },
  {
    "url": "assets/js/28.f67f199f.js",
    "revision": "0119478ec779c39f28569eda16d53998"
  },
  {
    "url": "assets/js/29.6439f8d7.js",
    "revision": "4ce2faf85b0840a64b099bf197af7a0c"
  },
  {
    "url": "assets/js/3.f09f66f6.js",
    "revision": "e49631f83202760d91f8c0cf369bb29b"
  },
  {
    "url": "assets/js/30.6482f5a7.js",
    "revision": "ef76f7c547e82006149f577ba51f0556"
  },
  {
    "url": "assets/js/31.f0b17086.js",
    "revision": "64953b0a705d78bf145e315d6fb1a498"
  },
  {
    "url": "assets/js/32.59be9be9.js",
    "revision": "488b2d7860bee0a9c508618fa2a6f429"
  },
  {
    "url": "assets/js/33.0c30461c.js",
    "revision": "1ecfbf355708f11ea5cec71f9f0a0efa"
  },
  {
    "url": "assets/js/4.5c2690c3.js",
    "revision": "570f5395468ed3fdf48afe2acd78b09b"
  },
  {
    "url": "assets/js/5.59564082.js",
    "revision": "fbdf1f9c162af693be6043665a506447"
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
    "url": "assets/js/8.464a4e68.js",
    "revision": "cde1883ab8e050259fb68409bb970938"
  },
  {
    "url": "assets/js/9.09ad2f39.js",
    "revision": "3fdb34f849126c7bc98cb050d7aaf2fd"
  },
  {
    "url": "assets/js/app.b90b25e9.js",
    "revision": "76134bdf329d9bc1348651f298c6a420"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "86bc22284b49c460bb9002f1795db2e5"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "323670b74a246248f13cd4fa2756f7fb"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "72fdbcbf61888a27c4e1dafa452641cd"
  },
  {
    "url": "index.html",
    "revision": "bcc2e75241d78c18108e7ca350dffdf9"
  },
  {
    "url": "reference/cli.html",
    "revision": "80123e4e68cc68afd22503c5e790102a"
  },
  {
    "url": "reference/environment.html",
    "revision": "958ba08c68943f1a861c3958e8918f97"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "640eab6a12d0182a015cb4d2c95fc887"
  },
  {
    "url": "reference/scripts-library.html",
    "revision": "3120065e9eaac54d20ccc49285d79b1e"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "500bbc2eb84e38b48338db1b663eecb7"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "35daa181763da21036dda7fe943c9d2d"
  },
  {
    "url": "tips/running-express-gateway.html",
    "revision": "6e5c836bbd845885f1c8d677c7b0dab0"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "d05d27d9b68448cb216794418f882096"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "57a99420f686a5f45edbf9ca442ec914"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "624a362c640d8889b460a09d0e0cece2"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "a8b922381d23984535d6927ca21d3904"
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
