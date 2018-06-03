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
    "revision": "979b9fc2fc35fbbc6e88be93abb81ff1"
  },
  {
    "url": "assets/css/4.styles.024faf6a.css",
    "revision": "7a781fcbd7dab1de5a3f2e24635f4efe"
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
    "url": "assets/js/0.a0f0de6c.js",
    "revision": "f96e16ff9307beb864718a408c6ad8ea"
  },
  {
    "url": "assets/js/1.edfb1d70.js",
    "revision": "f1799f0e15c3797ab4e4c994655a46b6"
  },
  {
    "url": "assets/js/2.eb86d3fa.js",
    "revision": "36ad7b3708cd93663f56621715c419bd"
  },
  {
    "url": "assets/js/3.2f4b2d6d.js",
    "revision": "81b772c02be89d3682a5d1e3ab77ab5d"
  },
  {
    "url": "assets/js/app.c7c99f9a.js",
    "revision": "391b34a248a973519abc0b8332597bdf"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "11f82a62e00ed7b8ec0cbcdbb8c2ab76"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "e88ada811b91edaa815ab456584ae579"
  },
  {
    "url": "index.html",
    "revision": "acc17177d7a3f665bc72b1a1a0b03c4c"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "36caccc289fa8d8055ced41855352fd5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
