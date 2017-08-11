importScripts('workbox-sw.prod.v1.1.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/app.global.js",
    "revision": "12fd254b4d3a6975cf831a688df6749f"
  },
  {
    "url": "build/app\\app.3by1sobt.js",
    "revision": "5be8edb07fd6a6c847f98f4577b02c1e"
  },
  {
    "url": "build/app.registry.json",
    "revision": "9ec2bc1e3de12c77dba155c12dfef9d2"
  },
  {
    "url": "manifest.json",
    "revision": "9ec2bc1e3de12c77dba155c12dfef9e4"
  },
  {
    "url": "workbox-sw.prod.v1.1.0.js",
    "revision": "9ec2bc1e3de12c77dba155c12dfef8c2"
  },
  {
    "url": "index.html",
    "revision": "9ec2bc1e3de12c77dba155c12dfef3r9"
  },
  {
    "url": "build/app\\meocjb4n.js",
    "revision": "a40322a637ba4312c7efaf997189c5c2"
  },
  {
    "url": "build/app\\l6tawixo.css",
    "revision": "9ec2bc1e3de12c77dba155c12dfef9g6"
  },
  {
    "url": "build/app\\0mcfbxrx.js",
    "revision": "12fd254b4f3a6975cf831a688df6749f"
  },
  {
    "url": "build/app\\70p7wwvl.css",
    "revision": "12fd254b4f3a6975cf831a688df6738n"
  },
  {
    "url": "build/app\\eq1m6oz1.js",
    "revision": "9ec2bc1e3de12c77dba155c12dfef9a7"
  },
  {
    "url": "build/app\\mgekeaoe.css",
    "revision": "5be8edb07fd6a6c847f98a3577b02c1e"
  },
  {
    "url": "build/app\\cbucl6ir.css",
    "revision": "9ec1zc1e3de12c77dba155c12dfef9a7"
  },
  {
    "url": "build/app\\uwyzpx1k.js",
    "revision": "12fd6674b4d3a6975cf831a688df6749f"
  },
  {
    "url": "build/app\\b0b17nlp.js",
    "revision": "12fd6674b4d3a6975cy531a688df6749f"
  }
];

const workboxSW = new self.WorkboxSW();

workboxSW.router.registerRoute('/hn', workboxSW.strategies.cacheFirst());

workboxSW.precache(fileManifest);

