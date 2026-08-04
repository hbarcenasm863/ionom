const CACHE_NAME = 'ionom-v8';
const SCOPE = '/ionom/';
const ASSETS_TO_CACHE = [
  '/ionom/index.html',
  '/ionom/teoria.html',
  '/ionom/funciones.html',
  '/ionom/juego.html',
  '/ionom/tabla.html',
  '/ionom/generador.html',
  '/ionom/nomenClash.html',
  '/ionom/simulador.html',
  '/ionom/reacciones.html',
  '/ionom/balanceo.html',
  '/ionom/moles.html',
  '/ionom/estequiometria.html',
  '/ionom/balanceo-avanzado.html',
  '/ionom/banco.js',
  '/ionom/manifest.json',
  '/ionom/assets/iononpwa.png',
  '/ionom/assets/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith('ionom-') && k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Only handle requests within IonNom's scope
  if (!url.pathname.startsWith(SCOPE)) return;

  // Network-only for generador (needs live data)
  if (url.pathname.includes('generador.html')) {
    event.respondWith(
      fetch(event.request).catch(() =>
        new Response('Generador disponible solo en línea', { status: 503 })
      )
    );
    return;
  }

  // Cache-first for everything else within scope
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response && response.status === 200 && response.type !== 'error') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('/ionom/index.html');
        }
      });
    })
  );
});
