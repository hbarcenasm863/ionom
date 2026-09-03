/**
 * IonNom Analytics — Google Apps Script
 * ═══════════════════════════════════════════════════════════════════════════
 * Backend de analíticas para el juego de nomenclatura inorgánica (IonNom).
 * Misma arquitectura y mismas reglas de negocio que Chromanom Analytics
 * (nomenclatura orgánica), adaptado a los temas y al periodo de IonNom.
 *
 * FORMATO DEL PAYLOAD que el frontend debe enviar por POST (JSON):
 * {
 *   sesion:          'abc123',          // código único de la sesión de juego,
 *                                        // el MISMO en todos los eventos de esa partida
 *   trigger:         'inicio'|'fin_partida'|'cierre'|'manual',
 *   nombre:          'Juan Pérez',
 *   curso:           '10-1',
 *   nivel:           'Óxidos básicos',  // tema/nivel jugado en este evento
 *   correctas:       15,
 *   total:           20,
 *   errores_mc:      2,                 // errores por tipo de pregunta
 *   errores_drag:    1,
 *   errores_id:      0,
 *   errores_write:   2,
 *   tiempo_agotado:  1,                 // veces que se acabó el tiempo sin responder
 *   errores_tema:    {'Óxidos básicos': 2, 'Sales binarias': 1},
 *   aciertos_tema:   {'Óxidos básicos': 8, 'Sales binarias': 5},
 *   fallados:        ['Fe2O3', 'NaCl']  // fórmulas/compuestos fallados en el evento
 * }
 * Se aceptan alias en camelCase para los campos nuevos (erroresMc, tiempoAgotado,
 * etc.) y 'razon' como alias de 'trigger' por compatibilidad con versiones previas
 * del frontend. Los campos no reconocidos simplemente se ignoran.
 */

// ── Configuración general ───────────────────────────────────────────────────
// Si SPREADSHEET_ID apunta a una hoja real y accesible, se usa esa. Si está
// vacío o ya no es válido, obtenerSpreadsheet() crea una nueva con este nombre
// y recuerda su ID (PropertiesService) para no crear una hoja distinta en cada
// ejecución — así el requisito de "crear si no existe" no depende de editar
// esta constante a mano.
const SPREADSHEET_ID   = '1zTGviQ62F77ULA0_flXxFAkmT_NcOTnvYN9b71hoTnQ';
const SPREADSHEET_NAME = 'IonNom — Registro de resultados';
const TZ = 'America/Bogota';

// Verificación de despliegue (Regla 7): abrir la URL de la Web App en el
// navegador debe mostrar este texto — así se sabe con certeza qué versión del
// código está realmente en producción y no una implementación vieja en caché.
const BUILD_TAG = 'IonNom Analytics v2.0 — 2026-09-03';

// Periodo académico vigente y meta de sesiones (Regla 5 — Nota de juego).
// Ajustar estas tres constantes al iniciar cada periodo.
const FECHA_INICIO_PERIODO = '2026-08-31'; // yyyy-MM-dd
const FECHA_FIN_PERIODO    = '2026-10-30'; // yyyy-MM-dd
const SESIONES_ESPERADAS   = 22;           // ≈ 2 veces por semana durante el periodo

// Temas principales de nomenclatura inorgánica del juego. Se usan como columnas
// fijas de "% acierto por tema" en Estadísticas y como filas base de "Eficacia
// por tema" (cualquier tema adicional que llegue en los datos igual se agrega
// dinámicamente, para no perder información por un nombre de tema no previsto
// aquí — ver calcularEficaciaPorTema).
const TEMAS_PRINCIPALES = [
  'Óxidos básicos',
  'Óxidos ácidos (anhídridos)',
  'Hidruros',
  'Ácidos hidrácidos',
  'Hidróxidos (bases)',
  'Ácidos oxácidos',
  'Sales binarias',
  'Sales oxigenadas',
  'Sales ácidas'
];

// ── Columnas de "Registro" (1-based) ────────────────────────────────────────
const COL = {
  TIMESTAMP: 1, FECHA: 2, HORA: 3, NOMBRE: 4, CURSO: 5, NIVEL: 6, SESION: 7,
  CORRECTAS: 8, TOTAL: 9, PCT: 10, ERR_MC: 11, ERR_DRAG: 12, ERR_ID: 13,
  ERR_WRITE: 14, TIEMPO_AGOTADO: 15, ERR_TEMA: 16, ACIERTOS_TEMA: 17,
  FALLADOS: 18, TRIGGER: 19
};

