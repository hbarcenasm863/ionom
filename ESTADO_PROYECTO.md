# IonNom — Estado del Proyecto

**Colegio Rufino José Cuervo I.E.D. · Bogotá, Colombia**
**Última actualización:** 2026-06-12

---

## ¿Qué es IonNom?

Herramienta web de aprendizaje de nomenclatura química inorgánica para estudiantes de grado 10° y 11°. Funciona completamente en el navegador (sin servidor) y consta de tres módulos:

| Archivo | Módulo | Descripción |
|---------|--------|-------------|
| `index.html` | Portada | Menú principal de entrada |
| `teoria.html` | Teoría | Referencia de reglas de nomenclatura |
| `funciones.html` | Funciones | Ejercicios interactivos por grupo funcional |
| `juego.html` | Juego | Modo de práctica con puntaje y métricas |
| `banco.js` | Banco | 301 compuestos con nombres trad/stock/sistemático |

---

## Cambios realizados

### 1. Banco de compuestos (`banco.js`)
- Expandido de ~210 a **301 compuestos** distribuidos en 8 grupos funcionales.
- Cada compuesto incluye: `formula`, `trad[]`, `stock[]`, `sist[]`, `group`.
- **35 anhídridos** ahora tienen dos nombres tradicionales: `['anhídrido X', 'óxido X']` para reflejar la nomenclatura colombiana donde los anhídridos se clasifican como *óxidos ácidos*.
- **Limpieza (2026-09-08)**: se detectaron y eliminaron **62 compuestos duplicados** (mismo `formula`+`group` repetido dos veces, ej. `HBr` en ácidos hídricos aparecía dos veces) que inflaban el conteo aparente del banco sin aportar variedad real — el estudiante veía "más preguntas" pero eran el mismo hecho memorizable repetido. También se eliminaron las **formas meta-/piro-** (`ácido metabórico`, `ácido metafosfórico`, `ácido pirofosfórico`) que no se enseñan en este curso. Se reforzó **Sales ácidas** (de 3 a 10 compuestos "fácil", de 12 a 23 en total) y se agregaron 2 compuestos reales adicionales a Ácidos hídricos e Hidruros. Total final: **403 compuestos únicos**, sin duplicados ni formas orto-/meta-/piro-/hidratadas en ningún grupo.

### 2. Teoría (`teoria.html`)
- Rediseño completo con navegación de **7 tarjetas** (cards-grid).
- Sección nueva: **Reactividad** (series de actividad de metales y no metales).
- Navegación con teclado (←/→/Escape).

### 3. Funciones (`funciones.html`)
- Reemplazo del sistema de pestañas por **navegación de 8 tarjetas**.
- Pantalla 1: menú de tarjetas coloreadas por tipo de compuesto.
- Pantalla 2: panel de contenido con migas de pan, barra de progreso y ejercicios interactivos.
- **Distinción colombiana**: tabla de reglas diferencia explícitamente entre *óxidos básicos* (metal + O) y *óxidos ácidos / anhídridos* (no metal + O), con nota contextual resaltada.
- Guarda la última sección visitada en `localStorage`.

### 4. Juego (`juego.html`)

#### Correcciones de jugabilidad
- **Sin repetición de compuestos**: nuevo algoritmo `buildQuestionQueue` basado en bolsas (*bags*) que evita repetir el mismo compuesto consecutivamente incluso cuando el grupo tiene menos de 10 compuestos.
- **Distractores inteligentes**: `buildSmartDistractors` usa el banco completo (301 entradas) como fuente de distractores falsos, eliminando los marcadores `'—'` que hacían obvia la respuesta correcta.
- **Variedad de tipos de pregunta**: `assignTypes` + `validTypesFor` distribuye los 10 tipos de pregunta disponibles según lo que cada compuesto soporta, evitando que una sesión sea mayormente opción múltiple.

#### Tipos de pregunta disponibles (10)
`mc` · `write-any` · `write-stock` · `write-sist` · `ox-state` · `drag` · `invert` · `balance`

#### Tabla periódica: configuración electrónica completa (2026-09-10)
- Antes las preguntas de "Tabla periódica y configuración electrónica" mostraban notación **abreviada** (ej. `[Ar] 4s²4p¹` para Ga). Ahora `elFullConfig()` construye la configuración **completa** desde 1s para los 103 elementos, reutilizando el campo `valence` existente (que ya trae correctamente las excepciones reales: Cr, Cu, Nb, Mo, Pd, Ag, La, Ce, Gd, Pt, Au) más los núcleos de gas noble completos y los bloques internos ya llenos que ese campo omitía (3d¹⁰/4d¹⁰/4f¹⁴ en elementos posteriores a un bloque d o f ya completo — ej. Ga, In, Tl, y los metales de transición del periodo 6 desde Hf). Verificado por script que el conteo de electrones de la cadena generada coincide exactamente con el número atómico para los 103 elementos.

