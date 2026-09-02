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

#### Mejoras de interfaz
- **Botón "← Menú"** en la barra superior del juego con confirmación al salir a mitad de sesión.
- **Retroalimentación colombiana**: al responder un anhídrido, se muestra una nota explicando que en Colombia se llama también *óxido ácido*, con ambos nombres aceptados como correctos.

#### Modo Estudiante
- **Dos modos de juego**:
  - *Modo Libre*: sin métricas, sin identificación.
  - *Modo Estudiante*: el alumno ingresa su código de 6 dígitos; el sistema valida contra el listado oficial (~160 estudiantes de 10° y 11°) y muestra nombre y curso.
- Al terminar, envía automáticamente los resultados a Google Sheets vía **Google Apps Script** (`fetch` con `no-cors`).
- **Datos enviados**: fecha/hora, código, nombre, curso, grupo funcional, correctas, puntaje, total, intentos, porcentaje, calificación /5, nivel.

### 5. Apps Script (`ionom-analytics.gs`)
- Script de Google Apps Script listo para desplegar como aplicación web.
- Crea automáticamente las hojas `Registro`, `Estadísticas`, `Resumen por Curso` y una `Curso X` por curso si no existen.
- **URL de producción ya configurada** en `juego.html`.
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
