# Región «El átomo» — Teoría atómica, configuración electrónica y menú átomo

Documento de referencia de lo construido en octubre de 2026 para la primera región de IonNom. Explica qué hay, dónde está, cómo funciona y cómo ampliarlo.

---

## 1. Resumen

| Pieza | Archivo | Qué es |
|---|---|---|
| Teoría Atómica | `atomo.html` | Línea del tiempo de los modelos atómicos, 3 simuladores (Thomson, Rutherford, Bohr), constructor de átomos e iones, simulaciones PhET incrustadas y repaso |
| Configuración Electrónica | `configuracion.html` | Conceptos (Aufbau, Pauli, Hund), diagrama de Moeller interactivo, configurador de los 118 elementos e iones, práctica «Llena los orbitales» y repaso generado |
| Menú átomo | `index.html` | Portada en forma de átomo de Bohr: núcleo = progreso, capas n = 1–4 = niveles temáticos, electrones = módulos |
| Temas del Juego | `juego.html` + `banco.js` | Grupo «Teoría atómica y configuración» con el banco `BANCO_ATOMO` (49 preguntas) y grupo «Enlace químico» con `BANCO_ENLACE` (47 preguntas) |
| Registro de visitas | `assets/ionom-ui.js` | Guarda en el navegador (`ionom-visitas`) qué páginas visitó el estudiante, para marcar ✓ en el menú átomo |

Orden recomendado dentro del nivel n = 1: **Teoría Atómica → Configuración Electrónica → Tabla Periódica → Enlace Químico**.

---

## 2. `atomo.html` — Teoría Atómica

Cinco pestañas (se puede enlazar directo con `atomo.html#experimentos`, `#constructor`, `#phet`, `#repaso`):

1. **🕰️ Historia**: tarjetas deslizables de Demócrito, Dalton, Thomson, Rutherford, Bohr y el modelo cuántico. Cada una tiene *¿Qué propuso?*, *Evidencia* y *¿Qué no podía explicar?*. La idea es que cada modelo cae ante un experimento.
2. **🧪 Experimentos** (funcionan sin internet). Cada uno empieza pidiendo una **predicción** al estudiante:
   - *Rayos catódicos (Thomson)*: voltaje de las placas, imán, voltaje de aceleración y metal del cátodo. La desviación se calcula con e/m = 1,76 × 10¹¹ C/kg. Incluye el reto de equilibrar el haz (v = E/B).
   - *Lámina de oro (Rutherford)*: se elige el modelo (Thomson o núcleo). Los dos modelos tienen la **misma carga**; solo cambia cómo está repartida, y por eso solo el núcleo produce rebotes. El núcleo se dibuja mucho más grande que el real y la página lo advierte (en el experimento real rebotaba ≈ 1 de cada 8000 partículas).
   - *Espectro del hidrógeno (Bohr)*: niveles n = 1–6, fotones con λ calculada por Rydberg y líneas visibles de Balmer (656, 486, 434 y 410 nm).
3. **🧱 Constructor**: protones, neutrones y electrones (Z = 1–20). Muestra el elemento, A, Z, la carga, si el isótopo es estable y la configuración. Trae 13 retos.
4. **🌐 PhET**: *Construir un átomo*, *Dispersión de Rutherford* e *Isótopos y masa atómica*, de la Universidad de Colorado, en español. Se cargan solo al tocar el botón porque necesitan internet. Tienen licencia CC BY 4.0 y el crédito aparece en la página.
5. **✅ Repaso**: 10 preguntas con explicación.

## 3. `configuracion.html` — Configuración Electrónica

Cinco pestañas (`#conceptos`, `#moeller`, `#configurador`, `#orbitales`, `#repaso`):

1. **📚 Conceptos**: el puente con Bohr, la tabla de subniveles (s, p, d, f), capacidad 2n², las tres reglas con ejemplos visuales, qué dice la configuración (periodo, bloque, grupo, valencia), la configuración abreviada, las excepciones y los iones.
2. **↙️ Moeller**: diagrama de las diagonales que se llena electrón por electrón, o con el botón «Animar». Cuando el elemento es una excepción, la página muestra la configuración real.
3. **🔧 Configurador**: tabla periódica tocable (coloreada por bloque) o buscador, y carga de 3− a 3+. Muestra:
   - configuración completa (por orden de llenado o por niveles) y abreviada;
   - diagrama de orbitales con la regla de Hund;
   - periodo, grupo, bloque, electrones de valencia, electrones desapareados y electrones por nivel;
   - números cuánticos del electrón diferencial;
   - avisos sobre excepciones y cationes de transición.
