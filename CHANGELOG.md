# Cambios de la semana — IonNom

Resumen de todo lo trabajado entre el **14 y el 21 de septiembre de 2026**, agrupado por día. Pensado para que el docente pueda ver de un vistazo qué cambió y por qué, sin tener que leer el historial de Git.

---

## 14 de noviembre (26) — Cada página de teoría enlaza su guía de referencia

El docente pidió que cada sección enlace la guía de referencia que le corresponde.

- **15 páginas** (`atomo`, `configuracion`, `enlace`, `estequiometria`, `moles`, `industria`, `balanceo`, `balanceo-avanzado`, `reacciones`, `gases`, `soluciones`, `ph`, `tabla`, `teoria`, `funciones`): recuadro «Guía de referencia» bajo el título con «Ver la guía →» (abre `guia.html` en la hoja correcta) y «⬇️ PDF». `configuracion` enlaza átomo y tabla periódica.
- No se enlazó `modelos.html` (teorías y modelos científicos en general), `simulador.html` ni los juegos, porque ninguna guía les corresponde con exactitud.
- **Pendiente:** no se tocó `ionom-analytics.gs`.

---

## 13 de noviembre (25) — Guía del átomo: tabla que se salía en el celular

Al revisar las últimas publicaciones se vio que en el celular la guía del átomo se podía mover hacia los lados (53 px de más) por la tabla «Partes del átomo».

- **`guia.html`:** esa tabla ahora está dentro de un recuadro con desplazamiento horizontal, como las demás tablas de la página. El PDF no cambia.
- **Pendiente:** no se tocó `ionom-analytics.gs`.

---

## 13 de noviembre (24) — Tabla periódica con símbolos en la guía

El docente notó el esquema de la tabla periódica «muy colapsado» (era una versión anterior, con la leyenda encima de la tabla).

- **`guia.html` y `assets/guia-tabla-periodica.pdf`:** la tabla ahora lleva el símbolo de los 118 elementos, la leyenda a la derecha sin tapar nada, lantánidos y actínidos rotulados (La y Ac en el grupo 3) y el dibujo más grande.
- **Pendiente:** no se tocó `ionom-analytics.gs`.

---

## 13 de noviembre (23) — Cuatro guías descargables nuevas: tabla periódica, enlace, reacciones y ácidos y pH

El docente pidió generar todas las hojas de referencia que faltaban. Con las cinco anteriores, `guia.html` queda con **nueve guías**, ordenadas como el curso.

- **Tabla periódica y propiedades periódicas** (`guia-tabla-periodica.pdf`): esquema de la tabla con bloques s, p, d y f y metaloides, periodos, grupos y familias, tendencias con flechas (radio, energía de ionización, electronegatividad, carácter metálico) y datos para recordar.
- **Enlace químico** (`guia-enlace.pdf`): estructuras de Lewis dibujadas (H₂O, NH₃, CO₂, N₂), pasos para escribirlas, regla del octeto y excepciones, los tres tipos de enlace en una tabla, cómo decidir cuál se forma (ΔEN < 0,4 apolar, 0,4 a 1,7 polar, ≥ 1,7 iónico, igual que `enlace.html`) y polaridad.
- **Reacciones y balanceo** (`guia-reacciones.pdf`): los seis tipos, balanceo por tanteo y algebraico con ejemplos, serie de reactividad, reglas de solubilidad y redox con el método ion-electrón.
- **Ácidos, bases y pH** (`guia-acidos-bases.pdf`): escala de pH dibujada con ejemplos, teorías de Arrhenius y Brønsted-Lowry, cálculos de pH y pOH, fuertes y débiles, neutralización e indicadores.
- **`guia.html`:** nueve pestañas; cada una con «Descargar PDF» e «Imprimir». **`herramientas/generar-guias-pdf.js`** genera los nueve PDF (hay que volver a correrlo si cambia `guia.html`).
- **Portada, `README.md`, `sw.js`:** textos actualizados y caché `ionom-v102`.
- **Verificación:** los cuatro PDF nuevos se revisaron como imagen; imprimiendo en A4 y carta, horizontal y vertical, cada uno sale en 2 páginas, sin hojas en blanco. Pantalla probada en computador y celular, sin errores ni desbordes.
- **Pendiente:** no se tocó `ionom-analytics.gs`. Las guías de mol y masa molar y de funciones inorgánicas no se hicieron aparte (ya están dentro de estequiometría y nomenclatura).

---

## 13 de noviembre (22) — Diagrama de Moeller completo en la guía del átomo

El docente pidió el diagrama de Moeller completo y escogió el estilo clásico de círculos de colores con flecha en zigzag.

- **`guia.html` (hoja «El átomo»):** diagrama en vectores con los 19 subniveles de 1s a 7p: s en rojo, p en verde, d en azul y f en naranja; el máximo de electrones (2, 6, 10, 14) sobre cada círculo y una flecha en zigzag con más espacio entre filas: baja por cada diagonal, da la vuelta a la izquierda, regresa con línea punteada a media altura y da la vuelta a la derecha para empezar la siguiente. Al lado, cómo usarlo, la leyenda de colores y la regla n + l (por qué el 4s va antes del 3d).
- **`assets/guia-atomo.pdf`:** regenerado; sigue en 3 páginas, sin hojas en blanco (probado en A4 y carta, horizontal y vertical).
- **Pendiente:** no se tocó `ionom-analytics.gs`.

---

## 13 de noviembre (21) — Dibujos de los modelos atómicos en la guía del átomo

El docente pidió gráficas o dibujos de los modelos, mostrando las partículas.

- **`guia.html`:** sobre la tabla de historia hay cinco dibujos en vectores (Dalton, Thomson, Rutherford, Bohr con niveles y fotón, cuántico con nube y orbitales), con leyenda de colores: protón rojo (+), neutrón gris y electrón azul (−). En «Partes del átomo» hay un esquema con núcleo, electrones y corteza rotulados.
- **`assets/guia-atomo.pdf`:** regenerado; sigue en 3 páginas, sin hojas en blanco.
- **Pendiente:** no se tocó `ionom-analytics.gs`.

---

## 13 de noviembre (20) — Quinta guía descargable: el átomo

El docente pidió una hoja más con historia del modelo atómico, partes del átomo, configuración electrónica y los números A, Z y n.

- **`guia.html`:** pestaña nueva «⚛️ Átomo» (ahora es la primera y la que se abre por defecto): tabla de los cinco modelos (Dalton, Thomson, Rutherford, Bohr y cuántico) con qué propuso, evidencia y límite; partes del átomo (carga, masa, ubicación, descubrimiento); A, Z y n⁰ con fórmulas, tres ejemplos e isótopos, isóbaros e isótonos; reglas de Aufbau, Pauli y Hund, capacidad de los subniveles, orden de Moeller, ejemplos, excepciones y los cuatro números cuánticos.
- **`assets/guia-atomo.pdf` (nuevo):** 3 páginas A4 horizontal con logo y marca de agua. `herramientas/generar-guias-pdf.js` ahora genera los cinco PDF.
- **Portada, `README.md`, `sw.js`:** textos actualizados y caché `ionom-v101`.
- **Verificación:** el PDF se revisó página por página, sin hojas en blanco.
- **Pendiente:** no se tocó `ionom-analytics.gs`.

---

## 13 de noviembre (19) — Guías descargables en PDF: estequiometría, gases y soluciones

El docente pidió que lo de referencia no fuera una página web sino **hojas de repaso en PDF**, como la guía de nomenclatura, fusionadas en «Guía descargable» y con los logos y la marca de agua de IonNom.

- **`guia.html` (ahora «Guías descargables»):** cuatro hojas con pestañas y su propio botón «⬇️ Descargar PDF» y «🖨️ Imprimir»: **Nomenclatura** (la que ya existía, intacta), **Estequiometría** (con el diagrama de gramos de A → moles de A → moles de B → gramos de B de la imagen que usa el docente en clase, redibujado en vectores; fórmulas, reactivo limitante, rendimiento, pureza), **Leyes de los gases** (las siete leyes, cuál usar, despejes de PV = nRT) y **Soluciones** (unidades, preparar, diluir, mezclar, titular, solubilidad).
- **PDF nuevos en `assets/`:** `guia-estequiometria.pdf`, `guia-gases.pdf`, `guia-soluciones.pdf` y `guia-nomenclatura-inorganica.pdf` regenerado. Todos en A4 horizontal con el logo arriba, la marca de agua de IonNom en el centro y el pie «Nombra con precisión. Comprende la química.» (la marca de agua y el logo también salen al imprimir desde el navegador).
- **`herramientas/generar-guias-pdf.js` (nuevo):** genera los cuatro PDF desde `guia.html`. **Hay que volver a correrlo cada vez que cambie `guia.html`**, porque los PDF son archivos fijos.
- **Menú, portada y `README.md`:** «Guía descargable» pasa a «Guías descargables»; se quitó la página `referencia.html` que se había hecho antes (ya no existe).
- **`sw.js`:** caché `ionom-v100`.
- **Pendiente:** no se tocó `ionom-analytics.gs`. Si se cambia el texto de una guía, regenerar los PDF.

---

## 13 de noviembre (18) — Simulaciones nuevas, pantalla completa y fotos con cita APA

El docente pidió animaciones y simulaciones como las de BioNom, con pantalla completa y fotos de bancos libres.

- **`assets/pantalla.js` (nuevo):** botón «⛶ Pantalla completa» en todas las simulaciones (modelos del átomo, enlace, gases, pH, soluciones, Haber, cilindro, laboratorio de enlace, orbitales 3D y mapa de calor de la tabla periódica). Se sale con el botón o Esc.
- **`assets/simx.js` (nuevo), 5 simulaciones:** titulación ácido-base (`ph.html`), pila galvánica y rapidez de reacción con choques efectivos (`reacciones.html`), curva de calentamiento del agua (`modelos.html`), cristal de NaCl en 3D (`enlace.html`).
- **`assets/sim10.js`:** los canvas se agrandan en pantalla completa.
- **`assets/fotos.js` y `fotos-datos.js`, 9 fotos** de Wikimedia Commons con cita APA: halita, sulfato de cobre, titulación, repollo morado, sodio, pila de Daniell, tabla periódica con muestras, hielo seco y amoníaco.
- **`sw.js`:** caché `ionom-v98`.
- **Pendiente:** el año de las fotos quedó «s. f.» (Wikimedia limitó la consulta); falta una foto de ensayo a la llama. No se tocó `ionom-analytics.gs`.

---

## 13 de noviembre (17) — Explicaciones propias en las preguntas con datos

El docente pidió explicaciones propias para las preguntas tipo Saber del juego. Las 13 preguntas con tabla o gráfica ya las tienen (`assets/docente-datos.js`, campo `exp`): leen los datos, hacen la cuenta y explican por qué se descarta cada idea equivocada. `juego.html` y el generador las usan cuando existen. `sw.js`: `ionom-v97`. Pendiente: las demás (unas 860) siguen con la explicación general; se escribirán por tema.

---

## 13 de noviembre (16) — Preguntas de indagación con tablas y gráficas

El docente pidió seguir con las preguntas de indagación que traen sus datos en una tabla o una gráfica, como la prueba Saber 11, también en el juego.

