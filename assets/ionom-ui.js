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
  var ITEMS=[
    {href:'index.html',ico:'🏠',txt:'Inicio'},
    {href:'teoria.html',ico:'📖',txt:'Principios'},
    {href:'funciones.html',ico:'🧪',txt:'Funciones'},
    {href:'juego.html',ico:'🎮',txt:'Juego'},
    {href:'tabla.html',ico:'📊',txt:'Tabla'}
  ];
  var MAS=[
    {href:'guia.html',ico:'📘',txt:'Guía descargable'},
    {href:'reacciones.html',ico:'⚗️',txt:'Tipos de Reacción'},
    {href:'balanceo.html',ico:'⚖️',txt:'Balanceo'},
    {href:'moles.html',ico:'⚛️',txt:'Mol y Masa Molar'},
    {href:'estequiometria.html',ico:'🧮',txt:'Estequiometría'},
    {href:'balanceo-avanzado.html',ico:'⚡',txt:'Balanceo Avanzado'},
    {href:'generador.html',ico:'⚙️',txt:'Generador'},
    {href:'nomenClash.html',ico:'⚔️',txt:'NomenClash'},
    {href:'simulador.html',ico:'🔬',txt:'Simulador'}
  ];
  var page=(location.pathname.split('/').pop()||'index.html').toLowerCase();

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
      '<h3 style="margin-top:14px">Tema</h3>'+
      '<div class="tema"><button type="button" id="bnav-theme-btn"></button></div>'+
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
    document.getElementById('bnav-theme-btn').addEventListener('click',function(){
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

  function start(){
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
