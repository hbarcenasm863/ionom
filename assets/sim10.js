/* ═══════════════════════════════════════════════════════════════════════
   IonNom — simulaciones en canvas de los temas de la SED para 10.°
   Cada página pone <div class="sim" data-sim="nombre"></div>:
   - vasoPH   (ph.html)        gotas de ácido fuerte, ácido débil y base
   - haber    (industria.html) reactor N₂ + 3 H₂ → 2 NH₃ y reactivo limitante
   - cilindro (modelos.html)   gas en un cilindro con émbolo: la presión sale
                               de los choques de las partículas (Boyle/Charles)
   - gases    (gases.html)     laboratorio con las leyes de Boyle, Charles,
                               Gay-Lussac, Avogadro, gas ideal y Dalton
   - disolucion, preparar (soluciones.html) proceso de disolución y
                               preparación/dilución de una solución
   Se ajustan al ancho de la pantalla, se pausan solas cuando no se ven y
   arrancan en pausa si el sistema pide «reducir movimiento». Son MODELOS:
   cada partícula representa muchísimas partículas reales.
   ═══════════════════════════════════════════════════════════════════════ */
(function(){
'use strict';
var PI2=Math.PI*2;
function el(tag,attrs,html){var x=document.createElement(tag);for(var k in attrs||{})x.setAttribute(k,attrs[k]);if(html!=null)x.innerHTML=html;return x;}
function coma(v,d){return v.toFixed(d).replace('.',',');}
function rnd(a,b){return a+Math.random()*(b-a);}
function gauss(){return (Math.random()+Math.random()+Math.random()-1.5)*1.15;}
function lienzo(box,ratio,alt){
  var cv=el('canvas',{role:'img','aria-label':alt||'Simulación'});cv.className='sim-cv';box.appendChild(cv);
  var ctx=cv.getContext('2d'),o={cv:cv,ctx:ctx,W:0,H:0};
  o.size=function(){var dpr=Math.min(window.devicePixelRatio||1,2),full=box.classList.contains('en-pantalla'),w=full?Math.max(280,Math.min(box.clientWidth-40,1500,Math.round((window.innerHeight-150)/ratio))):Math.max(280,Math.min(box.clientWidth||640,900));
    o.W=w;o.H=Math.round(w*ratio);cv.style.width=w+'px';cv.style.height=o.H+'px';cv.width=Math.round(w*dpr);cv.height=Math.round(o.H*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);};
  o.size();
  o.pos=function(e){var r=cv.getBoundingClientRect();return {x:(e.clientX-r.left)*o.W/r.width,y:(e.clientY-r.top)*o.H/r.height};};
  return o;
}
function animar(L,paso){
  var vis=true,corre=!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches),ult=0,id=0;
  function cuadro(t){id=0;var dt=ult?Math.min(0.05,(t-ult)/1000):0.016;ult=t;paso(corre?dt:0);if(vis&&corre)pedir();else ult=0;}
  function pedir(){if(!id)id=requestAnimationFrame(cuadro);}
  if('IntersectionObserver' in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting;if(vis)pedir();}).observe(L.cv);
  window.addEventListener('resize',function(){L.size();pedir();});
  pedir();
  return {get corre(){return corre;},alternar:function(){corre=!corre;if(corre)pedir();return corre;},dibujar:pedir,play:function(){corre=true;pedir();}};
}
function botonPausa(A,cont){var b=el('button',{type:'button',class:'btn-s'},A.corre?'⏸ Pausar':'▶ Animar');
  b.addEventListener('click',function(){b.textContent=A.alternar()?'⏸ Pausar':'▶ Animar';});cont.appendChild(b);return b;}
function fila(box){var f=el('div',{class:'sim-ctl'});box.appendChild(f);return f;}
function deslizador(cont,etq,min,max,paso,val,fn){var l=el('label',{class:'sim-rng'});l.innerHTML='<span>'+etq+'</span>';
  var r=el('input',{type:'range',min:min,max:max,step:paso,value:val});var v=el('b');l.appendChild(r);l.appendChild(v);cont.appendChild(l);
  function upd(){v.textContent=fn(+r.value);}r.addEventListener('input',upd);upd();r._upd=upd;return r;}
function boton(cont,txt,cls,fn){var b=el('button',{type:'button',class:'btn-s'+(cls?' '+cls:'')},txt);b.addEventListener('click',fn);cont.appendChild(b);return b;}
function nota(box,html){var n=el('div',{class:'sim-msg','aria-live':'polite'},html);box.appendChild(n);return n;}
function mover(p,dt,x0,y0,x1,y1){p.x+=p.vx*dt;p.y+=p.vy*dt;var b=false;if(p.x<x0){p.x=x0;p.vx=Math.abs(p.vx);b=true;}if(p.x>x1){p.x=x1;p.vx=-Math.abs(p.vx);b=true;}if(p.y<y0){p.y=y0;p.vy=Math.abs(p.vy);b=true;}if(p.y>y1){p.y=y1;p.vy=-Math.abs(p.vy);b=true;}if(b&&p.a!=null)p.a=Math.atan2(p.vy,p.vx);}
function circ(ctx,x,y,r,c){ctx.beginPath();ctx.arc(x,y,r,0,PI2);ctx.fillStyle=c;ctx.fill();}
function texto(ctx,t,x,y,c,f,al){ctx.fillStyle=c||'#0d2d42';ctx.font=f||'700 11px Outfit,sans-serif';ctx.textAlign=al||'left';ctx.fillText(t,x,y);}

function pildoras10(cont,ops,ini,fn){var s=el('div',{class:'seg',role:'group'});ops.forEach(function(o){var b=el('button',{type:'button'},o[1]);b.dataset.k=o[0];if(o[0]===ini)b.classList.add('on');s.appendChild(b);});
  s.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;s.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b);});fn(b.dataset.k);});cont.appendChild(s);return s;}

var SIM={};

/* ── 1. Un vaso con agua: gotas de ácido y de base ───────────────────────
   Cada gota agrega 6 «partículas modelo»: HCl → 6 H₃O⁺ + 6 Cl⁻ (fuerte,
   todo ionizado); CH₃COOH → 6 HA casi sin ionizar (débil: se ioniza y se
   vuelve a formar, equilibrio); NaOH → 6 OH⁻ + 6 Na⁺. Si un H₃O⁺ choca con
   un OH⁻ se neutralizan y forman agua. El pH se calcula con un modelo de
   conteo: cada partícula representa 1 × 10⁻⁴ mol/L. */
