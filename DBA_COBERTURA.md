# IonNom — Cobertura de los DBA de Ciencias Naturales (química)

Revisión del repositorio contra los *Derechos Básicos de Aprendizaje, Ciencias Naturales, V.1* (MEN, 2016), grados 1.° a 11.°.
Solo se consideran los DBA de **química** (materia, mezclas, átomo, enlace, reacciones, gases, soluciones, ácido-base). Los de física (luz, sonido, fuerzas, circuitos, ondas) y biología son de otros sitios o quedan fuera de IonNom; los de química **orgánica** (11.° DBA 4) corresponden a ChromaNom.

Estado actual de preguntas (para dimensionar): panel docente 1 023 tipo Saber + 522 abiertas en 23 temas; juego 874 Saber extra + bancos propios; 17 preguntas oficiales del Icfes. Simulaciones: `sim10.js` (6), `simx.js` (5: cristal, cambioEstado, titulacion, pila, colisiones).

## 1. Matriz DBA → lo que ya existe

| Grado · DBA | Aprendizaje (resumen) | Dónde está en IonNom | Estado |
|---|---|---|---|
| 1.° · 2 | Materiales y sus propiedades (dureza, flexibilidad, solubilidad…) | — | ❌ No hay |
| 2.° · 2 | Estados sólido, líquido, gas | `modelos.html` solo trata la curva del agua | ⚠️ Parcial |
| 3.° · 4 | T y cambios de estado del agua | `simx.cambioEstado` + `modelos.html` | ✅ Cubierto |
| 4.° · 5 | Mezclas homogéneas/heterogéneas y su separación | — (0 menciones de filtración, decantación, tamizado) | ❌ No hay |
| 6.° · 2 | T y P vs. solubilidad, densidad, PE/PF; separar mezclas (destilación, cristalización) | Punto de ebullición por altitud en `modelos.html`; solubilidad en `soluciones.html` | ⚠️ Parcial (sin separación ni presión de vapor) |
| 6.° · 3 | Sustancias puras vs. mezclas, coloides, agua como solvente | `soluciones.html` (disolución) | ⚠️ Parcial (sin coloides ni clasificación de materia) |
| 7.° · 2 | Tabla periódica, Z y A, Bohr, Lewis, variación de propiedades | `tabla.html`, `atomo.html`, `configuracion.html`, `enlace.html` | ✅ Cubierto (revisar PF/PE/densidad por grupo) |
| 7.° · 3-4 | Fotosíntesis/respiración, ciclos C-N-agua | — | ❌ No hay (coordinar con BioNom) |
| 8.° · 2 | Reacción = recombinación de átomos; enlaces iónico/covalente; cambio físico vs. químico; propiedades según el enlace | `reacciones.html`, `enlace.html` | ⚠️ Parcial (falta **cambio físico vs. químico** explícito) |
| 8.° · 3 | Gas ideal, leyes de los gases, teoría cinético-molecular | `gases.html` + simulación | ✅ Cubierto |
| 9.° · 2 | Ácidos y bases: **Arrhenius, Brønsted-Lowry y Lewis**; pH/pOH; indicadores; usos | `ph.html` (Arrhenius y Brønsted, titulación, repollo) | ⚠️ Falta **Lewis** y **pOH** |
| 9.° · 3 | Soluciones, saturación, % m, % v, M, m; **fuerzas intermoleculares** | `soluciones.html` completo en concentración | ⚠️ Falta **fuerzas intermoleculares** (0 menciones de puentes de H / Van der Waals) |
| 10.° · 3 | Redox, descomposición, neutralización, **precipitación**; balanceo, carga, IUPAC, estequiometría | `reacciones`, `balanceo*`, `estequiometria`, `industria`, nomenclatura completa | ⚠️ Falta **precipitación** (reglas de solubilidad) y **redox** como tema propio |
| 11.° · 4 | Mecanismos orgánicos, pruebas (Benedict, Fehling, Tollens); **exo/endotérmica, catalizadores** | Orgánica → ChromaNom. Exo/endo solo en una guía PDF (`guia-termoquimica.pdf`) | ⚠️ Falta termoquímica/catálisis en juego y docente |
| 11.° · 5 | Calentamiento global, contaminación, minería | Lluvia ácida en `ph.html` | ⚠️ Falta efecto invernadero / CO₂ |

## 2. Huecos, por prioridad

