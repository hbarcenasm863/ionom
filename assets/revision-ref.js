/* revision-ref.js — GENERADO. Etiquetas de cada pregunta Saber según la revisión del banco contra
   REFERENTES_CURRICULARES.md (revisión del 24-11-2026), hecha por agentes expertos independientes (evaluación Icfes y currículo MEN).
   Clave: la del «Banco de preguntas» (tema|hash del contexto y el enunciado). Campos: c (competencia), af (afirmación),
   ev (evidencia del Marco Saber 11.° 2019), nd (nivel de desempeño 1-4), dba (DBA del MEN 2016) y curso.
   Se carga después de docente-datos.js. Si cambia el texto de una pregunta, su clave cambia y la etiqueta deja de
   aplicarse: hay que volver a revisarla. */
window.REVISION_REF={};
(function(){
  var R=window.REVISION_REF,D=window.DOCENTE_DATOS;if(!R||!D||!D.SABER)return;
  function hash(s){var h=5381;s=String(s);for(var i=0;i<s.length;i++){h=((h<<5)+h+s.charCodeAt(i))>>>0;}return h.toString(36);}
  function lim(s){return String(s==null?'':s).replace(/<[^>]+>/g,' ');}
  function poner(q,tema){if(!q||q.icfes)return;var a=R[tema+'|'+hash(lim(q.ctx)+'|'+lim(q.q))];if(!a)return;for(var k in a)q[k]=a[k];}
  var S=D.SABER;
  if(Array.isArray(S))S.forEach(function(q){poner(q,q.tema);});
  else Object.keys(S).forEach(function(t){(S[t]||[]).forEach(function(q){poner(q,t);});});
})();
