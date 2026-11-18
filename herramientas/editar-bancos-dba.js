/* Ayuda de edición de assets/bancos-dba.js: localiza una fila de opción múltiple
   por su pregunta y modifica campos sin tocar el resto.
   Uso: require('./editar-bancos-dba.js')(ediciones) */
const fs=require('fs');
const F='assets/bancos-dba.js';
module.exports=function(ed){
  let lines=fs.readFileSync(F,'utf8').split('\n');
  const ser=a=>'['+a.map(x=>"'"+String(x).replace(/\\/g,'\\\\').replace(/'/g,"\\'")+"'").join(',')+']';
  const falta=[];
  ed.forEach(e=>{
    const idx=[];lines.forEach((l,i)=>{if(/^\[['"]/.test(l)&&l.includes("'"+e.q.replace(/\\/g,'\\\\').replace(/'/g,"\\'")+"'")&&(!e.ctx||l.includes(e.ctx)))idx.push(i);});
    if(idx.length!==1){falta.push(e.q+' ('+idx.length+')');return;}
    const l=lines[idx[0]],coma=/,\s*$/.test(l)?',':'';
    const row=eval(l.replace(/,\s*$/,''));
    // [0]subtema [1]c [2]af [3]dba [4]ctx [5]q [6]ok [7..9]d [10]x
    if(e.c)row[1]=e.c;if(e.af)row[2]=e.af;if(e.dba)row[3]=e.dba;if(e.nctx)row[4]=e.nctx;if(e.nq)row[5]=e.nq;
    if(e.ok)row[6]=e.ok;if(e.d){row[7]=e.d[0];row[8]=e.d[1];row[9]=e.d[2];}if(e.x)row[10]=e.x;
    lines[idx[0]]=ser(row)+coma;
  });
  fs.writeFileSync(F,lines.join('\n'));
  if(falta.length)console.log('NO ENCONTRADAS/AMBIGUAS:\n'+falta.join('\n'));else console.log('filas editadas:',ed.length);
};
