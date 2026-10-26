/* ════════════════════════════════════════════════════════════════════════
   laberinto.js — pestaña «Laberintos» de docente.html
   Integra a IonNom el generador de laberintos químicos (hoja con casillas
   A, B, C…; en cada una el estudiante resuelve un ejercicio y sigue la
   flecha rotulada con su resultado hasta llegar a FIN).

   Principios:
   - No copiar bancos: las pistas salen de BANCO (banco.js, el mismo que
     usan el Juego y el Generador) y de ELEMENTS / getOxidationStates de
     juego.html, que docente-app.js ya lee vía iframe (DOCENTE.B).
   - Ruta única: cada casilla tiene UNA sola salida con la respuesta
     correcta (o ninguna, si es trampa) y cada pregunta trae su propio
     validador `acepta(rótulo)`, independiente de cómo se armaron los
     distractores. Antes de mostrar un laberinto se verifica entero
     (verificar()): ninguna salida falsa puede ser aceptada por el
     validador, siguiendo solo respuestas correctas desde A se llega a FIN
     por la ruta de la clave, y desde una casilla fuera de la ruta nunca
     se llega a FIN respondiendo bien. Si algo falla, se rehace con la
     misma semilla + un sufijo (determinista: misma semilla → mismo
     laberinto).
   - Semilla reproducible y varias versiones paralelas para imprimir.
   ════════════════════════════════════════════════════════════════════════ */
