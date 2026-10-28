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
  const p = sciPartes(x), ms = p.m.toFixed(2).replace('.', ','); // siempre 3 cifras: 1,20×10²⁴
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
const ANFOTEROS = new Set(['MnO2','SnO2','PbO2','TiO2','Cr2O3','Al2O3','ZnO','BeO','MnO3','CrO3','V2O5','V2O4','Sb2O3']);
// Funciones con las que se suele confundir cada una (distractores cercanos)
const CONFUNDE = {
  'ox-bas':['anhid','base','hidru'], anhid:['ox-bas','ac-ox','sal-ox'], hidru:['ox-bas','sal-bin','ac-hid'],
  'ac-hid':['ac-ox','sal-bin','hidru'], base:['ox-bas','sal-ox','sal-ac'], 'ac-ox':['ac-hid','sal-ox','anhid'],
  'sal-bin':['ac-hid','sal-ox','hidru'], 'sal-ox':['sal-bin','ac-ox','sal-ac'], 'sal-ac':['sal-ox','ac-ox','base','sal-bin','ac-hid']
};

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
const PREFIJO = /(^|\s)(mono|di|tri|tetra|penta|hexa|hepta)/;
const claveElems = f => Object.keys(parseF(f)).sort().join(',');
// Nombre de un compuesto en el sistema pedido, SOLO si de verdad pertenece
// a ese sistema (auditoría química):
// - banco.js copia el nombre tradicional en `sist` para oxácidos y
//   oxisales («sulfato cúprico» como «Sistemática»): no se usa;
// - un sistemático sin prefijos es ambiguo si hay otro compuesto con los
//   mismos elementos («cloruro de cobre»: ¿CuCl o CuCl₂?): no se usa.
function nombreSis(c, s){
  const n = nombresDe(c, s)[0]; if(!n) return null;
  if(s === 'sist'){
    if(['ac-ox','sal-ox','sal-ac'].includes(c.group) && nombresDe(c, 'trad').some(t => normNombre(t) === normNombre(n))) return null;
    if(!PREFIJO.test(n) && (indice().porElems[claveElems(c.formula)] || new Set()).size > 1) return null;
  }
  return n;
}
const SINONIMOS = {'H4SiO4': ['ácido silícico']};
let _idx = null;
function indice(){
  // Índices sobre TODO el banco de nomenclatura: nombres válidos por
  // fórmula (todas las entradas, todos los sistemas) y fórmulas por nombre
  // -- el validador acepta cualquier nombre real del compuesto, no solo
  // el que se pidió, así ningún distractor puede ser "también correcto".
  if(_idx && _idx.n === banco().length) return _idx;
  const porF = {}, porNombre = {}, gruposF = {}, porElems = {}, porFormulaEntradas = {};
  banco().filter(c => GRUPOS_NOM.includes(c.group)).forEach(c => {
    const f = aAscii(c.formula);
    (gruposF[f] = gruposF[f] || new Set()).add(c.group);
    (porElems[claveElems(f)] = porElems[claveElems(f)] || new Set()).add(f);
    (porFormulaEntradas[f] = porFormulaEntradas[f] || []).push(c);
    const set = porF[f] = porF[f] || new Set();
    ['trad','stock','sist'].forEach(s => nombresDe(c, s).forEach(n => {
      set.add(normNombre(n));
      (porNombre[normNombre(n)] = porNombre[normNombre(n)] || new Set()).add(f);
    }));
  });
  // Variantes equivalentes de un mismo nombre (el banco escribe «mono-» unas
  // veces sí y otras no, y alterna «pentóxido»/«pentaóxido»): todas se
  // aceptan, así ninguna puede aparecer como salida falsa.
  const variantes = n => {
    const v = new Set([n]);
    if(/^monóxido/.test(n)) v.add(n.replace(/^monóxido/, 'óxido'));
    else if(/^mono(?=[a-záéíóú])/.test(n)) v.add(n.replace(/^mono/, ''));
    [['pentóxido','pentaóxido'],['heptóxido','heptaóxido'],['tetróxido','tetraóxido']].forEach(([x, y]) => { if(n.includes(x)) v.add(n.replace(x, y)); if(n.includes(y)) v.add(n.replace(y, x)); });
    return v;
  };
  Object.keys(porF).forEach(f => [...porF[f]].forEach(n => variantes(n).forEach(x => { porF[f].add(x); (porNombre[x] = porNombre[x] || new Set()).add(f); })));
  // Nombres que en los textos se usan para OTRA fórmula del banco y que,
  // por eso, se aceptan para ambas: la IUPAC llama «ácido silícico» a H₄SiO₄,
  // y banco.js se lo da a H₂SiO₃.
  Object.entries(SINONIMOS).forEach(([f, ns]) => ns.forEach(n => { (porF[f] = porF[f] || new Set()).add(n); (porNombre[n] = porNombre[n] || new Set()).add(f); }));
  // H₂S «sulfuro de hidrógeno» = «sulfuro de dihidrógeno» (sistemático
  // estricto): ambos son correctos y ninguno puede ser salida falsa
  Object.keys(porF).forEach(f => {
    const el = parseF(f);
    if(el.H !== 2 || el.O || Object.keys(el).length !== 2) return;
    [...porF[f]].forEach(n => {
      const alt = / de hidrógeno$/.test(n) ? n.replace(/ de hidrógeno$/, ' de dihidrógeno') : / de dihidrógeno$/.test(n) ? n.replace(/ de dihidrógeno$/, ' de hidrógeno') : null;
      if(alt){ porF[f].add(alt); (porNombre[alt] = porNombre[alt] || new Set()).add(f); }
    });
  });
  _idx = {n: banco().length, porF, porNombre, gruposF, porElems, porFormulaEntradas};
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

const ROM = ['I','II','III','IV','V','VI','VII'];
const PREF = ['mono','di','tri','tetra','penta','hexa','hepta'];
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
    // Sistema: uno de los pedidos en el que el compuesto tenga un nombre
    // real; si no tiene ninguno, se descarta el compuesto (antes se pasaba
    // en silencio a otro sistema que el docente no había elegido).
    const disp = o.sis.filter(s => nombreSis(c, s));
    if(!disp.length) return null;
    const s = pick(disp, r);
    const nombre = cap(nombreSis(c, s));
    const validos = idx.porF[f] || new Set();
    // Distractores por niveles (pickD toma del primero y baja solo si faltan):
    //   1) el MISMO compuesto con un error típico (otra valencia, anión vecino,
    //      prefijo o romano cambiado) y, en ácidos, los otros ácidos del mismo
    //      elemento central;
    //   2) el mismo metal / elemento central con otro anión u otra función
    //      (en ácidos: el anhídrido del mismo elemento, y viceversa);
    //   3) el mismo anión con otro metal;
    //   4) el resto del grupo.
    const ce = elemClave(f, g);
    const mismos = banco().filter(x => x.group === g && aAscii(x.formula) !== f);
    const mismoEl = mismos.filter(x => elemClave(x.formula, g) === ce);
    const acidosCe = GR_ACIDOS.includes(g) || g === 'anhid'
      ? banco().filter(x => GR_ACIDOS.includes(x.group) && aAscii(x.formula) !== f && centralAcido(aAscii(x.formula)) === ce) : [];
    const anhCe = GR_ACIDOS.includes(g)
      ? banco().filter(x => x.group === 'anhid' && centralAcido(aAscii(x.formula)) === ce) : [];
    const vecinas = variantesFormula(c);
    // mismo metal en otra función básica: NaOH ↔ Na₂O ↔ NaH ↔ Na₂O₂ (metales
    // de valencia fija tienen pocas variantes propias)
    const FUNC_BAS = ['ox-bas','base','hidru'];
    const otraFuncion = FUNC_BAS.includes(g) ? banco().filter(x => FUNC_BAS.includes(x.group) && x.group !== g && Object.keys(parseF(x.formula))[0] === Object.keys(parseF(f))[0]) : [];
    if(forma === 'f2n'){
      const nomL = n => L(esc(cap(n)), 'T:' + normNombre(n));
      const nomDe = x => { const n = nombreSis(x, s); return n ? nomL(n) : null; };
      const n1 = variantesNombre(nombre, f).map(nomL);
      vecinas.forEach(fv => (indice().porFormulaEntradas[fv] || []).forEach(x => { const l = nomDe(x); if(l) n1.push(l); }));
      if(GR_ACIDOS.includes(g)) acidosCe.forEach(x => { const l = nomDe(x); if(l) n1.push(l); });
      const n2 = mismoEl.concat(g === 'anhid' ? acidosCe : anhCe, otraFuncion).map(nomDe).filter(Boolean);
      // nivel 3: mismo anión con otro metal, salvo que la «raíz» sea una
      // palabra genérica (ácido, anhídrido, óxido…: metía cualquier elemento)
      const raiz = normNombre(nombre).split(' ')[0];
      const generica = /^(ácido|anhídrido|óxido|hidruro|hidróxido|peróxido|mono|di|tri|tetra|penta|hexa|hepta)/.test(raiz);
      const n3 = generica ? [] : shuffle(mismos, r).filter(x => { const n = nombreSis(x, s); return n && normNombre(n).split(' ')[0] === raiz; }).slice(0, 4).map(nomDe);
      const cands = shuffle(mismos, r).slice(0, 8).map(nomDe).filter(Boolean);
      return {
        key: 'f2n' + f + s, qh: 'Nombra en el sistema <b>' + SIS_NOMBRE[s] + '</b>:', fo, foc: '',
        ans: nomL(nombre), cands, niveles: [n1, n2, n3],
        more: rr => { const x = pick(banco().filter(y => GRUPOS_NOM.includes(y.group)), rr); return nomDe(x); },
        acepta: lab => lab.k.startsWith('T:') && validos.has(lab.k.slice(2)),
        fs: []
      };
    }
    // n2f: el nombre mostrado puede corresponder a más de una fórmula del
    // banco (duplicados entre grupos) -- todas se aceptan, ninguna sirve de distractor.
    const fs = idx.porNombre[normNombre(nombre)] || new Set([f]);
    const fL = x => L(o.color ? formulaHTML(x, g) : formulaHTML(x), 'F:' + aAscii(x));
    // misma función: los mismos elementos en otra proporción (FeCl₂/FeCl₃),
    // sin cruzar funciones (NH₄OH no es distractor de HNO₃)
    const compatible = x => (idx.gruposF[x] ? [...idx.gruposF[x]] : []).some(gg => gg === g || (GR_ACIDOS.includes(gg) && GR_ACIDOS.includes(g)) || (gg.startsWith('sal') && g.startsWith('sal')));
    const n1 = vecinas.map(fL);
    [...(idx.porElems[claveElems(f)] || [])].filter(x => x !== f && compatible(x)).forEach(x => n1.push(fL(x)));
    if(GR_ACIDOS.includes(g)) acidosCe.forEach(x => n1.push(fL(x.formula)));
    const n2 = mismoEl.concat(g === 'anhid' ? acidosCe : anhCe, otraFuncion).map(x => fL(x.formula));
    const cands = shuffle(mismos, r).slice(0, 6).map(x => fL(x.formula));
    return {
      key: 'n2f' + f + s, qh: 'Escribe la fórmula (' + SIS_NOMBRE[s] + '):', fo: esc(nombre), foc: 'nm',
      ans: fL(c.formula), cands, niveles: [n1, n2],
      more: rr => mismos.length ? fL(pick(mismos, rr).formula) : null,
      acepta: lab => lab.k.startsWith('F:') && fs.has(lab.k.slice(2)),
      fs: []
    };
  }
  if(forma === 'cls'){
    const gs = new Set(idx.gruposF[f] || [g]);
    // una sal ácida con oxígeno (NaHCO₃) también es una sal oxigenada
    if(gs.has('sal-ac') && /O/.test(f)) gs.add('sal-ox');
    // óxidos de metales con carácter anfótero o ácido que en los textos
    // colombianos también se nombran como anhídridos (MnO₂ «anhídrido
    // manganoso», SnO₂, PbO₂…): «Óxido ácido» no puede ser salida falsa
    if(ANFOTEROS.has(f)){ gs.add('anhid'); gs.add('ox-bas'); }
    const gL = x => L(GRUPO_NOMBRE[x], 'G:' + x);
    return {
      key: 'cls' + f, qh: '¿A qué función química pertenece?', fo, foc: '',
      ans: gL(g), cands: GRUPOS_NOM.map(gL), cercanos: (CONFUNDE[g] || []).map(gL),
      more: rr => gL(pick(GRUPOS_NOM, rr)),
      acepta: lab => lab.k.startsWith('G:') && gs.has(lab.k.slice(2)),
      fs: []
    };
  }
  // oxn
  const st = estadoOx(c);
  const xL = v => L(oxTxt(v), 'X:' + v);
  const cands = [];
  const esMetal = !NO_METALES.has(st.el);
  for(let v=-3; v<=7; v++) if(v !== 0 && v !== st.ox && (!esMetal || v > 0 || v === -2)) cands.push(xL(v));
  return {
    key: 'oxn' + f, qh: '¿Cuál es el estado de oxidación del <b>' + st.el + '</b> en', fo, foc: '',
    ans: xL(st.ox), cands: shuffle(cands, r).sort((a,b) => Math.abs(+a.k.slice(2) - st.ox) - Math.abs(+b.k.slice(2) - st.ox)).slice(0, 6),
    more: rr => { const v = 1 + Math.floor(rr()*7); return xL(!esMetal && rr() < .2 ? -v : v); },
    acepta: lab => lab.k === 'X:' + st.ox,
    fs: []
  };
}

