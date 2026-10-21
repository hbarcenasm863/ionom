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

// Cuántos ejercicios/preguntas hay disponibles de verdad para un tema dado,
// para mostrarlo en vivo junto a su casilla (igual idea que ChromaNom:
// "153 ejercicios · 20 preguntas tipo Saber"). 'elemento'/'reactividad' no
// viven en BANCO, se cuentan aparte desde ELEMENTS/REACT_CHAINS.
function contarDisponiblesTema(id){
  let nEj = 0;
  if(id==='elemento') nEj = B.ELEMENTS ? Object.keys(B.ELEMENTS).length : 0;
  else if(id==='reactividad') nEj = (B.REACT_CHAINS||[]).length;
  // 'estequiometria' no es un group real de BANCO (no existe tal valor) --
  // sus ejercicios reutilizan las ecuaciones ya balanceadas del group
  // 'balanceo' (ver tarjetaEstequiometria). Sin este caso especial,
  // poolPorGrupo(['estequiometria']) siempre da 0 y el contador de la
  // Sección 2 mostraba "0 ejercicios" aunque sí hubiera 50 disponibles.
  else if(id==='estequiometria') nEj = poolPorGrupo(['balanceo']).length;
  else nEj = poolPorGrupo([id]).length;
  const saber = (window.DOCENTE_DATOS && window.DOCENTE_DATOS.SABER) || [];
  const nSaber = saber.filter(q=>q.tema===id).length;
  return {nEj, nSaber};
}

// Cuántos ejercicios de cada TIPO (A/B/C/estado-ox/reacción/balanceo/
// mol-masa/errores) hay disponibles dado el conjunto de temas marcados en
// este momento -- se recalcula cada vez que cambia la selección de temas,
// igual que los "(N disponibles)" de ChromaNom.
const TEMAS_SIN_COMPUESTOS = ['reaccion','balanceo','mol-masa','elemento','reactividad','estequiometria'];
// Mapa tema→tipo de ejercicio "D" que le corresponde. Se usa para
// auto-marcar el tipo de ejercicio apenas se marca su tema (ver
// actualizarDisponibilidad) -- evita la trampa de seleccionar p.ej.
// "Balanceo de ecuaciones" como tema y terminar con "0 ejercicios" en
// Trabajo práctico porque su casilla "D Balanceo" seguía sin marcar.
const TEMA_A_TIPO_D = {reaccion:'d-reaccion', balanceo:'d-balanceo', 'mol-masa':'d-molmasa', estequiometria:'d-estequiometria'};
function contarDisponiblesTipo(temasMarcados){
  const gruposCompuestos = temasMarcados.filter(t => !TEMAS_SIN_COMPUESTOS.includes(t));
  const nCompuestos = poolPorGrupo(gruposCompuestos).length;
  return {
    'a-nombrar': nCompuestos, 'b-formula': nCompuestos, 'c-tabla': nCompuestos, 'ox-estado': nCompuestos,
    'x-errores': nCompuestos,
    'd-reaccion': temasMarcados.includes('reaccion') ? poolPorGrupo(['reaccion']).length : 0,
    'd-balanceo': temasMarcados.includes('balanceo') ? poolPorGrupo(['balanceo']).length : 0,
    'd-molmasa': temasMarcados.includes('mol-masa') ? poolPorGrupo(['mol-masa']).length : 0,
    'd-estequiometria': temasMarcados.includes('estequiometria') ? poolPorGrupo(['balanceo']).length : 0
  };
}