(function(){
'use strict';

/* ───────────────────────── 1. Utilidades ───────────────────────── */
const SUB_A = {'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9'};
const A_SUB = '₀₁₂₃₄₅₆₇₈₉';
const A_SUP = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','+':'⁺','-':'⁻'};
const aAscii = f => String(f).replace(/[₀-₉]/g, c => SUB_A[c]);
// Dígitos tras letra o ")" → subíndice Unicode (igual que las fórmulas de banco.js)
const aSub = f => String(f).replace(/([A-Za-z)])(\d+)/g, (m, a, d) => a + d.split('').map(x => A_SUB[x]).join(''));
const sup = s => String(s).split('').map(c => A_SUP[c] || c).join('');
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
const normNombre = s => String(s||'').toLowerCase().normalize('NFC').replace(/\s+/g,' ').replace(/\s*\(\s*/g,'(').replace(/\s*\)\s*/g,')').trim();

function parseF(f){
  const s = aAscii(f).replace(/\((aq|g|l|s)\)$/i,'');
  const out = {};
  (function grupo(str, mult){
    let i = 0;
    while(i < str.length){
      if(str[i] === '('){
        let d = 1, j = i + 1;
        while(j < str.length && d){ if(str[j]==='(') d++; else if(str[j]===')') d--; j++; }
        let n = ''; while(j < str.length && /\d/.test(str[j])) n += str[j++];
        grupo(str.slice(i+1, j-1), mult * (n ? +n : 1)); i = j;
      } else if(/[A-Z]/.test(str[i])){
        let el = str[i++]; while(i < str.length && /[a-z]/.test(str[i])) el += str[i++];
        let n = ''; while(i < str.length && /\d/.test(str[i])) n += str[i++];
        out[el] = (out[el]||0) + mult * (n ? +n : 1);
      } else i++;
    }
  })(s, 1);
  return out;
}
const contarAtomos = f => Object.values(parseF(f)).reduce((a,b) => a+b, 0);

function fmtNum(x, d){
  if(d == null) d = 2;
  const k = Math.pow(10, d), v = Math.round(x*k)/k;
  let s = v.toFixed(d);
  if(s.indexOf('.') >= 0) s = s.replace(/0+$/,'').replace(/\.$/,'');
  let [ent, dec] = s.split('.');
  ent = ent.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return dec ? ent + ',' + dec : ent;
}
// Rótulo: h = HTML visible, k = clave única (comparación exacta), v/u =
// valor numérico y unidad (para el validador por tolerancia).
const L = (h, k, extra) => Object.assign({h, k: k || h.replace(/<[^>]+>/g,'')}, extra||{});
const numL = (x, u) => L(fmtNum(x) + ' ' + u, 'N:' + fmtNum(x) + ' ' + u, {v:x, u});
function sciPartes(x){
  let e = Math.floor(Math.log10(x) + 1e-12), m = x / Math.pow(10, e);
  m = Math.round(m*100)/100; if(m >= 10){ m = 1; e++; }
  return {m, e};
}
function sciL(x, u){
  const p = sciPartes(x), ms = fmtNum(p.m, 2);
  return L(ms + '×10<sup>' + p.e + '</sup> ' + u, 'N:' + ms + 'e' + p.e + ' ' + u, {v:x, u});
}
const autoL = (x, u) => x >= 1e5 ? sciL(x, u) : numL(x, u);
const valido = x => isFinite(x) && x > 0 && Math.round(x*100)/100 > 0;

/* ───────────────────────── 2. Azar con semilla ───────────────────────── */
function makeRng(str){
  let h = 2166136261 >>> 0;
  for(let i=0;i<str.length;i++){ h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  let a = h || 1;
  const r = function(){ a = (a + 0x6D2B79F5)|0; let t = Math.imul(a ^ (a>>>15), 1|a); t = (t + Math.imul(t ^ (t>>>7), 61|t)) ^ t; return ((t ^ (t>>>14)) >>> 0) / 4294967296; };
  for(let i=0;i<6;i++) r();
  return r;
}
const pick = (a, r) => a[Math.floor(r()*a.length)];
function shuffle(a, r){ a = a.slice(); for(let i=a.length-1;i>0;i--){ const j = Math.floor(r()*(i+1)); [a[i],a[j]] = [a[j],a[i]]; } return a; }

/* ───────────────────────── 3. Bancos ───────────────────────── */
function D(){ return (window.DOCENTE && window.DOCENTE.B) || {}; }
function banco(){ try{ return D().BANCO || BANCO; }catch(e){ return []; } }

const GRUPOS_NOM = ['ox-bas','anhid','hidru','ac-hid','base','ac-ox','sal-bin','sal-ox','sal-ac'];
const GRUPO_NOMBRE = {
  'ox-bas':'Óxido básico', anhid:'Óxido ácido (anhídrido)', hidru:'Hidruro metálico',
  'ac-hid':'Ácido hídrico', base:'Hidróxido (base)', 'ac-ox':'Ácido oxácido',
  'sal-bin':'Sal binaria', 'sal-ox':'Sal oxigenada', 'sal-ac':'Sal ácida'
};
const SIS_NOMBRE = {trad:'Tradicional', stock:'Stock', sist:'Sistemática'};

// Masas atómicas: las de ELEMENTS (juego.html), redondeadas a 1 decimal
// para que el estudiante pueda calcular a mano y el resultado impreso sea
// EXACTAMENTE el que sale con los datos de la hoja. Respaldo fijo solo si
// juego.html no cargó.
const MASAS_RESPALDO = {H:1.0,He:4.0,Li:6.9,Be:9.0,B:10.8,C:12.0,N:14.0,O:16.0,F:19.0,Na:23.0,Mg:24.3,Al:27.0,Si:28.1,P:31.0,S:32.1,Cl:35.5,K:39.1,Ca:40.1,Cr:52.0,Mn:54.9,Fe:55.8,Cu:63.5,Zn:65.4,Br:79.9,Ag:107.9,I:126.9,Ba:137.3,Hg:200.6,Pb:207.2};
let _masas = null;
function masas(){
  if(_masas) return _masas;
  const E = D().ELEMENTS;
  if(E){ _masas = {}; Object.values(E).forEach(e => { _masas[e.sym] = Math.round(e.mass*10)/10; }); }
  return _masas || MASAS_RESPALDO;
}
// Masa molar en DÉCIMAS (entero) para evitar errores de coma flotante.
function masaMolar10(f){
  const p = parseF(f), m = masas(); let s = 0;
  for(const k in p){ if(m[k] == null) return null; s += Math.round(m[k]*10) * p[k]; }
  return s;
}
const masaMolar = f => { const x = masaMolar10(f); return x == null ? null : x/10; };

const NO_METALES = new Set(['H','He','C','N','O','F','Ne','P','S','Cl','Ar','Se','Br','Kr','I','Xe','B','Si']);
const esMolecular = f => { const s = aAscii(f); if(/NH4/.test(s)) return false; return Object.keys(parseF(f)).every(el => NO_METALES.has(el)); };

/* ───────────────────────── 4. Nomenclatura ───────────────────────── */
function nombresDe(c, sis){ return (c[sis]||[]).filter(Boolean); }
let _idx = null;
function indice(){
  // Índices sobre TODO el banco de nomenclatura: nombres válidos por
  // fórmula (todas las entradas, todos los sistemas) y fórmulas por nombre
  // -- el validador acepta cualquier nombre real del compuesto, no solo
  // el que se pidió, así ningún distractor puede ser "también correcto".
  if(_idx && _idx.n === banco().length) return _idx;
  const porF = {}, porNombre = {}, gruposF = {};
  banco().filter(c => GRUPOS_NOM.includes(c.group)).forEach(c => {
    const f = aAscii(c.formula);
    (gruposF[f] = gruposF[f] || new Set()).add(c.group);
    const set = porF[f] = porF[f] || new Set();
    ['trad','stock','sist'].forEach(s => nombresDe(c, s).forEach(n => {
      set.add(normNombre(n));
      (porNombre[normNombre(n)] = porNombre[normNombre(n)] || new Set()).add(f);
    }));
  });
  _idx = {n: banco().length, porF, porNombre, gruposF};
  return _idx;
}

// Partes coloreadas según el método cromático de IonNom (catión, anión,
// hidróxido, oxoanión): mismo código de 4 colores del resto del sitio.
const RE_CAT = /^(\(NH4\)\d*|NH4|[A-Z][a-z]?\d*)(.+)$/;
function partesColor(f, g){
  const s = aAscii(f); let m;
  if(g === 'base' && (m = s.match(/^(.+?)(\(OH\)\d*|OH)$/))) return [[m[1],'cat'],[m[2],'oh']];
  if((g === 'ox-bas') && (m = s.match(/^(.+?)(O\d*)$/))) return [[m[1],'cat'],[m[2],'an']];
  if(g === 'hidru' && (m = s.match(/^(.+?)(H\d*)$/))) return [[m[1],'cat'],[m[2],'an']];
  if(g === 'ac-hid' && (m = s.match(/^(H\d*)(.+)$/))) return [[m[1],'cat'],[m[2],'an']];
  if(g === 'ac-ox' && (m = s.match(/^(H\d*)(.+)$/))) return [[m[1],'cat'],[m[2],'ox']];
  if(g === 'sal-bin' && (m = s.match(RE_CAT))) return [[m[1],'cat'],[m[2],'an']];
  if((g === 'sal-ox' || g === 'sal-ac') && (m = s.match(RE_CAT))) return [[m[1],'cat'],[m[2],'ox']];
  return null;
}
function formulaHTML(f, g){
  const p = g ? partesColor(f, g) : null;
  if(!p) return '<span class="lf">' + esc(aSub(aAscii(f))) + '</span>';
  return '<span class="lf">' + p.map(([t,k]) => '<span class="c-' + k + '">' + esc(aSub(t)) + '</span>').join('') + '</span>';
}

// Cambia un subíndice (±1) o agrega uno: fórmula plausible pero incorrecta.
function mutarFormula(f, r){
  // (sin lookbehind en la regex: Safari < 16.4 —iPads viejos del colegio— no lo soporta)
  const s = aAscii(f), ms = [...s.matchAll(/([A-Za-z)])(\d+)/g)];
  if(ms.length && r() < .8){
    const m = pick(ms, r), v = +m[2], nv = (v > 2 && r() < .5) ? v-1 : v+1, i0 = m.index + 1;
    return s.slice(0, i0) + nv + s.slice(i0 + m[2].length);
  }
  const els = [...s.matchAll(/[A-Z][a-z]?(?!\d|[a-z])/g)];
  if(els.length){ const m = pick(els, r); return s.slice(0, m.index + m[0].length) + '2' + s.slice(m.index + m[0].length); }
  return s + '2';
}
const ROM = ['I','II','III','IV','V','VI','VII'];
const PREF = ['mono','di','tri','tetra','penta','hexa','hepta'];
function mutarNombre(n, r){
  let m = n.match(/\((VII|VI|IV|V|III|II|I)\)/);
  if(m) return n.replace(m[0], '(' + pick(ROM.filter(x => x !== m[1]), r) + ')');
  if((m = n.match(/(ico|oso)(\s|$)/))) return n.replace(/(ico|oso)(\s|$)/, (a, s, t) => (s === 'ico' ? 'oso' : 'ico') + t);
  m = n.match(/^(mono|di|tri|tetra|penta|hexa|hepta)/);
  if(m) return n.replace(m[1], pick(PREF.filter(x => x !== m[1]), r));
  m = n.match(/de (di|tri|tetra)/);
  if(m) return n.replace('de ' + m[1], 'de ' + pick(['di','tri','tetra'].filter(x => x !== m[1]), r));
  return null;
}

// Estado de oxidación: getOxidationStates de juego.html (mismo cálculo
// que el tipo de pregunta "ox-state" del Juego).
function estadoOx(c){
  const fn = D().getOxidationStates; if(!fn) return null;
  let data; try{ data = fn(c); }catch(e){ return null; }
  if(!data) return null;
  const cand = data.filter(d => d.elem !== 'O' && !(d.elem === 'H' && c.group !== 'hidru'));
  if(!cand.length) return null;
  const el = cand.sort((a,b) => Math.abs(b.state) - Math.abs(a.state))[0];
  return {el: el.elem, ox: el.state};
}
const oxTxt = v => (v > 0 ? '+' : '−') + Math.abs(v);

function genNom(forma, r, o){
  const idx = indice();
  let c = pick(o.pool, r);
  if(forma === 'oxn'){
    const ok = o.pool.filter(x => estadoOx(x));
    if(!ok.length) return null;
    c = pick(ok, r);
  }
  const f = aAscii(c.formula), g = c.group;
  const fo = o.color ? formulaHTML(c.formula, g) : formulaHTML(c.formula);
  if(forma === 'f2n' || forma === 'n2f'){
    // sistema: el pedido si el compuesto tiene nombre en él; si no, otro que sí tenga
    const disp = o.sis.filter(s => nombresDe(c, s).length);
    const todos = ['trad','stock','sist'].filter(s => nombresDe(c, s).length);
    if(!todos.length) return null;
    const s = disp.length ? pick(disp, r) : pick(todos, r);
    const nombre = cap(nombresDe(c, s)[0]);
    const validos = idx.porF[f] || new Set();
    if(forma === 'f2n'){
      const nomL = n => L(esc(cap(n)), 'T:' + normNombre(n));
      const cands = [];
      const mismos = banco().filter(x => x.group === g && aAscii(x.formula) !== f);
      const mismoEl = mismos.filter(x => Object.keys(parseF(x.formula))[0] === Object.keys(parseF(f))[0]);
      mismoEl.concat(shuffle(mismos, r).slice(0, 6)).forEach(x => { const n = nombresDe(x, s)[0] || nombresDe(x, 'trad')[0]; if(n) cands.push(nomL(n)); });
      for(let i=0;i<3;i++){ const m = mutarNombre(nombre.toLowerCase(), r); if(m) cands.push(nomL(m)); }
      return {
        key: 'f2n' + f + s, qh: 'Nombra en el sistema <b>' + SIS_NOMBRE[s] + '</b>:', fo, foc: '',
        ans: nomL(nombre), cands,
        more: rr => { const x = pick(banco().filter(y => GRUPOS_NOM.includes(y.group)), rr); const n = nombresDe(x, s)[0] || nombresDe(x,'trad')[0]; return n ? nomL(n) : null; },
        acepta: lab => lab.k.startsWith('T:') && validos.has(lab.k.slice(2)),
        fs: []
      };
    }
    // n2f: el nombre mostrado puede corresponder a más de una fórmula del
    // banco (duplicados entre grupos) -- todas se aceptan, ninguna sirve de distractor.
    const fs = idx.porNombre[normNombre(nombre)] || new Set([f]);
    const fL = x => L(o.color ? formulaHTML(x, g) : formulaHTML(x), 'F:' + aAscii(x));
    const cands = [];
    const mismos = banco().filter(x => x.group === g && aAscii(x.formula) !== f);
    const mismoEl = mismos.filter(x => Object.keys(parseF(x.formula))[0] === Object.keys(parseF(f))[0]);
    mismoEl.concat(shuffle(mismos, r).slice(0, 5)).forEach(x => cands.push(fL(x.formula)));
    for(let i=0;i<4;i++) cands.push(fL(mutarFormula(f, r)));
    return {
      key: 'n2f' + f + s, qh: 'Escribe la fórmula (' + SIS_NOMBRE[s] + '):', fo: esc(nombre), foc: 'nm',
      ans: fL(c.formula), cands,
      more: rr => fL(mutarFormula(f, rr)),
      acepta: lab => lab.k.startsWith('F:') && fs.has(lab.k.slice(2)),
      fs: []
    };
  }
  if(forma === 'cls'){
    const gs = idx.gruposF[f] || new Set([g]);
    const gL = x => L(GRUPO_NOMBRE[x], 'G:' + x);
    return {
      key: 'cls' + f, qh: '¿A qué función química pertenece?', fo, foc: '',
      ans: gL(g), cands: GRUPOS_NOM.map(gL),
      more: rr => gL(pick(GRUPOS_NOM, rr)),
      acepta: lab => lab.k.startsWith('G:') && gs.has(lab.k.slice(2)),
      fs: []
    };
  }
  // oxn
  const st = estadoOx(c);
  const xL = v => L(oxTxt(v), 'X:' + v);
  const cands = [];
  for(let v=-3; v<=7; v++) if(v !== 0 && v !== st.ox) cands.push(xL(v));
  return {
    key: 'oxn' + f, qh: '¿Cuál es el estado de oxidación del <b>' + st.el + '</b> en', fo, foc: '',
    ans: xL(st.ox), cands: shuffle(cands, r).sort((a,b) => Math.abs(+a.k.slice(2) - st.ox) - Math.abs(+b.k.slice(2) - st.ox)).slice(0, 6),
    more: rr => { const v = 1 + Math.floor(rr()*7); return xL(rr() < .2 ? -v : v); },
    acepta: lab => lab.k === 'X:' + st.ox,
    fs: []
  };
}

/* ───────────────────────── 5. Mol y masa molar ───────────────────────── */
const NA = 6.022e23, VM = 22.4;
const NV = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5];
const FACT = [0.1, 0.25, 0.5, 1.5, 2, 3, 4, 5, 10];
const GASES = ['O₂','N₂','H₂','Cl₂','CO₂','CO','SO₂','NH₃','CH₄','He'];
const CARGA_ANION = {F:1,Cl:1,Br:1,I:1,S:2,Se:2,N:3,P:3,OH:1,SO4:2,SO3:2,NO3:1,NO2:1,PO4:3,CO3:2,ClO4:1,ClO3:1,ClO2:1,ClO:1,BrO3:1,IO3:1,MnO4:1,CrO4:2,Cr2O7:2,SiO3:2,HCO3:1,HSO4:1,H2PO4:1,HPO4:2};

