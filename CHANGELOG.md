# Cambios de la semana — IonNom

Resumen de todo lo trabajado entre el **14 y el 21 de septiembre de 2026**, agrupado por día. Pensado para que el docente pueda ver de un vistazo qué cambió y por qué, sin tener que leer el historial de Git.

---

## 26 de octubre — Laberintos químicos en el Generador Docente

- **Nueva pestaña «🧭 Laberintos»** en `docente.html` (la pestaña «📄 Guías, talleres y evaluaciones» queda igual que antes). Cuatro tipos de laberinto: nomenclatura inorgánica, mol y masa molar, tipos de reacción y balanceo.
- **Las pistas salen de los bancos reales del sitio**: los compuestos, reacciones y ecuaciones de `banco.js` (el mismo banco del Juego y del Generador), las masas atómicas de la tabla periódica del Juego (redondeadas a 1 decimal) y el cálculo de estados de oxidación del Juego.
- **Ruta única garantizada**: antes de mostrarse, cada laberinto se revisa entero. Ninguna salida falsa puede ser también correcta (por ejemplo, otro nombre válido del mismo compuesto, un múltiplo de los coeficientes o una reacción que admita dos clasificaciones), siguiendo solo respuestas correctas desde A se llega a FIN por la ruta de la clave, y desde una casilla trampa nunca se llega a FIN. El resultado aparece como «✔ Ruta única verificada».
- **Imagen de marca IonNom**: logo en el encabezado, marca de agua del logo sobre la hoja, tipografías y colores del sitio y método cromático (catión · anión · hidróxido · oxoanión) en las fórmulas.
- **Modo Jugar con pantalla completa** para proyectar en clase; vistas Hoja/Clave; impresión de varias versiones en carta horizontal con hojas de clave; verificación de la ruta escrita por el estudiante.
- **Impresión**: siempre en carta horizontal (también con Ctrl+P), con el laberinto completo en la hoja y un recuadro arriba para Nombre, Curso y Fecha. El código de la hoja ya no aparece en los controles ni en la hoja del estudiante; solo en las claves, para volver a generarlas.
- **Correcciones de la auditoría química**: el laberinto ya no presenta como «Sistemática» los nombres tradicionales que `banco.js` copia en ese campo para oxácidos y oxisales; tampoco usa sistemáticos sin prefijo ambiguos («cloruro de cobre»: ¿CuCl o CuCl₂?) ni cambia de sistema sin avisar. Además, «Sal oxigenada» se acepta para sales ácidas con oxígeno; se quitaron sólidos de red de las preguntas de «moléculas» (SiO₂, B₂O₃…) y disociaciones incorrectas (Hg₂I₂, HgOH, SnCl₄, PbCl₄, cloruros covalentes); los distractores ya no mezclan sistemas ni tienen faltas de ortografía; la notación científica sale siempre con 3 cifras.
- **Imagen de marca en todas las hojas generadas**: las guías, talleres y evaluaciones del Generador Docente llevan en cada página la marca de agua del logo, el logo de IonNom en la esquina superior y el pie «IonNom · Nombra con precisión». Los talleres de `generador.html` llevan el logo en la esquina del recuadro del estudiante y la marca de agua, que se repite en cada página impresa.
- **Distractores en los que el estudiante sí se puede equivocar** (también en las casillas trampa). Antes, para «Nitrato manganoso» salían RbNO₃ o Sr(NO₃)₂, que se descartaban con solo ver el metal. Ahora las salidas usan el mismo elemento y siguen errores típicos:
  - otra valencia: Mn(NO₃)₃;
  - cruce de cargas sin simplificar o subíndice cambiado: Mn(NO₃)₄;
  - anión vecino: Mn(NO₂)₂, nitrito en vez de nitrato;
  - al nombrar: otro número romano, -oso/-ico (ferroso/férrico), otro prefijo, hidruro ↔ hidróxido ↔ óxido, clorhídrico ↔ clórico ↔ cloroso.

  Solo si una pregunta no da para suficientes variantes se usan compuestos de otro metal.
