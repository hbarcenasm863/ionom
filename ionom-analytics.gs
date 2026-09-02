// IonNom Analytics v1 — adaptado de Chromanom Analytics v3
// Hoja de cálculo: https://docs.google.com/spreadsheets/d/1zTGviQ62F77ULA0_flXxFAkmT_NcOTnvYN9b71hoTnQ
const SPREADSHEET_ID = '1zTGviQ62F77ULA0_flXxFAkmT_NcOTnvYN9b71hoTnQ';

// ── Escala de calificación colombiana (sobre 5.0) ──────────────────────────
function calcNota(pct) {
  if (pct >= 90) return 5.0;
  if (pct >= 80) return 4.5;
  if (pct >= 70) return 4.0;
  if (pct >= 60) return 3.5;
  if (pct >= 50) return 3.0;
  return 2.0;
}

// ── Color de fila según porcentaje (igual que Chromanom) ───────────────────
function rowColor(pct) {
  if (pct >= 90) return '#d4edda'; // verde
  if (pct >= 70) return '#cce5ff'; // azul
  if (pct >= 50) return '#fff3cd'; // ámbar
  return '#f8d7da';                 // rojo
}

// ── Entrada principal ──────────────────────────────────────────────────────
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    // El cliente actual solo envía razon='fin' o 'abandono'. Cualquier otro valor
    // (vacío, 'inicio', o de una versión de caché vieja del juego con otro formato)
    // no corresponde a una sesión válida — se descarta para no ensuciar el registro.
    if (data.razon !== 'fin' && data.razon !== 'abandono') {
      return ContentService.createTextOutput('ignorado: razon invalida');
    }
    registrar(data);
    updateStats(data);
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error: ' + err.message);
  }
}

// ══════════════════════════════════════════════════════════════════════════
// HOJA: Registro  (log crudo — una fila por evento)
// ══════════════════════════════════════════════════════════════════════════
const REG_HEADERS = [
  'Timestamp','Código','Nombre','Curso','Grupo/Tema',
  'Respondidas','Total','Correctas','Intentos',
  'Puntaje','Porcentaje','Calificación','Nivel','Razón'
];

function registrar(d) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sh = ss.getSheetByName('Registro');
  if (!sh) {
    sh = ss.insertSheet('Registro');
    sh.appendRow(REG_HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, REG_HEADERS.length)
      .setBackground('#343a40').setFontColor('#ffffff').setFontWeight('bold');
  }

  const pct  = Number(d.porcentaje) || 0;
  const nota = calcNota(pct);
  sh.appendRow([
    d.timestamp   || Utilities.formatDate(new Date(), 'America/Bogota', "yyyy-MM-dd'T'HH:mm:ss"),
    d.codigo      || '',
    d.nombre      || '',
    d.curso       || '',
    d.grupo       || '',
    d.respondidas || 0,
    d.total_preguntas || 0,
    d.correctas   || 0,
    d.intentos    || 0,
    d.puntaje     || 0,
    pct,
    nota,
    d.nivel       || '',
    d.razon       || ''
  ]);
}

// ══════════════════════════════════════════════════════════════════════════
// HOJA: Estadísticas  (una fila por estudiante — se actualiza siempre)
// ══════════════════════════════════════════════════════════════════════════
const EST_HEADERS = [
  'Código','Nombre','Curso','Últ. Grupo','Sesiones',
  'Total respondidas','Total correctas','Mejor %','Últ. %',
  'Mejor nota','Últ. nota','Últ. nivel','Estado','Últ. actualización'
];