// Disociación iónica de una sal o hidróxido del banco: CaCl₂ → Ca²⁺ + 2Cl⁻.
// Se valida que la carga del catión salga entera y que sea uno de los
// estados de oxidación reales del elemento (ELEMENTS.ox de juego.html).
function disociar(c){
  const s = aAscii(c.formula);
  const m = s.match(/^(?:\((NH4)\)(\d+)|(NH4)|([A-Z][a-z]?)(\d*))(.+)$/);
  if(!m) return null;
  const cat = m[1] || m[3] || m[4];
  const nCat = m[1] ? +m[2] : (m[3] ? 1 : (m[5] ? +m[5] : 1));
  const resto = m[6]; let an, nAn, mm;
  if((mm = resto.match(/^\(([^()]+)\)(\d+)$/))){ an = mm[1]; nAn = +mm[2]; }
  else if((mm = resto.match(/^([A-Z][a-z]?)(\d*)$/))){ an = mm[1]; nAn = mm[2] ? +mm[2] : 1; }
  else { an = resto; nAn = 1; }
  const qAn = CARGA_ANION[an]; if(!qAn) return null;
  const qCat = qAn * nAn / nCat;
  if(!Number.isInteger(qCat) || qCat < 1 || qCat > 4) return null;
  if(cat === 'NH4'){ if(qCat !== 1) return null; }
  else {
    const E = D().ELEMENTS;
    if(E){ const e = Object.values(E).find(x => x.sym === cat); if(!e || !(e.ox||[]).includes('+' + qCat)) return null; }
  }
  const ion = (sym, q, signo) => aSub(sym) + sup((q > 1 ? q : '') + signo);
  return {
    cat: {sym: ion(cat, qCat, '+'), n: nCat},
    an: {sym: ion(an, qAn, '-'), n: nAn},
    eq: esc(c.formula) + ' → ' + (nCat > 1 ? nCat : '') + ion(cat, qCat, '+') + ' + ' + (nAn > 1 ? nAn : '') + ion(an, qAn, '-')
  };
}

// Elige n tal que n·M sea exacto con 2 decimales (M ya tiene 1 decimal).
const pickN = (r, lista) => pick(lista || NV, r);
const MMtxt = f => 'M(' + esc(f) + ') = ' + fmtNum(masaMolar(f), 1) + ' g/mol';
function aceptaNum(ans){
  // Correcto si tiene la misma unidad y el mismo valor (tolerancia 2 %,
  // mayor que el redondeo de la hoja): así un distractor que "redondea
  // igual" a la respuesta nunca queda como segunda salida válida.
  return lab => lab.u === ans.u && (lab.k === ans.k || Math.abs(lab.v - ans.v) / ans.v < 0.02);
}

