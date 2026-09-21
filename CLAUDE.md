# IonNom — Notas para Claude Code

## Pruebas de Modo Estudiante

Cuando se necesite probar el flujo de Modo Estudiante en `juego.html` (validación de código, panel de bienvenida, estadísticas, etc.), usar siempre el código de estudiante **`110106`** (grado 11°, curso 01, estudiante 06). No usar códigos inventados como `ABC123`.

## Service Worker (sw.js) — subir la versión al tocar datos cacheados

`juego.html` (y las demás páginas) se sirven **network-first**, así que siempre llegan actualizadas. Pero `banco.js` se sirve **cache-first** (ver `sw.js`): una vez que el celular de un estudiante lo cachea, ese archivo NUNCA se vuelve a pedir a menos que `CACHE_NAME` cambie de valor en `sw.js`.

**Regla:** cada vez que se modifique `banco.js` (o cualquier otro archivo en `ASSETS_TO_CACHE` de `sw.js`: `manifest.json`, `assets/iononpwa.png`, `assets/logo.png`), subir la versión de `CACHE_NAME` en `sw.js` (ej. `ionom-v13` → `ionom-v14`) **en el mismo commit**. Si no se hace, los estudiantes que ya tengan el sitio/PWA instalada seguirán jugando con datos de compuestos desactualizados —incluyendo bugs ya corregidos en el servidor— sin ningún aviso, hasta que alguien lo note por un reporte confuso ("el juego se traba", "el botón Siguiente no hace nada").

Antes de cerrar cualquier tarea que edite `banco.js`, verificar con `git log -1 --format=%ad -- sw.js` vs `git log -1 --format=%ad -- banco.js` que `sw.js` no haya quedado desactualizado.