SIM.vasoPH=function(box){
  var L=lienzo(box,0.66,'Vaso con agua: partículas de ácido y base que se mueven y se neutralizan'),ctx=L.ctx;
  var P=[],flashes=[],ph=7,phMostrado=7,exceso=0,ion=0;
  var TIP={H:{c:'#dc2626',r:6,t:'H₃O⁺'},OH:{c:'#2563eb',r:6,t:'OH⁻'},Cl:{c:'#16a34a',r:4,t:'Cl⁻'},Na:{c:'#94a3b8',r:4,t:'Na⁺'},HA:{c:'#f59e0b',r:7,t:'CH₃COOH'},A:{c:'#a16207',r:5,t:'CH₃COO⁻'}};
  function agregar(t,n){var W=L.W;for(var i=0;i<n;i++)P.push({t:t,x:W*0.5+rnd(-12,12),y:L.H*0.2+rnd(-6,6),vx:rnd(-40,40),vy:rnd(40,120),cd:0});}
  var c1=fila(box);
  boton(c1,'💧 Gota de HCl (ácido fuerte)','prim',function(){agregar('H',6);agregar('Cl',6);A.play();});
  boton(c1,'💧 Gota de vinagre (ácido débil)','',function(){agregar('HA',6);A.play();});
  boton(c1,'💧 Gota de NaOH (base fuerte)','',function(){agregar('OH',6);agregar('Na',6);A.play();});
  var c2=fila(box);boton(c2,'↺ Vaciar el vaso','',function(){P=[];flashes=[];exceso=0;ion=0;});
  var msg=nota(box,'');
  function color(p){var c=[[2,'#e11d48'],[4,'#db2777'],[6,'#a855f7'],[7.5,'#7c3aed'],[9,'#2563eb'],[11,'#0d9488'],[14,'#ca8a04']];for(var i=0;i<c.length;i++)if(p<=c[i][0])return c[i][1];return '#ca8a04';}
  function paso(dt){
    var W=L.W,H=L.H,bx=W*0.18,bw=W*0.5,by=H*0.12,bh=H*0.8,x0=bx+8,x1=bx+bw-8,y0=by+bh*0.12,y1=by+bh-8;
    if(dt>0){
      P.forEach(function(p){if(p.a==null)p.a=rnd(0,PI2);p.a+=gauss()*4*dt;var sp=p.t==='HA'?70:95;p.vx+=(Math.cos(p.a)*sp-p.vx)*Math.min(1,3*dt);p.vy+=(Math.sin(p.a)*sp-p.vy)*Math.min(1,3*dt);mover(p,dt,x0,y0,x1,y1);if(p.cd>0)p.cd-=dt;});
      // ácido débil: se ioniza poco a poco
      P.slice().forEach(function(p){if(p.t==='HA'&&Math.random()<0.012*dt){p.t='A';p.cd=0.6;P.push({t:'H',x:p.x+6,y:p.y,vx:rnd(-60,60),vy:rnd(-60,60),cd:0.6});}});
      for(var i=P.length-1;i>=0;i--){var a=P[i];if(!a||a.cd>0)continue;
        for(var j=i-1;j>=0;j--){var b=P[j];if(!b||b.cd>0)continue;var d=Math.hypot(a.x-b.x,a.y-b.y);if(d>12)continue;
          var tipos=a.t+'+'+b.t;
          if(tipos==='H+OH'||tipos==='OH+H'){flashes.push({x:(a.x+b.x)/2,y:(a.y+b.y)/2,t:0.9});P.splice(i,1);P.splice(j,1);break;}
          if((tipos==='HA+OH'||tipos==='OH+HA')){var ha=a.t==='HA'?a:b;ha.t='A';flashes.push({x:(a.x+b.x)/2,y:(a.y+b.y)/2,t:0.9});P.splice(a.t==='OH'?i:j,1);break;}
          if(tipos==='H+A'||tipos==='A+H'){var aa=a.t==='A'?a:b;aa.t='HA';P.splice(a.t==='H'?i:j,1);break;}
        }}
      flashes.forEach(function(f){f.t-=dt;});flashes=flashes.filter(function(f){return f.t>0;});}
    var nH=P.filter(function(p){return p.t==='H';}).length,nOH=P.filter(function(p){return p.t==='OH';}).length,nHA=P.filter(function(p){return p.t==='HA';}).length,nA=P.filter(function(p){return p.t==='A';}).length;
    // como un pH-metro: promedio de unos 3 s del exceso de H₃O⁺ (o de OH⁻)
    var k=dt>0?Math.min(1,dt/3):1;exceso+=((nH-nOH)-exceso)*k;var tot0=nHA+nA;ion+=((tot0?nA/tot0:0)-ion)*k;
    ph=exceso>0.05?-Math.log10(exceso*1e-4):exceso<-0.05?14+Math.log10(-exceso*1e-4):7;ph=Math.max(0,Math.min(14,ph));phMostrado=ph;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle=color(phMostrado);ctx.globalAlpha=0.16;ctx.fillRect(bx,by+bh*0.1,bw,bh*0.9);ctx.globalAlpha=1;
    ctx.strokeStyle='#334155';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(bx,by);ctx.lineTo(bx,by+bh);ctx.lineTo(bx+bw,by+bh);ctx.lineTo(bx+bw,by);ctx.stroke();ctx.lineWidth=1;
    ctx.strokeStyle='rgba(37,99,235,.35)';ctx.beginPath();ctx.moveTo(bx,by+bh*0.1);ctx.lineTo(bx+bw,by+bh*0.1);ctx.stroke();
    P.forEach(function(p){var T=TIP[p.t];if(p.t==='HA'){circ(ctx,p.x-3,p.y,5,T.c);circ(ctx,p.x+4,p.y,3.5,'#dc2626');}else circ(ctx,p.x,p.y,T.r,T.c);});
    flashes.forEach(function(f){ctx.globalAlpha=Math.min(1,f.t*1.5);texto(ctx,'H₂O',f.x,f.y-8,'#0369a1','800 11px Outfit,sans-serif','center');ctx.globalAlpha=1;});
    // pH-metro
    var mx=bx+bw+24,mw=Math.min(W-mx-12,190);ctx.fillStyle='#0d2d42';ctx.fillRect(mx,by,mw,64);texto(ctx,'pH',mx+10,by+20,'#94a3b8','700 11px Outfit,sans-serif');
    texto(ctx,coma(Math.max(0,Math.min(14,phMostrado)),1),mx+mw/2,by+52,'#4ade80','800 30px JetBrains Mono,monospace','center');
    var ly=by+86;[['H','H₃O⁺'],['OH','OH⁻'],['HA','CH₃COOH sin ionizar'],['A','CH₃COO⁻'],['Cl','Cl⁻'],['Na','Na⁺']].forEach(function(k,i){circ(ctx,mx+8,ly+i*18,TIP[k[0]].r,TIP[k[0]].c);texto(ctx,k[1],mx+20,ly+i*18+4,'#334155','11px Outfit,sans-serif');});
    texto(ctx,'H₃O⁺: '+nH+'   OH⁻: '+nOH,mx,ly+6*18+10,'#0d2d42','700 11px Outfit,sans-serif');
    texto(ctx,'Gotas que caen aquí ↓',bx+bw/2,by-4,'#334155','11px Outfit,sans-serif','center');
    var tot=nHA+nA;
    msg.innerHTML='pH ≈ <b>'+coma(Math.max(0,Math.min(14,ph)),1)+'</b> ('+(ph<6.9?'ácido':ph>7.1?'básico':'neutro')+'). '+(tot?'Del ácido acético, en promedio solo <b>'+Math.round(ion*100)+' %</b> está ionizado (en el vinagre real, cerca del 1 %): es un ácido <b>débil</b>. ':'')+(nH&&!tot?'El HCl se ionizó por completo: cada gota aporta todos sus H₃O⁺. ':'')+'Cuando un H₃O⁺ choca con un OH⁻ se forma agua: eso es la <b>neutralización</b>. Prueba: una gota de HCl y luego una de NaOH. ¿Qué pH queda? <small>(Cada partícula representa 1 × 10⁻⁴ mol/L.)</small>';
  }
  var A=animar(L,paso);botonPausa(A,c2);
  box._prueba=function(seg){for(var t=0;t<seg;t+=0.05)paso(0.05);return {ph:ph,n:P.length};};box._agregar=agregar;
};

/* ── 2. Reactor de Haber: N₂ + 3 H₂ → 2 NH₃ ──────────────────────────────
   Cuando un N₂ choca con un H₂ y hay al menos otros dos H₂ libres, los tres
   H₂ se unen al N₂ y se forman 2 NH₃ (se respeta la estequiometría 1 : 3 : 2).
   La reacción se detiene cuando se acaba el reactivo limitante. */