/* ───────────────────────── 5. Mol y masa molar ───────────────────────── */
const NA = 6.022e23, VM = 22.4;
const NV = [0.5, 1, 1.5, 2, 2.5, 3, 4, 5];
const FACT = [0.1, 0.25, 0.5, 1.5, 2, 3, 4, 5, 10];
const GASES = ['O₂','N₂','H₂','Cl₂','CO₂','CO','SO₂','NH₃','CH₄','He'];
const CARGA_ANION = {F:1,Cl:1,Br:1,I:1,S:2,Se:2,N:3,P:3,OH:1,SO4:2,SO3:2,NO3:1,NO2:1,PO4:3,CO3:2,ClO4:1,ClO3:1,ClO2:1,ClO:1,BrO3:1,IO3:1,MnO4:1,CrO4:2,Cr2O7:2,SiO3:2,HCO3:1,HSO4:1,H2PO4:1,HPO4:2,HS:1,HSO3:1,S2O3:2};

// Compuestos que el banco clasifica como sal o hidróxido pero que en
// bachillerato no se tratan como iónicos que se disocian.
const NO_IONICOS = new Set(['BeCl2','BeBr2','BeI2','BeF2','AlCl3','AlBr3','AlI3','Fe2S3','CuOH','AuOH','HgOH']);
// Sólidos de red o especies inestables: no se cuentan «moléculas» de ellos.
const NO_MOLECULARES = new Set(['SiO2','B2O3','SeO2','TeO2','GeO2','H2SiO3','H4SiO4','SO','P2O5','P2O3']);
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
  // Sin cationes +4 (SnCl₄, PbCl₄, Sn(OH)₄: covalentes, no se disocian) ni
  // Hg(I) (el catión real es el dímero Hg₂²⁺, no Hg⁺).
  if(!Number.isInteger(qCat) || qCat < 1 || qCat > 3) return null;
  if(cat === 'Hg' && qCat === 1) return null;
  if(NO_IONICOS.has(s)) return null;
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

/* ── Distractores cercanos (auditoría docente) ──
   Una salida falsa solo sirve si el estudiante PUEDE equivocarse con ella:
   para «Nitrato manganoso», RbNO₃ y Sr(NO₃)₂ se descartan sin pensar
   (otro metal). Estas funciones arman variantes con el MISMO elemento y el
   mismo tipo de anión, siguiendo errores típicos: otra valencia, cruce de
   cargas sin simplificar o sin cruzar, subíndice cambiado y anión vecino
   de la misma familia (nitrato/nitrito, sulfato/sulfito, clorato/perclorato). */
const mcd = (a, b) => b ? mcd(b, a % b) : a;
const poliatomico = x => (x.match(/[A-Z]/g) || []).length > 1;
const CARGA_VAR = Object.assign({O:2, H:1}, CARGA_ANION);
function partesIonicas(f){
  const s = aAscii(f);
  const m = s.match(/^(?:\((NH4)\)(\d+)|(NH4)|([A-Z][a-z]?)(\d*))(.+)$/);
  if(!m) return null;
  const cat = m[1] || m[3] || m[4];
  const nCat = m[1] ? +m[2] : (m[3] ? 1 : (m[5] ? +m[5] : 1));
  const resto = m[6]; let an, nAn, mm;
  if((mm = resto.match(/^\(([^()]+)\)(\d+)$/))){ an = mm[1]; nAn = +mm[2]; }
  else if((mm = resto.match(/^([A-Z][a-z]?)(\d*)$/))){ an = mm[1]; nAn = mm[2] ? +mm[2] : 1; }
  else { an = resto; nAn = 1; }
  const qAn = CARGA_VAR[an]; if(!qAn) return null;
  const qCat = qAn * nAn / nCat;
  if(!Number.isInteger(qCat) || qCat < 1 || qCat > 7) return null;
  return {cat, nCat, an, nAn, qCat, qAn};
}
function armarFormula(cat, nc, an, na){
  const c = nc > 1 ? (cat === 'NH4' ? '(NH4)' + nc : cat + nc) : cat;
  const a = na > 1 ? (poliatomico(an) ? '(' + an + ')' + na : an + na) : an;
  return c + a;
}
const FAM_ANION = [['NO3','NO2'],['SO4','SO3','HSO4'],['ClO4','ClO3','ClO2','ClO'],['CO3','HCO3'],['PO4','HPO4','H2PO4'],['S','SO3','SO4'],['Cl','ClO','ClO3'],['BrO3','Br'],['IO3','I'],['CrO4','Cr2O7']];
// Estados de oxidación que se enseñan en bachillerato para los elementos
// cuyo listado en ELEMENTS (juego.html) es el exhaustivo (Cl +2/+4/+6, Mn +1…):
// sirven para descartar fórmulas imposibles en los distractores.
const OX_ESCOLAR = {Cl:[-1,1,3,5,7], Br:[-1,1,3,5,7], I:[-1,1,3,5,7], F:[-1], S:[-2,2,4,6], Se:[-2,2,4,6], Te:[-2,2,4,6],
  N:[-3,1,2,3,4,5], P:[-3,3,5], As:[-3,3,5], Sb:[3,5], C:[-4,2,4], Si:[4], B:[3], Cr:[2,3,6], Mn:[2,3,4,6,7], V:[2,3,4,5]};
