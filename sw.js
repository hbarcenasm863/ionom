const CACHE_NAME = 'ionom-app-v1';
const ASSETS_TO_CACHE = [
  'index.html',
  'teoria.html',
  'juego.html',
  'manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('IonNom PWA: Caching core assets');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('IonNom PWA: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Do NOT cache generador.html - only available online
  if (url.pathname.includes('generador.html')) {
    event.respondWith(fetch(request).catch(() => {
      const response = new Response('Generador disponible solo en línea', {
        status: 503,
        statusText: 'Servicio no disponible offline'
      });
      return response;
    }));
    return;
  }

  // Network first for external CDN resources
  if (request.url.includes('cdnjs.cloudflare.com') ||
      request.url.includes('fonts.googleapis.com')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const cache = caches.open(CACHE_NAME);
            cache.then((c) => c.put(request, response.clone()));
          }
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  // Cache first for core app assets
  event.respondWith(
    caches.match(request).then((response) => {
      if (response) return response;

      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseToCache);
        });

        return response;
      }).catch(() => {
        // Offline fallback for documents
        if (request.destination === 'document') {
          return caches.match('index.html');
        }
      });
    })
  );
});
