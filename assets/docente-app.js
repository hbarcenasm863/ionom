/* ════════════════════════════════════════════════════════════════════════
   docente.html — lógica (sin contenido; el contenido vive en docente-datos.js)
   Puerto a IonNom del generador de guías/talleres/evaluaciones de ChromaNom
   (ver LOGICA_DOCENTE.md). Principios que se mantienen igual:
   - No copiar bancos: se lee BANCO (banco.js, ya incluido directo en
     docente.html -- es un archivo compartido independiente, a diferencia de
     ChromaNom donde el banco vive dentro de generador.html) y se leen
     ELEMENTS/REACT_CHAINS/GROUP_LABELS/STUDY_TIPS/getOxidationStates/
     parseFormula de juego.html vía un iframe oculto (esos sí viven solo
     dentro del <script> de esa página). Las funciones de armado de HTML de
     ejercicios de nomenclatura (generateFormulaToName/generateNameToFormula/
     generateTableComplete/generateOxidationState) se reutilizan igual, vía
     un segundo iframe oculto a generador.html -- son funciones puras (reciben
     un arreglo de compuestos y devuelven un string HTML, no tocan el DOM de
     su propia página), así que se pueden llamar desde aquí con la selección
     YA hecha por nuestro propio RNG con semilla (ChromaNom no necesita este
     paso porque allá el banco y el armado de HTML viven en el mismo sitio).
   - reaccion/balanceo/mol-masa SÍ tienen su propio armador en generador.html
     (_buildReaccionHTML/_buildBalanceoHTML/_buildMolMasaHTML), pero eligen
     sus compuestos con Math.random() sin semilla -- llamarlos rompería la
     reproducibilidad de las versiones. Por eso para esos 3 grupos se arma
     el HTML aquí mismo (mismo estilo visual, selección con semilla propia).
   - Semilla y versiones reproducibles, sin clave de respuestas impresa,
     hojas llenas (cuadrícula que se estira para no dejar huecos grandes).
   ════════════════════════════════════════════════════════════════════════ */