- **`assets/saber-icfes.js`:** nuevo dibujo de **gráficas** (líneas o barras) en SVG; una pregunta con `tabla` o `graf` se dibuja sola en la evaluación y en el juego.
- **`assets/docente-datos.js`:** 13 preguntas nuevas con datos: ley de Boyle (gráfica), Charles (tabla), solubilidad del nitrato de potasio (gráfica) y de la sal (tabla), pH de ácidos y bases (tabla), pH de la lluvia (gráfica), proceso Haber, magnesio y óxido (gráfica), limitante, radio atómico, enlace metálico, experimento de Rutherford y punto de ebullición según la altitud. Opciones del mismo largo.
- **`juego.html`, `assets/saber-juego.js`:** el generador las pasa al juego, que las muestra sobre la pregunta.
- **`sw.js`:** caché `ionom-v96`.
- **Verificación:** con Playwright, evaluación y juego muestran bien la tabla y la gráfica, sin errores.

---

## 12 de noviembre (15) — Estequiometría ya tiene su partida en el Juego

El docente pidió que Estequiometría también esté en el juego (antes solo se jugaba «Química en la industria» y «Mol y masa molar»).

- **`banco.js`:** nuevo `BANCO_ESTEQUIOMETRIA` con 46 preguntas: 40 de opción múltiple y 6 para calcular. Temas: razón molar, masa molar y moles, ruta gramos → moles → razón molar → gramos, factores de conversión, reactivo limitante (y cuánto sobra), rendimiento y pureza, y conservación de la masa. Siguen `estequiometria.html`: usan factores de conversión y no regla de tres. Opciones del mismo largo; ninguna correcta delatada por su tamaño.
- **`juego.html`:** nuevo botón «Estequiometría» en el nivel de Cálculos (n = 4), con su consejo de estudio, y partida de 20 preguntas con los formatos interactivos. Cada partida suma además 5 preguntas tipo Saber del tema (43 en el banco, 2 oficiales del Icfes).
- **`sw.js`:** caché `ionom-v95` (cambió `banco.js`).
- **Verificación:** con Playwright, la partida arranca con 20 preguntas (opción múltiple, calcular y Saber) y sin errores; capturas revisadas.
- **Pendiente:** el panel docente ya tenía el tema «Estequiometría»; no se tocó. `ionom-analytics.gs` no cambia.

---

## 12 de noviembre (14) — Las preguntas tipo Saber también entran al juego

El docente pidió que las preguntas tipo Saber 11 (con situación, tabla o figura) también salgan en el **juego**, en el tema que les corresponde.

- **`assets/saber-juego.js` (nuevo)** y **`herramientas/generar-saber-juego.js` (nuevo):** el generador pasa las preguntas Saber de `docente-datos.js` a un archivo compacto (861 preguntas) para no cargar todo el banco docente en el celular. Si cambian las preguntas del panel docente, hay que volver a correr `node herramientas/generar-saber-juego.js`.
- **`juego.html`:** en 20 de los 22 modos de juego (todos los temas; «todos» y «cazar errores» quedan igual a propósito), 5 de las 20 preguntas de cada partida son tipo Saber de ese tema, incluidas las oficiales del cuadernillo con su figura y crédito. Muestran la situación, tienen 120 s. (Estequiometría, que entonces no tenía partida, se agregó en la entrada (15).)
- **`sw.js`:** caché `ionom-v94` y `saber-juego.js` en la lista.
- **Verificación:** con Playwright, cada modo arranca con 5 preguntas Saber y sin errores; se revisaron capturas de una pregunta de indagación y de una oficial.
- **Pendiente:** explicaciones y pistas del juego son generales por competencia; falta escribir explicaciones propias.

---

## 12 de noviembre (13) — Contexto en todas las preguntas tipo Saber, más indagación y competencias bien marcadas

El docente pidió continuar con lo que había quedado pendiente de la revisión con el modelo basado en evidencias del Icfes: subir la proporción de preguntas de **indagación** (la competencia con más preguntas en la prueba Saber 11 y la más débil en los tres sitios) y, en IonNom, darle **contexto** a las preguntas tipo Saber que no lo tenían.

- **Contexto para 718 preguntas** que no lo tenían (todas las tipo Saber de IonNom ahora tienen uno). Es una situación corta y real, casi siempre colombiana, que no revela la respuesta. Ejemplos: la cal viva de las fincas, el óxido rojo de los ladrillos de Bogotá, la siderúrgica de Paz de Río, las salinas de Manaure, el ácido muriático de las ferreterías, la planta de fertilizantes de Cartagena.
  - En `assets/docente-datos.js` se llenó el campo `ctx`.
  - En `banco.js` (preguntas de átomo, enlace, pH, gases, soluciones, modelos e industria) se agregó el campo `ctx`. El panel docente lo muestra; el juego lo ignora.
- **Etiquetas de competencia corregidas:** de 102 preguntas marcadas como «indagación», 90 pedían un nombre, una fórmula, unos coeficientes o una masa molar (son de **uso comprensivo**), 9 pedían explicar (son de **explicación**) y solo 3 eran de verdad indagación. Por eso la cifra de indagación de la sesión (11) estaba inflada.
- **166 preguntas nuevas de indagación** (98 en una primera parte y 68 en una segunda), para que **cada tema tenga al menos 8**, contando las oficiales del Icfes. Piden analizar datos, controlar variables, evaluar predicciones y reconocer cómo se construyó un conocimiento (Lavoisier, Priestley, Proust, Rutherford, Thomson, Boyle, Mendeléiev, Haber).
- **Resultado:** 1010 preguntas tipo Saber, todas con contexto: uso 45 %, explicación 37 %, indagación **18 %** (antes de esta sesión, la real era menos del 2 %). Ninguna tiene la correcta delatada por su largo.
- **`assets/docente-app.js`:** un título de sección («Cazar errores», «Preguntas abiertas») ya no queda solo al final de una hoja: pasa a la siguiente junto a su contenido.
- **`sw.js`:** caché `ionom-v93` (cambió `banco.js`).
- **Verificación:** con Playwright, evaluaciones de nomenclatura y de balanceo, reacciones y mol: los contextos salen en cada pregunta, la doble columna queda llena, la matriz coincide con el examen y el juego carga sin errores.

---

## 12 de noviembre (12) — Doble columna sin huecos y distractores al estilo del Icfes

El docente pidió dos cosas: (1) que las evaluaciones impresas no dejen columnas en blanco y aprovechen la doble columna aunque algunas preguntas sean largas por sus tablas, figuras o contexto; y (2) revisar los bancos de preguntas tipo Saber y los del juego con el modelo basado en evidencias del Icfes, inspirado en el cuadernillo de 2026, y hacer los ajustes necesarios.

- **`saber-icfes.js` (el mismo archivo en los tres sitios): nuevo acomodador de doble columna** (`colocar`). Antes las preguntas iban en columnas CSS «balanceadas» (ChromaNom, BioNom) o en filas de a dos (IonNom), y una pregunta larga dejaba la otra columna vacía. Ahora:
  - hay dos columnas reales que se llenan en orden: primero la izquierda hasta abajo y luego la derecha;
  - si una pregunta no cabe en el hueco que queda, se adelanta una de las siguientes (hasta 6 más allá) que sí quepa, y al final se **renumeran** todas en el orden en que quedaron;
  - la clave, la matriz de competencias y la hoja de respuestas usan ese mismo orden final (verificado: el número de cada pregunta coincide en examen, clave y matriz);
  - una pregunta con figura que no cabe por poco reduce su figura (hasta el 60 %);
  - una pregunta muy alta (tabla ancha o figura grande) se prueba a todo el ancho, donde ocupa menos alto;
  - al terminar las preguntas, las dos columnas quedan parejas, y si sobra una sola pregunta va a todo el ancho;
  - las tablas del cuadernillo se ajustan al ancho de la columna;
  - la matriz de competencias se parte en tablas de 8 filas para que no se salga de la hoja.
- **`assets/docente-app.js`:** la evaluación usa el acomodador y se renumera; las preguntas con figura ya no van a todo el ancho; el paso final que «sube» contenido a la hoja anterior ahora sube las preguntas de una en una y no el bloque de dos columnas entero; la cita de créditos va justo después de las preguntas tipo Saber (antes quedaba sola en una hoja).
- **Revisión de los bancos con el modelo del Icfes.** El defecto más grave que se encontró fue que en muchas preguntas la opción correcta era la más larga y detallada, y las incorrectas eran cortas y obviamente falsas («No pasa nada», «Producen nieve»). Así el estudiante acierta por descarte sin usar la competencia. Las preguntas del Icfes tienen opciones del mismo largo y estructura, y cada distractor representa un error típico de razonamiento. Se reescribieron **los distractores de 595 preguntas** (no se tocó la correcta ni el enunciado) para que sean del mismo largo, tengan la misma forma («Sí, porque…/No, porque…», «Porque…») y sean errores plausibles:

| | Saber: correcta delatada por su largo (antes → ahora) | Juego (antes → ahora) |
|---|---|---|
| BioNom | 242 → 0 | 94 → 0 |
| ChromaNom | 96 → 0 | 53 → 0 |
| IonNom | 63 → 0 (más 6 que vienen del juego) | 41 → 0 |

  Se midió con la regla: la correcta es la más larga, mide más de 1,6 veces el promedio de las otras y les saca más de 15 caracteres. El cambio se aplicó directamente en los archivos de datos, buscando cada pregunta por su contexto y su enunciado.
- **`assets/docente-datos.js`** (63 preguntas tipo Saber) y **`banco.js`** (41 preguntas de átomo, enlace, pH, soluciones y demás, que usan el juego y el panel docente).
- **`sw.js`:** caché `ionom-v92` (cambió `banco.js`, que se sirve desde la caché).
- **Verificación:** con Playwright, evaluaciones de 14 y 16 preguntas: las columnas quedan llenas, la última pregunta suelta va a todo el ancho y la numeración coincide con la matriz. El juego y el panel docente cargan sin errores.
- **Pendiente:** 718 preguntas tipo Saber de IonNom siguen sin contexto (situación, tabla o gráfica). Son sobre todo preguntas de nomenclatura y de conceptos, y en la prueba real todas tienen contexto. Por eso las evaluaciones prefieren las que sí lo tienen. Escribirles contexto es el siguiente paso grande para acercar IonNom al modelo del Icfes.

---

## 12 de noviembre (11) — Preguntas oficiales del Icfes y modelo basado en evidencias en las evaluaciones

El docente compartió el *Cuadernillo de preguntas Saber 11.º, Prueba Ciencias Naturales* del Icfes (2026) y pidió usar sus preguntas, dando el crédito, y revisar que las preguntas del juego y sobre todo de las herramientas docentes sigan el **modelo basado en evidencias** de la prueba (competencias → afirmaciones → evidencias) para fortalecer esas competencias. También pidió decidir qué pregunta va en cuál de los tres sitios.

**Diagnóstico de los bancos tipo Saber (antes de esta sesión).** La competencia de cada pregunta se tomó de su marca (`c`) o, si no la tenía, se estimó por el enunciado:

