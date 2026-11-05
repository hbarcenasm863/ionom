/* ═══════════════════════════════════════════════════════════════════════
   IonNom — utilidades de ph.html, industria.html y modelos.html.
   - .glos button      → voltea la tarjeta (pre-entrenamiento)
   - .pasos            → un paso del ejemplo resuelto a la vez
   - SED10.clasificador(box, items, cats, alTerminar)
   - SED10.practica(box, banco, n, titulo) → preguntas de opción múltiple del
     mismo banco del Juego (banco.js), con 3 intentos y explicación
   ═══════════════════════════════════════════════════════════════════════ */
(function(){
'use strict';
function $$(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));}
function barajar(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;}return a;}
function glosario(){$$('.glos button').forEach(function(b){b.setAttribute('aria-pressed','false');b.addEventListener('click',function(){var on=!b.classList.contains('on');b.classList.toggle('on',on);b.setAttribute('aria-pressed',on?'true':'false');});});}
function pasos(){
  $$('.pasos').forEach(function(box){
    var li=$$('li',box);if(!li.length)return;var n=1;
    var ctl=document.createElement('div');ctl.className='pasos-ctl';
    ctl.innerHTML='<button type="button" class="btn-s prim" data-a="sig"></button><button type="button" class="btn-s" data-a="todo">Ver todos</button><button type="button" class="btn-s" data-a="rei">↺ Empezar de nuevo</button>';
    box.appendChild(ctl);
    function pinta(nuevo){li.forEach(function(x,i){x.classList.toggle('oculto',i>=n);x.classList.toggle('nuevo',nuevo&&i===n-1);});
      var s=ctl.querySelector('[data-a=sig]');s.disabled=n>=li.length;s.textContent=n>=li.length?'✓ Ejemplo completo':'Siguiente paso ('+(n+1)+' de '+li.length+') →';}
    ctl.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var a=b.dataset.a;
      if(a==='sig'&&n<li.length){n++;pinta(true);}else if(a==='todo'){n=li.length;pinta(false);}else if(a==='rei'){n=1;pinta(false);}});
    pinta(false);
  });
}
function clasificador(box,items,cats,alTerminar){
  if(typeof box==='string')box=document.getElementById(box);if(!box)return;
  var hechos=0,bien=0;box.classList.add('clasif');
  box.innerHTML=items.map(function(it,i){return '<div class="item" data-i="'+i+'">'+it.t+'<div class="seg">'+(it.opc||cats).map(function(c){return '<button type="button" data-c="'+c+'">'+c+'</button>';}).join('')+'</div><small aria-live="polite"></small></div>';}).join('');
  box.addEventListener('click',function(e){
    var b=e.target.closest('button');if(!b)return;var card=b.closest('.item'),it=items[+card.dataset.i];if(card.dataset.listo)return;
    var ok=b.dataset.c===it.ok;if(!card.dataset.intento){card.dataset.intento='1';if(ok)bien++;}
    if(ok){card.dataset.listo='1';card.classList.remove('fail');card.classList.add('ok');b.classList.add('on');$$('button',card).forEach(function(x){x.disabled=true;});card.querySelector('small').innerHTML='✓ '+it.fb;hechos++;if(hechos===items.length&&alTerminar)alTerminar(bien,items.length);}
    else{card.classList.add('fail');b.disabled=true;card.querySelector('small').innerHTML='✗ No es «'+b.dataset.c+'». '+(it.pista||'Revisa la explicación de arriba e inténtalo otra vez.');}
  });
}
function practica(box,banco,n,titulo,juego){
  if(typeof box==='string')box=document.getElementById(box);if(!box||!banco)return;
  var pool=banco.filter(function(q){return !q.tipo||q.tipo==='mc';}),qs=barajar(pool).slice(0,n||8),prim=qs.map(function(){return null;});
  var h='<div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:8px;margin-bottom:10px"><b>✏️ '+(titulo||'Practica')+'</b><span class="sc" aria-live="polite" style="font-family:var(--mono);font-size:.78rem;color:var(--an-t)"></span></div>';
  qs.forEach(function(q,i){var op=barajar([q.ok].concat(q.d));
    h+='<div class="prac-q" data-i="'+i+'"><div class="pq-n">Pregunta '+(i+1)+' de '+qs.length+'</div><div class="pq-q">'+q.q+'</div><div class="opts">'+op.map(function(o){return '<button type="button" class="opt">'+o+'</button>';}).join('')+'</div><div class="fb" aria-live="polite"></div></div>';});
  h+='<div class="calc-row"><button type="button" class="btn-s otra">🔀 Otras preguntas</button>'+(juego?'<a class="btn-s" href="juego.html?g='+juego+'">🎮 Jugar con las '+banco.length+' preguntas del tema</a>':'')+'</div>';
  box.innerHTML=h;
  function sc(){var ok=prim.filter(function(x){return x===true;}).length,d=prim.filter(function(x){return x!==null;}).length;box.querySelector('.sc').textContent='Al primer intento: '+ok+' de '+qs.length+(d<qs.length?' · faltan '+(qs.length-d):' · ¡terminaste!');}
  sc();
  box.onclick=function(e){var b=e.target.closest('button');if(!b)return;
    if(b.classList.contains('otra')){practica(box,banco,n,titulo,juego);return;}
    if(!b.classList.contains('opt')||b.disabled)return;
    var card=b.closest('.prac-q'),i=+card.dataset.i,q=qs[i],ok=b.textContent===q.ok,fb=card.querySelector('.fb');
    if(prim[i]===null)prim[i]=ok;
    if(ok){b.classList.add('si');$$('.opt',card).forEach(function(x){x.disabled=true;});fb.className='fb show ok';fb.innerHTML='<b>✓ ¡Correcto!</b> '+q.x;}
    else{b.classList.add('no');b.disabled=true;card.dataset.mal=(+card.dataset.mal||0)+1;fb.className='fb show fail';
      fb.innerHTML=+card.dataset.mal>=2?'<b>✗ Tampoco.</b> La respuesta es «'+q.ok+'». '+q.x:'<b>✗ No es correcto. Inténtalo otra vez</b> (si fallas de nuevo, verás la explicación).';
      if(+card.dataset.mal>=2)$$('.opt',card).forEach(function(x){x.disabled=true;if(x.textContent===q.ok)x.classList.add('si');});}
    sc();};
}
function iniciar(){glosario();pasos();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciar);else iniciar();
window.SED10={clasificador:clasificador,practica:practica};
})();