const GM = {};
GM.m2n = (r, o) => {
  const f = pick(o.todos, r), M = masaMolar(f), n = pickN(r), m = Math.round(n*M*100)/100;
  const ans = numL(n, 'mol');
  return {key:'m2n'+f+n, fs:[f], qh:'Calcula los moles en <b>' + fmtNum(m) + ' g</b> de', fo: formulaHTML(f), ft: o.hints ? MMtxt(f) : '',
    ans, cands: [m, m*M, M/m, 2*n, n/2, n+1, n-1, n*10].filter(valido).map(x => numL(x,'mol')),
    more: rr => numL(n*pick(FACT,rr), 'mol'), acepta: aceptaNum(ans)};
};
GM.n2m = (r, o) => {
  const f = pick(o.todos, r), M = masaMolar(f), n = pickN(r), x = Math.round(n*M*100)/100;
  const ans = numL(x, 'g');
  return {key:'n2m'+f+n, fs:[f], qh:'Calcula la masa de <b>' + fmtNum(n) + ' mol</b> de', fo: formulaHTML(f), ft: o.hints ? MMtxt(f) : '',
    ans, cands: [n/M, M/n, n+M, (n+1)*M, (n-1)*M, x/2, 2*x, x*10, M].filter(valido).map(v => numL(v,'g')),
    more: rr => numL(x*pick(FACT,rr), 'g'), acepta: aceptaNum(ans)};
};
GM.n2mol = (r, o) => {
  const f = pick(o.molec, r), n = pickN(r), x = n*NA;
  const ans = sciL(x, 'moléculas');
  return {key:'n2mol'+f+n, fs:[], qh:'¿Cuántas moléculas hay en <b>' + fmtNum(n) + ' mol</b> de', fo: formulaHTML(f), ft:'',
    ans, cands: [x*10, x/10, NA, x*2, x/2, (n+1)*NA, NA/n].filter(valido).map(v => sciL(v,'moléculas')),
    more: rr => sciL(x*pick(FACT,rr), 'moléculas'), acepta: aceptaNum(ans)};
};
GM.mol2n = (r, o) => {
  const f = pick(o.molec, r), n = pickN(r), x = n*NA, dato = sciL(x, 'moléculas');
  const ans = numL(n, 'mol');
  return {key:'mol2n'+f+n, fs:[], qh:'¿Cuántos moles hay en <b>' + dato.h + '</b> de', fo: formulaHTML(f), ft:'',
    ans, cands: [n*10, n/10, 2*n, n/2, n+1, n-1, n*6.022].filter(valido).map(v => numL(v,'mol')),
    more: rr => numL(n*pick(FACT,rr), 'mol'), acepta: aceptaNum(ans)};
};
GM.n2atom = (r, o) => {
  const f = pick(o.molec.filter(x => contarAtomos(x) > 1), r), n = pickN(r), k = contarAtomos(f), x = n*k*NA;
  const ans = autoL(x, 'átomos');
  return {key:'n2atom'+f+n, fs:[], qh:'¿Cuántos átomos hay en <b>' + fmtNum(n) + ' mol</b> de', fo: formulaHTML(f), ft: o.hints ? k + ' átomos por molécula' : '',
    ans, cands: [n*NA, k*NA, x*10, x/10, (k-1)*n*NA, (k+1)*n*NA, x*2].filter(valido).map(v => autoL(v,'átomos')),
    more: rr => autoL(x*pick(FACT,rr), 'átomos'), acepta: aceptaNum(ans)};
};
GM.ion = (r, o) => {
  const c = pick(o.ionicos, r), d = disociar(c);
  const mult = [d.cat, d.an].filter(z => z.n > 1);
  const ion = pick(r() < .8 && mult.length ? mult : [d.cat, d.an], r), otro = ion === d.cat ? d.an : d.cat;
  const n = pick([1, 2, 3, 4, 5], r), u = 'mol ' + ion.sym;
  const ans = numL(n*ion.n, u);
  return {key:'ion'+c.formula+ion.sym+n, fs:[], qh:'¿Cuántos moles de <b>' + ion.sym + '</b> hay en <b>' + n + ' mol</b> de', fo: formulaHTML(c.formula), ft: o.hints ? d.eq : '',
    ans, cands: [n, n*otro.n, n*(ion.n+otro.n), n+ion.n, n/ion.n, n*ion.n*2, ion.n].filter(valido).map(v => numL(v, u)),
    more: rr => numL(n*ion.n*pick(FACT,rr), u), acepta: aceptaNum(ans)};
};
GM.gasV = (r, o) => {
  const f = pick(GASES, r), n = pickN(r), x = Math.round(n*VM*100)/100;
  const ans = numL(x, 'L');
  return {key:'gasV'+f+n, fs:[], qh:'¿Qué volumen ocupan <b>' + fmtNum(n) + ' mol</b> de este gas en C.N.?', fo: formulaHTML(f), ft: o.hints ? '1 mol de gas = 22,4 L (C.N.)' : '',
    ans, cands: [n/VM, VM/n, n+VM, (n+1)*VM, (n-1)*VM, x/2, x*2, x*10].filter(valido).map(v => numL(v,'L')),
    more: rr => numL(x*pick(FACT,rr), 'L'), acepta: aceptaNum(ans)};
};
GM.gasN = (r, o) => {
  const f = pick(GASES, r), n = pickN(r), V = Math.round(n*VM*100)/100;
  const ans = numL(n, 'mol');
  return {key:'gasN'+f+n, fs:[], qh:'¿Cuántos moles hay en <b>' + fmtNum(V) + ' L</b> de este gas en C.N.?', fo: formulaHTML(f), ft: o.hints ? '1 mol de gas = 22,4 L (C.N.)' : '',
    ans, cands: [V*VM, VM/V, 2*n, n/2, n+1, n-1, V].filter(valido).map(v => numL(v,'mol')),
    more: rr => numL(n*pick(FACT,rr), 'mol'), acepta: aceptaNum(ans)};
};
GM.m2mol = (r, o) => {
  const f = pick(o.molec, r), M = masaMolar(f), n = pickN(r, [0.5,1,2,3,4,5]), m = Math.round(n*M*100)/100, k = contarAtomos(f), x = n*NA;
  const ans = sciL(x, 'moléculas');
  return {key:'m2mol'+f+n, fs:[f], qh:'¿Cuántas moléculas hay en <b>' + fmtNum(m) + ' g</b> de', fo: formulaHTML(f), ft: o.hints ? MMtxt(f) : '',
    ans, cands: [x*10, x/10, m*NA, (M/m)*NA, x*2, x/2, n*k*NA].filter(valido).map(v => sciL(v,'moléculas')),
    more: rr => sciL(x*pick(FACT,rr), 'moléculas'), acepta: aceptaNum(ans)};
};
GM.m2atom = (r, o) => {
  const f = pick(o.molec.filter(x => contarAtomos(x) > 1), r), M = masaMolar(f), n = pickN(r, [0.5,1,2,3,4,5]), m = Math.round(n*M*100)/100, k = contarAtomos(f), x = n*k*NA;
  const ans = sciL(x, 'átomos');
  return {key:'m2atom'+f+n, fs:[f], qh:'¿Cuántos átomos hay en <b>' + fmtNum(m) + ' g</b> de', fo: formulaHTML(f), ft: o.hints ? MMtxt(f) + '<br>' + k + ' átomos por molécula' : '',
    ans, cands: [n*NA, m*NA, x*10, x/10, n*(k+1)*NA, m*k*NA, x*2].filter(valido).map(v => sciL(v,'átomos')),
    more: rr => sciL(x*pick(FACT,rr), 'átomos'), acepta: aceptaNum(ans)};
};
const MOLG = {masa:['m2n','n2m'], molec:['n2mol','mol2n'], atomos:['n2atom'], iones:['ion'], gases:['gasV','gasN'], dos:['m2mol','m2atom']};

/* ───────────────────────── 6. Tipos de reacción y balanceo ───────────────────────── */
const TIPO_RX = {sintesis:'Síntesis', descomposicion:'Descomposición', 'sus-simple':'Sustitución simple', 'sus-doble':'Sustitución doble', combustion:'Combustión', neutralizacion:'Neutralización'};
function tiposAceptados(rx){
  // Clasificaciones que también se pueden defender para la misma ecuación:
  // una síntesis con O₂ (C + O₂ → CO₂) también "es" una combustión, y una
  // neutralización también es una doble sustitución. Ninguna de esas dos
  // puede aparecer como salida falsa.
  const s = new Set([rx.tipo_rx]);
  const reactivos = rx.ecuacion.split('→')[0];
  if(rx.tipo_rx === 'sintesis' && /O₂/.test(reactivos)) s.add('combustion');
  if(rx.tipo_rx === 'neutralizacion') s.add('sus-doble');
  return s;
}
function genRx(r, o){
  const rx = pick(o.pool, r), ok = tiposAceptados(rx);
  const tL = t => L(TIPO_RX[t], 'R:' + t);
  return {key:'rx' + rx.id, fs:[], qh:'¿Qué tipo de reacción es?', fo:'<span class="lf">' + esc(rx.ecuacion) + '</span>', foc:'eq', ft:'',
    ans: tL(rx.tipo_rx), cands: Object.keys(TIPO_RX).map(tL),
    more: rr => tL(pick(Object.keys(TIPO_RX), rr)),
    acepta: lab => lab.k.startsWith('R:') && ok.has(lab.k.slice(2))};
}

function balanceada(bal, coefs){
  const nIzq = bal.ecuacion_sin_coef.split('→')[0].split('+').length, t = {};
  bal.especies.forEach((s, i) => { const p = parseF(s); for(const k in p) t[k] = (t[k]||0) + (i < nIzq ? 1 : -1) * p[k] * coefs[i]; });
  return Object.values(t).every(v => v === 0);
}
function genBal(r, o){
  const b = pick(o.pool, r), base = b.coeficientes;
  const cL = cs => L(cs.join(' : '), 'B:' + cs.join(','), {cs});
  const cands = [];
  base.forEach((_, i) => { [1, -1].forEach(d => { const cs = base.slice(); cs[i] += d; if(cs[i] > 0) cands.push(cL(cs)); }); });
  for(let i=0;i<4;i++){ const cs = base.slice(), a = Math.floor(r()*cs.length), z = Math.floor(r()*cs.length); [cs[a], cs[z]] = [cs[z], cs[a]]; cands.push(cL(cs)); }
  cands.push(cL(base.map(x => x + 1)));
  return {key:'bal' + b.id, fs:[], qh:'Balancea (coeficientes mínimos, en orden):', fo:'<span class="lf">' + esc(b.ecuacion_sin_coef) + '</span>', foc:'eq', ft:'',
    ans: cL(base), cands,
    more: rr => { const cs = base.map(x => Math.max(1, x + Math.floor(rr()*3) - 1)); return cL(cs); },
    // Se rechaza como distractor CUALQUIER juego de coeficientes que
    // balancee, incluidos los múltiplos (4:2:4) -- solo una salida cuadra.
    acepta: lab => lab.k.startsWith('B:') && balanceada(b, lab.cs)};
}

