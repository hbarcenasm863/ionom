# IonNom — Nomenclatura Inorgánica

Herramienta web interactiva para el aprendizaje de nomenclatura química inorgánica, diseñada para estudiantes de grado 10° y 11° del **Colegio Rufino José Cuervo I.E.D.** (Bogotá, Colombia).

## Módulos

| Archivo | Módulo | Descripción |
|---------|--------|-------------|
| `index.html` | Portada | Menú de entrada al proyecto |
| `teoria.html` | Teoría | Referencia de reglas de nomenclatura (7 secciones con navegación de tarjetas) |
| `funciones.html` | Funciones | Ejercicios interactivos por función inorgánica con ejemplos en contexto colombiano |
| `juego.html` | Juego | 20 preguntas cronometradas · 10 tipos de pregunta · Modo Libre y Modo Estudiante |
| `generador.html` | Generador | Generador de ejercicios para imprimir o proyectar en clase |
| `nomenClash.html` | NomenClash | Modo competencia entre estudiantes |
| `banco.js` | Banco | 301 compuestos inorgánicos con nombres tradicional, Stock y sistemático |
| `appscript/Registro.gs` | Registro | Google Apps Script para registrar resultados del Modo Estudiante en Google Sheets |

## Funciones inorgánicas cubiertas

1. Óxidos Básicos (metal + O)
2. Anhídridos / Óxidos Ácidos (no metal + O) — con distinción curricular colombiana
3. Hidruros (metal + H⁻)
4. Ácidos Hídricos (H + no metal, sin oxígeno)
5. Bases / Hidróxidos (metal + OH⁻)
6. Ácidos Oxácidos (H + no metal + O)
7. Sales Binarias (metal + no metal)
8. Sales Oxigenadas (metal + oxoanión)

## Tipos de pregunta en el Juego

`opción múltiple` · `escritura libre` · `nomenclatura Stock` · `nomenclatura sistemática` · `estado de oxidación` · `asignar EO por átomo` · `completar nombre` · `nombre → fórmula` · `equilibrio iónico` · `balance de cargas`

## Modo Estudiante

Los estudiantes ingresan su código de 6 dígitos; el sistema valida contra el listado oficial y envía los resultados al docente vía Google Apps Script → Google Sheets.

Para activarlo, el docente debe desplegar `appscript/Registro.gs` como aplicación web en [script.google.com](https://script.google.com) y configurar el `SPREADSHEET_ID` con el ID de su hoja de cálculo.

## PWA

El proyecto incluye `manifest.json` y `sw.js` para instalación como Progressive Web App en dispositivos móviles y de escritorio.

---

Desarrollado por **Harvey Bárcenas Morales** · Licencia CC BY-NC 4.0