| Competencia (Icfes) | En la prueba real (cuadernillo 2026) | ChromaNom | IonNom | BioNom |
|---|---|---|---|---|
| Uso comprensivo del conocimiento científico | 26 % | 60 % | 39 % | 68 % |
| Explicación de fenómenos | 36 % | 28 % | 46 % | 29 % |
| Indagación | 38 % | 12 % → 19 % con las nuevas | 14 % | 3 % → 7 % con las nuevas |
| Preguntas sin contexto (situación, tabla o gráfica) | 0 | 0 | 610 de 736 | 0 |

La indagación (analizar datos, controlar variables, evaluar predicciones, sacar conclusiones) es la competencia con más preguntas en la prueba y la más débil en los tres sitios.

- **Reparto de las 50 preguntas del cuadernillo:** biología → BioNom (17: preguntas 5, 10, 11, 12, 16, 20, 21, 24, 34, 36, 38, 39, 40, 44, 46, 47 y 49); química general e inorgánica → IonNom (17: 1, 2, 3, 4, 7, 8, 15, 18, 19, 23, 27, 28, 29, 30, 33, 35 y 37); química orgánica → ChromaNom (2: 41 y 50). Las 14 de física (6, 9, 13, 14, 17, 22, 25, 26, 31, 32, 42, 43, 45 y 48) no se usan porque ningún sitio trabaja física.
- **`saber-icfes.js` (nuevo, el mismo archivo en los tres sitios):** guarda las tres competencias de la prueba y sus afirmaciones oficiales; da la competencia y la afirmación de cada pregunta (la que trae marcada o, si no la trae, una estimada por el tipo de tarea del enunciado); escoge las preguntas de la evaluación **repartidas entre las tres competencias** (meta cercana al cuadernillo: 30 % uso, 35 % explicación, 35 % indagación), con prioridad a las preguntas oficiales (hasta la mitad de la prueba) y a las que tienen contexto; y arma las figuras, el crédito de cada pregunta oficial y la **matriz de la evaluación** (número, competencia, afirmación, componente y fuente, sin respuestas).
- **Preguntas oficiales:** se copian **sin cambios** (los términos de uso del Icfes prohíben transformarlas), con sus opciones en el orden original (no se barajan, así coinciden con la clave del Icfes), las figuras recortadas del cuadernillo y debajo el crédito «Pregunta N del Cuadernillo de preguntas Saber 11.º, Prueba Ciencias Naturales (Icfes, 2026). Uso académico, sin ánimo de lucro.». Al final de la evaluación sale la cita completa del cuadernillo.
- **Figuras:** cada imagen lleva su tamaño fijo; sin eso, la paginación medía la hoja antes de que la imagen cargara y la figura se salía de la hoja (se vio en la prueba con Playwright).
- **`assets/icfes-datos.js` (nuevo):** 17 preguntas oficiales repartidas en los temas: Teorías, leyes, modelos y datos (1, 4, 7, 29, 33, 35); Soluciones (3, 8, 15, 28, 30); Estequiometría (2, 18); Tipos de reacción (37); Configuración electrónica (23); Gases (27); Átomo (19). Cada una con explicación de IonNom (no es del Icfes). Imágenes en `assets/icfes/`.
- **`assets/docente-app.js` y `docente.html`:** la evaluación usa la selección por competencias y prefiere las preguntas con contexto. Casillas nuevas en «4 · Evaluación»: **«Priorizar preguntas oficiales del Icfes»** (marcada) y **«Anexar matriz de competencias»** (sin marcar; hoja aparte, sin respuestas, porque los estudiantes también entran a esa página).
- **`sw.js`:** caché `ionom-v91` y los dos archivos nuevos en la lista.
- **Verificación:** con Playwright, evaluación de Modelos, Soluciones, Estequiometría y Gases con 12 preguntas: salen las oficiales con figuras y crédito, la matriz con competencia, afirmación y componente, y sin errores.
- **Pendiente:** 610 de las 736 preguntas tipo Saber de IonNom no tienen contexto (son preguntas directas, sobre todo de nomenclatura), y en la prueba real todas lo tienen. Por eso, mientras no se escriban más preguntas con situación, tabla o gráfica, las evaluaciones de IonNom saldrán con muchas preguntas oficiales. Las preguntas del juego (nomenclatura) no se cambiaron.

---

## 10 de noviembre (10) — `extras.js` y `retos.js` compartidos con BioNom

Para completar el panel docente de BioNom, que ahora usa los mismos archivos:

- **`assets/extras.js`** (igual en los tres sitios): acepta un ajuste opcional, `window.EXTRAS_SITIO`, que BioNom usa para hablar de biología y hacer el criptograma con codones del código genético. **En IonNom no cambia nada.** En las actividades del taller, el ícono del ahorcado pasó de 🪢 a 🔠.
- **`assets/retos.js`:** nueva función `RETOS.armarCrucigrama` (crucigrama con semilla) e ícono 🔠 en el ahorcado del módulo.
- **`sw.js`:** la caché pasa a `ionom-v90`.
- **Verificación:** con Playwright, el panel docente sigue con «Criptograma químico» y «El detective químico» y no hay errores.

---

## 10 de noviembre (9) — Juego: 3 intentos con pistas progresivas; crucigrama y sopa de letras

El docente pidió revisar que en todos los juegos el estudiante tenga siempre 3 oportunidades para responder, con pistas progresivas que no regalen la respuesta, y que al final se explique completa la respuesta correcta. También pidió integrar como secciones del juego crucigramas de 10 palabras, sopas de letras de 10 palabras y ahorcado, con un tiempo proporcional a la dificultad de cada uno. Aclaró que cada sitio es único: los bancos de preguntas y de palabras no se comparten, solo las reglas.

- **`assets/retos.js`** (archivo nuevo; el mismo en ChromaNom, IonNom —en `assets/`— y BioNom). Solo tiene **reglas**, ningún banco: cada sitio le pasa su propio banco de preguntas y su propio `BANCO_AHORCADO`.
  - **3 intentos con pistas progresivas:**
    - 1.er error → la opción elegida se descarta y aparece la pista 1, la más general (qué revisar).
    - 2.º error → pista 2, más concreta.
    - 3.er error → se cierra la pregunta con la explicación completa y la lista de intentos equivocados.
    - Las pistas salen de las pistas propias de la pregunta o de su explicación, con las palabras de la respuesta tapadas (▢▢▢). Se verifica que ninguna pista contenga la respuesta.
    - Puntos: 100 % al primer intento, 50 % al segundo y 20 % al tercero.
    - Excepción: si la pregunta solo tiene 2 o 3 opciones, hay un intento menos que opciones (en verdadero/falso, un solo intento), porque si no, la última oportunidad sería regalada.
  - **Crucigrama de 10 palabras:** palabras conectadas, sin palabras «accidentales» en los cruces. Hay 3 comprobaciones: después de cada una, las palabras que siguen mal reciben la pista siguiente, y en la segunda se regala su primera letra. Puntos por palabra: 10, 5 y 2. Al final, cada palabra con su explicación (sus 3 pistas).
  - **Sopa de letras de 10 palabras:** el estudiante no ve la palabra sino su pista y el número de letras. Puede pedir hasta 3 pistas por palabra; con la tercera parpadea la primera letra en la cuadrícula. Se marca arrastrando o tocando la primera y la última letra. Cada palabra aparece una sola vez.
  - **Tiempo proporcional a la dificultad**, con su propio reloj:
    - Crucigrama: 22 s por palabra + 4 s por letra (entre 4 y 15 min; con 10 palabras, unos 9 a 11 min).
    - Sopa: 20 s por palabra + 2 s por letra + el tamaño de la cuadrícula (unos 6 a 8 min).
    - Ahorcado: 45 s + 10 s por letra distinta + 2 s por letra (entre 1:15 y 4 min por palabra).
  - Los paneles del crucigrama y de la sopa tienen fondo claro propio, así que se leen bien también en modo oscuro.
- **`juego.html`:**
  - Todos los tipos de pregunta tienen ahora hasta 3 intentos con pista. Antes, nombre por opción múltiple, estado de oxidación, nombre → fórmula, equilibrio de cargas, clasificar reacción y mol/masa molar daban un solo intento; la cadena de reactividad y el balanceo daban 2. Los que ya tenían 3 solo decían «intenta de nuevo»; ahora dan pista.
  - Las pistas de cada tipo:
    - **Compuestos:** la pista 1 es la regla del grupo («Recuerda: [anión]-uro de [metal]…») y la 2 sale de la explicación del compuesto con el nombre tapado.
    - **Tabla periódica:** periodo y grupo, y luego la categoría o la configuración.
    - **Átomo y enlace:** la explicación con la respuesta tapada; en «ordenar» y «relacionar» se tapan también los elementos, para no dar el orden.
    - **Balanceo:** cómo contar átomos y, en la 2, solo el primer coeficiente.
    - **Mol:** la masa molar y cómo armar el factor de conversión.
  - El botón «💡 Pista» de la escritura mostraba la explicación con el nombre completo. Ahora muestra la pista que corresponde al intento.
  - Nuevos grupos **🔤 Crucigrama** y **🔍 Sopa de letras**: 2 rondas de 10 palabras del banco del Ahorcado de IonNom (`assets/bancos-extra.js`), sin repetir palabras entre rondas. Son 20 palabras = 20 preguntas y 40 puntos, como las demás partidas. Lo que se envía a la hoja también cuenta 20.
  - El **Ahorcado** ya no tiene 3 minutos fijos: el tiempo depende de la palabra.
- **`sw.js`:** la caché pasa a `ionom-v89`, con `assets/retos.js` en la lista y servido «red primero». No se tocó `banco.js`.
- **Verificación:** con Playwright se fallaron preguntas de todos los tipos de los grupos y aparecieron la pista 1, la 2 y la explicación final. Las dos rondas de crucigrama terminan en «de 20 preguntas», y no hay errores en `juego.html` ni en `docente.html`.
- **Pendiente:** ningún paso manual; no se tocó `ionom-analytics.gs`.

---

## 6 de noviembre (8) — Detective: botón «Revelar pista» en vez de la lupa fija

A pedido del docente, la lupa 🔍 ya no va fija al final de cada párrafo.

- **Se quitó el nivel «Con pistas».** Las hojas quedan con «Guiado» y «Sin pistas».
- **Modo clase, botón «🔍 Revelar pista»:**
  - Lleva la vista al siguiente párrafo con errores pendientes, lo resalta y le pone encima una lupa que dice «Aquí hay N errores».
  - La lupa se actualiza a medida que encuentran los errores.
  - La barra cuenta las «Pistas usadas».
- `assets/extras.js` es el mismo archivo que en ChromaNom. Los estilos están en `docente.html`.
- **`sw.js`:** la caché pasa a `ionom-v88`.
- **Verificación:** probado sin errores; las 21 historias caben en los dos niveles.

---

## 6 de noviembre (7) — Detective químico: párrafos por tema y tres niveles de apoyo

Le dieron al docente esta retroalimentación sobre «El juego de las cartas de elementos»: varias tendencias periódicas juntas en un párrafo corto saturan al estudiante, y las afirmaciones densas cuestan de identificar sin guía.

- **Historias** (`assets/bancos-extra.js`):
  - Frases de transición que anuncian el tema de cada párrafo, con un máximo de 3 puntos dudosos por párrafo.
  - «El juego de las cartas de elementos» se reescribió: radio atómico, energía de ionización y electronegatividad van en párrafos distintos, y cada tendencia lleva su causa.