SIM.haber=function(box){
  var L=lienzo(box,0.56,'Reactor con moléculas de N₂ y H₂ que forman amoníaco'),ctx=L.ctx;
  var nN=4,nH=9,M=[],estado='listo',tFin=0,pred='',hechos=0;
  var c1=fila(box);
  var rN=deslizador(c1,'N₂ al inicio',1,10,1,nN,function(x){nN=x;return x+' moléculas';});
  var rH=deslizador(c1,'H₂ al inicio',1,30,1,nH,function(x){nH=x;return x+' moléculas';});
  var c2=fila(box);
  var sel=el('select',{'aria-label':'Tu predicción del reactivo limitante'});sel.innerHTML='<option value="">Mi predicción: el limitante será…</option><option value="N">el N₂</option><option value="H">el H₂</option><option value="ninguno">ninguno (proporción justa)</option>';c2.appendChild(sel);
  boton(c2,'▶ Iniciar la reacción','prim',function(){pred=sel.value;cargar();estado='corre';A.play();});
  var msg=nota(box,'Elige cuántas moléculas de cada gas habrá, predice el limitante y pulsa «Iniciar».');
  function cargar(){M=[];hechos=0;var W=L.W,H=L.H;for(var i=0;i<nN;i++)M.push({t:'N',x:rnd(30,W-30),y:rnd(30,H-30),vx:rnd(-70,70),vy:rnd(-70,70)});for(i=0;i<nH;i++)M.push({t:'H',x:rnd(30,W-30),y:rnd(30,H-30),vx:rnd(-110,110),vy:rnd(-110,110)});}
  cargar();
  function libres(t){return M.filter(function(m){return m.t===t;});}
  function paso(dt){
    var W=L.W,H=L.H;
    if(dt>0&&estado!=='listo'){
      M.forEach(function(m){if(m.t==='va'){var dx=m.dest.x-m.x,dy=m.dest.y-m.y,d=Math.hypot(dx,dy);if(d<6){m.llego=true;}else{m.x+=dx/d*260*dt;m.y+=dy/d*260*dt;}}else mover(m,dt,14,14,W-14,H-14);});
      // completar reacciones cuyos H₂ ya llegaron
      M.filter(function(m){return m.t==='Nr';}).forEach(function(n){var mios=M.filter(function(m){return m.t==='va'&&m.dest===n;});if(mios.every(function(m){return m.llego;})){
        M=M.filter(function(m){return m!==n&&mios.indexOf(m)<0;});var a=rnd(0,PI2);for(var k=0;k<2;k++)M.push({t:'NH3',x:n.x+(k?8:-8),y:n.y,vx:Math.cos(a+k*Math.PI)*80,vy:Math.sin(a+k*Math.PI)*80});hechos++;}});
      if(estado==='corre'){var Ns=libres('N'),Hs=libres('H');
        Ns.forEach(function(n){if(n.t!=='N')return;var Hl=libres('H');if(Hl.length<3)return;var h0=null;for(var i=0;i<Hl.length;i++)if(Math.hypot(Hl[i].x-n.x,Hl[i].y-n.y)<20){h0=Hl[i];break;}if(!h0)return;
          Hl.sort(function(a,b){return Math.hypot(a.x-n.x,a.y-n.y)-Math.hypot(b.x-n.x,b.y-n.y);});var tres=[h0].concat(Hl.filter(function(h){return h!==h0;}).slice(0,2));
          n.t='Nr';n.vx*=0.2;n.vy*=0.2;tres.forEach(function(h){h.t='va';h.dest=n;});});
        if(!M.some(function(m){return m.t==='Nr'||m.t==='va';})&&(libres('N').length===0||libres('H').length<3)){estado='fin';tFin=0;}}
    }
    if(estado==='fin'&&dt>0)tFin+=dt;
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#f8fafc';ctx.fillRect(0,0,W,H);ctx.strokeStyle='#64748b';ctx.lineWidth=3;ctx.strokeRect(6,6,W-12,H-12);ctx.lineWidth=1;
    M.forEach(function(m){if(m.t==='N'||m.t==='Nr'){circ(ctx,m.x-5,m.y,7,'#1d4ed8');circ(ctx,m.x+5,m.y,7,'#1d4ed8');}
      else if(m.t==='H'||m.t==='va'){ctx.strokeStyle='#64748b';[[-3.5,0],[3.5,0]].forEach(function(o){ctx.beginPath();ctx.arc(m.x+o[0],m.y,4.5,0,PI2);ctx.fillStyle='#fff';ctx.fill();ctx.stroke();});}
      else{circ(ctx,m.x,m.y,7,'#1d4ed8');[[0,-9],[-8,5],[8,5]].forEach(function(o){ctx.strokeStyle='#64748b';ctx.beginPath();ctx.arc(m.x+o[0],m.y+o[1],3.6,0,PI2);ctx.fillStyle='#fff';ctx.fill();ctx.stroke();});}});
    var cN=M.filter(function(m){return m.t==='N'||m.t==='Nr';}).length,cH=M.filter(function(m){return m.t==='H'||m.t==='va';}).length,cA=M.filter(function(m){return m.t==='NH3';}).length;
    // barras
    var bw=Math.min(150,W*0.28),bx=W-bw-16,byy=16;ctx.fillStyle='rgba(255,255,255,.93)';ctx.fillRect(bx-6,byy-6,bw+12,86);
    [['N₂',cN,'#1d4ed8',Math.max(nN,1)],['H₂',cH,'#94a3b8',Math.max(nH,1)],['NH₃',cA,'#0d9488',Math.max(2*nN,1)]].forEach(function(b,i){var y=byy+i*26;texto(ctx,b[0],bx,y+12,'#0d2d42');ctx.fillStyle='#e2e8f0';ctx.fillRect(bx+34,y+2,bw-60,14);ctx.fillStyle=b[2];ctx.fillRect(bx+34,y+2,(bw-60)*Math.min(1,b[1]/b[3]),14);texto(ctx,String(b[1]),bx+bw-20,y+13,'#0d2d42');});
    if(estado==='fin'){var lim=(nH/3<nN-1e-9)?'H':(nN<nH/3-1e-9)?'N':'ninguno',teo=2*Math.min(nN,Math.floor(nH/3));
      msg.innerHTML='<b>La reacción se detuvo.</b> Se formaron <b>'+cA+' NH₃</b> (cálculo: 2 × mín('+nN+' N₂, '+nH+' ÷ 3 H₂) = '+teo+'). Sobran <b>'+cN+' N₂</b> y <b>'+cH+' H₂</b>. Reactivo limitante: <b>'+(lim==='H'?'el H₂':lim==='N'?'el N₂':'ninguno: proporción justa 1 : 3')+'</b>. '+(pred?(pred===lim?'✅ ¡Tu predicción fue correcta!':'🔎 Tu predicción no coincidió: compara '+nN+' × 3 = '+(nN*3)+' H₂ necesarios con los '+nH+' que había.'):'')+(cH>0&&lim==='H'?' (Los H₂ que sobran no alcanzan para un N₂ completo: hacen falta 3.)':'');}
    else if(estado==='corre')msg.innerHTML='Reaccionando… Cada N₂ necesita <b>3</b> H₂ para formar <b>2</b> NH₃. NH₃ formados: <b>'+cA+'</b>.';
  }
  var A=animar(L,paso);
  rN.addEventListener('input',function(){estado='listo';cargar();A.dibujar();msg.innerHTML='Predice el limitante y pulsa «Iniciar».';});
  rH.addEventListener('input',function(){estado='listo';cargar();A.dibujar();msg.innerHTML='Predice el limitante y pulsa «Iniciar».';});
  box._prueba=function(seg){for(var t=0;t<seg;t+=0.05)paso(0.05);return {estado:estado,M:M.map(function(m){return m.t;})};};box._iniciar=function(n,h){nN=n;nH=h;cargar();estado='corre';};
};

/* ── 3. Gas en un cilindro con émbolo ────────────────────────────────────
   Partículas que chocan contra las paredes (sin chocar entre ellas). La
   presión se MIDE con el impulso que las partículas transfieren a las
   paredes por unidad de tiempo, promediado en 1,5 s, y se expresa en atm
   tomando como referencia 1,00 atm a 50 mL y 300 K. La rapidez de las
   partículas es ∝ √T. Mover el émbolo cambia el volumen (Boyle); el control
   de temperatura cambia la rapidez (Charles y Gay-Lussac). */