4. **✍️ Llena los orbitales**: el estudiante toca las casillas (↑, ↑↓, vacía) para un elemento al azar con Z ≤ 36. La retroalimentación dice qué subnivel falla y si se viola la regla de Hund.
5. **✅ Repaso**: 10 preguntas **generadas al azar** de 8 tipos: configuración completa, elemento a partir de la configuración abreviada, valencia, bloque, periodo y grupo, iones, desapareados y números cuánticos.

### Datos y verificación
- Los 118 elementos (símbolo, nombre, periodo y grupo) se copiaron de `ELEMENTS` en `tabla.html`.
- La configuración se calcula con la regla de Moeller más la tabla `EXC` de excepciones: Cr, Cu, Nb, Mo, Ru, Rh, Pd, Ag, La, Ce, Gd, Pt, Au, Ac, Th, Pa, U, Np, Cm, Lr y Rg. Son **las mismas** que trae el campo `valence` de `tabla.html` y `juego.html`.
- Se verificó por script que, para los 118 elementos, la configuración, el periodo y el grupo calculados coinciden con los datos de `tabla.html`, sin ninguna diferencia. Además se jugaron 400 preguntas generadas del repaso sin errores.
- Convención de números cuánticos: los orbitales se llenan de mₗ = −l a +l, primero con espín ↑ (mₛ = +½). Está escrita en la página porque algunos textos usan la convención contraria.
- Electrones de valencia: los del último nivel (n = periodo), igual que `elValenceCount` del Juego. El Pd (4d¹⁰, sin 5s) da 0 y la página lo explica.

## 3b. `enlace.html` — Enlace Químico

Es la cuarta parada del nivel n = 1, después de la Tabla Periódica, y el puente hacia la nomenclatura. Retoma las ideas de «EnlaceLab» con el diseño de IonNom y la química corregida. Tiene 6 pestañas (`#conceptos`, `#lewis`, `#en`, `#simuladores`, `#laboratorio`, `#repaso`):

1. **Conceptos**: la regla del octeto; los símbolos de Lewis de Z = 1–20, que se pueden tocar y dicen si el elemento gana, pierde o comparte electrones; los tres tipos de enlace con sus propiedades; la advertencia sobre los casos intermedios (AlCl₃, BeCl₂, HF), y la diferencia entre molécula y unidad fórmula.
2. **Lewis animado**: estructuras paso a paso de H₂O, NH₃, CH₄, HCl, CO₂, N₂ y NaCl en un lienzo. Cada electrón conserva el color del átomo de donde viene y se desliza a su lugar: primero los átomos separados, luego los pares de enlace, los pares libres que salen de la «bandeja» y, en el NaCl, el electrón que salta del Na al Cl. Se puede ver con puntos o con rayas. En cada paso se cuentan los electrones disponibles, usados y restantes. Incluye cargas parciales δ+/δ−, geometría y polaridad de la molécula.
3. **ΔEN**: calculadora con las electronegatividades de Pauling de `tabla.html` y un reto de 10 parejas. La clasificación usa dos ideas juntas:
   - metal + metal → metálico;
   - no metal + no metal → apolar (ΔEN < 0,4) o polar;
   - metal + no metal → iónico si ΔEN ≥ 1,7; si no, covalente polar con carácter iónico parcial.

   El reto solo usa parejas lejos de los límites, para que no haya casos dudosos.
4. **Simuladores** (lienzos oscuros, animados y táctiles):
   - **Del átomo al cristal**: NaCl, LiF, KCl, MgO, CaCl₂, MgF₂ y Na₂O en 5 fases: átomos (modelo de Bohr), transferencia, iones, atracción y red cristalina. El estudiante arrastra con el dedo los electrones de valencia del metal a los huecos punteados del no metal, o usa el modo automático. El catión se encoge y pierde su capa externa, el anión crece, los iones se atraen con un destello de energía y al final se arma la red 2D con la unidad fórmula resaltada.
   - **Nube compartida (covalente)**: H₂, Cl₂, O₂ y N₂. Se arrastra un átomo hacia el otro: las nubes se suman, los electrones compartidos pasan de girar en su átomo a recorrer ambos núcleos, y una curva de Morse con datos reales sigue la distancia y la energía. Con «Soltar» la molécula vibra alrededor de la longitud de enlace.
   - **Polaridad**: un deslizador de ΔEN de 0 a 3,3 transforma la nube de apolar (verde) a polar (azul/rojo) y a iónica (corchetes, ≥ 1,7). El par compartido se corre, aparecen δ+/δ− y la flecha del dipolo. Hay ejemplos rápidos (H₂, HCl, HF, NaCl…).
   - **Mar de electrones**: red de cationes con 70 electrones con estela, en 4 modos: normal, con pila (bombillo y corriente), calentando un extremo (vibración por colores y termómetro en el lado frío) y golpe (las capas se deslizan sin romperse).
   - **Maleable vs. frágil**: el mismo golpe en cámara lenta a un metal, que se deforma, y a un cristal iónico, que al enfrentar cargas iguales se repele y se fractura.