- **`assets/extras.js`** (igual que en ChromaNom):
  - La historia se muestra en párrafos.
  - Nuevo «Nivel de apoyo»:
    - **guiado:** frases sospechosas numeradas; el estudiante marca ✔ o ✘ en una tabla y corrige;
    - **con pistas:** 🔍 errores por párrafo;
    - **experto:** solo el total.
  - Tabla de respuestas con «¿Por qué estaba mal?».
  - En el modo clase, al tocar una frase correcta aparece «✔ Esta frase está bien».
  - El ajuste de tamaño de la hoja ya no deja la tabla encima del pie.
- **`docente.html`:** estilos nuevos.
- **`sw.js`:** la caché pasa a `ionom-v87`.
- **Verificación:** las 21 historias × 3 niveles × hoja y clave caben, el modo clase funciona y no hay errores.

---

## 6 de noviembre (6) — Material para 20 versiones distintas y actividades dentro de los talleres

El docente pidió dos cosas:
1. Material suficiente para **hasta 20 versiones distintas**.
2. Que las actividades puedan ir **dentro de los talleres**.

`assets/extras.js` y `assets/sopa.js` son los mismos archivos que en ChromaNom.

- **20 versiones distintas:**
  - **Reparto «en mazo»:** las palabras y frases del Ahorcado, la Sopa y el Criptograma se reparten como un mazo de cartas, así que 20 versiones usan todo el banco por igual y no repiten el mismo grupo de palabras.
  - **Mapa conceptual:** ninguna combinación de recuadros en blanco se repite mientras queden combinaciones.
  - **Detective:**
    - Nueva opción «🎲 Todas las de …»: cada versión trae otra historia del grupo.
    - Cuando una historia se repite, sale con otros errores.
- **Actividades dentro del taller:**
  - En «Trabajo práctico» hay casillas nuevas: Sopa de letras, Ahorcado con pistas, Criptograma, Mapa conceptual con huecos y Detective químico. Cada una muestra cuánto material hay para los temas marcados.
  - Las actividades van después de los ejercicios, en el taller y en la guía. Cada versión trae otras palabras, frases, historia y mapa.
  - Código:
    - `bloquesActividades()` en `assets/docente-app.js`;
    - `window.ACT_TALLER` en `assets/extras.js`;
    - `ACT_TEMA_GRUPO` en `assets/bancos-extra.js`, para el tema «Cadena de reactividad».
- **`sw.js`:** la caché pasa a `ionom-v86`.
- **Verificación:** probado con Playwright, sin errores:
  - taller de «Ácidos, bases y pH» con 20 versiones y las cinco actividades;
  - las 20 versiones son distintas;
  - ninguna de las 142 hojas se desborda.

---

## 6 de noviembre (5) — Al menos 20 palabras por categoría y más historias del Detective

El docente pidió al menos 20 palabras por categoría en la sopa de letras, y lo mismo para las demás actividades. El Ahorcado, la Sopa y el Criptograma usan el mismo banco (`assets/bancos-extra.js`), así que se ampliaron los tres a la vez.

- **`BANCO_AHORCADO`:**
  - Pasó de 89 a **162 palabras**, todas con 3 pistas tomadas de las páginas del sitio.
  - Palabras por categoría:

    | Categoría | Antes | Ahora |
    |---|---|---|
    | Átomo y configuración | 16 | 22 |
    | Tabla periódica y enlace | 13 | 22 |
    | Nomenclatura | 10 | 24 |
    | Reacciones y pH | 15 | 25 |
    | Mol, estequiometría e industria | 13 | 23 |
    | Gases y soluciones | 16 | 24 |
    | Modelos y datos | 6 | 22 |

  - En la sopa, cada categoría tiene ahora 21 palabras o más.
  - El Criptograma tiene ahora 21 frases o más por categoría.
- **`DETECTIVE`:**
  - 2 historias nuevas por categoría: **21 historias**, 3 por categoría.
  - Cada categoría reúne 24 puntos dudosos.
- **`sw.js`:** la caché pasa a `ionom-v85`.
- **Verificación:** probado con Playwright, sin errores:
  - los conteos en las pestañas;
  - una sopa por cada categoría;
  - las 21 historias en una hoja carta, en la hoja y en la clave;
  - el modo clase;
  - el Juego.

---

## 6 de noviembre (4) — Criptograma químico, mapa conceptual con huecos y detective químico

Tres actividades nuevas que propuso el docente, en el generador docente (`assets/extras.js`, el mismo archivo que en ChromaNom). Todas tienen hoja carta con logo, Nombre / Curso / Fecha, marca de agua y pie, versiones con clave y modo clase con pantalla completa.

- **🔐 Criptograma químico.**
  - La frase es una palabra clave con su definición, tomada del banco del Ahorcado.
  - Cada letra se cifra con el número atómico Z de un elemento cuyo símbolo empieza por esa letra; el estudiante descifra con la tabla periódica.
  - Opciones: rango de Z, letras con número fijo o variable, y frases por hoja.
  - Modo clase: casillas para escribir, «Comprobar», «Revelar una letra» y «Revelar la frase».
- **🗺️ Mapa conceptual con huecos.**
  - Usa el esquema de cada uno de los 23 temas, con sus conectores.
  - Se eligen los recuadros en blanco (ramas, ejemplos, la mitad o casi todos), con o sin banco de palabras.
  - Modo clase: se toca un concepto y luego su recuadro.
- **🕵️ El detective químico.**
  - 7 historias nuevas en `assets/bancos-extra.js` (`DETECTIVE`), una por grupo de temas:
    - la maqueta del átomo;
    - un recorrido por la tabla periódica;
    - las etiquetas del laboratorio;
    - la práctica de reacciones y pH;
    - la visita a la cementera;
    - de Cartagena a Bogotá;
    - el experimento de la jeringa.
  - Cada historia tiene 8 puntos dudosos; cada versión elige al azar cuáles salen con error (3 a 6).
  - Hoja con líneas para corregir; clave con los errores y sus correcciones.
  - Modo clase: se toca cada frase con error y aparece la corrección.

**Verificación (Playwright):**
- las hojas cumplen la marca del sitio y caben en la carta, y los 23 mapas caben;
- los tres modos clase funcionan;
- en un celular en horizontal quedan en pantalla completa y piden el giro;
- no hubo errores en consola.

`sw.js` pasa a `ionom-v84` (`assets/extras.js` se sirve primero desde internet).

---

## 6 de noviembre (3) — Marca del sitio en todas las hojas y pantalla completa en todo lo que se proyecta

Reglas que pidió el docente para todo el material:
1. lo que se proyecta debe tener pantalla completa;
2. toda hoja impresa debe llevar arriba el logo con los espacios de Nombre y Curso, y el logo como marca de agua.

**Hojas del Ahorcado y de la Sopa** (`assets/ahorcado.js`, `assets/sopa.js`):
- Llevan el encabezado de los crucigramas: logo de IonNom, título, instrucciones, versión y la línea de Nombre, Curso y Fecha.
- Llevan la marca de agua y el pie con la licencia.
- Si una hoja no cabe en la carta, se ajusta sola (letra de las pistas y casillas de la sopa).
- La marca del sitio queda en `assets/bancos-extra.js` (`HOJA_SITIO`).

**Pantalla completa:**
- **Crucigrama «Resolver»** (`assets/crucigrama.js`): botón nuevo. No borra lo escrito y gira a horizontal, con la cuadrícula a la izquierda y las pistas a la derecha.
- **Ahorcado del Juego** (`juego.html`): botón nuevo que pone en pantalla completa toda la página del Juego.
  - Se mantiene al pasar de palabra.
  - En horizontal oculta la barra del sitio, las tarjetas de estadísticas y la instrucción.
  - Deja el marcador (puntos, racha y tiempo) arriba y el tablero en dos columnas.
- **Ahorcado y Sopa del generador:**
  - Respaldo para iPhone: el tablero se fija a toda la ventana.
  - Corregido: al entrar uno en pantalla completa, el otro liberaba el giro a horizontal.

**Verificación (Playwright):**
- Las hojas tienen logo, marca de agua, pie y línea de nombre, y ninguna se pasa de la carta.
- En un celular en horizontal (844 × 390), el crucigrama, el ahorcado, la sopa y el Juego quedan en pantalla completa, piden el giro y todo queda a la vista.
- No hubo errores en consola.

`sw.js` pasa a `ionom-v83`.

---

## 6 de noviembre (2) — Sopa de letras en el generador docente (para imprimir y modo clase)

El docente eligió la sopa de letras como nueva actividad imprimible y en pantalla.

**Pestaña nueva «🔍 Sopa de letras» en `docente.html`** (código en `assets/sopa.js`, el mismo archivo que en ChromaNom).
- **Palabras:** usa las 89 palabras del Ahorcado con sus pistas, por grupos de temas. Los grupos y el nombre del sitio quedan ahora en `assets/bancos-extra.js` (`AHORCADO_GRUPOS`).
- **Opciones:** de 4 a 16 palabras; cuadrícula de 12, 14 o 16; direcciones fáciles (→ ↓), medias (también diagonales) o difíciles (también al revés); el estudiante ve la pista 1, 2 o 3, o la lista de palabras.
- **Verificación:** cada palabra aparece una sola vez en la cuadrícula; si no, la sopa se vuelve a armar.
- **Hoja carta:** pistas numeradas con el número de letras y una línea para la respuesta. Hasta 40 versiones, con clave a color y código para volver a generarlas.
- **Modo clase:**
  - se marca arrastrando, o tocando la primera y la última letra;
  - al acertar, la palabra se pinta y su pista queda con ✓;
  - marcador de dos equipos, «Revelar todas» y «Otra sopa»;
  - pantalla completa que gira el celular a horizontal.

**Verificación (Playwright):**
- en las tres dificultades, cada palabra aparece exactamente una vez;
- la hoja cabe en una página carta;
- el modo clase reconoce el arrastre y los dos toques;
- en un celular en horizontal todo cabe;
- no hubo errores en consola.

`sw.js` pasa a `ionom-v82`: `assets/sopa.js` se sirve primero desde internet.

---

## 6 de noviembre — Ahorcado en pantalla completa: gira a horizontal en el celular

El docente pidió que la pantalla completa del modo clase del Ahorcado girara sola a horizontal en el celular.

**Fallo corregido.** La pantalla completa se aplicaba al tablero, que se redibuja con cada letra, así que se cerraba sola al tocar la primera letra. Ahora se aplica a `#ah-play`, que no se redibuja, y se mantiene durante toda la partida.

**Cambios en `assets/ahorcado.js` y `docente.html`:**
- Al entrar en pantalla completa se pide el giro a horizontal (`screen.orientation.lock`); al salir, el giro se libera.
- El botón cambia a «✕ Salir de pantalla completa».
- En un celular en horizontal se usan dos columnas: a la izquierda el muñeco, los fallos y las pistas; a la derecha la palabra, el teclado y los botones. Todo cabe sin desplazarse.

