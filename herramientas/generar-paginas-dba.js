/* Genera las páginas de los temas que cierran los huecos frente a los DBA:
   materia.html, mezclas.html, intermoleculares.html, precipitacion.html,
   termoquimica.html y ambiente.html. Usa gases.html como plantilla (mismos
   estilos, menú, lectura en voz alta y práctica con el banco del Juego).
   Uso (desde la raíz del repositorio):  node herramientas/generar-paginas-dba.js
   Si se cambia gases.html (menú, estilos), volver a correrlo. El contenido de
   cada página vive en este archivo; las preguntas, en assets/bancos-dba.js. */
const fs=require('fs');
const plantilla=fs.readFileSync('gases.html','utf8');
const HEAD=plantilla.slice(0,plantilla.indexOf('<div class="app">'));
const TAIL=plantilla.slice(plantilla.indexOf('<a href="index.html" id="menu-float-btn"'),plantilla.indexOf('<script src="banco.js"></script>'));
const FOOT=(juego,nom)=>`  <footer>
    <a href="juego.html?g=${juego}">🎮 Practica en el Juego →</a> &nbsp;|&nbsp; <a href="index.html">IonNom</a> · Química para Colombia<br><br>
    <p><a href="https://hbarcenasm863.github.io/ionom/index.html" style="color:var(--dim);text-decoration:none;font-weight:600">Ionom</a> © 2026 by <a href="https://hbarcenasm863.github.io/ionom/index.html" style="color:var(--dim);text-decoration:none;font-weight:600">Harvey Barcenas</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc/4.0/" style="color:var(--dim);text-decoration:none;font-weight:600">CC BY-NC 4.0</a></p>
  </footer>
</div>

`;
const NAV_NUEVOS=[['materia.html','🧊','Materia: estados y cambios'],['mezclas.html','🧩','Mezclas y separación'],['intermoleculares.html','🧲','Fuerzas intermoleculares'],['precipitacion.html','⚪','Precipitación y redox'],['termoquimica.html','🔥','Energía en las reacciones'],['ambiente.html','🌍','Química del ambiente']];
const esc=s=>String(s).replace(/"/g,'&quot;');
const plano=h=>String(h).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
const tts=h=>`<button class="tts-btn" onclick="speakText(this)" data-text="${esc(plano(h)).slice(0,900)}">🔊 Escuchar</button>`;

function drawer(head,actual){
  let h=head.replace('<a href="gases.html" class="active">','<a href="gases.html">');
  const marca='<a href="estequiometria.html">';
  const links=NAV_NUEVOS.map(([f,i,n])=>`    <a href="${f}"${f===actual?' class="active"':''}><span class="dl-icon">${i}</span><span class="dl-name">${n}</span></a>\n`).join('');
  return h.replace(marca,links.replace(/^    /,'')+'    '+marca);
}
function seccion(s){
  if(s.glos)return `  <div class="sect">
    <h2>Palabras clave de esta página ${tts(s.voz||'Toca cada tarjeta para ver qué significa.')}</h2>
    <div class="glos">
${s.glos.map(([t,d])=>`      <button type="button"><b>${t}</b><span class="hint">Toca para ver</span><span class="def">${d}</span></button>`).join('\n')}
    </div>
  </div>
`;
  let h=`  <div class="sect">\n    <h2>${s.h} ${tts(s.voz||s.h+'. '+(s.txt||''))}</h2>\n`;
  if(s.meta)h+=`    <div class="meta">${s.meta}</div>\n`;
  if(s.preg)h+=`    <p class="sim-pregunta">${s.preg}</p>\n`;
  if(s.sim)h+=`    <div data-simx="${s.sim}" data-titulo="${s.titulo}"></div>\n`;
  if(s.html)h+=s.html+'\n';
  if(s.cards)h+=`    <div class="proc">\n${s.cards.map(c=>`      <div class="card"><span class="tipo">${c[0]}</span><h4>${c[1]}</h4>${c[2]?`<span class="eq">${c[2]}</span>`:''}<p>${c[3]}</p>${c[4]?`<p>${c[4]}</p>`:''}</div>`).join('\n')}\n    </div>\n`;
  if(s.tabla)h+=`    <table class="tbl"><thead><tr>${s.tabla[0].map(x=>`<th>${x}</th>`).join('')}</tr></thead><tbody>\n${s.tabla.slice(1).map(r=>`      <tr>${r.map(x=>`<td>${x}</td>`).join('')}</tr>`).join('\n')}\n    </tbody></table>\n`;
  if(s.pasos)h+=`    <div class="pasos">\n      <div class="pasos-h">${s.pasos[0]}</div>\n      <ol>\n${s.pasos.slice(1).map(p=>`        <li>${p}</li>`).join('\n')}\n      </ol>\n    </div>\n`;
  if(s.info)h+=`    <div class="info-box">${s.info}</div>\n`;
  if(s.warn)h+=`    <div class="warn-box">${s.warn}</div>\n`;
  return h+'  </div>\n\n';
}

const NIVEL={materia:['Básico','grados 1.° a 9.°'],mezclas:['Básico','grados 4.° a 9.°'],intermoleculares:['Medio','grados 8.° a 11.°'],precipitacion:['Medio','grados 10.° y 11.°'],termoquimica:['Medio','grados 10.° y 11.°'],ambiente:['Medio','grados 7.° a 11.°']};
const P=[];

/* ═════════ MATERIA ═════════ */
P.push({f:'materia.html',juego:'materia',banco:'materia',ico:'🧊',titulo:'Materia: estados y cambios',
 desc:'Sólido, líquido y gas; cambios de estado; cómo la temperatura y la presión cambian el punto de ebullición; y la diferencia entre cambio físico y cambio químico.',
 h1:'🧊 La materia: estados, cambios y energía',
 intro:'Por qué el hielo flota, por qué las papas tardan más en cocinarse en Bogotá y cómo saber si algo que se transforma es solo un cambio de forma o una reacción. Aquí manipulas el agua partícula por partícula, subes y bajas la temperatura y la presión, y aprendes a reconocer cuándo aparece una sustancia nueva.',
 secciones:[
 {glos:[['Estado de la materia','Forma en que se agrupan las partículas: sólido, líquido o gas.'],['Cambio de estado','Paso de un estado a otro sin que cambie la sustancia (fusión, evaporación, condensación…).'],['Punto de fusión','Temperatura a la que un sólido pasa a líquido (el hielo, 0 °C).'],['Punto de ebullición','Temperatura a la que un líquido pasa a gas con burbujas. Depende de la presión.'],['Densidad','Masa por unidad de volumen: d = m ÷ V. El hielo es menos denso que el agua líquida.'],['Presión','Fuerza de los choques de las partículas por unidad de área. Menos presión, menos punto de ebullición.'],['Cambio físico','No se forman sustancias nuevas (derretir hielo, disolver azúcar).'],['Cambio químico','Los átomos se reorganizan y aparecen sustancias nuevas (quemar papel, oxidar un clavo).']],voz:'Antes de empezar, repasa las ocho palabras clave de la materia. Toca cada tarjeta para ver qué significa.'},
 {h:'Tres estados, un mismo modelo de partículas',txt:'En el sólido las partículas vibran en posiciones fijas; en el líquido están juntas pero se deslizan; en el gas están muy separadas y se mueven libres.',meta:'Al terminar podrás describir cada estado con un modelo de partículas y explicar qué ocurre en un cambio de estado.',
  cards:[['Sólido','Forma y volumen propios','','Las partículas están muy juntas y ordenadas; solo vibran. No se comprimen.','🧊 El hielo, la roca, la madera.'],['Líquido','Volumen propio, forma del recipiente','','Partículas juntas pero desordenadas; se deslizan unas sobre otras. Casi no se comprimen.','💧 El agua, el aceite, la miel.'],['Gas','Sin forma ni volumen propios','','Partículas muy separadas y rápidas; llenan todo el recipiente y se comprimen con facilidad.','🎈 El aire, el vapor, el gas de la estufa.']],
  info:'🔬 El aire <strong>es un material</strong> aunque no se vea: ocupa espacio (infla un globo) y ejerce presión (empuja el émbolo de una jeringa).'},
 {h:'🔬 Simulación: temperatura, presión y estado del agua',txt:'Cambia la temperatura y la presión y mira cómo se mueven las partículas. A menor presión, el agua hierve a menor temperatura.',meta:'Usa los botones de Cartagena, Bogotá y olla a presión para ver cómo cambia el punto de ebullición.',preg:'¿A qué temperatura crees que hierve el agua en Bogotá? ¿Y en una olla a presión? Prueba con los botones.',sim:'estados',titulo:'Estados del agua con temperatura y presión',
  info:'🇨🇴 En Cartagena el agua hierve a 100 °C; en Bogotá (2600 m), a unos <strong>92 °C</strong>; en el refugio del Nevado del Ruiz (4000 m), a unos 87 °C. Por eso en la altura los alimentos se cocinan más despacio y se usa olla a presión.'},
 {h:'Los cambios de estado',txt:'Fusión, evaporación y sublimación absorben energía; condensación y solidificación la liberan. Mientras una sustancia pura funde o hierve, su temperatura no cambia.',meta:'Al terminar podrás nombrar cada cambio de estado y explicar por qué la temperatura se queda quieta mientras ocurre.',
  tabla:[['Cambio','De → a','Ejemplo','Energía'],['Fusión','sólido → líquido','Se derrite el hielo','Absorbe'],['Solidificación','líquido → sólido','El agua en el congelador','Libera'],['Evaporación','líquido → gas (en la superficie, a cualquier temperatura)','La ropa se seca','Absorbe'],['Ebullición','líquido → gas (en todo el líquido, a su punto de ebullición)','El agua hierve en la olla','Absorbe'],['Condensación','gas → líquido','Se empaña el espejo del baño','Libera'],['Sublimación','sólido → gas','El hielo seco (CO₂) «humea»','Absorbe']],
  warn:'⚠️ <strong>Error frecuente:</strong> creer que al hervir el agua «se rompe» en hidrógeno y oxígeno. Al hervir solo se separan las moléculas de H₂O entre sí; cada molécula sigue siendo agua.'},
 {h:'¿Cambio físico o cambio químico?',txt:'En un cambio físico no se forman sustancias nuevas; en un cambio químico sí. Las evidencias: gas, sólido nuevo, cambio de color o energía liberada.',meta:'Al terminar podrás justificar si un cambio es físico o químico con evidencias observables.',
  tabla:[['Situación','Evidencia','Tipo'],['Derretir mantequilla','Cambia de estado; sigue siendo mantequilla','Físico'],['Disolver azúcar en agua','Se recupera el azúcar al evaporar','Físico'],['Vinagre + bicarbonato','Burbujas de CO₂: gas nuevo','Químico'],['Quemar un papel','Ceniza y humo: sustancias nuevas','Químico'],['Oxidación de un clavo','Sólido rojizo nuevo (óxido)','Químico'],['Freír un huevo','Las proteínas cambian y no vuelven atrás','Químico']],
  pasos:['Ejemplo resuelto: ¿es químico el vinagre con cáscara de huevo?','<strong>Observa.</strong> Al echar vinagre sobre cáscara de huevo triturada o caliza (CaCO₃) aparecen burbujas y el sólido se «come».','<strong>Pregunta.</strong> ¿Aparecieron sustancias nuevas? Las burbujas son un gas que antes no estaba.','<strong>Explica.</strong> CaCO₃ + 2 CH₃COOH → Ca(CH₃COO)₂ + H₂O + CO₂: el CO₂ es una sustancia nueva.','<strong>Concluye.</strong> Es un cambio <strong>químico</strong>: los átomos se reorganizaron (sin crearse ni destruirse).']},
 {h:'Propiedades físicas: densidad, solubilidad y viscosidad',txt:'La densidad es masa dividida por volumen. Una sustancia flota en un líquido si es menos densa que él.',meta:'Al terminar podrás calcular una densidad y predecir si algo flota.',
  pasos:['Ejemplo resuelto: ¿flota el bloque?','<strong>Datos.</strong> Un bloque tiene 54 g y ocupa 20 mL.','<strong>Fórmula.</strong> d = m ÷ V.','<strong>Cálculo.</strong> d = 54 g ÷ 20 mL = <strong>2,7 g/mL</strong>.','<strong>Interpreta.</strong> El agua tiene 1,0 g/mL; como 2,7 &gt; 1,0, el bloque se hunde. (Es aluminio.)'],
  info:'⛏️ En el barequeo del oro se agita arena con agua en una batea: el oro (19,3 g/mL) es mucho más denso que la arena (2,6 g/mL) y se queda en el fondo.'}
 ]});

/* ═════════ MEZCLAS ═════════ */
P.push({f:'mezclas.html',juego:'mezclas',banco:'mezclas',ico:'🧩',titulo:'Mezclas y separación',
 desc:'Sustancias puras, mezclas homogéneas y heterogéneas, coloides y técnicas para separarlas: filtración, decantación, tamizado, evaporación, destilación e imantación.',
 h1:'🧩 Mezclas: cómo se reconocen y cómo se separan',
 intro:'El aire, el agua de la llave, el tinto y la leche son mezclas. Aprende a clasificarlas, a reconocer los coloides y a escoger la técnica que de verdad separa cada mezcla, con ejemplos como la sal de Manaure, el barequeo del oro y la potabilización del agua.',
 secciones:[
 {glos:[['Sustancia pura','Material de composición fija: un elemento (Cu) o un compuesto (H₂O).'],['Mezcla','Varias sustancias juntas que conservan sus propiedades y se pueden separar.'],['Mezcla homogénea','Se ve una sola fase: el aguapanela. También se llama solución.'],['Mezcla heterogénea','Se ven dos o más fases: agua con arena, ensalada.'],['Coloide','Mezcla heterogénea de partículas muy pequeñas que no sedimentan pero dispersan la luz: leche, niebla.'],['Fase','Parte uniforme de un sistema con las mismas propiedades en todos sus puntos.'],['Soluto y solvente','En una solución, el soluto se disuelve en el solvente (el que está en mayor cantidad).'],['Insoluble','Que no se disuelve en un solvente (la arena en el agua).']],voz:'Repasa las palabras clave de las mezclas y toca cada tarjeta.'},
 {h:'Sustancias puras y mezclas',txt:'Las sustancias puras tienen composición fija; las mezclas pueden tener cantidades variables de sus componentes.',meta:'Al terminar podrás clasificar un material como elemento, compuesto, mezcla homogénea, mezcla heterogénea o coloide.',
  cards:[['Sustancia pura','Elemento','Cu, O₂, Au','Una sola clase de átomo. No se descompone con métodos químicos simples.','🪙 El oro de 24 quilates.'],['Sustancia pura','Compuesto','H₂O, NaCl, CO₂','Átomos de varios elementos unidos en proporción fija.','🧂 El cloruro de sodio puro.'],['Mezcla','Homogénea','solución','Una sola fase. No se distinguen los componentes.','☕ El tinto con azúcar, el aire limpio.'],['Mezcla','Heterogénea','2 o más fases','Se distinguen los componentes a simple vista o con lupa.','🥗 La ensalada, el agua con arena.'],['Mezcla','Coloide','partículas dispersas','Parece homogénea a simple vista, pero es una mezcla heterogénea a escala microscópica: dispersa la luz (efecto Tyndall) y no sedimenta.','🥛 Leche, gelatina, niebla, pinturas.']],
  info:'💧 El agua de la llave es una <strong>mezcla</strong>: trae sales y gases disueltos. El agua destilada sí se acerca a una sustancia pura.'},
 {h:'🔬 Simulación: escoge la técnica que separa cada mezcla',txt:'Elige una mezcla y una técnica. Si la técnica es la correcta, los componentes se separan. Si no, verás por qué no sirve.',meta:'Prueba con todas las técnicas en cada mezcla: así descubres para qué sirve cada una.',preg:'Si tuvieras agua con sal, ¿la filtración la separaría? ¿Y la evaporación? Compruébalo en la simulación.',sim:'separacion',titulo:'Técnicas de separación de mezclas'},
 {h:'Las técnicas y la propiedad que aprovechan',txt:'Cada técnica de separación se basa en una propiedad distinta de los componentes.',meta:'Al terminar podrás elegir la técnica según la propiedad que distingue los componentes.',
  tabla:[['Técnica','Mezcla que separa','Propiedad que aprovecha'],['Filtración','Sólido insoluble + líquido','Tamaño de partícula (el filtro retiene el sólido)'],['Decantación','Dos líquidos inmiscibles; sólido que se asienta','Densidad'],['Tamizado','Sólidos de distinto tamaño','Tamaño de partícula'],['Evaporación / cristalización','Sólido disuelto + solvente','Volatilidad del solvente'],['Destilación','Líquidos con distinto punto de ebullición','Punto de ebullición'],['Imantación','Un material magnético + otro','Magnetismo'],['Cromatografía','Componentes de una tinta o un pigmento','Afinidad por el papel y el solvente']],
  info:'🧂 <strong>Manaure y Zipaquirá:</strong> en Manaure (La Guajira) el agua de mar se evapora al sol en las salinas y la sal cristaliza. En Zipaquirá la sal se extrae de la roca y se disuelve, se filtra y se evapora.'},
 {h:'Coloides y efecto Tyndall',txt:'Los coloides tienen partículas dispersas tan pequeñas que no sedimentan, pero dispersan un rayo de luz.',meta:'Al terminar podrás distinguir una solución, un coloide y una suspensión.',
  tabla:[['','Solución','Coloide','Suspensión'],['Tamaño de partícula','Muy pequeño (iones o moléculas)','Intermedio (1 a 1000 nm)','Grande (se ve)'],['Sedimenta','No','No','Sí, al reposar'],['Efecto Tyndall','No dispersa la luz','Sí dispersa la luz','Turbia, dispersa la luz'],['Ejemplos','Aguapanela, suero','Leche, mayonesa, pintura','Agua con arena, jugo con pulpa']],
  warn:'⚠️ Muchos productos que usamos (pinturas, lacas, medicinas, alimentos) son coloides. Si se separan en capas, se «cortaron» y ya no sirven igual.'},
 {h:'Ejemplo resuelto: separar arena, sal y agua',txt:'Primero se retira el sólido insoluble por filtración y luego se recupera la sal evaporando el agua.',meta:'Al terminar podrás diseñar un procedimiento de varios pasos.',
  pasos:['Mezcla de arena, sal y agua','<strong>Analiza.</strong> La arena es insoluble; la sal se disuelve en el agua. Hay dos fases: arena y solución.','<strong>Filtra.</strong> La arena queda en el filtro y el agua con sal (filtrado) pasa.','<strong>Evapora.</strong> Se calienta el filtrado hasta que el agua se va como vapor.','<strong>Recoge.</strong> En el recipiente quedan los cristales de sal.'],
  info:'🚰 <strong>Potabilización:</strong> se agrega sulfato de aluminio para que las partículas finas formen flóculos, se deja <em>sedimentar</em> (decantación) y se <em>filtra</em> con arena y grava. Después se desinfecta con cloro.'}
 ]});

/* ═════════ INTERMOLECULARES ═════════ */
P.push({f:'intermoleculares.html',juego:'intermoleculares',banco:'intermoleculares',ico:'🧲',titulo:'Fuerzas intermoleculares',
 desc:'Fuerzas de dispersión de London, dipolo-dipolo y puentes de hidrógeno; cómo explican los puntos de ebullición, la solubilidad y propiedades del agua.',
 h1:'🧲 Fuerzas intermoleculares: lo que mantiene unidas a las moléculas',
 intro:'Por qué el agua hierve a 100 °C y el H₂S a −60 °C, por qué el aceite no se mezcla con el agua y por qué un insecto camina sobre el agua. Los enlaces unen átomos dentro de una molécula; las fuerzas intermoleculares unen moléculas entre sí y decidirán si algo es gas, líquido o sólido.',
 secciones:[
 {glos:[['Fuerza intermolecular','Atracción entre moléculas distintas; mucho más débil que un enlace dentro de la molécula. Incluye las fuerzas de Van der Waals (London y dipolo-dipolo) y los puentes de hidrógeno.'],['Dispersión de London','Atracción débil entre dipolos instantáneos; la tienen todas las moléculas.'],['Dipolo-dipolo','Atracción entre moléculas polares (δ+ con δ−).'],['Puente de hidrógeno','Atracción fuerte entre un H unido a F, O o N y un par libre de otra molécula.'],['Polar','Molécula con zonas de carga parcial positiva y negativa.'],['Apolar','Molécula sin zonas de carga: reparte la carga de forma pareja.'],['Volatilidad','Facilidad con que un líquido pasa a gas.'],['Tensión superficial','Resistencia de la superficie de un líquido a romperse.']],voz:'Repasa las palabras clave de las fuerzas intermoleculares.'},
 {h:'Los tres tipos de fuerza, de más débil a más fuerte',txt:'Dispersión de London, dipolo-dipolo y puente de hidrógeno (de menor a mayor, a igual tamaño de molécula).',meta:'Al terminar podrás decir qué fuerza actúa entre las moléculas de una sustancia.',
  cards:[['Más débil','Dispersión de London','CH₄, N₂, Cl₂, He','La nube electrónica se deforma un instante y forma dipolos que se atraen. Crece con el tamaño de la molécula.','🌫️ El metano hierve a −162 °C.'],['Intermedia','Dipolo-dipolo','HCl, SO₂, CH₃Cl','Los extremos opuestos de moléculas polares se atraen.','💨 El HCl hierve a −85 °C.'],['Más fuerte','Puente de hidrógeno','H₂O, NH₃, HF, alcoholes','H unido a F, O o N es atraído por un par libre de otra molécula.','💧 El agua hierve a +100 °C.']],
  warn:'⚠️ <strong>Error frecuente:</strong> pensar que al hervir agua se rompen los enlaces O–H. Se vencen los <em>puentes de hidrógeno</em> entre moléculas; cada molécula de H₂O sigue intacta.'},
 {h:'🔬 Simulación: fuerzas, temperatura y punto de ebullición',txt:'Cada sustancia tiene fuerzas distintas. Sube la temperatura y observa cuándo las moléculas se separan.',meta:'Compara metano, HCl y agua con la misma temperatura.',preg:'A 300 K, ¿cuál de las tres sustancias es gas y cuál es líquido? ¿Por qué?',sim:'intermolecular',titulo:'Fuerzas intermoleculares y temperatura',
  info:'🧪 El simulador usa un modelo sencillo de atracción entre partículas: la profundidad de la atracción de cada sustancia es proporcional a su punto de ebullición real. Por eso cada una «ebulle» cerca de su temperatura verdadera.'},
 {h:'Efectos de las fuerzas: ebullición, solubilidad y agua',txt:'Más fuerza intermolecular implica mayor punto de ebullición, menor volatilidad, mayor viscosidad y mayor tensión superficial.',meta:'Al terminar podrás explicar propiedades de las sustancias con las fuerzas intermoleculares.',
  tabla:[['Sustancia','Fuerza principal','PE (°C)','Observación'],['CH₄','London','−162','Gas a temperatura ambiente'],['C₄H₁₀','London (molécula mayor)','−1','Más grande → más atracción'],['HCl','Dipolo-dipolo','−85','Gas'],['H₂S','Dipolo-dipolo débil','−60','Casi sin puentes de hidrógeno'],['H₂O','Puente de hidrógeno','100','Líquido'],['Etanol','Puente de hidrógeno','78','Líquido volátil']],
  info:'🧼 <strong>Semejante disuelve a semejante:</strong> el agua (polar) disuelve sal y azúcar; el hexano (apolar) disuelve aceites. El <strong>jabón</strong> tiene cabeza polar y cola apolar: une el agua con la grasa y la arrastra.'},
 {h:'El agua: puentes de hidrógeno que explican mucho',txt:'El agua tiene un punto de ebullición alto, el hielo flota, algunos insectos caminan sobre ella y sube por tubos finos, todo por los puentes de hidrógeno.',meta:'Al terminar podrás explicar cuatro propiedades del agua con puentes de hidrógeno.',
  cards:[['Punto de ebullición','Alto para su tamaño','','Se necesita mucha energía para separar las moléculas.'],['Hielo','Flota','','Al congelarse forma una red abierta con huecos: menos densa que el líquido.'],['Tensión superficial','«Piel» del agua','','Los insectos zapateros caminan sin hundirse.'],['Capilaridad','Sube por tubos finos','','Cohesión del agua y adhesión a las paredes: así sube el agua en las plantas.']]},
 {h:'Ejemplo resuelto: ¿quién hierve primero?',txt:'Compara H₂O, HCl y CH₄ y ordénalas por punto de ebullición creciente.',meta:'Al terminar podrás predecir y justificar un orden de puntos de ebullición.',
  pasos:['Ordenar CH₄, HCl y H₂O por PE creciente','<strong>Identifica la fuerza.</strong> CH₄ apolar → London; HCl polar → dipolo-dipolo; H₂O con O–H → puente de hidrógeno.','<strong>Ordena las fuerzas.</strong> London &lt; dipolo-dipolo &lt; puente de hidrógeno.','<strong>Concluye.</strong> PE: CH₄ (−162 °C) &lt; HCl (−85 °C) &lt; H₂O (100 °C).','<strong>Comprueba.</strong> A mayor fuerza intermolecular, mayor energía para pasar a gas: el orden coincide con los datos.']}
 ]});

/* ═════════ PRECIPITACIÓN ═════════ */
P.push({f:'precipitacion.html',juego:'precipitacion',banco:'precipitacion',ico:'⚪',titulo:'Precipitación y redox',
 desc:'Reacciones de precipitación con reglas de solubilidad y ecuación iónica neta; óxido-reducción, neutralización y descomposición.',
 h1:'⚪ Mecanismos de reacción: precipitación, redox, neutralización y descomposición',
 intro:'Al mezclar dos soluciones transparentes aparece un sólido. ¿Siempre? Aprende las reglas de solubilidad para predecirlo, escribe la ecuación iónica neta y clasifica las reacciones inorgánicas por lo que pasa con los iones y los electrones, con ejemplos como el sulfato de bario de las radiografías y la cal de Boyacá.',
 secciones:[
 {glos:[['Precipitado','Sólido poco soluble que se forma al mezclar dos soluciones.'],['Ion espectador','Ion que está en la solución y no participa en la formación del sólido.'],['Ecuación iónica neta','Ecuación que solo muestra los iones que reaccionan.'],['Oxidación','Pérdida de electrones: aumenta el estado de oxidación.'],['Reducción','Ganancia de electrones: disminuye el estado de oxidación.'],['Agente oxidante','Sustancia que se reduce y hace que otra se oxide.'],['Agente reductor','Sustancia que se oxida y hace que otra se reduzca.'],['Neutralización','Ácido + base → sal + agua.']],voz:'Repasa las palabras clave de los tipos de reacción.'},
 {h:'Reglas de solubilidad: ¿habrá precipitado?',txt:'Los nitratos y las sales de sodio, potasio y amonio son solubles. Cloruros y sulfatos son solubles con pocas excepciones; carbonatos, fosfatos, hidróxidos y sulfuros son insolubles con pocas excepciones.',meta:'Al terminar podrás predecir si una pareja de sales forma precipitado.',
  tabla:[['Iones','Regla','Excepciones (poco solubles)'],['NO₃⁻, Na⁺, K⁺, NH₄⁺','Siempre solubles','—'],['Cl⁻, Br⁻, I⁻','Solubles','Ag⁺, Pb²⁺, Hg₂²⁺'],['SO₄²⁻','Solubles','Ba²⁺, Pb²⁺, Ca²⁺ (poco), Sr²⁺'],['CO₃²⁻, PO₄³⁻','Insolubles','Salvo con Na⁺, K⁺, NH₄⁺'],['OH⁻','Insolubles','Salvo con Na⁺, K⁺, Ba²⁺ y (poco) Ca²⁺'],['S²⁻','Insolubles','Salvo con Na⁺, K⁺, NH₄⁺ y alcalinotérreos']],
  warn:'⚠️ Estas reglas son un resumen para predecir: la solubilidad real depende de la temperatura y de la concentración.'},
 {h:'🔬 Simulación: ¿se forma un precipitado?',txt:'Escoge dos soluciones y mézclalas. Mira qué iones se juntan y se depositan en el fondo.',meta:'Prueba las cinco parejas: una de ellas no forma precipitado.',preg:'Antes de mezclar NaCl con KNO₃, ¿crees que se formará un sólido? Prueba y revisa la regla de solubilidad.',sim:'precipitacion',titulo:'Reacciones de precipitación'},
 {h:'Ecuación molecular, iónica e iónica neta',txt:'La ecuación iónica neta solo muestra los iones que forman el sólido; los demás son espectadores.',meta:'Al terminar podrás escribir la ecuación iónica neta de una precipitación.',
  pasos:['Ejemplo resuelto: AgNO₃ + NaCl','<strong>Molecular.</strong> AgNO₃(ac) + NaCl(ac) → AgCl(s) + NaNO₃(ac)','<strong>Iónica completa.</strong> Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl(s) + Na⁺ + NO₃⁻','<strong>Tacha espectadores.</strong> Na⁺ y NO₃⁻ aparecen a los dos lados y no cambian.','<strong>Iónica neta.</strong> <strong>Ag⁺(ac) + Cl⁻(ac) → AgCl(s)</strong>'],
  info:'🩻 <strong>Radiografía de estómago:</strong> se bebe sulfato de bario, BaSO₄, insoluble y casi sin liberar Ba²⁺. El cloruro de bario, BaCl₂, es soluble y muy tóxico.'},
 {h:'Óxido-reducción (redox)',txt:'En una reacción redox se transfieren electrones: el reductor se oxida y el oxidante se reduce. Se detecta porque cambian los estados de oxidación.',meta:'Al terminar podrás identificar qué se oxida, qué se reduce y los agentes oxidante y reductor.',
  cards:[['Oxidación','Pierde electrones','Zn → Zn²⁺ + 2e⁻','El estado de oxidación aumenta. La sustancia es el <strong>reductor</strong>.'],['Reducción','Gana electrones','Cu²⁺ + 2e⁻ → Cu','El estado de oxidación disminuye. La sustancia es el <strong>oxidante</strong>.']],
  pasos:['Ejemplo resuelto: Zn + CuSO₄ → ZnSO₄ + Cu','<strong>Estados de oxidación.</strong> Zn: 0 → +2. Cu: +2 → 0. El sulfato queda igual.','<strong>Oxidación.</strong> El Zn pierde 2 e⁻: es el <strong>agente reductor</strong>.','<strong>Reducción.</strong> El Cu²⁺ gana 2 e⁻: es el <strong>agente oxidante</strong>.','<strong>Usos.</strong> Así funciona una pila (la simulación de la página de reacciones) y se recupera cobre en minas por cementación con hierro.']},
 {h:'Neutralización y descomposición',txt:'La neutralización forma sal y agua; la descomposición rompe un compuesto en varias sustancias.',meta:'Al terminar podrás clasificar las cuatro clases de reacción de un solo vistazo.',
  tabla:[['Tipo','Patrón','Ejemplo colombiano'],['Precipitación','sal + sal → sólido + sal','Sarro de CaCO₃ en las ollas'],['Redox','cambian los estados de oxidación','Herrumbre: 4 Fe + 3 O₂ → 2 Fe₂O₃'],['Neutralización','ácido + base → sal + agua','Antiácido: Mg(OH)₂ + 2 HCl → MgCl₂ + 2 H₂O'],['Descomposición','1 reactivo → 2 o más productos','Hornos de cal en Boyacá: CaCO₃ → CaO + CO₂']],
  info:'🧪 Una misma reacción puede ser de varios tipos: por ejemplo, la formación de herrumbre es una síntesis y también una redox.'}
 ]});

/* ═════════ TERMOQUÍMICA ═════════ */
P.push({f:'termoquimica.html',juego:'termo',banco:'termo',ico:'🔥',titulo:'Energía en las reacciones',
 desc:'Reacciones exotérmicas y endotérmicas, diagrama de energía, energía de activación, catalizadores y factores que cambian la rapidez de reacción.',
 h1:'🔥 Energía en las reacciones: calor, barreras y catalizadores',
 intro:'Por qué una estufa calienta y una bolsa de frío instantáneo enfría, por qué un fósforo necesita un frote para encender y por qué la nevera conserva los alimentos. Dibujas el diagrama de energía de una reacción y descubres qué cambia (y qué no) cuando se agrega un catalizador.',
 secciones:[
 {glos:[['Exotérmica','Libera calor al entorno (ΔH < 0): combustión, neutralización.'],['Endotérmica','Absorbe calor del entorno (ΔH > 0): fotosíntesis, fusión del hielo.'],['ΔH','Calor neto de una reacción a presión constante, en kJ.'],['Energía de activación (Ea)','Energía mínima que deben tener los choques para que haya reacción.'],['Catalizador','Sustancia que baja la Ea y acelera la reacción sin gastarse.'],['Enzima','Catalizador biológico, como la amilasa de la saliva.'],['Calor específico','Calor para subir 1 °C a 1 g de una sustancia; agua: 4,18 J/g·°C.'],['Rapidez de reacción','Cuánto reactivo se gasta por unidad de tiempo.']],voz:'Repasa las palabras clave de la energía en las reacciones.'},
 {h:'Exotérmicas y endotérmicas',txt:'Una reacción exotérmica libera calor y el entorno se calienta; una endotérmica absorbe calor y el entorno se enfría.',meta:'Al terminar podrás clasificar una reacción según el calor que intercambia.',
  tabla:[['Tipo','ΔH','Entorno','Ejemplos'],['Exotérmica','negativo','Se calienta','Combustión del gas, neutralización, disolver NaOH'],['Endotérmica','positivo','Se enfría','Fotosíntesis, bolsa de frío (NH₄NO₃), fusión del hielo']],
  info:'⛽ En las plantas de gas y en las estufas, la combustión del propano <strong>libera</strong> calor porque los enlaces nuevos de CO₂ y H₂O liberan más energía de la que costó romper los de propano y oxígeno.'},
 {h:'🔬 Simulación: diagrama de energía, Ea y catalizador',txt:'Cambia el calor de la reacción y la energía de activación. Activa el catalizador y mira qué cambia en el diagrama.',meta:'Observa que el catalizador baja la barrera, pero no cambia el calor ni la cantidad de producto.',preg:'Si agregas un catalizador, ¿cambia ΔH? ¿Y la energía de activación?',sim:'energia',titulo:'Diagrama de energía de una reacción'},
 {h:'Energía de activación y catalizadores',txt:'La reacción solo ocurre si los choques superan la energía de activación; un catalizador ofrece un camino con menor barrera.',meta:'Al terminar podrás explicar por qué un fósforo necesita frotarse y qué hace un catalizador.',
  cards:[['Barrera','Energía de activación','Ea','Es el «empujón» que necesitan los reactivos. El frote de un fósforo la aporta.'],['Catalizador','Baja Ea','⚡','Acelera la reacción sin gastarse; no cambia ΔH ni el rendimiento.','🚗 Convertidor catalítico: platino y rodio.'],['Enzima','Catalizador biológico','🧬','Funciona a 37 °C en el cuerpo.','🦷 La amilasa de la saliva rompe el almidón.']]},
 {h:'Cómo acelerar o frenar una reacción',txt:'La rapidez aumenta con la temperatura, la concentración y la superficie de contacto, y con un catalizador.',meta:'Al terminar podrás predecir qué factor acelera una reacción.',
  tabla:[['Factor','Efecto','Ejemplo cotidiano'],['Temperatura','Más choques con más energía','La nevera retarda la descomposición'],['Concentración','Más choques por segundo','Cloro más concentrado desinfecta más rápido'],['Superficie de contacto','Más partículas expuestas','La leña astillada enciende más rápido'],['Catalizador','Baja la Ea','Convertidor catalítico, enzimas']],
  pasos:['Ejemplo resuelto: calor para calentar agua','<strong>Datos.</strong> 200 g de agua pasan de 20 °C a 30 °C. c = 4,18 J/g·°C.','<strong>Fórmula.</strong> Q = m · c · ΔT.','<strong>Cálculo.</strong> Q = 200 × 4,18 × 10 = <strong>8360 J</strong> (8,36 kJ).','<strong>Interpreta.</strong> El agua <strong>absorbió</strong> ese calor: tomó la energía de un proceso exotérmico (la estufa).']}
 ]});

/* ═════════ AMBIENTE ═════════ */
P.push({f:'ambiente.html',juego:'ambiente',banco:'ambiente',ico:'🌍',titulo:'Química del ambiente',
 desc:'Efecto invernadero y calentamiento global, lluvia ácida, eutrofización y los ciclos del carbono, el nitrógeno y el agua, con datos de Colombia.',
 h1:'🌍 Química del ambiente: invernadero, ciclos y contaminación',
 intro:'Por qué más CO₂ calienta el planeta, cómo circulan el carbono y el nitrógeno por los seres vivos y qué pasa en Colombia con los glaciares, los páramos y las lagunas. Explora el efecto invernadero con una simulación y relaciona la química de las reacciones con problemas ambientales reales.',
 secciones:[
 {glos:[['Efecto invernadero','Retención de calor en la atmósfera por gases como el CO₂, el CH₄ y el vapor de agua.'],['Calentamiento global','Aumento de la temperatura media de la Tierra por la intensificación del efecto invernadero.'],['Combustible fósil','Carbón, petróleo o gas formados hace millones de años; al quemarse liberan CO₂.'],['Fotosíntesis','Las plantas usan CO₂, agua y luz para producir glucosa y O₂.'],['Fijación de nitrógeno','Conversión del N₂ del aire en compuestos que usan las plantas.'],['Lluvia ácida','Lluvia con H₂SO₄ y HNO₃ formados a partir de SO₂ y NOₓ.'],['Eutrofización','Exceso de nutrientes (nitrógeno y fósforo) que causa un crecimiento de algas y baja el oxígeno del agua.'],['ppm','Partes por millón: 1 parte en 1 000 000. En el aire, 420 ppm de CO₂ son 420 moléculas de CO₂ por cada millón de moléculas de aire; en agua, 1 mg por litro.']],voz:'Repasa las palabras clave de la química del ambiente.'},
 {h:'🔬 Simulación: el efecto invernadero y el CO₂',txt:'La luz del Sol calienta la superficie, que devuelve infrarrojo. Las moléculas de CO₂ lo absorben y lo reemiten: más CO₂ retiene más calor.',meta:'Compara los escenarios de 280, 420 y 700 ppm de CO₂.',preg:'¿Qué pasa con la temperatura media cuando el CO₂ pasa de 280 a 700 ppm?',sim:'invernadero',titulo:'Efecto invernadero',
  info:'🌡️ El efecto invernadero natural es <strong>necesario</strong>: sin él la Tierra estaría a unos −18 °C. El problema es que la actividad humana lo <strong>intensifica</strong>.'},
 {h:'De dónde viene el CO₂ y qué consecuencias tiene',txt:'La quema de combustibles fósiles, la deforestación y la ganadería aumentan los gases de efecto invernadero.',meta:'Al terminar podrás relacionar actividades humanas con emisiones y con consecuencias para Colombia.',
  tabla:[['Actividad','Gas','Reacción o proceso'],['Quemar gasolina o carbón','CO₂','Combustión: C + O₂ → CO₂'],['Deforestación y quema de bosques','CO₂','Se pierde la fotosíntesis y se libera el carbono almacenado'],['Ganadería y arrozales','CH₄','Fermentación y descomposición sin oxígeno'],['Termoeléctricas a carbón','SO₂ y NOₓ','Forman lluvia ácida (H₂SO₄, HNO₃)']],
  pasos:['Ejemplo resuelto: CO₂ de quemar metano','<strong>Ecuación.</strong> CH₄ + 2 O₂ → CO₂ + 2 H₂O.','<strong>Moles.</strong> 32 g ÷ 16 g/mol = 2 mol de CH₄.','<strong>Razón molar.</strong> 1 mol CH₄ → 1 mol CO₂ → 2 mol de CO₂.','<strong>Masa.</strong> 2 mol × 44 g/mol = <strong>88 g de CO₂</strong>.'],
  info:'🏔️ Los glaciares de la Sierra Nevada de Santa Marta, el Cocuy y el Ruiz han perdido buena parte de su área en pocas décadas: menos agua almacenada en la alta montaña; los páramos son los principales reguladores y reservorios de agua del país.'},
 {h:'Los ciclos del carbono, el nitrógeno y el agua',txt:'La fotosíntesis y la respiración conectan los seres vivos con el carbono de la atmósfera; las bacterias fijan nitrógeno; el agua cambia de estado.',meta:'Al terminar podrás comparar fotosíntesis y respiración y describir el ciclo del nitrógeno.',
  cards:[['Carbono','Fotosíntesis','6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂','Absorbe CO₂ y energía solar; produce glucosa y oxígeno.'],['Carbono','Respiración','C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O','Libera CO₂ y energía para la célula. Casi el proceso inverso.'],['Nitrógeno','Fijación','N₂ → NH₄⁺','Las bacterias de las raíces del frijol y otras leguminosas convierten N₂ en formas aprovechables.'],['Agua','Cambios de estado','H₂O(l) ⇄ H₂O(g)','La evaporación y la condensación son cambios de estado; con la precipitación (lluvia, nieve) el agua vuelve del aire al suelo y al mar.']],
  info:'🌱 <strong>Eutrofización:</strong> los fertilizantes con nitrógeno y fósforo en exceso llegan a lagunas y ríos, las algas crecen sin control y, al morir, las bacterias que las descomponen consumen el oxígeno del agua. Los páramos conservados regulan el agua y almacenan carbono.'}
 ]});

/* ═════════ construir ═════════ */
P.forEach(p=>{
  let h=drawer(HEAD,p.f);
  h=h.replace(/<title>[^<]*<\/title>/,`<title>IonNom — ${p.titulo}</title>`).replace(/<meta name="description" content="[^"]*">/,`<meta name="description" content="${esc(p.desc)}">`);
  let body=`<div class="app">
  <div class="page-hdr">
    <h1>${p.h1}</h1>
    <p>${p.intro}</p>
    <p style="margin-top:8px"><span class="tipo" style="display:inline-block;padding:3px 10px;border-radius:999px;background:var(--an-b);color:var(--an-t);font-weight:700;font-size:.78rem">Nivel ${NIVEL[p.f.replace('.html','')][0].toLowerCase()} · ${NIVEL[p.f.replace('.html','')][1]}</span></p>
  </div>

  <a href="#practica" class="quick-practice" onclick="document.getElementById('practica').scrollIntoView({behavior:'smooth'});return false;">⬇️ Ir directo a la práctica</a>
`;
  p.secciones.forEach(s=>body+=seccion(s));
  body+=`  <div class="sect quiz-sect" id="practica">
    <h2>✅ Practica — ${p.titulo} ${tts('Ocho preguntas al azar del banco del Juego sobre '+p.titulo+'.')}</h2>
    <div id="prac-${p.banco}"></div>
  </div>

`+FOOT(p.juego);
  const scripts=`<script src="banco.js"></script>
<script src="assets/bancos-dba.js"></script>
<script src="assets/sed10.js"></script>
<script src="assets/sim10.js"></script>
<script src="assets/simx.js"></script>
<script>
if(window.SED10&&window.BANCOS_DBA)SED10.practica('prac-${p.banco}',BANCOS_DBA.${p.banco},8,'Practica: ${p.titulo.toLowerCase()}','${p.banco}');
</script>
<script src="assets/toc.js"></script>
<script src="assets/ionom-ui.js"></script>
<script src="assets/pantalla.js"></script>
</body>
</html>
`;
  fs.writeFileSync(p.f,h+body+TAIL+scripts);
  console.log(p.f,Math.round((h+body+TAIL+scripts).length/1024)+' KB');
});