function updateStats(d) {
  const ss  = SpreadsheetApp.openById(SPREADSHEET_ID);
  let   sh  = ss.getSheetByName('Estadísticas');
  if (!sh) {
    sh = ss.insertSheet('Estadísticas');
    sh.appendRow(EST_HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, EST_HEADERS.length)
      .setBackground('#1a1a2e').setFontColor('#ffffff').setFontWeight('bold');
  }

  const codigo = String(d.codigo || '').trim();
  if (!codigo) return;

  const pct     = Number(d.porcentaje) || 0;
  const nota    = calcNota(pct);
  const razon   = d.razon || '';
  const estado  = razon === 'fin' ? 'Finalizó' : razon === 'abandono' ? 'Abandonó' : 'En curso';
  const ts      = d.timestamp || Utilities.formatDate(new Date(), 'America/Bogota', "yyyy-MM-dd'T'HH:mm:ss");

  // Buscar fila existente del estudiante (columna A = Código)
  const data = sh.getDataRange().getValues();
  let rowIdx = -1;
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]).trim() === codigo) { rowIdx = i + 1; break; }
  }

  if (rowIdx === -1) {
    // Primera aparición del estudiante
    sh.appendRow([
      codigo,
      d.nombre || '',
      d.curso  || '',
      d.grupo  || '',
      1,                        // Sesiones
      d.respondidas || 0,
      d.correctas   || 0,
      pct,                      // Mejor %
      pct,                      // Últ. %
      nota,                     // Mejor nota
      nota,                     // Últ. nota
      d.nivel  || '',
      estado,
      ts
    ]);
    rowIdx = sh.getLastRow();
  } else {
    // Actualizar fila existente
    const prev      = data[rowIdx - 1];
    // El cliente nunca envía razon='inicio' (sendProgress la descarta para no generar
    // filas de ruido) — solo llegan 'fin' y 'abandono'. Cada una de esas es una sesión.
    const esFinDeSesion = razon === 'fin' || razon === 'abandono';
    const sesiones  = (Number(prev[4]) || 0) + (esFinDeSesion ? 1 : 0);
    const totResp   = (Number(prev[5]) || 0) + (Number(d.respondidas) || 0);
    const totCorr   = (Number(prev[6]) || 0) + (Number(d.correctas)   || 0);
    const mejorPct  = Math.max(Number(prev[7]) || 0, pct);
    const mejorNota = calcNota(mejorPct);

    sh.getRange(rowIdx, 1, 1, EST_HEADERS.length).setValues([[
      codigo,
      d.nombre || prev[1],
      d.curso  || prev[2],
      d.grupo  || prev[3],
      esFinDeSesion ? sesiones : prev[4],
      esFinDeSesion ? totResp : prev[5],
      esFinDeSesion ? totCorr : prev[6],
      mejorPct,
      pct,
      mejorNota,
      nota,
      d.nivel  || prev[11],
      estado,
      ts
    ]]);
  }

  // Color según mejor porcentaje
  const mejorPctFinal = sh.getRange(rowIdx, 8).getValue();
  sh.getRange(rowIdx, 1, 1, EST_HEADERS.length)
    .setBackground(rowColor(mejorPctFinal));

  // Actualizar hojas de resumen
  updateResumenCurso(ss, d, pct, nota, estado, ts);
  updateHojaCurso(ss, d, pct, nota, estado, ts);
}

// ══════════════════════════════════════════════════════════════════════════
// HOJA: Resumen por Curso  (una fila por curso)
// ══════════════════════════════════════════════════════════════════════════
const RES_HEADERS = [
  'Curso','Estudiantes','Sesiones totales',
  'Promedio %','Mejor %','Nota promedio','Finalizaron','Abandonaron','En curso'
];

function updateResumenCurso(ss, d, pct, nota, estado, ts) {
  let sh = ss.getSheetByName('Resumen por Curso');
  if (!sh) {
    sh = ss.insertSheet('Resumen por Curso');
    sh.appendRow(RES_HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, RES_HEADERS.length)
      .setBackground('#0d6efd').setFontColor('#ffffff').setFontWeight('bold');
  }

  const curso = String(d.curso || '').trim();
  if (!curso) return;

  // Recalcular desde Estadísticas para este curso
  const estSh   = ss.getSheetByName('Estadísticas');
  if (!estSh) return;
  const estData = estSh.getDataRange().getValues();

  let count = 0, sumPct = 0, mejorPct = 0, fin = 0, aban = 0, encurso = 0, sesiones = 0;
  for (let i = 1; i < estData.length; i++) {
    if (String(estData[i][2]).trim() !== curso) continue;
    count++;
    const p = Number(estData[i][8]) || 0;  // Últ. %
    sumPct += p;
    mejorPct = Math.max(mejorPct, Number(estData[i][7]) || 0);
    sesiones += Number(estData[i][4]) || 0;
    const st = String(estData[i][12]);
    if (st === 'Finalizó') fin++;
    else if (st === 'Abandonó') aban++;
    else encurso++;
  }
  const promPct  = count ? Math.round(sumPct / count) : 0;
  const promNota = calcNota(promPct);

  // Buscar fila del curso
  const resData = sh.getDataRange().getValues();
  let rowIdx = -1;
  for (let i = 1; i < resData.length; i++) {
    if (String(resData[i][0]).trim() === curso) { rowIdx = i + 1; break; }
  }
  const newRow = [curso, count, sesiones, promPct, mejorPct, promNota, fin, aban, encurso];
  if (rowIdx === -1) {
    sh.appendRow(newRow);
    rowIdx = sh.getLastRow();
  } else {
    sh.getRange(rowIdx, 1, 1, RES_HEADERS.length).setValues([newRow]);
  }
  sh.getRange(rowIdx, 1, 1, RES_HEADERS.length).setBackground(rowColor(promPct));
}