const REG_HEADERS = [
  'Timestamp', 'Fecha', 'Hora', 'Nombre', 'Curso', 'Nivel', 'Sesión',
  'Correctas', 'Total', '% Acierto', 'Errores MC', 'Errores Drag',
  'Errores ID', 'Errores Write', 'Tiempo agotado', 'Errores por tema',
  'Aciertos por tema', 'Moléculas/compuestos fallados', 'Trigger'
];

const EST_HEADERS_BASE = [
  'Nombre', 'Curso', 'Sesiones', 'Preguntas respondidas',
  '% Acierto global', 'Nota juego (0-5)'
];

const EFI_HEADERS = ['Tema', 'Correctas', 'Errores', 'Total intentos', '% Acierto'];

const CURSO_HEADERS = [
  'Nombre', 'Sesiones', 'Preguntas respondidas', '% Acierto',
  'Nota juego (0-5)', 'Última sesión'
];

// ══════════════════════════════════════════════════════════════════════════
// PUNTOS DE ENTRADA HTTP
// ══════════════════════════════════════════════════════════════════════════

function doGet(e) {
  // Texto plano simple: sirve para confirmar en el navegador, sin ambigüedad,
  // qué implementación (deployment) está realmente activa en producción.
  const texto = 'IonNom Analytics activo.\n' +
    'BUILD_TAG: ' + BUILD_TAG + '\n' +
    'Spreadsheet: ' + obtenerSpreadsheet().getUrl();
  return ContentService.createTextOutput(texto).setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  // Regla 10: todo el ciclo va en try/catch y siempre responde JSON — un
  // frontend con mode:'no-cors' no puede leer la respuesta, pero otros
  // clientes (pruebas, Postman, un futuro panel docente) sí, y el catch
  // evita que un error deje al estudiante con un POST colgado sin registrar.
  try {
    const d = JSON.parse(e.postData.contents);
    const ss = obtenerSpreadsheet();
    upsertRegistro(ss, d);
    recalcularTodasLasEstadisticas();
    return salidaJSON({ ok: true });
  } catch (err) {
    registrarError('doPost', err);
    return salidaJSON({ ok: false, error: String((err && err.message) || err) });
  }
}

