var CACHE_NAME = 'turhapalsu';
var urlsToCache = [
  '/',
  'images/pause.svg',
  'images/play.svg',
  'images/restart.svg',
  'bundle.js'
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
