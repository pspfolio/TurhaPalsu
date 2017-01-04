var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  'src/public/bundle.js'
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