### Prioridad alta (DBA sin ningún contenido)
1. **Materia y mezclas** (4.°·5, 6.°·2-3, 1.°·2, 2.°·2). Tema nuevo `mezclas`.
   - Animación `simx.separacion`: el estudiante recibe una mezcla (agua-arena, agua-sal, agua-aceite, sal-limaduras) y elige la técnica (filtración, decantación, tamizado, evaporación, cristalización, destilación); la simulación muestra las partículas separándose y avisa si la técnica no sirve.
   - Clasificador de materia (elemento / compuesto / mezcla homogénea / heterogénea / coloide) con la visión de partículas.
   - Preguntas Saber: ~30 (competencias uso, explicación, indagación), con contextos colombianos (sal de Zipaquirá, panela, minería de oro y mercurio, potabilización del agua).
2. **Fuerzas intermoleculares** (9.°·3, 8.°·2). Tema nuevo `intermoleculares`.
   - Animación `simx.intermolecular`: moléculas de agua, metano y HCl; se activan dipolo-dipolo, London y puente de hidrógeno y se ve cómo sube el punto de ebullición.
   - Preguntas Saber: ~30 (PE/PF, solubilidad «semejante disuelve a semejante», tensión superficial, por qué el hielo flota).
3. **Cambios físicos y químicos + modelo corpuscular de los estados** (2.°·2, 8.°·2). Tema nuevo `materia`, junto al de mezclas.
   - Animación `simx.estados`: sólido-líquido-gas con control de T y P (olla a presión de 6.°·2), complementa la curva de `cambioEstado`.
   - Preguntas: clasificar cambios (físico/químico) con evidencias (gas, color, precipitado).

### Prioridad media (DBA parcialmente cubiertos)
4. **Teoría de Lewis y pOH** (9.°·2): ampliar `ph.html` y `BANCO_PH` (~10 preguntas); relación pH + pOH = 14.
5. **Precipitación y redox** (10.°·3): animación `simx.precipitacion` (se mezclan dos soluciones, se forma el sólido, ecuación iónica neta) y 15-20 preguntas con la tabla de solubilidad. La pila (`simx.pila`) ya cubre parte del redox; falta el balance de oxidante y reductor como tema de juego.
6. **Termoquímica y catálisis** (11.°·4): hoy existe solo `guia-termoquimica.pdf`. Animación `simx.energia` (diagrama de energía de reacción exo/endo con y sin catalizador) y ~20 preguntas Saber. `simx.colisiones` ya cubre la rapidez.

### Prioridad baja
7. **Propiedades periódicas de sustancias simples** (7.°·2): agregar ~10 preguntas sobre densidad, PF y PE por grupo en `elemento`/`atomo`.
8. **Ambiente y química del CO₂** (11.°·5, 7.°·4): efecto invernadero, ciclo del carbono y nitrógeno. Coordinar con BioNom para no duplicar.

## 3. Cómo se ubicaría en juego y en docente

Cada tema nuevo toca los mismos puntos que los existentes (`gases`, `soluciones`, …):

- **Preguntas**: nuevo `window` con formato `{tema, t:'uso|exp|ind', af, ctx, q, o[4], exp}` en `assets/docente-datos.js` (SABER y ABIERTAS) y `TEMAS` (con `previos`, `info`, `esquema`, `ejemplo`).
- **Juego**: banco `BANCO_*` en `banco.js` + botón de grupo en `juego.html` + `STUDY_TIPS` + `GRUPO_TEMAS`; regenerar `assets/saber-juego.js` con `node herramientas/generar-saber-juego.js`.
- **Docente**: se listan solos al estar en `TEMAS`.
- **Simulaciones**: en `assets/simx.js` con `data-simx`, con soporte de pantalla completa (`pantalla.js`).
- **Página de teoría**: una `.html` por tema, con el patrón de `gases.html`.
- **Al terminar**: subir `CACHE_NAME` en `sw.js` en el mismo commit (se editan `banco.js` y archivos cacheados) y avisar de actualizar `ionom-analytics.gs` solo si se agregan temas al registro.

Sugerencia transversal: agregar a cada pregunta un campo `dba:'9-3'` (grado-número) para que el panel docente filtre por DBA y se vea qué evidencias de aprendizaje quedan sin evaluar.

## 4. Nota sobre los grados

El proyecto está orientado a 10.° y 11.° (README y SED 10.°). Para que los DBA de 1.° a 9.° tengan sentido, los temas nuevos de materia, mezclas y estados deberían tener un indicador de nivel (básico / medio) y no mezclarse con las preguntas de nomenclatura en el Modo Estudiante.