SIM.cilindro=function(box){
  var L=lienzo(box,0.6,'Cilindro con un gas: partículas que chocan contra las paredes y un émbolo que se puede mover'),ctx=L.ctx;
  var N=70,P=[],T=300,V=50,imp=[],pts=[],arr=false,Pmed=1,Lc=0,tMed=0;
  var c1=fila(box);
  var rV=deslizador(c1,'Volumen',15,100,1,V,function(x){V=x;return x+' mL';});
  var rT=deslizador(c1,'Temperatura',150,600,10,T,function(x){var old=T;T=x;var f=Math.sqrt(T/old);P.forEach(function(p){p.vx*=f;p.vy*=f;});return x+' K';});
  var c2=fila(box);
  boton(c2,'📋 Registrar punto (P, V)','prim',function(){if(tMed<1.4){msg.innerHTML='Espera un momento: el sensor todavía está midiendo los choques con el volumen nuevo.';return;}pts.push([V,Pmed,T]);});
  boton(c2,'↺ Borrar puntos','',function(){pts=[];});
  var msg=nota(box,'');
  function geo(){var W=L.W,H=L.H,x0=20,y0=26,h=H-60,wmax=W*0.56;return {x0:x0,y0:y0,h:h,w:wmax*V/100,wmax:wmax};}
  function cargar(){var g=geo();P=[];var v0=150;for(var i=0;i<N;i++){var a=rnd(0,PI2),s=v0*Math.sqrt(T/300)*(0.6+Math.random()*0.8);P.push({x:g.x0+rnd(5,g.w-5),y:g.y0+rnd(5,g.h-5),vx:Math.cos(a)*s,vy:Math.sin(a)*s});}}
  cargar();
  L.cv.addEventListener('pointerdown',function(e){var g=geo(),p=L.pos(e);if(Math.abs(p.x-(g.x0+g.w))<22&&p.y>g.y0&&p.y<g.y0+g.h){arr=true;L.cv.setPointerCapture(e.pointerId);}});
  L.cv.addEventListener('pointermove',function(e){if(!arr)return;var g=geo(),p=L.pos(e);V=Math.round(Math.max(15,Math.min(100,(p.x-g.x0)/g.wmax*100)));rV.value=V;rV._upd();imp=[];tMed=0;P.forEach(function(q){if(q.x>g.x0+g.wmax*V/100)q.x=g.x0+g.wmax*V/100-rnd(1,8);});A.dibujar();});
  L.cv.addEventListener('pointerup',function(){arr=false;});
  // referencia: impulso por tiempo y por perímetro esperado a 50 mL y 300 K
  var REF=null;
  function paso(dt){
    var W=L.W,H=L.H,g=geo(),xr=g.x0+g.w;
    if(dt>0){var J=0,sub=3,h=dt/sub;
      for(var k=0;k<sub;k++)P.forEach(function(p){p.x+=p.vx*h;p.y+=p.vy*h;
        if(p.x<g.x0){p.x=g.x0;p.vx=Math.abs(p.vx);J+=2*Math.abs(p.vx);}
        if(p.x>xr){p.x=xr;J+=2*Math.abs(p.vx);p.vx=-Math.abs(p.vx);}
        if(p.y<g.y0){p.y=g.y0;p.vy=Math.abs(p.vy);J+=2*Math.abs(p.vy);}
        if(p.y>g.y0+g.h){p.y=g.y0+g.h;J+=2*Math.abs(p.vy);p.vy=-Math.abs(p.vy);}});
      var per=2*(g.w+g.h);imp.push([dt,J/per]);var tt=0,jj=0;for(var i=imp.length-1;i>=0;i--){tt+=imp[i][0];jj+=imp[i][1];if(tt>1.5){imp.splice(0,i);break;}}
      var pr=jj/Math.max(tt,1e-3);
      if(!REF)REF=P.reduce(function(s,p){return s+p.vx*p.vx+p.vy*p.vy;},0)/N*300/T;
      var ref=N*REF/(2*(g.wmax*0.5)*g.h);
      tMed=tt;if(tt>0.5)Pmed=pr/ref;}
    ctx.clearRect(0,0,W,H);
    // cilindro y émbolo
    ctx.fillStyle='#eff6ff';ctx.fillRect(g.x0,g.y0,g.w,g.h);ctx.strokeStyle='#334155';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(g.x0+g.wmax+10,g.y0);ctx.lineTo(g.x0,g.y0);ctx.lineTo(g.x0,g.y0+g.h);ctx.lineTo(g.x0+g.wmax+10,g.y0+g.h);ctx.stroke();ctx.lineWidth=1;
    ctx.fillStyle='#475569';ctx.fillRect(xr,g.y0+2,10,g.h-4);ctx.fillRect(xr+10,g.y0+g.h/2-5,g.x0+g.wmax+30-xr,10);
    ctx.fillStyle='#f59e0b';ctx.beginPath();ctx.arc(xr+5,g.y0+g.h/2,8,0,PI2);ctx.fill();
    var col=T<250?'#2563eb':T<400?'#7c3aed':'#dc2626';P.forEach(function(p){circ(ctx,p.x,p.y,3.4,col);});
    texto(ctx,'Arrastra el émbolo ↔',g.x0+4,g.y0-8,'#334155','11px Outfit,sans-serif');
    // lecturas
    var lx=g.x0+g.wmax+44,lw=W-lx-10;ctx.fillStyle='#0d2d42';ctx.fillRect(lx,g.y0,lw,62);
    texto(ctx,tMed<1.4?'P: midiendo…':'P = '+coma(Pmed,2)+' atm',lx+8,g.y0+22,'#4ade80','800 15px JetBrains Mono,monospace');
    texto(ctx,'V = '+V+' mL · T = '+T+' K',lx+8,g.y0+40,'#e2e8f0','11px Outfit,sans-serif');
    texto(ctx,'P × V = '+coma(Pmed*V,1)+' atm·mL',lx+8,g.y0+55,'#fde68a','11px Outfit,sans-serif');
    // gráfica P contra V
    var gx=lx+26,gy=g.y0+80,gw=lw-34,gh=g.h-90,X=function(v){return gx+v/100*gw;},Y=function(p){return gy+gh-p/4*gh;};
    if(gh>40){ctx.strokeStyle='#94a3b8';ctx.beginPath();ctx.moveTo(gx,gy);ctx.lineTo(gx,gy+gh);ctx.lineTo(gx+gw,gy+gh);ctx.stroke();
      texto(ctx,'P',gx-14,gy+8,'#334155');texto(ctx,'V',gx+gw-6,gy+gh+12,'#334155');[1,2,3,4].forEach(function(p){texto(ctx,String(p),gx-4,Y(p)+3,'#64748b','9px Outfit,sans-serif','right');});
      ctx.strokeStyle='rgba(124,58,237,.5)';ctx.setLineDash([4,3]);ctx.beginPath();for(var v=12;v<=100;v+=2){var pp=50*T/300/v;if(v===12)ctx.moveTo(X(v),Y(Math.min(4,pp)));else ctx.lineTo(X(v),Y(Math.min(4,pp)));}ctx.stroke();ctx.setLineDash([]);
      pts.forEach(function(q){circ(ctx,X(q[0]),Y(Math.min(4,q[1])),4,q[2]===T?'#dc2626':'#94a3b8');});
      texto(ctx,'- - ley de Boyle a '+T+' K',gx+4,gy+10,'#7c3aed','9px Outfit,sans-serif');}
    msg.innerHTML='La presión <b>no se calcula con la fórmula</b>: se mide contando los choques de las partículas contra las paredes. '+(pts.length<3?'Registra puntos con volúmenes distintos y mira si caen sobre la curva de Boyle.':'Tus '+pts.length+' puntos siguen la curva: P × V se mantiene casi constante, salvo por fluctuaciones, porque hay pocas partículas en el modelo.')+' Si subes la temperatura, las partículas van más rápido y la presión aumenta (Gay-Lussac).';
  }
  var A=animar(L,paso);botonPausa(A,c2);
  rT.addEventListener('input',function(){imp=[];tMed=0;});
  rV.addEventListener('input',function(){imp=[];tMed=0;var g=geo();P.forEach(function(p){if(p.x>g.x0+g.w)p.x=g.x0+g.w-rnd(1,8);});});
  box._prueba=function(seg,vol){if(vol){V=vol;rV.value=vol;rV._upd();rV.dispatchEvent(new Event('input'));}for(var t=0;t<seg;t+=0.02)paso(0.02);return {P:Pmed,V:V,T:T};};
};

/* ── 4. Laboratorio de gases: todas las leyes ────────────────────────────
   Un cilindro con émbolo y partículas que chocan contra las paredes. La
   presión se MIDE con el impulso de los choques (como un manómetro) y se
   compara con P = nRT/V. Cada mol es un grupo de 40 partículas modelo; la
   rapidez es ∝ √T. Modos: Boyle (n, T fijos), Charles (n, P fijos: el
   émbolo se mueve solo), Gay-Lussac (n, V fijos), Avogadro (P, T fijos),
   gas ideal (todo libre) y Dalton (mezcla de N₂ y O₂: presiones parciales,
   que se miden por separado para cada gas). R = 0,082 atm·L/(mol·K). */
