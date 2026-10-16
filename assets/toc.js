/* ── Índice flotante para páginas largas de teoría+práctica ──────────────
   reacciones.html, balanceo.html, moles.html, estequiometria.html y
   balanceo-avanzado.html son una sola página de scroll continuo (hasta
   +5000px en estequiometria.html) sin forma de saltar directo a una
   sección. Este script arma, a partir de los <h2> que ya tiene la página,
   un botón flotante "Índice" (abajo a la izquierda, para no chocar con los
   controles de audio/menú que ya viven abajo a la derecha) que abre un
   panel con enlaces a cada sección. No depende de marcado nuevo en cada
   página: basta con los <h2> que ya existen. */
(function(){
  function slugify(text){
    return text.toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g,'')
      .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || 'seccion';
  }

  function start(){
    var heads = Array.prototype.slice.call(document.querySelectorAll('h2'))
      .filter(function(h){ return h.offsetParent !== null || h.closest('.sect,.screen'); });
    if (heads.length < 2) return; // no vale la pena un índice para 0-1 secciones

    var used = {};
    var items = heads.map(function(h){
      var text = h.textContent.replace(/🔊.*$/,'').trim();
      var base = slugify(text);
      var id = base; var n = 2;
      while (used[id]) { id = base + '-' + n++; }
      used[id] = true;
      if (!h.id) h.id = id;
      return {id: h.id, text: text};
    });

    var style = document.createElement('style');
    style.textContent =
      '#toc-fab{position:fixed;bottom:18px;left:18px;z-index:50;width:46px;height:46px;display:flex;align-items:center;justify-content:center;background:var(--nav,#0d4a73);color:#fff;border:none;border-radius:50%;font-size:1.2rem;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.3)}'+
      '#toc-panel{display:none;position:fixed;bottom:74px;left:18px;z-index:51;max-width:min(86vw,320px);max-height:60vh;overflow-y:auto;background:var(--surf,#fff);border:1px solid var(--brd,#d0e6f5);border-radius:var(--r,16px);box-shadow:var(--sh2,0 6px 32px rgba(13,74,115,.16));padding:10px}'+
      '#toc-panel.open{display:block}'+
      /* En móvil, ionom-ui.js agrega una barra inferior fija (#bnav, ~60px +
         el área segura del notch) — el índice flotante sube por encima para
         no quedar tapado por ella ni taparla. */
      '@media(max-width:640px){#toc-fab{bottom:calc(70px + env(safe-area-inset-bottom))}#toc-panel{bottom:calc(126px + env(safe-area-inset-bottom))}}'+
      '#toc-panel h4{font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.08em;color:var(--dimmer,#5a7a96);padding:4px 8px 8px}'+
      '#toc-panel a{display:block;padding:8px 10px;border-radius:8px;color:var(--tx,#0d2d42);text-decoration:none;font-size:.85rem;font-weight:600;line-height:1.3}'+
      '#toc-panel a:hover,#toc-panel a:focus-visible{background:var(--an-b,#dbebf4);color:var(--an-t,#00659e)}'+
      '@media print{#toc-fab,#toc-panel{display:none!important}}';
    document.head.appendChild(style);

    var fab = document.createElement('button');
    fab.id = 'toc-fab'; fab.type = 'button';
    fab.title = 'Índice de la página'; fab.setAttribute('aria-label','Índice de la página');
    fab.setAttribute('aria-expanded','false');
    fab.textContent = '📑';

    var panel = document.createElement('div');
    panel.id = 'toc-panel'; panel.setAttribute('role','navigation'); panel.setAttribute('aria-label','Índice de secciones');
    var html = '<h4>En esta página</h4>';
    items.forEach(function(it){
      html += '<a href="#'+it.id+'">'+it.text+'</a>';
    });
    panel.innerHTML = html;

    document.body.appendChild(fab);
    document.body.appendChild(panel);

    fab.addEventListener('click', function(){
      var open = panel.classList.toggle('open');
      fab.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    panel.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ panel.classList.remove('open'); });
    });
    document.addEventListener('click', function(e){
      if (!panel.contains(e.target) && e.target !== fab) panel.classList.remove('open');
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') panel.classList.remove('open');
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
