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
2. Pulir la UI del juego (estados de respuesta, retroalimentación) con el
   mismo sistema de componentes `.ion-*`.
3. Optimizar el logo/ícono (`assets/logo.png` e `iononpwa.png` pesan ~900 KB
   cada uno, mostrados a ≤140px).
4. Terminar de limpiar las menciones de color de texto restantes
   (nomenClash.html, guia.html, juego.html) y los hex sueltos no basados en
   variable.

## Fase 4 (continuación) — Colores `--grp-*` reales + corrección del tema oscuro

Fecha: 2026-10-16
Commits: `7672411`, `2ed2e38` (rama `main`)

### Desbordamiento horizontal preexistente en balanceo.html

El único hallazgo de la verificación anterior: el menú lateral
(`#nav-drawer`, fuera de pantalla a la derecha vía `right:-280px`) seguía
contribuyendo al `scrollWidth` del documento en móvil pese a estar oculto
visualmente. Causa: `<html>` no tenía `overflow-x:hidden` (solo `<body>` lo
tenía en otras páginas como juego.html/generador.html, pero el ancho que
realmente determina el scroll horizontal del documento es el de `<html>`,
no el de `<body>`). Confirmado preexistente (33px de desbordamiento antes
de la Fase 4, no causado por ella). Corregido agregando `overflow-x:hidden`
también a `<html>` en balanceo.html; verificado que el menú lateral sigue
abriendo y cerrando con normalidad en escritorio y que en móvil su
reemplazo (la barra inferior) sigue funcionando.

### Colores `--grp-*` aplicados al marcado real