SIM.gases=function(box){
  var L=lienzo(box,0.62,'Cilindro con gas: émbolo, termómetro y manómetro; las partículas chocan contra las paredes'),ctx=L.ctx;
  var R=0.08206,modo='boyle',n=1,n2=0.5,T=273,V=22.4,Vd=22.4,Vmax=60,P=[],imp=[],imp2=[],tMed=0,Pmed=1,Pmed1=0,Pmed2=0,pts=[],arr=false,v0=150;
  var MOD={boyle:{t:'Boyle',fijo:'n y T constantes',x:'V',y:'P',ley:'P₁V₁ = P₂V₂'},charles:{t:'Charles',fijo:'n y P constantes',x:'T',y:'V',ley:'V₁/T₁ = V₂/T₂'},
    gay:{t:'Gay-Lussac',fijo:'n y V constantes',x:'T',y:'P',ley:'P₁/T₁ = P₂/T₂'},avog:{t:'Avogadro',fijo:'P y T constantes',x:'n',y:'V',ley:'V₁/n₁ = V₂/n₂'},
    ideal:{t:'Gas ideal',fijo:'todo puede cambiar',x:'V',y:'P',ley:'PV = nRT'},dalton:{t:'Dalton',fijo:'V y T constantes',x:'n',y:'P',ley:'P total = P₁ + P₂'}};
  var c0=fila(box);pildoras10(c0,Object.keys(MOD).map(function(k){return [k,MOD[k].t];}),modo,function(k){modo=k;preparar();});
  var c1=fila(box);
  var rV=deslizador(c1,'Volumen',5,60,0.5,V,function(x){V=x;return coma(x,1)+' L';});
  var rT=deslizador(c1,'Temperatura',100,600,5,T,function(x){var f=Math.sqrt(x/T);T=x;P.forEach(function(p){p.vx*=f;p.vy*=f;});return x+' K ('+Math.round(x-273)+' °C)';});
  var rN=deslizador(c1,'Moles (N₂)',0.25,2.5,0.25,n,function(x){n=x;return coma(x,2)+' mol';});
  var rN2=deslizador(c1,'Moles de O₂',0,2,0.25,n2,function(x){n2=x;return coma(x,2)+' mol';});
  var c2=fila(box);
  boton(c2,'📋 Registrar punto','prim',function(){if(tMed<1.4){msg.innerHTML='Espera un momento: el manómetro todavía está midiendo los choques.';return;}var m=MOD[modo];pts.push({m:modo,x:m.x==='V'?V:m.x==='T'?T:n,y:m.y==='P'?Pmed:Vd,T:T,n:n,P:Pmed});});
  boton(c2,'↺ Borrar puntos','',function(){pts=[];});
  var msg=nota(box,'');
  function etq(r,t){r.parentNode.querySelector('span').textContent=t;}
  function mostrar(r,si){r.parentNode.style.display=si?'':'none';}
  function Pteo(){return (n+(modo==='dalton'?n2:0))*R*T/Vd;}
  function preparar(){pts=[];imp=[];imp2=[];tMed=0;
    if(modo==='boyle'){n=1;T=273;}if(modo==='charles'){n=1;}if(modo==='gay'){n=1;V=22.4;}if(modo==='avog'){T=273;}if(modo==='dalton'){V=40;T=300;}
    mostrar(rV,modo==='boyle'||modo==='ideal');mostrar(rT,modo!=='boyle'&&modo!=='avog'&&modo!=='dalton');mostrar(rN,modo==='avog'||modo==='ideal'||modo==='dalton');mostrar(rN2,modo==='dalton');
    etq(rN,modo==='dalton'?'Moles de N₂':'Moles de gas');
    [[rV,V],[rT,T],[rN,n],[rN2,n2]].forEach(function(a){a[0].value=a[1];a[0]._upd();});
    if(modo==='charles'||modo==='avog')V=Math.min(Vmax,n*R*T/1);
    Vd=V;cargar();A.dibujar();}
  function cargar(){var g=geo();P=[];var tot=[[Math.round(n*40),'a'],[modo==='dalton'?Math.round(n2*40):0,'b']];
    tot.forEach(function(t){for(var i=0;i<t[0];i++){var a=rnd(0,PI2),s=v0*Math.sqrt(T/273)*(0.6+Math.random()*0.8);P.push({x:g.x0+rnd(4,g.w-4),y:g.y0+rnd(4,g.h-4),vx:Math.cos(a)*s,vy:Math.sin(a)*s,e:t[1]});}});normaliza();}
  function normaliza(){if(!P.length)return;var m2=P.reduce(function(s,p){return s+p.vx*p.vx+p.vy*p.vy;},0)/P.length,f=Math.sqrt(v0*v0*1.0533*T/273/m2);P.forEach(function(p){p.vx*=f;p.vy*=f;});}
  function ajustarN(){var g=geo(),q={a:Math.round(n*40),b:modo==='dalton'?Math.round(n2*40):0};['a','b'].forEach(function(e){var act=P.filter(function(p){return p.e===e;});
    while(act.length<q[e]){var a=rnd(0,PI2),s=v0*Math.sqrt(T/273)*(0.6+Math.random()*0.8);var p={x:g.x0+rnd(4,g.w-4),y:g.y0+rnd(4,g.h-4),vx:Math.cos(a)*s,vy:Math.sin(a)*s,e:e};P.push(p);act.push(p);}
    while(act.length>q[e]){var x=act.pop();P.splice(P.indexOf(x),1);}});normaliza();imp=[];imp2=[];tMed=0;}
  function geo(){var W=L.W,H=L.H,x0=16,y0=30,h=H*0.56,wmax=W*0.55;return {x0:x0,y0:y0,h:h,w:wmax*Vd/Vmax,wmax:wmax};}
  rV.addEventListener('input',function(){imp=[];imp2=[];tMed=0;});
  rT.addEventListener('input',function(){imp=[];imp2=[];tMed=0;});
  rN.addEventListener('input',function(){ajustarN();});rN2.addEventListener('input',function(){ajustarN();});
  L.cv.addEventListener('pointerdown',function(e){if(!(modo==='boyle'||modo==='ideal'))return;var g=geo(),p=L.pos(e);if(Math.abs(p.x-(g.x0+g.w))<22&&p.y>g.y0&&p.y<g.y0+g.h){arr=true;L.cv.setPointerCapture(e.pointerId);}});
  L.cv.addEventListener('pointermove',function(e){if(!arr)return;var g=geo(),p=L.pos(e);V=Math.round(Math.max(5,Math.min(60,(p.x-g.x0)/g.wmax*Vmax))*2)/2;rV.value=V;rV._upd();imp=[];imp2=[];tMed=0;A.dibujar();});
  L.cv.addEventListener('pointerup',function(){arr=false;});
  var REF=null;
  function paso(dt){
    var W=L.W,H=L.H;
    if(modo==='charles'||modo==='avog')V=Math.min(Vmax,Math.max(5,n*R*T/1));
    var Vant=Vd;Vd+=(V-Vd)*(dt>0?Math.min(1,dt*2.5):1);if(Math.abs(Vd-Vant)>0.05){imp=[];imp2=[];tMed=Math.min(tMed,0.3);}
    var g=geo(),xr=g.x0+g.w;
    if(dt>0){var J=[0,0],sub=3,h=dt/sub;
      P.forEach(function(p){if(p.x>xr)p.x=xr-rnd(1,6);});
      for(var k=0;k<sub;k++)P.forEach(function(p){var j=p.e==='a'?0:1;p.x+=p.vx*h;p.y+=p.vy*h;
        if(p.x<g.x0){p.x=g.x0;p.vx=Math.abs(p.vx);J[j]+=2*p.vx;}
        if(p.x>xr){p.x=xr;J[j]+=2*Math.abs(p.vx);p.vx=-Math.abs(p.vx);}
        if(p.y<g.y0){p.y=g.y0;p.vy=Math.abs(p.vy);J[j]+=2*p.vy;}
        if(p.y>g.y0+g.h){p.y=g.y0+g.h;J[j]+=2*Math.abs(p.vy);p.vy=-Math.abs(p.vy);}});
      var per=2*(g.w+g.h);imp.push([dt,J[0]/per]);imp2.push([dt,J[1]/per]);
      function prom(a){var tt=0,jj=0;for(var i=a.length-1;i>=0;i--){tt+=a[i][0];jj+=a[i][1];if(tt>1.5){a.splice(0,i);break;}}return [tt,jj/Math.max(tt,1e-3)];}
      var r1=prom(imp),r2=prom(imp2);tMed=r1[0];
      if(!REF)REF={v2:v0*v0*1.0533};
      // impulso esperado para 1 mol (40 partículas) a 273 K en 22,4 L = 1 atm
      var ref=40*REF.v2/(2*(g.wmax*22.4/Vmax)*g.h);
      if(tMed>0.5){Pmed1=r1[1]/ref;Pmed2=r2[1]/ref;Pmed=Pmed1+Pmed2;}}
    ctx.clearRect(0,0,W,H);
    // cilindro
    var calor=T<250?'#dbeafe':T<400?'#eff6ff':'#fee2e2';ctx.fillStyle=calor;ctx.fillRect(g.x0,g.y0,g.w,g.h);
    ctx.strokeStyle='#334155';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(g.x0+g.wmax+8,g.y0);ctx.lineTo(g.x0,g.y0);ctx.lineTo(g.x0,g.y0+g.h);ctx.lineTo(g.x0+g.wmax+8,g.y0+g.h);ctx.stroke();ctx.lineWidth=1;
    ctx.fillStyle='#475569';ctx.fillRect(xr,g.y0+2,10,g.h-4);ctx.fillRect(xr+10,g.y0+g.h/2-5,Math.max(0,g.x0+g.wmax+24-xr),10);
    if(modo==='boyle'||modo==='ideal'){ctx.fillStyle='#f59e0b';ctx.beginPath();ctx.arc(xr+5,g.y0+g.h/2,8,0,PI2);ctx.fill();texto(ctx,'Arrastra el émbolo ↔',g.x0+4,g.y0-10,'#334155','11px Outfit,sans-serif');}
    else if(modo==='charles'||modo==='avog'){for(var pe=0;pe<3;pe++){ctx.fillStyle='#64748b';ctx.fillRect(g.x0+g.wmax+12,g.y0+g.h/2-28+pe*20,22,14);}texto(ctx,'Émbolo libre: P externa = 1 atm',g.x0+4,g.y0-10,'#334155','11px Outfit,sans-serif');}
    else texto(ctx,'Émbolo fijo: volumen constante',g.x0+4,g.y0-10,'#334155','11px Outfit,sans-serif');
    // fuego
    if(modo!=='boyle'&&modo!=='avog'&&modo!=='dalton'&&T>300){var fl=Math.min(1,(T-300)/300);for(var f=0;f<5;f++){ctx.fillStyle='rgba(249,115,22,'+(0.4+0.5*fl)+')';ctx.beginPath();var fx=g.x0+20+f*(g.w-30)/4,fy=g.y0+g.h+4;ctx.moveTo(fx-6,fy);ctx.quadraticCurveTo(fx,fy+18*fl+6*Math.sin(performance.now()/120+f),fx+6,fy);ctx.fill();}}
    P.forEach(function(p){circ(ctx,p.x,p.y,3.3,p.e==='a'?(modo==='dalton'?'#2563eb':'#7c3aed'):'#dc2626');});
    // lecturas
    var lx=g.x0+g.wmax+44,lw=W-lx-10,ly=g.y0;
    ctx.fillStyle='#0d2d42';ctx.fillRect(lx,ly,lw,94);
    texto(ctx,tMed<1.4?'P: midiendo…':'P medida = '+coma(Pmed,2)+' atm',lx+8,ly+20,'#4ade80','800 13px JetBrains Mono,monospace');
    texto(ctx,'P = nRT/V = '+coma(Pteo(),2)+' atm',lx+8,ly+38,'#bbf7d0','11px JetBrains Mono,monospace');
    texto(ctx,'V = '+coma(Vd,1)+' L · T = '+T+' K',lx+8,ly+56,'#e2e8f0','11px Outfit,sans-serif');
    texto(ctx,'n = '+coma(n+(modo==='dalton'?n2:0),2)+' mol',lx+8,ly+72,'#e2e8f0','11px Outfit,sans-serif');
    texto(ctx,'PV/nT = '+coma(Pmed*Vd/((n+(modo==='dalton'?n2:0))*T),3),lx+8,ly+88,'#fde68a','11px Outfit,sans-serif');
    // gráfica según el modo
    var m=MOD[modo],gx=lx+30,gy=ly+112,gw=lw-38,gh=H-gy-24;
    if(gh>50&&modo!=='dalton'){var XR=m.x==='V'?[0,60]:m.x==='T'?[-300,350]:[0,2.6],YR=m.y==='P'?[0,4]:[0,60];
      var X=function(x){return gx+(x-XR[0])/(XR[1]-XR[0])*gw;},Y=function(y){return gy+gh-(y-YR[0])/(YR[1]-YR[0])*gh;};
      ctx.strokeStyle='#94a3b8';ctx.beginPath();ctx.moveTo(gx,gy);ctx.lineTo(gx,gy+gh);ctx.lineTo(gx+gw,gy+gh);ctx.stroke();
      texto(ctx,m.y+(m.y==='P'?' (atm)':' (L)'),gx-28,gy-4,'#334155','10px Outfit,sans-serif');
      texto(ctx,m.x==='V'?'V (L)':m.x==='T'?'T (°C)':'n (mol)',gx+gw,gy+gh+16,'#334155','10px Outfit,sans-serif','right');
      [XR[0],(XR[0]+XR[1])/2,XR[1]].forEach(function(v){texto(ctx,m.x==='T'?String(Math.round(v)):coma(v,m.x==='n'?1:0),X(v),gy+gh+12,'#64748b','9px Outfit,sans-serif','center');});
      texto(ctx,String(YR[1]),gx-4,gy+6,'#64748b','9px Outfit,sans-serif','right');
      ctx.strokeStyle='rgba(124,58,237,.55)';ctx.setLineDash([4,3]);ctx.beginPath();var prim=true;
      for(var s=0;s<=60;s++){var xv=XR[0]+(XR[1]-XR[0])*s/60,yv;
        if(modo==='boyle'||modo==='ideal')yv=xv>0?n*R*T/xv:99;else if(modo==='charles')yv=n*R*(xv+273)/1;else if(modo==='gay')yv=n*R*(xv+273)/V;else yv=xv*R*T/1;
        if(yv<YR[0]||yv>YR[1]){prim=true;continue;}if(prim){ctx.moveTo(X(xv),Y(yv));prim=false;}else ctx.lineTo(X(xv),Y(yv));}ctx.stroke();ctx.setLineDash([]);
      if(m.x==='T'){ctx.strokeStyle='#dc2626';ctx.beginPath();ctx.moveTo(X(-273),gy+gh-4);ctx.lineTo(X(-273),gy+gh+4);ctx.stroke();texto(ctx,'−273 °C',X(-273),gy+gh-8,'#dc2626','9px Outfit,sans-serif','center');}
      pts.filter(function(q){return q.m===modo;}).forEach(function(q){var xx=m.x==='T'?q.x-273:q.x;circ(ctx,X(xx),Y(Math.min(YR[1],q.y)),4,'#dc2626');});
      texto(ctx,'- - '+m.ley,gx+6,gy+10,'#7c3aed','10px Outfit,sans-serif');}
    if(modo==='dalton'&&gh>50){var bars=[['N₂',Pmed1,'#2563eb'],['O₂',Pmed2,'#dc2626'],['Total',Pmed,'#0d2d42']],bw=gw/5;
      bars.forEach(function(b,i){var bh=Math.min(gh,b[1]/3*gh);ctx.fillStyle=b[2];ctx.fillRect(gx+i*bw*1.6+10,gy+gh-bh,bw,bh);texto(ctx,b[0],gx+i*bw*1.6+10+bw/2,gy+gh+12,'#334155','10px Outfit,sans-serif','center');texto(ctx,coma(b[1],2),gx+i*bw*1.6+10+bw/2,gy+gh-bh-4,'#0d2d42','700 10px Outfit,sans-serif','center');});}
    var txt={boyle:'<b>Ley de Boyle</b> ('+m.fijo+'): al reducir el volumen, las partículas chocan más seguido contra las paredes y la presión sube. Registra puntos con volúmenes distintos: caen sobre una curva (P y V son inversamente proporcionales).',
      charles:'<b>Ley de Charles</b> ('+m.fijo+'): al calentar, las partículas van más rápido, empujan el émbolo libre y el gas ocupa más volumen. Registra puntos: forman una recta que, prolongada, llega a V = 0 en −273 °C, el <b>cero absoluto</b>.',
      gay:'<b>Ley de Gay-Lussac</b> ('+m.fijo+'): con el émbolo fijo, calentar hace que las partículas choquen más rápido y con más fuerza: la presión sube en proporción a la temperatura absoluta (por eso una olla a presión o una llanta caliente aumentan su presión).',
      avog:'<b>Ley de Avogadro</b> ('+m.fijo+'): más moles = más partículas = más volumen. A 0 °C y 1 atm, 1 mol de cualquier gas ocupa 22,4 L.',
      ideal:'<b>Gas ideal</b>: cambia volumen, temperatura y moles a la vez. La presión medida con los choques siempre se acerca a nRT/V y el cociente PV/nT se mantiene cerca de R = 0,082 atm·L/(mol·K).',
      dalton:'<b>Ley de Dalton</b> ('+m.fijo+'): cada gas choca contra las paredes por su cuenta. La presión total es la suma de las presiones parciales, y cada una es proporcional a los moles de ese gas.'}[modo];
    msg.innerHTML=txt;
  }
  var A=animar(L,paso);botonPausa(A,c2);
  preparar();
  box._prueba=function(seg,cfg){if(cfg){if(cfg.modo&&cfg.modo!==modo){modo=cfg.modo;preparar();}['V','T','n','n2'].forEach(function(k){if(cfg[k]!=null){var r={V:rV,T:rT,n:rN,n2:rN2}[k];r.value=cfg[k];r.dispatchEvent(new Event('input'));}});}
    for(var t=0;t<seg;t+=0.02)paso(0.02);return {P:Pmed,Pteo:Pteo(),V:Vd,T:T,n:n,P1:Pmed1,P2:Pmed2,v2:P.reduce(function(s,p){return s+p.vx*p.vx+p.vy*p.vy;},0)/Math.max(1,P.length)*273/T,REF:REF&&REF.v2,N:P.length};};
};

