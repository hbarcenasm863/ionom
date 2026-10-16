# Rediseño visual de Ionom — Resumen de cambios

Fecha: 2026-10-16
Commits: `f867312`, `9ac98d7`, `1989e75`, `1d64500` (rama `main`)

## Contexto

Se pidió un rediseño visual integral de la plataforma, adaptado a Ionom
(nomenclatura **inorgánica**, no orgánica — el prompt original estaba escrito
para ChromaNom/nomenclatura orgánica y se reinterpretó para el contenido real
de Ionom). Este documento cubre lo completado hasta ahora: la Fase 1
(auditoría) y el núcleo de la Fase 2 (sistema de diseño), más las etiquetas
de texto de la Fase 3 que dependían directamente de ese sistema de color.

## Fase 1 — Auditoría (completa)

Se inspeccionaron los 16 archivos del proyecto. Hallazgos principales:

- **No existía un color único y consistente por grupo funcional.** Coexistían
  3 esquemas de color distintos que no coincidían entre sí:
  - 4 colores MDEC (catión/anión/hidróxido/oxoanión) reutilizados entre
    grupos no relacionados en teoria.html y funciones.html.
  - 13 colores únicos por tema, pero solo en el selector de juego.html.
  - Un esquema de color por página (no por grupo) en index.html.
- **3 páginas desincronizadas**: funciones.html, tabla.html y simulador.html
  copiaban a mano el bloque de variables `:root` en vez de enlazar
  `assets/shared-tokens.css`, pese a que el propio comentario de ese archivo
  afirmaba que esas páginas lo usaban.
- **nomenClash.html** mantenía su propia copia completa del bloque MDEC,
  separada de la hoja compartida (justificado: tiene su tema visual propio
  "Alquimia Oscura").
- Navegación duplicada en los 14 archivos (sin componente compartido).
- Falta de contraste accesible verificado en los colores existentes.
- z-index inconsistente entre páginas (algunos modales quedaban por debajo
  del menú lateral si ambos se abrían a la vez).
- Solo 2 de 14 páginas respetaban `prefers-reduced-motion`.
- Assets de marca sobredimensionados (`logo.png` e `iononpwa.png`, ~900 KB
  cada uno, mostrados a ≤140px).

## Fase 2 — Sistema de diseño (núcleo completo)

### 1. Identidad por grupo/tema (13 colores únicos)

Se tomó como base el único esquema que ya era realmente único por grupo (el
selector de juego.html) y se centralizó en `assets/shared-tokens.css` como
tokens `--grp-*` (uno por cada uno de los 13 temas: óxidos y anhídridos,
hidruros, ácidos hídricos, bases, ácidos oxácidos, sales binarias/oxigenadas/
ácidas, tabla periódica, tipos de reacción, balanceo, mol y masa molar,
cadena de reactividad), con variantes de fondo/texto para tema claro y
oscuro, verificadas con contraste WCAG AA (mínimo 5.3:1).

### 2. Migración de las 3 páginas desincronizadas

funciones.html, tabla.html y simulador.html ahora enlazan
`assets/shared-tokens.css` y solo conservan en su propio `<style>` los
tokens que de verdad son exclusivos de cada página (paleta "geológica" de la
tabla periódica, panel oscuro de funciones.html, alias de simulador.html).

### 3. Método cromático — redefinición con la paleta Wong (colorblind-safe)