#### Tabla periódica: auditoría y 4 tipos de pregunta nuevos (2026-09-10)
- **Bug corregido — `elValenceCount`**: para lantánidos/actínidos el campo `group` de este banco es una renumeración interna 3-17 (para poder listarlos en orden), no su grupo químico real. Sin chequear el `type` primero, 10 elementos (Ho, Er, Tm, Yb, Lu, Es, Fm, Md, No, Lr) cuya renumeración caía en 13-17 se colaban por la rama de bloque p y mostraban 3-7 electrones de valencia en vez de 2 (inconsistente con el resto de la serie, donde ya se usaba 2). Verificado con script para los 103 elementos.
- **Nombre engañoso corregido**: `elSamegroupNames` en realidad filtraba por *periodo*, no por grupo — renombrada a `elSameperiodNames` (sin cambio de comportamiento).
- **4 tipos de pregunta nuevos** (`EL_TYPES`, ahora 10 en total):
  - `el-metal`: Metal / No metal / Metaloide, a partir de la categoría ya asignada a cada elemento.
  - `el-block`: bloque s/p/d/f — lantánidos/actínidos son bloque f pese a su `group` renumerado, y el helio es bloque s pese a estar agrupado con los gases nobles.
  - `el-valence`: electrones de valencia preguntados directamente (sin mostrar la configuración electrónica, a diferencia de `el-config2val` que ya existía).
  - `el-property`: compara dos elementos del mismo periodo o del mismo grupo (electronegatividad real, o radio atómico por posición en la tabla) y pregunta cuál tiene el valor mayor — lantánidos/actínidos excluidos del emparejamiento por la misma razón del bug de `elValenceCount`.
- Verificado con scripts que corren `elValenceCount`/`elBlock`/`elMetalCategory` sobre los 103 elementos y `pickElPropertyPair` en 2000 pruebas por propiedad, sin errores ni valores inválidos.

#### Mejoras de interfaz
- **Botón "← Menú"** en la barra superior del juego con confirmación al salir a mitad de sesión.
- **Retroalimentación colombiana**: al responder un anhídrido, se muestra una nota explicando que en Colombia se llama también *óxido ácido*, con ambos nombres aceptados como correctos.

#### Modo Estudiante
- **Dos modos de juego**:
  - *Modo Libre*: sin métricas, sin identificación.
  - *Modo Estudiante*: el alumno ingresa su código de 6 dígitos; el sistema valida contra el listado oficial (~160 estudiantes de 10° y 11°) y muestra nombre y curso.
- Al terminar, envía automáticamente los resultados a Google Sheets vía **Google Apps Script** (`fetch` con `no-cors`).
- **Datos enviados**: fecha/hora, código, nombre, curso, grupo funcional, correctas, puntaje, total, intentos, porcentaje, calificación /5, nivel.
- **Estadísticas al ingresar el código**: justo después de validar el código, `juego.html` consulta `ionom-analytics.gs` (`GET ?accion=stats&nombre=...&curso=...`) y muestra sesiones jugadas, preguntas respondidas, % de acierto y nota de juego actual del estudiante (misma lógica que ChromaNom). Incluye enlace "Cambiar de estudiante" para que otro alumno use el mismo equipo sin recargar.
- **Tarjeta histórico vs. periodo (2026-09-08)**: la caja de estadísticas ahora muestra dos tarjetas separadas para que el estudiante entienda de dónde sale cada cifra — **🏅 Histórico total** (todas las partidas jugadas alguna vez, es lo que cuenta para el reto especial de 1.000 preguntas/80% de acierto) y **📅 Periodo actual** (con las fechas exactas del periodo académico vigente, es lo único que cuenta para la Nota de juego). El backend expone ambos conjuntos de cifras por separado (`numSesiones`/`totalPreguntas`/`pctGlobal` históricos vs. `numSesionesPeriodo`/`totalPreguntasPeriodo`/`pctGlobalPeriodo` del periodo) más el rango `periodo.inicio`/`periodo.fin`, así el frontend nunca hardcodea las fechas.
- **Nota de juego ponderada por preguntas (2026-09-10, alineado con ChromaNom)**: `calcularNotaJuego` ya no promedia el %-por-sesión (una práctica corta de pocas preguntas al 100% pesaba igual que una sesión completa de 20 al 100%). Ahora usa el % de acierto real del periodo (correctas/preguntas totales), con un **mínimo** de `SESIONES_ESPERADAS` sesiones (las que falten cuentan como 0 aciertos de 20 preguntas cada una, penalizando jugar de menos) pero **sin techo**: después de alcanzar ese mínimo, seguir jugando y mejorando el % sigue subiendo la nota sin límite de sesiones.

