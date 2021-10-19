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
    "revision": "c85b1749a0dc1b22379ea799d1725302"
  },
  {
    "url": "about/contact.html",
    "revision": "7260568e65446807fcc6afdc6c567fc2"
  },
  {
    "url": "about/contributing.html",
    "revision": "140b79cec001e462be4aaf45d92f54fe"
  },
  {
    "url": "about/introduction.html",
    "revision": "40db0c3cde7fe177514af8549c8873f8"
  },
  {
    "url": "about/license.html",
    "revision": "24464b8237c0cae79e577a0d11475c87"
  },
  {
    "url": "about/roadmap.html",
    "revision": "3c64dd67665119d95ad6c73b3d6fa8bb"
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
    "url": "assets/js/11.01965570.js",
    "revision": "e53b23e5b3eb058612359b84c98e2535"
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
    "url": "assets/js/20.35967760.js",
    "revision": "66a3a6acfde0f5260aa24226d7cbb6d8"
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
    "url": "assets/js/27.9b4e2e6b.js",
    "revision": "f69d372e122b46c558ae13fce0b0dcc3"
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
    "url": "assets/js/31.0ce0911b.js",
    "revision": "a879cb0780c818a8de086943f0c3fe36"
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
    "url": "assets/js/8.e6809681.js",
    "revision": "ade86274d04d8e54ecd3b485a475083f"
  },
  {
    "url": "assets/js/9.09ad2f39.js",
    "revision": "3fdb34f849126c7bc98cb050d7aaf2fd"
  },
  {
    "url": "assets/js/app.cfc058bd.js",
    "revision": "377198b921d8e2556b0e1f3781ecb0fb"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "b1135970a0457b3f3c4e7750b2645a8e"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "0de430feeb77d629453819b08f52e583"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "6ef754c18b92632cd2f7541f52546272"
  },
  {
    "url": "index.html",
    "revision": "fd91c64e1302ce9ec05f0305213c74d4"
  },
  {
    "url": "reference/cli.html",
    "revision": "a105504e84d277df19353058b62c9d9e"
  },
  {
    "url": "reference/environment.html",
    "revision": "836080987654dadeeb970c06b250bf94"
  },
  {
    "url": "reference/helper-scripts.html",
    "revision": "56d83ac37a56c8608b7740bfa1de0a58"
  },
  {
    "url": "reference/scripts-library.html",
    "revision": "83508af942a8ad496ab35f0e24c324e7"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "1683f657090b9c483978f42a6b1bf6bf"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "597b3e470dc4d3bc82b61357e52e7406"
  },
  {
    "url": "tips/running-express-gateway.html",
    "revision": "f853bd0411aca2fe1c9e96395d2565a3"
  },
  {
    "url": "tips/using-artillery.html",
    "revision": "a96353d60fecc17a5ba889a3333e950f"
  },
  {
    "url": "tips/using-gdal.html",
    "revision": "a29e3a5d9f87402e95d37c2a6f5c805b"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "b5da650e7e172b2132777fac715f2195"
  },
  {
    "url": "tips/using-private-registry.html",
    "revision": "d56b005356efb8f871ca388da6d1bebe"
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