5. **Laboratorio animado**: 8 muestras (NaCl, CaCl₂, cobre, aluminio, azúcar, parafina, agua y cuarzo) con 6 ensayos, y cada ensayo tiene su escena:
   - aspecto con brillos;
   - mechero y termómetro que sube hasta el punto de fusión (o se queda corto);
   - circuito con pila, electrones en los cables y un bombillo que brilla según la conductividad; en disolución los iones viajan a los electrodos y las moléculas de azúcar no;
   - vaso con agua donde la muestra se disuelve, flota o se hunde;
   - martillo que parte, aplana, marca o rebota.

   Se puede elegir una muestra o pedir una misteriosa. El azúcar y el cuarzo son los casos que obligan a razonar con la conductividad de la disolución o del fundido.
6. **Repaso**: 10 preguntas al azar de un banco de 13.

**Correcciones respecto a EnlaceLab**:
- H–S (ΔEN 0,38) estaba marcado como polar y H–F (1,78) como polar a pesar de la regla de 1,7. Ahora la regla es coherente y explica la excepción del HF.
- El HCl (ΔEN 0,96) estaba como «polar fuerte» en una tarjeta y «polar leve» en la escala. Ahora es covalente polar.
- «Solubilidad alta» para todos los iónicos se cambió a «muchos se disuelven».
- Se agregó el caso de los sólidos covalentes de red (cuarzo), que funden muy alto sin ser iónicos.

## 4. Menú átomo (`index.html`)

- **Núcleo**: progreso «X/12» sobre la ruta recomendada. Al tocarlo aparece el avance por nivel y el botón «Siguiente parada».
- **Capas** (cada una con su *pregunta guía*):
  - n = 1 El átomo (Teoría Atómica, Configuración, Tabla, Enlace Químico)
  - n = 2 Nomenclatura (Principios, Funciones, NomenClash y la Guía como opcional)
  - n = 3 Reacciones (Tipos, Balanceo y el Simulador como opcional)
  - n = 4 Cálculos y redox (Mol, Estequiometría, Balanceo avanzado)
- **Electrones**: giran despacio, se detienen al poner el dedo encima y respetan «reducir movimiento». Tocar uno abre el panel del nivel; el átomo nunca navega solo.
- **El Juego no es una estación**, porque tiene preguntas de todos los niveles. Tiene un acceso «🎮 Juego» junto al átomo, y cada panel de nivel termina con «🎮 Practica este nivel en el Juego». Esos enlaces van a `juego.html?g=<grupo>` (por ejemplo `?g=enlace`), que resalta el tema en la portada del Juego sin arrancar la partida, porque en Modo Estudiante primero hay que validar el código.
- La lista de tarjetas sigue debajo («Ver como lista ↓»), agrupada por nivel (n = 1–4 y «Practica y enseña»), con el número de parada en cada tarjeta.

### Portada (reestructurada)
IonNom ya no es solo nomenclatura, así que la portada presenta toda la química del sitio:
1. **Hero**: «Química general · Grados 10° y 11°». Muestra los 4 niveles como tarjetas: cada una abre su capa en el menú átomo. El botón principal cambia según el progreso: «Empezar por Teoría Atómica», «⭐ Siguiente parada: …» o «🏁 Repasar el átomo». También tiene el botón «🎮 Jugar».
2. **Menú átomo**: la navegación principal.
3. **Todos los módulos, por nivel**.
4. **Nivel 2 · Nomenclatura: el código de 4 colores**. Reúne el ejemplo Fe₂(SO₄)₃, las 4 partes, la lectura de un nombre y los compuestos cotidianos, que antes estaban en el hero y en la parte de arriba.

El modal de bienvenida, la narración, el título, la descripción y `manifest.json` hablan ahora de química general. La barra inferior del celular (`assets/ionom-ui.js`) quedó así: Inicio, Átomo, Principios, Juego y Tabla. Funciones pasó a «Más».

**Agregar una página nueva al menú**: añadir una entrada en el arreglo `ST` del script «Menú átomo» de `index.html`. Por ejemplo: `{id:'pagina.html', r:4, n:2, e:'🧪', t:'Título', d:'Descripción'}`. `r` es la parada en la ruta (`null` = opcional) y `n` es la capa. Luego hay que renumerar las `r` siguientes. Además hay que agregar el enlace al menú lateral de todas las páginas, a `MAS` en `assets/ionom-ui.js` y a `ASSETS_TO_CACHE` en `sw.js`, y subir `CACHE_NAME`.

