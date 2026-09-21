# Cambios de la semana — IonNom

Resumen de todo lo trabajado entre el **14 y el 21 de septiembre de 2026**, agrupado por día. Pensado para que el docente pueda ver de un vistazo qué cambió y por qué, sin tener que leer el historial de Git.

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