- **Claves en verde y con leyenda**: en las hojas de clave de los laberintos, la ruta correcta iba en rojo, color que en una hoja de examen se lee como «incorrecto». Ahora va en verde (también las letras de la clave de los crucigramas), y cada clave lleva la leyenda «verde: ruta correcta · punteado naranja: respuesta correcta de una casilla trampa (no lleva a FIN)».
- **Crucigramas: auditoría de pistas (2208 pistas revisadas)**.
  - **Función química**: la pista ahora fija el término y muestra las opciones: «Clasifica KMnO₄: sal ____ (binaria, oxigenada o ácida)» → OXIGENADA. Antes, «Función química de KMnO₄ (12)» admitía también PERMANGANATO, OXISAL…, y lo mismo pasaba en las 9 funciones (HNO₃ → ÁCIDO NÍTRICO, CO₂ → CARBÓNICO). Las sales ácidas usan las opciones «neutra o ácida», porque también tienen oxígeno.
  - **Química corregida**: CO, N₂O y SO salen del crucigrama (son óxidos neutros o inestables, no anhídridos); el mercurio (I) se muestra como Hg₂²⁺; las sales de amonio y los óxidos anfóteros ya no se clasifican.
  - **Ácidos hídricos**: se piden «como ácido» (ácido ___hídrico) y nunca en «Sistemática», como enseña el sitio.
  - **Avisos**: se indica cuándo la palabra que falta lleva prefijo (TRIHIDROXIDO, MONOXIDO) o cuándo el catión puede llevar hipo-/per-. También se descartan los sistemáticos con «mono-» que contradicen la regla del sitio.
  - **Modo Resolver**: el primer toque en una casilla de cruce ya no cambia la dirección de escritura.
- **Nueva pestaña «🔤 Crucigramas»** en el Generador Docente, solo de nomenclatura y con los compuestos del banco:
  - **Cuatro tipos de pista, mezclados en ronda**: fórmula → nombre completo («Nombra en Stock: FeCl₃» → CLORURODEHIERROIII), ion → nombre («Anión SO₄²⁻» → SULFATO, «Nombre tradicional del catión Fe³⁺ (terminación -oso o -ico)» → FERRICO), completar el nombre y función química.
  - **Respuestas**: sin espacios ni tildes; la Ñ cuenta como letra y los romanos se escriben con letras.
  - **Verificación de cada crucigrama**: todas las palabras conectadas, ninguna palabra «accidental» al cruzarse y sin respuestas repetidas. Se descartan las pistas con más de una respuesta posible: nombres repetidos en el banco, compuestos con dos nombres en el mismo sistema, anfóteros y sistemáticos sin prefijo ambiguos.
  - **Hoja carta vertical** con logo, marca de agua, Nombre/Curso/Fecha y licencia. Si las pistas no caben, se reduce su letra.
  - **Opciones**: hasta 40 versiones con claves, botón «Generar nuevo crucigrama» con el código oculto, y modo «Resolver» en pantalla, también en celular: se escribe en las casillas, se navega con las flechas y se comprueba palabra por palabra.
- **Auditoría química de todo el banco (681 entradas)**. No hubo errores numéricos: reacciones y balanceos correctos con coeficientes mínimos, masas molares exactas. Se corrigió:
  - **Prefijos que no coincidían con la fórmula**: BeH₂ → «dihidruro de berilio» y Be(OH)₂ → «dihidróxido de berilio». Antes, el Juego marcaba como incorrecta la respuesta bien escrita.
  - **Juego**: ya acepta «monosulfuro»/«sulfuro», «monóxido»/«óxido» y «pentóxido»/«pentaóxido» como el mismo nombre (el banco usaba unas veces una forma y otras la otra). «Combustión» ahora es «compuesto orgánico + O₂ → CO₂ + H₂O», así que el etanol, la glucosa y el metanol quedan bien clasificados.
  - **Nombres contradictorios**:
    - MnO₂ («óxido mangánico», cuando en el banco «mangánico» es Mn³⁺) y V₂O₅ («óxido pervanádico» frente a «anhídrido vanádico») quedan solo como anhídridos, con su nombre Stock.
    - HgOH sale del banco, porque el mercurio (I) es Hg₂²⁺.
    - HPO₃ («ácido metafosfórico») sale por la regla de no usar formas meta-.
    - En su lugar entran Mn₂O₃, PdO₂, Ti(OH)₄ y HCNO.
  - **Explicaciones y datos**: una reacción repetida (rx-064) se cambió por otra. Se unificó «pentaóxido/heptaóxido», y el Stock de los metales de valencia fija quedó vacío como en el resto del banco. Se corrigieron explicaciones con errores (Bi₂O₃, Hg₂I₂, AlH₃, MnO, H₃PO₂, bal-008, bal-027, rx-017) y datos de contexto falsos o dudosos (CaCl₂ como antiácido, malaquita, aluminio «producido en Colombia», superfosfato, Cerrejón, minería de manganeso).
