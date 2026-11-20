/* ═════════════════════════════════════════════════════════════════════
   batalla-papel.js — pestaña «Batalla periódica» del generador docente
   (docente.html). Plantilla imprimible del Battleship sobre la tabla
   periódica: arriba la hoja de BOMBAS (donde se marcan los disparos al rival)
   y abajo la de BARCOS (donde se pintan los propios), como en la actividad
   de papel. Usa el mismo núcleo que el juego digital (assets/batalla-core.js),
   así que la tabla, los bloques y la flota coinciden.

   Hojas que imprime (carta, con logo, marca de agua y pie del sitio):
   1. Plantilla de juego (bombas y barcos).
   2. Tabla de verificación (opcional): el rival comprueba cada disparo.
   3. Flota del docente (opcional): una flota al azar con código, para que
      el docente juegue contra el grupo.
   ═════════════════════════════════════════════════════════════════════ */
(function(){
'use strict';
const B = window.BATALLA; if(!B) return;
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const MARCA = window.HOJA_SITIO || {logo:'', marca:'', nombre:'', pie:''};

function encabezadoHoja(titulo, sub, etiqueta, conForm){
  return (MARCA.marca ? '<img class="cz-wm" src="' + MARCA.marca + '" alt="" aria-hidden="true">' : '')
    + '<div class="cz-head">' + (MARCA.logo ? '<img src="' + MARCA.logo + '" alt="' + esc(MARCA.nombre) + '">' : '')
    + '<div class="cz-tit"><div class="t">' + esc(titulo) + '</div>' + (sub ? '<div class="s">' + sub + '</div>' : '') + '</div>'
    + '<div class="cz-ver">' + esc(etiqueta || '') + '</div></div>'
    + (conForm ? '<div class="cz-form"><span>Nombre: <i class="w1"></i></span><span>Curso: <i class="w2"></i></span><span>Fecha: <i class="w3"></i></span></div>' : '');
}
const pieHoja = () => MARCA.pie ? '<div class="cz-pie">' + MARCA.pie + '</div>' : '';
const nuevaSemilla = () => Math.random().toString(36).slice(2, 8).toUpperCase();
let semilla = nuevaSemilla();

/* configuración real de los elementos que NO siguen el diagrama de Moeller
   (los mismos datos de tabla.html) */
const REAL = {24:'3d⁵ 4s¹',29:'3d¹⁰ 4s¹',41:'4d⁴ 5s¹',42:'4d⁵ 5s¹',44:'4d⁷ 5s¹',45:'4d⁸ 5s¹',46:'4d¹⁰',47:'4d¹⁰ 5s¹',
  57:'5d¹ 6s²',58:'4f¹ 5d¹ 6s²',64:'4f⁷ 5d¹ 6s²',78:'5d⁹ 6s¹',79:'5d¹⁰ 6s¹',89:'6d¹ 7s²',90:'6d² 7s²',91:'5f² 6d¹ 7s²',
  92:'5f³ 6d¹ 7s²',93:'5f⁴ 6d¹ 7s²',96:'5f⁷ 6d¹ 7s²',103:'5f¹⁴ 7s² 7p¹'};

function getCfg(){
  const flota = $('#ba-flota').value;
  const seedTxt = ($('#ba-seed').value || '').trim().toUpperCase();
  return {flota, F:B.FLOTAS[flota], cont:$('#ba-cont').value, color:$('#ba-color').value, regla:$('#ba-regla').value,
    propia:($('#ba-propia').value || '').trim(), titulo:($('#ba-title').value || '').trim() || 'Batalla periódica',
    clave:$('#ba-clave').checked, flotaDoc:$('#ba-flotadoc').checked, seed:seedTxt || semilla};
}
function activos(F){ const a = []; for(let z = 1; z <= 118; z++) if(F.bloques.indexOf(B.POS[z].blk) >= 0) a.push(z); return a; }

function listaBarcos(F){
  const n = {}; F.barcos.forEach(b => n[b] = (n[b] || 0) + 1);
  return Object.keys(n).map(b => n[b] + (n[b] === 1 ? ' barco ' : ' barcos ') + '<b>' + b + '</b> (' + B.TAM[b] + ' casillas)').join(' · ');
}
function textoRegla(c){
  if(c.regla === 'ox') return 'Para disparar, di un <b>elemento</b> y uno de sus <b>estados de oxidación</b> (ej.: Fe, +3). Tu rival lo comprueba en la tabla de verificación: si es correcto, mira su hoja y responde ✓ o ✗; si no, pierdes el turno.';
  if(c.regla === 'propia') return esc(c.propia || 'Escribe aquí la regla de disparo.');
  return 'Para disparar, di la <b>configuración electrónica en la que termina</b> un elemento (ej.: 3p⁴). Tu rival busca ese elemento en su tabla y responde ✓ (impacto) o ✗ (agua).';
}

/* ───── el tablero ───── */
function tablero(c, o){
  o = o || {};
  const act = new Set(activos(c.F));
  let h = '<div class="ba-tb ' + (c.color === 'relleno' ? 'rell' : c.color === 'contorno' ? 'cont' : 'nocolor') + '">';
  for(let r = 1; r <= 7; r++) h += '<div class="ba-per" style="grid-row:' + r + '">' + r + '</div>';
  for(let z = 1; z <= 118; z++){
    if(!act.has(z)) continue;
    const q = B.POS[z], e = B.ELEM[z], row = q.r <= 7 ? q.r : q.r + 1;
    const nav = o.ocup && o.ocup.has(z);
    const txt = c.cont === 'vacio' ? '' : esc(e.sym) + (c.cont === 'z' ? '<small>' + z + '</small>' : '');
    h += '<div class="ba-c b-' + q.blk + (nav ? ' nav' : '') + '" style="grid-row:' + row + ';grid-column:' + (q.c + 1) + '">' + txt + '</div>';
  }
  if(c.color !== 'no'){
    h += '<div class="ba-lb l-s" style="grid-row:1;grid-column:3">s</div><div class="ba-lb l-p" style="grid-row:1;grid-column:14/19">p</div>';
    if(c.F.bloques.indexOf('d') >= 0) h += '<div class="ba-lb l-d" style="grid-row:3;grid-column:4/14">d</div>';
    if(c.F.bloques.indexOf('f') >= 0) h += '<div class="ba-lb l-f" style="grid-row:9/11;grid-column:2/4">f</div>';
  }
  if(o.caja) h += '<div class="ba-caja" style="grid-row:1/3;grid-column:4/14">' + o.caja + '</div>';
  return h + '</div>';
}

/* ───── hoja 1: bombas y barcos ───── */
function hojaJuego(c){
  const bombas = '<b class="t">BOMBAS</b><span>Marca aquí los disparos a tu rival: <b>✓ = impacto</b>, <b>✗ = agua</b>.</span><span>' + textoRegla(c) + '</span>';
  const barcos = '<b class="t">BARCOS</b><span>Pinta aquí tu flota: ' + listaBarcos(c.F) + '. Cada barco ocupa casillas <b>seguidas, en la misma fila y dentro de un solo bloque</b>; no se pueden superponer.</span>';
  return '<div class="ba-hoja">' + encabezadoHoja(c.titulo, 'Tabla periódica · ' + esc(c.F.nombre), 'Para 2 jugadores', true)
    + '<div class="ba-sec">' + tablero(c, {caja:bombas}) + '</div>'
    + '<div class="ba-corte"><span>✂</span></div>'
    + '<div class="ba-sec">' + tablero(c, {caja:barcos}) + '</div>'
    + pieHoja() + '</div>';
}

/* ───── hoja 2: tabla de verificación ───── */
function hojaClave(c){
  const act = activos(c.F), ox = c.regla === 'ox';
  const cols = 3, por = Math.ceil(act.length / cols), tablas = [];
  for(let k = 0; k < cols; k++){
    const zs = act.slice(k * por, (k + 1) * por);
    tablas.push('<table class="ba-kt"><thead><tr><th>Z</th><th>Sím.</th>' + (ox ? '<th class="l">Estados de oxidación</th>' : '<th>Per.</th><th>Gr.</th><th class="l">Termina en</th>') + '</tr></thead><tbody>'
      + zs.map(z => {
        const e = B.ELEM[z], t = B.terminacion(z), g = B.grupo(z);
        if(ox) return '<tr><td>' + z + '</td><td><b>' + e.sym + '</b></td><td class="l">' + (e.ox.length ? e.ox.map(x => x.replace('-', '−')).join(', ') : '—') + '</td></tr>';
        const exc = REAL[z], term = exc ? exc + '*' : (z > 103 ? t.txt + '†' : t.txt);
        return '<tr><td>' + z + '</td><td><b>' + e.sym + '</b></td><td>' + e.p + '</td><td>' + (g || '—') + '</td><td class="l">' + term + '</td></tr>';
      }).join('') + '</tbody></table>');
  }
  const nota = ox
    ? 'Estados de oxidación más comunes del elemento; el rival acepta cualquiera de la lista. Los gases nobles no tienen.'
    : 'La terminación sigue el diagrama de Moeller (el último subnivel que se llena). <b>*</b> Excepción: se muestra la configuración real; se acepta también la terminación de Moeller. <b>†</b> Elemento sin datos experimentales: terminación predicha. En el bloque f no hay grupo (—).';
  return '<div class="ba-hoja">' + encabezadoHoja(c.titulo + ': verificación', ox ? 'Estados de oxidación' : 'Dónde termina la configuración de cada elemento', 'Solo para el rival', false)
    + '<p class="ba-nota">Úsala para comprobar los disparos de tu rival. ' + nota + '</p>'
    + '<div class="ba-kcols">' + tablas.join('') + '</div>' + pieHoja() + '</div>';
}

/* ───── hoja 3: flota del docente ───── */
function hojaFlotaDoc(c){
  const flota = B.colocarAlAzar(c.F.barcos, B.rng(c.seed + '|docente'));
  const ocup = new Set(); flota.forEach(b => b.cells.forEach(z => ocup.add(z)));
  const lista = flota.map(b => '<li><b>Barco ' + b.blk + '</b> (' + b.tam + '): ' + b.cells.map(z => B.ELEM[z].sym).join(' – ') + '</li>').join('');
  const caja = '<b class="t">FLOTA DEL DOCENTE</b><span>Código: <b class="fx">' + esc(c.seed) + '</b>. Los estudiantes cantan disparos; responde ✓ o ✗ según esta hoja.</span>';
  return '<div class="ba-hoja">' + encabezadoHoja(c.titulo + ': flota del docente', 'No la repartas: es la clave', 'Código ' + c.seed, false)
    + '<div class="ba-sec">' + tablero(c, {caja, ocup}) + '</div>'
    + '<ol class="ba-flota">' + lista + '</ol>'
    + '<p class="ba-nota">Con el mismo código se vuelve a imprimir esta misma flota (pestaña «Batalla periódica» → «Volver a generar la flota de otro día»).</p>'
    + pieHoja() + '</div>';
}

function construir(){
  const c = getCfg(), hojas = [hojaJuego(c)];
  if(c.clave) hojas.push(hojaClave(c));
  if(c.flotaDoc) hojas.push(hojaFlotaDoc(c));
  return hojas;
}
function render(){
  const st = $('#ba-stage'); if(!st) return;
  const c = getCfg();
  $('#ba-propia-box').hidden = c.regla !== 'propia';
  st.innerHTML = construir().join('');
  $('#ba-status').textContent = 'Zona: ' + c.F.nombre + ' · ' + c.F.barcos.length + ' barcos por jugador.' + (c.flotaDoc ? ' Código de la flota del docente: ' + c.seed + '.' : '');
}

/* ───── impresión ───── */
function prepararImpresion(){
  const root = $('#ba-print-root'); root.innerHTML = construir().join('');
  document.body.classList.add('ba-printing'); return true;
}
function imprimir(){ prepararImpresion(); setTimeout(() => window.print(), 120); }
function finImpresion(){ if(!document.body.classList.contains('ba-printing')) return; document.body.classList.remove('ba-printing'); $('#ba-print-root').innerHTML = ''; }
function panelVisible(){ const p = $('#ba-app'); return !!(p && p.offsetParent !== null); }

function init(){
  const app = $('#ba-app'); if(!app) return;
  ['#ba-flota','#ba-cont','#ba-color','#ba-regla','#ba-clave','#ba-flotadoc'].forEach(s => $(s).addEventListener('change', render));
  ['#ba-title','#ba-propia','#ba-seed'].forEach(s => $(s).addEventListener('input', render));
  $('#ba-btn-seed').addEventListener('click', () => { semilla = nuevaSemilla(); $('#ba-seed').value = ''; $('#ba-flotadoc').checked = true; render(); });
  $('#ba-btn-print').addEventListener('click', imprimir);
  window.addEventListener('beforeprint', () => { if(panelVisible() && !/(^| )(ah|cz|lab|sp)-printing/.test(document.body.className) && !document.body.classList.contains('ba-printing')) prepararImpresion(); });
  window.addEventListener('afterprint', finImpresion);
  render();
}
window.BATALLA_PAPEL = {render};
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
