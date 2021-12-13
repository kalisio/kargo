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
    "revision": "350d96fbdf981206aab37432b6552538"
  },
  {
    "url": "about/contact.html",
    "revision": "41bde53aa469b12509f4cc9423a0c127"
  },
  {
    "url": "about/contributing.html",
    "revision": "6aea5ca35ffbffcc0d41a995e0fcfa4c"
  },
  {
    "url": "about/introduction.html",
    "revision": "9eb81bcd90bde647592757580def37d6"
  },
  {
    "url": "about/license.html",
    "revision": "d3a7f60ead8f4ef5dace7fbe12779b7d"
  },
  {
    "url": "about/roadmap.html",
    "revision": "c9e85e6398c7f3185d842fe6e2ecc57f"
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
    "url": "assets/js/20.0af5bbee.js",
    "revision": "a6a40c5636c784a06e68cf80462e641d"
  },
  {
    "url": "assets/js/21.7edf6010.js",
    "revision": "b1d006d5862d835069498bfd38e537de"
  },
  {
    "url": "assets/js/22.0641f1a9.js",
    "revision": "72fbadbc0a12443ef2dcd52742387c00"
  },
  {
    "url": "assets/js/23.db3747c6.js",
    "revision": "f07b6f7c1a8b2428e6f1e7af39c19dab"
  },
  {
    "url": "assets/js/24.2d863ecb.js",
    "revision": "d38c712ad5b750cd2ef65bf55d023e30"
  },
  {
    "url": "assets/js/25.67d28038.js",
    "revision": "ef380108d33022de9cb8f6b23faea22d"
  },
  {
    "url": "assets/js/26.e584bc44.js",
    "revision": "4095d8f466138510084061b5ec3de18d"
  },
  {
    "url": "assets/js/27.810f1a3e.js",
    "revision": "83b8134845a78d8bfd1c826f19ef5a8a"
  },
  {
    "url": "assets/js/28.fd6ed499.js",
    "revision": "4beec368167062a48b292d730dcdba8c"
  },
  {
    "url": "assets/js/29.2e20d60e.js",
    "revision": "23d1118e7c3042fbceee780083ab7344"
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
    "url": "assets/js/app.16cbb7d7.js",
    "revision": "40eb76730f03fb7e416eb0c7fcdd192b"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "05c8c5ec6534a51d8d3a86e9469ef718"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "0b4b35f48a2674881d720a5bafcbd660"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "20eca1e0452660426293ae5243f0ce32"
  },
  {
    "url": "index.html",
    "revision": "784c096ac949db93845983be7373f537"
  },
  {
    "url": "reference/cli.html",
    "revision": "99379be127cf462c333f8710659c80bd"
  },
  {
    "url": "reference/environment.html",
    "revision": "0f83d36e9613996c5d42ba54806b3d91"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "ee9ee0c82a7f7922e6557673aa39c4e8"
  },
  {
    "url": "reference/scripts-library.html",
    "revision": "52c71f0e8b342c9f39bb823748d3ce18"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "3a35ba10409e42031532abfe5358c262"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "6a2dc4a22d446101c6e91d4b76cc3827"
  },
  {
    "url": "tips/running-express-gateway.html",
    "revision": "840430bc0061da1ccbcd562f0ca410b3"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "dd14da98bc35149d74dfeef1252d785f"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "ee049ace5c65accf3491a7b92a1da83d"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "cfc16eeee3684494c959dddfb6b34247"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "6a28f876be866436f4f4cec54d427c82"
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