function oxDe(sym){
  if(OX_ESCOLAR[sym]) return OX_ESCOLAR[sym];
  const E = D().ELEMENTS; if(!E) return null;
  const e = Object.values(E).find(x => x.sym === sym);
  return e ? (e.ox || []).map(Number).filter(v => v !== 0) : null;
}
const okOx = (sym, q) => { const l = oxDe(sym); return !l || l.includes(q); };
const GR_IONICOS = ['ox-bas','hidru','base','sal-bin','sal-ox','sal-ac'];
const GR_ACIDOS = ['ac-ox','ac-hid'];
// Elemento central de un ácido o anhídrido (el único distinto de H y O), o null
const centralAcido = f => { const e = Object.keys(parseF(f)).filter(x => x !== 'H' && x !== 'O'); return e.length === 1 ? e[0] : null; };
// ¿Fórmula químicamente posible? (auditoría de distractores: Na₃SO₄, CsOH₂,
// (NH₃)₂HPO₄, CO₃ o H₃S salían como opciones). Iónicos: catión con carga
// entera y real, anión conocido. Ácidos/anhídridos: estado del elemento
// central entero y de los que se enseñan.
function formulaPosible(x, g){
  if(!/^[A-Z(]/.test(x) || masaMolar10(x) == null) return false;
  if(GR_IONICOS.includes(g)){
    const p = partesIonicas(x); if(!p) return false;
    return p.cat === 'NH4' ? p.qCat === 1 : (p.qCat <= 4 && okOx(p.cat, p.qCat));
  }
  const el = parseF(x), ce = centralAcido(x);
  if(!ce) return false;
  const q = (2*(el.O || 0) - (el.H || 0)) / el[ce];
  return Number.isInteger(q) && q !== 0 && okOx(ce, q);
}
function variantesFormula(c){
  const s = aAscii(c.formula), g = c.group, out = new Set();
  if(GR_IONICOS.includes(g)){
    const p = partesIonicas(s);
    if(p){
      const arm = (q, an, qa) => { const k = mcd(q, qa); return armarFormula(p.cat, qa/k, an, q/k); };
      // otra valencia real del metal (las más cercanas primero)
      if(p.cat !== 'NH4') (oxDe(p.cat) || []).filter(q => q > 0 && q <= 4 && q !== p.qCat)
        .sort((a, b) => Math.abs(a - p.qCat) - Math.abs(b - p.qCat)).slice(0, 3).forEach(q => out.add(arm(q, p.an, p.qAn)));
      // cruce de cargas sin simplificar (Sn₂O₄ en vez de SnO₂)
      if(mcd(p.qCat, p.qAn) > 1) out.add(armarFormula(p.cat, p.qAn, p.an, p.qCat));
      // anión vecino de la misma familia, con las cargas bien cruzadas
      FAM_ANION.forEach(fam => { if(fam.includes(p.an)) fam.filter(x => x !== p.an && CARGA_ANION[x]).forEach(x => out.add(arm(p.qCat, x, CARGA_ANION[x]))); });
      // subíndice del catión o del anión ±1 (nunca DENTRO del oxoanión ni del NH₄)
      [[p.nCat + 1, p.nAn], [p.nCat - 1, p.nAn], [p.nCat, p.nAn + 1], [p.nCat, p.nAn - 1]]
        .filter(([a, b]) => a >= 1 && b >= 1).forEach(([a, b]) => out.add(armarFormula(p.cat, a, p.an, b)));
    }
  } else {
    if(GR_ACIDOS.includes(g)){
      const m = s.match(/^H(\d*)(.+)$/);
      if(m) FAM_ANION.forEach(fam => { if(fam.includes(m[2])) fam.filter(x => x !== m[2] && CARGA_ANION[x] && !/^H/.test(x)).forEach(x => out.add('H' + (CARGA_ANION[x] > 1 ? CARGA_ANION[x] : '') + x)); });
    }
    // subíndices ±1 (se validan abajo)
    for(const m of s.matchAll(/([A-Za-z)])(\d+)/g)){
      const v = +m[2], i0 = m.index + 1;
      [v - 1, v + 1].forEach(nv => { if(nv >= 1) out.add(s.slice(0, i0) + (nv > 1 ? nv : '') + s.slice(i0 + m[2].length)); });
    }
    // elemento sin subíndice → 2
    for(const m of s.matchAll(/[A-Z][a-z]?(?![a-z\d])/g)){ const i0 = m.index + m[0].length; out.add(s.slice(0, i0) + '2' + s.slice(i0)); }
  }
  out.delete(s);
  return [...out].filter(x => formulaPosible(x, g));
}
// Elemento que define «el mismo compuesto, otra variante»: en ácidos y
// anhídridos, el elemento central (los ácidos empiezan todos por H); en
// el resto, el primero (el metal)
const elemClave = (f, g) => (GR_ACIDOS.includes(g) || g === 'anhid') ? centralAcido(f) : Object.keys(parseF(f))[0];
const OXW = ['monóxido','dióxido','trióxido','tetraóxido','pentaóxido','hexaóxido','heptaóxido'];
// Cada lista: [nombre del compuesto, distractores cercanos…] (el primero es la clave).
// Solo nombres que EXISTEN (de otro compuesto del mismo elemento): la
// auditoría objetó «fluorato», «ácido percarbónico», «ácido tungstoso»…
const FAM_NOMBRE = [['nitrato','nitrito'],['nitrito','nitrato'],['sulfato','sulfito','bisulfato'],['sulfito','sulfato','sulfuro'],['perclorato','clorato','clorito','hipoclorito'],['clorato','perclorato','clorito','hipoclorito'],['clorito','clorato','hipoclorito','perclorato'],['hipoclorito','clorito','clorato','cloruro'],['carbonato','bicarbonato'],['bicarbonato','carbonato'],['fosfato','fosfito'],['cloruro','clorato','clorito','hipoclorito'],['sulfuro','sulfito','sulfato'],['bromuro','bromato','hipobromito'],['yoduro','yodato','hipoyodito'],['fluoruro','bifluoruro'],['seleniuro','selenito','selenato'],['telururo','telurito','telurato'],['cianuro','cianato'],['azida','nitruro','nitrito'],['cromato','dicromato'],['dicromato','cromato'],['permanganato','manganato'],['manganato','permanganato'],
  // confusiones clásicas entre funciones con el mismo metal
  ['hidruro','hidróxido','óxido'],['hidróxido','óxido','hidruro','peróxido'],['óxido','peróxido','hidróxido','hidruro'],['peróxido','óxido','hidróxido'],
  // ácidos: hídrico ↔ oxácidos del mismo no metal
  ['ácido clorhídrico','ácido clórico','ácido cloroso','ácido hipocloroso'],['ácido perclórico','ácido clórico','ácido cloroso','ácido hipocloroso'],
  ['ácido clórico','ácido perclórico','ácido cloroso','ácido hipocloroso'],['ácido cloroso','ácido clórico','ácido hipocloroso','ácido perclórico'],['ácido hipocloroso','ácido cloroso','ácido clórico','ácido clorhídrico'],
  ['ácido sulfhídrico','ácido sulfúrico','ácido sulfuroso'],['ácido sulfúrico','ácido sulfuroso','ácido sulfhídrico'],['ácido sulfuroso','ácido sulfúrico','ácido sulfhídrico'],
  ['ácido bromhídrico','ácido brómico','ácido bromoso'],['ácido yodhídrico','ácido yódico','ácido yodoso'],
  ['ácido nítrico','ácido nitroso'],['ácido nitroso','ácido nítrico'],['ácido fosfórico','ácido fosforoso'],['ácido fosforoso','ácido fosfórico'],
  ['ácido cianhídrico','ácido ciánico'],['ácido silícico','ácido ortosilícico'],['ácido ortosilícico','ácido metasilícico'],
  ['ácido crómico','ácido dicrómico'],['ácido dicrómico','ácido crómico'],['ácido permangánico','ácido mangánico'],['ácido mangánico','ácido permangánico'],
  ['ácido arsénico','ácido arsenioso'],['ácido arsenioso','ácido arsénico'],['ácido antimónico','ácido antimonioso'],['ácido antimonioso','ácido antimónico'],
  ['ácido selénico','ácido selenioso','ácido selenhídrico'],['ácido selenioso','ácido selénico','ácido selenhídrico'],
  ['ácido telúrico','ácido teluroso','ácido telurhídrico'],['ácido teluroso','ácido telúrico','ácido telurhídrico']];
