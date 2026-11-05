/* ═══════════════════════════════════════════════════════════════════════
   IonNom — simulaciones en canvas de los temas de la SED para 10.°
   Cada página pone <div class="sim" data-sim="nombre"></div>:
   - vasoPH   (ph.html)        gotas de ácido fuerte, ácido débil y base
   - haber    (industria.html) reactor N₂ + 3 H₂ → 2 NH₃ y reactivo limitante
   - cilindro (modelos.html)   gas en un cilindro con émbolo: la presión sale
                               de los choques de las partículas (Boyle/Charles)
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
  o.size=function(){var dpr=Math.min(window.devicePixelRatio||1,2),w=Math.max(280,Math.min(box.clientWidth||640,900));
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

function iniciar(){document.querySelectorAll('.sim[data-sim]').forEach(function(b){if(b.dataset.listo)return;b.dataset.listo='1';var f=SIM[b.dataset.sim];if(f)try{f(b);}catch(e){b.innerHTML='<p>No se pudo iniciar la simulación.</p>';if(window.console)console.error(e);}});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciar);else iniciar();
window.SIM10=SIM;
})();
