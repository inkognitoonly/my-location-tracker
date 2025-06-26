self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('gps-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request);
    })
  );
});
