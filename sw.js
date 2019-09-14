const FILES_TO_CACHE = [
	'/offline.html',
];

// CODELAB: Precache static resources here.
evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
);

importScripts('https://sdk.truepush.com/sdk/sw.js/?key=5c7749e582cc1befeb82d22b');