/* Mide el sesgo de longitud de las preguntas de opción múltiple de assets/bancos-dba.js:
   en una buena prueba la respuesta correcta no debe distinguirse por ser la más larga.
   Uso (desde la raíz):  node herramientas/medir-sesgo-longitud.js [--lista]
   Meta: la correcta es la más larga en ≤ 35 % de las preguntas y la razón
   largo(correcta) / largo(distractor más largo) es ≤ 1,25 en todas. */
const fs=require('fs'),vm=require('vm');
const c={console};c.window=c;vm.createContext(c);
vm.runInContext(fs.readFileSync('banco.js','utf8')+';this.BANCO_PH=BANCO_PH;this.BANCO_ATOMO=BANCO_ATOMO',c);
vm.runInContext(fs.readFileSync('assets/bancos-dba.js','utf8'),c);
const filas=[];
for(const k in c.BANCOS_DBA)c.BANCOS_DBA[k].forEach(q=>{if((q.tipo||'mc')!=='mc')return;
  const L=q.ok.length,M=Math.max(...q.d.map(x=>x.length)),med=q.d.reduce((a,x)=>a+x.length,0)/3;
  filas.push({k,q:q.q,L,M,razon:L/M,razonMed:L/med,masLarga:L>M});});
const nL=filas.filter(f=>f.masLarga).length,malas=filas.filter(f=>f.razon>1.25);
console.log('preguntas de opción múltiple:',filas.length);
console.log('correcta es la más larga:',nL,'('+Math.round(nL/filas.length*100)+' %)  [meta ≤ 35 %]');
console.log('razón largo(correcta)/largo(distractor más largo) > 1,25:',malas.length,' [meta 0]');
if(process.argv.includes('--lista'))malas.sort((a,b)=>b.razon-a.razon).forEach(f=>console.log(f.razon.toFixed(2),f.k,'|',f.q));
const ok=nL/filas.length<=0.35&&malas.length===0;console.log(ok?'CUMPLE':'NO CUMPLE');process.exit(ok?0:1);