- **Banco ampliado +20 % o más en cada tipo** (`banco.js`: de 560 a 681 entradas). Lo usan el Juego, el Generador, el Generador Docente y los Laberintos:

  | Grupo | Antes | Ahora |
  |---|---|---|
  | Óxidos básicos | 41 | 50 |
  | Anhídridos | 35 | 42 |
  | Hidruros | 25 | 30 |
  | Ácidos hídricos | 9 | 10 |
  | Hidróxidos | 35 | 42 |
  | Ácidos oxácidos | 42 | 51 |
  | Sales binarias | 98 | 119 |
  | Sales oxigenadas | 73 | 89 |
  | Sales ácidas | 42 | 51 |
  | Tipos de reacción | 69 | 85 |
  | Balanceo | 50 | 61 |
  | Mol y masa molar | 41 | 51 |

  Todas las reacciones y ecuaciones nuevas quedaron verificadas como balanceadas, con coeficientes mínimos, y las masas molares se recalcularon. Los ácidos hídricos son una familia cerrada: solo se agregó HSCN (ácido sulfocianhídrico), porque los demás ya estaban. Se eliminó un duplicado que ya existía en balanceo («P + O₂ → P₂O₅» aparecía dos veces).
- **Ácidos oxácidos y sales oxigenadas sin nomenclatura sistemática** (decisión del docente: se enseñan solo con la Tradicional, y Stock cuando corresponde). `banco.js` copiaba el nombre tradicional en el campo sistemático de los 42 oxácidos y las 73 oxisales («sulfato cúprico» como «Sistemática»); ese campo quedó vacío. Por eso la tabla del Generador ya muestra «—» en la columna Sistemática, la retroalimentación del Juego ya no dice «Sistemática: sulfato cúprico», y nunca se pide su nombre sistemático en ningún módulo.
- **Auditoría exacta de distractores (399 compuestos, todos los sistemas)**. Se corrigió:
  - **Distractores que en realidad eran correctos**: «sulfuro de dihidrógeno» para H₂S (ahora se acepta como sinónimo), «ácido silícico» para H₄SiO₄ (aceptado para ambas fórmulas) y «Óxido ácido» para MnO₂, SnO₂, PbO₂ y otros anfóteros (ahora se acepta).
  - **Palabras inexistentes**: fuera «fluorato», «hipofluorito», «tricromato», «trihidrogenofosfato», «germanioso» y los ácidos con estados de oxidación imposibles («percarbónico», «tungstoso»…). Los números romanos solo usan valencias que el metal tiene de verdad.
  - **Fórmulas imposibles**: cada fórmula falsa se valida (carga del catión entera y real, hasta +4; estado del elemento central de los que se enseñan). Ya no salen Na₃SO₄, CsOH₂, (NH₃)₂HPO₄, CO₃ ni H₃S, y nunca se tocan los subíndices de dentro de un oxoanión ni del NH₄.
  - **Más opciones del mismo elemento**: combinaciones («nitrito mangánico» para «nitrato manganoso»), compuestos del mismo metal en otra función (NaOH ↔ Na₂O ↔ NaH), y entre ácidos y anhídridos del mismo elemento (HCl ↔ HClO, HClO₂, HClO₃, HClO₄). En nombrar sales, óxidos, hidróxidos e hidruros, el 95-100 % de las salidas falsas ya es del mismo compuesto o elemento.
  - **Estado de oxidación**: los metales ya no reciben valores negativos imposibles (salvo −2, la confusión con el O).
  - **banco.js**: el nombre sistemático de HgOH era el de Hg₂(OH)₂, y «fluoruro estañoso/estáñico» se escribía distinto que el resto del banco (estannoso/estánnico).