/* ───────────────────────── 7. Construcción del laberinto ───────────────────────── */
function poolDe(cfg, necesarios){
  // Si el nivel elegido no alcanza para llenar todas las casillas con
  // ejercicios distintos, se completa con los demás niveles del mismo tema.
  const B = banco();
  const delTema = cfg.mode === 'nom' ? (c => cfg.fam.includes(c.group))
    : cfg.mode === 'rx' ? (c => c.group === 'reaccion') : (c => c.group === 'balanceo');
  const todos = B.filter(delTema);
  if(cfg.nivel === 'all') return todos;
  const nivel = B.filter(c => delTema(c) && c.level === cfg.nivel);
  const factor = cfg.mode === 'nom' ? Math.max(1, cfg.forms.length) : 1;
  return nivel.length * factor >= necesarios ? nivel : todos;
}
function opcionesMol(cfg){
  const B = banco();
  const conMasa = f => masaMolar10(f) != null;
  const todos = [...new Set(B.filter(c => c.group === 'mol-masa').map(c => c.formula))].filter(conMasa);
  const molec = [...new Set(B.filter(c => (c.group === 'mol-masa' || c.group === 'anhid' || c.group === 'ac-hid' || (c.group === 'ac-ox' && c.level !== 'hard')) && esMolecular(c.formula)).map(c => c.formula))].filter(conMasa);
  const ionicos = B.filter(c => ['sal-bin','sal-ox','base'].includes(c.group) && c.level !== 'hard' && disociar(c));
  return {hints: cfg.hints, todos, molec, ionicos};
}

function pickD(q, k, r){
  // Distractores: clave distinta entre sí y de la respuesta, y que el
  // validador de la pregunta NO acepte (si lo acepta, sería una segunda
  // salida correcta).
  const seen = new Set([q.ans.k]), out = [];
  const sirve = c => c && !seen.has(c.k) && !q.acepta(c);
  for(const c of shuffle(q.cands, r)){ if(sirve(c)){ seen.add(c.k); out.push(c); if(out.length >= k) return out; } }
  let g = 0;
  while(out.length < k && g++ < 300){ const c = q.more(r); if(sirve(c)){ seen.add(c.k); out.push(c); } }
  return out.length >= k ? out : null;
}

function intentar(cfg, seed){
  const r = makeRng(seed);
  const R = cfg.R, C = cfg.C, N = R*C, fin = N-1;
  const out = [];
  for(let u=0; u<N; u++){
    out[u] = []; if(u === fin) continue;
    const rr = Math.floor(u/C), cc = u % C;
    if(cc+1 < C) out[u].push({to:u+1, k:'h'});
    if(rr+1 < R) out[u].push({to:u+C, k:'v'});
    if(cc+1 < C && rr+1 < R) out[u].push({to:u+C+1, k:'d'});
  }
  const paths = [];
  (function dfs(u, p){ if(u === fin){ paths.push(p.slice()); return; } for(const e of out[u]){ p.push(e.to); dfs(e.to, p); p.pop(); } })(0, [0]);
  const maxE = (R-1) + (C-1);
  let cand = paths.filter(p => p.length-1 >= maxE-1); if(!cand.length) cand = paths;
  const path = pick(cand, r), onPath = new Set(path);

  let gen, grupos;
  if(cfg.mode === 'mol'){
    const o = opcionesMol(cfg);
    grupos = cfg.types.filter(t => {
      if(t === 'molec' || t === 'atomos' || t === 'dos') return o.molec.length >= 3;
      if(t === 'iones') return o.ionicos.length >= 3;
      if(t === 'masa') return o.todos.length >= 3;
      return true;
    });
    if(!grupos.length) return {error:'No hay compuestos suficientes en el banco para los ejercicios elegidos.'};
    gen = g => GM[pick(MOLG[g], r)](r, o);
  } else if(cfg.mode === 'nom'){
    const pool = poolDe(cfg, N-1);
    if(pool.length * cfg.forms.length < N-1 || pool.length < 4) return {error:'Con estas familias solo hay ' + pool.length + ' compuestos en el banco para ' + (N-1) + ' casillas: marca más familias o tipos de pregunta, o elige un tamaño menor.'};
    grupos = cfg.forms.filter(f => f !== 'oxn' || pool.some(c => estadoOx(c)));
    if(!grupos.length) grupos = ['f2n'];
    const o = {pool, sis: cfg.sis, color: cfg.color};
    gen = g => genNom(g, r, o);
  } else {
    const o = {pool: poolDe(cfg, N-1)};
    if(o.pool.length < N-1) return {error:'Solo hay ' + o.pool.length + ' ejercicios en el banco para ' + (N-1) + ' casillas: elige un tamaño menor.'};
    grupos = [cfg.mode];
    gen = () => cfg.mode === 'rx' ? genRx(r, o) : genBal(r, o);
  }
  let seq = []; while(seq.length < N-1) seq = seq.concat(shuffle(grupos, r));
  seq = shuffle(seq.slice(0, N-1), r);

  const usados = new Set(), nodes = [], fs = new Set();
  for(let u=0; u<N-1; u++){
    const es = out[u].map(e => ({to:e.to, k:e.k}));
    let okIdx = -1;
    if(onPath.has(u)){ const nx = path[path.indexOf(u)+1]; okIdx = es.findIndex(e => e.to === nx); }
    else {
      // Casilla fuera de la ruta: su salida correcta (si la tiene) nunca
      // vuelve a una casilla de la ruta -- así, quien se equivocó no puede
      // "reengancharse" respondiendo bien y llegar a FIN por otro camino.
      const cs = es.map((e,i) => ({e,i})).filter(x => !onPath.has(x.e.to));
      if(cs.length && r() < .6) okIdx = pick(cs, r).i;
    }
    const k = es.length - (okIdx >= 0 ? 1 : 0);
    let q = null, ds = null;
    for(let t=0; t<60; t++){
      const g = seq[u];
      const cq = gen(t < 30 ? g : pick(grupos, r));
      if(!cq || usados.has(cq.key) || !cq.acepta(cq.ans)) continue;
      const d = pickD(cq, k, r);
      if(!d) continue;
      q = cq; ds = d; break;
    }
    if(!q) return null;
    usados.add(q.key); (q.fs||[]).forEach(f => fs.add(f));
    let di = 0;
    es.forEach((e,i) => { if(i === okIdx){ e.lab = q.ans; e.ok = true; } else { e.lab = ds[di++]; e.ok = false; } });
    nodes.push({u, letter:String.fromCharCode(65+u), q, edges:es, onPath:onPath.has(u)});
  }
  return {R, C, N, fin, path, nodes, fs:[...fs], seed};
}

// Verificación independiente del laberinto ya armado.
function verificar(mz){
  const errores = [];
  let checks = 0;
  mz.nodes.forEach(nd => {
    const ks = new Set();
    nd.edges.forEach(e => {
      checks++;
      if(ks.has(e.lab.k)) errores.push(nd.letter + ': dos salidas con el mismo rótulo');
      ks.add(e.lab.k);
      if(!!nd.q.acepta(e.lab) !== !!e.ok) errores.push(nd.letter + ': la salida «' + e.lab.k + '» ' + (e.ok ? 'no es correcta' : 'también sería correcta'));
    });
    const nOk = nd.edges.filter(e => e.ok).length;
    if(nOk > 1) errores.push(nd.letter + ': más de una salida correcta');
    if(nd.onPath && nOk !== 1) errores.push(nd.letter + ': casilla de la ruta sin salida correcta');
  });
  const siguiente = u => { const nd = mz.nodes[u]; if(!nd) return null; const e = nd.edges.find(x => x.ok); return e ? e.to : null; };
  // Desde A, solo respuestas correctas → debe ser exactamente la ruta de la clave
  const rec = [0]; let u = 0, g = 0;
  while(u !== mz.fin && u != null && g++ < mz.N){ u = siguiente(u); if(u != null) rec.push(u); }
  if(rec.join(',') !== mz.path.join(',')) errores.push('siguiendo respuestas correctas desde A no se recorre la ruta de la clave');
  // Desde cualquier casilla fuera de la ruta, respondiendo bien, nunca se llega a FIN
  const enRuta = new Set(mz.path);
  mz.nodes.filter(nd => !nd.onPath).forEach(nd => {
    let v = nd.u, h = 0;
    while(v != null && v !== mz.fin && h++ < mz.N){ v = siguiente(v); if(v != null && enRuta.has(v)){ errores.push(nd.letter + ': su salida correcta regresa a la ruta'); break; } }
    if(v === mz.fin) errores.push(nd.letter + ': llega a FIN por fuera de la ruta');
  });
  return {ok: !errores.length, errores, checks};
}

function construir(cfg, seed){
  let ultimo = null;
  for(let i=0; i<25; i++){
    const mz = intentar(cfg, i ? seed + '~' + i : seed);
    if(mz && mz.error) return mz;
    if(!mz) continue;
    const v = verificar(mz);
    mz.verif = v;
    if(v.ok) return mz;
    ultimo = mz;
  }
  return ultimo || {error:'No se pudo armar un laberinto con ruta única con estas opciones. Prueba otro tamaño o marca más contenidos.'};
}

