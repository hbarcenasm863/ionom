/* ════════════════════════════════════════════════════════════════════════
   docente-datos.js — SOLO CONTENIDO (TEMAS, SABER, ABIERTAS) de
   docente.html. La lógica vive en assets/docente-app.js.

   Estado: PILOTO -- 2 de 14 temas completos (ox-bas, balanceo) para
   verificar el motor de punta a punta antes de escribir los 12 restantes.
   Expone window.DOCENTE_DATOS = {TEMAS, SABER, ABIERTAS}.
   ════════════════════════════════════════════════════════════════════════ */
window.DOCENTE_DATOS = {

TEMAS: [
  {
    id: 'ox-bas',
    titulo: 'Óxidos básicos',
    gen: ['ox-bas'], jue: 'ox-bas', rxn: [],
    previos: {
      curiosos: [
        'La herrumbre que se forma en una reja o en una herramienta vieja es óxido de hierro (Fe₂O₃ o FeO, según el estado de oxidación del hierro) — el mismo tipo de compuesto que vas a aprender a nombrar en este tema.',
        'La "cal" que se usa para encalar troncos de árboles o paredes en fincas colombianas es óxido de calcio (CaO), antes de mezclarse con agua para formar la "cal apagada" (hidróxido de calcio).'
      ],
      contexto: [
        {amb:'Nacional', t:'Acerías Paz de Río (Boyacá), la única siderúrgica integrada de Colombia, procesa hematita (Fe₂O₃) extraída del Cerro de Paz de Río desde 1954 para producir acero.'},
        {amb:'Local', t:'En las zonas rurales de clima frío de Colombia (altiplano cundiboyacense), el óxido de calcio (cal viva) se usa para desinfectar corrales y encalar cultivos de papa.'}
      ],
      cotidianos: [
        'Cuando un clavo o una estructura metálica se oxida con el tiempo a la intemperie, el color rojizo-café que aparece es literalmente un óxido metálico formándose poco a poco por reacción con el oxígeno del aire.'
      ],
      activacion: [
        '¿Qué elemento del aire crees que reacciona con los metales para formar estos compuestos? ¿Por qué crees que casi todos los óxidos metálicos sólidos son básicos (reaccionan con agua formando una base) y no ácidos?'
      ]
    },
    info: {
      lectura: [
        'Un <strong>óxido básico</strong> se forma cuando un <strong>metal</strong> reacciona con <strong>oxígeno (O₂)</strong>. El metal siempre actúa como catión (ion positivo) y el oxígeno como anión óxido (O²⁻).',
        'Para escribir la fórmula se <strong>intercambian las cargas</strong>: la carga del catión se convierte en el subíndice del oxígeno, y la carga del anión (siempre 2, en valor absoluto) se convierte en el subíndice del metal. Si los subíndices resultantes tienen un factor común, se simplifican (ej. Ca²⁺ + O²⁻ no da Ca₂O₂, sino CaO).',
        'Los tres sistemas de nomenclatura nombran el mismo compuesto distinto: <strong>Tradicional</strong> usa "óxido" + el sufijo del metal (-oso para la valencia menor, -ico para la mayor, solo si el metal tiene más de una valencia); <strong>Stock</strong> usa "óxido de" + el nombre del metal + el número de oxidación en romano entre paréntesis (solo si el metal tiene más de una valencia); <strong>Sistemática</strong> usa prefijos griegos (mono-, di-, tri-…) para contar los átomos de cada elemento.'
      ],
      esquema: {
        raiz: 'Óxido básico = Metal + O₂',
        ramas: [
          {t:'Formación', items:['Metal (catión)', '+ Oxígeno (anión óxido, O²⁻)', '→ intercambio de cargas']},
          {t:'Tradicional', items:['óxido + sufijo -oso/-ico (si el metal tiene 2 valencias)', 'óxido de + metal (si el metal tiene valencia fija)']},
          {t:'Stock', items:['óxido de + metal + (número romano), solo si la valencia varía']},
          {t:'Sistemática', items:['prefijo-óxido de prefijo-metal']}
        ]
      }
    },
    ejemplo: {
      f: 'Fe₂O₃',
      partes: [
        ['Fe³⁺','cat','catión hierro con valencia +3 (el hierro tiene 2 valencias posibles: +2 y +3; aquí usamos la mayor)'],
        ['O²⁻','an','anión óxido, siempre con carga -2']
      ]
    }
  },
  {
    id: 'balanceo',
    titulo: 'Balanceo de ecuaciones',
    gen: ['balanceo'], jue: 'balanceo', rxn: [],
    previos: {
      curiosos: [
        'La Ley de Conservación de la Masa (Lavoisier, 1789) dice que en una reacción química la materia no se crea ni se destruye, solo se reorganiza — por eso una ecuación química balanceada debe tener el mismo número de átomos de cada elemento a ambos lados de la flecha.'
      ],
      contexto: [
        {amb:'Nacional', t:'Ecopetrol balancea ecuaciones de combustión a escala industrial en sus refinerías (Barrancabermeja, Cartagena) para calcular exactamente cuánto oxígeno necesita quemar un combustible sin desperdiciarlo ni generar exceso de contaminantes.'}
      ],
      cotidianos: [
        'Cuando sigues una receta de cocina y necesitas el doble de porciones, duplicas TODOS los ingredientes en la misma proporción — balancear una ecuación química es exactamente esa misma idea, pero con átomos en vez de ingredientes.'
      ],
      activacion: [
        '¿Qué pasaría si en una ecuación química hay más átomos de un elemento en los productos que en los reactivos? ¿De dónde "aparecerían" esos átomos extra?'
      ]
    },
    info: {
      lectura: [
        'Balancear una ecuación química significa ajustar los <strong>coeficientes</strong> (los números grandes delante de cada fórmula) para que el número total de átomos de cada elemento sea igual en los reactivos y en los productos. Los <strong>subíndices</strong> de las fórmulas NUNCA se cambian — cambiarlos cambiaría la identidad de la sustancia.',
        'El <strong>método de tanteo</strong> (el más usado en 10°-11°) sigue este orden práctico: primero se balancean los elementos que aparecen en una sola fórmula a cada lado, luego los metales, luego los no metales, y se dejan el hidrógeno y el oxígeno para el final (suelen aparecer en varias moléculas a la vez, como el agua).',
        'Los coeficientes finales siempre deben ser los <strong>números enteros más pequeños posibles</strong> que balanceen la ecuación — si todos comparten un factor común, se simplifican.'
      ],
      esquema: {
        raiz: 'Balanceo por tanteo',
        ramas: [
          {t:'Orden sugerido', items:['Elementos que aparecen una sola vez por lado', 'Metales', 'No metales', 'H y O al final']},
          {t:'Regla de oro', items:['Mismo número de átomos de cada elemento a ambos lados', 'Coeficientes enteros mínimos', 'Nunca cambiar los subíndices']}
        ]
      }
    },
    ejemplo: {
      f: 'Fe + O₂ → Fe₂O₃',
      partes: [
        ['4Fe','cat','4 átomos de hierro a la izquierda para que coincidan con los 4 (2×2) de la derecha'],
        ['3O₂','an','3 moléculas de O₂ = 6 átomos de O, para que coincidan con los 6 (2×3) de la derecha'],
        ['2Fe₂O₃','ox','balanceado: 4Fe + 3O₂ → 2Fe₂O₃']
      ]
    }
  }
],

SABER: [
  {tema:'ox-bas', c:'uso', k:'Q',
   ctx:'En la siderúrgica de Paz de Río (Boyacá) se procesa hematita, un mineral compuesto principalmente por un óxido de hierro(III), para producir acero.',
   q:'¿Cuál es el nombre Stock correcto del óxido de hierro con fórmula Fe₂O₃?',
   o:['óxido de hierro (III)','óxido de hierro (II)','óxido férrico (II)','dióxido de hierro']},
  {tema:'ox-bas', c:'exp', k:'Q',
   ctx:'',
   q:'El calcio tiene valencia fija +2. ¿Cuál es la fórmula correcta de su óxido?',
   o:['CaO','Ca₂O','CaO₂','Ca₂O₂']},
  {tema:'ox-bas', c:'ind', k:'CTS',
   ctx:'La cal viva (óxido de calcio) se usa en fincas del altiplano cundiboyacense para encalar corrales y desinfectar suelos antes de sembrar papa.',
   q:'¿Qué tipo de compuesto se forma cuando esta cal viva (CaO) reacciona con el agua de lluvia?',
   o:['Un hidróxido (base)','Un ácido oxácido','Una sal binaria','Un hidruro metálico']},
  {tema:'ox-bas', c:'uso', k:'Q',
   ctx:'',
   q:'¿Por qué el óxido de hierro(III) se llama "óxido férrico" y no "óxido ferroso" en nomenclatura Tradicional?',
   o:['Porque "férrico" corresponde a la valencia mayor del hierro (+3) y "ferroso" a la menor (+2)','Porque "férrico" se usa solo para óxidos y "ferroso" solo para sales','Porque "férrico" indica que el compuesto es ácido','Porque son dos nombres intercambiables para la misma valencia']},

  {tema:'balanceo', c:'exp', k:'Q',
   ctx:'',
   q:'¿Cuáles son los coeficientes mínimos correctos para balancear 4Fe + 3O₂ → 2Fe₂O₃?',
   o:['4, 3, 2 (ya está balanceada así)','2, 3, 1','4, 6, 2','1, 1, 1']},
  {tema:'balanceo', c:'ind', k:'CTS',
   ctx:'Ecopetrol calcula con precisión cuánto oxígeno necesita la combustión de un hidrocarburo en sus refinerías de Barrancabermeja y Cartagena para no desperdiciar combustible ni generar exceso de contaminantes.',
   q:'¿Por qué es importante balancear correctamente la ecuación de una combustión industrial antes de calcular cuánto oxígeno se necesita?',
   o:['Porque la Ley de Conservación de la Masa exige que los átomos de reactivos y productos coincidan exactamente','Porque los coeficientes solo afectan el color de la llama','Porque el balanceo cambia la fórmula química de los productos','Porque sin balancear, la reacción no libera calor']},
  {tema:'balanceo', c:'uso', k:'Q',
   ctx:'',
   q:'Al balancear una ecuación, ¿qué parte de cada fórmula SÍ se puede modificar?',
   o:['El coeficiente (el número grande delante de la fórmula)','El subíndice de cada elemento','El símbolo del elemento','El estado de oxidación de los reactivos originales']}
],

ABIERTAS: [
  {tema:'ox-bas', t:'rx', q:'Un trozo de magnesio metálico se quema en presencia de oxígeno del aire. Escribe la ecuación de formación del óxido correspondiente y nombra el producto en los 3 sistemas.'},
  {tema:'ox-bas', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'Cu₂O'},
  {tema:'ox-bas', t:'mdec', q:'Separa el siguiente compuesto en sus partes según el código de 4 colores de IonNom (catión y anión) e indica la carga de cada uno.', f:'Al₂O₃'},
  {tema:'balanceo', t:'rx', q:'Balancea por tanteo la siguiente ecuación y explica, paso a paso, el orden en que decidiste ajustar cada coeficiente.'},
  {tema:'balanceo', t:'nom', q:'La ecuación sin balancear Na + Cl₂ → NaCl describe la formación de sal común. Balancéala y nombra el producto en nomenclatura Tradicional y Stock.'},
  {tema:'balanceo', t:'mdec', q:'En la ecuación balanceada 2Mg + O₂ → 2MgO, identifica el catión y el anión del producto y el color MDEC que le corresponde a cada uno.'}
]

};
