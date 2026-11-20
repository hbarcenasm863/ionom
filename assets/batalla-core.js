/* ═════════════════════════════════════════════════════════════════════
   batalla-core.js — «Batalla periódica» (IonNom)
   Núcleo compartido por batalla.html (juego contra la IA) y por la pestaña
   «Batalla periódica» del generador docente (plantilla imprimible).

   Idea (tomada del Battleship de configuración electrónica): la tabla
   periódica es el tablero. Cada barco es una fila de casillas seguidas que
   caben dentro de UN solo bloque: s = 2 casillas, p = 3, d = 4, f = 5.
   Para disparar a una casilla hay que resolver un reto sobre ese elemento
   (configuración electrónica, ubicación, estado de oxidación o
   nomenclatura del banco de IonNom). Si se acierta, el disparo cuenta.

   La ubicación de cada elemento (fila, columna, bloque) se calcula con el
   diagrama de Moeller (Aufbau): el bloque es el subnivel donde entra el
   ÚLTIMO electrón. Así La–Yb y Ac–No quedan en el bloque f y Lu y Lr en el d,
   igual que en la hoja de papel.

   API: window.BATALLA = { ELEM, POS, ARR, bloque, terminacion, config,
        FLOTAS, TAM, colocaciones, colocarAlAzar, colocacionPara, crearIA,
        reto, rng, sup }
   ═════════════════════════════════════════════════════════════════════ */
