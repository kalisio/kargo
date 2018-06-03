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
    "revision": "cd982fd3231837c2e37fa509700ba9a3"
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
    "url": "assets/js/0.6bec6429.js",
    "revision": "8d5a67b7576c9f17fc9568f1c185a1f7"
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
    "url": "assets/js/3.d47f680f.js",
    "revision": "501e661ca367ec4a5cae6e8bbcf5e761"
  },
  {
    "url": "assets/js/app.42a2c85e.js",
    "revision": "83669c1aacbabd42bb5c8f6d5bbe03fc"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "44089b737936447430955bb3b05c06ab"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "c9ad5fe0a31a1067200a3aa1fa3acadd"
  },
  {
    "url": "index.html",
    "revision": "06d108ecff7778a32d0443e25244caec"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "5eee3a505d441b27163972b6589ac372"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
