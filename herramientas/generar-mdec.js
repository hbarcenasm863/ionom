/* Genera assets/mdec-compuestos.js: cada compuesto iónico del banco (banco.js) separado en sus iones
   con su carga, con el código de colores de IonNom (catión, anión, OH⁻ y oxoanión). Lo usan el Juego y
   el panel docente para las preguntas de «reconocer las partes» y «armar la fórmula» (método MDEC,
   modelo propio del docente: no se enlaza a DBA ni estándar).
   Uso, desde la raíz del repositorio:  node herramientas/generar-mdec.js
   Un compuesto solo entra si su separación en iones da un compuesto neutro y, cuando el nombre Stock
   trae número romano, coincide con la carga calculada. Los que no cumplen se listan al final. */
'use strict';
const fs=require('fs'),vm=require('vm');
const c={console};c.window=c;vm.createContext(c);
vm.runInContext(fs.readFileSync('banco.js','utf8')+';this.__B=BANCO;',c);
const BANCO=c.__B;
const SUB='₀₁₂₃₄₅₆₇₈₉';
const norm=f=>String(f).replace(/[₀-₉]/g,d=>SUB.indexOf(d)).replace(/\s+/g,'');
const sub=s=>String(s).replace(/\d/g,d=>SUB[d]);
const SUP={'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};
const carga=q=>(Math.abs(q)===1?'':String(Math.abs(q)).replace(/\d/g,d=>SUP[d]))+(q>0?'⁺':'⁻');
const ion=(t,q)=>sub(t)+carga(q);
// Aniones poliatómicos (los más largos primero) y su carga
const POLI=[['Cr2O7',-2],['S2O3',-2],['C2O4',-2],['H2PO4',-1],['HPO4',-2],['HSO4',-1],['HSO3',-1],['HCO3',-1],['HS',-1],
  ['ClO4',-1],['ClO3',-1],['ClO2',-1],['ClO',-1],['BrO4',-1],['BrO3',-1],['BrO2',-1],['BrO',-1],['IO4',-1],['IO3',-1],['IO2',-1],['IO',-1],
  ['MnO4',null],['CrO4',-2],['SO4',-2],['SO3',-2],['SeO4',-2],['SeO3',-2],['NO3',-1],['NO2',-1],['PO4',-3],['PO3',-3],['AsO4',-3],['AsO3',-3],
  ['CO3',-2],['SiO3',-2],['BO3',-3],['CN',-1],['OH',-1]];
const MONO={F:-1,Cl:-1,Br:-1,I:-1,O:-2,S:-2,Se:-2,Te:-2,N:-3,P:-3,As:-3,H:-1};
const ROM={I:1,II:2,III:3,IV:4,V:5,VI:6,VII:7};
const GRUPOS=['ox-bas','hidru','ac-hid','base','ac-ox','sal-bin','sal-ox','sal-ac'];
const NO_IONICOS=['Hg₂O','PbS₂','Pb(OH)₄','Pd(OH)₄','AuI₃','CoPO₄','H₂N₂O₂'];
const out=[],fuera=[];
for(const b of BANCO){
  if(!GRUPOS.includes(b.group))continue;
  /* ácidos cuyos H no son todos ácidos (H₃PO₃ libera 2 H⁺ y H₃PO₂ libera 1): el reparto simple en iones los describiría mal */
  if(['H₃PO₃','H₃PO₂','H₃BO₃'].includes(b.formula)){fuera.push(b.formula+' ('+b.group+'): no todos sus H son ácidos (o, como el bórico, no los suelta como H⁺)');continue;}
  /* auditoría química (26-11-2026): compuestos que no existen o que no son iónicos no se separan en iones */
  if(NO_IONICOS.includes(b.formula)){fuera.push(b.formula+' ('+b.group+'): no existe o no es iónico');continue;}
  /* solo los hidruros de los grupos 1 y 2 (salinos) se separan en catión + H⁻ */
  if(b.group==='hidru'&&!/^(Li|Na|K|Rb|Cs|Mg|Ca|Sr|Ba)H/.test(norm(b.formula))){fuera.push(b.formula+' (hidru): hidruro no salino (covalente o intersticial)');continue;}
  const f=norm(b.formula),nombre=(b.stock&&b.stock[0])||(b.trad&&b.trad[0])||(b.sist&&b.sist[0])||'';
  try{
    let cat,nCat,resto;
    if(b.group==='ac-hid'||b.group==='ac-ox'){const m=f.match(/^H(\d*)(.+)$/);cat='H';nCat=+(m[1]||1);resto=m[2];}
    else{const m=f.match(/^(NH4|\(NH4\)|[A-Z][a-z]?)(\d*)(.+)$/);if(!m)throw 'sin catión';cat=m[1].replace(/[()]/g,'');nCat=+(m[2]||1);resto=m[3];
      if(m[1]==='(NH4)'){/* (NH₄)₂SO₄ */}}
    let an,nAn,qAn,cls;
    const par=resto.match(/^\(([A-Za-z0-9]+)\)(\d+)$/);
    const cuerpo=par?par[1]:resto;nAn=par?+par[2]:1;
    const poli=POLI.find(p=>p[0]===cuerpo);
    if(poli){an=poli[0];qAn=poli[1];
      const nombres=[].concat(b.trad||[],b.stock||[],b.sist||[]).join(' ');
      if(an==='MnO4')qAn=/permanganato/.test(nombres)?-1:/manganato/.test(nombres)?-2:-1;
      if(b.group==='ac-ox')qAn=-nCat; /* en un oxoácido la carga del anión es el número de H⁺ */
      cls=an==='OH'?'oh':(/O/.test(an)?'ox':'an'); /* HS⁻, CN⁻: aniones sin oxígeno */
      if(b.group==='ac-hid')cls='an';
    }else if(b.group==='ac-ox'||(b.group==='ac-hid'&&/^[A-Z][a-z]?[A-Z]/.test(cuerpo))){
      /* oxoácido (o hidrácido poliatómico) poco común: la carga del anión es el número de H⁺ que suelta */
      an=cuerpo;qAn=-nCat;cls=b.group==='ac-ox'?'ox':'an';if(b.group==='ac-hid'&&cuerpo==='N3')throw 'azida';
    }else{const m=cuerpo.match(/^([A-Z][a-z]?)(\d*)$/);if(!m||MONO[m[1]]==null)throw 'anión desconocido '+cuerpo;
      an=m[1];if(!par)nAn=+(m[2]||1);qAn=MONO[an];cls='an';}
    if(b.group==='hidru'&&an!=='H')throw 'hidruro raro';
    let total=-qAn*nAn;let qCat=total/nCat;
    /* mercurio (I): el catión es el dímero Hg₂²⁺, no dos Hg⁺ */
    if(cat==='Hg'&&qCat===1&&nCat%2===0){cat='Hg2';nCat=nCat/2;qCat=2;}
    if(!Number.isInteger(qCat)||qCat<1||qCat>7)throw 'carga del catión '+qCat;
    if((b.group==='ac-hid'||b.group==='ac-ox')&&qCat!==1)throw 'H con carga '+qCat;
    const rom=(nombre.match(/\(([IV]+)\)/)||[])[1];if(rom&&ROM[rom]!==qCat&&!(cat==='Hg2'&&rom==='I'))throw 'Stock '+rom+' ≠ '+qCat;
    out.push({f:b.formula,g:b.group,n:{trad:(b.trad||[])[0]||'',stock:(b.stock||[])[0]||'',sist:(b.sist||[])[0]||''},
      cat:[ion(cat,qCat),nCat,qCat],an:[ion(an,qAn),nAn,qAn,cls]});
  }catch(e){fuera.push(b.formula+' ('+b.group+'): '+e);}
}
const txt='/* GENERADO por herramientas/generar-mdec.js: no editar a mano.\n   Compuestos iónicos del banco separados en sus iones (método MDEC, modelo propio del docente: no se\n   enlaza a DBA ni estándar). cat: [ion, cuántos, carga]; an: [ion, cuántos, carga, parte] con parte\n   an = anión, oh = hidróxido, ox = oxoanión. */\nwindow.MDEC_COMP='+JSON.stringify(out)+';\n';
fs.writeFileSync('assets/mdec-compuestos.js',txt);
const g={};out.forEach(x=>g[x.g]=(g[x.g]||0)+1);
console.log(out.length,'compuestos separados en iones',g);
console.log(fuera.length,'quedan fuera:');fuera.forEach(x=>console.log('  '+x));