**Verificación.** Probado con Playwright simulando un celular en horizontal (844 × 390): la pantalla completa se mantuvo mientras se jugaba, se pidió el giro y se liberó al salir, y no hubo errores. `sw.js` pasa a `ionom-v81`.

**Límite.** En iPhone, Safari no permite poner en pantalla completa ni girar una parte de la página: ahí hay que girar el celular a mano. En Android (Chrome) y en tabletas sí funciona.

---

## 5 de noviembre (10) — Corrección: el Ahorcado mostraba «0 palabras» en el celular

El docente reportó que en su celular la pestaña Ahorcado del generador decía «0 palabras» en todos los temas.

**Causa.** Las palabras del Ahorcado, y también las de Cazar errores, estaban dentro de `banco.js`. `sw.js` guarda ese archivo con prioridad en la caché, así que un celular que ya tenía el sitio siguió usando la copia vieja, sin esas palabras, hasta que alguien tocara «Actualizar» en el aviso de nueva versión. Lo mismo les habría pasado a los estudiantes en el Juego, en los grupos Ahorcado y Cazar errores.

**Corrección.**
- **Archivo propio:** los dos bancos pasan a `assets/bancos-extra.js`, que cargan `juego.html` y `docente.html`. `sw.js` sirve ese archivo y `assets/ahorcado.js` **primero desde internet**, y solo usa la caché si no hay conexión. Como el archivo es nuevo, los celulares lo descargan de inmediato aunque no toquen «Actualizar», y los cambios futuros también llegan solos.
- **Aviso:** si por algún motivo no cargan las palabras, la pestaña lo dice con claridad en lugar de mostrar «0 palabras».
- `sw.js` pasa a `ionom-v80`.

---

## 5 de noviembre (9) — Ahorcado en el generador docente: para imprimir y para proyectar en clase

El docente pidió llevar el Ahorcado del Juego al generador docente, en versión para imprimir y en versión interactiva para la clase.

**Pestaña nueva «🪢 Ahorcado» en `docente.html`** (código en `assets/ahorcado.js`). Usa el mismo banco del Juego (`BANCO_AHORCADO`, 89 palabras con 3 pistas cada una).

1. **Temas:** siete grupos que se pueden combinar:
   - átomo y configuración;
   - tabla periódica y enlace;
   - nomenclatura;
   - reacciones y pH;
   - mol, estequiometría e industria;
   - gases y soluciones;
   - modelos y datos.
2. **Hoja para imprimir (carta):**
   - De 4 a 16 palabras, 8 por hoja.
   - Cada palabra trae un patíbulo para ir dibujando, el número de letras, las pistas (3, 2 o 1, a elección del docente), una casilla por letra y el abecedario para tachar.
   - Instrucciones en la primera hoja y espacio para nombre y curso.
   - Hasta 40 versiones paralelas con otras palabras, y hojas de clave al final con el código para volver a generarlas otro día.
3. **Modo clase (📽️), para proyectar:**
   - Patíbulo y letras grandes.
   - Teclado en pantalla; en el computador también funciona el teclado físico.
   - Botones para mostrar la pista siguiente, revelar la palabra y pasar a la siguiente.
   - Marcador de dos equipos y botón de pantalla completa.
   - Al terminar la lista se puede empezar otra ronda con palabras nuevas.

**Verificación (Playwright):**
- la hoja cabe en una página carta;
- la clave muestra las palabras;
- el modo clase respondió al teclado, a las pistas, a revelar, a siguiente y al marcador;
- 2 versiones de 12 palabras se imprimieron en 8 páginas (4 de hojas y 4 de clave);
- no hubo errores en consola.

`sw.js` pasa a `ionom-v79`.

---

## 5 de noviembre (8) — Ahorcado con 3 pistas en el Juego

Los estudiantes pidieron un tipo de juego especial: el ahorcado con 3 pistas.

**Grupo nuevo «🪢 Ahorcado» (`juego.html`).**
- Cada partida tiene 20 palabras al azar de un banco de 89 palabras clave del sitio (`BANCO_AHORCADO` en `banco.js`). Cubre el átomo, la configuración, la tabla periódica, el enlace, la nomenclatura, las reacciones, el pH, el mol, la industria, los gases, las soluciones y los modelos.
- **Pistas:** al empezar se ve la pista 1, que es general. El estudiante puede pedir la 2 y la 3, que es la más reveladora. Todas las pistas usan solo lo que explican las páginas del sitio.
- **Fallos y puntaje:** con 6 fallos se completa el muñeco. Si adivina con 1 o 2 pistas gana 2 puntos; si usó las 3, gana 1 punto. Al final se muestra la palabra.
- **Teclado:** en pantalla, con la Ñ. En el computador también funciona el teclado físico. Las tildes no cuentan: la A descubre también la Á.
- **Tiempo:** 3 minutos por palabra.
- **Modo Estudiante:** funciona como cualquier otro grupo. El puntaje, las rachas y el reporte al docente se registran igual, y las palabras falladas quedan en el repaso de errores.

**Verificación.** Se probó con Playwright en un celular de 390 px:
- se ganó una palabra con las 3 pistas usando el teclado físico, y dio 1 punto;
- se perdió otra con los botones en pantalla, y no sumó puntos;
- no hubo desbordes ni errores en consola.

`sw.js` pasa a `ionom-v78` porque cambió `banco.js`.

---

## 5 de noviembre (7) — Cazar errores en el Juego y en todos los documentos del generador

El docente pidió que los ejercicios del generador cubrieran todos los tipos de documento y que el Juego tuviera cazadores de errores.

**Juego (`juego.html`)**
- **Grupo nuevo «🔎 Cazar errores»:** 20 preguntas de todos los temas.
  - Cada una muestra la afirmación de un compañero con un error y pregunta «¿Cuál es la corrección?».
  - Los distractores son correcciones de **otros** errores del mismo tema: suenan a química del tema, pero no corrigen esa afirmación.
  - Después de responder se muestra la corrección.
- **Mezcla en los temas:** las partidas de Modelos, pH, Industria, Gases y Soluciones traen 3 cazadores de su tema en lugar de 3 preguntas de opción múltiple.

**Banco compartido.** Las 128 afirmaciones con error pasan de `assets/docente-datos.js` a `banco.js` (`BANCO_CAZAR`). Así el Juego y el generador usan el mismo banco y no hay dos copias.

**Generador docente**
- **Evaluación:** campo nuevo «Cazar errores» (por defecto 2). Lo traen «Solo evaluación» y la evaluación de la «Guía completa», sin repetir lo que ya salió en el trabajo práctico.
- **Taller y guía:** se corrigió un error que dejaba la casilla «Cazar errores» desmarcada. Al abrir el generador sin temas la casilla quedaba en 0 y se apagaba; al marcar después un tema como Soluciones no se volvía a marcar, y el taller salía sin estos ejercicios. Ahora, cuando la casilla vuelve a tener ejercicios, recupera su estado inicial.
- **Laberintos y crucigramas** no cambian: cada casilla necesita una respuesta corta y única.

**Verificación (Playwright):**
- Juego: el grupo «Cazar errores» completó las 20 preguntas con 4 opciones distintas en cada una, y en las partidas de los temas aparecieron los cazadores mezclados.
- Generador: los 23 temas siguen con 20 o más disponibles; la evaluación, la guía completa y el taller traen el bloque de cazar errores.
- No hubo errores en consola. `sw.js` pasa a `ionom-v77` porque cambió `banco.js`.

---

## 5 de noviembre (6) — Cazar errores: al menos 20 por tema en el generador docente

El docente pidió ejercicios de «cazar errores» en todos los temas, con al menos 20 por tema. Antes solo existían para los temas de nomenclatura; los otros 14 temas tenían 0.

**Errores escritos (nuevo banco `CAZAR` en `assets/docente-datos.js`).** Son 128 afirmaciones con **un** error cada una, basadas solo en lo que explica la página del tema:

| Tema | Afirmaciones |
|---|---|
| Modelos | 21 |
| Ácidos, bases y pH | 22 |
| Industria | 21 |
| Gases | 21 |
| Soluciones | 22 |
| Ácidos hidrácidos | 21 |

En hidrácidos el banco solo tiene 10 compuestos y no alcanzaba los 20; las afirmaciones cubren los dos nombres (gas y solución), el H al inicio y los estados de oxidación −1 y −2.

**Errores generados a partir de los datos del sitio (`assets/docente-app.js`).** Primero se calcula la respuesta correcta y luego se cambia **un solo** dato, así que el error siempre es real:

| Tema | De dónde sale el error | Ejercicios |
|---|---|---|
| Átomo | Protones, neutrones o electrones mal contados | 37 |
| Configuración | 3d antes que 4s, superíndices que no suman Z, un s con 3 electrones | 34 |
| Enlace | ΔEN sumada en vez de restada, o tipo de enlace equivocado | 28 |
| Tabla periódica | Tendencia de radio, energía de ionización o electronegatividad al revés | 27 |
| Mol y masa molar | Subíndices olvidados, o dividir en vez de multiplicar | 60 |
| Balanceo | Un coeficiente cambiado, o coeficientes que no son los mínimos | 72 |
| Estequiometría | Razón molar ignorada | 64 |
| Tipos de reacción | Tipo de reacción equivocado | 99 |
| Reactividad | Un subíndice del cruce de cargas olvidado en la cadena | 21 |

**Correcciones de los «cazar errores» que ya existían:**
- Con fórmulas sin subíndice final (HCl, NaOH) el ejercicio mostraba la fórmula **correcta** como si fuera errada. Ahora esas fórmulas no se usan.
- Al cambiar -oso por -ico salían nombres con una tilde de más («óxido crómoso»), y el ejercicio quedaba con dos errores. Ahora la palabra se toma con la ortografía exacta del banco (férrico, cromoso, cúprico…).

**Resultado.** Los 23 temas del generador tienen 20 o más ejercicios de cazar errores. Lo verificó Playwright contando los disponibles de cada tema y generando talleres: no hubo errores en consola. `sw.js` pasa a `ionom-v76`.

---

## 5 de noviembre (5) — Preguntas abiertas del generador revisadas contra lo que explica cada página

El docente pidió que las preguntas abiertas del generador docente se basaran exclusivamente en lo que se explica dentro del sitio.

**Revisión.** Se compararon las 100 preguntas abiertas de los temas nuevos (Modelos, pH, Industria, Gases y Soluciones; 20 por tema) con el texto de su página. Nueve pedían algo que el sitio no explica y se reescribieron:

- **Modelos:** el porcentaje de error no se explica en IonNom. Ahora se pide la diferencia entre medida y modelo, y qué paso convierte un modelo en conocimiento comprobado.
- **Ácidos, bases y pH:**
  - Las dos preguntas con bicarbonato + HCl se cambiaron, porque esa reacción no aparece en el sitio. Ahora son la neutralización HNO₃ + KOH con su ecuación de fondo H⁺ + OH⁻ → H₂O, y los moles de HCl que neutraliza el NaOH.
  - En la de lluvia ácida se pide la ecuación a partir del SO₃, que es la que muestra la página, y no desde el SO₂.
- **Industria:**
  - Las causas de un rendimiento bajo no se explican; ahora se pide cuánto producto faltó.
  - La pregunta del rendimiento mayor que 100 % se ligó al experimento de la cáscara de huevo, que sí explica ese error (agua evaporada) y el vaso de control.