## 5. Juego — tema «Teoría atómica y configuración»

- Botón nuevo en la portada de `juego.html` (`pickGroup('atomo')`), en Modo Libre y en Modo Estudiante.
- Banco: `BANCO_ATOMO` al final de `banco.js`, con **49 preguntas**: 19 de modelos atómicos, 11 de estructura del átomo e iones y 19 de configuración electrónica. Cada partida toma 20 sin repetir.
- Formato de cada pregunta: `{id, tema, q, ok, d:[3 distractores], x}`. `x` es la explicación que aparece al responder e `id` es la etiqueta que se ve en «Temas para repasar».
- Usa el mismo flujo de opción múltiple que las preguntas de la tabla periódica: 3 intentos, 2 o 1 punto, explicación al final. Los errores se cuentan en el tipo «mc» del registro.
- **Para agregar preguntas**: añadir objetos a `BANCO_ATOMO` y **subir `CACHE_NAME` en `sw.js`** en el mismo commit (`banco.js` se sirve cache-first; ver `CLAUDE.md`).
- El tema se registra en Google Sheets como «Teoría atómica y configuración electrónica».

### Tema «Enlace químico»
- Botón `pickGroup('enlace')` en la portada de `juego.html`, debajo de «Tabla periódica».
- Banco: `BANCO_ENLACE` al final de `banco.js`, con **47 preguntas** y el mismo formato que `BANCO_ATOMO`: 10 de octeto y Lewis, 10 de enlace iónico, 6 de enlace covalente (incluida la curva de energía), 10 de electronegatividad y polaridad, 4 de enlace metálico y 7 de propiedades y laboratorio.
- Las ΔEN usan las electronegatividades de `tabla.html` y la misma regla de `enlace.html`.
- Comparte el código de `atomo` (`isAtom`, `renderAtomMC`, `checkElMC`) con su propio tipo de pregunta, `enlace-mc`, que se cuenta como «mc» en el registro. El encabezado de cada pregunta muestra su subtema (🔵 Octeto y Lewis, ➕➖ Iónico…).
- Se registra en Google Sheets como «Enlace químico».

### ⚠️ Paso manual pendiente (Apps Script)
Se agregaron «Teoría atómica y configuración electrónica» y «Enlace químico» a `TEMAS_PRINCIPALES` en `ionom-analytics.gs`, para que tenga columna propia en «Estadísticas». Ese cambio **no llega a producción solo**: hay que copiar el archivo al editor de script.google.com y luego ir a Implementar → Administrar implementaciones → Editar → Nueva versión. Mientras no se haga, las partidas de este tema se guardan igual y aparecen en «Eficacia por tema», que agrega temas nuevos dinámicamente.

## 6. Generador Docente (`docente.html`)

Hay dos temas nuevos en «2 · Tema(s)»: **Teoría atómica y estructura del átomo** (`atomo`) y **Configuración electrónica** (`config-e`). Cada uno incluye:
- **Sesión 1 (aprendizajes previos)**: datos curiosos, contexto nacional y local (el reactor IAN-R1, el carbono-14 en arqueología muisca y tairona, la pólvora de fin de año, el ensayo a la llama), ejemplos cotidianos y una pregunta de activación.
- **Sesión 2 (información)**: lectura, esquema y ejemplo resuelto con el código de colores (²³Na⁺ con sus partículas; ₂₆Fe = [Ar] 4s² 3d⁶).
- **Trabajo práctico**: dos tipos de ejercicio nuevos que se marcan solos al elegir el tema:
  - **D Partículas subatómicas**: 37 isótopos e iones reales en notación ᴬ_Z X con carga, con una tabla de protones, neutrones, electrones y tipo de especie.
  - **D Configuración electrónica**: 34 elementos (Z = 1–36, sin Cr ni Cu). Se pide la configuración completa y abreviada, el diagrama de orbitales, el periodo, el grupo, el bloque y los electrones de valencia.
- **Evaluación**: 12 preguntas tipo Saber 11 por tema (la opción A del banco es la correcta y se baraja al imprimir) y 6 preguntas abiertas por tema (explicar un experimento o proceso, escribir partículas o configuraciones, e identificar partes con el código de colores).

Los datos están en `assets/docente-datos.js` (TEMAS, SABER y ABIERTAS). Los ejercicios prácticos están en `assets/docente-app.js` (`ESPECIES_ATOMO`, `poolConfig`, `tarjetaParticulas` y `tarjetaConfig`).

