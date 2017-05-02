importScripts('sw-lib.v0.0.19.min.js');

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
 * Please use sw-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/build/main.js",
    "revision": "0f49d7e386577cb924d59e2f639f2b5b"
  },
  {
    "url": "/index.html",
    "revision": "222b1b45eebff9ff264f2a458197e80c"
  },
  {
    "url": "/styles/main.css",
    "revision": "a7967bd257bb0b883c05d224e1ff8120"
  }
];

const swlib = new self.goog.SWLib({});
swlib.precache(fileManifest);

swlib.router.registerRoute('https://node-hnapi.herokuapp.com/*', swlib.strategies.staleWhileRevalidate());
swlib.router.registerRoute('https://code.ionicframework.com/nightly/core/*', swlib.strategies.networkFirst());
