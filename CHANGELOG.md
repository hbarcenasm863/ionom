# Cambios de la semana — IonNom

Resumen de todo lo trabajado entre el **14 y el 20 de septiembre de 2026**, agrupado por día. Pensado para que el docente pueda ver de un vistazo qué cambió y por qué, sin tener que leer el historial de Git.

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
