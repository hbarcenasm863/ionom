/**
 * IonNom — Registro de resultados de estudiantes
 *
 * INSTRUCCIONES DE DESPLIEGUE:
 * 1. Abre https://script.google.com y crea un nuevo proyecto.
 * 2. Pega este código en el editor.
 * 3. Menú: Implementar → Nueva implementación → Tipo: Aplicación web
 *    - Ejecutar como: Yo (tu cuenta)
 *    - Quién tiene acceso: Cualquier persona
 * 4. Haz clic en "Implementar" y copia la URL generada.
 * 5. Pega esa URL en juego.html reemplazando el valor de APPS_SCRIPT_URL.
 *
 * La hoja de cálculo debe existir en tu Google Drive.
 * Cambia SPREADSHEET_ID por el ID de tu hoja (el string largo en la URL).
 */

const SPREADSHEET_ID = 'REEMPLAZAR_CON_ID_DE_HOJA';
const SHEET_NAME     = 'Resultados';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
    let   sheet = ss.getSheetByName(SHEET_NAME);

    // Crear hoja si no existe, con encabezados
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Fecha/Hora', 'Código', 'Nombre', 'Curso',
        'Grupo funcional', 'Correctas', 'Puntaje', 'Total',
        'Intentos', 'Porcentaje', 'Calificación /5', 'Nivel'
      ]);
      sheet.getRange(1,1,1,12).setFontWeight('bold').setBackground('#0d4a73').setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(data.timestamp),
      data.codigo,
      data.nombre,
      data.curso,
      data.grupo,
      data.correctas,
      data.puntaje,
      data.total,
      data.intentos,
      data.porcentaje + '%',
      data.calificacion,
      data.nivel
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/** GET de prueba para verificar que el script responde */
function doGet() {
  return ContentService
    .createTextOutput('IonNom registro activo ✓')
    .setMimeType(ContentService.MimeType.TEXT);
}