/* ── 5. Disolución en vivo ───────────────────────────────────────────────
   Un cristal en el fondo de un vaso con moléculas de agua (O rojo δ−, H
   blancos δ+). Las moléculas se orientan: el O hacia los cationes (Na⁺) y
   los H hacia los aniones (Cl⁻). Una partícula del borde del cristal se
   suelta cuando la rodean suficientes moléculas de agua (hidratación); la
   rapidez crece con la temperatura y al agitar. Si la solución llega a su
   límite (saturada), las partículas vuelven al cristal tan rápido como
   salen: equilibrio. Azúcar: se separan moléculas enteras (no iones).
   Aceite: apolar, no se disuelve y queda flotando. */
SIM.disolucion=function(box){
  var L=lienzo(box,0.62,'Vaso con agua y un cristal que se disuelve: las moléculas de agua rodean las partículas'),ctx=L.ctx;
  var sust='nacl',T=20,agita=0,Wm=[],C=[],libres=[],sat=false;
  var DAT={nacl:{n:'Sal (NaCl)',cap:function(T){return 15+T*0.03;}},azucar:{n:'Azúcar (sacarosa)',cap:function(T){return 9+T*0.18;}},aceite:{n:'Aceite',cap:function(){return 0;}}};
  var c1=fila(box);pildoras10(c1,[['nacl','🧂 Sal (iónica)'],['azucar','🍬 Azúcar (molecular)'],['aceite','🛢️ Aceite (apolar)']],sust,function(k){sust=k;iniciar();});
  var c2=fila(box);
  deslizador(c2,'Temperatura',0,100,1,T,function(x){T=x;return x+' °C';});
  boton(c2,'🥄 Agitar','prim',function(){agita=2.5;A.play();});
  boton(c2,'↺ Empezar de nuevo','',function(){iniciar();});
  var msg=nota(box,'');
  function iniciar(){var W=L.W,H=L.H;Wm=[];C=[];libres=[];
    for(var i=0;i<70;i++)Wm.push({x:rnd(0.06,0.94)*W,y:rnd(0.2,0.92)*H,vx:rnd(-40,40),vy:rnd(-40,40),a:rnd(0,PI2)});
    var cols=6,filas=4,s=17,x0=W*0.5-cols*s/2,y0=H*0.93-filas*s;
    if(sust==='aceite'){for(i=0;i<24;i++)C.push({x:W*0.5+rnd(-60,60),y:H*0.22+rnd(-6,6),t:'o',fijo:true});}
    else for(var f=0;f<filas;f++)for(var c=0;c<cols;c++)C.push({gx:c,gy:f,x:x0+c*s+s/2,y:y0+f*s+s/2,t:sust==='nacl'?((c+f)%2?'cl':'na'):'s',enCristal:true});
    A&&A.dibujar();}
  function borde(p){if(!p.enCristal)return false;var vec=C.filter(function(q){return q.enCristal&&Math.abs(q.gx-p.gx)+Math.abs(q.gy-p.gy)===1;});return vec.length<4&&!C.some(function(q){return q.enCristal&&q.gx===p.gx&&q.gy===p.gy-1;});}
  function paso(dt){
    var W=L.W,H=L.H,top=H*0.12,fondo=H*0.95,izq=W*0.04,der=W*0.96,v=40+T*1.4+agita*90;
    if(dt>0){agita=Math.max(0,agita-dt);
      Wm.forEach(function(m){m.vx+=gauss()*v*3*dt;m.vy+=gauss()*v*3*dt;var sp=Math.hypot(m.vx,m.vy);if(sp>v){m.vx*=v/sp;m.vy*=v/sp;}
        if(agita>0){var cx=W/2,cy=H*0.55,dx=m.x-cx,dy=m.y-cy;m.vx+=-dy*0.9*dt*agita;m.vy+=dx*0.9*dt*agita;}
        mover(m,dt,izq,top,der,fondo);
        // orientación: hacia el ion más cercano
        var cerca=null,dmin=34;C.concat(libres).forEach(function(q){if(q.t==='o')return;var d=Math.hypot(q.x-m.x,q.y-m.y);if(d<dmin){dmin=d;cerca=q;}});
        var obj=cerca?Math.atan2(cerca.y-m.y,cerca.x-m.x)+(cerca.t==='cl'?Math.PI:0):m.a+gauss()*2*dt;var da=Math.atan2(Math.sin(obj-m.a),Math.cos(obj-m.a));m.a+=da*Math.min(1,6*dt);});
      var cap=DAT[sust].cap(T),nlib=libres.length;sat=nlib>=cap;
      C.forEach(function(p){if(!p.enCristal||sat||sust==='aceite'||!borde(p))return;var rodea=Wm.filter(function(m){return Math.hypot(m.x-p.x,m.y-p.y)<30;}).length;
        if(rodea>=2&&Math.random()<(0.6+T*0.025+agita*1.2)*dt){p.enCristal=false;p.vx=rnd(-30,30);p.vy=rnd(-60,-20);libres.push(p);}});
      C=C.filter(function(p){return p.enCristal||p.t==='o';});
      // equilibrio: si hay más disuelto que el límite, algunas vuelven al cristal
      if(libres.length>cap&&sust!=='aceite'){var hueco=null;libres.forEach(function(q,i){if(hueco||Math.random()>0.6*dt)return;var cand=libres[i];var cols=6,s=17,x0=W*0.5-cols*s/2,y0=H*0.93-4*s;
        for(var f=3;f>=0&&!hueco;f--)for(var c=0;c<cols;c++){if(!C.some(function(z){return z.gx===c&&z.gy===f;})&&(f===3||C.some(function(z){return z.gx===c&&z.gy===f+1;}))&&(sust!=='nacl'||((c+f)%2?'cl':'na')===cand.t)){hueco={c:c,f:f,x:x0+c*s+s/2,y:y0+f*s+s/2,q:cand};break;}}});
        if(hueco){var q=hueco.q;libres.splice(libres.indexOf(q),1);q.enCristal=true;q.gx=hueco.c;q.gy=hueco.f;q.x=hueco.x;q.y=hueco.y;C.push(q);}}
      libres.forEach(function(p){p.vx+=gauss()*v*2*dt;p.vy+=gauss()*v*2*dt;var sp=Math.hypot(p.vx,p.vy),mx=v*0.6;if(sp>mx){p.vx*=mx/sp;p.vy*=mx/sp;}
        if(agita>0){var cx=W/2,cy=H*0.55,dx=p.x-cx,dy=p.y-cy;p.vx+=-dy*0.9*dt*agita;p.vy+=dx*0.9*dt*agita;}mover(p,dt,izq+6,top+6,der-6,fondo-6);});
      if(sust==='aceite')C.forEach(function(o){o.x+=gauss()*8*dt;o.y=Math.max(top+4,Math.min(top+26,o.y+gauss()*6*dt));});}
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#e0f2fe';ctx.fillRect(izq,top,der-izq,fondo-top);
    ctx.strokeStyle='#334155';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(izq,top-20);ctx.lineTo(izq,fondo);ctx.lineTo(der,fondo);ctx.lineTo(der,top-20);ctx.stroke();ctx.lineWidth=1;
    function dibuja(p){if(p.t==='na')circ(ctx,p.x,p.y,6,'#94a3b8');else if(p.t==='cl')circ(ctx,p.x,p.y,8,'#16a34a');else if(p.t==='s'){ctx.fillStyle='#d97706';ctx.beginPath();for(var k=0;k<6;k++){var a=k*Math.PI/3;ctx.lineTo(p.x+Math.cos(a)*8,p.y+Math.sin(a)*8);}ctx.closePath();ctx.fill();}else circ(ctx,p.x,p.y,7,'#facc15');}
    libres.forEach(function(p){ctx.strokeStyle='rgba(37,99,235,.35)';ctx.setLineDash([2,3]);ctx.beginPath();ctx.arc(p.x,p.y,15,0,PI2);ctx.stroke();ctx.setLineDash([]);});
    C.forEach(dibuja);libres.forEach(dibuja);
    Wm.forEach(function(m){var ox=m.x,oy=m.y,a=m.a;circ(ctx,ox,oy,4.5,'#ef4444');[0.95,-0.95].forEach(function(d){circ(ctx,ox-Math.cos(a+d)*6,oy-Math.sin(a+d)*6,2.6,'#f8fafc');});});
    // bombillo de conductividad
    var ion=sust==='nacl'?libres.length:0,brillo=Math.min(1,ion/12);ctx.fillStyle='rgba(250,204,21,'+(0.15+brillo*0.85)+')';ctx.beginPath();ctx.arc(der-30,top-2,12,0,PI2);ctx.fill();ctx.strokeStyle='#334155';ctx.stroke();
    texto(ctx,brillo>0.1?'💡 conduce':'💡 no conduce',der-48,top+24,'#334155','10px Outfit,sans-serif','right');
    texto(ctx,'Disuelto: '+libres.length+(sust==='aceite'?'':' · límite a '+T+' °C ≈ '+Math.round(DAT[sust].cap(T))),izq+8,top+16,'#0d2d42','700 11px Outfit,sans-serif');
    var restan=C.filter(function(p){return p.enCristal;}).length;
    msg.innerHTML=sust==='aceite'?'El aceite es <b>apolar</b>: las moléculas de agua se atraen entre ellas (puentes de hidrógeno) y no rodean al aceite, que queda flotando. <b>Semejante disuelve a semejante.</b>'
      :(sust==='nacl'?'Las moléculas de agua se orientan: el <b>O (δ−)</b> hacia el Na⁺ y los <b>H (δ+)</b> hacia el Cl⁻. Cuando varias rodean un ion del borde, lo arrancan del cristal: <b>disociación e hidratación</b>. Los iones libres hacen que la solución <b>conduzca</b> la electricidad.':'El azúcar se disuelve como <b>moléculas enteras</b> (no se separa en iones): por eso la solución <b>no conduce</b> la electricidad. El agua la rodea por puentes de hidrógeno con sus −OH.')
      +' '+(restan===0?'Se disolvió todo: la solución es <b>insaturada</b>.':sat?'La solución está <b>saturada</b>: ya no se disuelve más a esta temperatura (las partículas vuelven al cristal tan rápido como salen). Sube la temperatura y observa.':'Todavía se está disolviendo: <b>insaturada</b>. Agita o calienta para hacerlo más rápido.');
  }
  var A=null;A=animar(L,paso);botonPausa(A,c2);iniciar();
  box._prueba=function(seg,cfg){if(cfg&&cfg.sust&&cfg.sust!==sust){sust=cfg.sust;iniciar();}if(cfg&&cfg.T!=null)T=cfg.T;for(var t=0;t<seg;t+=0.05)paso(0.05);return {libres:libres.length,cristal:C.filter(function(p){return p.enCristal;}).length,sat:sat};};
};