// pares -oso/-ico del nombre tradicional del metal (bien escritos)
const ADJ_METAL = [['ferroso','férrico'],['cuproso','cúprico'],['plumboso','plúmbico'],['estannoso','estánnico'],['cobaltoso','cobáltico'],['niqueloso','niquélico'],['mercurioso','mercúrico'],['auroso','áurico'],['cromoso','crómico'],['manganoso','mangánico'],['platinoso','platínico'],['vanadioso','vanádico']];
// prefijo multiplicador solo delante de estas palabras (no «di»cromato ni «di»hidrogenofosfato)
const RE_MULT = /^(tetra|penta|hexa|hepta|mono|tri|di)(cloruro|fluoruro|bromuro|yoduro|sulfuro|hidruro|hidróxido|seleniuro|telururo|nitruro)/;
function variantesUnPaso(n, metal){
  const out = new Set();
  let m = n.match(/\((VII|VI|IV|V|III|II|I)\)/);
  // solo números de oxidación que el metal SÍ tiene (no «óxido de hierro (VI)»)
  const reales = metal ? (oxDe(metal) || []).filter(v => v > 0 && v <= 7) : null;
  if(m){ const i = ROM.indexOf(m[1]); [i-1, i+1, i+2, i-2].filter(j => j >= 0 && j < ROM.length && (!reales || reales.includes(j + 1))).forEach(j => out.add(n.replace(m[0], '(' + ROM[j] + ')'))); }
  // -ico ↔ -oso, solo si el nombre resultante existe en el banco (sin faltas)
  if(/(ico|oso)(\s|$)/.test(n)){
    const alt = n.replace(/(ico|oso)(\s|$)/, (x, s1, t) => (s1 === 'ico' ? 'oso' : 'ico') + t);
    const sinTilde = x => x.normalize('NFD').replace(/[̀-ͯ]/g, '');
    const real = Object.keys(indice().porNombre).find(k => sinTilde(k) === sinTilde(normNombre(alt)));
    if(real) out.add(real);
  }
  const w = OXW.find(x => n.startsWith(x));
  if(w){ const i = OXW.indexOf(w); [i-1, i+1, i+2].filter(j => j >= 0 && j < OXW.length).forEach(j => out.add(n.replace(w, OXW[j]))); }
  const mp = n.match(RE_MULT);
  if(mp){ const i = PREF.indexOf(mp[1]); [i-1, i+1, i+2].filter(j => j >= 0 && j < PREF.length).forEach(j => out.add(PREF[j] + n.slice(mp[1].length))); }
  // prefijo del segundo elemento: solo hacia arriba (quitar el «di» daba
  // «pentaóxido de fósforo», que es el nombre común correcto de P₂O₅)
  const md = n.match(/ de (tetra|penta|hexa|mono|tri|di)(?=[a-záéíóú])/);
  if(md){ const i = PREF.indexOf(md[1]); [i+1, i+2].filter(j => j < PREF.length).forEach(j => out.add(n.replace(' de ' + md[1], ' de ' + PREF[j]))); }
  FAM_NOMBRE.forEach(fam => { const a = fam[0]; if(n === a || n.startsWith(a + ' ')) fam.slice(1).forEach(b => out.add(b + n.slice(a.length))); });
  ADJ_METAL.forEach(([o, i]) => { const re = w => new RegExp('(^|\\s)' + w + '(?=\\s|$)'); if(re(o).test(n)) out.add(n.replace(re(o), '$1' + i)); else if(re(i).test(n)) out.add(n.replace(re(i), '$1' + o)); });
  out.delete(n);
  return out;
}
function variantesNombre(nombre, formula){
  // números romanos en mayúscula (el resto en minúscula)
  const n = nombre.toLowerCase().replace(/\((vii|vi|iv|v|iii|ii|i)\)/, x => x.toUpperCase());
  const metal = formula ? Object.keys(parseF(formula))[0] : null;
  const uno = variantesUnPaso(n, metal), dos = new Set();
  // combinaciones de dos cambios (anión vecino + otra valencia: «nitrito
  // mangánico» para «nitrato manganoso») para no quedarse sin opciones
  uno.forEach(v => variantesUnPaso(v, metal).forEach(x => { if(x !== n && !uno.has(x)) dos.add(x); }));
  return [...uno, ...dos].map(cap);
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
  return {key:'rx' + rx.ecuacion, fs:[], qh:'¿Qué tipo de reacción es?', fo: fmtEq(rx.ecuacion), foc:'eq', ft:'',
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
  return {key:'bal' + b.ecuacion_sin_coef, fs:[], qh:'Balancea (coeficientes mínimos, en orden):', fo: fmtEq(b.ecuacion_sin_coef), foc:'eq', ft:'',
    ans: cL(base), cands,
    more: rr => { const cs = base.map(x => Math.max(1, x + Math.floor(rr()*3) - 1)); return cL(cs); },
    // Se rechaza como distractor CUALQUIER juego de coeficientes que
    // balancee, incluidos los múltiplos (4:2:4) -- solo una salida cuadra.
    acepta: lab => lab.k.startsWith('B:') && balanceada(b, lab.cs)};
}

/* ───────────────────────── 6b. Teoría atómica y configuración ───────────────────────── */
// Región «El átomo» (atomo.html / configuracion.html). Los datos de los
// elementos 1–36 (más Ag, I y U para isótopos) van aquí mismo: son pocos y
// así el laberinto no depende de que juego.html haya terminado de cargar.
const EL_AT = {1:['H','hidrógeno'],2:['He','helio'],3:['Li','litio'],4:['Be','berilio'],5:['B','boro'],6:['C','carbono'],7:['N','nitrógeno'],8:['O','oxígeno'],9:['F','flúor'],10:['Ne','neón'],
  11:['Na','sodio'],12:['Mg','magnesio'],13:['Al','aluminio'],14:['Si','silicio'],15:['P','fósforo'],16:['S','azufre'],17:['Cl','cloro'],18:['Ar','argón'],19:['K','potasio'],20:['Ca','calcio'],
  21:['Sc','escandio'],22:['Ti','titanio'],23:['V','vanadio'],24:['Cr','cromo'],25:['Mn','manganeso'],26:['Fe','hierro'],27:['Co','cobalto'],28:['Ni','níquel'],29:['Cu','cobre'],30:['Zn','zinc'],
  31:['Ga','galio'],32:['Ge','germanio'],33:['As','arsénico'],34:['Se','selenio'],35:['Br','bromo'],36:['Kr','kriptón'],47:['Ag','plata'],53:['I','yodo'],92:['U','uranio']};
// Isótopos e iones reales [Z, A, carga] (los mismos del Generador Docente).
const ESP_AT = [[1,1,0],[1,2,0],[1,3,0],[2,4,0],[3,7,1],[4,9,2],[5,11,0],[6,12,0],[6,13,0],[6,14,0],[7,14,-3],[7,15,0],[8,16,-2],[8,18,0],[9,19,-1],[10,20,0],
  [11,23,1],[12,24,2],[12,26,0],[13,27,3],[14,28,0],[15,31,-3],[16,32,-2],[17,35,-1],[17,37,-1],[18,40,0],[19,39,1],[20,40,2],[26,56,2],[26,56,3],[29,63,2],[30,64,2],
  [35,79,-1],[47,107,1],[53,127,-1],[92,235,0],[92,238,0]];
const ORD_AT = ['1s','2s','2p','3s','3p','4s','3d','4p'];
const CAP_AT = {s:2, p:6, d:10};
// Z = 1–36 que siguen la regla de Moeller (sin Cr ni Cu: una sola respuesta).
const Z_CFG = Object.keys(EL_AT).map(Number).filter(z => z >= 3 && z <= 36 && z !== 24 && z !== 29);
function madAt(z){ const o = []; let e = z; for(const s of ORD_AT){ if(!e) break; const k = Math.min(e, CAP_AT[s[1]]); o.push([s, k]); e -= k; } return o; }
function cfgAbrAt(z, coreForzado){
  const core = coreForzado != null ? coreForzado : [36,18,10,2].find(g => g < z) || 0;
  const nCore = core ? madAt(core).length : 0;
  return (core ? '[' + EL_AT[core][0] + '] ' : '') + madAt(z).slice(nCore).map(([s, k]) => s + sup(k)).join(' ');
}
const finAt = z => { const m = madAt(z), u = m[m.length-1]; return u[0] + sup(u[1]); };
const bloqueAt = z => z === 2 ? 's' : madAt(z)[madAt(z).length-1][0][1];
const periodoAt = z => Math.max(...madAt(z).map(([s]) => +s[0]));
function grupoAt(z){
  if(z === 2) return 18;
  const m = Object.fromEntries(madAt(z)), p = periodoAt(z), b = bloqueAt(z);
  if(b === 's') return m[p + 's'];
  if(b === 'p') return 10 + m[p + 's'] + m[p + 'p'];
  return (m[(p-1) + 'd']||0) + (m[p + 's']||0);
}
const valenciaAt = z => madAt(z).filter(([s]) => +s[0] === periodoAt(z)).reduce((a, [, k]) => a + k, 0);
function notacionAt(z, a, q){
  const carga = q === 0 ? '' : sup((Math.abs(q) > 1 ? Math.abs(q) : '') + (q > 0 ? '+' : '-'));
  return '<span class="nuc"><span>' + a + '</span><span>' + z + '</span></span>' + EL_AT[z][0] + carga;
}
// Preguntas de teoría con respuestas cortas (caben en un rótulo de flecha).
const TEO_AT = [
  ['¿Quién descubrió el electrón', '', 'Thomson', ['Rutherford','Bohr','Dalton']],
  ['¿Quién propuso el núcleo atómico', '', 'Rutherford', ['Thomson','Bohr','Chadwick']],
  ['¿Quién propuso los niveles de energía', '', 'Bohr', ['Rutherford','Dalton','Thomson']],
  ['¿Quién descubrió el neutrón', '', 'Chadwick', ['Rutherford','Millikan','Thomson']],
  ['¿Quién midió la carga del electrón', '', 'Millikan', ['Thomson','Bohr','Chadwick']],
  ['¿De quién es el modelo del «budín de pasas»', '', 'Thomson', ['Dalton','Rutherford','Bohr']],
  ['¿De quién es el modelo de la «bola de billar»', '', 'Dalton', ['Demócrito','Thomson','Bohr']],
  ['¿Quién enunció el principio de incertidumbre', '', 'Heisenberg', ['Schrödinger','Bohr','Pauli']],
  ['¿Qué se disparó contra la lámina de oro', '', 'Partículas alfa', ['Electrones','Neutrones','Rayos X']],
  ['Casi todas las α atravesaron el oro. El átomo es…', '', 'Casi todo vacío', ['Macizo','Negativo','Indivisible']],
  ['¿Cuál es la carga del electrón', '', 'Negativa', ['Positiva','Neutra','Variable']],
  ['¿Qué partícula del núcleo no tiene carga', '', 'Neutrón', ['Protón','Electrón','Fotón']],
  ['El número atómico Z cuenta los…', '', 'Protones', ['Neutrones','Nucleones','e⁻ de valencia']],
  ['El número de masa A es…', '', 'p⁺ + n⁰', ['Solo p⁺','Solo n⁰','p⁺ + e⁻']],
  ['Los isótopos tienen igual número de…', '', 'Protones', ['Neutrones','Nucleones','Masa']],
  ['Un catión se forma al…', '', 'Perder e⁻', ['Ganar e⁻','Ganar p⁺','Perder n⁰']],
  ['Al bajar de nivel, el electrón…', '', 'Emite un fotón', ['Absorbe un fotón','Cae al núcleo','Gana masa']],
  ['¿Qué es la región de probabilidad del electrón', '', 'Orbital', ['Órbita','Núcleo','Espín']],
  ['¿Cuántos e⁻ caben como máximo en un orbital', '', '2', ['1','6','8']],
  ['¿Cuántos e⁻ caben como máximo en un subnivel p', '', '6', ['2','10','14']],
  ['¿Cuántos e⁻ caben como máximo en un subnivel d', '', '10', ['6','14','18']],
  ['¿Qué subnivel se llena justo después del 3p', '', '4s', ['3d','4p','3f']],
  ['Un e⁻ en cada orbital antes de aparearse: regla de…', '', 'Hund', ['Pauli','Aufbau','Moeller']],
  ['Máximo 2 e⁻ por orbital con espines opuestos: principio de…', '', 'Pauli', ['Hund','Aufbau','Bohr']],
  ['Llenar primero lo de menor energía: principio de…', '', 'Aufbau', ['Hund','Pauli','Heisenberg']]
];

const GA = {};
GA.part = (r) => {
  const [z, a, q] = pick(ESP_AT, r), cual = pick(['p','n','e'], r);
  const val = {p:z, n:a-z, e:z-q}[cual], uni = {p:'protones', n:'neutrones', e:'electrones'}[cual];
  const pL = x => L(x + ' ' + uni, 'P:' + x);
  return {key:'part' + z + a + q + cual, fs:[], qh:'¿Cuántos <b>' + uni + '</b> tiene', fo: notacionAt(z, a, q), ft:'',
    ans: pL(val), cands: [z, a, a-z, z-q, z+q, a+z, a-z+q, val+1, val-1].filter(x => x > 0).map(pL),
    more: rr => pL(Math.max(1, val + pick([-3,-2,-1,1,2,3], rr))), acepta: lab => lab.k === 'P:' + val};
};
GA.ident = (r) => {
  const [z, a, q] = pick(ESP_AT, r), n = a - z, e = z - q;
  const sL = (zz, aa, qq) => EL_AT[zz] && aa >= zz ? L(notacionAt(zz, aa, qq), 'S:' + zz + '|' + aa + '|' + qq) : null;
  const cands = [sL(z, a, -q), sL(z, a, 0), sL(z, z + e, q), sL(z, a + 1, q), sL(z, a - 1, q), sL(e, e + n, 0), sL(z + 1, a, q), sL(z - 1, a, q), sL(z, a, q + 1), sL(z, a, q - 1)].filter(Boolean);
  return {key:'ident' + z + a + q, fs:[], qh:'¿Qué especie tiene', fo: z + ' p⁺ · ' + n + ' n⁰ · ' + e + ' e⁻', foc:'eq', ft:'',
    ans: sL(z, a, q), cands, more: rr => sL(z, a + pick([-2,2,3], rr), q) || sL(z, a, q === 0 ? 1 : 0),
    acepta: lab => lab.k === 'S:' + z + '|' + a + '|' + q};
};
GA.cfg = (r) => {
  const z = pick(Z_CFG, r), cL = t => L(t, 'C:' + t);
  const otros = [z-1, z+1, z-2, z+2].filter(x => Z_CFG.includes(x) || (x >= 3 && x <= 36 && x !== 24 && x !== 29));
  const nobles = [2,10,18,36].filter(g => g < z);
  const coreMal = nobles.length > 1 ? cL(cfgAbrAt(z, nobles[nobles.length-2]).replace(/^\[[A-Za-z]+\]/, '[' + EL_AT[nobles[nobles.length-1]][0] + ']')) : null;
  return {key:'cfg' + z, fs:[], qh:'Configuración abreviada del', fo: EL_AT[z][1] + ' (Z = ' + z + ')', foc:'nm', ft:'',
    ans: cL(cfgAbrAt(z)), cands: otros.map(x => cL(cfgAbrAt(x))).concat(coreMal ? [coreMal] : []),
    more: rr => cL(cfgAbrAt(pick(Z_CFG, rr))), acepta: lab => lab.k === 'C:' + cfgAbrAt(z)};
};
GA.cfg2el = (r) => {
  const z = pick(Z_CFG, r), eL = x => L(cap(EL_AT[x][1]), 'E:' + x);
  return {key:'cfg2el' + z, fs:[], qh:'¿Qué elemento tiene esta configuración', fo: cfgAbrAt(z), foc:'eq', ft:'',
    ans: eL(z), cands: [z-1, z+1, z-2, z+2, z-8, z+8].filter(x => EL_AT[x] && x >= 1 && x <= 36).map(eL),
    more: rr => eL(pick(Z_CFG, rr)), acepta: lab => lab.k === 'E:' + z};
};
GA.pg = (r) => {
  const z = pick(Z_CFG.filter(x => bloqueAt(x) !== 'd'), r), p = periodoAt(z), g = grupoAt(z);
  const pgL = (pp, gg) => pp >= 1 && gg >= 1 && gg <= 18 ? L('Periodo ' + pp + ' · grupo ' + gg, 'PG:' + pp + '|' + gg) : null;
  return {key:'pg' + z, fs:[], qh:'Un átomo neutro termina su configuración en', fo: finAt(z), ft:'¿En qué periodo y grupo está?',
    ans: pgL(p, g), cands: [pgL(p+1, g), pgL(p-1, g), pgL(p, g+1), pgL(p, g-1), pgL(p, g-10), pgL(g > 10 ? g-10 : g, p)].filter(Boolean),
    more: rr => pgL(Math.max(1, p + pick([-1,1,2], rr)), g), acepta: lab => lab.k === 'PG:' + p + '|' + g};
};
GA.val = (r) => {
  const z = pick(Z_CFG.filter(x => bloqueAt(x) !== 'd'), r), v = valenciaAt(z);
  const vL = x => L(x + ' e⁻ de valencia', 'V:' + x);
  return {key:'val' + z, fs:[], qh:'¿Cuántos electrones de valencia tiene', fo: cfgAbrAt(z), foc:'eq', ft:'',
    ans: vL(v), cands: [1,2,3,4,5,6,7,8].filter(x => x !== v).map(vL),
    more: rr => vL(pick([1,2,3,4,5,6,7,8], rr)), acepta: lab => lab.k === 'V:' + v};
};
GA.teo = (r) => {
  const t = pick(TEO_AT, r), tL = x => L(x, 'T:' + x);
  return {key:'teo' + t[0], fs:[], qh: t[0] + (t[0].startsWith('¿') ? '?' : ''), fo: '', ft:'',
    ans: tL(t[2]), cands: t[3].map(tL), more: rr => tL(pick(t[3], rr)), acepta: lab => lab.k === 'T:' + t[2]};
};
const ATG = {part:['part','ident'], cfg:['cfg','cfg2el'], tabla:['pg','val'], teo:['teo']};

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
  const molec = [...new Set(B.filter(c => (c.group === 'mol-masa' || c.group === 'anhid' || c.group === 'ac-hid' || (c.group === 'ac-ox' && c.level !== 'hard')) && esMolecular(c.formula) && !NO_MOLECULARES.has(aAscii(c.formula))).map(c => c.formula))].filter(conMasa);
  const ionicos = B.filter(c => ['sal-bin','sal-ox','base'].includes(c.group) && c.level !== 'hard' && disociar(c));
  return {hints: cfg.hints, todos, molec, ionicos};
}

