# Rediseño visual de Ionom — Resumen de cambios

Fecha: 2026-10-16
Commits: `f867312`, `9ac98d7`, `1989e75` (rama `main`)

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
  rompió.

## Fases pendientes del rediseño completo

1. Propagar los 13 colores únicos (`--grp-*`) a las tarjetas reales de
   teoria.html y funciones.html (hoy siguen usando el esquema de 4 colores
   MDEC reutilizados entre temas no relacionados — el token ya existe, falta
   aplicarlo en el marcado).
2. Rediseño visual más profundo de la portada (hero, ruta de aprendizaje) —
   el contenido y la estructura ya son sólidos; lo que falta es pulido de
   dirección de arte según el brief original.
3. Pulir la UI del juego (estados de respuesta, retroalimentación) con el
   mismo sistema.
4. Revisión responsive + accesibilidad completa en los archivos que se
   toquen.
5. Optimizar el logo/ícono (`assets/logo.png` e `iononpwa.png` pesan ~900 KB
   cada uno, mostrados a ≤140px).
6. Terminar de limpiar las menciones de color de texto restantes
   (funciones.html, nomenClash.html, guia.html, juego.html) y los hex
   sueltos no basados en variable.
