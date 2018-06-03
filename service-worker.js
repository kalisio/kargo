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
    "revision": "b14a70a4b1b59f45a54d90e4fdb41f09"
  },
  {
    "url": "assets/css/4.styles.c7554976.css",
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
    "url": "assets/js/0.cb98ea0a.js",
    "revision": "1180618332376942ea858dc5b373be84"
  },
  {
    "url": "assets/js/1.f0150b12.js",
    "revision": "184ba8dae7a40aaabc8c2a7796d7e10d"
  },
  {
    "url": "assets/js/2.dfc2c385.js",
    "revision": "e56434479d4d99904c0769c51c3d96dc"
  },
  {
    "url": "assets/js/3.82be4153.js",
    "revision": "a2095ba47e3ef01011e65c10e77be9d2"
  },
  {
    "url": "assets/js/app.7ad289b9.js",
    "revision": "7938d9f96c1435a5147a26c010035bf9"
  },
  {
    "url": "how-does-it-work/index.html",
    "revision": "c82186579ba9f74433eedee327daf73e"
  },
  {
    "url": "how-to-use-it/index.html",
    "revision": "c48d154224ac4a5dbebb537aaf5130cd"
  },
  {
    "url": "index.html",
    "revision": "ed7bb80579473902743ccf7d80e7218d"
  },
  {
    "url": "what-is-it/index.html",
    "revision": "9cecef3a5d0a59e9f0853370706cbbbd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