/* ── 6. Prepara y diluye una solución ────────────────────────────────────
   Sulfato de cobre(II), CuSO₄ (159,6 g/mol), que es azul: el color depende
   de la concentración. Cada punto representa 0,25 g de soluto. Diluir
   agrega agua: los moles de soluto no cambian (C₁V₁ = C₂V₂). */
SIM.preparar=function(box){
  var L=lienzo(box,0.58,'Vaso aforado con una solución azul de sulfato de cobre; el color depende de la concentración'),ctx=L.ctx;
  var M=159.6,m=8,Vs=250,agua=0,pts=[],reto=null;
  var c1=fila(box);
  var rm=deslizador(c1,'Masa de CuSO₄',0,40,0.5,m,function(x){m=x;ajustar();return coma(x,1)+' g';});
  var rv=deslizador(c1,'Volumen de solución',50,500,10,Vs,function(x){Vs=x;agua=0;if(rA){rA.value=0;rA._upd();}return x+' mL';});
  var c2=fila(box);
  var rA=deslizador(c2,'Diluir: agregar agua',0,500,10,0,function(x){agua=x;return '+'+x+' mL';});
  boton(c2,'🎯 Reto','prim',function(){var vs=[100,200,250,500],cs=[0.1,0.2,0.25,0.4];reto={V:vs[Math.floor(Math.random()*4)],C:cs[Math.floor(Math.random()*4)]};agua=0;rA.value=0;rA._upd();A.dibujar();
    rev.innerHTML='🎯 <b>Reto:</b> prepara <b>'+reto.V+' mL</b> de CuSO₄ <b>'+coma(reto.C,2)+' M</b>. Calcula primero en tu cuaderno los gramos y luego ajusta los dos controles (con «Diluir» en 0).';});
  var rev=nota(box,'Mueve la masa y el volumen: observa el color y las concentraciones. Luego diluye con agua.');
  boton(c2,'✔ Revisar el reto','',function(){if(!reto){rev.innerHTML='Primero pulsa «Reto».';return;}var C=m/M/(Vs/1000),gok=reto.C*reto.V/1000*M;
    if(agua===0&&Math.abs(Vs-reto.V)<1&&Math.abs(C-reto.C)/reto.C<0.03)rev.innerHTML='✅ <b>¡Bien preparada!</b> '+coma(reto.C,2)+' mol/L × '+coma(reto.V/1000,3)+' L = '+coma(reto.C*reto.V/1000,4)+' mol × 159,6 g/mol = <b>'+coma(gok,2)+' g</b>.';
    else rev.innerHTML='🔎 Todavía no: tu solución es '+coma(C,3)+' M en '+Vs+' mL. Pista: moles = M × V (en litros); gramos = moles × 159,6 g/mol.';});
  function ajustar(){var n=Math.round(m/0.25);while(pts.length<n)pts.push({u:Math.random(),w:Math.random(),f:rnd(0,PI2)});pts.length=n;}
  ajustar();
  function paso(dt){
    var W=L.W,H=L.H,Vt=Vs+agua,bx=W*0.1,bw=W*0.36,by=H*0.08,bh=H*0.84,Vmax=1000,hl=bh*Vt/Vmax,yl=by+bh-hl,C=m/M/(Vt/1000);
    ctx.clearRect(0,0,W,H);
    var alfa=Math.min(0.9,C/0.5*0.9);ctx.fillStyle='rgba(37,99,235,'+alfa+')';ctx.fillRect(bx,yl,bw,hl);ctx.fillStyle='rgba(224,242,254,.5)';ctx.fillRect(bx,yl,bw,3);
    ctx.strokeStyle='#334155';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(bx,by);ctx.lineTo(bx,by+bh);ctx.lineTo(bx+bw,by+bh);ctx.lineTo(bx+bw,by);ctx.stroke();ctx.lineWidth=1;
    for(var v=100;v<=1000;v+=100){var y=by+bh-bh*v/Vmax;ctx.strokeStyle='#64748b';ctx.beginPath();ctx.moveTo(bx+bw-14,y);ctx.lineTo(bx+bw,y);ctx.stroke();texto(ctx,v+' mL',bx+bw+4,y+3,'#475569','9px Outfit,sans-serif');}
    var t=performance.now()/1000;pts.forEach(function(p){var x=bx+6+p.u*(bw-12)+Math.sin(t+p.f)*3,y=yl+6+p.w*(hl-12)+Math.cos(t*0.8+p.f)*3;if(hl>12)circ(ctx,x,y,2.2,'#1e3a8a');});
    var n=m/M,lx=bx+bw+64,lw=W-lx-10;ctx.fillStyle='#0d2d42';ctx.fillRect(lx,by,lw,170);
    var filas=[['Moles de soluto',coma(n,4)+' mol'],['Volumen total',Vt+' mL'],['Molaridad',coma(C,3)+' mol/L'],['% m/v',coma(m/Vt*100,2)+' %'],['g/L',coma(m/(Vt/1000),1)+' g/L'],['ppm (mg/L)',Math.round(m*1000/(Vt/1000)).toLocaleString('es-CO')]];
    filas.forEach(function(f,i){texto(ctx,f[0],lx+10,by+24+i*25,'#94a3b8','11px Outfit,sans-serif');texto(ctx,f[1],lx+lw-10,by+24+i*25,'#4ade80','700 12px JetBrains Mono,monospace','right');});
    if(agua>0){var C1=m/M/(Vs/1000);texto(ctx,'C₁V₁ = '+coma(C1,3)+' × '+Vs+' = '+coma(C1*Vs,1),lx+4,by+196,'#0d2d42','700 11px Outfit,sans-serif');texto(ctx,'C₂V₂ = '+coma(C,3)+' × '+Vt+' = '+coma(C*Vt,1),lx+4,by+214,'#0d2d42','700 11px Outfit,sans-serif');
      texto(ctx,'Los puntos (moles) no cambian; el color se aclara.',lx+4,by+234,'#475569','10px Outfit,sans-serif');}
  }
  var A=animar(L,paso);botonPausa(A,c2);
  box._prueba=function(cfg){if(cfg.m!=null){rm.value=cfg.m;rm.dispatchEvent(new Event('input'));}if(cfg.V!=null){rv.value=cfg.V;rv.dispatchEvent(new Event('input'));}if(cfg.agua!=null){rA.value=cfg.agua;rA.dispatchEvent(new Event('input'));}paso(0);return {C:m/M/((Vs+agua)/1000)};};
};

function iniciar(){document.querySelectorAll('.sim[data-sim]').forEach(function(b){if(b.dataset.listo)return;b.dataset.listo='1';var f=SIM[b.dataset.sim];if(f)try{f(b);}catch(e){b.innerHTML='<p>No se pudo iniciar la simulación.</p>';if(window.console)console.error(e);}});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciar);else iniciar();
window.SIM10=SIM;
})();