- **Soluciones:**
  - Se quitó la gasolina, que no aparece en la página: ahora se usan la polaridad del agua y los puentes de hidrógeno.
  - La pregunta de la sal de Manaure se cambió por la comparación de las curvas del NaCl y del KNO₃.
  - La de la gaseosa caliente (solubilidad de gases, que no se explica) se cambió por «disolver más rápido no es disolver más».

**Gases** no necesitó cambios: sus 20 preguntas se responden con la página (y con la olla a presión de Modelos).

Se verificó con Playwright que las evaluaciones generadas de cada tema traen las preguntas corregidas, sin errores. `sw.js` pasa a `ionom-v75` porque cambió `assets/docente-datos.js`, que se guarda en la caché.

---

## 5 de noviembre (4) — Los módulos nuevos entran a la ruta del átomo IonNom

El docente pidió que los temas nuevos quedaran bien integrados y diferenciados en el átomo de la portada, igual que las fases en la molécula de ChromaNom.

**`index.html` · Menú átomo y lista de módulos**
- Los cinco módulos nuevos dejan de ser «desvíos» y pasan a ser **paradas de la ruta**. La ruta queda de **17 paradas** (antes eran 12) y el núcleo muestra el progreso sobre 17.
  - **n = 1**, el átomo: Teoría Atómica, Configuración, Tabla, Enlace y **Modelos, Leyes y Datos** (5).
  - **n = 2**, nomenclatura: Principios, Funciones y NomenClash (6–8).
  - **n = 3**, reacciones: Tipos de reacción, Balanceo y **Ácidos, Bases y pH** (9–11).
  - **n = 4**, cálculos: Mol y masa molar (12), **Gases** (13), **Soluciones** (14), Estequiometría (15), **Industria** (16) y la cumbre, Balanceo algebraico y redox (17).
  - Solo el Simulador y la Guía siguen como opcionales.
- Corregido: las cinco tarjetas nuevas habían quedado por error dentro del menú lateral. Ahora cada una está en la sección de su nivel en «Todos los módulos, por nivel», con su número de parada («Parada 13 · n = 4»…). Las tarjetas antiguas se renumeraron.
- Las descripciones de cada nivel (botones n = 1…4 y ventana de bienvenida) mencionan los temas nuevos.
- Verificado con Playwright en un celular de 390 px: los paneles de cada nivel muestran los módulos en orden, no hay errores ni desbordes.

---

## 5 de noviembre (3) — Leyes de los gases completas y Soluciones

El docente pidió que gases fuera un simulador de todas las leyes y que se agregara el tema de soluciones, mostrando el proceso de disolución y los cálculos de concentración.

**`gases.html` · Leyes de los gases (nuevo, n = 4)**
- **Laboratorio de gases** (canvas, `SIM.gases`): un cilindro con partículas en movimiento y seis modos: **Boyle**, **Charles** (émbolo libre que se mueve solo), **Gay-Lussac** (émbolo fijo y llama), **Avogadro**, **gas ideal** y **Dalton** (mezcla de N₂ y O₂ con presiones parciales medidas por separado). La presión se **mide** con los choques contra las paredes y se compara con P = nRT/V y con PV/nT ≈ 0,082. Cada modo tiene su gráfica para registrar puntos (P–V, V–T con la recta que llega a −273 °C, P–T, V–n, barras de Dalton). Verificado: todas las leyes coinciden con la teoría dentro de un 3 %.
- Conversor de unidades (atm, mmHg, kPa, °C, K), tarjetas de las siete leyes con ejemplos colombianos, ejemplos resueltos (paquete de papas de Cartagena a Bogotá con la ley combinada; aire de un salón de Bogotá con PV = nRT), presión parcial del oxígeno en Cartagena, Medellín, Bogotá y el nevado del Ruiz, y **problemas al azar con verificación** de siete tipos.

**`soluciones.html` · Soluciones y concentración (nuevo, n = 4)**
- **Disolución en vivo** (`SIM.disolucion`): moléculas de agua que se orientan (O hacia el Na⁺, H hacia el Cl⁻) y arrancan los iones del borde del cristal; temperatura, botón para agitar, saturación y equilibrio, bombillo de conductividad. Se compara con el azúcar (moléculas, no conduce) y el aceite (apolar, no se disuelve).
- **Curvas de solubilidad** de NaCl, KCl y KNO₃: insaturada o saturada, cuánto queda en el fondo y cuánto cristaliza al enfriar.
- Tabla de **todas las unidades** (% m/m, % m/v, % v/v, ppm, M, m, X, N) con ejemplos colombianos (suero fisiológico, alcohol antiséptico, aguardiente, cloro del agua potable según la Resolución 2115 de 2007) y ejemplos resueltos.
- **Prepara y diluye** (`SIM.preparar`): sulfato de cobre azul cuyo color depende de la concentración, retos de preparación y dilución con C₁V₁ = C₂V₂.
- **Problemas al azar** de diez tipos (incluidos gramos para preparar, dilución y normalidad).

**Juego:** BANCO_GASES (25) y BANCO_SOLUCIONES (27); dos temas nuevos (20 en total). **Generador Docente:** dos temas con lectura, ejemplo, 20 preguntas abiertas cada uno, preguntas tipo Saber y el ejercicio «D · Preguntas y problemas». **Navegación:** menú de todas las páginas, hoja «Más», portada (tarjetas y menú átomo) y un enlace desde `modelos.html`. Componente nuevo `SED10.problemas` en `assets/sed10.js`. `sw.js` pasó a `ionom-v74` (cambian `banco.js` y hay páginas nuevas).

---

## 5 de noviembre (2) — Simulaciones en canvas que se mueven

El docente pidió que todo fuera muy interactivo, con simulaciones y modelos en canvas que se puedan mover. Nuevo `assets/sim10.js` con tres simulaciones animadas, cada una con controles, botón de pausa y una pregunta para predecir antes de mirar (se ajustan a la pantalla del celular, se manejan con el dedo y se detienen solas cuando no se ven):

- **`ph.html` · Gotas en un vaso de agua:** se agregan gotas de HCl (ácido fuerte), vinagre (ácido débil) o NaOH (base fuerte) y se ven las partículas moverse. El HCl se ioniza por completo; el ácido acético casi no (equilibrio); cuando un H₃O⁺ choca con un OH⁻ se forma agua (neutralización). Un pH-metro muestra el pH y el agua cambia de color como con el indicador de repollo. Con una gota de cada uno: HCl ≈ pH 3,3, vinagre ≈ pH 4, HCl + NaOH → pH 7.
- **`industria.html` · El reactor de Haber:** se eligen las moléculas de N₂ y H₂, se predice el limitante y se ve la reacción molécula por molécula (cada N₂ toma 3 H₂ y forma 2 NH₃). Al final compara con el cálculo 2 × mín(N₂, H₂ ÷ 3) y con la predicción del estudiante. Verificado: 4 N₂ + 9 H₂ → 6 NH₃ y sobra 1 N₂; 3 N₂ + 12 H₂ → 6 NH₃ y sobran 3 H₂.
- **`modelos.html` · La ley de Boyle sale de los choques:** gas en un cilindro con émbolo que se arrastra y control de temperatura. La presión se **mide** con los choques contra las paredes (no con la fórmula) y se pueden registrar puntos en una gráfica P–V junto a la curva de Boyle. Verificado: 50 mL → 1,0 atm; 25 mL → 2,1 atm; 100 mL → 0,5 atm.

`assets/sed10.css` tiene los estilos de las simulaciones. `sw.js` pasó a `ionom-v73` (archivo nuevo en caché). No se tocó `ionom-analytics.gs`.

---

## 5 de noviembre — Aprendizajes priorizados de la SED para 10.°: pH, química en la industria y modelos con datos

El docente envió la *Priorización de aprendizajes para ciencias naturales y educación ambiental — Media* (SED Bogotá, 2025). Para 10.° faltaban sobre todo el pH en el cuerpo, los alimentos y el territorio (10q-ind1, 10q-ind3, 10q-exp4), la estequiometría de procesos industriales (10q-uso3, con 10q-ind2 y 10q-uso2) y las tres evidencias de construcción del conocimiento (teorías, leyes, modelos y datos del territorio). Se hicieron tres páginas con los principios de Mayer: palabras clave al inicio, una meta por sección, ejemplos resueltos que se muestran paso a paso, figuras con sus etiquetas, laboratorios donde se predice antes de ver el resultado, botón «Escuchar» y práctica con el banco del Juego.

**Páginas nuevas**
- **`ph.html` · Ácidos, bases y pH:** Arrhenius y Brønsted-Lowry con clasificador; escala de pH interactiva con [H⁺], [OH⁻] y sustancias de la casa; «¿cuántas veces más ácido?»; fuertes y débiles; diseño de un experimento controlado con repollo morado; tres estudios de caso (antiácidos, gaseosas y caries, «dieta alcalina»); suelos ácidos y encalado, lluvia ácida y acidificación del mar.
- **`industria.html` · Química en la industria:** conservación de la masa y de la carga con clasificador; cinco procesos colombianos (cemento, amoníaco, potabilización, acero y cloro-soda); reactivo limitante con datos propios; pureza y rendimiento con una planta virtual; experimento con cáscara de huevo y vinagre para calcular el % de CaCO₃.
- **`modelos.html` · Teorías, leyes, modelos y datos:** diferencias entre hipótesis, ley, teoría y modelo con clasificador; laboratorio virtual de la ley de Boyle (hipótesis, tabla, gráficas V contra P y P contra 1/V, constante y predicción); modelo lineal del punto de ebullición del agua según la altitud de nueve ciudades, con interpolación y extrapolación, y referencia a los datos históricos del IDEAM.
- Archivos compartidos: `assets/sed10.css` y `assets/sed10.js`.

**Juego** (`banco.js`): tres bancos nuevos con formatos interactivos: **BANCO_PH** (32), **BANCO_INDUSTRIA** (26) y **BANCO_MODELOS** (25). Tres temas nuevos en la portada del Juego (18 en total, renumerados): «Modelos, leyes y datos» (n = 1), «Ácidos, bases y pH» (n = 3) y «Química en la industria» (n = 4).

**Generador Docente:** tres temas nuevos con aprendizajes previos, lectura, mapa y ejemplo resuelto; 20 preguntas abiertas por tema; preguntas tipo Saber tomadas del banco del Juego (20 a 26 por tema); y un tipo de ejercicio nuevo, «D · Preguntas y problemas (modelos, pH, industria)», para el trabajo práctico.

**Navegación:** los tres módulos aparecen en el menú de todas las páginas, en la hoja «Más» del celular y en la portada (tarjetas y menú átomo, como ampliaciones de los niveles 1, 3 y 4).

**Auditoría pedagógica y química**
- Un script revisó el balance de átomos y carga de todas las ecuaciones: solo aparecen «mal» las que lo están a propósito (distractores o ejemplos para corregir).
- La respuesta correcta era la opción más larga en muchas preguntas; se equilibraron las opciones (quedó en 33 % de las preguntas, frente a 40–51 % en los bancos de átomo y enlace).
- Valores de pH, masas molares, cálculos industriales y el modelo de ebullición revisados; «caliza» se corrigió a «carbonato de calcio puro» donde se calculan los 440 kg de CO₂ por tonelada.
- Probado con Playwright en PC y en iPhone 13: sin errores, sin desbordes, todos los clasificadores, calculadoras y prácticas funcionan, el Juego arma partidas de los tres temas y el docente genera guías con trabajo práctico.
- `sw.js` pasó a `ionom-v72` (cambió `banco.js` y hay archivos nuevos).