**Tema «Enlace químico» (`enlace`)**, con la misma estructura:
- **Sesión 1**: el N≡N del aire y los abonos, sal frente a parafina, la sal de Zipaquirá y Nemocón, el cobre y el plástico de los cables, agua y aceite.
- **Sesión 2**: lectura (octeto, Lewis, electronegatividad, iónico, covalente polar/apolar, metálico y propiedades), esquema de los tres enlaces y ejemplo resuelto Na–Cl con ΔEN = 2,23.
- **D Tipo de enlace (ΔEN)**: 28 parejas de elementos con su EN (10 iónicas, 9 polares, 6 apolares y 3 metálicas). Se evitan los casos dudosos cerca de los límites, como N–O o H–F. Se pide metal o no metal, ΔEN, tipo de enlace con justificación, y la representación con la fórmula (`PARES_ENLACE` y `tarjetaEnlace`).
- **Evaluación**: 12 preguntas tipo Saber 11 (incluidos un laboratorio de tres sólidos blancos, el bombillo con cobre, sal y salmuera, y la sal de Zipaquirá) y 6 abiertas (formación del MgO, diseño de un ensayo, Lewis del NH₃, ΔEN de KBr, SO₂ y Cl₂, CaCl₂ y H₂O con el código de colores).

### Laberintos (`assets/laberinto.js`)
Hay un tipo de laberinto nuevo, **«Teoría atómica y configuración»**, con 4 grupos de preguntas que se pueden combinar:
- **Partículas subatómicas**: ¿cuántos protones, neutrones o electrones tiene ³⁷Cl⁻?, o ¿qué especie tiene 12 p⁺, 12 n⁰ y 10 e⁻? Usa 37 isótopos e iones reales.
- **Configuración electrónica**: de elemento a configuración abreviada y al revés (Z = 3–36, sin Cr ni Cu). Uno de los distractores es el error típico de poner el gas noble y repetir también sus electrones.
- **Configuración y tabla**: periodo y grupo a partir del final de la configuración, y electrones de valencia.
- **Modelos y reglas**: 25 preguntas cortas (Dalton, Thomson, Rutherford, Bohr, Chadwick, Millikan, Heisenberg, Aufbau, Pauli, Hund…).

Funciona igual que los demás laberintos: ruta única verificada, versiones con semilla, modo Jugar y hoja de clave. Se probaron 270 laberintos (todas las combinaciones de grupos y los 3 tamaños) y todos pasaron la verificación.

### Crucigramas (`assets/crucigrama.js`)
Hay dos tipos de pista nuevos:
- **Teoría atómica**: un glosario de 31 términos con una sola respuesta posible cada uno (NEUTRON, THOMSON, ORBITAL, HUND, ISOTOPOS…).
- **Configuración → elemento**: «Elemento con configuración [Ne] 3s² 3p⁴» → AZUFRE, o «Elemento neutro cuya configuración termina en 4p⁵» → BROMO.

Si solo se marcan pistas del átomo, no hace falta marcar familias de compuestos y el título cambia solo a «Crucigrama del átomo». Se probaron 60 crucigramas, todos verificados. La misma semilla siempre genera el mismo crucigrama.

## 7. Service worker

- `CACHE_NAME`: `ionom-v47` → `v48` (Teoría Atómica y menú) → `v49` (Configuración, `banco.js` y `ionom-ui.js`) → `v50` (Generador Docente: `docente-datos.js` y `docente-app.js`) → `v52` (`laberinto.js` y `crucigrama.js`; `main` ya había usado `v51`) → `v53` (`enlace.html` e `ionom-ui.js`) → `v54` (simulaciones nuevas de `enlace.html`) → `v55` (`BANCO_ENLACE` en `banco.js` y el tema de enlace en `docente-datos.js` y `docente-app.js`) → `v56` (portada reestructurada, `manifest.json` e `ionom-ui.js`).
- `atomo.html` y `configuracion.html` están en `ASSETS_TO_CACHE`, así que funcionan sin conexión. Las PhET son la única parte que necesita internet.

## 8. Ideas pendientes (propuestas de diseño)

- **Estados de dominio** en el menú átomo (explorado → practicado → dominado) según los quizzes y el Juego, en vez de solo «visitado».
- **Repaso espaciado**: una estación dominada que no se practica en 2 o 3 semanas se «oxida» y pide un repaso corto.
- **Misión de la semana** puesta por la docente desde el Generador Docente.
- **Diagnóstico de entrada** que sugiera por dónde empezar.
