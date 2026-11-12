/* Genera assets/saber-juego.js: las preguntas tipo Saber 11 de
   assets/docente-datos.js que todavía no están en los bancos del juego
   (banco.js), en formato compacto para juego.html.
   Uso (desde la raíz del repositorio):  node herramientas/generar-saber-juego.js
   Hay que volver a correrlo cada vez que se agregan o cambian preguntas SABER. */
const fs=require('fs'),vm=require('vm');
const c={console};c.window=c;vm.createContext(c);
vm.runInContext(fs.readFileSync('assets/saber-icfes.js','utf8'),c);
vm.runInContext(fs.readFileSync('banco.js','utf8')+';this.__B={BANCO_ATOMO,BANCO_ENLACE,BANCO_PH,BANCO_INDUSTRIA,BANCO_MODELOS,BANCO_GASES,BANCO_SOLUCIONES}',c);
vm.runInContext(fs.readFileSync('assets/docente-datos.js','utf8'),c);
const SI=c.SABER_ICFES;
const yaEstan=new Set();for(const k in c.__B)c.__B[k].forEach(q=>yaEstan.add(q.q));
const lim=s=>String(s==null?'':s).replace(/<[^>]+>/g,'');
const out=[],vistos=new Set();
c.DOCENTE_DATOS.SABER.forEach(q=>{
  if(yaEstan.has(q.q)||vistos.has(q.tema+'|'+q.q))return;vistos.add(q.tema+'|'+q.q);
  out.push({t:q.tema,c:SI.competencia(q),af:SI.afirmacion(q).cod,ctx:lim(q.ctx),q:lim(q.q),f:q.f?lim(q.f):undefined,o:q.o.map(lim),tabla:q.tabla||undefined,graf:q.graf||undefined});
});
const txt='/* GENERADO por herramientas/generar-saber-juego.js: no editar a mano.\n   Preguntas tipo Saber 11 de IonNom para el Juego ('+out.length+'). */\nwindow.SABER_JUEGO='+JSON.stringify(out)+';\n';
fs.writeFileSync('assets/saber-juego.js',txt);
console.log(out.length,'preguntas;',Math.round(txt.length/1024),'KB');
const m={};out.forEach(x=>m[x.t]=(m[x.t]||0)+1);console.log(m);
