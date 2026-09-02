# IonNom — Nomenclatura Inorgánica

Herramienta web interactiva para el aprendizaje de nomenclatura química inorgánica, diseñada para estudiantes de grado 10° y 11° del **Colegio Rufino José Cuervo I.E.D.** (Bogotá, Colombia).

## Módulos

| Archivo | Módulo | Descripción |
|---------|--------|-------------|
| `index.html` | Portada | Menú de entrada al proyecto |
| `teoria.html` | Teoría | Referencia de reglas de nomenclatura (8 secciones con navegación de tarjetas) |
| `funciones.html` | Funciones | Ejercicios interactivos por función inorgánica con ejemplos en contexto colombiano |
| `juego.html` | Juego | Preguntas cronometradas · Modo Libre y Modo Estudiante (registro automático a Google Sheets) |
| `nomenClash.html` | NomenClash | Juego de cartas por turnos, competencia entre estudiantes (con oponentes IA) |
| `generador.html` | Generador | Generador de talleres para imprimir o proyectar en clase |
| `simulador.html` | Simulador | Simulador de reacciones y de pH |
| `tabla.html` | Tabla periódica | Tabla periódica interactiva con calculadora integrada |
| `moles.html` | Mol y masa molar | Práctica de cálculos de mol y masa molar |
| `reacciones.html` | Tipos de reacción | Clasificación de reacciones químicas |
| `balanceo.html` | Balanceo | Balanceo de ecuaciones por tanteo |
| `balanceo-avanzado.html` | Balanceo avanzado | Balanceo algebraico y por óxido-reducción |
| `estequiometria.html` | Estequiometría | Cálculos estequiométricos con cadena de factores de conversión |
| `banco.js` | Banco | 457 compuestos y ejercicios (nomenclatura, reacciones, balanceo, mol/masa) |
| `ionom-analytics.gs` | Registro | Google Apps Script para registrar resultados del Modo Estudiante en Google Sheets |

## Funciones inorgánicas cubiertas

1. Óxidos Básicos (metal + O)
2. Anhídridos / Óxidos Ácidos (no metal + O) — con distinción curricular colombiana
3. Hidruros (metal + H⁻)
4. Ácidos Hídricos (H + no metal, sin oxígeno)
5. Bases / Hidróxidos (metal + OH⁻)
6. Ácidos Oxácidos (H + no metal + O)
7. Sales Binarias (metal + no metal)
8. Sales Oxigenadas (metal + oxoanión)
9. Sales Ácidas (oxoanión que retiene 1 o 2 H⁺: bi-/hidrogeno-, dihidrogeno-)

## Tipos de pregunta en el Juego

`opción múltiple` · `escritura libre` · `nomenclatura Stock` · `nomenclatura sistemática` · `estado de oxidación` · `asignar EO por átomo` · `completar nombre` · `nombre → fórmula` · `equilibrio iónico` · `balance de cargas` · `cadena de reactividad` · `clasificar reacción` · `balanceo por tanteo` · `cálculo mol/masa`

## Modo Estudiante

Los estudiantes ingresan su código de 6 dígitos; el sistema valida contra el listado oficial y envía los resultados al docente vía Google Apps Script → Google Sheets (hojas `Registro`, `Estadísticas`, `Resumen por Curso` y una `Curso X` por cada curso).

Para activarlo, el docente debe desplegar `ionom-analytics.gs` como aplicación web en [script.google.com](https://script.google.com) y configurar el `SPREADSHEET_ID` con el ID de su hoja de cálculo. Cualquier cambio posterior al archivo requiere volver a implementarlo (Implementar → Gestionar implementaciones → Nueva versión) para que tenga efecto real.

## PWA

El proyecto incluye `manifest.json` y `sw.js` para instalación como Progressive Web App en dispositivos móviles y de escritorio.

---

Desarrollado por **Harvey Bárcenas Morales** · Licencia CC BY-NC 4.0