function pickD(q, k, r){
  // Distractores: clave distinta entre sí y de la respuesta, y que el
  // validador de la pregunta NO acepte (si lo acepta, sería una segunda
  // salida correcta).
  const seen = new Set([q.ans.k]), out = [];
  const sirve = c => c && !seen.has(c.k) && !q.acepta(c);
  // Primero los distractores «cercanos» a la pregunta (mismo elemento,
  // mismo anión, número de oxidación o subíndice cambiado, función con la
  // que se suele confundir); solo si faltan, el resto. Vale también para
  // las casillas trampa: todas sus salidas siguen siendo plausibles.
  // niveles: 1) mismo elemento/metal, 2) mismo anión con otro metal, 3) resto
  const niveles = q.niveles || [q.cercanos || [], q.cercanos2 || []];
  for(const c of [].concat(...niveles.map(nv => shuffle(nv.filter(Boolean), r)), shuffle(q.cands, r))){ if(sirve(c)){ seen.add(c.k); out.push(c); if(out.length >= k) return out; } }
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
  } else if(cfg.mode === 'atomo'){
    grupos = cfg.types.slice();
    if(!grupos.length) return {error:'Marca al menos un tipo de pregunta.'};
    gen = g => GA[pick(ATG[g], r)](r);
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
const DEF = {nom:'Laberinto de nomenclatura', mol:'Laberinto de moles', rx:'Laberinto de reacciones', bal:'Laberinto de balanceo', atomo:'Laberinto del átomo'};
const SUBT = {
  nom:'Resuelve cada casilla y sigue la flecha con la respuesta correcta hasta llegar a FIN.',
  mol:'Calcula en cada casilla y sigue la flecha con tu resultado hasta llegar a FIN.',
  rx:'Clasifica cada reacción y sigue la flecha correcta hasta llegar a FIN.',
  bal:'Balancea cada ecuación y sigue la flecha con los coeficientes correctos.',
  atomo:'Responde cada casilla y sigue la flecha con la respuesta correcta hasta llegar a FIN.'
};
function claseLargo(h){
  const n = h.replace(/<[^>]+>/g,'').length;
  return n > 30 ? ' xl' : n > 18 ? ' lg' : '';
}

let _nHoja = 0;
// Punta de flecha de tamaño fijo (userSpaceOnUse): con markerUnits por
// defecto crecía con el grosor de la línea y salía gigante en Jugar/Clave.
// Una por color, para que la punta tome el color de la ruta.
const marcador = (id, color) => '<marker id="' + id + '" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="userSpaceOnUse" markerWidth="15" markerHeight="15" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="' + color + '"/></marker>';
// Ecuación con cada sustancia sin partir: solo se salta de línea entre
// sustancias (antes quedaba «Fe +» / «CO» en renglones distintos).
const fmtEq = eq => '<span class="lf">' + esc(eq).split(' → ').map(lado => lado.split(' + ').map(m => '<span class="nw">' + m + '</span>').join(' + ')).join(' → ') + '</span>';
function hoja(mz, c, o){
  o = o || {};
  // id de la punta de flecha único por hoja: con varias hojas en el mismo
  // documento (pantalla + impresión), url(#id) apuntaba a la de la hoja
  // oculta y las flechas impresas salían sin punta.
  const mk = 'lab-flecha-' + (++_nHoja);
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
  // Pie en dos franjas que no se cruzan: «Ruta seguida» + marca/licencia
  // arriba y, debajo, los datos (N_A, masas atómicas) o la leyenda de colores.
  // Clave: leyenda de colores. La ruta correcta va en VERDE (antes en rojo,
  // que en una hoja de examen se lee como «incorrecto»).
  if(o.key) data = '<span class="sley"><b>Clave</b> · <span class="sv">━ verde</span>: ruta correcta · <span class="sn">┅ punteado naranja</span>: respuesta correcta de una casilla trampa (no lleva a FIN)</span>' + (data ? '<br>' + data : '');
  const lineasData = !data ? 0 : (data.indexOf('<br>') >= 0 ? 2 : 1);
  const largo = c.mode === 'nom' || c.mode === 'bal' || c.mode === 'atomo';
  // GX amplio: el rótulo de una flecha horizontal no debe tapar su punta
  // (auditoría UX); el ancho extra no reduce la escala al imprimir, que la
  // limita el alto de la hoja.
  const G = {NW:210, NH:160, GX: largo ? 150 : 132, GY: largo ? 76 : 70, PX:30, TOP:160, BOT: 62 + lineasData*20};
  const maxW = {h: G.GX - 38, v: G.NW - 14, d: G.GX - 36};
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
      const tx = e.k === 'h' ? G.NW/2 + 4 : e.k === 'v' ? G.NH/2 + 4 : Math.min((G.NW/2+4)/Math.abs(dx/len), (G.NH/2+4)/Math.abs(dy/len));
      const x2 = b.x - dx/len*tx, y2 = b.y - dy/len*tx;
      // El rótulo va en el 42 % del tramo libre contando desde la casilla de
      // ORIGEN (no en la mitad): así se lee como salida de esa casilla y no
      // como opción de la casilla a la que llega la flecha.
      const x1 = a.x + dx/len*tx, y1 = a.y + dy/len*tx;
      const lx = x1 + (x2 - x1)*0.42, ly = y1 + (y2 - y1)*0.42;
      lines += '<line class="ln' + (on ? ' on' : '') + '" data-e="' + id + '" data-mk="' + mk + '" x1="' + a.x + '" y1="' + a.y + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" marker-end="url(#' + mk + (on && o.key ? '-r' : '') + ')"/>';
      labels += '<button type="button" class="el ' + e.k + (on ? ' on' : '') + (e.ok ? ' good' : '') + claseLargo(e.lab.h) + '" data-e="' + id + '" data-u="' + nd.u + '" style="left:' + lx.toFixed(1) + 'px;top:' + ly.toFixed(1) + 'px;max-width:' + maxW[e.k] + 'px" tabindex="-1">' + e.lab.h + '</button>';
    });
    const p = P(nd.u), q = nd.q, cierra = q.qh.includes('¿') && !q.qh.includes('?') ? '<span class="qm">?</span>' : '';
    nodes += '<div class="node' + (nd.onPath ? ' onp' : '') + '" data-n="' + nd.u + '" style="left:' + p.x + 'px;top:' + p.y + 'px;width:' + G.NW + 'px;height:' + G.NH + 'px">'
      + '<span class="badge">' + nd.letter + '</span><div class="q">' + q.qh + '</div>'
      + (q.fo ? '<div class="fo ' + (q.foc||'') + '">' + q.fo + cierra + '</div>' : '')
      + (q.ft ? '<div class="ft">' + q.ft + '</div>' : '') + '</div>';
  });
  const pf = P(fin);
  nodes += '<div class="node fin" data-n="' + fin + '" style="left:' + pf.x + 'px;top:' + pf.y + 'px;width:' + G.NW + 'px;height:' + G.NH + 'px"><div class="flag">🏁</div><div class="finw">FIN</div></div>';

  const titulo = esc(c.title);
  const el = document.createElement('div');
  el.className = 'lab-sheet' + (o.key ? ' key' : '') + (o.play ? ' play' : '') + (c.color ? '' : ' nocolor');
  el.style.width = W + 'px'; el.style.height = H + 'px';
  el.innerHTML =
    '<img class="wm" src="assets/marca-ionom.png" alt="" aria-hidden="true">'
    + '<div class="shead' + (W < 1150 ? ' angosta' : '') + '">'
    +   '<img class="slogo" src="assets/logo-ionom-hoja.png" alt="IonNom">'
    // tamaño del título según el ancho REAL de la hoja (en 3×3 se cortaba)
    +   '<div class="stit"><div class="title' + (W < 1150 || c.title.length > 26 ? ' sm' : '') + (W < 1150 && c.title.length > 26 ? ' xs' : '') + '">' + titulo + '</div><div class="sub">' + SUBT[c.mode] + '</div></div>'
    +   '<div class="sver">' + esc(o.label || '') + '</div>'
    + '</div>'
    + '<div class="sform"><span>Nombre: <i class="w-nom"></i></span><span>Curso: <i class="w-cur"></i></span><span>Fecha: <i class="w-fec"></i></span></div>'
    + '<svg class="lines" width="' + W + '" height="' + H + '"><defs>' + marcador(mk, '#5b7389') + marcador(mk + '-r', '#15803d') + marcador(mk + '-g', '#16a34a') + '</defs>' + lines + '</svg>'
    + nodes + labels
    + '<div class="sfoot" style="top:' + (H - G.BOT + 8) + 'px"><div class="fields">Ruta seguida: <i></i></div><div class="smark">Ion<b>Nom</b> · Nombra con precisión<span class="slic">© 2026 Harvey Bárcenas Morales · Licencia CC BY-NC 4.0</span></div></div>'
    + (data ? '<div class="sdata" style="top:' + (H - G.BOT + 52) + 'px">' + data + '</div>' : '');
  return {el, W, H};
}

