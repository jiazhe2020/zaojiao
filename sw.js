const CACHE_NAME = 'xiaopai-edu-v8';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/food-pumpkin-porridge.jpg',
  './assets/food-egg-custard.jpg',
  './assets/food-tomato-tofu.jpg',
  './assets/food-fish-balls.jpg',
  './assets/food-banana-pancake.jpg',
  './assets/food-veg-egg-pancake.jpg'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS).catch(function() {});
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      return cached || fetch(e.request).then(function(resp) {
        return resp;
      }).catch(function() {
        return cached;
      });
    })
  );
});
