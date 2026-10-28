/* ── Barra de navegación inferior para celular ─────────────────────────────
   Puerto de site-ui.js (ChromaNom) a IonNom. Mismo problema que allá: el
   menú superior solo mostraba un ícono de hamburguesa en celular, y el
   control de tamaño de letra competía por espacio en una barra de 48px.
   Compartido por las 14 páginas vía <script src="assets/ionom-ui.js">:
     - arriba (≤640px): solo el logo (el menú hamburguesa de escritorio
       queda oculto -- la barra de abajo lo reemplaza);
     - abajo: barra fija con ícono + texto (Inicio, Principios, Funciones,
       Juego, Tabla). "Más" abre una hoja con el resto de los módulos, el
       tema claro/oscuro y el control de tamaño de letra (que así deja de
       competir por espacio en la barra superior).
   En PC no cambia nada -- el menú hamburguesa de siempre sigue ahí.
   En el juego la barra se oculta durante una partida para no tapar las
   respuestas (mismo patrón .screen.active / s-portada que ya usa juego.html). */
(function(){
  // Íconos propios en SVG en vez de emoji nativo del sistema operativo: un
  // emoji se ve distinto en Android/iOS/Windows (a veces rompe la alineación
  // o el tamaño), mientras que estos se ven exactamente igual en cualquier
  // dispositivo y heredan el color del texto (currentColor) -- incluido el
  // cambio de color cuando el enlace está activo (.on). Se aplica aquí (la
  // barra inferior y la hoja "Más", generadas por este único archivo) por
  // ser el punto de mayor impacto: se ve en las 14 páginas sin tener que
  // tocar el marcado de cada una.
  var SVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
  var ICO={
    inicio:SVG+'<path d="M4 11l8-7 8 7"/><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9"/></svg>',
    principios:SVG+'<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/></svg>',
    funciones:SVG+'<path d="M9 3h6"/><path d="M10 3v6.5L4.7 18a1.8 1.8 0 0 0 1.5 2.8h11.6a1.8 1.8 0 0 0 1.5-2.8L14 9.5V3"/><path d="M7.5 15h9"/></svg>',
    juego:SVG+'<rect x="2" y="7" width="20" height="10" rx="5"/><path d="M6.5 10v3M5 11.5h3"/><circle cx="16" cy="10.3" r="1"/><circle cx="18" cy="13" r="1"/></svg>',
    tabla:SVG+'<path d="M4 3v17a1 1 0 0 0 1 1h16"/><rect x="7.5" y="13" width="3" height="5"/><rect x="12.5" y="9" width="3" height="9"/><rect x="17.5" y="5" width="3" height="13"/></svg>',
    guia:SVG+'<path d="M14 2.5H6.5a1.5 1.5 0 0 0-1.5 1.5v16a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V8z"/><path d="M14 2.5V8h5.5"/><path d="M12 11.5v6m0 0-2.3-2.3M12 17.5l2.3-2.3"/></svg>',
    reaccion:SVG+'<path d="M9 2h6"/><path d="M10 2v7l-5.2 9a1.8 1.8 0 0 0 1.6 2.7h11.2a1.8 1.8 0 0 0 1.6-2.7L14 9V2"/><circle cx="12.2" cy="16.2" r="1"/><circle cx="9.8" cy="19" r=".7"/></svg>',
    balanceo:SVG+'<path d="M12 2.5v19"/><path d="M5 7h14"/><path d="M8.3 7 12 4"/><path d="M15.7 7 12 4"/><path d="M5 7 2.3 13a2.7 2.7 0 0 0 5.4 0z"/><path d="M19 7l-2.7 6a2.7 2.7 0 0 0 5.4 0z"/></svg>',
    mol:SVG+'<circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="9.5" ry="4"/><ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.5" ry="4" transform="rotate(120 12 12)"/></svg>',
    estequiometria:SVG+'<rect x="4.5" y="2" width="15" height="20" rx="2"/><path d="M8 6.5h8"/><path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01" stroke-width="2.6"/></svg>',
    balanceoAvanzado:SVG+'<path d="M13 2 4.5 13.5H10L9 22l9.5-12H13l1-8Z"/></svg>',
    nomenclash:SVG+'<path d="M5 3 13 11"/><path d="M5 3H3v2l9 9"/><path d="M12 14l6 6"/><path d="M15 17l3-3"/><path d="M19 3 11 11"/><path d="M19 3h2v2l-9 9"/><path d="M9 14 3 20"/></svg>',
    simulador:SVG+'<path d="M9 2.5h3"/><path d="M10.5 2.5V8l-4 7.5a2 2 0 0 0 1.8 3h5.4a2 2 0 0 0 1.8-3l-4-7.5"/><path d="M4 21.5h11"/><circle cx="18" cy="18" r="3.2"/><path d="M19.8 19.8l1.7 1.7"/></svg>',
    atomo:SVG+'<circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="5.5" stroke-dasharray="2 2.5"/><circle cx="12" cy="12" r="9.5"/><circle cx="21.5" cy="12" r="1.4" fill="currentColor"/></svg>',
    configuracion:SVG+'<rect x="3" y="14" width="5" height="6" rx="1"/><rect x="9.5" y="9" width="5" height="6" rx="1"/><rect x="16" y="4" width="5" height="6" rx="1"/><path d="M5.5 16.2v1.8M11 11.2v1.8M13 13v-1.8M18.5 6.2v1.8"/></svg>',
    enlace:SVG+'<circle cx="6.5" cy="12" r="3.5"/><circle cx="17.5" cy="12" r="3.5"/><path d="M10 10.5h4M10 13.5h4"/></svg>',
    docente:SVG+'<path d="M14 2.5H6.5a1.5 1.5 0 0 0-1.5 1.5v16a1.5 1.5 0 0 0 1.5 1.5h11a1.5 1.5 0 0 0 1.5-1.5V8z"/><path d="M14 2.5V8h5.5"/><path d="M8.5 12.5h7M8.5 16h7M8.5 19h4"/></svg>'
  };
  var ITEMS=[
    {href:'index.html',ico:ICO.inicio,txt:'Inicio'},
    {href:'teoria.html',ico:ICO.principios,txt:'Principios'},
    {href:'funciones.html',ico:ICO.funciones,txt:'Funciones'},
    {href:'juego.html',ico:ICO.juego,txt:'Juego'},
    {href:'tabla.html',ico:ICO.tabla,txt:'Tabla'}
  ];
  var MAS=[
    {href:'atomo.html',ico:ICO.atomo,txt:'Teoría Atómica'},
    {href:'configuracion.html',ico:ICO.configuracion,txt:'Configuración Electrónica'},
    {href:'enlace.html',ico:ICO.enlace,txt:'Enlace Químico'},
    {href:'guia.html',ico:ICO.guia,txt:'Guía descargable'},
    {href:'reacciones.html',ico:ICO.reaccion,txt:'Tipos de Reacción'},
    {href:'balanceo.html',ico:ICO.balanceo,txt:'Balanceo'},
    {href:'moles.html',ico:ICO.mol,txt:'Mol y Masa Molar'},
    {href:'estequiometria.html',ico:ICO.estequiometria,txt:'Estequiometría'},
    {href:'balanceo-avanzado.html',ico:ICO.balanceoAvanzado,txt:'Balanceo Avanzado'},
    {href:'nomenClash.html',ico:ICO.nomenclash,txt:'NomenClash'},
    {href:'simulador.html',ico:ICO.simulador,txt:'Simulador'},
    {href:'docente.html',ico:ICO.docente,txt:'Generador Docente'}
  ];
  var page=(location.pathname.split('/').pop()||'index.html').toLowerCase();

  // La docente pidió quitar el tema oscuro del sitio: solo tema claro,
  // sin importar la preferencia del sistema operativo del celular (eso
  // causaba que el sitio se viera oscuro de entrada para cualquier
  // estudiante con el modo oscuro activado en su teléfono, sin que nadie
  // lo hubiera pedido). Se fuerza aquí, después de que cada página ya
  // corrió su propio script de tema (este archivo se carga al final del
  // <body>), así que pisa cualquier 'dark' que esa página haya elegido por
  // preferencia del sistema o por un valor viejo guardado en localStorage.
  // NomenClash.html queda fuera a propósito: su "oscuro" es la identidad
  // visual del minijuego ("Alquimia Oscura"), no una preferencia de tema
  // general -- forzarlo a su variante "clara" (pergamino) cambiaría la
  // apariencia del juego, no solo el tema.
  function forzarTemaClaro(){
    document.documentElement.setAttribute('data-theme','light');
    try{ localStorage.setItem('ionom-theme','light'); }catch(e){}
    var tb=document.getElementById('theme-btn');
    if(tb) tb.style.display='none';
  }

  function css(){
    var s=document.createElement('style');
    s.textContent=
      '#bnav,#bnav-sheet,#bnav-backdrop{display:none}'+
      '@media(max-width:640px){'+
        '.site-nav .nav-right>.font-ctrl,.site-nav .nav-right>#theme-btn,.site-nav .nav-right>.ham-btn{display:none!important}'+
        '.site-nav{flex-wrap:nowrap!important;min-height:52px!important;height:52px!important;padding:0 14px!important}'+
        '.site-nav .nav-brand img{height:26px!important}'+
        'body.has-bnav{padding-bottom:calc(64px + env(safe-area-inset-bottom))}'+
        '#bnav{display:flex;position:fixed;left:0;right:0;bottom:0;z-index:1000;'+
          'background:rgba(255,255,255,.96);border-top:1px solid var(--brd,#dfe7ef);box-shadow:0 -4px 16px rgba(13,34,51,.06);'+
          'padding:4px 2px calc(4px + env(safe-area-inset-bottom));justify-content:space-around}'+
        '#bnav a,#bnav button{flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;'+
          'min-height:52px;padding:4px 1px;border:none;background:none;border-radius:10px;cursor:pointer;'+
          'color:var(--tx2,#2a3f52);text-decoration:none;font-family:var(--sans,sans-serif);'+
          'font-size:10.5px;font-weight:600;line-height:1.1}'+
        '#bnav .bi{font-size:19px;line-height:1}'+
        '#bnav .bi svg{width:21px;height:21px;display:block;margin:0 auto}'+
        '#bnav-sheet a svg{width:21px;height:21px;flex-shrink:0}'+
        '#bnav .bt{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}'+
        '#bnav .on{background:var(--an-b,#e0f2fe);color:var(--an-t,#0d4a73);font-weight:800}'+
        '#bnav a:focus-visible,#bnav button:focus-visible{outline:3px solid var(--nav,#0d4a73);outline-offset:-3px}'+
        'body.bnav-hide #bnav{display:none}'+
        'body.bnav-hide.has-bnav{padding-bottom:0}'+
        '#bnav-backdrop.open{display:block;position:fixed;inset:0;background:rgba(10,30,50,.45);z-index:1001}'+
        '#bnav-sheet.open{display:block;position:fixed;left:0;right:0;bottom:0;max-height:78vh;overflow-y:auto;z-index:1002;background:#fff;'+
          'border-radius:18px 18px 0 0;padding:14px 16px calc(18px + env(safe-area-inset-bottom));'+
          'box-shadow:0 -10px 30px rgba(0,0,0,.25);font-family:var(--sans,sans-serif);color:var(--tx,#0d2d42)}'+
        '#bnav-sheet h3{font-size:.8rem;text-transform:uppercase;letter-spacing:.1em;color:var(--tx2,#2a3f52);margin:4px 0 10px}'+
        '#bnav-sheet a{display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;'+
          'text-decoration:none;color:var(--tx,#0d2d42);font-weight:700;font-size:1rem;background:var(--surf2,#f0f7ff);margin-bottom:8px;min-height:48px}'+
        '#bnav-sheet .tz{display:flex;align-items:center;gap:10px;margin-top:6px}'+
        '#bnav-sheet .tz button{min-width:48px;min-height:44px;border-radius:10px;border:1.5px solid var(--brd,#d0e6f5);background:#fff;'+
          'font-weight:800;font-size:1rem;color:var(--tx,#0d2d42);cursor:pointer;font-family:inherit}'+
        '#bnav-sheet .tz span{min-width:3.5em;text-align:center;font-family:var(--mono,monospace);font-weight:700}'+
        '#bnav-sheet .tema{display:flex;align-items:center;gap:10px;margin-top:6px}'+
        '#bnav-sheet .tema button{flex:1;min-height:44px;border-radius:10px;border:1.5px solid var(--brd,#d0e6f5);background:#fff;'+
          'font-weight:700;font-size:.9rem;color:var(--tx,#0d2d42);cursor:pointer;font-family:inherit}'+
        '#bnav-sheet .cerrar{width:100%;margin-top:12px;min-height:44px;border:none;border-radius:12px;'+
          'background:var(--nav,#0d4a73);color:#fff;font-weight:700;font-size:.95rem;font-family:inherit;cursor:pointer}'+
      '}'+
      '@media print{#bnav,#bnav-sheet,#bnav-backdrop,.scroll-hint{display:none!important}}';
    document.head.appendChild(s);
  }

  function build(){
    if(!document.querySelector('.site-nav')) return;
    css();
    var nav=document.createElement('nav');
    nav.id='bnav';
    nav.setAttribute('aria-label','Menú principal');
    var enMas=MAS.some(function(m){return m.href===page;});
    nav.innerHTML=ITEMS.map(function(it){
      var on=(it.href===page)||(page===''&&it.href==='index.html');
      return '<a href="'+it.href+'"'+(on?' class="on" aria-current="page"':'')+'><span class="bi" aria-hidden="true">'+it.ico+'</span><span class="bt">'+it.txt+'</span></a>';
    }).join('')+
      '<button type="button" id="bnav-mas" aria-haspopup="dialog" aria-expanded="false"'+(enMas?' class="on"':'')+'><span class="bi" aria-hidden="true">☰</span><span class="bt">Más</span></button>';
    document.body.appendChild(nav);

    var back=document.createElement('div'); back.id='bnav-backdrop';
    var sheet=document.createElement('div'); sheet.id='bnav-sheet';
    sheet.setAttribute('role','dialog'); sheet.setAttribute('aria-label','Más opciones');
    sheet.innerHTML='<h3>Más módulos</h3>'+
      MAS.map(function(m){return '<a href="'+m.href+'"><span aria-hidden="true">'+m.ico+'</span>'+m.txt+'</a>';}).join('')+
      '<h3 style="margin-top:14px">Tamaño del texto</h3>'+
      '<div class="tz"><button type="button" data-fs="dec" aria-label="Reducir texto">A−</button>'+
      '<span id="bnav-fs-label"></span>'+
      '<button type="button" data-fs="inc" aria-label="Aumentar texto">A+</button></div>'+
      (page==='nomenclash.html'?('<h3 style="margin-top:14px">Tema</h3>'+
      '<div class="tema"><button type="button" id="bnav-theme-btn"></button></div>'):'')+
      '<button type="button" class="cerrar">Cerrar</button>';
    document.body.appendChild(back); document.body.appendChild(sheet);
    document.body.classList.add('has-bnav');

    var masBtn=document.getElementById('bnav-mas');
    function syncLabels(){
      var fd=document.getElementById('font-disp');
      var l=document.getElementById('bnav-fs-label');
      if(l) l.textContent=fd?fd.textContent:'';
      var tb=document.getElementById('theme-btn');
      var btb=document.getElementById('bnav-theme-btn');
      if(btb) btb.textContent=(tb&&tb.textContent==='☀️')?'☀️ Modo claro':'🌙 Modo oscuro';
    }
    function abrir(){ sheet.classList.add('open'); back.classList.add('open'); masBtn.setAttribute('aria-expanded','true'); syncLabels(); }
    function cerrar(){ sheet.classList.remove('open'); back.classList.remove('open'); masBtn.setAttribute('aria-expanded','false'); }
    masBtn.addEventListener('click',abrir);
    back.addEventListener('click',cerrar);
    sheet.querySelector('.cerrar').addEventListener('click',cerrar);
    document.addEventListener('keydown',function(e){ if(e.key==='Escape') cerrar(); });
    // Los botones de tamaño reutilizan fontInc()/fontDec(), ya definidos en
    // cada página (ver el bloque "Tamaño de letra persistente" al final del
    // <body>) -- no hay lógica nueva, solo se exponen aquí también.
    sheet.querySelectorAll('[data-fs]').forEach(function(b){
      b.addEventListener('click',function(){
        var fn=b.getAttribute('data-fs')==='inc'?window.fontInc:window.fontDec;
        if(typeof fn==='function') fn();
        syncLabels();
      });
    });
    var btnTema=document.getElementById('bnav-theme-btn');
    if(btnTema) btnTema.addEventListener('click',function(){
      var tb=document.getElementById('theme-btn');
      if(tb) tb.click();
      syncLabels();
    });

    // Juego: ocultar la barra mientras hay una partida en pantalla (mismo
    // patrón .screen.active / s-portada que ya usa juego.html).
    if(page==='juego.html'){
      var revisar=function(){
        var activa=document.querySelector('.screen.active');
        var enPortada=!activa||activa.id==='s-portada';
        document.body.classList.toggle('bnav-hide',!enPortada);
      };
      revisar();
      new MutationObserver(revisar).observe(document.body,{subtree:true,attributes:true,attributeFilter:['class']});
    }
  }

  // Tablas más anchas que la pantalla: aviso de que se pueden deslizar.
  function avisosTablas(){
    document.querySelectorAll('table').forEach(function(t){
      var c=t.parentElement;
      if(!c) return;
      var ox=getComputedStyle(c).overflowX;
      var desborda=(ox==='auto'||ox==='scroll')&&c.scrollWidth>c.clientWidth+4&&c.offsetParent!==null;
      var prev=c.previousElementSibling;
      var tiene=prev&&prev.classList&&prev.classList.contains('scroll-hint');
      if(desborda&&!tiene){
        var h=document.createElement('div');
        h.className='scroll-hint';
        h.textContent='↔ Desliza para ver toda la tabla';
        c.parentElement.insertBefore(h,c);
      }else if(!desborda&&tiene){ prev.remove(); }
    });
  }
  var tAvisos=null;
  function programarAvisos(){ clearTimeout(tAvisos); tAvisos=setTimeout(avisosTablas,250); }

  // Marca de agua de compuestos inorgánicos al fondo (estilos en
  // assets/ionom.css + assets/ionom-fondo.svg).
  function fondo(){
    if(document.getElementById('ion-mol-bg')) return;
    var d=document.createElement('div'); d.id='ion-mol-bg'; d.setAttribute('aria-hidden','true');
    document.body.insertBefore(d,document.body.firstChild);
  }

  // Registro de páginas visitadas: el mapa de index.html lo lee para marcar
  // con ✓ las estaciones ya recorridas y sugerir la siguiente parada.
  function registrarVisita(){
    try{
      var v=JSON.parse(localStorage.getItem('ionom-visitas')||'{}')||{};
      var nombre=(location.pathname.split('/').pop()||'index.html');
      if(nombre.toLowerCase()==='index.html') return;
      v[nombre]=Date.now();
      localStorage.setItem('ionom-visitas',JSON.stringify(v));
    }catch(e){}
  }

  function start(){
    registrarVisita();
    if(page!=='nomenclash.html') forzarTemaClaro();
    fondo();
    build();
    programarAvisos();
    window.addEventListener('resize',programarAvisos);
    window.addEventListener('load',programarAvisos);
    document.addEventListener('click',programarAvisos);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start);
  else start();
})();