function tablaClave(mz){
  let h = '<table class="lab-kt"><thead><tr><th>Casilla</th><th>Ejercicio</th><th>Respuesta correcta</th><th>Sigue a</th></tr></thead><tbody>';
  mz.nodes.forEach(nd => {
    const e = nd.edges.find(x => x.ok);
    const dest = e ? (e.to === mz.fin ? 'FIN' : String.fromCharCode(65 + e.to)) : '— (trampa: no hay salida)';
    h += '<tr class="' + (nd.onPath ? 'main' : '') + '"><td>' + nd.letter + (nd.onPath ? ' ★' : '') + '</td><td>' + nd.q.qh + ' ' + (nd.q.fo || '') + (nd.q.qh.includes('¿') && !nd.q.qh.includes('?') ? '?' : '') + '</td><td>' + nd.q.ans.h + '</td><td>' + dest + '</td></tr>';
  });
  return h + '</tbody></table>';
}
const textoRuta = mz => mz.path.map(u => u === mz.fin ? 'FIN' : mz.nodes[u].letter).join(' → ');

/* ───────────────────────── 9. Interfaz ───────────────────────── */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
let vista = 'sheet', curMz = null, curCfg = null, curSheet = null, juego = null, listo = false;

// Hasta 40 versiones: una por estudiante en un curso completo (antes el
// tope era 8 y pedir 23 dejaba 8 sin avisar).
const MAX_VERSIONES = 40;
const rndSeed = () => Math.random().toString(36).slice(2, 6);
const seedOf = (c, i) => c.seed + '-' + (i+1);

