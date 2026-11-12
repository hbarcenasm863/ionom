/* ═══ IonNom — simulaciones nuevas (simx.js)
   Cada página pone <div data-simx="nombre" data-titulo="…"></div> y este archivo arma el canvas,
   los controles y la animación (con botón de pantalla completa de pantalla.js):
   - titulacion    (ph.html)         bureta, indicador y curva de titulación ácido-base
   - pila          (reacciones.html) pila galvánica con puente salino y voltímetro
   - cambioEstado  (modelos.html)    curva de calentamiento del agua con partículas
   - colisiones    (reacciones.html) choques efectivos, temperatura y catalizador
   - cristal       (enlace.html)     cristal de NaCl en 3D que se gira con el dedo
   Se pausan solas cuando no se ven y arrancan en pausa si el sistema pide «reducir movimiento».
   Son MODELOS: simplifican la realidad para mostrar la idea central. ═══ */
(function(){
'use strict';
var PI2=Math.PI*2,SIMX={};
var css='.sx{margin:14px 0;border:1.5px solid #cbd5e1;border-radius:14px;background:#fff;color:#0d2d42;padding:10px;overflow:hidden}'+
'.sx .sx-cv{display:block;margin:0 auto;border-radius:10px;touch-action:none;max-width:100%}'+
'.sx .sx-ctl{display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;margin:8px 2px 0}'+
'.sx .sx-seg{display:inline-flex;flex-wrap:wrap;gap:4px}'+
'.sx .sx-seg button,.sx .sx-btn{font:700 .84rem/1.1 inherit;font-family:inherit;border:1.5px solid #94a3b8;background:#fff;color:#0d2d42;border-radius:999px;padding:7px 12px;min-height:34px;cursor:pointer}'+
'.sx .sx-seg button.on,.sx .sx-btn.on{background:#0d2d42;color:#fff;border-color:#0d2d42}'+
'.sx .sx-rng{display:flex;align-items:center;gap:8px;font-size:.85rem;font-weight:700;color:#334155}'+
'.sx .sx-rng input{width:210px;max-width:52vw}'+
'.sx .sx-rng b{font-family:monospace;color:#0f4c75;min-width:5.5em}'+
'.sx .sx-msg{margin-top:8px;font-size:.88rem;line-height:1.6;color:#334155;background:#f1f5f9;border-radius:10px;padding:9px 12px}'+
'@media(max-width:520px){.sx .sx-rng{flex-wrap:wrap;max-width:100%}.sx .sx-rng input{width:100%;max-width:100%;flex:1 1 160px}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
function el(tag,attrs,html){var x=document.createElement(tag);for(var k in attrs||{})x.setAttribute(k,attrs[k]);if(html!=null)x.innerHTML=html;return x;}
function coma(v,d){return v.toFixed(d).replace('.',',');}
function rnd(a,b){return a+Math.random()*(b-a);}
function cl(x,a,b){return x<a?a:x>b?b:x;}
function sm(a,b,x){var t=cl((x-a)/(b-a),0,1);return t*t*(3-2*t);}
/* Canvas nítido en cualquier pantalla; en pantalla completa se agranda a lo que quepa. */
function lienzo(box,ratio,alt){
  var cv=el('canvas',{role:'img','aria-label':alt||'Simulación'});cv.className='sx-cv';box.appendChild(cv);
  var ctx=cv.getContext('2d'),o={cv:cv,ctx:ctx,W:0,H:0};
  o.size=function(){var dpr=Math.min(window.devicePixelRatio||1,2),full=box.classList.contains('en-pantalla'),
    w=full?Math.max(280,Math.min(box.clientWidth-40,1500,Math.round((window.innerHeight-150)/ratio))):Math.max(280,Math.min(box.clientWidth-22||640,900));
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
  if('ResizeObserver' in window){var anc=0;new ResizeObserver(function(){var w=L.cv.parentNode.clientWidth;if(Math.abs(w-anc)>2){anc=w;L.size();pedir();}}).observe(L.cv.parentNode);}
  pedir();
  return {get corre(){return corre;},alternar:function(){corre=!corre;if(corre)pedir();return corre;},dibujar:pedir,play:function(){corre=true;pedir();}};
}
function fila(box){var f=el('div',{class:'sx-ctl'});box.appendChild(f);return f;}
function boton(cont,txt,fn){var b=el('button',{type:'button',class:'sx-btn'},txt);b.addEventListener('click',function(){fn(b);});cont.appendChild(b);return b;}
function botonPausa(A,cont){return boton(cont,A.corre?'⏸ Pausar':'▶ Animar',function(b){b.textContent=A.alternar()?'⏸ Pausar':'▶ Animar';});}
function deslizador(cont,etq,min,max,paso,val,fn){var l=el('label',{class:'sx-rng'});l.innerHTML='<span>'+etq+'</span>';
  var r=el('input',{type:'range',min:min,max:max,step:paso,value:val});var v=el('b');l.appendChild(r);l.appendChild(v);cont.appendChild(l);
  function upd(){v.textContent=fn(+r.value);}r.addEventListener('input',upd);upd();r._upd=upd;return r;}
function pildoras(cont,ops,ini,fn){var s=el('div',{class:'sx-seg',role:'group'});ops.forEach(function(o){var b=el('button',{type:'button'},o[1]);b.dataset.k=o[0];if(o[0]===ini)b.classList.add('on');s.appendChild(b);});
  s.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;s.querySelectorAll('button').forEach(function(x){x.classList.toggle('on',x===b);});fn(b.dataset.k);});cont.appendChild(s);return s;}
function nota(box,html){var n=el('div',{class:'sx-msg','aria-live':'polite'},html);box.appendChild(n);return n;}
function circ(ctx,x,y,r,c){ctx.beginPath();ctx.arc(x,y,r,0,PI2);ctx.fillStyle=c;ctx.fill();}
function txt(ctx,t,x,y,c,f,al){ctx.fillStyle=c||'#0d2d42';ctx.font=f||'700 12px sans-serif';ctx.textAlign=al||'left';ctx.fillText(t,x,y);}
function bola(ctx,x,y,r,c){var g=ctx.createRadialGradient(x-r*.35,y-r*.35,r*.1,x,y,r);g.addColorStop(0,'#fff');g.addColorStop(.25,c);g.addColorStop(1,shade(c,-.45));ctx.beginPath();ctx.arc(x,y,r,0,PI2);ctx.fillStyle=g;ctx.fill();}
function shade(h,f){var n=parseInt(h.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;function m(v){return Math.round(f<0?v*(1+f):v+(255-v)*f);}return 'rgb('+m(r)+','+m(g)+','+m(b)+')';}
var FUENTE='700 12px "Outfit",sans-serif';

/* ── 1. Titulación ácido-base (ph.html) ─────────────────────────────────
   25,0 mL de ácido 0,100 M en el matraz y NaOH 0,100 M en la bureta. El pH
   sale del balance de cargas [Na⁺] + [H⁺] = [A⁻] + [OH⁻] (ácido fuerte: A⁻
   no se hidroliza; débil: Ka del ácido acético = 1,8×10⁻⁵). */
SIMX.titulacion=function(box){
  var L=lienzo(box,0.62,'Titulación: una bureta agrega NaOH a un matraz con ácido e indicador, y una curva muestra el pH'),ctx=L.ctx;
  var acido='fuerte',ind='fenolftaleina',V=0,auto=false,Kw=1e-14;
  var IND={fenolftaleina:{n:'Fenolftaleína',lo:8.2,hi:10,a:[246,248,250],b:[219,39,119]},
           bromotimol:{n:'Azul de bromotimol',lo:6.0,hi:7.6,a:[250,204,21],b:[37,99,235]},
           metilo:{n:'Anaranjado de metilo',lo:3.1,hi:4.4,a:[220,38,38],b:[250,204,21]}};
  function pH(v){var Ca=2.5/(25+v),Na=0.1*v/(25+v),Ka=acido==='fuerte'?1e6:1.8e-5,lo=-14,hi=0;
    for(var i=0;i<60;i++){var m=(lo+hi)/2,h=Math.pow(10,m),f=Na+h-Ca*Ka/(Ka+h)-Kw/h;if(f>0)hi=m;else lo=m;}return -(lo+hi)/2;}
  function color(p){var I=IND[ind],t=cl((p-I.lo)/(I.hi-I.lo),0,1);return 'rgb('+[0,1,2].map(function(i){return Math.round(I.a[i]+(I.b[i]-I.a[i])*t);}).join(',')+')';}
  var c1=fila(box);
  pildoras(c1,[['fuerte','Ácido fuerte (HCl)'],['debil','Ácido débil (vinagre)']],acido,function(k){acido=k;A.dibujar();});
  pildoras(c1,[['fenolftaleina','Fenolftaleína'],['bromotimol','Azul de bromotimol'],['metilo','Anaranjado de metilo']],ind,function(k){ind=k;A.dibujar();});
  var c2=fila(box);
  var rg=deslizador(c2,'NaOH agregado',0,50,0.1,0,function(v){V=v;return coma(v,1)+' mL';});
  rg.addEventListener('input',function(){auto=false;A.dibujar();});
  var bA=boton(c2,'▶ Agregar solo',function(b){auto=!auto;if(auto&&V>=50){V=0;}b.textContent=auto?'⏸ Detener':'▶ Agregar solo';A.play();});
  boton(c2,'↺ Reiniciar',function(){V=0;auto=false;rg.value=0;rg._upd();bA.textContent='▶ Agregar solo';A.dibujar();});
  var msg=nota(box,'');var gota=0;
  function paso(dt){
    if(auto){V=Math.min(50,V+dt*(Math.abs(V-25)<2.5?1.2:4));rg.value=V;rg._upd();if(V>=50){auto=false;bA.textContent='▶ Agregar solo';}gota+=dt*8;}
    var W=L.W,H=L.H,p=pH(V),eq=pH(25);
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#f8fbff';ctx.fillRect(0,0,W,H);
    /* bureta */
    var bx=W*.14,bw=W*.045,by=H*.05,bh=H*.5;
    ctx.fillStyle='#dbeafe';ctx.fillRect(bx,by,bw,bh);var lv=bh*(1-V/50);ctx.fillStyle='#bfdbfe';ctx.fillRect(bx,by,bw,bh);ctx.fillStyle='#60a5fa';ctx.fillRect(bx,by+bh-lv,bw,lv);
    ctx.strokeStyle='#0d2d42';ctx.lineWidth=2;ctx.strokeRect(bx,by,bw,bh);
    for(var i=0;i<=10;i++){ctx.beginPath();ctx.moveTo(bx+bw,by+bh*i/10);ctx.lineTo(bx+bw+(i%5?4:8),by+bh*i/10);ctx.stroke();}
    ctx.fillStyle='#0d2d42';ctx.fillRect(bx+bw*.15,by+bh,bw*.7,H*.03);ctx.fillRect(bx+bw*.5-2,by+bh+H*.03,4,H*.05);
    txt(ctx,'NaOH 0,100 M',bx+bw/2,by-4,'#0d2d42','700 11px sans-serif','center');
    /* gotas */
    if(V<50&&(auto||drag())){var gy=by+bh+H*.09+((gota*60)%(H*.14));circ(ctx,bx+bw/2,gy,3,'#60a5fa');}
    function drag(){return false;}
    /* matraz */
    var fx=bx+bw/2,fy=H*.8,fr=H*.15;
    ctx.beginPath();ctx.moveTo(fx-fr*.28,fy-fr*1.5);ctx.lineTo(fx-fr*.28,fy-fr*.7);ctx.lineTo(fx-fr,fy+fr*.8);ctx.lineTo(fx+fr,fy+fr*.8);ctx.lineTo(fx+fr*.28,fy-fr*.7);ctx.lineTo(fx+fr*.28,fy-fr*1.5);ctx.closePath();
    ctx.save();ctx.clip();ctx.fillStyle=color(p);ctx.fillRect(fx-fr,fy-fr*.45,fr*2,fr*1.4);ctx.restore();
    ctx.strokeStyle='#0d2d42';ctx.lineWidth=2.5;ctx.stroke();txt(ctx,'25,0 mL de ácido + '+IND[ind].n.toLowerCase(),fx,fy+fr*1.15,'#0d2d42','700 11px sans-serif','center');
    /* curva */
    var gx=W*.40,gw=W*.55,gy=H*.84,gh=H*.68;
    ctx.fillStyle='#fff';ctx.fillRect(gx,gy-gh,gw,gh);
    var I=IND[ind];ctx.fillStyle='rgba(168,85,247,.16)';ctx.fillRect(gx,gy-gh*I.hi/14,gw,gh*(I.hi-I.lo)/14);txt(ctx,'zona de viraje del indicador',gx+gw-4,gy-gh*I.hi/14+11,'#7e22ce','700 10px sans-serif','right');
    ctx.strokeStyle='#94a3b8';ctx.lineWidth=1.5;ctx.strokeRect(gx,gy-gh,gw,gh);
    for(var q=0;q<=14;q+=2){var yy=gy-gh*q/14;txt(ctx,q,gx-6,yy+4,'#64748b','10px sans-serif','right');}
    for(q=0;q<=50;q+=10)txt(ctx,q,gx+gw*q/50,gy+14,'#64748b','10px sans-serif','center');
    txt(ctx,'pH',gx-24,gy-gh-6,'#475569','700 11px sans-serif');txt(ctx,'volumen de NaOH agregado (mL)',gx+gw/2,gy+30,'#475569','700 11px sans-serif','center');
    ctx.strokeStyle='#2563eb';ctx.lineWidth=2.5;ctx.beginPath();for(var j=0;j<=250;j++){var v=j/5,px=gx+gw*v/50,py=gy-gh*pH(v)/14;j?ctx.lineTo(px,py):ctx.moveTo(px,py);}ctx.stroke();
    ctx.strokeStyle='#dc2626';ctx.setLineDash([4,4]);ctx.beginPath();ctx.moveTo(gx+gw*.5,gy);ctx.lineTo(gx+gw*.5,gy-gh);ctx.stroke();ctx.setLineDash([]);txt(ctx,'equivalencia',gx+gw*.5+4,gy-gh+12,'#dc2626','700 10px sans-serif');
    circ(ctx,gx+gw*V/50,gy-gh*p/14,7,'#dc2626');
    txt(ctx,'pH = '+coma(p,2),gx+gw*.04,gy-gh*.9,'#0d2d42','800 14px sans-serif');
    var ok=ind==='fenolftaleina'?(acido==='debil'||true):ind==='bromotimol'?acido==='fuerte':false;
    var ad=acido==='fuerte'?'En la equivalencia el pH es <b>7,0</b>: solo quedan Na⁺ y Cl⁻ y el agua.':'En la equivalencia el pH es <b>'+coma(eq,1)+'</b> (básico): el acetato que se formó es una base débil y recoge H⁺ del agua.';
    var aj=Math.abs(V-25)<0.8?' <b>¡Punto de equivalencia!</b> '+ad:V<25?' Todavía sobra ácido.':' Ya sobra base: el pH sube rápido.';
    var vir=p>=I.hi?'ya cambió del todo':p>=I.lo?'está cambiando':'todavía no cambia';
    msg.innerHTML='Con <b>'+coma(V,1)+' mL</b> el pH es <b>'+coma(p,2)+'</b> y el indicador '+vir+'.'+aj+((V>=26&&acido==='debil'&&ind==='metilo')?' Nota que el anaranjado de metilo cambió <b>mucho antes</b> de la equivalencia: no sirve para este ácido.':'')+(V>=26&&acido==='fuerte'&&ind==='fenolftaleina'?' Para un ácido fuerte, la fenolftaleína también sirve: el salto de pH es enorme.':'');
  }
  var A=animar(L,paso);
};

/* ── 2. Pila galvánica: de la reacción redox a la corriente ──────────────
   Dos semiceldas unidas por un puente salino y un cable. Gana el electrodo
   de mayor potencial de reducción (cátodo); el otro se oxida (ánodo). */
SIMX.pila=function(box){
  var L=lienzo(box,0.66,'Pila galvánica con dos semiceldas, puente salino, cable con electrones y voltímetro'),ctx=L.ctx;
  var M={Mg:{E:-2.37,q:2,c:'#cbd5e1',sol:'#f1f5f9'},Zn:{E:-0.76,q:2,c:'#94a3b8',sol:'#f1f5f9'},Fe:{E:-0.44,q:2,c:'#78716c',sol:'#dcfce7'},Cu:{E:0.34,q:2,c:'#c2410c',sol:'#bfdbfe'},Ag:{E:0.80,q:1,c:'#e5e7eb',sol:'#f1f5f9'}};
  var PARES=[['Zn','Cu'],['Fe','Cu'],['Cu','Ag'],['Mg','Ag']],par=PARES[0],cerrado=true,t=0,El=[],Ia=[],Ic=[],mas=0;
  var c1=fila(box);
  pildoras(c1,PARES.map(function(p,i){return [String(i),p[0]+' | '+p[1]];}),'0',function(k){par=PARES[+k];mas=0;El=[];A.dibujar();});
  var bC=boton(c1,'🔌 Circuito cerrado',function(b){cerrado=!cerrado;b.textContent=cerrado?'🔌 Circuito cerrado':'⛔ Circuito abierto';A.play();});
  var msg=nota(box,'');
  function sup(q){return q===1?'⁺':'²⁺';}
  function paso(dt){
    var W=L.W,H=L.H,an=M[par[0]],ca=M[par[1]],V=ca.E-an.E;
    if(cerrado){mas=Math.min(1,mas+dt*.02);t+=dt;if(Math.random()<dt*(5+V*3))El.push(0);}
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#f8fbff';ctx.fillRect(0,0,W,H);
    var by=H*.5,bh=H*.42,bw=W*.3,x1=W*.08,x2=W*.62;
    [[x1,an,par[0]],[x2,ca,par[1]]].forEach(function(s,i){var x=s[0],m=s[1],nom=s[2];
      ctx.fillStyle=m.sol;ctx.fillRect(x,by+bh*.12,bw,bh*.88);ctx.strokeStyle='#0d2d42';ctx.lineWidth=2.5;ctx.strokeRect(x,by,bw,bh);
      var ancho=W*.035,ew=i===0?ancho*(1-.5*mas):ancho*(1+.5*mas);ctx.fillStyle=m.c;ctx.fillRect(x+bw*.5-ew/2,by-H*.3,ew,bh*.9+H*.2);ctx.strokeStyle='#0d2d42';ctx.lineWidth=1.5;ctx.strokeRect(x+bw*.5-ew/2,by-H*.3,ew,bh*.9+H*.2);
      txt(ctx,i===0?'ÁNODO (−) · oxidación':'CÁTODO (+) · reducción',x+bw/2,by+bh+16,i===0?'#b91c1c':'#15803d','800 '+Math.max(10,Math.round(W/62))+'px sans-serif','center');
      txt(ctx,nom+sup(m.q)+' / '+nom,x+bw/2,by+bh*.3,'#0d2d42','800 '+Math.max(11,Math.round(W/55))+'px sans-serif','center');
      /* iones en la solución */
      var n=7;for(var k=0;k<n;k++){var ph=t*(.6+k*.07)+k*1.7,px=x+bw*(.12+.76*((k*.37+(i?0:0))%1)),py=by+bh*(.38+.5*((k*.53)%1)),ox=Math.sin(ph)*5,oy=Math.cos(ph*1.3)*5;
        var ionx=px<x+bw*.5-W*.02||px>x+bw*.5+W*.02;if(ionx)circ(ctx,px+ox,py+oy,5,i===0?(cerrado?'#ef4444':'#fca5a5'):(cerrado?'#3b82f6':'#93c5fd'));}
      if(cerrado&&i===0&&Math.random()<dt*2)Ia.push({x:x+bw*.5+W*.03,y:by+bh*.9,t:0});
    });
    ctx.globalAlpha=.9;Ia=Ia.filter(function(o){o.t+=dt;o.y-=dt*H*.1;return o.t<2;});Ia.forEach(function(o){circ(ctx,o.x,o.y,4,'#ef4444');});ctx.globalAlpha=1;
    /* puente salino */
    var py=H*.36,sx1=x1+bw*.78,sx2=x2+bw*.22;ctx.strokeStyle='#a16207';ctx.lineWidth=H*.045;ctx.lineCap='butt';ctx.beginPath();ctx.moveTo(sx1,by+bh*.4);ctx.lineTo(sx1,py);ctx.lineTo(sx2,py);ctx.lineTo(sx2,by+bh*.4);ctx.stroke();
    ctx.strokeStyle='#fde68a';ctx.lineWidth=H*.03;ctx.stroke();txt(ctx,'puente salino',(sx1+sx2)/2,py-H*.04,'#a16207','700 11px sans-serif','center');
    if(cerrado){for(var u=0;u<3;u++){var ph2=((t*.25+u/3)%1);circ(ctx,sx1+(sx2-sx1)*ph2,py,4.5,'#2563eb');circ(ctx,sx2-(sx2-sx1)*ph2,py,4.5,'#ef4444');}}
    /* cable y electrones */
    var wy=by-H*.3,ax=x1+bw*.5,cx=x2+bw*.5,vx=(ax+cx)/2;ctx.strokeStyle='#334155';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(ax,wy);ctx.lineTo(cx,wy);ctx.stroke();
    El=El.map(function(e){return e+dt*(.3);}).filter(function(e){return e<1;});
    if(cerrado)El.forEach(function(e){var x=ax+(cx-ax)*e;circ(ctx,x,wy,5,'#facc15');txt(ctx,'e⁻',x,wy-8,'#a16207','700 10px sans-serif','center');});
    ctx.fillStyle='#fff';ctx.strokeStyle='#0d2d42';ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(vx,wy,H*.085,0,PI2);ctx.fill();ctx.stroke();
    txt(ctx,coma(V,2)+' V',vx,wy+5,'#0d2d42','800 '+Math.max(11,Math.round(W/55))+'px sans-serif','center');txt(ctx,'voltímetro',vx,wy-H*.11,'#475569','700 10px sans-serif','center');
    var qa=an.q,qc=ca.q,ea=qa+'e',cat=ca.q,an_=an.q;
    msg.innerHTML='<b>Ánodo ('+par[0]+'):</b> '+par[0]+' → '+par[0]+sup(an.q)+' + '+an.q+' e⁻ (el electrodo se desgasta). <b>Cátodo ('+par[1]+'):</b> '+par[1]+sup(ca.q)+' + '+ca.q+' e⁻ → '+par[1]+' (el electrodo crece). Los electrones van <b>del ánodo al cátodo</b> por el cable y los iones del puente cierran el circuito. Voltaje = E°cátodo − E°ánodo = '+coma(ca.E,2)+' − ('+coma(an.E,2)+') = <b>'+coma(V,2)+' V</b>.'+(cerrado?'':' Con el circuito abierto el voltímetro marca el potencial, pero no hay corriente.');
  }
  var A=animar(L,paso);
};

/* ── 3. Cambios de estado y curva de calentamiento del agua ──────────────
   Se agrega calor a 1 g de hielo a −20 °C. Mientras se funde o hierve, la
   temperatura no sube: el calor rompe atracciones, no acelera partículas. */
SIMX.cambioEstado=function(box){
  var L=lienzo(box,0.6,'Partículas de agua que pasan de sólido a líquido y a gas mientras se agrega calor, con la curva de calentamiento'),ctx=L.ctx;
  var QS=[0,41.8,375.8,793.8,3049.8,3089.8];/* J por gramo */
  var Q=0,N=36,P=[],auto=false;
  function T(q){if(q<=QS[1])return -20+q/2.09;if(q<=QS[2])return 0;if(q<=QS[3])return (q-QS[2])/4.18;if(q<=QS[4])return 100;return 100+(q-QS[4])/2.0;}
  function fase(q){return q<QS[1]?'Hielo (sólido)':q<QS[2]?'Fusión: sólido + líquido':q<QS[3]?'Agua líquida':q<QS[4]?'Ebullición: líquido + gas':'Vapor (gas)';}
  var c1=fila(box);
  var rg=deslizador(c1,'Calor agregado',0,QS[5],1,0,function(v){Q=v;return Math.round(v)+' J';});
  rg.addEventListener('input',function(){auto=false;A.dibujar();});
  var bA=boton(c1,'▶ Calentar solo',function(b){auto=!auto;if(auto&&Q>=QS[5])Q=0;b.textContent=auto?'⏸ Detener':'▶ Calentar solo';A.play();});
  boton(c1,'↺ Reiniciar',function(){Q=0;auto=false;rg.value=0;rg._upd();bA.textContent='▶ Calentar solo';});
  var msg=nota(box,'');
  for(var i=0;i<N;i++)P.push({hx:(i%6),hy:Math.floor(i/6),x:0,y:0,vx:Math.random()-.5,vy:Math.random()-.5,u:i/N});
  function paso(dt){
    if(auto){Q=Math.min(QS[5],Q+dt*QS[5]/(Q>QS[1]&&Q<QS[2]||Q>QS[3]&&Q<QS[4]?10:5.5)*(Q>QS[1]&&Q<QS[2]?.6:Q>QS[3]&&Q<QS[4]?.45:1));rg.value=Q;rg._upd();if(Q>=QS[5]){auto=false;bA.textContent='▶ Calentar solo';}}
    var W=L.W,H=L.H,tp=T(Q),fm=sm(0,1,cl((Q-QS[1])/(QS[2]-QS[1]),0,1)),fb=cl((Q-QS[3])/(QS[4]-QS[3]),0,1);
    if(Q>=QS[4])fb=1;if(Q<=QS[1])fm=0;if(Q>=QS[2])fm=1;
    var bx=W*.04,bw=W*.36,by=H*.08,bh=H*.74;
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#f8fbff';ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#fff';ctx.fillRect(bx,by,bw,bh);ctx.strokeStyle='#0d2d42';ctx.lineWidth=2.5;ctx.strokeRect(bx,by,bw,bh);
    var amp=cl((tp+20)/60,0,1.6)*3+1,sp=18+cl(tp+20,0,120)*.8,r=Math.min(bw/16,9);
    P.forEach(function(p,i){
      var tx,ty,modo=p.u<fb?2:p.u<fm?1:0;
      if(modo===0){tx=bx+bw*.13+p.hx*bw*.148;ty=by+bh-r*2.2-(5-p.hy)*bw*.115;p.x+=(tx-p.x)*Math.min(1,dt*6)+rnd(-1,1)*amp*dt*18;p.y+=(ty-p.y)*Math.min(1,dt*6)+rnd(-1,1)*amp*dt*18;if(p.x===0||isNaN(p.x)){p.x=tx;p.y=ty;}}
      else{var y0=modo===2?by+r:by+bh*.5,vmax=modo===2?sp*(Q>=QS[4]?1.6+(tp-100)/50:1.3):sp*.55;
        if(!p.m||p.m!==modo){p.m=modo;p.vx=rnd(-1,1)*vmax;p.vy=rnd(-1,1)*vmax;}
        p.vx+=rnd(-1,1)*200*dt;p.vy+=rnd(-1,1)*200*dt+(modo===1?60*dt:0);var v=Math.hypot(p.vx,p.vy);if(v>vmax){p.vx*=vmax/v;p.vy*=vmax/v;}
        p.x+=p.vx*dt;p.y+=p.vy*dt;if(p.x<bx+r){p.x=bx+r;p.vx=Math.abs(p.vx);}if(p.x>bx+bw-r){p.x=bx+bw-r;p.vx=-Math.abs(p.vx);}if(p.y<y0){p.y=y0;p.vy=Math.abs(p.vy);}if(p.y>by+bh-r){p.y=by+bh-r;p.vy=-Math.abs(p.vy);}}
      if(modo===0&&p.m){p.m=0;}
      bola(ctx,p.x,p.y,r,modo===0?'#7dd3fc':modo===1?'#3b82f6':'#94a3b8');});
    if(fm>0&&fm<1||(Q>QS[2]&&Q<QS[4])){ctx.fillStyle='rgba(59,130,246,.10)';ctx.fillRect(bx+1,by+bh*.5,bw-2,bh*.5-1);}
    txt(ctx,fase(Q),bx+bw/2,by+bh+H*.07,'#0d2d42','800 '+Math.max(11,Math.round(W/55))+'px sans-serif','center');
    txt(ctx,coma(tp,1)+' °C',bx+bw/2,by+bh+H*.14,'#b91c1c','800 '+Math.max(13,Math.round(W/45))+'px sans-serif','center');
    /* curva de calentamiento */
    var gx=W*.52,gw=W*.43,gy=H*.82,gh=H*.68;ctx.fillStyle='#fff';ctx.fillRect(gx,gy-gh,gw,gh);ctx.strokeStyle='#94a3b8';ctx.lineWidth=1.5;ctx.strokeRect(gx,gy-gh,gw,gh);
    function X(q){return gx+gw*q/QS[5];}function Y(t){return gy-gh*(t+30)/160;}
    [-20,0,50,100,120].forEach(function(v){txt(ctx,v+'°',gx-4,Y(v)+4,'#64748b','10px sans-serif','right');ctx.strokeStyle='#e2e8f0';ctx.beginPath();ctx.moveTo(gx,Y(v));ctx.lineTo(gx+gw,Y(v));ctx.stroke();});
    ctx.strokeStyle='#2563eb';ctx.lineWidth=2.5;ctx.beginPath();for(var q=0;q<=QS[5];q+=10){q?ctx.lineTo(X(q),Y(T(q))):ctx.moveTo(X(q),Y(T(q)));}ctx.stroke();
    circ(ctx,X(Q),Y(tp),7,'#dc2626');
    txt(ctx,'Temperatura',gx,gy-gh-6,'#475569','700 11px sans-serif');txt(ctx,'calor agregado a 1 g de agua (J) →',gx+gw,gy+16,'#475569','700 11px sans-serif','right');
    txt(ctx,'fusión',X((QS[1]+QS[2])/2),Y(0)-8,'#0369a1','700 10px sans-serif','center');txt(ctx,'ebullición',X((QS[3]+QS[4])/2),Y(100)-8,'#0369a1','700 10px sans-serif','center');
    msg.innerHTML=(Q>QS[1]&&Q<QS[2])?'<b>Fusión:</b> la temperatura se queda en 0 °C mientras entra calor. Ese calor (334 J por gramo) rompe las atracciones del cristal de hielo; las partículas no se mueven más rápido todavía.':
      (Q>QS[3]&&Q<QS[4])?'<b>Ebullición:</b> se queda en 100 °C. Aquí se invierte la mayor cantidad de energía (2256 J por gramo): las partículas se separan por completo y salen como gas.':
      Q<=QS[1]?'En el hielo las partículas solo vibran en su lugar. Más calor → vibran más fuerte y sube la temperatura.':Q<QS[3]?'En el líquido las partículas se deslizan unas sobre otras. Más calor → más rápidas, y sube la temperatura.':'En el vapor las partículas están muy separadas y se mueven rápido por todo el recipiente.';
  }
  var A=animar(L,paso);
};

/* ── 4. Rapidez de reacción: choques efectivos (reacciones.html) ─────────
   A + B → C solo ocurre si el choque tiene energía suficiente (energía de
   activación). Subir T, concentrar o usar catalizador (Ea menor) aumenta los
   choques efectivos. */
SIMX.colisiones=function(box){
  var L=lienzo(box,0.56,'Partículas rojas y azules que chocan; solo reaccionan cuando el choque tiene suficiente energía'),ctx=L.ctx;
  var Tk=300,n=18,cat=false,P=[],eff=0,tot=0,hist=[],acu=0;
  var c1=fila(box);
  deslizador(c1,'Temperatura',250,450,10,Tk,function(v){Tk=v;return Math.round(v-273)+' °C';});
  deslizador(c1,'Cantidad de cada reactivo',6,34,1,n,function(v){var d=v!==n;n=v;if(d)ini();return v+' + '+v;});
  var c2=fila(box);boton(c2,'⚗️ Catalizador: no',function(b){cat=!cat;b.textContent='⚗️ Catalizador: '+(cat?'sí':'no');});
  boton(c2,'↺ Reiniciar',function(){ini();});
  var msg=nota(box,'');
  function gs(){return (Math.random()+Math.random()+Math.random()-1.5)*1.15;}
  function ph(){return L.H*.7;}
  function ini(){P=[];eff=0;tot=0;hist=[];for(var i=0;i<n;i++)['A','B'].forEach(function(k){P.push({k:k,x:rnd(10,L.W-10),y:rnd(10,ph()-10),vx:gs()*90,vy:gs()*90});});}
  ini();
  function paso(dt){
    var W=L.W,H=L.H,gh=H-ph()-6,r=Math.max(6,W/70),th=1.8*8100*(cat?.45:1),sc=Math.sqrt(Tk/300),Hh=ph();
    if(dt>0){acu+=dt;
      P.forEach(function(p){p.x+=p.vx*sc*dt;p.y+=p.vy*sc*dt;
        if(p.x<r){p.x=r;p.vx=Math.abs(p.vx);}if(p.x>W-r){p.x=W-r;p.vx=-Math.abs(p.vx);}if(p.y<r){p.y=r;p.vy=Math.abs(p.vy);}if(p.y>Hh-r){p.y=Hh-r;p.vy=-Math.abs(p.vy);}});
      for(var i=0;i<P.length;i++)for(var j=i+1;j<P.length;j++){var a=P[i],b=P[j],dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy),R=(a.k==='C'?1.25:1)*r+(b.k==='C'?1.25:1)*r;
        if(d<R&&d>0){var nx=dx/d,ny=dy/d,rv=(b.vx-a.vx)*nx+(b.vy-a.vy)*ny;if(rv>=0)continue;
          if(a.k!=='C'&&b.k!=='C'&&a.k!==b.k){tot++;var e2=Math.pow((b.vx-a.vx)*sc,2)+Math.pow((b.vy-a.vy)*sc,2);
            if(e2>th){eff++;P[i]={k:'C',x:(a.x+b.x)/2,y:(a.y+b.y)/2,vx:(a.vx+b.vx)/2,vy:(a.vy+b.vy)/2};P.splice(j,1);j--;continue;}}
          a.vx+=rv*nx;a.vy+=rv*ny;b.vx-=rv*nx;b.vy-=rv*ny;}}
      if(acu>.25){acu=0;hist.push(P.filter(function(p){return p.k==='C';}).length/n*100);if(hist.length>160)hist.shift();}}
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#f8fbff';ctx.fillRect(0,0,W,H);
    ctx.fillStyle='#fff';ctx.fillRect(0,0,W,Hh);ctx.strokeStyle='#0d2d42';ctx.lineWidth=2;ctx.strokeRect(1,1,W-2,Hh-2);
    P.forEach(function(p){if(p.k==='C')bola(ctx,p.x,p.y,r*1.25,'#a855f7');else bola(ctx,p.x,p.y,r,p.k==='A'?'#ef4444':'#3b82f6');});
    txt(ctx,'rojo = A · azul = B · morado = C (producto)',8,Hh+13,'#0d2d42','700 11px sans-serif');
    var gx=W*.08,gw=W*.55,gy=H-6,g2=gh-30;ctx.strokeStyle='#94a3b8';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(gx,gy-g2);ctx.lineTo(gx,gy);ctx.lineTo(gx+gw,gy);ctx.stroke();
    ctx.strokeStyle='#a855f7';ctx.lineWidth=2.5;ctx.beginPath();hist.forEach(function(h,i){var x=gx+gw*i/160,y=gy-g2*h/100;i?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.stroke();
    txt(ctx,'% de producto vs. tiempo',gx+4,gy-g2-3,'#475569','700 10px sans-serif');
    var fs='700 '+Math.max(11,Math.round(W/60))+'px sans-serif';
    txt(ctx,'Choques A–B: '+tot,W*.68,Hh+22,'#0d2d42',fs);txt(ctx,'Choques efectivos: '+eff,W*.68,Hh+22+gh*.3,'#7e22ce',fs);txt(ctx,'Efectividad: '+(tot?Math.round(eff/tot*100):0)+' %',W*.68,Hh+22+gh*.6,'#7e22ce',fs);
    msg.innerHTML='No todos los choques producen reacción: solo los que tienen <b>energía suficiente</b> (energía de activación). <b>Más temperatura</b> → partículas más rápidas → más choques efectivos. <b>Más cantidad</b> → más choques por segundo. Un <b>catalizador</b> baja la energía de activación sin gastarse: más choques sirven.';
  }
  var A=animar(L,paso);
};

/* ── 5. Cristal de NaCl en 3D (enlace.html) ───────────────────────────── */
SIMX.cristal=function(box){
  var L=lienzo(box,0.66,'Cristal de cloruro de sodio en 3D: iones sodio pequeños y cloruro grandes alternados'),ctx=L.ctx;
  var n=4,sep=true,vecinos=false,ry=.7,rx=-.45,auto=true,drag=null;
  var c1=fila(box);
  deslizador(c1,'Tamaño del cristal',3,6,1,n,function(v){n=v;return v+'×'+v+'×'+v+' iones';});
  var bS=boton(c1,'Bolas: separadas',function(b){sep=!sep;b.textContent='Bolas: '+(sep?'separadas':'tamaño real (en contacto)');A.play();});
  var bV=boton(c1,'🔍 Mostrar los 6 vecinos',function(b){vecinos=!vecinos;b.textContent=vecinos?'Ver todo el cristal':'🔍 Mostrar los 6 vecinos';A.play();});
  var bA=boton(c1,'⏸ Girar solo',function(b){auto=!auto;b.textContent=auto?'⏸ Girar solo':'▶ Girar solo';A.play();});
  var msg=nota(box,'');
  L.cv.style.cursor='grab';
  L.cv.addEventListener('pointerdown',function(e){drag={x:e.clientX,y:e.clientY};L.cv.setPointerCapture(e.pointerId);auto=false;bA.textContent='▶ Girar solo';});
  L.cv.addEventListener('pointermove',function(e){if(!drag)return;ry+=(e.clientX-drag.x)*.012;rx+=(e.clientY-drag.y)*.012;drag={x:e.clientX,y:e.clientY};A.dibujar();});
  ['pointerup','pointercancel'].forEach(function(k){L.cv.addEventListener(k,function(){drag=null;});});
  function paso(dt){
    if(auto&&!drag)ry+=dt*.5;
    var W=L.W,H=L.H,s=Math.min(W,H*1.5)/(n+3.4),c=(n-1)/2,mid=Math.floor(n/2);
    ctx.clearRect(0,0,W,H);ctx.fillStyle='#f8fbff';ctx.fillRect(0,0,W,H);
    var cy=Math.cos(ry),sy=Math.sin(ry),cx=Math.cos(rx),sx=Math.sin(rx),it=[];
    for(var i=0;i<n;i++)for(var j=0;j<n;j++)for(var k=0;k<n;k++){
      var x=i-c,y=j-c,z=k-c,x1=x*cy+z*sy,z1=-x*sy+z*cy,y1=y*cx-z1*sx,z2=y*sx+z1*cx,f=1/(1-z2*.045),na=(i+j+k)%2===0;
      var vec=(Math.abs(i-mid)+Math.abs(j-mid)+Math.abs(k-mid))<=1;
      it.push({x:W/2+x1*s*f,y:H/2+y1*s*f,z:z2,f:f,na:na,vec:vec,cen:i===mid&&j===mid&&k===mid});}
    it.sort(function(a,b){return a.z-b.z;});
    it.forEach(function(p){var r=s*(sep?(p.na?.17:.27):(p.na?.36:.64))*p.f*(sep?1:.7),dim=vecinos&&!p.vec;
      ctx.globalAlpha=dim?.12:1;bola(ctx,p.x,p.y,r,p.na?'#a855f7':'#22c55e');
      if(vecinos&&p.vec){ctx.strokeStyle=p.cen?'#facc15':'#0d2d42';ctx.lineWidth=p.cen?4:2;ctx.beginPath();ctx.arc(p.x,p.y,r+3,0,PI2);ctx.stroke();}ctx.globalAlpha=1;});
    ctx.fillStyle='#a855f7';ctx.beginPath();ctx.arc(16,H-34,7,0,PI2);ctx.fill();txt(ctx,'Na⁺ (pequeño: 102 pm)',28,H-30,'#0d2d42','700 11px sans-serif');
    ctx.fillStyle='#22c55e';ctx.beginPath();ctx.arc(16,H-14,9,0,PI2);ctx.fill();txt(ctx,'Cl⁻ (grande: 181 pm)',28,H-10,'#0d2d42','700 11px sans-serif');
    msg.innerHTML=vecinos?'Cada ion está rodeado por <b>6 iones de carga contraria</b> (número de coordinación 6): ese es el ion central con sus vecinos. Ninguna pareja Na⁺−Cl⁻ es «una molécula»: el cristal entero es una red de atracciones electrostáticas.':
      'Los iones se alternan en las tres direcciones, así las cargas opuestas quedan cerca y las iguales lejos. Por eso el NaCl es <b>duro, frágil</b> y funde a 801 °C. Fórmula: <b>NaCl</b> es solo la proporción 1 : 1. Arrastra para girarlo.';
  }
  var A=animar(L,paso);
};

function iniciar(){document.querySelectorAll('[data-simx]').forEach(function(b){if(b.dataset.listo)return;b.dataset.listo='1';b.classList.add('sx');
  if(!b.getAttribute('data-pantalla'))b.setAttribute('data-pantalla',b.getAttribute('data-titulo')||'la simulación');
  var f=SIMX[b.dataset.simx];if(f)try{f(b);}catch(e){b.innerHTML='<p>No se pudo iniciar la simulación.</p>';if(window.console)console.error(e);}});
  if(window.PANTALLA_MONTAR)window.PANTALLA_MONTAR();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciar);else iniciar();
window.SIMX=SIMX;
})();