- **Ácidos con distractores del mismo elemento**: los 51 ácidos del banco reciben como salidas falsas otros ácidos reales del mismo elemento central (H₃AsO₄ → ácido arsenioso) y, para los que no tienen «hermanos» en el banco, variantes con otra terminación o prefijo (ácido tungstoso, pertúngstico; ácido ciánico, cianoso; «fluoruro de dihidrógeno»).
- **Hasta 40 versiones de laberinto** (antes el tope era 8 y, al pedir 23, se quedaba en 8 sin avisar).
- **Cada rótulo junto a su casilla de origen**: el rótulo va cerca del inicio de la flecha y no en la mitad, para que no parezca una opción de la casilla a la que llega.
- **Licencia unificada: CC BY-NC 4.0** (Atribución – No comercial). El pie de 8 páginas decía CC BY-SA 4.0, mientras que el README y el certificado del Juego decían CC BY-NC 4.0; ahora todo dice CC BY-NC 4.0. Además, el pie de cada hoja generada (laberintos, guías, talleres y evaluaciones) lleva «© 2026 Harvey Bárcenas Morales · Licencia CC BY-NC 4.0».
- **Generador — taller que no se generaba**: con «Todos los grupos» + «Todos (diversos)» la página fallaba sin generar nada, porque intentaba nombrar reacciones y ecuaciones de balanceo. Ahora esos tipos usan solo compuestos con nombre.
- **Correcciones de la auditoría UX**: en celular y tableta el modo Jugar muestra una tarjeta con la casilla actual y sus salidas como botones grandes. Las puntas de flecha ya no quedan tapadas por los rótulos, tienen tamaño fijo y el color de la ruta. El título ya no se corta en 3×3. Se agregó «Reiniciar» fuera de pantalla completa y ahora limpia los errores. La clave impresa sale más grande y la letra impresa es mayor. FIN se lee al llegar. La marca de agua queda debajo de las casillas. Los botones miden al menos 44 px. Las pestañas responden a las flechas del teclado. «Comprobar ruta» distingue cuando la ruta está incompleta, y «Versiones» queda entre 1 y 8. Hay un aviso si no se marca ninguna familia, y el logo de la hoja va sin el lema, que era ilegible.

---

## 21 de septiembre — Segunda tanda de la auditoría UX y pruebas en móvil real

### Correcciones de la auditoría (prioridad alta y media)
- **Juego — audio automático**: el modal "¿Cómo jugar?" narraba con voz automáticamente al abrir, lo que en un salón silencioso podía sonar sin que el estudiante lo esperara. Ahora el audio solo se reproduce si el estudiante toca el botón "🔊 Escuchar" dentro del modal.
- **Juego — confirmación de salida inconsistente**: salir con el botón "Menú" mostraba antes un cuadro de diálogo nativo del navegador (feo y con estilo distinto al resto del sitio), mientras que el gesto "atrás" mostraba un modal propio. Ahora ambos caminos usan el mismo modal.
- **Tabla periódica — colores fuera del modelo del sitio**: la vista por defecto usaba colores propios (rojo/azul/verde) en lugar de los 4 colores que el estudiante ya asocia en el resto del sitio (ámbar = catión/metal, azul = anión/no metal). Se alineó la vista de Metales/No metales/Metaloides a esos mismos colores y se dejó como vista inicial.
- **Portada — demasiado desplazamiento antes de llegar a los módulos**: se quitó una tarjeta de consejo redundante, se compactó el cuadro de "ruta recomendada", y se movieron los ejemplos/demos de refuerzo a después del grid de módulos en vez de antes. Resultado: más del 50% menos de scroll en celular para llegar a los módulos de práctica.
- **NomenClash — dificultad de la IA al revés**: en "fácil" la IA nunca se equivocaba y en "difícil" fallaba 3 de cada 10 jugadas — lo contrario de lo que un estudiante esperaría de esos nombres. Se invirtió: ahora fácil = IA falla más seguido, difícil = IA casi no falla. También se aceleró el ritmo de los turnos de la IA (~35-40% menos espera).
- **Funciones — botones de opción pequeños**: los botones de las preguntas de práctica medían menos de 44px de alto (por debajo del tamaño mínimo recomendado para el dedo en celular). Se aumentaron a 44px.
- **Páginas de práctica sin acceso rápido**: Balanceo, Balanceo Avanzado, Estequiometría, Moles y Reacciones obligaban a desplazarse por toda la teoría antes de llegar a los ejercicios. Se agregó un enlace "Ir directo a la práctica" arriba de cada página y un botón flotante fijo para volver al menú principal.
- **NomenClash — logo duplicado**: el logo del juego estaba embebido dos veces como código de texto (base64) dentro del HTML, sumando ~123KB solo por repetirlo. Se extrajo a un archivo de imagen real que el navegador carga y guarda en caché una sola vez.

