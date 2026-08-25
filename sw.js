const CACHE_NAME = 'ionom-app-v2';
const ASSETS_TO_CACHE = [
  'index.html',
  'teoria.html',
  'funciones.html',
  'juego.html',
  'tabla.html',
  'generador.html',
  'nomenClash.html',
  'simulador.html',
  'reacciones.html',
  'balanceo.html',
  'moles.html',
  'estequiometria.html',
  'balanceo-avanzado.html',
  'banco.js',
  'manifest.json',
  'assets/iononpwa.png',
  'assets/logo.png'
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
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // generador: network-only (needs live data)
  if (url.pathname.includes('generador.html')) {
    event.respondWith(
      fetch(event.request).catch(() =>
        new Response('Generador disponible solo en línea', { status: 503 })
      )
    );
    return;
  }

  // HTML navigation requests: network-first so updates land on next visit
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match('index.html')))
    );
    return;
  }

  // Everything else (JS, CSS, images, fonts): cache-first with network fallback
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (response && response.status === 200 && response.type !== 'error') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => null);
    })
  );
});