function getCfg(){
  const mode = ($('input[name="lab-mode"]:checked') || {}).value || 'nom';
  const [C, R] = $('#lab-size').value.split('x').map(Number);
  const c = {mode, R, C, title: $('#lab-title').value.trim() || DEF[mode], seed: $('#lab-seed').value.trim().replace(/-\d+$/, '') || 'ionom',
    nver: Math.max(1, Math.min(MAX_VERSIONES, parseInt($('#lab-nver').value, 10) || 1)),
    hints: $('#lab-hints').checked, color: $('#lab-color').checked, nivel: $('#lab-nivel').value};
  if(mode === 'mol'){ c.types = $$('#lab-fs-mol input:checked').map(x => x.value); if(!c.types.length) c.vacio = 'Marca al menos un tipo de ejercicio.'; }
  if(mode === 'atomo'){ c.types = $$('#lab-fs-atomo input:checked').map(x => x.value); if(!c.types.length) c.vacio = 'Marca al menos un tipo de pregunta.'; }
  if(mode === 'nom'){
    c.forms = $$('#lab-fs-forma input:checked').map(x => x.value);
    c.fam = $$('#lab-fs-fam input:checked').map(x => x.value);
    if(!c.forms.length) c.vacio = 'Marca al menos un tipo de pregunta.';
    if(!c.fam.length) c.vacio = 'Marca al menos una familia de compuestos.';
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
  const mz = c.vacio ? {error: c.vacio} : construir(c, seedOf(c, vi));
  curCfg = c;
  const stage = $('#lab-stage'); stage.innerHTML = '';
  $('#lab-keybox').innerHTML = '';
  if(mz.error){
    curMz = null; curSheet = null;
    $('#lab-status').textContent = '⚠️ ' + mz.error;
    $('#lab-verif').className = 'lab-verif bad'; $('#lab-verif').textContent = '';
    $('#lab-card').hidden = true;
    return;
  }
  curMz = mz;
  juego = {cur:0, errors:0, t0:0, path:[0], done:false};
  const sh = hoja(mz, c, {key: vista === 'key', play: vista === 'play', label: vista === 'key' ? 'Clave · código ' + c.seed + ' · versión ' + (vi+1) : 'Versión ' + (vi+1) + ' de ' + c.nver});
  curSheet = sh;
  const w = document.createElement('div'); w.className = 'lab-scaled'; w.appendChild(sh.el); stage.appendChild(w);
  ajustar();
  const v = $('#lab-verif');
  if(mz.verif && mz.verif.ok){ v.className = 'lab-verif ok'; v.textContent = '✔ Ruta única verificada · ' + mz.path.length + ' casillas en la ruta · ' + mz.verif.checks + ' salidas revisadas'; }
  else { v.className = 'lab-verif bad'; v.textContent = '⚠️ ' + ((mz.verif && mz.verif.errores[0]) || 'No se pudo verificar'); }
  if(vista === 'key') $('#lab-keybox').innerHTML = '<p class="lab-ruta"><b>Ruta correcta:</b> ' + textoRuta(mz) + ' &nbsp;·&nbsp; <span style="color:var(--dimmer)">código para volver a generar estas hojas: <b>' + esc(c.seed) + '</b></span></p>' + tablaClave(mz);
  $('#lab-routebox').style.display = vista === 'play' ? 'none' : '';
  $('#lab-routemsg').textContent = '';
  $('#lab-fs-btn').style.display = vista === 'play' ? '' : 'none';
  $('#lab-restart2').style.display = vista === 'play' ? '' : 'none';
  if(vista === 'play') pintarJuego();
  else $('#lab-status').textContent = vista === 'key'
    ? 'Clave: la ruta correcta va en verde; las salidas punteadas naranja son la respuesta correcta de las casillas trampa (llevan a otra trampa, nunca a FIN).'
    : 'Hoja del estudiante. Imprímela o proyéctala; con «Jugar» se resuelve en pantalla.';
}

// Celular o tableta pequeña (pantalla táctil de menos de 820 px en su lado corto)
const esMovil = () => !!(window.matchMedia && matchMedia('(pointer: coarse)').matches) && Math.min(screen.width, screen.height) < 820;
function ajustar(){
  if(!curSheet) return;
  const stage = $('#lab-stage'), wrap = $('#lab-playwrap'), card = $('#lab-card');
  const fs = esPantallaCompleta();
  if(wrap.clientWidth <= 0) return; // pestaña oculta: se reajusta al mostrarla
  // Tarjeta de juego (casilla actual + salidas como botones grandes):
  // - en pantallas angostas (celular/tableta vertical) la hoja entera queda
  //   ilegible para jugar, así que la tarjeta va arriba y la hoja debajo
  //   como mapa;
  // - en pantalla completa con el celular en horizontal, la tarjeta va a la
  //   izquierda y el mapa a la derecha (el alto es muy poco para apilarlos).
  const apaisado = fs && window.innerWidth > window.innerHeight && window.innerHeight < 600;
  const conTarjeta = vista === 'play' && !!curMz && (wrap.clientWidth < 760 || apaisado);
  card.hidden = !conTarjeta;
  wrap.classList.toggle('con-tarjeta', conTarjeta);
  wrap.classList.toggle('lado', conTarjeta && apaisado);
  if(conTarjeta) pintarTarjeta();
  avisoGirar();
  const availW = stage.clientWidth - 4;
  if(availW <= 0) return;
  let s = Math.min(1, availW / curSheet.W);
  if(fs){
    const availH = window.innerHeight - (stage.getBoundingClientRect().top - wrap.getBoundingClientRect().top) - 16;
    s = Math.max(0.2, Math.min(availW / curSheet.W, availH / curSheet.H));
  }
  const w = curSheet.el.parentNode;
  w.style.width = curSheet.W*s + 'px'; w.style.height = curSheet.H*s + 'px';
  curSheet.el.style.transform = 'scale(' + s + ')';
}
// En iPhone (y si el navegador no deja bloquear la orientación) se pide al
// estudiante que gire el celular; el aviso se quita solo al girarlo.
function avisoGirar(){
  const g = $('#lab-girar');
  const vertical = window.innerHeight > window.innerWidth;
  g.hidden = !(esPantallaCompleta() && esMovil() && vertical && !g.dataset.cerrado);
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
  st.querySelectorAll('.ln').forEach(l => {
    const t = taken.has(l.dataset.e);
    l.classList.toggle('trav', t);
    l.setAttribute('marker-end', 'url(#' + l.dataset.mk + (t ? '-g' : '') + ')');
  });
  if(!$('#lab-card').hidden) pintarTarjeta();
  let msg;
  if(juego.done){
    const s = Math.round((Date.now() - juego.t0)/1000);
    msg = '🏁 ¡Llegaste a FIN! Errores: ' + juego.errors + ' · Tiempo: ' + Math.floor(s/60) + ':' + String(s%60).padStart(2,'0');
  } else msg = 'Estás en la casilla ' + curMz.nodes[juego.cur].letter + '. Resuelve y toca la salida con tu resultado. Errores: ' + juego.errors;
  $('#lab-status').textContent = msg;
  $('#lab-play-msg').textContent = msg;
}
const FLECHA = {h:'→', v:'↓', d:'↘'};
function pintarTarjeta(){
  const card = $('#lab-card');
  if(!curMz || !juego) return;
  if(juego.done){
    card.innerHTML = '<div class="lc-fin">🏁 ¡Llegaste a FIN!</div><button type="button" class="lab-op lc-re" data-accion="reiniciar">↺ Jugar otra vez</button>';
    return;
  }
  const nd = curMz.nodes[juego.cur], q = nd.q;
  const cierra = q.qh.includes('¿') && !q.qh.includes('?') ? '?' : '';
  card.innerHTML = '<div class="lc-head"><span class="lc-badge">' + nd.letter + '</span><span>Casilla ' + nd.letter + ' · errores: ' + juego.errors + '</span></div>'
    + '<div class="lc-q">' + q.qh + '</div>'
    + (q.fo ? '<div class="lc-fo">' + q.fo + cierra + '</div>' : '')
    + (q.ft ? '<div class="lc-ft">' + q.ft + '</div>' : '')
    + '<div class="lc-ops">' + nd.edges.map(e => '<button type="button" class="lab-op" data-e="' + nd.u + '-' + e.to + '" data-u="' + nd.u + '"><span class="lc-dir" aria-hidden="true">' + FLECHA[e.k] + '</span><span>' + e.lab.h + '</span></button>').join('') + '</div>';
}
function clicJuego(ev){
  if(vista !== 'play' || !juego || !curMz) return;
  if(ev.target.closest('[data-accion="reiniciar"]')){ reiniciarJuego(); return; }
  if(juego.done || juego.pausa) return;
  const b = ev.target.closest('.el, .lab-op'); if(!b || !b.dataset.e) return;
  const u = +b.dataset.u; if(u !== juego.cur) return;
  const v = +b.dataset.e.split('-')[1];
  const e = curMz.nodes[u].edges.find(x => x.to === v);
  if(!e) return;
  if(!juego.t0) juego.t0 = Date.now();
  const desdeTarjeta = b.classList.contains('lab-op');
  if(e.ok){
    juego.cur = v; juego.path.push(v); if(v === curMz.fin) juego.done = true;
    if(desdeTarjeta){
      // en la tarjeta el acierto se ve en verde un instante antes de pasar de casilla
      const j = juego; j.pausa = true; b.classList.add('good');
      setTimeout(() => { if(juego !== j) return; j.pausa = false; pintarJuego(); const s = $('#lab-card .lab-op'); if(s) s.focus(); }, 450);
      return;
    }
    pintarJuego();
    // el foco pasa a la primera salida de la nueva casilla (teclado)
    const sig = desdeTarjeta ? $('#lab-card .lab-op') : $('#lab-stage .el.hot');
    if(sig) sig.focus();
  } else {
    juego.errors++; pintarJuego();
    const mal = desdeTarjeta ? $('#lab-card .lab-op[data-e="' + b.dataset.e + '"]') : b;
    const enHoja = $('#lab-stage .el[data-e="' + b.dataset.e + '"]');
    [mal, enHoja].forEach(x => { if(x){ x.classList.remove('bad'); void x.offsetWidth; x.classList.add('bad'); } });
    if(mal && desdeTarjeta) mal.focus();
  }
}
function reiniciarJuego(){
  if(!curMz) return;
  juego = {cur:0, errors:0, t0:0, path:[0], done:false};
  $$('#lab-stage .el.bad, #lab-card .bad').forEach(b => b.classList.remove('bad'));
  pintarJuego();
}

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
  delete $('#lab-girar').dataset.cerrado;
  // En celular se gira a horizontal. screen.orientation.lock solo funciona
  // con la pantalla completa ya activa (Android/Chrome); en iPhone no
  // existe y queda el aviso «Gira tu celular».
  if(esMovil()) setTimeout(() => {
    try{
      const o = screen.orientation;
      if(o && o.lock && (document.fullscreenElement || document.webkitFullscreenElement)) o.lock('landscape').catch(() => {}).then(() => setTimeout(ajustar, 120));
    }catch(e){}
  }, 250);
  setTimeout(ajustar, 60);
}
function salirPantallaCompleta(){
  const w = $('#lab-playwrap');
  if(document.fullscreenElement || document.webkitFullscreenElement){ (document.exitFullscreen || document.webkitExitFullscreen).call(document); }
  w.classList.remove('pseudo-fs', 'fs-on'); document.body.style.overflow = '';
  try{ if(screen.orientation && screen.orientation.unlock) screen.orientation.unlock(); }catch(e){}
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
  if(t.join('') === clave.join('')){ m.textContent = '✔ Ruta correcta'; m.style.color = 'var(--ok-t)'; return; }
  let i = 0; while(i < t.length && i < clave.length && t[i] === clave[i]) i++;
  m.textContent = i >= clave.length ? '✖ Sobran casillas después del paso ' + clave.length
    : i >= t.length ? '✖ Ruta incompleta: faltan casillas desde el paso ' + (i+1)
    : '✖ La ruta no coincide (primer desvío en el paso ' + (i+1) + ')';
  m.style.color = 'var(--err-t)';
}

