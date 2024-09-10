// sw.js

const CACHE_NAME = 'my-cache-v1'; // Nome do cache
const URLs_TO_CACHE = [
  '/', // Página principal (ajuste conforme necessário)
  '/index.html', // Página HTML principal (ajuste conforme necessário)
  '/logic/logicobj/handler.js', // Script JavaScript
  '/videos/livewallpaper720.MOV', // Wallpaper de vídeo
  // Adicione outros arquivos estáticos que você deseja cachear
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(URLs_TO_CACHE);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