/* ───────────────────────── 8. Hoja (HTML) ───────────────────────── */
const DEF = {nom:'Laberinto de nomenclatura', mol:'Laberinto de moles', rx:'Laberinto de reacciones', bal:'Laberinto de balanceo'};
const SUBT = {
  nom:'Resuelve cada casilla y sigue la flecha con la respuesta correcta hasta llegar a FIN.',
  mol:'Calcula en cada casilla y sigue la flecha con tu resultado hasta llegar a FIN.',
  rx:'Clasifica cada reacción y sigue la flecha correcta hasta llegar a FIN.',
  bal:'Balancea cada ecuación y sigue la flecha con los coeficientes correctos.'
};
function claseLargo(h){
  const n = h.replace(/<[^>]+>/g,'').length;
  return n > 30 ? ' xl' : n > 18 ? ' lg' : '';
}

function hoja(mz, c, o){
  o = o || {};
  const largo = c.mode === 'nom' || c.mode === 'bal';
  const G = {NW:210, NH:160, GX: largo ? 118 : 104, GY: largo ? 82 : 70, PX:30, TOP:164, BOT:80};
  const {R, C, fin} = mz;
  const W = G.PX*2 + C*G.NW + (C-1)*G.GX, H = G.TOP + R*G.NH + (R-1)*G.GY + G.BOT;
  const P = u => ({x: G.PX + (u % C)*(G.NW + G.GX), y: G.TOP + Math.floor(u/C)*(G.NH + G.GY)});
  const M = u => { const p = P(u); return {x: p.x + G.NW/2, y: p.y + G.NH/2}; };
  const onE = new Set(); for(let i=0;i<mz.path.length-1;i++) onE.add(mz.path[i] + '-' + mz.path[i+1]);
  let lines = '', labels = '', nodes = '';
  mz.nodes.forEach(nd => {
    const a = M(nd.u);
    nd.edges.forEach(e => {
      const b = M(e.to), id = nd.u + '-' + e.to, on = onE.has(id);
      // Flecha: la línea termina antes del borde de la casilla destino
      const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy);
      const tx = e.k === 'h' ? G.NW/2 + 6 : e.k === 'v' ? G.NH/2 + 6 : Math.min((G.NW/2+6)/Math.abs(dx/len), (G.NH/2+6)/Math.abs(dy/len));
      const x2 = b.x - dx/len*tx, y2 = b.y - dy/len*tx;
      lines += '<line class="ln' + (on ? ' on' : '') + '" data-e="' + id + '" x1="' + a.x + '" y1="' + a.y + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" marker-end="url(#lab-flecha)"/>';
      labels += '<button type="button" class="el ' + e.k + (on ? ' on' : '') + (e.ok ? ' good' : '') + claseLargo(e.lab.h) + '" data-e="' + id + '" data-u="' + nd.u + '" style="left:' + ((a.x+b.x)/2) + 'px;top:' + ((a.y+b.y)/2) + 'px" tabindex="-1">' + e.lab.h + '</button>';
    });
    const p = P(nd.u), q = nd.q;
    nodes += '<div class="node' + (nd.onPath ? ' onp' : '') + '" data-n="' + nd.u + '" style="left:' + p.x + 'px;top:' + p.y + 'px;width:' + G.NW + 'px;height:' + G.NH + 'px">'
      + '<span class="badge">' + nd.letter + '</span><div class="q">' + q.qh + '</div>'
      + (q.fo ? '<div class="fo ' + (q.foc||'') + '">' + q.fo + '</div>' : '')
      + (q.ft ? '<div class="ft">' + q.ft + '</div>' : '') + '</div>';
  });
  const pf = P(fin);
  nodes += '<div class="node fin" data-n="' + fin + '" style="left:' + pf.x + 'px;top:' + pf.y + 'px;width:' + G.NW + 'px;height:' + G.NH + 'px"><div class="flag">🏁</div><div class="finw">FIN</div></div>';

  let data = '';
  if(c.mode === 'mol'){
    data = 'Datos: N<sub>A</sub> = 6,022×10<sup>23</sup> partículas/mol' + (c.types.includes('gases') ? ' · Volumen molar (C.N.) = 22,4 L/mol' : '');
    if(!c.hints && mz.fs.length){
      const els = new Set(); mz.fs.forEach(f => Object.keys(parseF(f)).forEach(k => els.add(k)));
      const m = masas();
      data += '<br>Masas atómicas (g/mol): ' + [...els].sort().map(k => k + ' = ' + fmtNum(m[k], 1)).join(' · ');
    }
  } else if(c.mode === 'nom' && c.color){
    data = '<span class="c-cat">■</span> catión &nbsp; <span class="c-an">■</span> anión &nbsp; <span class="c-oh">■</span> hidróxido &nbsp; <span class="c-ox">■</span> oxoanión';
  }
  const titulo = esc(c.title);
  const el = document.createElement('div');
  el.className = 'lab-sheet' + (o.key ? ' key' : '') + (o.play ? ' play' : '') + (c.color ? '' : ' nocolor');
  el.style.width = W + 'px'; el.style.height = H + 'px';
  el.innerHTML =
    '<img class="wm" src="assets/marca-ionom.png" alt="" aria-hidden="true">'
    + '<div class="shead">'
    +   '<img class="slogo" src="assets/logo-ionom.png" alt="IonNom">'
    +   '<div class="stit"><div class="title' + (c.title.length > 26 ? ' sm' : '') + '">' + titulo + '</div><div class="sub">' + SUBT[c.mode] + '</div></div>'
    +   '<div class="sver">' + esc(o.label || '') + '</div>'
    + '</div>'
    + '<div class="sform"><span>Nombre: <i class="w-nom"></i></span><span>Curso: <i class="w-cur"></i></span><span>Fecha: <i class="w-fec"></i></span></div>'
    + '<svg class="lines" width="' + W + '" height="' + H + '"><defs><marker id="lab-flecha" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="mk"/></marker></defs>' + lines + '</svg>'
    + nodes + labels
    + '<div class="sfoot" style="top:' + (H - G.BOT + 10) + 'px"><div class="fields">Ruta seguida: <i style="width:360px"></i></div><div class="smark">Ion<b>Nom</b> · Nombra con precisión</div></div>'
    + '<div class="sdata" style="top:' + (H - 40) + 'px">' + data + '</div>';
  return {el, W, H};
}

function tablaClave(mz){
  let h = '<table class="lab-kt"><thead><tr><th>Casilla</th><th>Ejercicio</th><th>Respuesta correcta</th><th>Sigue a</th></tr></thead><tbody>';
  mz.nodes.forEach(nd => {
    const e = nd.edges.find(x => x.ok);
    const dest = e ? (e.to === mz.fin ? 'FIN' : String.fromCharCode(65 + e.to)) : '— (trampa: no hay salida)';
    h += '<tr class="' + (nd.onPath ? 'main' : '') + '"><td>' + nd.letter + (nd.onPath ? ' ★' : '') + '</td><td>' + nd.q.qh + ' ' + (nd.q.fo || '') + '</td><td>' + nd.q.ans.h + '</td><td>' + dest + '</td></tr>';
  });
  return h + '</tbody></table>';
}
const textoRuta = mz => mz.path.map(u => u === mz.fin ? 'FIN' : mz.nodes[u].letter).join(' → ');

/* ───────────────────────── 9. Interfaz ───────────────────────── */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
let vista = 'sheet', curMz = null, curCfg = null, curSheet = null, juego = null, listo = false;

const rndSeed = () => Math.random().toString(36).slice(2, 6);
const seedOf = (c, i) => c.seed + '-' + (i+1);

function getCfg(){
  const mode = ($('input[name="lab-mode"]:checked') || {}).value || 'nom';
  const [C, R] = $('#lab-size').value.split('x').map(Number);
  const c = {mode, R, C, title: $('#lab-title').value.trim() || DEF[mode], seed: $('#lab-seed').value.trim() || 'ionom',
    nver: Math.max(1, Math.min(8, parseInt($('#lab-nver').value, 10) || 1)),
    hints: $('#lab-hints').checked, color: $('#lab-color').checked, nivel: $('#lab-nivel').value};
  if(mode === 'mol'){ c.types = $$('#lab-fs-mol input:checked').map(x => x.value); if(!c.types.length) c.types = ['masa']; }
  if(mode === 'nom'){
    c.forms = $$('#lab-fs-forma input:checked').map(x => x.value); if(!c.forms.length) c.forms = ['f2n'];
    c.fam = $$('#lab-fs-fam input:checked').map(x => x.value); if(!c.fam.length) c.fam = ['ox-bas'];
    const s = $('#lab-sys').value; c.sis = s === 'all' ? ['trad','stock','sist'] : [s];
  }
  if(mode !== 'nom') c.color = false;
  return c;
}

