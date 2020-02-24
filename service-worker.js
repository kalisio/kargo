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
    "revision": "02637cb38c426d5cc25531f94e381963"
  },
  {
    "url": "about/contact.html",
    "revision": "739ea67c8671cad8b070bae9c1cfe01f"
  },
  {
    "url": "about/contributing.html",
    "revision": "76cbe14b4fc46720f4cb7cca8adeaa6a"
  },
  {
    "url": "about/introduction.html",
    "revision": "8fe5ddd0b4f026f1c45f9c90f4eab399"
  },
  {
    "url": "about/license.html",
    "revision": "f6a63c59f4bf5233ea2490a4bdd5fa04"
  },
  {
    "url": "about/roadmap.html",
    "revision": "01455c0850beb804fa99c2bd13f5d9f9"
  },
  {
    "url": "assets/css/0.styles.4122b163.css",
    "revision": "a7c2f00a3970bd3ba3a82149562272fd"
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
    "url": "assets/js/10.51c7d0cd.js",
    "revision": "44a06b2e946709e7a93ce592b31e66ec"
  },
  {
    "url": "assets/js/11.2c1dfe28.js",
    "revision": "06e40ae80598da4e1f287592792e15a2"
  },
  {
    "url": "assets/js/12.3ca00055.js",
    "revision": "0b87b69f495915b13ad26bfa582fe3ec"
  },
  {
    "url": "assets/js/13.be4b9935.js",
    "revision": "c779c7f56cfc156038c053f15fc1bfae"
  },
  {
    "url": "assets/js/14.b8d484b9.js",
    "revision": "82961a72866491c78131120b50c3d920"
  },
  {
    "url": "assets/js/15.16ca5807.js",
    "revision": "501d32282d988146ea5b9dbacdf01f0f"
  },
  {
    "url": "assets/js/16.67be1c34.js",
    "revision": "f3eb663afadaa91112b942342801117a"
  },
  {
    "url": "assets/js/17.b9909e57.js",
    "revision": "86661dcc69ed9feefdd4883f58dab748"
  },
  {
    "url": "assets/js/18.a4b136aa.js",
    "revision": "4f7c87da2ce7e7614fb1c8b427e92f9b"
  },
  {
    "url": "assets/js/19.6e2add76.js",
    "revision": "d68a05d52cb9079f64c8ae4b51edf593"
  },
  {
    "url": "assets/js/2.5d610dd7.js",
    "revision": "9b6f6eba129757e69eb1ec67dd62642c"
  },
  {
    "url": "assets/js/20.95f9cb00.js",
    "revision": "3129611409c14ca6719b8249027e9bda"
  },
  {
    "url": "assets/js/21.11c4e638.js",
    "revision": "b23f916f5b2ebb597e6e91f780e804f3"
  },
  {
    "url": "assets/js/22.c9e43ebc.js",
    "revision": "3657ac50469cb1b2e2bb155a19f44166"
  },
  {
    "url": "assets/js/23.5a242101.js",
    "revision": "da0b61f27e5824d7791469e271b2208c"
  },
  {
    "url": "assets/js/24.aefa5524.js",
    "revision": "410213c7f91e68f7ec6d1a7b7a7f6d7b"
  },
  {
    "url": "assets/js/3.3c1fec2a.js",
    "revision": "d3ebd660cf62728c4292efe40a3dde17"
  },
  {
    "url": "assets/js/4.6784b262.js",
    "revision": "f1b79b6a6158a55bc5603fb2c3a6a3e6"
  },
  {
    "url": "assets/js/5.85c71f0d.js",
    "revision": "0184217f167531c5c11ebd49e1cafa1d"
  },
  {
    "url": "assets/js/6.ba693fab.js",
    "revision": "aa09fe44ddd1f0015691d388ecbf1a88"
  },
  {
    "url": "assets/js/7.6737d413.js",
    "revision": "4a5f24658de505cfc35b62ce651b27fe"
  },
  {
    "url": "assets/js/8.eb3256b3.js",
    "revision": "574d292c9642493094f9888de7e64c79"
  },
  {
    "url": "assets/js/9.829b1ec7.js",
    "revision": "92faad8536733b9704a0a1a15dbaf716"
  },
  {
    "url": "assets/js/app.165a204c.js",
    "revision": "515f581d699ea0f7e1b685d871f09257"
  },
  {
    "url": "guides/advanced-usage.html",
    "revision": "610afe97ca7e2b0eee3f243a64f85e88"
  },
  {
    "url": "guides/getting-started.html",
    "revision": "f77f56b66f01bf867d659b3a5b2d3fa7"
  },
  {
    "url": "guides/understanding-kargo.html",
    "revision": "3044af971a35cfbf27926670b317a780"
  },
  {
    "url": "index.html",
    "revision": "44d79167397151ce90e93712735489de"
  },
  {
    "url": "reference/cli.html",
    "revision": "a1283bd65bb8e1686af6cd746ced8115"
  },
  {
    "url": "reference/environment.html",
    "revision": "4ad654283a7891acc159e0c40f2e43d9"
  },
  {
    "url": "tips/extracting-osm-data.html",
    "revision": "760a15241ad11c6f5053497a4db8cc88"
  },
  {
    "url": "tips/handling-long-running-process.html",
    "revision": "f4b64a69da27a87f42d33bd6822b0dc7"
  },
  {
    "url": "tips/using-kargo-toolbox.html",
    "revision": "e4a941a2ee30536955e2e78fe30ead2a"
  },
  {
    "url": "tips/using-mongodb-atlas.html",
    "revision": "9ee09c283e437a1954cdfc9c95933c54"
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