Los 13 colores únicos por grupo funcional (`--grp-*`) llevaban desde la
Fase 2 definidos en `shared-tokens.css` pero sin usarse en ningún HTML —
confirmado por búsqueda: cero referencias `var(--grp-` fuera de su propia
declaración. Mientras tanto, `teoria.html` y `funciones.html` seguían
reutilizando los 4 colores de ROL iónico (catión/anión/hidróxido/oxoanión)
como decoración cíclica entre tarjetas de temas no relacionados — la
violación exacta que señaló la auditoría de la Fase 1 ("esos 4 colores
significan algo concreto y no deben reutilizarse fuera de ese significado").

- **funciones.html**: las 9 tarjetas de función (grid principal + la
  insignia "Función NN" dentro de cada sección) ahora usan el `--grp-*` que
  les corresponde de verdad: Óxidos Básicos y Anhídridos comparten
  `--grp-ox` (igual que el selector `ox-anh` de juego.html los trata como
  un solo grupo), y Hidruros/Ácidos Hídricos/Bases/Ácidos Oxácidos/Sales
  Binarias/Sales Oxigenadas/Sales Ácidas tienen cada una la suya
  (`--grp-hid/-ahid/-base/-aox/-sbin/-sox/-sac`).
- **teoria.html**: de las 8 tarjetas del menú principal, 2 corresponden de
  verdad a un grupo funcional concreto (Reactividad → `--grp-reac`, Sales
  Ácidas → `--grp-sac`) y usan su color propio; las otras 6 son secciones
  transversales que no tratan de un solo grupo (Conceptos Base, Estados de
  Oxidación, Tipos de Compuestos, Nomenclatura Sistemática, Stock y
  Tradicional, Excepciones) y pasan a un color neutro único (`--grp-all`,
  el token ya pensado para "aplica a todos los grupos") en vez de robarle
  significado a uno de los 4 colores de rol.
- El "Mapa de Reactividad" de funciones.html (METAL/NO METAL en
  catión/anión) no se tocó — ese sí es un uso legítimo de los 4 colores de
  rol, porque ahí SÍ describen el rol iónico real de cada casilla.

### 2 bugs reales encontrados al verificar en tema oscuro

1. **Menú superior ilegible en tema oscuro**: el fondo frosted blanco fijo
   de la Fase 4 no respondía al tema oscuro — quedaba una franja blanca
   encima de una página por lo demás oscura, con texto pensado para fondo
   claro casi invisible. `assets/ionom.css` ahora define fondo y color de
   texto del menú también para tema oscuro, con los mismos 3 disparadores
   que ya usa `shared-tokens.css` (`prefers-color-scheme:dark`,
   `[data-theme="dark"]`, `[data-theme="light"]` para el caso "SO prefiere
   oscuro pero el usuario eligió claro a mano").
   `nomenClash.html` necesitó una corrección aparte en su propio `<style>`
   (con la misma especificidad de selector para ganarle a la regla
   compartida) porque mantiene su propio esquema de tema "Alquimia
   Oscura": ahí `data-theme="dark"` es su estado visual **por defecto**, no
   un tema oscuro añadido, así que `var(--tx)` (pensado para el resto del
   sitio) no aplica — se usa `var(--text-dark)`, que es el token que
   `nomenClash.html` ya tenía correctamente adaptado a sus 2 estados.
2. **Botón de tema (🌙/☀️) sin conectar** en `teoria.html` y
   `funciones.html`: `toggleTheme()` estaba definida pero nunca se agregaba
   como manejador de clic del botón — el mismo tipo de bug que la auditoría
   de la Fase 1 ya había corregido en `generador`/`index`/`simulador`/
   `tabla`/`nomenClash`, pero que a estas 2 páginas no les había tocado.
   Se verificó que `reacciones.html`/`balanceo.html`/`moles.html`/
   `guia.html` (que no tienen una función llamada `toggleTheme`) sí
   funcionan correctamente con su propio patrón de código distinto — no
   necesitaron cambio.

### Verificación realizada

- Las 14 páginas en 1280px/390px tras cada cambio: cero errores de consola,
  cero desbordamiento horizontal.
- Colores `--grp-*` de las tarjetas de teoria.html/funciones.html
  verificados con el color computado real en tema claro y oscuro.
- Contraste del menú en tema oscuro verificado alternando el tema con clic
  real en index.html, juego.html, nomenClash.html, teoria.html y
  funciones.html — fondo y texto correctos en los 5 casos, incluido el
  esquema invertido propio de nomenClash.html.
- Partida completa en modo libre repetida tras estos cambios: sin
  regresiones.

## Fase 5 — Auditoría de diseño visual y plan de acción

Fecha: 2026-10-16
Commits: ver al final de esta sección (rama `main`)

Se hizo una auditoría completa de las 14 páginas desde didáctica, diseño de
multimedia educativo (principios de Mayer) y diseño gráfico, documentada en
un documento aparte (con capturas de evidencia) y resumida en una tabla de
8 hallazgos priorizados. Se implementaron los 8 puntos del plan de acción,
más un bug adicional reportado aparte (ícono del PWA instalado).

### Ícono del PWA no se veía al instalar (mostraba una "I" genérica)

`manifest.json` declaraba el mismo archivo (`assets/iononpwa.png`) como
ícono de **192×192 Y 512×512** a la vez — pero el archivo real medía
1254×1254 px, sin coincidir con ninguno de los dos tamaños declarados.
Varios instaladores de PWA (notablemente el de Windows/Edge) son estrictos
con esto y, al no poder validar el tamaño, caían a un ícono genérico (la
inicial del nombre de la app). Se generaron `assets/icon-192.png` y
`assets/icon-512.png` con el tamaño real exacto que declaran, el manifest
ahora apunta a cada uno por separado, y se quitó `maskable` del `purpose`
(el logo ya trae su propio fondo redondeado — aplicarle además la máscara
del sistema operativo lo recortaría dos veces).

### Hallazgos del plan de acción — implementados

1. **Banner de actualización tapaba contenido** (index.html): pasó de una
   barra ancha centrada abajo a un toast compacto (320px) en la esquina
   inferior derecha, con el botón "Actualizar" y el cierre apilados
   verticalmente para ocupar menos espacio horizontal.
2. **Botón de calculadora tapaba la tabla periódica** (tabla.html): dejó de
   ser un botón flotante fijo — ahora es un botón normal junto a "¿Cómo
   usar la tabla?" en el encabezado, así que nunca puede quedar encima de
   una celda.
3. **Barra de audio flotante se superponía a tarjetas** (reacciones,
   balanceo, balanceo-avanzado): los 2 botones (🔊 Leer / ⏹ Detener) pasan
   de píldoras anchas con texto a botones redondos de ícono solo (46×46px,
   el mismo tamaño que el botón "🏠" que ya existía ahí), reduciendo bastante
   el área que puede tapar.
4. **generador.html con el diseño oscuro de una fase anterior**: migrado al
   mismo sistema de tarjetas claras que ya tienen las demás 13 páginas
   (formulario, selects, checkboxes, el modal "¿Cómo funciona?") — mismo
   patrón ya aplicado en juego.html en la Fase 4.
5. **Rojo usado tanto para "Descomposición" como para "incorrecto"**
   (reacciones.html): las 4 tarjetas de tipo de reacción que reutilizaban
   colores con otro significado (`--err` para Descomposición, y los 3
   colores de rol iónico catión/anión/hidróxido para sustitución simple/
   doble/neutralización) ahora tienen 4 colores propios e independientes
   (violeta, cian, índigo, gris pizarra) que no chocan con ningún otro
   significado ya establecido en el sitio.
6. **Páginas muy largas sin navegación interna**: nuevo
   `assets/toc.js`, compartido por reacciones/balanceo/moles/
   estequiometria/balanceo-avanzado.html — arma automáticamente, a partir
   de los `<h2>` que la página ya tiene, un botón flotante "Índice" (abajo
   a la izquierda, para no chocar con los controles que ya viven abajo a
   la derecha) con un panel para saltar directo a cualquier sección. No
   requirió tocar el contenido de cada página.
7. **Íconos de emoji nativo, inconsistentes entre dispositivos**: los 14
   íconos de la barra inferior móvil y la hoja "Más" (compartidos por las
   14 páginas desde `assets/ionom-ui.js`) pasaron de emoji a SVG propio en
   línea, con `currentColor` para heredar el color del texto (incluido el
   color de "activo"). Alcance explícito: solo la navegación compartida,
   el punto de mayor impacto por página tocada — no se tocaron los emoji
   decorativos del contenido de cada página individual, que exigirían
   editar las 14 páginas una por una para un beneficio menor.
8. **logo.png e iononpwa.png pesaban ~900 KB cada uno**: junto con la
   corrección del ícono del PWA (arriba), se recomprimieron al tamaño real
   de uso — `iononpwa.png` de 897 KB a 209 KB, `logo.png` de 890 KB a
   198 KB (~78% menos en ambos), sin pérdida visible a los tamaños en que
   se muestran.

sw.js: `CACHE_NAME` v21→v22; se agregaron `assets/toc.js`,
`assets/icon-192.png` e `assets/icon-512.png` a `ASSETS_TO_CACHE`.

### Verificación realizada

- Las 14 páginas sin errores de consola ni desbordamiento horizontal en
  1280px/390px, repetido después de cada cambio.
- `manifest.json` y los 2 archivos de ícono nuevos confirmados servibles
  con el tamaño real declarado.
- Botón de calculadora de tabla.html confirmado funcional en su nueva
  posición.
- Los 5 índices flotantes (reacciones/balanceo/moles/estequiometria/
  balanceo-avanzado) confirmados: aparecen, listan las secciones
  correctas, y un clic sí hace scroll a la sección.
- Partida completa en modo libre: sin regresiones.

## Fase 6 — Correcciones post-auditoría (marca de agua y NomenClash)

### Marca de agua: 3 estructuras con errores reales de conectividad

`assets/ionom-fondo.svg` tenía errores de valencia, no solo de estilo:
H2SO4 con un H pegado directo al S (sin oxígeno de por medio, además de
un quinto enlace de más en el azufre), HNO3 con el nitrógeno mostrando
dos enlaces dobles (viola su valencia), y CaCO3 dibujado como un hexágono
que se leía como anillo aromático en vez del ion plano trigonal que es.
Las 3 estructuras se corrigieron con conectividad verificada a mano
(coordenadas generadas por trigonometría para enlaces simétricos), y
CaCO3 ahora usa el mismo patrón de texto "CO₃ 2−" que ya usaba Ca(OH)₂.

### NomenClash — tema claro: botones y dorso de cartas ilegibles

`.btn-secondary` (Robar, Ver carta, Teoría, Reglas, Ayuda, Salir...) y
`.card.facedown` (mazos boca abajo) tenían un degradado oscuro fijo, sin
variable de tema. Como el color del texto sí cambia entre temas
(`--parch-dark`), en el tema claro (pergamino) quedaba texto oscuro sobre
fondo oscuro, casi invisible. Se agregaron overrides
`:root[data-theme="light"]` para ambos selectores (y para el ícono del
dorso de la carta), siguiendo el mismo patrón ya usado para
`.card.cation/.anion/.action`. El tema oscuro "Alquimia Oscura" (el
default) queda intacto — se verificó por separado simulando
`color_scheme='dark'` del sistema operativo.

### NomenClash — la IA explotaba "Cambio de Reactivo" para vaciar la mano

Al jugar la carta "Cambio de Reactivo" (`changecation`) sin poder seguir
con un anión compatible, el jugador pierde su turno. El camino del
jugador humano (`drawCard()`) ya compensaba esto robando 1 carta antes de
ceder el turno, dejando la mano sin cambio neto (se descarta la carta
jugada, se roba 1 de vuelta) — pero el camino de la IA (`aiPlayAction()`,
caso `'changecation'`) no robaba nada: cada intento fallido le costaba a
la IA solo la carta jugada, sin reponerla. Esto le permitía a la IA jugar
la carta repetidamente solo para deshacerse de cartas y acercarse a
ganar por mano vacía, sin el freno que el jugador humano ya tenía.
Se agregó el mismo `drawCards(..., 1)` al camino de la IA, y se
actualizó el texto de la carta (ficha de ayuda, descripción corta) y de
la pantalla de Reglas para reflejar la penalización de robar 1 carta.

No se tocó `sw.js`: `nomenClash.html` (como todas las páginas HTML del
sitio) se sirve network-first, así que estos cambios llegan actualizados
sin necesidad de subir `CACHE_NAME`.

### Verificación realizada

- Las 14 páginas sin errores de consola ni desbordamiento horizontal en
  1280px/390px.
- Marca de agua: capturas de cerca y en mosaico repetido confirmando
  conectividad correcta y sin solapamientos nuevos.
- NomenClash tema claro: partida completa (pantalla de inicio → reglas →
  tablero en juego) con botones y dorsos de carta legibles; tema oscuro
  por defecto confirmado sin cambios vía simulación de preferencia del
  sistema operativo.
- Exploit de "Cambio de Reactivo": simulado directamente llamando a
  `aiPlayAction()` con una IA sin aniones jugables — confirmado que ahora
  pierde la carta jugada Y roba 1 de penalización (mazo de robo bajó en 1,
  mano terminó igual que antes de jugar la carta en vez de una carta
  menos), con el mensaje de registro actualizado.

## Fase 7 — Blanco puro, sin bordes/cuadros azules, sin tema oscuro

Pedido explícito de la docente: quitar los bordes y "cuadros" con tinte
azul del sitio y dejar blanco puro (dirección ChromaNom), y eliminar el
tema oscuro del código — todo esto **excepto en NomenClash**, que
conserva su propia identidad visual "Alquimia Oscura" (ver Fase 1: ya
tiene su propio sistema de tokens independiente de `shared-tokens.css`,
así que no se tocó ningún archivo de NomenClash en esta fase).

### Tokens compartidos (`assets/shared-tokens.css`)

Los tokens de superficie dejan de tener tinte azul:
`--bg`/`--surf` pasan de `#f6fafe`/blanco-con-tinte a blanco puro
(`#ffffff`); `--bg2`/`--surf2` pasan de azules pálidos
(`#edf4fb`/`#f0f7ff`) a gris neutro casi blanco (`#f2f3f5`/`#f6f6f8`);
`--brd`/`--brd2` pasan de bordes azules (`#d0e6f5`/`#b8d4eb`) a gris
neutro (`#e3e3e8`/`#cfcfd8`); las sombras (`--sh`/`--sh2`) pasan de
tinte azul (`rgba(13,74,115,...)`) a neutro slate (`rgba(15,23,42,...)`).
La separación entre página/tarjeta/campo ahora la dan solo el borde gris
y la sombra, nunca un color de fondo — igual que ChromaNom. Los 4 colores
pedagógicos (catión/anión/hidróxido/oxoanión) y los 13 colores de
identidad por grupo/tema (`--grp-*`) NO se tocan: siguen siendo el único
lugar donde el sitio usa color con significado, y varios de ellos ya son
azules (anión, varios `--grp-*`) — eso es correcto, no son "cuadros
azules" decorativos sino el código cromático pedagógico del sitio.

### Tema oscuro eliminado del código (no solo forzado a claro en runtime)

Una fase anterior de esta sesión ya forzaba `data-theme="light"` por JS
en todas las páginas salvo NomenClash (`forzarTemaClaro()` en
`ionom-ui.js`, que además ya ocultaba el botón 🌙 con
`display:none`), pero los VALORES de tema oscuro seguían completos en el
CSS, inalcanzables pero presentes: el bloque
`@media(prefers-color-scheme:dark)` y `:root[data-theme="dark"]` de
`shared-tokens.css`, el equivalente en `assets/ionom.css`, y bloques
locales de `tabla.html`, `funciones.html`, `reacciones.html` y
`simulador.html`. Se eliminaron todos — ya no existe ningún valor de
tema oscuro en el código del sitio (fuera de NomenClash). El pequeño
selector huérfano `.rs.r3-dark` de `index.html` (sin ninguna clase que lo
aplicara) también se eliminó.

### Cuadros/paneles azul noche convertidos a blanco

Más allá de los tokens, 3 componentes tenían un fondo azul noche sólido
(`var(--nav)` o un degradado con ese color) hardcodeado, independiente
del tema — no eran "modo oscuro", eran paneles que siempre fueron
oscuros a propósito:

1. **Hero de `index.html`** (la portada: logo, título, subtítulo, demo
   de fórmula en vivo, botones) — era una tarjeta `background:var(--nav)`
   de borde a borde con texto blanco. Ahora es texto directo sobre el
   fondo blanco de la página (sin caja ni borde), título en `--tx`,
   subtítulo en `--tx2`, la mini-demo de fórmula con fondo `--surf2` y
   borde `--brd` en vez del recuadro translúcido blanco-sobre-negro, y
   los 2 botones ("Escuchar introducción" / "¿Qué es IonNom?") pasan de
   píldoras translúcidas blancas a píldoras blancas con borde gris.
2. **Hero de `juego.html`** (misma tarjeta, documentada en el propio
   código como "igual que la portada principal index.html") — mismo
   tratamiento: sin caja ni degradado, título/subtítulo/badges de stats/
   botón "¿Cómo jugar?" pasan a la paleta clara. El cuerpo de la portada
   (`.p-body`, con el selector de modo y el login de estudiante) ya
   estaba en blanco desde la Fase 4 — solo faltaba el hero de arriba.
3. **Mapa de Reactividad de `funciones.html`** (la captura que señaló la
   docente: "Mapa de Reactividad — Química Inorgánica") y todo su
   subsistema asociado (el modal que abre cada nodo, el botón/modal
   "Aprende la cadena de reactividad — paso a paso con voz" de Mayer, y
   el diagrama de cadena molecular `.mc-node`) compartían un mismo juego
   de variables `--dp*` ("dark panel") definidas en azul noche — se
   redefinieron esas ~9 variables a blanco/gris neutro una sola vez y
   los 4 componentes cambiaron de tema automáticamente. Los 10 pares de
   color de los nodos del mapa (METAL, NO METAL, Óxido Básico,
   Anhídrido, Base, Ácido Oxácido, Sal Oxigenada, Hidruro Metálico,
   Ácido Hídrico, Sal Binaria) y las insignias/etiquetas del modal se
   invirtieron a mano (fondo pastel claro + mismo borde saturado + el
   antiguo fondo oscuro reutilizado como color de texto), conservando
   las 10 identidades de color pero legibles sobre blanco.

No se tocó, a propósito, la barra superior de navegación (vidrio
esmerilado blanco desde la Fase 4, el fondo navy detrás ya nunca se ve),
el pie de página, el menú lateral (drawer) ni la barra de un compuesto
en juego (`.game-hdr`) — esos sí son usos deliberados de `--nav` como
"color de acción" de marca (documentado en `ionom.css`), no cajas de
contenido, y coinciden con el tratamiento que ChromaNom también le da a
su propia barra/pie de página.

sw.js: `CACHE_NAME` v23→v24 — `assets/shared-tokens.css` y
`assets/ionom.css` están en `ASSETS_TO_CACHE` (cache-first), así que sin
este cambio de versión un estudiante con el sitio ya instalado seguiría
viendo los tonos azules viejos indefinidamente. Las páginas HTML
modificadas (index, juego, funciones, teoria, tabla, reacciones,
simulador) no necesitan el bump por sí mismas — se sirven network-first
— pero los 2 CSS compartidos sí lo requieren.

### Verificación realizada

- Las 14 páginas sin errores de consola ni desbordamiento horizontal en
  1280px/390px (`test_all_pages.py`, 28/28 OK).
- Capturas de pantalla antes/después de `index.html` (hero), `juego.html`
  (hero de la portada) y `funciones.html` (Mapa de Reactividad completo
  y su tarjeta) confirmando contraste legible y ausencia del fondo azul
  noche.
- `teoria.html` (la caja "¿Para qué existe la nomenclatura inorgánica?",
  mismo patrón de caja azul noche, encontrada durante la verificación
  visual y corregida igual que las 3 anteriores) confirmada en blanco
  con los 3 niveles legibles.
- Confirmado por `git status` que `nomenClash.html` no aparece en los
  archivos modificados de esta fase.
- Confirmado que `simulador.html` y el resto de cajas con tinte azul que
  siguen en pantalla (p. ej. "Cómo usar el simulador", las pastillas de
  nomenclatura con color por rol) son el código cromático pedagógico
  (`--an-b`, `--cat-b`, etc.), no cuadros decorativos — se dejaron
  intactos a propósito.
