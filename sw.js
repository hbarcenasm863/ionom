const CACHE_NAME = 'ionom-v26';
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
  '/ionom/assets/logo.png',
  '/ionom/assets/icon-192.png',
  '/ionom/assets/icon-512.png',
  '/ionom/assets/shared-tokens.css',
  '/ionom/assets/ionom.css',
  '/ionom/assets/ionom-ui.js',
  '/ionom/assets/ionom-fondo.svg',
  '/ionom/assets/toc.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
    // Antes llamaba self.skipWaiting() aquí mismo, apenas terminaba de
    // cachear: la nueva versión tomaba control de TODAS las pestañas
    // abiertas al instante (sin esperar a que el usuario lo pidiera), lo
    // que disparaba un location.reload() forzado en index.html incluso con
    // un estudiante a mitad de una partida en juego.html -- justo lo que el
    // freno de salida (ver _gameActive en juego.html) existe para evitar.
    // Ahora el worker nuevo se queda "esperando" (registration.waiting)
    // hasta que el cliente mande el mensaje SKIP_WAITING de abajo, que solo
    // se envía cuando el usuario toca el botón "Actualizar" del banner.
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
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

  // HTML navigation: network-first so updates load on next visit
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
        .catch(() =>
          caches.match(event.request).then((cached) => cached || caches.match('/ionom/index.html'))
        )
    );
    return;
  }

  // Cache-first for JS, CSS, images, fonts
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