// ══════════════════════════════════════════════════════════════════════════
// HOJA: Curso X  (detalle por curso — una fila por estudiante)
// ══════════════════════════════════════════════════════════════════════════
const CUR_HEADERS = [
  'Código','Nombre','Últ. Grupo','Sesiones',
  'Mejor %','Últ. %','Mejor nota','Últ. nota','Estado','Actualizado'
];

function updateHojaCurso(ss, d, pct, nota, estado, ts) {
  const curso = String(d.curso || '').trim();
  if (!curso) return;

  const shName = 'Curso ' + curso;
  let sh = ss.getSheetByName(shName);
  if (!sh) {
    sh = ss.insertSheet(shName);
    sh.appendRow(CUR_HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, CUR_HEADERS.length)
      .setBackground('#198754').setFontColor('#ffffff').setFontWeight('bold');
  }

  // Obtener datos compilados del estudiante desde Estadísticas
  const estSh = ss.getSheetByName('Estadísticas');
  if (!estSh) return;
  const estData = estSh.getDataRange().getValues();
  let estRow = null;
  for (let i = 1; i < estData.length; i++) {
    if (String(estData[i][0]).trim() === String(d.codigo || '').trim()) {
      estRow = estData[i]; break;
    }
  }
  if (!estRow) return;

  const codigo = String(estRow[0]);
  const newRow = [
    codigo,
    estRow[1],   // Nombre
    estRow[3],   // Últ. Grupo
    estRow[4],   // Sesiones
    estRow[7],   // Mejor %
    estRow[8],   // Últ. %
    estRow[9],   // Mejor nota
    estRow[10],  // Últ. nota
    estRow[12],  // Estado
    estRow[13]   // Actualizado
  ];

  const data = sh.getDataRange().getValues();
  let rowIdx = -1;
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]).trim() === codigo) { rowIdx = i + 1; break; }
  }
  if (rowIdx === -1) {
    sh.appendRow(newRow);
    rowIdx = sh.getLastRow();
  } else {
    sh.getRange(rowIdx, 1, 1, CUR_HEADERS.length).setValues([newRow]);
  }
  sh.getRange(rowIdx, 1, 1, CUR_HEADERS.length)
    .setBackground(rowColor(Number(estRow[7]) || 0));
}

// ══════════════════════════════════════════════════════════════════════════
// Configuración inicial de hojas (ejecutar una sola vez desde el editor)
// ══════════════════════════════════════════════════════════════════════════
function inicializarHojas() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  function ensureSheet(name, headers, headerColor) {
    let sh = ss.getSheetByName(name);
    if (!sh) {
      sh = ss.insertSheet(name);
      sh.appendRow(headers);
      sh.setFrozenRows(1);
      sh.getRange(1, 1, 1, headers.length)
        .setBackground(headerColor).setFontColor('#ffffff').setFontWeight('bold');
      SpreadsheetApp.flush();
    }
    return sh;
  }

  ensureSheet('Registro',        REG_HEADERS, '#343a40');
  ensureSheet('Estadísticas',    EST_HEADERS, '#1a1a2e');
  ensureSheet('Resumen por Curso', RES_HEADERS, '#0d6efd');

  Logger.log('Hojas de IonNom listas.');
}