function contarFamilias(){
  const B = banco();
  $$('#lab-fs-fam label').forEach(l => {
    const g = l.querySelector('input').value, sm = l.querySelector('small');
    if(sm) sm.textContent = B.filter(c => c.group === g).length + ' compuestos';
  });
}

function render(){
  if(!listo) return;
  const c = getCfg(), vi = Math.min(+$('#lab-vsel').value || 0, c.nver - 1);
  const mz = construir(c, seedOf(c, vi));
  curCfg = c;
  const stage = $('#lab-stage'); stage.innerHTML = '';
  $('#lab-keybox').innerHTML = '';
  if(mz.error){
    curMz = null; curSheet = null;
    $('#lab-status').textContent = '⚠️ ' + mz.error;
    $('#lab-verif').className = 'lab-verif bad'; $('#lab-verif').textContent = '';
    return;
  }
  curMz = mz;
  juego = {cur:0, errors:0, t0:0, path:[0], done:false};
  const sh = hoja(mz, c, {key: vista === 'key', play: vista === 'play', label: 'Versión ' + (vi+1) + ' · ' + seedOf(c, vi)});
  curSheet = sh;
  const w = document.createElement('div'); w.className = 'lab-scaled'; w.appendChild(sh.el); stage.appendChild(w);
  ajustar();
  const v = $('#lab-verif');
  if(mz.verif && mz.verif.ok){ v.className = 'lab-verif ok'; v.textContent = '✔ Ruta única verificada · ' + mz.path.length + ' casillas en la ruta · ' + mz.verif.checks + ' salidas revisadas'; }
  else { v.className = 'lab-verif bad'; v.textContent = '⚠️ ' + ((mz.verif && mz.verif.errores[0]) || 'No se pudo verificar'); }
  if(vista === 'key') $('#lab-keybox').innerHTML = '<p class="lab-ruta"><b>Ruta correcta:</b> ' + textoRuta(mz) + '</p>' + tablaClave(mz);
  $('#lab-routebox').style.display = vista === 'play' ? 'none' : '';
  $('#lab-routemsg').textContent = '';
  $('#lab-fs-btn').style.display = vista === 'play' ? '' : 'none';
  if(vista === 'play') pintarJuego();
  else $('#lab-status').textContent = vista === 'key'
    ? 'Clave: la ruta correcta va en rojo; las salidas punteadas naranja son la respuesta correcta de las casillas trampa (llevan a otra trampa, nunca a FIN).'
    : 'Hoja del estudiante. Imprímela o proyéctala; con «Jugar» se resuelve en pantalla.';
}

function ajustar(){
  if(!curSheet) return;
  const stage = $('#lab-stage');
  const fs = esPantallaCompleta();
  let availW = stage.clientWidth - 4;
  if(availW <= 0) return; // pestaña oculta: se reajusta al mostrarla
  let s = Math.min(1, availW / curSheet.W);
  if(fs){
    const availH = window.innerHeight - $('#lab-play-bar').offsetHeight - 24;
    s = Math.min(availW / curSheet.W, availH / curSheet.H);
  }
  const w = curSheet.el.parentNode;
  w.style.width = curSheet.W*s + 'px'; w.style.height = curSheet.H*s + 'px';
  curSheet.el.style.transform = 'scale(' + s + ')';
}

/* ----- jugar ----- */
function pintarJuego(){
  const st = $('#lab-stage');
  st.querySelectorAll('.node').forEach(n => n.classList.remove('visited','cur'));
  juego.path.forEach(u => { const n = st.querySelector('.node[data-n="' + u + '"]'); if(n) n.classList.add('visited'); });
  const cur = st.querySelector('.node[data-n="' + juego.cur + '"]'); if(cur) cur.classList.add('cur');
  const taken = new Set(); for(let i=0;i<juego.path.length-1;i++) taken.add(juego.path[i] + '-' + juego.path[i+1]);
  st.querySelectorAll('.el').forEach(b => {
    const hot = !juego.done && +b.dataset.u === juego.cur;
    b.classList.toggle('hot', hot); b.tabIndex = hot ? 0 : -1;
    b.classList.toggle('taken', taken.has(b.dataset.e));
  });
  st.querySelectorAll('.ln').forEach(l => l.classList.toggle('trav', taken.has(l.dataset.e)));
  let msg;
  if(juego.done){
    const s = Math.round((Date.now() - juego.t0)/1000);
    msg = '🏁 ¡Llegaste a FIN! Errores: ' + juego.errors + ' · Tiempo: ' + Math.floor(s/60) + ':' + String(s%60).padStart(2,'0');
  } else msg = 'Estás en la casilla ' + curMz.nodes[juego.cur].letter + '. Resuelve y toca la salida con tu resultado. Errores: ' + juego.errors;
  $('#lab-status').textContent = msg;
  $('#lab-play-msg').textContent = msg;
}
function clicJuego(ev){
  if(vista !== 'play' || !juego || juego.done || !curMz) return;
  const b = ev.target.closest('.el'); if(!b) return;
  const u = +b.dataset.u; if(u !== juego.cur) return;
  const v = +b.dataset.e.split('-')[1];
  const e = curMz.nodes[u].edges.find(x => x.to === v);
  if(!e) return;
  if(!juego.t0) juego.t0 = Date.now();
  if(e.ok){ juego.cur = v; juego.path.push(v); if(v === curMz.fin) juego.done = true; pintarJuego(); }
  else { juego.errors++; pintarJuego(); b.classList.remove('bad'); void b.offsetWidth; b.classList.add('bad'); }
}
function reiniciarJuego(){ if(!curMz) return; juego = {cur:0, errors:0, t0:0, path:[0], done:false}; pintarJuego(); }

/* ----- pantalla completa ----- */
function esPantallaCompleta(){
  const w = $('#lab-playwrap');
  return !!w && (document.fullscreenElement === w || document.webkitFullscreenElement === w || w.classList.contains('pseudo-fs'));
}
function entrarPantallaCompleta(){
  const w = $('#lab-playwrap');
  const req = w.requestFullscreen || w.webkitRequestFullscreen;
  w.classList.add('fs-on');
  if(req){
    try{
      const p = req.call(w);
      if(p && p.catch) p.catch(() => { w.classList.add('pseudo-fs'); document.body.style.overflow = 'hidden'; ajustar(); });
    }catch(e){ w.classList.add('pseudo-fs'); document.body.style.overflow = 'hidden'; }
  } else { w.classList.add('pseudo-fs'); document.body.style.overflow = 'hidden'; } // iPhone: sin API de pantalla completa
  setTimeout(ajustar, 60);
}
function salirPantallaCompleta(){
  const w = $('#lab-playwrap');
  if(document.fullscreenElement || document.webkitFullscreenElement){ (document.exitFullscreen || document.webkitExitFullscreen).call(document); }
  w.classList.remove('pseudo-fs', 'fs-on'); document.body.style.overflow = '';
  setTimeout(ajustar, 60);
}
function cambioPantallaCompleta(){
  const w = $('#lab-playwrap');
  if(!(document.fullscreenElement || document.webkitFullscreenElement) && !w.classList.contains('pseudo-fs')) w.classList.remove('fs-on');
  setTimeout(ajustar, 60);
}

/* ----- verificar ruta del estudiante ----- */
function comprobarRuta(){
  if(!curMz) return;
  const t = ($('#lab-routein').value.toUpperCase().replace(/FIN/g, ' ').match(/[A-Z]/g)) || [];
  const clave = curMz.path.filter(u => u !== curMz.fin).map(u => curMz.nodes[u].letter);
  const m = $('#lab-routemsg');
  if(!t.length){ m.textContent = 'Escribe la ruta, p. ej. ' + clave.slice(0, 3).join(' ') + '…'; m.style.color = 'var(--dimmer)'; return; }
  if(t.join('') === clave.join('')){ m.textContent = '✔ Ruta correcta'; m.style.color = 'var(--ok)'; return; }
  let i = 0; while(i < t.length && i < clave.length && t[i] === clave[i]) i++;
  m.textContent = i >= clave.length ? '✖ Sobran casillas después del paso ' + clave.length
    : '✖ La ruta no coincide (primer desvío en el paso ' + (i+1) + ')';
  m.style.color = 'var(--err)';
}

