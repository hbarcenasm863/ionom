/* ════════════════════════════════════════════════════════════════════════
   docente-datos.js — SOLO CONTENIDO (TEMAS, SABER, ABIERTAS) de
   docente.html. La lógica vive en assets/docente-app.js.

   14 de 14 temas completos: los 10 grupos de banco.js (ox-bas, anhid,
   hidru, ac-hid, base, ac-ox, sal-bin, sal-ox, sal-ac, mol-masa) más
   reaccion y balanceo (también de banco.js) y elemento/reactividad (de
   ELEMENTS/REACT_CHAINS en juego.html).
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
,
{
  id: 'anhid',
  titulo: 'Óxidos ácidos (anhídridos)',
  gen: ['anhid'], jue: 'anhid', rxn: [],
  previos: {
    curiosos: [
      'La lluvia ácida se forma cuando el dióxido de azufre (SO₂) y los óxidos de nitrógeno liberados por fábricas y vehículos reaccionan con el agua de las nubes y forman ácidos — el mismo tipo de compuesto (óxido ácido) que vas a nombrar en este tema es el primer paso de ese proceso.',
      'El nombre "anhídrido" significa literalmente "sin agua": si le agregas agua a un anhídrido, obtienes el ácido oxácido correspondiente (ej. SO₃ + H₂O → H₂SO₄).'
    ],
    contexto: [
      {amb:'Nacional', t:'En Barrancabermeja, la refinería de Ecopetrol controla las emisiones de dióxido de azufre (SO₂) de sus procesos de refinación para cumplir con los límites de calidad del aire establecidos por las autoridades ambientales colombianas.'},
      {amb:'Local', t:'En ciudades con alto tráfico como Bogotá y Medellín, los óxidos de nitrógeno (NOₓ) emitidos por los motores diésel son monitoreados por las redes de calidad del aire como un indicador de contaminación.'}
    ],
    cotidianos: [
      'El olor característico que se siente cerca de una fábrica que quema carbón o combustibles con azufre es, muchas veces, dióxido de azufre (SO₂) escapando a la atmósfera.'
    ],
    activacion: [
      '¿Qué diferencia esperarías entre un óxido que se forma con un metal (como el hierro) y uno que se forma con un no metal (como el azufre)? ¿Por qué crees que a este segundo tipo se le llama "óxido ácido"?'
    ]
  },
  info: {
    lectura: [
      'Un <strong>óxido ácido</strong> (llamado tradicionalmente "anhídrido" en Colombia) se forma cuando un <strong>no metal</strong> reacciona con <strong>oxígeno (O₂)</strong>. Es el mismo tipo de intercambio de cargas que en los óxidos básicos, pero aquí el elemento que acompaña al oxígeno es un no metal.',
      'El <strong>estado de oxidación (EO) del no metal varía</strong> igual que en los metales de valencia variable: a mayor EO, sufijo <strong>-ico</strong>; a menor EO, sufijo <strong>-oso</strong>. Por ejemplo, el azufre con EO +6 da "sulfúrico" (SO₃) y con EO +4 da "sulfuroso" (SO₂). Cuando el no metal tiene más de dos valencias posibles (como el cloro), se usan además los prefijos <strong>hipo-</strong> (la valencia más baja de todas) y <strong>per-</strong> (la más alta de todas).',
      'Los tres sistemas nombran igual que en óxidos básicos: <strong>Tradicional</strong> usa "anhídrido" + sufijo/prefijo según el EO; <strong>Stock</strong> usa "óxido de" + no metal + número de oxidación en romano (poco usado en la práctica para no metales, por eso en IonNom se prioriza Tradicional y Sistemática para este grupo); <strong>Sistemática</strong> usa prefijos griegos (mono-, di-, tri-, tetra-, penta-) para contar los átomos de cada elemento, sin excepción.'
    ],
    esquema: {
      raiz: 'Óxido ácido = No metal + O₂',
      ramas: [
        {t:'Formación', items:['No metal + Oxígeno (O₂)', '→ intercambio de cargas (igual que óxido básico)']},
        {t:'Tradicional', items:['anhídrido + sufijo -oso (EO menor) / -ico (EO mayor)', 'con prefijo hipo- (EO mínimo) o per- (EO máximo) si hay más de 2 valencias']},
        {t:'Sistemática', items:['prefijo griego-óxido de prefijo griego-no metal (siempre, sin excepción)']},
        {t:'Relación con ácidos', items:['anhídrido + H₂O → ácido oxácido correspondiente']}
      ]
    }
  },
  ejemplo: {
    f: 'N₂O₅',
    partes: [
      ['N₂','cat','2 átomos de nitrógeno con estado de oxidación +5 (el mayor de los posibles para el N) — por eso el sufijo es -ico'],
      ['O₅','an','5 átomos de oxígeno, cada uno con carga -2 (2×5=10, que equilibra 2×5=10 del nitrógeno)']
    ]
  }
},
{
  id: 'hidru',
  titulo: 'Hidruros metálicos',
  gen: ['hidru'], jue: 'hidru', rxn: [],
  previos: {
    curiosos: [
      'El hidrógeno casi siempre tiene estado de oxidación +1 (como en el agua, H₂O) — pero en los hidruros metálicos pasa justo lo contrario: el hidrógeno tiene EO −1, porque el metal es menos electronegativo que él. Es el único grupo de compuestos comunes donde esto ocurre.',
      'El hidruro de calcio (CaH₂) reacciona violentamente con el agua liberando gas hidrógeno, por lo que se ha usado históricamente como fuente portátil de H₂ en globos meteorológicos y balsas salvavidas de emergencia.'
    ],
    contexto: [
      {amb:'Nacional', t:'Colombia explora depósitos de litio en Boyacá; compuestos de litio como el hidruro de litio (LiH) son estudiados en investigación de almacenamiento de energía e hidrógeno.'}
    ],
    cotidianos: [
      'Aunque los hidruros metálicos no son de uso doméstico común, el mismo principio (metal + hidrógeno con carga negativa) es la base de las baterías experimentales de "hidruro metálico" (NiMH) que se usan en pilas recargables.'
    ],
    activacion: [
      '¿Qué carga crees que tiene el hidrógeno cuando se combina con un metal, en vez de con un no metal como el oxígeno o el cloro? ¿Por qué podría ser diferente?'
    ]
  },
  info: {
    lectura: [
      'Un <strong>hidruro metálico</strong> se forma cuando un <strong>metal</strong> reacciona con <strong>hidrógeno (H₂)</strong>. A diferencia de casi todos los demás compuestos de este curso, aquí el <strong>hidrógeno actúa como anión (H⁻, estado de oxidación −1)</strong>, porque el metal es menos electronegativo que él.',
      'La fórmula se arma igual que un óxido básico: se intercambian las cargas. La carga del catión metálico se convierte en el subíndice del hidrógeno, y la carga del hidruro (siempre −1) se convierte en el subíndice del metal.',
      'Como el H⁻ siempre tiene la misma carga (−1) y la mayoría de los metales de este grupo tienen valencia fija, el <strong>nombre es prácticamente idéntico en los 3 sistemas</strong>: "hidruro de" + metal (Tradicional/Stock), con el prefijo correspondiente en Sistemática cuando hay más de un átomo de hidrógeno (ej. "dihidruro de calcio").'
    ],
    esquema: {
      raiz: 'Hidruro metálico = Metal + H₂ (H actúa como H⁻)',
      ramas: [
        {t:'Formación', items:['Metal (catión)', '+ Hidrógeno (anión hidruro, H⁻, EO −1)', '→ intercambio de cargas']},
        {t:'Nombre', items:['hidruro de + metal (igual en Tradicional y Stock para valencia fija)', 'di-/tri- + hidruro de + metal en Sistemática si hay más de un H']}
      ]
    }
  },
  ejemplo: {
    f: 'CaH₂',
    partes: [
      ['Ca²⁺','cat','catión calcio, valencia fija +2 (grupo 2A)'],
      ['2H⁻','an','2 aniones hidruro, cada uno con carga -1 (2×(-1) = -2, equilibra la carga +2 del calcio)']
    ]
  }
},
{
  id: 'ac-hid',
  titulo: 'Ácidos hídricos',
  gen: ['ac-hid'], jue: 'ac-hid', rxn: [],
  previos: {
    curiosos: [
      'El ácido clorhídrico (HCl) disuelto en agua es, en esencia, el mismo ácido que produce tu estómago para digerir los alimentos (jugo gástrico) — aunque a una concentración mucho menor que el HCl de laboratorio o industrial.',
      'El "ácido muriático" que se vende en ferreterías colombianas para limpiar pisos y piscinas es, químicamente, ácido clorhídrico (HCl) diluido.'
    ],
    contexto: [
      {amb:'Local', t:'En las piscinas públicas y privadas de todo el país se usa ácido clorhídrico diluido para regular el pH del agua antes de la cloración.'}
    ],
    cotidianos: [
      'Cuando lees en una etiqueta de producto de limpieza "ácido muriático", en realidad estás leyendo el nombre comercial del ácido clorhídrico (HCl) — uno de los ácidos hídricos que vas a nombrar en este tema.'
    ],
    activacion: [
      '¿Qué diferencia habrá entre un ácido como el HCl (sin oxígeno) y uno como el H₂SO₄ (con oxígeno)? ¿Crees que se nombran de la misma manera?'
    ]
  },
  info: {
    lectura: [
      'Un <strong>ácido hídrico</strong> se forma cuando el <strong>hidrógeno</strong> se combina con un <strong>no metal sin oxígeno</strong> (generalmente de los grupos 16 y 17 de la tabla periódica: F, Cl, Br, I, S, Se). A diferencia de los hidruros metálicos, aquí el hidrógeno SÍ tiene su estado de oxidación habitual, +1, actuando como catión.',
      'El mismo compuesto tiene <strong>dos nombres según su estado</strong>: disuelto en agua (como se usa casi siempre en el laboratorio y la industria) se nombra "ácido" + raíz del no metal + sufijo "-hídrico" (ej. HCl disuelto = ácido clorhídrico). En estado puro o gaseoso, la nomenclatura Sistemática/IUPAC lo nombra como el anión + "de hidrógeno" (ej. HCl gaseoso = cloruro de hidrógeno). No son nombres alternativos arbitrarios: describen el mismo compuesto en dos contextos distintos.',
      'Este grupo no tiene nomenclatura Stock propia (no hay un número de oxidación que indicar, porque el hidrógeno siempre es +1 en estos compuestos) — por eso en IonNom solo se trabajan los sistemas Tradicional y Sistemática para este grupo.'
    ],
    esquema: {
      raiz: 'Ácido hídrico = H + no metal (sin O)',
      ramas: [
        {t:'Formación', items:['Hidrógeno (catión, H⁺)', '+ No metal sin oxígeno (anión simple)', '→ intercambio de cargas']},
        {t:'Tradicional (disuelto en agua)', items:['ácido + raíz del no metal + -hídrico']},
        {t:'Sistemática (estado puro/gaseoso)', items:['nombre del anión + "de hidrógeno"']}
      ]
    }
  },
  ejemplo: {
    f: 'H₂S',
    partes: [
      ['H₂','cat','2 átomos de hidrógeno, cada uno con carga +1 (actuando como catión, a diferencia de los hidruros metálicos)'],
      ['S²⁻','an','anión sulfuro, con carga -2, que da el nombre a este ácido ("sulf-hídrico", con una "h" intercalada por pronunciación)']
    ]
  }
},
{
  id: 'base',
  titulo: 'Hidróxidos (bases)',
  gen: ['base'], jue: 'base', rxn: [],
  previos: {
    curiosos: [
      'El hidróxido de sodio (NaOH, también llamado "soda cáustica") es tan corrosivo que puede disolver grasa y tejido orgánico — por eso se usa tanto en la fabricación de jabón como en destapacaños, y requiere manipulación cuidadosa.',
      'El hidróxido de calcio (Ca(OH)₂), o "cal apagada", se obtiene agregando agua al óxido de calcio (cal viva) que ya viste en el tema de óxidos básicos — los dos temas están directamente conectados.'
    ],
    contexto: [
      {amb:'Local', t:'En Colombia, muchas familias y pequeños productores fabrican jabón artesanal usando hidróxido de sodio (soda cáustica) mezclado con grasas o aceites vegetales.'},
      {amb:'Nacional', t:'El hidróxido de calcio (cal apagada) se usa en el tratamiento de agua potable en varios acueductos municipales colombianos para ajustar el pH antes de la distribución.'}
    ],
    cotidianos: [
      'La leche de magnesia, un antiácido estomacal de uso común, es una suspensión de hidróxido de magnesio (Mg(OH)₂) en agua.'
    ],
    activacion: [
      '¿Qué tienen en común todos los compuestos de este tema? Fíjate en la parte de la fórmula que se repite en todos: OH. ¿Qué crees que representa?'
    ]
  },
  info: {
    lectura: [
      'Un <strong>hidróxido</strong> (o "base") se forma cuando un <strong>metal</strong> se combina con el <strong>ion hidróxido (OH⁻)</strong>, un anión poliatómico formado por un oxígeno y un hidrógeno unidos, con carga -1 en conjunto.',
      'La fórmula se arma intercambiando cargas: la carga del catión metálico determina cuántos grupos OH⁻ necesita (ej. Ca²⁺ necesita 2 OH⁻ → Ca(OH)₂). El grupo OH⁻ siempre va entre paréntesis cuando hay más de uno, porque es un ion poliatómico, no un solo átomo.',
      'Los tres sistemas nombran igual que los óxidos básicos: <strong>Tradicional</strong> usa "hidróxido" + sufijo -oso/-ico (solo si el metal tiene más de una valencia); <strong>Stock</strong> usa "hidróxido de" + metal + número romano (solo si varía la valencia); <strong>Sistemática</strong> usa prefijos griegos para contar los grupos OH⁻ (di-, tri-…).'
    ],
    esquema: {
      raiz: 'Hidróxido = Metal + OH⁻',
      ramas: [
        {t:'Formación', items:['Metal (catión)', '+ Hidróxido (anión poliatómico OH⁻, carga -1)', '→ el número de OH⁻ iguala la carga del catión']},
        {t:'Tradicional', items:['hidróxido + sufijo -oso/-ico (solo si el metal tiene 2 valencias)']},
        {t:'Stock', items:['hidróxido de + metal + (número romano), solo si la valencia varía']},
        {t:'Sistemática', items:['di-/tri- + hidróxido de + metal']}
      ]
    }
  },
  ejemplo: {
    f: 'Mg(OH)₂',
    partes: [
      ['Mg²⁺','cat','catión magnesio, valencia fija +2 (grupo 2A)'],
      ['2(OH)⁻','oh','2 grupos hidróxido, cada uno con carga -1 (2×(-1) = -2, equilibra la carga +2 del magnesio) — van entre paréntesis por ser un ion poliatómico']
    ]
  }
},
{
  id: 'ac-ox',
  titulo: 'Ácidos oxácidos',
  gen: ['ac-ox'], jue: 'ac-ox', rxn: [],
  previos: {
    curiosos: [
      'El ácido fosfórico (H₃PO₄) es el responsable del sabor ácido de muchas gaseosas de cola — se agrega en pequeñas cantidades como acidulante y conservante.',
      'El ácido carbónico (H₂CO₃) es tan inestable que, apenas se forma, tiende a descomponerse de nuevo en CO₂ y agua — por eso una gaseosa destapada "pierde el gas" con el tiempo.'
    ],
    contexto: [
      {amb:'Nacional', t:'El ácido sulfúrico (H₂SO₄) es uno de los insumos químicos más usados en la minería colombiana (oro, carbón, níquel) para procesos de lixiviación y purificación de minerales.'},
      {amb:'Local', t:'Los cultivos de café en Colombia reciben fertilizantes derivados del ácido fosfórico y el ácido nítrico para aportar fósforo y nitrógeno al suelo.'}
    ],
    cotidianos: [
      'La batería de un carro contiene ácido sulfúrico diluido — por eso nunca se debe manipular una batería dañada sin guantes ni protección para los ojos.'
    ],
    activacion: [
      '¿Qué diferencia esperas encontrar entre un ácido oxácido (como el ácido sulfúrico) y un ácido hidrácido (como el ácido clorhídrico, que ya estudiaste)? Fíjate en qué elemento aparece en la fórmula de uno y no del otro.'
    ]
  },
  info: {
    lectura: [
      'Un <strong>ácido oxácido</strong> se forma al combinar <strong>hidrógeno (H⁺)</strong> con un <strong>oxoanión</strong> — un anión poliatómico que contiene oxígeno, como el sulfato (SO₄²⁻), el nitrato (NO₃⁻) o el carbonato (CO₃²⁻). A diferencia de los hidrácidos, aquí SIEMPRE hay oxígeno en la fórmula.',
      'La cantidad de hidrógenos en la fórmula es igual, en valor absoluto, a la carga del oxoanión: si el oxoanión tiene carga −2 (como el sulfato), hacen falta 2 H⁺; si tiene carga −1 (como el nitrato), hace falta 1 H⁺.',
      'El nombre depende del estado de oxidación del átomo central del oxoanión (el azufre en el sulfato, el nitrógeno en el nitrato, etc.): el sufijo <strong>-ico</strong> se usa para el estado de oxidación mayor, y <strong>-oso</strong> para el menor — el mismo patrón que ya viste en anhídridos y óxidos básicos, pero aplicado al átomo central del oxoanión.',
      'En nomenclatura Sistemática y Stock, los ácidos oxácidos conservan el mismo nombre que en Tradicional en la mayoría de los casos del currículo de secundaria (el sistema IUPAC más formal usa otra notación que no se cubre aquí).'
    ],
    esquema: {
      raiz: 'Ácido oxácido = H + oxoanión',
      ramas: [
        {t:'Formación', items:['Hidrógeno (H⁺)', '+ oxoanión (anión poliatómico con oxígeno)', '→ nº de H⁺ = carga del oxoanión']},
        {t:'Sufijos', items:['-ico para el EO mayor del átomo central', '-oso para el EO menor del átomo central']},
        {t:'Ejemplos de oxoaniones', items:['sulfato SO₄²⁻ / sulfito SO₃²⁻', 'nitrato NO₃⁻ / nitrito NO₂⁻', 'carbonato CO₃²⁻', 'fosfato PO₄³⁻']}
      ]
    }
  },
  ejemplo: {
    f: 'H₂SO₄',
    partes: [
      ['H⁺','cat','hidrógeno actuando como catión; aquí hay 2 porque el oxoanión tiene carga −2'],
      ['SO₄²⁻','ox','oxoanión sulfato, con el azufre en estado de oxidación +6 (su valencia mayor), por eso el sufijo -ico']
    ]
  }
},
{
  id: 'sal-bin',
  titulo: 'Sales binarias',
  gen: ['sal-bin'], jue: 'sal-bin', rxn: [],
  previos: {
    curiosos: [
      'La sal de mesa que usas a diario (NaCl) es apenas una de cientos de sales binarias posibles — cualquier combinación de un metal con un halógeno (F, Cl, Br, I) o con azufre forma una sal de este tipo.',
      'El fluoruro de sodio (NaF) se agrega a algunas pastas dentales y al agua potable de ciertas ciudades para prevenir la caries, fortaleciendo el esmalte de los dientes.'
    ],
    contexto: [
      {amb:'Nacional', t:'Las salinas de Manaure (La Guajira) y la mina de sal de Zipaquirá (Cundinamarca) son las principales fuentes de cloruro de sodio (sal de mesa) producidas en Colombia.'},
      {amb:'Local', t:'En la Costa Caribe colombiana, la evaporación solar del agua de mar en salinas artesanales es un método tradicional para obtener cloruro de sodio.'}
    ],
    cotidianos: [
      'Cuando le pones sal a la comida, estás usando cloruro de sodio — una sal binaria formada por un metal (sodio) y un halógeno (cloro), exactamente el tipo de compuesto que vas a nombrar en este tema.'
    ],
    activacion: [
      '¿Qué tienen en común el cloruro de sodio (sal de mesa) y el fluoruro de sodio (de las pastas dentales)? ¿Qué cambia entre uno y otro?'
    ]
  },
  info: {
    lectura: [
      'Una <strong>sal binaria</strong> se forma cuando un <strong>metal</strong> reacciona con un <strong>no metal del grupo de los halógenos (F, Cl, Br, I) o con azufre/selenio</strong>, de forma muy parecida a como un ácido hidrácido pierde su hidrógeno y el anión se combina con un metal en su lugar.',
      'Para escribir la fórmula, igual que con los óxidos e hidruros, se intercambian las cargas: la carga del catión metálico se convierte en el subíndice del anión, y la carga del anión se convierte en el subíndice del metal, simplificando si hay factor común.',
      'El nombre sigue el patrón "anión + de + catión" en los 3 sistemas: el anión usa el sufijo <strong>-uro</strong> (cloruro, bromuro, sulfuro…) y el catión se nombra con número romano en Stock solo si el metal tiene valencia variable.'
    ],
    esquema: {
      raiz: 'Sal binaria = Metal + no metal (halógeno o S/Se)',
      ramas: [
        {t:'Formación', items:['Metal (catión)', '+ anión simple (halogenuro, sulfuro…)', '→ intercambio de cargas']},
        {t:'Nombre', items:['anión (-uro) + "de" + catión', 'número romano en Stock solo si la valencia del metal varía']}
      ]
    }
  },
  ejemplo: {
    f: 'KBr',
    partes: [
      ['K⁺','cat','catión potasio, valencia fija +1 (grupo 1A)'],
      ['Br⁻','an','anión bromuro, con carga −1 (un halógeno)']
    ]
  }
},
{
  id: 'sal-ox',
  titulo: 'Sales oxigenadas (oxisales)',
  gen: ['sal-ox'], jue: 'sal-ox', rxn: [],
  previos: {
    curiosos: [
      'El nitrato de potasio (KNO₃, "salitre") fue, durante siglos, el ingrediente principal de la pólvora negra, mucho antes de que se entendiera su composición química moderna.',
      'El hipoclorito de sodio (NaClO) es el ingrediente activo de la mayoría de blanqueadores y desinfectantes domésticos de uso diario.'
    ],
    contexto: [
      {amb:'Nacional', t:'El carbonato de sodio (Na₂CO₃, "sosa") se usa en Colombia en la fabricación de vidrio y detergentes, y en el tratamiento de aguas para ajustar el pH en plantas de potabilización.'},
      {amb:'Local', t:'Los cultivos de arroz y papa en el Tolima y Boyacá reciben fertilizantes a base de nitrato de potasio para aportar nitrógeno y potasio al suelo.'}
    ],
    cotidianos: [
      'El agua con gas de algunas marcas lleva bicarbonato o sulfato añadido como mineral — pero el blanqueador de ropa que usas en casa casi siempre es, en esencia, hipoclorito de sodio disuelto en agua.'
    ],
    activacion: [
      '¿Qué diferencia hay entre una sal binaria (como el cloruro de sodio) y una sal oxigenada como el sulfato de sodio? Fíjate en cuántos elementos distintos tiene cada fórmula.'
    ]
  },
  info: {
    lectura: [
      'Una <strong>sal oxigenada</strong> (u <strong>oxisal</strong>) se forma cuando un <strong>metal</strong> se combina con un <strong>oxoanión</strong> — el mismo tipo de anión poliatómico que viste en los ácidos oxácidos (sulfato, nitrato, carbonato, fosfato, etc.), pero ahora sin el hidrógeno.',
      'Para escribir la fórmula, el oxoanión se trata como una unidad completa con su propia carga: la carga del catión metálico determina cuántas unidades del oxoanión hacen falta (y viceversa), usando paréntesis cuando se necesita más de una unidad de un anión poliatómico.',
      'El nombre sigue el patrón "oxoanión + de + metal" en los 3 sistemas, usando número romano en Stock solo si el metal tiene valencia variable. El nombre del oxoanión no cambia entre Tradicional, Stock y Sistemática — solo cambia cómo se indica el catión.'
    ],
    esquema: {
      raiz: 'Sal oxigenada = Metal + oxoanión',
      ramas: [
        {t:'Formación', items:['Metal (catión)', '+ oxoanión (sulfato, nitrato, carbonato, fosfato…)', '→ el oxoanión se trata como unidad con su propia carga']},
        {t:'Nombre', items:['oxoanión + "de" + catión', 'número romano en Stock solo si la valencia del metal varía']}
      ]
    }
  },
  ejemplo: {
    f: 'K₂SO₄',
    partes: [
      ['K⁺','cat','catión potasio, valencia fija +1; hacen falta 2 para compensar la carga −2 del sulfato'],
      ['SO₄²⁻','ox','oxoanión sulfato, carga −2, tratado como una sola unidad']
    ]
  }
},
{
  id: 'sal-ac',
  titulo: 'Sales ácidas',
  gen: ['sal-ac'], jue: 'sal-ac', rxn: [],
  previos: {
    curiosos: [
      'El bicarbonato de sodio (NaHCO₃), el mismo polvo blanco que usas para hornear tortas, es una sal ácida: el oxoanión carbonato "retuvo" uno de los hidrógenos que en teoría podía ceder.',
      'El bicarbonato de sodio también se usa como antiácido estomacal casero, porque reacciona con el exceso de ácido clorhídrico del estómago liberando CO₂ (por eso "eructa" al tomarlo disuelto en agua).'
    ],
    contexto: [
      {amb:'Nacional', t:'En panaderías artesanales de todo Colombia, el bicarbonato de sodio se usa junto con el polvo de hornear para leudar panes y ponqués.'},
      {amb:'Local', t:'El bicarbonato de sodio se vende en todas las droguerías y tiendas colombianas como remedio casero para la acidez estomacal y como ingrediente de limpieza del hogar.'}
    ],
    cotidianos: [
      'Cuando mezclas bicarbonato de sodio con vinagre en un experimento casero y ves burbujear la mezcla, estás viendo al bicarbonato (una sal ácida) reaccionar liberando CO₂ gaseoso.'
    ],
    activacion: [
      '¿Por qué crees que el bicarbonato de sodio (NaHCO₃) tiene un hidrógeno "extra" en su fórmula, comparado con el carbonato de sodio (Na₂CO₃) que ya viste en sales oxigenadas? ¿De dónde salió ese hidrógeno?'
    ]
  },
  info: {
    lectura: [
      'Una <strong>sal ácida</strong> se forma cuando un oxoanión poliprótico (uno que en teoría puede ceder más de un H⁺, como el carbonato CO₃²⁻ o el sulfato SO₄²⁻) <strong>no cede todos sus hidrógenos</strong>, conservando al menos uno en su fórmula — por ejemplo, el carbonato (CO₃²⁻) puede quedar como bicarbonato (HCO₃⁻) si retiene un H⁺.',
      'Esta "sal ácida" conserva el hidrógeno dentro del anión (no es un ácido oxácido completo, pero tampoco es la sal "neutra" que ya viste en sales oxigenadas): es un paso intermedio.',
      'En <strong>Tradicional</strong> se nombra con el prefijo <strong>bi-</strong> antes del nombre del oxoanión (bicarbonato, bisulfato); en <strong>Stock</strong> se usa el prefijo <strong>hidrogeno-</strong> (hidrogenocarbonato, hidrogenosulfato) — ambos nombres describen exactamente el mismo compuesto, solo cambia el sistema. La mayoría de estas sales <strong>no tienen</strong> una forma Sistemática distinta en el currículo de secundaria.'
    ],
    esquema: {
      raiz: 'Sal ácida = Metal + oxoanión que retuvo H⁺',
      ramas: [
        {t:'Formación', items:['Oxoanión poliprótico (ej. CO₃²⁻, SO₄²⁻)', 'retiene 1 (o más) H⁺ en vez de cederlos todos', '+ metal (catión)']},
        {t:'Tradicional', items:['bi- + nombre del oxoanión (bicarbonato, bisulfato, bisulfito)']},
        {t:'Stock', items:['hidrogeno- + nombre del oxoanión (hidrogenocarbonato, hidrogenosulfato)']}
      ]
    }
  },
  ejemplo: {
    f: 'NaHSO₄',
    partes: [
      ['Na⁺','cat','catión sodio, valencia fija +1'],
      ['HSO₄⁻','ox','oxoanión bisulfato/hidrogenosulfato: el sulfato (SO₄²⁻) retuvo 1 H⁺, quedando con carga −1']
    ]
  }
},
{
  id: 'reaccion',
  titulo: 'Tipos de reacción química',
  gen: ['reaccion'], jue: 'reaccion', rxn: [],
  previos: {
    curiosos: [
      'El proceso Haber-Bosch, que combina nitrógeno (N₂) e hidrógeno (H₂) para formar amoníaco (NH₃), es una reacción de síntesis tan importante para la producción mundial de fertilizantes que se estima que alimenta a cerca de la mitad de la población del planeta.',
      'Cuando mezclas óxido de calcio (cal viva) con agua y sientes que el recipiente se calienta, estás presenciando en vivo una reacción de síntesis: CaO + H₂O → Ca(OH)₂, que libera calor.'
    ],
    contexto: [
      {amb:'Nacional', t:'Las plantas de fertilizantes que abastecen los cultivos de café, arroz y palma africana en Colombia dependen de reacciones de síntesis como la del amoníaco (N₂ + 3H₂ → 2NH₃).'},
      {amb:'Local', t:'En las salinas de Manaure (La Guajira) y la mina de Zipaquirá (Cundinamarca), el cloruro de sodio (NaCl) se extrae ya formado, pero en el laboratorio se puede reproducir su reacción de formación a partir de sodio metálico y cloro gaseoso.'}
    ],
    cotidianos: [
      'Cuando el hierro de una reja se oxida con el tiempo a la intemperie, está ocurriendo una reacción de síntesis entre el hierro y el oxígeno del aire.'
    ],
    activacion: [
      '¿Qué tienen en común todas las ecuaciones donde dos o más sustancias se combinan para formar un único producto? ¿Cómo las reconocerías con solo mirar la ecuación sin balancear?'
    ]
  },
  info: {
    lectura: [
      'Una <strong>reacción química</strong> se clasifica según el patrón en que se reorganizan los reactivos para formar los productos. El tipo más simple es la <strong>síntesis (o combinación)</strong>: dos o más sustancias (A + B) se combinan para formar un único producto (AB). Es el patrón detrás de casi todos los compuestos que ya conoces de temas anteriores: óxidos, hidróxidos, hidruros y ácidos hídricos se forman todos por síntesis.',
      'Otros cuatro tipos completan la clasificación: <strong>descomposición</strong> (AB → A + B, una sola sustancia se rompe en dos o más), <strong>sustitución simple</strong> (A + BC → AC + B, un elemento libre desplaza a otro dentro de un compuesto), <strong>doble sustitución</strong> (AB + CD → AD + CB, dos compuestos intercambian parejas) y <strong>combustión</strong> (un hidrocarburo + O₂ → CO₂ + H₂O).',
      'Para clasificar una reacción, primero cuenta cuántas sustancias hay a cada lado de la flecha y fíjate si alguna es un elemento libre (como Cl₂ o Fe) o un hidrocarburo ardiendo con oxígeno — eso ya descarta la mayoría de los tipos.'
    ],
    esquema: {
      raiz: 'Tipos de reacción química',
      ramas: [
        {t:'Síntesis', items:['A + B → AB', 'Formación de óxidos, hidróxidos, hidruros, ácidos hídricos']},
        {t:'Descomposición', items:['AB → A + B', 'Una sustancia se rompe en dos o más']},
        {t:'Sustitución simple', items:['A + BC → AC + B', 'Un elemento libre desplaza a otro']},
        {t:'Doble sustitución', items:['AB + CD → AD + CB', 'Intercambio de parejas entre dos compuestos']},
        {t:'Combustión', items:['Hidrocarburo + O₂ → CO₂ + H₂O']}
      ]
    }
  },
  ejemplo: {
    f: 'N₂ + 3H₂ → 2NH₃',
    partes: [
      ['N₂ + 3H₂','an','dos sustancias simples (reactivos) que se combinan'],
      ['2NH₃','ox','un único producto — por eso esta reacción se clasifica como síntesis (proceso Haber-Bosch, base de los fertilizantes nitrogenados)']
    ]
  }
},
{
  id: 'mol-masa',
  titulo: 'Mol y masa molar',
  gen: ['mol-masa'], jue: 'mol-masa', rxn: [],
  previos: {
    curiosos: [
      'El mol es tan grande (6.022×10²³ partículas, el número de Avogadro) que si contaras una partícula por segundo sin parar, tardarías más tiempo que la edad actual del universo en terminar de contar un solo mol.',
      'La masa molar de un compuesto, en gramos por mol, es numéricamente igual a su masa molecular en unidades de masa atómica (uma) — por eso puedes calcularla sumando las masas atómicas de la tabla periódica directamente.'
    ],
    contexto: [
      {amb:'Nacional', t:'En la industria minera y de baterías en Colombia se maneja el ácido sulfúrico (H₂SO₄, masa molar 98.072 g/mol) en cantidades industriales calculadas en moles para dosificar procesos con precisión.'},
      {amb:'Local', t:'La sal de Zipaquirá (NaCl, masa molar 58.44 g/mol) se comercializa por toneladas, pero cada mol de NaCl contiene exactamente 6.022×10²³ pares de iones Na⁺ y Cl⁻.'}
    ],
    cotidianos: [
      'El "ácido muriático" (HCl) de uso doméstico para limpieza de pisos tiene una masa molar de 36.458 g/mol — ese número determina cuántos gramos de ácido puro hay disueltos en cada litro de producto comercial.'
    ],
    activacion: [
      '¿Por qué crees que los químicos necesitan una unidad como el mol en vez de simplemente contar átomos uno por uno? ¿Qué tan pequeño es un átomo comparado con algo que puedas pesar en una balanza?'
    ]
  },
  info: {
    lectura: [
      'El <strong>mol</strong> es la unidad que usan los químicos para contar partículas (átomos, moléculas o iones) en cantidades manejables: 1 mol equivale siempre a <strong>6.022×10²³ partículas</strong> (el número de Avogadro), sin importar de qué sustancia se trate.',
      'La <strong>masa molar</strong> de un compuesto es la masa, en gramos, de un mol de ese compuesto. Se calcula sumando las masas atómicas (de la tabla periódica) de todos los átomos presentes en la fórmula, multiplicadas por su subíndice. Por ejemplo, para H₂O: 2 átomos de H (1.008 g/mol cada uno) + 1 átomo de O (15.999 g/mol) = 18.015 g/mol.',
      'Con la masa molar puedes convertir entre gramos y moles usando una simple regla de tres: <strong>gramos = moles × masa molar</strong>, y al revés, <strong>moles = gramos ÷ masa molar</strong>.'
    ],
    esquema: {
      raiz: 'Mol y masa molar',
      ramas: [
        {t:'Mol', items:['1 mol = 6.022×10²³ partículas (número de Avogadro)']},
        {t:'Masa molar', items:['Suma de (masa atómica × subíndice) de cada elemento', 'Unidades: g/mol']},
        {t:'Conversión', items:['gramos = moles × masa molar', 'moles = gramos ÷ masa molar']}
      ]
    }
  },
  ejemplo: {
    f: 'H₂SO₄',
    partes: [
      ['2H','an','2 átomos de hidrógeno: 2 × 1.008 = 2.016 g/mol'],
      ['S','cat','1 átomo de azufre: 32.06 g/mol'],
      ['4O','an','4 átomos de oxígeno: 4 × 15.999 = 63.996 g/mol — total: 2.016 + 32.06 + 63.996 = 98.072 g/mol']
    ]
  }
},
{
  id: 'elemento',
  titulo: 'Tabla periódica',
  gen: [], jue: 'elemento', rxn: [],
  previos: {
    curiosos: [
      'El helio (He) es el único elemento que se descubrió primero en el espacio (en el Sol, en 1868, por eso su nombre viene de "Helios") y solo 27 años después se encontró en la Tierra.',
      'La configuración electrónica de un elemento (cómo se distribuyen sus electrones) determina casi todo su comportamiento químico: cuántos enlaces puede formar y con qué carga.'
    ],
    contexto: [
      {amb:'Nacional', t:'El carbón extraído en El Cerrejón (La Guajira), el mayor yacimiento de carbón a cielo abierto de América Latina, convierte a Colombia en el 5° exportador mundial de este elemento.'},
      {amb:'Local', t:'Los equipos de resonancia magnética (MRI) en hospitales colombianos como la Clínica del Country y el Hospital Militar usan helio líquido para enfriar sus imanes superconductores.'}
    ],
    cotidianos: [
      'La pasta dental que usas contiene compuestos de flúor (F), el elemento que el Ministerio de Salud colombiano promueve fluorar en el agua potable para prevenir caries infantiles.'
    ],
    activacion: [
      '¿Qué información de un elemento crees que es más importante para predecir cómo va a reaccionar: su masa atómica, o su número de electrones de valencia? ¿Por qué?'
    ]
  },
  info: {
    lectura: [
      'La <strong>tabla periódica</strong> organiza los elementos según su <strong>número atómico</strong> (cantidad de protones) en filas llamadas <strong>periodos</strong> y columnas llamadas <strong>grupos</strong> (o familias). Los elementos de un mismo grupo comparten el mismo número de electrones de valencia y, por eso, propiedades químicas similares.',
      'Los elementos se clasifican en tres grandes categorías: <strong>metales</strong> (brillantes, buenos conductores, tienden a perder electrones y formar cationes — la mayoría de la tabla), <strong>no metales</strong> (tienden a ganar electrones y formar aniones) y <strong>metaloides</strong> (propiedades intermedias, en la frontera entre ambos).',
      'El <strong>estado de oxidación</strong> típico de un elemento (que ya usaste en temas anteriores para armar fórmulas) está directamente relacionado con su posición en la tabla: los metales de los grupos 1 y 2 casi siempre tienen EO +1 y +2 respectivamente; los no metales de los grupos 16 y 17 suelen ganar electrones y llegar a EO −2 y −1.'
    ],
    esquema: {
      raiz: 'Tabla periódica',
      ramas: [
        {t:'Organización', items:['Filas = periodos', 'Columnas = grupos/familias', 'Orden = número atómico']},
        {t:'Categorías', items:['Metales (pierden e⁻, forman cationes)', 'No metales (ganan e⁻, forman aniones)', 'Metaloides (propiedades intermedias)']},
        {t:'Relación con EO', items:['Grupo 1 → EO +1', 'Grupo 2 → EO +2', 'Grupo 16 → EO -2 (principal)', 'Grupo 17 → EO -1 (principal)']}
      ]
    }
  },
  ejemplo: {
    f: 'Fe',
    partes: [
      ['Periodo 4, grupo 8','cat','el hierro es un metal de transición, por eso tiene más de un estado de oxidación posible'],
      ['ox: +2, +3','ox','sus dos valencias más comunes — la misma razón por la que viste "ferroso" (+2) y "férrico" (+3) en temas anteriores']
    ]
  }
},
{
  id: 'reactividad',
  titulo: 'Cadena de reactividad',
  gen: [], jue: 'reactividad', rxn: [],
  previos: {
    curiosos: [
      'El hierro es el único metal común de este curso que aparece DOS veces en la cadena de reactividad — una vez con valencia +2 (ferroso) y otra con valencia +3 (férrico) — porque un mismo metal de valencia variable genera dos familias completas de compuestos distintas.',
      'Toda la cadena (metal → óxido → hidróxido → sal) que vas a repasar en este tema es, en el fondo, un resumen visual de TODOS los temas de nomenclatura que ya estudiaste en IonNom, conectados en un solo hilo.'
    ],
    contexto: [
      {amb:'Nacional', t:'El hierro de la siderúrgica de Paz de Río (Boyacá) sigue esta misma cadena: el mineral se procesa hasta obtener hierro metálico, que en contacto con el ambiente puede oxidarse (óxido), reaccionar con agua (hidróxido) o con ácidos (sales).'}
    ],
    cotidianos: [
      'Cuando un clavo se oxida (óxido de hierro) y luego, con la humedad, forma una costra verdosa o rojiza más compleja, estás viendo pasos sucesivos de esta misma cadena de reactividad en la vida real.'
    ],
    activacion: [
      '¿Recuerdas cómo se forma un óxido básico a partir de un metal? ¿Y cómo ese óxido, al reaccionar con agua, se convierte en un hidróxido? Este tema conecta esos dos pasos con un tercero: la reacción con un ácido.'
    ]
  },
  info: {
    lectura: [
      'La <strong>cadena de reactividad</strong> conecta en un solo hilo los tres temas de nomenclatura que ya estudiaste: un <strong>metal</strong> reacciona con oxígeno para formar un <strong>óxido básico</strong>; ese óxido reacciona con agua para formar un <strong>hidróxido</strong>; y ese hidróxido reacciona con un <strong>ácido</strong> (hídrico u oxácido) para formar una <strong>sal</strong> más agua.',
      'Cada metal con valencia fija genera una única cadena. Pero un metal con <strong>valencia variable</strong>, como el hierro (+2 y +3), genera <strong>dos cadenas completas distintas</strong> — una para cada valencia — porque el óxido, el hidróxido y todas las sales cambian de fórmula según qué valencia esté actuando.',
      'El último eslabón (la sal) depende de qué ácido reacciona con el hidróxido: un ácido hídrico (como HCl) da una sal binaria; un ácido oxácido (como H₂SO₄, HNO₃ o H₃PO₄) da una sal oxigenada. Por eso un mismo metal puede terminar en varias sales distintas según el ácido elegido.'
    ],
    esquema: {
      raiz: 'Metal → óxido → hidróxido → sal',
      ramas: [
        {t:'Paso 1', items:['Metal + O₂ → óxido básico']},
        {t:'Paso 2', items:['Óxido básico + H₂O → hidróxido']},
        {t:'Paso 3', items:['Hidróxido + ácido hídrico → sal binaria + H₂O', 'Hidróxido + ácido oxácido → sal oxigenada + H₂O']},
        {t:'Valencia variable', items:['Un metal con 2 valencias (ej. Fe) genera 2 cadenas completas distintas']}
      ]
    }
  },
  ejemplo: {
    f: 'Ca → CaO → Ca(OH)₂ → CaSO₄',
    partes: [
      ['CaO','cat','paso 1: calcio metálico + oxígeno → óxido de calcio'],
      ['Ca(OH)₂','oh','paso 2: óxido de calcio + agua → hidróxido de calcio'],
      ['CaSO₄','ox','paso 3: hidróxido de calcio + ácido sulfúrico (H₂SO₄) → sulfato de calcio (sal oxigenada) + agua']
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
   o:['El coeficiente (el número grande delante de la fórmula)','El subíndice de cada elemento','El símbolo del elemento','El estado de oxidación de los reactivos originales']},
{tema:'anhid', c:'exp', k:'Q',
 ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto del óxido ácido con fórmula SO₂, sabiendo que el azufre tiene aquí estado de oxidación +4 (su valencia menor)?',
 o:['anhídrido sulfuroso','anhídrido sulfúrico','óxido sulfuroso','dióxido de azufre (III)']},
{tema:'anhid', c:'ind', k:'CTS',
 ctx:'El dióxido de azufre (SO₂) liberado por procesos industriales que queman combustibles con azufre reacciona con el agua de las nubes y contribuye a la formación de lluvia ácida.',
 q:'Químicamente, ¿qué tipo de compuesto es el SO₂ que se libera antes de reaccionar con el agua de lluvia?',
 o:['Un óxido ácido (anhídrido)','Un óxido básico','Una sal oxigenada','Un hidróxido']},
{tema:'anhid', c:'uso', k:'Q',
 ctx:'',
 q:'¿Qué parte de la nomenclatura Sistemática de un óxido ácido NUNCA cambia, sin importar qué tan variable sea la valencia del no metal?',
 o:['Los prefijos griegos que cuentan los átomos (mono-, di-, tri-…)','El sufijo -oso/-ico','El prefijo hipo-/per-','El uso de números romanos'] },
{tema:'anhid', c:'exp', k:'Q',
 ctx:'',
 q:'Si al anhídrido sulfúrico (SO₃) le agregas agua (SO₃ + H₂O), ¿qué tipo de compuesto obtienes?',
 o:['Un ácido oxácido (ácido sulfúrico, H₂SO₄)','Un hidróxido','Una sal oxigenada','Otro óxido ácido']},

{tema:'hidru', c:'exp', k:'Q',
 ctx:'',
 q:'¿Cuál es el estado de oxidación del hidrógeno en un hidruro metálico como el NaH?',
 o:['-1','+1','+2','0']},
{tema:'hidru', c:'uso', k:'Q',
 ctx:'',
 q:'El calcio tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidruro?',
 o:['CaH₂','CaH','Ca₂H','CaH₃']},
{tema:'hidru', c:'ind', k:'CTS',
 ctx:'Colombia explora depósitos de litio en Boyacá, un metal cuyos compuestos (como el hidruro de litio, LiH) se estudian en investigación de almacenamiento de hidrógeno.',
 q:'¿Por qué el nombre del hidruro de litio es prácticamente igual en los sistemas Tradicional, Stock y Sistemática?',
 o:['Porque el litio tiene valencia fija (+1), no necesita sufijo ni número romano que distinga valencias','Porque el hidrógeno en los hidruros siempre tiene EO +1','Porque los hidruros no tienen nomenclatura Stock ni Sistemática','Porque el litio es un no metal'] },

{tema:'ac-hid', c:'exp', k:'Q',
 ctx:'',
 q:'¿Cuál es el nombre correcto del ácido con fórmula HBr disuelto en agua?',
 o:['ácido bromhídrico','ácido brómico','bromuro de hidrógeno (en disolución)','ácido bromoso']},
{tema:'ac-hid', c:'ind', k:'CTS',
 ctx:'El "ácido muriático" vendido en ferreterías colombianas para limpiar pisos y regular el pH de piscinas es, químicamente, un ácido hídrico diluido en agua.',
 q:'¿Cuál es el nombre químico correcto del "ácido muriático"?',
 o:['Ácido clorhídrico (HCl)','Ácido clórico (HClO₃)','Ácido sulfúrico (H₂SO₄)','Cloruro de sodio (NaCl)']},
{tema:'ac-hid', c:'uso', k:'Q',
 ctx:'',
 q:'¿En qué se diferencia nombrar el HCl como "ácido clorhídrico" de nombrarlo como "cloruro de hidrógeno"?',
 o:['El primero describe el compuesto disuelto en agua; el segundo, en estado puro o gaseoso — es el mismo compuesto','Son dos compuestos químicamente distintos','El primero es incorrecto y el segundo es el único nombre válido','Dependen de si el cloro tiene EO +1 o -1'] },

{tema:'base', c:'exp', k:'Q',
 ctx:'',
 q:'El potasio tiene valencia fija +1. ¿Cuál es la fórmula correcta de su hidróxido?',
 o:['KOH','K(OH)₂','KOH₂','K₂OH']},
{tema:'base', c:'ind', k:'CTS',
 ctx:'La leche de magnesia, un antiácido estomacal de uso común en Colombia, es una suspensión de un hidróxido metálico en agua.',
 q:'¿Cuál es la fórmula del hidróxido presente en la leche de magnesia?',
 o:['Mg(OH)₂','MgOH','MgO','Mg(OH)₃']},
{tema:'base', c:'uso', k:'Q',
 ctx:'',
 q:'¿Por qué el grupo hidróxido (OH) se escribe entre paréntesis cuando hay más de uno en la fórmula, como en Ca(OH)₂?',
 o:['Porque OH⁻ es un ion poliatómico y el paréntesis indica que el subíndice 2 multiplica a todo el grupo','Porque el oxígeno y el hidrógeno tienen cargas opuestas','Porque así lo exige la nomenclatura Stock','Porque el calcio siempre necesita paréntesis']},
{tema:'ac-ox', c:'uso', k:'Q',
 ctx:'',
 q:'El nitrógeno del oxoanión nitrito (NO₂⁻) tiene estado de oxidación +3 (su valencia menor entre las dos más comunes). ¿Cuál es el nombre Tradicional del ácido oxácido correspondiente, HNO₂?',
 o:['Ácido nitroso','Ácido nítrico','Ácido nitrhídrico','Nitrito de hidrógeno']},
{tema:'ac-ox', c:'exp', k:'Q',
 ctx:'',
 q:'El oxoanión fosfato (PO₄³⁻) tiene carga −3. ¿Cuántos hidrógenos debe tener el ácido oxácido correspondiente?',
 o:['3','1','2','4']},
{tema:'ac-ox', c:'ind', k:'CTS',
 ctx:'El ácido sulfúrico (H₂SO₄) es uno de los insumos químicos más usados en la minería colombiana para procesos de lixiviación y purificación de minerales.',
 q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido sulfúrico?',
 o:['Sulfato (SO₄²⁻)','Sulfuro (S²⁻)','Sulfito (SO₃²⁻)','Bisulfato (HSO₄⁻)']},
{tema:'ac-ox', c:'uso', k:'Q',
 ctx:'',
 q:'¿Qué diferencia principal hay entre un ácido oxácido (como H₂SO₄) y un ácido hidrácido (como HCl)?',
 o:['El oxácido contiene oxígeno en su fórmula y el hidrácido no','El oxácido no contiene hidrógeno y el hidrácido sí','El hidrácido siempre es más fuerte que el oxácido','El oxácido solo se forma con metales, el hidrácido con no metales']},

{tema:'sal-bin', c:'uso', k:'Q',
 ctx:'',
 q:'¿Cuál es el nombre correcto de la sal binaria con fórmula KI?',
 o:['Yoduro de potasio','Yodato de potasio','Ioduro de potasio ácido','Potasio yodhídrico']},
{tema:'sal-bin', c:'exp', k:'Q',
 ctx:'',
 q:'¿Qué sufijo usan los aniones simples (sin oxígeno) en una sal binaria, como el cloruro o el bromuro?',
 o:['-uro','-ato','-ico','-hídrico']},
{tema:'sal-bin', c:'ind', k:'CTS',
 ctx:'Las salinas de Manaure (La Guajira) y la mina de Zipaquirá (Cundinamarca) son las principales fuentes de cloruro de sodio producido en Colombia.',
 q:'¿Qué dos elementos forman el cloruro de sodio extraído en estas salinas?',
 o:['Un metal (sodio) y un halógeno (cloro)','Dos no metales (cloro y oxígeno)','Un metal (sodio) y un oxoanión (clorato)','Un no metal (cloro) y el hidrógeno']},

{tema:'sal-ox', c:'uso', k:'Q',
 ctx:'',
 q:'¿Cuál es el nombre correcto de la sal oxigenada con fórmula Na₂CO₃?',
 o:['Carbonato de sodio','Bicarbonato de sodio','Carbonito de sodio','Dicarbonato de sodio']},
{tema:'sal-ox', c:'exp', k:'Q',
 ctx:'',
 q:'¿Por qué la fórmula del sulfato de potasio es K₂SO₄ y no KSO₄?',
 o:['Porque hacen falta 2 K⁺ (carga +1 cada uno) para compensar la carga −2 del sulfato','Porque el potasio siempre aparece 2 veces en cualquier sal oxigenada','Porque el sulfato tiene carga −1, igual que el potasio','Porque KSO₄ y K₂SO₄ representan la misma sal, solo cambia la notación'] },
{tema:'sal-ox', c:'ind', k:'CTS',
 ctx:'El nitrato de potasio (KNO₃, "salitre") fue durante siglos el ingrediente principal de la pólvora negra, y hoy se usa como fertilizante en cultivos de papa y arroz en Colombia.',
 q:'¿Qué tipo de compuesto es el nitrato de potasio, según su fórmula KNO₃?',
 o:['Una sal oxigenada (metal + oxoanión)','Una sal binaria (metal + anión simple)','Un ácido oxácido (hidrógeno + oxoanión)','Un óxido básico (metal + oxígeno)']},

{tema:'sal-ac', c:'uso', k:'Q',
 ctx:'',
 q:'¿Cuál es el nombre Stock correcto de la sal ácida con fórmula NaHSO₄?',
 o:['Hidrogenosulfato de sodio','Bisulfato de sodio (en Stock)','Hidrogenosulfito de sodio','Disulfato de sodio']},
{tema:'sal-ac', c:'exp', k:'Q',
 ctx:'',
 q:'¿Qué diferencia hay entre el bisulfato (HSO₄⁻) y el bisulfito (HSO₃⁻)?',
 o:['El bisulfato viene del sulfato (SO₄²⁻) y el bisulfito del sulfito (SO₃²⁻), oxoaniones distintos','Son dos nombres distintos para el mismo ion','El bisulfato tiene un hidrógeno más que el bisulfito','El bisulfito solo existe en nomenclatura Stock']},
{tema:'sal-ac', c:'ind', k:'CTS',
 ctx:'El bicarbonato de sodio se vende en droguerías colombianas como remedio casero para la acidez estomacal y se usa en panaderías para leudar masas.',
 q:'¿Por qué el bicarbonato de sodio (NaHCO₃) se considera una "sal ácida" y no una sal oxigenada común como el carbonato de sodio (Na₂CO₃)?',
 o:['Porque el oxoanión carbonato retuvo un H⁺ en vez de cederlo todo','Porque el bicarbonato no contiene ningún metal','Porque el bicarbonato tiene carga positiva en vez de negativa','Porque el carbonato de sodio no es una sal, es un ácido']},
{tema:'reaccion', c:'exp', k:'Q',
 ctx:'',
 q:'En la ecuación N₂ + 3H₂ → 2NH₃, ¿qué tipo de reacción es, sabiendo que dos sustancias simples forman un único producto?',
 o:['Síntesis','Descomposición','Sustitución simple','Doble sustitución']},
{tema:'reaccion', c:'ind', k:'CTS',
 ctx:'El proceso Haber-Bosch combina nitrógeno e hidrógeno para producir amoníaco, base de los fertilizantes usados en los cultivos de café, arroz y palma africana en Colombia.',
 q:'¿Por qué la reacción del proceso Haber-Bosch (N₂ + 3H₂ → 2NH₃) se clasifica como síntesis?',
 o:['Porque dos o más sustancias se combinan para formar un único producto','Porque libera gran cantidad de energía','Porque el nitrógeno se descompone en dos productos','Porque hay un elemento libre que desplaza a otro']},
{tema:'reaccion', c:'uso', k:'Q',
 ctx:'',
 q:'¿Cuál de las siguientes reacciones corresponde al patrón de una reacción de síntesis (A + B → AB)?',
 o:['CaO + H₂O → Ca(OH)₂','AB → A + B','A + BC → AC + B','AB + CD → AD + CB']},

{tema:'mol-masa', c:'exp', k:'Q',
 ctx:'',
 q:'¿A cuántas partículas (átomos, moléculas o iones) equivale exactamente 1 mol de cualquier sustancia?',
 o:['6.022×10²³','1.000×10²³','6.022×10²²','3.14×10²³']},
{tema:'mol-masa', c:'ind', k:'CTS',
 ctx:'La sal de Zipaquirá (NaCl) se comercializa en Colombia por toneladas para consumo e industria.',
 q:'Si la masa molar del NaCl es 58.44 g/mol, ¿cuántos gramos hay aproximadamente en 2 moles de NaCl?',
 o:['116.88 g','58.44 g','29.22 g','175.32 g']},
{tema:'mol-masa', c:'uso', k:'Q',
 ctx:'',
 q:'¿Qué operación usarías para calcular cuántos moles hay en una cantidad conocida de gramos de una sustancia?',
 o:['Dividir los gramos entre la masa molar','Multiplicar los gramos por la masa molar','Dividir la masa molar entre los gramos','Sumar los gramos y la masa molar']},

{tema:'elemento', c:'exp', k:'Q',
 ctx:'',
 q:'¿Qué determina principalmente el número atómico de un elemento?',
 o:['La cantidad de protones en el núcleo','La cantidad de neutrones en el núcleo','La masa atómica total','La cantidad de electrones de valencia solamente']},
{tema:'elemento', c:'ind', k:'CTS',
 ctx:'El carbón extraído en El Cerrejón (La Guajira) convierte a Colombia en el 5° exportador mundial de este elemento, clasificado como no metal.',
 q:'¿Qué comportamiento químico general se espera de un no metal como el carbono, a diferencia de un metal?',
 o:['Tiende a ganar electrones y formar aniones','Tiende a perder electrones y formar cationes','No forma ningún tipo de ion','Siempre tiene estado de oxidación 0']},
{tema:'elemento', c:'uso', k:'Q',
 ctx:'',
 q:'Dos elementos están en el mismo grupo (columna) de la tabla periódica. ¿Qué tienen en común?',
 o:['El mismo número de electrones de valencia','El mismo número atómico','La misma masa atómica exacta','El mismo número de periodo'] },

{tema:'reactividad', c:'exp', k:'Q',
 ctx:'',
 q:'En la cadena de reactividad metal → óxido → hidróxido → sal, ¿qué se necesita agregar al óxido básico para obtener el hidróxido?',
 o:['Agua (H₂O)','Un ácido','Oxígeno (O₂)','Otro metal']},
{tema:'reactividad', c:'ind', k:'CTS',
 ctx:'El hierro de la siderúrgica de Paz de Río (Boyacá) puede seguir esta cadena de reactividad al oxidarse con el ambiente y luego reaccionar con agua o ácidos.',
 q:'¿Por qué el hierro genera DOS cadenas de reactividad completas y distintas (una con Fe²⁺ y otra con Fe³⁺)?',
 o:['Porque tiene valencia variable: cada valencia posible forma su propia familia de óxido, hidróxido y sales','Porque el hierro no tiene una cadena de reactividad real','Porque el hierro reacciona con dos tipos de oxígeno distintos','Porque las sales de hierro no siguen el patrón de la cadena']},
{tema:'reactividad', c:'uso', k:'Q',
 ctx:'',
 q:'Si el hidróxido de un metal reacciona con un ácido hídrico (como HCl), ¿qué tipo de sal se obtiene al final de la cadena?',
 o:['Una sal binaria','Una sal oxigenada','Una sal ácida','Un óxido básico']}
],

ABIERTAS: [
  {tema:'ox-bas', t:'rx', q:'Un trozo de magnesio metálico se quema en presencia de oxígeno del aire. Escribe la ecuación de formación del óxido correspondiente y nombra el producto en los 3 sistemas.'},
  {tema:'ox-bas', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'Cu₂O'},
  {tema:'ox-bas', t:'mdec', q:'Separa el siguiente compuesto en sus partes según el código de 4 colores de IonNom (catión y anión) e indica la carga de cada uno.', f:'Al₂O₃'},
  {tema:'balanceo', t:'rx', q:'Balancea por tanteo la siguiente ecuación y explica, paso a paso, el orden en que decidiste ajustar cada coeficiente.'},
  {tema:'balanceo', t:'nom', q:'La ecuación sin balancear Na + Cl₂ → NaCl describe la formación de sal común. Balancéala y nombra el producto en nomenclatura Tradicional y Stock.'},
  {tema:'balanceo', t:'mdec', q:'En la ecuación balanceada 2Mg + O₂ → 2MgO, identifica el catión y el anión del producto y el color MDEC que le corresponde a cada uno.'},
{tema:'anhid', t:'rx', q:'El azufre se quema en una fábrica en presencia de oxígeno formando SO₂ (su valencia menor, +4). Escribe la ecuación de formación de este óxido ácido y nombra el producto en los sistemas Tradicional y Sistemática.'},
{tema:'anhid', t:'nom', q:'Escribe el nombre Tradicional y Sistemático del siguiente compuesto.', f:'N₂O₅'},
{tema:'anhid', t:'mdec', q:'Separa el siguiente compuesto en sus partes (no metal y oxígeno) e indica el estado de oxidación de cada átomo de nitrógeno.', f:'N₂O₃'},

{tema:'hidru', t:'rx', q:'El magnesio metálico reacciona con hidrógeno gaseoso (H₂). Escribe la ecuación de formación del hidruro correspondiente y nombra el producto.'},
{tema:'hidru', t:'nom', q:'Escribe el nombre Tradicional (igual al Stock) y Sistemático del siguiente compuesto.', f:'BaH₂'},
{tema:'hidru', t:'mdec', q:'Separa el siguiente compuesto en sus partes (catión y anión) e indica la carga de cada uno, recordando que aquí el hidrógeno NO tiene su carga habitual.', f:'KH'},

{tema:'ac-hid', t:'rx', q:'El hidrógeno gaseoso reacciona con yodo (I₂) para formar yoduro de hidrógeno (HI), que luego se disuelve en agua. Escribe la ecuación de formación y nombra el producto disuelto en agua.'},
{tema:'ac-hid', t:'nom', q:'Escribe el nombre del siguiente compuesto disuelto en agua (Tradicional) y en estado puro/gaseoso (Sistemática).', f:'H₂Se'},
{tema:'ac-hid', t:'mdec', q:'Separa el siguiente compuesto en sus partes (catión y anión) e indica la carga de cada uno.', f:'HF'},

{tema:'base', t:'rx', q:'El óxido de bario (BaO) reacciona con agua. Escribe la ecuación de esta reacción (óxido básico + agua → hidróxido) y nombra el producto.'},
{tema:'base', t:'nom', q:'Escribe el nombre Tradicional (igual al Stock) y Sistemático del siguiente compuesto.', f:'Ca(OH)₂'},
{tema:'base', t:'mdec', q:'Separa el siguiente compuesto en sus partes según el código de 4 colores de IonNom (catión e hidróxido) e indica la carga de cada uno.', f:'RbOH'},
{tema:'ac-ox', t:'rx', q:'El trióxido de azufre (SO₃) reacciona con agua. Escribe la ecuación de formación del ácido oxácido resultante y nombra el producto.'},
{tema:'ac-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente ácido, identificando primero el oxoanión que contiene.', f:'HNO₃'},
{tema:'ac-ox', t:'mdec', q:'Separa el siguiente compuesto en sus partes según el código de 4 colores de IonNom (catión y oxoanión) e indica la carga de cada una.', f:'H₂CO₃'},
{tema:'sal-bin', t:'rx', q:'El calcio metálico reacciona con cloro gaseoso (Cl₂). Escribe la ecuación de formación de la sal binaria resultante y nombra el producto.'},
{tema:'sal-bin', t:'nom', q:'Escribe el nombre Tradicional del siguiente compuesto.', f:'NaBr'},
{tema:'sal-bin', t:'mdec', q:'Separa el siguiente compuesto en sus partes según el código de 4 colores de IonNom e indica la carga de cada una.', f:'KF'},
{tema:'sal-ox', t:'rx', q:'El hidróxido de sodio (NaOH) reacciona con ácido nítrico (HNO₃) en una neutralización. Escribe la ecuación de la reacción y nombra la sal oxigenada que se forma (además del agua).'},
{tema:'sal-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente compuesto, identificando primero el oxoanión que contiene.', f:'NaClO'},
{tema:'sal-ox', t:'mdec', q:'Separa el siguiente compuesto en sus partes según el código de 4 colores de IonNom (catión y oxoanión) e indica la carga de cada una.', f:'Na₂SO₄'},
{tema:'sal-ac', t:'rx', q:'El carbonato de potasio (K₂CO₃) reacciona con ácido carbónico en exceso, formando la sal ácida correspondiente. Escribe la fórmula del producto y nómbralo en Tradicional y Stock.'},
{tema:'sal-ac', t:'nom', q:'Escribe el nombre Tradicional y Stock del siguiente compuesto.', f:'KHSO₄'},
{tema:'sal-ac', t:'mdec', q:'Separa el siguiente compuesto en sus partes según el código de 4 colores de IonNom e indica la carga de cada una, explicando por qué el oxoanión conserva un hidrógeno.', f:'NH₄HCO₃'},
{tema:'reaccion', t:'rx', q:'Clasifica el tipo de reacción de la siguiente ecuación y justifica tu respuesta según el número de reactivos y productos.', f:'2Na + Cl₂ → 2NaCl'},
{tema:'reaccion', t:'nom', q:'La siguiente reacción de síntesis produce un hidróxido. Nombra el producto en nomenclatura Tradicional/Stock.', f:'CaO + H₂O → Ca(OH)₂'},
{tema:'reaccion', t:'mdec', q:'En la reacción 2Fe + 3Cl₂ → 2FeCl₃, identifica qué tipo de compuesto es el producto (FeCl₃) y separa su catión y anión según el código de 4 colores.'},

{tema:'mol-masa', t:'rx', q:'Calcula paso a paso la masa molar del siguiente compuesto, mostrando la masa atómica de cada elemento presente.', f:'CO₂'},
{tema:'mol-masa', t:'nom', q:'La masa molar del HCl es 36.458 g/mol. Nombra este compuesto en nomenclatura Tradicional y explica a qué grupo de compuestos pertenece.'},
{tema:'mol-masa', t:'mdec', q:'Si tienes 80 gramos de NaOH (masa molar 39.997 g/mol), calcula aproximadamente cuántos moles de NaOH tienes.'},

{tema:'elemento', t:'rx', q:'El litio (Li, grupo 1, valencia +1) reacciona con oxígeno. Predice la fórmula del óxido que se forma y nómbralo.'},
{tema:'elemento', t:'nom', q:'Escribe la configuración electrónica abreviada del siguiente elemento e indica a qué familia de la tabla periódica pertenece.', f:'N (Z=7)'},
{tema:'elemento', t:'mdec', q:'Clasifica el siguiente elemento como metal, no metal o metaloide, y predice si tiende a formar cationes o aniones.', f:'B (Z=5)'},

{tema:'reactividad', t:'rx', q:'Completa el eslabón faltante de la siguiente cadena de reactividad del magnesio: Mg → MgO → ____ → MgSO₄.'},
{tema:'reactividad', t:'nom', q:'Nombra los 3 compuestos de la cadena de reactividad del aluminio (valencia +3): el óxido, el hidróxido y la sal que resulta de reaccionar con HCl.'},
{tema:'reactividad', t:'mdec', q:'En la sal final de la cadena de reactividad del bario con ácido sulfúrico (BaSO₄), identifica el catión y el anión, y el color MDEC que le corresponde a cada uno.'}
]

};