**Pendiente:** temas del MEN que la SED no prioriza (soluciones, cinética, equilibrio, termoquímica, química nuclear). No se tocó `ionom-analytics.gs`.

---

## 28 de octubre (12) — Laberintos: elegir cuántos ejercicios hay hasta FIN

- Nuevo selector **«Ejercicios hasta FIN»** junto al tamaño: el docente elige cuántas casillas resuelve el estudiante en la ruta correcta antes de llegar a FIN; las demás quedan como casillas trampa. «Automático» mantiene lo de antes (rutas largas).
- El rango depende del tamaño, porque la ruta solo avanza hacia la derecha, hacia abajo o en diagonal: 3×3 → de 2 a 4 ejercicios; 4×3 → de 3 a 5; 4×4 → de 3 a 6.
- El aviso de verificación ahora dice «✔ Ruta única verificada · N ejercicios hasta FIN».
- **Tamaños nuevos 5×4 (19 casillas) y 5×5 (24 casillas)**, para rutas más largas: 5×4 → de 4 a 7 ejercicios hasta FIN; 5×5 → de 4 a 8. La hoja sigue cabiendo completa en una carta horizontal. En estos dos tamaños la clave impresa ocupa dos páginas: el laberinto con la ruta en verde y, aparte, la tabla de respuestas en dos columnas (al lado del laberinto no cabía y se cortaba).

---

## 28 de octubre (11) — Preguntas abiertas del Generador Docente

- **20 preguntas abiertas por tema** (antes 3, o 6 en Átomo, Configuración electrónica y Enlace): 360 en total en los 18 temas, repartidas entre las de ecuación, nomenclatura e identificación de partes o cálculo. Ya se pueden pedir, por ejemplo, 10 abiertas de Balanceo + Masa molar, o 20 de un solo tema, sin que salgan menos de las pedidas ni repetidas.
- **Las preguntas abiertas ya no muestran la respuesta**: en las de «identifica el catión y el anión», la ficha mostraba el compuesto ya separado y con sus cargas (Mg²⁺ · O²⁻). Ahora solo aparece la fórmula (MgO); lo mismo con «O δ− · H δ+» en la del agua. Las fichas sí se siguen mostrando cuando son el dato del ejercicio (las partículas de un ion, los subniveles de una configuración). También se quitaron enunciados que nombraban el producto que se pide nombrar (ácidos hidrácidos, bicarbonato).
- **Laberinto en celular**: al tocar la salida correcta, el botón se pone verde un instante antes de pasar a la siguiente casilla.

---

## 28 de octubre (10) — iPhone: el Juego no arrancaba o volvía a la portada; opciones bien mezcladas

**Bloqueos en iOS**
- **El Juego no arrancaba en iPhones con iOS anterior a 13.4.** Tres líneas usaban `?.` (encadenamiento opcional), que esos Safari no entienden. Por eso no cargaba nada del script del Juego: tocar un tema no hacía nada. Se reescribieron, y ahora todos los scripts del sitio se verifican como ES2018 (Safari de iOS 12).
- **Almacenamiento bloqueado.** Con «Bloquear todas las cookies» o en modo privado, Safari lanza un error al usar `localStorage`, y eso podía detener la página. Todas las páginas traen ahora un reemplazo en memoria que se activa solo en ese caso.
- **«Me sacó del juego a la portada».** iOS descarta la pestaña cuando el estudiante abre otra app (calculadora, WhatsApp) y, al volver, Safari recarga la página. Ahora la partida se guarda al empezar cada pregunta (`sessionStorage`). La portada muestra «⏸️ Tienes una partida sin terminar · Continuar / Descartar» con el tema, la pregunta y el puntaje.
  - En Modo Estudiante se conservan el código y la sesión, así que el docente recibe una sola partida.
  - Al continuar se repite la pregunta en la que iba, con el puntaje que tenía antes de responderla: no se puede sumar dos veces.
- Cerrar «¿Cómo jugar?» ya no falla en los navegadores dentro de apps que no tienen voz.
- Enlace Químico: las simulaciones usaban `ctx.roundRect`, que no existe en iOS 15 o anterior, y dejaban de dibujarse. Se agregó un reemplazo.

**Posición de la respuesta correcta**
- En el Juego la mezcla ya era uniforme. Medido en 344 preguntas de los 16 temas: A 29 %, B 21 %, C 30 % y D 21 %.
- Los quizzes de Tipos de Reacción, Mol, Estequiometría y Balanceo Avanzado mezclaban con `sort(() => Math.random() - .5)`, que **no es aleatorio de verdad**: la correcta caía en A o D cerca del 31–36 % de las veces y en B o C solo 16–19 %. Ahora usan Fisher-Yates (25 % por letra). Lo mismo con el orden de los retos de Teoría Atómica.
- `sw.js` pasó a `ionom-v57`.

## 28 de octubre (9) — Juego: temas en secuencia de complejidad

- La portada del Juego muestra los 15 temas agrupados en los mismos 4 niveles del menú átomo y numerados del más sencillo al más complejo:
  - **n = 1 El átomo**: teoría atómica → tabla periódica → enlace químico.
  - **n = 2 Nomenclatura**: primero los binarios (óxidos, hidruros, ácidos hídricos, sales binarias), luego los ternarios (bases, oxácidos, sales oxigenadas) y al final los cuaternarios (sales ácidas). «Todos los grupos» pasó al final como **Repaso**.
  - **n = 3 Reacciones**: tipos de reacción → cadena de reactividad → balanceo.
  - **n = 4 Cálculos**: mol y masa molar.
- El encabezado del Juego dice «Química · Modo Juego» y «15 temas».
- Los accesos «Practica este nivel» de la portada siguen el mismo orden.

## 28 de octubre (8) — Portada para toda la química y menú átomo actualizado

IonNom ya no es solo nomenclatura, así que la portada se reorganizó:
- **Hero nuevo**: «Del átomo a la reacción, paso a paso». Muestra los 4 niveles como tarjetas que abren su capa del átomo. El botón principal dice la siguiente parada del estudiante, y hay un acceso directo al Juego.
- **El menú átomo sube** justo debajo del hero. Es la navegación principal.
- **El Juego ya no es una estación de nomenclatura**: tiene preguntas de todos los niveles. Queda junto al átomo («🎮 Juego»), y cada nivel tiene «🎮 Practica este nivel en el Juego» con sus temas. Por ejemplo, el nivel 1 enlaza a teoría atómica, tabla periódica y enlace químico, y cada enlace resalta ese tema en el Juego. La ruta quedó de 12 paradas.
- **Módulos agrupados por nivel** (n = 1 a n = 4, y «Practica y enseña»), con el número de parada.
- **El código de 4 colores** pasó a su propia sección del nivel 2, con el ejemplo Fe₂(SO₄)₃, las 4 partes, la lectura de un nombre y los compuestos cotidianos.
- El modal de bienvenida, la narración, el título de la página, la descripción y `manifest.json` hablan de química general.
- Barra inferior del celular: Inicio, Átomo, Principios, Juego y Tabla.
- Juego: «¿Cómo jugar?» y la portada del Juego ya no dicen «elige un grupo funcional», sino «elige un tema».
- `sw.js` pasó a `ionom-v56`.

## 28 de octubre (7) — Enlace químico en el Juego y en el Generador Docente

- **Juego: tema nuevo «Enlace químico»** (🧲), en Modo Libre y en Modo Estudiante. Tiene 47 preguntas con explicación sobre octeto y Lewis, enlace iónico, covalente, electronegatividad y polaridad, enlace metálico y propiedades. Cada partida toma 20 sin repetir, y cada pregunta muestra su subtema.
- **Generador Docente: tema «Enlace químico»**, con:
  - aprendizajes previos con contexto colombiano (la sal de Zipaquirá, el cobre de las redes eléctricas);
  - lectura, esquema y ejemplo resuelto Na–Cl;
  - un tipo de ejercicio nuevo, **D Tipo de enlace (ΔEN)**, con 28 parejas de elementos;
  - 12 preguntas tipo Saber 11 y 6 abiertas.
- La pantalla final del Modo Libre decía «Dominas este grupo de nomenclatura» también en los temas que no son de nomenclatura; ahora dice «Dominas este tema».
- `ionom-analytics.gs`: «Enlace químico» se agregó a `TEMAS_PRINCIPALES`. **Hay que copiarlo a Apps Script y crear una nueva versión de la implementación.**
- `sw.js` pasó a `ionom-v55` (cambiaron `banco.js`, `docente-datos.js` y `docente-app.js`).

## 28 de octubre (6) — Enlace Químico: simulaciones nuevas

`enlace.html` deja de ser una copia de EnlaceLab. Las animaciones y simulaciones se rehicieron con el estilo de los simuladores de Teoría Atómica (lienzos oscuros, táctiles y animados):

- **Lewis animado**: cada electrón conserva el color de su átomo y se desliza a los enlaces y pares libres; en el NaCl se ve saltar el electrón del Na al Cl. Se puede ver con puntos o con rayas.
- **Del átomo al cristal**: 7 compuestos iónicos en 5 fases (átomos → transferencia → iones → atracción → red). El estudiante arrastra los electrones con el dedo o usa el modo automático; la red final resalta la unidad fórmula.
- **Nube compartida**: se acercan dos átomos (H₂, Cl₂, O₂, N₂), las nubes se suman y una curva de Morse con datos reales sigue la energía. Con «Soltar», la molécula vibra.
- **Polaridad**: un deslizador de ΔEN transforma la nube de apolar a polar a iónica, con δ+/δ− y la flecha del dipolo.
- **Mar de electrones**: 4 modos (normal, pila con bombillo, calor con termómetro y golpe).
- **Maleable vs. frágil**: el golpe se ve en cámara lenta.
- **Laboratorio animado**: cada ensayo tiene su escena (mechero y termómetro, circuito con bombillo, iones que viajan a los electrodos, vaso con agua y martillo).
- `sw.js` pasó a `ionom-v54`.

## 28 de octubre (5) — Nueva página: Enlace Químico

- **`enlace.html` — 🔗 Enlace Químico**, la cuarta parada del nivel n = 1 (después de la Tabla Periódica). Retoma «EnlaceLab» con el diseño de IonNom. Tiene 6 pestañas:
  - **Conceptos**: regla del octeto, símbolos de Lewis de Z = 1–20 que se pueden tocar, los tres tipos de enlace con sus propiedades, y molécula vs. unidad fórmula.
  - **Lewis**: estructuras paso a paso de H₂O, NH₃, CH₄, HCl, CO₂, N₂ y NaCl, contando los electrones en cada paso.
  - **ΔEN**: calculadora con las electronegatividades de la tabla del sitio y un reto de 10 parejas.
  - **Simuladores**: transferencia de electrones en 9 compuestos iónicos (con la fórmula por cruce de cargas), curva de energía del enlace H–H, O=O y N≡N con datos reales, mar de electrones (pila y calor) y maleable vs. frágil.
  - **Laboratorio virtual**: 8 muestras y 6 ensayos para deducir el tipo de enlace; incluye casos trampa como el azúcar y el cuarzo.
  - **Repaso**: 10 preguntas.
