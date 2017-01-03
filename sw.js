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
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  console.log("EVENT REQ FETCH", event.request);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      console.log("CACHE HITTED!!");
      if(response) {
        console.log("RETURNING RESPONSES");
        return response;
      }

      console.log("SORRY WE GOTTA FETCH")
      return fetch(event.request);
    })
  )

});
