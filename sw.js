self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('casio-v1').then((cache) => {
      return cache.addAll(['./index.html', './casio.png']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});