### 5. Apps Script (`ionom-analytics.gs`)
- Script de Google Apps Script listo para desplegar como aplicación web.
- Crea automáticamente las hojas `Registro`, `Estadísticas`, `Resumen por Curso` y una `Curso X` por curso si no existen.
- **URL de producción ya configurada** en `juego.html`.
- **Arquitectura de recálculo (v3.0, 2026-09-08 — alineada con Chromanom Analytics)**: `doPost` (guardar una partida) ya NO recalcula "Estadísticas"/"Eficacia por tema"/"Curso X" en cada envío — con un curso completo (~25-30 estudiantes) jugando a la vez, eso saturaba la ejecución y producía el error transitorio de Google "Too many simultaneous invocations: Spreadsheets", que el frontend mostraba como un genérico "error al enviar" sin relación real con la URL. Ahora ese recálculo lo hace un **disparador automático cada 30 min** (`actualizarEstadisticasAutomatico`, instalado una sola vez con `instalarActualizacionAutomatica`) o `recalcularAhora()` manualmente. `doPost` y el endpoint `GET ?accion=stats` (lectura de la hoja "Estadísticas" ya calculada, no recálculo en vivo) llevan además reintentos con espera aleatoria (*jitter*) para sobrevivir ese mismo error transitorio si ocurre. Contrapartida: las estadísticas que ve el estudiante pueden tener hasta ~30 min de rezago frente a su última partida — aceptable para un resumen de "cómo voy".
- Nota: este archivo vive en el repositorio, pero el Apps Script en producción es una copia separada — cualquier cambio requiere volver a implementarlo manualmente en script.google.com (Implementar → Gestionar implementaciones → Nueva versión) para que tenga efecto.
- (El archivo `appscript/Registro.gs` que se mencionaba aquí antes era una plantilla vieja con un esquema de hoja distinto y nunca fue la que está en producción; se eliminó del repositorio para evitar desplegar el script equivocado.)

---

## Estado actual de despliegue

| Componente | Estado |
|------------|--------|
| Código fuente (`main`) | ✅ Completo y empujado |
| Apps Script desplegado | ✅ Activo |
| URL conectada en `juego.html` | ✅ Configurada |
| Hoja de cálculo de resultados | ⚠️ Verificar que existe y tiene el ID correcto en `ionom-analytics.gs` |

---

## Pendiente / Próximos pasos

### Obligatorio antes de usar con estudiantes
- [ ] **Verificar la hoja de cálculo**: confirmar que el `SPREADSHEET_ID` en `ionom-analytics.gs` apunta a una hoja real en tu Google Drive y que tienes permisos de edición.
- [ ] **Prueba de extremo a extremo**: completar una partida en Modo Estudiante con un código válido y confirmar que el registro aparece en la hoja.
- [ ] **Instalar el disparador automático (una sola vez, tras cada redespliegue)**: en el editor de Apps Script, ejecutar la función `instalarActualizacionAutomatica` (▶ Ejecutar). Desde la v3.0, `doPost` ya NO recalcula "Estadísticas" en cada partida (eso saturaba la ejecución con un curso completo jugando a la vez) — el recálculo lo hace este disparador cada 30 min. Sin instalarlo, la hoja "Estadísticas" (y por lo tanto la caja de estadísticas del estudiante) se queda desactualizada.

### Mejoras opcionales sugeridas
- [ ] **Panel docente**: página `docente.html` que lea la hoja de resultados vía Apps Script y muestre estadísticas por curso (promedio, compuestos con más errores, progreso por estudiante).
- [ ] **Modo repaso personalizado**: al final de una sesión, ofrecer practicar solo los compuestos fallados.
- [ ] **Cronómetro por pregunta**: registrar el tiempo de respuesta para identificar conceptos con más dificultad.
- [ ] **Modo evaluación**: sesión bloqueada (sin retroalimentación inmediata, resultados solo al final) para usar como actividad calificada.
- [ ] **Soporte offline (PWA)**: agregar `manifest.json` y service worker para que funcione sin conexión (útil si el colegio tiene conectividad intermitente).
- [ ] **Actualizar listado de estudiantes**: el archivo `juego.html` tiene el listado del año actual; debe actualizarse cada año escolar.

---

## Estructura de archivos

```
ionom/
├── index.html              # Portada
├── teoria.html             # Módulo de teoría (7 secciones)
├── funciones.html          # Módulo de ejercicios (8 grupos)
├── juego.html              # Módulo de juego (Libre + Estudiante)
├── banco.js                # Compuestos y ejercicios inorgánicos
├── ionom-analytics.gs      # Google Apps Script para Google Sheets
└── ESTADO_PROYECTO.md      # Este archivo
```
