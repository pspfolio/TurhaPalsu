var CACHE_NAME = 'turhapalsu_v4';
var urlsToCache = [
  '/',
  'images/pause.svg',
  'images/play.svg',
  'images/restart.svg',
  'bundle.js',
  'app.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if(response) {
        return response;
      }
      return fetch(event.request);
    })
  )
});

self.addEventListener('activate', function(event) {
  const keepCache = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if(keepCache.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