### Pruebas en dispositivo móvil real (emulación de iPhone y Android con gestos táctiles)
Se probaron los 9 archivos anteriores simulando toques reales de dedo (no solo clics de mouse) en perfiles de iPhone 13 y Pixel 7, incluyendo una partida completa del Juego jugada por gestos táctiles. Se encontró y corrigió:
- **Juego — botón "← Menú" muy pequeño**: medía solo 28px de alto en el encabezado del juego, por debajo del tamaño táctil mínimo recomendado. Se aumentó a 44px sin afectar el resto del encabezado.

No se encontraron más problemas: sin desbordamiento horizontal, sin errores de consola nuevos, y todas las confirmaciones de salida y botones de práctica funcionan igual con toque que con clic.

---

## 20 de septiembre — Guía de nomenclatura descargable y correcciones de la auditoría UX

### Nueva guía de referencia (`guia.html`)
- Página nueva con la nomenclatura completa en un solo lugar: las 9 funciones inorgánicas (cada una con su fórmula ejemplo, el patrón de nombre en Tradicional/Stock/Sistemática, y la regla de formulación con la ecuación de intercambio de valencias), las raíces latinas que cambian de nombre (azufre → sulfur-, hierro → ferr-, etc.), sufijos y prefijos de cada sistema, un esquema visual de valencias por familia (tipo tabla periódica) y las excepciones más comunes (Mn, Cr, Hg).
- Se puede **descargar como PDF** con un botón, o imprimir directamente. El PDF se generó a partir de la misma página y se compactó de **9 a 3 páginas en orientación horizontal** (columnas internas, mayor densidad solo al imprimir) sin quitar contenido.
- Se agregó el enlace a la guía en el menú de las 14 páginas del sitio, y una mención destacada en la portada y en Principios.
- Contenido revisado contra `teoria.html` y `banco.js` (la fuente de verdad curricular del sitio) y se corrigieron **2 errores reales** encontrados en el proceso: el nombre de `Na₂HPO₄` (era "fosfato ácido de disodio", debía ser "fosfato monoácido de sodio") y la clasificación de "los tres tipos de hidruro" (incluía el agua por error).
- Se quitaron las referencias explícitas a "Colombia"; la equivalencia óxido ácido = anhídrido ahora se explica sin mencionar el país.

### Modal de bienvenida en la portada
- Aparece automáticamente la primera vez que alguien visita el sitio, explica el modelo de 4 colores y la ruta recomendada, y tiene un botón para descargar la guía en PDF directamente. No vuelve a aparecer solo, pero se puede reabrir con el botón "¿Qué es IonNom?".

### Correcciones en Principios (`teoria.html`)
- El diagrama de "Ejemplos de cálculo" (Estados de Oxidación) se veía como un **recuadro en blanco** — tenía un error de código (etiquetas HTML dentro de un SVG, donde no son válidas) que rompía el render. Se reemplazó por una animación real: cada línea del cálculo aparece paso a paso cuando el estudiante llega a esa parte de la página.
- Los 5 ejemplos cotidianos de la sección "Conceptos Base" (NaCl, CaO, Fe₂O₃, NaHCO₃, Ca(OH)₂) ahora son **clicables**: al tocarlos se despliega el desglose completo con colores y los tres nombres, igual que ya pasaba con el ejemplo fijo de Fe₂(SO₄)₃.
- Se corrigió un desbordamiento horizontal en celular (~137px) causado por las tablas anchas del archivo: ahora se pueden desplazar hacia los lados en vez de romper el diseño de la página.

---

## 19 de septiembre — Auditoría UX/UI completa y corrección de bugs reportados

