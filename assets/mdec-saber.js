/* mdec-saber.js — Preguntas de selección múltiple del método MDEC (modelo propio del docente) para
   evaluaciones, talleres, guías y el «Banco de preguntas» de IonNom. Se arman solas, siempre iguales,
   a partir de assets/mdec-compuestos.js (cada compuesto iónico separado en sus iones con su carga).
   Llevan mdec:true: NO se enlazan a ningún DBA ni estándar (regla del docente, 26-11-2026).
   Tres tipos, 4 de cada uno por tema:
     1. Anión: en el compuesto …, ¿cuál es el anión (u oxoanión, u OH⁻) con su carga?
     2. Catión: en el compuesto …, ¿cuál es el catión con su carga? (en los ácidos: ¿cuál es el anión?)
     3. Armar: con el catión … y el anión …, ¿cuál es la fórmula del compuesto neutro?
   Se carga después de assets/docente-datos.js y de assets/mdec-compuestos.js. */
(function(){
'use strict';
var L=window.MDEC_COMP,D=window.DOCENTE_DATOS;if(!Array.isArray(L)||!D||!Array.isArray(D.SABER))return;
var SUB='₀₁₂₃₄₅₆₇₈₉',SUP={'1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷'};
var PARTE={cat:'catión',an:'anión',oh:'hidróxido',ox:'oxoanión'};
/* Colores del método (la parte más importante del MDEC): catión ámbar, anión azul, OH⁻ rosado, oxoanión verde */
var COL={cat:['#E69F00','#fcf2db','#8a5f00'],an:['#0072B2','#dbebf4','#00659e'],oh:['#CC79A7','#f8ecf3','#8d5373'],ox:['#009E73','#dbf1eb','#007253']};
function chip(t,cls){var c=COL[cls];return '<span style="display:inline-block;padding:0 6px;margin:0 1px;border-radius:6px;font-weight:700;border:1.5px solid '+c[0]+';background:'+c[1]+';color:'+c[2]+'">'+t+'</span>';}
function txtColor(t,cls){return '<b style="color:'+COL[cls][2]+'">'+t+'</b>';}
var LEYENDA=chip('catión','cat')+' '+chip('anión','an')+' '+chip('OH⁻','oh')+' '+chip('oxoanión','ox');
/* fórmula pintada: el catión (con su subíndice o paréntesis) en ámbar y el resto con el color del anión */
function formulaColor(f,cat,cls){var bc=base(cat),i=f.indexOf(bc);if(i!==0&&f.indexOf('('+bc+')')===0)bc='('+bc+')';
  var m=f.slice(bc.length).match(/^[₀-₉]*/)[0],pc=f.slice(0,bc.length+m.length);return txtColor(pc,'cat')+txtColor(f.slice(pc.length),cls);}
var SIMPLES=['H₃AsO₃','H₄SiO₄'];
var POR_TIPO=4;
var semilla=17;function azar(){semilla=(semilla*16807)%2147483647;return semilla/2147483647;}
function sub(n){return n>1?String(n).replace(/\d/g,function(d){return SUB[d];}):'';}
function carga(q){return (Math.abs(q)===1?'':String(Math.abs(q)).replace(/\d/g,function(d){return SUP[d];}))+(q>0?'⁺':'⁻');}
/* parte del ion sin la carga: «SO₄²⁻» → «SO₄» */
function base(t){return t.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+$/,'');}
function poliatomico(b){return /[₀-₉]|[A-Z].*[A-Z]/.test(b);}
function formula(cat,nc,an,na){
  var bc=base(cat),ba=base(an);
  var pc=poliatomico(bc)&&nc>1?'('+bc+')'+sub(nc):bc+sub(nc);
  var pa=poliatomico(ba)&&na>1?'('+ba+')'+sub(na):ba+sub(na);
  return pc+pa;
}
function mcd(a,b){return b?mcd(b,a%b):a;}
var porTema={};L.forEach(function(c){(porTema[c.g]=porTema[c.g]||[]).push(c);});
/* cargas que cada elemento tiene en otros compuestos del banco (distractores creíbles) y aniones reales */
var cargasDe={},aniones={};L.forEach(function(c){var b=base(c.cat[0]);(cargasDe[b]=cargasDe[b]||[]);if(cargasDe[b].indexOf(c.cat[2])<0)cargasDe[b].push(c.cat[2]);aniones[c.an[0]]=c.an[3];});
function elem(b){return (b.match(/[A-Z][a-z]?/)||[''])[0];}
/* aniones parecidos: mismo elemento central (SO₄²⁻ ↔ SO₃²⁻, ClO₃⁻ ↔ ClO⁻…) o el mismo con otra carga posible */
function anionesParecidos(an){var b=base(an),out=[];Object.keys(aniones).forEach(function(x){if(x===an)return;var bx=base(x);
  var e1=b.replace(/^H[₀-₉]*/,''),e2=bx.replace(/^H[₀-₉]*/,'');if(elem(e1)===elem(e2)&&elem(e1)!=='O'&&out.indexOf(x)<0)out.push(x);});return out;}
var nuevas=[],CTX='En el método MDEC de IonNom cada compuesto iónico se lee en sus partes, cada una con su color: el catión, el anión (o el oxoanión, o el OH⁻) y la carga de cada uno.',CTXH='En el método MDEC de IonNom cada compuesto iónico se lee en sus partes, cada una con su color: '+LEYENDA+', y la carga de cada una.';
Object.keys(porTema).forEach(function(t){
  var lista=porTema[t].slice().sort(function(a,b){return (b.an[1]+b.cat[1]-a.an[1]-a.cat[1])||(a.f<b.f?-1:a.f>b.f?1:0);});
  var cuenta={an:0,cat:0,arm:0},acido=(t==='ac-hid'||t==='ac-ox'),turno=0;
  lista.forEach(function(c){
    var hecho=false;
    for(var kk=0;kk<3&&!hecho;kk++){var tipoTurno=['an','cat','arm'][(turno+kk)%3];
    var cat=c.cat[0],an=c.an[0],qa=c.an[2],qc=c.cat[2],cls=c.an[3];
    // 1. el anión con su carga
    if(tipoTurno==='an'&&cuenta.an<POR_TIPO){
      /* distractores: el mismo ion con otra carga, iones reales parecidos y el anión monoatómico del elemento central */
      var ops=[an],b=base(an);
      anionesParecidos(an).slice(0,2).forEach(function(x){ops.push(x);});
      [qa-1,qa+1].forEach(function(q){if(q<0&&q!==qa&&ops.length<4)ops.push(b+carga(q));});
      if(ops.length<4&&cls==='ox'){var ec=elem(b.replace(/^H[₀-₉]*/,''));var mono=Object.keys(aniones).filter(function(x){return base(x)===ec;})[0];if(mono&&ops.indexOf(mono)<0)ops.push(mono);}
      ops=ops.filter(function(x,i){return ops.indexOf(x)===i;}).slice(0,4);
      if(ops.length===4){
        var enun=acido?'Disuelto en agua, el ácido '+c.f+' se separa en iones al liberar todos sus H⁺. ¿Cuál es el '+PARTE[cls]+', con su carga?':'En el compuesto '+c.f+', ¿cuál es el '+PARTE[cls]+', con su carga?';
        var enunH=acido?'Disuelto en agua, el ácido '+formulaColor(c.f,cat,cls)+' se separa en iones al liberar todos sus H⁺. ¿Cuál es el '+txtColor(PARTE[cls],cls)+', con su carga?':'En el compuesto '+formulaColor(c.f,cat,cls)+', ¿cuál es el '+txtColor(PARTE[cls],cls)+', con su carga?';
        nuevas.push({tema:t,c:'uso',mdec:true,tipoMdec:'anion',ctx:CTX,q:enun,o:ops,html:{ctx:CTXH,q:enunH},
          exp:c.f+' se separa en '+c.cat[1]+' '+cat+' y '+c.an[1]+' '+an+': la carga total es '+(c.cat[1]*qc)+' − '+(c.an[1]*-qa)+' = 0.'});
        cuenta.an++;hecho=true;}
    }
    // 2. el catión con su carga (en los ácidos el catión siempre es H⁺: se pregunta cuántos H⁺ libera)
    if(tipoTurno==='cat'&&cuenta.cat<POR_TIPO&&!(acido&&SIMPLES.indexOf(c.f)>=0)&&!/[₀-₉]/.test(base(cat))&&base(cat)!=='NH₄'){
      var ops2,q2,q2h;
      if(acido){q2='En el ácido '+c.f+', ¿cuántos iones H⁺ puede liberar como máximo cada molécula al disolverse en agua?';q2h='En el ácido '+formulaColor(c.f,cat,cls)+', ¿cuántos iones '+chip('H⁺','cat')+' puede liberar como máximo cada molécula al disolverse en agua?';
        /* distractores: contar todos los H, contar los O del anión, o pensar que suelta uno solo */
        var nO=(base(an).match(/O([₀-₉]*)/)||[]);nO=nO.length?(nO[1]?SUB.indexOf(nO[1]):1):0;
        var cand=[1,c.cat[1]+1,nO,c.cat[1]*2].filter(function(n,i,a){return n>0&&n!==c.cat[1]&&a.indexOf(n)===i;});
        ops2=[String(c.cat[1])].concat(cand.slice(0,3).map(String));}
      else{var bc=base(cat);q2='En el compuesto '+c.f+', ¿cuál es el catión, con su carga?';q2h='En el compuesto '+formulaColor(c.f,cat,cls)+', ¿cuál es el '+txtColor('catión','cat')+', con su carga?';
        /* distractores: otras cargas que ese elemento tiene en el banco y la carga sacada del subíndice del anión */
        var qs=(cargasDe[bc]||[]).filter(function(q){return q!==qc;});
        [c.an[1],qc+1,qc-1].forEach(function(q){if(q>0&&q<=4&&q!==qc&&qs.indexOf(q)<0)qs.push(q);});
        ops2=[cat].concat(qs.slice(0,3).map(function(q){return bc+carga(q);}));}
      if(ops2.length===4){hecho=true;
      nuevas.push({tema:t,c:'uso',mdec:true,tipoMdec:acido?'hplus':'cation',ctx:CTX,q:q2,o:ops2,html:{ctx:CTXH,q:q2h},
        exp:c.f+' tiene '+c.cat[1]+' '+cat+' y '+c.an[1]+' '+an+'. Las cargas se compensan: '+c.cat[1]+' × ('+(qc>0?'+':'')+qc+') + '+c.an[1]+' × ('+qa+') = 0.'});
      cuenta.cat++;}
    }
    // 3. armar la fórmula con los iones (cruce de cargas y simplificación)
    if(tipoTurno==='arm'&&cuenta.arm<POR_TIPO){
      var bien=c.f,nc=c.cat[1],na=c.an[1],malas=[];
      var cruz=[-qa,qc];                                   // cruce sin simplificar
      [[1,1],[na,nc],cruz,[nc*2,na*2]].forEach(function(p){var f=formula(cat,p[0],an,p[1]);
        if(f.replace(/[()]/g,'')!==bien.replace(/[()]/g,'')&&malas.indexOf(f)<0)malas.push(f);});
      if(malas.length>=3){
        nuevas.push({tema:t,c:'uso',mdec:true,tipoMdec:'armar',ctx:CTX,
          q:'Con el catión '+cat+' y el '+PARTE[cls]+' '+an+', ¿cuál es la fórmula más sencilla del compuesto neutro?',o:[bien].concat(malas.slice(0,3)),
          html:{ctx:CTXH,q:'Con el catión '+chip(cat,'cat')+' y el '+PARTE[cls]+' '+chip(an,cls)+', ¿cuál es la fórmula más sencilla del compuesto neutro?',
            o:(function(){var o={};[bien].concat(malas.slice(0,3)).forEach(function(f){o[f]=formulaColor(f,cat,cls);});return o;})()},
          exp:'Se buscan los números más pequeños que dejen la carga total en cero: '+nc+' × ('+(qc>0?'+':'')+qc+') + '+na+' × ('+qa+') = 0 → '+bien+'.'});
        cuenta.arm++;hecho=true;}
    }
    }
    if(hecho)turno++;
  });
});
nuevas.forEach(function(q){D.SABER.push(q);});
window.MDEC_SABER=nuevas;
})();