function salidaJSON(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// ── Obtener (o crear) el spreadsheet de destino ─────────────────────────────
function obtenerSpreadsheet() {
  if (SPREADSHEET_ID) {
    try { return SpreadsheetApp.openById(SPREADSHEET_ID); } catch (err) { /* ID inválido, seguimos con el fallback */ }
  }
  const props = PropertiesService.getScriptProperties();
  const idGuardado = props.getProperty('SPREADSHEET_ID_CREADO');
  if (idGuardado) {
    try { return SpreadsheetApp.openById(idGuardado); } catch (err) { /* también inválido, se recrea abajo */ }
  }
  const nuevo = SpreadsheetApp.create(SPREADSHEET_NAME);
  props.setProperty('SPREADSHEET_ID_CREADO', nuevo.getId());
  return nuevo;
}

// ══════════════════════════════════════════════════════════════════════════
// HOJA "Registro" — upsert por código de sesión (Regla 1)
// ══════════════════════════════════════════════════════════════════════════
// Un mismo código de sesión llega varias veces (inicio, fin_partida/cierre/
// manual). Si cada evento se añadiera como fila nueva, la misma partida
// quedaría duplicada varias veces y las estadísticas de "Sesiones" quedarían
// infladas. Por eso: buscar primero por código de Sesión y actualizar esa
// fila en lugar de añadir una nueva.
function upsertRegistro(ss, d) {
  const sh = obtenerHojaRegistro(ss);

  const sesionCod = String(d.sesion || d.codigoSesion || d.sessionId || '').trim();
  const total = Number(d.total || d.total_preguntas || 0) || 0;
  const correctasCrudas = Number(d.correctas || 0) || 0;
  const correctas = total > 0 ? Math.min(correctasCrudas, total) : correctasCrudas;
  const pct = total > 0 ? Math.round((correctas / total) * 100) : Math.round(Number(d.porcentaje || 0) || 0);

  const erroresTema = (d.errores_tema || d.erroresTema || {});
  const aciertosTema = (d.aciertos_tema || d.aciertosTema || {});
  const fallados = d.fallados || d.compuestos_fallados || d.moleculas_falladas || [];
  const falladosTxt = Array.isArray(fallados) ? fallados.join(', ') : String(fallados || '');
  const trigger = String(d.trigger || d.razon || d.evento || '').trim();

  // Buscar la fila de esta sesión, si ya existe.
  let filaExistente = -1;
  let timestampOriginal = null;
  if (sesionCod && sh.getLastRow() > 1) {
    const datos = sh.getRange(2, 1, sh.getLastRow() - 1, REG_HEADERS.length).getValues();
    for (let i = 0; i < datos.length; i++) {
      if (String(datos[i][COL.SESION - 1]).trim() === sesionCod) {
        filaExistente = i + 2;
        timestampOriginal = datos[i][COL.TIMESTAMP - 1];
        break;
      }
    }
  }

  // El Timestamp se fija con la hora del servidor al recibir el primer evento
  // de la sesión (no con el reloj del navegador del estudiante, que puede
  // estar desincronizado, ni parseando el string que manda el cliente, cuyo
  // formato sin zona horaria se presta a interpretarse mal). Al actualizar,
  // se conserva ese Timestamp original — nunca se pisa (Regla 1).
  const timestamp = (filaExistente !== -1 && timestampOriginal instanceof Date) ? timestampOriginal : new Date();
  const fecha = Utilities.formatDate(timestamp, TZ, 'yyyy-MM-dd');
  const hora = Utilities.formatDate(timestamp, TZ, 'HH:mm:ss');

  const fila = [
    timestamp, fecha, hora,
    String(d.nombre || ''), String(d.curso || ''), String(d.nivel || ''),
    sesionCod, correctas, total, pct,
    Number(d.errores_mc || d.erroresMc || 0) || 0,
    Number(d.errores_drag || d.erroresDrag || 0) || 0,
    Number(d.errores_id || d.erroresId || 0) || 0,
    Number(d.errores_write || d.erroresWrite || 0) || 0,
    Number(d.tiempo_agotado || d.tiempoAgotado || 0) || 0,
    JSON.stringify(erroresTema || {}),
    JSON.stringify(aciertosTema || {}),
    falladosTxt,
    trigger
  ];

  let filaIdx;
  if (filaExistente !== -1) {
    sh.getRange(filaExistente, 1, 1, fila.length).setValues([fila]);
    filaIdx = filaExistente;
  } else {
    sh.appendRow(fila);
    filaIdx = sh.getLastRow();
  }
  sh.getRange(filaIdx, 1, 1, fila.length).setBackground(colorPorPorcentaje(pct));
}

function obtenerHojaRegistro(ss) {
  let sh = ss.getSheetByName('Registro');
  if (!sh) {
    sh = ss.insertSheet('Registro');
    escribirEncabezadosRegistro(sh);
    return sh;
  }
  // La hoja ya existía (posiblemente con datos del esquema anterior de
  // IonNom Analytics v1) — migrarla si hace falta antes de usarla.
  migrarRegistroSiEsNecesario(sh);
  return sh;
}

function escribirEncabezadosRegistro(sh) {
  sh.getRange(1, 1, 1, REG_HEADERS.length).setValues([REG_HEADERS])
    .setBackground('#343a40').setFontColor('#ffffff').setFontWeight('bold');
  sh.setFrozenRows(1);
}

// Migración del esquema viejo (IonNom Analytics v1) al nuevo, para que los
// datos ya guardados en producción NO se pierdan y sigan contando en
// Sesiones/Estadísticas/Eficacia por tema. Es idempotente: si el encabezado
// ya es el nuevo, no hace nada; si no reconoce el encabezado (ni nuevo ni el
// viejo v1), no toca la hoja y deja constancia en "Errores" para revisión
// manual — mejor no migrar que migrar mal y perder datos.
function migrarRegistroSiEsNecesario(sh) {
  if (sh.getLastRow() < 1) { escribirEncabezadosRegistro(sh); return; }

  const anchoActual = Math.max(sh.getLastColumn(), 1);
  const encabezadoActual = sh.getRange(1, 1, 1, anchoActual).getValues()[0].map(String);

  const yaEsNuevo = REG_HEADERS.every(function (h, i) { return encabezadoActual[i] === h; });
  if (yaEsNuevo) return;

  // Esquema de IonNom Analytics v1: cada fila vieja YA era una sesión real y
  // distinta (ese script no hacía upsert ni las duplicaba), así que basta con
  // reordenar/completar columnas — no hay riesgo de colapsar sesiones legítimas.
  const HEADERS_VIEJOS = ['Timestamp', 'Código', 'Nombre', 'Curso', 'Grupo/Tema',
    'Respondidas', 'Total', 'Correctas', 'Intentos', 'Puntaje', 'Porcentaje',
    'Calificación', 'Nivel', 'Razón'];
  const esViejo = HEADERS_VIEJOS.every(function (h, i) { return encabezadoActual[i] === h; });
  if (!esViejo) {
    registrarError('migrarRegistroSiEsNecesario',
      new Error('Encabezado de "Registro" no reconocido, no se migró automáticamente: ' + JSON.stringify(encabezadoActual)));
    return;
  }

  const filasViejas = sh.getLastRow() > 1
    ? sh.getRange(2, 1, sh.getLastRow() - 1, HEADERS_VIEJOS.length).getValues()
    : [];

  const filasNuevas = filasViejas.map(function (r, i) {
    const tsCruda = r[0] instanceof Date ? r[0] : new Date(r[0]);
    const timestamp = (tsCruda instanceof Date && !isNaN(tsCruda)) ? tsCruda : new Date();
    const fecha = Utilities.formatDate(timestamp, TZ, 'yyyy-MM-dd');
    const hora = Utilities.formatDate(timestamp, TZ, 'HH:mm:ss');

    const codigoEstudiante = String(r[1] || '');
    const nombre = String(r[2] || '');
    const curso = String(r[3] || '');
    const tema = String(r[4] || ''); // "Grupo/Tema" viejo → Nivel/tema nuevo
    const total = Number(r[6]) || 0;
    const correctas = Number(r[7]) || 0;
    const pct = total > 0 ? Math.round((correctas / total) * 100) : (Number(r[10]) || 0);
    const razon = String(r[13] || '');

    // No existía código de sesión en v1 (el "Código" viejo era el código del
    // ALUMNO, repetido en todas sus partidas) — se sintetiza uno único por
    // fila combinando código de alumno + timestamp + índice, para que cada
    // fila vieja siga contando como una sesión distinta y no se colapsen
    // entre sí con la Regla 2 de deduplicación.
    const sesionSintetica = 'MIG_' + codigoEstudiante + '_' +
      Utilities.formatDate(timestamp, TZ, "yyyyMMdd'T'HHmmss") + '_' + i;

    // v1 no desglosaba errores por tipo de pregunta ni por tema individual,
    // pero sí sabía qué "Grupo/Tema" se jugó y cuántas fueron correctas — con
    // eso se puede reconstruir un aciertos_tema/errores_tema de un solo tema
    // por fila, para que "Eficacia por tema" y el % por tema en Estadísticas
    // no queden en blanco para todo el historial migrado.
    const aciertosTema = {}, erroresTema = {};
    if (tema) {
      aciertosTema[tema] = correctas;
      erroresTema[tema] = Math.max(total - correctas, 0);
    }

    return [
      timestamp, fecha, hora, nombre, curso, tema, sesionSintetica,
      correctas, total, pct,
      0, 0, 0, 0, 0, // Errores MC/Drag/ID/Write y Tiempo agotado: sin dato en v1
      JSON.stringify(erroresTema), JSON.stringify(aciertosTema),
      '', razon
    ];
  });

  sh.clearContents();
  sh.clearFormats();
  escribirEncabezadosRegistro(sh);
  if (filasNuevas.length) {
    sh.getRange(2, 1, filasNuevas.length, REG_HEADERS.length).setValues(filasNuevas);
    const colores = filasNuevas.map(function (f) {
      return new Array(REG_HEADERS.length).fill(colorPorPorcentaje(f[9]));
    });
    sh.getRange(2, 1, filasNuevas.length, REG_HEADERS.length).setBackgrounds(colores);
  }
  Logger.log('Migración de "Registro" completada: ' + filasNuevas.length + ' fila(s) antiguas convertidas al nuevo esquema.');
}

// ══════════════════════════════════════════════════════════════════════════
// LECTURA + NORMALIZACIÓN de "Registro" (compartida por las 3 hojas de stats)
// ══════════════════════════════════════════════════════════════════════════

// Regla 4: Sheets a veces guarda como Number/Date un valor que se escribió
// como texto (si "parece" un número o una fecha), lo que rompe comparaciones
// tipo string. Por eso, al leer, se fuerza explícitamente el tipo de cada
// columna antes de usarla en cualquier comparación o agrupación.
function leerRegistroDeduplicado(ss) {
  const sh = obtenerHojaRegistro(ss); // migra el esquema viejo si hace falta antes de leer
  if (!sh || sh.getLastRow() < 2) return [];

  const datos = sh.getRange(2, 1, sh.getLastRow() - 1, REG_HEADERS.length).getValues();
  const filas = datos.map(function (r, idx) {
    return {
      fecha: normalizarFecha(r[COL.FECHA - 1]),
      hora: String(r[COL.HORA - 1] || ''),
      nombre: String(r[COL.NOMBRE - 1] || ''),
      curso: String(r[COL.CURSO - 1] || '').trim(),
      sesion: String(r[COL.SESION - 1] || '').trim(),
      correctas: Number(r[COL.CORRECTAS - 1]) || 0,
      total: Number(r[COL.TOTAL - 1]) || 0,
      pct: Number(r[COL.PCT - 1]) || 0,
      erroresTema: parseJSONSeguro(r[COL.ERR_TEMA - 1]),
      aciertosTema: parseJSONSeguro(r[COL.ACIERTOS_TEMA - 1]),
      _idxOriginal: idx
    };
  });

  // Regla 2: colapsar filas duplicadas del mismo código de sesión (datos
  // históricos previos a implementar el upsert de la Regla 1), quedándose con
  // la de mayor Total por ser la más completa. Solo en memoria — no borra nada
  // en "Registro". Las filas sin código de sesión nunca se colapsan entre sí.
  const mejorPorSesion = {};
  filas.forEach(function (f) {
    const clave = f.sesion || ('__SIN_SESION_' + f._idxOriginal);
    if (!mejorPorSesion[clave] || f.total > mejorPorSesion[clave].total) {
      mejorPorSesion[clave] = f;
    }
  });
  return Object.keys(mejorPorSesion).map(function (k) { return mejorPorSesion[k]; });
}

function normalizarFecha(v) {
  if (v instanceof Date) return Utilities.formatDate(v, TZ, 'yyyy-MM-dd');
  return String(v || '').trim();
}

function parseJSONSeguro(v) {
  try {
    const o = JSON.parse(v);
    return (o && typeof o === 'object') ? o : {};
  } catch (err) {
    return {};
  }
}

// Regla 3: normalización robusta del nombre del estudiante. El mismo alumno
// puede aparecer como "Juan Pérez", "PÉREZ JUAN" o "juan perez" en filas
// distintas. La clave de agrupación pasa a mayúsculas, quita tildes, parte en
// palabras y las ordena alfabéticamente — así el orden nombres/apellidos y los
// acentos dejan de importar para saber si es "el mismo" estudiante.
function normalizarNombreClave(nombre) {
  const limpio = quitarTildes(String(nombre || '').toUpperCase())
    .replace(/[^A-Z\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!limpio) return '';
  return limpio.split(' ').filter(Boolean).sort().join(' ');
}

function quitarTildes(s) {
  // \u0300-\u036f es el rango Unicode de marcas diacríticas combinantes
  // (acentos, virgulilla, diéresis...) que NFD separa de la letra base.
  return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function esMayusculas(nombre) {
  const s = String(nombre || '').trim();
  return !!s && s === s.toUpperCase();
}

// Agrupa las filas deduplicadas por estudiante (nombre normalizado + curso).
// Se conserva la variante del nombre en mayúsculas como "oficial" para
// mostrar en las hojas (Regla 3); si ninguna variante viene en mayúsculas se
// deja la primera que se encontró.
function agruparPorEstudiante(filasDedup) {
  const grupos = {};
  filasDedup.forEach(function (f) {
    const normKey = normalizarNombreClave(f.nombre);
    if (!normKey) return; // fila sin nombre utilizable — no aporta a las estadísticas
    const curso = f.curso || '(Sin curso)';
    const clave = normKey + '|' + curso;
    if (!grupos[clave]) {
      grupos[clave] = { normKey: normKey, curso: curso, nombreDisplay: f.nombre, sesiones: [] };
    } else if (!esMayusculas(grupos[clave].nombreDisplay) && esMayusculas(f.nombre)) {
      grupos[clave].nombreDisplay = f.nombre;
    }
    grupos[clave].sesiones.push(f);
  });
  return grupos;
}

// ── Estadísticas agregadas de un estudiante (compartido por Estadísticas y Curso X) ──
function calcularEstadisticasEstudiante(grupo) {
  const sesiones = grupo.sesiones;
  const totalPreguntas = sesiones.reduce(function (a, s) { return a + s.total; }, 0);
  const totalCorrectas = sesiones.reduce(function (a, s) { return a + s.correctas; }, 0);
  const pctGlobal = totalPreguntas > 0 ? Math.round((totalCorrectas / totalPreguntas) * 100) : 0;

  // Regla 5: la Nota de juego solo considera las sesiones dentro del periodo
  // académico vigente — jugar mucho fuera del periodo no debe inflar la nota.
  const sesionesPeriodo = sesiones.filter(function (s) {
    return s.fecha >= FECHA_INICIO_PERIODO && s.fecha <= FECHA_FIN_PERIODO;
  });
  const notaJuego = calcularNotaJuego(sesionesPeriodo);

  const pctPorTema = {};
  TEMAS_PRINCIPALES.forEach(function (tema) {
    let correctasTema = 0, erroresTema = 0;
    sesiones.forEach(function (s) {
      correctasTema += Number(s.aciertosTema[tema]) || 0;
      erroresTema += Number(s.erroresTema[tema]) || 0;
    });
    const totalTema = correctasTema + erroresTema;
    pctPorTema[tema] = totalTema > 0 ? Math.round((correctasTema / totalTema) * 100) : '';
  });

  const ultimaSesion = sesiones.reduce(function (max, s) {
    if (!max) return s;
    return (s.fecha + s.hora) > (max.fecha + max.hora) ? s : max;
  }, null);

  return {
    numSesiones: sesiones.length,
    totalPreguntas: totalPreguntas,
    pctGlobal: pctGlobal,
    notaJuego: notaJuego,
    pctPorTema: pctPorTema,
    ultimaSesion: ultimaSesion
  };
}

// Regla 5 — Nota de juego (0 a 5) por periodo académico:
// - cada sesión aporta nota_sesion = %Acierto / 20  →  100% = 5.0
// - si jugó SESIONES_ESPERADAS o menos: nota = suma(notas) / SESIONES_ESPERADAS
//   (lo que falte por jugar cuenta como 0, sin restar nada aparte)
// - si jugó más: nota = suma(notas) / número real de sesiones jugadas
//   (promedio normal de todas, sin descartar ninguna)
function calcularNotaJuego(sesionesPeriodo) {
  if (!sesionesPeriodo.length) return 0;
  const sumaNotas = sesionesPeriodo.reduce(function (a, s) { return a + (s.pct / 20); }, 0);
  const n = sesionesPeriodo.length;
  const divisor = n <= SESIONES_ESPERADAS ? SESIONES_ESPERADAS : n;
  return Math.round((sumaNotas / divisor) * 10) / 10;
}

// ── Color de fila según % (Regla 9) ─────────────────────────────────────────
function colorPorPorcentaje(pct) {
  const p = Number(pct) || 0;
  if (p >= 90) return '#d4edda'; // verde
  if (p >= 70) return '#cce5ff'; // azul
  if (p >= 50) return '#fff3cd'; // ámbar
  return '#f8d7da';               // rojo
}

// Regla 8: escritura por lotes — encabezados + todas las filas en una sola
// llamada a setValues()/setBackgrounds(), para no agotar el límite de
// ejecución de Apps Script cuando "Registro" crece mucho. Solo se usa en las
// hojas de estadísticas (que se recalculan por completo); "Registro" es
// incremental y se actualiza fila por fila en upsertRegistro().
function escribirHojaCompleta(ss, nombreHoja, headers, filas, colorEncabezado, fnValorColor) {
  let sh = ss.getSheetByName(nombreHoja);
  if (!sh) sh = ss.insertSheet(nombreHoja);
  sh.clearContents();
  sh.clearFormats();

  sh.getRange(1, 1, 1, headers.length).setValues([headers])
    .setBackground(colorEncabezado).setFontColor('#ffffff').setFontWeight('bold');
  sh.setFrozenRows(1);

  if (filas.length) {
    sh.getRange(2, 1, filas.length, headers.length).setValues(filas);
    const colores = filas.map(function (fila) {
      return new Array(headers.length).fill(colorPorPorcentaje(fnValorColor(fila)));
    });
    sh.getRange(2, 1, filas.length, headers.length).setBackgrounds(colores);
  }
}

// ══════════════════════════════════════════════════════════════════════════
// HOJA "Estadísticas" — resumen por estudiante
// ══════════════════════════════════════════════════════════════════════════
function calcularEstadisticas() {
  const ss = obtenerSpreadsheet();
  const filasDedup = leerRegistroDeduplicado(ss);
  const grupos = agruparPorEstudiante(filasDedup);

  const headers = EST_HEADERS_BASE.concat(TEMAS_PRINCIPALES.map(function (t) { return '% ' + t; }));

  const filas = Object.keys(grupos).map(function (clave) {
    const g = grupos[clave];
    const st = calcularEstadisticasEstudiante(g);
    const fila = [g.nombreDisplay, g.curso, st.numSesiones, st.totalPreguntas, st.pctGlobal, st.notaJuego];
    TEMAS_PRINCIPALES.forEach(function (t) { fila.push(st.pctPorTema[t]); });
    return fila;
  });

  filas.sort(function (a, b) {
    return a[1] === b[1] ? String(a[0]).localeCompare(String(b[0])) : String(a[1]).localeCompare(String(b[1]));
  });

  escribirHojaCompleta(ss, 'Estadísticas', headers, filas, '#1a1a2e', function (fila) { return fila[4]; });
}

// ══════════════════════════════════════════════════════════════════════════
// HOJA "Eficacia por tema" — agregado de TODOS los estudiantes
// ══════════════════════════════════════════════════════════════════════════
function calcularEficaciaPorTema() {
  const ss = obtenerSpreadsheet();
  const filasDedup = leerRegistroDeduplicado(ss);

  const agregados = {};
  TEMAS_PRINCIPALES.forEach(function (t) { agregados[t] = { correctas: 0, errores: 0 }; });

  filasDedup.forEach(function (f) {
    Object.keys(f.aciertosTema || {}).forEach(function (t) {
      if (!agregados[t]) agregados[t] = { correctas: 0, errores: 0 };
      agregados[t].correctas += Number(f.aciertosTema[t]) || 0;
    });
    Object.keys(f.erroresTema || {}).forEach(function (t) {
      if (!agregados[t]) agregados[t] = { correctas: 0, errores: 0 };
      agregados[t].errores += Number(f.erroresTema[t]) || 0;
    });
  });

  // Temas principales primero (en el orden definido), luego cualquier tema
  // extra que haya llegado en los datos y no esté en la lista fija.
  const extras = Object.keys(agregados).filter(function (t) { return TEMAS_PRINCIPALES.indexOf(t) === -1; }).sort();
  const temasOrdenados = TEMAS_PRINCIPALES.concat(extras);

  const filas = temasOrdenados.map(function (t) {
    const a = agregados[t];
    const total = a.correctas + a.errores;
    const pct = total > 0 ? Math.round((a.correctas / total) * 100) : '';
    return [t, a.correctas, a.errores, total, pct];
  });

  escribirHojaCompleta(ss, 'Eficacia por tema', EFI_HEADERS, filas, '#6f42c1', function (fila) { return fila[4] || 0; });
}

// ══════════════════════════════════════════════════════════════════════════
// HOJAS "Curso X" — una por cada valor distinto de Curso en Registro
// ══════════════════════════════════════════════════════════════════════════
function calcularHojasPorCurso() {
  const ss = obtenerSpreadsheet();
  const filasDedup = leerRegistroDeduplicado(ss);
  const grupos = agruparPorEstudiante(filasDedup);

  const porCurso = {};
  Object.keys(grupos).forEach(function (clave) {
    const g = grupos[clave];
    if (!porCurso[g.curso]) porCurso[g.curso] = [];
    porCurso[g.curso].push(g);
  });

  Object.keys(porCurso).forEach(function (curso) {
    const filas = porCurso[curso].map(function (g) {
      const st = calcularEstadisticasEstudiante(g);
      const ultima = st.ultimaSesion ? (st.ultimaSesion.fecha + ' ' + st.ultimaSesion.hora) : '';
      return [g.nombreDisplay, st.numSesiones, st.totalPreguntas, st.pctGlobal, st.notaJuego, ultima];
    });
    filas.sort(function (a, b) { return String(a[0]).localeCompare(String(b[0])); });

    escribirHojaCompleta(ss, nombreHojaCurso(curso), CURSO_HEADERS, filas, '#198754', function (fila) { return fila[3]; });
  });
}

function nombreHojaCurso(curso) {
  // Los nombres de hoja en Sheets no admiten [ ] * / \ ? : — se sanean para
  // evitar que un curso con formato raro rompa la creación de la hoja.
  const limpio = String(curso || 'Sin curso').replace(/[\[\]\*\/\\\?:]/g, '-').trim();
  const nombre = 'Curso ' + limpio;
  return nombre.length > 100 ? nombre.substring(0, 100) : nombre;
}

// ══════════════════════════════════════════════════════════════════════════
// HOJA "Errores" — log interno del propio script
// ══════════════════════════════════════════════════════════════════════════
function registrarError(funcion, err) {
  try {
    const ss = obtenerSpreadsheet();
    let sh = ss.getSheetByName('Errores');
    if (!sh) {
      sh = ss.insertSheet('Errores');
      sh.getRange(1, 1, 1, 3).setValues([['Timestamp', 'Función', 'Error']])
        .setBackground('#dc3545').setFontColor('#ffffff').setFontWeight('bold');
      sh.setFrozenRows(1);
    }
    sh.appendRow([new Date(), funcion, String((err && err.message) || err)]);
  } catch (err2) {
    // Si ni siquiera se puede escribir en "Errores", no queda dónde más
    // reportarlo — se deja al menos en el log de ejecución de Apps Script.
    Logger.log('Fallo doble al registrar error: ' + err2);
  }
}

// ══════════════════════════════════════════════════════════════════════════
// RECÁLCULO — cada hoja de estadísticas en su propio try/catch (Regla 10),
// para que un fallo calculando una no impida calcular las demás.
// ══════════════════════════════════════════════════════════════════════════
function recalcularTodasLasEstadisticas() {
  try { calcularEstadisticas(); } catch (err) { registrarError('calcularEstadisticas', err); }
  try { calcularEficaciaPorTema(); } catch (err) { registrarError('calcularEficaciaPorTema', err); }
  try { calcularHojasPorCurso(); } catch (err) { registrarError('calcularHojasPorCurso', err); }
}

// ══════════════════════════════════════════════════════════════════════════
// FUNCIONES DE MANTENIMIENTO (Regla 6) — ejecutar manualmente desde el
// editor de Apps Script (▶ Ejecutar), no se llaman desde doPost/doGet.
// ══════════════════════════════════════════════════════════════════════════

// Fuerza el recálculo completo de Estadísticas / Eficacia por tema / Curso X
// a partir de lo que ya hay en "Registro", sin esperar una nueva partida.
function recalcularAhora() {
  recalcularTodasLasEstadisticas();
  Logger.log('Recálculo completo ejecutado. Revisa la hoja "Errores" si algo falló.');
}

// A diferencia de recalcularAhora(), ESTA función SÍ modifica "Registro":
// borra físicamente las filas duplicadas por código de sesión, dejando solo
// la de mayor Total de cada una. Recorre de abajo hacia arriba para no
// desfasar los índices de fila al ir borrando.
function limpiarRegistroDuplicados() {
  const ss = obtenerSpreadsheet();
  const sh = obtenerHojaRegistro(ss); // migra el esquema viejo si hace falta antes de tocar filas
  if (!sh || sh.getLastRow() < 2) {
    Logger.log('Registro vacío, nada que limpiar.');
    return;
  }

  const datos = sh.getRange(2, 1, sh.getLastRow() - 1, REG_HEADERS.length).getValues();
  const mejorPorSesion = {};
  datos.forEach(function (r, i) {
    const sesion = String(r[COL.SESION - 1] || '').trim();
    const total = Number(r[COL.TOTAL - 1]) || 0;
    const filaHoja = i + 2;
    const clave = sesion || ('__SIN_SESION_' + filaHoja);
    if (!mejorPorSesion[clave] || total > mejorPorSesion[clave].total) {
      mejorPorSesion[clave] = { fila: filaHoja, total: total };
    }
  });

  const filasAConservar = {};
  Object.keys(mejorPorSesion).forEach(function (k) { filasAConservar[mejorPorSesion[k].fila] = true; });

  const filasABorrar = [];
  datos.forEach(function (r, i) {
    const filaHoja = i + 2;
    if (!filasAConservar[filaHoja]) filasABorrar.push(filaHoja);
  });

  filasABorrar.sort(function (a, b) { return b - a; }).forEach(function (fila) { sh.deleteRow(fila); });

  Logger.log('Filas duplicadas eliminadas: ' + filasABorrar.length);
  recalcularTodasLasEstadisticas();
}

// Lista, SIN normalizar, todos los valores distintos que existen en la
// columna "Curso" de Registro y cuántas filas tiene cada uno (con su tipo de
// dato JS), para detectar cursos con nombres inconsistentes (espacios de
// más, mayúsculas distintas, tipo numérico en vez de texto, etc.).
function diagnosticoCursos() {
  const ss = obtenerSpreadsheet();
  const sh = obtenerHojaRegistro(ss); // migra el esquema viejo si hace falta antes de leer
  if (!sh || sh.getLastRow() < 2) {
    Logger.log('Registro vacío.');
    return;
  }

  const datos = sh.getRange(2, COL.CURSO, sh.getLastRow() - 1, 1).getValues();
  const conteo = {};
  datos.forEach(function (r) {
    const valor = r[0];
    const clave = JSON.stringify(valor) + ' (' + (typeof valor) + ')';
    conteo[clave] = (conteo[clave] || 0) + 1;
  });

  Logger.log('── Valores distintos en columna Curso (sin normalizar) ──');
  Object.keys(conteo).sort().forEach(function (clave) {
    Logger.log(clave + ' → ' + conteo[clave] + ' fila(s)');
  });
}

// Crea (si no existen) las hojas base con sus encabezados, útil para dejar
// el spreadsheet listo antes de la primera partida real.
function inicializarHojas() {
  const ss = obtenerSpreadsheet();
  obtenerHojaRegistro(ss);
  recalcularTodasLasEstadisticas();
  Logger.log('Hojas de IonNom listas: ' + ss.getUrl());
}
