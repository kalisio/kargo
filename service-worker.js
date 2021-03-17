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
    "revision": "8aef986120e29266e47f649cf947854d"
  },
  {
    "url": "about/contact.html",
    "revision": "b41385ca54a956e7fd0a7a610a3f7dd4"
  },
  {
    "url": "about/contributing.html",
    "revision": "7935776160ea1b9f720443d97c93ec17"
  },
  {
    "url": "about/introduction.html",
    "revision": "df611c2cfd4d1dca99618123ea48a4a9"
  },
  {
    "url": "about/license.html",
    "revision": "1c9452a09279dbfca12c0021105f7358"
  },
  {
    "url": "about/roadmap.html",
    "revision": "395d70f0ccad3eac3fd13b1171a34b4f"
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
    "url": "assets/js/10.98971c2d.js",
    "revision": "a1414f93f7a394e94dfa1c2791966b94"
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
    "url": "assets/js/19.a77ab062.js",
    "revision": "8d4d47b650f8b0c5030ed61f4c793094"
  },
  {
    "url": "assets/js/2.7cc61a80.js",
    "revision": "f41ccb7ceb6f704dadb086d681d8c1c3"
  },
  {
    "url": "assets/js/20.91d8f3f4.js",
    "revision": "1fe48331110f346098c651bad4ec57fb"
  },
  {
    "url": "assets/js/21.7edf6010.js",
    "revision": "b1d006d5862d835069498bfd38e537de"
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
    "url": "assets/js/8.367e7920.js",
    "revision": "32ce52108e13a8d4691a4b6c0d1c00ee"
  },
  {
    "url": "assets/js/9.09ad2f39.js",
    "revision": "3fdb34f849126c7bc98cb050d7aaf2fd"
  },
  {
    "url": "assets/js/app.700c35dd.js",
    "revision": "65750bf085c19e8e309853468ab45224"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "bfa90d9c8b540b2fd6a93d8f7821e621"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "1a08c237b533afcc30028912c0ef3a4d"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "eaac864b1edcae78638a7976f63b4baf"
  },
  {
    "url": "index.html",
    "revision": "0272235ccbe9f9dd82f9ed54a3a93637"
  },
  {
    "url": "reference/cli.html",
    "revision": "efeb8ecf97b461b6a2fb5fc5cb353615"
  },
  {
    "url": "reference/environment.html",
    "revision": "0257856aa2f203a6ad6b7d130cee02df"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "250fdc85172dd8d1e1b332c47f1a0ef8"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "7a6c5003de80bcd37f9be348742fe050"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "ef36d67ca3cb936a6cc2e71f8feb889c"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "f2821a9c521652e0966d903a7ce77648"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "3f0d089e42e554c001a46bfef06a4f6b"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "d294a489178078de5440d93e148bd468"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "a337aa241045829adc98fb208e02ffd7"
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
