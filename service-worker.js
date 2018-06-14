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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8bbfc90b0ff8b338acac117ef76c211e"
  },
  {
    "url": "assets/css/5.styles.ccc7a340.css",
    "revision": "d5671a09a97d902114e04b4ae8ea0680"
  },
  {
    "url": "assets/img/kargo-diagram.46a449cd.png",
    "revision": "46a449cdac1a4f2233358aa7e4b7f5f8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.33b4cba7.js",
    "revision": "c86d17dfba0b6f756baf8debb636bf42"
  },
  {
    "url": "assets/js/1.0990b80d.js",
    "revision": "03c7d077cbe242fe776ef48873d70fdd"
  },
  {
    "url": "assets/js/2.7fdcf960.js",
    "revision": "5daedefbcb4931ecceb05344f579800f"
  },
  {
    "url": "assets/js/3.87c702b1.js",
    "revision": "72ac13cc812107387b9149dcab41dff5"
  },
  {
    "url": "assets/js/4.7f0a864e.js",
    "revision": "720961ad274d48f4f0be9c7aa99edb5f"
  },
  {
    "url": "assets/js/app.9e4dd2b2.js",
    "revision": "56a192d48282545476705dd840069a7a"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "6481e4711dae60fa3c3bd2664536ee64"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "bec6ec6ba48aed31d678deac83e69e7c"
  },
  {
    "url": "index.html",
    "revision": "365d03a7cbc8931242c2fbaccf1cbd0c"
  },
  {
    "url": "license/index.html",
    "revision": "1c6c4bd67aeabaaa82a60de2b9e808a8"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "30e9183552e2dd8ea6dbbf8f762386d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