/* ----- imprimir ----- */
function esperarImagenes(root){
  return Promise.all([...root.querySelectorAll('img')].map(img => img.complete ? Promise.resolve() :
    new Promise(res => { img.addEventListener('load', res, {once:true}); img.addEventListener('error', res, {once:true}); })));
}
// Para imprimir se reduce con `zoom` y no con transform: el motor de
// impresión de Chrome pagina con el tamaño SIN transformar y recortaba la
// hoja (en 4×4 se perdía la última fila). Respaldo con transform solo si
// el navegador no soporta zoom.
const ZOOM_OK = !!(window.CSS && CSS.supports && CSS.supports('zoom', '0.5'));
function envolver(sh, s){
  const w = document.createElement('div'); w.className = 'lab-scaled';
  w.style.width = sh.W*s + 'px'; w.style.height = sh.H*s + 'px';
  if(ZOOM_OK) sh.el.style.zoom = s; else sh.el.style.transform = 'scale(' + s + ')';
  w.appendChild(sh.el); return w;
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
    const sh = hoja(mz, c, {label: 'Versión ' + (i+1) + ' de ' + c.nver});
    // escala para que quepa TODO el laberinto (se agranda si sobra espacio)
    const s = Math.min(1.25, PAG_W/sh.W, PAG_H/sh.H);
    const pp = document.createElement('div'); pp.className = 'lab-pp'; pp.appendChild(envolver(sh, s)); root.appendChild(pp);
  }
  if($('#lab-withkeys').checked){
    mzs.forEach((mz, i) => {
      const sh = hoja(mz, c, {key:true, label: 'Clave · código ' + c.seed + ' · versión ' + (i+1)});
      const s = Math.min(640/sh.W, (PAG_H - 40)/sh.H);
      const pp = document.createElement('div'); pp.className = 'lab-pp keypage';
      pp.innerHTML = '<div class="kh"><img src="assets/logo-ionom-hoja.png" alt="IonNom"><span><b>CLAVE — Versión ' + (i+1) + '</b> · código ' + esc(c.seed) + ' · Ruta: <b>' + textoRuta(mz) + '</b></span></div><div class="kb"></div>';
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
  const n = Math.max(1, Math.min(MAX_VERSIONES, parseInt($('#lab-nver').value, 10) || 1)), sel = $('#lab-vsel'), keep = +sel.value || 0;
  $('#lab-nver').value = n; // muestra el valor real usado (1 a MAX_VERSIONES)
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
  $$('#lab-fs-mol input, #lab-fs-forma input, #lab-fs-fam input, #lab-fs-atomo input').forEach(x => x.addEventListener('change', render));
  $('#lab-nver').addEventListener('change', () => { llenarVersiones(); render(); });
  $('#lab-btn-seed').addEventListener('click', () => { $('#lab-seed').value = rndSeed(); render(); });
  $$('#lab-seg button').forEach(b => b.addEventListener('click', () => {
    vista = b.dataset.view; $$('#lab-seg button').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
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
  $('#lab-restart2').addEventListener('click', reiniciarJuego);
  $('#lab-card').addEventListener('click', clicJuego);
  $('#lab-girar-ok').addEventListener('click', () => { $('#lab-girar').dataset.cerrado = '1'; avisoGirar(); });
  window.addEventListener('orientationchange', () => setTimeout(ajustar, 150));
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

window.LABERINTO = {render, ajustar, construir, verificar, getCfg, _interno: {intentar, disociar, estadoOx, masaMolar, genNom, balanceada, variantesNombre, variantesFormula, formulaPosible}};
document.addEventListener('DOMContentLoaded', init);
})();