### Auditoría de experiencia de usuario
Se hizo una auditoría de UX/UI enfocada en adolescentes de secundaria y se implementaron sus 10 hallazgos principales:
1. **Modo Libre vs. Modo Estudiante** en el Juego: Modo Libre ahora muestra un resultado ligero y celebratorio, sin el certificado formal (que se reserva para Modo Estudiante, donde sí cuenta para la nota).
2. **Tutorial inicial en NomenClash**: carrusel de 4 pasos la primera vez que se juega, más un aviso visible (no solo en el registro de texto) cuando una jugada es inválida.
3. **Tabla periódica en celular**: celdas más grandes y texto legible (antes eran ilegibles).
4. **Generador de talleres**: ahora se adapta a pantallas de celular (antes no tenía ningún ajuste).
5. Corrección de un **selector CSS roto** que impedía reducir el título del Juego en pantallas pequeñas.
6. **Iconos además de color** en las respuestas correctas/incorrectas del Juego (para estudiantes con daltonismo).
7. **Gamificación ligera** en el Juego: racha de aciertos visible y barra de progreso hacia la meta de 1.000 preguntas.
8. Se **unificaron los colores y tipografía** repetidos en 9 archivos distintos a un solo archivo compartido (`assets/shared-tokens.css`), para que futuros ajustes de diseño no haya que repetirlos uno por uno.
9. Se agregó **barra de progreso y pistas** a las páginas de práctica (Balanceo, Balanceo Avanzado, Estequiometría, Moles, Reacciones), que antes solo mostraban un contador de texto.
10. Se agregaron **anuncios para lectores de pantalla** (accesibilidad) en el feedback de respuestas de todo el sitio.

### Bugs reportados por el docente
- **Factores de conversión**: ahora se muestran como fracciones verticales reales (numerador sobre denominador) en Estequiometría, para que se vea la cancelación de unidades.
- **NomenClash — corrección química real**: la carta "Enlace Iónico" (que combina 2 cationes iguales) calculaba mal la fórmula resultante, lo que hacía que el juego rechazara como incorrectas respuestas que en realidad eran correctas (ej. "trióxido de dihierro" para Fe₂O₃). Corregido de raíz.
- **NomenClash — contraste**: el recuadro "¿Por qué?" del modal de retroalimentación tenía texto casi invisible en modo oscuro. Corregido.
- **Simulador**: se agregó la reacción Al + HCl (que faltaba, aunque el aluminio sí reacciona con ácido clorhídrico).

---

## 17 de septiembre — Reportes por curso en Google Sheets

- Las hojas "Curso X" del reporte de analíticas solo mostraban las cifras **históricas** (todas las partidas jugadas alguna vez). Ahora también muestran las cifras del **periodo académico vigente** (las que realmente cuentan para la Nota de juego), para que la docente pueda comparar a todo el curso de un vistazo sin abrir la app estudiante por estudiante.

---

## 16 de septiembre — Confiabilidad del registro de partidas y ampliación del banco de preguntas

- **Freno de salida accidental**: recargar la página, cerrar la pestaña o usar el botón "atrás" a mitad de una partida ahora muestra una advertencia antes de perder el progreso (antes no existía este aviso, a pesar de que se creía que sí).
- **Modal de envío de resultados**: reemplaza el aviso de texto (fácil de pasar por alto en celular) por un modal claro, con botón de "Reintentar envío" si falla la conexión, sin perder el progreso de la partida.
- **Guardado más confiable al salir por el menú**: se verifica que el backend realmente guardó la sesión (antes un fallo silencioso del servidor se daba por guardado sin estarlo).
- **Corrección de cálculo en partidas abandonadas**: una sesión abandonada a mitad de camino se estaba contando con el denominador de 20 preguntas completas en vez de las que realmente se alcanzaron a responder, penalizando injustamente a estudiantes que abandonaban tras acertar pocas preguntas. Se corrigió el cálculo hacia adelante y se recalcularon retroactivamente las sesiones ya registradas (afectó a 15 de 177 estudiantes, con ajustes menores de nota).
- **Banco de compuestos ampliado** en sales binarias, sales oxigenadas y sales ácidas (+35, +26 y +13 compuestos respectivamente, todos verificados por balance de cargas), y corrección de un compuesto duplicado y mal clasificado (NaHCO₃ aparecía dos veces, una de ellas como sal oxigenada cuando en realidad es una sal ácida).

---

## 14 de septiembre — Corrección de preguntas sin respuesta correcta

- Se encontraron y corrigieron **40 compuestos** (en ácidos oxácidos, sales oxigenadas y ácidos hídricos) donde el juego podía generar una pregunta de opción múltiple **sin ninguna respuesta correcta entre las 4 opciones**, por una inconsistencia entre cómo se generaban las opciones y cómo se validaba la respuesta. Reportado originalmente por un docente tras ver el caso real de un estudiante.

---

*Generado a partir del historial de Git del repositorio. Para el detalle técnico completo de cada cambio, cada línea de este resumen corresponde a uno o más commits — pregúntale a Claude por el commit correspondiente si necesitas más detalle.*