/* ----- imprimir ----- */
function esperarImagenes(root){
  return Promise.all([...root.querySelectorAll('img')].map(img => img.complete ? Promise.resolve() :
    new Promise(res => { img.addEventListener('load', res, {once:true}); img.addEventListener('error', res, {once:true}); })));
}
function envolver(sh, s){
  const w = document.createElement('div'); w.className = 'lab-scaled';
  w.style.width = sh.W*s + 'px'; w.style.height = sh.H*s + 'px';
  sh.el.style.transform = 'scale(' + s + ')'; w.appendChild(sh.el); return w;
}
// Área imprimible de una carta horizontal con márgenes de 0,3 in:
// 10,4 × 7,9 in = 998 × 758 px (a 96 px/in). Se deja un pequeño respiro
// para que ningún navegador empuje la hoja a una segunda página.
const PAG_W = 990, PAG_H = 740;
function prepararImpresion(){
  if(!listo) return false;
  const c = getCfg(), root = $('#lab-print-root'); root.innerHTML = '';
  const mzs = [];
  for(let i=0; i<c.nver; i++){
    const mz = construir(c, seedOf(c, i));
    if(mz.error){ $('#lab-status').textContent = '⚠️ ' + mz.error; root.innerHTML = ''; return false; }
    mzs.push(mz);
    const sh = hoja(mz, c, {label: 'Versión ' + (i+1) + ' de ' + c.nver + ' · ' + seedOf(c, i)});
    // escala para que quepa TODO el laberinto (se agranda si sobra espacio)
    const s = Math.min(1.25, PAG_W/sh.W, PAG_H/sh.H);
    const pp = document.createElement('div'); pp.className = 'lab-pp'; pp.appendChild(envolver(sh, s)); root.appendChild(pp);
  }
  if($('#lab-withkeys').checked){
    mzs.forEach((mz, i) => {
      const sh = hoja(mz, c, {key:true, label: 'Versión ' + (i+1) + ' · ' + seedOf(c, i)});
      const s = Math.min(560/sh.W, (PAG_H - 40)/sh.H);
      const pp = document.createElement('div'); pp.className = 'lab-pp keypage';
      pp.innerHTML = '<div class="kh"><img src="assets/logo-ionom.png" alt="IonNom"><span><b>CLAVE — Versión ' + (i+1) + '</b> · semilla ' + esc(seedOf(c, i)) + ' · Ruta: <b>' + textoRuta(mz) + '</b></span></div><div class="kb"></div>';
      const kb = pp.querySelector('.kb'); kb.appendChild(envolver(sh, s));
      const tw = document.createElement('div'); tw.className = 'kt-wrap'; tw.innerHTML = tablaClave(mz); kb.appendChild(tw);
      root.appendChild(pp);
    });
  }
  // docente.html imprime sus guías en carta VERTICAL (@page global). Las
  // hojas del laberinto usan además la página con nombre «lab» (ver
  // docente.html: @page lab{size:letter landscape}) y, como respaldo para
  // navegadores sin páginas con nombre, un @page horizontal agregado al
  // final del <head> solo mientras dura esta impresión (el último gana).
  let pg = document.getElementById('lab-page-style');
  if(!pg){ pg = document.createElement('style'); pg.id = 'lab-page-style'; document.head.appendChild(pg); }
  pg.textContent = '@page{size:letter landscape;margin:.3in}';
  document.body.classList.add('lab-printing');
  return true;
}
function imprimir(){
  if(!prepararImpresion()) return;
  esperarImagenes($('#lab-print-root')).then(() => setTimeout(() => window.print(), 120));
}
// Ctrl+P / menú del navegador estando en la pestaña Laberintos: se arma la
// misma impresión (horizontal, todas las versiones) en vez de imprimir la
// página con los controles.
function antesDeImprimir(){
  if(document.body.classList.contains('lab-printing')) return;
  const tab = document.getElementById('tab-laberintos');
  if(tab && tab.classList.contains('active')) prepararImpresion();
}
function finImpresion(){
  if(!document.body.classList.contains('lab-printing')) return;
  document.body.classList.remove('lab-printing');
  $('#lab-print-root').innerHTML = '';
  const pg = document.getElementById('lab-page-style'); if(pg) pg.remove();
}

/* ----- controles ----- */
function llenarVersiones(){
  const n = Math.max(1, Math.min(8, parseInt($('#lab-nver').value, 10) || 1)), sel = $('#lab-vsel'), keep = +sel.value || 0;
  sel.innerHTML = ''; for(let i=0;i<n;i++) sel.insertAdjacentHTML('beforeend', '<option value="' + i + '">Versión ' + (i+1) + '</option>');
  sel.value = String(Math.min(keep, n-1));
}
function cambiarModo(){
  const m = getCfg().mode;
  $('#lab-app').dataset.mode = m;
  const t = $('#lab-title');
  if(!t.value || Object.values(DEF).includes(t.value)) t.value = DEF[m];
}

function init(){
  if(!$('#lab-app')) return;
  $('#lab-seed').value = rndSeed();
  llenarVersiones(); cambiarModo(); contarFamilias();
  $$('input[name="lab-mode"]').forEach(x => x.addEventListener('change', () => { cambiarModo(); render(); }));
  ['#lab-size','#lab-sys','#lab-hints','#lab-color','#lab-vsel','#lab-nivel'].forEach(s => $(s).addEventListener('change', render));
  let tmr = null;
  ['#lab-title','#lab-seed'].forEach(s => $(s).addEventListener('input', () => { clearTimeout(tmr); tmr = setTimeout(render, 250); }));
  $$('#lab-fs-mol input, #lab-fs-forma input, #lab-fs-fam input').forEach(x => x.addEventListener('change', render));
  $('#lab-nver').addEventListener('change', () => { llenarVersiones(); render(); });
  $('#lab-btn-seed').addEventListener('click', () => { $('#lab-seed').value = rndSeed(); render(); });
  $$('#lab-seg button').forEach(b => b.addEventListener('click', () => {
    vista = b.dataset.view; $$('#lab-seg button').forEach(x => x.classList.toggle('on', x === b));
    if(vista !== 'play' && esPantallaCompleta()) salirPantallaCompleta();
    render();
  }));
  $('#lab-btn-print').addEventListener('click', imprimir);
  $('#lab-stage').addEventListener('click', clicJuego);
  $('#lab-routebtn').addEventListener('click', comprobarRuta);
  $('#lab-routein').addEventListener('keydown', e => { if(e.key === 'Enter') comprobarRuta(); });
  $('#lab-fs-btn').addEventListener('click', entrarPantallaCompleta);
  $('#lab-fs-exit').addEventListener('click', salirPantallaCompleta);
  $('#lab-restart').addEventListener('click', reiniciarJuego);
  document.addEventListener('fullscreenchange', cambioPantallaCompleta);
  document.addEventListener('webkitfullscreenchange', cambioPantallaCompleta);
  document.addEventListener('keydown', e => { if(e.key === 'Escape' && $('#lab-playwrap').classList.contains('pseudo-fs')) salirPantallaCompleta(); });
  window.addEventListener('resize', ajustar);
  window.addEventListener('beforeprint', antesDeImprimir);
  window.addEventListener('afterprint', finImpresion);
  if(window.matchMedia){ const mq = window.matchMedia('print'); const f = e => { if(!e.matches) finImpresion(); }; mq.addEventListener ? mq.addEventListener('change', f) : mq.addListener && mq.addListener(f); }

  // Esperar a que docente-app.js termine de leer juego.html (ELEMENTS,
  // getOxidationStates). banco.js ya está disponible desde el inicio.
  const B = D();
  const yaListo = B.estado && B.estado.juego !== 'cargando' && B.estado.generador !== 'cargando';
  const arrancar = () => { if(listo) return; listo = true; _masas = null; contarFamilias(); render(); };
  if(yaListo) arrancar();
  else {
    document.addEventListener('docente-bancos-listos', arrancar, {once:true});
    setTimeout(arrancar, 12000); // si juego.html nunca responde, se sigue con el respaldo
  }
}

window.LABERINTO = {render, ajustar, construir, verificar, getCfg, _interno: {intentar, disociar, estadoOx, masaMolar, genNom, balanceada}};
document.addEventListener('DOMContentLoaded', init);
})();