(function(){
'use strict';

/* ───────────────────────── 1. RNG con semilla ───────────────────────── */
// Hash FNV-1a (string -> entero de 32 bits) + mulberry32 (PRNG rápido y
// determinista) -- mismo idioma que ya usa ChromaNom (ver LOGICA_DOCENTE.md
// sección 5.1). IonNom no tenía ningún PRNG sembrado: todo generador.html usa
// Math.random() directo (confirmado), así que esto es nuevo para el sitio.
function fnv1a(str){
  let h = 0x811c9dc5;
  for(let i=0;i<str.length;i++){
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}
function mulberry32(seed){
  let a = seed >>> 0;
  return function(){
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function rng(semilla){ return mulberry32(fnv1a(String(semilla))); }
function barajar(arr, rngFn){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(rngFn()*(i+1));
    const tmp=a[i]; a[i]=a[j]; a[j]=tmp;
  }
  return a;
}
// Elige n elementos de src sin repetir (si src>=n) o rellenando por rondas
// barajadas sin repetir el inmediatamente anterior (si hace falta repetir
// porque src<n) -- mismo comportamiento que _pickN de generador.html, pero
// con nuestra semilla en vez de Math.random().
function elegirN(src, n, rngFn, clave){
  clave = clave || (x => x.formula || x.id || x.ecuacion || JSON.stringify(x));
  if(!src.length) return []; // sin fuente no hay nada que elegir (ej. temas sin compuestos en BANCO)
  if(src.length >= n) return barajar(src, rngFn).slice(0, n);
  const out = []; let bolsa = [];
  while(out.length < n){
    if(!bolsa.length) bolsa = barajar(src, rngFn);
    const ultima = out.length ? clave(out[out.length-1]) : '';
    let idx = bolsa.findIndex(c => clave(c) !== ultima);
    if(idx < 0) idx = 0;
    out.push(bolsa.splice(idx,1)[0]);
  }
  return out;
}

/* ───────────────────────── 2. Carga de bancos ───────────────────────── */
// B.estado: 'cargando' | 'ok' | 'error' por fuente, igual patrón que
// ChromaNom para mostrarle al docente "✅ Juego: 1338 preguntas".
const B = {
  estado: { banco:'cargando', juego:'cargando', generador:'cargando' },
  BANCO: null,
  ELEMENTS: null, REACT_CHAINS: null, GROUP_LABELS: null, STUDY_TIPS: null,
  getOxidationStates: null, parseFormula: null,
  gen: {} // generateFormulaToName / generateNameToFormula / generateTableComplete / generateOxidationState
};

function initBancos(onListo){
  // BANCO (banco.js) es un "const" de nivel superior en SU PROPIO <script>,
  // no una propiedad de window -- en JS, const/let de nivel superior crean
  // un global accesible como identificador suelto entre <script> del mismo
  // documento, pero NO cuelgan de window. Por eso se referencia tal cual
  // (no window.BANCO) y se envuelve en try/catch por si ese <script> aún no
  // se incluyó en la página.
  try{
    B.BANCO = BANCO;
    B.estado.banco = 'ok';
  }catch(e){
    B.estado.banco = 'error';
  }

  let pendientes = 2;
  function unoListo(){ pendientes--; if(pendientes===0) onListo(); }

  const ifrJuego = document.createElement('iframe');
  ifrJuego.style.display = 'none';
  ifrJuego.setAttribute('aria-hidden','true');
  ifrJuego.src = 'juego.html';
  ifrJuego.addEventListener('load', function(){
    try{
      const w = ifrJuego.contentWindow;
      B.ELEMENTS = w.eval('ELEMENTS');
      B.REACT_CHAINS = w.eval('REACT_CHAINS');
      B.GROUP_LABELS = w.eval('GROUP_LABELS');
      B.STUDY_TIPS = w.eval('STUDY_TIPS');
      B.getOxidationStates = w.eval('getOxidationStates');
      B.parseFormula = w.eval('parseFormula');
      B.estado.juego = 'ok';
    }catch(e){
      B.estado.juego = 'error';
      console.error('docente-app: no se pudo leer juego.html', e);
    }
    unoListo();
  });
  ifrJuego.addEventListener('error', function(){ B.estado.juego='error'; unoListo(); });
  document.body.appendChild(ifrJuego);

  const ifrGen = document.createElement('iframe');
  ifrGen.style.display = 'none';
  ifrGen.setAttribute('aria-hidden','true');
  ifrGen.src = 'generador.html';
  ifrGen.addEventListener('load', function(){
    try{
      const w = ifrGen.contentWindow;
      B.gen.generateFormulaToName = w.generateFormulaToName;
      B.gen.generateNameToFormula = w.generateNameToFormula;
      B.gen.generateTableComplete = w.generateTableComplete;
      B.gen.generateOxidationState = w.generateOxidationState;
      B.estado.generador = 'ok';
    }catch(e){
      B.estado.generador = 'error';
      console.error('docente-app: no se pudo leer generador.html', e);
    }
    unoListo();
  });
  ifrGen.addEventListener('error', function(){ B.estado.generador='error'; unoListo(); });
  document.body.appendChild(ifrGen);
}

/* ───────────────────────── 3. Selección de ejercicios ───────────────────────── */
// Pool por grupo (tema), sin repetidos dentro del documento completo (todas
// las versiones comparten el mismo "ya usado" por fórmula/ecuación para no
// repetir el mismo compuesto dos veces en la misma guía).
function poolPorGrupo(grupos){
  const set = new Set(grupos);
  return (B.BANCO||[]).filter(c => set.has(c.group));
}

const TIPO_ROTULO = {
  'a-nombrar':'Nombrar (fórmula → nombre)',
  'b-formula':'De nombre a fórmula',
  'c-tabla':'Completar tabla',
  'd-reaccion':'Tipos de reacción',
  'd-balanceo':'Balanceo de ecuaciones',
  'd-molmasa':'Mol y masa molar',
  'x-errores':'Cazar errores',
  'ox-estado':'Estado de oxidación'
};

// "Cazar errores": toma una entrada real del banco y le introduce un error
// plausible (no absurdo) a propósito -- cruce de cargas mal hecho en la
// fórmula, o sufijo -oso/-ico invertido en el nombre tradicional. No existe
// nada parecido en generador.html/juego.html, es nuevo de docente-app.js.
function introducirError(c, rngFn){
  const variantes = [];
  if(c.trad && c.trad[0]){
    const n = c.trad[0];
    if(/oso\b/.test(n)) variantes.push({texto:n.replace(/oso\b/,'ico'), motivo:'sufijo -oso/-ico invertido'});
    else if(/ico\b/.test(n)) variantes.push({texto:n.replace(/ico\b/,'oso'), motivo:'sufijo -oso/-ico invertido'});
  }
  // cruce de cargas mal hecho: duplica o quita un subíndice del final de la fórmula
  const m = c.formula.match(/^(.*?)([₀-₉]+)?$/);
  if(c.formula.length>1){
    variantes.push({texto:c.formula.replace(/(\d|[₀-₉])$/,''), motivo:'le falta el subíndice del cruce de cargas'});
  }
  if(!variantes.length) return null;
  const elegido = variantes[Math.floor(rngFn()*variantes.length)];
  return {formulaOriginal:c.formula, nombreOriginal:c.trad&&c.trad[0], version:elegido.texto, motivo:elegido.motivo, group:c.group};
}

/* ───────────────────────── 4. Construcción de bloques HTML ───────────────────────── */
function tarjetaReaccion(r, numero){
  return '<div class="exercise-card">'
    +'<div class="ex-num">Ejercicio '+numero+'</div>'
    +'<div style="font-family:var(--mono);font-size:1rem;font-weight:700;color:var(--cat-t);background:var(--cat-b);border-radius:8px;padding:10px 14px;margin:10px 0">'+r.ecuacion+'</div>'
    +'<p style="font-size:.88rem;margin:8px 0">Clasifica el tipo de reacción y justifica tu respuesta.</p>'
    +'<div style="margin:8px 0;font-size:.88rem"><strong>Tipo de reacción:</strong> _________________________</div>'
    +'<div class="cuad" style="height:56.7px"></div>'
    +'</div>';
}
function tarjetaBalanceo(b, numero){
  return '<div class="exercise-card">'
    +'<div class="ex-num">Ejercicio '+numero+'</div>'
    +'<div style="font-family:var(--mono);font-size:1rem;font-weight:700;color:var(--an-t);background:var(--an-b);border-radius:8px;padding:10px 14px;margin:10px 0">'+b.ecuacion_sin_coef+'</div>'
    +'<p style="font-size:.88rem;margin:6px 0">Completa los coeficientes para balancear la ecuación (usa mínimos enteros).</p>'
    +'<div class="cuad" style="height:56.7px"></div>'
    +'</div>';
}
function tarjetaMolMasa(m, numero){
  return '<div class="exercise-card">'
    +'<div class="ex-num">Ejercicio '+numero+'</div>'
    +'<p style="font-size:.88rem;margin:8px 0">Calcula la masa molar de <strong style="font-family:var(--mono)">'+m.formula+'</strong> y determina cuántos gramos hay en <strong>2.5 mol</strong>.</p>'
    +'<div class="cuad" style="height:75.6px"></div>'
    +'</div>';
}
function tarjetaError(e, numero){
  return '<div class="exercise-card" style="border-left:4px solid var(--err)">'
    +'<div class="ex-num">Ejercicio '+numero+'</div>'
    +'<p style="font-size:.88rem;margin:4px 0 10px">La siguiente '+(e.motivo.includes('fórmula')||e.motivo.includes('subíndice')?'fórmula':'forma')+' tiene un error. Encuéntralo, explica por qué está mal y escribe la versión correcta.</p>'
    +'<div style="font-size:1.3rem;font-weight:700;font-family:var(--mono);color:var(--err-t);background:var(--err-b);display:inline-block;padding:6px 16px;border-radius:var(--rm);margin-bottom:10px">'+e.version+'</div>'
    +'<div style="margin:8px 0;font-size:.88rem"><strong>¿Qué está mal?</strong></div>'
    +'<div class="cuad" style="height:37.8px"></div>'
    +'<div style="margin:8px 0;font-size:.88rem"><strong>Versión correcta:</strong> _________________________</div>'
    +'</div>';
}

function armarBloquesPractica(F, rngFn, usados){
  const bloques = [];
  let numero = 1;
  const temas = F.temas;
  const sistema = F.sistema || 'all';

  Object.keys(F.tiposEjercicio).forEach(function(tipo){
    const cantidad = F.tiposEjercicio[tipo];
    if(!cantidad) return;

    if(tipo==='a-nombrar' || tipo==='b-formula' || tipo==='c-tabla' || tipo==='ox-estado'){
      const gruposCompuestos = temas.filter(t => !['reaccion','balanceo','mol-masa','elemento','reactividad'].includes(t));
      let pool = poolPorGrupo(gruposCompuestos).filter(c => !usados.has(c.formula));
      const elegidos = elegirN(pool, Math.min(cantidad, pool.length||cantidad), rngFn);
      elegidos.forEach(c => usados.add(c.formula));
      let html = '';
      if(elegidos.length && B.gen.generateFormulaToName && tipo==='a-nombrar') html = B.gen.generateFormulaToName(elegidos, sistema);
      else if(elegidos.length && B.gen.generateNameToFormula && tipo==='b-formula') html = B.gen.generateNameToFormula(elegidos, sistema);
      else if(elegidos.length && B.gen.generateTableComplete && tipo==='c-tabla') html = B.gen.generateTableComplete(elegidos, sistema);
      else if(elegidos.length && B.gen.generateOxidationState && tipo==='ox-estado') html = B.gen.generateOxidationState(elegidos);
      // generateFormulaToName/generateNameToFormula/generateTableComplete devuelven
      // VARIOS <div class="exercise-card"> hermanos concatenados en un solo string
      // (sin contenedor envolvente) -- si se empuja como un solo bloque, paginar()
      // solo conserva wrap.firstElementChild y descarta en silencio el resto. Por
      // eso se separa aquí en un bloque por tarjeta, para que cada una pagine bien.
      if(html){
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        Array.from(tmp.children).forEach(function(card){
          bloques.push({html: card.outerHTML, esMultiple:false});
        });
      }
    } else if(tipo==='d-reaccion'){
      let pool = poolPorGrupo(['reaccion']).filter(c => !usados.has(c.id));
      elegirN(pool, Math.min(cantidad, pool.length||cantidad), rngFn, x=>x.id).forEach(r=>{
        usados.add(r.id);
        bloques.push({html:tarjetaReaccion(r, numero++), esMultiple:false});
      });
    } else if(tipo==='d-balanceo'){
      let pool = poolPorGrupo(['balanceo']).filter(c => !usados.has(c.id));
      elegirN(pool, Math.min(cantidad, pool.length||cantidad), rngFn, x=>x.id).forEach(b=>{
        usados.add(b.id);
        bloques.push({html:tarjetaBalanceo(b, numero++), esMultiple:false});
      });
    } else if(tipo==='d-molmasa'){
      let pool = poolPorGrupo(['mol-masa']).filter(c => !usados.has(c.formula));
      elegirN(pool, Math.min(cantidad, pool.length||cantidad), rngFn).forEach(m=>{
        usados.add(m.formula);
        bloques.push({html:tarjetaMolMasa(m, numero++), esMultiple:false});
      });
    } else if(tipo==='x-errores'){
      const gruposCompuestos = temas.filter(t => !['reaccion','balanceo','mol-masa','elemento','reactividad'].includes(t));
      let pool = poolPorGrupo(gruposCompuestos).filter(c => !usados.has(c.formula));
      elegirN(pool, Math.min(cantidad, pool.length||cantidad), rngFn).forEach(c=>{
        usados.add(c.formula);
        const err = introducirError(c, rngFn);
        if(err) bloques.push({html:tarjetaError(err, numero++), esMultiple:false});
      });
    }
  });

  return bloques;
}

/* ───────────────────────── 5. Saber 11 y abiertas ───────────────────────── */
function tarjetaSaber(q, idxLocal, rngFn){
  const opciones = q.o.map((texto,i)=>({texto, correcta:i===0}));
  const barajadas = barajar(opciones, rngFn);
  const letras = ['A','B','C','D'];
  return '<div class="sq">'
    +'<div class="sq-ctx">'+(q.ctx||'')+'</div>'
    +'<div class="sq-q"><strong>'+(idxLocal)+'.</strong> '+q.q+(q.f?' <span style="font-family:var(--mono);font-weight:700">'+q.f+'</span>':'')+'</div>'
    +'<div class="sq-opts">'+barajadas.map((o,i)=>'<div class="sq-opt">'+letras[i]+') '+o.texto+'</div>').join('')+'</div>'
    +'</div>';
}

function armarBloquesSaber(F, rngFn){
  const banco = (window.DOCENTE_DATOS && window.DOCENTE_DATOS.SABER) || [];
  const pool = banco.filter(q => F.temas.includes(q.tema));
  const elegidos = elegirN(pool, Math.min(F.saberCant, pool.length||F.saberCant), rngFn, x=>x.q);
  return elegidos.map((q,i)=>({html:tarjetaSaber(q, i+1, rngFn), cols2:true}));
}

function tarjetaAbierta(q, numero){
  const alto = q.t==='mdec' ? 94.5 : 113.4; // 5 / 6 cuadros
  return '<div class="exercise-card">'
    +'<div class="ex-num">Pregunta '+numero+'</div>'
    +'<div style="font-size:.9rem;margin-bottom:10px">'+q.q+(q.f?' <span style="font-family:var(--mono);font-weight:700;color:var(--cat-t);background:var(--cat-b);padding:2px 8px;border-radius:6px">'+q.f+'</span>':'')+(q.n?' <span style="font-style:italic;font-weight:700">'+q.n+'</span>':'')+'</div>'
    +'<div class="cuad" style="height:'+alto+'px"></div>'
    +'</div>';
}

function armarBloquesAbiertas(F, rngFn, excluirEjemplo){
  const banco = (window.DOCENTE_DATOS && window.DOCENTE_DATOS.ABIERTAS) || [];
  // en ronda entre los 3 tipos (rx -> nom -> mdec), igual que el documento base
  const porTipo = {rx:[], nom:[], mdec:[]};
  banco.forEach(q=>{ if(F.temas.includes(q.tema) && porTipo[q.t]) porTipo[q.t].push(q); });
  ['rx','nom','mdec'].forEach(t=>{ porTipo[t] = barajar(porTipo[t], rngFn).filter(q => !excluirEjemplo || !excluirEjemplo.has(q.q)); });
  const elegidos = [];
  let i=0;
  while(elegidos.length < F.abiertasCant){
    const tipo = ['rx','nom','mdec'][i%3];
    if(porTipo[tipo].length){ elegidos.push(porTipo[tipo].shift()); }
    i++;
    if(i>300) break; // no hay suficientes preguntas en el banco para este pedido
  }
  return elegidos.map((q,idx)=>({html:tarjetaAbierta(q, idx+1), esMultiple:false}));
}

/* ───────────────────────── 6. Construcción del documento ───────────────────────── */
function construirVersion(F, numVersion, totalVersiones){
  const semilla = [F.variante||'', numVersion, F.tipoDoc, F.temas.join(',')].join('|');
  const rngEj = rng(semilla+'|ej');
  const rngSaber = rng(semilla+'|saber');
  const rngAbiertas = rng(semilla+'|abiertas');
  const usados = new Set();

  const bloques = [];
  // 'guia' es un tipoDoc interno (solo lo usa construirTodas) para la pasada
  // de lectura+práctica de una "Guía completa", separada de la(s) pasada(s)
  // de evaluación -- no es un valor que el formulario produzca directamente.
  const incluyeLectura = F.tipoDoc==='completa' || F.tipoDoc==='guia';
  const incluyeGuia = incluyeLectura || F.tipoDoc==='taller';
  const incluyeEval = F.tipoDoc==='completa' || F.tipoDoc==='evaluacion';

  if(incluyeLectura){
    bloques.push.apply(bloques, bloqueSesionPrevios(F, rngEj));
    bloques.push.apply(bloques, bloqueSesionInfo(F));
  }
  if(incluyeGuia){
    bloques.push({html:'<h2 class="sec-tit">Sesión 3 · Trabajo práctico</h2>', esTitulo:true});
    bloques.push.apply(bloques, armarBloquesPractica(F, rngEj, usados));
  }
  if(incluyeEval){
    bloques.push({html:'<h2 class="sec-tit nueva-hoja">Evaluación'+(totalVersiones>1?' — Versión '+numVersion+' de '+totalVersiones:'')+'</h2>', esTitulo:true, nuevaHoja:true});
    const saberBloques = armarBloquesSaber(F, rngSaber);
    if(saberBloques.length) bloques.push.apply(bloques, saberBloques);
    const abiertasBloques = armarBloquesAbiertas(F, rngAbiertas);
    if(abiertasBloques.length) bloques.push.apply(bloques, abiertasBloques);
  }

  return {
    clase: F.tipoDoc,
    etiqueta: (totalVersiones>1 ? 'Versión '+numVersion+' de '+totalVersiones : ''),
    bloques: bloques
  };
}

function bloqueSesionPrevios(F, rngFn){
  const temasData = (window.DOCENTE_DATOS && window.DOCENTE_DATOS.TEMAS) || [];
  const out = [{html:'<h2 class="sec-tit">Sesión 1 · Aprendizajes previos</h2>', esTitulo:true}];
  F.temas.forEach(function(tid){
    const t = temasData.find(x=>x.id===tid);
    if(!t || !t.previos) return;
    const p = t.previos;
    let html = '<div class="sect-previos"><h3>'+t.titulo+'</h3>';
    if(p.curiosos && p.curiosos.length) html += '<p class="curioso">💡 <strong>¿Sabías que…?</strong> '+p.curiosos[Math.floor(rngFn()*p.curiosos.length)]+'</p>';
    if(p.contexto && p.contexto.length){
      const c = p.contexto[Math.floor(rngFn()*p.contexto.length)];
      html += '<p class="contexto"><strong>Contexto '+c.amb+':</strong> '+c.t+'</p>';
    }
    if(p.cotidianos && p.cotidianos.length) html += '<p>'+p.cotidianos[Math.floor(rngFn()*p.cotidianos.length)]+'</p>';
    if(p.activacion && p.activacion.length) html += '<p class="activacion"><strong>Antes de empezar:</strong> '+p.activacion[Math.floor(rngFn()*p.activacion.length)]+'</p>';
    html += '</div>';
    out.push({html:html, esMultiple:false});
  });
  return out;
}

function bloqueSesionInfo(F){
  const temasData = (window.DOCENTE_DATOS && window.DOCENTE_DATOS.TEMAS) || [];
  const out = [{html:'<h2 class="sec-tit nueva-hoja">Sesión 2 · Información</h2>', esTitulo:true, nuevaHoja:true}];
  F.temas.forEach(function(tid){
    const t = temasData.find(x=>x.id===tid);
    if(!t || !t.info) return;
    let html = '<div class="sect-info"><h3>'+t.titulo+'</h3>';
    (t.info.lectura||[]).forEach(p => html += '<p>'+p+'</p>');
    if(t.info.esquema){
      html += '<div class="esquema"><strong>'+t.info.esquema.raiz+'</strong><ul>';
      (t.info.esquema.ramas||[]).forEach(r=>{ html += '<li><strong>'+r.t+':</strong> '+(r.items||[]).join(', ')+'</li>'; });
      html += '</ul></div>';
    }
    if(t.ejemplo){
      // Cada parte usa el mismo código de 4 colores MDEC del juego (cat/an/oh/ox)
      // -- se renderiza como chip de color + explicación, no solo texto plano.
      const chips = (t.ejemplo.partes||[]).map(function(p){
        const rol = p[1];
        return '<div style="margin-top:4px"><span style="font-family:var(--mono);font-weight:700;color:var(--'+rol+'-t);background:var(--'+rol+'-b);padding:2px 8px;border-radius:6px;margin-right:6px">'+esc(p[0])+'</span>'+esc(p[2])+'</div>';
      }).join('');
      html += '<div class="ejemplo-resuelto"><strong>Ejemplo resuelto:</strong> <span style="font-family:var(--mono);font-weight:700">'+esc(t.ejemplo.f)+'</span>'+chips+'</div>';
    }
    html += '</div>';
    out.push({html:html, esMultiple:false});
  });
  return out;
}

/* ───────────────────────── 7. Paginación tamaño carta ───────────────────────── */
const HOJA_CSS_W = 816, HOJA_CSS_H = 1056;
const CUADRO = 18.9;

function crearHoja(doc, esPrimera){
  const hoja = document.createElement('div');
  hoja.className = 'hoja';
  hoja.innerHTML =
    '<div class="hoja-enc'+(esPrimera?' hoja-enc-completo':'')+'">'
      + (esPrimera
        ? '<div class="hoja-enc-top"><div><strong>'+esc(doc.F.colegio||'')+'</strong><br>'+esc(doc.F.docente||'')+' · '+esc(doc.F.curso||'')+' · '+esc(doc.F.fecha||'')+'</div><img class="hoja-enc-logo" src="assets/logo.png" alt="IonNom"></div>'
        : '<div class="hoja-enc-corto">'+esc(doc.F.curso||'')+' — '+esc(doc.F.fecha||'')+'</div>')
    + '</div>'
    + '<div class="hoja-cuerpo"></div>'
    + '<div class="hoja-pie"><span class="hoja-pagina"></span></div>';
  return hoja;
}
function esc(s){ return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function paginar(doc){
  const medidor = document.getElementById('medidor');
  medidor.innerHTML = '';
  let hoja = crearHoja(doc, true);
  medidor.appendChild(hoja);
  let cuerpo = hoja.querySelector('.hoja-cuerpo');
  let cols2 = null;

  doc.bloques.forEach(function(blk){
    if(blk.nuevaHoja && cuerpo.children.length){
      hoja = crearHoja(doc, false);
      medidor.appendChild(hoja);
      cuerpo = hoja.querySelector('.hoja-cuerpo');
      cols2 = null;
    }
    let destino = cuerpo;
    if(blk.cols2){
      if(!cols2){ cols2 = document.createElement('div'); cols2.className='cols2'; cuerpo.appendChild(cols2); }
      destino = cols2;
    } else {
      cols2 = null;
    }
    const wrap = document.createElement('div');
    wrap.innerHTML = blk.html;
    const el = wrap.firstElementChild || wrap;
    destino.appendChild(el);

    if(cuerpo.scrollHeight > cuerpo.clientHeight + 1){
      destino.removeChild(el);
      hoja = crearHoja(doc, false);
      medidor.appendChild(hoja);
      cuerpo = hoja.querySelector('.hoja-cuerpo');
      cols2 = null;
      let destino2 = cuerpo;
      if(blk.cols2){ cols2 = document.createElement('div'); cols2.className='cols2'; cuerpo.appendChild(cols2); destino2 = cols2; }
      destino2.appendChild(el);
    }
  });

  // Red de seguridad: el paginado por bloque de arriba puede dejar un
  // desborde residual de pocos px (ej. por una variante de fuente que
  // termina de cargar justo después de medir). Antes de estirar las
  // cuadrículas, se corrige cualquier hoja que aún desborde moviendo su(s)
  // último(s) elemento(s) a una hoja de continuación recién creada.
  let hojas = Array.from(medidor.querySelectorAll('.hoja'));
  for(let idx=0; idx<hojas.length; idx++){
    let intentos = 0;
    while(intentos < 50){
      const cuerpo = hojas[idx].querySelector('.hoja-cuerpo');
      if(cuerpo.scrollHeight <= cuerpo.clientHeight + 1 || !cuerpo.lastElementChild) break;
      const sobrante = cuerpo.lastElementChild;
      cuerpo.removeChild(sobrante);
      const continuacion = crearHoja(doc, false);
      medidor.insertBefore(continuacion, hojas[idx].nextSibling);
      continuacion.querySelector('.hoja-cuerpo').appendChild(sobrante);
      hojas.splice(idx+1, 0, continuacion);
      intentos++;
    }
  }

  hojas.forEach(function(h, i){
    llenarHoja(h);
    const pie = h.querySelector('.hoja-pagina');
    if(pie) pie.textContent = (doc.etiqueta?doc.etiqueta+' — ':'')+'página '+(i+1)+' de '+hojas.length;
  });
  return hojas;
}

// Reparte el espacio libre al final de la hoja entre sus cuadrículas de
// respuesta (.cuad), en incrementos de CUADRO, hasta un tope razonable.
// Si la hoja no tiene ninguna cuadrícula, agrega un bloque de notas.
function llenarHoja(hoja){
  const cuerpo = hoja.querySelector('.hoja-cuerpo');
  const cuadros = Array.from(cuerpo.querySelectorAll('.cuad'));
  const libre = cuerpo.clientHeight - cuerpo.scrollHeight;
  if(libre < CUADRO){ return; }
  if(!cuadros.length){
    // El bloque de notas trae su propio rótulo ("Notas") además del cuadro,
    // una altura que "libre" no presupuesta -- por eso se inserta con el
    // mínimo (2 cuadros) y se mide de verdad, en vez de confiar en el
    // cálculo estático, igual que hace paginar() con sus bloques normales.
    const nota = document.createElement('div');
    nota.className = 'notas-finales';
    nota.innerHTML = '<div class="ex-num">Notas</div><div class="cuad" style="height:'+(CUADRO*2)+'px"></div>';
    cuerpo.appendChild(nota);
    if(cuerpo.scrollHeight > cuerpo.clientHeight + 1){
      cuerpo.removeChild(nota);
      return;
    }
    const cuad = nota.querySelector('.cuad');
    let restante = Math.min(Math.floor((cuerpo.clientHeight - cuerpo.scrollHeight)/CUADRO), 24);
    while(restante > 0){
      const alturaActual = parseFloat(cuad.style.height)||0;
      if(alturaActual >= CUADRO*26) break;
      cuad.style.height = (alturaActual + CUADRO) + 'px';
      if(cuerpo.scrollHeight > cuerpo.clientHeight + 1){
        cuad.style.height = alturaActual + 'px';
        break;
      }
      restante--;
    }
    return;
  }
  let restante = Math.min(Math.floor(libre/CUADRO), 26*cuadros.length);
  let i = 0;
  while(restante > 0){
    const c = cuadros[i % cuadros.length];
    const alturaActual = parseFloat(c.style.height)||0;
    if(alturaActual < CUADRO*26){
      c.style.height = (alturaActual + CUADRO) + 'px';
      restante--;
    }
    i++;
    if(i > cuadros.length*26) break;
  }
}

/* ───────────────────────── 8. Orquestación ───────────────────────── */
function construirTodas(F){
  const docs = [];
  const N = F.versiones || 1;
  if(F.tipoDoc==='completa'){
    // la guía (sesiones 1-3) sale una sola vez; la evaluación sale N veces.
    // tipoDoc:'guia' activa lectura+práctica sin evaluación en construirVersion.
    const guia = construirVersion(Object.assign({}, F, {tipoDoc:'guia'}), 1, 1);
    docs.push(guia);
    for(let i=1;i<=N;i++) docs.push(construirVersion(Object.assign({}, F, {tipoDoc:'evaluacion'}), i, N));
  } else {
    for(let i=1;i<=N;i++) docs.push(construirVersion(F, i, N));
  }
  docs.forEach(d => d.F = F);
  return docs;
}

function leerForm(){
  const temas = Array.from(document.querySelectorAll('.chk-tema:checked')).map(c=>c.value);
  const tiposEjercicio = {};
  document.querySelectorAll('.inp-tipo-ej').forEach(inp=>{
    const n = parseInt(inp.value,10);
    if(n>0) tiposEjercicio[inp.dataset.tipo] = n;
  });
  return {
    colegio: document.getElementById('f-colegio').value,
    docente: document.getElementById('f-docente').value,
    curso: document.getElementById('f-curso').value,
    fecha: document.getElementById('f-fecha').value,
    variante: document.getElementById('f-variante').value || 'v1',
    tipoDoc: document.querySelector('input[name="tipoDoc"]:checked').value,
    temas: temas,
    sistema: document.getElementById('f-sistema').value,
    tiposEjercicio: tiposEjercicio,
    saberCant: parseInt(document.getElementById('f-saber').value,10)||0,
    abiertasCant: parseInt(document.getElementById('f-abiertas').value,10)||0,
    versiones: parseInt(document.getElementById('f-versiones').value,10)||1
  };
}

function mostrarEstadoBancos(){
  const el = document.getElementById('estado-bancos');
  if(!el) return;
  const nb = (B.BANCO||[]).length;
  const ne = B.ELEMENTS ? Object.keys(B.ELEMENTS).length : 0;
  const nr = (B.REACT_CHAINS||[]).length;
  el.innerHTML =
    (B.estado.banco==='ok' ? '✅ Banco: '+nb+' compuestos/reacciones' : '⚠️ Banco no disponible') + ' · ' +
    (B.estado.juego==='ok' ? '✅ Tabla periódica: '+ne+' elementos, '+nr+' cadenas' : '⚠️ juego.html no disponible') + ' · ' +
    (B.estado.generador==='ok' ? '✅ Generador conectado' : '⚠️ generador.html no disponible');
}

async function generar(){
  const btn = document.getElementById('btn-generar');
  if(btn) btn.disabled = true;
  try{
    // Precarga de fuentes ANTES de medir/paginar (si se mide con una fuente
    // de respaldo y la real llega después, el texto crece y desborda). Se
    // precargan los 4 pesos realmente usados en docente.html (400/600/700/800,
    // confirmado con grep) y además se espera document.fonts.ready como red
    // de seguridad para cualquier variante que .load() no haya cubierto.
    if(document.fonts && document.fonts.load){
      await Promise.all([
        document.fonts.load('400 16px Outfit'),
        document.fonts.load('600 16px Outfit'),
        document.fonts.load('700 16px Outfit'),
        document.fonts.load('800 16px Outfit'),
        document.fonts.load('700 16px Fraunces'),
        document.fonts.load('400 16px "JetBrains Mono"'),
        document.fonts.load('700 16px "JetBrains Mono"')
      ].map(p=>p.catch(()=>{})));
    }
    if(document.fonts && document.fonts.ready){
      await document.fonts.ready.catch(()=>{});
    }
    const F = leerForm();
    if(!F.temas.length){ alert('Selecciona al menos un tema.'); return; }
    const vista = document.getElementById('vista');
    vista.innerHTML = '';
    const documentos = construirTodas(F);
    documentos.forEach(function(doc){
      const hojas = paginar(doc);
      hojas.forEach(h => vista.appendChild(h.cloneNode(true)));
    });
    document.getElementById('s-form').classList.remove('active');
    document.getElementById('s-preview').classList.add('active');
    window.scrollTo(0,0);
  } finally {
    if(btn) btn.disabled = false;
  }
}

function volverForm(){
  document.getElementById('s-preview').classList.remove('active');
  document.getElementById('s-form').classList.add('active');
}

function imprimir(){ window.print(); }

window.DOCENTE = {
  B, rng, barajar, elegirN, initBancos, mostrarEstadoBancos,
  generar, volverForm, imprimir, TIPO_ROTULO
};

document.addEventListener('DOMContentLoaded', function(){
  initBancos(mostrarEstadoBancos);
});
})();