- **Química corregida respecto a EnlaceLab**: la clasificación por ΔEN ahora es coherente (H–S, H–F y HCl estaban mal o contradictorios), «todos los iónicos son solubles» pasó a «muchos», y se agregaron los sólidos covalentes de red.
- **Menú átomo**: la estación 🔗 está en la capa n = 1 y la ruta tiene 13 paradas. Hay una tarjeta nueva en la lista y el enlace aparece en el menú lateral de todas las páginas y en «Más» del celular.
- `sw.js` pasó a `ionom-v53`.

## 28 de octubre (4) — El átomo en Laberintos y Crucigramas

- **Laberintos: tipo nuevo «Teoría atómica y configuración»**. Tiene 4 grupos de preguntas que se pueden combinar:
  - partículas subatómicas: ¿cuántos neutrones tiene ¹⁹F⁻?, o ¿qué especie tiene 13 p⁺, 14 n⁰ y 10 e⁻?;
  - configuración electrónica: de elemento a configuración abreviada y al revés;
  - configuración y tabla: periodo y grupo, y electrones de valencia;
  - modelos y reglas: 25 preguntas cortas.

  Mantiene la ruta única verificada, las versiones, el modo Jugar y la hoja de clave. Se probaron 270 laberintos y todos pasaron la verificación.
- **Crucigramas: dos tipos de pista nuevos**:
  - «Teoría atómica»: un glosario de 31 términos, como NEUTRON, THOMSON, ORBITAL o HUND.
  - «Configuración → elemento»: por ejemplo, «[Ne] 3s² 3p⁴» → AZUFRE.

  Si solo se marcan pistas del átomo, no hace falta elegir familias de compuestos y el título cambia a «Crucigrama del átomo». Se probaron 60 crucigramas y todos quedaron verificados.
- `sw.js` pasó a `ionom-v52`.

## 28 de octubre (3) — Temas del átomo en el Generador Docente

- **Dos temas nuevos en `docente.html`**: «Teoría atómica y estructura del átomo» y «Configuración electrónica». Cada uno tiene aprendizajes previos con contexto colombiano, lectura, esquema y ejemplo resuelto con el código de colores.
- **Ejercicios prácticos nuevos** que se marcan solos al elegir el tema:
  - **D Partículas subatómicas**: 37 isótopos e iones reales; se completan protones, neutrones, electrones y tipo de especie.
  - **D Configuración electrónica**: 34 elementos; se piden la configuración completa y abreviada, el diagrama de orbitales, el periodo, el grupo, el bloque y la valencia.
- **Evaluación**: 24 preguntas tipo Saber 11 nuevas (12 por tema) y 12 preguntas abiertas (6 por tema).
- Se probaron una guía completa y una evaluación generadas solo con estos temas: sin errores y con la paginación correcta.
- La tarjeta del Generador Docente en la portada ahora dice «17 temas». `sw.js` pasó a `ionom-v50`.

## 28 de octubre (2) — Configuración Electrónica y tema nuevo en el Juego

- **Nueva página `configuracion.html` — 🧬 Configuración Electrónica**, la segunda parada del nivel n = 1, entre Teoría Atómica y Tabla Periódica. Tiene 5 pestañas:
  - **Conceptos**: de Bohr a los orbitales, las reglas de Aufbau, Pauli y Hund, la configuración abreviada, las excepciones y los iones.
  - **Diagrama de Moeller** interactivo.
  - **Configurador** de los 118 elementos e iones: configuración completa y abreviada, diagrama de orbitales, periodo, grupo, bloque, valencia y números cuánticos.
  - **Llena los orbitales**: el estudiante ubica los electrones en las casillas.
  - **Repaso** con preguntas generadas al azar.
- Los datos salen de la tabla periódica del sitio. Se verificó por script que los 118 elementos coinciden con `tabla.html` en configuración, periodo y grupo.
- **Juego: tema nuevo «Teoría atómica y configuración»**, con un banco de **49 preguntas** (`BANCO_ATOMO` en `banco.js`): 19 de modelos atómicos, 11 de estructura del átomo e iones y 19 de configuración electrónica. Cada pregunta trae su explicación. Funciona en Modo Libre y en Modo Estudiante, y se registra como «Teoría atómica y configuración electrónica».
- `ionom-analytics.gs`: el tema nuevo se agregó a `TEMAS_PRINCIPALES`. **Requiere volver a implementar a mano el Apps Script** para que tenga columna propia en «Estadísticas». Sin eso, igual se registra en «Eficacia por tema».
- **Menú átomo**: la nueva estación 🧬 queda en la capa n = 1 y la ruta pasa a tener 12 paradas. Hay una tarjeta nueva en la lista de módulos y el enlace aparece en el menú lateral de todas las páginas y en «Más» del celular.
- `atomo.html`: la siguiente parada es ahora Configuración Electrónica, y el constructor de átomos enlaza al configurador.
- `sw.js`: `configuracion.html` se agregó a la caché y `CACHE_NAME` pasó a `ionom-v49` (cambiaron `banco.js` y `ionom-ui.js`).
- Documentación completa de la región en `TEORIA_ATOMICA.md`.

## 28 de octubre — Teoría Atómica y menú en forma de átomo en la portada

- **Nueva página `atomo.html` — 🪐 Teoría Atómica**, con 5 pestañas:
  - **🕰️ Historia**: línea del tiempo deslizable (Demócrito, Dalton, Thomson, Rutherford, Bohr y modelo cuántico). Cada modelo explica qué propuso, en qué evidencia se apoyó y qué no podía explicar. Desde Thomson, Rutherford y Bohr hay un botón directo a su experimento.
  - **🧪 Experimentos**: tres simuladores propios que funcionan sin conexión.
    - *Rayos catódicos (Thomson)*: voltaje de las placas, campo del imán, voltaje de aceleración y metal del cátodo. El haz se calcula con la física real (e/m = 1,76 × 10¹¹ C/kg). Incluye el reto de equilibrar el haz para medir v = E/B. Cambiar el metal no cambia nada, porque los electrones son iguales en todos los átomos.
    - *Lámina de oro (Rutherford)*: el estudiante elige el modelo de átomo (budín de Thomson o núcleo de Rutherford) y dispara partículas alfa. En los dos modelos la carga es la misma; solo cambia cómo está repartida. Con Thomson ninguna partícula rebota y con el núcleo algunas sí. Hay conteo por ángulo y un aviso de que el núcleo está dibujado mucho más grande que el real.
    - *Espectro del hidrógeno (Bohr)*: se mueve el electrón entre los niveles n = 1 a 6 y se ve el fotón absorbido o emitido, con su longitud de onda calculada con la ecuación de Rydberg. Las líneas visibles (656, 486, 434 y 410 nm) aparecen en el espectro; las UV e IR se cuentan aparte. El «tubo de descarga» va armando el espectro solo.
    - Cada experimento empieza con una **predicción** del estudiante antes de manipular.
  - **🧱 Constructor de átomos**: protones, neutrones y electrones (Z = 1–20). Muestra el elemento, A, Z, la carga, si es catión o anión, si el núcleo es estable o radiactivo (isótopos estables reales) y la configuración electrónica. Trae 13 retos (Na⁺, ³⁵Cl⁻, O²⁻, carbono-14, partícula α…) con retroalimentación sobre qué partícula falla.
  - **🌐 PhET**: se incrustan en la página tres simulaciones de la Universidad de Colorado en español: *Construir un átomo*, *Dispersión de Rutherford* e *Isótopos y masa atómica*. Se cargan solo al tocar «Cargar aquí», porque necesitan internet. También hay un botón de pantalla completa y se da el crédito de la licencia CC BY 4.0.
  - **✅ Repaso**: 10 preguntas sobre modelos atómicos, isótopos e iones, con explicación.
- **Portada: menú en forma de átomo («Tu átomo IonNom»)** en lugar del recuadro «Ruta recomendada». La primera versión era un mapa con regiones para arrastrar; se cambió por el átomo, que la docente prefirió.
  - **Núcleo**: muestra el progreso (por ejemplo, «4/11»). Al tocarlo aparece el avance por nivel y un botón a la siguiente parada sugerida.
  - **Capas n = 1 a 4**: cada una es un nivel temático en el orden recomendado: El átomo, Nomenclatura, Reacciones, y Cálculos y redox. Cada nivel tiene su **pregunta guía** (por ejemplo, «¿Cómo sabemos cómo es algo que nadie ha visto?»).
  - **Electrones**: cada uno es un módulo. Giran despacio, más rápido cerca del núcleo, como en Bohr. Se detienen al poner el dedo o el ratón encima, y no giran si el celular tiene activado «reducir movimiento».
  - Al tocar una capa, un electrón o los botones de nivel, se abre el panel de ese nivel con enlaces grandes. El átomo nunca abre una página por sí solo.
  - Los módulos visitados se marcan con ✓ y la siguiente parada sugerida lleva un anillo dorado. «Sala docente» queda aparte, fuera del átomo.
  - La lista de tarjetas sigue debajo («Ver como lista ↓») e incluye la nueva tarjeta de Teoría Atómica.
- `assets/ionom-ui.js` guarda en el navegador qué páginas visitó el estudiante (`ionom-visitas`, solo en su equipo y sin enviarse a ningún lado). También agrega «Teoría Atómica» a la hoja «Más» de la barra inferior del celular. El menú lateral de las 15 páginas tiene el nuevo enlace.
- `sw.js`: `atomo.html` se agregó a la caché y `CACHE_NAME` pasó de `ionom-v47` a `ionom-v48` (cambió `ionom-ui.js`, que se sirve cache-first).

## 28 de octubre — Guías, talleres y evaluaciones en pestañas separadas

- **Por sugerencia de un docente**, la pestaña «📄 Guías, talleres y evaluaciones» de `docente.html` se dividió en tres pestañas propias, igual que Laberintos y Crucigramas: **📘 Guías** (4 sesiones + evaluación en hojas aparte), **✏️ Talleres** (solo ejercicios de práctica) y **📝 Evaluaciones** (tipo Saber 11 + abiertas).
- **Cada pestaña genera solo su documento**:
  - **Guías** → guía de estudio: Sesión 1 (saberes previos), Sesión 2 (información) y Sesión 3 (trabajo práctico), **sin evaluación**. Sale una sola vez (sin versiones).
  - **Talleres** → solo ejercicios de práctica, con el título «Ejercicios» y versiones opcionales.
  - **Evaluaciones** → solo preguntas tipo Saber 11, hoja de respuestas, preguntas abiertas y rúbrica opcional, con versiones.
- Cada pestaña muestra un recuadro que explica qué genera, solo las opciones que le aplican (los números de las secciones se ajustan solos) y un botón con su nombre («Generar guía», «Generar taller», «Generar evaluación»).
- La página recuerda la última pestaña usada y se puede abrir directo con `docente.html#talleres` o `docente.html#evaluaciones`.

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