(function(){
'use strict';

/* [símbolo, nombre, estados de oxidación] — índice + 1 = número atómico */
const E = [["H","Hidrógeno","+1,−1"],["He","Helio",""],["Li","Litio","+1"],["Be","Berilio","+2"],["B","Boro","+3"],["C","Carbono","+4,+2,−4"],["N","Nitrógeno","−3,+1,+2,+3,+4,+5"],["O","Oxígeno","−2"],["F","Flúor","−1"],["Ne","Neón",""],["Na","Sodio","+1"],["Mg","Magnesio","+2"],["Al","Aluminio","+3"],["Si","Silicio","+4,−4"],["P","Fósforo","−3,−2,−1,0,+1,+2,+3,+4,+5"],["S","Azufre","−2,−1,0,+2,+4,+6"],["Cl","Cloro","−1,0,+1,+2,+3,+4,+5,+6,+7"],["Ar","Argón",""],["K","Potasio","+1"],["Ca","Calcio","+2"],["Sc","Escandio","+3"],["Ti","Titanio","+2,+3,+4"],["V","Vanadio","+2,+3,+4,+5"],["Cr","Cromo","+1,+2,+3,+4,+5,+6"],["Mn","Manganeso","+1,+2,+3,+4,+5,+6,+7"],["Fe","Hierro","+1,+2,+3,+4,+5,+6"],["Co","Cobalto","+1,+2,+3,+4,+5"],["Ni","Níquel","+1,+2,+3,+4"],["Cu","Cobre","+1,+2,+3"],["Zn","Zinc","+2"],["Ga","Galio","+3"],["Ge","Germanio","+4"],["As","Arsénico","−3,+3,+5"],["Se","Selenio","−2,+4,+6"],["Br","Bromo","−1,0,+1,+3,+5,+7"],["Kr","Kriptón",""],["Rb","Rubidio","+1"],["Sr","Estroncio","+2"],["Y","Itrio","+3"],["Zr","Circonio","+4"],["Nb","Niobio","+3,+5"],["Mo","Molibdeno","+2,+3,+4,+5,+6"],["Tc","Tecnecio","+4,+7"],["Ru","Rutenio","+2,+3,+4"],["Rh","Rodio","+1,+3"],["Pd","Paladio","+2,+4"],["Ag","Plata","+1"],["Cd","Cadmio","+2"],["In","Indio","+3"],["Sn","Estaño","+2,+4"],["Sb","Antimonio","−3,+3,+5"],["Te","Teluro","−2,+4,+6"],["I","Yodo","−1,0,+1,+3,+5,+7"],["Xe","Xenón",""],["Cs","Cesio","+1"],["Ba","Bario","+2"],["La","Lantano","+3"],["Ce","Cerio","+3,+4"],["Pr","Praseodimio","+3"],["Nd","Neodimio","+3"],["Pm","Prometio","+3"],["Sm","Samario","+3"],["Eu","Europio","+2,+3"],["Gd","Gadolinio","+3"],["Tb","Terbio","+3"],["Dy","Disprosio","+3"],["Ho","Holmio","+3"],["Er","Erbio","+3"],["Tm","Tulio","+3"],["Yb","Iterbio","+2,+3"],["Lu","Lutecio","+3"],["Hf","Hafnio","+4"],["Ta","Tántalo","+5"],["W","Tungsteno","+2,+3,+4,+5,+6"],["Re","Renio","+4,+7"],["Os","Osmio","+4,+8"],["Ir","Iridio","+3,+4"],["Pt","Platino","+2,+4"],["Au","Oro","+1,+3"],["Hg","Mercurio","+1,+2"],["Tl","Talio","+1,+3"],["Pb","Plomo","+2,+4"],["Bi","Bismuto","+3"],["Po","Polonio","+2,+4"],["At","Ástato","−1,+1"],["Rn","Radón",""],["Fr","Francio","+1"],["Ra","Radio","+2"],["Ac","Actinio","+3"],["Th","Torio","+4"],["Pa","Protactinio","+5"],["U","Uranio","+3,+4,+6"],["Np","Neptunio","+4,+5"],["Pu","Plutonio","+3,+4"],["Am","Americio","+3"],["Cm","Curio","+3"],["Bk","Berkelio","+3,+4"],["Cf","Californio","+3"],["Es","Einsteinio","+3"],["Fm","Fermio","+3"],["Md","Mendelevio","+2,+3"],["No","Nobelio","+2,+3"],["Lr","Laurencio","+3"],["Rf","Rutherfordio","+4"],["Db","Dubnio","+5"],["Sg","Seaborgio","+6"],["Bh","Bohrio","+7"],["Hs","Hasio","+8"],["Mt","Meitnerio",""],["Ds","Darmstadtio",""],["Rg","Roentgenio",""],["Cn","Copernicio",""],["Nh","Nihonio",""],["Fl","Flerovio",""],["Mc","Moscovio",""],["Lv","Livermorio",""],["Ts","Teneso",""],["Og","Oganesón",""]];

const LET = 'spdf';
const SUPD = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};
const sup = n => String(n).split('').map(d => SUPD[d] || d).join('');
/* orden de llenado (regla de Moeller) */
const ORDEN = [[1,0],[2,0],[2,1],[3,0],[3,1],[4,0],[3,2],[4,1],[5,0],[4,2],[5,1],[6,0],[4,3],[5,2],[6,1],[7,0],[5,3],[6,2],[7,1]];
const TAM = {s:2, p:3, d:4, f:5, v2:2, v3:3, v4:4, v5:5};
const NOM_BLK = {s:'Barco s', p:'Barco p', d:'Barco d', f:'Barco f'};

/* elementos cuya configuración real NO sigue el diagrama de Moeller: no se
   les pregunta la terminación (el estudiante vería una respuesta «incorrecta»
   frente a su tabla). Z > 103: sin datos experimentales. */
const EXCEPCIONES = new Set([24,29,41,42,44,45,46,47,57,58,64,78,79,89,90,91,92,93,96,103]);

function llenado(z){
  let r = z; const out = [];
  for(const [n,l] of ORDEN){
    if(r <= 0) break;
    const e = Math.min(2 * (2 * l + 1), r);
    out.push({n, l, e}); r -= e;
  }
  return out;
}
function terminacion(z){
  const l = llenado(z), u = l[l.length - 1];
  return {n:u.n, l:u.l, e:u.e, blk:LET[u.l], txt:u.n + LET[u.l] + sup(u.e)};
}
function config(z){ return llenado(z).map(o => o.n + LET[o.l] + sup(o.e)).join(' '); }
const bloque = z => terminacion(z).blk;
function periodo(z){ return Math.max.apply(null, llenado(z).map(o => o.n)); }

/* ───── posición en la hoja: filas 1–7, filas 8 y 9 para el bloque f ───── */
const POS = [null], ARR = {};
for(let z = 1; z <= 118; z++){
  const t = terminacion(z), p = periodo(z);
  let r = p, c;
  if(t.blk === 's') c = (z === 2) ? 18 : t.e;
  else if(t.blk === 'p') c = 12 + t.e;
  else if(t.blk === 'd') c = 2 + t.e;
  else { c = 2 + t.e; r = 8 + (p - 6); }
  POS[z] = {r, c, blk:t.blk, p};
  (ARR[r] = ARR[r] || {})[c] = z;
}
function grupo(z){ const q = POS[z]; return q.blk === 'f' ? null : q.c; }

const ELEM = [null].concat(E.map((e, i) => ({
  z:i + 1, sym:e[0], nombre:e[1], ox:e[2] ? e[2].split(',') : [], blk:POS[i + 1].blk, r:POS[i + 1].r, c:POS[i + 1].c, p:POS[i + 1].p
})));

/* ───── flotas ───── */
const FLOTAS = {
  sp:  {id:'sp',  nombre:'Solo bloques s y p', bloques:'sp',   barcos:['s','s','p','p'], orient:'fila'},
  spd: {id:'spd', nombre:'Bloques s, p y d',   bloques:'spd',  barcos:['s','s','p','p','d','d'], orient:'fila'},
  spdf:{id:'spdf',nombre:'Tabla completa (s, p, d y f)', bloques:'spdf', barcos:['s','s','p','p','d','d','f'], orient:'fila'}
};
/* Variante «por familias»: los barcos van en COLUMNA (un grupo o familia),
   de 2 a 5 casillas seguidas hacia abajo. */
const FLOTAS_COL = {
  sp:  {id:'sp',  nombre:'Familias de los bloques s y p', bloques:'sp',   barcos:['v2','v3','v3','v4'], orient:'col'},
  spd: {id:'spd', nombre:'Familias de los bloques s, p y d', bloques:'spd',  barcos:['v2','v3','v3','v4','v4'], orient:'col'},
  spdf:{id:'spdf',nombre:'Tabla completa por familias', bloques:'spdf', barcos:['v2','v3','v3','v4','v4','v5'], orient:'col'}
};
const flota = (id, orient) => (orient === 'col' ? FLOTAS_COL : FLOTAS)[id];

/* todas las filas de casillas seguidas del mismo bloque donde cabe un barco */
const _col = {};
function colocaciones(key, zona){
  zona = zona || 'spdf';
  const ck = key + '|' + zona; if(_col[ck]) return _col[ck];
  const tam = TAM[key], out = [];
  if(key[0] === 'v'){
    /* columnas: casillas seguidas hacia abajo dentro de la zona (las filas 8 y 9, el bloque f, van aparte) */
    for(let c = 1; c <= 18; c++) [[1, 7], [8, 9]].forEach(([r0, r1]) => {
      let run = [];
      const cerrar = () => { for(let k = 0; k + tam <= run.length; k++) out.push(run.slice(k, k + tam)); run = []; };
      for(let r = r0; r <= r1; r++){ const z = (ARR[r] || {})[c]; if(z && zona.indexOf(POS[z].blk) >= 0) run.push(z); else cerrar(); }
      cerrar();
    });
  }else{
    for(let r = 1; r <= 9; r++){
      const cols = Object.keys(ARR[r] || {}).map(Number).filter(c => POS[ARR[r][c]].blk === key).sort((a, b) => a - b);
      let i = 0;
      while(i < cols.length){
        let j = i; while(j + 1 < cols.length && cols[j + 1] === cols[j] + 1) j++;
        for(let st = i; st + tam - 1 <= j; st++){ const p = []; for(let k = 0; k < tam; k++) p.push(ARR[r][cols[st + k]]); out.push(p); }
        i = j + 1;
      }
    }
  }
  return (_col[ck] = out);
}

/* ───── azar con semilla (la misma de las hojas de papel) ───── */
function fnv(str){ let h = 0x811c9dc5; for(let i = 0; i < str.length; i++){ h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193); } return h >>> 0; }
function rng(seed){
  if(seed === undefined || seed === null) return Math.random;
  let a = fnv(String(seed));
  return function(){ a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
const pick = (arr, r) => arr[Math.floor(r() * arr.length)];
function barajar(arr, r){ const a = arr.slice(); for(let i = a.length - 1; i > 0; i--){ const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

/* Coloca toda la flota al azar. Devuelve [{id, blk, tam, cells:[z…]}] */
function colocarAlAzar(barcos, r, zona){
  r = r || Math.random;
  for(let intento = 0; intento < 200; intento++){
    const ocup = new Set(), flota = []; let ok = true;
    // primero los barcos con menos opciones (los de mayor tamaño)
    const orden = barcos.map((b, i) => ({b, i})).sort((x, y) => TAM[y.b] - TAM[x.b]);
    for(const {b, i} of orden){
      const libres = colocaciones(b, zona).filter(p => !p.some(z => ocup.has(z)));
      if(!libres.length){ ok = false; break; }
      const p = pick(libres, r); p.forEach(z => ocup.add(z));
      flota.push({id:i, blk:b, tam:TAM[b], cells:p.slice()});
    }
    if(ok) return flota.sort((x, y) => x.id - y.id);
  }
  return [];
}
/* Colocación manual: el toque marca la casilla de la izquierda; si el barco
   no cabe ahí, se corre a la colocación válida más cercana que lo contenga. */
function colocacionPara(blk, z, ocupadas, zona){
  const c = colocaciones(blk, zona).filter(p => p.indexOf(z) >= 0 && !p.some(q => ocupadas.has(q)));
  if(!c.length) return null;
  const dist = p => Math.abs(POS[p[0]].c - POS[z].c) + Math.abs(POS[p[0]].r - POS[z].r);
  c.sort((a, b) => dist(a) - dist(b));
  return c[0];
}

/* ───── la IA ─────
   facil:   dispara al azar.
   normal:  al azar hasta que acierta; luego prueba las casillas vecinas.
   dificil: calcula, casilla por casilla, en cuántas posiciones posibles de
            los barcos que le quedan cabe (los barcos solo caben dentro de un
            bloque y en fila) y dispara donde más se repiten; si ya tiene un
            impacto, pesa mucho más las posiciones que lo cubren. */
function crearIA(nivel, barcos, activos, r, zona){
  r = r || Math.random;
  const tiros = new Map();             // z → 'agua' | 'impacto' | 'hundido'
  let restantes = barcos.slice();
  const libres = () => activos.filter(z => !tiros.has(z));
  const vecinas = z => {
    const q = POS[z], out = [];
    [[0,-1],[0,1],[-1,0],[1,0]].forEach(([dr, dc]) => { const v = (ARR[q.r + dr] || {})[q.c + dc]; if(v && activos.indexOf(v) >= 0 && !tiros.has(v)) out.push(v); });
    return out;
  };
  function elegir(){
    const lib = libres(); if(!lib.length) return null;
    const vivos = [...tiros].filter(x => x[1] === 'impacto').map(x => x[0]);
    if(nivel === 'facil') return pick(lib, r);
    if(nivel === 'normal'){
      const cand = []; vivos.forEach(z => vecinas(z).forEach(v => { if(cand.indexOf(v) < 0) cand.push(v); }));
      return cand.length ? pick(cand, r) : pick(lib, r);
    }
    const score = new Map();
    for(const b of restantes){
      for(const p of colocaciones(b, zona)){
        if(p.some(z => tiros.get(z) === 'agua' || tiros.get(z) === 'hundido' || activos.indexOf(z) < 0)) continue;
        const h = p.filter(z => tiros.get(z) === 'impacto').length;
        const w = h ? Math.pow(40, h) : 1;
        p.forEach(z => { if(!tiros.has(z)) score.set(z, (score.get(z) || 0) + w); });
      }
    }
    if(!score.size) return pick(lib, r);
    let mejor = -1, c = [];
    score.forEach((v, z) => { if(v > mejor){ mejor = v; c = [z]; } else if(v === mejor) c.push(z); });
    return pick(c, r);
  }
  function registrar(z, res, hundido){
    tiros.set(z, res === 'agua' ? 'agua' : 'impacto');
    if(hundido){
      hundido.cells.forEach(c => tiros.set(c, 'hundido'));
      const i = restantes.indexOf(hundido.blk); if(i >= 0) restantes.splice(i, 1);
    }
  }
  return {elegir, registrar, tiros};
}

/* ═════════════════════ RETOS ═════════════════════ */
const fmtOx = s => String(s).replace('-', '−');
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

function _banco(){ try{ return (typeof BANCO !== 'undefined' && Array.isArray(BANCO)) ? BANCO : []; }catch(e){ return []; } }
let _idx = null;
function indiceCompuestos(){
  if(_idx) return _idx; _idx = {};
  _banco().forEach(c => {
    const toks = String(c.formula).match(/[A-Z][a-z]?/g) || [];
    new Set(toks).forEach(s => (_idx[s] = _idx[s] || []).push(c));
  });
  return _idx;
}
function nombreDe(c, sis){
  const a = (c[sis] || []).filter(Boolean);
  return a.length ? a[0] : '';
}
const SIS_ROT = {trad:'tradicional', stock:'Stock', sist:'sistemática'};

function barajarOpciones(correcta, malas, r){
  const ops = barajar([{h:correcta, ok:true}].concat(malas.map(h => ({h, ok:false}))), r);
  return {opciones:ops.map(o => o.h), ok:ops.findIndex(o => o.ok)};
}
function tresDistintos(cands, correcta, r){
  const u = []; barajar(cands, r).forEach(x => { if(x !== correcta && u.indexOf(x) < 0) u.push(x); });
  return u.slice(0, 3);
}

function retoConfig(z, r){
  const t = terminacion(z), el = ELEM[z], cfg = config(z), q = POS[z];
  const set = [];
  const add = (n, l, e) => { if(l < 0 || l > 3 || n <= l || n < 1 || n > 7 || e < 1 || e > 2 * (2 * l + 1)) return; const s = n + LET[l] + sup(e); if(s !== t.txt && set.indexOf(s) < 0) set.push(s); };
  add(t.n, t.l, t.e + 1); add(t.n, t.l, t.e - 1); add(t.n + 1, t.l, t.e); add(t.n - 1, t.l, t.e);
  add(t.n, t.l - 1, t.e); add(t.n - 1, t.l + 1, t.e); add(t.n + 1, t.l - 1, t.e); add(t.n, 0, 2);
  add(t.n + 1, t.l + 1, t.e); add(t.n + 2, t.l, t.e); add(t.n, t.l, t.e + 2); add(t.n, t.l, t.e - 2);
  const malas = tresDistintos(set, t.txt, r);
  const o = barajarOpciones(t.txt, malas, r);
  const g = grupo(z);
  return {tipo:'cfg', etiqueta:'Configuración electrónica',
    pregunta:'¿En qué subnivel <b>termina</b> la configuración electrónica del <b>' + el.nombre + '</b> (' + el.sym + ', Z = ' + z + ')?',
    opciones:o.opciones, ok:o.ok,
    explica:'<b>' + el.sym + '</b> (Z = ' + z + '): ' + config(z) + '. El último electrón entra en <b>' + t.txt + '</b> → bloque <b>' + t.blk + '</b>, periodo ' + q.p + (g ? ', grupo ' + g : '') + '.'};
}
function retoBloque(z, r){
  const el = ELEM[z], t = terminacion(z);
  const o = barajarOpciones('bloque ' + t.blk, ['s','p','d','f'].filter(b => b !== t.blk).map(b => 'bloque ' + b), r);
  return {tipo:'bloque', etiqueta:'Ubicación',
    pregunta:'¿En qué <b>bloque</b> de la tabla periódica está el <b>' + el.nombre + '</b> (' + el.sym + ')?',
    opciones:o.opciones, ok:o.ok,
    explica:'<b>' + el.sym + '</b> termina en <b>' + t.txt + '</b> (' + config(z) + '), así que está en el bloque <b>' + t.blk + '</b>.'};
}
function retoPeriodo(z, r){
  const el = ELEM[z], p = POS[z].p;
  const c = []; for(let i = 1; i <= 7; i++) c.push(String(i));
  const cerca = c.filter(x => Math.abs(+x - p) <= 2);
  const malas = tresDistintos(cerca.length >= 4 ? cerca : c, String(p), r);
  const o = barajarOpciones(String(p), malas, r);
  return {tipo:'periodo', etiqueta:'Ubicación',
    pregunta:'¿En qué <b>periodo</b> está el <b>' + el.nombre + '</b> (' + el.sym + ')?',
    opciones:o.opciones, ok:o.ok,
    explica:'El periodo es el mayor nivel <i>n</i> con electrones: ' + config(z) + ' → n = <b>' + p + '</b>.'};
}
function retoGrupo(z, r){
  const el = ELEM[z], g = grupo(z), c = [];
  for(let i = 1; i <= 18; i++) c.push(String(i));
  const cerca = c.filter(x => Math.abs(+x - g) <= 3);
  const malas = tresDistintos(cerca, String(g), r);
  const o = barajarOpciones(String(g), malas, r), t = terminacion(z);
  return {tipo:'grupo', etiqueta:'Ubicación',
    pregunta:'¿En qué <b>grupo</b> (columna 1–18) está el <b>' + el.nombre + '</b> (' + el.sym + ')?',
    opciones:o.opciones, ok:o.ok,
    explica:'<b>' + el.sym + '</b> termina en <b>' + t.txt + '</b>: ' + (t.blk === 's' ? 'en el bloque s el grupo es el número de electrones del subnivel s (' + g + ').' : t.blk === 'p' ? 'en el bloque p el grupo es 12 + los electrones del subnivel p (12 + ' + t.e + ' = ' + g + ').' : 'en el bloque d el grupo es 2 + los electrones del subnivel d (2 + ' + t.e + ' = ' + g + ').')};
}
function retoOx(z, r){
  const el = ELEM[z], lista = el.ox;
  const buena = fmtOx(pick(lista, r));
  const todos = ['−4','−3','−2','−1','+1','+2','+3','+4','+5','+6','+7'].filter(x => lista.map(fmtOx).indexOf(x) < 0);
  const NO_METAL = ['H','B','C','N','O','F','Si','P','S','Cl','Ge','As','Se','Br','Sb','Te','I','At'];
  const metal = NO_METAL.indexOf(el.sym) < 0;
  const pref = metal ? todos.filter(x => x[0] === '−' || +x.replace('+','') > 4) : todos;
  const malas = tresDistintos(pref.length >= 3 ? pref : todos, buena, r);
  const o = barajarOpciones(buena, malas, r);
  return {tipo:'ox', etiqueta:'Estado de oxidación',
    pregunta:'¿Cuál de estos es un <b>estado de oxidación</b> posible del <b>' + el.nombre + '</b> (' + el.sym + ')?',
    opciones:o.opciones, ok:o.ok,
    explica:'Estados de oxidación del ' + el.nombre + ': <b>' + lista.map(fmtOx).join(', ') + '</b>.'};
}
function retoNom(z, r){
  const el = ELEM[z], cs = (indiceCompuestos()[el.sym] || []).filter(c => ['trad','stock','sist'].some(x => nombreDe(c, x)));
  if(!cs.length) return null;
  const c = pick(cs, r);
  const sist = ['trad','stock','sist'].filter(s => nombreDe(c, s));
  const sis = pick(sist.length > 1 && r() < .7 ? sist.filter(s => s !== 'sist') : sist, r);
  const todos = _banco();
  const mismo = todos.filter(x => x.group === c.group && x.formula !== c.formula);
  const otros = todos.filter(x => x.formula !== c.formula);
  const hint = c.hint ? '<br><small>' + esc(c.hint) + '</small>' : '';
  const nombres = ['trad','stock','sist'].filter(s => nombreDe(c, s)).map(s => nombreDe(c, s) + ' <small>(' + SIS_ROT[s] + ')</small>').join(' · ');
  if(r() < .5){
    const buena = nombreDe(c, sis);
    const malas = tresDistintos(mismo.map(x => nombreDe(x, sis)).filter(Boolean).concat(otros.map(x => nombreDe(x, sis)).filter(Boolean)), buena, r);
    if(malas.length < 3) return null;
    const o = barajarOpciones(buena, malas, r);
    return {tipo:'nom', etiqueta:'Nomenclatura ' + SIS_ROT[sis],
      pregunta:'Nomenclatura <b>' + SIS_ROT[sis] + '</b>: ¿cómo se llama <b class="fx">' + c.formula + '</b>?',
      opciones:o.opciones, ok:o.ok, explica:'<b class="fx">' + c.formula + '</b> = ' + nombres + '.' + hint};
  }
  const buena = c.formula;
  const malas = tresDistintos(mismo.map(x => x.formula).concat(otros.map(x => x.formula)), buena, r);
  const o = barajarOpciones(buena, malas, r);
  return {tipo:'nom', etiqueta:'Nomenclatura ' + SIS_ROT[sis],
    pregunta:'Nomenclatura <b>' + SIS_ROT[sis] + '</b>: ¿cuál es la fórmula de «<b>' + esc(nombreDe(c, sis)) + '</b>»?',
    opciones:o.opciones, ok:o.ok, explica:'<b class="fx">' + c.formula + '</b> = ' + nombres + '.' + hint};
}


/* ───── familias ───── */
const FAMILIAS = {1:'alcalinos', 2:'alcalinotérreos', 13:'térreos', 14:'carbonoideos', 15:'nitrogenoideos', 16:'anfígenos', 17:'halógenos', 18:'gases nobles'};
const TODAS_FAM = Object.keys(FAMILIAS).map(k => FAMILIAS[k]).concat(['metales de transición', 'lantánidos', 'actínidos']);
function familiaDe(z){
  const q = POS[z];
  if(z === 1 || z === 71 || z === 103) return null;      // H, Lu y Lr: se prestan a discusión
  if(q.blk === 'f') return z <= 70 ? 'lantánidos' : 'actínidos';
  if(q.blk === 'd') return 'metales de transición';
  return FAMILIAS[q.c] || null;
}
const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
function retoFamilia(z, r){
  const fam = familiaDe(z); if(!fam) return null;
  const el = ELEM[z], q = POS[z], g = grupo(z), esRep = (q.blk === 's' || q.blk === 'p');
  const nom = e => e.nombre + ' (' + e.sym + ')';
  if(esRep && r() < .45){
    const mismos = ELEM.filter(e => e && e.z !== z && e.z !== 1 && e.c === q.c && (e.blk === 's' || e.blk === 'p'));
    const otros = ELEM.filter(e => e && e.z !== 1 && (e.blk === 's' || e.blk === 'p') && e.c !== q.c);
    if(mismos.length){
      const buena = pick(mismos, r);
      const malas = barajar(otros, r).filter((e, i, a) => a.findIndex(x => x.c === e.c) === i).slice(0, 3);
      if(malas.length === 3){
        const o = barajarOpciones(nom(buena), malas.map(nom), r);
        return {tipo:'fam', etiqueta:'Familias',
          pregunta:'¿Cuál de estos elementos pertenece a la <b>misma familia</b> que el <b>' + el.nombre + '</b> (' + el.sym + ')?',
          opciones:o.opciones, ok:o.ok,
          explica:'<b>' + el.sym + '</b> y <b>' + buena.sym + '</b> están en el grupo <b>' + g + '</b>: la familia de los <b>' + fam + '</b>.'};
      }
    }
  }
  const malas = tresDistintos(TODAS_FAM.filter(f => f !== fam).map(cap), cap(fam), r);
  const o = barajarOpciones(cap(fam), malas, r);
  const porque = q.blk === 'f' ? 'Están en el bloque f: el periodo 6 son los lantánidos y el periodo 7, los actínidos.'
    : q.blk === 'd' ? 'Los grupos 3 a 12 (bloque d) forman los metales de transición.'
    : '<b>' + el.sym + '</b> está en el grupo <b>' + g + '</b>.';
  return {tipo:'fam', etiqueta:'Familias',
    pregunta:'¿A qué <b>familia</b> pertenece el <b>' + el.nombre + '</b> (' + el.sym + ')?',
    opciones:o.opciones, ok:o.ok, explica:porque + ' Familia: <b>' + fam + '</b>.'};
}

/* tema: 'tabla' (configuración y ubicación) | 'ox' (estados de oxidación) | 'fam' (familias) | 'mixto' */
function reto(z, tema, r){
  r = r || Math.random;
  const el = ELEM[z];
  const cand = [];   // [peso, función]
  const cfgOk = z <= 103 && !EXCEPCIONES.has(z);
  if(tema === 'tabla' || tema === 'mixto'){
    if(cfgOk) cand.push([tema === 'tabla' ? 4 : 2, retoConfig]);
    cand.push([2, retoBloque], [2, retoPeriodo]);
    if(el.blk !== 'f') cand.push([2, retoGrupo]);
  }
  if(tema === 'fam' || tema === 'mixto'){ if(familiaDe(z)) cand.push([tema === 'fam' ? 9 : 2, retoFamilia]); }
  /* La nomenclatura (retoNom) queda desactivada por ahora: los retos son de
     configuración/ubicación y de estados de oxidación. */
  if(tema === 'ox' || tema === 'mixto'){
    if(el.ox.length) cand.push([tema === 'ox' ? 9 : 3, retoOx]);
  }
  if(!cand.length) cand.push([1, retoBloque]);
  for(let intento = 0; intento < 6; intento++){
    const tot = cand.reduce((s, x) => s + x[0], 0); let v = r() * tot, f = cand[0][1];
    for(const x of cand){ v -= x[0]; if(v <= 0){ f = x[1]; break; } }
    const q = f(z, r); if(q && q.opciones.length === 4) return q;
  }
  return retoBloque(z, r);
}

window.BATALLA = {ELEM, POS, ARR, E, bloque, terminacion, config, grupo, periodo, FLOTAS, FLOTAS_COL, flota, familiaDe, FAMILIAS, TAM, NOM_BLK, EXCEPCIONES,
  colocaciones, colocarAlAzar, colocacionPara, crearIA, reto, rng, barajar, pick, sup};
})();