// Reparte un total de ejercicios en ronda entre los tipos marcados (uno de
// cada tipo por vuelta, en el orden en que aparecen en el formulario), sin
// pasarse de lo "disponible" de cada tipo -- así el docente marca QUÉ tipos
// quiere (clic, no un número por tipo) y un solo total decide cuántos salen
// en conjunto, igual que ChromaNom.
function distribuirEjercicios(tiposActivos, disponibles, total){
  const asignado = {};
  tiposActivos.forEach(t => asignado[t] = 0);
  let restante = Math.max(0, total|0);
  let i = 0, vueltasSinAsignar = 0;
  while(restante > 0 && tiposActivos.length){
    const tipo = tiposActivos[i % tiposActivos.length];
    if(asignado[tipo] < (disponibles[tipo]||0)){
      asignado[tipo]++;
      restante--;
      vueltasSinAsignar = 0;
    } else {
      vueltasSinAsignar++;
      if(vueltasSinAsignar >= tiposActivos.length) break; // ningún tipo marcado tiene más capacidad
    }
    i++;
  }
  return asignado;
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
// Masa molar de una fórmula real (soporta paréntesis, ej. Fe₂(SO₄)₃),
// calculada con las masas atómicas reales de ELEMENTS (juego.html) -- no
// depende de que esa fórmula exacta tenga ya una entrada en el grupo
// mol-masa de banco.js, así que sirve para CUALQUIER especie que aparezca
// en una ecuación de balanceo real.
function masaMolarDe(formula){
  if(!masaMolarDe._porSimbolo){
    const m = {};
    Object.values(B.ELEMENTS||{}).forEach(e=>{ m[e.sym]=e.mass; });
    masaMolarDe._porSimbolo = m;
  }
  const porSimbolo = masaMolarDe._porSimbolo;
  const SUB = {'₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9'};
  const f = String(formula).replace(/[₀-₉]/g, d=>SUB[d]||'');
  function procesar(str){
    let i=0, suma=0;
    while(i<str.length){
      if(str[i]==='('){
        let depth=1, j=i+1;
        while(j<str.length && depth>0){ if(str[j]==='(')depth++; else if(str[j]===')')depth--; j++; }
        const dentro = str.slice(i+1, j-1);
        let k=j, num='';
        while(k<str.length && /[0-9]/.test(str[k])){ num+=str[k]; k++; }
        suma += procesar(dentro) * (num?parseInt(num,10):1);
        i=k;
      } else if(/[A-Z]/.test(str[i])){
        let sym = str[i]; i++;
        while(i<str.length && /[a-z]/.test(str[i])){ sym+=str[i]; i++; }
        let num='';
        while(i<str.length && /[0-9]/.test(str[i])){ num+=str[i]; i++; }
        suma += (porSimbolo[sym]||0) * (num?parseInt(num,10):1);
      } else { i++; }
    }
    return suma;
  }
  return Math.round(procesar(f)*1000)/1000;
}

// Reconstruye la ecuación CON coeficientes (banco.js solo guarda
// ecuacion_sin_coef + coeficientes/especies por separado).
function construirEcuacionBalanceada(bal){
  const nIzq = bal.ecuacion_sin_coef.split('→')[0].split('+').length;
  const fmt = idx => (bal.coeficientes[idx]>1 ? bal.coeficientes[idx] : '') + bal.especies[idx];
  const izq = bal.especies.slice(0, nIzq).map((_,i)=>fmt(i)).join(' + ');
  const der = bal.especies.slice(nIzq).map((_,i)=>fmt(i+nIzq)).join(' + ');
  return izq+' → '+der;
}

// Tarjeta de estequiometría: toma una ecuación YA balanceada real de
// banco.js (grupo 'balanceo') y arma un problema de factor-unitario real
// (gramos del primer reactivo -> gramos del último producto), con masas
// molares calculadas de verdad -- no son valores inventados.
function tarjetaEstequiometria(bal, rngFn, numero){
  const datoIdx = 0, pedidoIdx = bal.especies.length - 1;
  const dato = bal.especies[datoIdx], pedido = bal.especies[pedidoIdx];
  const mmDato = masaMolarDe(dato), mmPedido = masaMolarDe(pedido);
  const factor = 1 + Math.floor(rngFn()*3);
  const gramosDato = Math.round(mmDato*factor*100)/100;
  return '<div class="exercise-card">'
    +'<div class="ex-num">Ejercicio '+numero+'</div>'
    +'<div style="font-family:var(--mono);font-size:1rem;font-weight:700;color:var(--cat-t);background:var(--cat-b);border-radius:8px;padding:10px 14px;margin:10px 0">'+construirEcuacionBalanceada(bal)+'</div>'
    +'<p style="font-size:.9rem;margin:8px 0">A partir de <strong>'+gramosDato+' g</strong> de <strong style="font-family:var(--mono)">'+dato+'</strong> (MM='+mmDato+' g/mol), ¿cuántos gramos de <strong style="font-family:var(--mono)">'+pedido+'</strong> (MM='+mmPedido+' g/mol) se producen?</p>'
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

  const disponibles = contarDisponiblesTipo(temas);
  const asignado = distribuirEjercicios(F.tiposEjercicioActivos||[], disponibles, F.numEjercicios||0);

  Object.keys(asignado).forEach(function(tipo){
    const cantidad = asignado[tipo];
    if(!cantidad) return;

    if(tipo==='a-nombrar' || tipo==='b-formula' || tipo==='c-tabla' || tipo==='ox-estado'){
      const gruposCompuestos = temas.filter(t => !TEMAS_SIN_COMPUESTOS.includes(t));
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
    } else if(tipo==='d-estequiometria'){
      let pool = poolPorGrupo(['balanceo']).filter(c => !usados.has(c.id));
      elegirN(pool, Math.min(cantidad, pool.length||cantidad), rngFn, x=>x.id).forEach(b=>{
        usados.add(b.id);
        bloques.push({html:tarjetaEstequiometria(b, rngFn, numero++), esMultiple:false});
      });
    } else if(tipo==='x-errores'){
      const gruposCompuestos = temas.filter(t => !TEMAS_SIN_COMPUESTOS.includes(t));
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
    const practicaBloques = armarBloquesPractica(F, rngEj, usados);
    if(practicaBloques.length){
      bloques.push({html:'<h2 class="sec-tit">Sesión 3 · Trabajo práctico</h2>', esTitulo:true});
      bloques.push.apply(bloques, practicaBloques);
    }
  }
  let numSaberReal = 0;
  if(incluyeEval){
    bloques.push({html:'<h2 class="sec-tit">Evaluación</h2>', esTitulo:true});
    const saberBloques = armarBloquesSaber(F, rngSaber);
    numSaberReal = saberBloques.length;
    if(saberBloques.length) bloques.push.apply(bloques, saberBloques);
    const abiertasBloques = armarBloquesAbiertas(F, rngAbiertas);
    if(abiertasBloques.length) bloques.push.apply(bloques, abiertasBloques);
  }

  return {
    clase: F.tipoDoc,
    etiqueta: (totalVersiones>1 ? 'Versión '+numVersion+' de '+totalVersiones : ''),
    bloques: bloques,
    numSaberReal: numSaberReal
  };
}

/* ───────────── 6b. Hoja de respuestas (burbujas) y rúbrica ───────────── */
// Hoja de respuestas tipo "ICFES": una fila por pregunta Saber 11, con 4
// círculos A-D para que el estudiante rellene a mano -- separada de las
// preguntas (que no llevan marcada la opción correcta en ningún lado, ver
// principio "sin clave de respuestas impresa").
function construirHojaRespuestas(F, numVersion, totalVersiones, numPreguntas){
  let filas = '';
  for(let i=1;i<=numPreguntas;i++){
    filas += '<div class="hr-row"><span class="hr-num">'+i+'.</span>'
      + ['A','B','C','D'].map(l=>'<span class="hr-bub">'+l+'</span>').join('')
      + '</div>';
  }
  const html = '<div class="hoja-resp">'
    + '<h2 class="sec-tit">Hoja de respuestas'+(totalVersiones>1?' — Versión '+numVersion+' de '+totalVersiones:'')+'</h2>'
    + '<div class="hr-meta">Nombre: <span class="hr-linea"></span> Fecha: <span class="hr-linea" style="max-width:140px"></span></div>'
    + '<p class="hr-instr">Rellena por completo el círculo de tu respuesta para cada pregunta.</p>'
    + '<div class="hr-grid">'+filas+'</div>'
    + '</div>';
  return {
    clase: 'hoja-respuestas',
    etiqueta: (totalVersiones>1 ? 'Versión '+numVersion+' de '+totalVersiones : ''),
    bloques: [{html:html, esMultiple:false}]
  };
}

// Rúbrica de evaluación: anexo fijo y genérico (no depende del tema ni de la
// versión) para calificar las preguntas abiertas, con la escala de
// desempeño del MEN (Superior/Alto/Básico/Bajo) ya usada en los colegios
// colombianos -- se arma una sola vez por generación, no una por versión.
function construirRubrica(F){
  const CRITERIOS = [
    ['Fórmula o ecuación química',
      'Escribe la fórmula o ecuación completamente correcta, con las cargas bien cruzadas y, si aplica, balanceada con los coeficientes mínimos.',
      'Escribe la fórmula o ecuación correcta con un error menor (ej. olvida simplificar subíndices) que no afecta la identidad del compuesto.',
      'Escribe una fórmula o ecuación con errores que afectan la carga o el balance, pero muestra que entendió el procedimiento general.',
      'No logra construir una fórmula o ecuación coherente con la información dada.'],
    ['Nomenclatura',
      'Nombra el compuesto correctamente en el o los sistemas pedidos, sin errores de sufijo, prefijo o número de oxidación.',
      'Nombra el compuesto correctamente en al menos un sistema, con un error menor en otro (ej. sufijo -oso/-ico invertido).',
      'Identifica el tipo de compuesto pero comete errores de nomenclatura en todos los sistemas pedidos.',
      'No logra nombrar el compuesto en ningún sistema.'],
    ['Identificación de iones (código de 4 colores)',
      'Separa correctamente catión, anión, hidróxido u oxoanión (según corresponda) e indica la carga correcta de cada uno.',
      'Separa correctamente las partes del compuesto, con un error menor en una carga.',
      'Identifica alguna de las partes del compuesto, pero confunde el tipo de ion o su carga.',
      'No logra separar el compuesto en sus partes.'],
    ['Procedimiento y justificación',
      'Explica con claridad el razonamiento químico detrás de su respuesta, paso a paso.',
      'Explica el razonamiento general, aunque con algún paso poco claro.',
      'Da una respuesta sin explicar el razonamiento, o con una justificación incompleta.',
      'No presenta ningún razonamiento o justificación.']
  ];
  let filas = CRITERIOS.map(function(c){
    return '<tr><td class="rub-crit">'+esc(c[0])+'</td><td>'+esc(c[1])+'</td><td>'+esc(c[2])+'</td><td>'+esc(c[3])+'</td><td>'+esc(c[4])+'</td></tr>';
  }).join('');
  const html = '<div class="rubrica">'
    + '<h2 class="sec-tit">Rúbrica de evaluación (preguntas abiertas)</h2>'
    + '<p class="rub-nota">Escala de desempeño según el Ministerio de Educación Nacional. Úsala como referencia para calificar las preguntas abiertas de cualquiera de las versiones generadas.</p>'
    + '<div class="table-wrapper"><table class="rub-tabla"><thead><tr><th>Criterio</th><th>Superior</th><th>Alto</th><th>Básico</th><th>Bajo</th></tr></thead><tbody>'+filas+'</tbody></table></div>'
    + '</div>';
  return {
    clase: 'rubrica',
    etiqueta: '',
    bloques: [{html:html, esMultiple:false}]
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
  const out = [{html:'<h2 class="sec-tit">Sesión 2 · Información</h2>', esTitulo:true}];
  F.temas.forEach(function(tid){
    const t = temasData.find(x=>x.id===tid);
    if(!t || !t.info) return;
    // Antes se armaba un solo bloque gigante por tema (título + TODA la
    // lectura + esquema + ejemplo) -- un tema con lectura larga no cabía
    // entero en ninguna hoja y el paginador lo sacaba íntegro a una hoja
    // nueva, dejando la anterior vacía (solo rellenada con la cuadrícula
    // de Notas). Ahora cada párrafo/esquema/ejemplo es su PROPIO bloque
    // (solo el título va pegado al primero, para no dejarlo huérfano al
    // final de una hoja), igual que recomienda la nota de ChromaNom.
    const piezas = [];
    (t.info.lectura||[]).forEach(p => piezas.push('<p>'+p+'</p>'));
    if(t.info.esquema){
      let esq = '<div class="esquema"><strong>'+t.info.esquema.raiz+'</strong><ul>';
      (t.info.esquema.ramas||[]).forEach(r=>{ esq += '<li><strong>'+r.t+':</strong> '+(r.items||[]).join(', ')+'</li>'; });
      esq += '</ul></div>';
      piezas.push(esq);
    }
    if(t.ejemplo){
      // Cada parte usa el mismo código de 4 colores MDEC del juego (cat/an/oh/ox)
      // -- se renderiza como chip de color + explicación, no solo texto plano.
      const chips = (t.ejemplo.partes||[]).map(function(p){
        const rol = p[1];
        return '<div style="margin-top:4px"><span style="font-family:var(--mono);font-weight:700;color:var(--'+rol+'-t);background:var(--'+rol+'-b);padding:2px 8px;border-radius:6px;margin-right:6px">'+esc(p[0])+'</span>'+esc(p[2])+'</div>';
      }).join('');
      piezas.push('<div class="ejemplo-resuelto"><strong>Ejemplo resuelto:</strong> <span style="font-family:var(--mono);font-weight:700">'+esc(t.ejemplo.f)+'</span>'+chips+'</div>');
    }
    if(!piezas.length) piezas.push('');
    piezas.forEach(function(pieza, i){
      const html = '<div class="sect-info">'+(i===0?'<h3>'+t.titulo+'</h3>':'')+pieza+'</div>';
      out.push({html:html, esMultiple:false});
    });
  });
  return out;
}

/* ───────────────────────── 7. Paginación tamaño carta ───────────────────────── */
const HOJA_CSS_W = 816, HOJA_CSS_H = 1056;
const CUADRO = 18.9;

// Título del documento (ej. "Taller de ejercicios: Óxidos básicos · Anhídridos
// — Versión 2 de 3"), igual idea que ChromaNom: identifica de un vistazo qué
// hoja es y cuál versión, sin tener que ir a buscar el pie de página.
const TITULO_TIPODOC = {
  completa:'Guía completa', guia:'Guía completa', taller:'Taller de ejercicios',
  evaluacion:'Evaluación', 'hoja-respuestas':'Hoja de respuestas', rubrica:'Rúbrica de evaluación'
};
function tituloDocumento(doc){
  let titulo = TITULO_TIPODOC[doc.clase] || 'Documento';
  if(doc.clase!=='hoja-respuestas' && doc.clase!=='rubrica'){
    const temasData = (window.DOCENTE_DATOS && window.DOCENTE_DATOS.TEMAS) || [];
    const nombres = (doc.F.temas||[]).map(id=>{ const t=temasData.find(x=>x.id===id); return t?t.titulo:id; }).join(' · ');
    if(nombres) titulo += ': '+nombres;
  }
  if(doc.etiqueta) titulo += ' — '+doc.etiqueta;
  return titulo;
}

function crearHoja(doc, esPrimera){
  const hoja = document.createElement('div');
  hoja.className = 'hoja';
  hoja.innerHTML =
    '<div class="hoja-enc'+(esPrimera?' hoja-enc-completo':'')+'">'
      + (esPrimera
        ? '<div class="hoja-enc-top">'
          + '<div>'
            + '<div class="hoja-subtitulo">Química inorgánica'+(doc.F.curso?' · '+esc(doc.F.curso):'')+'</div>'
            + '<div class="hoja-titulo-doc">'+esc(tituloDocumento(doc))+'</div>'
            + '<div class="hoja-datos-row">'+[['Institución',doc.F.colegio],['Docente',doc.F.docente],['Área',doc.F.area]].filter(p=>p[1]).map(p=>'<span>'+p[0]+' <b>'+esc(p[1])+'</b></span>').join('')+'</div>'
            + '<div class="hoja-datos-row">'+[['Grado/curso',doc.F.curso],['Periodo',doc.F.periodo],['Fecha',doc.F.fecha]].filter(p=>p[1]).map(p=>'<span>'+p[0]+' <b>'+esc(p[1])+'</b></span>').join('')+'</div>'
          + '</div>'
          + '<img class="hoja-enc-logo" src="assets/logo.png" alt="IonNom">'
          + '</div>'
          + '<div class="hoja-nombre-row">Nombre del estudiante <span class="hr-linea"></span> Curso <span class="hr-linea" style="min-width:110px"></span></div>'
        : '<div class="hoja-enc-corto">'+esc(tituloDocumento(doc))+' · '+esc(doc.F.colegio||'')+'</div>')
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
    // Si "hojas[idx]" tenía un solo hijo y ERA el que desbordaba, al
    // sacarlo queda con 0 hijos -- alturaContenido() devuelve 0 para una
    // hoja vacía, así que llenarHoja() (más abajo) la interpreta como
    // "toda la hoja está libre" y la llena entera con una cuadrícula de
    // Notas gigante: la página casi en blanco reportada. Se elimina en
    // vez de dejarla así, salvo que sea la portada del documento (con el
    // encabezado institucional completo, que se perdería con ella).
    if(!hojas[idx].querySelector('.hoja-cuerpo').children.length && !hojas[idx].querySelector('.hoja-enc-completo')){
      hojas[idx].remove();
      hojas.splice(idx, 1);
      idx--;
    }
  }

  hojas.forEach(function(h, i){
    llenarHoja(h);
    h.dataset.etiqueta = doc.etiqueta || '';
    const pie = h.querySelector('.hoja-pagina');
    if(pie) pie.textContent = (doc.etiqueta?doc.etiqueta+' — ':'')+'página '+(i+1)+' de '+hojas.length;
  });
  return hojas;
}

// Reparte el espacio libre al final de la hoja entre sus cuadrículas de
// respuesta (.cuad), en incrementos de CUADRO, hasta un tope razonable.
// Si la hoja no tiene ninguna cuadrícula, agrega un bloque de notas.
// scrollHeight NUNCA puede ser menor que clientHeight (es max(contenido,
// caja) por definición del DOM) -- en .hoja-cuerpo (flex:1, estirado al
// alto disponible de la hoja) eso significa que scrollHeight==clientHeight
// siempre que el contenido NO desborde, sin importar cuánto espacio libre
// quede de verdad debajo del último elemento. Para saber cuánto espacio
// libre hay realmente (y poder rellenarlo) hay que medir el borde inferior
// real del último elemento, no scrollHeight.
function alturaContenido(cuerpo){
  // offsetTop es relativo al ancestro posicionado más cercano, que NO
  // necesariamente es cuerpo (puede ser #vista o más arriba) -- con varias
  // hojas apiladas, eso acumula el offset de las hojas anteriores. Medir
  // con getBoundingClientRect() da la posición real en pantalla de cada
  // elemento, así que la resta sí es relativa a cuerpo sin importar su
  // ancestro posicionado.
  const ultimo = cuerpo.lastElementChild;
  if(!ultimo) return 0;
  // getBoundingClientRect() da el borde de la caja, pero NO el margen --
  // los bloques (.exercise-card, .sect-info, .sect-previos) se separan con
  // margin-bottom, no con padding interno, así que ese margen "se escapa"
  // de la medición: "libre" salía más grande de lo real por esos px, y
  // llenarHoja() terminaba agregando más cuadrícula de la que de verdad
  // cabía (la causa real detrás de los desbordes que las redes de
  // seguridad tenían que corregir después).
  const mb = parseFloat(getComputedStyle(ultimo).marginBottom) || 0;
  return ultimo.getBoundingClientRect().bottom - cuerpo.getBoundingClientRect().top + mb;
}

function llenarHoja(hoja){
  const cuerpo = hoja.querySelector('.hoja-cuerpo');
  const cuadros = Array.from(cuerpo.querySelectorAll('.cuad'));
  const libre = cuerpo.clientHeight - alturaContenido(cuerpo);
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
    // Mismo criterio de desborde que usa el resto del código
    // (cuerpo.scrollHeight, no alturaContenido): un desajuste aquí dejaba
    // crecer esta cuadrícula más de lo que después confirmaban como válido
    // paginar() y la red de seguridad, que SÍ miden con scrollHeight --
    // esas desalojaban la cuadrícula entera a una hoja nueva casi vacía en
    // cuanto detectaban el desborde que este chequeo no había visto venir.
    if(cuerpo.scrollHeight > cuerpo.clientHeight + 1){
      cuerpo.removeChild(nota);
      return;
    }
    const cuad = nota.querySelector('.cuad');
    let restante = Math.min(Math.floor((cuerpo.clientHeight - alturaContenido(cuerpo))/CUADRO), 24);
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
  // El tope de 26 cuadros por fila evita que una cuadrícula crezca
  // "absurda" cuando comparte la hoja con otras filas -- pero si hay una
  // sola cuadrícula (un ejercicio solo en su hoja, típicamente una
  // continuación), no hay nada más con qué compararla: aplicar el mismo
  // tope ahí solo deja un hueco en blanco enorme debajo sin ninguna razón
  // visual (el bug reportado), así que en ese caso se deja crecer hasta
  // llenar todo el espacio libre real.
  const topeCuadros = cuadros.length === 1 ? Infinity : 26;
  let restante = Math.min(Math.floor(libre/CUADRO), topeCuadros*cuadros.length);
  let i = 0;
  while(restante > 0){
    const c = cuadros[i % cuadros.length];
    const alturaActual = parseFloat(c.style.height)||0;
    if(alturaActual < CUADRO*topeCuadros){
      c.style.height = (alturaActual + CUADRO) + 'px';
      // Verificación en vivo (igual que el bloque de Notas): estirar un
      // .cuad desplaza todo lo que viene después de él, así que el
      // presupuesto inicial ("libre") puede quedarse corto por
      // redondeos -- si el estiramiento desborda la hoja, se revierte
      // ese último incremento y se detiene, en vez de confiar a ciegas
      // en la aritmética de arriba.
      if(cuerpo.scrollHeight > cuerpo.clientHeight + 1){
        c.style.height = alturaActual + 'px';
        break;
      }
      restante--;
    }
    i++;
    if(i > 200) break;
  }
}

/* ───────────────────────── 8. Orquestación ───────────────────────── */
function construirTodas(F){
  const docs = [];
  const N = F.versiones || 1;
  // La hoja de respuestas (burbujas) va una por versión de evaluación,
  // justo después de esa versión -- igual principio que las sesiones:
  // la guía sale una vez, la evaluación (y su hoja de respuestas) N veces.
  function agregarVersionEval(Fversion, i, total){
    const doc = construirVersion(Fversion, i, total);
    docs.push(doc);
    if(F.incluirHojaResp && doc.numSaberReal>0){
      docs.push(construirHojaRespuestas(F, i, total, doc.numSaberReal));
    }
  }
  if(F.tipoDoc==='completa'){
    // la guía (sesiones 1-3) sale una sola vez; la evaluación sale N veces.
    // tipoDoc:'guia' activa lectura+práctica sin evaluación en construirVersion.
    const guia = construirVersion(Object.assign({}, F, {tipoDoc:'guia'}), 1, 1);
    docs.push(guia);
    for(let i=1;i<=N;i++) agregarVersionEval(Object.assign({}, F, {tipoDoc:'evaluacion'}), i, N);
  } else if(F.tipoDoc==='evaluacion'){
    for(let i=1;i<=N;i++) agregarVersionEval(F, i, N);
  } else {
    for(let i=1;i<=N;i++) docs.push(construirVersion(F, i, N));
  }
  // La rúbrica es un anexo genérico fijo: una sola copia al final de toda la
  // generación (no una por versión), solo si hubo evaluación con preguntas
  // abiertas que calificar con ella.
  const huboEvaluacion = F.tipoDoc==='completa' || F.tipoDoc==='evaluacion';
  if(F.incluirRubricas && huboEvaluacion && F.abiertasCant>0){
    docs.push(construirRubrica(F));
  }
  docs.forEach(d => d.F = F);
  return docs;
}

function leerForm(){
  const temas = Array.from(document.querySelectorAll('.chk-tema:checked')).map(c=>c.value);
  const tiposEjercicioActivos = Array.from(document.querySelectorAll('.chk-tipo-ej:checked')).map(c=>c.dataset.tipo);
  return {
    colegio: document.getElementById('f-colegio').value,
    docente: document.getElementById('f-docente').value,
    curso: document.getElementById('f-curso').value,
    fecha: document.getElementById('f-fecha').value,
    variante: document.getElementById('f-variante').value || 'v1',
    tipoDoc: document.querySelector('input[name="tipoDoc"]:checked').value,
    temas: temas,
    sistema: document.getElementById('f-sistema').value,
    tiposEjercicioActivos: tiposEjercicioActivos,
    numEjercicios: parseInt(document.getElementById('f-num-ejercicios').value,10)||0,
    saberCant: parseInt(document.getElementById('f-saber').value,10)||0,
    abiertasCant: parseInt(document.getElementById('f-abiertas').value,10)||0,
    incluirHojaResp: !!document.getElementById('f-hoja-resp').checked,
    incluirRubricas: !!document.getElementById('f-rubricas').checked,
    versiones: parseInt(document.getElementById('f-versiones').value,10)||1,
    area: document.getElementById('f-area').value,
    periodo: document.getElementById('f-periodo').value
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
  actualizarDisponibilidad();
}

// Actualiza, en vivo, los conteos junto a cada casilla de tema ("41
// ejercicios · 4 preguntas tipo Saber") y junto a cada tipo de ejercicio
// ("N disponibles"), según los temas marcados en este momento -- se llama
// al cargar los bancos y cada vez que cambia una casilla de tema.
function actualizarDisponibilidad(){
  const okBancos = B.estado.banco==='ok' && B.estado.juego==='ok';
  document.querySelectorAll('.tema-chk').forEach(function(label){
    const inp = label.querySelector('.chk-tema');
    const disp = label.querySelector('.tema-disp');
    if(!inp || !disp) return;
    if(!okBancos){ disp.textContent=''; return; }
    const c = contarDisponiblesTema(inp.value);
    disp.textContent = c.nEj+' ejercicios · '+c.nSaber+' preguntas tipo Saber';
  });
  const temasMarcados = Array.from(document.querySelectorAll('.chk-tema:checked')).map(c=>c.value);
  const disponiblesTipo = okBancos ? contarDisponiblesTipo(temasMarcados) : {};
  temasMarcados.forEach(function(tema){
    const tipo = TEMA_A_TIPO_D[tema];
    if(!tipo) return;
    const chk = document.querySelector('.chk-tipo-ej[data-tipo="'+tipo+'"]');
    if(chk && !chk.checked && (disponiblesTipo[tipo]||0) > 0) chk.checked = true;
  });
  document.querySelectorAll('.ej-row').forEach(function(row){
    const inp = row.querySelector('.chk-tipo-ej');
    const disp = row.querySelector('.ej-disp');
    if(!inp || !disp) return;
    const n = disponiblesTipo[inp.dataset.tipo]||0;
    disp.textContent = '('+n+' disponibles)';
    inp.disabled = n===0;
    if(n===0) inp.checked = false;
  });
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
        document.fonts.load('700 16px "JetBrains Mono"'),
        document.fonts.load('400 16px "STIX Two Text"'),
        document.fonts.load('500 16px "STIX Two Text"'),
        document.fonts.load('600 16px "STIX Two Text"'),
        document.fonts.load('700 16px "STIX Two Text"'),
        document.fonts.load('italic 400 16px "STIX Two Text"')
      ].map(p=>p.catch(()=>{})));
    }
    if(document.fonts && document.fonts.ready){
      await document.fonts.ready.catch(()=>{});
    }
    // document.fonts.ready puede resolverse un instante ANTES de que el
    // navegador repinte con la fuente real aplicada (ej. el título pasa de
    // una línea a dos con Fraunces) -- si se mide/pagina justo ahí, el alto
    // disponible de cada hoja se encoge DESPUÉS de haber medido, y
    // llenarHoja() estira la cuadrícula de Notas de más sobre un alto que
    // ya no es el real (la red de seguridad de más abajo termina sacando
    // esa cuadrícula entera a una hoja nueva casi vacía). Se espera a que
    // el navegador complete dos repintados antes de medir nada.
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    const F = leerForm();
    if(!F.temas.length){ alert('Selecciona al menos un tema.'); return; }
    const vista = document.getElementById('vista');
    vista.innerHTML = '';
    const documentos = construirTodas(F);
    documentos.forEach(function(doc, gi){
      const hojas = paginar(doc);
      hojas.forEach(h => {
        const clone = h.cloneNode(true);
        clone.dataset.pgGroup = gi;
        vista.appendChild(clone);
      });
    });
    document.getElementById('s-form').classList.remove('active');
    document.getElementById('s-preview').classList.add('active');
    window.scrollTo(0,0);
    // Red de seguridad final: se ha observado que una hoja sin desborde en
    // #medidor (donde se paginó, oculto) puede terminar con un desborde
    // residual de pocos px una vez clonada en #vista (donde de verdad se ve
    // e imprime) -- probablemente por un subconjunto Unicode de la fuente
    // web (usado por los subíndices/superíndices químicos ₂ ₃ ⁻) que
    // termina de resolverse justo al volverse visible de verdad. Por eso,
    // ya con #vista visible (display:block) y tras dejar pasar dos frames
    // para que el layout/fuentes se asienten del todo, se corrige en el
    // propio #vista cualquier hoja que aún desborde, moviendo su(s)
    // último(s) elemento(s) a una hoja de continuación -- igual técnica
    // que usa paginar() con sus propios bloques, pero sobre el DOM real.
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
    Array.from(vista.querySelectorAll('.hoja')).forEach(function(hoja){
      let actual = hoja, intentos = 0, seMovioAlgo = false;
      while(intentos < 50){
        const cuerpo = actual.querySelector('.hoja-cuerpo');
        if(cuerpo.scrollHeight <= cuerpo.clientHeight + 1 || !cuerpo.lastElementChild) break;
        const sobrante = cuerpo.lastElementChild;
        // El último elemento suele ser la cuadrícula de Notas que
        // llenarHoja() ya agregó en #medidor para llenar el espacio
        // sobrante -- si ESO es lo que desborda acá (por el mismo
        // desajuste de fuentes entre #medidor y #vista), hay que encogerla
        // o quitarla, no mandarla sola a una hoja nueva: eso es justo la
        // página casi en blanco con cuadrícula gigante reportada, porque
        // no es contenido real que necesite su propio espacio.
        if(sobrante.className.includes('notas-finales')){
          const cuad = sobrante.querySelector('.cuad');
          let encogido = false;
          while(cuad && cuerpo.scrollHeight > cuerpo.clientHeight + 1){
            const alturaActual = parseFloat(cuad.style.height)||0;
            if(alturaActual <= 0) break;
            cuad.style.height = Math.max(0, alturaActual - CUADRO) + 'px';
            encogido = true;
          }
          if(cuerpo.scrollHeight > cuerpo.clientHeight + 1) cuerpo.removeChild(sobrante);
          if(encogido || cuerpo.scrollHeight <= cuerpo.clientHeight + 1) break;
          continue;
        }
        cuerpo.removeChild(sobrante);
        const continuacion = crearHoja({F:F}, false);
        continuacion.dataset.pgGroup = hoja.dataset.pgGroup;
        continuacion.dataset.etiqueta = hoja.dataset.etiqueta || '';
        actual.parentNode.insertBefore(continuacion, actual.nextSibling);
        continuacion.querySelector('.hoja-cuerpo').appendChild(sobrante);
        // "continuacion" no la visita el forEach de más abajo (se creó
        // después de tomar la lista de hojas de #vista) -- sin esto se
        // quedaba con el sobrante a su tamaño original y el resto de la
        // hoja en blanco: el bug real detrás de un ejercicio pequeño con
        // un hueco enorme debajo, en vez de la cuadrícula de Notas o el
        // propio ejercicio creciendo para llenar el espacio.
        llenarHoja(continuacion);
        actual = continuacion;
        intentos++;
        seMovioAlgo = true;
      }
      if(!seMovioAlgo){
        // Aunque esta hoja no desbordó, el espacio libre que se midió en
        // #medidor (oculto) para rellenarla puede haber quedado corto del
        // real una vez la hoja se vuelve visible en #vista (mismo
        // desajuste de fuentes) -- eso deja una cuadrícula pequeña con un
        // hueco grande debajo que nunca se corregía, porque solo se volvía
        // a llenar la hoja cuando SÍ desbordaba. Se vuelve a correr aquí,
        // sobre las medidas reales, para completar cualquier relleno que
        // haya quedado corto.
        llenarHoja(hoja);
        return;
      }
      const cuerpoOriginal = hoja.querySelector('.hoja-cuerpo');
      // Si TODO el contenido de "hoja" se movió a hoja(s) de continuación,
      // no queda nada real en ella -- rellenarla con llenarHoja() produce
      // justo el bug reportado: una página casi vacía con una cuadrícula
      // de Notas gigante y ningún ejercicio. Se elimina en vez de
      // rellenarla, salvo que sea la portada del documento (lleva el
      // encabezado institucional completo, que se perdería con ella).
      if(cuerpoOriginal.children.length === 0 && !hoja.querySelector('.hoja-enc-completo')){
        hoja.remove();
      } else {
        // Le queda espacio libre de verdad que llenarHoja() -- ya corrida
        // en #medidor antes de clonar -- no pudo prever. Se vuelve a
        // correr aquí, sobre el DOM real, para no dejar esa hoja a medio
        // llenar.
        llenarHoja(hoja);
      }
    });
    // Renumerar "página X de Y" por documento: mover o eliminar hojas en
    // el paso anterior puede haber cambiado cuántas tiene cada uno.
    const grupos = {};
    Array.from(vista.querySelectorAll('.hoja')).forEach(function(h){
      const g = h.dataset.pgGroup || '';
      (grupos[g] = grupos[g] || []).push(h);
    });
    Object.values(grupos).forEach(function(hs){
      hs.forEach(function(h, i){
        const pie = h.querySelector('.hoja-pagina');
        const etq = h.dataset.etiqueta;
        if(pie) pie.textContent = (etq?etq+' — ':'')+'página '+(i+1)+' de '+hs.length;
      });
    });
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
  B, rng, barajar, elegirN, initBancos, mostrarEstadoBancos, actualizarDisponibilidad,
  generar, volverForm, imprimir, TIPO_ROTULO
};

document.addEventListener('DOMContentLoaded', function(){
  initBancos(mostrarEstadoBancos);
});
})();
