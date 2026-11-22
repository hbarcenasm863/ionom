# IonNom — Notas para Claude Code

## Push a `main`

El docente estableció (22-11-2026) que hacer **push a `main` está autorizado**
en este repositorio: cuando una tarea queda lista y probada, Claude hace commit y
push a `main` (desde la rama de trabajo, fast-forward) sin volver a preguntar. Si
en una sesión el docente indica otra cosa, se respeta lo que diga en esa sesión.

## Regla: toda auditoría de contenido se hace con agentes expertos

Establecida por el docente (22-11-2026). Cada lote de preguntas, guías, talleres
o contenido nuevo que se agregue a los bancos o a las páginas **se audita con
agentes expertos independientes** (no basta la revisión del mismo autor), uno
por cada categoría que el contenido necesite. Como mínimo:

- **Experto en ciencias naturales** de la disciplina (biología, química orgánica
  o química inorgánica): resuelve cada pregunta a ciegas y verifica datos,
  cálculos, nomenclatura y rigor científico.
- **Experto en evaluación Saber 11 / Icfes**: modelo basado en evidencias,
  competencia y afirmación correctas (`c`, `af`), calidad de ítem y distractores.
- **Experto en currículo MEN**: Estándares Básicos de Competencias y DBA que
  cubre cada pregunta.
- **Experto en datos, tablas y gráficas** (cuando haya): calidad de libro de
  texto, unidades, fuentes o «Datos de ejemplo», y que los datos sustenten la clave.
- Otros expertos según el contenido (didáctica y principios de Mayer, fórmulas
  sin paréntesis, imágenes y licencias, accesibilidad, etc.).

Los agentes reciben el archivo del lote, resuelven a ciegas y entregan una
versión corregida más un informe; Claude aplica el informe completo, regenera
lo que dependa (p. ej. `saber-juego.js`) y deja constancia en el historial de
cuántos agentes participaron y qué hallaron.

## Pruebas de Modo Estudiante

Cuando se necesite probar el flujo de Modo Estudiante en `juego.html` (validación de código, panel de bienvenida, estadísticas, etc.), usar siempre el código de estudiante **`110106`** (grado 11°, curso 01, estudiante 06). No usar códigos inventados como `ABC123`.

## Service Worker (sw.js) — subir la versión al tocar datos cacheados

`juego.html` (y las demás páginas) se sirven **network-first**, así que siempre llegan actualizadas. Pero `banco.js` se sirve **cache-first** (ver `sw.js`): una vez que el celular de un estudiante lo cachea, ese archivo NUNCA se vuelve a pedir a menos que `CACHE_NAME` cambie de valor en `sw.js`.

**Regla:** cada vez que se modifique `banco.js` (o cualquier otro archivo en `ASSETS_TO_CACHE` de `sw.js`: `manifest.json`, `assets/iononpwa.png`, `assets/logo.png`), subir la versión de `CACHE_NAME` en `sw.js` (ej. `ionom-v13` → `ionom-v14`) **en el mismo commit**. Si no se hace, los estudiantes que ya tengan el sitio/PWA instalada seguirán jugando con datos de compuestos desactualizados —incluyendo bugs ya corregidos en el servidor— sin ningún aviso, hasta que alguien lo note por un reporte confuso ("el juego se traba", "el botón Siguiente no hace nada").

Antes de cerrar cualquier tarea que edite `banco.js`, verificar con `git log -1 --format=%ad -- sw.js` vs `git log -1 --format=%ad -- banco.js` que `sw.js` no haya quedado desactualizado.

## ionom-analytics.gs — no se despliega solo

A diferencia de los `.html`/`.js` del sitio (que GitHub Pages sirve directo desde el repo), `ionom-analytics.gs` es el código fuente del backend de Google Apps Script, pero el repo NO está conectado a ese proyecto (no hay `.clasp.json` ni despliegue automático). Editar y subir este archivo a `main` **no cambia nada en producción** hasta que alguien copie el contenido actualizado al editor de Apps Script (script.google.com) y vuelva a implementar la Web App (Implementar → Administrar implementaciones → Editar → Nueva versión). Avisar siempre al usuario de este paso manual cuando se modifique `ionom-analytics.gs`.

- **Simulaciones, pantalla completa y fotos.** Las simulaciones
  nuevas se escriben en `assets/simx.js` (`<div data-simx="nombre" data-titulo="…">`,
  mismo esquema que `assets/sim10.js`, sin depender de `sed10.css`). **Toda simulación
  nueva debe poder verse en pantalla completa**: `assets/pantalla.js` pone solo el
  botón «⛶ Pantalla completa» en cada `.sim`, en cada `data-simx` y en lo que
  declare `window.PANTALLA_EXTRA` (por ejemplo `['.lab']` o `['#v3d-grid']`); si no la detecta,
  ponerle `data-pantalla="Nombre"`. Los canvas deben calcular su tamaño con
  la clase `en-pantalla` (ver `lienzo()` en `sim10.js`/`simx.js`). Las fotos
  reales van en `assets/fotos/` con su cita APA en `assets/fotos-datos.js`
  (`<div data-foto="clave" data-pie="…"></div>`): solo bancos libres (Wikimedia
  Commons, buscados con Openverse), licencias CC0, dominio público, CC BY o
  CC BY-SA, y la cita siempre debajo. Wikimedia limita las descargas
  automáticas (error 429): bajar las imágenes de a una y con pausas.

- **Guías descargables (`guia.html`).** Los PDF de `assets/guia-*.pdf` son archivos fijos generados desde `guia.html` (A4 horizontal, con logo y marca de agua). Si se cambia el contenido de una guía, correr `node herramientas/generar-guias-pdf.js . assets` (con `FUENTES=<node_modules/@fontsource>` para la letra Outfit) y subir los PDF en el mismo commit.