A petición explícita, se redefinieron los 4 colores de rol iónico
(catión/anión/hidróxido/oxoanión) con los valores **exactos** de la paleta
Wong/Okabe-Ito (Bang Wong, 2011, *Nature Methods*, "Points of view: Color
blindness"), optimizada para distinguirse incluso bajo protanopia,
deuteranopia y tritanopia:

| Rol | Color | Hex Wong |
|---|---|---|
| Catión (metal, o H⁺ en ácidos) | naranja/ámbar | `#E69F00` |
| Anión simple (halogenuro, óxido, sulfuro, hidruro) | azul | `#0072B2` |
| Hidróxido OH⁻ | rosado/púrpura rojizo | `#CC79A7` |
| Oxoanión (anión poliatómico) | verde azulado | `#009E73` |

El color base **no cambia según el grupo funcional** — lo que cambia es
cuáles de los 4 roles aparecen en cada grupo (sales binarias = catión+anión;
bases = catión+hidróxido; sales oxigenadas = catión+oxoanión, etc.), igual
que antes. Las variantes de fondo/texto se recalcularon para mantener
contraste WCAG AA con margen (≥5:1, la mayoría por encima de 7:1) en ambos
temas.

Esto se aplicó automáticamente a los 13 archivos que enlazan o derivan de
`assets/shared-tokens.css`, y se actualizó a mano en nomenClash.html (incluye
las insignias "card-type-badge" de las cartas catión/anión del juego de
duelo).

### 4. Otras mejoras de la hoja compartida

- Escala documentada de z-index (`--z-nav`/`--z-modal`/`--z-modal-top`/
  `--z-toast`) para ir normalizando el apilamiento de modales en páginas
  futuras, sin tocar los valores existentes que ya funcionan.
- Regla global `@media(prefers-reduced-motion:reduce)` que ahora aplica a
  las 10 páginas enlazadas a la hoja compartida (antes solo 2 de 14 la
  respetaban).

## Fase 3 (parcial) — Consistencia de texto

Como consecuencia directa de redefinir los colores Wong, el texto que los
describe en pantalla ("Violeta", "Teal") dejó de coincidir con lo que
realmente se ve. Se corrigió en:

- **index.html**: leyenda del modal de bienvenida, chips de referencia
  rápida, tarjetas de los 4 roles, tarjeta demo, narración por voz.
- **teoria.html**: página principal que explica el método paso a paso —
  pasos numerados, tabla de lectura cromática, ejemplos con Fe₂(SO₄)₃ y
  Ca(OH)₂, opciones de quiz (incluida la explicación de por qué una opción
  es incorrecta).
- **tabla.html**: las 2 menciones que sí se refieren al sistema de
  nomenclatura (reutiliza los mismos colores para metal/no-metal/metaloide).
  Su paleta "geológica" de familias/bloques s·p·d·f usa "violeta"/"teal" por
  coincidencia para algo completamente distinto — esas **no** se tocaron.

**Pendiente (no bloqueante):** quedan algunas menciones de color en
funciones.html, nomenClash.html, guia.html y juego.html, y algunos valores
hexadecimales de colores antiguos escritos directamente (no vía variable
CSS) en teoria.html, funciones.html, juego.html, simulador.html,
balanceo-avanzado.html y moles.html, que no se auditaron uno por uno todavía.
El sistema de variables CSS (lo que realmente se renderiza) ya está 100%
actualizado en las 14 páginas — lo pendiente es solo texto/hex sueltos en
rincones menos centrales, no un problema funcional.

## Botón de actualización del PWA (fuera del alcance visual, pero relacionado)

Se encontró y corrigió un bug real mientras se trabajaba en la sesión:
`sw.js` activaba cualquier versión nueva de forma automática
(`self.skipWaiting()` apenas terminaba de cachear) y `index.html` forzaba un
`location.reload()` sin avisar en cuanto eso pasaba — en cualquier pestaña
abierta, incluida una partida en curso en juego.html. Esto contradecía
directamente el freno de salida (`_gameActive`) agregado en una sesión
anterior para proteger el progreso de una partida.

- `sw.js`: el worker nuevo ahora se queda "esperando" hasta recibir un
  mensaje `{type:'SKIP_WAITING'}`, que solo se envía cuando el usuario toca
  el botón. `CACHE_NAME` subido a `ionom-v17` (regla obligatoria del
  CLAUDE.md al tocar `sw.js`).
- `index.html`: banner fijo "🔄 Nueva versión disponible" con botón
  "Actualizar" — se muestra al detectar una actualización real (no la
  primera instalación), y el `location.reload()` solo ocurre después de que
  el usuario confirma.
- Verificado con Playwright sobre un servidor HTTP real sirviendo el repo
  bajo `/ionom/` (los service workers no funcionan sobre `file://`):
  registro de v17, simulación de una versión nueva, recarga de página →
  el banner aparece, **no** hay ningún reload automático, existe un worker
  "esperando", y al hacer clic en "Actualizar" sí se dispara la recarga
  real.

## Verificación realizada

- Sintaxis JS de los `<script>` de los archivos tocados: válida (`node
  --check`).
- Balance de llaves CSS de los bloques `<style>` tocados: sin cambios
  respecto al original (ningún desbalance introducido).
- Carga sin errores de consola en los 14 archivos HTML (Playwright,
  navegador real).
- Los tokens `--cat`/`--an`/`--oh`/`--ox`/`--grp-*` resuelven exactamente a
  los valores esperados en los 14 archivos, en tema claro y oscuro.
- **Partida completa del modo juego** (20 preguntas, grupo "Tabla
  periódica", modo libre) jugada de principio a fin con Playwright: llega a
  la pantalla de resultados sin errores de JavaScript. El modo juego no se
  rompió — repetido después de cada cambio, incluido el del service worker.
- Ciclo completo de actualización del PWA probado contra un servidor HTTP
  real (ver sección anterior).

## Fase 4 — Paridad visual con ChromaNom (sistema de diseño compartido)

Fecha: 2026-10-16
Commits: (ver al final de esta sección, rama `claude/game-submit-bug-h5vvbl`)

ChromaNom (proyecto hermano, nomenclatura **orgánica**) ya tenía desplegado
un rediseño visual completo. Se pidió explícitamente llevar esa misma
dirección de arte y esas mismas piezas de infraestructura a Ionom, adaptadas
al contenido **inorgánico** real del sitio — no una copia literal, porque
ChromaNom está construido alrededor de estructuras esqueléticas orgánicas
(cadenas de carbono) que no existen en la química de Ionom.

Se inspeccionó `chromanom.css`, `fondo-moleculas.svg` y `site-ui.js` del
proyecto hermano (clon de solo lectura, no forma parte de este repo) y se
construyó el equivalente para Ionom:

### Archivos nuevos

- **`assets/ionom.css`** — capa de componentes del sistema de diseño. Se
  carga en las 14 páginas, siempre **después** del `<style>` propio de cada
  una, así que gana con `!important` donde haya conflicto sin tener que
  tocar el marcado de cada página:
  - Menú superior (`.site-nav`) rediseñado de barra azul noche sólida a
    vidrio esmerilado blanco (`rgba(255,255,255,.92)` + `backdrop-filter`),
    con los botones de tema/menú/tamaño de letra recoloreados para mantener
    contraste sobre el nuevo fondo claro.
  - Pie de página (`footer`) convertido de texto con línea superior a caja
    sólida azul noche con texto blanco.
  - Tipografía Google Fonts: Fraunces (títulos), Outfit (texto), JetBrains
    Mono (fórmulas) — mismas 3 familias que ChromaNom, cargadas vía
    `<link>` en cada página, con los stacks de sistema ya existentes
    (Georgia/Trebuchet MS/Courier New) como respaldo automático si la fuente
    no carga (sin conexión, proxy que la bloquea, etc.).
  - Clases de componente nuevas para marcado futuro: `.ion-btn`
    (primary/secondary/ghost), `.ion-card`, `.ion-page-head`, `.ion-chip`
    (una variante por rol iónico, reutilizando los tokens Wong ya definidos
    en `shared-tokens.css`), `.ion-logo-float` (animación de flotación
    suave, respeta `prefers-reduced-motion`).
  - Marca de agua de fondo (`#ion-mol-bg`) — ver siguiente punto.
  - Reglas de impresión: oculta nav/footer/barra inferior/marca de agua en
    el papel.

- **`assets/ionom-fondo.svg`** — la marca de agua pedida explícitamente al
  inicio de esta tarea ("fondo tipo marca de agua de varias moléculas
  inorgánicas en su forma de estructura de Lewis"). A diferencia de
  ChromaNom (un solo tipo de estructura: esqueletal orgánica), Ionom enseña
  una mezcla de especies covalentes y iónicas, así que el mosaico usa **dos
  convenciones visuales coherentes** dentro de la misma paleta Wong:
  - Estructura de líneas/enlaces reales para especies covalentes: **CO₂**,
    **SO₃** (anhídridos/óxidos ácidos), **H₂SO₄**, **HNO₃** (ácidos
    oxácidos), **HCl** (ácido hídrico).
  - Dos círculos de color unidos por línea punteada para compuestos
    iónicos: **NaCl** (sal binaria), **CaCO₃** (sal oxigenada), **Ca(OH)₂**
    (base) — con la carga del ion como superíndice.
  - Un solo mosaico de 720×1320 con 8 estructuras en dos columnas
    intercaladas (mismo patrón que ChromaNom: una sola capa, nunca dos
    copias superpuestas — eso haría que las estructuras se crucen y
    parezcan enlaces que no existen).
  - Separación mínima de 18px verificada **por script** entre cada par de
    estructuras, incluso al repetirse el mosaico (9 combinaciones de
    desplazamiento de tile comprobadas) — cero violaciones.
  - Colores Wong tomados como valores hexadecimales literales dentro del
    SVG (un SVG externo referenciado por `url()` en CSS no puede leer las
    variables CSS del documento que lo usa).
  - Insertada vía JS como `<div id="ion-mol-bg">` fijo detrás de todo el
    contenido (`z-index:-1`, sin recibir clics), opacidad `.28` en
    escritorio y `.15` en móvil (mosaico más pequeño) para no competir con
    el texto.

- **`assets/ionom-ui.js`** — JS compartido, equivalente de `site-ui.js`:
  - Inserta la marca de agua (`fondo()`).
  - Construye una barra de navegación inferior **solo en móvil** (`#bnav`)
    con los 5 accesos más usados (Inicio/Principios/Funciones/Juego/Tabla),
    más una hoja "Más" (`#bnav-sheet`) con los 9 módulos restantes y los
    controles de tamaño de letra — sin duplicar HTML: se autoconstruye en
    cada página. El menú hamburguesa de escritorio queda intacto (13
    módulos no caben cómodamente en una barra inline como la de ChromaNom,
    que solo tiene 7).
  - En `juego.html`: oculta la barra inferior automáticamente mientras hay
    una partida activa (`MutationObserver` sobre `.screen.active`, oculta
    si el id no es `s-portada`) — mismo mecanismo que ya usa ChromaNom, y
    coincide exactamente con la convención de IDs que Ionom ya tenía, cero
    adaptación necesaria.
  - Aviso de "desliza para ver más" en tablas anchas (`avisosTablas()`).

### Propagación a las 14 páginas

Cada página recibió los mismos 3 cambios (fuentes Google + `ionom.css` antes
de `</head>`, `ionom-ui.js` antes de `</body>`): index, teoria, funciones,
juego, tabla, generador, nomenClash, simulador, reacciones, balanceo, moles,
estequiometria, balanceo-avanzado, guia. nomenClash.html no enlaza
`shared-tokens.css` (mantiene su copia local de tokens por su tema visual
propio "Alquimia Oscura" — ver Fase 1), así que ahí los 3 includes se
insertaron directamente antes de `</head>`/`</body>` sin depender de esa
línea como ancla.

En index.html además: logo del hero con `class="ion-logo-float"` (animación
de flotación ya definida en `ionom.css`, solo faltaba aplicarla). Se
verificó que la numeración de los 12 módulos (①→⑫) ya era continua, sin el
hueco que ChromaNom tuvo que corregir — no hizo falta ningún cambio ahí.

### Service worker

`sw.js`: se agregaron `assets/shared-tokens.css`, `assets/ionom.css`,
`assets/ionom-ui.js` y `assets/ionom-fondo.svg` a `ASSETS_TO_CACHE`, y
`CACHE_NAME` subió de `ionom-v17` a `ionom-v18` (regla obligatoria del
CLAUDE.md: cualquier archivo cacheado que cambie exige subir la versión en
el mismo commit).

### Verificación realizada

- Las 14 páginas cargadas con Playwright en 1280px y 390px: cero errores de
  consola, `ionom.css` enlazado y `#ion-mol-bg` presente con la opacidad
  esperada en las 14, cero desbordamiento horizontal nuevo introducido por
  este cambio (el único desbordamiento móvil detectado, en balanceo.html,
  ya existía **antes** de este rediseño — confirmado comparando contra el
  commit previo — y queda fuera de alcance de esta tarea).
- Menú superior confirmado con `background-color` resuelto a
  `rgba(255,255,255,.92)` (gana sobre el `<style>` propio de cada página).
- Barra inferior (`#bnav`) visible en móvil, hoja "Más" se abre al tocar el
  botón, y el control de tamaño de letra de la hoja sí dispara
  `fontInc()`/`fontDec()` (las mismas funciones globales que cada página ya
  tenía, reutilizadas sin cambios).
- **Partida real en modo estudiante** con el código de prueba `110106`
  (regla del CLAUDE.md) contra un servidor HTTP real: panel de bienvenida
  renderiza sin errores con la llamada a Apps Script bloqueada
  intencionalmente (simula sin conexión).
- **Partida completa en modo libre**: al iniciar el juego la pantalla pasa
  a `s-game` y la barra inferior se oculta automáticamente
  (`display:none`), confirmando que el freno de "no interrumpir una
  partida" sigue intacto con la nueva navegación móvil.

## Fases pendientes del rediseño completo

1. Portada (index.html): contenido dinámico pendiente del brief original —
   CTA que cambie de texto según si hay progreso guardado, estadísticas
   calculadas en vez de fijas, panel "Tu avance" (requiere antes decidir con
   la docente qué dato de progreso mostrar, ya que el modelo de Ionom es
   mayormente del lado del servidor vía Google Sheets, no `localStorage`
   como en ChromaNom).
2. Propagar los 13 colores únicos (`--grp-*`) a las tarjetas reales de
   teoria.html y funciones.html (hoy siguen usando el esquema de 4 colores
   MDEC reutilizados entre temas no relacionados — el token ya existe, falta
   aplicarlo en el marcado).
3. Pulir la UI del juego (estados de respuesta, retroalimentación) con el
   mismo sistema de componentes `.ion-*`.
4. Optimizar el logo/ícono (`assets/logo.png` e `iononpwa.png` pesan ~900 KB
   cada uno, mostrados a ≤140px).
5. Terminar de limpiar las menciones de color de texto restantes
   (funciones.html, nomenClash.html, guia.html, juego.html) y los hex
   sueltos no basados en variable.
6. Corregir el desbordamiento horizontal móvil preexistente en
   balanceo.html (no introducido por esta tarea, detectado durante su
   verificación).
