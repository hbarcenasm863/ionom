/* ════════════════════════════════════════════════════════════════════════
   docente-datos.js — SOLO CONTENIDO (TEMAS, SABER, ABIERTAS) de
   docente.html. La lógica vive en assets/docente-app.js.

   Los grupos de banco.js (ox-bas, anhid, hidru, ac-hid, base, ac-ox,
   sal-bin, sal-ox, sal-ac, mol-masa, reaccion, balanceo), elemento/
   reactividad (de ELEMENTS/REACT_CHAINS en juego.html), estequiometria y
   la región «El átomo»: atomo (teoría atómica y estructura del átomo) y
   config-e (configuración electrónica), y enlace (enlace químico).
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
      'Un <strong>óxido ácido</strong> (en otros países se usa el nombre tradicional "anhídrido"; en Colombia se dice "óxido ácido") se forma cuando un <strong>no metal</strong> reacciona con <strong>oxígeno (O₂)</strong>. Es el mismo tipo de intercambio de cargas que en los óxidos básicos, pero aquí el elemento que acompaña al oxígeno es un no metal.',
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
      ['N₂','an','2 átomos de nitrógeno con estado de oxidación +5 (el mayor de los posibles para el N) — por eso el sufijo es -ico'],
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
      'El nombre depende del estado de oxidación del átomo central del oxoanión (el azufre en el sulfato, el nitrógeno en el nitrato, etc.): el sufijo <strong>-ico</strong> se usa para el estado de oxidación mayor, y <strong>-oso</strong> para el menor — el mismo patrón que ya viste en anhídridos y óxidos básicos, pero aplicado al átomo central del oxoanión. Cuando el elemento tiene más de 2 valencias posibles (como el cloro o el bromo), se usan además los prefijos <strong>hipo-</strong> (la valencia más baja de todas, ej. ácido hipocloroso) y <strong>per-</strong> (la más alta, ej. ácido perclórico) — igual que ya viste en anhídridos.',
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
      'El <strong>estado de oxidación</strong> típico de un elemento (que ya usaste en temas anteriores para armar fórmulas) está directamente relacionado con su posición en la tabla: los metales de los grupos 1 y 2 casi siempre tienen EO +1 y +2 respectivamente; los no metales de los grupos 16 y 17 suelen ganar electrones y llegar a EO −2 y −1.',
      'La tabla tardó casi dos siglos en tomar su forma. <strong>Lavoisier</strong> (1789) hizo la primera lista de elementos; <strong>Döbereiner</strong> (1829) encontró las tríadas; <strong>Newlands</strong> (1865), la ley de las octavas; <strong>Mendeléiev</strong> (1869) ordenó por masa atómica, dejó huecos y predijo elementos como el germanio; <strong>Ramsay</strong> agregó los gases nobles; <strong>Moseley</strong> (1913) mostró que el orden verdadero es el <strong>número atómico</strong>, y <strong>Seaborg</strong> (1945) separó los actínidos. En 2016 se completó el periodo 7.',
      'Los grupos se numeran del 1 al 18 (IUPAC) o con romanos y letras A/B (tradicional): grupo 1 = IA, 2 = IIA, 3 a 12 = B, 13 = IIIA… 18 = VIIIA. El <strong>bloque</strong> (s, p, d, f) es el subnivel donde entra el último electrón: s tiene 2 columnas, p 6, d 10 y f 14.',
      'Las <strong>propiedades periódicas</strong> cambian con regularidad. Al bajar en un grupo se agrega un nivel de energía: el <strong>radio atómico</strong> y el <strong>carácter metálico</strong> aumentan, y la <strong>energía de ionización</strong>, la <strong>afinidad electrónica</strong> y la <strong>electronegatividad</strong> disminuyen. Al avanzar en un periodo aumenta la carga nuclear con el mismo número de niveles, y las tendencias se invierten. El flúor es el más electronegativo; el cesio y el francio, los más metálicos.'
    ],
    esquema: {
      raiz: 'Tabla periódica',
      ramas: [
        {t:'Organización', items:['Filas = periodos', 'Columnas = grupos/familias', 'Orden = número atómico']},
        {t:'Categorías', items:['Metales (pierden e⁻, forman cationes)', 'No metales (ganan e⁻, forman aniones)', 'Metaloides (propiedades intermedias)']},
        {t:'Relación con EO', items:['Grupo 1 → EO +1', 'Grupo 2 → EO +2', 'Grupo 16 → EO -2 (principal)', 'Grupo 17 → EO -1 (principal)']},
        {t:'Historia', items:['Döbereiner: tríadas', 'Newlands: octavas', 'Mendeléiev: masa atómica y huecos', 'Moseley: número atómico']},
        {t:'Propiedades periódicas', items:['Radio y carácter metálico: ↓ y ←', 'Energía de ionización: ↑ y →', 'Electronegatividad: ↑ y → (máx. F)']}
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
},
{
  id: 'estequiometria',
  titulo: 'Estequiometría',
  gen: [], jue: '', rxn: [],
  previos: {
    curiosos: [
      'La palabra "estequiometría" viene del griego "stoikheion" (elemento) y "metron" (medida) — literalmente "medir los elementos". Fue acuñada en 1792 por el químico alemán Jeremias Richter.',
      'La NASA usa estequiometría para calcular exactamente cuánto oxígeno líquido y combustible debe cargar un cohete: un gramo de más o de menos en la proporción puede significar que sobre o falte propelente en órbita.'
    ],
    contexto: [
      {amb:'Nacional', t:'En las plantas de fertilizantes colombianas (como las que abastecen los cultivos de la Sabana de Bogotá), los ingenieros calculan con estequiometría cuánto amoníaco (NH₃) se necesita para producir una tonelada de un fertilizante nitrogenado específico.'},
      {amb:'Local', t:'En los laboratorios de los colegios técnicos colombianos, antes de preparar una disolución o hacer una titulación, siempre se calcula primero cuántos gramos exactos de reactivo se necesitan usando la ecuación balanceada.'}
    ],
    cotidianos: [
      'Cuando duplicas una receta de cocina, duplicas TODOS los ingredientes en la misma proporción. La estequiometría es exactamente esa misma idea, pero en vez de tazas de harina y huevos, se usan moles y gramos de reactivos.'
    ],
    activacion: [
      'Ya sabes balancear una ecuación química y ya sabes calcular la masa molar de un compuesto. ¿Qué crees que pasaría si combinas las dos cosas: usar los coeficientes de una ecuación balanceada para predecir cuántos gramos de un producto se obtienen a partir de una cantidad conocida de un reactivo?'
    ]
  },
  info: {
    lectura: [
      'La <strong>estequiometría</strong> usa los coeficientes de una ecuación química <strong>ya balanceada</strong> para calcular cuántos gramos (o moles) de un producto se obtienen a partir de una cantidad conocida de un reactivo, o cuánto reactivo se necesita para obtener cierta cantidad de producto.',
      'El método más confiable es el de <strong>factor-unitario (cadena de conversión)</strong>, con 3 pasos en orden fijo: ① convertir los <strong>gramos del dato</strong> a <strong>moles del dato</strong> (dividiendo entre su masa molar); ② convertir los <strong>moles del dato</strong> a <strong>moles de lo pedido</strong> usando la <strong>razón molar</strong> de la ecuación balanceada (coeficiente de lo pedido ÷ coeficiente del dato); ③ convertir los <strong>moles de lo pedido</strong> a <strong>gramos de lo pedido</strong> (multiplicando por su masa molar).',
      'El error más común es saltarse el paso 1 y trabajar directamente con los gramos del dato como si fueran moles, o usar la razón molar al revés (coeficiente del dato ÷ coeficiente de lo pedido en vez de al contrario). Por eso conviene escribir siempre los 3 pasos, nunca calcular de memoria.',
      'Cuando se dan las cantidades de <strong>dos</strong> reactivos a la vez, hay que identificar cuál es el <strong>reactivo limitante</strong> (el que se agota primero y determina cuánto producto se forma de verdad) calculando los moles disponibles de cada uno y comparándolos con la razón molar que exige la ecuación.'
    ],
    esquema: {
      raiz: 'Estequiometría = ecuación balanceada + factor-unitario',
      ramas: [
        {t:'Paso 1', items:['gramos del dato ÷ masa molar del dato', '→ moles del dato']},
        {t:'Paso 2', items:['moles del dato × (coeficiente de lo pedido / coeficiente del dato)', '→ moles de lo pedido']},
        {t:'Paso 3', items:['moles de lo pedido × masa molar de lo pedido', '→ gramos de lo pedido']},
        {t:'Reactivo limitante', items:['comparar moles disponibles de cada reactivo contra la razón molar de la ecuación', 'el que se agota primero limita cuánto producto se forma']}
      ]
    }
  },
  ejemplo: {
    f: '2 Al + 3 Cl₂ → 2 AlCl₃  (27.0 g de Al → ? g de AlCl₃)',
    partes: [
      ['27.0 g Al ÷ 26.982 g/mol','cat','paso 1: gramos del dato (Al) a moles del dato = 1.000 mol Al'],
      ['× (2 mol AlCl₃ / 2 mol Al)','ox','paso 2: razón molar de la ecuación balanceada = 1.000 mol AlCl₃'],
      ['× 133.341 g/mol','an','paso 3: moles de lo pedido a gramos de lo pedido = 133.3 g AlCl₃']
    ]
  }
},
{
  id: 'atomo',
  titulo: 'Teoría atómica y estructura del átomo',
  gen: [], jue: 'atomo', rxn: [],
  previos: {
    curiosos: [
      'Si el núcleo de un átomo fuera del tamaño de una canica puesta en el centro del estadio El Campín, los electrones estarían dando vueltas por las graderías: casi todo el átomo es espacio vacío.',
      'Rutherford dijo que ver rebotar una partícula alfa en una lámina de oro "fue como disparar un proyectil de artillería contra una hoja de papel de seda y que el proyectil regresara".'
    ],
    contexto: [
      {amb:'Nacional', t:'Colombia tiene un reactor nuclear de investigación, el IAN-R1, en Bogotá, operado por el Servicio Geológico Colombiano. Allí se trabaja con isótopos, átomos del mismo elemento con distinto número de neutrones.'},
      {amb:'Local', t:'Los arqueólogos que estudian restos de las culturas muisca y tairona usan el carbono-14, un isótopo radiactivo del carbono, para calcular cuántos años tienen.'}
    ],
    cotidianos: [
      'Los avisos luminosos de "neón" de los negocios brillan con un color fijo porque los electrones del gas solo pueden saltar entre ciertos niveles de energía, como propuso Bohr.'
    ],
    activacion: [
      'Nadie ha visto un átomo a simple vista. ¿Cómo crees que los científicos pudieron saber que tiene un núcleo y electrones? ¿Qué tipo de experimento harías tú para "ver" algo invisible?'
    ]
  },
  info: {
    lectura: [
      'Los <strong>modelos atómicos</strong> cambiaron cada vez que un experimento mostró algo que el modelo anterior no podía explicar. <strong>Dalton</strong> (1808) imaginó átomos indivisibles. <strong>Thomson</strong> (1897) descubrió el <strong>electrón</strong> con el tubo de rayos catódicos y propuso el "budín de pasas": una esfera positiva con electrones incrustados.',
      'En el <strong>experimento de la lámina de oro</strong>, casi todas las partículas alfa atravesaron la lámina, pero unas pocas rebotaron. <strong>Rutherford</strong> (1911) concluyó que el átomo es casi todo espacio vacío, con un <strong>núcleo</strong> diminuto, denso y positivo. <strong>Bohr</strong> (1913) ubicó a los electrones en <strong>niveles de energía</strong> fijos, y el <strong>modelo mecánico-cuántico</strong> actual los describe con <strong>orbitales</strong>, regiones de probabilidad.',
      'El átomo tiene <strong>protones</strong> (p⁺) y <strong>neutrones</strong> (n⁰) en el núcleo, y <strong>electrones</strong> (e⁻) alrededor. El <strong>número atómico Z</strong> es el número de protones e identifica al elemento. El <strong>número de masa A</strong> es protones + neutrones. Los <strong>isótopos</strong> tienen el mismo Z pero distinto número de neutrones. Un <strong>ion</strong> se forma cuando el átomo gana electrones (anión, −) o los pierde (catión, +).'
    ],
    esquema: {
      raiz: 'Teoría atómica',
      ramas: [
        {t:'Modelos', items:['Dalton: esfera indivisible', 'Thomson: budín de pasas (electrón)', 'Rutherford: núcleo + vacío', 'Bohr: niveles de energía', 'Cuántico: orbitales']},
        {t:'Partículas', items:['protón (+) en el núcleo', 'neutrón (0) en el núcleo', 'electrón (−) fuera del núcleo']},
        {t:'Fórmulas clave', items:['Z = protones', 'A = protones + neutrones', 'carga = protones − electrones']}
      ]
    }
  },
  ejemplo: {
    f: '²³Na⁺  (Z = 11)',
    partes: [
      ['11 p⁺','cat','protones = Z = 11: por eso es sodio'],
      ['12 n⁰','oh','neutrones = A − Z = 23 − 11 = 12'],
      ['10 e⁻','an','electrones = 11 − 1 = 10: es un catión que perdió un electrón']
    ]
  }
},
{
  id: 'config-e',
  titulo: 'Configuración electrónica',
  gen: [], jue: 'atomo', rxn: [],
  previos: {
    curiosos: [
      'Cada elemento emite una "huella de colores" propia cuando se calienta, como un código de barras. Así se descubrió el helio en el Sol antes de encontrarlo en la Tierra.',
      'El cromo y el cobre "rompen" la regla de llenado de electrones: prefieren tener el subnivel d a la mitad o completamente lleno porque así son más estables.'
    ],
    contexto: [
      {amb:'Nacional', t:'Los colores de la pólvora de las fiestas de fin de año en Colombia salen de los electrones excitados de distintos elementos: el estroncio da rojo, el bario verde, el sodio amarillo y el cobre azul verdoso.'},
      {amb:'Local', t:'En el laboratorio del colegio, el "ensayo a la llama" permite identificar un metal por el color que toma la llama del mechero, gracias a los saltos de sus electrones entre niveles.'}
    ],
    cotidianos: [
      'Cuando subes a un bus, nadie se sienta al lado de otra persona mientras haya puestos dobles vacíos. Los electrones hacen lo mismo en los orbitales: es la regla de Hund.'
    ],
    activacion: [
      'Si un nivel de energía puede tener muchos electrones, ¿crees que todos tienen exactamente la misma energía? ¿Cómo decidirías en qué orden se van llenando los lugares disponibles?'
    ]
  },
  info: {
    lectura: [
      'Los electrones se organizan en <strong>niveles</strong> (n = 1, 2, 3…), cada nivel en <strong>subniveles</strong> (s, p, d, f) y cada subnivel en <strong>orbitales</strong>. En cada orbital caben máximo 2 electrones, así que s admite 2, p admite 6, d admite 10 y f admite 14. Un nivel completo tiene capacidad para 2n² electrones.',
      'Para escribir la configuración se siguen tres reglas. La de <strong>Aufbau</strong> dice que primero se llenan los subniveles de menor energía, en el orden del <strong>diagrama de Moeller</strong>: 1s 2s 2p 3s 3p <strong>4s 3d</strong> 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p. La de <strong>Pauli</strong> dice que en un orbital caben máximo 2 electrones, con espines opuestos (↑↓). La de <strong>Hund</strong> dice que en un subnivel primero va un electrón en cada orbital y luego se aparean.',
      'La configuración explica la tabla periódica. El <strong>periodo</strong> es el nivel más alto ocupado. El <strong>bloque</strong> (s, p, d, f) es el subnivel donde entra el último electrón. Los <strong>electrones de valencia</strong> son los del último nivel. La <strong>configuración abreviada</strong> reemplaza la parte interna por el gas noble anterior: Na = [Ne] 3s¹. Los cationes pierden primero los electrones del nivel más alto: Fe²⁺ = [Ar] 3d⁶.',
      'Cada electrón queda descrito por cuatro <strong>números cuánticos</strong>: el <strong>principal (n)</strong> = 1, 2, 3… da el nivel; el <strong>secundario o azimutal (l)</strong> = 0 a n − 1 da el subnivel y la forma (0 = s, 1 = p, 2 = d, 3 = f); el <strong>magnético (mₗ)</strong> = −l a +l da la orientación del orbital, y el <strong>de espín (mₛ)</strong> = +½ o −½ da el giro (↑ o ↓). Según Pauli, dos electrones de un átomo no pueden tener los cuatro iguales. El último electrón del Cl (3p⁵) tiene (3, 1, 0, −½), llenando de mₗ = −l a +l y empezando con ↑.'
    ],
    esquema: {
      raiz: 'Configuración electrónica',
      ramas: [
        {t:'Capacidad', items:['s: 2', 'p: 6', 'd: 10', 'f: 14', 'nivel: 2n²']},
        {t:'Reglas', items:['Aufbau (orden de Moeller)', 'Pauli (máx. 2 e⁻ por orbital, ↑↓)', 'Hund (uno por orbital antes de aparear)']},
        {t:'Lo que indica', items:['periodo = nivel más alto', 'bloque = subnivel del último e⁻', 'valencia = e⁻ del último nivel']},
        {t:'Números cuánticos', items:['n: nivel (1, 2, 3…)', 'l: subnivel, 0 a n − 1', 'mₗ: orientación, −l a +l', 'mₛ: espín, +½ o −½']}
      ]
    }
  },
  ejemplo: {
    f: '₂₆Fe = [Ar] 4s² 3d⁶',
    partes: [
      ['[Ar]','an','núcleo de gas noble: los primeros 18 electrones (1s² 2s² 2p⁶ 3s² 3p⁶)'],
      ['4s²','cat','el 4s se llena antes que el 3d (Moeller); n = 4 → periodo 4, 2 electrones de valencia'],
      ['3d⁶','ox','el último electrón entra en un subnivel d → bloque d (metal de transición); 18 + 2 + 6 = 26 electrones']
    ]
  }
},
{
  id: 'enlace',
  titulo: 'Enlace químico',
  gen: [], jue: 'enlace', rxn: [],
  previos: {
    curiosos: [
      'El enlace triple del nitrógeno (N≡N) es tan fuerte que el 78 % del aire es N₂ y casi no reacciona. Para convertirlo en abono, la industria necesita unos 450 °C y presiones 200 veces mayores que la del aire.',
      'La sal de cocina funde a 801 °C, pero la parafina de una vela funde a unos 55 °C. Los dos son sólidos blancos: la diferencia está en cómo están unidas sus partículas.'
    ],
    contexto: [
      {amb:'Nacional', t:'En Zipaquirá y Nemocón se explota la sal desde la época muisca. La sal de roca es cloruro de sodio, un compuesto iónico que forma cristales con forma de cubo.'},
      {amb:'Local', t:'Las redes eléctricas de las casas usan alambre de cobre porque el enlace metálico deja electrones libres que conducen la corriente, mientras que el plástico que lo recubre (covalente) no conduce.'}
    ],
    cotidianos: [
      'El agua y el aceite no se mezclan porque las moléculas de agua son polares y las del aceite son apolares: "lo semejante disuelve a lo semejante".'
    ],
    activacion: [
      'La sal, el azúcar y un clavo de hierro son sólidos. ¿Qué pruebas sencillas harías en casa para saber si sus partículas están unidas de la misma manera?'
    ]
  },
  info: {
    lectura: [
      'Los átomos se unen para quedar más estables. Según la <strong>regla del octeto</strong>, ganan, pierden o comparten electrones hasta tener 8 en su último nivel, como un gas noble (el hidrógeno se completa con 2). Los <strong>símbolos de Lewis</strong> muestran los electrones de valencia como puntos alrededor del símbolo.',
      'La <strong>electronegatividad</strong> (EN) mide la fuerza con que un átomo atrae los electrones de un enlace; el flúor es el más electronegativo (3,98). Entre un metal y un no metal con ΔEN ≥ 1,7 hay <strong>enlace iónico</strong>: el metal cede electrones y se forman cationes y aniones que se atraen en una red cristalina. Entre no metales hay <strong>enlace covalente</strong>: comparten pares de electrones. Si ΔEN &lt; 0,4 es <strong>apolar</strong>; si es mayor, <strong>polar</strong>, con cargas parciales δ+ y δ−.',
      'En el <strong>enlace metálico</strong> los cationes quedan fijos en una red y los electrones de valencia se mueven libres, como un "mar de electrones". El tipo de enlace explica las propiedades: los iónicos funden alto y conducen solo disueltos o fundidos; los metales conducen en estado sólido y son maleables; las sustancias moleculares funden bajo y no conducen. Los sólidos covalentes de red, como el cuarzo, funden muy alto sin ser iónicos.'
    ],
    esquema: {
      raiz: 'Enlace químico',
      ramas: [
        {t:'Iónico', items:['metal + no metal', 'ΔEN ≥ 1,7', 'transferencia de e⁻', 'red de iones: frágil, conduce disuelto']},
        {t:'Covalente', items:['no metal + no metal', 'pares compartidos', 'apolar ΔEN < 0,4 · polar', 'moléculas: funde bajo']},
        {t:'Metálico', items:['metal + metal', 'mar de electrones', 'conduce en sólido', 'maleable y dúctil']}
      ]
    }
  },
  ejemplo: {
    f: 'Na–Cl:  ΔEN = |3,16 − 0,93| = 2,23',
    partes: [
      ['Na → Na⁺ + e⁻','cat','metal: cede su único electrón de valencia y queda como el neón'],
      ['Cl + e⁻ → Cl⁻','an','no metal: gana el electrón y completa su octeto, como el argón'],
      ['ΔEN 2,23 ≥ 1,7','ox','metal + no metal con ΔEN alta: enlace iónico; fórmula NaCl (cargas +1 y −1)']
    ]
  }
},
{
  id: 'modelos',
  titulo: 'Teorías, leyes, modelos y datos',
  gen: [], jue: 'modelos', rxn: [],
  previos: {
    curiosos: [
      'En Bogotá el agua hierve a unos 91 °C y en Cartagena a 100 °C: por eso los fríjoles se cocinan en olla a presión en la capital.',
      'Robert Boyle publicó en 1662 que, a temperatura constante, el volumen de un gas y su presión son inversamente proporcionales. Su ley se sigue usando para diseñar jeringas, buzos y neumáticos.'
    ],
    contexto: [
      {amb:'Local', t:'Una jeringa tapada con el dedo permite comprobar la ley de Boyle en el salón: al empujar el émbolo, el aire se comprime y empuja más fuerte.'},
      {amb:'Nacional', t:'El IDEAM registra desde hace décadas la temperatura y la lluvia de cientos de estaciones del país: son los datos históricos con que se construyen modelos del clima de Colombia.'}
    ],
    cotidianos: [
      'Una olla a presión, un balón que se desinfla en la montaña y un paquete de papas que se infla en un viaje a la Sabana son ejemplos de cómo cambia un gas con la presión.'
    ],
    activacion: [
      '¿Qué diferencia crees que hay entre una ley y una teoría científica? ¿Una teoría es «una simple suposición»? ¿Cómo podrías predecir a qué temperatura hierve el agua en un municipio donde nunca la has medido?'
    ]
  },
  info: {
    lectura: [
      'Una <strong>hipótesis</strong> es una respuesta posible que se pone a prueba. Una <strong>ley</strong> describe qué pasa siempre en ciertas condiciones, muchas veces con una ecuación (P × V = constante). Una <strong>teoría</strong> explica por qué pasa (las partículas de un gas chocan contra las paredes). Un <strong>modelo</strong> es una representación simplificada para explicar y predecir.',
      'En un experimento se cambia una sola variable (<strong>independiente</strong>), se mide otra (<strong>dependiente</strong>) y se mantienen las demás iguales (<strong>controladas</strong>). Con los datos se hace una tabla y una gráfica; si la gráfica muestra una tendencia, se puede escribir un modelo matemático.',
      'Un modelo sirve para <strong>predecir</strong>. Predecir dentro del rango de los datos (interpolar) es más confiable que fuera de él (extrapolar). Toda predicción debe compararse con una medida real, teniendo en cuenta el margen de error.'
    ],
    esquema: {
      raiz: 'Construcción del conocimiento',
      ramas: [
        {t:'Ideas científicas', items:['Hipótesis: se pone a prueba','Ley: describe','Teoría: explica','Modelo: representa']},
        {t:'Experimento', items:['Variable independiente','Variable dependiente','Variables controladas']},
        {t:'Datos', items:['Tabla y gráfica','Modelo matemático','Interpolar y extrapolar']}
      ]
    }
  },
  ejemplo: {
    f: 'P₁ × V₁ = P₂ × V₂  (6 L a 1 atm → ? L a 3 atm)',
    partes: [
      ['P₁V₁ = 1 × 6 = 6','cat','ley de Boyle: el producto P × V se mantiene a temperatura constante'],
      ['V₂ = 6 ÷ 3','ox','se despeja el volumen nuevo'],
      ['V₂ = 2 L','an','al triplicar la presión, el volumen queda en la tercera parte']
    ]
  }
},
{
  id: 'acidobase',
  titulo: 'Ácidos, bases y pH',
  gen: [], jue: 'acidobase', rxn: [],
  previos: {
    curiosos: [
      'Tu estómago produce ácido clorhídrico con un pH entre 1,5 y 3,5, pero tu sangre se mantiene entre 7,35 y 7,45 sin importar si comes limón o bicarbonato.',
      'El agua del repollo morado cocido cambia de color con el pH: se pone roja en vinagre y verde en bicarbonato. Es un indicador natural.'
    ],
    contexto: [
      {amb:'Nacional', t:'Muchos suelos de la Orinoquía y la Amazonía tienen pH entre 4 y 5. Los agricultores los corrigen con cal agrícola (CaCO₃) antes de sembrar.'},
      {amb:'Local', t:'Las gaseosas tienen pH cercano a 2,5. Tomarlas con frecuencia baja el pH de la boca y favorece la caries.'}
    ],
    cotidianos: [
      'El vinagre de la ensalada, el limón del ceviche, la leche de magnesia para la acidez y el amoníaco de los limpiadores son ácidos y bases que hay en casi cualquier casa.'
    ],
    activacion: [
      '¿Qué tienen en común el limón y el vinagre? ¿Por qué un antiácido alivia el ardor de estómago? ¿Crees que lo que comes puede cambiar el pH de tu sangre?'
    ]
  },
  info: {
    lectura: [
      'Según <strong>Arrhenius</strong>, un ácido libera H⁺ en agua y una base libera OH⁻. Según <strong>Brønsted-Lowry</strong>, un ácido <strong>dona</strong> un H⁺ y una base lo <strong>acepta</strong>; así se explica que el NH₃ sea una base.',
      'El <strong>pH</strong> mide la acidez: pH = −log[H⁺]. Menos de 7 es ácido, 7 neutro y más de 7 básico (a 25 °C). La escala es logarítmica: cada unidad de pH es un factor de 10 en la concentración de H⁺. Además, pH + pOH = 14.',
      'Un ácido <strong>fuerte</strong> (HCl) se ioniza casi por completo; uno <strong>débil</strong> (ácido acético), solo en parte. En la <strong>neutralización</strong>, ácido + base → sal + agua. El cuerpo regula su pH con <strong>amortiguadores</strong> como el par H₂CO₃ / HCO₃⁻.'
    ],
    esquema: {
      raiz: 'Ácidos y bases',
      ramas: [
        {t:'Teorías', items:['Arrhenius: H⁺ y OH⁻','Brønsted-Lowry: dona o acepta H⁺']},
        {t:'pH', items:['pH = −log[H⁺]','Cada unidad = × 10','pH + pOH = 14']},
        {t:'Reacciones', items:['Neutralización → sal + agua','Antiácidos y encalado']},
        {t:'Contexto', items:['Estómago, sangre, boca','Suelos, lluvia ácida, mar']}
      ]
    }
  },
  ejemplo: {
    f: 'Mg(OH)₂ + 2 HCl → MgCl₂ + 2 H₂O',
    partes: [
      ['Mg(OH)₂','oh','base (leche de magnesia): aporta los OH⁻'],
      ['2 HCl','cat','ácido del jugo gástrico: aporta los H⁺'],
      ['MgCl₂ + 2 H₂O','an','sal + agua: el ácido quedó neutralizado']
    ]
  }
},
{
  id: 'industria',
  titulo: 'Química en la industria (estequiometría de procesos)',
  gen: [], jue: 'industria', rxn: [],
  previos: {
    curiosos: [
      'Calcinar una tonelada de carbonato de calcio puro para hacer cemento libera 440 kg de CO₂ solo por la reacción química.',
      'Casi la mitad de la comida del mundo se produce con fertilizantes hechos con el amoníaco del proceso Haber, que combina el nitrógeno del aire con hidrógeno.'
    ],
    contexto: [
      {amb:'Nacional', t:'En Boyacá se produce acero reduciendo mineral de hierro en el alto horno (Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂), y de la sal de Zipaquirá y Manaure se obtienen cloro y soda cáustica por electrólisis.'},
      {amb:'Local', t:'En las plantas de potabilización que abastecen a Bogotá se agregan coagulantes que forman un precipitado de hidróxido de aluminio, que atrapa la suciedad del agua.'}
    ],
    cotidianos: [
      'El cemento de los andenes, el agua de la llave, el abono de una huerta y las varillas de una construcción vienen de procesos químicos que alguien calculó con estequiometría.'
    ],
    activacion: [
      'Si una fábrica tiene más de un reactivo que del otro, ¿cuál decide cuánto producto sale? ¿Por qué crees que una fábrica nunca obtiene el 100 % del producto que calcula en el papel?'
    ]
  },
  info: {
    lectura: [
      'En toda reacción se conservan la <strong>masa</strong> (los átomos no se crean ni se destruyen) y la <strong>carga</strong>. Una ecuación iónica como 2 Al + 3 Cu²⁺ → 2 Al³⁺ + 3 Cu debe tener los mismos átomos y la misma carga total en los dos lados.',
      'Para calcular cuánto producto se forma: ecuación balanceada → gramos del dato a moles → razón molar → moles del producto a gramos. El <strong>reactivo limitante</strong> es el que se acaba primero; el otro queda en <strong>exceso</strong>.',
      'En la industria se corrige el cálculo por la <strong>pureza</strong> de la materia prima (masa × % / 100) y por el <strong>rendimiento</strong> del proceso (real ÷ teórico × 100). Procesos colombianos: cemento (descomposición), amoníaco (síntesis), potabilización (precipitación), acero (óxido-reducción) y cloro-soda (electrólisis).'
    ],
    esquema: {
      raiz: 'Estequiometría industrial',
      ramas: [
        {t:'Conservación', items:['Masa: átomos iguales','Carga: suma igual']},
        {t:'Cálculo', items:['g → mol','Razón molar','mol → g']},
        {t:'Industria real', items:['Reactivo limitante','Pureza','Rendimiento']}
      ]
    }
  },
  ejemplo: {
    f: 'CaCO₃ → CaO + CO₂  (1000 kg de caliza al 90 %)',
    partes: [
      ['1000 kg × 90 % = 900 kg CaCO₃','cat','paso 1: corregir por pureza'],
      ['900 kg ÷ 100 = 9 kmol CaCO₃','ox','paso 2: kilogramos a kilomoles (razón 1 : 1 con el CaO)'],
      ['9 kmol × 56 = 504 kg CaO','an','paso 3: masa teórica; si salen 480 kg, el rendimiento es 95,2 %']
    ]
  }
},
{
  id: 'gases',
  titulo: 'Leyes de los gases',
  gen: [], jue: 'gases', rxn: [],
  previos: {
    curiosos: ['Un paquete de papas sellado en la costa llega inflado a Bogotá: afuera la presión es de solo 0,74 atm.','En Bogotá cada respiración trae cerca de un 26 % menos oxígeno que en Cartagena, porque la presión parcial del O₂ es menor.'],
    contexto: [{amb:'Local', t:'La olla a presión cocina los fríjoles más rápido en Bogotá porque al aumentar la presión el agua hierve a más de 100 °C.'},{amb:'Nacional', t:'Los globos meteorológicos que lanza el IDEAM se expanden al subir porque la presión del aire disminuye con la altura.'}],
    cotidianos: ['Un aerosol que no debe acercarse al fuego, una llanta que se revisa en frío y un globo que se infla al sol son ejemplos diarios de las leyes de los gases.'],
    activacion: ['¿Por qué crees que una jeringa tapada es difícil de empujar? ¿Qué le pasa a un globo si lo metes a la nevera? ¿Por qué te cansas más en el páramo?']
  },
  info: {
    lectura: [
      'Un gas se describe con cuatro variables: presión (P, en atm, mmHg o kPa), volumen (V, en L), temperatura absoluta (T, en K = °C + 273) y cantidad (n, en mol). Según la teoría cinético-molecular, la presión es el efecto de los choques de las partículas contra las paredes.',
      '<strong>Boyle</strong> (n y T constantes): P₁V₁ = P₂V₂. <strong>Charles</strong> (n y P constantes): V₁/T₁ = V₂/T₂. <strong>Gay-Lussac</strong> (n y V constantes): P₁/T₁ = P₂/T₂. <strong>Avogadro</strong> (P y T constantes): V₁/n₁ = V₂/n₂. <strong>Combinada</strong>: P₁V₁/T₁ = P₂V₂/T₂.',
      'Todas salen de la ecuación del <strong>gas ideal</strong>: PV = nRT, con R = 0,082 atm·L/(mol·K). A 0 °C y 1 atm, 1 mol ocupa 22,4 L. En una mezcla, la presión total es la suma de las presiones parciales (<strong>Dalton</strong>): Pᵢ = Xᵢ × P total.'
    ],
    esquema: { raiz: 'Leyes de los gases', ramas: [
      {t:'Variables', items:['P (atm)','V (L)','T (K)','n (mol)']},
      {t:'Leyes', items:['Boyle: P₁V₁ = P₂V₂','Charles: V/T','Gay-Lussac: P/T','Avogadro: V/n']},
      {t:'Ecuaciones', items:['Combinada','PV = nRT','Dalton: suma de presiones']} ] }
  },
  ejemplo: {
    f: 'P₁V₁/T₁ = P₂V₂/T₂  (2,0 L; 1,00 atm; 300 K → 0,74 atm; 287 K)',
    partes: [
      ['T en kelvin','cat','27 °C = 300 K y 14 °C = 287 K'],
      ['V₂ = P₁V₁T₂ ÷ (T₁P₂)','ox','se despeja el volumen nuevo'],
      ['V₂ ≈ 2,6 L','an','el paquete de papas llega inflado a Bogotá']
    ]
  }
},
{
  id: 'soluciones',
  titulo: 'Soluciones y concentración',
  gen: [], jue: 'soluciones', rxn: [],
  previos: {
    curiosos: ['El suero fisiológico tiene 0,9 g de sal por cada 100 mL: la misma concentración de sales de tu sangre.','El agua potable en Colombia debe tener entre 0,3 y 2,0 mg de cloro por litro: menos de una gota en un tanque grande.'],
    contexto: [{amb:'Nacional', t:'En Manaure (La Guajira) la sal se obtiene evaporando el agua de mar con el sol y el viento hasta que la solución se satura y cristaliza.'},{amb:'Local', t:'El alcohol antiséptico de la casa tiene 70 % v/v de etanol y el vinagre, entre 4 y 5 % de ácido acético.'}],
    cotidianos: ['Endulzar un café, preparar un jugo con sobre, mezclar el suero de rehidratación o diluir un limpiador son preparaciones de soluciones.'],
    activacion: ['¿Por qué el azúcar se disuelve más rápido en café caliente? ¿Hay un límite de cuánta sal se puede disolver en un vaso de agua? ¿Qué significa «alcohol al 70 %»?']
  },
  info: {
    lectura: [
      'Una <strong>solución</strong> es una mezcla homogénea de un <strong>soluto</strong> (lo que se disuelve) y un <strong>solvente</strong> (lo que disuelve). Al disolverse una sal, las moléculas de agua (polares) rodean los iones: el O (δ−) hacia los cationes y los H (δ+) hacia los aniones; los iones se separan y quedan hidratados, y la solución conduce la electricidad. El azúcar se disuelve en moléculas y no conduce; el aceite, apolar, no se disuelve.',
      'La <strong>solubilidad</strong> es lo máximo que se disuelve en 100 g de agua a una temperatura. Una solución es <strong>insaturada</strong>, <strong>saturada</strong> o <strong>sobresaturada</strong>. Las curvas de solubilidad muestran cómo cambia con la temperatura.',
      'Unidades: % m/m = g soluto ÷ g solución × 100; % m/v = g ÷ mL × 100; % v/v; ppm = mg/L; <strong>molaridad</strong> M = mol ÷ L de solución; <strong>molalidad</strong> m = mol ÷ kg de solvente; fracción molar X; normalidad N = M × equivalentes. Al <strong>diluir</strong>, los moles no cambian: C₁V₁ = C₂V₂.'
    ],
    esquema: { raiz: 'Soluciones', ramas: [
      {t:'Disolución', items:['Hidratación de iones','Factores: T, agitación, superficie']},
      {t:'Solubilidad', items:['Insaturada / saturada','Curvas de solubilidad']},
      {t:'Concentración', items:['% m/m, % m/v, % v/v, ppm','M, m, X, N']},
      {t:'Dilución', items:['C₁V₁ = C₂V₂']} ] }
  },
  ejemplo: {
    f: '500 mL de NaCl al 0,9 % m/v → ¿g y molaridad?',
    partes: [
      ['500 mL × 0,9 g/100 mL = 4,5 g','cat','gramos de soluto a partir del % m/v'],
      ['4,5 g ÷ 58,5 g/mol = 0,0769 mol','ox','gramos a moles'],
      ['0,0769 mol ÷ 0,500 L = 0,154 M','an','molaridad del suero fisiológico']
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
   ctx:'La cal viva que se usa en las fincas para desinfectar corrales es el óxido que forma el calcio al reaccionar con el oxígeno.',
   q:'El calcio tiene valencia fija +2. ¿Cuál es la fórmula correcta de su óxido?',
   o:['CaO','Ca₂O','CaO₂','Ca₂O₂']},
  {tema:'ox-bas', c:'uso', k:'CTS',
   ctx:'La cal viva (óxido de calcio) se usa en fincas del altiplano cundiboyacense para encalar corrales y desinfectar suelos antes de sembrar papa.',
   q:'¿Qué tipo de compuesto se forma cuando esta cal viva (CaO) reacciona con el agua de lluvia?',
   o:['Un hidróxido (base)','Un ácido oxácido','Una sal binaria','Un hidruro metálico']},
  {tema:'ox-bas', c:'uso', k:'Q',
   ctx:'En una ferretería, un estudiante encuentra dos pigmentos de hierro: uno negro y otro rojo, que es el óxido que da color al ladrillo.',
   q:'¿Por qué el óxido de hierro(III) se llama "óxido férrico" y no "óxido ferroso" en nomenclatura Tradicional?',
   o:['Porque "férrico" corresponde a la valencia mayor del hierro (+3) y "ferroso" a la menor (+2)','Porque "férrico" se usa solo para óxidos y "ferroso" solo para sales','Porque "férrico" indica que el compuesto es ácido','Porque son dos nombres intercambiables para la misma valencia']},

  {tema:'balanceo', c:'exp', k:'Q',
   ctx:'En la siderúrgica de Paz de Río, el hierro expuesto al aire húmedo se oxida y forma herrumbre.',
   q:'¿Cuáles son los coeficientes mínimos correctos para balancear 4Fe + 3O₂ → 2Fe₂O₃?',
   o:['4, 3, 2 (ya está balanceada así)','2, 3, 1 (hay que bajar el hierro)','4, 6, 2 (falta duplicar el oxígeno)','1, 1, 1 (los mínimos posibles)']},
  {tema:'balanceo', c:'exp', k:'CTS',
   ctx:'Ecopetrol calcula con precisión cuánto oxígeno necesita la combustión de un hidrocarburo en sus refinerías de Barrancabermeja y Cartagena para no desperdiciar combustible ni generar exceso de contaminantes.',
   q:'¿Por qué es importante balancear correctamente la ecuación de una combustión industrial antes de calcular cuánto oxígeno se necesita?',
   o:['Porque la Ley de Conservación de la Masa exige que los átomos de reactivos y productos coincidan exactamente','Porque los coeficientes de la ecuación solo cambian el color y el tamaño de la llama','Porque al balancear se cambia la fórmula química de los productos para que coincidan','Porque una ecuación sin balancear no libera calor y la combustión no se produce']},
  {tema:'balanceo', c:'uso', k:'Q',
   ctx:'En el laboratorio, un estudiante debe balancear la ecuación de una reacción antes de calcular cuánto reactivo necesita.',
   q:'Al balancear una ecuación, ¿qué parte de cada fórmula SÍ se puede modificar?',
   o:['El coeficiente (el número grande delante de la fórmula)','El subíndice de cada elemento en la fórmula','El símbolo químico de cada elemento','El estado de oxidación de los reactivos originales']},
{tema:'anhid', c:'exp', k:'Q',
 ctx:'Al quemar carbón con azufre en una termoeléctrica se libera un gas irritante que contribuye a la lluvia ácida.',
 q:'¿Cuál es el nombre Tradicional correcto del óxido ácido con fórmula SO₂, sabiendo que el azufre tiene aquí estado de oxidación +4 (su valencia menor)?',
 o:['anhídrido sulfuroso','anhídrido sulfúrico','óxido sulfuroso','dióxido de azufre (III)']},
{tema:'anhid', c:'uso', k:'CTS',
 ctx:'El dióxido de azufre (SO₂) liberado por procesos industriales que queman combustibles con azufre reacciona con el agua de las nubes y contribuye a la formación de lluvia ácida.',
 q:'Químicamente, ¿qué tipo de compuesto es el SO₂ que se libera antes de reaccionar con el agua de lluvia?',
 o:['Un óxido ácido (anhídrido)','Un óxido básico','Una sal oxigenada','Un hidróxido']},
{tema:'anhid', c:'uso', k:'Q',
 ctx:'Un estudiante compara los nombres de varios óxidos ácidos en una tabla de la guía de nomenclatura.',
 q:'¿Qué parte de la nomenclatura Sistemática de un óxido ácido NUNCA cambia, sin importar qué tan variable sea la valencia del no metal?',
 o:['Los prefijos griegos que cuentan los átomos (mono-, di-, tri-…)','El sufijo -oso/-ico que indica la valencia del no metal','El prefijo hipo-/per- que indica la valencia extrema','El número romano que indica la valencia del no metal'] },
{tema:'anhid', c:'exp', k:'Q',
 ctx:'En las fábricas de ácido sulfúrico, el gas que se obtiene al oxidar el azufre se combina después con agua.',
 q:'Si al anhídrido sulfúrico (SO₃) le agregas agua (SO₃ + H₂O), ¿qué tipo de compuesto obtienes?',
 o:['Un ácido oxácido (ácido sulfúrico, H₂SO₄)','Un hidróxido (hidróxido de azufre, S(OH)₃)','Una sal oxigenada (sulfato de hidrógeno)','Otro óxido ácido (anhídrido sulfuroso, SO₂)']},

{tema:'hidru', c:'exp', k:'Q',
 ctx:'El hidruro de sodio se usa en laboratorios como reactivo muy reactivo, que se guarda lejos de la humedad.',
 q:'¿Cuál es el estado de oxidación del hidrógeno en un hidruro metálico como el NaH?',
 o:['-1','+1','+2','0']},
{tema:'hidru', c:'uso', k:'Q',
 ctx:'Algunos equipos de emergencia usan un hidruro de calcio que libera hidrógeno al contacto con el agua.',
 q:'El calcio tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidruro?',
 o:['CaH₂','CaH','Ca₂H','CaH₃']},
{tema:'hidru', c:'exp', k:'CTS',
 ctx:'Colombia explora depósitos de litio en Boyacá, un metal cuyos compuestos (como el hidruro de litio, LiH) se estudian en investigación de almacenamiento de hidrógeno.',
 q:'¿Por qué el nombre del hidruro de litio es prácticamente igual en los sistemas Tradicional, Stock y Sistemática?',
 o:['Porque el litio tiene valencia fija (+1), no necesita sufijo ni número romano que distinga valencias','Porque el hidrógeno de los hidruros siempre tiene EO +1 y eso fija el nombre en los tres sistemas','Porque los hidruros no tienen nomenclatura Stock ni Sistemática, solo un nombre tradicional','Porque el litio es un no metal y los no metales se nombran igual en todos los sistemas'] },

{tema:'ac-hid', c:'exp', k:'Q',
 ctx:'En el laboratorio del colegio hay un frasco con una solución de bromuro de hidrógeno disuelto en agua.',
 q:'¿Cuál es el nombre correcto del ácido con fórmula HBr disuelto en agua?',
 o:['ácido bromhídrico','ácido brómico','bromuro de hidrógeno (en disolución)','ácido bromoso']},
{tema:'ac-hid', c:'uso', k:'CTS',
 ctx:'El "ácido muriático" vendido en ferreterías colombianas para limpiar pisos y regular el pH de piscinas es, químicamente, un ácido hídrico diluido en agua.',
 q:'¿Cuál es el nombre químico correcto del "ácido muriático"?',
 o:['Ácido clorhídrico (HCl)','Ácido clórico (HClO₃)','Ácido sulfúrico (H₂SO₄)','Cloruro de sodio (NaCl)']},
{tema:'ac-hid', c:'uso', k:'Q',
 ctx:'El ácido muriático que se vende para limpiar baldosas es una solución de un gas en agua.',
 q:'¿En qué se diferencia nombrar el HCl como "ácido clorhídrico" de nombrarlo como "cloruro de hidrógeno"?',
 o:['El primero describe el compuesto disuelto en agua; el segundo, en estado puro o gaseoso — es el mismo compuesto','Son dos compuestos químicamente distintos: uno tiene más cloro que el otro','El primero es un nombre incorrecto y el segundo es el único nombre válido según la IUPAC','El nombre depende de si el cloro tiene estado de oxidación +1 o −1 en cada caso'] },

{tema:'base', c:'exp', k:'Q',
 ctx:'La potasa cáustica que se usa para fabricar jabones líquidos es el hidróxido de un metal alcalino.',
 q:'El potasio tiene valencia fija +1. ¿Cuál es la fórmula correcta de su hidróxido?',
 o:['KOH','K(OH)₂','KOH₂','K₂OH']},
{tema:'base', c:'uso', k:'CTS',
 ctx:'La leche de magnesia, un antiácido estomacal de uso común en Colombia, es una suspensión de un hidróxido metálico en agua.',
 q:'¿Cuál es la fórmula del hidróxido presente en la leche de magnesia?',
 o:['Mg(OH)₂','MgOH','MgO','Mg(OH)₃']},
{tema:'base', c:'uso', k:'Q',
 ctx:'En la etiqueta de la cal apagada que se usa en la construcción aparece la fórmula del hidróxido de calcio.',
 q:'¿Por qué el grupo hidróxido (OH) se escribe entre paréntesis cuando hay más de uno en la fórmula, como en Ca(OH)₂?',
 o:['Porque OH⁻ es un ion poliatómico y el paréntesis indica que el subíndice 2 multiplica a todo el grupo','Porque el oxígeno y el hidrógeno tienen cargas opuestas que se deben separar del metal','Porque así lo exige la nomenclatura Stock para indicar la valencia del metal','Porque el calcio siempre necesita paréntesis en sus fórmulas, tenga o no grupos']},
{tema:'ac-ox', c:'uso', k:'Q',
 ctx:'En algunos embutidos se usan nitritos como conservantes; estos se relacionan con un ácido oxácido del nitrógeno.',
 q:'El nitrógeno del oxoanión nitrito (NO₂⁻) tiene estado de oxidación +3 (su valencia menor entre las dos más comunes). ¿Cuál es el nombre Tradicional del ácido oxácido correspondiente, HNO₂?',
 o:['Ácido nitroso','Ácido nítrico','Ácido nitrhídrico','Nitrito de hidrógeno']},
{tema:'ac-ox', c:'exp', k:'Q',
 ctx:'Las gaseosas de cola contienen un ácido oxácido del fósforo que les da un sabor ácido.',
 q:'El oxoanión fosfato (PO₄³⁻) tiene carga −3. ¿Cuántos hidrógenos debe tener el ácido oxácido correspondiente?',
 o:['3','1','2','4']},
{tema:'ac-ox', c:'uso', k:'CTS',
 ctx:'El ácido sulfúrico (H₂SO₄) es uno de los insumos químicos más usados en la minería colombiana para procesos de lixiviación y purificación de minerales.',
 q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido sulfúrico?',
 o:['Sulfato (SO₄²⁻)','Sulfuro (S²⁻)','Sulfito (SO₃²⁻)','Bisulfato (HSO₄⁻)']},
{tema:'ac-ox', c:'uso', k:'Q',
 ctx:'En el laboratorio hay dos frascos: uno de ácido sulfúrico y otro de ácido clorhídrico.',
 q:'¿Qué diferencia principal hay entre un ácido oxácido (como H₂SO₄) y un ácido hidrácido (como HCl)?',
 o:['El oxácido contiene oxígeno en su fórmula y el hidrácido no','El oxácido no contiene hidrógeno y el hidrácido sí','El hidrácido siempre es más fuerte que el oxácido','El oxácido solo se forma con metales, el hidrácido con no metales']},

{tema:'sal-bin', c:'uso', k:'Q',
 ctx:'La sal yodada que se vende en Colombia tiene una pequeña cantidad de una sal de yodo y potasio.',
 q:'¿Cuál es el nombre correcto de la sal binaria con fórmula KI?',
 o:['Yoduro de potasio','Yodato de potasio','Ioduro de potasio ácido','Potasio yodhídrico']},
{tema:'sal-bin', c:'exp', k:'Q',
 ctx:'Un estudiante revisa los nombres de varias sales en la etiqueta de un suero oral.',
 q:'¿Qué sufijo usan los aniones simples (sin oxígeno) en una sal binaria, como el cloruro o el bromuro?',
 o:['-uro','-ato','-ico','-hídrico']},
{tema:'sal-bin', c:'uso', k:'CTS',
 ctx:'Las salinas de Manaure (La Guajira) y la mina de Zipaquirá (Cundinamarca) son las principales fuentes de cloruro de sodio producido en Colombia.',
 q:'¿Qué dos elementos forman el cloruro de sodio extraído en estas salinas?',
 o:['Un metal (sodio) y un halógeno (cloro)','Dos no metales (cloro y oxígeno)','Un metal (sodio) y un oxoanión (clorato)','Un no metal (cloro) y el hidrógeno']},

{tema:'sal-ox', c:'uso', k:'Q',
 ctx:'La soda que se usa para fabricar vidrio y jabones es una sal oxigenada del sodio.',
 q:'¿Cuál es el nombre correcto de la sal oxigenada con fórmula Na₂CO₃?',
 o:['Carbonato de sodio','Bicarbonato de sodio','Carbonito de sodio','Dicarbonato de sodio']},
{tema:'sal-ox', c:'exp', k:'Q',
 ctx:'Algunos abonos para cultivos de papa contienen una sal oxigenada de potasio y azufre.',
 q:'¿Por qué la fórmula del sulfato de potasio es K₂SO₄ y no KSO₄?',
 o:['Porque hacen falta 2 K⁺ (carga +1 cada uno) para compensar la carga −2 del sulfato','Porque el potasio siempre aparece 2 veces en cualquier sal oxigenada','Porque el sulfato tiene carga −1, igual que el potasio','Porque KSO₄ y K₂SO₄ representan la misma sal, solo cambia la notación'] },
{tema:'sal-ox', c:'uso', k:'CTS',
 ctx:'El nitrato de potasio (KNO₃, "salitre") fue durante siglos el ingrediente principal de la pólvora negra, y hoy se usa como fertilizante en cultivos de papa y arroz en Colombia.',
 q:'¿Qué tipo de compuesto es el nitrato de potasio, según su fórmula KNO₃?',
 o:['Una sal oxigenada (metal + oxoanión)','Una sal binaria (metal + anión simple)','Un ácido oxácido (hidrógeno + oxoanión)','Un óxido básico (metal + oxígeno)']},

{tema:'sal-ac', c:'uso', k:'Q',
 ctx:'Algunos limpiadores de inodoros contienen una sal ácida de sodio que les da su poder ácido.',
 q:'¿Cuál es el nombre Stock correcto de la sal ácida con fórmula NaHSO₄?',
 o:['Hidrogenosulfato de sodio','Bisulfato de sodio (en Stock)','Hidrogenosulfito de sodio','Disulfato de sodio']},
{tema:'sal-ac', c:'exp', k:'Q',
 ctx:'En la industria de alimentos se usan sales ácidas del azufre como conservantes y blanqueadores.',
 q:'¿Qué diferencia hay entre el bisulfato (HSO₄⁻) y el bisulfito (HSO₃⁻)?',
 o:['El bisulfato viene del sulfato (SO₄²⁻) y el bisulfito del sulfito (SO₃²⁻), oxoaniones distintos','Son dos nombres distintos que se usan para el mismo ion, según el país','El bisulfato tiene un hidrógeno más que el bisulfito, pero el mismo oxoanión','El bisulfito solo existe en la nomenclatura Stock y el bisulfato en la tradicional']},
{tema:'sal-ac', c:'exp', k:'CTS',
 ctx:'El bicarbonato de sodio se vende en droguerías colombianas como remedio casero para la acidez estomacal y se usa en panaderías para leudar masas.',
 q:'¿Por qué el bicarbonato de sodio (NaHCO₃) se considera una "sal ácida" y no una sal oxigenada común como el carbonato de sodio (Na₂CO₃)?',
 o:['Porque el oxoanión carbonato retuvo un H⁺ en vez de cederlo todo','Porque el bicarbonato no contiene ningún metal','Porque el bicarbonato tiene carga positiva en vez de negativa','Porque el carbonato de sodio no es una sal, es un ácido']},
{tema:'reaccion', c:'exp', k:'Q',
 ctx:'En la planta de fertilizantes de Cartagena se produce amoníaco a partir de nitrógeno del aire e hidrógeno.',
 q:'En la ecuación N₂ + 3H₂ → 2NH₃, ¿qué tipo de reacción es, sabiendo que dos sustancias simples forman un único producto?',
 o:['Síntesis','Descomposición','Sustitución simple','Doble sustitución']},
{tema:'reaccion', c:'exp', k:'CTS',
 ctx:'El proceso Haber-Bosch combina nitrógeno e hidrógeno para producir amoníaco, base de los fertilizantes usados en los cultivos de café, arroz y palma africana en Colombia.',
 q:'¿Por qué la reacción del proceso Haber-Bosch (N₂ + 3H₂ → 2NH₃) se clasifica como síntesis?',
 o:['Porque dos o más sustancias se combinan para formar un único producto','Porque libera gran cantidad de energía','Porque el nitrógeno se descompone en dos productos','Porque hay un elemento libre que desplaza a otro']},
{tema:'reaccion', c:'uso', k:'Q',
 ctx:'Los agricultores preparan cal apagada mezclando cal viva con agua antes de aplicarla al suelo.',
 q:'¿Cuál de las siguientes reacciones corresponde al patrón de una reacción de síntesis (A + B → AB)?',
 o:['CaO + H₂O → Ca(OH)₂','AB → A + B','A + BC → AC + B','AB + CD → AD + CB']},

{tema:'mol-masa', c:'exp', k:'Q',
 ctx:'Un químico necesita contar cuántas moléculas hay en una cantidad de sustancia que pesa en la balanza.',
 q:'¿A cuántas partículas (átomos, moléculas o iones) equivale exactamente 1 mol de cualquier sustancia?',
 o:['6.022×10²³','1.000×10²³','6.022×10²²','3.14×10²³']},
{tema:'mol-masa', c:'uso', k:'CTS',
 ctx:'La sal de Zipaquirá (NaCl) se comercializa en Colombia por toneladas para consumo e industria.',
 q:'Si la masa molar del NaCl es 58.44 g/mol, ¿cuántos gramos hay aproximadamente en 2 moles de NaCl?',
 o:['116.88 g','58.44 g','29.22 g','175.32 g']},
{tema:'mol-masa', c:'uso', k:'Q',
 ctx:'En el laboratorio, una estudiante pesa 20 g de sal y necesita saber cuántos moles tiene.',
 q:'¿Qué operación usarías para calcular cuántos moles hay en una cantidad conocida de gramos de una sustancia?',
 o:['Dividir los gramos entre la masa molar','Multiplicar los gramos por la masa molar','Dividir la masa molar entre los gramos','Sumar los gramos y la masa molar']},

{tema:'elemento', c:'exp', k:'Q',
 ctx:'Un estudiante consulta la tabla periódica para identificar un elemento desconocido.',
 q:'¿Qué determina principalmente el número atómico de un elemento?',
 o:['La cantidad de protones en el núcleo','La cantidad de neutrones en el núcleo','La masa atómica total','La cantidad de electrones de valencia solamente']},
{tema:'elemento', c:'uso', k:'CTS',
 ctx:'El carbón extraído en El Cerrejón (La Guajira) convierte a Colombia en el 5° exportador mundial de este elemento, clasificado como no metal.',
 q:'¿Qué comportamiento químico general se espera de un no metal como el carbono, a diferencia de un metal?',
 o:['Tiende a ganar electrones y formar aniones','Tiende a perder electrones y formar cationes','No forma ningún tipo de ion','Siempre tiene estado de oxidación 0']},
{tema:'elemento', c:'uso', k:'Q',
 ctx:'El sodio y el potasio son metales muy reactivos que se guardan bajo aceite en el laboratorio.',
 q:'Dos elementos están en el mismo grupo (columna) de la tabla periódica. ¿Qué tienen en común?',
 o:['El mismo número de electrones de valencia','El mismo número atómico','La misma masa atómica exacta','El mismo número de periodo'] },

{tema:'reactividad', c:'exp', k:'Q',
 ctx:'En las fincas, la cal viva se convierte en cal apagada antes de usarla en los cultivos.',
 q:'En la cadena de reactividad metal → óxido → hidróxido → sal, ¿qué se necesita agregar al óxido básico para obtener el hidróxido?',
 o:['Agua (H₂O)','Un ácido','Oxígeno (O₂)','Otro metal']},
{tema:'reactividad', c:'exp', k:'CTS',
 ctx:'El hierro de la siderúrgica de Paz de Río (Boyacá) puede seguir esta cadena de reactividad al oxidarse con el ambiente y luego reaccionar con agua o ácidos.',
 q:'¿Por qué el hierro genera DOS cadenas de reactividad completas y distintas (una con Fe²⁺ y otra con Fe³⁺)?',
 o:['Porque tiene valencia variable: cada valencia posible forma su propia familia de óxido, hidróxido y sales','Porque el hierro no tiene una cadena de reactividad real y se toma la de otros metales','Porque el hierro reacciona con dos tipos distintos de oxígeno del ambiente','Porque las sales de hierro no siguen el patrón de la cadena y forman una aparte']},
{tema:'reactividad', c:'uso', k:'Q',
 ctx:'Una estudiante neutraliza una solución de hidróxido de sodio con ácido clorhídrico en el laboratorio.',
 q:'Si el hidróxido de un metal reacciona con un ácido hídrico (como HCl), ¿qué tipo de sal se obtiene al final de la cadena?',
 o:['Una sal binaria','Una sal oxigenada','Una sal ácida','Un óxido básico']},
/* ============================= OX-BAS (37 preguntas nuevas) ============================= */
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Las baterías de litio de los celulares contienen compuestos de litio con oxígeno.', q:'El litio (Li) tiene valencia fija +1. ¿Cuál es la fórmula correcta de su óxido, ya simplificada?', o:['Li₂O','LiO','Li₂O₂','LiO₂']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Las cenizas de la madera contienen compuestos de potasio, que se usaban antiguamente para hacer jabón.', q:'El potasio (K) tiene valencia fija +1, igual que el litio y el sodio. ¿Cuál es la fórmula correcta de su óxido?', o:['K₂O','KO','K₂O₂','KO₂']},
{tema:'ox-bas', c:'uso', k:'Q', ctx:'Un estudiante usa el ejemplo de la cal viva para entender cómo se combinan las cargas de los iones.', q:'Al formar el óxido de calcio, el catión Ca²⁺ y el anión O²⁻ se combinan en proporción 1:1 (Ca₂O₂ se simplifica a CaO) porque ambas cargas tienen el mismo valor absoluto. Si el catión fuera Na⁺ en vez de Ca²⁺, manteniendo el mismo anión O²⁻, ¿qué fórmula resultaría?', o:['Na₂O','NaO','Na₂O₂','NaO₂']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'El rubidio es un metal alcalino que se usa en algunos relojes atómicos muy precisos.', q:'El rubidio (Rb), como los demás metales del grupo 1A, tiene valencia fija +1. ¿Cuál es la fórmula correcta de su óxido?', o:['Rb₂O','RbO','Rb₂O₂','RbO₂']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Algunos componentes de equipos electrónicos de alta potencia usan un óxido de berilio que conduce bien el calor.', q:'El berilio (Be) tiene valencia fija +2, al igual que el magnesio y el calcio (grupo 2A). ¿Cuál es la fórmula correcta de su óxido?', o:['BeO','Be₂O','BeO₂','Be₂O₂']},
{tema:'ox-bas', c:'uso', k:'Q', ctx:'El bario, que se usa en exámenes médicos de rayos X, forma un óxido con el oxígeno del aire.', q:'El estroncio (Sr) y el bario (Ba) son metales del grupo 2A con valencia fija +2, igual que el calcio. ¿Cuál es el nombre Tradicional correcto del óxido de bario (BaO)?', o:['óxido de bario','óxido bárico','óxido de dibario','anhídrido bárico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'La alúmina de las piedras de afilar y de los papeles de lija es un óxido de aluminio muy duro.', q:'El aluminio (Al) tiene valencia fija +3. Para que las cargas se equilibren con el anión óxido (O²⁻, carga −2), ¿cuántos iones de cada uno se necesitan en el óxido de aluminio?', o:['2 Al³⁺ y 3 O²⁻','3 Al³⁺ y 2 O²⁻','1 Al³⁺ y 1 O²⁻','3 Al³⁺ y 3 O²⁻']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Las cremas de protección solar y las pomadas para la piel de los bebés contienen un óxido de zinc.', q:'El zinc (Zn) tiene valencia fija +2. ¿Cuál es la fórmula correcta de su óxido?', o:['ZnO','Zn₂O','ZnO₂','Zn₂O₂']},
{tema:'ox-bas', c:'uso', k:'Q', ctx:'Algunas pilas de botón de los relojes contienen un óxido de plata.', q:'La plata (Ag) no es un metal alcalino, pero al igual que ellos tiene valencia fija +1. ¿Cuál es la fórmula correcta de su óxido, ya simplificada?', o:['Ag₂O','AgO','Ag₂O₂','AgO₂']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Un pigmento negro de hierro se usa para colorear cemento y baldosas.', q:'¿Cuál es el nombre Tradicional correcto del óxido de hierro con fórmula FeO, sabiendo que el hierro tiene aquí su estado de oxidación menor (+2)?', o:['óxido ferroso','óxido férrico','óxido de hierro (III)','anhídrido ferroso']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'El óxido rojo de hierro es el pigmento que da su color a los ladrillos de Bogotá.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del óxido de hierro con fórmula Fe₂O₃?', o:['trióxido de dihierro','óxido férrico','dióxido de hierro','óxido de hierro (III)']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Algunas pinturas antiincrustantes de los barcos usan un óxido rojo de cobre.', q:'¿Cuál es el nombre Stock correcto del óxido de cobre con fórmula Cu₂O, sabiendo que el cobre tiene aquí su estado de oxidación menor (+1)?', o:['óxido de cobre (I)','óxido de cobre (II)','óxido cuproso (I)','monóxido de cobre']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Un óxido negro de cobre se usa como pigmento en cerámicas y vidrios.', q:'¿Cuál es el nombre Tradicional correcto del óxido de cobre con fórmula CuO, sabiendo que el cobre tiene aquí su estado de oxidación mayor (+2)?', o:['óxido cúprico','óxido cuproso','óxido de cobre (I)','anhídrido cúprico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Antiguamente se usaba un óxido amarillo de plomo en algunas pinturas y vidriados de cerámica.', q:'¿Cuál es el nombre Stock correcto del óxido de plomo con fórmula PbO?', o:['óxido de plomo (II)','óxido de plomo (IV)','óxido plumboso (II)','dióxido de plomo']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Las baterías de plomo de los carros tienen en sus placas un óxido oscuro de plomo.', q:'¿Cuál es el nombre Tradicional correcto del óxido de plomo con fórmula PbO₂, sabiendo que el plomo tiene aquí su estado de oxidación mayor (+4)?', o:['óxido plúmbico','óxido plumboso','óxido de plomo (II)','anhídrido plúmbico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Un óxido negro de estaño se usa en algunos procesos de laboratorio.', q:'¿Cuál es el nombre Stock correcto del óxido de estaño con fórmula SnO?', o:['óxido de estaño (II)','óxido de estaño (IV)','óxido estannoso (II)','dióxido de estaño']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'El óxido blanco de estaño se usa para dar color blanco a esmaltes de cerámica.', q:'¿Cuál es el nombre Tradicional correcto del óxido de estaño con fórmula SnO₂, sabiendo que el estaño tiene aquí su estado de oxidación mayor (+4)?', o:['óxido estánnico','óxido estannoso','óxido de estaño (II)','anhídrido estánnico']},
{tema:'ox-bas', c:'uso', k:'CTS', ctx:'Las baterías recargables de níquel usadas en herramientas y equipos electrónicos en Colombia contienen compuestos de níquel en distintos estados de oxidación.', q:'¿Cuál es el nombre Stock correcto del óxido de níquel con fórmula NiO?', o:['óxido de níquel (II)','óxido de níquel (III)','óxido niqueloso (II)','trióxido de níquel']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'En algunas baterías recargables se usan óxidos de níquel.', q:'¿Cuál es el nombre Tradicional correcto del óxido de níquel con fórmula Ni₂O₃, sabiendo que el níquel tiene aquí su estado de oxidación mayor (+3)?', o:['óxido niquélico','óxido niqueloso','óxido de níquel (II)','anhídrido niquélico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Un óxido de cobalto se usa para dar color azul a vidrios y cerámicas.', q:'¿Cuál es el nombre Stock correcto del óxido de cobalto con fórmula CoO?', o:['óxido de cobalto (II)','óxido de cobalto (III)','óxido cobaltoso (II)','dióxido de cobalto']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Los artesanos que trabajan el vidrio usan óxidos de cobalto para obtener tonos azules.', q:'¿Cuál es el nombre Tradicional correcto del óxido de cobalto con fórmula Co₂O₃, sabiendo que el cobalto tiene aquí su estado de oxidación mayor (+3)?', o:['óxido cobáltico','óxido cobaltoso','óxido de cobalto (II)','anhídrido cobáltico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'El manganeso se usa en aleaciones de acero y forma varios óxidos según su estado de oxidación.', q:'El manganeso (Mn) puede tener varios estados de oxidación. ¿Cuál es el nombre Stock correcto del óxido con fórmula MnO, donde el Mn tiene EO +2?', o:['óxido de manganeso (II)','óxido de manganeso (IV)','óxido manganoso (II)','dióxido de manganeso']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Las pilas secas comunes contienen un óxido negro de manganeso.', q:'¿Cuál es el nombre Stock correcto del óxido de manganeso con fórmula MnO₂, donde el Mn tiene EO +4?', o:['óxido de manganeso (IV)','óxido de manganeso (II)','óxido mangánico (IV)','trióxido de manganeso']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'El verde de cromo, un pigmento muy estable, es un óxido de cromo.', q:'¿Cuál es el nombre Tradicional correcto del óxido de cromo con fórmula Cr₂O₃, sabiendo que el cromo actúa aquí como metal con EO +3?', o:['óxido crómico','óxido cromoso','óxido de cromo (II)','anhídrido crómico']},
{tema:'ox-bas', c:'uso', k:'CTS', ctx:'El dióxido de titanio (TiO₂) es un pigmento blanco muy usado en pinturas, plásticos y protectores solares vendidos en Colombia.', q:'¿Cuál es el nombre Tradicional correcto del óxido con fórmula TiO₂?', o:['óxido titánico','óxido titanoso','óxido de titanio (II)','anhídrido titánico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'En la producción de ácido sulfúrico se usa un óxido de vanadio como catalizador.', q:'El vanadio (V) puede tener distintos estados de oxidación. ¿Cuál es el nombre Stock correcto del óxido con fórmula V₂O₅, donde el V tiene EO +5?', o:['óxido de vanadio (V)','óxido de vanadio (II)','óxido vanádico (V)','pentaóxido de vanadio']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'El vanadio forma varios óxidos y uno de ellos tiene el vanadio en su estado de oxidación más bajo.', q:'¿Cuál es el nombre Stock correcto del óxido de vanadio con fórmula VO, donde el V tiene EO +2 (el menor de sus estados de oxidación comunes)?', o:['óxido de vanadio (II)','óxido de vanadio (V)','óxido vanadioso (II)','dióxido de vanadio']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Un químico estudia un óxido negro de vanadio que se obtiene en condiciones especiales.', q:'¿Cuál es el nombre Stock correcto del óxido de vanadio con fórmula V₂O₃, donde el V tiene EO +3?', o:['óxido de vanadio (III)','óxido de vanadio (V)','óxido vanadioso (III)','trióxido de vanadio']},
{tema:'ox-bas', c:'uso', k:'Q', ctx:'Algunos vidrios y cerámicas especiales usan un óxido de bismuto.', q:'El bismuto (Bi) forma un solo óxido común, con EO +3, por lo que su nombre Tradicional no necesita sufijo -oso/-ico. ¿Cuál es el nombre Tradicional correcto del óxido con fórmula Bi₂O₃?', o:['óxido de bismuto','óxido bismútico','óxido de bismuto (III)','anhídrido de bismuto']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Antiguamente, las pilas de algunos aparatos médicos contenían un óxido rojo de mercurio.', q:'¿Cuál es el nombre Stock correcto del óxido de mercurio con fórmula HgO, donde el Hg tiene EO +2?', o:['óxido de mercurio (II)','óxido de mercurio (I)','óxido mercúrico (II)','dióxido de mercurio']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Un químico estudia los óxidos que forma el mercurio con distintos estados de oxidación.', q:'¿Cuál es el nombre Stock correcto del óxido de mercurio con fórmula Hg₂O, donde el Hg tiene EO +1?', o:['óxido de mercurio (I)','óxido de mercurio (II)','óxido mercurioso (I)','monóxido de mercurio']},
{tema:'ox-bas', c:'uso', k:'CTS', ctx:'La joyería artesanal en Mompox (Bolívar), reconocida por su filigrana en oro y plata, debe prevenir la oxidación superficial de las piezas metálicas.', q:'¿Cuál es el nombre Stock correcto del óxido de oro con fórmula Au₂O, donde el Au tiene EO +1?', o:['óxido de oro (I)','óxido de oro (III)','óxido auroso (I)','monóxido de oro']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'En la orfebrería del oro, como la que se exhibe en el Museo del Oro, se estudian los compuestos que forma este metal.', q:'¿Cuál es el nombre Tradicional correcto del óxido de oro con fórmula Au₂O₃, sabiendo que el Au tiene aquí su estado de oxidación mayor (+3)?', o:['óxido áurico','óxido auroso','óxido de oro (I)','anhídrido áurico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'El platino de los convertidores catalíticos de los carros puede formar óxidos en la superficie a altas temperaturas.', q:'¿Cuál es el nombre Stock correcto del óxido de platino con fórmula PtO, donde el Pt tiene EO +2?', o:['óxido de platino (II)','óxido de platino (IV)','óxido platinoso (II)','dióxido de platino']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'Un óxido de platino se usa en el laboratorio como catalizador para reacciones con hidrógeno.', q:'¿Cuál es el nombre Tradicional correcto del óxido de platino con fórmula PtO₂, sabiendo que el Pt tiene aquí su estado de oxidación mayor (+4)?', o:['óxido platínico','óxido platinoso','óxido de platino (II)','anhídrido platínico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'El cromo de los acabados brillantes de las motos puede formar varios óxidos según las condiciones.', q:'¿Cuál es el nombre Stock correcto del óxido de cromo con fórmula CrO, donde el Cr tiene EO +2 (el menor)?', o:['óxido de cromo (II)','óxido de cromo (III)','óxido cromoso (II)','dióxido de cromo']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'El cadmio de las pilas recargables antiguas forma un óxido marrón que es tóxico para el ambiente.', q:'El cadmio (Cd) tiene valencia fija +2, igual que el zinc. ¿Cuál es la fórmula correcta de su óxido?', o:['CdO','Cd₂O','CdO₂','Cd₂O₂']},

/* ============================= ANHID (37 preguntas nuevas) ============================= */
{tema:'anhid', c:'exp', k:'Q', ctx:'El gas que exhalamos al respirar y que sale de las gaseosas al destaparlas es un óxido ácido del carbono.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula CO₂, sabiendo que el carbono tiene aquí estado de oxidación +4?', o:['anhídrido carbónico','anhídrido carbonoso','ácido carbónico','óxido de carbono (IV)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'En la fabricación de ácido sulfúrico en Colombia, el azufre se oxida hasta un óxido de alto estado de oxidación.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula SO₃, sabiendo que el azufre tiene aquí su estado de oxidación mayor (+6)?', o:['anhídrido sulfúrico','anhídrido sulfuroso','ácido sulfúrico','óxido de azufre (IV)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'Algunos vinos y frutas secas se conservan con un gas de azufre que también producen los volcanes.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula SO₂, sabiendo que el azufre tiene aquí su estado de oxidación menor (+4)?', o:['anhídrido sulfuroso','anhídrido sulfúrico','ácido sulfuroso','óxido de azufre (VI)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'En la fabricación de ácido nítrico para fertilizantes se forma un óxido de nitrógeno que reacciona con agua.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula N₂O₅, sabiendo que el nitrógeno tiene aquí su estado de oxidación mayor (+5)?', o:['anhídrido nítrico','anhídrido nitroso','ácido nítrico','pentaóxido de nitrógeno']},
{tema:'anhid', c:'exp', k:'Q', ctx:'Un estudiante encuentra en una tabla de óxidos de nitrógeno uno de color azul que solo es estable en frío.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula N₂O₃, sabiendo que el nitrógeno tiene aquí un estado de oxidación menor (+3)?', o:['anhídrido nitroso','anhídrido nítrico','anhídrido hiponitroso','ácido nitroso']},
{tema:'anhid', c:'exp', k:'Q', ctx:'Algunos blanqueadores de uso industrial se relacionan con óxidos de cloro de bajo estado de oxidación.', q:'El cloro puede tener hasta 4 estados de oxidación distintos en sus anhídridos. ¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula Cl₂O, donde el Cl tiene el EO más bajo posible (+1)?', o:['anhídrido hipocloroso','anhídrido cloroso','anhídrido clórico','anhídrido perclórico']},
{tema:'anhid', c:'exp', k:'Q', ctx:'El óxido de fósforo que absorbe con mucha fuerza la humedad se usa para secar gases en el laboratorio.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula P₂O₅, sabiendo que el fósforo tiene aquí su estado de oxidación mayor (+5)?', o:['anhídrido fosfórico','anhídrido fosforoso','ácido fosfórico','pentaóxido de fósforo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'Al quemar fósforo con poco oxígeno se forma un óxido distinto al que se obtiene con mucho oxígeno.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula P₂O₃, sabiendo que el fósforo tiene aquí un estado de oxidación menor (+3)?', o:['anhídrido fosforoso','anhídrido fosfórico','ácido fosforoso','trióxido de fósforo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'Un estudiante ordena en su cuaderno los óxidos de cloro de menor a mayor estado de oxidación.', q:'Dentro de la serie del cloro, ¿cuál es el nombre Tradicional correcto del anhídrido con fórmula Cl₂O₃ (Cl con EO +3)?', o:['anhídrido cloroso','anhídrido hipocloroso','anhídrido clórico','anhídrido perclórico']},
{tema:'anhid', c:'exp', k:'Q', ctx:'En la serie de óxidos del cloro, uno de ellos se relaciona con los cloratos que se usan en fósforos.', q:'Dentro de la serie del cloro, ¿cuál es el nombre Tradicional correcto del anhídrido con fórmula Cl₂O₅ (Cl con EO +5)?', o:['anhídrido clórico','anhídrido cloroso','anhídrido hipocloroso','anhídrido perclórico']},
{tema:'anhid', c:'exp', k:'Q', ctx:'Los percloratos de los combustibles de cohetes se relacionan con el óxido de cloro de mayor estado de oxidación.', q:'El cloro alcanza su estado de oxidación más alto (+7) en el anhídrido con fórmula Cl₂O₇. ¿Cuál es su nombre Tradicional correcto?', o:['anhídrido perclórico','anhídrido clórico','anhídrido cloroso','anhídrido hipocloroso']},
{tema:'anhid', c:'exp', k:'Q', ctx:'El arsénico, que contamina el agua de algunos pozos y zonas mineras, forma un óxido blanco muy tóxico.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula As₂O₃, sabiendo que el arsénico tiene aquí un estado de oxidación menor (+3)?', o:['anhídrido arsenioso','anhídrido arsénico','ácido arsenioso','trióxido de arsénico']},
{tema:'anhid', c:'exp', k:'Q', ctx:'Un químico analiza un óxido de arsénico que se forma cuando este elemento se oxida por completo.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula As₂O₅, sabiendo que el arsénico tiene aquí su estado de oxidación mayor (+5)?', o:['anhídrido arsénico','anhídrido arsenioso','ácido arsénico','pentaóxido de arsénico']},
{tema:'anhid', c:'exp', k:'Q', ctx:'El bromo, un líquido rojizo que se usa en algunos desinfectantes de piscinas, forma varios óxidos.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula Br₂O, donde el bromo tiene el EO más bajo posible (+1)?', o:['anhídrido hipobromoso','anhídrido bromoso','anhídrido brómico','anhídrido perbrómico']},
{tema:'anhid', c:'uso', k:'CTS', ctx:'El silicio (Si) es, después del oxígeno, el elemento más abundante en la corteza terrestre; en Colombia es la base de la industria del vidrio y la cerámica.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula SiO₂, el único óxido común del silicio?', o:['anhídrido silícico','anhídrido silicioso','ácido silícico','dióxido de silicio (IV)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'El gas hilarante que se usa como anestésico en odontología es un óxido de nitrógeno.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula N₂O, donde el nitrógeno tiene el EO más bajo de la serie (+1)?', o:['anhídrido hiponitroso','anhídrido nitroso','anhídrido nítrico','monóxido de nitrógeno']},
{tema:'anhid', c:'uso', k:'Q', ctx:'El permanganato de potasio que se usa para desinfectar agua se relaciona con un óxido de manganeso.', q:'El manganeso es un metal (ya lo viste como catión en el tema de óxidos básicos), pero en el compuesto Mn₂O₇ actúa como si fuera un no metal, porque alcanza su estado de oxidación máximo (+7). ¿Cuál es el nombre Tradicional correcto de este anhídrido?', o:['anhídrido permangánico','anhídrido mangánico','óxido de manganeso (VII)','anhídrido hipomangánico']},
{tema:'anhid', c:'uso', k:'Q', ctx:'Los baños de cromado de las piezas metálicas usan un óxido de cromo de alto estado de oxidación, muy tóxico.', q:'Igual que el manganeso, el cromo puede actuar como no metal en su estado de oxidación más alto (+6), formando el anhídrido CrO₃. ¿Cuál es su nombre Tradicional correcto?', o:['anhídrido crómico','anhídrido cromoso','óxido de cromo (VI)','anhídrido hipocrómico']},
{tema:'anhid', c:'exp', k:'Q', ctx:'Un óxido de yodo se usa en el laboratorio para detectar y medir monóxido de carbono en el aire.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula I₂O₅, sabiendo que el yodo tiene aquí estado de oxidación +5?', o:['anhídrido yódico','anhídrido yodoso','ácido yódico','pentaóxido de yodo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'El selenio, que se usa en algunas celdas solares, forma un óxido sólido al quemarse.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula SeO₂, sabiendo que el selenio tiene aquí un estado de oxidación menor (+4)?', o:['anhídrido selenioso','anhídrido selénico','ácido selenioso','dióxido de selenio (IV)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'Un químico compara los óxidos de selenio que se forman con distintos estados de oxidación.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula SeO₃, sabiendo que el selenio tiene aquí su estado de oxidación mayor (+6)?', o:['anhídrido selénico','anhídrido selenioso','ácido selénico','trióxido de selenio (VI)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'El telurio se usa en algunos paneles solares de película delgada y forma óxidos al calentarse en el aire.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula TeO₂, sabiendo que el telurio tiene aquí un estado de oxidación menor (+4)?', o:['anhídrido teluroso','anhídrido telúrico','ácido teluroso','dióxido de telurio (IV)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'En una clase de nomenclatura, el docente pide nombrar los óxidos del bromo con el sistema Stock.', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula Br₂O₃?', o:['óxido de bromo (III)','óxido de bromo (V)','anhídrido bromoso (III)','trióxido de bromo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'Un compañero escribió en su cuaderno los óxidos del bromo y debe revisar sus nombres Stock.', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula Br₂O₅?', o:['óxido de bromo (V)','óxido de bromo (VII)','anhídrido brómico (V)','pentaóxido de bromo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'En una tabla de óxidos de halógenos aparece el óxido del bromo con su estado de oxidación más alto.', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula Br₂O₇, donde el bromo alcanza su EO máximo (+7)?', o:['óxido de bromo (VII)','óxido de bromo (III)','anhídrido perbrómico (VII)','heptóxido de bromo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'El yodo de la tintura antiséptica forma varios óxidos según su estado de oxidación.', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula I₂O, donde el yodo tiene el EO más bajo posible (+1)?', o:['óxido de yodo (I)','óxido de yodo (III)','anhídrido hipoyodoso (I)','monóxido de yodo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'Un estudiante debe completar una tabla con los nombres Stock de los óxidos del yodo.', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula I₂O₃?', o:['óxido de yodo (III)','óxido de yodo (I)','anhídrido yodoso (III)','trióxido de yodo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'Un químico estudia el óxido de yodo con el estado de oxidación más alto de toda la serie.', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula I₂O₇, donde el yodo alcanza su EO máximo (+7)?', o:['óxido de yodo (VII)','óxido de yodo (V)','anhídrido peryódico (VII)','heptóxido de yodo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'En el laboratorio se compara el nombre Stock del óxido de bromo de menor estado de oxidación.', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula Br₂O, donde el bromo tiene el EO más bajo posible (+1)?', o:['óxido de bromo (I)','óxido de bromo (III)','anhídrido hipobromoso (I)','monóxido de bromo (I)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'En una guía de nomenclatura aparecen los óxidos del telurio y se pide nombrarlos con el sistema Stock.', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula TeO₃, donde el telurio tiene su estado de oxidación mayor (+6)?', o:['óxido de telurio (VI)','óxido de telurio (IV)','anhídrido telúrico (VI)','trióxido de telurio (VI)']},
{tema:'anhid', c:'uso', k:'CTS', ctx:'El bórax (borato de sodio) es un mineral usado en la industria cerámica de Ráquira (Boyacá) y en la fabricación de vidrio en Colombia; se obtiene a partir de compuestos de boro.', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula B₂O₃, el óxido de boro usado en estos procesos?', o:['óxido de boro (III)','óxido de boro (V)','anhídrido bórico (III)','trióxido de boro (III)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'En la etiqueta de un reactivo para fabricar ácido sulfúrico se usa el nombre sistemático del óxido.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del anhídrido con fórmula SO₃?', o:['trióxido de azufre','dióxido de azufre','anhídrido sulfúrico','óxido de azufre (VI)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'Un químico prepara un óxido de nitrógeno sólido que, con agua, forma ácido nítrico.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del anhídrido con fórmula N₂O₅?', o:['pentaóxido de dinitrógeno','trióxido de dinitrógeno','anhídrido nítrico','óxido de nitrógeno (V)']},
{tema:'anhid', c:'uso', k:'Q', ctx:'Un estudiante ordena los óxidos del cloro y debe decidir cuál lleva el prefijo de mayor valencia.', q:'De los 4 anhídridos de cloro (Cl₂O, Cl₂O₃, Cl₂O₅, Cl₂O₇), ¿cuál usa el prefijo "per-" en su nombre Tradicional, por tener el estado de oxidación más alto de toda la serie?', o:['Cl₂O₇ (anhídrido perclórico)','Cl₂O₅ (anhídrido clórico)','Cl₂O₃ (anhídrido cloroso)','Cl₂O (anhídrido hipocloroso)']},
{tema:'anhid', c:'uso', k:'Q', ctx:'Un estudiante ordena los óxidos del cloro y debe decidir cuál lleva el prefijo de menor valencia.', q:'De los 4 anhídridos de cloro (Cl₂O, Cl₂O₃, Cl₂O₅, Cl₂O₇), ¿cuál usa el prefijo "hipo-" en su nombre Tradicional, por tener el estado de oxidación más bajo de toda la serie?', o:['Cl₂O (anhídrido hipocloroso)','Cl₂O₃ (anhídrido cloroso)','Cl₂O₅ (anhídrido clórico)','Cl₂O₇ (anhídrido perclórico)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'En la fabricación de fertilizantes nitrogenados se forma un óxido de nitrógeno que reacciona con agua.', q:'En el anhídrido N₂O₅, ¿cuál es el estado de oxidación del nitrógeno?', o:['+5','+3','+1','+4']},
{tema:'anhid', c:'uso', k:'CTS', ctx:'Los fertilizantes fosfatados usados en la agricultura colombiana (papa, flores, café) se producen a partir de ácido fosfórico.', q:'¿Qué obtienes si agregas agua al anhídrido fosfórico (P₂O₅ + H₂O)?', o:['Ácido fosfórico (H₃PO₄)','Ácido fosforoso (H₃PO₃)','Hidróxido de fósforo','Fosfato de hidrógeno']},

/* ============================= HIDRU (38 preguntas nuevas) ============================= */
{tema:'hidru', c:'exp', k:'Q', ctx:'El potasio es un metal tan reactivo que se guarda bajo aceite; con hidrógeno forma un hidruro.', q:'El potasio (K) tiene valencia fija +1. ¿Cuál es la fórmula correcta de su hidruro?', o:['KH','K₂H','KH₂','K₂H₂']},
{tema:'hidru', c:'uso', k:'Q', ctx:'En el laboratorio se usa hidruro de sodio como reactivo; un estudiante revisa sus nombres en los tres sistemas.', q:'¿Por qué el nombre del hidruro de sodio (NaH) es igual en los sistemas Tradicional, Stock y Sistemático?', o:['Porque el sodio tiene valencia fija (+1), no necesita sufijo ni número romano que distinga valencias','Porque el sodio es un no metal y no necesita sufijo ni número romano','Porque el hidrógeno de los hidruros tiene EO +1, igual que en el agua','Porque los hidruros metálicos no tienen nombre en el sistema Sistemático']},
{tema:'hidru', c:'exp', k:'Q', ctx:'El hidruro de litio se estudia como material para almacenar hidrógeno en vehículos del futuro.', q:'El litio (Li) tiene valencia fija +1, igual que el sodio y el potasio. ¿Cuál es la fórmula correcta de su hidruro?', o:['LiH','Li₂H','LiH₂','Li₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'El rubidio, un metal alcalino muy reactivo, forma un hidruro al reaccionar con hidrógeno caliente.', q:'El rubidio (Rb) tiene valencia fija +1 (grupo 1A). ¿Cuál es la fórmula correcta de su hidruro?', o:['RbH','Rb₂H','RbH₂','Rb₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'El cesio, el metal de los relojes atómicos, reacciona con el hidrógeno y forma un hidruro.', q:'El cesio (Cs) tiene valencia fija +1 (grupo 1A), igual que el rubidio. ¿Cuál es la fórmula correcta de su hidruro?', o:['CsH','Cs₂H','CsH₂','Cs₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'Un hidruro de calcio se usa para secar disolventes en el laboratorio, porque reacciona con el agua.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del hidruro de calcio, con fórmula CaH₂?', o:['dihidruro de calcio','hidruro de calcio','trihidruro de calcio','dihidruro de dicalcio']},
{tema:'hidru', c:'exp', k:'Q', ctx:'El hidruro de magnesio se investiga para almacenar hidrógeno de forma segura en tanques sólidos.', q:'El magnesio (Mg) tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidruro?', o:['MgH₂','MgH','Mg₂H','Mg₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'En un artículo sobre almacenamiento de hidrógeno aparece un hidruro de magnesio con su nombre sistemático.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del hidruro de magnesio, con fórmula MgH₂?', o:['dihidruro de magnesio','hidruro de magnesio','trihidruro de magnesio','dihidruro de dimagnesio']},
{tema:'hidru', c:'exp', k:'Q', ctx:'El bario forma un hidruro que se estudia como catalizador en la producción de amoníaco.', q:'El bario (Ba) tiene valencia fija +2 (grupo 2A). ¿Cuál es la fórmula correcta de su hidruro?', o:['BaH₂','BaH','Ba₂H','Ba₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'El estroncio, que da el color rojo a los fuegos artificiales, también forma un hidruro con el hidrógeno.', q:'El estroncio (Sr) tiene valencia fija +2 (grupo 2A), igual que el calcio, el magnesio y el bario. ¿Cuál es la fórmula correcta de su hidruro?', o:['SrH₂','SrH','Sr₂H','Sr₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'En una tabla de hidruros metálicos, un estudiante debe escribir el nombre sistemático del hidruro de estroncio.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del hidruro de estroncio, con fórmula SrH₂?', o:['dihidruro de estroncio','hidruro de estroncio','trihidruro de estroncio','dihidruro de diestroncio']},
{tema:'hidru', c:'exp', k:'Q', ctx:'Un químico estudia hidruros de metales de transición para almacenar hidrógeno.', q:'El zinc (Zn) tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidruro?', o:['ZnH₂','ZnH','Zn₂H','Zn₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'En un informe de laboratorio aparece el hidruro de zinc y se pide su nombre sistemático.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del hidruro de zinc, con fórmula ZnH₂?', o:['dihidruro de zinc','hidruro de zinc','trihidruro de zinc','dihidruro de dizinc']},
{tema:'hidru', c:'exp', k:'Q', ctx:'Un hidruro de aluminio se usa en química como reactivo para reducir otros compuestos.', q:'El aluminio (Al) tiene valencia fija +3. ¿Cuál es la fórmula correcta de su hidruro?', o:['AlH₃','AlH','AlH₂','Al₂H₃']},
{tema:'hidru', c:'exp', k:'Q', ctx:'En un catálogo de reactivos químicos aparece el hidruro de aluminio con su nombre sistemático.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del hidruro de aluminio, con fórmula AlH₃?', o:['trihidruro de aluminio','hidruro de aluminio','dihidruro de aluminio','trihidruro de dialuminio']},
{tema:'hidru', c:'exp', k:'Q', ctx:'El berilio, un metal muy liviano usado en la industria aeroespacial, forma un hidruro.', q:'El berilio (Be) tiene valencia fija +2 (grupo 2A), igual que el magnesio. ¿Cuál es la fórmula correcta de su hidruro?', o:['BeH₂','BeH','Be₂H','Be₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'En una clase de nomenclatura, el docente propone nombrar los hidruros del hierro en el sistema tradicional.', q:'¿Cuál es el nombre Tradicional correcto del hidruro de hierro con fórmula FeH₂, sabiendo que el hierro tiene aquí su estado de oxidación menor (+2)?', o:['hidruro ferroso','hidruro férrico','hidruro de hierro (III)','anhídrido ferroso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'Un estudiante compara en su cuaderno los dos hidruros del hierro según su estado de oxidación.', q:'¿Cuál es el nombre Tradicional correcto del hidruro de hierro con fórmula FeH₃, sabiendo que el hierro tiene aquí su estado de oxidación mayor (+3)?', o:['hidruro férrico','hidruro ferroso','hidruro de hierro (II)','anhídrido férrico']},
{tema:'hidru', c:'exp', k:'Q', ctx:'Una guía de ejercicios pide nombrar los hidruros del hierro con números romanos.', q:'¿Cuál es el nombre Stock correcto del hidruro de hierro con fórmula FeH₂?', o:['hidruro de hierro (II)','hidruro de hierro (III)','hidruro ferroso (II)','dihidruro de hierro (II)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'En una tabla de hidruros metálicos aparece un hidruro de hierro con su mayor estado de oxidación.', q:'¿Cuál es el nombre Stock correcto del hidruro de hierro con fórmula FeH₃?', o:['hidruro de hierro (III)','hidruro de hierro (II)','hidruro férrico (III)','trihidruro de hierro (III)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'El cobre forma un hidruro poco estable que se estudia en química de superficies.', q:'¿Cuál es el nombre Tradicional correcto del hidruro de cobre con fórmula CuH, sabiendo que el cobre tiene aquí su estado de oxidación menor (+1)?', o:['hidruro cuproso','hidruro cúprico','hidruro de cobre (II)','anhídrido cuproso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'En una guía de ejercicios se pide el nombre Stock del hidruro que forma el cobre con su menor valencia.', q:'¿Cuál es el nombre Stock correcto del hidruro de cobre con fórmula CuH?', o:['hidruro de cobre (I)','hidruro de cobre (II)','hidruro cuproso (I)','monohidruro de cobre (I)']},
{tema:'hidru', c:'uso', k:'CTS', ctx:'Las baterías recargables de níquel (NiMH), usadas en herramientas eléctricas en Colombia, almacenan hidrógeno en forma de hidruros metálicos.', q:'¿Cuál es el nombre Tradicional correcto del hidruro de níquel con fórmula NiH₂, sabiendo que el níquel tiene aquí su estado de oxidación menor (+2)?', o:['hidruro niqueloso','hidruro niquélico','hidruro de níquel (III)','anhídrido niqueloso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'El níquel de algunas baterías recargables puede absorber hidrógeno y formar un hidruro.', q:'¿Cuál es el nombre Stock correcto del hidruro de níquel con fórmula NiH₂?', o:['hidruro de níquel (II)','hidruro de níquel (III)','hidruro niqueloso (II)','dihidruro de níquel (II)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'En una guía de nomenclatura, el docente pide nombrar los hidruros del cobalto según su valencia.', q:'¿Cuál es el nombre Tradicional correcto del hidruro de cobalto con fórmula CoH₂, sabiendo que el cobalto tiene aquí su estado de oxidación menor (+2)?', o:['hidruro cobaltoso','hidruro cobáltico','hidruro de cobalto (III)','anhídrido cobaltoso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'Un estudiante completa una tabla de hidruros de metales de transición con sus nombres Stock.', q:'¿Cuál es el nombre Stock correcto del hidruro de cobalto con fórmula CoH₂?', o:['hidruro de cobalto (II)','hidruro de cobalto (III)','hidruro cobaltoso (II)','dihidruro de cobalto (II)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'El manganeso, que se usa para endurecer el acero de los rieles, forma un hidruro con su valencia más común.', q:'¿Cuál es el nombre Tradicional correcto del hidruro de manganeso con fórmula MnH₂, sabiendo que el manganeso tiene aquí su estado de oxidación menor habitual (+2)?', o:['hidruro manganoso','hidruro mangánico','hidruro de manganeso (IV)','anhídrido manganoso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'En un ejercicio de nomenclatura aparece un hidruro del manganeso y se pide su nombre con números romanos.', q:'¿Cuál es el nombre Stock correcto del hidruro de manganeso con fórmula MnH₂?', o:['hidruro de manganeso (II)','hidruro de manganeso (IV)','hidruro manganoso (II)','dihidruro de manganeso (II)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'El cromo de los acabados metálicos puede formar hidruros con distintas valencias.', q:'¿Cuál es el nombre Tradicional correcto del hidruro de cromo con fórmula CrH₂, sabiendo que el cromo tiene aquí su estado de oxidación menor (+2)?', o:['hidruro cromoso','hidruro crómico','hidruro de cromo (III)','anhídrido cromoso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'Un estudiante compara en su cuaderno los dos hidruros del cromo según su estado de oxidación.', q:'¿Cuál es el nombre Tradicional correcto del hidruro de cromo con fórmula CrH₃, sabiendo que el cromo tiene aquí su estado de oxidación mayor (+3)?', o:['hidruro crómico','hidruro cromoso','hidruro de cromo (II)','anhídrido crómico']},
{tema:'hidru', c:'exp', k:'Q', ctx:'Una guía de ejercicios pide nombrar con el sistema Stock el hidruro de cromo de menor valencia.', q:'¿Cuál es el nombre Stock correcto del hidruro de cromo con fórmula CrH₂?', o:['hidruro de cromo (II)','hidruro de cromo (III)','hidruro cromoso (II)','dihidruro de cromo (II)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'En una tabla de hidruros metálicos aparece el hidruro de cromo de mayor valencia.', q:'¿Cuál es el nombre Stock correcto del hidruro de cromo con fórmula CrH₃?', o:['hidruro de cromo (III)','hidruro de cromo (II)','hidruro crómico (III)','trihidruro de cromo (III)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'El plomo, que se usaba en tuberías antiguas, puede formar un hidruro con su valencia menor.', q:'¿Cuál es el nombre Tradicional correcto del hidruro de plomo con fórmula PbH₂, sabiendo que el plomo tiene aquí su estado de oxidación menor (+2)?', o:['hidruro plumboso','hidruro plúmbico','hidruro de plomo (IV)','anhídrido plumboso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'En un ejercicio de nomenclatura se pide el nombre Stock del hidruro de plomo de valencia +2.', q:'¿Cuál es el nombre Stock correcto del hidruro de plomo con fórmula PbH₂?', o:['hidruro de plomo (II)','hidruro de plomo (IV)','hidruro plumboso (II)','dihidruro de plomo (II)']},
{tema:'hidru', c:'uso', k:'Q', ctx:'Un compañero escribió los nombres de los hidruros del hierro, pero los confundió entre sí.', q:'De los hidruros de hierro FeH₂ y FeH₃, ¿cuál usa el sufijo -oso en su nombre Tradicional, por representar la valencia MENOR del hierro?', o:['FeH₂ (hidruro ferroso)','FeH₃ (hidruro férrico)','Ambos usan el mismo sufijo','Ninguno usa sufijo -oso/-ico']},
{tema:'hidru', c:'uso', k:'Q', ctx:'Un estudiante debe decidir cuál de los hidruros del cromo lleva el sufijo de la valencia mayor.', q:'De los hidruros de cromo CrH₂ y CrH₃, ¿cuál usa el sufijo -ico en su nombre Tradicional, por representar la valencia MAYOR del cromo?', o:['CrH₃ (hidruro crómico)','CrH₂ (hidruro cromoso)','Ambos usan el mismo sufijo','Ninguno usa sufijo -oso/-ico']},
{tema:'hidru', c:'exp', k:'Q', ctx:'El hidruro de aluminio se usa como reactivo reductor en la industria farmacéutica.', q:'¿Cuál es el estado de oxidación del hidrógeno en el hidruro de aluminio (AlH₃)?', o:['-1','+1','-3','+3']},
{tema:'hidru', c:'exp', k:'Q', ctx:'En una clase de nomenclatura se pide escribir el hidruro que forma el hierro con su valencia mayor.', q:'El hierro (Fe) puede tener valencia +2 o +3. Si en su hidruro el hierro tiene valencia +3, ¿cuál es la fórmula correcta?', o:['FeH₃','FeH₂','Fe₃H','Fe₂H₃']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'El vidrio de algunas obras de arte se graba con un ácido que lo disuelve, el único que ataca al vidrio.', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula HF disuelto en agua?', o:['ácido fluorhídrico','ácido flúorico','fluoruro de hidrógeno (en disolución)','ácido fluoroso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'En la industria del aluminio se usa un gas muy corrosivo de flúor e hidrógeno, que se guarda en estado puro.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de HF en estado puro o gaseoso?', o:['fluoruro de hidrógeno','ácido fluorhídrico','fluorato de hidrógeno','monofluoruro de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'Las cremas dentales contienen compuestos de flúor que se relacionan con un ácido muy corrosivo.', q:'¿Cómo se llama el anión que da nombre al ácido fluorhídrico (HF)?', o:['fluoruro','flúor','fluorito','fluorano']},
{tema:'ac-hid', c:'uso', k:'CTS', ctx:'El ácido fluorhídrico se usa en la industria del vidrio para grabar y esmerilar superficies, ya que es de los pocos ácidos capaces de disolver el dióxido de silicio.', q:'¿Cuál es la fórmula del ácido que graba el vidrio en este proceso industrial?', o:['HF','HCl','H₂SO₄','HNO₃']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'El ácido muriático se obtiene disolviendo en agua un gas que se fabrica a partir de cloro e hidrógeno.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de HCl en estado puro o gaseoso?', o:['cloruro de hidrógeno','ácido clorhídrico','clorato de hidrógeno','monocloruro de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'Un estudiante encuentra en el laboratorio dos frascos con nombres muy parecidos y debe distinguirlos.', q:'¿Cuál de los siguientes nombres corresponde en realidad a un ácido oxácido y NO a un ácido hídrico, aunque suene parecido al nombre tradicional del HCl?', o:['Ácido clórico','Ácido clorhídrico','Cloruro de hidrógeno','Ácido muriático']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'El bromuro de hidrógeno disuelto en agua se usa en la industria para fabricar medicamentos.', q:'¿Cuál es la fórmula correcta del ácido bromhídrico?', o:['HBr','HBr₂','H₂Br','BrH₂']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'Algunos medicamentos antiguos para calmar los nervios contenían sales de bromo.', q:'¿Cómo se llama el anión que da nombre al ácido bromhídrico (HBr)?', o:['bromuro','bromo','bromato','bromito']},
{tema:'ac-hid', c:'uso', k:'CTS', ctx:'En procesos industriales de síntesis orgánica en Colombia se usa ácido bromhídrico como reactivo para introducir átomos de bromo en ciertas moléculas.', q:'¿Cuál es el nombre Sistemático (estado puro o gaseoso) del reactivo HBr mencionado?', o:['bromuro de hidrógeno','ácido bromhídrico','bromato de hidrógeno','dibromuro de hidrógeno']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'En la síntesis de algunos medicamentos se usa una solución de yoduro de hidrógeno en agua.', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula HI disuelto en agua?', o:['ácido yodhídrico','ácido yódico','yoduro de hidrógeno (en disolución)','ácido yodoso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'Un químico trabaja con un gas incoloro de yodo e hidrógeno antes de disolverlo en agua.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de HI en estado puro o gaseoso?', o:['yoduro de hidrógeno','ácido yodhídrico','yodato de hidrógeno','monoyoduro de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'La sal yodada de cocina contiene un anión del yodo que también da nombre a un ácido.', q:'¿Cómo se llama el anión que da nombre al ácido yodhídrico (HI)?', o:['yoduro','yodo','yodito','yodano']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'Un estudiante compara dos ácidos que forman sales distintas al reaccionar con bases.', q:'Entre el ácido bromhídrico (HBr) y el ácido sulfhídrico (H₂S), ¿cuál de los dos aniones tiene mayor carga negativa?', o:['El sulfuro (S²⁻), con carga -2','El bromuro (Br⁻), con carga -2','Ambos tienen la misma carga','El bromuro, porque el bromo es más electronegativo']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'El olor a huevo podrido de algunas aguas termales se debe a un gas de azufre disuelto.', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula H₂S disuelto en agua?', o:['ácido sulfhídrico','ácido sulfúrico','sulfuro de hidrógeno (en disolución)','ácido sulfuroso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'En los pozos de petróleo y en las alcantarillas se puede acumular un gas tóxico de azufre e hidrógeno.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de H₂S en estado puro o gaseoso?', o:['sulfuro de hidrógeno','ácido sulfhídrico','sulfato de hidrógeno','monosulfuro de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'El gas de olor a huevo podrido de las aguas termales de Paipa contiene azufre e hidrógeno.', q:'En el ácido sulfhídrico (H₂S), ¿cuál es el estado de oxidación del hidrógeno?', o:['+1','-1','+2','0']},
{tema:'ac-hid', c:'uso', k:'CTS', ctx:'El característico olor a "huevo podrido" que a veces se percibe cerca de aguas residuales o pozos sépticos en descomposición se debe a un gas que, disuelto en agua, es un ácido hídrico.', q:'¿Cuál es la fórmula de ese gas?', o:['H₂S','HCl','SO₂','NH₃']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'Las minas de oro del país contienen minerales que se relacionan con el anión del ácido sulfhídrico.', q:'¿Cómo se llama el anión que da nombre al ácido sulfhídrico (H₂S)?', o:['sulfuro','sulfato','sulfito','azufre']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'El selenio, un elemento que usamos en pequeñas cantidades en la dieta, forma un ácido hídrico muy tóxico.', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula H₂Se disuelto en agua?', o:['ácido selenhídrico','ácido selénico','seleniuro de hidrógeno (en disolución)','ácido selenioso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'Un químico estudia un gas tóxico de selenio e hidrógeno en estado puro.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de H₂Se en estado puro o gaseoso?', o:['seleniuro de hidrógeno','ácido selenhídrico','seleniato de hidrógeno','monoseleniuro de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'Algunas celdas solares usan compuestos de selenio que se relacionan con un ácido hídrico.', q:'¿Cómo se llama el anión que da nombre al ácido selenhídrico (H₂Se)?', o:['seleniuro','selenato','selenito','selenio']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'Un estudiante compara las cargas de los aniones de dos ácidos hídricos.', q:'Entre el ácido yodhídrico (HI) y el ácido selenhídrico (H₂Se), ¿cuál de los dos aniones tiene carga -2?', o:['El seleniuro (Se²⁻)','El yoduro (I⁻)','Ninguno, ambos tienen carga -1','Ambos tienen carga -2']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'En la minería ilegal de oro se usa cianuro, que en solución ácida libera un gas venenoso.', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula HCN disuelto en agua?', o:['ácido cianhídrico','ácido ciánico','cianuro de hidrógeno (en disolución)','ácido cianoso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'En la minería de oro se controla un gas venenoso de carbono, nitrógeno e hidrógeno en estado puro.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de HCN en estado puro o gaseoso?', o:['cianuro de hidrógeno','ácido cianhídrico','cianato de hidrógeno','dicianuro de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'CTS', ctx:'En algunos procesos de minería de oro en Colombia se emplean soluciones de cianuro para separar el metal de la roca; el anión cianuro (CN⁻) es la base del ácido hídrico de este tema.', q:'¿Cuál es el nombre Tradicional del ácido formado por hidrógeno y el anión cianuro?', o:['Ácido cianhídrico','Ácido ciánico','Ácido cianoso','Cianato de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'En la extracción de oro se usa una sal muy tóxica que contiene un anión de carbono y nitrógeno.', q:'¿Cómo se llama el anión que da nombre al ácido cianhídrico (HCN)?', o:['cianuro','ciánico','cianato','cianito']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'En la minería de oro se forma un gas venenoso que contiene hidrógeno, carbono y nitrógeno.', q:'En el ácido cianhídrico (HCN), ¿cuál es el estado de oxidación del hidrógeno?', o:['+1','-1','+3','0']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'El telurio, que se usa en algunos paneles solares, forma un ácido hídrico muy inestable.', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula H₂Te disuelto en agua?', o:['ácido telurhídrico','ácido telúrico','telururo de hidrógeno (en disolución)','ácido teluroso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'Un químico estudia un gas de telurio e hidrógeno en estado puro.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de H₂Te en estado puro o gaseoso?', o:['telururo de hidrógeno','ácido telurhídrico','telurato de hidrógeno','monotelururo de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'Algunos paneles solares usan compuestos de telurio que se relacionan con un ácido hídrico.', q:'¿Cómo se llama el anión que da nombre al ácido telurhídrico (H₂Te)?', o:['telururo','telurato','teluroso','telurio']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'Un estudiante compara las fórmulas de dos ácidos hídricos con aniones de distinta carga.', q:'Entre el ácido clorhídrico (HCl) y el ácido telurhídrico (H₂Te), ¿cuál de los dos necesita 2 átomos de hidrógeno para equilibrar la carga de su anión?', o:['El ácido telurhídrico, porque el telururo tiene carga -2','El ácido clorhídrico, porque el cloruro tiene carga -2','Ambos necesitan 2 átomos de hidrógeno','Ninguno, los dos necesitan solo 1 átomo de hidrógeno']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'Las bolsas de aire de algunos carros usaban una sal que se relaciona con un ácido de nitrógeno e hidrógeno.', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula HN₃ disuelto en agua?', o:['ácido hidrazoico','ácido nítrico','azida de hidrógeno (en disolución)','ácido nitroso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'Un químico estudia un compuesto explosivo de nitrógeno e hidrógeno en estado puro.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de HN₃ en estado puro o gaseoso?', o:['azida de hidrógeno','ácido hidrazoico','nitrato de hidrógeno','trinitruro de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'Las bolsas de aire de algunos carros contenían una sal de sodio que libera nitrógeno al chocar.', q:'¿Cómo se llama el anión que da nombre al ácido hidrazoico (HN₃)?', o:['azida','nitruro','nitrato','nitrito']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'En el laboratorio hay varios frascos de ácidos y uno de ellos se usa para grabar vidrio.', q:'¿Cuál de las siguientes fórmulas corresponde al ácido fluorhídrico?', o:['HF','F₂','HF₂','H₂F']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'En el laboratorio hay varios frascos de ácidos y uno de ellos huele a huevo podrido.', q:'¿Cuál de las siguientes fórmulas corresponde al ácido sulfhídrico?', o:['H₂S','HS','H₂S₂','HS₂']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'Un estudiante compara los nombres de varios ácidos sin oxígeno en una tabla.', q:'¿Qué tienen en común los nombres Tradicionales de todos los ácidos hídricos (fluorhídrico, clorhídrico, sulfhídrico, etc.)?', o:['Todos terminan en el sufijo "-hídrico"','Todos terminan en el sufijo "-ico"','Todos empiezan con la palabra "anhídrido"','Todos incluyen un número romano']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'En un catálogo de gases industriales aparecen tres gases de hidrógeno con halógenos y selenio.', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de H₂Se, HCl y HF, respectivamente, en estado puro o gaseoso?', o:['Seleniuro de hidrógeno, cloruro de hidrógeno, fluoruro de hidrógeno','Ácido selenhídrico, ácido clorhídrico, ácido fluorhídrico','Selenato de hidrógeno, clorato de hidrógeno, fluorato de hidrógeno','Seleniuro de hidrógeno, clorito de hidrógeno, fluorito de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'En la etiqueta de un frasco de laboratorio aparece el nombre del gas puro, pero el frasco contiene una solución.', q:'Si un ácido hídrico se nombra en estado puro como "yoduro de hidrógeno", ¿cuál es su nombre Tradicional cuando está disuelto en agua?', o:['Ácido yodhídrico','Ácido yódico','Ácido yodoso','Yodato de hidrógeno']},

{tema:'base', c:'exp', k:'Q', ctx:'El rubidio, un metal alcalino muy reactivo, forma una base fuerte al reaccionar con agua.', q:'El rubidio tiene valencia fija +1. ¿Cuál es la fórmula correcta de su hidróxido?', o:['RbOH','Rb(OH)₂','RbOH₂','Rb₂OH']},
{tema:'base', c:'exp', k:'Q', ctx:'El estroncio se usa en fuegos artificiales y su hidróxido se emplea en la refinación del azúcar de remolacha.', q:'El estroncio tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidróxido?', o:['Sr(OH)₂','SrOH','Sr(OH)₃','Sr₂OH']},
{tema:'base', c:'exp', k:'Q', ctx:'El hidróxido de aluminio se usa en antiácidos y en el tratamiento del agua potable.', q:'El aluminio tiene valencia fija +3. ¿Cuál es la fórmula correcta de su hidróxido?', o:['Al(OH)₃','Al(OH)₂','AlOH₃','Al₃OH']},
{tema:'base', c:'uso', k:'Q', ctx:'El hidróxido de bario se usa en el laboratorio para detectar dióxido de carbono.', q:'¿Cuál es el nombre Tradicional correcto del hidróxido con fórmula Ba(OH)₂?', o:['hidróxido de bario','hidróxido bárico','dihidróxido de bario','hidróxido de boro']},
{tema:'base', c:'uso', k:'Q', ctx:'En la etiqueta de un antiácido aparece el hidróxido de aluminio con su nombre sistemático.', q:'¿Cuál es el nombre Sistemático correcto del hidróxido con fórmula Al(OH)₃?', o:['trihidróxido de aluminio','hidróxido de aluminio (III)','hidróxido alumínico','dihidróxido de aluminio']},
{tema:'base', c:'uso', k:'CTS', ctx:'En algunos acueductos municipales colombianos se usa hidróxido de calcio para ajustar el pH del agua antes de distribuirla, mientras que el hidróxido de sodio se usa en la industria para fabricar jabón y papel.', q:'¿Cuál es la fórmula del hidróxido de sodio usado en estos procesos industriales?', o:['NaOH','Na(OH)₂','NaO','Na₂OH']},
{tema:'base', c:'exp', k:'Q', ctx:'Al agregar una base a una solución de hierro se forma un precipitado verdoso que se oxida con el aire.', q:'El hierro tiene dos valencias posibles: +2 y +3. ¿Cuál es el nombre Tradicional del hidróxido Fe(OH)₂?', o:['hidróxido ferroso','hidróxido férrico','hidróxido de hierro','hidróxido ferroico']},
{tema:'base', c:'exp', k:'Q', ctx:'El color rojizo del agua de algunas quebradas se debe a un hidróxido de hierro que se deposita en el fondo.', q:'El hierro tiene dos valencias posibles: +2 y +3. ¿Cuál es el nombre Tradicional del hidróxido Fe(OH)₃?', o:['hidróxido férrico','hidróxido ferroso','hidróxido de hierro','hidróxido ferroico']},
{tema:'base', c:'uso', k:'Q', ctx:'En las plantas de tratamiento de agua se forma un hidróxido de hierro que arrastra las impurezas.', q:'¿Cuál es el nombre Stock correcto del hidróxido Fe(OH)₃?', o:['hidróxido de hierro (III)','hidróxido de hierro (II)','hidróxido férrico (III)','trihidróxido de hierro (III)']},
{tema:'base', c:'exp', k:'Q', ctx:'El cobre puede formar dos hidróxidos según su valencia, uno de ellos muy inestable.', q:'El cobre tiene dos valencias posibles: +1 y +2. ¿Cuál es el nombre Tradicional del hidróxido CuOH?', o:['hidróxido cuproso','hidróxido cúprico','hidróxido de cobre','hidróxido cuproico']},
{tema:'base', c:'exp', k:'Q', ctx:'Al agregar una base a una solución de sulfato de cobre se forma un precipitado azul claro.', q:'El cobre tiene dos valencias posibles: +1 y +2. ¿Cuál es el nombre Tradicional del hidróxido Cu(OH)₂?', o:['hidróxido cúprico','hidróxido cuproso','hidróxido de cobre','hidróxido cuproico']},
{tema:'base', c:'exp', k:'Q', ctx:'Las baterías recargables de níquel contienen hidróxidos de este metal en sus electrodos.', q:'El níquel tiene dos valencias posibles: +2 y +3. ¿Cuál es el nombre Tradicional del hidróxido Ni(OH)₃?', o:['hidróxido niquélico','hidróxido niqueloso','hidróxido de níquel','hidróxido niquelítico']},
{tema:'base', c:'exp', k:'Q', ctx:'Al agregar una base a una solución rosada de cobalto se forma un precipitado de su hidróxido.', q:'El cobalto tiene dos valencias posibles: +2 y +3. ¿Cuál es el nombre Tradicional del hidróxido Co(OH)₂?', o:['hidróxido cobaltoso','hidróxido cobáltico','hidróxido de cobalto','hidróxido cobaltítico']},
{tema:'base', c:'exp', k:'Q', ctx:'En una guía de nomenclatura se comparan los dos hidróxidos que puede formar el plomo.', q:'El plomo tiene dos valencias posibles: +2 y +4. ¿Cuál es el nombre Tradicional del hidróxido Pb(OH)₄?', o:['hidróxido plúmbico','hidróxido plumboso','hidróxido de plomo','hidróxido plumboico']},
{tema:'base', c:'exp', k:'Q', ctx:'El estaño de las latas de conservas puede formar hidróxidos según su valencia.', q:'El estaño tiene dos valencias posibles: +2 y +4. ¿Cuál es el nombre Tradicional del hidróxido Sn(OH)₂?', o:['hidróxido estannoso','hidróxido estánnico','hidróxido de estaño','hidróxido estañoico']},
{tema:'base', c:'uso', k:'Q', ctx:'En un catálogo de reactivos aparece un hidróxido de estaño con su nombre sistemático.', q:'¿Cuál es el nombre Sistemático correcto del hidróxido Sn(OH)₄?', o:['tetrahidróxido de estaño','hidróxido de estaño (IV)','hidróxido estánnico','dihidróxido de estaño']},
{tema:'base', c:'exp', k:'Q', ctx:'Al agregar una base a una solución de manganeso se forma un precipitado claro que se oscurece con el aire.', q:'El manganeso puede tener EO +2 en este hidróxido. ¿Cuál es el nombre Tradicional de Mn(OH)₂?', o:['hidróxido manganoso','hidróxido mangánico','hidróxido de manganeso','hidróxido mangánico (II)']},
{tema:'base', c:'exp', k:'Q', ctx:'En las curtiembres se usan compuestos de cromo, y al neutralizar sus aguas se forma un hidróxido verdoso.', q:'El cromo tiene dos valencias posibles en sus hidróxidos: +2 y +3. ¿Cuál es el nombre Tradicional de Cr(OH)₃?', o:['hidróxido crómico','hidróxido cromoso','hidróxido de cromo','hidróxido cromítico']},
{tema:'base', c:'exp', k:'Q', ctx:'En la refinación del oro de las minas de Antioquia se forman compuestos de oro con distintas valencias.', q:'El oro tiene dos valencias posibles: +1 y +3. ¿Cuál es el nombre Tradicional del hidróxido Au(OH)₃?', o:['hidróxido áurico','hidróxido auroso','hidróxido de oro','hidróxido auroico']},
{tema:'base', c:'uso', k:'Q', ctx:'El mercurio que se usa en la minería ilegal de oro forma compuestos tóxicos con distintas valencias.', q:'¿Cuál es el nombre Tradicional correcto del hidróxido con fórmula Hg(OH)₂?', o:['hidróxido mercúrico','hidróxido mercurioso','hidróxido de mercurio','hidróxido mercurial']},
{tema:'base', c:'uso', k:'Q', ctx:'En una guía de nomenclatura se comparan los dos hidróxidos que puede formar el mercurio.', q:'¿Cuál es el nombre Tradicional correcto del hidróxido con fórmula HgOH?', o:['hidróxido mercurioso','hidróxido mercúrico','hidróxido de mercurio','hidróxido mercurital']},
{tema:'base', c:'exp', k:'Q', ctx:'Las pomadas para quemaduras usan compuestos de zinc, y uno de ellos se forma al agregar una base a sus sales.', q:'El zinc tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidróxido?', o:['Zn(OH)₂','ZnOH','Zn(OH)₃','Zn₂OH']},
{tema:'base', c:'uso', k:'Q', ctx:'Un compañero escribió «hidróxido zíncico» en su cuaderno y el docente le pidió revisar el nombre.', q:'¿Por qué el hidróxido de zinc, Zn(OH)₂, NO necesita un sufijo -oso/-ico en su nombre Tradicional?', o:['Porque el zinc tiene valencia fija, no tiene más de una posible','Porque el zinc es un no metal y no forma hidróxidos con sufijo','Porque el grupo OH⁻ nunca lleva sufijo en ningún sistema','Porque el zinc siempre forma óxidos y no hidróxidos']},
{tema:'base', c:'exp', k:'Q', ctx:'En la fotografía antigua se usaban compuestos de plata que se transforman en contacto con bases.', q:'¿Cuál es la fórmula correcta del hidróxido de plata, sabiendo que la plata tiene valencia fija +1?', o:['AgOH','Ag(OH)₂','AgOH₂','Ag₂OH']},
{tema:'base', c:'uso', k:'CTS', ctx:'El hidróxido de amonio (NH₄OH) se forma al disolver amoníaco gaseoso (NH₃) en agua, y se usa en algunos productos de limpieza del hogar en Colombia.', q:'¿Qué catión forma el hidróxido de amonio, en lugar de un catión metálico simple?', o:['El catión amonio (NH₄⁺)','El catión nitrógeno (N³⁺)','El catión hidronio (H₃O⁺)','El catión hidrazina (N₂H₅⁺)']},
{tema:'base', c:'uso', k:'Q', ctx:'Muchos limpiadores de vidrios contienen amoníaco disuelto en agua, que forma una base débil.', q:'¿Cuál es el nombre correcto del hidróxido con fórmula NH₄OH?', o:['hidróxido de amonio','hidróxido amónico','hidróxido de nitrógeno','amoniuro de hidróxido']},
{tema:'base', c:'exp', k:'Q', ctx:'El berilio se usa en aleaciones aeroespaciales y forma un hidróxido muy poco soluble en agua.', q:'El berilio tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidróxido?', o:['Be(OH)₂','BeOH','Be(OH)₃','Be₂OH']},
{tema:'base', c:'exp', k:'Q', ctx:'El cesio forma una de las bases más fuertes que se conocen al reaccionar con agua.', q:'El cesio tiene valencia fija +1. ¿Cuál es la fórmula correcta de su hidróxido?', o:['CsOH','Cs(OH)₂','CsOH₂','Cs₂OH']},
{tema:'base', c:'exp', k:'Q', ctx:'El cadmio de las pilas antiguas forma un hidróxido que contamina el suelo si se botan a la basura.', q:'El cadmio tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidróxido?', o:['Cd(OH)₂','CdOH','Cd(OH)₃','Cd₂OH']},
{tema:'base', c:'uso', k:'Q', ctx:'En el tratamiento del agua potable se usa un hidróxido de aluminio que atrapa las partículas de barro.', q:'¿Cuántos grupos hidróxido (OH⁻) se necesitan para equilibrar la carga de un catión con valencia +3, como el Al³⁺?', o:['3','1','2','4']},
{tema:'base', c:'uso', k:'Q', ctx:'Un estudiante escribe la fórmula del hidróxido que forma el estaño con su valencia mayor.', q:'¿Cuántos grupos hidróxido (OH⁻) se necesitan para equilibrar la carga de un catión con valencia +4, como el Sn⁴⁺?', o:['4','2','3','1']},
{tema:'base', c:'uso', k:'Q', ctx:'En una tabla de nomenclatura sistemática aparece el hidróxido de hierro de valencia +3.', q:'¿Qué prefijo griego se usa en nomenclatura Sistemática para indicar 3 grupos hidróxido, como en Fe(OH)₃?', o:['tri-','di-','tetra-','mono-']},
{tema:'base', c:'uso', k:'Q', ctx:'En una tabla de nomenclatura sistemática aparece el hidróxido de plomo de valencia +4.', q:'¿Qué prefijo griego se usa en nomenclatura Sistemática para indicar 4 grupos hidróxido, como en Pb(OH)₄?', o:['tetra-','tri-','di-','penta-']},
{tema:'base', c:'exp', k:'Q', ctx:'Un compañero escribió varias fórmulas de la cal apagada en el tablero y el docente pidió encontrar la errada.', q:'¿Cuál de las siguientes fórmulas está mal escrita para un hidróxido de calcio (Ca²⁺, valencia +2)?', o:['CaOH₂ (sin paréntesis)','Ca(OH)₂','Ca²⁺ + 2OH⁻ → Ca(OH)₂','dihidróxido de calcio']},
{tema:'base', c:'uso', k:'Q', ctx:'En una guía de nomenclatura aparece el hidróxido de hierro de valencia +2 con dos nombres distintos.', q:'¿Cuál es la diferencia entre el nombre Tradicional y el Stock de Fe(OH)₂?', o:['El Tradicional usa el sufijo -oso; el Stock usa el número romano (II)','El Tradicional usa números romanos; el Stock usa sufijos','Son exactamente el mismo nombre','El Stock solo aplica a hidróxidos de metales de valencia fija']},
{tema:'base', c:'exp', k:'Q', ctx:'En el laboratorio hay dos bases fuertes: una de potasio y otra de bario, que se usa para detectar CO₂.', q:'Entre el hidróxido de potasio (KOH) y el hidróxido de bario (Ba(OH)₂), ¿cuál necesita 2 grupos OH⁻ por cada catión?', o:['El hidróxido de bario, porque el bario tiene valencia +2','El hidróxido de potasio, porque el potasio tiene valencia +2','Ambos necesitan 2 grupos OH⁻','Ninguno, los dos necesitan solo 1 grupo OH⁻']},
{tema:'base', c:'exp', k:'Q', ctx:'Algunos medicamentos para el estómago contienen compuestos de bismuto que se relacionan con su hidróxido.', q:'¿Cuál es la fórmula correcta del hidróxido de bismuto, sabiendo que el bismuto más común tiene valencia +3?', o:['Bi(OH)₃','BiOH','Bi(OH)₂','Bi₃OH']},

{tema:'ac-ox', c:'exp', k:'Q', ctx:'El gas de azufre que sale de los volcanes forma con el agua de lluvia un ácido que daña las plantas.', q:'El azufre tiene EO +4 en el oxoanión sulfito (SO₃²⁻). ¿Cuál es el nombre Tradicional del ácido oxácido correspondiente, H₂SO₃?', o:['Ácido sulfuroso','Ácido sulfúrico','Ácido sulfhídrico','Sulfito de hidrógeno']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'El ácido nítrico que se usa para fabricar fertilizantes contiene un oxoanión del nitrógeno.', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido nítrico (HNO₃)?', o:['Nitrato (NO₃⁻)','Nitrito (NO₂⁻)','Nitruro (N³⁻)','Amonio (NH₄⁺)']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'Los nitritos que se usan como conservantes en las salchichas se relacionan con un ácido del nitrógeno.', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido nitroso (HNO₂)?', o:['Nitrito (NO₂⁻)','Nitrato (NO₃⁻)','Nitruro (N³⁻)','Nitronio (NO₂⁺)']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Algunos fungicidas que se usan en cultivos de aguacate contienen compuestos del ácido fosforoso.', q:'El oxoanión fosfito (PO₃³⁻) tiene carga -3. ¿Cuántos hidrógenos debe tener su ácido oxácido correspondiente, H₃PO₃?', o:['3','2','1','4']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'El sabor ácido del agua con gas se debe al CO₂ que forma un ácido al disolverse.', q:'¿Cuál es el nombre Tradicional del ácido oxácido formado por hidrógeno y el oxoanión carbonato (CO₃²⁻)?', o:['Ácido carbónico','Ácido carbónico anhidro','Carbonato de hidrógeno','Ácido carboso']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'El agua bórica que se usa para lavar los ojos contiene un ácido muy débil del boro.', q:'¿Cuál es el nombre Tradicional del ácido oxácido formado por hidrógeno y el oxoanión borato (BO₃³⁻)?', o:['Ácido bórico','Ácido boroso','Borato de hidrógeno','Ácido bórico anhidro']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Los percloratos de los combustibles sólidos de cohetes se relacionan con un ácido del cloro muy fuerte.', q:'El cloro puede tener EO +1, +3, +5 o +7 en sus oxoácidos. ¿Cuál es el nombre del ácido con EO +7 (el máximo), HClO₄?', o:['Ácido perclórico','Ácido clórico','Ácido cloroso','Ácido hipocloroso']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'El cloro que se agrega al agua de las piscinas forma un ácido débil que desinfecta.', q:'El cloro puede tener EO +1, +3, +5 o +7 en sus oxoácidos. ¿Cuál es el nombre del ácido con EO +1 (el mínimo), HClO?', o:['Ácido hipocloroso','Ácido perclórico','Ácido clórico','Ácido cloroso']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Los cloratos que se usan en la cabeza de los fósforos se relacionan con un ácido del cloro.', q:'¿Cuál es el nombre del ácido con fórmula HClO₃, donde el cloro tiene EO +5?', o:['Ácido clórico','Ácido cloroso','Ácido perclórico','Ácido hipocloroso']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'El dióxido de cloro que se usa para potabilizar agua se relaciona con un ácido de cloro poco estable.', q:'¿Cuál es el nombre del ácido con fórmula HClO₂, donde el cloro tiene EO +3?', o:['Ácido cloroso','Ácido clórico','Ácido perclórico','Ácido hipocloroso']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'Un estudiante ordena los ácidos del cloro y debe escoger el prefijo para el de menor valencia.', q:'¿Qué prefijo se usa en nomenclatura Tradicional para nombrar el oxoácido con el estado de oxidación MÁS BAJO posible de un elemento con 4 valencias, como el Cl en HClO?', o:['hipo- (combinado con el sufijo -oso)','per- (combinado con el sufijo -ico)','-oso, sin prefijo adicional','-ico, sin prefijo adicional']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'Un estudiante ordena los ácidos del cloro y debe escoger el prefijo para el de mayor valencia.', q:'¿Qué prefijo se usa en nomenclatura Tradicional para nombrar el oxoácido con el estado de oxidación MÁS ALTO posible de un elemento con 4 valencias, como el Cl en HClO₄?', o:['per- (combinado con el sufijo -ico)','hipo- (combinado con el sufijo -oso)','-oso, sin prefijo adicional','-ico, sin prefijo adicional']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Un químico estudia los ácidos del bromo, que se comportan como los del cloro.', q:'El bromo se comporta igual que el cloro en sus 4 oxoácidos posibles. ¿Cuál es el nombre del ácido con fórmula HBrO₄ (EO +7, el máximo)?', o:['Ácido perbrómico','Ácido brómico','Ácido bromoso','Ácido hipobromoso']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Los bromatos, que se usaban para mejorar la harina, se relacionan con un ácido del bromo.', q:'¿Cuál es el nombre del ácido con fórmula HBrO₃, donde el bromo tiene EO +5?', o:['Ácido brómico','Ácido bromoso','Ácido perbrómico','Ácido hipobromoso']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Algunos desinfectantes de piscinas usan bromo, que forma un ácido débil parecido al del cloro.', q:'¿Cuál es el nombre del ácido con fórmula HBrO, donde el bromo tiene EO +1 (el mínimo)?', o:['Ácido hipobromoso','Ácido bromoso','Ácido brómico','Ácido perbrómico']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Un ácido del yodo con alto estado de oxidación se usa en el laboratorio para analizar azúcares.', q:'El yodo también tiene 4 oxoácidos posibles, igual que el cloro y el bromo. ¿Cuál es el nombre del ácido con fórmula HIO₄ (EO +7, el máximo)?', o:['Ácido peryódico','Ácido yódico','Ácido yodoso','Ácido hipoyodoso']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Los yodatos que se agregan a la sal de cocina se relacionan con un ácido del yodo.', q:'¿Cuál es el nombre del ácido con fórmula HIO₃, donde el yodo tiene EO +5?', o:['Ácido yódico','Ácido yodoso','Ácido peryódico','Ácido hipoyodoso']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'Un estudiante compara el ácido del agua de las piscinas con el de los combustibles de cohetes.', q:'Entre el ácido hipocloroso (HClO) y el ácido perclórico (HClO₄), ¿cuál tiene el cloro con mayor estado de oxidación?', o:['El ácido perclórico (EO +7)','El ácido hipocloroso (EO +7)','Ambos tienen el mismo EO','El ácido hipocloroso, porque "hipo-" indica el EO mayor']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Los baños para cromar piezas metálicas contienen un ácido del cromo muy tóxico.', q:'¿Cuál es el nombre Tradicional del ácido oxácido con fórmula H₂CrO₄, donde el cromo tiene EO +6?', o:['Ácido crómico','Ácido cromoso','Cromato de hidrógeno','Ácido dicrómico']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'El dicromato de potasio, de color naranja, se usaba en los alcoholímetros antiguos.', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido dicrómico (H₂Cr₂O₇)?', o:['Dicromato (Cr₂O₇²⁻)','Cromato (CrO₄²⁻)','Cromito (CrO₂⁻)','Cromuro (Cr³⁻)']},
{tema:'ac-ox', c:'uso', k:'CTS', ctx:'El permanganato de potasio, derivado del ácido permangánico, se usa en Colombia para desinfectar agua y tratar ciertas afecciones de la piel.', q:'¿Cuál es la fórmula del ácido permangánico, donde el manganeso tiene EO +7?', o:['HMnO₄','H₂MnO₄','HMnO₃','H₂MnO₃']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'Un químico estudia un ácido del manganeso que solo existe en solución.', q:'¿Cuál es el nombre Tradicional del ácido oxácido con fórmula H₂MnO₄, donde el manganeso tiene EO +6?', o:['Ácido mangánico','Ácido permangánico','Ácido manganoso','Manganato de hidrógeno']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'Algunos pesticidas antiguos contenían compuestos de arsénico que se relacionan con un ácido.', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido arsénico (H₃AsO₄)?', o:['Arseniato (AsO₄³⁻)','Arsenito (AsO₃³⁻)','Arseniuro (As³⁻)','Arsenato de hidrógeno']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'El arsénico que contamina el agua de algunas zonas mineras puede estar como un oxoanión de valencia +3.', q:'El arsénico tiene EO +3 en el oxoanión arsenito (AsO₃³⁻). ¿Cuál es el nombre Tradicional del ácido oxácido correspondiente, H₃AsO₃?', o:['Ácido arsenioso','Ácido arsénico','Ácido arsenhídrico','Arsenito de hidrógeno']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'El selenio, un micronutriente de la dieta, forma un ácido con su mayor valencia.', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido selénico (H₂SeO₄)?', o:['Selenato (SeO₄²⁻)','Selenito (SeO₃²⁻)','Seleniuro (Se²⁻)','Selenato de hidrógeno']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Algunos suplementos de selenio contienen un oxoanión de este elemento con valencia +4.', q:'El selenio tiene EO +4 en el oxoanión selenito (SeO₃²⁻). ¿Cuál es el nombre Tradicional del ácido oxácido correspondiente, H₂SeO₃?', o:['Ácido selenioso','Ácido selénico','Ácido selenhídrico','Selenito de hidrógeno']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'Un químico estudia un ácido del telurio con su mayor estado de oxidación.', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido telúrico (H₂TeO₄)?', o:['Telurato (TeO₄²⁻)','Telurito (TeO₃²⁻)','Telururo (Te²⁻)','Telurato de hidrógeno']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Un químico estudia un ácido del telurio con valencia +4.', q:'El telurio tiene EO +4 en el oxoanión telurito (TeO₃²⁻). ¿Cuál es el nombre Tradicional del ácido oxácido correspondiente, H₂TeO₃?', o:['Ácido teluroso','Ácido telúrico','Ácido telurhídrico','Telurito de hidrógeno']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Un ácido del fósforo con valencia muy baja se usa en el niquelado químico de piezas.', q:'El fósforo tiene EO +1 en el oxoanión hipofosfito (PO₂³⁻). ¿Cuál es el nombre Tradicional del ácido oxácido correspondiente, H₃PO₂?', o:['Ácido hipofosforoso','Ácido fosforoso','Ácido fosfórico','Ácido fosfhídrico']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Un estudiante debe nombrar el ácido del bromo con el estado de oxidación más bajo de la serie.', q:'El bromo, igual que el cloro, tiene hasta 4 estados de oxidación en sus oxoácidos. ¿Cuál es el nombre del ácido con fórmula HBrO (Br con EO +1, el más bajo)?', o:['Ácido hipobromoso','Ácido bromoso','Ácido brómico','Ácido perbrómico']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'La arena y el vidrio están formados por compuestos de silicio y oxígeno.', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido silícico (H₂SiO₃)?', o:['Silicato (SiO₃²⁻)','Silicito (SiO₂²⁻)','Siliciuro (Si⁴⁻)','Silicato de hidrógeno']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'Las gaseosas de cola y las baterías de los carros contienen dos ácidos oxácidos distintos.', q:'Entre el ácido sulfúrico (H₂SO₄) y el ácido fosfórico (H₃PO₄), ¿cuál necesita 3 hidrógenos en lugar de 2?', o:['El ácido fosfórico, porque el fosfato tiene carga -3','El ácido sulfúrico, porque el sulfato tiene carga -3','Ambos necesitan 3 hidrógenos','Ninguno, los dos necesitan 2 hidrógenos']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'El ácido nítrico que se usa para fabricar fertilizantes tiene un oxoanión de carga −1.', q:'¿Cuántos hidrógenos tiene la fórmula de un ácido oxácido cuyo oxoanión tiene carga -1, como el nitrato (NO₃⁻)?', o:['1','2','3','0']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Al destapar una gaseosa se libera el CO₂ que estaba formando un ácido en el agua.', q:'¿Cuál es la fórmula correcta del ácido carbónico, sabiendo que el carbonato (CO₃²⁻) tiene carga -2?', o:['H₂CO₃','HCO₃','H₃CO₃','HCO₂']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'Las gaseosas de cola contienen un ácido del fósforo que les da su sabor ácido.', q:'¿Cuál es la fórmula correcta del ácido fosfórico, sabiendo que el fosfato (PO₄³⁻) tiene carga -3?', o:['H₃PO₄','H₂PO₄','HPO₄','H₃PO₃']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'Una gaseosa destapada pierde sus burbujas y su sabor ácido después de unas horas.', q:'¿Por qué el ácido carbónico (H₂CO₃) es inestable y tiende a descomponerse en agua y dióxido de carbono?', o:['Porque es un ácido débil formado a partir de un óxido ácido gaseoso disuelto en agua','Porque el carbono siempre forma compuestos inestables en el agua','Porque todos los ácidos oxácidos se descomponen al disolverse en agua','Porque el ion carbonato tiene carga positiva y repele al hidrógeno']},
{tema:'ac-ox', c:'uso', k:'CTS', ctx:'El ácido fosfórico (H₃PO₄) se usa como acidulante en bebidas gaseosas tipo cola producidas en Colombia, aportando el sabor ácido característico.', q:'¿Cuál es el oxoanión que forma parte de la fórmula de este ácido usado en bebidas?', o:['Fosfato (PO₄³⁻)','Fosfito (PO₃³⁻)','Fosfuro (P³⁻)','Fosfonio (PH₄⁺)']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Algunos medicamentos veterinarios contra las convulsiones contienen una sal de bromo y potasio.',
 q:'¿Cuál es el nombre Tradicional correcto de la sal binaria con fórmula KBr?',
 o:['Bromuro de potasio','Bromato de potasio','Bromuro de potasio (II)','Potasio brómico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Para evitar que las vías sin pavimentar levanten polvo, se riegan con una sal de calcio que absorbe humedad.',
 q:'El calcio tiene valencia fija +2. ¿Cuál es la fórmula correcta del cloruro de calcio?',
 o:['CaCl₂','CaCl','Ca₂Cl','CaCl₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'En el tratamiento de aguas residuales se usa una sal de hierro de color verde claro.',
 q:'¿Cuál es el nombre Tradicional correcto de FeCl₂, sabiendo que aquí el hierro tiene valencia +2 (la menor de las dos)?',
 o:['Cloruro ferroso','Cloruro férrico','Cloruro de hierro (III)','Óxido ferroso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Las plantas potabilizadoras usan una sal de hierro de color café para aglomerar las partículas del agua.',
 q:'¿Cuál es el nombre Stock correcto de FeCl₃?',
 o:['Cloruro de hierro (III)','Cloruro de hierro (II)','Tricloruro de hierro (II)','Cloruro férrico (II)']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un químico estudia las dos sales que forma el cobre con el cloro según su valencia.',
 q:'El cobre forma CuCl (con Cu⁺) y CuCl₂ (con Cu²⁺). ¿Cuál es el nombre Tradicional de CuCl?',
 o:['Cloruro cuproso','Cloruro cúprico','Cloruro de cobre (II)','Dicloruro de cobre']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un compuesto líquido de estaño y cloro se usa para recubrir vidrios con una capa conductora.',
 q:'¿Cuál es el nombre Tradicional de SnCl₄, sabiendo que el estaño tiene aquí su valencia mayor (+4)?',
 o:['Cloruro estánnico','Cloruro estannoso','Cloruro de estaño (II)','Tetracloruro de estañoso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un precipitado blanco de plomo y cloro aparece al mezclar soluciones de plomo y de sal de cocina.',
 q:'¿Cuál es el nombre Tradicional de PbCl₂, sabiendo que el plomo tiene aquí su valencia menor (+2)?',
 o:['Cloruro plumboso','Cloruro plúmbico','Cloruro de plomo (IV)','Dicloruro plúmbico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'En el laboratorio, al agregar nitrato de plata a agua salada se forma un precipitado blanco.',
 q:'La plata tiene valencia fija +1. ¿Cuál es el nombre correcto de AgCl?',
 o:['Cloruro de plata','Cloruro argéntico','Cloruro de plata (I)','Clorato de plata']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Los antitranspirantes contienen sales de aluminio, y una de ellas se forma con el cloro.',
 q:'El aluminio tiene valencia fija +3. ¿Cuál es la fórmula correcta del cloruro de aluminio?',
 o:['AlCl₃','AlCl','Al₃Cl','AlCl₂']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'El agua de mar contiene, además de cloruro de sodio, sales de magnesio con bromo.',
 q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de MgBr₂?',
 o:['Dibromuro de magnesio','Bromuro de magnesio (II)','Bromuro magnésico','Dibromato de magnesio']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'En las curtiembres se usa una sal de sodio y azufre para quitar el pelo de las pieles.',
 q:'¿Cuál es el nombre Tradicional correcto de Na₂S?',
 o:['Sulfuro de sodio','Sulfato de sodio','Disulfuro de sodio','Sulfuro sódico (II)']},
{tema:'sal-bin', c:'uso', k:'CTS',
 ctx:'En la industria del vidrio y en la fundición de metales en Colombia se usa un mineral compuesto por calcio y flúor, conocido como fluorita.',
 q:'¿Cuál es la fórmula correcta de la fluorita (fluoruro de calcio)?',
 o:['CaF₂','CaF','Ca₂F','CaF₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un compuesto de aluminio y bromo se usa como catalizador en la industria química.',
 q:'¿Cuál es el nombre Tradicional correcto de AlBr₃?',
 o:['Bromuro de aluminio','Bromuro alumínico','Bromuro de aluminio (III)','Tribromato de aluminio']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'El bario de los fuegos artificiales verdes se agrega como una sal con el cloro.',
 q:'El bario tiene valencia fija +2. ¿Cuál es la fórmula correcta del cloruro de bario?',
 o:['BaCl₂','BaCl','Ba₂Cl','BaCl₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un químico estudia sales de cobalto que cambian de color con la humedad.',
 q:'¿Cuál es el nombre Tradicional de CoBr₂, sabiendo que el cobalto tiene aquí su valencia menor (+2)?',
 o:['Bromuro cobaltoso','Bromuro cobáltico','Bromuro de cobalto (III)','Dibromuro cobáltico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'En una guía de nomenclatura se comparan las dos sales de cobalto y bromo según su valencia.',
 q:'¿Cuál es el nombre Tradicional de CoBr₃, sabiendo que el cobalto tiene aquí su valencia mayor (+3)?',
 o:['Bromuro cobáltico','Bromuro cobaltoso','Bromuro de cobalto (II)','Tribromuro cobaltoso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Algunos fundentes para soldar contienen una sal de zinc y cloro.',
 q:'El zinc tiene valencia fija +2. ¿Cuál es el nombre correcto de ZnCl₂?',
 o:['Cloruro de zinc','Cloruro de zinc (II)','Cloruro cínquico','Dicloruro zíncico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'La pirrotina, un mineral que acompaña al oro en algunas minas, contiene un sulfuro de hierro.',
 q:'¿Cuál es el nombre Tradicional de FeS, sabiendo que el hierro tiene aquí su valencia menor (+2)?',
 o:['Sulfuro ferroso','Sulfuro férrico','Sulfuro de hierro (III)','Disulfuro ferroso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un químico estudia los sulfuros que forma el hierro con sus dos valencias.',
 q:'¿Cuál es el nombre Tradicional de Fe₂S₃, sabiendo que el hierro tiene aquí su valencia mayor (+3)?',
 o:['Sulfuro férrico','Sulfuro ferroso','Sulfuro de hierro (II)','Trisulfuro ferroso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'La covelina, un mineral azul de algunas minas de cobre, es un sulfuro de este metal.',
 q:'¿Cuál es el nombre Tradicional correcto de CuS, sabiendo que el cobre tiene aquí su valencia mayor (+2)?',
 o:['Sulfuro cúprico','Sulfuro cuproso','Sulfuro de cobre (I)','Disulfuro cúprico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'El manganeso de las pilas forma una sal rosada con el cloro.',
 q:'¿Cuál es el nombre Tradicional de MnCl₂, sabiendo que el manganeso tiene aquí su valencia menor habitual (+2)?',
 o:['Cloruro manganoso','Cloruro mangánico','Cloruro de manganeso (IV)','Dicloruro mangánico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'En las curtiembres se usan sales de cromo para curtir el cuero.',
 q:'¿Cuál es el nombre Tradicional de CrCl₃, sabiendo que el cromo tiene aquí su valencia mayor en sales (+3)?',
 o:['Cloruro crómico','Cloruro cromoso','Cloruro de cromo (II)','Tricloruro cromoso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Antiguamente se usaba una sal de mercurio muy tóxica como desinfectante.',
 q:'¿Cuál es el nombre Tradicional de HgCl₂, sabiendo que el mercurio tiene aquí su valencia mayor (+2, "mercúrico")?',
 o:['Cloruro mercúrico','Cloruro mercurioso','Cloruro de mercurio (I)','Dicloruro mercurioso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'En la refinación del oro de las minas de Marmato se forma una sal de oro y cloro.',
 q:'¿Cuál es el nombre Tradicional de AuCl₃, sabiendo que el oro tiene aquí su valencia mayor (+3)?',
 o:['Cloruro áurico','Cloruro auroso','Cloruro de oro (I)','Tricloruro auroso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'El pigmento blanco de las pinturas se obtiene a partir de una sal líquida de titanio y cloro.',
 q:'¿Cuál es el nombre Tradicional correcto de TiCl₄?',
 o:['Cloruro titánico','Cloruro titanoso','Cloruro de titanio (II)','Tetracloruro titanoso']},
{tema:'sal-bin', c:'uso', k:'Q', ctx:'La sal de cocina, un medicamento veterinario y una sal de calcio aparecen en una tabla de compuestos.',
 q:'¿Qué tienen en común el cloruro de sodio, el bromuro de potasio y el yoduro de calcio, aunque sus fórmulas sean distintas?',
 o:['Los tres son sales binarias formadas por un metal y un halógeno','Los tres contienen oxígeno en su fórmula química','Los tres son ácidos hidrácidos disueltos en agua','Los tres son óxidos básicos formados con metales']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un químico prepara un sulfuro de magnesio calentando los dos elementos juntos.',
 q:'¿Cuál es la fórmula correcta del sulfuro de magnesio, sabiendo que el magnesio tiene valencia fija +2 y el azufre forma el anión S²⁻?',
 o:['MgS','MgS₂','Mg₂S','MgS₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un compuesto de aluminio y yodo se usa como reactivo en química orgánica.',
 q:'¿Cuál es la fórmula correcta del yoduro de aluminio, sabiendo que el aluminio tiene valencia fija +3?',
 o:['AlI₃','AlI','Al₃I','AlI₂']},
{tema:'sal-bin', c:'uso', k:'CTS',
 ctx:'Las pastas dentales usan compuestos de flúor para prevenir la caries; uno de los más comunes combina flúor con sodio.',
 q:'¿Cuál es el nombre correcto del compuesto de flúor y sodio usado en pastas dentales?',
 o:['Fluoruro de sodio','Fluorato de sodio','Flúor sódico','Fluoruro de sodio (I)']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Algunas cremas dentales contienen fluoruro de estaño para proteger el esmalte.',
 q:'¿Cuál es el nombre Tradicional correcto de SnF₂, sabiendo que el estaño tiene aquí su valencia menor (+2)?',
 o:['Fluoruro estañoso','Fluoruro estáñico','Fluoruro de estaño (IV)','Difluoruro estáñico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un químico estudia una sal de níquel con su valencia más alta.',
 q:'¿Cuál es el nombre Tradicional correcto de NiCl₃, sabiendo que el níquel tiene aquí su valencia mayor (+3)?',
 o:['Cloruro niquélico','Cloruro niqueloso','Cloruro de níquel (II)','Tricloruro niqueloso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un compuesto de platino y cloro es el punto de partida de algunos medicamentos contra el cáncer.',
 q:'¿Cuál es el nombre Tradicional correcto de PtCl₂, sabiendo que el platino tiene aquí su valencia menor (+2)?',
 o:['Cloruro platinoso','Cloruro platínico','Cloruro de platino (IV)','Dicloruro platínico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'El estroncio que da el color rojo a los fuegos artificiales se agrega como una sal con el bromo.',
 q:'¿Cuál es la fórmula correcta del bromuro de estroncio, sabiendo que el estroncio tiene valencia fija +2?',
 o:['SrBr₂','SrBr','Sr₂Br','SrBr₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'En la industria nuclear se usa una sal de berilio y flúor.',
 q:'¿Cuál es la fórmula correcta del fluoruro de berilio, sabiendo que el berilio tiene valencia fija +2?',
 o:['BeF₂','BeF','Be₂F','BeF₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'El calomel, que se usaba en electrodos de referencia, es una sal de mercurio y cloro.',
 q:'¿Cuál es el nombre Tradicional correcto de Hg₂Cl₂, el catión mercurioso (dinuclear)?',
 o:['Cloruro mercurioso','Cloruro mercúrico','Cloruro de mercurio (II)','Monocloruro mercúrico']},
{tema:'sal-bin', c:'uso', k:'Q', ctx:'En el laboratorio hay dos frascos rotulados «cloruro de hierro»: uno verde y otro café.',
 q:'¿Por qué el cloruro de hierro (II) y el cloruro de hierro (III) son dos compuestos distintos, aunque ambos sean "cloruro de hierro"?',
 o:['Porque el hierro tiene dos valencias posibles (+2 y +3), cada una forma una sal distinta','Porque uno de los dos tiene oxígeno en la fórmula y el otro no','Porque uno es una sal binaria y el otro es un óxido de hierro','Porque el cloro cambia su carga de −1 a −2 entre los dos compuestos']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un químico estudia sales de oro con yodo en la refinación de este metal.',
 q:'¿Cuál es el nombre Tradicional correcto de AuI₃?',
 o:['Yoduro áurico','Yoduro auroso','Yoduro de oro (I)','Triyoduro auroso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un químico prepara un sulfuro de cesio para estudiar sus propiedades.',
 q:'¿Cuál es la fórmula correcta del sulfuro de cesio, sabiendo que el cesio tiene valencia fija +1 y el anión es S²⁻?',
 o:['Cs₂S','CsS','CsS₂','Cs₂S₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un compuesto de cromo de color azul se oxida rápido con el aire.',
 q:'¿Cuál es el nombre Tradicional correcto de CrCl₂, sabiendo que el cromo tiene aquí su valencia menor (+2)?',
 o:['Cloruro cromoso','Cloruro crómico','Cloruro de cromo (III)','Dicloruro crómico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'Un químico estudia la sal de plomo y cloro con la valencia mayor del plomo.',
 q:'¿Cuál es el nombre Tradicional correcto de PbCl₄, sabiendo que el plomo tiene aquí su valencia mayor (+4)?',
 o:['Cloruro plúmbico','Cloruro plumboso','Cloruro de plomo (II)','Tetracloruro plumboso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'El niquelado de piezas metálicas se hace con soluciones de sales de níquel.',
 q:'¿Cuál es el nombre Tradicional correcto de NiCl₂, sabiendo que el níquel tiene aquí su valencia menor (+2)?',
 o:['Cloruro niqueloso','Cloruro niquélico','Cloruro de níquel (III)','Dicloruro niquélico']},

{tema:'sal-ox', c:'exp', k:'Q', ctx:'El salitre que se usa en abonos y en la pólvora es una sal oxigenada de potasio.',
 q:'¿Cuál es el nombre Tradicional correcto de la sal oxigenada con fórmula KNO₃?',
 o:['Nitrato de potasio','Nitrito de potasio','Nitrato de potasio (I)','Dinitrato de potasio']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'En la planta de tratamiento de agua de Bogotá se usa una sal de aluminio para aglomerar el barro.',
 q:'El aluminio tiene valencia fija +3. ¿Cuál es la fórmula correcta del sulfato de aluminio, sabiendo que el sulfato tiene carga −2?',
 o:['Al₂(SO₄)₃','AlSO₄','Al(SO₄)₃','Al₃(SO₄)₂']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Los suplementos de hierro para la anemia contienen una sal de hierro con el anión sulfato.',
 q:'¿Cuál es el nombre Tradicional de FeSO₄, sabiendo que el hierro tiene aquí su valencia menor (+2)?',
 o:['Sulfato ferroso','Sulfato férrico','Sulfato de hierro (III)','Disulfato ferroso']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'En el tratamiento de aguas se usa una sal de hierro de color amarillo café.',
 q:'¿Cuál es el nombre Tradicional de Fe₂(SO₄)₃, sabiendo que el hierro tiene aquí su valencia mayor (+3)?',
 o:['Sulfato férrico','Sulfato ferroso','Sulfato de hierro (II)','Trisulfato ferroso']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'El caldo bordelés que se usa contra los hongos de los cultivos contiene una sal azul de cobre.',
 q:'¿Cuál es el nombre Tradicional correcto de CuSO₄, sabiendo que el cobre tiene aquí su valencia mayor (+2)?',
 o:['Sulfato cúprico','Sulfato cuproso','Sulfato de cobre (I)','Disulfato cúprico']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Una sal azul de cobre se usa en algunos tintes y en la industria textil.',
 q:'¿Cuál es el anión (oxoanión) presente en el nitrato cúprico, Cu(NO₃)₂?',
 o:['Nitrato, NO₃⁻','Nitrito, NO₂⁻','Nitruro, N³⁻','Nitrato, NO₃²⁻']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'El niquelado de piezas se hace con una sal verde de níquel disuelta en agua.',
 q:'¿Cuál es el nombre Tradicional de Ni(NO₃)₂, sabiendo que el níquel tiene aquí su valencia menor (+2)?',
 o:['Nitrato niqueloso','Nitrato niquélico','Nitrato de níquel (III)','Dinitrato niquélico']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Algunos suplementos para el ganado y los cultivos contienen una sal de zinc y azufre.',
 q:'El zinc tiene valencia fija +2. ¿Cuál es el nombre correcto de ZnSO₄?',
 o:['Sulfato de zinc','Sulfato de zinc (II)','Sulfato cínquico','Disulfato zíncico']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Una sal de plomo muy soluble se usaba antiguamente en fósforos y explosivos.',
 q:'¿Cuál es el nombre Tradicional de Pb(NO₃)₂, sabiendo que el plomo tiene aquí su valencia menor (+2)?',
 o:['Nitrato plumboso','Nitrato plúmbico','Nitrato de plomo (IV)','Dinitrato plúmbico']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Una sal de hierro se usa como mordiente para fijar colores en telas.',
 q:'¿Cuál es el nombre Tradicional de Fe(NO₃)₃, sabiendo que el hierro tiene aquí su valencia mayor (+3)?',
 o:['Nitrato férrico','Nitrato ferroso','Nitrato de hierro (II)','Trinitrato ferroso']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Una sal de estaño se usa en el estañado de piezas metálicas.',
 q:'¿Cuál es el nombre Tradicional de SnSO₄, sabiendo que el estaño tiene aquí su valencia menor (+2)?',
 o:['Sulfato estannoso','Sulfato estánnico','Sulfato de estaño (IV)','Disulfato estánnico']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'El permanganato de potasio, de color violeta, se usa para desinfectar agua y heridas.',
 q:'¿Cuál es el oxoanión presente en el permanganato de potasio (KMnO₄), y qué estado de oxidación tiene el manganeso en él?',
 o:['Permanganato, MnO₄⁻, con Mn en +7','Manganato, MnO₄²⁻, con Mn en +6','Permanganato, MnO₄⁻, con Mn en +6','Manganito, MnO₃⁻, con Mn en +4']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Una sal amarilla de potasio y cromo se usa en el laboratorio como indicador.',
 q:'¿Cuál es el nombre correcto del oxoanión CrO₄²⁻ presente en el cromato de potasio (K₂CrO₄)?',
 o:['Cromato','Dicromato','Cromito','Cromuro']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Una sal naranja de potasio y cromo se usaba en los alcoholímetros de la policía.',
 q:'¿Cuál es el nombre correcto del oxoanión Cr₂O₇²⁻ presente en el dicromato de potasio (K₂Cr₂O₇)?',
 o:['Dicromato','Cromato','Dicromito','Percromato']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Los percloratos que se usan en fuegos artificiales contienen un oxoanión del cloro.',
 q:'El cloro puede formar 4 oxoaniones distintos según su estado de oxidación. ¿Cuál es el nombre del oxoanión ClO₄⁻, con el cloro en su estado de oxidación más alto (+7)?',
 o:['Perclorato','Clorato','Clorito','Hipoclorito']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'El blanqueador que se usa en casa contiene un oxoanión del cloro.',
 q:'¿Cuál es el nombre del oxoanión ClO⁻, con el cloro en su estado de oxidación más bajo (+1)?',
 o:['Hipoclorito','Clorito','Clorato','Perclorato']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'La cabeza de los fósforos contiene una sal de potasio que libera oxígeno al calentarse.',
 q:'¿Cuál es el nombre Tradicional correcto de KClO₃?',
 o:['Clorato de potasio','Clorito de potasio','Hipoclorito de potasio','Perclorato de potasio']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Algunos tratamientos de agua usan una sal de sodio con un oxoanión del cloro.',
 q:'¿Cuál es el nombre Tradicional correcto de NaClO₂?',
 o:['Clorito de sodio','Clorato de sodio','Hipoclorito de sodio','Perclorato de sodio']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Los huesos y los dientes están formados principalmente por una sal de calcio y fósforo.',
 q:'¿Cuál es la fórmula correcta del fosfato de calcio, sabiendo que el calcio tiene carga +2 y el fosfato (PO₄³⁻) carga −3?',
 o:['Ca₃(PO₄)₂','CaPO₄','Ca₂(PO₄)₃','Ca(PO₄)₂']},
{tema:'sal-ox', c:'uso', k:'Q', ctx:'Los fertilizantes fosfatados se fabrican a partir de la roca fosfórica, rica en una sal de calcio.',
 q:'¿Por qué el fosfato de calcio, Ca₃(PO₄)₂, necesita 3 cationes calcio y 2 aniones fosfato en su fórmula?',
 o:['Porque 3(+2) + 2(−3) = 0, así la carga total se neutraliza','Porque el calcio siempre aparece 3 veces en cualquier sal oxigenada','Porque el fosfato tiene carga −2, igual que el calcio','Porque son proporciones arbitrarias sin relación con las cargas']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Algunos alimentos y vinos se conservan con una sal de sodio que libera un gas de azufre.',
 q:'¿Cuál es el nombre Tradicional correcto de Na₂SO₃ (SO₃²⁻ = sulfito)?',
 o:['Sulfito de sodio','Sulfato de sodio','Bisulfito de sodio','Sulfuro de sodio']},
{tema:'sal-ox', c:'uso', k:'Q', ctx:'En una fábrica de papel se usan dos sales de sodio con azufre: una para blanquear y otra en el proceso de pulpa.',
 q:'¿Cuál es la diferencia química entre el sulfato de sodio (Na₂SO₄) y el sulfito de sodio (Na₂SO₃)?',
 o:['El azufre tiene distinto estado de oxidación y el oxoanión tiene un oxígeno menos en el sulfito','Son dos nombres distintos para el mismo compuesto, según la nomenclatura','El sulfito tiene un hidrógeno adicional en su fórmula que el sulfato no tiene','El sulfato es una sal binaria y el sulfito es una sal oxigenada del azufre']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Algunos pigmentos violetas para cerámica contienen fosfatos de cobalto.',
 q:'¿Cuál es el nombre Tradicional correcto de CoPO₄, sabiendo que el cobalto tiene aquí su valencia mayor (+3)?',
 o:['Fosfato cobáltico','Fosfato cobaltoso','Fosfato de cobalto (II)','Difosfato cobaltoso']},
{tema:'sal-ox', c:'uso', k:'CTS',
 ctx:'El yeso usado en construcción y en moldes de yesería artesanal en Colombia es una forma hidratada de un compuesto de calcio y azufre con oxígeno.',
 q:'¿Cuál es el nombre correcto de ese compuesto (CaSO₄), antes de hidratarse?',
 o:['Sulfato de calcio','Sulfito de calcio','Sulfuro de calcio','Bisulfato de calcio']},
{tema:'sal-ox', c:'uso', k:'CTS',
 ctx:'Algunos fertilizantes usados en cultivos colombianos de flores y hortalizas aportan nitrógeno en forma de una sal de calcio con el oxoanión nitrato.',
 q:'¿Cuál es el nombre correcto de ese fertilizante, Ca(NO₃)₂?',
 o:['Nitrato de calcio','Nitrito de calcio','Nitruro de calcio','Dinitrato de calcio (II)']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'La tiza que usan los escaladores para no resbalar es una sal de magnesio con carbonato.',
 q:'¿Cuál es la fórmula correcta del carbonato de magnesio, sabiendo que el magnesio tiene carga +2 y el carbonato (CO₃²⁻) carga −2?',
 o:['MgCO₃','Mg(CO₃)₂','Mg₂CO₃','MgCO₂']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Una sal de manganeso se usa en algunos fertilizantes como fuente de este micronutriente.',
 q:'¿Cuál es el nombre Tradicional correcto de Mn(NO₃)₂, sabiendo que el manganeso tiene aquí su valencia menor (+2)?',
 o:['Nitrato manganoso','Nitrato mangánico','Nitrato de manganeso (VII)','Dinitrato mangánico']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'En las curtiembres del Tolima y de San Benito, en Bogotá, se usa una sal de cromo para curtir pieles.',
 q:'¿Cuál es el nombre Tradicional correcto de Cr₂(SO₄)₃, sabiendo que el cromo tiene aquí su valencia +3?',
 o:['Sulfato crómico','Sulfato cromoso','Sulfato de cromo (II)','Trisulfato cromoso']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Algunos antiácidos y cementos dentales contienen una sal de aluminio con fosfato.',
 q:'¿Cuál es la fórmula correcta del fosfato de aluminio, sabiendo que el aluminio tiene carga +3 y el fosfato carga −3?',
 o:['AlPO₄','Al₃PO₄','Al(PO₄)₃','Al₃(PO₄)₃']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Algunos herbicidas y defoliantes antiguos contenían una sal de calcio con un oxoanión del cloro.',
 q:'¿Cuál es el nombre Tradicional correcto de Ca(ClO₃)₂?',
 o:['Clorato de calcio','Clorito de calcio','Hipoclorito de calcio','Perclorato de calcio']},
{tema:'sal-ox', c:'uso', k:'Q', ctx:'En la bodega de la planta de tratamiento de agua hay bultos rotulados «sulfato de aluminio».',
 q:'¿Qué parte del nombre "sulfato de aluminio" indica el anión, y cuál indica el catión?',
 o:['"Sulfato" es el anión (oxoanión) y "de aluminio" indica el catión','"Sulfato" es el catión y "de aluminio" el anión','Ambas partes indican el mismo ion repetido','"Sulfato" indica el número de oxígenos solamente']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'En el laboratorio se usa una sal de plata que deja manchas negras en la piel al contacto con la luz.',
 q:'¿Cuál es el nombre Tradicional correcto de AgNO₃, sabiendo que la plata tiene valencia fija +1?',
 o:['Nitrato de plata','Nitrito de plata','Nitrato de plata (I)','Dinitrato de plata']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Las baterías de los celulares se fabrican a partir de una sal de litio que se extrae de salares.',
 q:'¿Cuál es la fórmula correcta del carbonato de litio, sabiendo que el litio tiene valencia fija +1 y el carbonato carga −2?',
 o:['Li₂CO₃','LiCO₃','LiCO₂','Li(CO₃)₂']},
{tema:'sal-ox', c:'uso', k:'CTS',
 ctx:'El carbonato de litio se usa en Colombia, a través del sistema de salud (EPS), como medicamento estabilizador del ánimo en el tratamiento del trastorno bipolar.',
 q:'¿Cuál es la fórmula correcta del carbonato de litio?',
 o:['Li₂CO₃','LiCO₃','Li(CO₃)₂','LiCO₂']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Algunos conservantes de alimentos y vinos contienen una sal de potasio que libera un gas de azufre.',
 q:'¿Cuál es el nombre Tradicional correcto de K₂SO₃ (SO₃²⁻ = sulfito)?',
 o:['Sulfito de potasio','Sulfato de potasio','Bisulfito de potasio','Sulfuro de potasio']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Algunas pastillas para desinfectar piscinas contienen una sal de litio con un oxoanión del cloro.',
 q:'¿Cuál es el nombre Tradicional correcto de LiClO (ClO⁻ = hipoclorito)?',
 o:['Hipoclorito de litio','Clorito de litio','Clorato de litio','Perclorato de litio']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Un químico prepara una sal de rubidio con el anión sulfato para estudiar sus cristales.',
 q:'¿Cuál es la fórmula correcta del sulfato de rubidio, sabiendo que el rubidio tiene valencia fija +1?',
 o:['Rb₂SO₄','RbSO₄','Rb(SO₄)₂','Rb₂SO₃']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Algunos suplementos minerales contienen una sal de magnesio con el anión fosfato.',
 q:'¿Cuál es el nombre Tradicional correcto de Mg₃(PO₄)₂?',
 o:['Fosfato de magnesio','Fosfito de magnesio','Fosfato de magnesio (II)','Difosfato de magnesio']},
{tema:'sal-ox', c:'uso', k:'CTS',
 ctx:'El yeso agrícola (sulfato de calcio) se usa en fincas de la Sabana de Bogotá para mejorar suelos compactados antes de sembrar.',
 q:'¿Cuál es la fórmula correcta del yeso agrícola?',
 o:['CaSO₄','CaSO₃','CaS','Ca(SO₄)₂']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'El color rojo intenso de las bengalas se debe a una sal de estroncio.',
 q:'¿Cuál es el nombre Tradicional correcto de Sr(NO₃)₂?',
 o:['Nitrato de estroncio','Nitrito de estroncio','Nitrato de estroncio (II)','Dinitrato de estroncio']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Algunas cremas para la piel contienen una sal de zinc que se encuentra también como mineral.',
 q:'¿Cuál es la fórmula correcta del carbonato de zinc, sabiendo que el zinc tiene valencia fija +2 y el carbonato carga −2?',
 o:['ZnCO₃','Zn(CO₃)₂','Zn₂CO₃','ZnCO₂']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Un químico obtiene un precipitado amarillo de plata al mezclar nitrato de plata con soda.',
 q:'¿Cuál es el nombre Tradicional correcto de Ag₂CO₃, sabiendo que la plata tiene valencia fija +1?',
 o:['Carbonato de plata','Carbonito de plata','Carbonato de plata (I)','Dicarbonato de plata']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'Algunas celdas solares antiguas usaban compuestos de cadmio, entre ellos su sulfato.',
 q:'¿Cuál es la fórmula correcta del sulfato de cadmio, sabiendo que el cadmio tiene valencia fija +2?',
 o:['CdSO₄','CdSO₃','Cd(SO₄)₂','Cd₂SO₄']},

{tema:'sal-ac', c:'exp', k:'Q', ctx:'Algunos extintores de incendios contienen una sal ácida de potasio que libera CO₂.',
 q:'¿Cuál es el nombre Stock correcto de KHCO₃?',
 o:['Hidrogenocarbonato de potasio','Bicarbonato de potasio (Stock)','Hidrogenocarbonato de potasio (II)','Dicarbonato de potasio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'En la industria de alimentos se usa una sal ácida de sodio como antioxidante y blanqueador.',
 q:'¿Cuál es el nombre Tradicional correcto de NaHSO₃ (el sulfito, SO₃²⁻, retuvo un H⁺)?',
 o:['Bisulfito de sodio','Bisulfato de sodio','Hidrogenosulfato de sodio','Disulfito de sodio']},
{tema:'sal-ac', c:'uso', k:'Q', ctx:'En el laboratorio hay dos frascos de sales ácidas de sodio con azufre y nombres muy parecidos.',
 q:'¿En qué se diferencian el bisulfito de sodio (NaHSO₃) y el bisulfato de sodio (NaHSO₄)?',
 o:['El bisulfito proviene del sulfito (SO₃²⁻) y el bisulfato del sulfato (SO₄²⁻), oxoaniones distintos','Son dos nombres válidos para el mismo compuesto, según la nomenclatura que se use','El bisulfato tiene un hidrógeno menos que el bisulfito y por eso cambia el nombre','El bisulfito es una sal binaria y el bisulfato es una sal ácida con oxígeno']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Algunas galletas tradicionales se esponjan con una sal ácida de amonio que se descompone al hornear.',
 q:'¿Cuál es el nombre Stock correcto de NH₄HCO₃, sabiendo que el amonio (NH₄⁺) actúa como catión de carga fija +1?',
 o:['Hidrogenocarbonato de amonio','Bicarbonato de amonio (Stock)','Hidrogenocarbonato de amonio (I)','Dicarbonato de amonio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'El agua dura de algunas regiones contiene una sal ácida de calcio que forma sarro al hervirse.',
 q:'¿Cuál es el nombre Tradicional correcto de Ca(HCO₃)₂, sabiendo que el calcio (carga +2) necesita 2 aniones HCO₃⁻ (carga −1 cada uno)?',
 o:['Bicarbonato de calcio','Carbonato de calcio','Bicarbonato de calcio (II)','Dicarbonato de calcio']},
{tema:'sal-ac', c:'uso', k:'CTS',
 ctx:'La dureza temporal del agua en algunas regiones de Colombia se debe a la presencia disuelta de una sal ácida de calcio.',
 q:'¿Cuál es la fórmula correcta de esa sal (bicarbonato de calcio)?',
 o:['Ca(HCO₃)₂','CaHCO₃','Ca₂(HCO₃)','Ca(HCO₃)']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'El agua que pasa por rocas calizas con magnesio contiene una sal ácida de este metal.',
 q:'¿Cuál es el nombre Tradicional correcto de Mg(HCO₃)₂?',
 o:['Bicarbonato de magnesio','Carbonato de magnesio','Bicarbonato de magnesio (II)','Dicarbonato de magnesio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'En la fabricación de papel se usa una sal ácida de calcio con azufre para disolver la lignina.',
 q:'¿Cuál es el nombre Stock correcto de Ca(HSO₃)₂?',
 o:['Hidrogenosulfito de calcio','Bisulfito de calcio (Stock)','Hidrogenosulfato de calcio','Dihidrogenosulfito de calcio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Algunos quesos procesados contienen una sal de sodio y fosfato como emulsionante.',
 q:'El fosfato (PO₄³⁻) puede retener uno o dos H⁺. ¿Cuál es el nombre Tradicional de Na₂HPO₄, donde retuvo solo 1 H⁺ (queda HPO₄²⁻)?',
 o:['Fosfato monoácido de sodio','Fosfato diácido de sodio','Fosfato de sodio','Bifosfato ácido de sodio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Las bebidas para deportistas y algunos polvos de hornear contienen una sal de sodio con fosfato.',
 q:'¿Cuál es el nombre Tradicional de NaH₂PO₄, donde el fosfato retuvo 2 H⁺ (queda H₂PO₄⁻)?',
 o:['Fosfato diácido de sodio','Fosfato monoácido de sodio','Fosfato de sodio','Trifosfato ácido de sodio']},
{tema:'sal-ac', c:'uso', k:'Q', ctx:'En la etiqueta de un fertilizante aparecen dos fosfatos con nombres Stock muy parecidos.',
 q:'¿Cómo se distingue, en el nombre Stock, si el fosfato retuvo 1 o 2 hidrógenos?',
 o:['Con el prefijo "hidrogeno-" (1 H) o "dihidrogeno-" (2 H) antes de "fosfato"','Con el sufijo "-oso" (1 H) o "-ico" (2 H)','No se puede distinguir, ambos se llaman igual','Con un número romano entre paréntesis después del fosfato']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Los fertilizantes solubles para riego por goteo contienen una sal de potasio con fosfato.',
 q:'¿Cuál es el nombre Stock correcto de KH₂PO₄?',
 o:['Dihidrogenofosfato de potasio','Hidrogenofosfato de potasio','Fosfato diácido de potasio (Stock)','Trihidrogenofosfato de potasio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico prepara una sal ácida de litio al burbujear CO₂ en una solución de este metal.',
 q:'¿Cuál es el nombre Tradicional correcto de LiHCO₃, sabiendo que el litio tiene valencia fija +1?',
 o:['Bicarbonato de litio','Carbonato de litio','Bicarbonato de litio (II)','Dicarbonato de litio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico estudia una sal ácida de litio y azufre en un laboratorio de baterías.',
 q:'¿Cuál es el nombre Stock correcto de LiHSO₄?',
 o:['Hidrogenosulfato de litio','Bisulfato de litio (Stock)','Hidrogenosulfito de litio','Dihidrogenosulfato de litio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'En las curtiembres se usa una sal ácida de sodio y azufre para tratar las pieles.',
 q:'El ácido sulfhídrico (H₂S) puede ceder solo 1 de sus 2 H⁺, dejando HS⁻. ¿Cuál es el nombre Tradicional de NaHS?',
 o:['Bisulfuro de sodio','Bisulfato de sodio','Sulfuro de sodio','Hidrogenosulfato de sodio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico prepara una sal ácida de potasio y azufre para un análisis de laboratorio.',
 q:'¿Cuál es el nombre Stock correcto de KHS?',
 o:['Hidrogenosulfuro de potasio','Bisulfuro de potasio (Stock)','Hidrogenosulfato de potasio','Sulfuro de potasio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico estudia una sal ácida de litio y azufre en una práctica de nomenclatura.',
 q:'¿Cuál es el nombre Tradicional correcto de LiHS?',
 o:['Bisulfuro de litio','Sulfuro de litio','Bisulfato de litio','Hidrogenosulfato de litio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico prepara una sal ácida de rubidio con el anión carbonato.',
 q:'¿Cuál es el nombre Tradicional correcto de RbHCO₃, sabiendo que el rubidio tiene valencia fija +1?',
 o:['Bicarbonato de rubidio','Carbonato de rubidio','Bicarbonato de rubidio (II)','Dicarbonato de rubidio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico prepara una sal ácida de cesio para estudiar sus propiedades.',
 q:'¿Cuál es el nombre Tradicional correcto de CsHCO₃?',
 o:['Bicarbonato de cesio','Carbonato de cesio','Bicarbonato de cesio (II)','Dicarbonato de cesio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico estudia una sal ácida de bario que se forma en aguas con carbonatos.',
 q:'¿Cuál es el nombre Tradicional correcto de Ba(HCO₃)₂, sabiendo que el bario (carga +2) necesita 2 aniones HCO₃⁻?',
 o:['Bicarbonato de bario','Carbonato de bario','Bicarbonato de bario (II)','Dicarbonato de bario']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico estudia una sal ácida de estroncio con el anión carbonato.',
 q:'¿Cuál es el nombre Tradicional correcto de Sr(HCO₃)₂?',
 o:['Bicarbonato de estroncio','Carbonato de estroncio','Bicarbonato de estroncio (II)','Dicarbonato de estroncio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico prepara una sal ácida de amonio con el anión sulfato.',
 q:'¿Cuál es el nombre Stock correcto de NH₄HSO₄?',
 o:['Hidrogenosulfato de amonio','Bisulfato de amonio (Stock)','Hidrogenosulfito de amonio','Sulfato de amonio']},
{tema:'sal-ac', c:'uso', k:'CTS',
 ctx:'En algunas fuentes de agua de zonas rurales colombianas con suelos ricos en hierro, el agua sale con un tono rojizo por una sal ácida de hierro disuelta.',
 q:'¿Cuál es el nombre Tradicional correcto de Fe(HCO₃)₂ (hierro con valencia +2), responsable de ese color?',
 o:['Bicarbonato ferroso','Bicarbonato férrico','Carbonato ferroso','Bicarbonato de hierro (III)']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico estudia una sal ácida de rubidio con azufre.',
 q:'¿Cuál es el nombre Tradicional correcto de RbHS?',
 o:['Bisulfuro de rubidio','Sulfuro de rubidio','Bisulfato de rubidio','Hidrogenosulfato de rubidio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico estudia una sal ácida de cesio con azufre.',
 q:'¿Cuál es el nombre Tradicional correcto de CsHS?',
 o:['Bisulfuro de cesio','Sulfuro de cesio','Bisulfato de cesio','Hidrogenosulfato de cesio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico prepara una sal ácida de rubidio con el anión sulfato.',
 q:'¿Cuál es el nombre Tradicional correcto de RbHSO₄?',
 o:['Bisulfato de rubidio','Bisulfito de rubidio','Sulfato de rubidio','Hidrogenosulfito de rubidio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico prepara una sal ácida de cesio con el anión sulfato.',
 q:'¿Cuál es el nombre Tradicional correcto de CsHSO₄?',
 o:['Bisulfato de cesio','Bisulfito de cesio','Sulfato de cesio','Hidrogenosulfito de cesio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Algunos conservantes de vinos contienen una sal ácida de potasio con azufre.',
 q:'¿Cuál es el nombre Tradicional correcto de KHSO₃ (el sulfito, SO₃²⁻, retuvo un H⁺)?',
 o:['Bisulfito de potasio','Bisulfato de potasio','Hidrogenosulfato de potasio','Sulfito de potasio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico estudia una sal ácida de magnesio con el anión sulfito.',
 q:'¿Cuál es el nombre Stock correcto de Mg(HSO₃)₂?',
 o:['Hidrogenosulfito de magnesio','Bisulfito de magnesio (Stock)','Hidrogenosulfato de magnesio','Dihidrogenosulfito de magnesio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Algunos fertilizantes líquidos contienen una sal de potasio con fosfato.',
 q:'¿Cuál es el nombre Tradicional correcto de K₂HPO₄, donde el fosfato retuvo solo 1 H⁺?',
 o:['Fosfato monoácido de potasio','Fosfato diácido de potasio','Fosfato de potasio','Bifosfato diácido de potasio']},
{tema:'sal-ac', c:'uso', k:'CTS',
 ctx:'El fosfato monoácido de calcio (CaHPO₄) se usa en Colombia como suplemento mineral en alimentación animal y en algunos fertilizantes agrícolas.',
 q:'¿Cuál es el nombre Stock correcto de CaHPO₄?',
 o:['Hidrogenofosfato de calcio','Dihidrogenofosfato de calcio','Hidrogenofosfito de calcio','Fosfato de calcio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'En el tratamiento de algunas aguas residuales se forma una sal ácida de amonio y azufre.',
 q:'¿Cuál es el nombre Tradicional correcto de NH₄HS, sabiendo que el amonio actúa como catión de carga fija +1?',
 o:['Bisulfuro de amonio','Sulfuro de amonio','Bisulfato de amonio','Hidrogenosulfato de amonio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico prepara una sal de litio con fosfato en un laboratorio de baterías.',
 q:'¿Cuál es el nombre Tradicional correcto de Li₂HPO₄?',
 o:['Fosfato monoácido de litio','Fosfato diácido de litio','Fosfato de litio','Difosfato ácido de litio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico estudia una sal ácida de bario con el anión sulfato.',
 q:'¿Cuál es el nombre Tradicional correcto de Ba(HSO₄)₂?',
 o:['Bisulfato de bario','Bisulfito de bario','Sulfato de bario','Hidrogenosulfito de bario']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico estudia una sal ácida de estroncio con el anión sulfato.',
 q:'¿Cuál es el nombre Tradicional correcto de Sr(HSO₄)₂?',
 o:['Bisulfato de estroncio','Bisulfito de estroncio','Sulfato de estroncio','Hidrogenosulfito de estroncio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'Un químico estudia una sal ácida de rubidio con el anión sulfito.',
 q:'¿Cuál es el nombre Tradicional correcto de RbHSO₃?',
 o:['Bisulfito de rubidio','Bisulfato de rubidio','Sulfito de rubidio','Hidrogenosulfato de rubidio']},
{tema:'sal-ac', c:'uso', k:'Q', ctx:'En las panaderías se usan polvos de hornear para que el pan y los ponqués se esponjen.',
 q:'¿Por qué el bicarbonato de sodio (NaHCO₃) se usa en polvos de hornear, a diferencia del carbonato de sodio (Na₂CO₃)?',
 o:['Porque conserva un hidrógeno y libera CO₂ con el calor o un ácido','Porque tiene el doble de sodio que el carbonato de sodio','Porque no contiene ningún oxoanión en su fórmula','Porque es insoluble en agua, a diferencia del carbonato']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'La caja del bicarbonato que se usa en la cocina trae el nombre del compuesto en el sistema Stock.',
 q:'¿Cuál es el nombre Stock correcto de NaHCO₃?',
 o:['Hidrogenocarbonato de sodio','Bicarbonato de sodio (Stock)','Dihidrogenocarbonato de sodio','Hidrogenocarbonato de sodio (I)']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'En una práctica demostrativa, el sodio metálico arde en una atmósfera de cloro y forma un polvo blanco.', q:'¿Qué tipo de reacción es 2Na + Cl₂ → 2NaCl?', o:['Síntesis','Descomposición','Sustitución simple','Doble sustitución']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'Al encender una cinta de magnesio se produce una luz blanca muy intensa y queda un polvo blanco.', q:'¿Qué tipo de reacción es 2Mg + O₂ → 2MgO?', o:['Síntesis','Combustión','Descomposición','Sustitución simple']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'El hierro procesado en la Siderúrgica de Paz de Río (Boyacá) puede combinarse con cloro gaseoso en ensayos de laboratorio para formar cloruro de hierro (III).', q:'La reacción 2Fe + 3Cl₂ → 2FeCl₃ es un ejemplo de:', o:['Síntesis','Descomposición','Sustitución simple','Combustión']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'El carbón vegetal que se usa en los asados arde con el oxígeno del aire.', q:'¿Qué tipo de reacción es C + O₂ → CO₂, sabiendo que el carbono puro no tiene hidrógeno para formar agua?', o:['Síntesis','Combustión','Descomposición','Sustitución simple']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'El óxido de fósforo que se usa para secar gases reacciona con el agua y forma un ácido.', q:'¿Qué tipo de reacción es P₂O₅ + 3H₂O → 2H₃PO₄?', o:['Síntesis','Descomposición','Doble sustitución','Combustión']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'El agua oxigenada (H₂O₂) usada en clínicas colombianas para desinfectar heridas se descompone liberando burbujas de oxígeno.', q:'La reacción 2H₂O₂ → 2H₂O + O₂ es un ejemplo de:', o:['Descomposición','Síntesis','Sustitución simple','Doble sustitución']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'Con una pila y dos electrodos en agua se forman burbujas de dos gases distintos.', q:'¿Qué tipo de reacción es 2H₂O → 2H₂ + O₂ (electrólisis del agua)?', o:['Descomposición','Síntesis','Combustión','Sustitución simple']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'La piedra caliza de Cundinamarca y Boyacá se calcina en hornos para producir cal viva, base de la industria del cemento.', q:'La reacción CaCO₃ → CaO + CO₂ es un ejemplo de:', o:['Descomposición','Síntesis','Sustitución simple','Doble sustitución']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'Al calentar la sal de potasio de la cabeza de los fósforos se libera oxígeno.', q:'¿Qué tipo de reacción es 2KClO₃ → 2KCl + 3O₂?', o:['Descomposición','Síntesis','Combustión','Sustitución simple']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'Al hornear un ponqué con bicarbonato, la masa se llena de burbujas de gas.', q:'El bicarbonato de sodio (NaHCO₃), usado en cocinas colombianas, se descompone al calentarse en 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂. ¿Qué tipo de reacción es?', o:['Descomposición','Síntesis','Doble sustitución','Combustión']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'En laboratorios colombianos, el zinc metálico reacciona con ácido sulfúrico diluido liberando burbujas de gas hidrógeno.', q:'La reacción Zn + H₂SO₄ → ZnSO₄ + H₂ es un ejemplo de:', o:['Sustitución simple','Síntesis','Descomposición','Doble sustitución']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'Esta reacción se usa para recuperar cobre metálico de soluciones en algunas minas colombianas, usando hierro como agente desplazante.', q:'La reacción Fe + CuSO₄ → FeSO₄ + Cu es un ejemplo de:', o:['Sustitución simple','Doble sustitución','Descomposición','Síntesis']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'En una demostración, un trozo de sodio echado en agua se mueve por la superficie, burbujea y puede encenderse.', q:'¿Qué tipo de reacción es 2Na + 2H₂O → 2NaOH + H₂?', o:['Sustitución simple','Síntesis','Combustión','Doble sustitución']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'Las ollas de aluminio se dañan si se lavan con ácido muriático, porque se forman burbujas y el metal se gasta.', q:'¿Qué tipo de reacción es 2Al + 6HCl → 2AlCl₃ + 3H₂?', o:['Sustitución simple','Doble sustitución','Descomposición','Síntesis']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'En laboratorios de química del SENA y universidades colombianas, el cobre metálico reacciona con nitrato de plata formando cristales brillantes de plata.', q:'La reacción Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag es un ejemplo de:', o:['Sustitución simple','Doble sustitución','Síntesis','Descomposición']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'Al echar calcio metálico en agua se forman burbujas y el agua se vuelve turbia y básica.', q:'¿Qué tipo de reacción es Ca + 2H₂O → Ca(OH)₂ + H₂?', o:['Sustitución simple','Síntesis','Doble sustitución','Combustión']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'Esta reacción se usa en laboratorios colombianos para identificar la presencia de cloruros en muestras de agua, formando un precipitado blanco de cloruro de plata.', q:'La reacción NaCl + AgNO₃ → NaNO₃ + AgCl es un ejemplo de:', o:['Doble sustitución','Sustitución simple','Síntesis','Descomposición']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'En una práctica de laboratorio, al mezclar dos soluciones transparentes aparece un sólido amarillo brillante.', q:'¿Qué tipo de reacción es Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃, donde dos sales intercambian iones y se forma un precipitado amarillo?', o:['Doble sustitución','Sustitución simple','Combustión','Síntesis']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'El precipitado blanco de esta reacción, hidróxido de magnesio, es el mismo compuesto activo de la leche de magnesia vendida en farmacias colombianas.', q:'La reacción MgSO₄ + 2NaOH → Mg(OH)₂ + Na₂SO₄ es un ejemplo de:', o:['Doble sustitución','Sustitución simple','Descomposición','Síntesis']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'Al mezclar soluciones de dos sales de calcio y de sodio se forma un sólido blanco poco soluble, el yeso.', q:'¿Qué tipo de reacción es CaCl₂ + Na₂SO₄ → CaSO₄ + 2NaCl?', o:['Doble sustitución','Sustitución simple','Síntesis','Descomposición']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'El sulfato de bario formado en esta reacción es tan insoluble que se usa como contraste en radiografías del sistema digestivo en hospitales colombianos.', q:'La reacción BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl es un ejemplo de:', o:['Doble sustitución','Sustitución simple','Síntesis','Combustión']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'Para ablandar el agua dura se le agrega soda, y se forma un sólido blanco que se separa.', q:'¿Qué tipo de reacción es Na₂CO₃ + CaCl₂ → CaCO₃ + 2NaCl?', o:['Doble sustitución','Sustitución simple','Descomposición','Síntesis']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'El gas natural distribuido por Gases del Caribe y Surtigas en hogares colombianos se quema para cocinar y calentar agua.', q:'La reacción CH₄ + 2O₂ → CO₂ + 2H₂O es un ejemplo de:', o:['Combustión','Síntesis','Descomposición','Sustitución simple']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'Las estufas de las zonas rurales funcionan con el propano de los cilindros de gas.', q:'¿Qué tipo de reacción es C₃H₈ + 5O₂ → 3CO₂ + 4H₂O (combustión del propano de los cilindros de gas)?', o:['Combustión','Síntesis','Doble sustitución','Sustitución simple']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'La gasolina (octano) refinada en Barrancabermeja se quema en los motores de los vehículos colombianos.', q:'La reacción 2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O es un ejemplo de:', o:['Combustión','Síntesis','Descomposición','Doble sustitución']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'El etanol producido a partir de caña de azúcar en el Valle del Cauca se mezcla con gasolina (E10) como biocombustible en Colombia.', q:'¿Qué dos productos se forman siempre al quemar completamente un hidrocarburo u otro combustible con oxígeno, como en C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O?', o:['Dióxido de carbono y agua','Monóxido de carbono y oxígeno','Carbono puro e hidrógeno','Un óxido básico y un hidróxido']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'Los soldadores de los talleres de metalmecánica usan una llama muy caliente de acetileno y oxígeno.', q:'El acetileno (C₂H₂) usado en soldadura oxiacetilénica en Colombia se quema según 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O. ¿Qué tipo de reacción es?', o:['Combustión','Síntesis','Sustitución simple','Doble sustitución']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'Un estudiante compara la reacción del gas de la estufa con la reacción del sodio con el cloro.', q:'¿Cuál es la característica que define a una reacción de combustión, a diferencia de una síntesis?', o:['Un hidrocarburo reacciona con O₂ para dar siempre CO₂ y H₂O como productos','Dos sustancias simples se combinan en una sola, sin importar cuáles sean','Un elemento libre desplaza a otro dentro de un compuesto','Una sola sustancia se divide en dos o más productos']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'El vinagre de caña de azúcar colombiana (ácido acético) reacciona con hidróxido de sodio para formar acetato de sodio y agua.', q:'En la reacción CH₃COOH + NaOH → CH₃COONa + H₂O, ¿qué tipo de compuesto se forma como uno de los productos, junto con el agua?', o:['Una sal (acetato de sodio)','Un óxido básico','Un hidruro metálico','Un anhídrido']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'En el laboratorio se neutraliza una solución de ácido sulfúrico con soda cáustica antes de desecharla.', q:'En la reacción H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O, ¿por qué se necesitan 2 moles de NaOH por cada mol de H₂SO₄?', o:['Porque el H₂SO₄ aporta 2 iones H⁺ que deben neutralizarse con 2 iones OH⁻','Porque el Na siempre aparece duplicado en cualquier reacción','Porque el agua formada necesita 2 moléculas de NaOH por regla general','Porque el azufre tiene 2 estados de oxidación posibles']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'El nitrato de calcio formado en esta reacción es un fertilizante nitrogenado usado en cultivos de flores de la Sabana de Bogotá.', q:'¿Cuántos moles de HNO₃ se necesitan para reaccionar completamente con 1 mol de Ca(OH)₂, según 2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O?', o:['2 moles','1 mol','3 moles','4 moles']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'En los hornos de las fábricas de cal de Boyacá se calienta la piedra caliza.', q:'¿Cuál de las siguientes ecuaciones sigue el patrón general de una reacción de descomposición (AB → A + B)?', o:['CaCO₃ → CaO + CO₂','2Na + Cl₂ → 2NaCl','Zn + H₂SO₄ → ZnSO₄ + H₂','NaCl + AgNO₃ → NaNO₃ + AgCl']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'En algunas minas se recupera cobre de las soluciones agregando chatarra de hierro.', q:'¿Cuál de las siguientes ecuaciones sigue el patrón general de una reacción de sustitución simple (A + BC → AC + B)?', o:['Fe + CuSO₄ → FeSO₄ + Cu','CaCO₃ → CaO + CO₂','NaCl + AgNO₃ → NaNO₃ + AgCl','CH₄ + 2O₂ → CO₂ + 2H₂O']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'En los exámenes médicos de rayos X se usa una sal de bario que se prepara mezclando dos soluciones.', q:'¿Cuál de las siguientes ecuaciones sigue el patrón general de una reacción de doble sustitución (AB + CD → AD + CB)?', o:['BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl','2Mg + O₂ → 2MgO','2KClO₃ → 2KCl + 3O₂','C + O₂ → CO₂']},
{tema:'reaccion', c:'uso', k:'CTS', ctx:'Esta reacción histórica, usada por Lavoisier para estudiar la composición del aire, descompone un óxido metálico en sus elementos al calentarlo.', q:'La reacción 2HgO → 2Hg + O₂ es un ejemplo de:', o:['Descomposición','Síntesis','Sustitución simple','Doble sustitución']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'Un estudiante debe clasificar varias ecuaciones químicas antes de balancearlas.', q:'¿Qué pista visual en una ecuación SIN balancear te ayuda a reconocer rápidamente una reacción de combustión?', o:['Un hidrocarburo (compuesto de C e H) reaccionando con O₂','Dos elementos libres reaccionando entre sí','Una sola fórmula a la izquierda de la flecha','Dos sales intercambiando sus iones']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'Un estudiante compara varias reacciones y busca la que tiene un elemento sin combinar entre los reactivos.', q:'¿Qué elemento libre aparece como reactivo en una reacción de sustitución simple, a diferencia de una síntesis o una doble sustitución?', o:['Un metal o no metal sin combinar, como Zn, Fe o Cl₂','Un óxido metálico ya formado, como CaO','Un hidrocarburo como el metano, CH₄','Dos sales distintas, como NaCl y AgNO₃']},

/* SABER — balanceo */
{tema:'balanceo', c:'exp', k:'Q', ctx:'La sal de cocina se puede formar en el laboratorio haciendo reaccionar sodio con cloro.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Na + Cl₂ → NaCl?', o:['2, 1, 2','1, 1, 1','2, 2, 1','1, 2, 2']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'Al quemar una cinta de magnesio se forma un polvo blanco de óxido.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Mg + O₂ → MgO?', o:['2, 1, 2','1, 1, 1','1, 2, 1','2, 2, 1']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'La electrólisis del agua para producir hidrógeno limpio se estudia en universidades colombianas como alternativa energética.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear H₂O → H₂ + O₂?', o:['2, 2, 1','1, 1, 1','2, 1, 2','1, 2, 1']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'El gas natural se quema en hogares colombianos para cocinar y calentar agua.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear CH₄ + O₂ → CO₂ + H₂O?', o:['1, 2, 1, 2','1, 1, 1, 1','2, 2, 1, 2','1, 2, 2, 1']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'El hierro de las rejas se oxida con el oxígeno del aire y forma óxido férrico.', q:'Para balancear Fe + O₂ → Fe₂O₃, ¿por qué el coeficiente de Fe debe ser 4 y no 2?', o:['Porque hacen falta 2 Fe₂O₃ para que el oxígeno cuadre en enteros','Porque el hierro siempre lleva coeficiente 4 en cualquier óxido','Porque el O₂ obliga a duplicar todos los coeficientes','Porque el Fe₂O₃ tiene masa molar par']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'En el laboratorio se neutraliza ácido clorhídrico con soda cáustica.', q:'La ecuación HCl + NaOH → NaCl + H₂O, ¿con qué coeficientes queda balanceada?', o:['1, 1, 1, 1 (ya está balanceada)','2, 1, 1, 1 (falta HCl)','1, 2, 1, 1 (falta NaOH)','1, 1, 2, 1 (falta NaCl)']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'La cal apagada se usa para encalar cultivos en el campo colombiano.', q:'La ecuación CaO + H₂O → Ca(OH)₂, ¿con qué coeficientes queda balanceada?', o:['1, 1, 1 (ya está balanceada)','2, 1, 1 (falta CaO)','1, 2, 1 (falta agua)','2, 2, 1 (faltan los dos)']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'En Cartagena se produce amoníaco para fertilizantes a partir del nitrógeno del aire y de hidrógeno.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear N₂ + H₂ → NH₃?', o:['1, 3, 2','1, 1, 1','2, 3, 1','1, 2, 2']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'El zinc reacciona con ácido clorhídrico en laboratorios colombianos para producir hidrógeno gaseoso de forma controlada.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Zn + HCl → ZnCl₂ + H₂?', o:['1, 2, 1, 1','1, 1, 1, 1','2, 2, 1, 1','1, 2, 2, 1']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'El aluminio de las ventanas forma una capa protectora de óxido al contacto con el aire.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Al + O₂ → Al₂O₃?', o:['4, 3, 2','2, 3, 1','4, 2, 3','2, 1, 1']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'La cementación del cobre con hierro se usa para recuperar este metal de soluciones en algunas minas colombianas.', q:'La ecuación Fe + CuSO₄ → FeSO₄ + Cu, ¿con qué coeficientes queda balanceada?', o:['1, 1, 1, 1 (ya está balanceada)','2, 1, 1, 1 (falta Fe)','1, 2, 1, 1 (falta CuSO₄)','1, 1, 2, 2 (faltan productos)']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'En una planta química se neutraliza ácido sulfúrico con soda cáustica para tratar los residuos.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear H₂SO₄ + NaOH → Na₂SO₄ + H₂O?', o:['1, 2, 1, 2','2, 1, 1, 1','1, 1, 1, 1','2, 2, 1, 2']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'El propano se vende en cilindros de gas para cocinas de zonas rurales colombianas.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear C₃H₈ + O₂ → CO₂ + H₂O?', o:['1, 5, 3, 4','1, 5, 3, 3','1, 4, 3, 4','2, 5, 3, 4']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'Al echar ácido muriático sobre el mármol de un piso se forman burbujas.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear CaCO₃ + HCl → CaCl₂ + H₂O + CO₂?', o:['1, 2, 1, 1, 1','1, 1, 1, 1, 1','2, 2, 1, 1, 1','1, 2, 2, 1, 1']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'El sodio metálico reacciona violentamente con agua, un experimento demostrativo realizado con precaución en universidades colombianas.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Na + H₂O → NaOH + H₂?', o:['2, 2, 2, 1','1, 1, 1, 1','2, 1, 2, 1','1, 2, 1, 1']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'La reducción del óxido de hierro con monóxido de carbono es el proceso del alto horno en la Siderúrgica de Paz de Río, Boyacá.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Fe₂O₃ + CO → Fe + CO₂?', o:['1, 3, 2, 3','1, 2, 2, 2','2, 3, 2, 3','1, 3, 1, 3']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'En la recuperación de plata de las radiografías antiguas se usa cobre metálico.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Cu + AgNO₃ → Cu(NO₃)₂ + Ag?', o:['1, 2, 1, 2','1, 1, 1, 1','2, 2, 1, 2','1, 2, 2, 1']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'Al quemar fósforo blanco con abundante oxígeno se forma un humo blanco de óxido.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear P + O₂ → P₂O₅?', o:['4, 5, 2','2, 5, 1','4, 5, 1','2, 3, 1']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'El ácido sulfúrico disuelve la caliza para formar yeso, un material usado en construcciones colombianas.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear H₂SO₄ + CaCO₃ → CaSO₄ + H₂O + CO₂?', o:['1, 1, 1, 1, 1 (ya está balanceada)','2, 1, 1, 1, 1 (falta ácido)','1, 2, 1, 1, 1 (falta caliza)','1, 1, 2, 1, 1 (falta yeso)']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'La gasolina (octano) refinada en Barrancabermeja necesita coeficientes grandes para balancear su combustión completa.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear C₈H₁₈ + O₂ → CO₂ + H₂O?', o:['2, 25, 16, 18','1, 12, 8, 9','2, 24, 16, 18','1, 25, 16, 18']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'El aluminio reacciona con el ácido de las baterías y libera hidrógeno.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Al + H₂SO₄ → Al₂(SO₄)₃ + H₂?', o:['2, 3, 1, 3','2, 3, 1, 6','1, 3, 1, 3','2, 6, 1, 3']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'La roca fosfórica colombiana se trata con ácido sulfúrico para producir superfosfato, un fertilizante agrícola.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Ca₃(PO₄)₂ + H₂SO₄ → CaSO₄ + H₃PO₄?', o:['1, 3, 3, 2','1, 2, 3, 2','3, 3, 3, 2','1, 3, 2, 2']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'Un estudiante debe balancear por tanteo la ecuación de la combustión del gas de la estufa.', q:'Al balancear una ecuación con el método de tanteo, ¿qué tipo de átomos conviene dejar para el final?', o:['El hidrógeno y el oxígeno, porque suelen aparecer en varias fórmulas a la vez','Los metales, porque siempre tienen valencia fija y no cambian','Los elementos que aparecen una sola vez a cada lado de la flecha','Los no metales distintos del oxígeno, porque son los más difíciles']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'Un estudiante balanceó una ecuación y obtuvo coeficientes que todavía se pueden simplificar.', q:'Si al balancear una ecuación obtienes los coeficientes 4, 6, 2, pero todos son divisibles entre 2, ¿cuáles son los coeficientes finales correctos?', o:['2, 3, 1','4, 6, 2 (se dejan igual)','8, 12, 4','4, 3, 1']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'Un compañero quiso balancear una ecuación cambiando el subíndice del oxígeno, y el docente lo corrigió.', q:'¿Por qué NO se puede balancear una ecuación cambiando el subíndice 2 de O₂ por un 3?', o:['Porque eso cambiaría la sustancia O₂ (oxígeno) por otra distinta, no la misma ecuación balanceada','Porque los subíndices solo se pueden cambiar en los productos de la ecuación, nunca en los reactivos','Porque el oxígeno no admite subíndices mayores que 2 en ninguna sustancia química','Porque cambiar un subíndice siempre duplica la masa molar y la ecuación ya no cuadra']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'Ecopetrol calcula con precisión el oxígeno necesario para quemar combustibles sin desperdiciarlo ni generar exceso de contaminantes.', q:'Si una ecuación de combustión queda con los coeficientes 2, 13, 8, 10 y todos son enteros sin un factor común, ¿se considera correctamente balanceada?', o:['Sí, porque no comparten ningún factor común entre sí','No, porque todo coeficiente mayor a 10 es inválido','No, porque faltaría dividir entre 2 obligatoriamente','Sí, pero solo si la reacción es de síntesis']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'Un estudiante debe escoger por cuál elemento empezar a balancear la ecuación de una combustión.', q:'En el método de tanteo, ¿qué tipo de elementos conviene balancear primero?', o:['Los que aparecen en una sola fórmula a cada lado de la ecuación','El hidrógeno siempre, sin excepción, porque está en casi todas las fórmulas','El oxígeno siempre, sin excepción, porque es el más abundante','Los metales de valencia variable, porque cambian de carga en la reacción']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'Lavoisier pesó con cuidado los reactivos y productos de muchas reacciones en recipientes cerrados.', q:'Según la Ley de Conservación de la Masa, ¿qué debe cumplirse en una ecuación química balanceada?', o:['El número de átomos de cada elemento debe ser igual en reactivos y productos','La masa de los reactivos debe ser mayor que la de los productos','El número de moléculas debe ser igual a ambos lados, sin importar los átomos','Los coeficientes deben sumar lo mismo que los subíndices']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'El sulfato de sodio formado en esta reacción se usa en detergentes y en la industria del papel en Colombia.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear H₂SO₄ + KOH → K₂SO₄ + H₂O?', o:['1, 2, 1, 2','1, 1, 1, 1','2, 2, 1, 2','1, 2, 2, 1']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'En la ecuación de la combustión del propano de los cilindros aparecen varias moléculas de agua.', q:'Si una ecuación tiene 3 moléculas de H₂O a la derecha, ¿cuántos átomos de hidrógeno representa eso en total?', o:['6 átomos de H','3 átomos de H','9 átomos de H','2 átomos de H']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'En la ecuación de la neutralización del ácido muriático algunas fórmulas no llevan coeficiente escrito.', q:'¿Qué significa, en una ecuación química, que un coeficiente sea "1" y no se escriba explícitamente?', o:['Que esa fórmula participa con una sola unidad, igual que si dijera el número 1','Que esa sustancia no participa en la reacción y se puede borrar','Que la ecuación está mal balanceada y falta un coeficiente','Que el subíndice de esa fórmula es cero y no se escribe']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'El bicarbonato de sodio se usa en cocinas colombianas como polvo de hornear.', q:'Si la ecuación 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂ ya tiene sus coeficientes mínimos, ¿qué pasaría si alguien le pusiera 4, 2, 2, 2 en su lugar?', o:['Seguiría siendo correcta en cuanto a átomos, pero no serían los coeficientes mínimos pedidos','Sería una ecuación distinta, porque cambiarían las sustancias que reaccionan','Sería incorrecta, porque duplicaría la masa de los productos sin razón química','Sería imposible de balancear con esos números, porque no son mínimos']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'Al pasar cloro sobre lana de hierro caliente se forma un sólido café.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Fe + Cl₂ → FeCl₃?', o:['2, 3, 2','1, 3, 1','2, 3, 1','1, 1, 1']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'El potasio metálico se oxida muy rápido al contacto con el aire.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear K + O₂ → K₂O?', o:['4, 1, 2','2, 1, 1','4, 2, 2','2, 1, 2']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'El nitrato de calcio formado en esta reacción es un fertilizante usado en cultivos de flores de la Sabana de Bogotá.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + H₂O?', o:['2, 1, 1, 2','1, 1, 1, 1','2, 2, 1, 2','1, 2, 1, 2']},

/* SABER — mol-masa */
{tema:'balanceo', c:'uso', k:'CTS', ctx:'La oxidación catalítica del amoníaco es un paso clave en la fabricación industrial de ácido nítrico.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear NH₃ + O₂ → NO + H₂O?', o:['4, 5, 4, 6','4, 3, 4, 6','2, 5, 2, 3','4, 5, 2, 6']},
{tema:'balanceo', c:'uso', k:'CTS', ctx:'El hidróxido de hierro (III), un precipitado de color ocre, aparece en análisis de calidad del agua de ríos colombianos como el Bogotá.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Fe₂(SO₄)₃ + NaOH → Fe(OH)₃ + Na₂SO₄?', o:['1, 6, 2, 3','1, 3, 2, 3','2, 6, 2, 3','1, 6, 1, 3']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'Al echar cobre en ácido nítrico se forma una solución azul y sale un gas.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear HNO₃ + Cu → Cu(NO₃)₂ + NO + H₂O?', o:['8, 3, 3, 2, 4','4, 3, 3, 2, 2','8, 3, 3, 4, 4','6, 3, 3, 2, 3']},

{tema:'mol-masa', c:'exp', k:'Q', ctx:'Las plantas absorben el CO₂ del aire, y un ingeniero ambiental necesita su masa molar para calcular emisiones.', q:'¿Cuál es la masa molar correcta del CO₂, sabiendo que M(C)=12.011 g/mol y M(O)=15.999 g/mol?', o:['44.009 g/mol','28.010 g/mol','31.998 g/mol','60.008 g/mol'], f:'CO₂'},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'El ácido sulfúrico se usa en minería y en la fabricación de baterías en toda Colombia.', q:'¿Cuál es la masa molar correcta del H₂SO₄?', o:['98.072 g/mol','82.073 g/mol','96.056 g/mol','114.071 g/mol'], f:'H₂SO₄'},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'Para preparar una solución de ácido muriático de concentración exacta se necesita la masa molar del HCl.', q:'¿Cuál es la masa molar correcta del HCl?', o:['36.458 g/mol','35.450 g/mol','37.466 g/mol','34.442 g/mol'], f:'HCl'},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'La soda cáustica se usa en la fabricación de jabón artesanal en varias regiones de Colombia.', q:'¿Cuál es la masa molar correcta del NaOH?', o:['39.997 g/mol','38.989 g/mol','41.005 g/mol','56.996 g/mol'], f:'NaOH'},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'Para calcular cuánta cal se obtiene de la piedra caliza se necesita la masa molar del carbonato de calcio.', q:'¿Cuál es la masa molar correcta del CaCO₃?', o:['100.086 g/mol','96.078 g/mol','84.075 g/mol','116.085 g/mol'], f:'CaCO₃'},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'El oxígeno molecular se produce industrialmente en Colombia para hospitales y siderurgia.', q:'¿Cuál es la masa molar correcta del O₂?', o:['31.998 g/mol','15.999 g/mol','32.998 g/mol','30.996 g/mol'], f:'O₂'},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'En la siderúrgica de Paz de Río se calcula cuánto hierro se obtiene del mineral de hierro.', q:'¿Cuál es la masa molar correcta del Fe₂O₃?', o:['159.687 g/mol','143.688 g/mol','167.682 g/mol','151.689 g/mol'], f:'Fe₂O₃'},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'La cal apagada se usa para encalar cultivos en zonas rurales colombianas.', q:'¿Cuál es la masa molar correcta del Ca(OH)₂?', o:['74.092 g/mol','56.077 g/mol','58.085 g/mol','90.091 g/mol'], f:'Ca(OH)₂'},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'En la planta de fertilizantes se calcula la masa molar del amoníaco para planear la producción.', q:'¿Cuál es la masa molar correcta del NH₃?', o:['17.031 g/mol','14.007 g/mol','18.039 g/mol','15.015 g/mol'], f:'NH₃'},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'El gas natural se distribuye en ciudades colombianas para cocinar y calentar agua.', q:'¿Cuál es la masa molar correcta del CH₄?', o:['16.043 g/mol','12.011 g/mol','20.055 g/mol','14.035 g/mol'], f:'CH₄'},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'Para estimar el CO₂ que libera la gasolina, se toma el octano como compuesto de referencia.', q:'¿Cuál es la masa molar correcta del C₈H₁₈ (octano)?', o:['114.232 g/mol','106.198 g/mol','122.240 g/mol','98.182 g/mol'], f:'C₈H₁₈'},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'El permanganato de potasio se usa en plantas de potabilización de agua en Colombia.', q:'¿Cuál es la masa molar correcta del KMnO₄?', o:['158.032 g/mol','142.034 g/mol','174.030 g/mol','150.036 g/mol'], f:'KMnO₄'},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'En la fabricación de detergentes se usa sulfato de sodio como relleno.', q:'¿Cuál es la masa molar correcta del Na₂SO₄?', o:['142.036 g/mol','126.037 g/mol','158.035 g/mol','110.040 g/mol'], f:'Na₂SO₄'},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'La alúmina (óxido de aluminio) se usa como refractario en varias industrias colombianas.', q:'¿Cuál es la masa molar correcta del Al₂O₃?', o:['101.961 g/mol','85.962 g/mol','117.960 g/mol','69.963 g/mol'], f:'Al₂O₃'},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'El óxido de magnesio se usa como antiácido y como material resistente al calor.', q:'¿Cuál es la masa molar correcta del MgO?', o:['40.304 g/mol','32.296 g/mol','48.312 g/mol','56.303 g/mol'], f:'MgO'},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'El nitrógeno representa el 78% del aire que respiramos en Colombia.', q:'¿Cuál es la masa molar correcta del N₂?', o:['28.014 g/mol','14.007 g/mol','30.022 g/mol','26.006 g/mol'], f:'N₂'},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'El hidrógeno se estudia como combustible limpio para buses y camiones.', q:'¿Cuál es la masa molar correcta del H₂, el gas más ligero que existe?', o:['2.016 g/mol','1.008 g/mol','4.032 g/mol','2.000 g/mol'], f:'H₂'},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'El cloro se usa para potabilizar el agua en acueductos de ciudades colombianas.', q:'¿Cuál es la masa molar correcta del Cl₂?', o:['70.90 g/mol','35.45 g/mol','77.90 g/mol','63.90 g/mol'], f:'Cl₂'},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'En las plantas de tratamiento de agua se calcula cuánto cloruro férrico se debe agregar.', q:'¿Cuál es la masa molar correcta del FeCl₃?', o:['162.195 g/mol','146.745 g/mol','178.195 g/mol','126.745 g/mol'], f:'FeCl₃'},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'El sulfato de cobre se usa en cultivos de flores colombianos como fungicida.', q:'¿Cuál es la masa molar correcta del CuSO₄?', o:['159.602 g/mol','143.602 g/mol','175.606 g/mol','127.606 g/mol'], f:'CuSO₄'},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'Para preparar una crema con óxido de zinc se calcula la masa molar de este compuesto.', q:'¿Cuál es la masa molar correcta del ZnO?', o:['81.379 g/mol','65.380 g/mol','97.378 g/mol','73.389 g/mol'], f:'ZnO'},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'El dicromato de potasio se usa en análisis de calidad de aguas residuales en Colombia.', q:'¿Cuál es la masa molar correcta del K₂Cr₂O₇?', o:['294.181 g/mol','270.183 g/mol','252.185 g/mol','312.179 g/mol'], f:'K₂Cr₂O₇'},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'En la planta de fertilizantes de Barrancabermeja se produce ácido nítrico.', q:'¿Cuál es la masa molar correcta del HNO₃, usado en la producción de fertilizantes nitrogenados en Colombia?', o:['63.012 g/mol','47.009 g/mol','79.012 g/mol','61.004 g/mol'], f:'HNO₃'},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'El agua de los ríos colombianos (Magdalena, Cauca) es la sustancia de referencia más común para practicar cálculos de mol.', q:'Si la masa molar del H₂O es 18.015 g/mol, ¿cuántos gramos hay en 3 moles de agua?', o:['54.045 g','18.015 g','36.030 g','60.050 g']},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'Un estudiante necesita medio mol de HCl para un experimento y debe saber cuántos gramos pesar.', q:'Si la masa molar del HCl es 36.458 g/mol, ¿cuántos gramos hay en 0.5 moles de HCl?', o:['18.229 g','36.458 g','72.916 g','9.115 g']},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'El ácido sulfúrico industrial se dosifica por moles en procesos mineros colombianos.', q:'Si la masa molar del H₂SO₄ es 98.072 g/mol, ¿cuántos gramos hay en 4 moles?', o:['392.288 g','98.072 g','196.144 g','245.180 g']},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'Un ingeniero ambiental midió la masa de CO₂ emitida por un horno y necesita expresarla en moles.', q:'Si tienes 88.018 g de CO₂ (masa molar 44.009 g/mol), ¿cuántos moles son?', o:['2 moles','1 mol','4 moles','0.5 moles']},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'La sal de Zipaquirá se comercializa por toneladas, pero cada mol de NaCl contiene siempre el mismo número de partículas.', q:'Si tienes 29.22 g de NaCl (masa molar 58.44 g/mol), ¿cuántos moles son?', o:['0.5 moles','1 mol','2 moles','0.25 moles']},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'Un estudiante pesa una muestra de sal en la balanza y quiere saber cuántos moles tiene.', q:'¿Cuál es la fórmula correcta para pasar de gramos a moles?', o:['moles = gramos ÷ masa molar','moles = gramos × masa molar','moles = masa molar ÷ gramos','moles = gramos + masa molar']},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'Un estudiante necesita 0,25 moles de azúcar y quiere saber cuántos gramos pesar.', q:'¿Cuál es la fórmula correcta para pasar de moles a gramos?', o:['gramos = moles × masa molar','gramos = moles ÷ masa molar','gramos = masa molar ÷ moles','gramos = moles + masa molar']},
{tema:'mol-masa', c:'exp', k:'CTS', ctx:'En la industria colombiana de baterías y minería se maneja el ácido sulfúrico en cantidades calculadas en moles.', q:'¿Por qué los químicos usan el mol en vez de contar átomos o moléculas uno por uno?', o:['Porque las partículas son demasiado pequeñas y numerosas para contarlas directamente','Porque el mol es una unidad de masa, no de cantidad de partículas','Porque solo los compuestos con oxígeno se pueden contar en moles','Porque el número de Avogadro cambia según la sustancia']},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'Un químico necesita saber cuántas moléculas de agua hay en una cantidad conocida de moles.', q:'¿Cuántas partículas hay en 2 moles de cualquier sustancia?', o:['1.2044×10²⁴','6.022×10²³','3.011×10²³','1.2044×10²³']},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'Un compañero calculó la masa molar de la sal de cocina y obtuvo un resultado el doble del correcto.', q:'Al calcular la masa molar del NaCl sumando 22.990 (Na) + 35.45 (Cl), ¿qué error daría un resultado incorrecto de 58.44×2=116.88 g/mol para 1 mol?', o:['Multiplicar por 2 sin que la fórmula tenga 2 átomos de algún elemento que lo justifique','Redondear los decimales de las masas atómicas del sodio y del cloro','Usar la masa atómica del cloro en lugar de la del sodio en la suma','Olvidar sumar la masa del hidrógeno que tiene la fórmula del NaCl']},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'El óxido de zinc se usa en protector solar y pinturas fabricadas en Colombia.', q:'Para calcular la masa molar del ZnO, ¿qué pasos sigues?', o:['Sumar la masa atómica del Zn más la masa atómica del O','Sumar la masa atómica del Zn más el doble de la del O','Multiplicar la masa atómica del Zn por la del O','Restar la masa atómica del O a la del Zn']},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'Para calcular cuánta alúmina hay en una piedra de esmeril, se necesita la masa molar del óxido de aluminio.', q:'Si una fórmula tiene un subíndice 3 para el oxígeno, como en Al₂O₃, ¿cómo se incluye el oxígeno en el cálculo de la masa molar?', o:['Se multiplica la masa atómica del oxígeno por 3 antes de sumar','Se suma la masa atómica del oxígeno una sola vez, sin importar el subíndice','Se divide la masa atómica del oxígeno entre 3','Se ignora el subíndice si el compuesto tiene más de un elemento']},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'En el informe de laboratorio, un estudiante escribió la masa molar del agua sin unidades.', q:'¿En qué unidades se expresa siempre la masa molar?', o:['Gramos por mol (g/mol)','Gramos (g)','Moles (mol)','Unidades de masa atómica (uma) solamente']},
{tema:'mol-masa', c:'uso', k:'CTS', ctx:'El cloruro de hierro (III) se usa como coagulante en plantas de tratamiento de agua en Colombia.', q:'Si la masa molar del FeCl₃ es 162.195 g/mol, ¿cuántos gramos hay en 2 moles?', o:['324.390 g','162.195 g','81.098 g','243.293 g']},
{tema:'elemento', c:'sim', k:'Q', ctx:'El suero fisiológico que se aplica en los hospitales contiene sal de cocina.', q:'¿Cuál es el nombre del elemento con símbolo "Na"?', o:['Sodio','Nitrógeno','Níquel','Neón']},
{tema:'elemento', c:'sim', k:'Q', ctx:'La leche y el queso son fuentes importantes de un mineral necesario para los huesos.', q:'¿Cuál es el símbolo químico del calcio?', o:['Ca','Cl','C','Co']},
{tema:'elemento', c:'sim', k:'Q', ctx:'El banano es conocido por ser rico en un mineral importante para los músculos.', q:'¿Cuál es el nombre del elemento con símbolo "K"?', o:['Potasio','Kriptón','Carbono','Calcio']},
{tema:'elemento', c:'sim', k:'Q', ctx:'La siderúrgica de Paz de Río, en Boyacá, produce acero a partir de un metal muy común.', q:'¿Cuál es el símbolo químico del hierro?', o:['Fe','Hi','Ir','Hg']},
{tema:'elemento', c:'sim', k:'Q', ctx:'Las joyerías de Mompox son famosas por la filigrana hecha con un metal precioso de color blanco.', q:'¿Qué elemento tiene el símbolo "Ag"?', o:['Plata','Oro','Aluminio','Argón']},
{tema:'elemento', c:'sim', k:'Q', ctx:'El Museo del Oro en Bogotá guarda piezas de orfebrería precolombina hechas con este metal.', q:'¿Cuál es el símbolo químico del oro?', o:['Au','Or','Ag','O']},
{tema:'elemento', c:'sim', k:'Q', ctx:'Las latas de conservas se recubren por dentro con un metal que evita la corrosión.', q:'¿Qué elemento tiene el símbolo "Sn"?', o:['Estaño','Antimonio','Silicio','Azufre']},
{tema:'elemento', c:'sim', k:'Q', ctx:'Las baterías de los carros y las tuberías antiguas contienen un metal pesado y tóxico.', q:'¿Cuál es el símbolo químico del plomo?', o:['Pb','Pl','Po','P']},

{tema:'elemento', c:'num', k:'Q', ctx:'El oxígeno que respiramos es el elemento más abundante de la corteza terrestre.', q:'¿Cuál es el número atómico del oxígeno?', o:['8','16','6','18']},
{tema:'elemento', c:'num', k:'Q', ctx:'El sodio de la sal de cocina es un metal muy reactivo cuando está puro.', q:'¿Cuántos protones tiene un átomo de sodio neutro?', o:['11','23','12','1']},
{tema:'elemento', c:'num', k:'Q', ctx:'El hierro de la sangre está en la hemoglobina, que transporta el oxígeno.', q:'¿Cuál es el número atómico del hierro?', o:['26','56','8','30']},
{tema:'elemento', c:'num', k:'Q', ctx:'El olor de las aguas termales de Paipa se debe a compuestos de un elemento amarillo.', q:'¿Cuál es el número atómico del azufre?', o:['16','32','6','2']},
{tema:'elemento', c:'num', k:'Q', ctx:'El cloro que se agrega al agua potable de las ciudades la desinfecta.', q:'¿Cuál es el número atómico del cloro?', o:['17','35','7','1']},

{tema:'elemento', c:'tipo', k:'Q', ctx:'El sodio se guarda bajo aceite en el laboratorio porque reacciona con el agua y el aire.', q:'El sodio (Na) pertenece al grupo 1 de la tabla periódica. ¿A qué categoría corresponde?', o:['Metal alcalino','Alcalinotérreo','Halógeno','Gas noble']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'El calcio de los huesos y de la cal pertenece a una familia de metales de la tabla periódica.', q:'El calcio (Ca) pertenece al grupo 2. ¿Cómo se clasifica?', o:['Alcalinotérreo','Metal alcalino','Metaloide','No metal']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'El cloro de las piscinas pertenece a una familia de elementos que forman sales con los metales.', q:'El cloro (Cl) pertenece al grupo 17. ¿Cómo se clasifica esta familia de elementos?', o:['Halógeno','Gas noble','Metal alcalino','Metaloide']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'El helio de los globos de las fiestas y el neón de los avisos luminosos casi no reaccionan.', q:'El helio (He) y el neón (Ne) pertenecen al grupo 18. ¿Cómo se llama esta familia?', o:['Gas noble','Halógeno','Metal de transición','Alcalinotérreo']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'El hierro de las varillas, el cobre de los cables y el zinc de las tejas son metales muy usados.', q:'El hierro (Fe), el cobre (Cu) y el zinc (Zn) están en la zona central de la tabla periódica. ¿Cómo se clasifican?', o:['Metales de transición','Metaloides','Halógenos','Gases nobles']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'El silicio de los chips de los celulares y de los paneles solares tiene propiedades intermedias.', q:'El silicio (Si) tiene propiedades intermedias entre metal y no metal. ¿Cómo se clasifica?', o:['Metaloide','Metal alcalino','Halógeno','Gas noble']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'El sodio y el magnesio forman iones al combinarse con el cloro en las sales del agua de mar.', q:'Según su clasificación, ¿qué tienden a hacer los metales al formar un ion?', o:['Perder electrones y formar cationes','Ganar electrones y formar aniones','No formar iones','Ganar y perder electrones a la vez']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'El cloro y el oxígeno forman iones al combinarse con metales en los minerales.', q:'Según su clasificación, ¿qué tienden a hacer los no metales al formar un ion?', o:['Ganar electrones y formar aniones','Perder electrones y formar cationes','No formar iones','Compartir protones']},

{tema:'elemento', c:'per', k:'Q', ctx:'Un estudiante ubica el sodio en la tabla periódica para saber cuántos niveles de electrones tiene.', q:'El sodio (Na) está en el periodo 3. ¿Qué indica el número de periodo de un elemento?', o:['El número de niveles (capas) de electrones del átomo','El número de protones que hay en el núcleo del átomo','El número de electrones de valencia del átomo','El valor de la masa atómica del elemento']},
{tema:'elemento', c:'per', k:'Q', ctx:'Las baterías de los celulares usan litio; el sodio y otro metal del mismo grupo se comportan parecido.', q:'El litio (Li) y el sodio (Na) tienen valencia +1 y están en el mismo grupo. ¿Qué otro elemento del mismo grupo también tendría previsiblemente EO +1?', o:['Potasio (K)','Calcio (Ca)','Cloro (Cl)','Hierro (Fe)']},
{tema:'elemento', c:'per', k:'Q', ctx:'El magnesio de los suplementos y el calcio de la leche tienen un comportamiento químico parecido.', q:'El magnesio (Mg) y el calcio (Ca) están en el mismo grupo (2). ¿Qué estado de oxidación comparten?', o:['+2','+1','-2','+3']},
{tema:'elemento', c:'per', k:'Q', ctx:'El oxígeno y el azufre forman compuestos parecidos, como el agua y el gas de las aguas termales.', q:'El oxígeno está en el periodo 2. ¿En qué periodo está el azufre, que pertenece al mismo grupo?', o:['Periodo 3','Periodo 2','Periodo 4','Periodo 1']},
{tema:'elemento', c:'per', k:'Q', ctx:'El flúor de las cremas dentales tiene un comportamiento químico parecido al de otro elemento muy usado.', q:'¿Qué elemento está en el mismo grupo que el flúor (los halógenos)?', o:['Cloro','Oxígeno','Neón','Sodio']},

{tema:'elemento', c:'eo', k:'Q', ctx:'La cal y los suplementos minerales contienen metales del grupo 2 con la misma valencia.', q:'El calcio tiene valencia fija +2. ¿Cuál de estos elementos también tiene valencia fija +2?', o:['Magnesio','Sodio','Aluminio','Cloro']},
{tema:'elemento', c:'eo', k:'Q', ctx:'El hierro forma dos óxidos distintos: uno negro y otro rojo, como el del óxido de las rejas.', q:'El hierro tiene más de un estado de oxidación posible. ¿Cuáles son sus dos valencias más comunes?', o:['+2 y +3','+1 y +2','+3 y +4','+2 y +4']},
{tema:'elemento', c:'eo', k:'Q', ctx:'El sodio de la sal siempre forma compuestos con la misma valencia, a diferencia del hierro.', q:'El sodio tiene valencia fija +1. ¿Por qué no varía, a diferencia del hierro?', o:['Porque está en el grupo 1 y no es un metal de transición','Porque el sodio es en realidad un no metal','Porque el sodio no forma compuestos iónicos','Porque el sodio tiene más protones que el hierro']},
{tema:'elemento', c:'eo', k:'Q', ctx:'El oxígeno forma óxidos con casi todos los metales de la tabla periódica.', q:'El oxígeno casi siempre tiene estado de oxidación -2. ¿Qué tipo de ion forma como consecuencia?', o:['Un anión','Un catión','No forma iones','Un ion con carga positiva']},
{tema:'elemento', c:'eo', k:'Q', ctx:'El cobre forma dos óxidos: uno rojo y otro negro, que se usan como pigmentos.', q:'El cobre puede tener estado de oxidación +1 o +2. ¿Qué nombres tradicionales corresponden a estas dos valencias?', o:['Cuproso (+1) y cúprico (+2)','Ferroso (+1) y férrico (+2)','Niqueloso (+1) y niquélico (+2)','Auroso (+1) y aúrico (+2)']},

{tema:'elemento', c:'en', k:'Q', ctx:'El flúor de las cremas dentales y el sodio de la sal forman el fluoruro de sodio.', q:'Entre el flúor (F) y el sodio (Na), ¿cuál es más electronegativo?', o:['El flúor','El sodio','Ambos son iguales','Ninguno tiene electronegatividad']},
{tema:'elemento', c:'en', k:'Q', ctx:'El oxígeno y el calcio forman la cal viva que se usa en las fincas.', q:'Entre el oxígeno (O) y el calcio (Ca), ¿cuál es más electronegativo?', o:['El oxígeno','El calcio','Ambos son iguales','Ninguno']},
{tema:'elemento', c:'en', k:'Q', ctx:'El helio de los globos y el neón de los avisos luminosos no forman compuestos en condiciones normales.', q:'Los gases nobles como el helio y el neón casi no reaccionan químicamente. ¿Qué se puede esperar de su electronegatividad?', o:['Que no se les asigna un valor útil de electronegatividad (no forman enlaces)','Que son los más electronegativos de toda la tabla periódica','Que su electronegatividad es igual a la de los metales alcalinos','Que su electronegatividad aumenta con la masa de cada gas noble']},
{tema:'elemento', c:'en', k:'Q', ctx:'El aluminio y el cloro forman una sal que se usa en los antitranspirantes.', q:'Entre el cloro (Cl) y el aluminio (Al), ¿cuál es más electronegativo?', o:['El cloro','El aluminio','Ambos son iguales','Ninguno']},

{tema:'elemento', c:'uso', k:'CTS', ctx:'Las baterías de los carros eléctricos y algunos medicamentos dependen de un metal muy liviano.', q:'La industria colombiana explora depósitos de un metal alcalino en Boyacá, cuyo carbonato se usa en el tratamiento del trastorno bipolar en el sistema de salud público (EPS). ¿De qué elemento se trata?', o:['Litio','Sodio','Potasio','Magnesio']},
{tema:'elemento', c:'uso', k:'CTS', ctx:'La Catedral de Sal de Zipaquirá está tallada dentro de una mina de halita.', q:'Las minas de sal de Zipaquirá (Cundinamarca), Patrimonio Cultural colombiano con más de 500 años de explotación, extraen un compuesto formado por cloro y un metal alcalino. ¿Qué metal es?', o:['Sodio','Potasio','Litio','Calcio']},
{tema:'elemento', c:'uso', k:'CTS', ctx:'El volcán Galeras (Nariño) libera naturalmente un óxido de este elemento, que también se extrae del petróleo en Barrancabermeja y se usa en fungicidas agrícolas.', q:'¿De qué elemento se trata?', o:['Azufre','Carbono','Nitrógeno','Cloro']},
{tema:'elemento', c:'uso', k:'CTS', ctx:'Los cultivos de café, arroz y palma necesitan fertilizantes para crecer bien.', q:'Los fertilizantes usados en cultivos de café, arroz y palma africana en Colombia, y el ácido producido en plantas de Cartagena, tienen como elemento base a:', o:['Nitrógeno','Fósforo','Potasio','Azufre']},
{tema:'elemento', c:'uso', k:'CTS', ctx:'En Boyacá funciona la única siderúrgica integrada del país.', q:'La única siderúrgica integrada de Colombia, en Paz de Río (Boyacá), procesa hematita para producir acero a partir de un metal de transición. ¿Cuál es ese metal?', o:['Hierro','Cobre','Zinc','Manganeso']},
{tema:'elemento', c:'uso', k:'CTS', ctx:'La minería artesanal de oro contamina los ríos del Chocó, Antioquia y Cauca.', q:'La minería artesanal de oro en Chocó, Antioquia y Cauca suele usar un metal líquido a temperatura ambiente para separar el oro, generando contaminación ambiental grave. ¿Qué elemento es ese metal?', o:['Mercurio','Plomo','Plata','Cadmio']},
{tema:'elemento', c:'uso', k:'CTS', ctx:'Los cultivos de flores de la Sabana de Bogotá y la pólvora usan una sal llamada salitre.', q:'El nitrato de un metal alcalino (conocido como salitre) es clave en la floricultura de la Sabana de Bogotá y en la pólvora de las fiestas de fin de año. ¿Qué metal es?', o:['Potasio','Sodio','Litio','Calcio']},
{tema:'elemento', c:'uso', k:'CTS', ctx:'El INVIMA supervisa que la sal de cocina tenga un aditivo que previene el bocio.', q:'Desde 1950 Colombia exige añadir un halógeno a la sal de consumo humano para prevenir el bocio, algo que supervisa el INVIMA. ¿Qué elemento es?', o:['Yodo','Cloro','Flúor','Bromo']},

{tema:'reactividad', c:'oxi', k:'Q', ctx:'Las baterías de litio de los celulares contienen compuestos de este metal con oxígeno.', q:'El litio tiene valencia +1. ¿Cuál es la fórmula de su óxido en la cadena de reactividad?', o:['Li₂O','LiO','Li₂O₂','LiO₂']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'El vidrio de las botellas contiene óxidos de sodio y de calcio.', q:'El sodio tiene valencia +1. ¿Cuál es la fórmula de su óxido?', o:['Na₂O','NaO','Na₂O₂','NaO₂']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'Las cenizas de la leña contienen compuestos de potasio, que antes se usaban para hacer jabón.', q:'El potasio tiene valencia +1. ¿Cuál es la fórmula de su óxido?', o:['K₂O','KO','K₂O₂','KO₂']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'Al quemar una cinta de magnesio se forma un polvo blanco de su óxido.', q:'El magnesio tiene valencia +2. ¿Cuál es la fórmula de su óxido?', o:['MgO','Mg₂O','MgO₂','Mg₂O₃']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'Las fábricas de cal de Nobsa, en Boyacá, calientan la caliza para obtener cal viva.', q:'El calcio tiene valencia +2. ¿Cuál es la fórmula de su óxido?', o:['CaO','Ca₂O','CaO₂','Ca₂O₃']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'El bario de algunos fuegos artificiales forma un óxido al quemarse con el aire.', q:'El bario tiene valencia +2. ¿Cuál es la fórmula de su óxido?', o:['BaO','Ba₂O','BaO₂','Ba₂O₃']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'Las ventanas de aluminio están protegidas por una capa delgada de su óxido.', q:'El aluminio tiene valencia +3. ¿Cuál es la fórmula de su óxido?', o:['Al₂O₃','AlO₃','Al₃O₂','AlO']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'En los altos hornos de Paz de Río se forma un óxido negro de hierro en las primeras etapas.', q:'El hierro con valencia +2 forma un óxido. ¿Cuál es su fórmula?', o:['FeO','Fe₂O₃','FeO₂','Fe₂O']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'El color rojo de los ladrillos de Bogotá se debe a un óxido de hierro.', q:'El hierro con valencia +3 forma un óxido distinto al de valencia +2. ¿Cuál es su fórmula?', o:['Fe₂O₃','FeO','Fe₃O₂','FeO₃']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'Un alambre de cobre calentado en la llama se recubre de una capa negra.', q:'El cobre con valencia +2 forma un óxido. ¿Cuál es su fórmula?', o:['CuO','Cu₂O','CuO₂','Cu₂O₃']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'Las cremas de protección solar contienen un polvo blanco de zinc y oxígeno.', q:'El zinc tiene valencia fija +2. ¿Cuál es la fórmula de su óxido?', o:['ZnO','Zn₂O','ZnO₂','Zn₂O₃']},

{tema:'reactividad', c:'hid', k:'Q', ctx:'Los filtros de aire de las naves espaciales usan un hidróxido de litio para atrapar el CO₂.', q:'El óxido de litio (Li₂O) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['LiOH','Li(OH)₂','Li₂OH','LiO₂H']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'La leche de magnesia que se usa como antiácido se prepara a partir de óxido de magnesio.', q:'El óxido de magnesio (MgO) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['Mg(OH)₂','MgOH','Mg(OH)₃','Mg₂OH']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'El hidróxido de aluminio de los antiácidos se puede obtener a partir de su óxido.', q:'El óxido de aluminio (Al₂O₃) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['Al(OH)₃','Al(OH)₂','AlOH','Al₂(OH)₃']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'En el laboratorio se usa agua de barita, una base de bario, para detectar CO₂.', q:'El óxido de bario (BaO) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['Ba(OH)₂','BaOH','Ba(OH)₃','Ba₂OH']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'El óxido rojo de hierro de los suelos de los Llanos se relaciona con su hidróxido.', q:'El óxido de hierro(III) (Fe₂O₃) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['Fe(OH)₃','Fe(OH)₂','FeOH','Fe₂(OH)₃']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'El caldo bordelés para los cultivos se prepara con compuestos de cobre.', q:'El óxido de cobre (CuO) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['Cu(OH)₂','CuOH','Cu(OH)₃','Cu₂OH']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'Las pomadas para bebés contienen un compuesto de zinc que se relaciona con su hidróxido.', q:'El óxido de zinc (ZnO) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['Zn(OH)₂','ZnOH','Zn(OH)₃','Zn₂OH']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'La potasa cáustica que se usa en jabones líquidos se puede obtener a partir del óxido de potasio.', q:'El óxido de potasio (K₂O) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['KOH','K(OH)₂','K₂OH','KO₂H']},

{tema:'reactividad', c:'pas', k:'Q', ctx:'El sodio metálico pierde su brillo en pocos segundos al contacto con el aire.', q:'Para pasar del metal (sodio) a su óxido básico (Na₂O), ¿qué sustancia debe reaccionar con el sodio?', o:['Oxígeno (O₂)','Agua (H₂O)','Un ácido','Otro metal']},
{tema:'reactividad', c:'pas', k:'Q', ctx:'Los agricultores preparan cal apagada antes de aplicarla a los suelos ácidos.', q:'Para pasar del óxido básico (CaO) al hidróxido (Ca(OH)₂), ¿qué sustancia debe reaccionar con el óxido?', o:['Agua (H₂O)','Oxígeno (O₂)','Un ácido oxácido','Otro óxido']},
{tema:'reactividad', c:'pas', k:'Q', ctx:'La leche de magnesia neutraliza el exceso de ácido del estómago.', q:'Para pasar del hidróxido (Mg(OH)₂) a una sal, ¿qué tipo de sustancia debe reaccionar con el hidróxido?', o:['Un ácido (hídrico u oxácido)','Agua, que disuelve el hidróxido','Otro metal más reactivo que el magnesio','Oxígeno del aire, que lo oxida']},
{tema:'reactividad', c:'pas', k:'Q', ctx:'En el tratamiento de aguas ácidas de una mina se neutraliza el ácido sulfúrico con una base.', q:'Si el hidróxido de un metal reacciona con un ácido oxácido como el H₂SO₄, ¿qué tipo de sal se obtiene?', o:['Una sal oxigenada','Una sal binaria','Un óxido básico','Un hidróxido']},
{tema:'reactividad', c:'pas', k:'Q', ctx:'En el laboratorio, una estudiante neutraliza una base con un ácido y observa que el recipiente se calienta.', q:'Al final de toda la cadena de reactividad (metal → óxido → hidróxido → sal), ¿qué otra sustancia se produce siempre junto con la sal?', o:['Agua (H₂O)','Oxígeno (O₂)','Hidrógeno gaseoso (H₂)','Otro óxido']},
{tema:'reactividad', c:'pas', k:'Q', ctx:'Un estudiante dibuja en su cuaderno la cadena que va desde un metal hasta una de sus sales.', q:'¿Cuál es el primer eslabón de la cadena de reactividad, antes de formar el óxido básico?', o:['El metal puro','El hidróxido','La sal','El ácido']},

{tema:'reactividad', c:'sal', k:'Q', ctx:'En el laboratorio se neutraliza una solución de soda cáustica con ácido muriático y queda agua salada.', q:'El hidróxido de sodio (NaOH) reacciona con ácido clorhídrico (HCl). ¿Cuál es la sal resultante?', o:['NaCl','Na₂Cl','NaCl₂','NaClO']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'Cuando la cal apagada de un cultivo entra en contacto con lluvia ácida se forma una sal poco soluble.', q:'El hidróxido de calcio (Ca(OH)₂) reacciona con ácido sulfúrico (H₂SO₄). ¿Cuál es la sal resultante?', o:['CaSO₄','Ca(SO₄)₂','CaSO₃','Ca₂SO₄']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'Un antiácido con hidróxido de aluminio reacciona con un ácido del nitrógeno en un ensayo de laboratorio.', q:'El hidróxido de aluminio (Al(OH)₃) reacciona con ácido nítrico (HNO₃). ¿Cuál es la sal resultante?', o:['Al(NO₃)₃','Al(NO₃)₂','Al₃NO₃','AlNO₃']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'Un estudiante neutraliza leche de magnesia con el ácido de las gaseosas de cola.', q:'El hidróxido de magnesio (Mg(OH)₂) reacciona con ácido fosfórico (H₃PO₄). ¿Cuál es la sal resultante?', o:['Mg₃(PO₄)₂','Mg(PO₄)₃','Mg₂PO₄','MgPO₄']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'En el laboratorio se neutraliza agua de barita con ácido muriático.', q:'El hidróxido de bario (Ba(OH)₂) reacciona con ácido clorhídrico (HCl). ¿Cuál es la sal resultante?', o:['BaCl₂','Ba₂Cl','BaCl','Ba(Cl)₃']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'El hidróxido de hierro que se forma en las plantas de agua puede disolverse con ácido sulfúrico.', q:'El hidróxido de hierro(III) (Fe(OH)₃) reacciona con ácido sulfúrico (H₂SO₄). ¿Cuál es la sal resultante?', o:['Fe₂(SO₄)₃','FeSO₄','Fe(SO₄)₃','Fe₃(SO₄)₂']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'Un precipitado azul de cobre se disuelve al agregarle ácido muriático.', q:'El hidróxido de cobre (Cu(OH)₂) reacciona con ácido clorhídrico (HCl). ¿Cuál es la sal resultante?', o:['CuCl₂','Cu₂Cl','CuCl','CuClO']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'Un compuesto de zinc de una pomada se disuelve en un ácido del nitrógeno en un ensayo de laboratorio.', q:'El hidróxido de zinc (Zn(OH)₂) reacciona con ácido nítrico (HNO₃). ¿Cuál es la sal resultante?', o:['Zn(NO₃)₂','ZnNO₃','Zn(NO₃)₃','Zn₂NO₃']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'Algunas baterías de litio usan una sal que se obtiene al neutralizar hidróxido de litio con un ácido muy fuerte.', q:'El hidróxido de litio (LiOH) reacciona con ácido perclórico (HClO₄). ¿Cuál es la sal resultante?', o:['LiClO₄','Li(ClO₄)₂','Li₂ClO₄','LiClO₃']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'Para fabricar un fertilizante potásico se neutraliza potasa cáustica con ácido sulfúrico.', q:'El hidróxido de potasio (KOH) reacciona con ácido sulfúrico (H₂SO₄). ¿Cuál es la sal resultante?', o:['K₂SO₄','KSO₄','K(SO₄)₂','K₂SO₃']},

{tema:'reactividad', c:'val', k:'Q', ctx:'Un estudiante compara las cadenas de reactividad del sodio y del hierro en su cuaderno.', q:'¿Por qué un metal con valencia fija (como el sodio, siempre +1) genera una sola cadena de reactividad, mientras uno con valencia variable (como el hierro) genera varias?', o:['Porque cada valencia cambia la fórmula de óxido, hidróxido y sales','Porque el sodio no reacciona con el oxígeno del aire','Porque el hierro no alcanza a formar hidróxidos','Porque las cadenas de valencia fija no tienen sales']},
{tema:'reactividad', c:'val', k:'Q', ctx:'Un estudiante quiere dibujar todas las cadenas de reactividad posibles del calcio.', q:'Si un metal tuviera una sola valencia posible (como el sodio o el calcio), ¿cuántas cadenas de reactividad completas generaría?', o:['Una sola','Dos','Tres','Ninguna']},

{tema:'reactividad', c:'mdec', k:'Q', ctx:'En IonNom, cada parte de un compuesto se pinta con un color: catión, anión simple, oxoanión o hidróxido.', q:'En el hidróxido de calcio (Ca(OH)₂), ¿qué color MDEC corresponde al grupo OH⁻?', o:['Hidróxido (rosado)','Catión (ámbar)','Anión simple (azul)','Oxoanión (verde)']},
{tema:'reactividad', c:'mdec', k:'Q', ctx:'En IonNom se usa un código de cuatro colores para separar las partes de una sal como el sulfato de zinc.', q:'En el sulfato de zinc (ZnSO₄), ¿qué color MDEC corresponde al Zn²⁺?', o:['Catión (ámbar)','Anión simple (azul)','Hidróxido (rosado)','Oxoanión (verde)']},
{tema:'reactividad', c:'mdec', k:'Q', ctx:'En IonNom se usa un código de cuatro colores para pintar los iones de una sal binaria.', q:'En el cloruro de magnesio (MgCl₂), ¿qué color MDEC corresponde al Cl⁻?', o:['Anión simple (azul)','Catión (ámbar)','Hidróxido (rosado)','Oxoanión (verde)']},
{tema:'reactividad', c:'mdec', k:'Q', ctx:'Con el código de cuatro colores de IonNom, un estudiante colorea las partes del nitrato de aluminio.', q:'En el nitrato de aluminio (Al(NO₃)₃), ¿qué tipo de ion es el NO₃⁻ dentro del código de 4 colores?', o:['Oxoanión (verde)','Anión simple (azul)','Catión (ámbar)','Hidróxido (rosado)']},
{tema:'reactividad', c:'mdec', k:'Q', ctx:'Con el código de cuatro colores de IonNom, un estudiante colorea las partes de un óxido básico.', q:'En el óxido de bario (BaO), ¿qué color MDEC corresponde al Ba²⁺?', o:['Catión (ámbar)','Anión simple (azul)','Hidróxido (rosado)','Oxoanión (verde)']},
{tema:'reactividad', c:'mdec', k:'Q', ctx:'Con el código de cuatro colores de IonNom, un estudiante colorea las partes de una sal de magnesio.', q:'En el fosfato de magnesio (Mg₃(PO₄)₂), ¿qué tipo de ion es el PO₄³⁻?', o:['Oxoanión (verde)','Anión simple (azul)','Catión (ámbar)','Hidróxido (rosado)']}
,
{tema:'estequiometria', c:'calc', k:'Q', ctx:'En la planta de fertilizantes de Cartagena se calcula cuánto amoníaco sale del nitrógeno disponible.', q:'Para la ecuación balanceada N₂ + 3H₂ → 2NH₃, si tienes 14 g de N₂ (MM=28.014 g/mol), ¿cuántos gramos de NH₃ (MM=17.031 g/mol) se producen?', o:['17.03 g','34.06 g','8.52 g','51.09 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'El gas natural que llega a las casas es principalmente metano, que al quemarse produce agua y CO₂.', q:'Para la ecuación CH₄ + 2O₂ → CO₂ + 2H₂O, si se queman 16 g de CH₄ (MM=16.043), ¿cuántos gramos de H₂O (MM=18.015) se producen?', o:['35.93 g','18.02 g','72.06 g','9.01 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'En una planta de tratamiento se neutraliza ácido muriático con cal apagada.', q:'Para la ecuación 2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O, a partir de 72.92 g de HCl (MM=36.461), ¿cuántos gramos de CaCl₂ (MM=110.983) se producen?', o:['110.98 g','55.49 g','37.0 g','221.97 g']},
{tema:'estequiometria', c:'lim', k:'Q', ctx:'En un laboratorio se prepara agua a partir de hidrógeno y oxígeno en un recipiente cerrado.', q:'Para la reacción 2H₂ + O₂ → 2H₂O, ¿cuál es el reactivo limitante si tienes 4 g de H₂ (MM=2.016) y 40 g de O₂ (MM=32.00)?', o:['H₂','O₂','Ambos se agotan igual','Ninguno; sobran los dos']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'Una fábrica produce cloruro de aluminio, que se usa como catalizador, a partir de aluminio y cloro.', q:'Para la ecuación 2Al + 3Cl₂ → 2AlCl₃, si reaccionan 27.0 g de Al (MM=26.982), ¿cuántos gramos de AlCl₃ (MM=133.341) se obtienen?', o:['133.3 g','266.7 g','44.4 g','88.9 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'En una práctica de laboratorio se quema una cinta de magnesio pesada previamente.', q:'Para 2Mg + O₂ → 2MgO, a partir de 12.15 g de Mg (MM=24.305), ¿cuántos gramos de MgO (MM=40.304) se producen?', o:['20.15 g','12.15 g','40.30 g','10.08 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'Al echar zinc en ácido muriático se forman burbujas de hidrógeno y una sal de zinc.', q:'Para Zn + 2HCl → ZnCl₂ + H₂, a partir de 13.08 g de Zn (MM=65.38), ¿cuántos gramos de ZnCl₂ (MM=136.28) se producen?', o:['27.26 g','13.63 g','54.52 g','6.81 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'El aluminio de las latas forma una capa de óxido al contacto con el aire.', q:'Para 4Al + 3O₂ → 2Al₂O₃, a partir de 54.0 g de Al (MM=26.982), ¿cuántos gramos de Al₂O₃ (MM=101.961) se producen?', o:['102.03 g','204.1 g','51.0 g','68.0 g']},
{tema:'estequiometria', c:'calc', k:'CTS', ctx:'En una planta de galvanizado se hace reaccionar hierro con sulfato de cobre para depositar cobre metálico, como en la reacción Fe + CuSO₄ → FeSO₄ + Cu.', q:'A partir de 31.92 g de CuSO₄ (MM=159.602), ¿cuántos gramos de Cu (MM=63.546) se obtienen?', o:['12.71 g','25.42 g','6.35 g','31.92 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'En una planta química se neutraliza ácido sulfúrico con soda cáustica antes de desechar las aguas.', q:'Para H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O, a partir de 49.04 g de H₂SO₄ (MM=98.072), ¿cuántos gramos de Na₂SO₄ (MM=142.036) se producen?', o:['71.02 g','142.04 g','35.51 g','49.04 g']},
{tema:'estequiometria', c:'calc', k:'CTS', ctx:'El propano (C₃H₈) se usa en cilindros de gas en zonas rurales colombianas sin acceso a gas natural por tubería.', q:'Para C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, a partir de 22.05 g de C₃H₈ (MM=44.097), ¿cuántos gramos de CO₂ (MM=44.009) se producen?', o:['66.02 g','44.01 g','22.05 g','132.03 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'Una empresa quiere disolver los restos de mármol de su planta con ácido muriático.', q:'Para CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂, a partir de 50.04 g de CaCO₃ (MM=100.086), ¿cuántos gramos de HCl (MM=36.458) se necesitan?', o:['36.46 g','18.23 g','72.92 g','50.04 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'En una demostración de laboratorio se echa un trozo de sodio en agua y se recoge el gas.', q:'Para 2Na + 2H₂O → 2NaOH + H₂, a partir de 23.0 g de Na (MM=22.990), ¿cuántos gramos de H₂ (MM=2.016) se producen?', o:['1.01 g','2.02 g','0.50 g','4.03 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'En los altos hornos de Paz de Río se obtiene hierro a partir de la hematita y del monóxido de carbono.', q:'Para Fe₂O₃ + 3CO → 2Fe + 3CO₂, a partir de 79.85 g de Fe₂O₃ (MM=159.687), ¿cuántos gramos de Fe (MM=55.845) se producen?', o:['55.85 g','111.69 g','27.92 g','79.85 g']},
{tema:'estequiometria', c:'calc', k:'CTS', ctx:'En joyería artesanal, el cobre metálico puede desplazar a la plata de una disolución de nitrato de plata, como en Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag.', q:'A partir de 31.77 g de Cu (MM=63.546), ¿cuántos gramos de Ag (MM=107.868) se obtienen?', o:['107.86 g','53.93 g','215.74 g','31.77 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'Al quemar fósforo con abundante oxígeno se forma un humo blanco que se recoge y se pesa.', q:'Para 4P + 5O₂ → 2P₂O₅, a partir de 12.39 g de P (MM=30.974), ¿cuántos gramos de P₂O₅ (MM=141.943) se producen?', o:['28.39 g','56.78 g','14.19 g','12.39 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'En el laboratorio se recoge el hidrógeno que se forma al echar aluminio en ácido sulfúrico diluido.', q:'Para 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂, a partir de 53.96 g de Al (MM=26.982), ¿cuántos gramos de H₂ (MM=2.016) se producen?', o:['6.05 g','4.03 g','12.10 g','2.02 g']},
{tema:'estequiometria', c:'calc', k:'CTS', ctx:'La roca fosfórica colombiana se trata con ácido sulfúrico para producir ácido fosfórico, usado en fertilizantes: Ca₃(PO₄)₂ + 3H₂SO₄ → 3CaSO₄ + 2H₃PO₄.', q:'A partir de 155.09 g de Ca₃(PO₄)₂ (MM=310.174), ¿cuántos gramos de H₃PO₄ (MM=97.994) se producen?', o:['98.0 g','196.0 g','49.0 g','155.09 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'En la fabricación de ácido nítrico, el amoníaco se oxida con oxígeno sobre una malla de platino.', q:'Para 4NH₃ + 5O₂ → 4NO + 6H₂O, a partir de 34.06 g de NH₃ (MM=17.031), ¿cuántos gramos de NO (MM=30.006) se producen?', o:['60.01 g','30.01 g','120.02 g','34.06 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'En una finca se prepara cal apagada a partir de cal viva y agua.', q:'Para CaO + H₂O → Ca(OH)₂, a partir de 28.04 g de CaO (MM=56.077), ¿cuántos gramos de Ca(OH)₂ (MM=74.092) se producen?', o:['37.05 g','28.04 g','74.09 g','18.52 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'En el laboratorio se neutraliza ácido muriático con soda cáustica y se evapora el agua.', q:'Para HCl + NaOH → NaCl + H₂O, a partir de 36.46 g de HCl (MM=36.458), ¿cuántos gramos de NaCl (MM=58.44) se producen?', o:['58.44 g','36.46 g','29.22 g','116.88 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'En la planta de fertilizantes se calcula cuánto amoníaco se obtiene con el hidrógeno disponible.', q:'Para N₂ + 3H₂ → 2NH₃, a partir de 6.05 g de H₂ (MM=2.016), ¿cuántos gramos de NH₃ (MM=17.031) se producen?', o:['34.07 g','17.03 g','68.14 g','6.05 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'Un estudiante calcula cuánto óxido se forma cuando se oxida una reja de hierro.', q:'Para 4Fe + 3O₂ → 2Fe₂O₃, a partir de 22.34 g de Fe (MM=55.845), ¿cuántos gramos de Fe₂O₃ (MM=159.687) se producen?', o:['31.94 g','63.87 g','22.34 g','15.97 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'En una planta química se debe neutralizar un derrame de soda cáustica con ácido sulfúrico.', q:'Para H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O, si se necesitan neutralizar 20.0 g de NaOH (MM=39.997), ¿cuántos gramos de H₂SO₄ (MM=98.072) se requieren?', o:['24.52 g','49.04 g','20.0 g','12.26 g']},
{tema:'estequiometria', c:'pasos', k:'Q', ctx:'Un estudiante resuelve un problema de estequiometría a partir de una masa de reactivo dada en gramos.', q:'En el método de factor-unitario para resolver un problema de estequiometría, ¿cuál es el PRIMER paso, antes de usar la razón molar de la ecuación?', o:['Convertir los gramos del dato a moles del dato (÷ masa molar del dato)','Convertir los moles de lo pedido a gramos de lo pedido','Multiplicar directamente los gramos del dato por la masa molar de lo pedido','Balancear de nuevo la ecuación química']},
{tema:'estequiometria', c:'pasos', k:'Q', ctx:'Un compañero obtuvo un resultado muy distinto al de la clave porque usó mal la razón molar.', q:'¿Cuál es el error más común al calcular la razón molar entre dos especies de una ecuación balanceada?', o:['Usarla al revés (coeficiente del dato ÷ coeficiente de lo pedido, en vez de lo pedido ÷ dato)','Olvidar que los coeficientes de la ecuación deben ser siempre números enteros','Confundir el coeficiente de la ecuación con el subíndice de cada fórmula','Usar los coeficientes de una ecuación que todavía no se ha balanceado']},
{tema:'estequiometria', c:'pasos', k:'Q', ctx:'Un estudiante quiere calcular directamente con gramos los productos de una reacción.', q:'¿Por qué es obligatorio pasar primero los gramos del dato a MOLES, y no trabajar directamente con los gramos?', o:['Porque la razón molar de la ecuación balanceada relaciona moles, no gramos, de cada especie','Porque los gramos no se pueden convertir directamente a ninguna otra unidad','Porque la masa molar solo sirve para sólidos y no para gases ni líquidos','Porque los coeficientes de la ecuación balanceada están dados en gramos']},
{tema:'estequiometria', c:'lim', k:'Q', ctx:'En una fábrica se tienen cantidades conocidas en gramos de dos reactivos y se quiere saber cuál se acaba.', q:'Al identificar el reactivo limitante en una reacción con dos reactivos dados en gramos, ¿qué se debe comparar?', o:['Los moles disponibles de cada reactivo contra la razón molar que exige la ecuación balanceada','Los gramos disponibles de cada reactivo, directamente, sin convertir a moles','Solo las masas molares de los dos reactivos, sin tener en cuenta la ecuación','Los coeficientes de la ecuación, sin tener en cuenta las cantidades disponibles']},
{tema:'estequiometria', c:'lim', k:'Q', ctx:'Un ingeniero calcula cuánto producto obtendrá una planta, pero se equivoca al escoger el reactivo que se acaba.', q:'¿Qué consecuencia tiene identificar mal el reactivo limitante en un cálculo de estequiometría?', o:['Se calcula una cantidad de producto mayor a la que realmente se puede formar','El resultado sigue siendo correcto porque el otro reactivo no afecta el cálculo','La ecuación química queda sin balancear','Cambia el estado de oxidación de los productos']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'Un ingeniero de una planta química recibe el encargo de calcular la producción de un compuesto.', q:'¿Qué información necesitas ANTES de poder resolver cualquier problema de estequiometría entre dos especies de una reacción?', o:['La ecuación química ya balanceada (con sus coeficientes correctos)','Solo las masas molares de las especies, sin la ecuación','El estado físico (sólido, líquido, gas) de cada especie','El nombre comercial del compuesto']},
{tema:'estequiometria', c:'conc', k:'CTS', ctx:'Un ingeniero de una planta de fertilizantes en Colombia necesita calcular cuánto amoníaco (NH₃) comprar para producir una tonelada de un fertilizante nitrogenado.', q:'¿Qué dato adicional, además del precio del amoníaco, necesita el ingeniero para hacer este cálculo con estequiometría?', o:['La ecuación balanceada de la reacción entre el amoníaco y los demás reactivos del proceso','El color y el olor del amoníaco líquido que va a comprar para la planta','La fecha de fabricación y de vencimiento del fertilizante que va a producir','El nombre del proveedor y el país de origen del amoníaco que va a comprar']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'En una fábrica se produce cloruro de aluminio a partir de aluminio y cloro.', q:'Si una ecuación balanceada es 2Al + 3Cl₂ → 2AlCl₃, ¿cuál es la razón molar correcta para convertir de moles de Cl₂ a moles de AlCl₃?', o:['2 mol AlCl₃ / 3 mol Cl₂','3 mol AlCl₃ / 2 mol Cl₂','1 mol AlCl₃ / 1 mol Cl₂','2 mol Cl₂ / 3 mol AlCl₃']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'Un estudiante lee la ecuación balanceada de la síntesis del agua en voz alta en la clase.', q:'¿Qué unidad usan los coeficientes de una ecuación química balanceada para relacionar las cantidades de reactivos y productos?', o:['Moles','Gramos','Litros','Átomos individuales']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'Una panadería duplica la cantidad de bicarbonato en una receta y quiere saber cuánto gas se forma.', q:'Si duplicas la cantidad de gramos de un reactivo en un problema de estequiometría (y el otro reactivo sigue en exceso), ¿qué pasa con los gramos de producto obtenidos?', o:['También se duplican','Se reducen a la mitad','Quedan exactamente igual','Se triplican']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'Un compañero intentó calcular la masa de los productos con una ecuación sin balancear.', q:'¿Por qué NO se puede calcular estequiometría con una ecuación química que todavía no está balanceada?', o:['Porque los coeficientes sin balancear no reflejan la proporción real de átomos que reaccionan','Porque las fórmulas cambiarían de un lado a otro de la ecuación','Porque las masas molares solo existen para ecuaciones balanceadas','Porque una ecuación sin balancear no tiene reactivos ni productos']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'Un estudiante calcula cuánta agua produce la combustión de una muestra de gas natural.', q:'En el problema "a partir de 16 g de CH₄ (MM=16.043), ¿cuántos gramos de H₂O se producen?", ¿cuántos moles de CH₄ hay, aproximadamente, antes de aplicar la razón molar?', o:['≈0.997 mol','≈16 mol','≈1.6 mol','≈0.5 mol']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'Un estudiante resuelve varios problemas sobre la misma reacción con distintas masas de reactivo.', q:'¿Qué parte de la ecuación química NUNCA cambia al resolver un problema de estequiometría, sin importar los gramos que se den?', o:['Los coeficientes de la ecuación ya balanceada','La masa molar de cada especie','La cantidad de gramos del dato','El resultado final en gramos']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'Un estudiante organiza los pasos para resolver un problema de estequiometría en su cuaderno.', q:'¿Cuál de estas secuencias de conversión es la correcta para ir de "gramos del reactivo A" a "gramos del producto B"?', o:['gramos A → moles A → moles B → gramos B','gramos A → gramos B directamente','moles A → gramos A → gramos B','gramos A → moles B → gramos A → gramos B']},
{tema:'atomo', c:'uso', k:'Q', ctx:'Un estudiante consulta la tabla periódica para saber qué elemento tiene 8 protones.', q:'¿Qué indica el número atómico (Z) de un elemento?', o:['El número de protones de su núcleo','El número de neutrones de su núcleo','La suma de protones y neutrones','El número de niveles de energía que tiene']},
{tema:'atomo', c:'exp', k:'Q', ctx:'En el tubo de rayos catódicos de Thomson, el haz invisible que sale del cátodo se desvía hacia la placa con carga positiva.', q:'¿Qué se puede concluir sobre las partículas que forman el haz?', o:['Tienen carga negativa','Tienen carga positiva','No tienen carga eléctrica','Son ondas de luz sin masa']},
{tema:'atomo', c:'ind', k:'Q', ctx:'En el experimento de Geiger y Marsden se dispararon partículas alfa contra una lámina de oro muy delgada. Casi todas la atravesaron sin desviarse, pero aproximadamente 1 de cada 8000 rebotó.', q:'¿Qué conclusión explica AMBOS resultados?', o:['El átomo es casi todo espacio vacío, con un núcleo pequeño, denso y positivo','El átomo es una esfera maciza de carga positiva repartida','Los electrones son más pesados que las partículas alfa','La lámina de oro tenía agujeros visibles']},
{tema:'atomo', c:'exp', k:'Q', ctx:'Thomson descubrió en 1897 unas partículas negativas mucho más pequeñas que el átomo.', q:'¿Qué idea del modelo de Dalton quedó descartada con el descubrimiento del electrón?', o:['Que el átomo es indivisible','Que la masa se conserva en las reacciones','Que los compuestos tienen proporciones fijas','Que los elementos están formados por átomos']},
{tema:'atomo', c:'uso', k:'Q', ctx:'En el agua de las aguas termales de Paipa hay iones de azufre que le dan su olor.', q:'Un ion tiene 16 protones, 16 neutrones y 18 electrones. ¿Cuál es?', o:['S²⁻ (azufre-32)','S²⁺ (azufre-32)','Ar (argón-34)','O²⁻ (oxígeno-16)']},
{tema:'atomo', c:'uso', k:'Q', ctx:'El cloro natural tiene dos isótopos, uno de ellos de masa 37.', q:'¿Cuántos neutrones tiene el isótopo cloro-37 (Z = 17)?', o:['20','17','37','54']},
{tema:'atomo', c:'uso', k:'CTS', ctx:'Los arqueólogos usan el carbono-14 para fechar restos de las culturas muisca y tairona. El carbono más abundante en la naturaleza es el carbono-12.', q:'¿En qué se diferencian un átomo de carbono-14 y uno de carbono-12?', o:['En el número de neutrones (8 y 6)','En el número de protones (14 y 12)','En el número de electrones del átomo neutro','En que el carbono-14 no es carbono']},
{tema:'atomo', c:'exp', k:'Q', ctx:'Según el modelo de Bohr, el electrón del hidrógeno solo puede ocupar ciertos niveles de energía.', q:'¿Qué ocurre cuando el electrón pasa de un nivel alto (n = 3) a uno más bajo (n = 2)?', o:['Emite un fotón con una energía definida (luz de un color específico)','Absorbe un fotón de cualquier energía y sube a otro nivel','Cae al núcleo y el átomo de hidrógeno deja de existir','Se convierte en un protón al perder su energía']},
{tema:'atomo', c:'uso', k:'Q', ctx:'Un estudiante compara el modelo de Bohr con el modelo actual del átomo.', q:'¿Qué describe un orbital en el modelo mecánico-cuántico actual?', o:['Una región del espacio donde es muy probable encontrar al electrón','La trayectoria circular exacta que sigue el electrón alrededor del núcleo','El lugar dentro del núcleo donde se ubican los neutrones del átomo','La energía total del átomo cuando todos sus electrones están quietos']},
{tema:'atomo', c:'exp', k:'Q', ctx:'En la tabla periódica, la masa atómica del cloro aparece con decimales.', q:'¿Por qué la masa atómica del cloro en la tabla periódica es 35,45 y no un número entero?', o:['Porque es el promedio ponderado de la masa de sus isótopos naturales','Porque el cloro tiene medio neutrón en su núcleo','Porque incluye la masa de los electrones ganados al formar iones','Porque los instrumentos no pueden medir masas exactas']},
{tema:'atomo', c:'ind', k:'Q', ctx:'Thomson repitió su experimento cambiando el metal del cátodo (cobre, hierro, aluminio) y el haz se desvió exactamente igual en todos los casos.', q:'¿Qué indica este resultado?', o:['Que el electrón es una partícula que está en todos los átomos','Que cada metal tiene un tipo distinto de electrón','Que el metal del cátodo no emite partículas','Que los rayos catódicos tienen carga positiva']},
{tema:'atomo', c:'uso', k:'Q', ctx:'Para una exposición, un grupo debe ordenar en una línea del tiempo los modelos atómicos que estudió.', q:'¿Cuál es el orden histórico correcto de los modelos atómicos?', o:['Dalton → Thomson → Rutherford → Bohr','Thomson → Dalton → Bohr → Rutherford','Rutherford → Dalton → Thomson → Bohr','Dalton → Bohr → Rutherford → Thomson']},
{tema:'config-e', c:'uso', k:'Q', ctx:'El oxígeno que respiramos tiene 8 electrones, que se distribuyen en niveles y subniveles.', q:'¿Cuál es la configuración electrónica del oxígeno (Z = 8)?', o:['1s² 2s² 2p⁴','1s² 2s² 2p⁶','1s² 2p⁶','1s² 2s⁴ 2p²']},
{tema:'config-e', c:'uso', k:'Q', ctx:'Un estudiante llena el diagrama de Moeller para escribir la configuración del potasio.', q:'Según el diagrama de Moeller, ¿qué subnivel se llena justo después del 3p?', o:['4s','3d','4p','3f']},
{tema:'config-e', c:'exp', k:'Q', ctx:'Un estudiante dibujó así los 3 electrones del subnivel 2p del nitrógeno: [↑↓] [↑] [  ].', q:'¿Qué regla incumplió?', o:['La regla de Hund: primero debe ir un electrón en cada orbital','El principio de Pauli: en un orbital no caben 2 electrones','El principio de Aufbau: el 2p se llena antes que el 2s','Ninguna: el diagrama es correcto']},
{tema:'config-e', c:'uso', k:'Q', ctx:'Un elemento verdoso y tóxico que se usa para potabilizar el agua tiene esta configuración abreviada.', q:'¿Qué elemento tiene la configuración abreviada [Ne] 3s² 3p⁵?', o:['Cloro (Z = 17)','Azufre (Z = 16)','Argón (Z = 18)','Flúor (Z = 9)']},
{tema:'config-e', c:'exp', k:'Q', ctx:'El arsénico, que contamina el agua de algunas zonas mineras, termina su configuración en un subnivel p.', q:'Un elemento neutro termina su configuración en 4p³. ¿Cuál es su periodo y su grupo?', o:['Periodo 4, grupo 15','Periodo 3, grupo 15','Periodo 4, grupo 3','Periodo 4, grupo 13']},
{tema:'config-e', c:'uso', k:'Q', ctx:'El azufre de las aguas termales tiene una configuración que explica su valencia más común.', q:'¿Cuántos electrones de valencia tiene el azufre, cuya configuración es [Ne] 3s² 3p⁴?', o:['6','4','2','16']},
{tema:'config-e', c:'exp', k:'Q', ctx:'La configuración esperada del cromo (Z = 24) por la regla de Moeller es [Ar] 4s² 3d⁴, pero la real es [Ar] 4s¹ 3d⁵.', q:'¿Cómo se explica esta excepción?', o:['Un subnivel d semilleno (d⁵) es especialmente estable','El 4s tiene más energía que el 4p','El cromo pierde un electrón al formarse','Los electrones del cromo no cumplen el principio de Pauli']},
{tema:'config-e', c:'uso', k:'Q', ctx:'El hierro (Z = 26) tiene la configuración [Ar] 4s² 3d⁶.', q:'¿Cuál es la configuración del ion Fe²⁺?', o:['[Ar] 3d⁶','[Ar] 4s² 3d⁴','[Ar] 4s² 3d⁸','[Ar] 4s¹ 3d⁵']},
{tema:'config-e', c:'uso', k:'Q', ctx:'Un estudiante calcula cuántos electrones caben en el tercer nivel de energía de un átomo.', q:'¿Cuántos electrones caben como máximo en el nivel n = 3?', o:['18','8','9','32']},
{tema:'config-e', c:'exp', k:'CTS', ctx:'En la pólvora de fin de año, las sales de estroncio dan color rojo y las de bario color verde. En el laboratorio, el ensayo a la llama permite identificar metales por su color.', q:'¿Por qué cada elemento emite colores característicos al calentarse?', o:['Porque sus electrones excitados regresan a niveles más bajos emitiendo energías exactas, propias de cada elemento','Porque cada metal tiene un color propio en su superficie que se ve al calentarlo','Porque el calor cambia el número de protones del núcleo y cada cambio da un color','Porque los neutrones del núcleo se liberan como luz cuando el metal se calienta']},
{tema:'config-e', c:'exp', k:'Q', ctx:'El hierro de las varillas y el cobre de los cables tienen su último electrón en un subnivel d.', q:'El último electrón de un elemento entra en un subnivel d. ¿A qué bloque de la tabla pertenece y qué tipo de elemento es?', o:['Bloque d: metal de transición','Bloque s: metal alcalino','Bloque p: no metal','Bloque f: lantánido']},
{tema:'config-e', c:'uso', k:'Q', ctx:'El fósforo de los fertilizantes tiene su último subnivel parcialmente lleno.', q:'¿Cuántos electrones desapareados tiene el fósforo ([Ne] 3s² 3p³)?', o:['3','1','5','0']},
{tema:'enlace', c:'uso', k:'Q', ctx:'La sal de cocina de Zipaquirá se forma a partir de un metal muy reactivo y un gas tóxico.', q:'¿Qué ocurre con los electrones cuando el sodio y el cloro forman cloruro de sodio?', o:['El sodio cede un electrón al cloro y se forman los iones Na⁺ y Cl⁻','El sodio y el cloro comparten un par de electrones','El cloro cede un electrón al sodio','Los dos átomos pierden un electrón cada uno']},
{tema:'enlace', c:'uso', k:'Q', ctx:'Electronegatividades de Pauling: H = 2,20; Cl = 3,16.', q:'¿Qué tipo de enlace hay en el HCl?', o:['Covalente polar, porque ΔEN = 0,96','Covalente apolar, porque los dos son no metales','Iónico, porque el cloro es muy electronegativo','Metálico, porque el hidrógeno está en el grupo 1']},
{tema:'enlace', c:'uso', k:'Q', ctx:'La alúmina de las lijas y piedras de esmeril es un compuesto iónico de aluminio y oxígeno.', q:'¿Cuál es la fórmula del compuesto iónico que forman el aluminio (Al³⁺) y el oxígeno (O²⁻)?', o:['Al₂O₃','AlO','Al₃O₂','AlO₃']},
{tema:'enlace', c:'exp', k:'Q', ctx:'El CO₂ que exhalamos tiene enlaces polares, pero no se disuelve bien en agua.', q:'Los enlaces C=O del CO₂ son polares, pero la molécula es apolar. ¿Por qué?', o:['Porque la molécula es lineal y los dos dipolos se cancelan','Porque el carbono es más electronegativo que el oxígeno','Porque los enlaces dobles nunca son polares','Porque el CO₂ es un compuesto iónico']},
{tema:'enlace', c:'exp', k:'Q', ctx:'En un taller de metalmecánica, el cobre se trabaja a martillo, mientras que un cristal de sal se quiebra.', q:'¿Por qué un trozo de cobre se aplana al martillarlo, mientras que un cristal de sal se rompe?', o:['En el metal las capas se deslizan y el mar de electrones las mantiene unidas; en la sal quedan iones de igual carga enfrentados y se repelen','El cobre es más blando porque sus átomos forman enlaces covalentes que se doblan sin romperse, y la sal tiene enlaces metálicos rígidos','La sal tiene un mar de electrones que se rompe con el golpe, mientras que el cobre tiene iones fijos que absorben la fuerza del martillo','El cobre absorbe el golpe porque sus moléculas son grandes y elásticas, y la sal se rompe porque sus moléculas son pequeñas y duras']},
{tema:'enlace', c:'ind', k:'Q', ctx:'En el laboratorio se ensayaron tres sólidos blancos. El sólido X funde a 801 °C y solo conduce disuelto en agua. El sólido Y funde a 186 °C, se disuelve y la disolución no conduce. El sólido Z funde a 55 °C, no se disuelve en agua y no conduce.', q:'¿Qué conclusión es correcta?', o:['X es iónico; Y y Z son covalentes moleculares','X es metálico; Y es iónico; Z es covalente','Los tres son iónicos porque son sólidos blancos','Y es iónico porque se disuelve en agua']},
{tema:'enlace', c:'exp', k:'Q', ctx:'Un estudiante conecta un bombillo a una pila y a dos electrodos metidos en distintas muestras. Con un alambre de cobre sólido el bombillo enciende; con sal sólida no enciende; con sal disuelta en agua sí enciende.', q:'¿Qué explica estos resultados?', o:['El cobre tiene electrones libres; la sal tiene iones que solo se mueven cuando está disuelta','La sal sólida no tiene iones y el agua se los aporta al disolverla','El cobre tiene iones libres y la sal sólida tiene electrones libres','El agua es la única sustancia que conduce la corriente en los tres casos']},
{tema:'enlace', c:'uso', k:'Q', ctx:'El agua tiene propiedades especiales, como disolver muchas sustancias, por su estructura.', q:'En la estructura de Lewis del agua (H₂O), ¿cuántos pares de electrones libres tiene el oxígeno?', o:['2','0','1','4']},
{tema:'enlace', c:'exp', k:'Q', ctx:'Al formarse la sal de cocina, el sodio cambia de tamaño al convertirse en ion.', q:'¿Por qué el ion Na⁺ es más pequeño que el átomo de sodio?', o:['Porque al perder su electrón de valencia pierde todo el nivel 3','Porque al perder el electrón gana un protón más en el núcleo','Porque el electrón que gana comprime la nube de los demás','Porque los cationes siempre tienen menos neutrones que el átomo']},
{tema:'enlace', c:'uso', k:'Q', ctx:'Electronegatividades: C = 2,55; H = 2,20; O = 3,44; F = 3,98.', q:'¿Cuál de estos enlaces es covalente apolar?', o:['C–H (ΔEN = 0,35)','O–H (ΔEN = 1,24)','C–O (ΔEN = 0,89)','C–F (ΔEN = 1,43)']},
{tema:'enlace', c:'exp', k:'CTS', ctx:'En Zipaquirá se extrae sal de roca (NaCl). Para limpiarla, se disuelve en agua, se filtra y luego se evapora el agua.', q:'¿Por qué la sal se disuelve en agua y no en aceite?', o:['Porque el agua es polar y atrae a los iones Na⁺ y Cl⁻; el aceite es apolar','Porque el aceite es iónico y sus iones repelen a los de la sal','Porque la sal es una sustancia apolar que se mezcla mejor con agua','Porque el agua rompe los núcleos de los iones y los separa']},
{tema:'enlace', c:'exp', k:'Q', ctx:'La arena de las playas y los cristales de cuarzo son muy duros y difíciles de fundir.', q:'El cuarzo (SiO₂) no conduce la electricidad y funde a unos 1700 °C. ¿Cómo se explica su altísimo punto de fusión?', o:['Es un sólido covalente de red: para fundirlo hay que romper enlaces covalentes','Es un compuesto iónico como la sal, con iones muy cargados','Tiene un mar de electrones muy fuerte que mantiene unidos los átomos','Sus moléculas son muy pesadas y necesitan mucho calor para moverse']},
{tema:'elemento', c:'hist', k:'Q', ctx:'Mendeléiev organizó en 1869 los elementos conocidos en una tabla y dejó casillas vacías.', q:'¿Qué criterio usó Mendeléiev en 1869 para ordenar los 63 elementos conocidos?', o:['La masa atómica, agrupando los elementos de propiedades parecidas','El número atómico, es decir, la cantidad de protones de cada elemento','El orden alfabético de sus nombres en latín, para facilitar la consulta','La fecha en que fue descubierto cada elemento, del más antiguo al más nuevo']},
{tema:'elemento', c:'hist', k:'Q', ctx:'Mendeléiev dejó una casilla vacía debajo del silicio y predijo para ese elemento desconocido una masa cercana a 72 y una densidad de 5,5 g/cm³. En 1886 se descubrió el germanio, con masa 72,6 y densidad 5,3 g/cm³.', q:'¿Qué muestra este hecho sobre la tabla de Mendeléiev?', o:['Que su organización permitía predecir elementos aún no descubiertos','Que Mendeléiev ya conocía el germanio y lo ocultó','Que la masa atómica no tiene relación con las propiedades','Que el germanio es un gas noble']},
{tema:'elemento', c:'hist', k:'Q', ctx:'Döbereiner agrupó el litio (masa 6,9), el sodio (23,0) y el potasio (39,1) en una «tríada».', q:'¿Qué regularidad encontró en estas tríadas?', o:['La masa del elemento del medio es aproximadamente el promedio de las otras dos','Los tres elementos tienen exactamente la misma masa atómica','La masa del tercer elemento es el doble de la del primero','Los tres elementos son gases a temperatura ambiente']},
{tema:'elemento', c:'hist', k:'Q', ctx:'Antes de Mendeléiev, el químico inglés Newlands notó una repetición de propiedades al ordenar los elementos.', q:'Newlands notó que, al ordenar los elementos por masa, cada octavo elemento se parecía al primero. ¿Cómo se llamó su propuesta?', o:['Ley de las octavas','Tornillo telúrico','Ley periódica moderna','Ley de las tríadas']},
{tema:'elemento', c:'hist', k:'Q', ctx:'Moseley midió los rayos X que emitían distintos elementos y encontró un patrón muy regular.', q:'¿Qué aportó Henry Moseley en 1913 a la tabla periódica?', o:['Mostró que el orden correcto lo da el número atómico (los protones del núcleo)','Descubrió los gases nobles y los agregó como un grupo nuevo','Propuso ordenar los elementos por su masa atómica creciente','Separó los actínidos en una fila aparte, debajo de la tabla']},
{tema:'elemento', c:'hist', k:'Q', ctx:'Por orden de masa atómica, el yodo (126,9) debería ir antes que el teluro (127,6), pero Mendeléiev puso al teluro primero, con el oxígeno y el azufre, y al yodo con los halógenos.', q:'¿Qué confirmó años después que Mendeléiev tenía razón?', o:['El número atómico: el teluro tiene 52 protones y el yodo 53','Que la masa del yodo estaba mal medida y en realidad era mayor','Que el teluro es un gas noble y por eso va antes que el yodo','Que el yodo no es un halógeno y no pertenece a ese grupo']},
{tema:'elemento', c:'hist', k:'Q', ctx:'Ramsay descubrió en el aire varios gases que no reaccionaban con ninguna sustancia.', q:'¿Qué grupo completo se agregó a la tabla de Mendeléiev a finales del siglo XIX, gracias a William Ramsay?', o:['Los gases nobles (hoy grupo 18)','Los metales alcalinos','Los halógenos','Los lantánidos']},
{tema:'elemento', c:'hist', k:'Q', ctx:'Lavoisier publicó en 1789 una de las primeras listas de sustancias que consideraba elementos.', q:'En 1789, Lavoisier publicó una lista de 33 «sustancias simples». ¿Cuáles de ellas hoy NO se consideran elementos?', o:['La luz y el calórico','El oxígeno y el hidrógeno','El oro y el platino','El azufre y el fósforo']},
{tema:'elemento', c:'hist', k:'Q', ctx:'Seaborg descubrió varios elementos pesados y propuso cambiar su ubicación en la tabla.', q:'¿Qué propuso Glenn Seaborg en 1945 que le dio a la tabla su forma actual?', o:['Ubicar los actínidos en una fila aparte, debajo de los lantánidos','Ordenar todos los elementos por su número atómico creciente','Agregar el grupo de los gases nobles al final de cada periodo','Dividir los elementos en metales y no metales con una escalera']},
{tema:'elemento', c:'hist', k:'CTS', ctx:'El platino que aparecía en la lista de Lavoisier de 1789 llegó a Europa desde la región del Chocó, en la actual Colombia, donde lo describió Antonio de Ulloa en 1748.', q:'¿En qué zona de la tabla periódica actual se encuentra el platino?', o:['En el bloque d, con los metales de transición','En el grupo 1, con los metales alcalinos','En el grupo 18, con los gases nobles','En el bloque p, con los no metales']},
{tema:'elemento', c:'org', k:'Q', ctx:'En un libro antiguo de química, el oxígeno y el azufre aparecen en un grupo con otra numeración.', q:'En la numeración tradicional, el grupo 16 de la IUPAC corresponde al grupo:', o:['VIA','VIB','XVI','IVA']},
{tema:'elemento', c:'org', k:'Q', ctx:'En un libro antiguo de química, el hierro, el cobalto y el níquel aparecen en un mismo grupo.', q:'Los grupos 8, 9 y 10 de la IUPAC comparten en la numeración tradicional el nombre:', o:['VIIIB','VIIIA','VIIB','IB']},
{tema:'elemento', c:'org', k:'Q', ctx:'Un estudiante cuenta las columnas de metales de transición en la tabla periódica.', q:'¿Por qué el bloque d de la tabla periódica tiene exactamente 10 columnas?', o:['Porque un subnivel d admite como máximo 10 electrones','Porque hay 10 metales de transición','Porque el nivel 3 tiene 10 orbitales','Porque así lo decidió Mendeléiev']},
{tema:'elemento', c:'org', k:'Q', ctx:'Un elemento tiene la configuración 1s² 2s² 2p⁶ 3s² 3p⁴.', q:'¿En qué periodo, grupo y bloque está?', o:['Periodo 3, grupo 16, bloque p','Periodo 4, grupo 16, bloque p','Periodo 3, grupo 4, bloque s','Periodo 3, grupo 14, bloque p']},
{tema:'elemento', c:'org', k:'Q', ctx:'El hierro tiene la configuración [Ar] 4s² 3d⁶.', q:'¿En qué periodo y grupo está?', o:['Periodo 4, grupo 8','Periodo 3, grupo 6','Periodo 4, grupo 2','Periodo 3, grupo 8']},
{tema:'elemento', c:'org', k:'Q', ctx:'El material de los chips de los celulares tiene propiedades intermedias entre metales y no metales.', q:'¿Cuál de estos elementos es un metaloide?', o:['Silicio (Si)','Sodio (Na)','Cloro (Cl)','Hierro (Fe)']},
{tema:'elemento', c:'org', k:'Q', ctx:'Un estudiante cuenta los elementos de la fila del sodio al argón en la tabla periódica.', q:'¿Cuántos elementos tiene el periodo 3 de la tabla periódica?', o:['8','2','18','32']},
{tema:'elemento', c:'org', k:'Q', ctx:'El helio de los globos tiene solo dos electrones, pero aparece en la última columna de la tabla.', q:'El helio tiene la configuración 1s², que pertenece al bloque s. ¿Por qué se ubica en el grupo 18?', o:['Porque su nivel externo está lleno y se comporta como los gases nobles','Porque tiene 18 electrones distribuidos en sus niveles','Porque es un metal alcalinotérreo con dos electrones','Porque fue el último elemento descubierto de ese periodo']},
{tema:'elemento', c:'prop', k:'Q', ctx:'Un estudiante compara el tamaño de los átomos del sodio al cloro en el periodo 3.', q:'¿Cómo varía el radio atómico al avanzar de izquierda a derecha en un periodo?', o:['Disminuye, porque aumenta la carga nuclear con el mismo número de niveles','Aumenta, porque en cada elemento se agrega un nivel de energía','Aumenta, porque hay más electrones que ocupan más espacio','No cambia, porque todos tienen el mismo número de niveles']},
{tema:'elemento', c:'prop', k:'Q', ctx:'Un estudiante compara el tamaño de los átomos del litio, el sodio y el potasio.', q:'¿Por qué el radio atómico aumenta al bajar en un grupo?', o:['Porque cada elemento tiene un nivel de energía más','Porque disminuye el número de protones','Porque los electrones se acercan al núcleo','Porque aumenta la electronegatividad']},
{tema:'elemento', c:'prop', k:'Q', ctx:'Los relojes atómicos usan un metal alcalino que está muy abajo en la tabla periódica.', q:'¿Cuál de estos átomos tiene el mayor radio atómico?', o:['Cesio (Cs)','Litio (Li)','Flúor (F)','Cloro (Cl)']},
{tema:'elemento', c:'prop', k:'Q', ctx:'Un químico mide cuánta energía se necesita para arrancar un electrón a un átomo.', q:'La energía de ionización es la energía necesaria para:', o:['Quitarle el electrón más externo a un átomo en estado gaseoso','Agregarle un electrón a un átomo en estado gaseoso','Romper el núcleo de un átomo y separar sus protones','Formar un enlace covalente entre dos átomos iguales']},
{tema:'elemento', c:'prop', k:'Q', ctx:'Energías de ionización (kJ/mol): Na = 496, Mg = 738, Al = 578, Cl = 1251.', q:'¿Qué tendencia general muestran estos datos del periodo 3?', o:['Aumenta de izquierda a derecha, con una excepción entre Mg y Al','Disminuye de izquierda a derecha, con una excepción entre Na y Mg','Es igual para todos los elementos del periodo, salvo el cloro','Aumenta solo en los metales y disminuye en los no metales']},
{tema:'elemento', c:'prop', k:'Q', ctx:'El flúor de las cremas dentales es el elemento que más atrae los electrones de un enlace.', q:'¿Cuál es el elemento más electronegativo de la tabla periódica?', o:['Flúor','Cesio','Oxígeno','Helio']},
{tema:'elemento', c:'prop', k:'Q', ctx:'Un estudiante busca en la tabla periódica la zona donde están los metales más reactivos.', q:'¿En qué zona de la tabla están los elementos con mayor carácter metálico?', o:['Abajo a la izquierda','Arriba a la derecha','En el centro','Arriba a la izquierda']},
{tema:'elemento', c:'prop', k:'Q', ctx:'El sodio y el potasio reaccionan de forma violenta con el agua porque pierden un electrón muy fácil.', q:'¿Por qué los metales alcalinos forman iones +1 con tanta facilidad?', o:['Porque tienen una energía de ionización baja: su único electrón de valencia está lejos y apantallado','Porque tienen una electronegatividad muy alta y atraen electrones de otros átomos','Porque su nivel externo está lleno y por eso sueltan el electrón sobrante','Porque tienen pocos protones en el núcleo y ninguna fuerza sobre los electrones']},
{tema:'elemento', c:'prop', k:'Q', ctx:'El sodio y el cloro, que forman la sal de cocina, están en el mismo periodo de la tabla.', q:'Entre el sodio (Na) y el cloro (Cl), que están en el mismo periodo, ¿cuál tiene mayor energía de ionización y por qué?', o:['El cloro: tiene más protones y los mismos niveles, así que sujeta más a sus electrones','El sodio: tiene menos electrones y cada uno está más sujeto al núcleo','El sodio: está más a la izquierda y por eso sus electrones están más unidos','Tienen la misma, porque están en el mismo periodo y tienen los mismos niveles']},
{tema:'elemento', c:'prop', k:'Q', ctx:'Energías de ionización (kJ/mol): Be = 900, B = 801; N = 1402, O = 1314.', q:'¿Cómo se explican estas dos excepciones a la tendencia del periodo 2?', o:['El Be (2s lleno) y el N (2p semilleno) tienen configuraciones especialmente estables','El B y el O tienen menos protones que el Be y el N, respectivamente','Los datos están mal medidos y la tendencia en realidad no tiene excepciones','El Be y el N son gases nobles y por eso cuesta más quitarles un electrón']},
{tema:'elemento', c:'prop', k:'Q', ctx:'Un estudiante ordena cuatro elementos del periodo 3 según su capacidad de atraer electrones.', q:'¿Cuál de estas series está ordenada de MENOR a MAYOR electronegatividad?', o:['Na < Mg < Al < Cl','Cl < Al < Mg < Na','F < Cl < Br < I','Cl < Na < Al < Mg']},
{tema:'elemento', c:'prop', k:'Q', ctx:'Un estudiante ordena tres metales alcalinos según el tamaño de sus átomos.', q:'¿Cuál de estas series está ordenada de MAYOR a MENOR radio atómico?', o:['K > Na > Li','Li > Na > K','Na > K > Li','Li > K > Na']},
{tema:'elemento', c:'prop', k:'CTS', ctx:'El silicio y el germanio se usan en los chips de los celulares y en los paneles solares que se instalan en La Guajira.', q:'¿Por qué estos dos elementos sirven como semiconductores?', o:['Son metaloides: tienen propiedades intermedias entre metales y no metales','Son metales alcalinos muy reactivos que sueltan electrones','Son gases nobles que no reaccionan y no se oxidan','Son halógenos que forman sales con los metales del chip']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Un estudiante describe el electrón de un átomo con cuatro números cuánticos.', q:'¿Qué indica el número cuántico principal (n)?', o:['El nivel de energía y el tamaño del orbital','La forma del orbital (esférica, lobular)','La orientación del orbital en el espacio','El giro o espín del electrón en el orbital']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Un estudiante relaciona los números cuánticos con las formas de los orbitales.', q:'¿Qué indica el número cuántico secundario o azimutal (l)?', o:['El subnivel y la forma del orbital (s, p, d, f)','El nivel de energía y el tamaño del orbital','El espín del electrón dentro del orbital','El número total de electrones del átomo']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Un estudiante escribe los subniveles posibles del tercer nivel de energía.', q:'Si n = 3, ¿qué valores puede tomar l?', o:['0, 1 y 2','1, 2 y 3','0, 1, 2 y 3','Solo 3']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Un estudiante quiere saber cuántos orbitales tiene el subnivel d de los metales de transición.', q:'Si l = 2, ¿qué valores puede tomar mₗ?', o:['−2, −1, 0, +1 y +2','0, 1 y 2','−1, 0 y +1','Solo +2']},
{tema:'config-e', c:'qn', k:'Q', ctx:'El profesor escribe en el tablero varios conjuntos de números cuánticos y solo uno es posible.', q:'¿Cuál de estos conjuntos de números cuánticos (n, l, mₗ, mₛ) es posible?', o:['(3, 2, −1, +½)','(2, 2, 0, +½)','(3, 1, 2, −½)','(1, 0, 0, +1)']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Un compañero escribió «2d» en una configuración electrónica y el profesor le marcó un error.', q:'¿Por qué no existe un subnivel 2d?', o:['Porque con n = 2, l solo puede ser 0 o 1 (s y p)','Porque el nivel 2 está siempre lleno','Porque los orbitales d solo existen en los metales','Porque el 2d tiene más energía que el 3s']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Usa la convención de llenar las casillas de mₗ = −l a +l, empezando con espín ↑ (+½).', q:'¿Cuáles son los números cuánticos del último electrón del cloro (Z = 17, termina en 3p⁵)?', o:['(3, 1, 0, −½)','(3, 1, +1, +½)','(3, 2, 0, −½)','(2, 1, 0, −½)']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Un estudiante cuenta los orbitales del tercer nivel de energía de un átomo.', q:'¿Cuántos orbitales hay en total en el nivel n = 3?', o:['9','3','18','6']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Dos electrones de un mismo átomo tienen n = 2, l = 1 y mₗ = 0.', q:'Según el principio de exclusión de Pauli, ¿qué debe ser distinto entre ellos?', o:['El número cuántico de espín (mₛ)','El nivel de energía','La forma del orbital','Nada: pueden ser idénticos']},
{tema:'config-e', c:'qn', k:'Q', ctx:'El último electrón del potasio se describe con cuatro números cuánticos.', q:'Un electrón tiene los números cuánticos (4, 0, 0, +½). ¿En qué subnivel se encuentra?', o:['4s','4p','3d','4d']},
{tema:'config-e', c:'qn', k:'Q', ctx:'El único electrón del hidrógeno ocupa el orbital de menor energía.', q:'¿Qué forma tienen los orbitales s?', o:['Esférica','De dos lóbulos','De trébol de cuatro hojas','Plana']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Los tres orbitales p de un subnivel tienen la misma forma, pero apuntan en direcciones distintas.', q:'¿Qué indica el número cuántico magnético (mₗ)?', o:['La orientación del orbital en el espacio','El nivel de energía del electrón','La forma del orbital (s, p, d, f)','El giro del electrón sobre sí mismo']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Dos electrones del mismo orbital se diferencian en un número cuántico.', q:'¿Qué valores puede tomar el número cuántico de espín (mₛ)?', o:['+½ o −½','0 o 1','−1, 0 o +1','Cualquier número entero']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Los lantánidos, que se usan en los imanes de los audífonos, llenan un subnivel f.', q:'¿Cuántos orbitales tiene un subnivel f (l = 3)?', o:['7','3','5','14']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Un estudiante calcula cuántos electrones caben en el cuarto nivel de energía.', q:'¿Cuántos electrones caben como máximo en el nivel n = 4?', o:['32','16','18','8']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Usa la convención de llenar las casillas de mₗ = −l a +l, empezando con espín ↑ (+½).', q:'¿Cuáles son los números cuánticos del último electrón del oxígeno (Z = 8, termina en 2p⁴)?', o:['(2, 1, −1, −½)','(2, 1, +1, +½)','(2, 0, 0, −½)','(2, 1, 0, +½)']},
{tema:'config-e', c:'qn', k:'Q', ctx:'Usa la convención de llenar las casillas de mₗ = −l a +l, empezando con espín ↑ (+½).', q:'¿Cuáles son los números cuánticos del último electrón del sodio (Z = 11, termina en 3s¹)?', o:['(3, 0, 0, +½)','(3, 1, 0, +½)','(2, 0, 0, +½)','(3, 0, 0, −½)']},
{tema:'config-e', c:'qn', k:'Q', ctx:'El profesor escribe en el tablero un conjunto de números cuánticos que no puede existir.', q:'¿Por qué es imposible el conjunto de números cuánticos (3, 1, +2, −½)?', o:['Porque |mₗ| no puede ser mayor que l','Porque l debe ser igual a n','Porque mₛ no puede ser −½','Porque n no puede ser 3']},
{tema:'config-e', c:'qn', k:'Q', ctx:'En una exposición, un grupo compara el modelo de Bohr con el modelo cuántico del átomo.', q:'¿Cuál es la diferencia principal entre una órbita del modelo de Bohr y un orbital del modelo cuántico?', o:['La órbita es una trayectoria exacta; el orbital es una región de probabilidad','Son lo mismo, pero con distinto nombre en cada modelo','El orbital es siempre más pequeño que la órbita de Bohr','La órbita contiene más electrones que el orbital cuántico']},
{tema:'config-e', c:'qn', k:'Q', ctx:'En el modelo de Bohr, el oxígeno tiene dos órbitas: n = 1 con 2 electrones y n = 2 con 6 electrones. En el modelo cuántico su configuración es 1s² 2s² 2p⁴.', q:'¿Qué información da el modelo cuántico que el de Bohr no tiene?', o:['Que el nivel 2 se divide en subniveles (2s y 2p) con orbitales de distinta forma','Cuántos electrones tiene el átomo en total en sus niveles','Que el núcleo del átomo tiene carga eléctrica positiva','Que hay dos electrones en el primer nivel de energía']},
{tema:'config-e', c:'qn', k:'Q', ctx:'El carbono y el oxígeno tienen electrones en orbitales p que forman sus enlaces.', q:'¿Qué forma tienen los orbitales p y cuántos hay en cada subnivel p?', o:['Dos lóbulos; hay tres, orientados en x, y y z','Esférica; hay uno solo en cada subnivel','Cuatro lóbulos; hay cinco en cada subnivel','Dos lóbulos; hay siete en cada subnivel']},
{tema:'atomo', c:'azn', k:'Q', ctx:'El potasio de los bananos tiene un isótopo muy abundante de masa 39.', q:'¿Cuántos neutrones tiene el potasio-39 (Z = 19)?', o:['20','19','39','58']},
{tema:'atomo', c:'azn', k:'Q', ctx:'El hierro de la herrumbre está como ion con carga +3.', q:'¿Cuántos electrones tiene el ion Fe³⁺ (Z = 26)?', o:['23','26','29','30']},
{tema:'atomo', c:'azn', k:'Q', ctx:'El fósforo de los fertilizantes tiene un isótopo estable con 15 protones.', q:'Un átomo neutro tiene 15 protones y 16 neutrones. ¿Cuál es su número de masa?', o:['31','15','16','46']},
{tema:'atomo', c:'azn', k:'Q', ctx:'El combustible de algunas centrales nucleares es un isótopo del uranio.', q:'¿Cuántos neutrones tiene el uranio-235 (Z = 92)?', o:['143','92','235','327']},
{tema:'atomo', c:'azn', k:'Q', ctx:'Una especie química tiene 26 protones, 30 neutrones y 24 electrones.', q:'¿Cuál es su notación?', o:['⁵⁶Fe²⁺','⁵⁶Fe²⁻','⁵⁰Fe²⁺','³⁰Zn²⁺']},
{tema:'atomo', c:'azn', k:'Q', ctx:'En los nitruros que se usan para endurecer piezas de acero, el nitrógeno está como ion.', q:'Un ion tiene 7 protones y 10 electrones. ¿Cuál es?', o:['N³⁻ (nitruro)','N³⁺','Ne (neón)','O²⁻ (óxido)']},
{tema:'atomo', c:'azn', k:'Q', ctx:'Un estudiante quiere calcular las partículas del núcleo de un átomo a partir de la tabla periódica.', q:'¿Qué fórmula permite calcular los neutrones de un átomo?', o:['n⁰ = A − Z','n⁰ = A + Z','n⁰ = Z − carga','n⁰ = A − carga']},
{tema:'atomo', c:'ion', k:'Q', ctx:'Un átomo de sodio de la sal tiene la misma cantidad de partículas positivas y negativas antes de reaccionar.', q:'¿Cuándo un átomo es eléctricamente neutro?', o:['Cuando tiene igual número de protones que de electrones','Cuando tiene igual número de protones que de neutrones','Cuando no tiene neutrones','Cuando tiene 8 electrones de valencia']},
{tema:'atomo', c:'ion', k:'Q', ctx:'En la sal de cocina, el sodio aparece como un ion con carga positiva.', q:'Un catión es una especie que tiene:', o:['Más protones que electrones, porque perdió electrones','Más electrones que protones, porque ganó electrones','Más neutrones que protones','Igual número de protones y electrones']},
{tema:'atomo', c:'ion', k:'Q', ctx:'Cuando el cloro se convierte en el ion de la sal de cocina, su núcleo no cambia.', q:'Cuando un átomo se convierte en ion, ¿qué partícula cambia?', o:['Solo los electrones','Los protones','Los neutrones','Los protones y los neutrones']},
{tema:'atomo', c:'ion', k:'Q', ctx:'En los minerales y en el agua de mar, el sodio y el calcio aparecen siempre como iones.', q:'¿Qué tipo de ion forman normalmente los metales, como el sodio y el calcio?', o:['Cationes, porque pierden sus pocos electrones de valencia','Aniones, porque ganan electrones para llenar su nivel','No forman iones, porque los metales son neutros','Aniones, porque pierden protones del núcleo']},
{tema:'atomo', c:'ion', k:'Q', ctx:'El sodio, el magnesio y el flúor de las cremas dentales forman iones con la misma cantidad de electrones.', q:'¿Con qué gas noble comparten el número de electrones los iones Na⁺, Mg²⁺ y F⁻?', o:['Neón','Argón','Helio','Kriptón']},
{tema:'atomo', c:'ion', k:'Q', ctx:'El olor de las aguas termales de Paipa se debe a compuestos que contienen el ion S²⁻.', q:'¿Cómo se llama el anión S²⁻?', o:['Sulfuro','Sulfato','Sulfito','Catión azufre']},
{tema:'atomo', c:'iso', k:'Q', ctx:'El carbono-14 que se usa para fechar restos arqueológicos se forma a partir del nitrógeno del aire.', q:'El carbono-14 y el nitrógeno-14 tienen el mismo número de masa pero distinto número atómico. ¿Cómo se llaman?', o:['Isóbaros','Isótopos','Isótonos','Isómeros']},
{tema:'atomo', c:'iso', k:'Q', ctx:'El carbono-13 (Z = 6) y el nitrógeno-14 (Z = 7) tienen cada uno 7 neutrones.', q:'¿Qué relación tienen?', o:['Son isótonos','Son isótopos','Son isóbaros','Son el mismo elemento']},
{tema:'atomo', c:'iso', k:'Q', ctx:'El carbono-12 y el carbono-14 que se usan para fechar fósiles son formas del mismo elemento.', q:'¿Qué tienen en común los isótopos de un mismo elemento?', o:['El número de protones','El número de neutrones','El número de masa','La masa de cada átomo']},
{tema:'atomo', c:'iso', k:'Q', ctx:'El argón de las bombillas y el calcio de los huesos tienen isótopos con la misma masa.', q:'El argón-40 (Z = 18) y el calcio-40 (Z = 20) son:', o:['Isóbaros','Isótopos','Isótonos','Iones del mismo elemento']},
{tema:'atomo', c:'mprom', k:'Q', ctx:'El boro natural tiene dos isótopos: boro-10 (19,9 %) y boro-11 (80,1 %).', q:'¿Cuál es aproximadamente su masa atómica promedio?', o:['10,8 u','10,5 u','10,2 u','11,0 u exactos']},
{tema:'atomo', c:'mprom', k:'Q', ctx:'El cloro de la tabla periódica tiene una masa atómica que se acerca más a la de uno de sus isótopos.', q:'¿Por qué la masa atómica promedio de un elemento queda más cerca de la de uno de sus isótopos?', o:['Porque queda más cerca del isótopo más abundante','Porque siempre se acerca al isótopo más pesado','Porque siempre se acerca al isótopo más liviano','Porque se toma solo el isótopo estable']},
{tema:'atomo', c:'mprom', k:'CTS', ctx:'El cobre de los cables eléctricos que se producen en Colombia es una mezcla natural de cobre-63 (69 %) y cobre-65 (31 %).', q:'¿Qué valor de masa atómica del cobre aparece en la tabla periódica?', o:['63,55 u, un promedio ponderado de los dos isótopos','64,00 u, el promedio simple','63,00 u, la masa del isótopo más común','65,00 u, la masa del isótopo más pesado']}
],

ABIERTAS: [
  {tema:'ox-bas', t:'rx', q:'Un trozo de magnesio metálico se quema en presencia de oxígeno del aire. Escribe la ecuación de formación del óxido correspondiente y nombra el producto en los 3 sistemas.'},
  {tema:'ox-bas', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'Cu₂O'},
  {tema:'ox-bas', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una.', f:'Al₂O₃', partes:[['Al³⁺','cat'],['O²⁻','an']]},
  {tema:'balanceo', t:'rx', q:'Balancea por tanteo la siguiente ecuación y explica, paso a paso, el orden en que decidiste ajustar cada coeficiente.', f:'Al + Cl₂ → AlCl₃'},
  {tema:'balanceo', t:'nom', q:'La ecuación sin balancear Na + Cl₂ → NaCl describe la formación de sal común. Balancéala y nombra el producto en nomenclatura Tradicional y Stock.'},
  {tema:'balanceo', t:'mdec', q:'En la ecuación balanceada 2Mg + O₂ → 2MgO, identifica el catión y el anión del producto.', f:'MgO', partes:[['Mg²⁺','cat'],['O²⁻','an']]},
{tema:'anhid', t:'rx', q:'El azufre se quema en una fábrica en presencia de oxígeno formando SO₂ (su valencia menor, +4). Escribe la ecuación de formación de este óxido ácido y nombra el producto en los sistemas Tradicional y Sistemática.'},
{tema:'anhid', t:'nom', q:'Escribe el nombre Tradicional y Sistemático del siguiente compuesto.', f:'N₂O₅'},
{tema:'anhid', t:'mdec', q:'Identifica las partes de este compuesto (no metal y oxígeno) e indica el estado de oxidación de cada átomo de nitrógeno.', f:'N₂O₃', partes:[['N₂','an'],['O₃','an']]},

{tema:'hidru', t:'rx', q:'El magnesio metálico reacciona con hidrógeno gaseoso (H₂). Escribe la ecuación de formación del hidruro correspondiente y nombra el producto.'},
{tema:'hidru', t:'nom', q:'Escribe el nombre Tradicional (igual al Stock) y Sistemático del siguiente compuesto.', f:'BaH₂'},
{tema:'hidru', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una, recordando que aquí el hidrógeno NO tiene su carga habitual.', f:'KH', partes:[['K⁺','cat'],['H⁻','an']]},

{tema:'ac-hid', t:'rx', q:'El hidrógeno gaseoso (H₂) reacciona con yodo (I₂); el producto se disuelve luego en agua. Escribe la ecuación de formación y nombra el producto disuelto en agua.'},
{tema:'ac-hid', t:'nom', q:'Escribe el nombre del siguiente compuesto disuelto en agua (Tradicional) y en estado puro/gaseoso (Sistemática).', f:'H₂Se'},
{tema:'ac-hid', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una.', f:'HF', partes:[['H⁺','cat'],['F⁻','an']]},

{tema:'base', t:'rx', q:'El óxido de bario (BaO) reacciona con agua. Escribe la ecuación de esta reacción (óxido básico + agua → hidróxido) y nombra el producto.'},
{tema:'base', t:'nom', q:'Escribe el nombre Tradicional (igual al Stock) y Sistemático del siguiente compuesto.', f:'Ca(OH)₂'},
{tema:'base', t:'mdec', q:'Identifica las partes de este compuesto (catión e hidróxido) e indica la carga de cada una.', f:'RbOH', partes:[['Rb⁺','cat'],['OH⁻','oh']]},
{tema:'ac-ox', t:'rx', q:'El trióxido de azufre (SO₃) reacciona con agua. Escribe la ecuación de formación del ácido oxácido resultante y nombra el producto.'},
{tema:'ac-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente ácido, identificando primero el oxoanión que contiene.', f:'HNO₃'},
{tema:'ac-ox', t:'mdec', q:'Identifica las partes de este compuesto (catión y oxoanión) e indica la carga de cada una.', f:'H₂CO₃', partes:[['H₂','cat'],['CO₃²⁻','ox']]},
{tema:'sal-bin', t:'rx', q:'El calcio metálico reacciona con cloro gaseoso (Cl₂). Escribe la ecuación de formación de la sal binaria resultante y nombra el producto.'},
{tema:'sal-bin', t:'nom', q:'Escribe el nombre Tradicional del siguiente compuesto.', f:'NaBr'},
{tema:'sal-bin', t:'mdec', q:'Identifica las partes de este compuesto e indica la carga de cada una.', f:'KF', partes:[['K⁺','cat'],['F⁻','an']]},
{tema:'sal-ox', t:'rx', q:'El hidróxido de sodio (NaOH) reacciona con ácido nítrico (HNO₃) en una neutralización. Escribe la ecuación de la reacción y nombra la sal oxigenada que se forma (además del agua).'},
{tema:'sal-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente compuesto, identificando primero el oxoanión que contiene.', f:'NaClO'},
{tema:'sal-ox', t:'mdec', q:'Identifica las partes de este compuesto (catión y oxoanión) e indica la carga de cada una.', f:'Na₂SO₄', partes:[['Na⁺','cat'],['SO₄²⁻','ox']]},
{tema:'sal-ac', t:'rx', q:'El carbonato de potasio (K₂CO₃) reacciona con ácido carbónico en exceso, formando la sal ácida correspondiente. Escribe la fórmula del producto y nómbralo en Tradicional y Stock.'},
{tema:'sal-ac', t:'nom', q:'Escribe el nombre Tradicional y Stock del siguiente compuesto.', f:'KHSO₄'},
{tema:'sal-ac', t:'mdec', q:'Identifica las partes de este compuesto e indica la carga de cada una, explicando por qué el oxoanión conserva un hidrógeno.', f:'NH₄HCO₃', partes:[['NH₄⁺','cat'],['HCO₃⁻','ox']]},
{tema:'reaccion', t:'rx', q:'Clasifica el tipo de reacción de la siguiente ecuación y justifica tu respuesta según el número de reactivos y productos.', f:'2Na + Cl₂ → 2NaCl'},
{tema:'reaccion', t:'nom', q:'La siguiente reacción de síntesis produce un hidróxido. Nombra el producto en nomenclatura Tradicional/Stock.', f:'CaO + H₂O → Ca(OH)₂'},
{tema:'reaccion', t:'mdec', q:'En la reacción 2Fe + 3Cl₂ → 2FeCl₃, clasifica el producto (FeCl₃) según su tipo de compuesto e identifica su catión y anión.', f:'FeCl₃', partes:[['Fe³⁺','cat'],['Cl⁻','an']]},

{tema:'mol-masa', t:'rx', q:'Calcula paso a paso la masa molar del siguiente compuesto, mostrando la masa atómica de cada elemento presente.', f:'CO₂'},
{tema:'mol-masa', t:'nom', q:'La masa molar del HCl disuelto en agua es 36.458 g/mol. Nombra este compuesto en nomenclatura Tradicional y explica a qué grupo de compuestos pertenece.'},
{tema:'mol-masa', t:'mdec', q:'Si tienes 80 gramos de NaOH (masa molar 39.997 g/mol), calcula aproximadamente cuántos moles de NaOH tienes.'},

{tema:'elemento', t:'rx', q:'El litio (Li, grupo 1, valencia +1) reacciona con oxígeno. Predice la fórmula del óxido que se forma y nómbralo.'},
{tema:'elemento', t:'nom', q:'Escribe la configuración electrónica abreviada del siguiente elemento e indica a qué familia de la tabla periódica pertenece.', f:'N (Z=7)'},
{tema:'elemento', t:'mdec', q:'Clasifica el siguiente elemento como metal, no metal o metaloide, y predice si tiende a formar cationes o aniones.', f:'B (Z=5)'},

{tema:'reactividad', t:'rx', q:'Completa el eslabón faltante de la siguiente cadena de reactividad del magnesio: Mg → MgO → ____ → MgSO₄.'},
{tema:'reactividad', t:'nom', q:'Nombra los 3 compuestos de la cadena de reactividad del aluminio (valencia +3): el óxido, el hidróxido y la sal que resulta de reaccionar con HCl.'},
{tema:'reactividad', t:'mdec', q:'En la sal final de la cadena de reactividad del bario con ácido sulfúrico, identifica el catión y el anión.', f:'BaSO₄', partes:[['Ba²⁺','cat'],['SO₄²⁻','ox']]}
,
{tema:'estequiometria', t:'rx', q:'Para la ecuación balanceada 2Mg + O₂ → 2MgO, calcula cuántos gramos de MgO se producen a partir de 12.15 g de Mg (MM Mg=24.305, MM MgO=40.304). Muestra los 3 pasos de la cadena de conversión (gramos→moles del dato, moles del dato→moles de lo pedido, moles de lo pedido→gramos de lo pedido).'},
{tema:'estequiometria', t:'nom', q:'Para la ecuación balanceada Zn + 2HCl → ZnCl₂ + H₂, calcula cuántos gramos de H₂ se producen a partir de 13.08 g de Zn (MM Zn=65.38, MM H₂=2.016), y nombra el producto sólido (ZnCl₂) en nomenclatura Tradicional y Stock.'},
{tema:'estequiometria', t:'mdec', q:'Para la ecuación balanceada 4Al + 3O₂ → 2Al₂O₃, calcula cuántos gramos de Al₂O₃ se producen a partir de 54.0 g de Al (MM Al=26.982, MM Al₂O₃=101.961), e identifica las partes del producto Al₂O₃ (catión y anión) indicando la carga de cada uno.', f:'Al₂O₃', partes:[['Al³⁺','cat'],['O²⁻','an']]},
// ── Ampliación: 20 preguntas abiertas por tema ──
{tema:'ox-bas', t:'rx', q:'El sodio metálico se oxida al contacto con el oxígeno del aire. Escribe la ecuación balanceada de formación del óxido correspondiente y nombra el producto en los 3 sistemas.'},
{tema:'ox-bas', t:'rx', q:'El hierro, actuando con su valencia +3, reacciona con el oxígeno al formarse la herrumbre. Escribe la ecuación balanceada de formación del óxido correspondiente y nombra el producto en los 3 sistemas.'},
{tema:'ox-bas', t:'rx', q:'El calcio reacciona con el oxígeno del aire. Escribe la ecuación balanceada de formación del óxido correspondiente y nombra el producto en los 3 sistemas.'},
{tema:'ox-bas', t:'rx', q:'El cobre, actuando con su valencia mayor (+2), reacciona con oxígeno. Escribe la ecuación balanceada de formación del óxido correspondiente y nombra el producto en los 3 sistemas.'},
{tema:'ox-bas', t:'rx', q:'El aluminio reacciona con oxígeno formando la capa protectora que recubre las ollas. Escribe la ecuación balanceada de formación del óxido correspondiente y nombra el producto en los 3 sistemas.'},
{tema:'ox-bas', t:'rx', q:'El plomo, actuando con su valencia +4, reacciona con oxígeno. Escribe la ecuación balanceada de formación del óxido correspondiente y nombra el producto en los 3 sistemas.'},
{tema:'ox-bas', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'FeO'},
{tema:'ox-bas', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'Fe₂O₃'},
{tema:'ox-bas', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'SnO₂'},
{tema:'ox-bas', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'PbO'},
{tema:'ox-bas', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'NiO'},
{tema:'ox-bas', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'K₂O'},
{tema:'ox-bas', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una.', f:'CaO'},
{tema:'ox-bas', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una.', f:'Li₂O'},
{tema:'ox-bas', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una.', f:'CuO'},
{tema:'ox-bas', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una.', f:'Na₂O'},
{tema:'ox-bas', t:'mdec', q:'A partir de la fórmula, deduce la valencia con la que actúa el metal y explica cómo la obtuviste (el oxígeno actúa con −2).', f:'Cr₂O₃'},
{tema:'balanceo', t:'rx', q:'Balancea por tanteo la siguiente ecuación y explica, paso a paso, el orden en que decidiste ajustar cada coeficiente.', f:'H₂ + O₂ → H₂O'},
{tema:'balanceo', t:'rx', q:'Balancea por tanteo la siguiente ecuación y explica, paso a paso, el orden en que decidiste ajustar cada coeficiente.', f:'N₂ + H₂ → NH₃'},
{tema:'balanceo', t:'rx', q:'Balancea por tanteo la siguiente ecuación y explica, paso a paso, el orden en que decidiste ajustar cada coeficiente.', f:'Fe + O₂ → Fe₂O₃'},
{tema:'balanceo', t:'rx', q:'Balancea por tanteo la siguiente ecuación y explica, paso a paso, el orden en que decidiste ajustar cada coeficiente.', f:'CH₄ + O₂ → CO₂ + H₂O'},
{tema:'balanceo', t:'rx', q:'Balancea por tanteo la siguiente ecuación y explica, paso a paso, el orden en que decidiste ajustar cada coeficiente.', f:'C₃H₈ + O₂ → CO₂ + H₂O'},
{tema:'balanceo', t:'rx', q:'Balancea por tanteo la siguiente ecuación y explica, paso a paso, el orden en que decidiste ajustar cada coeficiente.', f:'KClO₃ → KCl + O₂'},
{tema:'balanceo', t:'nom', q:'Balancea la siguiente ecuación y nombra el producto en nomenclatura Tradicional y Stock.', f:'Fe + Cl₂ → FeCl₃'},
{tema:'balanceo', t:'nom', q:'Balancea la siguiente ecuación y nombra el producto en nomenclatura Tradicional y Sistemática.', f:'Ca + O₂ → CaO'},
{tema:'balanceo', t:'nom', q:'Balancea la siguiente ecuación y nombra el producto en nomenclatura Tradicional y Sistemática.', f:'SO₂ + O₂ → SO₃'},
{tema:'balanceo', t:'nom', q:'Balancea la siguiente neutralización y nombra la sal que se forma en nomenclatura Tradicional.', f:'NaOH + H₂SO₄ → Na₂SO₄ + H₂O'},
{tema:'balanceo', t:'nom', q:'Balancea la siguiente ecuación y nombra el hidróxido que se forma.', f:'Na₂O + H₂O → NaOH'},
{tema:'balanceo', t:'mdec', q:'Verifica si la siguiente ecuación está balanceada contando los átomos de cada elemento a ambos lados de la flecha. Si no lo está, corrígela.', f:'2H₂O₂ → 2H₂O + O₂'},
{tema:'balanceo', t:'mdec', q:'Verifica si la siguiente ecuación está balanceada contando los átomos de cada elemento a ambos lados de la flecha. Si no lo está, corrígela.', f:'Al + O₂ → Al₂O₃'},
{tema:'balanceo', t:'mdec', q:'Cuenta los átomos de cada elemento en los reactivos y en los productos de la siguiente ecuación, y comprueba con una tabla que está balanceada.', f:'2Al + 6HCl → 2AlCl₃ + 3H₂'},
{tema:'balanceo', t:'mdec', q:'Un estudiante \'balanceó\' H₂ + O₂ → H₂O cambiándola por H₂ + O₂ → H₂O₂. Explica por qué eso no es válido y balancea la ecuación correctamente.'},
{tema:'balanceo', t:'mdec', q:'Balancea la siguiente ecuación de combustión y explica por qué conviene ajustar el oxígeno al final.', f:'C₂H₆ + O₂ → CO₂ + H₂O'},
{tema:'balanceo', t:'mdec', q:'Balancea la siguiente ecuación de doble sustitución y explica qué grupo de átomos conviene tratar como una sola unidad.', f:'BaCl₂ + Na₂SO₄ → BaSO₄ + NaCl'},
{tema:'anhid', t:'rx', q:'El carbono se quema con suficiente oxígeno formando CO₂ (valencia +4). Escribe la ecuación balanceada de formación de este óxido ácido y nombra el producto en los sistemas Tradicional y Sistemático.'},
{tema:'anhid', t:'rx', q:'El azufre, actuando con valencia +6, reacciona con oxígeno. Escribe la ecuación balanceada de formación de este óxido ácido y nombra el producto en los sistemas Tradicional y Sistemático.'},
{tema:'anhid', t:'rx', q:'El cloro, actuando con valencia +1, reacciona con oxígeno. Escribe la ecuación balanceada de formación de este óxido ácido y nombra el producto en los sistemas Tradicional y Sistemático.'},
{tema:'anhid', t:'rx', q:'El cloro, actuando con valencia +7, reacciona con oxígeno. Escribe la ecuación balanceada de formación de este óxido ácido y nombra el producto en los sistemas Tradicional y Sistemático.'},
{tema:'anhid', t:'rx', q:'El fósforo (escríbelo como P), actuando con valencia +5, reacciona con oxígeno. Escribe la ecuación balanceada de formación de este óxido ácido y nombra el producto en los sistemas Tradicional y Sistemático.'},
{tema:'anhid', t:'rx', q:'El nitrógeno, actuando con valencia +3, reacciona con oxígeno. Escribe la ecuación balanceada de formación de este óxido ácido y nombra el producto en los sistemas Tradicional y Sistemático.'},
{tema:'anhid', t:'nom', q:'Escribe el nombre Tradicional y Sistemático del siguiente compuesto.', f:'SO₂'},
{tema:'anhid', t:'nom', q:'Escribe el nombre Tradicional y Sistemático del siguiente compuesto.', f:'CO₂'},
{tema:'anhid', t:'nom', q:'Escribe el nombre Tradicional y Sistemático del siguiente compuesto.', f:'Cl₂O₅'},
{tema:'anhid', t:'nom', q:'Escribe el nombre Tradicional y Sistemático del siguiente compuesto.', f:'Br₂O'},
{tema:'anhid', t:'nom', q:'Escribe el nombre Tradicional y Sistemático del siguiente compuesto.', f:'I₂O₇'},
{tema:'anhid', t:'nom', q:'Escribe el nombre Tradicional y Sistemático del siguiente compuesto.', f:'P₂O₃'},
{tema:'anhid', t:'mdec', q:'A partir de la fórmula, calcula el estado de oxidación del no metal y explica cómo lo obtuviste (el oxígeno actúa con −2).', f:'Cl₂O₇'},
{tema:'anhid', t:'mdec', q:'A partir de la fórmula, calcula el estado de oxidación del no metal y explica cómo lo obtuviste (el oxígeno actúa con −2).', f:'SO₃'},
{tema:'anhid', t:'mdec', q:'A partir de la fórmula, calcula el estado de oxidación del no metal y explica cómo lo obtuviste (el oxígeno actúa con −2).', f:'I₂O₅'},
{tema:'anhid', t:'mdec', q:'A partir de la fórmula, calcula el estado de oxidación del no metal y explica cómo lo obtuviste (el oxígeno actúa con −2).', f:'Br₂O₃'},
{tema:'anhid', t:'mdec', q:'A partir de la fórmula, calcula el estado de oxidación del no metal y explica cómo lo obtuviste (el oxígeno actúa con −2).', f:'SeO₂'},
{tema:'hidru', t:'rx', q:'El sodio metálico reacciona con hidrógeno gaseoso (H₂) a alta temperatura. Escribe la ecuación balanceada de formación del hidruro y nombra el producto.'},
{tema:'hidru', t:'rx', q:'El calcio reacciona con hidrógeno gaseoso (H₂). Escribe la ecuación balanceada de formación del hidruro y nombra el producto en los sistemas Tradicional y Sistemático.'},
{tema:'hidru', t:'rx', q:'El litio reacciona con hidrógeno gaseoso (H₂). Escribe la ecuación balanceada de formación del hidruro y nombra el producto.'},
{tema:'hidru', t:'rx', q:'El aluminio (valencia +3) reacciona con hidrógeno gaseoso (H₂). Escribe la ecuación balanceada de formación del hidruro y nombra el producto en los sistemas Tradicional y Sistemático.'},
{tema:'hidru', t:'rx', q:'El potasio reacciona con hidrógeno gaseoso (H₂). Escribe la ecuación balanceada de formación del hidruro y nombra el producto.'},
{tema:'hidru', t:'rx', q:'El estroncio reacciona con hidrógeno gaseoso (H₂). Escribe la ecuación balanceada de formación del hidruro y nombra el producto en los sistemas Tradicional y Sistemático.'},
{tema:'hidru', t:'nom', q:'Escribe el nombre Tradicional (igual al Stock) y Sistemático del siguiente compuesto.', f:'NaH'},
{tema:'hidru', t:'nom', q:'Escribe el nombre Tradicional (igual al Stock) y Sistemático del siguiente compuesto.', f:'CaH₂'},
{tema:'hidru', t:'nom', q:'Escribe el nombre Tradicional (igual al Stock) y Sistemático del siguiente compuesto.', f:'LiH'},
{tema:'hidru', t:'nom', q:'Escribe el nombre Tradicional (igual al Stock) y Sistemático del siguiente compuesto.', f:'AlH₃'},
{tema:'hidru', t:'nom', q:'Escribe el nombre Tradicional (igual al Stock) y Sistemático del siguiente compuesto.', f:'SrH₂'},
{tema:'hidru', t:'nom', q:'Escribe el nombre Tradicional (igual al Stock) y Sistemático del siguiente compuesto.', f:'MgH₂'},
{tema:'hidru', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión hidruro) e indica la carga de cada una.', f:'NaH'},
{tema:'hidru', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión hidruro) e indica la carga de cada una.', f:'CaH₂'},
{tema:'hidru', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión hidruro) e indica la carga de cada una.', f:'AlH₃'},
{tema:'hidru', t:'mdec', q:'Explica por qué en los hidruros metálicos el hidrógeno actúa con carga −1 y no con +1, usando como ejemplo el siguiente compuesto.', f:'LiH'},
{tema:'hidru', t:'mdec', q:'A partir de la fórmula, deduce la valencia con la que actúa el metal y explica cómo la obtuviste (en los hidruros metálicos el hidrógeno actúa con −1).', f:'SrH₂'},
{tema:'ac-hid', t:'rx', q:'El hidrógeno gaseoso (H₂) reacciona con cloro gaseoso (Cl₂); el producto se disuelve luego en agua. Escribe la ecuación balanceada de formación y nombra el producto puro (Sistemática) y disuelto en agua (Tradicional).'},
{tema:'ac-hid', t:'rx', q:'El hidrógeno gaseoso (H₂) reacciona con bromo (Br₂); el producto se disuelve luego en agua. Escribe la ecuación balanceada de formación y nombra el producto puro (Sistemática) y disuelto en agua (Tradicional).'},
{tema:'ac-hid', t:'rx', q:'El hidrógeno gaseoso (H₂) reacciona con flúor gaseoso (F₂); el producto se disuelve luego en agua. Escribe la ecuación balanceada de formación y nombra el producto puro (Sistemática) y disuelto en agua (Tradicional).'},
{tema:'ac-hid', t:'rx', q:'El hidrógeno gaseoso (H₂) reacciona con azufre (S); el producto se disuelve luego en agua. Escribe la ecuación balanceada de formación y nombra el producto puro (Sistemática) y disuelto en agua (Tradicional).'},
{tema:'ac-hid', t:'rx', q:'El hidrógeno gaseoso (H₂) reacciona con selenio (Se); el producto se disuelve luego en agua. Escribe la ecuación balanceada de formación y nombra el producto puro (Sistemática) y disuelto en agua (Tradicional).'},
{tema:'ac-hid', t:'rx', q:'El hidrógeno gaseoso (H₂) reacciona con telurio (Te); el producto se disuelve luego en agua. Escribe la ecuación balanceada de formación y nombra el producto puro (Sistemática) y disuelto en agua (Tradicional).'},
{tema:'ac-hid', t:'nom', q:'Escribe el nombre del siguiente compuesto disuelto en agua (Tradicional) y en estado puro/gaseoso (Sistemática).', f:'HCl'},
{tema:'ac-hid', t:'nom', q:'Escribe el nombre del siguiente compuesto disuelto en agua (Tradicional) y en estado puro/gaseoso (Sistemática).', f:'HBr'},
{tema:'ac-hid', t:'nom', q:'Escribe el nombre del siguiente compuesto disuelto en agua (Tradicional) y en estado puro/gaseoso (Sistemática).', f:'HF'},
{tema:'ac-hid', t:'nom', q:'Escribe el nombre del siguiente compuesto disuelto en agua (Tradicional) y en estado puro/gaseoso (Sistemática).', f:'H₂S'},
{tema:'ac-hid', t:'nom', q:'Escribe el nombre del siguiente compuesto disuelto en agua (Tradicional) y en estado puro/gaseoso (Sistemática).', f:'H₂Te'},
{tema:'ac-hid', t:'nom', q:'Escribe el nombre del siguiente compuesto disuelto en agua (Tradicional) y en estado puro/gaseoso (Sistemática).', f:'HI'},
{tema:'ac-hid', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una.', f:'HCl'},
{tema:'ac-hid', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una.', f:'HBr'},
{tema:'ac-hid', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una, explicando por qué lleva dos hidrógenos.', f:'H₂S'},
{tema:'ac-hid', t:'mdec', q:'Explica por qué el HCl se nombra \'cloruro de hidrógeno\' en estado gaseoso y \'ácido clorhídrico\' cuando está disuelto en agua.'},
{tema:'ac-hid', t:'mdec', q:'Explica qué tienen en común todos los ácidos hidrácidos en su composición y en qué se diferencian de los oxácidos, usando como ejemplo el siguiente compuesto.', f:'H₂Se'},
{tema:'base', t:'rx', q:'El óxido de sodio (Na₂O) reacciona con agua. Escribe la ecuación balanceada de esta reacción (óxido básico + agua → hidróxido) y nombra el producto.'},
{tema:'base', t:'rx', q:'El óxido de potasio (K₂O) reacciona con agua. Escribe la ecuación balanceada de esta reacción (óxido básico + agua → hidróxido) y nombra el producto.'},
{tema:'base', t:'rx', q:'La cal viva (CaO) reacciona con agua para formar la \'cal apagada\'. Escribe la ecuación balanceada de esta reacción (óxido básico + agua → hidróxido) y nombra el producto.'},
{tema:'base', t:'rx', q:'El óxido de magnesio (MgO) reacciona con agua formando el compuesto de la \'leche de magnesia\'. Escribe la ecuación balanceada de esta reacción (óxido básico + agua → hidróxido) y nombra el producto.'},
{tema:'base', t:'rx', q:'El óxido de litio (Li₂O) reacciona con agua. Escribe la ecuación balanceada de esta reacción (óxido básico + agua → hidróxido) y nombra el producto.'},
{tema:'base', t:'rx', q:'El sodio metálico reacciona violentamente con agua liberando hidrógeno gaseoso. Escribe la ecuación balanceada y nombra el hidróxido que se forma.'},
{tema:'base', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'Fe(OH)₂'},
{tema:'base', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'Fe(OH)₃'},
{tema:'base', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'Cu(OH)₂'},
{tema:'base', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'Pb(OH)₂'},
{tema:'base', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'Sn(OH)₄'},
{tema:'base', t:'nom', q:'Escribe el nombre Tradicional (igual al Stock) y Sistemático del siguiente compuesto.', f:'Al(OH)₃'},
{tema:'base', t:'mdec', q:'Identifica las partes de este compuesto (catión e hidróxido) e indica la carga de cada una.', f:'NaOH'},
{tema:'base', t:'mdec', q:'Identifica las partes de este compuesto (catión e hidróxido) e indica la carga de cada una.', f:'Mg(OH)₂'},
{tema:'base', t:'mdec', q:'Identifica las partes de este compuesto (catión e hidróxido) e indica la carga de cada una.', f:'Fe(OH)₃'},
{tema:'base', t:'mdec', q:'Identifica las partes de este compuesto (catión e hidróxido) e indica la carga de cada una.', f:'Al(OH)₃'},
{tema:'base', t:'mdec', q:'A partir de la fórmula, deduce la valencia con la que actúa el metal y explica cómo la obtuviste (el hidróxido tiene carga −1).', f:'Cu(OH)₂'},
{tema:'ac-ox', t:'rx', q:'El dióxido de carbono (CO₂) reacciona con agua. Escribe la ecuación balanceada de formación del ácido oxácido resultante y nombra el producto en nomenclatura Tradicional.'},
{tema:'ac-ox', t:'rx', q:'El pentóxido de dinitrógeno (N₂O₅) reacciona con agua. Escribe la ecuación balanceada de formación del ácido oxácido resultante y nombra el producto en nomenclatura Tradicional.'},
{tema:'ac-ox', t:'rx', q:'El dióxido de azufre (SO₂) reacciona con agua. Escribe la ecuación balanceada de formación del ácido oxácido resultante y nombra el producto en nomenclatura Tradicional.'},
{tema:'ac-ox', t:'rx', q:'El heptóxido de dicloro (Cl₂O₇) reacciona con agua. Escribe la ecuación balanceada de formación del ácido oxácido resultante y nombra el producto en nomenclatura Tradicional.'},
{tema:'ac-ox', t:'rx', q:'El monóxido de dicloro (Cl₂O) reacciona con agua. Escribe la ecuación balanceada de formación del ácido oxácido resultante y nombra el producto en nomenclatura Tradicional.'},
{tema:'ac-ox', t:'rx', q:'El trióxido de dinitrógeno (N₂O₃) reacciona con agua. Escribe la ecuación balanceada de formación del ácido oxácido resultante y nombra el producto en nomenclatura Tradicional.'},
{tema:'ac-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente ácido, identificando primero el oxoanión que contiene.', f:'H₂SO₄'},
{tema:'ac-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente ácido, identificando primero el oxoanión que contiene.', f:'HClO₃'},
{tema:'ac-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente ácido, identificando primero el oxoanión que contiene.', f:'HClO₂'},
{tema:'ac-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente ácido, identificando primero el oxoanión que contiene.', f:'HBrO'},
{tema:'ac-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente ácido, identificando primero el oxoanión que contiene.', f:'HIO₄'},
{tema:'ac-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente ácido, identificando primero el oxoanión que contiene.', f:'H₃PO₄'},
{tema:'ac-ox', t:'mdec', q:'Identifica las partes de este compuesto (hidrógenos y oxoanión) e indica la carga de cada una.', f:'H₂SO₄'},
{tema:'ac-ox', t:'mdec', q:'Identifica las partes de este compuesto (hidrógenos y oxoanión) e indica la carga de cada una.', f:'HNO₃'},
{tema:'ac-ox', t:'mdec', q:'Identifica las partes de este compuesto (hidrógenos y oxoanión) e indica la carga de cada una.', f:'HClO₄'},
{tema:'ac-ox', t:'mdec', q:'Identifica las partes de este compuesto (hidrógenos y oxoanión) e indica la carga de cada una.', f:'H₃PO₄'},
{tema:'ac-ox', t:'mdec', q:'Calcula el estado de oxidación del no metal en el siguiente ácido y explica cómo lo obtuviste (H = +1, O = −2).', f:'HClO₃'},
{tema:'sal-bin', t:'rx', q:'El potasio reacciona con bromo líquido (Br₂). Escribe la ecuación balanceada de formación de la sal binaria resultante y nombra el producto.'},
{tema:'sal-bin', t:'rx', q:'El hierro, actuando con valencia +3, reacciona con cloro gaseoso (Cl₂). Escribe la ecuación balanceada de formación de la sal binaria resultante y nombra el producto.'},
{tema:'sal-bin', t:'rx', q:'El aluminio reacciona con yodo (I₂). Escribe la ecuación balanceada de formación de la sal binaria resultante y nombra el producto.'},
{tema:'sal-bin', t:'rx', q:'El magnesio reacciona con flúor gaseoso (F₂). Escribe la ecuación balanceada de formación de la sal binaria resultante y nombra el producto.'},
{tema:'sal-bin', t:'rx', q:'El zinc reacciona con azufre (S). Escribe la ecuación balanceada de formación de la sal binaria resultante y nombra el producto.'},
{tema:'sal-bin', t:'rx', q:'El ácido clorhídrico (HCl) reacciona con hidróxido de sodio (NaOH) en una neutralización. Escribe la ecuación balanceada y nombra la sal binaria que se forma (además del agua).'},
{tema:'sal-bin', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'FeCl₂'},
{tema:'sal-bin', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'CuCl₂'},
{tema:'sal-bin', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'PbS₂'},
{tema:'sal-bin', t:'nom', q:'Escribe el nombre Tradicional, Stock y Sistemático del siguiente compuesto.', f:'SnCl₄'},
{tema:'sal-bin', t:'nom', q:'Escribe el nombre Tradicional y Sistemático del siguiente compuesto.', f:'CaF₂'},
{tema:'sal-bin', t:'nom', q:'Escribe el nombre Tradicional y Sistemático del siguiente compuesto.', f:'Na₂S'},
{tema:'sal-bin', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una.', f:'CaCl₂'},
{tema:'sal-bin', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una.', f:'FeCl₃'},
{tema:'sal-bin', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una.', f:'Na₂S'},
{tema:'sal-bin', t:'mdec', q:'Identifica las partes de este compuesto (catión y anión) e indica la carga de cada una.', f:'AlBr₃'},
{tema:'sal-bin', t:'mdec', q:'A partir de la fórmula, deduce la valencia con la que actúa el metal y explica cómo la obtuviste (el sulfuro tiene carga −2).', f:'Cu₂S'},
{tema:'sal-ox', t:'rx', q:'El hidróxido de potasio (KOH) reacciona con ácido nítrico (HNO₃) en una neutralización completa. Escribe la ecuación balanceada y nombra la sal oxigenada que se forma (además del agua).'},
{tema:'sal-ox', t:'rx', q:'El hidróxido de sodio (NaOH) reacciona con ácido sulfúrico (H₂SO₄) en una neutralización completa. Escribe la ecuación balanceada y nombra la sal oxigenada que se forma (además del agua).'},
{tema:'sal-ox', t:'rx', q:'El hidróxido de calcio (Ca(OH)₂) reacciona con ácido carbónico (H₂CO₃) en una neutralización completa. Escribe la ecuación balanceada y nombra la sal oxigenada que se forma (además del agua).'},
{tema:'sal-ox', t:'rx', q:'El hidróxido de magnesio (Mg(OH)₂) reacciona con ácido sulfúrico (H₂SO₄) en una neutralización completa. Escribe la ecuación balanceada y nombra la sal oxigenada que se forma (además del agua).'},
{tema:'sal-ox', t:'rx', q:'El hidróxido de sodio (NaOH) reacciona con ácido perclórico (HClO₄) en una neutralización completa. Escribe la ecuación balanceada y nombra la sal oxigenada que se forma (además del agua).'},
{tema:'sal-ox', t:'rx', q:'El hidróxido de potasio (KOH) reacciona con ácido fosfórico (H₃PO₄) en una neutralización completa. Escribe la ecuación balanceada y nombra la sal oxigenada que se forma (además del agua).'},
{tema:'sal-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente compuesto, identificando primero el oxoanión que contiene.', f:'CaCO₃'},
{tema:'sal-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente compuesto, identificando primero el oxoanión que contiene.', f:'KNO₂'},
{tema:'sal-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente compuesto, identificando primero el oxoanión que contiene.', f:'NaClO₃'},
{tema:'sal-ox', t:'nom', q:'Escribe el nombre Tradicional del siguiente compuesto, identificando primero el oxoanión que contiene.', f:'KMnO₄'},
{tema:'sal-ox', t:'nom', q:'Escribe el nombre Tradicional y Stock del siguiente compuesto, identificando primero el oxoanión que contiene.', f:'FeSO₄'},
{tema:'sal-ox', t:'nom', q:'Escribe el nombre Tradicional y Stock del siguiente compuesto, identificando primero el oxoanión que contiene.', f:'Cu(NO₃)₂'},
{tema:'sal-ox', t:'mdec', q:'Identifica las partes de este compuesto (catión y oxoanión) e indica la carga de cada una.', f:'CaCO₃'},
{tema:'sal-ox', t:'mdec', q:'Identifica las partes de este compuesto (catión y oxoanión) e indica la carga de cada una.', f:'KNO₃'},
{tema:'sal-ox', t:'mdec', q:'Identifica las partes de este compuesto (catión y oxoanión) e indica la carga de cada una.', f:'Fe₂(SO₄)₃'},
{tema:'sal-ox', t:'mdec', q:'Identifica las partes de este compuesto (catión y oxoanión) e indica la carga de cada una.', f:'Na₃PO₄'},
{tema:'sal-ox', t:'mdec', q:'A partir de la fórmula, deduce la valencia con la que actúa el metal y explica cómo la obtuviste (el nitrato tiene carga −1).', f:'Pb(NO₃)₂'},
{tema:'sal-ac', t:'rx', q:'El hidróxido de sodio (NaOH) reacciona con ácido sulfúrico (H₂SO₄) en proporción 1:1, de modo que el ácido conserva uno de sus hidrógenos. Escribe la ecuación balanceada y nombra la sal ácida en Tradicional y Stock.'},
{tema:'sal-ac', t:'rx', q:'El hidróxido de potasio (KOH) reacciona con ácido carbónico (H₂CO₃) en proporción 1:1, de modo que el ácido conserva uno de sus hidrógenos. Escribe la ecuación balanceada y nombra la sal ácida en Tradicional y Stock.'},
{tema:'sal-ac', t:'rx', q:'El hidróxido de sodio (NaOH) reacciona con ácido carbónico (H₂CO₃) en proporción 1:1, de modo que el ácido conserva uno de sus hidrógenos. Escribe la ecuación balanceada y nombra la sal ácida en Tradicional y Stock.'},
{tema:'sal-ac', t:'rx', q:'El hidróxido de sodio (NaOH) reacciona con ácido sulfuroso (H₂SO₃) en proporción 1:1, de modo que el ácido conserva uno de sus hidrógenos. Escribe la ecuación balanceada y nombra la sal ácida en Tradicional y Stock.'},
{tema:'sal-ac', t:'rx', q:'El hidróxido de calcio (Ca(OH)₂) reacciona con ácido carbónico (H₂CO₃) en exceso, en proporción 1:2, de modo que el ácido conserva uno de sus hidrógenos. Escribe la ecuación balanceada y nombra la sal ácida en Tradicional y Stock.'},
{tema:'sal-ac', t:'rx', q:'Al hornear, el NaHCO₃ del polvo para hornear se descompone en Na₂CO₃, H₂O y CO₂. Escribe la ecuación balanceada y nombra el NaHCO₃ en Tradicional y Stock y el Na₂CO₃ en Tradicional.'},
{tema:'sal-ac', t:'nom', q:'Escribe el nombre Tradicional y Stock del siguiente compuesto.', f:'NaHCO₃'},
{tema:'sal-ac', t:'nom', q:'Escribe el nombre Tradicional y Stock del siguiente compuesto.', f:'NaHSO₃'},
{tema:'sal-ac', t:'nom', q:'Escribe el nombre Tradicional y Stock del siguiente compuesto.', f:'KHCO₃'},
{tema:'sal-ac', t:'nom', q:'Escribe el nombre Tradicional y Stock del siguiente compuesto.', f:'Ca(HCO₃)₂'},
{tema:'sal-ac', t:'nom', q:'Escribe el nombre Tradicional y Stock del siguiente compuesto.', f:'NaHSO₄'},
{tema:'sal-ac', t:'nom', q:'Escribe el nombre Tradicional y Stock del siguiente compuesto.', f:'Mg(HCO₃)₂'},
{tema:'sal-ac', t:'mdec', q:'Identifica las partes de este compuesto (catión y oxoanión ácido) e indica la carga de cada una.', f:'NaHCO₃'},
{tema:'sal-ac', t:'mdec', q:'Identifica las partes de este compuesto (catión y oxoanión ácido) e indica la carga de cada una.', f:'KHSO₄'},
{tema:'sal-ac', t:'mdec', q:'Identifica las partes de este compuesto (catión y oxoanión ácido) e indica la carga de cada una.', f:'Ca(HCO₃)₂'},
{tema:'sal-ac', t:'mdec', q:'Identifica las partes de este compuesto (catión y oxoanión ácido) e indica la carga de cada una.', f:'NaHSO₃'},
{tema:'sal-ac', t:'mdec', q:'Compara las dos sales siguientes: identifica el oxoanión de cada una con su carga y explica por qué una es sal ácida y la otra es sal oxigenada neutra.', f:'NaHCO₃ y Na₂CO₃'},
{tema:'reaccion', t:'rx', q:'Clasifica el tipo de reacción de la siguiente ecuación y justifica tu respuesta según el número y el tipo de reactivos y productos.', f:'2H₂O → 2H₂ + O₂'},
{tema:'reaccion', t:'rx', q:'Clasifica el tipo de reacción de la siguiente ecuación y justifica tu respuesta según el número y el tipo de reactivos y productos.', f:'Zn + 2HCl → ZnCl₂ + H₂'},
{tema:'reaccion', t:'rx', q:'Clasifica el tipo de reacción de la siguiente ecuación y justifica tu respuesta según el número y el tipo de reactivos y productos.', f:'AgNO₃ + NaCl → AgCl + NaNO₃'},
{tema:'reaccion', t:'rx', q:'Clasifica el tipo de reacción de la siguiente ecuación y justifica tu respuesta según el número y el tipo de reactivos y productos.', f:'CH₄ + 2O₂ → CO₂ + 2H₂O'},
{tema:'reaccion', t:'rx', q:'Clasifica el tipo de reacción de la siguiente ecuación y justifica tu respuesta según el número y el tipo de reactivos y productos.', f:'CaCO₃ → CaO + CO₂'},
{tema:'reaccion', t:'rx', q:'Clasifica el tipo de reacción de la siguiente ecuación y justifica tu respuesta según el número y el tipo de reactivos y productos.', f:'Fe + CuSO₄ → FeSO₄ + Cu'},
{tema:'reaccion', t:'nom', q:'Clasifica la siguiente reacción y nombra el producto en nomenclatura Tradicional y Sistemática.', f:'S + O₂ → SO₂'},
{tema:'reaccion', t:'nom', q:'Clasifica la siguiente reacción y nombra la sal que se forma en nomenclatura Tradicional.', f:'2KClO₃ → 2KCl + 3O₂'},
{tema:'reaccion', t:'nom', q:'Clasifica la siguiente reacción y nombra la sal que se forma en nomenclatura Tradicional y Stock.', f:'Fe + 2HCl → FeCl₂ + H₂'},
{tema:'reaccion', t:'nom', q:'Clasifica la siguiente reacción y nombra el precipitado (BaSO₄) en nomenclatura Tradicional.', f:'BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl'},
{tema:'reaccion', t:'nom', q:'Clasifica la siguiente reacción y nombra el producto en nomenclatura Tradicional.', f:'SO₃ + H₂O → H₂SO₄'},
{tema:'reaccion', t:'nom', q:'Clasifica la siguiente reacción y nombra el reactivo (HgO) en nomenclatura Tradicional, Stock y Sistemática.', f:'2HgO → 2Hg + O₂'},
{tema:'reaccion', t:'mdec', q:'En la reacción Zn + CuSO₄ → ZnSO₄ + Cu, clasifica el tipo de reacción e identifica el catión y el oxoanión del producto ZnSO₄, con su carga.', f:'ZnSO₄'},
{tema:'reaccion', t:'mdec', q:'En la reacción 2Al + 6HCl → 2AlCl₃ + 3H₂, clasifica el tipo de reacción e identifica el catión y el anión de la sal formada, con su carga.', f:'AlCl₃'},
{tema:'reaccion', t:'mdec', q:'En la reacción Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃, clasifica el tipo de reacción e identifica el catión y el anión del precipitado amarillo PbI₂, con su carga.', f:'PbI₂'},
{tema:'reaccion', t:'mdec', q:'En la reacción Na₂O + H₂O → 2NaOH, clasifica el tipo de reacción e identifica el catión y el hidróxido del producto, con su carga.', f:'NaOH'},
{tema:'reaccion', t:'mdec', q:'En la reacción C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, clasifica el tipo de reacción y explica qué reactivos y productos te permiten reconocerla.'},
{tema:'mol-masa', t:'rx', q:'Calcula paso a paso la masa molar del siguiente compuesto, mostrando la masa atómica de cada elemento presente.', f:'H₂O'},
{tema:'mol-masa', t:'rx', q:'Calcula paso a paso la masa molar del siguiente compuesto, mostrando la masa atómica de cada elemento presente.', f:'H₂SO₄'},
{tema:'mol-masa', t:'rx', q:'Calcula paso a paso la masa molar del siguiente compuesto, mostrando la masa atómica de cada elemento presente.', f:'CaCO₃'},
{tema:'mol-masa', t:'rx', q:'Calcula paso a paso la masa molar del siguiente compuesto, mostrando la masa atómica de cada elemento presente.', f:'Ca(OH)₂'},
{tema:'mol-masa', t:'rx', q:'Calcula paso a paso la masa molar del siguiente compuesto, mostrando la masa atómica de cada elemento presente.', f:'Al₂(SO₄)₃'},
{tema:'mol-masa', t:'nom', q:'Un compuesto de masa molar 40.304 g/mol está formado por magnesio y oxígeno en proporción 1:1. Escribe su fórmula y nómbralo en Tradicional y Sistemática.'},
{tema:'mol-masa', t:'nom', q:'Calcula la masa molar del siguiente compuesto y nómbralo en nomenclatura Tradicional.', f:'KNO₃'},
{tema:'mol-masa', t:'nom', q:'Calcula la masa molar del siguiente compuesto y nómbralo en nomenclatura Tradicional.', f:'NaHCO₃'},
{tema:'mol-masa', t:'nom', q:'Calcula la masa molar del siguiente compuesto y nómbralo en nomenclatura Tradicional y Stock.', f:'FeCl₃'},
{tema:'mol-masa', t:'nom', q:'Calcula la masa molar del siguiente compuesto y nómbralo en nomenclatura Tradicional y Sistemática.', f:'SO₃'},
{tema:'mol-masa', t:'nom', q:'Calcula la masa molar del siguiente compuesto y nómbralo en nomenclatura Tradicional y Stock.', f:'Cu(OH)₂'},
{tema:'mol-masa', t:'mdec', q:'Si tienes 36 g de agua (H₂O, masa molar 18.015 g/mol), calcula aproximadamente cuántos moles de agua tienes.'},
{tema:'mol-masa', t:'mdec', q:'Calcula cuántos gramos pesan 0.5 mol de NaCl (masa molar 58.44 g/mol).'},
{tema:'mol-masa', t:'mdec', q:'Calcula cuántos moles hay en 4.9 g de H₂SO₄ (masa molar 98.07 g/mol).'},
{tema:'mol-masa', t:'mdec', q:'Calcula cuántos gramos hay en 2.5 mol de CaCO₃ (masa molar 100.09 g/mol).'},
{tema:'mol-masa', t:'mdec', q:'Calcula cuántas moléculas de CO₂ hay en 2 mol de CO₂, usando el número de Avogadro (6.022 × 10²³).'},
{tema:'mol-masa', t:'mdec', q:'Calcula cuántos moles de átomos de oxígeno hay en 1 mol de H₂SO₄ y explica tu razonamiento.'},
{tema:'elemento', t:'rx', q:'El sodio (Na, grupo 1) reacciona con el cloro (Cl, grupo 17). Predice, a partir de la posición de cada elemento en la tabla periódica, la fórmula del compuesto que forman y nómbralo.'},
{tema:'elemento', t:'rx', q:'El calcio (Ca, grupo 2) reacciona con oxígeno (O, grupo 16). Predice la fórmula del óxido que se forma y nómbralo.'},
{tema:'elemento', t:'rx', q:'El aluminio (Al, grupo 13, valencia +3) reacciona con oxígeno. Predice la fórmula del óxido que se forma y nómbralo.'},
{tema:'elemento', t:'rx', q:'El magnesio (Mg, grupo 2) reacciona con cloro (Cl, grupo 17). Predice la fórmula del compuesto que forman y nómbralo.'},
{tema:'elemento', t:'rx', q:'El potasio (K, grupo 1) reacciona con azufre (S, grupo 16). Predice la fórmula del compuesto que forman y nómbralo.'},
{tema:'elemento', t:'rx', q:'El bario (Ba, grupo 2) forma un hidróxido al reaccionar con agua. Predice la fórmula del hidróxido a partir del grupo del bario y nómbralo.'},
{tema:'elemento', t:'nom', q:'Escribe la configuración electrónica abreviada del siguiente elemento e indica a qué familia de la tabla periódica pertenece.', f:'Na (Z=11)'},
{tema:'elemento', t:'nom', q:'Escribe la configuración electrónica abreviada del siguiente elemento e indica a qué familia de la tabla periódica pertenece.', f:'Cl (Z=17)'},
{tema:'elemento', t:'nom', q:'Escribe la configuración electrónica abreviada del siguiente elemento e indica a qué familia de la tabla periódica pertenece.', f:'Ca (Z=20)'},
{tema:'elemento', t:'nom', q:'Escribe la configuración electrónica abreviada del siguiente elemento e indica a qué familia de la tabla periódica pertenece.', f:'O (Z=8)'},
{tema:'elemento', t:'nom', q:'Escribe la configuración electrónica abreviada del siguiente elemento e indica a qué familia de la tabla periódica pertenece.', f:'Al (Z=13)'},
{tema:'elemento', t:'nom', q:'Escribe la configuración electrónica abreviada del siguiente elemento e indica a qué familia de la tabla periódica pertenece.', f:'Ar (Z=18)'},
{tema:'elemento', t:'mdec', q:'Clasifica el siguiente elemento como metal, no metal o metaloide, y predice si tiende a formar cationes o aniones.', f:'S (Z=16)'},
{tema:'elemento', t:'mdec', q:'Clasifica el siguiente elemento como metal, no metal o metaloide, y predice si tiende a formar cationes o aniones.', f:'K (Z=19)'},
{tema:'elemento', t:'mdec', q:'Clasifica el siguiente elemento como metal, no metal o metaloide, y predice si tiende a formar cationes o aniones.', f:'Si (Z=14)'},
{tema:'elemento', t:'mdec', q:'Clasifica el siguiente elemento como metal, no metal o metaloide, y predice si tiende a formar cationes o aniones.', f:'F (Z=9)'},
{tema:'elemento', t:'mdec', q:'A partir de su grupo en la tabla periódica, predice el estado de oxidación más común del siguiente elemento y la carga del ion que forma.', f:'Mg (Z=12)'},
{tema:'reactividad', t:'rx', q:'Completa el eslabón faltante de la siguiente cadena de reactividad del calcio: Ca → CaO → ____ → CaCl₂.'},
{tema:'reactividad', t:'rx', q:'Completa el eslabón faltante de la siguiente cadena de reactividad del sodio: Na → ____ → NaOH → NaNO₃.'},
{tema:'reactividad', t:'rx', q:'Completa el eslabón faltante de la cadena de reactividad del hierro con valencia +3 y ácido clorhídrico: Fe → Fe₂O₃ → Fe(OH)₃ → ____.'},
{tema:'reactividad', t:'rx', q:'Completa el eslabón faltante de la cadena de reactividad del potasio con ácido sulfúrico: K → K₂O → KOH → ____.'},
{tema:'reactividad', t:'rx', q:'Completa el eslabón faltante de la cadena de reactividad del hierro con valencia +2: Fe → ____ → Fe(OH)₂ → FeSO₄.'},
{tema:'reactividad', t:'rx', q:'Escribe las tres ecuaciones balanceadas de la cadena de reactividad del magnesio con ácido clorhídrico: Mg → MgO → Mg(OH)₂ → MgCl₂.'},
{tema:'reactividad', t:'nom', q:'Nombra los 3 compuestos de la cadena de reactividad del sodio con ácido sulfúrico: el óxido, el hidróxido y la sal.'},
{tema:'reactividad', t:'nom', q:'Nombra en Tradicional y Stock los 3 compuestos de la cadena de reactividad del hierro con valencia +3 y ácido clorhídrico: el óxido, el hidróxido y la sal.'},
{tema:'reactividad', t:'nom', q:'Nombra en Tradicional y Stock los 3 compuestos de la cadena de reactividad del cobre con valencia +2 y ácido nítrico: el óxido, el hidróxido y la sal.'},
{tema:'reactividad', t:'nom', q:'Nombra los 3 compuestos de la cadena de reactividad del calcio con ácido carbónico: el óxido, el hidróxido y la sal.'},
{tema:'reactividad', t:'nom', q:'Nombra los 3 compuestos de la cadena de reactividad del potasio con ácido fosfórico: el óxido, el hidróxido y la sal.'},
{tema:'reactividad', t:'nom', q:'El hierro genera dos cadenas de reactividad distintas. Escribe la fórmula y el nombre Tradicional del óxido de cada cadena (valencia +2 y +3) y explica por qué son compuestos diferentes.'},
{tema:'reactividad', t:'mdec', q:'En la sal final de la cadena de reactividad del calcio con ácido nítrico, identifica el catión y el oxoanión e indica la carga de cada uno.', f:'Ca(NO₃)₂'},
{tema:'reactividad', t:'mdec', q:'En el hidróxido de la cadena de reactividad del aluminio, identifica el catión y el hidróxido e indica la carga de cada uno.', f:'Al(OH)₃'},
{tema:'reactividad', t:'mdec', q:'En la sal final de la cadena de reactividad del hierro (valencia +3) con ácido sulfúrico, identifica el catión y el oxoanión e indica la carga de cada uno.', f:'Fe₂(SO₄)₃'},
{tema:'reactividad', t:'mdec', q:'En la sal final de la cadena de reactividad del sodio con ácido clorhídrico, identifica el catión y el anión e indica la carga de cada uno.', f:'NaCl'},
{tema:'reactividad', t:'mdec', q:'En la sal final de la cadena de reactividad del magnesio con ácido fosfórico, identifica el catión y el oxoanión e indica la carga de cada uno.', f:'Mg₃(PO₄)₂'},
{tema:'estequiometria', t:'rx', q:'Para la ecuación balanceada 2H₂ + O₂ → 2H₂O, calcula cuántos gramos de H₂O se producen a partir de 4.032 g de H₂ (MM H₂=2.016, MM H₂O=18.015). Muestra los 3 pasos de la cadena de conversión (gramos→moles del dato, moles del dato→moles de lo pedido, moles de lo pedido→gramos de lo pedido).'},
{tema:'estequiometria', t:'rx', q:'Para la ecuación balanceada CH₄ + 2O₂ → CO₂ + 2H₂O, calcula cuántos gramos de CO₂ se producen a partir de 32.09 g de CH₄ (MM CH₄=16.043, MM CO₂=44.009). Muestra los 3 pasos de la cadena de conversión (gramos→moles del dato, moles del dato→moles de lo pedido, moles de lo pedido→gramos de lo pedido).'},
{tema:'estequiometria', t:'rx', q:'Para la ecuación balanceada N₂ + 3H₂ → 2NH₃, calcula cuántos gramos de NH₃ se producen a partir de 28.01 g de N₂ (MM N₂=28.014, MM NH₃=17.031). Muestra los 3 pasos de la cadena de conversión (gramos→moles del dato, moles del dato→moles de lo pedido, moles de lo pedido→gramos de lo pedido).'},
{tema:'estequiometria', t:'rx', q:'Para la ecuación balanceada 2KClO₃ → 2KCl + 3O₂, calcula cuántos gramos de O₂ se producen a partir de 245.1 g de KClO₃ (MM KClO₃=122.55, MM O₂=31.998). Muestra los 3 pasos de la cadena de conversión (gramos→moles del dato, moles del dato→moles de lo pedido, moles de lo pedido→gramos de lo pedido).'},
{tema:'estequiometria', t:'rx', q:'Para la ecuación balanceada CaCO₃ → CaO + CO₂, calcula cuántos gramos de CaO se producen a partir de 50.04 g de CaCO₃ (MM CaCO₃=100.09, MM CaO=56.077). Muestra los 3 pasos de la cadena de conversión (gramos→moles del dato, moles del dato→moles de lo pedido, moles de lo pedido→gramos de lo pedido).'},
{tema:'estequiometria', t:'rx', q:'Para la ecuación balanceada 2Na + Cl₂ → 2NaCl, calcula cuántos gramos de NaCl se producen a partir de 45.98 g de Na (MM Na=22.990, MM NaCl=58.44). Muestra los 3 pasos de la cadena de conversión (gramos→moles del dato, moles del dato→moles de lo pedido, moles de lo pedido→gramos de lo pedido).'},
{tema:'estequiometria', t:'nom', q:'Para la ecuación balanceada Fe + S → FeS, calcula cuántos gramos de FeS se forman a partir de 11.17 g de Fe (MM Fe=55.845, MM FeS=87.91), y nombra el producto en nomenclatura Tradicional y Stock.'},
{tema:'estequiometria', t:'nom', q:'Para la ecuación balanceada CaO + H₂O → Ca(OH)₂, calcula cuántos gramos de Ca(OH)₂ se forman a partir de 112.15 g de CaO (MM CaO=56.077, MM Ca(OH)₂=74.092), y nombra el producto en nomenclatura Tradicional y Sistemática.'},
{tema:'estequiometria', t:'nom', q:'Para la ecuación balanceada SO₃ + H₂O → H₂SO₄, calcula cuántos gramos de H₂SO₄ se forman a partir de 40.03 g de SO₃ (MM SO₃=80.06, MM H₂SO₄=98.07), y nombra el producto en nomenclatura Tradicional.'},
{tema:'estequiometria', t:'nom', q:'Para la ecuación balanceada NaOH + HCl → NaCl + H₂O, calcula cuántos gramos de NaCl se forman a partir de 20.0 g de NaOH (MM NaOH=39.997, MM NaCl=58.44), y nombra la sal en nomenclatura Tradicional.'},
{tema:'estequiometria', t:'nom', q:'Para la ecuación balanceada 4Fe + 3O₂ → 2Fe₂O₃, calcula cuántos gramos de Fe₂O₃ se forman a partir de 111.69 g de Fe (MM Fe=55.845, MM Fe₂O₃=159.69), y nombra el producto en los 3 sistemas.'},
{tema:'estequiometria', t:'nom', q:'Para la ecuación balanceada Mg + 2HCl → MgCl₂ + H₂, calcula cuántos gramos de MgCl₂ se forman a partir de 4.861 g de Mg (MM Mg=24.305, MM MgCl₂=95.21), y nombra la sal en nomenclatura Tradicional.'},
{tema:'estequiometria', t:'mdec', q:'Para la ecuación balanceada N₂ + 3H₂ → 2NH₃, ¿cuántos moles de H₂ se necesitan para reaccionar con 4 moles de N₂, y cuántos moles de NH₃ se producen? Escribe las razones molares que usaste.'},
{tema:'estequiometria', t:'mdec', q:'Para la ecuación balanceada 2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O, ¿cuántos moles de O₂ se necesitan para quemar 3 moles de C₂H₆? Escribe la razón molar que usaste.'},
{tema:'estequiometria', t:'mdec', q:'Para la ecuación balanceada 2Al + 3Cl₂ → 2AlCl₃, calcula cuántos moles de AlCl₃ se forman a partir de 6 moles de Cl₂, e identifica el catión y el anión del producto con su carga.', f:'AlCl₃'},
{tema:'estequiometria', t:'mdec', q:'Para la ecuación balanceada CaCO₃ → CaO + CO₂, si se descomponen 3 moles de CaCO₃, ¿cuántos moles de cada producto se obtienen? Identifica también el catión y el oxoanión del reactivo con su carga.', f:'CaCO₃'},
{tema:'estequiometria', t:'mdec', q:'Para la ecuación balanceada 2Na + 2H₂O → 2NaOH + H₂, calcula cuántos moles de H₂ se liberan a partir de 5 moles de Na, e identifica el catión y el hidróxido del NaOH con su carga.', f:'NaOH'},
{tema:'atomo', t:'rx', q:'Describe el experimento de la lámina de oro de Rutherford: qué se disparó, contra qué, qué se observó y qué concluyó sobre la estructura del átomo. Explica por qué el modelo de Thomson no podía explicar esos resultados.'},
{tema:'atomo', t:'rx', q:'Explica cómo el tubo de rayos catódicos permitió a Thomson descubrir el electrón. ¿Qué observación indicó que las partículas tienen carga negativa y por qué cambiar el metal del cátodo fue importante?'},
{tema:'atomo', t:'nom', q:'Indica el número de protones, neutrones y electrones de la siguiente especie, y si es átomo neutro, catión o anión (Z del cloro = 17).', f:'³⁷Cl⁻'},
{tema:'atomo', t:'nom', q:'Indica el número de protones, neutrones y electrones de la siguiente especie, y explica qué le ocurrió al átomo para formarla (Z del hierro = 26).', f:'⁵⁶Fe³⁺'},
{tema:'atomo', t:'mdec', q:'Una especie química tiene las partículas indicadas. Escribe su símbolo con número de masa y carga, y di si es un átomo neutro, un catión o un anión.', partes:[['26 p⁺','cat'],['30 n⁰','oh'],['23 e⁻','an']]},
{tema:'atomo', t:'mdec', q:'Una especie química tiene las partículas indicadas. Escribe su símbolo con número de masa y carga, y explica cuántos electrones ganó o perdió respecto al átomo neutro.', partes:[['8 p⁺','cat'],['8 n⁰','oh'],['10 e⁻','an']]},
{tema:'config-e', t:'rx', q:'Usando el diagrama de Moeller, explica por qué el subnivel 4s se llena antes que el 3d. Luego escribe el orden de llenado desde 1s hasta 4p.'},
{tema:'config-e', t:'rx', q:'El cromo (Z = 24) y el cobre (Z = 29) son excepciones a la regla de Moeller. Escribe la configuración que predice la regla y la configuración real de cada uno, y explica por qué ocurre la excepción.'},
{tema:'config-e', t:'nom', q:'Escribe la configuración electrónica completa y abreviada, y dibuja el diagrama de orbitales del último subnivel. Indica su periodo, grupo y electrones de valencia.', f:'S (Z = 16)'},
{tema:'config-e', t:'nom', q:'Escribe la configuración abreviada del átomo neutro y del ion. Explica de qué subnivel salen los electrones que pierde.', f:'Fe²⁺ (Z = 26)'},
{tema:'config-e', t:'mdec', q:'En esta configuración abreviada, identifica el núcleo de gas noble y los electrones de valencia. ¿Qué elemento es? ¿En qué periodo, grupo y bloque está?', partes:[['[Ne]','an'],['3s²','cat'],['3p⁵','ox']]},
{tema:'config-e', t:'mdec', q:'En esta configuración abreviada, cuenta el total de electrones e identifica el elemento. ¿Cuántos electrones de valencia tiene y cuántos están desapareados?', partes:[['[Ar]','an'],['4s²','cat'],['3d¹⁰','ox'],['4p²','oh']]},
{tema:'enlace', t:'rx', q:'Explica, con símbolos de Lewis, cómo se forma el óxido de magnesio a partir de Mg (grupo 2) y O (grupo 16). Indica qué átomo cede electrones, cuántos, qué iones se forman y por qué la fórmula es MgO.'},
{tema:'enlace', t:'rx', q:'Diseña un procedimiento con una pila, un bombillo, agua y un mechero para decidir si un sólido blanco desconocido es iónico, covalente molecular o metálico. Explica qué resultado esperas en cada caso.'},
{tema:'enlace', t:'nom', q:'Dibuja la estructura de Lewis de la siguiente molécula. Indica cuántos pares enlazantes y libres tiene, si sus enlaces son polares y si la molécula es polar (EN: N = 3,04; H = 2,20).', f:'NH₃'},
{tema:'enlace', t:'nom', q:'Calcula la ΔEN de cada enlace y clasifícalo como covalente apolar, covalente polar o iónico (EN: K = 0,82; Br = 2,96; S = 2,58; O = 3,44; Cl = 3,16).', f:'KBr · SO₂ · Cl₂'},
{tema:'enlace', t:'mdec', q:'Identifica las partes de este compuesto iónico, la carga de cada ion y cuántos electrones cedió o ganó cada átomo para formarlo.', f:'CaCl₂', partes:[['Ca²⁺','cat'],['Cl⁻','an']]},
{tema:'enlace', t:'mdec', q:'En la molécula de agua, marca qué átomo queda con carga parcial δ− y cuál con δ+. Explica por qué la molécula es polar aunque tenga dos enlaces iguales.', f:'H₂O', partes:[['O δ−','an'],['H δ+','cat']]},
{tema:'atomo', t:'rx', q:'Compara los modelos atómicos de Dalton, Thomson, Rutherford y Bohr: para cada uno indica cómo imaginaba el átomo y qué hecho experimental obligó a cambiarlo por el siguiente.'},
{tema:'atomo', t:'rx', q:'Explica el modelo de Bohr para el átomo de hidrógeno: qué son los niveles de energía y qué le ocurre al electrón cuando absorbe o emite energía al cambiar de nivel.'},
{tema:'atomo', t:'rx', q:'Explica qué son los isótopos usando como ejemplo el carbono-12 y el carbono-14 (Z = 6): indica los protones, neutrones y electrones de cada uno y por qué los dos siguen siendo carbono.'},
{tema:'atomo', t:'rx', q:'El cloro natural tiene dos isótopos: cloro-35 (75,8 %) y cloro-37 (24,2 %). Calcula su masa atómica promedio y explica por qué no es un número entero.'},
{tema:'atomo', t:'rx', q:'Explica en qué se diferencia una órbita del modelo de Bohr de un orbital del modelo mecánico-cuántico actual.'},
{tema:'atomo', t:'nom', q:'Indica el número de protones, neutrones y electrones de la siguiente especie, y si es átomo neutro, catión o anión (Z del sodio = 11).', f:'²³Na⁺'},
{tema:'atomo', t:'nom', q:'Indica el número de protones, neutrones y electrones de la siguiente especie, y si es átomo neutro, catión o anión (Z del azufre = 16).', f:'³²S²⁻'},
{tema:'atomo', t:'nom', q:'Indica el número de protones, neutrones y electrones de la siguiente especie, y si es átomo neutro, catión o anión (Z del aluminio = 13).', f:'²⁷Al³⁺'},
{tema:'atomo', t:'nom', q:'Indica el número de protones, neutrones y electrones de la siguiente especie, y si es átomo neutro, catión o anión (Z del calcio = 20).', f:'⁴⁰Ca'},
{tema:'atomo', t:'nom', q:'Indica el número de protones, neutrones y electrones de la siguiente especie, y si es átomo neutro, catión o anión (Z del flúor = 9).', f:'¹⁹F⁻'},
{tema:'atomo', t:'mdec', q:'Una especie química tiene las partículas indicadas. Escribe su símbolo con número de masa y carga, y di si es un átomo neutro, un catión o un anión.', partes:[['17 p⁺', 'cat'], ['18 n⁰', 'oh'], ['18 e⁻', 'an']]},
{tema:'atomo', t:'mdec', q:'Una especie química tiene las partículas indicadas. Escribe su símbolo con número de masa y carga, y explica cuántos electrones ganó o perdió respecto al átomo neutro.', partes:[['20 p⁺', 'cat'], ['20 n⁰', 'oh'], ['18 e⁻', 'an']]},
{tema:'atomo', t:'mdec', q:'Una especie química tiene las partículas indicadas. Escribe su símbolo con número de masa y carga, y di si es un átomo neutro, un catión o un anión.', partes:[['6 p⁺', 'cat'], ['8 n⁰', 'oh'], ['6 e⁻', 'an']]},
{tema:'atomo', t:'mdec', q:'Una especie química tiene las partículas indicadas. Escribe su símbolo con número de masa y carga, y explica cuántos electrones ganó o perdió respecto al átomo neutro.', partes:[['12 p⁺', 'cat'], ['12 n⁰', 'oh'], ['10 e⁻', 'an']]},
{tema:'config-e', t:'rx', q:'Enuncia el principio de Aufbau, el principio de exclusión de Pauli y la regla de Hund, y muestra cómo se aplica cada uno al escribir la configuración del nitrógeno (Z = 7).'},
{tema:'config-e', t:'rx', q:'Escribe el orden de llenado de los subniveles según el diagrama de Moeller desde 1s hasta 5p, e indica cuántos electrones caben como máximo en cada tipo de subnivel (s, p, d y f).'},
{tema:'config-e', t:'rx', q:'Explica cómo se relaciona la configuración electrónica de un elemento con su ubicación en la tabla periódica (periodo, grupo y bloque), usando como ejemplos el calcio (Z = 20) y el bromo (Z = 35).'},
{tema:'config-e', t:'rx', q:'Explica por qué el litio (Z = 3), el sodio (Z = 11) y el potasio (Z = 19) tienen propiedades químicas parecidas. Escribe la configuración abreviada de cada uno para justificarlo.'},
{tema:'config-e', t:'rx', q:'Explica qué le ocurre a la configuración electrónica del cloro (Z = 17) cuando gana un electrón para formar Cl⁻, y por qué ese ion es estable.'},
{tema:'config-e', t:'nom', q:'Escribe la configuración electrónica completa y abreviada, y dibuja el diagrama de orbitales del último subnivel. Indica su periodo, grupo y electrones de valencia.', f:'N (Z = 7)'},
{tema:'config-e', t:'nom', q:'Escribe la configuración electrónica completa y abreviada, y dibuja el diagrama de orbitales del último subnivel. Indica su periodo, grupo y electrones de valencia.', f:'P (Z = 15)'},
{tema:'config-e', t:'nom', q:'Escribe la configuración electrónica completa y abreviada, y dibuja el diagrama de orbitales del último subnivel. Indica su periodo, grupo y electrones de valencia.', f:'K (Z = 19)'},
{tema:'config-e', t:'nom', q:'Escribe la configuración electrónica completa y abreviada, y dibuja el diagrama de orbitales del último subnivel. Indica su periodo, grupo y electrones de valencia.', f:'Br (Z = 35)'},
{tema:'config-e', t:'nom', q:'Escribe la configuración abreviada del átomo neutro y del ion. Explica cuántos electrones gana y en qué subnivel entran.', f:'O²⁻ (Z = 8)'},
{tema:'config-e', t:'mdec', q:'En esta configuración abreviada, identifica el núcleo de gas noble y los electrones de valencia. ¿Qué elemento es? ¿En qué periodo, grupo y bloque está?', partes:[['[He]', 'an'], ['2s²', 'cat'], ['2p³', 'ox']]},
{tema:'config-e', t:'mdec', q:'En esta configuración abreviada, identifica el núcleo de gas noble y los electrones de valencia. ¿Qué elemento es? ¿En qué periodo, grupo y bloque está?', partes:[['[Ar]', 'an'], ['4s¹', 'cat']]},
{tema:'config-e', t:'mdec', q:'En esta configuración abreviada, cuenta el total de electrones e identifica el elemento. ¿Cuántos electrones de valencia tiene y cuántos están desapareados?', partes:[['[Kr]', 'an'], ['5s²', 'cat'], ['4d¹⁰', 'ox'], ['5p⁵', 'oh']]},
{tema:'config-e', t:'mdec', q:'En esta configuración abreviada, cuenta el total de electrones e identifica el elemento. ¿Cuántos electrones de valencia tiene y cuántos están desapareados?', partes:[['[Ne]', 'an'], ['3s²', 'cat'], ['3p¹', 'ox']]},
{tema:'enlace', t:'rx', q:'Explica, con símbolos de Lewis, cómo se forma el cloruro de sodio a partir de Na (grupo 1) y Cl (grupo 17). Indica qué átomo cede electrones, cuántos, qué iones se forman y por qué la fórmula es NaCl.'},
{tema:'enlace', t:'rx', q:'Explica, con símbolos de Lewis, cómo se forma el óxido de aluminio a partir de Al (grupo 13) y O (grupo 16). Indica cuántos electrones cede cada aluminio, cuántos gana cada oxígeno y por qué la fórmula es Al₂O₃.'},
{tema:'enlace', t:'rx', q:'Explica el modelo del «mar de electrones» del enlace metálico y úsalo para justificar por qué los metales conducen la electricidad y se pueden convertir en láminas y alambres.'},
{tema:'enlace', t:'rx', q:'Explica la diferencia entre un enlace covalente simple, uno doble y uno triple, y da un ejemplo de molécula para cada uno con su estructura de Lewis.'},
{tema:'enlace', t:'rx', q:'Compara las propiedades de los compuestos iónicos y de los covalentes moleculares (punto de fusión, solubilidad en agua y conductividad eléctrica) y explica cada diferencia a partir del tipo de enlace.'},
{tema:'enlace', t:'nom', q:'Dibuja la estructura de Lewis de la siguiente molécula. Indica cuántos pares enlazantes y libres tiene, si sus enlaces son polares y si la molécula es polar (EN: C = 2,55; O = 3,44).', f:'CO₂'},
{tema:'enlace', t:'nom', q:'Dibuja la estructura de Lewis de la siguiente molécula. Indica cuántos pares enlazantes y libres tiene, si sus enlaces son polares y si la molécula es polar (EN: C = 2,55; H = 2,20).', f:'CH₄'},
{tema:'enlace', t:'nom', q:'Dibuja la estructura de Lewis de la siguiente molécula. Indica cuántos pares enlazantes y libres tiene, si sus enlaces son polares y si la molécula es polar (EN: H = 2,20; Cl = 3,16).', f:'HCl'},
{tema:'enlace', t:'nom', q:'Dibuja la estructura de Lewis de la siguiente molécula e indica cuántos enlaces hay entre los dos átomos y cuántos pares libres tiene cada uno.', f:'N₂'},
{tema:'enlace', t:'nom', q:'Calcula la ΔEN de cada enlace y clasifícalo como covalente apolar, covalente polar o iónico (EN: Na = 0,93; F = 3,98; H = 2,20; O = 3,44).', f:'NaF · H₂O · O₂'},
{tema:'enlace', t:'mdec', q:'Identifica las partes de este compuesto iónico, la carga de cada ion y cuántos electrones cedió o ganó cada átomo para formarlo.', f:'Na₂O'},
{tema:'enlace', t:'mdec', q:'Identifica las partes de este compuesto iónico, la carga de cada ion y cuántos electrones cedió o ganó cada átomo para formarlo.', f:'AlF₃'},
{tema:'enlace', t:'mdec', q:'En la molécula de cloruro de hidrógeno, marca qué átomo queda con carga parcial δ− y cuál con δ+, y explica por qué (EN: H = 2,20; Cl = 3,16).', f:'HCl'},
{tema:'enlace', t:'mdec', q:'Clasifica cada sustancia según su tipo de enlace (iónico, covalente molecular, covalente de red o metálico) y predice si conduce la electricidad en estado sólido.', f:'KCl · Cu · CO₂ · SiO₂'},
{tema:'elemento', t:'rx', q:'Describe cómo cambió la forma de ordenar los elementos desde las tríadas de Döbereiner hasta la ley periódica moderna de Moseley. Menciona qué aportó cada científico y qué limitación tenía su propuesta.'},
{tema:'elemento', t:'rx', q:'Mendeléiev dejó casillas vacías en su tabla. Explica por qué lo hizo y cómo el descubrimiento del germanio (1886) confirmó su idea.'},
{tema:'elemento', t:'rx', q:'Explica por qué el radio atómico disminuye al avanzar en un periodo y aumenta al bajar en un grupo. Usa las ideas de nivel de energía y carga nuclear efectiva.'},
{tema:'elemento', t:'rx', q:'Explica la relación entre la energía de ionización y el carácter metálico de un elemento. ¿Por qué el cesio es mucho más metálico que el cloro?'},
{tema:'elemento', t:'rx', q:'Explica por qué la tabla periódica tiene 2 columnas en el bloque s, 6 en el p, 10 en el d y 14 en el f. Relaciona tu respuesta con la configuración electrónica.'},
{tema:'elemento', t:'rx', q:'Las energías de ionización del periodo 2 son: Li 520, Be 900, B 801, C 1086, N 1402, O 1314, F 1681 y Ne 2081 kJ/mol. Describe la tendencia general e identifica y explica las dos excepciones.'},
{tema:'elemento', t:'nom', q:'Escribe la configuración abreviada del siguiente elemento e indica su periodo, su grupo en las numeraciones IUPAC y tradicional (A/B) y su bloque.', f:'Br (Z = 35)'},
{tema:'elemento', t:'nom', q:'Escribe la configuración abreviada del siguiente elemento e indica su periodo, su grupo en las numeraciones IUPAC y tradicional (A/B) y su bloque.', f:'Fe (Z = 26)'},
{tema:'elemento', t:'nom', q:'Ordena los siguientes elementos de menor a mayor radio atómico y de menor a mayor energía de ionización. Justifica con su posición en la tabla.', f:'Na, Mg, Cl'},
{tema:'elemento', t:'nom', q:'Ordena los siguientes elementos de menor a mayor radio atómico y de menor a mayor electronegatividad. Justifica con su posición en la tabla.', f:'F, Cl, Br, I'},
{tema:'elemento', t:'nom', q:'Ordena los siguientes elementos de menor a mayor carácter metálico y explica el criterio que usaste.', f:'K, Ca, Ga, Br'},
{tema:'elemento', t:'mdec', q:'Estos son datos de una tríada de Döbereiner. Calcula la masa que predice para el elemento del medio y compárala con el valor real (35,5 / 79,9 / 126,9). ¿Qué familia forman?', partes:[['Cl · 35,5','an'],['Br · ?','cat'],['I · 126,9','ox']]},
{tema:'elemento', t:'mdec', q:'En la tabla de Mendeléiev, el «eka-silicio» tenía estos vecinos. Estima su masa atómica promediando los cuatro vecinos y di qué elemento resultó ser.', partes:[['Si · 28,1','an'],['Sn · 118,7','cat'],['Ga · 69,7','ox'],['As · 74,9','oh']]},
{tema:'elemento', t:'mdec', q:'Para cada elemento, indica si es metal, no metal o metaloide, y ordénalos de mayor a menor electronegatividad.', partes:[['Na','cat'],['Si','oh'],['S','an'],['F','ox']]},
{tema:'elemento', t:'mdec', q:'Cada configuración pertenece a un elemento distinto. Indica el periodo, el grupo y el bloque de cada uno, y di cuál tiene mayor radio atómico.', partes:[['[Ne] 3s¹','cat'],['[Ne] 3s² 3p⁵','an'],['[Ar] 4s¹','ox']]},
{tema:'config-e', t:'rx', q:'Explica qué indica cada uno de los cuatro números cuánticos (n, l, mₗ y mₛ) y qué valores puede tomar cada uno. Usa una analogía para describir la «dirección» de un electrón.'},
{tema:'config-e', t:'rx', q:'Explica, usando los números cuánticos, por qué en el nivel n = 2 caben 8 electrones y en el nivel n = 3 caben 18.'},
{tema:'config-e', t:'rx', q:'Enuncia el principio de exclusión de Pauli en términos de números cuánticos y explica por qué, como consecuencia, en un orbital caben solo 2 electrones.'},
{tema:'config-e', t:'nom', q:'Escribe la configuración electrónica, dibuja las casillas del último subnivel y escribe los cuatro números cuánticos del electrón diferencial (llena de mₗ = −l a +l, empezando con ↑).', f:'O (Z = 8)'},
{tema:'config-e', t:'nom', q:'Escribe la configuración electrónica, dibuja las casillas del último subnivel y escribe los cuatro números cuánticos del electrón diferencial (llena de mₗ = −l a +l, empezando con ↑).', f:'Mn (Z = 25)'},
{tema:'config-e', t:'nom', q:'Escribe la configuración electrónica, dibuja las casillas del último subnivel y escribe los cuatro números cuánticos del electrón diferencial (llena de mₗ = −l a +l, empezando con ↑).', f:'Ga (Z = 31)'},
{tema:'config-e', t:'mdec', q:'Para cada conjunto de números cuánticos (n, l, mₗ, mₛ), di si es posible o no. Si no lo es, explica qué regla incumple; si lo es, di en qué subnivel está el electrón.', partes:[['(2, 1, −1, +½)','an'],['(3, 3, 0, −½)','cat'],['(4, 2, +3, +½)','ox'],['(1, 0, 0, −½)','oh']]},
{tema:'config-e', t:'mdec', q:'Estos son los números cuánticos del último electrón de un elemento neutro. Indica el subnivel, escribe la configuración completa y di de qué elemento se trata (llenado de mₗ = −l a +l, empezando con ↑).', partes:[['n = 3','an'],['l = 1','cat'],['mₗ = +1','ox'],['mₛ = +½','oh']]},
{tema:'elemento', t:'rx', q:'Explica por qué Moseley tuvo que reemplazar la masa atómica por el número atómico como criterio para ordenar la tabla. Usa el caso del argón (39,9) y el potasio (39,1).'},
{tema:'elemento', t:'rx', q:'Explica qué es la electronegatividad, cómo varía en la tabla periódica y por qué los gases nobles casi no tienen un valor asignado.'},
{tema:'elemento', t:'rx', q:'Compara el carácter metálico y la energía de ionización: ¿por qué cuando una aumenta la otra disminuye? Da un ejemplo con elementos del periodo 3.'},
{tema:'elemento', t:'nom', q:'Ordena los siguientes elementos del mismo grupo de menor a mayor energía de ionización y explica la tendencia.', f:'Li, Na, K, Rb, Cs'},
{tema:'elemento', t:'nom', q:'Escribe la configuración abreviada del siguiente elemento e indica su periodo, su grupo en las numeraciones IUPAC y tradicional (A/B) y su bloque.', f:'Ca (Z = 20)'},
{tema:'elemento', t:'mdec', q:'Estos elementos forman la tríada de Döbereiner de los alcalinotérreos. Calcula el promedio de las masas de los extremos y compáralo con la masa real del estroncio (87,6).', partes:[['Ca · 40,1','an'],['Sr · ?','cat'],['Ba · 137,3','ox']]},
{tema:'config-e', t:'rx', q:'Compara el modelo de Bohr y el modelo de orbitales para el átomo de oxígeno: dibuja cómo representa cada uno sus 8 electrones y explica qué información aporta el modelo cuántico que Bohr no tenía.'},
{tema:'config-e', t:'rx', q:'Explica por qué no existen los subniveles 1p ni 2d, usando los valores permitidos de los números cuánticos.'},
{tema:'config-e', t:'rx', q:'Describe la forma de los orbitales s, p y d, y explica qué número cuántico determina la forma y cuál la orientación.'},
{tema:'config-e', t:'rx', q:'Un compañero dice que el electrón del hidrógeno «gira en un círculo exacto alrededor del núcleo». Explica qué modelo describe esa idea y por qué el modelo actual la descarta.'},
{tema:'config-e', t:'rx', q:'Explica qué representa el número cuántico de espín y cómo se relaciona con las flechas ↑ y ↓ de los diagramas de orbitales.'},
{tema:'config-e', t:'nom', q:'Escribe la configuración electrónica, dibuja las casillas del último subnivel y escribe los cuatro números cuánticos del electrón diferencial (llena de mₗ = −l a +l, empezando con ↑).', f:'N (Z = 7)'},
{tema:'config-e', t:'nom', q:'Escribe la configuración electrónica, dibuja las casillas del último subnivel y escribe los cuatro números cuánticos del electrón diferencial (llena de mₗ = −l a +l, empezando con ↑).', f:'S (Z = 16)'},
{tema:'config-e', t:'nom', q:'Escribe la configuración electrónica, dibuja las casillas del último subnivel y escribe los cuatro números cuánticos del electrón diferencial (llena de mₗ = −l a +l, empezando con ↑).', f:'Fe (Z = 26)'},
{tema:'config-e', t:'nom', q:'Escribe todos los valores posibles de l y de mₗ para el siguiente nivel, nombra los subniveles y calcula cuántos orbitales y electrones caben en él.', f:'n = 3'},
{tema:'config-e', t:'mdec', q:'Para cada conjunto de números cuánticos (n, l, mₗ, mₛ), di si es posible o no. Si no lo es, explica qué regla incumple; si lo es, di en qué subnivel está el electrón.', partes:[['(3, 0, 0, +½)','an'],['(2, 1, +2, −½)','cat'],['(4, 3, −3, +½)','ox'],['(1, 1, 0, +½)','oh']]},
{tema:'config-e', t:'mdec', q:'Estos son los números cuánticos del último electrón de un elemento neutro. Indica el subnivel, escribe la configuración completa y di de qué elemento se trata (llenado de mₗ = −l a +l, empezando con ↑).', partes:[['n = 2','an'],['l = 1','cat'],['mₗ = 0','ox'],['mₛ = −½','oh']]},
{tema:'config-e', t:'mdec', q:'Estos son los números cuánticos del último electrón de un elemento neutro. Indica el subnivel, escribe la configuración completa y di de qué elemento se trata (llenado de mₗ = −l a +l, empezando con ↑).', partes:[['n = 4','an'],['l = 0','cat'],['mₗ = 0','ox'],['mₛ = −½','oh']]},
{tema:'config-e', t:'mdec', q:'Para el átomo de sodio (Z = 11), completa la comparación: ¿cuántas órbitas y cuántos electrones en cada una dibuja Bohr, y qué orbitales ocupa según el modelo cuántico?', partes:[['Bohr: n = 1, 2, 3','an'],['Cuántico: 1s 2s 2p 3s','cat']]},
{tema:'atomo', t:'rx', q:'Define átomo neutro, catión y anión. Explica por qué perder electrones produce una carga positiva y da un ejemplo de cada uno con su número de protones y electrones.'},
{tema:'atomo', t:'rx', q:'Explica por qué los metales tienden a formar cationes y los no metales aniones. Usa como ejemplos el sodio (grupo 1) y el cloro (grupo 17).'},
{tema:'atomo', t:'rx', q:'Define isótopos, isóbaros e isótonos y da un ejemplo real de cada uno, indicando Z, A y neutrones de cada especie.'},
{tema:'atomo', t:'rx', q:'El cobre tiene dos isótopos: cobre-63 (62,930 u, 69,15 %) y cobre-65 (64,928 u, 30,85 %). Calcula su masa atómica promedio y explica por qué queda más cerca de 63 que de 65.'},
{tema:'atomo', t:'rx', q:'Un estudiante dice que el ion Mg²⁺ tiene 14 protones porque «ganó 2». Explica su error y escribe los protones, neutrones y electrones correctos del ²⁴Mg²⁺ (Z = 12).'},
{tema:'atomo', t:'rx', q:'Explica por qué el número atómico (Z) identifica a un elemento, pero el número de masa (A) no. Usa los tres isótopos del hidrógeno como ejemplo.'},
{tema:'atomo', t:'rx', q:'Explica qué significa que el ion Na⁺ y el átomo de neón tengan el mismo número de electrones, y nombra otros dos iones con ese mismo número.'},
{tema:'atomo', t:'nom', q:'Indica el número de protones, neutrones y electrones de la siguiente especie, y si es átomo neutro, catión o anión (Z del hierro = 26).', f:'⁵⁶Fe³⁺'},
{tema:'atomo', t:'nom', q:'Indica el número de protones, neutrones y electrones de la siguiente especie, y si es átomo neutro, catión o anión (Z del nitrógeno = 7).', f:'¹⁴N³⁻'},
{tema:'atomo', t:'nom', q:'Indica el número de protones, neutrones y electrones de la siguiente especie, y si es átomo neutro, catión o anión (Z del uranio = 92).', f:'²³⁸U'},
{tema:'atomo', t:'nom', q:'Indica el número de protones, neutrones y electrones de la siguiente especie, y si es átomo neutro, catión o anión (Z del yodo = 53).', f:'¹²⁷I⁻'},
{tema:'atomo', t:'nom', q:'Indica el número de protones, neutrones y electrones de la siguiente especie, y si es átomo neutro, catión o anión (Z de la plata = 47).', f:'¹⁰⁷Ag⁺'},
{tema:'atomo', t:'nom', q:'Clasifica cada pareja como isótopos, isóbaros o isótonos y justifica con Z, A y neutrones.', f:'¹⁶O y ¹⁸O · ⁴⁰K y ⁴⁰Ca · ³⁷Cl y ³⁹K'},
{tema:'atomo', t:'nom', q:'Calcula la masa atómica promedio del siguiente elemento a partir de sus isótopos y compárala con la de la tabla periódica (79,90 u).', f:'Br: ⁷⁹Br 78,918 u (50,69 %) · ⁸¹Br 80,916 u (49,31 %)'},
{tema:'atomo', t:'mdec', q:'Una especie química tiene las partículas indicadas. Escribe su símbolo con número de masa y carga, y di si es un átomo neutro, un catión o un anión.', partes:[['20 p⁺','cat'],['20 n⁰','oh'],['18 e⁻','an']]},
{tema:'atomo', t:'mdec', q:'Una especie química tiene las partículas indicadas. Escribe su símbolo con número de masa y carga, y di si es un átomo neutro, un catión o un anión.', partes:[['15 p⁺','cat'],['16 n⁰','oh'],['18 e⁻','an']]},
{tema:'atomo', t:'mdec', q:'Una especie química tiene las partículas indicadas. Escribe su símbolo con número de masa y carga, y di si es un átomo neutro, un catión o un anión.', partes:[['29 p⁺','cat'],['34 n⁰','oh'],['27 e⁻','an']]},
{tema:'atomo', t:'mdec', q:'Completa los datos que faltan de esta especie (Z, A, protones, neutrones, electrones y carga) y escribe su notación.', partes:[['Azufre','cat'],['A = 32','oh'],['18 e⁻','an']]},
{tema:'atomo', t:'mdec', q:'Completa los datos que faltan de esta especie (símbolo, A, protones, electrones y carga) y escribe su notación.', partes:[['Z = 13','cat'],['14 n⁰','oh'],['carga 3+','an']]},
{tema:'atomo', t:'mdec', q:'Estos son los isótopos del magnesio con su masa y abundancia. Calcula la masa atómica promedio y explica por qué no es un número entero.', partes:[['²⁴Mg · 23,985 u · 78,99 %','cat'],['²⁵Mg · 24,986 u · 10,00 %','oh'],['²⁶Mg · 25,983 u · 11,01 %','an']]},
{tema:'modelos', t:'rx', q:'Explica con tus palabras la diferencia entre una ley, una teoría y un modelo, y da un ejemplo de cada una relacionado con los gases.'},
{tema:'modelos', t:'rx', q:'¿Por qué es incorrecto decir que «una teoría es una idea que todavía no se ha comprobado»? Usa como ejemplo la teoría atómica.'},
{tema:'modelos', t:'rx', q:'Explica con la teoría cinético-molecular por qué la presión de un gas aumenta cuando se reduce su volumen a temperatura constante.'},
{tema:'modelos', t:'rx', q:'Explica por qué el modelo atómico de Thomson fue reemplazado por el de Rutherford. ¿Qué nos enseña esto sobre cómo cambian los modelos científicos?'},
{tema:'modelos', t:'rx', q:'¿Por qué los fríjoles se cocinan más despacio en Bogotá que en Cartagena, y cómo ayuda la olla a presión? Explica con la relación entre presión y punto de ebullición.'},
{tema:'modelos', t:'rx', q:'Un paquete de papas sellado en Cartagena llega inflado a Bogotá. Formula una hipótesis que lo explique e indica cómo la pondrías a prueba.'},
{tema:'modelos', t:'rx', q:'Explica la diferencia entre interpolar y extrapolar con un modelo, y por qué la extrapolación es más arriesgada.'},
{tema:'modelos', t:'nom', q:'Un gas ocupa 9 L a 1 atm. Calcula su volumen a 3 atm y a 0,5 atm, a la misma temperatura. Muestra el uso de la ley de Boyle.'},
{tema:'modelos', t:'nom', q:'En un experimento se obtuvieron estos datos (P en atm; V en mL): (1; 60), (1,5; 40), (2; 30), (3; 20). Calcula P × V para cada par y explica qué ley comprueban.'},
{tema:'modelos', t:'nom', q:'Con los datos (1 atm; 60 mL), (2 atm; 30 mL) y (3 atm; 20 mL), predice el volumen a 4 atm e indica si es una interpolación o una extrapolación.'},
{tema:'modelos', t:'nom', q:'Un modelo dice que el agua hierve a T = 100 − 3,4 × (altitud ÷ 1000). Calcula el punto de ebullición en Medellín (1495 m) y en Tunja (2810 m).'},
{tema:'modelos', t:'nom', q:'Un estudiante midió en Bogotá que el agua hierve a 91,8 °C y el modelo predice 91,0 °C. Calcula la diferencia, explica si el modelo es aceptable y qué paso convierte un modelo en conocimiento comprobado.'},
{tema:'modelos', t:'nom', q:'Un globo tiene 2 L a 1 atm. ¿Qué presión se necesita para comprimirlo a 0,5 L a la misma temperatura?'},
{tema:'modelos', t:'nom', q:'Dibuja cómo se vería la gráfica de V contra P y la de P contra 1/V para un gas que cumple la ley de Boyle. Explica por qué la segunda es una recta.'},
{tema:'modelos', t:'mdec', q:'En el siguiente experimento identifica la variable independiente, la dependiente y dos variables controladas.', partes:[['Se mide el volumen de aire de una jeringa','cat'],['a presiones de 1, 2 y 3 atm','ox'],['a 20 °C y con la misma cantidad de aire','an']]},
{tema:'modelos', t:'mdec', q:'Clasifica cada enunciado como hipótesis, ley, teoría o modelo y justifica.', partes:[['P × V = constante','cat'],['Las partículas de un gas chocan con las paredes','ox'],['Si caliento el globo, se inflará','an'],['Un dibujo del átomo de Bohr','oh']]},
{tema:'modelos', t:'mdec', q:'Diseña un experimento para comprobar si la temperatura del agua cambia el tiempo que tarda en disolverse una pastilla efervescente. Indica la pregunta, la hipótesis y las variables.'},
{tema:'modelos', t:'mdec', q:'Plantea una pregunta sobre un fenómeno de tu municipio (lluvia, temperatura, calidad del aire) que se pueda responder con datos históricos, e indica qué datos necesitarías y dónde los buscarías.'},
{tema:'modelos', t:'mdec', q:'Un grupo obtuvo P × V = 49,6; 50,4; 49,9 y 50,5 atm·mL. Calcula el promedio, indica cuánto varían los datos y explica de dónde puede venir esa variación.'},
{tema:'modelos', t:'mdec', q:'Explica qué partes del modelo de «bolitas que rebotan» representan bien un gas real y qué simplifica o deja por fuera.'},

{tema:'acidobase', t:'rx', q:'Escribe la ecuación de neutralización entre el ácido clorhídrico y el hidróxido de sodio, y nombra los productos.'},
{tema:'acidobase', t:'rx', q:'Escribe la reacción del antiácido Mg(OH)₂ con el HCl del estómago, balancéala y explica por qué no conviene abusar de los antiácidos.'},
{tema:'acidobase', t:'rx', q:'Escribe la neutralización del ácido nítrico, HNO₃, con el hidróxido de potasio, KOH. Nombra la sal que se forma y escribe la ecuación que ocurre «en el fondo» entre H⁺ y OH⁻.'},
{tema:'acidobase', t:'rx', q:'Escribe la reacción de la cal agrícola (CaCO₃) con los H⁺ de un suelo ácido y explica por qué sube el pH.'},
{tema:'acidobase', t:'rx', q:'Explica cómo se forma la lluvia ácida: de dónde salen los óxidos de azufre, qué ecuación forma el ácido sulfúrico a partir del SO₃ y por qué la lluvia normal ya tiene un pH cercano a 5,6.'},
{tema:'acidobase', t:'rx', q:'Escribe la reacción del CO₂ con el agua del mar y explica por qué la acidificación del océano afecta a los corales del Caribe colombiano.'},
{tema:'acidobase', t:'rx', q:'Explica por qué el amoníaco es una base según Brønsted-Lowry pero no según Arrhenius. Escribe su reacción con el agua.'},
{tema:'acidobase', t:'nom', q:'Calcula el pH de una solución con [H⁺] = 1 × 10⁻³ mol/L y su pOH. Indica si es ácida o básica.'},
{tema:'acidobase', t:'nom', q:'Calcula cuántas veces más H⁺ tiene el jugo gástrico (pH 2) que la saliva (pH 7).'},
{tema:'acidobase', t:'nom', q:'Un suelo pasó de pH 4,6 a pH 5,8 después de encalarlo. ¿Cuántas veces disminuyó la concentración de H⁺?'},
{tema:'acidobase', t:'nom', q:'El pH del océano bajó de 8,2 a 8,1. Calcula en qué porcentaje aumentó la concentración de H⁺.'},
{tema:'acidobase', t:'nom', q:'Una solución tiene pOH = 3. Calcula su pH y su [H⁺], y nombra un producto de la casa con un pH parecido.'},
{tema:'acidobase', t:'nom', q:'¿Cuántos moles de HCl neutraliza 1 mol de Mg(OH)₂? ¿Y 1 mol de NaOH? Justifica con las ecuaciones balanceadas.'},
{tema:'acidobase', t:'mdec', q:'En la reacción indicada, identifica el ácido, la base y los dos pares conjugados.', f:'HNO₃ + H₂O → H₃O⁺ + NO₃⁻'},
{tema:'acidobase', t:'mdec', q:'En la reacción indicada, identifica quién dona y quién acepta el H⁺, y explica por qué el agua puede actuar como ácido o como base.', f:'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻'},
{tema:'acidobase', t:'mdec', q:'Diseña un experimento controlado con indicador de repollo morado para comparar la acidez de cinco productos de tu casa. Indica las variables independiente, dependiente y controladas, y el vaso de control.'},
{tema:'acidobase', t:'mdec', q:'Analiza el caso: «Valentina toma tres gaseosas al día y tiene caries». Explica con el pH por qué hay relación y propone dos acciones para reducir el riesgo.'},
{tema:'acidobase', t:'mdec', q:'Un video afirma que el agua alcalina cambia el pH de la sangre. Escribe un argumento científico que evalúe esta afirmación, usando los amortiguadores y el pH del estómago.'},
{tema:'acidobase', t:'mdec', q:'Explica la diferencia entre un ácido fuerte y uno concentrado. ¿Puede una solución de HCl ser menos ácida que una de vinagre? Justifica.'},
{tema:'acidobase', t:'mdec', q:'Compara el pH del estómago, de la sangre y del intestino delgado, y explica por qué cada órgano necesita un pH distinto.'},

{tema:'industria', t:'rx', q:'Escribe la ecuación de la calcinación de la caliza en una cementera, clasifica la reacción y explica su impacto ambiental.'},
{tema:'industria', t:'rx', q:'Escribe la ecuación del proceso Haber, clasifica la reacción y explica para qué se usa el producto en Colombia.'},
{tema:'industria', t:'rx', q:'Escribe la reacción que ocurre en el alto horno con el Fe₂O₃ y el CO, e indica qué elemento se oxida y cuál se reduce.'},
{tema:'industria', t:'rx', q:'Escribe la reacción de electrólisis de la salmuera (NaCl + H₂O) y nombra los tres productos y un uso de cada uno.'},
{tema:'industria', t:'rx', q:'Balancea en masa y en carga la ecuación Ag⁺ + Cu → Ag + Cu²⁺ y explica por qué no basta con igualar los átomos.'},
{tema:'industria', t:'rx', q:'Escribe la reacción de la cáscara de huevo (CaCO₃) con el ácido acético del vinagre e indica qué se puede medir para calcular la pureza de la cáscara.'},
{tema:'industria', t:'rx', q:'Explica por qué en la potabilización del agua se forma un precipitado y para qué sirve. Escribe la ecuación.'},
{tema:'industria', t:'nom', q:'Calcula cuántos kilogramos de CaO se obtienen al calcinar 500 kg de CaCO₃ puro (CaCO₃ = 100 g/mol; CaO = 56 g/mol).'},
{tema:'industria', t:'nom', q:'Calcula los kilogramos de CO₂ que se liberan al calcinar 2000 kg de caliza con 85 % de CaCO₃.'},
{tema:'industria', t:'nom', q:'Se mezclan 56 kg de N₂ y 10 kg de H₂ para formar NH₃. Determina el reactivo limitante, la masa de NH₃ y la masa del reactivo en exceso que sobra.'},
{tema:'industria', t:'nom', q:'Una planta debía producir 340 kg de NH₃ y obtuvo 289 kg. Calcula el rendimiento porcentual y cuántos kilogramos de NH₃ faltaron para llegar al valor teórico.'},
{tema:'industria', t:'nom', q:'¿Cuántos kilogramos de hierro se obtienen de 800 kg de Fe₂O₃ con un rendimiento del 90 %? (Fe₂O₃ = 160 g/mol; Fe = 56 g/mol)'},
{tema:'industria', t:'nom', q:'De 5,0 g de cáscara de huevo se liberaron 2,1 g de CO₂ con vinagre. Calcula la masa y el porcentaje de CaCO₃ de la cáscara.'},
{tema:'industria', t:'nom', q:'Comprueba la conservación de la masa en 2 H₂ + O₂ → 2 H₂O usando las masas molares (H₂ = 2 g/mol; O₂ = 32 g/mol; H₂O = 18 g/mol).'},
{tema:'industria', t:'mdec', q:'Identifica en esta reacción el tipo de reacción, el reactivo, los productos y la razón molar entre el reactivo y el CO₂.', f:'CaCO₃ → CaO + CO₂'},
{tema:'industria', t:'mdec', q:'Identifica el agente oxidante, el agente reductor y el cambio de estado de oxidación de cada elemento.', f:'Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂'},
{tema:'industria', t:'mdec', q:'Comprueba si la ecuación cumple la conservación de la masa y de la carga; si no, corrígela.', f:'Al + Cu²⁺ → Al³⁺ + Cu'},
{tema:'industria', t:'mdec', q:'En el experimento de la cáscara de huevo con vinagre, un grupo calculó que su cáscara tenía 115 % de CaCO₃. Explica por qué ese resultado indica un error, cuál es la causa más probable según el procedimiento y para qué sirve el vaso de control.'},
{tema:'industria', t:'mdec', q:'Relaciona cada proceso industrial con su tipo de reacción y escribe su ecuación: cemento, amoníaco, potabilización del agua, acero y cloro-soda.'},
{tema:'industria', t:'mdec', q:'Explica qué cambia más la producción real de una fábrica: bajar la pureza de la materia prima del 90 % al 80 % o bajar el rendimiento del 95 % al 85 %. Justifica con un cálculo.'},
{tema:'gases', t:'rx', q:'Explica con la teoría cinético-molecular por qué la presión de un gas aumenta cuando se reduce su volumen a temperatura constante.'},
{tema:'gases', t:'rx', q:'Explica por qué en las leyes de los gases la temperatura debe estar en kelvin. Da un ejemplo de un cálculo que sale mal si se usa °C.'},
{tema:'gases', t:'rx', q:'¿Por qué un aerosol no debe acercarse al fuego? Explica con la ley de Gay-Lussac.'},
{tema:'gases', t:'rx', q:'Explica qué es el cero absoluto y cómo se puede encontrar a partir de la gráfica de volumen contra temperatura de la ley de Charles.'},
{tema:'gases', t:'rx', q:'Explica con la ley de Dalton por qué una persona que llega a Bogotá desde la costa se cansa más al subir escaleras.'},
{tema:'gases', t:'rx', q:'Explica por qué la olla a presión cocina más rápido los alimentos, en especial en ciudades altas como Bogotá.'},
{tema:'gases', t:'rx', q:'¿En qué condiciones un gas real se parece a un gas ideal? Explica qué supone el modelo del gas ideal.'},
{tema:'gases', t:'nom', q:'Un gas ocupa 12 L a 1 atm. Calcula su volumen a 3 atm y a 0,5 atm, a temperatura constante.'},
{tema:'gases', t:'nom', q:'Un globo tiene 2,5 L a 17 °C. ¿Qué volumen tendrá a 57 °C, a presión constante?'},
{tema:'gases', t:'nom', q:'Una llanta tiene 2,1 atm a 15 °C. Después de un viaje está a 45 °C. ¿Cuál es su presión, si el volumen no cambia?'},
{tema:'gases', t:'nom', q:'Un globo con 3,0 L a 1,00 atm y 30 °C sube hasta un lugar donde la presión es 0,60 atm y la temperatura −10 °C. Calcula su nuevo volumen.'},
{tema:'gases', t:'nom', q:'¿Cuántos moles de aire hay en un salón de 7 m × 5 m × 3 m en Bogotá (0,74 atm y 15 °C)? ¿Cuál es su masa, si el aire tiene 29 g/mol?'},
{tema:'gases', t:'nom', q:'Calcula el volumen que ocupan 88 g de CO₂ (44 g/mol) a 1 atm y 27 °C.'},
{tema:'gases', t:'nom', q:'Una mezcla tiene 2 mol de N₂ y 1 mol de O₂ a 1,5 atm. Calcula la fracción molar y la presión parcial de cada gas.'},
{tema:'gases', t:'mdec', q:'En cada situación, indica qué variables cambian, cuáles se mantienen constantes y qué ley se aplica.', partes:[['Una jeringa tapada que se empuja','cat'],['Un globo que se deja al sol','ox'],['Una olla a presión cerrada que se calienta','an'],['Un globo que se infla soplando','oh']]},
{tema:'gases', t:'mdec', q:'Con los datos de un experimento (T en °C; V en L): (0; 22,4), (50; 26,5), (100; 30,6), (150; 34,7), grafica V contra T y prolonga la recta. ¿A qué temperatura llega a V = 0?'},
{tema:'gases', t:'mdec', q:'Diseña un experimento con una jeringa y un manómetro para comprobar la ley de Boyle. Indica las variables independiente, dependiente y controladas.'},
{tema:'gases', t:'mdec', q:'Explica qué representa cada letra en PV = nRT, en qué unidades se mide y cómo se obtienen de ella las leyes de Boyle, Charles y Gay-Lussac.'},
{tema:'gases', t:'mdec', q:'Un estudiante calculó V₂ con la ley de Charles usando 20 °C y 40 °C y obtuvo el doble del volumen inicial. Encuentra su error y corrígelo.'},
{tema:'gases', t:'mdec', q:'Compara la presión parcial del oxígeno en Cartagena (1 atm), Bogotá (0,74 atm) y el nevado del Ruiz a 4000 m (0,62 atm), y explica sus efectos en el cuerpo.'},

{tema:'soluciones', t:'rx', q:'Describe paso a paso, con un dibujo de partículas, cómo se disuelve un cristal de NaCl en agua y escribe la ecuación de disociación.'},
{tema:'soluciones', t:'rx', q:'Explica por qué el agua con sal conduce la electricidad y el agua con azúcar no.'},
{tema:'soluciones', t:'rx', q:'Explica por qué el aceite no se disuelve en agua y queda flotando, usando la polaridad del agua, los puentes de hidrógeno y la regla «semejante disuelve a semejante».'},
{tema:'soluciones', t:'rx', q:'Explica tres factores que aumentan la rapidez de disolución del azúcar en el café y por qué cada uno funciona.'},
{tema:'soluciones', t:'rx', q:'Compara las curvas de solubilidad del NaCl y del KNO₃. Explica por qué al enfriar una solución saturada de KNO₃ cristaliza mucho sólido y con una de NaCl casi nada.'},
{tema:'soluciones', t:'rx', q:'¿Por qué al diluir un ácido concentrado se agrega el ácido sobre el agua y no al revés?'},
{tema:'soluciones', t:'rx', q:'Explica la diferencia entre que una sustancia se disuelva más rápido y que se disuelva más. ¿Agitar el agua cambia la cantidad de sal que se puede disolver? ¿Y calentarla? Justifica con la solubilidad.'},
{tema:'soluciones', t:'nom', q:'Se disuelven 15 g de azúcar en 135 g de agua. Calcula el % m/m de la solución.'},
{tema:'soluciones', t:'nom', q:'¿Cuántos gramos de NaCl se necesitan para preparar 2 L de suero fisiológico al 0,9 % m/v? ¿Cuál es su molaridad?'},
{tema:'soluciones', t:'nom', q:'¿Cuántos mL de etanol hay en una botella de 750 mL de aguardiente de 29 % v/v?'},
{tema:'soluciones', t:'nom', q:'Una muestra de 5 L de agua potable tiene 4 mg de cloro. Calcula las ppm y di si cumple la norma colombiana (0,3 a 2,0 ppm).'},
{tema:'soluciones', t:'nom', q:'¿Cuántos gramos de NaOH (40 g/mol) se necesitan para preparar 500 mL de solución 0,25 M?'},
{tema:'soluciones', t:'nom', q:'Se disuelven 36 g de glucosa (180 g/mol) en 400 g de agua. Calcula la molalidad.'},
{tema:'soluciones', t:'nom', q:'¿Cuántos mL de HCl 6 M se necesitan para preparar 1 L de HCl 0,3 M? Describe cómo lo prepararías.'},
{tema:'soluciones', t:'mdec', q:'Con la curva de solubilidad del KNO₃ (32 g a 20 °C y 110 g a 60 °C por 100 g de agua), indica si 80 g en 100 g de agua a 60 °C forman una solución insaturada o saturada, y cuánto cristaliza al enfriarla a 20 °C.'},
{tema:'soluciones', t:'mdec', q:'Identifica el soluto y el solvente y escoge la unidad de concentración más adecuada para cada caso.', partes:[['Suero fisiológico','cat'],['Alcohol antiséptico','ox'],['Cloro en el agua potable','an'],['Ácido del laboratorio','oh']]},
{tema:'soluciones', t:'mdec', q:'Explica la diferencia entre molaridad y molalidad y por qué la molalidad no cambia con la temperatura.'},
{tema:'soluciones', t:'mdec', q:'Ordena los pasos para preparar 250 mL de CuSO₄ 0,1 M en el laboratorio, con los cálculos y los materiales de cada paso.'},
{tema:'soluciones', t:'mdec', q:'Al diluir 100 mL de una solución 0,4 M hasta 400 mL, ¿qué cambia y qué se mantiene? Calcula la nueva concentración y explica con un dibujo de partículas.'},
{tema:'soluciones', t:'mdec', q:'Calcula la normalidad de una solución 0,2 M de H₂SO₄ y explica por qué es distinta de su molaridad.'}
]

};

/* Preguntas tipo Saber de los tres temas de la SED para 10.° (modelos,
   acidobase, industria): se toman de las preguntas de opción múltiple de
   BANCO_MODELOS, BANCO_PH y BANCO_INDUSTRIA (banco.js, que docente.html
   carga antes que este archivo). La primera opción es la correcta, como en
   el resto de SABER; c = subtema y k = Q o CTS (contexto de salud,
   ambiente o industria). */
(function(){
  var D=window.DOCENTE_DATOS;if(!D)return;
  var fuentes=[['gases',typeof BANCO_GASES!=='undefined'?BANCO_GASES:[]],['soluciones',typeof BANCO_SOLUCIONES!=='undefined'?BANCO_SOLUCIONES:[]],['modelos',typeof BANCO_MODELOS!=='undefined'?BANCO_MODELOS:[]],['acidobase',typeof BANCO_PH!=='undefined'?BANCO_PH:[]],['industria',typeof BANCO_INDUSTRIA!=='undefined'?BANCO_INDUSTRIA:[]]];
  var CTS={cuerpo:1,ambiente:1,procesos:1,dalton:1};
  fuentes.forEach(function(f){f[1].forEach(function(q){if(q.tipo&&q.tipo!=='mc')return;
    D.SABER.push({tema:f[0],c:q.tema,k:CTS[q.tema]?'CTS':'Q',ctx:q.ctx||'',q:q.q,o:[q.ok].concat(q.d)});});});
})();


/* Cazar errores escritos: viven en banco.js (BANCO_CAZAR) porque los usan
   el Juego y el generador docente; aquí solo se enlazan. */
window.DOCENTE_DATOS.CAZAR=(typeof BANCO_CAZAR!=='undefined')?BANCO_CAZAR:{};

/* ── Indagación (12-11-2026) ─────────────────────────────────────────────
   Meta: al menos 8 preguntas de indagación por tema (contando las
   oficiales del Icfes), para que una evaluación de un solo tema pueda tener
   cerca de un tercio de indagación, como la prueba Saber 11. Cada una tiene
   contexto y opciones del mismo largo y forma. La primera opción es la
   correcta. af: afirmación del Icfes (ver assets/saber-icfes.js). */
(function(){var D=window.DOCENTE_DATOS;if(!D||!D.SABER)return;
function I(t,af,ctx,q,o,k){D.SABER.push({tema:t,c:'ind',af:af,k:k||'Q',ctx:ctx,q:q,o:o});}
// Óxidos básicos
I('ox-bas','N2','Se agregó un poco de cada óxido a agua con fenolftaleína: con óxido de calcio y con óxido de magnesio el agua se puso fucsia; con dióxido de carbono no cambió de color.','¿Qué conclusión se apoya en las observaciones?',['Los óxidos de los metales forman soluciones básicas al reaccionar con el agua','Los tres óxidos forman soluciones básicas, pero el CO₂ reacciona más lento','El dióxido de carbono forma una solución más básica que la de los metales','La fenolftaleína cambia de color con cualquier sustancia que se disuelva']);
I('ox-bas','N3','Un estudiante quiere saber si el magnesio forma un óxido al quemarse. Tiene cinta de magnesio, una balanza, un crisol y un mechero.','¿Qué procedimiento le permite comprobarlo?',['Pesar la cinta antes y el polvo blanco después de quemarla en el crisol','Quemar la cinta y observar solo el color de la llama que se produce','Pesar la cinta y luego disolverla en agua sin quemarla en el mechero','Quemar la cinta al aire libre y pesar el humo que se desprende']);
I('ox-bas','N4','Una estudiante predice que el hierro se oxida más rápido en aire húmedo que en aire seco. Pone puntillas iguales en un frasco con algodón húmedo y en otro con sílica seca; después de una semana, solo las del frasco húmedo tienen óxido.','¿Los resultados apoyan su predicción?',['Sí: la humedad favoreció la formación del óxido de hierro','No: las puntillas secas no se oxidaron, así que el aire no influye','Sí, pero solo porque las puntillas húmedas eran más pequeñas','No: para saberlo habría que medir la temperatura de cada frasco']);
I('ox-bas','N1','Lavoisier calentó mercurio en un recipiente cerrado y vio que se formaba un polvo rojo mientras el aire disminuía; al calentar más el polvo, recuperó el gas.','¿Qué idea apoyaron estos experimentos?',['Que los metales se combinan con un componente del aire, el oxígeno, al oxidarse','Que los metales pierden una sustancia llamada flogisto cuando se calientan','Que el aire es un solo elemento que no se puede separar en componentes','Que el mercurio se transforma en oro cuando se calienta mucho tiempo']);
// Óxidos ácidos (anhídridos)
I('anhid','N2','Se burbujeó CO₂ en agua con indicador universal y el color pasó de verde a amarillo; al calentar la solución, el color volvió a verde.','¿Qué conclusión es coherente con las observaciones?',['El CO₂ forma un ácido débil en el agua y al calentar el gas se escapa','El CO₂ forma una base en el agua y al calentar se convierte en ácido','El indicador cambia de color solo por el calor, sin importar el gas','El CO₂ no reacciona con el agua y el cambio de color fue un error']);
I('anhid','N3','Un grupo quiere comprobar que el gas de la combustión del azufre forma un ácido con el agua. Tienen azufre, una cuchara de combustión, un frasco con agua y papel tornasol azul.','¿Qué procedimiento es adecuado?',['Quemar el azufre dentro del frasco tapado y luego probar el agua con el tornasol','Quemar el azufre al aire libre y mojar el tornasol con agua del grifo','Echar el azufre en polvo al agua sin quemarlo y probar con el tornasol','Quemar el azufre y oler el gas para decidir si forma un ácido']);
I('anhid','N4','Un estudiante predice que la lluvia de una zona industrial es más ácida que la de una zona rural. Mide pH 4,6 en la industrial y pH 5,8 en la rural, con el mismo método.','¿Los datos apoyan su predicción?',['Sí: la lluvia de la zona industrial tiene menor pH, es decir, es más ácida','No: las dos lluvias son ácidas, así que no hay ninguna diferencia','Sí, pero solo si la lluvia rural tuviera un pH mayor que 7','No: un pH menor indica que la lluvia es más básica']);
I('anhid','N1','Los estudios sobre lluvia ácida en Europa y Norteamérica relacionaron los óxidos de azufre de las chimeneas con la muerte de peces en lagos lejanos.','¿Qué permitió establecer esa relación?',['Medir el pH y los óxidos en muchos lugares durante años y comparar los datos','Observar un solo lago una vez y suponer que todos los demás estaban igual','Preguntar a los pescadores si creían que las chimeneas mataban los peces','Hacer un solo experimento en el laboratorio con un pez de acuario']);
// Hidruros
I('hidru','N2','Se agregó hidruro de sodio a agua con fenolftaleína: se formaron burbujas de un gas que ardía y el agua se puso fucsia.','¿Qué indican estas observaciones?',['Que se formó hidrógeno y una solución básica de hidróxido de sodio','Que se formó oxígeno y una solución ácida de cloruro de sodio','Que el hidruro se disolvió sin reaccionar y solo cambió de color','Que se formó dióxido de carbono y una solución neutra']);
I('hidru','N3','Un estudiante quiere comprobar que el gas que se libera al mezclar hidruro de calcio con agua es hidrógeno.','¿Qué prueba es adecuada?',['Acercar un fósforo encendido a la boca del tubo y escuchar si hay una pequeña explosión','Acercar papel tornasol húmedo y ver si se pone rojo por el gas','Oler el gas con cuidado para saber si tiene olor a huevo podrido','Pasar el gas por agua de cal y ver si se enturbia']);
I('hidru','N4','Una estudiante predice que el amoníaco (NH₃), un hidruro no metálico, forma una solución básica. Al disolverlo en agua con tornasol rojo, el papel se vuelve azul.','¿Qué se puede decir de su predicción?',['La observación la apoya: el tornasol azul indica una solución básica','La observación la refuta: el tornasol azul indica una solución ácida','No se puede evaluar, porque el amoníaco no se disuelve en agua','La observación la apoya solo si el tornasol hubiera quedado rojo']);
I('hidru','N2','Se midió el punto de ebullición de tres hidruros: CH₄ −161 °C, NH₃ −33 °C, H₂O 100 °C.','¿Qué conclusión es coherente con los datos?',['El agua y el amoníaco forman puentes de hidrógeno y por eso hierven más alto','El metano hierve más alto porque tiene más hidrógenos que el agua','Los tres hidruros tienen la misma fuerza entre sus moléculas','El punto de ebullición depende solo del número de hidrógenos']);
I('hidru','N1','Henry Cavendish recogió en 1766 el gas que se desprendía al echar metales en ácidos y vio que ardía y que al quemarse formaba agua.','¿Qué aportó este trabajo?',['Identificó el hidrógeno como una sustancia distinta y mostró que forma agua','Demostró que el agua es un elemento que no se puede descomponer','Descubrió que los metales están formados por hidrógeno puro','Probó que el aire está formado solo por hidrógeno y oxígeno']);
I('hidru','N3','Un grupo quiere saber si el hidruro de litio reacciona más rápido con agua fría o caliente. Tiene muestras iguales del hidruro y agua a 10 °C y a 40 °C.','¿Qué deben medir para comparar?',['El volumen de gas que se libera en el mismo tiempo en cada caso','El color del agua antes de agregar el hidruro en cada caso','La masa del recipiente vacío antes de empezar el ensayo','La temperatura del laboratorio al final de los dos ensayos']);
// Ácidos hidrácidos
I('ac-hid','N2','Se midió el pH de soluciones 0,1 M de tres hidrácidos: HCl 1,0; HBr 1,0; HF 2,1.','¿Qué conclusión se apoya en los datos?',['El HF es un ácido más débil que el HCl y el HBr a la misma concentración','El HF es el ácido más fuerte porque su pH es el mayor de los tres','Los tres ácidos tienen la misma fuerza porque son hidrácidos','El HCl y el HBr son bases porque su pH es igual']);
I('ac-hid','N3','Una estudiante quiere saber qué metal reacciona más rápido con ácido clorhídrico: zinc, hierro o cobre.','¿Qué procedimiento es adecuado?',['Poner trozos del mismo tamaño de cada metal en volúmenes iguales del mismo ácido y comparar las burbujas','Poner un trozo grande de zinc y uno pequeño de cobre en ácidos de distinta concentración','Poner solo el zinc en el ácido y comparar con lo que dice el libro','Calentar el ácido del cobre y dejar frío el del zinc y el del hierro']);
I('ac-hid','N4','Un estudiante predice que el ácido muriático (HCl) disuelve el sarro de una tetera. Al agregarlo, el sarro produce burbujas y desaparece.','¿Qué se puede decir de su predicción?',['La observación la apoya: el ácido reaccionó con el carbonato del sarro','La observación la refuta: las burbujas indican que el sarro se disolvió en agua','No se puede evaluar, porque el sarro no reacciona con ningún ácido','La observación la apoya solo si no se hubieran formado burbujas']);
// Hidróxidos
I('base','N2','Se midió el pH de soluciones de igual concentración: hidróxido de sodio 13; hidróxido de calcio 12,4; hidróxido de magnesio (poco soluble) 10,4.','¿Qué conclusión es coherente con los datos?',['Las tres soluciones son básicas, pero el hidróxido poco soluble da un pH menor','Las tres son ácidas porque tienen un pH mayor que 7','El hidróxido de magnesio es la base más fuerte porque su pH es el menor','Los tres hidróxidos producen el mismo pH porque todos tienen OH']);
I('base','N3','Un grupo quiere comprobar que la leche de magnesia neutraliza el ácido del estómago. Tienen vinagre, leche de magnesia, indicador de repollo morado y vasos.','¿Qué procedimiento es adecuado?',['Agregar leche de magnesia poco a poco al vinagre con indicador y observar el cambio de color','Mezclar la leche de magnesia con agua y observar si cambia de color sola','Agregar el indicador solo al vinagre y compararlo con el de una foto','Calentar el vinagre y la leche de magnesia por separado y oler cada uno']);
I('base','N4','Una estudiante predice que la cal apagada sube el pH de un suelo ácido. Antes de aplicarla el suelo tenía pH 4,8; un mes después, 6,2.','¿Los datos apoyan su predicción?',['Sí: el pH del suelo subió después de aplicar la cal','No: el suelo sigue siendo ácido, así que la cal no sirvió','Sí, pero solo si el pH hubiera llegado a 14','No: un pH mayor indica que el suelo se volvió más ácido']);
I('base','N1','Arrhenius propuso en 1887 que las bases liberan iones OH⁻ en agua, después de estudiar cómo conducen la electricidad las soluciones.','¿En qué evidencia se apoyó su propuesta?',['En que las soluciones de ácidos y bases conducen la corriente por tener iones','En que las bases tienen sabor amargo y se sienten jabonosas al tacto','En que todas las bases son sólidos blancos solubles en agua','En que las bases cambian siempre a color fucsia sin indicador']);
I('base','N3','Un estudiante quiere saber si la temperatura cambia la solubilidad del hidróxido de calcio en agua.','¿Qué variable debe controlar?',['La cantidad de agua y de hidróxido en cada ensayo','La temperatura, que debe ser igual en todos los ensayos','El color del recipiente donde hace cada ensayo','Ninguna: basta con disolver el hidróxido y observar']);
// Ácidos oxácidos
I('ac-ox','N2','Se agregó un trozo de mármol a tres ácidos de igual concentración: con ácido nítrico y con ácido sulfúrico se formaron muchas burbujas; con ácido bórico casi no hubo burbujas.','¿Qué conclusión se apoya en las observaciones?',['El ácido bórico es un ácido mucho más débil que el nítrico y el sulfúrico','El ácido bórico es el más fuerte porque no gastó el mármol','Los tres ácidos tienen la misma fuerza porque son oxácidos','El mármol no reacciona con ningún ácido que tenga oxígeno']);
I('ac-ox','N3','Un grupo quiere comprobar que el ácido sulfúrico concentrado deshidrata el azúcar. Trabajan en una campana con gafas y guantes.','¿Qué observación permitiría comprobarlo?',['Que el azúcar se vuelve negro, crece y libera vapor al agregar el ácido','Que el azúcar se disuelve sin cambiar de color al agregar el ácido','Que el ácido se vuelve azul al tocar el azúcar','Que el azúcar se congela al contacto con el ácido']);
I('ac-ox','N4','Una estudiante predice que el agua de una gaseosa es ácida por el ácido carbónico. Mide pH 3,5 recién abierta y pH 4,5 después de dejarla destapada un día.','¿Qué se puede decir de su predicción?',['Los datos la apoyan: es ácida y se vuelve menos ácida al perder el CO₂','Los datos la refutan: el pH cambió, así que no tiene ácido carbónico','No se puede evaluar, porque las gaseosas no tienen ácidos','Los datos la apoyan solo si el pH hubiera bajado al destaparla']);
I('ac-ox','N1','Davy demostró en 1810 que el ácido muriático no tenía oxígeno, aunque Lavoisier creía que todos los ácidos lo tenían.','¿Qué muestra este caso sobre el conocimiento científico?',['Que una idea aceptada puede corregirse con nuevas evidencias experimentales','Que Lavoisier tenía razón y todos los ácidos contienen oxígeno','Que los científicos famosos nunca se equivocan en sus teorías','Que el ácido muriático es en realidad una base']);
I('ac-ox','N3','Un estudiante quiere saber si el ácido fosfórico de una gaseosa de cola disuelve el óxido de una puntilla.','¿Qué diseño es adecuado?',['Poner puntillas oxidadas iguales en gaseosa y en agua, y compararlas después de un día','Poner una puntilla en gaseosa y compararla con una puntilla nueva sin óxido','Poner puntillas de distinto tamaño en gaseosa y en agua','Poner una puntilla en gaseosa y revisarla después de un minuto']);
// Sales binarias
I('sal-bin','N2','Se probó la conductividad de tres muestras: sal de cocina sólida, no conduce; sal disuelta en agua, conduce; azúcar disuelta en agua, no conduce.','¿Qué conclusión se apoya en las observaciones?',['La sal forma iones que se mueven al disolverse; el azúcar no forma iones','El azúcar disuelta conduce mejor que la sal porque es más soluble','La sal sólida conduce porque sus iones se mueven dentro del cristal','El agua es la que conduce en todos los casos, sin importar lo disuelto']);
I('sal-bin','N3','Una estudiante quiere saber si el agua de la llave tiene cloruros. Tiene nitrato de plata en solución y tubos de ensayo.','¿Qué procedimiento y observación son adecuados?',['Agregar unas gotas de nitrato de plata a una muestra de agua y ver si se forma un precipitado blanco','Calentar el agua hasta que hierva y ver si sale un olor a cloro','Agregar nitrato de plata a agua destilada y compararla con una foto','Medir la temperatura del agua y compararla con la de un río']);
I('sal-bin','N4','Un estudiante predice que el agua con sal se congela a menor temperatura que el agua pura. Mide: agua pura, 0 °C; agua con 10 % de sal, −6 °C.','¿Los datos apoyan su predicción?',['Sí: el agua con sal se congeló a una temperatura más baja','No: las dos se congelaron, así que la sal no influye','Sí, pero solo si el agua con sal se hubiera congelado a 0 °C','No: la sal hace que el agua se congele a mayor temperatura']);
I('sal-bin','N1','En Zipaquirá, los muiscas obtenían sal evaporando el agua salada de manantiales en vasijas de barro, mucho antes de que se conociera su fórmula.','¿Qué muestra este ejemplo?',['Que hay saberes prácticos que la química moderna puede explicar con sus modelos','Que la sal de Zipaquirá no es cloruro de sodio sino otra sustancia','Que la evaporación no sirve para separar una sal del agua','Que los muiscas conocían la fórmula NaCl antes que los europeos']);
I('sal-bin','N2','Se midió la solubilidad del cloruro de potasio en 100 g de agua: a 20 °C, 34 g; a 40 °C, 40 g; a 60 °C, 46 g.','¿Qué conclusión es coherente con los datos?',['La solubilidad del cloruro de potasio aumenta con la temperatura','La solubilidad del cloruro de potasio disminuye con la temperatura','La temperatura no influye en la solubilidad de esta sal','A 60 °C la sal ya no se puede disolver en el agua']);
// Sales oxisales
I('sal-ox','N2','Se agregó ácido clorhídrico a tres sales: con carbonato de calcio se formaron burbujas; con sulfato de calcio y con nitrato de potasio no pasó nada visible.','¿Qué conclusión se apoya en las observaciones?',['Solo el carbonato libera un gas, el CO₂, al reaccionar con el ácido','Las tres sales reaccionan igual, pero solo una lo hace con burbujas','El sulfato y el nitrato son bases que neutralizan el ácido','El ácido clorhídrico no reacciona con ninguna sal oxigenada']);
I('sal-ox','N3','Un grupo quiere saber si un abono tiene nitratos o sulfatos. Tienen cloruro de bario, que forma un precipitado blanco con los sulfatos.','¿Qué procedimiento es adecuado?',['Disolver una muestra del abono en agua y agregar cloruro de bario para ver si precipita','Calentar el abono seco y observar el color de la llama que produce','Agregar cloruro de bario al abono seco sin disolverlo en agua','Oler el abono y decidir por el olor si tiene nitratos o sulfatos']);
I('sal-ox','N4','Una estudiante predice que el yeso (sulfato de calcio) es poco soluble en agua. Agita 5 g en 100 mL de agua y, después de filtrar y secar, recupera 4,8 g.','¿Qué se puede decir de su predicción?',['Los datos la apoyan: casi todo el yeso quedó sin disolver','Los datos la refutan: se disolvió una pequeña parte del yeso','No se puede evaluar sin medir el pH del agua del ensayo','Los datos la apoyan solo si se hubiera disuelto todo el yeso']);
// Sales ácidas
I('sal-ac','N2','Se midió el pH de soluciones de igual concentración: carbonato de sodio 11,6; bicarbonato de sodio 8,3; bisulfato de sodio 1,5.','¿Qué conclusión es coherente con los datos?',['El bisulfato forma una solución ácida y el bicarbonato una ligeramente básica','Las tres sales son neutras porque todas son sales de sodio','El bicarbonato es la sal más ácida porque tiene un hidrógeno','El carbonato de sodio es ácido porque su pH es el mayor']);
I('sal-ac','N3','Un estudiante quiere comprobar que el polvo de hornear libera CO₂ al calentarse. Tiene bicarbonato de sodio, un tubo, un tapón con manguera y agua de cal.','¿Qué procedimiento es adecuado?',['Calentar el bicarbonato en el tubo y pasar el gas por agua de cal para ver si se enturbia','Disolver el bicarbonato en agua fría y oler la solución que se forma','Calentar el bicarbonato al aire libre y ver si cambia de color','Agregar agua de cal al bicarbonato sólido sin calentarlo']);
I('sal-ac','N4','Un grupo predice que el bicarbonato de sodio neutraliza el ácido de una picadura de hormiga. Prueban con ácido fórmico diluido e indicador: al agregar bicarbonato el indicador cambia hacia neutro.','¿Los resultados apoyan su predicción?',['Sí: el bicarbonato redujo la acidez de la solución','No: el indicador cambió, así que el ácido no reaccionó','Sí, pero solo si la solución se hubiera vuelto más ácida','No: el bicarbonato es un ácido y no puede neutralizar ácidos']);
I('sal-ac','N1','El químico Leblanc ideó en 1791 un proceso para fabricar carbonato de sodio, y luego Solvay lo reemplazó por otro que usaba bicarbonato como paso intermedio.','¿Qué muestra este ejemplo sobre la química industrial?',['Que los procesos se mejoran con el conocimiento químico para gastar menos y contaminar menos','Que los procesos industriales nunca cambian una vez que funcionan','Que el carbonato de sodio solo se obtiene de minas naturales','Que el bicarbonato y el carbonato son la misma sustancia']);
// Reactividad (cadena metal → óxido → hidróxido → sal)
I('reactividad','N3','Una estudiante quiere seguir la cadena del calcio: metal, óxido, hidróxido y sal. Tiene óxido de calcio, agua, fenolftaleína y ácido clorhídrico diluido.','¿Qué observación confirma que se formó el hidróxido?',['Que al agregar agua y fenolftaleína al óxido la solución se pone fucsia','Que el óxido de calcio cambia de color al dejarlo en el aire','Que el ácido clorhídrico se pone fucsia sin agregar el óxido','Que el agua sola se pone fucsia con la fenolftaleína']);
I('reactividad','N2','Se pusieron cuatro metales en ácido clorhídrico diluido: el magnesio burbujeó mucho, el zinc menos, el hierro poco y el cobre nada.','¿Qué conclusión se apoya en las observaciones?',['La reactividad con el ácido sigue el orden Mg > Zn > Fe > Cu','Los cuatro metales son igual de reactivos con el ácido','El cobre es el más reactivo porque no se gastó en el ácido','El hierro reacciona más que el magnesio porque es más pesado']);
I('reactividad','N4','Un estudiante predice que un clavo de hierro en solución de sulfato de cobre se recubre de cobre. Después de 10 minutos, el clavo tiene una capa rojiza y la solución azul se aclara.','¿Qué se puede decir de su predicción?',['Las observaciones la apoyan: el hierro desplazó al cobre de la solución','Las observaciones la refutan: la capa rojiza es óxido de hierro','No se puede evaluar, porque el hierro no reacciona con sales','Las observaciones la apoyan solo si la solución se volviera más azul']);
I('reactividad','N3','Un grupo quiere comparar la reactividad del magnesio y del zinc con agua caliente.','¿Qué condiciones deben mantener iguales?',['La cantidad y el tamaño de los trozos de metal, y el volumen y la temperatura del agua','Solo el color de los tubos de ensayo, porque lo demás no influye','La cantidad de agua, pero usando un trozo grande de magnesio y uno pequeño de zinc','Ninguna: basta con poner los metales en agua y mirar cuál burbujea']);
I('reactividad','N1','Volta y Davy descubrieron, a comienzos del siglo XIX, que con corriente eléctrica se podían separar metales muy reactivos como el sodio y el potasio de sus compuestos.','¿Por qué fue importante ese descubrimiento?',['Porque una técnica nueva permitió aislar elementos que antes no se podían obtener','Porque demostró que el sodio y el potasio no existen como elementos','Porque mostró que la electricidad crea elementos nuevos a partir de nada','Porque probó que todos los metales se obtienen calentando sus minerales']);
I('reactividad','N2','Se calentaron tres carbonatos: el de calcio liberó CO₂ a 840 °C, el de magnesio a 350 °C y el de sodio casi no se descompuso.','¿Qué conclusión es coherente con los datos?',['Los carbonatos de distintos metales se descomponen a temperaturas muy distintas','Todos los carbonatos se descomponen a la misma temperatura','El carbonato de sodio es el menos estable porque no se descompuso','La temperatura de descomposición no depende del metal del carbonato']);
// Estequiometría
I('estequiometria','N2','Se quemaron distintas masas de magnesio y se pesó el óxido formado: 0,24 g dieron 0,40 g; 0,48 g dieron 0,80 g; 0,72 g dieron 1,20 g.','¿Qué conclusión se apoya en los datos?',['La masa de óxido es proporcional a la masa de magnesio, en una razón fija','La masa de óxido es siempre igual a la masa de magnesio quemada','La masa de óxido no depende de cuánto magnesio se queme','El magnesio pierde masa al quemarse y el óxido pesa menos']);
I('estequiometria','N3','Un estudiante quiere comprobar la ley de conservación de la masa con bicarbonato y vinagre.','¿Qué procedimiento es adecuado?',['Mezclar los reactivos dentro de una bolsa cerrada y pesar todo antes y después','Mezclar los reactivos en un vaso abierto y pesar solo el vaso al final','Pesar el bicarbonato, mezclarlo con vinagre y pesar el gas que sale','Mezclar los reactivos y medir la temperatura en lugar de la masa']);
I('estequiometria','N4','Una estudiante predice que con 2,0 g de hidrógeno y 32 g de oxígeno se forman 18 g de agua y sobra oxígeno. En el laboratorio se forman 18 g de agua y sobran 16 g de oxígeno.','¿Qué se puede decir de su predicción?',['Los datos la apoyan: el hidrógeno fue el reactivo límite y sobró oxígeno','Los datos la refutan: no debería sobrar nada si se cumple la ley','No se puede evaluar sin medir la temperatura de la reacción','Los datos la apoyan solo si hubiera sobrado hidrógeno']);
I('estequiometria','N3','Un grupo quiere saber cuánto CO₂ libera una tableta efervescente. Tienen la tableta, agua, un vaso y una balanza.','¿Qué procedimiento es adecuado?',['Pesar el vaso con agua y la tableta antes y después de la reacción, y restar','Pesar solo la tableta antes de echarla al agua','Contar las burbujas que salen durante el primer minuto','Medir la temperatura del agua antes y después de la reacción']);
I('estequiometria','N1','Proust analizó muestras de carbonato de cobre de distintos orígenes y encontró que siempre tenían los mismos porcentajes de cada elemento.','¿Qué ley formuló a partir de esos datos?',['La de las proporciones definidas: un compuesto tiene siempre la misma composición','La de la conservación de la masa: la masa no cambia en una reacción','La de los gases: el volumen depende de la temperatura','La de la periodicidad: las propiedades se repiten con la masa']);
I('estequiometria','N2','Se hicieron reaccionar 10 g de zinc con distintas masas de azufre: con 2 g sobró zinc; con 4,9 g no sobró nada; con 8 g sobró azufre.','¿Qué conclusión es coherente con los datos?',['El zinc y el azufre reaccionan en una proporción fija de masas','El zinc y el azufre reaccionan en cualquier proporción de masas','Con 8 g de azufre reacciona todo, porque hay más reactivo','La masa de azufre no influye en lo que sobra después de reaccionar']);
// Teoría atómica
I('atomo','N2','En el experimento de Rutherford, casi todas las partículas alfa atravesaron la lámina de oro sin desviarse y muy pocas rebotaron.','¿Qué conclusión se apoya en estos resultados?',['El átomo es casi vacío, con un núcleo muy pequeño, denso y positivo','El átomo es una esfera maciza de carga positiva con electrones incrustados','Los electrones son los que desvían a las partículas alfa','La lámina de oro tenía agujeros por donde pasaban las partículas']);
I('atomo','N1','Thomson midió en 1897 la relación entre la carga y la masa de los rayos catódicos y obtuvo el mismo valor con cualquier metal del cátodo.','¿Qué concluyó de ese resultado?',['Que esas partículas, los electrones, forman parte de todos los átomos','Que cada metal tiene un tipo distinto de electrón con otra carga','Que los rayos catódicos son luz y no están formados por partículas','Que los átomos son indivisibles, como había dicho Dalton']);
I('atomo','N4','Un estudiante predice que el cloro natural tiene dos isótopos, porque su masa atómica (35,45) no es un número entero. Consulta: 76 % de cloro-35 y 24 % de cloro-37.','¿Los datos apoyan su predicción?',['Sí: el promedio ponderado de los dos isótopos da cerca de 35,45','No: si hubiera dos isótopos la masa sería exactamente 36','Sí, pero solo si los dos isótopos estuvieran en la misma proporción','No: la masa atómica no tiene relación con los isótopos']);
I('atomo','N3','Una estudiante quiere estimar el tamaño de una molécula de aceite. Pone una gota de volumen conocido sobre agua con talco y mide el área de la mancha.','¿Qué supuesto necesita para calcular el tamaño?',['Que la mancha tiene el grosor de una sola capa de moléculas','Que la gota de aceite se disuelve completamente en el agua','Que el talco reacciona con el aceite y cambia su volumen','Que todas las moléculas de aceite tienen carga eléctrica']);
I('atomo','N2','Se calentaron sales de distintos metales en la llama: el sodio dio color amarillo, el litio rojo, el potasio violeta y el cobre verde.','¿Qué conclusión es coherente con las observaciones?',['Cada elemento emite luz de colores propios que permite identificarlo','Todos los metales emiten el mismo color cuando se calientan','El color de la llama depende solo de la temperatura del mechero','Los colores se deben a las impurezas del mechero y no al metal']);
// Configuración electrónica
I('config-e','N2','Energías de ionización (kJ/mol) del sodio: primera 496; segunda 4562; tercera 6910.','¿Qué conclusión se apoya en los datos?',['El sodio tiene un electrón externo fácil de quitar y los demás están en un nivel interno','El sodio tiene tres electrones de valencia igual de fáciles de quitar','Quitar electrones al sodio se vuelve más fácil cada vez','El segundo electrón es el más fácil de quitar del átomo de sodio']);
I('config-e','N3','Un estudiante quiere identificar la sal de un fuego artificial rojo. Tiene sales de litio, estroncio y sodio, un alambre limpio y un mechero.','¿Qué procedimiento es adecuado?',['Calentar cada sal conocida y la muestra en la llama, y comparar los colores','Calentar solo la muestra y decidir por el olor de qué sal se trata','Disolver la muestra en agua y comparar su color con el de las sales','Pesar la muestra y compararla con la masa de las sales conocidas']);
I('config-e','N4','Una estudiante predice que el cobre tiene la configuración [Ar] 4s² 3d⁹. Los datos experimentales de espectroscopía muestran [Ar] 4s¹ 3d¹⁰.','¿Qué se puede decir de su predicción?',['Los datos la refutan: el cobre es una excepción con el subnivel 3d lleno','Los datos la apoyan: las dos configuraciones son la misma','No se puede evaluar, porque la configuración no se puede medir','Los datos la apoyan solo si el cobre tuviera 30 electrones']);
I('config-e','N1','Bohr propuso su modelo de niveles en 1913 para explicar por qué el hidrógeno solo emite luz de ciertos colores, como mostraban los espectros medidos por Balmer.','¿Qué muestra este ejemplo sobre los modelos científicos?',['Que un modelo se propone para explicar datos experimentales que otros modelos no explicaban','Que los modelos se inventan sin tener en cuenta ningún dato experimental','Que el modelo de Bohr explicó todos los átomos y nunca necesitó cambios','Que los espectros de luz no tienen relación con la estructura del átomo']);
I('config-e','N2','Radios atómicos (pm) del grupo 1: litio 152, sodio 186, potasio 227, rubidio 248.','¿Qué conclusión es coherente con los datos?',['Al bajar en el grupo el radio aumenta porque se agregan niveles de energía','Al bajar en el grupo el radio disminuye porque aumentan los protones','El radio atómico no cambia dentro de un mismo grupo','El litio es el más grande porque es el primero del grupo']);
I('config-e','N3','Un grupo quiere comprobar si un material es atraído por un imán por tener electrones desapareados. Tienen sales de cobre(II), de zinc y un imán fuerte.','¿Qué diseño es adecuado?',['Poner cantidades iguales de cada sal cerca del imán, en las mismas condiciones, y comparar','Poner solo la sal de cobre cerca del imán y compararla con un libro','Calentar la sal de zinc y dejar fría la de cobre antes de acercar el imán','Disolver una sal y dejar la otra sólida, y acercar el imán a ambas']);
I('config-e','N4','Un estudiante predice que el nitrógeno tiene tres electrones desapareados, siguiendo la regla de Hund. Las mediciones magnéticas del átomo de nitrógeno confirman tres electrones desapareados.','¿Los datos apoyan su predicción?',['Sí: los tres electrones 2p ocupan orbitales distintos con el mismo espín','No: los electrones 2p deberían estar todos apareados en un orbital','Sí, pero solo si el nitrógeno tuviera cinco electrones 2p','No: la regla de Hund solo se aplica a los metales de transición']);
// Enlace
I('enlace','N3','Una estudiante quiere clasificar tres sólidos blancos (sal, azúcar y arena) según su tipo de enlace. Tiene agua, un circuito con bombillo y un mechero.','¿Qué pruebas son adecuadas?',['Probar si se disuelven en agua, si la solución conduce y si funden fácil con la llama','Probar solo el color y el olor de cada sólido antes de calentarlo','Pesar cada sólido y compararlo con la masa de los demás','Mirar los sólidos con lupa y decidir por la forma de los granos']);
I('enlace','N2','Puntos de fusión: cloruro de sodio 801 °C; azúcar 186 °C; parafina 55 °C; cuarzo 1710 °C.','¿Qué conclusión se apoya en los datos?',['Los sólidos iónicos y de red covalente funden mucho más alto que los moleculares','Todos los sólidos funden a temperaturas parecidas sin importar su enlace','La parafina funde alto porque sus moléculas son muy grandes','El azúcar es un sólido iónico porque funde a más de 100 °C']);
I('enlace','N4','Un estudiante predice que el agua es polar. Acerca una regla cargada a un chorro delgado de agua y el chorro se desvía; con un chorro de aceite no pasa nada.','¿Qué se puede decir de su predicción?',['La observación la apoya: el agua se desvía por tener moléculas polares','La observación la refuta: el agua se desvía porque es un metal','No se puede evaluar, porque la regla cargada no atrae líquidos','La observación la apoya solo si el aceite también se desviara']);
I('enlace','N1','Linus Pauling propuso en 1932 la escala de electronegatividad a partir de las energías de enlace medidas en muchos compuestos.','¿Qué aportó esa escala?',['Una forma de predecir la polaridad de un enlace a partir de datos medidos','Una forma de calcular la masa atómica de cualquier elemento','La prueba de que todos los enlaces son iónicos','La explicación de por qué los gases nobles forman enlaces']);
I('enlace','N3','Un grupo quiere saber si el alcohol o el agua se evaporan más rápido por la fuerza de sus enlaces entre moléculas.','¿Qué condiciones deben mantener iguales?',['La cantidad de cada líquido, la superficie expuesta y la temperatura','Solo el color de los recipientes de cada líquido','La cantidad de agua, pero usando el doble de alcohol','Ninguna, porque el resultado no depende de las condiciones']);
// Gases (SED)
I('gases','N2','Se midió el volumen de una jeringa con aire tapada a temperatura constante: a 1 atm, 60 mL; a 2 atm, 30 mL; a 3 atm, 20 mL.','¿Qué conclusión se apoya en los datos?',['El volumen del gas es inversamente proporcional a la presión','El volumen del gas aumenta cuando aumenta la presión','La presión no influye en el volumen del gas encerrado','El volumen disminuye a la mitad cada vez que sube 1 atm']);
I('gases','N3','Una estudiante quiere comprobar que el volumen de un gas aumenta con la temperatura. Tiene un globo, agua fría, agua caliente y un metro de costura.','¿Qué procedimiento es adecuado?',['Medir la circunferencia del mismo globo en agua fría y luego en agua caliente','Medir un globo en agua fría y otro distinto en agua caliente','Inflar más el globo antes de meterlo en el agua caliente','Medir el globo una sola vez y compararlo con una foto']);
I('gases','N4','Un estudiante predice que el agua hierve a menor temperatura en Bogotá que en Cartagena. Mide 91 °C en Bogotá y 100 °C en Cartagena.','¿Los datos apoyan su predicción?',['Sí: a mayor altura, menor presión del aire y menor punto de ebullición','No: el agua debería hervir a 100 °C en cualquier lugar del mundo','Sí, pero solo porque en Bogotá el agua tiene más sales disueltas','No: a mayor altura el agua hierve a una temperatura mayor']);
I('gases','N1','Boyle publicó en 1662 su ley después de medir cómo cambiaba el volumen del aire atrapado en un tubo de vidrio al agregar mercurio.','¿Qué caracteriza a esa forma de construir conocimiento?',['Medir de forma controlada dos variables y buscar la relación entre ellas','Proponer una ley sin hacer ninguna medición previa','Basarse en la opinión de otros científicos sobre el aire','Hacer una sola observación y generalizarla a todo']);
I('gases','N2','Se midió la presión de una llanta en la mañana (30 psi a 15 °C) y después de un viaje largo (34 psi a 45 °C), sin cambiar el aire.','¿Qué explicación es coherente con los datos?',['Al calentarse el aire a volumen casi constante, su presión aumenta','La llanta ganó aire durante el viaje y por eso subió la presión','La presión subió porque el aire se enfrió al rodar','La temperatura no influye en la presión de un gas encerrado']);
I('gases','N3','Un grupo quiere saber si un gas se difunde más rápido que otro. Tienen un tubo largo, algodón con amoníaco y algodón con ácido clorhídrico, que forman un anillo blanco donde se encuentran.','¿Qué deben medir?',['La distancia desde cada extremo hasta el anillo blanco que se forma','El color del algodón de cada extremo antes de empezar','La masa del tubo de vidrio antes y después del ensayo','La temperatura del laboratorio cuando aparece el anillo']);
I('gases','N4','Una estudiante predice que, a igual presión y temperatura, 1 L de hidrógeno y 1 L de oxígeno tienen el mismo número de moléculas. Pesan 0,08 g y 1,28 g; la razón de masas es 16, igual a la razón de sus masas molares.','¿Qué se puede decir de su predicción?',['Los datos la apoyan: la razón de masas coincide con la de las masas molares','Los datos la refutan: si tuvieran las mismas moléculas pesarían igual','No se puede evaluar, porque los gases no tienen masa','Los datos la apoyan solo si los dos gases pesaran 1 g']);
I('gases','N2','Se midió el volumen de 1 mol de un gas a distintas temperaturas a 1 atm: 0 °C, 22,4 L; 100 °C, 30,6 L; 200 °C, 38,8 L.','¿Qué conclusión es coherente con los datos?',['El volumen aumenta en forma proporcional a la temperatura absoluta','El volumen disminuye al aumentar la temperatura','El volumen no depende de la temperatura del gas','El volumen se duplica cada vez que la temperatura sube 100 °C']);
// Soluciones (SED)
I('soluciones','N2','Se prepararon soluciones de sal y se midió su densidad: 0 % de sal, 1,00 g/mL; 5 %, 1,03 g/mL; 10 %, 1,07 g/mL.','¿Qué conclusión se apoya en los datos?',['A mayor concentración de sal, mayor densidad de la solución','A mayor concentración de sal, menor densidad de la solución','La concentración de sal no influye en la densidad','La densidad de la solución es igual a la del agua pura']);
I('soluciones','N3','Un estudiante quiere preparar una solución de azúcar al 10 % m/v para un experimento.','¿Qué procedimiento es correcto?',['Disolver 10 g de azúcar en agua y completar hasta 100 mL de solución','Disolver 10 g de azúcar en 100 mL de agua sin medir el volumen final','Mezclar 10 mL de azúcar con 90 mL de agua','Disolver 100 g de azúcar en 10 mL de agua']);
I('soluciones','N4','Una estudiante predice que el azúcar se disuelve más rápido en agua caliente. Con la misma cantidad y agitación, tardó 30 s a 60 °C y 120 s a 20 °C.','¿Los datos apoyan su predicción?',['Sí: en agua caliente el azúcar se disolvió en menos tiempo','No: el azúcar se disolvió en los dos casos, así que no hay diferencia','Sí, pero solo porque el agua caliente tenía más azúcar','No: el agua fría disolvió el azúcar más rápido']);
I('soluciones','N1','El Invima fija límites de concentración para sustancias como los conservantes, a partir de estudios que miden sus efectos en distintas dosis.','¿Por qué esas normas se basan en el conocimiento científico?',['Porque usan datos experimentales sobre la relación entre concentración y efecto','Porque se basan en la opinión de los fabricantes de alimentos','Porque cualquier concentración de una sustancia es igual de segura','Porque la concentración no influye en los efectos de una sustancia']);
I('soluciones','N3','Un grupo quiere saber si un detergente disuelve mejor la grasa en agua fría o caliente.','¿Qué variables deben mantener iguales?',['La cantidad de grasa, de detergente y de agua, y el tiempo de agitación','La temperatura del agua y la cantidad de detergente en los dos ensayos','Solo el color del detergente y el tamaño del recipiente que usan','Ninguna: basta con lavar un plato con grasa en cada tipo de agua']);
I('soluciones','N2','Se agregó sal a 100 mL de agua a 20 °C, de 5 en 5 gramos, agitando: hasta 35 g todo se disolvió; con 40 g quedó sal en el fondo.','¿Qué conclusión es coherente con las observaciones?',['La solución se saturó entre 35 y 40 g de sal a esa temperatura','El agua puede disolver cualquier cantidad de sal si se agita más','Con 40 g la solución quedó insaturada porque sobró sal','La sal dejó de disolverse porque el agua se enfrió']);
// Ácidos, bases y pH (SED)
I('acidobase','N2','Con extracto de repollo morado se probaron tres líquidos: el limón dio color rosado, el agua morado y el limpiador de hornos verde.','¿Qué conclusión se apoya en las observaciones?',['El limón es ácido, el agua es neutra y el limpiador es básico','Los tres líquidos son ácidos, pero en distinto grado','El limpiador es ácido porque cambió a un color distinto del agua','El repollo no sirve como indicador porque da varios colores']);
I('acidobase','N3','Una estudiante quiere comparar la acidez de dos marcas de vinagre. Tiene papel indicador universal y vasos iguales.','¿Qué procedimiento es adecuado?',['Medir el pH de volúmenes iguales de cada vinagre sin diluir','Diluir uno de los vinagres y medir el pH del otro sin diluir','Probar el sabor de los dos y decidir cuál es más ácido','Medir el pH de uno solo y compararlo con la etiqueta del otro']);
I('acidobase','N4','Un estudiante predice que al diluir 10 veces una solución de HCl de pH 1, el pH sube a 2. Mide el pH de la solución diluida y obtiene 2,0.','¿Los datos apoyan su predicción?',['Sí: diluir 10 veces un ácido fuerte sube el pH en una unidad','No: al diluir un ácido su pH debería bajar','Sí, pero solo si el pH hubiera llegado a 7','No: el pH no cambia cuando se diluye una solución']);
I('acidobase','N1','Sørensen propuso en 1909 la escala de pH mientras trabajaba en una cervecería, para medir con precisión la acidez que afectaba la fermentación.','¿Qué muestra este ejemplo?',['Que un problema práctico puede llevar a crear una herramienta científica útil','Que la escala de pH se inventó sin ninguna necesidad práctica','Que la cerveza no tiene relación con la química de los ácidos','Que la acidez no se puede medir con números']);
I('acidobase','N2','En una titulación, se agregó NaOH 0,1 M a 25 mL de HCl: el pH se mantuvo bajo hasta agregar 24 mL y saltó a 7 con 25 mL.','¿Qué conclusión es coherente con los datos?',['El punto de equivalencia ocurre con 25 mL, cuando se neutraliza todo el ácido','El ácido se neutralizó con los primeros mililitros de base','El pH subió poco a poco y en forma constante durante toda la titulación','La base no reacciona con el ácido hasta que se agregan 25 mL']);
I('acidobase','N3','Un grupo quiere comparar qué antiácido neutraliza más ácido. Tienen dos marcas de tabletas, vinagre e indicador.','¿Qué procedimiento es adecuado?',['Disolver una tableta de cada marca y medir cuánto vinagre neutraliza cada una','Disolver una tableta de cada marca y comparar el color de las soluciones','Pesar las dos tabletas y decidir que la más pesada neutraliza más','Agregar vinagre a una sola tableta y comparar con el empaque de la otra']);
I('acidobase','N4','Una estudiante predice que la lluvia de su ciudad es ácida. Mide pH 5,2 en tres lluvias distintas; el agua destilada en contacto con el aire tiene pH cercano a 5,6.','¿Qué se puede decir de su predicción?',['Los datos la apoyan: la lluvia es un poco más ácida que el agua expuesta al aire','Los datos la refutan: un pH de 5,2 corresponde a una solución básica','No se puede evaluar con tres mediciones de lluvias distintas','Los datos la apoyan solo si el pH de la lluvia fuera mayor que 7']);
I('acidobase','N2','Se agregaron unas gotas de ácido a dos vasos: uno con agua pura y otro con una solución amortiguadora. El pH del agua bajó de 7 a 3; el de la solución amortiguadora, de 7,4 a 7,2.','¿Qué conclusión es coherente con los datos?',['La solución amortiguadora resiste los cambios de pH mucho más que el agua pura','El agua pura resiste mejor los cambios de pH que la solución amortiguadora','Las dos soluciones cambiaron su pH en la misma cantidad','La solución amortiguadora se volvió muy ácida con el ácido']);
// Química en la industria (SED)
I('industria','N2','Una planta produjo amoníaco a distintas temperaturas y midió el rendimiento: a 300 °C, 64 %; a 400 °C, 44 %; a 500 °C, 26 %, pero la reacción fue más rápida a 500 °C.','¿Qué conclusión se apoya en los datos?',['Subir la temperatura acelera la reacción pero baja el rendimiento, así que se busca un punto intermedio','Subir la temperatura aumenta el rendimiento y la rapidez de la reacción al mismo tiempo','La temperatura no influye en el rendimiento ni en la rapidez de la reacción','La reacción solo ocurre a 500 °C, por eso se usa siempre esa temperatura']);
I('industria','N3','Un ingeniero quiere saber si un catalizador nuevo aumenta la rapidez de una reacción en su planta.','¿Qué diseño es adecuado?',['Hacer la reacción con y sin el catalizador, en las mismas condiciones, y medir la rapidez','Hacer la reacción con el catalizador a mayor temperatura que sin él','Hacer la reacción solo con el catalizador y compararla con el catálogo','Cambiar al mismo tiempo el catalizador y la cantidad de reactivos']);
I('industria','N4','Una empresa predice un rendimiento del 90 % en la producción de cal a partir de caliza. Con 100 kg de caliza, que deberían dar 56 kg de cal, obtiene 50 kg.','¿Los datos apoyan su predicción?',['Sí: 50 de 56 kg es un rendimiento cercano al 90 %','No: el rendimiento real fue del 50 %, muy por debajo de lo previsto','Sí, pero solo si hubiera obtenido los 100 kg de caliza en cal','No: el rendimiento no se puede calcular con estos datos']);
I('industria','N1','Fritz Haber y Carl Bosch lograron en 1913 producir amoníaco a gran escala tras muchos ensayos con distintos catalizadores, presiones y temperaturas.','¿Qué muestra este ejemplo sobre la química industrial?',['Que la industria aplica el conocimiento científico mediante ensayos sistemáticos','Que el amoníaco se obtiene solo de fuentes naturales sin química','Que los catalizadores no influyen en los procesos industriales','Que un proceso industrial se diseña sin hacer ningún experimento']);
I('industria','N2','Una planta de tratamiento midió el cloro libre del agua cada hora: al salir de la planta 1,5 mg/L; en barrios cercanos 0,8 mg/L; en barrios lejanos 0,2 mg/L.','¿Qué conclusión es coherente con los datos?',['El cloro libre disminuye a medida que el agua recorre la red de tuberías','El cloro libre aumenta con la distancia porque se acumula en los tubos','El cloro libre no cambia en toda la red de distribución','Los barrios lejanos reciben agua sin tratar de otra planta']);
I('industria','N3','Una empresa quiere saber si recuperar el calor de sus hornos reduce el consumo de gas.','¿Qué procedimiento es adecuado?',['Medir el gas consumido por tonelada producida antes y después de instalar el sistema','Medir el gas consumido en un solo día después de instalar el sistema','Preguntar a los operarios si sienten que los hornos gastan menos','Medir la temperatura del horno sin registrar el gas consumido']);
I('industria','N4','Un ingeniero predice que al aumentar la presión se forma más amoníaco (N₂ + 3H₂ ⇌ 2NH₃). Al pasar de 100 a 300 atm, el rendimiento sube de 25 % a 45 %.','¿Qué se puede decir de su predicción?',['Los datos la apoyan: a mayor presión, el equilibrio favorece al amoníaco','Los datos la refutan: el rendimiento debería bajar al subir la presión','No se puede evaluar sin conocer el color del amoníaco','Los datos la apoyan solo si el rendimiento hubiera llegado al 100 %']);
I('industria','N2','En la fabricación de vidrio se usa arena, carbonato de sodio y caliza. Al reemplazar parte de la arena por vidrio reciclado, la temperatura del horno bajó de 1550 °C a 1450 °C.','¿Qué conclusión es coherente con los datos?',['Usar vidrio reciclado ahorra energía porque se funde a menor temperatura','El vidrio reciclado necesita más energía porque ya fue fundido antes','La temperatura del horno no depende de los materiales que se usen','El vidrio reciclado no sirve para fabricar vidrio nuevo']);
})();

/* ── Indagación, 2.ª parte (12-11-2026) ──────────────────────────────────
   Al revisar las etiquetas originales se vio que muchas preguntas marcadas
   como «indagación» pedían un nombre, una fórmula o una masa molar (uso
   comprensivo); se reclasificaron. Estas preguntas completan al menos 8 de
   indagación por tema. La primera opción es la correcta. */
(function(){var D=window.DOCENTE_DATOS;if(!D||!D.SABER)return;
function I(t,af,ctx,q,o,k){D.SABER.push({tema:t,c:'ind',af:af,k:k||'Q',ctx:ctx,q:q,o:o});}
// Óxidos básicos
I('ox-bas','N2','Se calentaron en el aire tres metales de igual masa: el magnesio ardió con luz blanca y ganó masa; el hierro en polvo se puso negro y ganó masa; el oro no cambió.','¿Qué conclusión se apoya en las observaciones?',['El magnesio y el hierro se combinaron con oxígeno del aire; el oro no reaccionó','Los tres metales perdieron masa al calentarse, aunque el oro menos que los otros','El oro reaccionó más que los otros porque no cambió su apariencia','Los metales ganan masa al calentarse porque absorben calor del mechero']);
I('ox-bas','N3','Un estudiante quiere saber si el óxido de calcio o el óxido de magnesio forma una solución más básica en agua.','¿Qué procedimiento es adecuado?',['Agregar la misma masa de cada óxido a volúmenes iguales de agua y medir el pH de cada solución','Agregar más óxido de calcio que de magnesio y comparar el color de las soluciones','Disolver solo el óxido de calcio y comparar su pH con lo que dice un libro','Calentar los dos óxidos sin agua y ver cuál cambia de color primero']);
I('ox-bas','N4','Una estudiante predice que una lámina de cobre calentada en la llama se cubrirá de óxido negro. Al sacarla, la lámina tiene una capa negra que se desprende al rasparla.','¿Qué se puede decir de su predicción?',['La observación la apoya: el cobre se combinó con el oxígeno y formó un óxido','La observación la refuta: la capa negra es hollín de la llama del mechero','No se puede evaluar sin saber la masa exacta de la lámina antes del ensayo','La observación la apoya solo si la capa hubiera sido de color rojo']);
I('ox-bas','N1','En 1774 Priestley calentó un polvo rojo de óxido de mercurio y obtuvo un gas en el que una vela ardía con más fuerza.','¿Qué aportó este experimento?',['Permitió aislar el oxígeno a partir de un óxido metálico','Demostró que los óxidos no se pueden descomponer con calor','Probó que el mercurio es un gas cuando se calienta','Mostró que las velas no necesitan aire para arder']);
// Balanceo
I('balanceo','N3','Un grupo quiere comprobar que la masa se conserva cuando el vinagre reacciona con bicarbonato.','¿Qué procedimiento es adecuado?',['Hacer la reacción dentro de un frasco cerrado con un globo y pesar todo antes y después','Hacer la reacción en un vaso abierto y pesar solo el vaso al terminar','Pesar el bicarbonato y luego medir la temperatura de la mezcla final','Pesar el vinagre, mezclarlo en un vaso abierto y ver si salen burbujas']);
I('balanceo','N2','Se quemó una vela sobre una balanza: la vela perdió 2 g. En otro ensayo, la vela se quemó dentro de un frasco cerrado y la masa total no cambió.','¿Qué conclusión se apoya en los datos?',['La masa se conserva: en el primer ensayo los gases producidos escaparon al aire','La vela pierde masa al quemarse porque la materia se destruye en la llama','El frasco cerrado impide que la vela se queme y por eso no cambia la masa','La masa no se conserva en las combustiones, solo en las reacciones en agua']);
I('balanceo','N4','Una estudiante predice que en la descomposición del agua se forma el doble de volumen de hidrógeno que de oxígeno, según 2H₂O → 2H₂ + O₂. En la electrólisis mide 20 mL de hidrógeno y 10 mL de oxígeno.','¿Los datos apoyan su predicción?',['Sí: la razón de volúmenes 2 a 1 coincide con los coeficientes de la ecuación','No: debería haberse formado el mismo volumen de los dos gases','Sí, pero solo porque el hidrógeno es más liviano que el oxígeno','No: los coeficientes no tienen relación con los volúmenes de los gases']);
I('balanceo','N1','Lavoisier pesó con mucho cuidado los reactivos y los productos de muchas reacciones en recipientes cerrados antes de proponer la conservación de la masa.','¿Por qué fue importante que trabajara en recipientes cerrados?',['Porque así no se perdían ni entraban gases que cambiaran la masa medida','Porque en recipientes abiertos las reacciones químicas no ocurren','Porque los recipientes cerrados aumentan la masa de los productos','Porque así podía trabajar sin balanza y estimar las masas']);
I('balanceo','N2','Al quemar 16 g de metano con oxígeno suficiente se obtuvieron 44 g de CO₂ y 36 g de agua.','¿Qué conclusión es coherente con los datos?',['Reaccionaron 64 g de oxígeno, porque la masa de los productos es igual a la de los reactivos','El metano se transformó solo en CO₂, porque el agua venía del aire del laboratorio','Se perdieron 64 g de masa durante la combustión del metano','La masa de los productos es mayor porque la llama agrega masa a la reacción']);
I('balanceo','N3','Un estudiante quiere comprobar con modelos de plastilina que la ecuación 2H₂ + O₂ → 2H₂O está balanceada.','¿Qué procedimiento es adecuado?',['Armar las moléculas de los reactivos, desarmarlas y ver si alcanzan exactamente para los productos','Armar solo las moléculas de agua y contar cuántas bolas de cada color usó','Armar los reactivos con bolas de distinto tamaño y comparar sus pesos','Armar una molécula de cada sustancia y compararlas entre sí']);
I('balanceo','N4','Un estudiante predice que, si la ecuación Zn + 2HCl → ZnCl₂ + H₂ está bien balanceada, con 1 mol de zinc se obtiene 1 mol de hidrógeno. En el laboratorio, 0,1 mol de zinc producen 0,1 mol de hidrógeno.','¿Qué se puede decir de su predicción?',['Los datos la apoyan: la proporción 1 a 1 entre zinc e hidrógeno se cumple','Los datos la refutan: debería formarse el doble de hidrógeno que de zinc','No se puede evaluar, porque se usó menos de 1 mol de zinc','Los datos la apoyan solo si se hubiera usado ácido sulfúrico']);
I('balanceo','N2','Se calentaron 2,0 g de clorato de potasio hasta que no cambió más su masa; quedaron 1,2 g de cloruro de potasio.','¿Qué conclusión se apoya en los datos?',['Se liberaron 0,8 g de oxígeno, que salieron como gas durante el calentamiento','El clorato perdió 0,8 g de masa que se destruyeron con el calor','El cloruro de potasio pesa menos porque tiene menos átomos de potasio','La reacción no ocurrió completa, porque la masa debería ser igual']);
// Óxidos ácidos
I('anhid','N2','Se quemaron azufre y carbón en frascos separados con agua e indicador; en los dos frascos el agua se volvió ácida. En un tercer frasco con magnesio quemado, el agua se volvió básica.','¿Qué conclusión se apoya en las observaciones?',['Los óxidos de los no metales forman ácidos con el agua y los de los metales forman bases','Todos los óxidos forman ácidos con el agua sin importar el elemento','El magnesio es un no metal porque su óxido cambió el color del indicador','El indicador cambia de color por el calor de la combustión y no por los óxidos']);
I('anhid','N3','Un grupo quiere comparar cuánto acidifica el agua el CO₂ del aliento con el de una botella de agua con gas.','¿Qué procedimiento es adecuado?',['Burbujear el aliento por un tiempo fijo en agua con indicador y comparar con agua con gas del mismo volumen','Soplar en un vaso con agua y destapar una botella de agua con gas al mismo tiempo','Burbujear el aliento en agua y comparar el resultado con el de un libro','Medir el pH del agua con gas y suponer que el aliento acidifica igual']);
I('anhid','N4','Una estudiante predice que la lluvia cerca de una mina de carbón tiene más sulfatos que la de una zona sin minería. Encuentra 8 mg/L de sulfatos cerca de la mina y 1 mg/L lejos de ella.','¿Los datos apoyan su predicción?',['Sí: cerca de la mina la lluvia tiene muchos más sulfatos','No: la lluvia lejos de la mina también tiene sulfatos','Sí, pero solo si la lluvia de la mina fuera básica','No: los sulfatos no tienen relación con la quema de carbón']);
I('anhid','N2','En una cámara se midió el pH del agua expuesta al aire de una calle: en un día con mucho tráfico, 4,9; en un domingo sin tráfico, 5,6.','¿Qué conclusión es coherente con los datos?',['Los gases de los motores aumentan la acidez del agua expuesta al aire','El tráfico vuelve el agua más básica porque los motores liberan vapor','El pH del agua no depende del aire con el que está en contacto','El domingo el agua fue más ácida porque había menos carros']);
// Hidruros
I('hidru','N2','Se probaron tres hidruros en agua con indicador: con hidruro de sodio y con hidruro de calcio la solución se volvió básica y hubo burbujas; con metano (CH₄) no pasó nada.','¿Qué conclusión se apoya en las observaciones?',['Los hidruros metálicos reaccionan con el agua y forman bases e hidrógeno','Los tres hidruros reaccionan igual con el agua, aunque el metano más lento','El metano forma una base más fuerte, pero sin producir burbujas','El indicador cambia de color por las burbujas y no por las bases']);
I('hidru','N4','Un estudiante predice que el hidruro de litio reacciona más lento con el agua que el hidruro de sodio. Con masas iguales, el de sodio produjo el doble de gas en el primer minuto.','¿Qué se puede decir de su predicción?',['Los datos la apoyan: el hidruro de sodio reaccionó más rápido','Los datos la refutan: el hidruro de litio produjo más gas','No se puede evaluar porque los dos producen hidrógeno','Los datos la apoyan solo si los dos produjeran el mismo gas']);
// Ácidos hidrácidos
I('ac-hid','N4','Una estudiante predice que el ácido clorhídrico diluido reacciona más rápido con el zinc en polvo que con una lámina de zinc de igual masa. El polvo terminó de reaccionar en 2 minutos y la lámina en 15.','¿Los datos apoyan su predicción?',['Sí: con más superficie expuesta la reacción fue más rápida','No: los dos reaccionaron, así que la forma del zinc no influye','Sí, pero solo porque la lámina tenía más masa que el polvo','No: la lámina debería reaccionar más rápido por ser más compacta']);
I('ac-hid','N2','Se agregó ácido clorhídrico a muestras de igual masa: el mármol produjo muchas burbujas, la tiza también, y el vidrio no cambió.','¿Qué conclusión es coherente con las observaciones?',['El mármol y la tiza contienen carbonato, que reacciona con el ácido','Los tres materiales reaccionan con el ácido, pero el vidrio sin burbujas','El vidrio contiene más carbonato que el mármol y la tiza','El ácido no reacciona con ningún material que sea de color blanco']);
I('ac-hid','N3','Un grupo quiere saber si la concentración del ácido clorhídrico cambia la rapidez de su reacción con el magnesio.','¿Qué deben mantener igual?',['El tamaño de la cinta de magnesio, el volumen de ácido y la temperatura','La concentración del ácido, que debe ser la misma en todos los ensayos','Solo el color del recipiente donde ocurre la reacción','Ninguna condición: basta con cambiar el ácido y mirar las burbujas']);
I('ac-hid','N1','Glauber obtuvo en el siglo XVII el «espíritu de sal» calentando sal común con ácido sulfúrico, y describió sus propiedades corrosivas.','¿Qué muestra este ejemplo?',['Que se pueden obtener sustancias nuevas a partir de otras conocidas, y estudiarlas','Que el ácido clorhídrico existe solo en la naturaleza y no se puede fabricar','Que la sal común es un ácido muy corrosivo','Que los químicos antiguos no hacían experimentos']);
I('ac-hid','N2','Se midió el tiempo en que un clavo de hierro deja de producir burbujas en ácido clorhídrico a distintas concentraciones: 1 M, 8 minutos; 2 M, 4 minutos; 3 M, 3 minutos.','¿Qué conclusión se apoya en los datos?',['A mayor concentración del ácido, la reacción con el hierro termina más rápido','A mayor concentración del ácido, la reacción con el hierro es más lenta','La concentración no influye en la reacción del ácido con el hierro','El clavo deja de reaccionar porque el ácido se vuelve una base']);
// Hidróxidos
I('base','N2','Se probó la conductividad de tres soluciones de igual concentración: hidróxido de sodio, conduce mucho; amoníaco, conduce poco; agua destilada, casi nada.','¿Qué conclusión se apoya en las observaciones?',['El hidróxido de sodio libera muchos más iones que el amoníaco en el agua','El amoníaco es una base más fuerte porque conduce menos corriente','El agua destilada tiene más iones que la solución de amoníaco','Las tres soluciones tienen la misma cantidad de iones disueltos']);
I('base','N4','Un estudiante predice que el agua de cal se enturbia al soplar en ella por el CO₂ del aliento. Al soplar con un pitillo durante un minuto, el agua se pone blanca.','¿Qué se puede decir de su predicción?',['La observación la apoya: el CO₂ reaccionó con el hidróxido y formó carbonato','La observación la refuta: el agua se enturbió por la saliva del pitillo','No se puede evaluar, porque el aliento no contiene CO₂','La observación la apoya solo si el agua hubiera quedado transparente']);
I('base','N2','Se agregó soda cáustica a tres soluciones de sales: con sulfato de cobre se formó un sólido azul; con cloruro férrico, uno café; con cloruro de sodio, nada.','¿Qué conclusión es coherente con las observaciones?',['El cobre y el hierro forman hidróxidos poco solubles; el del sodio es soluble','Los tres metales forman hidróxidos sólidos de distintos colores','El cloruro de sodio reaccionó, pero formó un sólido transparente','La soda cáustica no reacciona con ninguna sal de metal']);
// Ácidos oxácidos
I('ac-ox','N2','Se agregó un trozo de cobre a tres ácidos: con ácido nítrico concentrado se formó un gas café y una solución azul; con ácido clorhídrico y con ácido sulfúrico diluido no pasó nada.','¿Qué conclusión se apoya en las observaciones?',['El ácido nítrico puede oxidar al cobre, mientras que los otros ácidos diluidos no','Los tres ácidos reaccionan igual con el cobre, pero dos lo hacen más lento','El cobre es más reactivo que el hierro porque reacciona con todos los ácidos','El ácido clorhídrico es el más fuerte porque no gastó el cobre']);
I('ac-ox','N4','Una estudiante predice que el ácido sulfúrico diluido libera hidrógeno con el zinc. Al juntarlos se forman burbujas y un fósforo encendido produce una pequeña explosión.','¿Los resultados apoyan su predicción?',['Sí: el gas que explota con la llama es característico del hidrógeno','No: las burbujas indican que se formó dióxido de carbono','Sí, pero solo si el fósforo se hubiera apagado sin hacer ruido','No: el ácido sulfúrico no reacciona con los metales']);
I('ac-ox','N3','Un grupo quiere comparar la acidez de dos gaseosas, una de cola y otra de limón.','¿Qué procedimiento es adecuado?',['Medir el pH de volúmenes iguales de cada gaseosa recién abierta, a la misma temperatura','Medir el pH de la gaseosa de cola recién abierta y el de la otra al día siguiente','Probar el sabor de las dos gaseosas y decidir cuál es más ácida','Medir el pH de una sola gaseosa y compararlo con la etiqueta de la otra']);
// Sales binarias
I('sal-bin','N3','Una estudiante quiere saber si la sal marina de Manaure tiene más impurezas que la sal refinada.','¿Qué procedimiento es adecuado?',['Disolver masas iguales de cada sal en agua, filtrar y pesar lo que queda en el filtro','Disolver solo la sal marina y comparar el color del agua con una foto','Probar el sabor de las dos sales y decidir cuál tiene más impurezas','Calentar las dos sales sólidas y ver cuál cambia de color primero']);
I('sal-bin','N2','Se hirvieron muestras de agua: agua pura a 100 °C; agua con 5 % de sal a 101 °C; agua con 10 % de sal a 102 °C.','¿Qué conclusión se apoya en los datos?',['La sal disuelta eleva el punto de ebullición del agua','La sal disuelta baja el punto de ebullición del agua','La sal no influye en la temperatura a la que hierve el agua','El agua con sal hierve antes porque se calienta más rápido']);
I('sal-bin','N1','Faraday estudió en 1834 cómo la corriente eléctrica descompone las sales fundidas o disueltas y propuso los términos ion, ánodo y cátodo.','¿Qué aportó su trabajo?',['Mostró, con mediciones, que en las sales hay partículas con carga que se mueven','Demostró que las sales no se pueden descomponer de ninguna manera','Probó que la electricidad se crea dentro de las sales disueltas','Mostró que las sales son metales puros cuando se funden']);
// Oxisales
I('sal-ox','N2','Se calentaron tres sales: el carbonato de calcio liberó un gas que enturbió el agua de cal; el nitrato de potasio liberó un gas que reavivó un palillo; el sulfato de sodio no cambió.','¿Qué conclusión es coherente con las observaciones?',['Las oxisales se comportan distinto con el calor: unas liberan CO₂, otras oxígeno y otras no cambian','Todas las oxisales liberan el mismo gas al calentarse, aunque en distinta cantidad','El sulfato de sodio también liberó un gas, pero era invisible y no se pudo detectar','Ninguna oxisal cambia al calentarse: los gases venían del aire caliente del tubo']);
I('sal-ox','N3','Un grupo quiere saber si el yeso agrícola (sulfato de calcio) mejora la infiltración del agua en un suelo arcilloso.','¿Qué diseño es adecuado?',['Comparar materas iguales con el mismo suelo, unas con yeso y otras sin él, midiendo el tiempo que tarda en pasar el agua','Agregar yeso a todas las materas con el mismo suelo y medir el tiempo que tarda en pasar el agua','Comparar una matera con yeso y arcilla con otra matera sin yeso que tenga arena en vez de arcilla','Agregar yeso al suelo de una matera y medir solo el color de la tierra después de un mes']);
I('sal-ox','N4','Una estudiante predice que el nitrato de plata forma un precipitado con el agua de la llave porque tiene cloruros. Al agregarlo se forma una leve turbidez blanca; con agua destilada no pasa nada.','¿Qué se puede decir de su predicción?',['La observación la apoya: el agua de la llave tiene algo de cloruro y la destilada no','La observación la refuta: el agua destilada también debería enturbiarse','No se puede evaluar sin conocer el pH del agua de la llave','La observación la apoya solo si el precipitado fuera de color azul']);
I('sal-ox','N2','Se midió la solubilidad del nitrato de potasio en 100 g de agua: a 20 °C, 32 g; a 40 °C, 64 g; a 60 °C, 110 g.','¿Qué conclusión se apoya en los datos?',['La solubilidad del nitrato de potasio aumenta mucho con la temperatura','La solubilidad del nitrato de potasio disminuye con la temperatura','La solubilidad del nitrato de potasio no depende de la temperatura','A 60 °C el nitrato de potasio ya no se disuelve en agua']);
I('sal-ox','N1','En el siglo XIX se descubrió que el salitre de Chile podía reemplazar al guano como abono, gracias al análisis químico de su contenido de nitrógeno.','¿Qué muestra este ejemplo?',['Que el análisis químico permite encontrar usos nuevos para los recursos naturales','Que el salitre y el guano son la misma sustancia con distinto nombre','Que los abonos funcionan sin ningún nutriente químico','Que el nitrógeno no es necesario para las plantas']);
// Sales ácidas
I('sal-ac','N2','Se agregó vinagre a tres polvos blancos: con bicarbonato de sodio hubo muchas burbujas; con carbonato de calcio hubo burbujas; con sal de cocina no pasó nada.','¿Qué conclusión se apoya en las observaciones?',['El bicarbonato y el carbonato liberan CO₂ con el ácido; la sal de cocina no','Los tres polvos son carbonatos, pero la sal reacciona sin burbujas','La sal de cocina es la que más reacciona con el vinagre','El vinagre no reacciona con ningún polvo blanco']);
I('sal-ac','N4','Un estudiante predice que el bicarbonato de sodio se descompone a menor temperatura que el carbonato de sodio. El bicarbonato liberó gas a 80 °C y el carbonato no se descompuso a 400 °C.','¿Los datos apoyan su predicción?',['Sí: el bicarbonato se descompuso a una temperatura mucho menor','No: el carbonato también debería haberse descompuesto','Sí, pero solo porque el bicarbonato tenía más masa','No: el bicarbonato es más estable que el carbonato']);
I('sal-ac','N3','Una estudiante quiere saber cuánto CO₂ libera una cucharadita de polvo de hornear al mezclarse con agua.','¿Qué procedimiento es adecuado?',['Pesar el vaso con agua y el polvo antes y después de la reacción, y calcular la diferencia','Contar las burbujas que se forman en el vaso durante el primer minuto de reacción','Medir la temperatura del agua antes y después de agregar el polvo de hornear','Pesar solo el polvo antes de echarlo al agua y suponer que todo se vuelve gas']);
I('sal-ac','N2','Se midió el pH de soluciones de fosfatos de sodio de igual concentración: fosfato trisódico 12,0; fosfato disódico 9,2; fosfato monosódico 4,5.','¿Qué conclusión es coherente con los datos?',['A más hidrógenos en el anión fosfato, la solución es más ácida','A más hidrógenos en el anión fosfato, la solución es más básica','Las tres sales tienen el mismo pH porque todas son fosfatos de sodio','El fosfato trisódico es el más ácido porque tiene más sodio']);
// Tipos de reacción
I('reaccion','N2','Se pesó una cinta de magnesio (0,24 g) y el polvo blanco que quedó al quemarla (0,40 g).','¿Qué conclusión se apoya en los datos?',['El magnesio se combinó con oxígeno del aire en una reacción de síntesis','El magnesio se descompuso y perdió parte de su masa al quemarse','El polvo pesa más porque absorbió el calor de la llama','Ocurrió una doble sustitución entre el magnesio y el aire']);
I('reaccion','N3','Un grupo quiere comprobar que al mezclar soluciones de nitrato de plomo y yoduro de potasio ocurre una reacción química y no solo una mezcla.','¿Qué evidencia es adecuada?',['La aparición de un sólido amarillo que no estaba en las soluciones iniciales','Que las dos soluciones eran transparentes antes de mezclarlas','Que el volumen total es la suma de los dos volúmenes','Que la mezcla queda en un solo recipiente']);
I('reaccion','N4','Una estudiante predice que el zinc desplaza al cobre de una solución de sulfato de cobre, pero el cobre no desplaza al zinc de una solución de sulfato de zinc. El zinc se cubrió de cobre; el cobre en la otra solución no cambió.','¿Qué se puede decir de su predicción?',['Los resultados la apoyan: el zinc es más reactivo que el cobre','Los resultados la refutan: los dos metales deberían cambiar','No se puede evaluar sin conocer el color de las soluciones','Los resultados la apoyan solo si el cobre también se hubiera recubierto']);
I('reaccion','N2','Se calentaron tres sustancias en tubos: el carbonato de cobre verde se volvió negro y liberó un gas; el agua oxigenada liberó burbujas; la sal de cocina no cambió.','¿Qué conclusión es coherente con las observaciones?',['El carbonato de cobre y el agua oxigenada se descompusieron; la sal no','Las tres sustancias se descompusieron, aunque la sal sin cambio visible','La sal de cocina se combinó con el aire en una síntesis','El carbonato de cobre solo cambió de color sin reaccionar']);
I('reaccion','N1','Lavoisier interpretó la combustión como la combinación de las sustancias con el oxígeno, contra la idea aceptada de que las sustancias perdían «flogisto» al arder.','¿Qué evidencia fue clave para su propuesta?',['Que los metales ganan masa al quemarse en un recipiente cerrado','Que las llamas tienen distintos colores según el combustible','Que las sustancias que arden se ven más pequeñas al final','Que el fuego no necesita aire para mantenerse encendido']);
I('reaccion','N3','Un estudiante quiere saber si la temperatura acelera la reacción de una tableta efervescente con agua.','¿Qué diseño es adecuado?',['Poner tabletas iguales en volúmenes iguales de agua fría, tibia y caliente, y medir cuánto tarda cada una','Poner una tableta en agua caliente y medir solo cuánto tarda en disolverse','Poner tabletas de distinta marca en agua a distintas temperaturas','Poner tabletas partidas en agua fría y tabletas enteras en agua caliente']);
I('reaccion','N2','En la reacción del vinagre con bicarbonato se midió la temperatura: antes 22 °C, después 18 °C.','¿Qué conclusión se apoya en los datos?',['La reacción absorbe calor del entorno: es endotérmica','La reacción libera calor al entorno: es exotérmica','La temperatura bajó porque el vinagre se evaporó','No hubo reacción, porque la temperatura cambió poco']);
I('reaccion','N4','Un estudiante predice que, al quemar un pedazo de papel en un frasco cerrado sobre una balanza, la masa total no cambia. Antes y después de la combustión la balanza marca 152,4 g.','¿Los datos apoyan su predicción?',['Sí: en un sistema cerrado la masa total se conserva','No: el papel desapareció, así que la masa debió bajar','Sí, pero solo porque el frasco era de vidrio','No: la combustión siempre aumenta la masa total']);
// Mol y masa molar
I('mol-masa','N3','Un grupo quiere comprobar que 1 mol de distintas sustancias tiene masas distintas. Tienen balanza, sal, azúcar y agua.','¿Qué procedimiento es adecuado?',['Calcular la masa molar de cada sustancia, pesar esa masa y comparar los montones','Pesar 10 g de cada sustancia y decir que todas tienen 1 mol','Pesar la misma cucharada de cada sustancia y comparar los resultados','Contar los granos de sal y de azúcar para saber cuántos moles tienen']);
I('mol-masa','N2','Una estudiante pesó 1 mol de tres sustancias: agua, 18 g; sal de cocina, 58,5 g; azúcar, 342 g.','¿Qué conclusión se apoya en los datos?',['Un mol de cada sustancia tiene una masa distinta, que depende de su fórmula','Un mol de cualquier sustancia pesa siempre lo mismo','El azúcar tiene más moléculas por mol que el agua','La sal pesa más porque tiene más partículas por mol que el agua']);
I('mol-masa','N4','Un estudiante predice que en 36 g de agua hay el doble de moléculas que en 18 g. Calcula 2 mol y 1 mol, respectivamente.','¿Qué se puede decir de su predicción?',['Los cálculos la apoyan: el doble de masa del mismo compuesto tiene el doble de moléculas','Los cálculos la refutan: la masa no tiene relación con el número de moléculas','No se puede evaluar sin contar las moléculas una por una','Los cálculos la apoyan solo si se trata de agua en estado gaseoso']);
I('mol-masa','N1','Perrin midió en 1908 el número de Avogadro con varios métodos independientes y obtuvo valores muy parecidos.','¿Por qué esos resultados fueron tan convincentes?',['Porque métodos distintos coincidieron en el mismo valor','Porque usó un solo método y lo repitió una vez','Porque el número salió muy pequeño y fácil de usar','Porque Avogadro ya lo había medido con exactitud']);
I('mol-masa','N2','Se electrolizó agua y se midió el gas producido: 0,20 g de hidrógeno y 1,60 g de oxígeno.','¿Qué conclusión es coherente con los datos?',['Se formaron 0,10 mol de hidrógeno y 0,05 mol de oxígeno, en razón 2 a 1','Se formó la misma cantidad de moles de hidrógeno y de oxígeno','Se formó más oxígeno en moles porque su masa es mayor','La masa de los gases no permite calcular los moles formados']);
I('mol-masa','N3','Una estudiante quiere saber cuántos moles de agua tiene una gota. Tiene un gotero y una balanza que mide centésimas de gramo.','¿Qué procedimiento es más adecuado?',['Pesar 100 gotas, dividir para obtener la masa de una gota y luego dividir entre 18 g/mol','Pesar una sola gota en la balanza, aunque la balanza no alcance a detectarla','Contar las moléculas de una gota con el microscopio del laboratorio del colegio','Medir el diámetro de una gota con una regla y calcular su masa sin pesarla']);
I('mol-masa','N4','Un estudiante predice que 1 mol de hierro (56 g) ocupa menos volumen que 1 mol de aluminio (27 g), porque el hierro es más denso. Mide 7,1 cm³ para el hierro y 10,0 cm³ para el aluminio.','¿Los datos apoyan su predicción?',['Sí: el mol de hierro ocupó menos volumen que el de aluminio','No: el mol de hierro pesa más, así que debería ocupar más volumen','Sí, pero solo porque el aluminio es un metal más blando','No: un mol de cualquier sólido ocupa siempre el mismo volumen']);
I('mol-masa','N2','Se calentaron 2,50 g de sulfato de cobre hidratado (azul) hasta volverse blanco; quedaron 1,60 g de sal anhidra.','¿Qué conclusión se apoya en los datos?',['La sal perdió 0,90 g de agua de hidratación al calentarse','La sal ganó masa al calentarse porque absorbió aire','La sal perdió cobre al cambiar de color','El cambio de color indica que se formó una sustancia sin cobre']);
// Tabla periódica
I('elemento','N2','Se pusieron trozos pequeños de litio, sodio y potasio en agua: el litio burbujeó suavemente, el sodio se movió rápido y el potasio se encendió.','¿Qué conclusión se apoya en las observaciones?',['La reactividad de los metales alcalinos aumenta al bajar en el grupo','La reactividad de los metales alcalinos disminuye al bajar en el grupo','Los tres metales tienen la misma reactividad con el agua','El litio es el más reactivo porque es el más liviano']);
I('elemento','N4','Mendeléiev predijo un elemento, el «eka-silicio», con masa cercana a 72 y densidad cercana a 5,5 g/cm³. En 1886 se descubrió el germanio: masa 72,6 y densidad 5,3 g/cm³.','¿Qué se puede decir de su predicción?',['Los datos la apoyan: las propiedades del germanio coincidieron con lo predicho','Los datos la refutan: las cifras no son exactamente iguales','No se puede evaluar, porque el germanio no está en la tabla periódica','Los datos la apoyan solo si el germanio fuera un gas']);
I('elemento','N3','Un grupo quiere comparar la reactividad de los halógenos. Tienen agua de cloro, agua de bromo y soluciones de bromuro y yoduro de potasio.','¿Qué procedimiento es adecuado?',['Agregar cada halógeno a las soluciones de los otros haluros y ver si cambia el color','Mezclar el agua de cloro con el agua de bromo y medir la temperatura','Oler cada solución y ordenarlas por la fuerza del olor','Calentar las soluciones y ver cuál hierve primero']);
I('elemento','N2','Radios atómicos (pm) del periodo 3: sodio 186, magnesio 160, aluminio 143, silicio 118, cloro 99.','¿Qué conclusión es coherente con los datos?',['El radio disminuye a lo largo del periodo porque aumenta la carga del núcleo','El radio aumenta a lo largo del periodo porque hay más electrones','El radio no cambia dentro de un mismo periodo','El cloro es el más grande porque es un gas']);
I('elemento','N1','Döbereiner, Newlands y Mendeléiev propusieron formas de ordenar los elementos basadas en las regularidades que observaban en sus propiedades.','¿Qué muestra esta historia de la tabla periódica?',['Que el conocimiento científico se construye con aportes sucesivos que se corrigen y amplían','Que la tabla periódica la inventó una sola persona en un solo día','Que las primeras propuestas eran correctas y nunca cambiaron','Que la tabla se construyó sin tener en cuenta las propiedades medidas']);
I('elemento','N4','Una estudiante predice que el cloro desplaza al bromo de una solución de bromuro de potasio. Al agregar agua de cloro, la solución incolora se vuelve naranja.','¿Los resultados apoyan su predicción?',['Sí: el color naranja indica que se liberó bromo','No: el color naranja indica que el cloro no reaccionó','Sí, pero solo si la solución hubiera quedado incolora','No: el bromo es más reactivo que el cloro']);
// Reactividad
I('reactividad','N4','Un estudiante predice que el magnesio desplaza al hierro de una solución de sulfato de hierro(II). Después de unos minutos, la cinta de magnesio se cubre de un depósito oscuro y la solución se aclara.','¿Qué se puede decir de su predicción?',['Las observaciones la apoyan: el magnesio, más reactivo, desplazó al hierro','Las observaciones la refutan: el depósito oscuro es óxido de magnesio','No se puede evaluar sin conocer la masa de la cinta','Las observaciones la apoyan solo si la solución se volviera azul']);
// Átomo
I('atomo','N3','Una estudiante quiere identificar sales desconocidas por el color de su llama. Tiene sales conocidas de sodio, potasio, litio y cobre.','¿Qué procedimiento es adecuado?',['Calentar cada sal conocida y cada muestra en la llama con un alambre limpio, y comparar los colores','Calentar solo las muestras y decidir por el olor de qué sal se trata','Disolver las sales en agua y comparar el color de las soluciones','Pesar las muestras y compararlas con la masa de las sales conocidas']);
// Configuración electrónica
I('config-e','N3','Un grupo quiere saber si los iones de cobre(II) y de zinc tienen electrones desapareados. Tienen las dos sales sólidas y un imán muy fuerte.','¿Qué procedimiento es adecuado?',['Acercar el imán a cantidades iguales de cada sal en las mismas condiciones y comparar la atracción','Acercar el imán solo a la sal de cobre y comparar lo que pasa con lo que dice un libro','Disolver una de las sales en agua y dejar la otra sólida antes de acercar el imán a ambas','Calentar la sal de zinc y dejar fría la de cobre, y luego acercar el imán a las dos']);
// Enlace
I('enlace','N4','Una estudiante predice que el azúcar no conduce la corriente al disolverse porque no forma iones. Con el circuito, el agua con azúcar no enciende el bombillo y el agua con sal sí.','¿Los resultados apoyan su predicción?',['Sí: la solución de azúcar no conduce, como se espera de una sustancia molecular','No: el azúcar debería conducir porque se disuelve en agua','Sí, pero solo porque el azúcar se disolvió más lento que la sal','No: la sal no debería conducir porque es un sólido']);
I('enlace','N2','Se calentaron tres sólidos en una cuchara metálica: la parafina se fundió en segundos, el azúcar se fundió y se oscureció, y la sal no se fundió con el mechero.','¿Qué conclusión es coherente con las observaciones?',['Las fuerzas entre las partículas de la sal son mucho más fuertes que en la parafina y el azúcar','La parafina tiene los enlaces más fuertes porque se funde más rápido','Los tres sólidos tienen el mismo tipo de enlace entre sus partículas','La sal no se funde porque no tiene ningún tipo de enlace']);
})();

/* ── Indagación con tablas y gráficas (13-11-2026) ──────────────────────
   Preguntas de indagación que traen sus datos en una tabla ('tabla') o en
   una gráfica ('graf'), como en la prueba Saber 11 (ver saber-icfes.js:
   se dibujan solas en la evaluación y en el juego). La primera opción es
   la correcta; opciones del mismo largo y forma; fórmulas sin paréntesis. */
(function(){var D=window.DOCENTE_DATOS;if(!D||!D.SABER)return;
function T(t,af,ctx,q,o,d){var x={tema:t,c:'ind',af:af,k:'Q',ctx:ctx,q:q,o:o};for(var k in d)x[k]=d[k];D.SABER.push(x);}
T("gases","N4","Un grupo mide el volumen de una muestra de aire en una jeringa tapada mientras aumenta la presión, sin cambiar la temperatura.","¿Qué relación muestra la gráfica entre la presión y el volumen del gas?",["A mayor presión, menor volumen: el producto presión × volumen se mantiene constante", "A mayor presión, mayor volumen, porque el gas se expande", "El volumen no depende de la presión en el intervalo medido", "El volumen baja 1 L cada vez que la presión sube 1 atm"],{"graf": {"tipo": "lin", "x": ["1", "2", "3", "4"], "y": [6, 3, 2, 1.5], "ex": "Presión (atm)", "ey": "Volumen (L)"}});
T("gases","N4","Una estudiante calienta una muestra de gas en un émbolo que se mueve libremente, de modo que la presión no cambia, y registra los datos de la tabla.","Ella propone que el volumen es directamente proporcional a la temperatura en kelvin. ¿Los datos apoyan su propuesta?",["Sí, porque el cociente V ÷ T es siempre el mismo, 0,02 L/K", "Sí, porque ambas magnitudes aumentan, aunque V ÷ T cambie", "No, porque el volumen sube solo 1 L cada vez", "No, porque la temperatura debe expresarse en °C"],{"tabla": [["Temperatura (K)", "250", "300", "350", "400"], ["Volumen (L)", "5", "6", "7", "8"]]});
T("soluciones","N4","Una solución saturada de nitrato de potasio, un abono, se prepara con 100 g de agua a 60 °C. La gráfica muestra cuántos gramos de esta sal se disuelven en 100 g de agua a cada temperatura.","Si la solución se enfría hasta 20 °C, ¿cuántos gramos de sal se forman como sólido, aproximadamente?",["78 g", "32 g", "110 g", "142 g"],{"graf": {"tipo": "lin", "x": ["0", "20", "40", "60"], "y": [13, 32, 64, 110], "ex": "Temperatura (°C)", "ey": "Solubilidad (g/100 g de agua)"}});
T("soluciones","N4","En las salinas de Manaure, en La Guajira, la sal se obtiene del agua del mar. Un grupo consulta cuánto cloruro de sodio se disuelve en 100 g de agua a distintas temperaturas.","Para obtener sal de una solución saturada, ¿qué método es más eficiente según los datos?",["Evaporar el agua, porque enfriar casi no hace precipitar sal", "Enfriar la solución, porque la solubilidad baja mucho al enfriar", "Calentar la solución, porque la sal es más soluble en caliente", "Agitar la solución, porque la agitación disminuye la solubilidad"],{"tabla": [["Temperatura (°C)", "0", "20", "40", "60"], ["Solubilidad del NaCl (g/100 g de agua)", "35,5", "36,0", "36,6", "37,3"]]});
T("acidobase","N4","En el laboratorio se midió el pH de cuatro soluciones, todas con la misma concentración, 0,1 M.","¿Qué dato permite afirmar que el ácido acético es un ácido más débil que el ácido clorhídrico?",["A igual concentración, su pH es mayor que el del HCl", "Su pH es menor que 7, como el de cualquier ácido", "Su pH es menor que el del hidróxido de sodio", "Tiene más átomos de hidrógeno en su fórmula que el HCl"],{"tabla": [["Solución 0,1 M", "pH"], ["Ácido clorhídrico", "1,0"], ["Ácido acético", "2,9"], ["Amoníaco", "11,1"], ["Hidróxido de sodio", "13,0"]]});
T("acidobase","N4","Unos estudiantes midieron el pH del agua de lluvia en cuatro lugares. La lluvia sin contaminación tiene un pH cercano a 5,6.","¿Qué lugar sugiere un mayor efecto de la lluvia ácida y por qué?",["La zona industrial, porque su pH es el que más baja de 5,6", "El páramo, porque está más lejos de las fábricas", "La vereda, porque tiene el pH más alto", "Ninguno, porque todos los pH son menores que 7"],{"graf": {"tipo": "bar", "x": ["Vereda", "Zona industrial", "Centro", "Páramo"], "y": [5.6, 4.3, 4.8, 5.5], "ex": "Lugar de la medición", "ey": "pH de la lluvia"}});
T("industria","N4","En una planta de fertilizantes se produce amoníaco con el proceso Haber. Se probaron tres temperaturas a la misma presión.","¿Qué conclusión sustentan los datos?",["A mayor temperatura, menor rendimiento de amoníaco con esa presión", "A mayor temperatura, mayor rendimiento de amoníaco", "La temperatura no cambia el rendimiento de amoníaco", "El rendimiento solo depende de la presión de trabajo"],{"tabla": [["Temperatura (°C)", "350", "450", "550"], ["Rendimiento de NH₃ (%)", "45", "25", "12"]]});
T("estequiometria","N4","En una práctica se quemaron distintas masas de cinta de magnesio en un crisol y se pesó el óxido de magnesio formado.","Si se quemaran 3,6 g de magnesio, ¿qué masa de óxido de magnesio se esperaría?",["6,0 g", "5,0 g", "4,4 g", "7,2 g"],{"graf": {"tipo": "lin", "x": ["0,6", "1,2", "1,8", "2,4"], "y": [1, 2, 3, 4], "ex": "Masa de magnesio (g)", "ey": "Masa de MgO (g)"}});
T("estequiometria","N4","Un grupo hizo reaccionar 1 mol de magnesio con distintas cantidades de ácido clorhídrico y midió el hidrógeno desprendido (Mg + 2 HCl → MgCl₂ + H₂).","¿Qué explica que el ensayo 3 no produzca más hidrógeno que el ensayo 2?",["En los ensayos 2 y 3 el magnesio es el reactivo limitante", "En el ensayo 3 el ácido es el reactivo limitante", "El ácido deja de reaccionar si está muy concentrado", "La reacción solo produce 1 mol de H₂ con cualquier cantidad de reactivos"],{"tabla": [["Ensayo", "Magnesio (mol)", "HCl (mol)", "H₂ obtenido (mol)"], ["1", "1", "1", "0,5"], ["2", "1", "2", "1,0"], ["3", "1", "4", "1,0"]]});
T("elemento","N4","Un estudiante consulta el radio atómico de los elementos del tercer período de la tabla periódica, que va del sodio al cloro.","¿Qué tendencia muestran los datos y cómo se explica?",["El radio disminuye porque la carga nuclear aumenta y atrae más a los electrones", "El radio aumenta porque se agregan capas de electrones", "El radio disminuye porque los átomos pierden electrones", "El radio no cambia porque todos están en el mismo período"],{"tabla": [["Elemento", "Na", "Mg", "Al", "Si", "P", "S", "Cl"], ["Radio atómico (pm)", "186", "160", "143", "118", "110", "103", "99"]]});
T("enlace","N2","Un grupo probó tres sólidos del laboratorio, X, Y y Z, y registró su punto de fusión y si conducen la corriente eléctrica.","¿Cuál sustancia tiene enlace metálico y por qué?",["Y, porque conduce la corriente en estado sólido y fundido", "X, porque tiene un punto de fusión alto", "Z, porque se funde a baja temperatura", "X, porque conduce la corriente al fundirse"],{"tabla": [["Sustancia", "Punto de fusión (°C)", "Conduce sólida", "Conduce fundida"], ["X", "801", "No", "Sí"], ["Y", "1085", "Sí", "Sí"], ["Z", "114", "No", "No"]]});
T("atomo","N2","En un experimento parecido al de Rutherford se lanzaron 10 000 partículas positivas contra una lámina de oro muy delgada. Los datos son aproximados.","¿Qué conclusión sobre el átomo apoyan los resultados?",["Casi todo el átomo es espacio vacío y su carga positiva está en un núcleo pequeño", "El átomo es una esfera maciza con carga positiva repartida", "Los electrones están pegados al núcleo y desvían las partículas", "Todas las partículas rebotan, por eso el átomo es macizo"],{"tabla": [["Resultado", "Partículas"], ["Atraviesan sin desviarse", "9 900"], ["Se desvían un poco", "95"], ["Rebotan casi de frente", "5"]]});
T("modelos","N4","Un estudiante midió la temperatura a la que hierve el agua en cuatro lugares de distinta altitud y construyó un modelo con la tendencia.","Si propone que a 5 000 m el agua hierve a 110 °C, ¿cómo se evalúa su predicción?",["No concuerda con la tendencia: debería hervir por debajo de 90 °C", "Concuerda, porque a mayor altitud hierve a mayor temperatura", "Concuerda, porque el agua siempre hierve a más de 100 °C", "No se puede evaluar sin medir la masa del agua"],{"graf": {"tipo": "lin", "x": ["0", "1000", "2000", "3000"], "y": [100, 96.7, 93.3, 90], "ymin": 80, "ex": "Altitud (m)", "ey": "Temperatura de ebullición (°C)"}});
})();

/* ── Explicaciones propias (13-11-2026): para el Juego y la clave. La clave del mapa es el inicio del enunciado. ── */
(function(){var D=window.DOCENTE_DATOS;if(!D||!D.SABER)return;var E={"¿Qué relación muestra la gráfica entre la presión y el volumen": "La curva baja: 6 L a 1 atm, 3 L a 2 atm, 2 L a 3 atm y 1,5 L a 4 atm. Al multiplicar presión × volumen siempre da 6, así que son inversamente proporcionales (ley de Boyle). El volumen no baja 1 L por atmósfera: de 1 a 2 atm baja 3 L y de 3 a 4 atm solo 0,5 L.", "Ella propone que el volumen es directamente proporcional": "Al dividir cada volumen entre su temperatura (5 ÷ 250, 6 ÷ 300, 7 ÷ 350, 8 ÷ 400) siempre sale 0,02 L/K. Si el cociente es constante, hay proporcionalidad directa. Que las dos magnitudes suban no basta para afirmarlo, y la temperatura ya está en kelvin, como debe ser.", "Si la solución se enfría hasta 20 °C": "A 60 °C se disuelven 110 g de sal en 100 g de agua y a 20 °C solo 32 g. Lo que ya no cabe aparece como sólido: 110 − 32 = 78 g.", "Para obtener sal de una solución saturada": "La solubilidad de la sal casi no cambia con la temperatura (35,5 a 37,3 g): enfriar apenas haría precipitar un poco. Por eso se evapora el agua, como en las salinas de Manaure.", "¿Qué dato permite afirmar que el ácido acético": "Con la misma concentración, un ácido fuerte baja más el pH (HCl, 1,0) que uno débil (ácido acético, 2,9), porque el débil cede menos H⁺. Un pH menor que 7 lo tienen todos los ácidos y no sirve para comparar su fuerza.", "¿Qué lugar sugiere un mayor efecto de la lluvia ácida": "La lluvia sin contaminar tiene pH 5,6. La zona industrial (4,3) es la que más se aleja hacia abajo, y cada unidad de pH es un factor de 10 en acidez. Que el pH sea menor que 7 no distingue lugares: hasta la lluvia limpia es un poco ácida.", "¿Qué conclusión sustentan los datos?": "Al subir la temperatura de 350 a 550 °C el rendimiento baja de 45 % a 25 % y a 12 %, con la presión fija. Como la presión no se varió en el ensayo, estos datos no permiten decir nada sobre su efecto.", "Si se quemaran 3,6 g de magnesio": "La gráfica es una recta: la masa de MgO siempre es 1,67 veces la de Mg (1,0 ÷ 0,6 = 2,0 ÷ 1,2 = 1,67). Con 3,6 g de Mg: 3,6 × 1,67 = 6,0 g de MgO. Coincide con la estequiometría de 2 Mg + O₂ → 2 MgO: 48 g de Mg dan 80 g de MgO.", "¿Qué explica que el ensayo 3 no produzca más hidrógeno": "En el ensayo 2 las cantidades son las exactas (1 mol de Mg y 2 mol de HCl) y se forma 1 mol de H₂. En el 3 hay 4 mol de HCl, pero el magnesio sigue siendo 1 mol y se acaba: es el limitante, y el HCl sobrante no produce más H₂. En el ensayo 1, en cambio, el limitante es el HCl.", "¿Qué tendencia muestran los datos y cómo se explica?": "De Na a Cl cada átomo tiene un protón más y sus electrones siguen en la misma capa, así que el núcleo los atrae más fuerte y el radio baja de 186 a 99 pm. Dentro de un período no se agregan capas, y un átomo neutro no pierde electrones.", "¿Cuál sustancia tiene enlace metálico y por qué?": "Solo Y conduce la corriente aun siendo sólida, gracias a los electrones libres del enlace metálico. X conduce solo fundida (enlace iónico, como la sal, con 801 °C) y Z no conduce (compuesto covalente molecular, que se funde a baja temperatura).", "¿Qué conclusión sobre el átomo apoyan los resultados?": "Casi todas las partículas (9 900 de 10 000) atraviesan la lámina: el átomo es casi todo espacio vacío. Solo 5 rebotan de frente: hay un núcleo muy pequeño, denso y positivo. Un átomo macizo no dejaría pasar casi todas las partículas.", "Si propone que a 5 000 m el agua hierve a 110 °C": "La temperatura de ebullición baja unos 3,3 °C por cada 1 000 m. A 5 000 m daría cerca de 83,5 °C, menos de 90 °C. Predecir 110 °C contradice la tendencia: a mayor altitud hay menos presión y el agua hierve a menor temperatura."};
function r(q){var k;if(!q.tabla&&!q.graf)return;for(k in E){if(q.q&&q.q.indexOf(k)===0){q.exp=E[k];return;}}}
var S=D.SABER;if(Array.isArray(S))S.forEach(r);else for(var t in S)S[t].forEach(r);})();
