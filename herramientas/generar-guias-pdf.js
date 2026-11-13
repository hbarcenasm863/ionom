// Genera los 5 PDF de guia.html (A4 horizontal) con el logo y la marca de agua de IonNom.
// Uso:  node herramientas/generar-guias-pdf.js . assets
// Opcional: FUENTES=<carpeta de node_modules/@fontsource> para usar Outfit, JetBrains Mono y Fraunces
// (sin ellas el PDF sale con la letra de respaldo). Hay que volver a correrlo cada vez que cambie guia.html.
const {chromium}=require('playwright');const path=require('path');
const FUENTES=process.env.FUENTES||'';
const base=path.resolve(process.argv[2]||'.');const out=process.argv[3]||base+'/assets';
const hojas={atomo:'guia-atomo.pdf',nomen:'guia-nomenclatura-inorganica.pdf',esteq:'guia-estequiometria.pdf',gases:'guia-gases.pdf',soluc:'guia-soluciones.pdf'};
(async()=>{const b=await chromium.launch();
for(const h in hojas){const p=await b.newPage();
 await p.goto('file://'+base+'/guia.html?hoja='+h);
 if(FUENTES){const f=(n,w,s,u)=>`@font-face{font-family:${n};font-weight:${w};font-style:${s||'normal'};src:url(file://${FUENTES}/${u})}`;
  await p.addStyleTag({content:f('Outfit',400,'normal','outfit/files/outfit-latin-400-normal.woff2')+f('Outfit',700,'normal','outfit/files/outfit-latin-700-normal.woff2')+f('JetBrains Mono',400,'normal','jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2')+f('JetBrains Mono',700,'normal','jetbrains-mono/files/jetbrains-mono-latin-700-normal.woff2')+f('Fraunces',700,'italic','fraunces/files/fraunces-latin-700-italic.woff2')});}
 await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(600);
 await p.emulateMedia({media:'print'});
 await p.pdf({path:out+'/'+hojas[h],format:'A4',landscape:true,printBackground:true,preferCSSPageSize:true});
 console.log('PDF',hojas[h]);await p.close();}
await b.close();})();
