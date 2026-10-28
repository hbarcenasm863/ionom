/* ════════════════════════════════════════════════════════════════════════
   docente-datos.js — SOLO CONTENIDO (TEMAS, SABER, ABIERTAS) de
   docente.html. La lógica vive en assets/docente-app.js.

   Los grupos de banco.js (ox-bas, anhid, hidru, ac-hid, base, ac-ox,
   sal-bin, sal-ox, sal-ac, mol-masa, reaccion, balanceo), elemento/
   reactividad (de ELEMENTS/REACT_CHAINS en juego.html), estequiometria y
   la región «El átomo»: atomo (teoría atómica y estructura del átomo) y
   config-e (configuración electrónica).
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
      'La configuración explica la tabla periódica. El <strong>periodo</strong> es el nivel más alto ocupado. El <strong>bloque</strong> (s, p, d, f) es el subnivel donde entra el último electrón. Los <strong>electrones de valencia</strong> son los del último nivel. La <strong>configuración abreviada</strong> reemplaza la parte interna por el gas noble anterior: Na = [Ne] 3s¹. Los cationes pierden primero los electrones del nivel más alto: Fe²⁺ = [Ar] 3d⁶.'
    ],
    esquema: {
      raiz: 'Configuración electrónica',
      ramas: [
        {t:'Capacidad', items:['s: 2', 'p: 6', 'd: 10', 'f: 14', 'nivel: 2n²']},
        {t:'Reglas', items:['Aufbau (orden de Moeller)', 'Pauli (máx. 2 e⁻ por orbital, ↑↓)', 'Hund (uno por orbital antes de aparear)']},
        {t:'Lo que indica', items:['periodo = nivel más alto', 'bloque = subnivel del último e⁻', 'valencia = e⁻ del último nivel']}
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
 o:['Una sal binaria','Una sal oxigenada','Una sal ácida','Un óxido básico']},
/* ============================= OX-BAS (37 preguntas nuevas) ============================= */
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'El litio (Li) tiene valencia fija +1. ¿Cuál es la fórmula correcta de su óxido, ya simplificada?', o:['Li₂O','LiO','Li₂O₂','LiO₂']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'El potasio (K) tiene valencia fija +1, igual que el litio y el sodio. ¿Cuál es la fórmula correcta de su óxido?', o:['K₂O','KO','K₂O₂','KO₂']},
{tema:'ox-bas', c:'uso', k:'Q', ctx:'', q:'Al formar el óxido de calcio, el catión Ca²⁺ y el anión O²⁻ se combinan en proporción 1:1 (Ca₂O₂ se simplifica a CaO) porque ambas cargas tienen el mismo valor absoluto. Si el catión fuera Na⁺ en vez de Ca²⁺, manteniendo el mismo anión O²⁻, ¿qué fórmula resultaría?', o:['Na₂O','NaO','Na₂O₂','NaO₂']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'El rubidio (Rb), como los demás metales del grupo 1A, tiene valencia fija +1. ¿Cuál es la fórmula correcta de su óxido?', o:['Rb₂O','RbO','Rb₂O₂','RbO₂']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'El berilio (Be) tiene valencia fija +2, al igual que el magnesio y el calcio (grupo 2A). ¿Cuál es la fórmula correcta de su óxido?', o:['BeO','Be₂O','BeO₂','Be₂O₂']},
{tema:'ox-bas', c:'uso', k:'Q', ctx:'', q:'El estroncio (Sr) y el bario (Ba) son metales del grupo 2A con valencia fija +2, igual que el calcio. ¿Cuál es el nombre Tradicional correcto del óxido de bario (BaO)?', o:['óxido de bario','óxido bárico','óxido de dibario','anhídrido bárico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'El aluminio (Al) tiene valencia fija +3. Para que las cargas se equilibren con el anión óxido (O²⁻, carga −2), ¿cuántos iones de cada uno se necesitan en el óxido de aluminio?', o:['2 Al³⁺ y 3 O²⁻','3 Al³⁺ y 2 O²⁻','1 Al³⁺ y 1 O²⁻','3 Al³⁺ y 3 O²⁻']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'El zinc (Zn) tiene valencia fija +2. ¿Cuál es la fórmula correcta de su óxido?', o:['ZnO','Zn₂O','ZnO₂','Zn₂O₂']},
{tema:'ox-bas', c:'uso', k:'Q', ctx:'', q:'La plata (Ag) no es un metal alcalino, pero al igual que ellos tiene valencia fija +1. ¿Cuál es la fórmula correcta de su óxido, ya simplificada?', o:['Ag₂O','AgO','Ag₂O₂','AgO₂']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del óxido de hierro con fórmula FeO, sabiendo que el hierro tiene aquí su estado de oxidación menor (+2)?', o:['óxido ferroso','óxido férrico','óxido de hierro (III)','anhídrido ferroso']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del óxido de hierro con fórmula Fe₂O₃?', o:['trióxido de dihierro','óxido férrico','dióxido de hierro','óxido de hierro (III)']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del óxido de cobre con fórmula Cu₂O, sabiendo que el cobre tiene aquí su estado de oxidación menor (+1)?', o:['óxido de cobre (I)','óxido de cobre (II)','óxido cuproso (I)','monóxido de cobre']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del óxido de cobre con fórmula CuO, sabiendo que el cobre tiene aquí su estado de oxidación mayor (+2)?', o:['óxido cúprico','óxido cuproso','óxido de cobre (I)','anhídrido cúprico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del óxido de plomo con fórmula PbO?', o:['óxido de plomo (II)','óxido de plomo (IV)','óxido plumboso (II)','dióxido de plomo']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del óxido de plomo con fórmula PbO₂, sabiendo que el plomo tiene aquí su estado de oxidación mayor (+4)?', o:['óxido plúmbico','óxido plumboso','óxido de plomo (II)','anhídrido plúmbico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del óxido de estaño con fórmula SnO?', o:['óxido de estaño (II)','óxido de estaño (IV)','óxido estannoso (II)','dióxido de estaño']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del óxido de estaño con fórmula SnO₂, sabiendo que el estaño tiene aquí su estado de oxidación mayor (+4)?', o:['óxido estánnico','óxido estannoso','óxido de estaño (II)','anhídrido estánnico']},
{tema:'ox-bas', c:'ind', k:'CTS', ctx:'Las baterías recargables de níquel usadas en herramientas y equipos electrónicos en Colombia contienen compuestos de níquel en distintos estados de oxidación.', q:'¿Cuál es el nombre Stock correcto del óxido de níquel con fórmula NiO?', o:['óxido de níquel (II)','óxido de níquel (III)','óxido niqueloso (II)','trióxido de níquel']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del óxido de níquel con fórmula Ni₂O₃, sabiendo que el níquel tiene aquí su estado de oxidación mayor (+3)?', o:['óxido niquélico','óxido niqueloso','óxido de níquel (II)','anhídrido niquélico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del óxido de cobalto con fórmula CoO?', o:['óxido de cobalto (II)','óxido de cobalto (III)','óxido cobaltoso (II)','dióxido de cobalto']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del óxido de cobalto con fórmula Co₂O₃, sabiendo que el cobalto tiene aquí su estado de oxidación mayor (+3)?', o:['óxido cobáltico','óxido cobaltoso','óxido de cobalto (II)','anhídrido cobáltico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'El manganeso (Mn) puede tener varios estados de oxidación. ¿Cuál es el nombre Stock correcto del óxido con fórmula MnO, donde el Mn tiene EO +2?', o:['óxido de manganeso (II)','óxido de manganeso (IV)','óxido manganoso (II)','dióxido de manganeso']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del óxido de manganeso con fórmula MnO₂, donde el Mn tiene EO +4?', o:['óxido de manganeso (IV)','óxido de manganeso (II)','óxido mangánico (IV)','trióxido de manganeso']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del óxido de cromo con fórmula Cr₂O₃, sabiendo que el cromo actúa aquí como metal con EO +3?', o:['óxido crómico','óxido cromoso','óxido de cromo (II)','anhídrido crómico']},
{tema:'ox-bas', c:'ind', k:'CTS', ctx:'El dióxido de titanio (TiO₂) es un pigmento blanco muy usado en pinturas, plásticos y protectores solares vendidos en Colombia.', q:'¿Cuál es el nombre Tradicional correcto del óxido con fórmula TiO₂?', o:['óxido titánico','óxido titanoso','óxido de titanio (II)','anhídrido titánico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'El vanadio (V) puede tener distintos estados de oxidación. ¿Cuál es el nombre Stock correcto del óxido con fórmula V₂O₅, donde el V tiene EO +5?', o:['óxido de vanadio (V)','óxido de vanadio (II)','óxido vanádico (V)','pentaóxido de vanadio']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del óxido de vanadio con fórmula VO, donde el V tiene EO +2 (el menor de sus estados de oxidación comunes)?', o:['óxido de vanadio (II)','óxido de vanadio (V)','óxido vanadioso (II)','dióxido de vanadio']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del óxido de vanadio con fórmula V₂O₃, donde el V tiene EO +3?', o:['óxido de vanadio (III)','óxido de vanadio (V)','óxido vanadioso (III)','trióxido de vanadio']},
{tema:'ox-bas', c:'uso', k:'Q', ctx:'', q:'El bismuto (Bi) forma un solo óxido común, con EO +3, por lo que su nombre Tradicional no necesita sufijo -oso/-ico. ¿Cuál es el nombre Tradicional correcto del óxido con fórmula Bi₂O₃?', o:['óxido de bismuto','óxido bismútico','óxido de bismuto (III)','anhídrido de bismuto']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del óxido de mercurio con fórmula HgO, donde el Hg tiene EO +2?', o:['óxido de mercurio (II)','óxido de mercurio (I)','óxido mercúrico (II)','dióxido de mercurio']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del óxido de mercurio con fórmula Hg₂O, donde el Hg tiene EO +1?', o:['óxido de mercurio (I)','óxido de mercurio (II)','óxido mercurioso (I)','monóxido de mercurio']},
{tema:'ox-bas', c:'ind', k:'CTS', ctx:'La joyería artesanal en Mompox (Bolívar), reconocida por su filigrana en oro y plata, debe prevenir la oxidación superficial de las piezas metálicas.', q:'¿Cuál es el nombre Stock correcto del óxido de oro con fórmula Au₂O, donde el Au tiene EO +1?', o:['óxido de oro (I)','óxido de oro (III)','óxido auroso (I)','monóxido de oro']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del óxido de oro con fórmula Au₂O₃, sabiendo que el Au tiene aquí su estado de oxidación mayor (+3)?', o:['óxido áurico','óxido auroso','óxido de oro (I)','anhídrido áurico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del óxido de platino con fórmula PtO, donde el Pt tiene EO +2?', o:['óxido de platino (II)','óxido de platino (IV)','óxido platinoso (II)','dióxido de platino']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del óxido de platino con fórmula PtO₂, sabiendo que el Pt tiene aquí su estado de oxidación mayor (+4)?', o:['óxido platínico','óxido platinoso','óxido de platino (II)','anhídrido platínico']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del óxido de cromo con fórmula CrO, donde el Cr tiene EO +2 (el menor)?', o:['óxido de cromo (II)','óxido de cromo (III)','óxido cromoso (II)','dióxido de cromo']},
{tema:'ox-bas', c:'exp', k:'Q', ctx:'', q:'El cadmio (Cd) tiene valencia fija +2, igual que el zinc. ¿Cuál es la fórmula correcta de su óxido?', o:['CdO','Cd₂O','CdO₂','Cd₂O₂']},

/* ============================= ANHID (37 preguntas nuevas) ============================= */
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula CO₂, sabiendo que el carbono tiene aquí estado de oxidación +4?', o:['anhídrido carbónico','anhídrido carbonoso','ácido carbónico','óxido de carbono (IV)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula SO₃, sabiendo que el azufre tiene aquí su estado de oxidación mayor (+6)?', o:['anhídrido sulfúrico','anhídrido sulfuroso','ácido sulfúrico','óxido de azufre (IV)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula SO₂, sabiendo que el azufre tiene aquí su estado de oxidación menor (+4)?', o:['anhídrido sulfuroso','anhídrido sulfúrico','ácido sulfuroso','óxido de azufre (VI)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula N₂O₅, sabiendo que el nitrógeno tiene aquí su estado de oxidación mayor (+5)?', o:['anhídrido nítrico','anhídrido nitroso','ácido nítrico','pentaóxido de nitrógeno']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula N₂O₃, sabiendo que el nitrógeno tiene aquí un estado de oxidación menor (+3)?', o:['anhídrido nitroso','anhídrido nítrico','anhídrido hiponitroso','ácido nitroso']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'El cloro puede tener hasta 4 estados de oxidación distintos en sus anhídridos. ¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula Cl₂O, donde el Cl tiene el EO más bajo posible (+1)?', o:['anhídrido hipocloroso','anhídrido cloroso','anhídrido clórico','anhídrido perclórico']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula P₂O₅, sabiendo que el fósforo tiene aquí su estado de oxidación mayor (+5)?', o:['anhídrido fosfórico','anhídrido fosforoso','ácido fosfórico','pentaóxido de fósforo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula P₂O₃, sabiendo que el fósforo tiene aquí un estado de oxidación menor (+3)?', o:['anhídrido fosforoso','anhídrido fosfórico','ácido fosforoso','trióxido de fósforo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'Dentro de la serie del cloro, ¿cuál es el nombre Tradicional correcto del anhídrido con fórmula Cl₂O₃ (Cl con EO +3)?', o:['anhídrido cloroso','anhídrido hipocloroso','anhídrido clórico','anhídrido perclórico']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'Dentro de la serie del cloro, ¿cuál es el nombre Tradicional correcto del anhídrido con fórmula Cl₂O₅ (Cl con EO +5)?', o:['anhídrido clórico','anhídrido cloroso','anhídrido hipocloroso','anhídrido perclórico']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'El cloro alcanza su estado de oxidación más alto (+7) en el anhídrido con fórmula Cl₂O₇. ¿Cuál es su nombre Tradicional correcto?', o:['anhídrido perclórico','anhídrido clórico','anhídrido cloroso','anhídrido hipocloroso']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula As₂O₃, sabiendo que el arsénico tiene aquí un estado de oxidación menor (+3)?', o:['anhídrido arsenioso','anhídrido arsénico','ácido arsenioso','trióxido de arsénico']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula As₂O₅, sabiendo que el arsénico tiene aquí su estado de oxidación mayor (+5)?', o:['anhídrido arsénico','anhídrido arsenioso','ácido arsénico','pentaóxido de arsénico']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula Br₂O, donde el bromo tiene el EO más bajo posible (+1)?', o:['anhídrido hipobromoso','anhídrido bromoso','anhídrido brómico','anhídrido perbrómico']},
{tema:'anhid', c:'ind', k:'CTS', ctx:'El silicio (Si) es, después del oxígeno, el elemento más abundante en la corteza terrestre; en Colombia es la base de la industria del vidrio y la cerámica.', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula SiO₂, el único óxido común del silicio?', o:['anhídrido silícico','anhídrido silicioso','ácido silícico','dióxido de silicio (IV)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula N₂O, donde el nitrógeno tiene el EO más bajo de la serie (+1)?', o:['anhídrido hiponitroso','anhídrido nitroso','anhídrido nítrico','monóxido de nitrógeno']},
{tema:'anhid', c:'uso', k:'Q', ctx:'', q:'El manganeso es un metal (ya lo viste como catión en el tema de óxidos básicos), pero en el compuesto Mn₂O₇ actúa como si fuera un no metal, porque alcanza su estado de oxidación máximo (+7). ¿Cuál es el nombre Tradicional correcto de este anhídrido?', o:['anhídrido permangánico','anhídrido mangánico','óxido de manganeso (VII)','anhídrido hipomangánico']},
{tema:'anhid', c:'uso', k:'Q', ctx:'', q:'Igual que el manganeso, el cromo puede actuar como no metal en su estado de oxidación más alto (+6), formando el anhídrido CrO₃. ¿Cuál es su nombre Tradicional correcto?', o:['anhídrido crómico','anhídrido cromoso','óxido de cromo (VI)','anhídrido hipocrómico']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula I₂O₅, sabiendo que el yodo tiene aquí estado de oxidación +5?', o:['anhídrido yódico','anhídrido yodoso','ácido yódico','pentaóxido de yodo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula SeO₂, sabiendo que el selenio tiene aquí un estado de oxidación menor (+4)?', o:['anhídrido selenioso','anhídrido selénico','ácido selenioso','dióxido de selenio (IV)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula SeO₃, sabiendo que el selenio tiene aquí su estado de oxidación mayor (+6)?', o:['anhídrido selénico','anhídrido selenioso','ácido selénico','trióxido de selenio (VI)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del anhídrido con fórmula TeO₂, sabiendo que el telurio tiene aquí un estado de oxidación menor (+4)?', o:['anhídrido teluroso','anhídrido telúrico','ácido teluroso','dióxido de telurio (IV)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula Br₂O₃?', o:['óxido de bromo (III)','óxido de bromo (V)','anhídrido bromoso (III)','trióxido de bromo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula Br₂O₅?', o:['óxido de bromo (V)','óxido de bromo (VII)','anhídrido brómico (V)','pentaóxido de bromo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula Br₂O₇, donde el bromo alcanza su EO máximo (+7)?', o:['óxido de bromo (VII)','óxido de bromo (III)','anhídrido perbrómico (VII)','heptóxido de bromo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula I₂O, donde el yodo tiene el EO más bajo posible (+1)?', o:['óxido de yodo (I)','óxido de yodo (III)','anhídrido hipoyodoso (I)','monóxido de yodo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula I₂O₃?', o:['óxido de yodo (III)','óxido de yodo (I)','anhídrido yodoso (III)','trióxido de yodo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula I₂O₇, donde el yodo alcanza su EO máximo (+7)?', o:['óxido de yodo (VII)','óxido de yodo (V)','anhídrido peryódico (VII)','heptóxido de yodo']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula Br₂O, donde el bromo tiene el EO más bajo posible (+1)?', o:['óxido de bromo (I)','óxido de bromo (III)','anhídrido hipobromoso (I)','monóxido de bromo (I)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula TeO₃, donde el telurio tiene su estado de oxidación mayor (+6)?', o:['óxido de telurio (VI)','óxido de telurio (IV)','anhídrido telúrico (VI)','trióxido de telurio (VI)']},
{tema:'anhid', c:'ind', k:'CTS', ctx:'El bórax (borato de sodio) es un mineral usado en la industria cerámica de Ráquira (Boyacá) y en la fabricación de vidrio en Colombia; se obtiene a partir de compuestos de boro.', q:'¿Cuál es el nombre Stock correcto del anhídrido con fórmula B₂O₃, el óxido de boro usado en estos procesos?', o:['óxido de boro (III)','óxido de boro (V)','anhídrido bórico (III)','trióxido de boro (III)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del anhídrido con fórmula SO₃?', o:['trióxido de azufre','dióxido de azufre','anhídrido sulfúrico','óxido de azufre (VI)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del anhídrido con fórmula N₂O₅?', o:['pentaóxido de dinitrógeno','trióxido de dinitrógeno','anhídrido nítrico','óxido de nitrógeno (V)']},
{tema:'anhid', c:'uso', k:'Q', ctx:'', q:'De los 4 anhídridos de cloro (Cl₂O, Cl₂O₃, Cl₂O₅, Cl₂O₇), ¿cuál usa el prefijo "per-" en su nombre Tradicional, por tener el estado de oxidación más alto de toda la serie?', o:['Cl₂O₇ (anhídrido perclórico)','Cl₂O₅ (anhídrido clórico)','Cl₂O₃ (anhídrido cloroso)','Cl₂O (anhídrido hipocloroso)']},
{tema:'anhid', c:'uso', k:'Q', ctx:'', q:'De los 4 anhídridos de cloro (Cl₂O, Cl₂O₃, Cl₂O₅, Cl₂O₇), ¿cuál usa el prefijo "hipo-" en su nombre Tradicional, por tener el estado de oxidación más bajo de toda la serie?', o:['Cl₂O (anhídrido hipocloroso)','Cl₂O₃ (anhídrido cloroso)','Cl₂O₅ (anhídrido clórico)','Cl₂O₇ (anhídrido perclórico)']},
{tema:'anhid', c:'exp', k:'Q', ctx:'', q:'En el anhídrido N₂O₅, ¿cuál es el estado de oxidación del nitrógeno?', o:['+5','+3','+1','+4']},
{tema:'anhid', c:'ind', k:'CTS', ctx:'Los fertilizantes fosfatados usados en la agricultura colombiana (papa, flores, café) se producen a partir de ácido fosfórico.', q:'¿Qué obtienes si agregas agua al anhídrido fosfórico (P₂O₅ + H₂O)?', o:['Ácido fosfórico (H₃PO₄)','Ácido fosforoso (H₃PO₃)','Hidróxido de fósforo','Fosfato de hidrógeno']},

/* ============================= HIDRU (38 preguntas nuevas) ============================= */
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'El potasio (K) tiene valencia fija +1. ¿Cuál es la fórmula correcta de su hidruro?', o:['KH','K₂H','KH₂','K₂H₂']},
{tema:'hidru', c:'uso', k:'Q', ctx:'', q:'¿Por qué el nombre del hidruro de sodio (NaH) es igual en los sistemas Tradicional, Stock y Sistemático?', o:['Porque el sodio tiene valencia fija (+1), no necesita sufijo ni número romano que distinga valencias','Porque el sodio es un no metal','Porque el hidrógeno en los hidruros tiene EO +1, igual que en el agua','Porque los hidruros metálicos no tienen nombre Sistemático']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'El litio (Li) tiene valencia fija +1, igual que el sodio y el potasio. ¿Cuál es la fórmula correcta de su hidruro?', o:['LiH','Li₂H','LiH₂','Li₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'El rubidio (Rb) tiene valencia fija +1 (grupo 1A). ¿Cuál es la fórmula correcta de su hidruro?', o:['RbH','Rb₂H','RbH₂','Rb₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'El cesio (Cs) tiene valencia fija +1 (grupo 1A), igual que el rubidio. ¿Cuál es la fórmula correcta de su hidruro?', o:['CsH','Cs₂H','CsH₂','Cs₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del hidruro de calcio, con fórmula CaH₂?', o:['dihidruro de calcio','hidruro de calcio','trihidruro de calcio','dihidruro de dicalcio']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'El magnesio (Mg) tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidruro?', o:['MgH₂','MgH','Mg₂H','Mg₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del hidruro de magnesio, con fórmula MgH₂?', o:['dihidruro de magnesio','hidruro de magnesio','trihidruro de magnesio','dihidruro de dimagnesio']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'El bario (Ba) tiene valencia fija +2 (grupo 2A). ¿Cuál es la fórmula correcta de su hidruro?', o:['BaH₂','BaH','Ba₂H','Ba₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'El estroncio (Sr) tiene valencia fija +2 (grupo 2A), igual que el calcio, el magnesio y el bario. ¿Cuál es la fórmula correcta de su hidruro?', o:['SrH₂','SrH','Sr₂H','Sr₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del hidruro de estroncio, con fórmula SrH₂?', o:['dihidruro de estroncio','hidruro de estroncio','trihidruro de estroncio','dihidruro de diestroncio']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'El zinc (Zn) tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidruro?', o:['ZnH₂','ZnH','Zn₂H','Zn₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del hidruro de zinc, con fórmula ZnH₂?', o:['dihidruro de zinc','hidruro de zinc','trihidruro de zinc','dihidruro de dizinc']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'El aluminio (Al) tiene valencia fija +3. ¿Cuál es la fórmula correcta de su hidruro?', o:['AlH₃','AlH','AlH₂','Al₂H₃']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto del hidruro de aluminio, con fórmula AlH₃?', o:['trihidruro de aluminio','hidruro de aluminio','dihidruro de aluminio','trihidruro de dialuminio']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'El berilio (Be) tiene valencia fija +2 (grupo 2A), igual que el magnesio. ¿Cuál es la fórmula correcta de su hidruro?', o:['BeH₂','BeH','Be₂H','Be₂H₂']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del hidruro de hierro con fórmula FeH₂, sabiendo que el hierro tiene aquí su estado de oxidación menor (+2)?', o:['hidruro ferroso','hidruro férrico','hidruro de hierro (III)','anhídrido ferroso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del hidruro de hierro con fórmula FeH₃, sabiendo que el hierro tiene aquí su estado de oxidación mayor (+3)?', o:['hidruro férrico','hidruro ferroso','hidruro de hierro (II)','anhídrido férrico']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del hidruro de hierro con fórmula FeH₂?', o:['hidruro de hierro (II)','hidruro de hierro (III)','hidruro ferroso (II)','dihidruro de hierro (II)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del hidruro de hierro con fórmula FeH₃?', o:['hidruro de hierro (III)','hidruro de hierro (II)','hidruro férrico (III)','trihidruro de hierro (III)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del hidruro de cobre con fórmula CuH, sabiendo que el cobre tiene aquí su estado de oxidación menor (+1)?', o:['hidruro cuproso','hidruro cúprico','hidruro de cobre (II)','anhídrido cuproso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del hidruro de cobre con fórmula CuH?', o:['hidruro de cobre (I)','hidruro de cobre (II)','hidruro cuproso (I)','monohidruro de cobre (I)']},
{tema:'hidru', c:'ind', k:'CTS', ctx:'Las baterías recargables de níquel (NiMH), usadas en herramientas eléctricas en Colombia, almacenan hidrógeno en forma de hidruros metálicos.', q:'¿Cuál es el nombre Tradicional correcto del hidruro de níquel con fórmula NiH₂, sabiendo que el níquel tiene aquí su estado de oxidación menor (+2)?', o:['hidruro niqueloso','hidruro niquélico','hidruro de níquel (III)','anhídrido niqueloso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del hidruro de níquel con fórmula NiH₂?', o:['hidruro de níquel (II)','hidruro de níquel (III)','hidruro niqueloso (II)','dihidruro de níquel (II)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del hidruro de cobalto con fórmula CoH₂, sabiendo que el cobalto tiene aquí su estado de oxidación menor (+2)?', o:['hidruro cobaltoso','hidruro cobáltico','hidruro de cobalto (III)','anhídrido cobaltoso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del hidruro de cobalto con fórmula CoH₂?', o:['hidruro de cobalto (II)','hidruro de cobalto (III)','hidruro cobaltoso (II)','dihidruro de cobalto (II)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del hidruro de manganeso con fórmula MnH₂, sabiendo que el manganeso tiene aquí su estado de oxidación menor habitual (+2)?', o:['hidruro manganoso','hidruro mangánico','hidruro de manganeso (IV)','anhídrido manganoso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del hidruro de manganeso con fórmula MnH₂?', o:['hidruro de manganeso (II)','hidruro de manganeso (IV)','hidruro manganoso (II)','dihidruro de manganeso (II)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del hidruro de cromo con fórmula CrH₂, sabiendo que el cromo tiene aquí su estado de oxidación menor (+2)?', o:['hidruro cromoso','hidruro crómico','hidruro de cromo (III)','anhídrido cromoso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del hidruro de cromo con fórmula CrH₃, sabiendo que el cromo tiene aquí su estado de oxidación mayor (+3)?', o:['hidruro crómico','hidruro cromoso','hidruro de cromo (II)','anhídrido crómico']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del hidruro de cromo con fórmula CrH₂?', o:['hidruro de cromo (II)','hidruro de cromo (III)','hidruro cromoso (II)','dihidruro de cromo (II)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del hidruro de cromo con fórmula CrH₃?', o:['hidruro de cromo (III)','hidruro de cromo (II)','hidruro crómico (III)','trihidruro de cromo (III)']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del hidruro de plomo con fórmula PbH₂, sabiendo que el plomo tiene aquí su estado de oxidación menor (+2)?', o:['hidruro plumboso','hidruro plúmbico','hidruro de plomo (IV)','anhídrido plumboso']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del hidruro de plomo con fórmula PbH₂?', o:['hidruro de plomo (II)','hidruro de plomo (IV)','hidruro plumboso (II)','dihidruro de plomo (II)']},
{tema:'hidru', c:'uso', k:'Q', ctx:'', q:'De los hidruros de hierro FeH₂ y FeH₃, ¿cuál usa el sufijo -oso en su nombre Tradicional, por representar la valencia MENOR del hierro?', o:['FeH₂ (hidruro ferroso)','FeH₃ (hidruro férrico)','Ambos usan el mismo sufijo','Ninguno usa sufijo -oso/-ico']},
{tema:'hidru', c:'uso', k:'Q', ctx:'', q:'De los hidruros de cromo CrH₂ y CrH₃, ¿cuál usa el sufijo -ico en su nombre Tradicional, por representar la valencia MAYOR del cromo?', o:['CrH₃ (hidruro crómico)','CrH₂ (hidruro cromoso)','Ambos usan el mismo sufijo','Ninguno usa sufijo -oso/-ico']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el estado de oxidación del hidrógeno en el hidruro de aluminio (AlH₃)?', o:['-1','+1','-3','+3']},
{tema:'hidru', c:'exp', k:'Q', ctx:'', q:'El hierro (Fe) puede tener valencia +2 o +3. Si en su hidruro el hierro tiene valencia +3, ¿cuál es la fórmula correcta?', o:['FeH₃','FeH₂','Fe₃H','Fe₂H₃']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula HF disuelto en agua?', o:['ácido fluorhídrico','ácido flúorico','fluoruro de hidrógeno (en disolución)','ácido fluoroso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de HF en estado puro o gaseoso?', o:['fluoruro de hidrógeno','ácido fluorhídrico','fluorato de hidrógeno','monofluoruro de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'', q:'¿Cómo se llama el anión que da nombre al ácido fluorhídrico (HF)?', o:['fluoruro','flúor','fluorito','fluorano']},
{tema:'ac-hid', c:'ind', k:'CTS', ctx:'El ácido fluorhídrico se usa en la industria del vidrio para grabar y esmerilar superficies, ya que es de los pocos ácidos capaces de disolver el dióxido de silicio.', q:'¿Cuál es la fórmula del ácido que graba el vidrio en este proceso industrial?', o:['HF','HCl','H₂SO₄','HNO₃']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de HCl en estado puro o gaseoso?', o:['cloruro de hidrógeno','ácido clorhídrico','clorato de hidrógeno','monocloruro de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'', q:'¿Cuál de los siguientes nombres corresponde en realidad a un ácido oxácido y NO a un ácido hídrico, aunque suene parecido al nombre tradicional del HCl?', o:['Ácido clórico','Ácido clorhídrico','Cloruro de hidrógeno','Ácido muriático']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es la fórmula correcta del ácido bromhídrico?', o:['HBr','HBr₂','H₂Br','BrH₂']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'', q:'¿Cómo se llama el anión que da nombre al ácido bromhídrico (HBr)?', o:['bromuro','bromo','bromato','bromito']},
{tema:'ac-hid', c:'ind', k:'CTS', ctx:'En procesos industriales de síntesis orgánica en Colombia se usa ácido bromhídrico como reactivo para introducir átomos de bromo en ciertas moléculas.', q:'¿Cuál es el nombre Sistemático (estado puro o gaseoso) del reactivo HBr mencionado?', o:['bromuro de hidrógeno','ácido bromhídrico','bromato de hidrógeno','dibromuro de hidrógeno']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula HI disuelto en agua?', o:['ácido yodhídrico','ácido yódico','yoduro de hidrógeno (en disolución)','ácido yodoso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de HI en estado puro o gaseoso?', o:['yoduro de hidrógeno','ácido yodhídrico','yodato de hidrógeno','monoyoduro de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'', q:'¿Cómo se llama el anión que da nombre al ácido yodhídrico (HI)?', o:['yoduro','yodo','yodito','yodano']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'Entre el ácido bromhídrico (HBr) y el ácido sulfhídrico (H₂S), ¿cuál de los dos aniones tiene mayor carga negativa?', o:['El sulfuro (S²⁻), con carga -2','El bromuro (Br⁻), con carga -2','Ambos tienen la misma carga','El bromuro, porque el bromo es más electronegativo']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula H₂S disuelto en agua?', o:['ácido sulfhídrico','ácido sulfúrico','sulfuro de hidrógeno (en disolución)','ácido sulfuroso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de H₂S en estado puro o gaseoso?', o:['sulfuro de hidrógeno','ácido sulfhídrico','sulfato de hidrógeno','monosulfuro de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'', q:'En el ácido sulfhídrico (H₂S), ¿cuál es el estado de oxidación del hidrógeno?', o:['+1','-1','+2','0']},
{tema:'ac-hid', c:'ind', k:'CTS', ctx:'El característico olor a "huevo podrido" que a veces se percibe cerca de aguas residuales o pozos sépticos en descomposición se debe a un gas que, disuelto en agua, es un ácido hídrico.', q:'¿Cuál es la fórmula de ese gas?', o:['H₂S','HCl','SO₂','NH₃']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'', q:'¿Cómo se llama el anión que da nombre al ácido sulfhídrico (H₂S)?', o:['sulfuro','sulfato','sulfito','azufre']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula H₂Se disuelto en agua?', o:['ácido selenhídrico','ácido selénico','seleniuro de hidrógeno (en disolución)','ácido selenioso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de H₂Se en estado puro o gaseoso?', o:['seleniuro de hidrógeno','ácido selenhídrico','seleniato de hidrógeno','monoseleniuro de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'', q:'¿Cómo se llama el anión que da nombre al ácido selenhídrico (H₂Se)?', o:['seleniuro','selenato','selenito','selenio']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'Entre el ácido yodhídrico (HI) y el ácido selenhídrico (H₂Se), ¿cuál de los dos aniones tiene carga -2?', o:['El seleniuro (Se²⁻)','El yoduro (I⁻)','Ninguno, ambos tienen carga -1','Ambos tienen carga -2']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula HCN disuelto en agua?', o:['ácido cianhídrico','ácido ciánico','cianuro de hidrógeno (en disolución)','ácido cianoso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de HCN en estado puro o gaseoso?', o:['cianuro de hidrógeno','ácido cianhídrico','cianato de hidrógeno','dicianuro de hidrógeno']},
{tema:'ac-hid', c:'ind', k:'CTS', ctx:'En algunos procesos de minería de oro en Colombia se emplean soluciones de cianuro para separar el metal de la roca; el anión cianuro (CN⁻) es la base del ácido hídrico de este tema.', q:'¿Cuál es el nombre Tradicional del ácido formado por hidrógeno y el anión cianuro?', o:['Ácido cianhídrico','Ácido ciánico','Ácido cianoso','Cianato de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'', q:'¿Cómo se llama el anión que da nombre al ácido cianhídrico (HCN)?', o:['cianuro','ciánico','cianato','cianito']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'En el ácido cianhídrico (HCN), ¿cuál es el estado de oxidación del hidrógeno?', o:['+1','-1','+3','0']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula H₂Te disuelto en agua?', o:['ácido telurhídrico','ácido telúrico','telururo de hidrógeno (en disolución)','ácido teluroso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de H₂Te en estado puro o gaseoso?', o:['telururo de hidrógeno','ácido telurhídrico','telurato de hidrógeno','monotelururo de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'', q:'¿Cómo se llama el anión que da nombre al ácido telurhídrico (H₂Te)?', o:['telururo','telurato','teluroso','telurio']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'Entre el ácido clorhídrico (HCl) y el ácido telurhídrico (H₂Te), ¿cuál de los dos necesita 2 átomos de hidrógeno para equilibrar la carga de su anión?', o:['El ácido telurhídrico, porque el telururo tiene carga -2','El ácido clorhídrico, porque el cloruro tiene carga -2','Ambos necesitan 2 átomos de hidrógeno','Ninguno, los dos necesitan solo 1 átomo de hidrógeno']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del ácido con fórmula HN₃ disuelto en agua?', o:['ácido hidrazoico','ácido nítrico','azida de hidrógeno (en disolución)','ácido nitroso']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de HN₃ en estado puro o gaseoso?', o:['azida de hidrógeno','ácido hidrazoico','nitrato de hidrógeno','trinitruro de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'', q:'¿Cómo se llama el anión que da nombre al ácido hidrazoico (HN₃)?', o:['azida','nitruro','nitrato','nitrito']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál de las siguientes fórmulas corresponde al ácido fluorhídrico?', o:['HF','F₂','HF₂','H₂F']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál de las siguientes fórmulas corresponde al ácido sulfhídrico?', o:['H₂S','HS','H₂S₂','HS₂']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'', q:'¿Qué tienen en común los nombres Tradicionales de todos los ácidos hídricos (fluorhídrico, clorhídrico, sulfhídrico, etc.)?', o:['Todos terminan en el sufijo "-hídrico"','Todos terminan en el sufijo "-ico"','Todos empiezan con la palabra "anhídrido"','Todos incluyen un número romano']},
{tema:'ac-hid', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de H₂Se, HCl y HF, respectivamente, en estado puro o gaseoso?', o:['Seleniuro de hidrógeno, cloruro de hidrógeno, fluoruro de hidrógeno','Ácido selenhídrico, ácido clorhídrico, ácido fluorhídrico','Selenato de hidrógeno, clorato de hidrógeno, fluorato de hidrógeno','Seleniuro de hidrógeno, clorito de hidrógeno, fluorito de hidrógeno']},
{tema:'ac-hid', c:'uso', k:'Q', ctx:'', q:'Si un ácido hídrico se nombra en estado puro como "yoduro de hidrógeno", ¿cuál es su nombre Tradicional cuando está disuelto en agua?', o:['Ácido yodhídrico','Ácido yódico','Ácido yodoso','Yodato de hidrógeno']},

{tema:'base', c:'exp', k:'Q', ctx:'', q:'El rubidio tiene valencia fija +1. ¿Cuál es la fórmula correcta de su hidróxido?', o:['RbOH','Rb(OH)₂','RbOH₂','Rb₂OH']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El estroncio tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidróxido?', o:['Sr(OH)₂','SrOH','Sr(OH)₃','Sr₂OH']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El aluminio tiene valencia fija +3. ¿Cuál es la fórmula correcta de su hidróxido?', o:['Al(OH)₃','Al(OH)₂','AlOH₃','Al₃OH']},
{tema:'base', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del hidróxido con fórmula Ba(OH)₂?', o:['hidróxido de bario','hidróxido bárico','dihidróxido de bario','hidróxido de boro']},
{tema:'base', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático correcto del hidróxido con fórmula Al(OH)₃?', o:['trihidróxido de aluminio','hidróxido de aluminio (III)','hidróxido alumínico','dihidróxido de aluminio']},
{tema:'base', c:'ind', k:'CTS', ctx:'En algunos acueductos municipales colombianos se usa hidróxido de calcio para ajustar el pH del agua antes de distribuirla, mientras que el hidróxido de sodio se usa en la industria para fabricar jabón y papel.', q:'¿Cuál es la fórmula del hidróxido de sodio usado en estos procesos industriales?', o:['NaOH','Na(OH)₂','NaO','Na₂OH']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El hierro tiene dos valencias posibles: +2 y +3. ¿Cuál es el nombre Tradicional del hidróxido Fe(OH)₂?', o:['hidróxido ferroso','hidróxido férrico','hidróxido de hierro','hidróxido ferroico']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El hierro tiene dos valencias posibles: +2 y +3. ¿Cuál es el nombre Tradicional del hidróxido Fe(OH)₃?', o:['hidróxido férrico','hidróxido ferroso','hidróxido de hierro','hidróxido ferroico']},
{tema:'base', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el nombre Stock correcto del hidróxido Fe(OH)₃?', o:['hidróxido de hierro (III)','hidróxido de hierro (II)','hidróxido férrico (III)','trihidróxido de hierro (III)']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El cobre tiene dos valencias posibles: +1 y +2. ¿Cuál es el nombre Tradicional del hidróxido CuOH?', o:['hidróxido cuproso','hidróxido cúprico','hidróxido de cobre','hidróxido cuproico']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El cobre tiene dos valencias posibles: +1 y +2. ¿Cuál es el nombre Tradicional del hidróxido Cu(OH)₂?', o:['hidróxido cúprico','hidróxido cuproso','hidróxido de cobre','hidróxido cuproico']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El níquel tiene dos valencias posibles: +2 y +3. ¿Cuál es el nombre Tradicional del hidróxido Ni(OH)₃?', o:['hidróxido niquélico','hidróxido niqueloso','hidróxido de níquel','hidróxido niquelítico']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El cobalto tiene dos valencias posibles: +2 y +3. ¿Cuál es el nombre Tradicional del hidróxido Co(OH)₂?', o:['hidróxido cobaltoso','hidróxido cobáltico','hidróxido de cobalto','hidróxido cobaltítico']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El plomo tiene dos valencias posibles: +2 y +4. ¿Cuál es el nombre Tradicional del hidróxido Pb(OH)₄?', o:['hidróxido plúmbico','hidróxido plumboso','hidróxido de plomo','hidróxido plumboico']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El estaño tiene dos valencias posibles: +2 y +4. ¿Cuál es el nombre Tradicional del hidróxido Sn(OH)₂?', o:['hidróxido estannoso','hidróxido estánnico','hidróxido de estaño','hidróxido estañoico']},
{tema:'base', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el nombre Sistemático correcto del hidróxido Sn(OH)₄?', o:['tetrahidróxido de estaño','hidróxido de estaño (IV)','hidróxido estánnico','dihidróxido de estaño']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El manganeso puede tener EO +2 en este hidróxido. ¿Cuál es el nombre Tradicional de Mn(OH)₂?', o:['hidróxido manganoso','hidróxido mangánico','hidróxido de manganeso','hidróxido mangánico (II)']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El cromo tiene dos valencias posibles en sus hidróxidos: +2 y +3. ¿Cuál es el nombre Tradicional de Cr(OH)₃?', o:['hidróxido crómico','hidróxido cromoso','hidróxido de cromo','hidróxido cromítico']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El oro tiene dos valencias posibles: +1 y +3. ¿Cuál es el nombre Tradicional del hidróxido Au(OH)₃?', o:['hidróxido áurico','hidróxido auroso','hidróxido de oro','hidróxido auroico']},
{tema:'base', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del hidróxido con fórmula Hg(OH)₂?', o:['hidróxido mercúrico','hidróxido mercurioso','hidróxido de mercurio','hidróxido mercurial']},
{tema:'base', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional correcto del hidróxido con fórmula HgOH?', o:['hidróxido mercurioso','hidróxido mercúrico','hidróxido de mercurio','hidróxido mercurital']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El zinc tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidróxido?', o:['Zn(OH)₂','ZnOH','Zn(OH)₃','Zn₂OH']},
{tema:'base', c:'uso', k:'Q', ctx:'', q:'¿Por qué el hidróxido de zinc, Zn(OH)₂, NO necesita un sufijo -oso/-ico en su nombre Tradicional?', o:['Porque el zinc tiene valencia fija, no tiene más de una posible','Porque el zinc es un no metal','Porque el OH⁻ nunca lleva sufijo','Porque el zinc siempre forma óxidos, no hidróxidos']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'¿Cuál es la fórmula correcta del hidróxido de plata, sabiendo que la plata tiene valencia fija +1?', o:['AgOH','Ag(OH)₂','AgOH₂','Ag₂OH']},
{tema:'base', c:'ind', k:'CTS', ctx:'El hidróxido de amonio (NH₄OH) se forma al disolver amoníaco gaseoso (NH₃) en agua, y se usa en algunos productos de limpieza del hogar en Colombia.', q:'¿Qué catión forma el hidróxido de amonio, en lugar de un catión metálico simple?', o:['El catión amonio (NH₄⁺)','El catión nitrógeno (N³⁺)','El catión hidronio (H₃O⁺)','El catión hidrazina (N₂H₅⁺)']},
{tema:'base', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el nombre correcto del hidróxido con fórmula NH₄OH?', o:['hidróxido de amonio','hidróxido amónico','hidróxido de nitrógeno','amoniuro de hidróxido']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El berilio tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidróxido?', o:['Be(OH)₂','BeOH','Be(OH)₃','Be₂OH']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El cesio tiene valencia fija +1. ¿Cuál es la fórmula correcta de su hidróxido?', o:['CsOH','Cs(OH)₂','CsOH₂','Cs₂OH']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'El cadmio tiene valencia fija +2. ¿Cuál es la fórmula correcta de su hidróxido?', o:['Cd(OH)₂','CdOH','Cd(OH)₃','Cd₂OH']},
{tema:'base', c:'uso', k:'Q', ctx:'', q:'¿Cuántos grupos hidróxido (OH⁻) se necesitan para equilibrar la carga de un catión con valencia +3, como el Al³⁺?', o:['3','1','2','4']},
{tema:'base', c:'uso', k:'Q', ctx:'', q:'¿Cuántos grupos hidróxido (OH⁻) se necesitan para equilibrar la carga de un catión con valencia +4, como el Sn⁴⁺?', o:['4','2','3','1']},
{tema:'base', c:'uso', k:'Q', ctx:'', q:'¿Qué prefijo griego se usa en nomenclatura Sistemática para indicar 3 grupos hidróxido, como en Fe(OH)₃?', o:['tri-','di-','tetra-','mono-']},
{tema:'base', c:'uso', k:'Q', ctx:'', q:'¿Qué prefijo griego se usa en nomenclatura Sistemática para indicar 4 grupos hidróxido, como en Pb(OH)₄?', o:['tetra-','tri-','di-','penta-']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'¿Cuál de las siguientes fórmulas está mal escrita para un hidróxido de calcio (Ca²⁺, valencia +2)?', o:['CaOH₂ (sin paréntesis)','Ca(OH)₂','Ca²⁺ + 2OH⁻ → Ca(OH)₂','dihidróxido de calcio']},
{tema:'base', c:'uso', k:'Q', ctx:'', q:'¿Cuál es la diferencia entre el nombre Tradicional y el Stock de Fe(OH)₂?', o:['El Tradicional usa el sufijo -oso; el Stock usa el número romano (II)','El Tradicional usa números romanos; el Stock usa sufijos','Son exactamente el mismo nombre','El Stock solo aplica a hidróxidos de metales de valencia fija']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'Entre el hidróxido de potasio (KOH) y el hidróxido de bario (Ba(OH)₂), ¿cuál necesita 2 grupos OH⁻ por cada catión?', o:['El hidróxido de bario, porque el bario tiene valencia +2','El hidróxido de potasio, porque el potasio tiene valencia +2','Ambos necesitan 2 grupos OH⁻','Ninguno, los dos necesitan solo 1 grupo OH⁻']},
{tema:'base', c:'exp', k:'Q', ctx:'', q:'¿Cuál es la fórmula correcta del hidróxido de bismuto, sabiendo que el bismuto más común tiene valencia +3?', o:['Bi(OH)₃','BiOH','Bi(OH)₂','Bi₃OH']},

{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'El azufre tiene EO +4 en el oxoanión sulfito (SO₃²⁻). ¿Cuál es el nombre Tradicional del ácido oxácido correspondiente, H₂SO₃?', o:['Ácido sulfuroso','Ácido sulfúrico','Ácido sulfhídrico','Sulfito de hidrógeno']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido nítrico (HNO₃)?', o:['Nitrato (NO₃⁻)','Nitrito (NO₂⁻)','Nitruro (N³⁻)','Amonio (NH₄⁺)']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido nitroso (HNO₂)?', o:['Nitrito (NO₂⁻)','Nitrato (NO₃⁻)','Nitruro (N³⁻)','Nitronio (NO₂⁺)']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'El oxoanión fosfito (PO₃³⁻) tiene carga -3. ¿Cuántos hidrógenos debe tener su ácido oxácido correspondiente, H₃PO₃?', o:['3','2','1','4']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional del ácido oxácido formado por hidrógeno y el oxoanión carbonato (CO₃²⁻)?', o:['Ácido carbónico','Ácido carbónico anhidro','Carbonato de hidrógeno','Ácido carboso']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional del ácido oxácido formado por hidrógeno y el oxoanión borato (BO₃³⁻)?', o:['Ácido bórico','Ácido boroso','Borato de hidrógeno','Ácido bórico anhidro']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'El cloro puede tener EO +1, +3, +5 o +7 en sus oxoácidos. ¿Cuál es el nombre del ácido con EO +7 (el máximo), HClO₄?', o:['Ácido perclórico','Ácido clórico','Ácido cloroso','Ácido hipocloroso']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'El cloro puede tener EO +1, +3, +5 o +7 en sus oxoácidos. ¿Cuál es el nombre del ácido con EO +1 (el mínimo), HClO?', o:['Ácido hipocloroso','Ácido perclórico','Ácido clórico','Ácido cloroso']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre del ácido con fórmula HClO₃, donde el cloro tiene EO +5?', o:['Ácido clórico','Ácido cloroso','Ácido perclórico','Ácido hipocloroso']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre del ácido con fórmula HClO₂, donde el cloro tiene EO +3?', o:['Ácido cloroso','Ácido clórico','Ácido perclórico','Ácido hipocloroso']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Qué prefijo se usa en nomenclatura Tradicional para nombrar el oxoácido con el estado de oxidación MÁS BAJO posible de un elemento con 4 valencias, como el Cl en HClO?', o:['hipo- (combinado con el sufijo -oso)','per- (combinado con el sufijo -ico)','-oso, sin prefijo adicional','-ico, sin prefijo adicional']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Qué prefijo se usa en nomenclatura Tradicional para nombrar el oxoácido con el estado de oxidación MÁS ALTO posible de un elemento con 4 valencias, como el Cl en HClO₄?', o:['per- (combinado con el sufijo -ico)','hipo- (combinado con el sufijo -oso)','-oso, sin prefijo adicional','-ico, sin prefijo adicional']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'El bromo se comporta igual que el cloro en sus 4 oxoácidos posibles. ¿Cuál es el nombre del ácido con fórmula HBrO₄ (EO +7, el máximo)?', o:['Ácido perbrómico','Ácido brómico','Ácido bromoso','Ácido hipobromoso']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre del ácido con fórmula HBrO₃, donde el bromo tiene EO +5?', o:['Ácido brómico','Ácido bromoso','Ácido perbrómico','Ácido hipobromoso']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre del ácido con fórmula HBrO, donde el bromo tiene EO +1 (el mínimo)?', o:['Ácido hipobromoso','Ácido bromoso','Ácido brómico','Ácido perbrómico']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'El yodo también tiene 4 oxoácidos posibles, igual que el cloro y el bromo. ¿Cuál es el nombre del ácido con fórmula HIO₄ (EO +7, el máximo)?', o:['Ácido peryódico','Ácido yódico','Ácido yodoso','Ácido hipoyodoso']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre del ácido con fórmula HIO₃, donde el yodo tiene EO +5?', o:['Ácido yódico','Ácido yodoso','Ácido peryódico','Ácido hipoyodoso']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'Entre el ácido hipocloroso (HClO) y el ácido perclórico (HClO₄), ¿cuál tiene el cloro con mayor estado de oxidación?', o:['El ácido perclórico (EO +7)','El ácido hipocloroso (EO +7)','Ambos tienen el mismo EO','El ácido hipocloroso, porque "hipo-" indica el EO mayor']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional del ácido oxácido con fórmula H₂CrO₄, donde el cromo tiene EO +6?', o:['Ácido crómico','Ácido cromoso','Cromato de hidrógeno','Ácido dicrómico']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido dicrómico (H₂Cr₂O₇)?', o:['Dicromato (Cr₂O₇²⁻)','Cromato (CrO₄²⁻)','Cromito (CrO₂⁻)','Cromuro (Cr³⁻)']},
{tema:'ac-ox', c:'ind', k:'CTS', ctx:'El permanganato de potasio, derivado del ácido permangánico, se usa en Colombia para desinfectar agua y tratar ciertas afecciones de la piel.', q:'¿Cuál es la fórmula del ácido permangánico, donde el manganeso tiene EO +7?', o:['HMnO₄','H₂MnO₄','HMnO₃','H₂MnO₃']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el nombre Tradicional del ácido oxácido con fórmula H₂MnO₄, donde el manganeso tiene EO +6?', o:['Ácido mangánico','Ácido permangánico','Ácido manganoso','Manganato de hidrógeno']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido arsénico (H₃AsO₄)?', o:['Arseniato (AsO₄³⁻)','Arsenito (AsO₃³⁻)','Arseniuro (As³⁻)','Arsenato de hidrógeno']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'El arsénico tiene EO +3 en el oxoanión arsenito (AsO₃³⁻). ¿Cuál es el nombre Tradicional del ácido oxácido correspondiente, H₃AsO₃?', o:['Ácido arsenioso','Ácido arsénico','Ácido arsenhídrico','Arsenito de hidrógeno']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido selénico (H₂SeO₄)?', o:['Selenato (SeO₄²⁻)','Selenito (SeO₃²⁻)','Seleniuro (Se²⁻)','Selenato de hidrógeno']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'El selenio tiene EO +4 en el oxoanión selenito (SeO₃²⁻). ¿Cuál es el nombre Tradicional del ácido oxácido correspondiente, H₂SeO₃?', o:['Ácido selenioso','Ácido selénico','Ácido selenhídrico','Selenito de hidrógeno']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido telúrico (H₂TeO₄)?', o:['Telurato (TeO₄²⁻)','Telurito (TeO₃²⁻)','Telururo (Te²⁻)','Telurato de hidrógeno']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'El telurio tiene EO +4 en el oxoanión telurito (TeO₃²⁻). ¿Cuál es el nombre Tradicional del ácido oxácido correspondiente, H₂TeO₃?', o:['Ácido teluroso','Ácido telúrico','Ácido telurhídrico','Telurito de hidrógeno']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'El fósforo tiene EO +1 en el oxoanión hipofosfito (PO₂³⁻). ¿Cuál es el nombre Tradicional del ácido oxácido correspondiente, H₃PO₂?', o:['Ácido hipofosforoso','Ácido fosforoso','Ácido fosfórico','Ácido fosfhídrico']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'El bromo, igual que el cloro, tiene hasta 4 estados de oxidación en sus oxoácidos. ¿Cuál es el nombre del ácido con fórmula HBrO (Br con EO +1, el más bajo)?', o:['Ácido hipobromoso','Ácido bromoso','Ácido brómico','Ácido perbrómico']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el oxoanión que forma parte de la fórmula del ácido silícico (H₂SiO₃)?', o:['Silicato (SiO₃²⁻)','Silicito (SiO₂²⁻)','Siliciuro (Si⁴⁻)','Silicato de hidrógeno']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'Entre el ácido sulfúrico (H₂SO₄) y el ácido fosfórico (H₃PO₄), ¿cuál necesita 3 hidrógenos en lugar de 2?', o:['El ácido fosfórico, porque el fosfato tiene carga -3','El ácido sulfúrico, porque el sulfato tiene carga -3','Ambos necesitan 3 hidrógenos','Ninguno, los dos necesitan 2 hidrógenos']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Cuántos hidrógenos tiene la fórmula de un ácido oxácido cuyo oxoanión tiene carga -1, como el nitrato (NO₃⁻)?', o:['1','2','3','0']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'¿Cuál es la fórmula correcta del ácido carbónico, sabiendo que el carbonato (CO₃²⁻) tiene carga -2?', o:['H₂CO₃','HCO₃','H₃CO₃','HCO₂']},
{tema:'ac-ox', c:'exp', k:'Q', ctx:'', q:'¿Cuál es la fórmula correcta del ácido fosfórico, sabiendo que el fosfato (PO₄³⁻) tiene carga -3?', o:['H₃PO₄','H₂PO₄','HPO₄','H₃PO₃']},
{tema:'ac-ox', c:'uso', k:'Q', ctx:'', q:'¿Por qué el ácido carbónico (H₂CO₃) es inestable y tiende a descomponerse en agua y dióxido de carbono?', o:['Porque es un ácido débil formado a partir de un óxido ácido gaseoso disuelto en agua','Porque el carbono siempre forma compuestos inestables','Porque todos los ácidos oxácidos son inestables','Porque el carbonato tiene carga positiva']},
{tema:'ac-ox', c:'ind', k:'CTS', ctx:'El ácido fosfórico (H₃PO₄) se usa como acidulante en bebidas gaseosas tipo cola producidas en Colombia, aportando el sabor ácido característico.', q:'¿Cuál es el oxoanión que forma parte de la fórmula de este ácido usado en bebidas?', o:['Fosfato (PO₄³⁻)','Fosfito (PO₃³⁻)','Fosfuro (P³⁻)','Fosfonio (PH₄⁺)']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de la sal binaria con fórmula KBr?',
 o:['Bromuro de potasio','Bromato de potasio','Bromuro de potasio (II)','Potasio brómico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'El calcio tiene valencia fija +2. ¿Cuál es la fórmula correcta del cloruro de calcio?',
 o:['CaCl₂','CaCl','Ca₂Cl','CaCl₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de FeCl₂, sabiendo que aquí el hierro tiene valencia +2 (la menor de las dos)?',
 o:['Cloruro ferroso','Cloruro férrico','Cloruro de hierro (III)','Óxido ferroso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Stock correcto de FeCl₃?',
 o:['Cloruro de hierro (III)','Cloruro de hierro (II)','Tricloruro de hierro (II)','Cloruro férrico (II)']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'El cobre forma CuCl (con Cu⁺) y CuCl₂ (con Cu²⁺). ¿Cuál es el nombre Tradicional de CuCl?',
 o:['Cloruro cuproso','Cloruro cúprico','Cloruro de cobre (II)','Dicloruro de cobre']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de SnCl₄, sabiendo que el estaño tiene aquí su valencia mayor (+4)?',
 o:['Cloruro estánnico','Cloruro estannoso','Cloruro de estaño (II)','Tetracloruro de estañoso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de PbCl₂, sabiendo que el plomo tiene aquí su valencia menor (+2)?',
 o:['Cloruro plumboso','Cloruro plúmbico','Cloruro de plomo (IV)','Dicloruro plúmbico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'La plata tiene valencia fija +1. ¿Cuál es el nombre correcto de AgCl?',
 o:['Cloruro de plata','Cloruro argéntico','Cloruro de plata (I)','Clorato de plata']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'El aluminio tiene valencia fija +3. ¿Cuál es la fórmula correcta del cloruro de aluminio?',
 o:['AlCl₃','AlCl','Al₃Cl','AlCl₂']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Sistemático (IUPAC) correcto de MgBr₂?',
 o:['Dibromuro de magnesio','Bromuro de magnesio (II)','Bromuro magnésico','Dibromato de magnesio']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Na₂S?',
 o:['Sulfuro de sodio','Sulfato de sodio','Disulfuro de sodio','Sulfuro sódico (II)']},
{tema:'sal-bin', c:'ind', k:'CTS',
 ctx:'En la industria del vidrio y en la fundición de metales en Colombia se usa un mineral compuesto por calcio y flúor, conocido como fluorita.',
 q:'¿Cuál es la fórmula correcta de la fluorita (fluoruro de calcio)?',
 o:['CaF₂','CaF','Ca₂F','CaF₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de AlBr₃?',
 o:['Bromuro de aluminio','Bromuro alumínico','Bromuro de aluminio (III)','Tribromato de aluminio']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'El bario tiene valencia fija +2. ¿Cuál es la fórmula correcta del cloruro de bario?',
 o:['BaCl₂','BaCl','Ba₂Cl','BaCl₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de CoBr₂, sabiendo que el cobalto tiene aquí su valencia menor (+2)?',
 o:['Bromuro cobaltoso','Bromuro cobáltico','Bromuro de cobalto (III)','Dibromuro cobáltico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de CoBr₃, sabiendo que el cobalto tiene aquí su valencia mayor (+3)?',
 o:['Bromuro cobáltico','Bromuro cobaltoso','Bromuro de cobalto (II)','Tribromuro cobaltoso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'El zinc tiene valencia fija +2. ¿Cuál es el nombre correcto de ZnCl₂?',
 o:['Cloruro de zinc','Cloruro de zinc (II)','Cloruro cínquico','Dicloruro zíncico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de FeS, sabiendo que el hierro tiene aquí su valencia menor (+2)?',
 o:['Sulfuro ferroso','Sulfuro férrico','Sulfuro de hierro (III)','Disulfuro ferroso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de Fe₂S₃, sabiendo que el hierro tiene aquí su valencia mayor (+3)?',
 o:['Sulfuro férrico','Sulfuro ferroso','Sulfuro de hierro (II)','Trisulfuro ferroso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de CuS, sabiendo que el cobre tiene aquí su valencia mayor (+2)?',
 o:['Sulfuro cúprico','Sulfuro cuproso','Sulfuro de cobre (I)','Disulfuro cúprico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de MnCl₂, sabiendo que el manganeso tiene aquí su valencia menor habitual (+2)?',
 o:['Cloruro manganoso','Cloruro mangánico','Cloruro de manganeso (IV)','Dicloruro mangánico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de CrCl₃, sabiendo que el cromo tiene aquí su valencia mayor en sales (+3)?',
 o:['Cloruro crómico','Cloruro cromoso','Cloruro de cromo (II)','Tricloruro cromoso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de HgCl₂, sabiendo que el mercurio tiene aquí su valencia mayor (+2, "mercúrico")?',
 o:['Cloruro mercúrico','Cloruro mercurioso','Cloruro de mercurio (I)','Dicloruro mercurioso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de AuCl₃, sabiendo que el oro tiene aquí su valencia mayor (+3)?',
 o:['Cloruro áurico','Cloruro auroso','Cloruro de oro (I)','Tricloruro auroso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de TiCl₄?',
 o:['Cloruro titánico','Cloruro titanoso','Cloruro de titanio (II)','Tetracloruro titanoso']},
{tema:'sal-bin', c:'uso', k:'Q', ctx:'',
 q:'¿Qué tienen en común el cloruro de sodio, el bromuro de potasio y el yoduro de calcio, aunque sus fórmulas sean distintas?',
 o:['Los tres son sales binarias formadas por un metal y un halógeno','Los tres contienen oxígeno en su fórmula','Los tres son ácidos hidrácidos','Los tres son óxidos básicos']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es la fórmula correcta del sulfuro de magnesio, sabiendo que el magnesio tiene valencia fija +2 y el azufre forma el anión S²⁻?',
 o:['MgS','MgS₂','Mg₂S','MgS₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es la fórmula correcta del yoduro de aluminio, sabiendo que el aluminio tiene valencia fija +3?',
 o:['AlI₃','AlI','Al₃I','AlI₂']},
{tema:'sal-bin', c:'ind', k:'CTS',
 ctx:'Las pastas dentales usan compuestos de flúor para prevenir la caries; uno de los más comunes combina flúor con sodio.',
 q:'¿Cuál es el nombre correcto del compuesto de flúor y sodio usado en pastas dentales?',
 o:['Fluoruro de sodio','Fluorato de sodio','Flúor sódico','Fluoruro de sodio (I)']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de SnF₂, sabiendo que el estaño tiene aquí su valencia menor (+2)?',
 o:['Fluoruro estañoso','Fluoruro estáñico','Fluoruro de estaño (IV)','Difluoruro estáñico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de NiCl₃, sabiendo que el níquel tiene aquí su valencia mayor (+3)?',
 o:['Cloruro niquélico','Cloruro niqueloso','Cloruro de níquel (II)','Tricloruro niqueloso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de PtCl₂, sabiendo que el platino tiene aquí su valencia menor (+2)?',
 o:['Cloruro platinoso','Cloruro platínico','Cloruro de platino (IV)','Dicloruro platínico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es la fórmula correcta del bromuro de estroncio, sabiendo que el estroncio tiene valencia fija +2?',
 o:['SrBr₂','SrBr','Sr₂Br','SrBr₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es la fórmula correcta del fluoruro de berilio, sabiendo que el berilio tiene valencia fija +2?',
 o:['BeF₂','BeF','Be₂F','BeF₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Hg₂Cl₂, el catión mercurioso (dinuclear)?',
 o:['Cloruro mercurioso','Cloruro mercúrico','Cloruro de mercurio (II)','Monocloruro mercúrico']},
{tema:'sal-bin', c:'uso', k:'Q', ctx:'',
 q:'¿Por qué el cloruro de hierro (II) y el cloruro de hierro (III) son dos compuestos distintos, aunque ambos sean "cloruro de hierro"?',
 o:['Porque el hierro tiene dos valencias posibles (+2 y +3), cada una forma una sal distinta','Porque uno tiene oxígeno y el otro no','Porque uno es una sal binaria y el otro un óxido','Porque el cloro cambia su carga de −1 a −2 entre los dos']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de AuI₃?',
 o:['Yoduro áurico','Yoduro auroso','Yoduro de oro (I)','Triyoduro auroso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es la fórmula correcta del sulfuro de cesio, sabiendo que el cesio tiene valencia fija +1 y el anión es S²⁻?',
 o:['Cs₂S','CsS','CsS₂','Cs₂S₃']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de CrCl₂, sabiendo que el cromo tiene aquí su valencia menor (+2)?',
 o:['Cloruro cromoso','Cloruro crómico','Cloruro de cromo (III)','Dicloruro crómico']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de PbCl₄, sabiendo que el plomo tiene aquí su valencia mayor (+4)?',
 o:['Cloruro plúmbico','Cloruro plumboso','Cloruro de plomo (II)','Tetracloruro plumboso']},
{tema:'sal-bin', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de NiCl₂, sabiendo que el níquel tiene aquí su valencia menor (+2)?',
 o:['Cloruro niqueloso','Cloruro niquélico','Cloruro de níquel (III)','Dicloruro niquélico']},

{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de la sal oxigenada con fórmula KNO₃?',
 o:['Nitrato de potasio','Nitrito de potasio','Nitrato de potasio (I)','Dinitrato de potasio']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'El aluminio tiene valencia fija +3. ¿Cuál es la fórmula correcta del sulfato de aluminio, sabiendo que el sulfato tiene carga −2?',
 o:['Al₂(SO₄)₃','AlSO₄','Al(SO₄)₃','Al₃(SO₄)₂']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de FeSO₄, sabiendo que el hierro tiene aquí su valencia menor (+2)?',
 o:['Sulfato ferroso','Sulfato férrico','Sulfato de hierro (III)','Disulfato ferroso']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de Fe₂(SO₄)₃, sabiendo que el hierro tiene aquí su valencia mayor (+3)?',
 o:['Sulfato férrico','Sulfato ferroso','Sulfato de hierro (II)','Trisulfato ferroso']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de CuSO₄, sabiendo que el cobre tiene aquí su valencia mayor (+2)?',
 o:['Sulfato cúprico','Sulfato cuproso','Sulfato de cobre (I)','Disulfato cúprico']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el anión (oxoanión) presente en el nitrato cúprico, Cu(NO₃)₂?',
 o:['Nitrato, NO₃⁻','Nitrito, NO₂⁻','Nitruro, N³⁻','Nitrato, NO₃²⁻']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de Ni(NO₃)₂, sabiendo que el níquel tiene aquí su valencia menor (+2)?',
 o:['Nitrato niqueloso','Nitrato niquélico','Nitrato de níquel (III)','Dinitrato niquélico']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'El zinc tiene valencia fija +2. ¿Cuál es el nombre correcto de ZnSO₄?',
 o:['Sulfato de zinc','Sulfato de zinc (II)','Sulfato cínquico','Disulfato zíncico']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de Pb(NO₃)₂, sabiendo que el plomo tiene aquí su valencia menor (+2)?',
 o:['Nitrato plumboso','Nitrato plúmbico','Nitrato de plomo (IV)','Dinitrato plúmbico']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de Fe(NO₃)₃, sabiendo que el hierro tiene aquí su valencia mayor (+3)?',
 o:['Nitrato férrico','Nitrato ferroso','Nitrato de hierro (II)','Trinitrato ferroso']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de SnSO₄, sabiendo que el estaño tiene aquí su valencia menor (+2)?',
 o:['Sulfato estannoso','Sulfato estánnico','Sulfato de estaño (IV)','Disulfato estánnico']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el oxoanión presente en el permanganato de potasio (KMnO₄), y qué estado de oxidación tiene el manganeso en él?',
 o:['Permanganato, MnO₄⁻, con Mn en +7','Manganato, MnO₄²⁻, con Mn en +6','Permanganato, MnO₄⁻, con Mn en +6','Manganito, MnO₃⁻, con Mn en +4']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre correcto del oxoanión CrO₄²⁻ presente en el cromato de potasio (K₂CrO₄)?',
 o:['Cromato','Dicromato','Cromito','Cromuro']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre correcto del oxoanión Cr₂O₇²⁻ presente en el dicromato de potasio (K₂Cr₂O₇)?',
 o:['Dicromato','Cromato','Dicromito','Percromato']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'El cloro puede formar 4 oxoaniones distintos según su estado de oxidación. ¿Cuál es el nombre del oxoanión ClO₄⁻, con el cloro en su estado de oxidación más alto (+7)?',
 o:['Perclorato','Clorato','Clorito','Hipoclorito']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre del oxoanión ClO⁻, con el cloro en su estado de oxidación más bajo (+1)?',
 o:['Hipoclorito','Clorito','Clorato','Perclorato']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de KClO₃?',
 o:['Clorato de potasio','Clorito de potasio','Hipoclorito de potasio','Perclorato de potasio']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de NaClO₂?',
 o:['Clorito de sodio','Clorato de sodio','Hipoclorito de sodio','Perclorato de sodio']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es la fórmula correcta del fosfato de calcio, sabiendo que el calcio tiene carga +2 y el fosfato (PO₄³⁻) carga −3?',
 o:['Ca₃(PO₄)₂','CaPO₄','Ca₂(PO₄)₃','Ca(PO₄)₂']},
{tema:'sal-ox', c:'uso', k:'Q', ctx:'',
 q:'¿Por qué el fosfato de calcio, Ca₃(PO₄)₂, necesita 3 cationes calcio y 2 aniones fosfato en su fórmula?',
 o:['Porque 3(+2) + 2(−3) = 0, así la carga total se neutraliza','Porque el calcio siempre aparece 3 veces en cualquier sal oxigenada','Porque el fosfato tiene carga −2, igual que el calcio','Porque son proporciones arbitrarias sin relación con las cargas']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Na₂SO₃ (SO₃²⁻ = sulfito)?',
 o:['Sulfito de sodio','Sulfato de sodio','Bisulfito de sodio','Sulfuro de sodio']},
{tema:'sal-ox', c:'uso', k:'Q', ctx:'',
 q:'¿Cuál es la diferencia química entre el sulfato de sodio (Na₂SO₄) y el sulfito de sodio (Na₂SO₃)?',
 o:['El azufre tiene distinto estado de oxidación y el oxoanión tiene un oxígeno menos en el sulfito','Son dos nombres distintos para el mismo compuesto','El sulfito tiene un hidrógeno adicional en su fórmula','El sulfato es una sal binaria y el sulfito una sal oxigenada']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de CoPO₄, sabiendo que el cobalto tiene aquí su valencia mayor (+3)?',
 o:['Fosfato cobáltico','Fosfato cobaltoso','Fosfato de cobalto (II)','Difosfato cobaltoso']},
{tema:'sal-ox', c:'ind', k:'CTS',
 ctx:'El yeso usado en construcción y en moldes de yesería artesanal en Colombia es una forma hidratada de un compuesto de calcio y azufre con oxígeno.',
 q:'¿Cuál es el nombre correcto de ese compuesto (CaSO₄), antes de hidratarse?',
 o:['Sulfato de calcio','Sulfito de calcio','Sulfuro de calcio','Bisulfato de calcio']},
{tema:'sal-ox', c:'ind', k:'CTS',
 ctx:'Algunos fertilizantes usados en cultivos colombianos de flores y hortalizas aportan nitrógeno en forma de una sal de calcio con el oxoanión nitrato.',
 q:'¿Cuál es el nombre correcto de ese fertilizante, Ca(NO₃)₂?',
 o:['Nitrato de calcio','Nitrito de calcio','Nitruro de calcio','Dinitrato de calcio (II)']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es la fórmula correcta del carbonato de magnesio, sabiendo que el magnesio tiene carga +2 y el carbonato (CO₃²⁻) carga −2?',
 o:['MgCO₃','Mg(CO₃)₂','Mg₂CO₃','MgCO₂']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Mn(NO₃)₂, sabiendo que el manganeso tiene aquí su valencia menor (+2)?',
 o:['Nitrato manganoso','Nitrato mangánico','Nitrato de manganeso (VII)','Dinitrato mangánico']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Cr₂(SO₄)₃, sabiendo que el cromo tiene aquí su valencia +3?',
 o:['Sulfato crómico','Sulfato cromoso','Sulfato de cromo (II)','Trisulfato cromoso']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es la fórmula correcta del fosfato de aluminio, sabiendo que el aluminio tiene carga +3 y el fosfato carga −3?',
 o:['AlPO₄','Al₃PO₄','Al(PO₄)₃','Al₃(PO₄)₃']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Ca(ClO₃)₂?',
 o:['Clorato de calcio','Clorito de calcio','Hipoclorito de calcio','Perclorato de calcio']},
{tema:'sal-ox', c:'uso', k:'Q', ctx:'',
 q:'¿Qué parte del nombre "sulfato de aluminio" indica el anión, y cuál indica el catión?',
 o:['"Sulfato" es el anión (oxoanión) y "de aluminio" indica el catión','"Sulfato" es el catión y "de aluminio" el anión','Ambas partes indican el mismo ion repetido','"Sulfato" indica el número de oxígenos solamente']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de AgNO₃, sabiendo que la plata tiene valencia fija +1?',
 o:['Nitrato de plata','Nitrito de plata','Nitrato de plata (I)','Dinitrato de plata']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es la fórmula correcta del carbonato de litio, sabiendo que el litio tiene valencia fija +1 y el carbonato carga −2?',
 o:['Li₂CO₃','LiCO₃','LiCO₂','Li(CO₃)₂']},
{tema:'sal-ox', c:'ind', k:'CTS',
 ctx:'El carbonato de litio se usa en Colombia, a través del sistema de salud (EPS), como medicamento estabilizador del ánimo en el tratamiento del trastorno bipolar.',
 q:'¿Cuál es la fórmula correcta del carbonato de litio?',
 o:['Li₂CO₃','LiCO₃','Li(CO₃)₂','LiCO₂']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de K₂SO₃ (SO₃²⁻ = sulfito)?',
 o:['Sulfito de potasio','Sulfato de potasio','Bisulfito de potasio','Sulfuro de potasio']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de LiClO (ClO⁻ = hipoclorito)?',
 o:['Hipoclorito de litio','Clorito de litio','Clorato de litio','Perclorato de litio']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es la fórmula correcta del sulfato de rubidio, sabiendo que el rubidio tiene valencia fija +1?',
 o:['Rb₂SO₄','RbSO₄','Rb(SO₄)₂','Rb₂SO₃']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Mg₃(PO₄)₂?',
 o:['Fosfato de magnesio','Fosfito de magnesio','Fosfato de magnesio (II)','Difosfato de magnesio']},
{tema:'sal-ox', c:'ind', k:'CTS',
 ctx:'El yeso agrícola (sulfato de calcio) se usa en fincas de la Sabana de Bogotá para mejorar suelos compactados antes de sembrar.',
 q:'¿Cuál es la fórmula correcta del yeso agrícola?',
 o:['CaSO₄','CaSO₃','CaS','Ca(SO₄)₂']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Sr(NO₃)₂?',
 o:['Nitrato de estroncio','Nitrito de estroncio','Nitrato de estroncio (II)','Dinitrato de estroncio']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es la fórmula correcta del carbonato de zinc, sabiendo que el zinc tiene valencia fija +2 y el carbonato carga −2?',
 o:['ZnCO₃','Zn(CO₃)₂','Zn₂CO₃','ZnCO₂']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Ag₂CO₃, sabiendo que la plata tiene valencia fija +1?',
 o:['Carbonato de plata','Carbonito de plata','Carbonato de plata (I)','Dicarbonato de plata']},
{tema:'sal-ox', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es la fórmula correcta del sulfato de cadmio, sabiendo que el cadmio tiene valencia fija +2?',
 o:['CdSO₄','CdSO₃','Cd(SO₄)₂','Cd₂SO₄']},

{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Stock correcto de KHCO₃?',
 o:['Hidrogenocarbonato de potasio','Bicarbonato de potasio (Stock)','Hidrogenocarbonato de potasio (II)','Dicarbonato de potasio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de NaHSO₃ (el sulfito, SO₃²⁻, retuvo un H⁺)?',
 o:['Bisulfito de sodio','Bisulfato de sodio','Hidrogenosulfato de sodio','Disulfito de sodio']},
{tema:'sal-ac', c:'uso', k:'Q', ctx:'',
 q:'¿En qué se diferencian el bisulfito de sodio (NaHSO₃) y el bisulfato de sodio (NaHSO₄)?',
 o:['El bisulfito proviene del sulfito (SO₃²⁻) y el bisulfato del sulfato (SO₄²⁻), oxoaniones distintos','Son dos nombres válidos para el mismo compuesto','El bisulfato tiene un hidrógeno menos que el bisulfito','El bisulfito es una sal binaria y el bisulfato una sal ácida']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Stock correcto de NH₄HCO₃, sabiendo que el amonio (NH₄⁺) actúa como catión de carga fija +1?',
 o:['Hidrogenocarbonato de amonio','Bicarbonato de amonio (Stock)','Hidrogenocarbonato de amonio (I)','Dicarbonato de amonio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Ca(HCO₃)₂, sabiendo que el calcio (carga +2) necesita 2 aniones HCO₃⁻ (carga −1 cada uno)?',
 o:['Bicarbonato de calcio','Carbonato de calcio','Bicarbonato de calcio (II)','Dicarbonato de calcio']},
{tema:'sal-ac', c:'ind', k:'CTS',
 ctx:'La dureza temporal del agua en algunas regiones de Colombia se debe a la presencia disuelta de una sal ácida de calcio.',
 q:'¿Cuál es la fórmula correcta de esa sal (bicarbonato de calcio)?',
 o:['Ca(HCO₃)₂','CaHCO₃','Ca₂(HCO₃)','Ca(HCO₃)']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Mg(HCO₃)₂?',
 o:['Bicarbonato de magnesio','Carbonato de magnesio','Bicarbonato de magnesio (II)','Dicarbonato de magnesio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Stock correcto de Ca(HSO₃)₂?',
 o:['Hidrogenosulfito de calcio','Bisulfito de calcio (Stock)','Hidrogenosulfato de calcio','Dihidrogenosulfito de calcio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'El fosfato (PO₄³⁻) puede retener uno o dos H⁺. ¿Cuál es el nombre Tradicional de Na₂HPO₄, donde retuvo solo 1 H⁺ (queda HPO₄²⁻)?',
 o:['Fosfato monoácido de sodio','Fosfato diácido de sodio','Fosfato de sodio','Bifosfato ácido de sodio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional de NaH₂PO₄, donde el fosfato retuvo 2 H⁺ (queda H₂PO₄⁻)?',
 o:['Fosfato diácido de sodio','Fosfato monoácido de sodio','Fosfato de sodio','Trifosfato ácido de sodio']},
{tema:'sal-ac', c:'uso', k:'Q', ctx:'',
 q:'¿Cómo se distingue, en el nombre Stock, si el fosfato retuvo 1 o 2 hidrógenos?',
 o:['Con el prefijo "hidrogeno-" (1 H) o "dihidrogeno-" (2 H) antes de "fosfato"','Con el sufijo "-oso" (1 H) o "-ico" (2 H)','No se puede distinguir, ambos se llaman igual','Con un número romano entre paréntesis después del fosfato']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Stock correcto de KH₂PO₄?',
 o:['Dihidrogenofosfato de potasio','Hidrogenofosfato de potasio','Fosfato diácido de potasio (Stock)','Trihidrogenofosfato de potasio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de LiHCO₃, sabiendo que el litio tiene valencia fija +1?',
 o:['Bicarbonato de litio','Carbonato de litio','Bicarbonato de litio (II)','Dicarbonato de litio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Stock correcto de LiHSO₄?',
 o:['Hidrogenosulfato de litio','Bisulfato de litio (Stock)','Hidrogenosulfito de litio','Dihidrogenosulfato de litio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'El ácido sulfhídrico (H₂S) puede ceder solo 1 de sus 2 H⁺, dejando HS⁻. ¿Cuál es el nombre Tradicional de NaHS?',
 o:['Bisulfuro de sodio','Bisulfato de sodio','Sulfuro de sodio','Hidrogenosulfato de sodio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Stock correcto de KHS?',
 o:['Hidrogenosulfuro de potasio','Bisulfuro de potasio (Stock)','Hidrogenosulfato de potasio','Sulfuro de potasio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de LiHS?',
 o:['Bisulfuro de litio','Sulfuro de litio','Bisulfato de litio','Hidrogenosulfato de litio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de RbHCO₃, sabiendo que el rubidio tiene valencia fija +1?',
 o:['Bicarbonato de rubidio','Carbonato de rubidio','Bicarbonato de rubidio (II)','Dicarbonato de rubidio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de CsHCO₃?',
 o:['Bicarbonato de cesio','Carbonato de cesio','Bicarbonato de cesio (II)','Dicarbonato de cesio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Ba(HCO₃)₂, sabiendo que el bario (carga +2) necesita 2 aniones HCO₃⁻?',
 o:['Bicarbonato de bario','Carbonato de bario','Bicarbonato de bario (II)','Dicarbonato de bario']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Sr(HCO₃)₂?',
 o:['Bicarbonato de estroncio','Carbonato de estroncio','Bicarbonato de estroncio (II)','Dicarbonato de estroncio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Stock correcto de NH₄HSO₄?',
 o:['Hidrogenosulfato de amonio','Bisulfato de amonio (Stock)','Hidrogenosulfito de amonio','Sulfato de amonio']},
{tema:'sal-ac', c:'ind', k:'CTS',
 ctx:'En algunas fuentes de agua de zonas rurales colombianas con suelos ricos en hierro, el agua sale con un tono rojizo por una sal ácida de hierro disuelta.',
 q:'¿Cuál es el nombre Tradicional correcto de Fe(HCO₃)₂ (hierro con valencia +2), responsable de ese color?',
 o:['Bicarbonato ferroso','Bicarbonato férrico','Carbonato ferroso','Bicarbonato de hierro (III)']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de RbHS?',
 o:['Bisulfuro de rubidio','Sulfuro de rubidio','Bisulfato de rubidio','Hidrogenosulfato de rubidio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de CsHS?',
 o:['Bisulfuro de cesio','Sulfuro de cesio','Bisulfato de cesio','Hidrogenosulfato de cesio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de RbHSO₄?',
 o:['Bisulfato de rubidio','Bisulfito de rubidio','Sulfato de rubidio','Hidrogenosulfito de rubidio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de CsHSO₄?',
 o:['Bisulfato de cesio','Bisulfito de cesio','Sulfato de cesio','Hidrogenosulfito de cesio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de KHSO₃ (el sulfito, SO₃²⁻, retuvo un H⁺)?',
 o:['Bisulfito de potasio','Bisulfato de potasio','Hidrogenosulfato de potasio','Sulfito de potasio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Stock correcto de Mg(HSO₃)₂?',
 o:['Hidrogenosulfito de magnesio','Bisulfito de magnesio (Stock)','Hidrogenosulfato de magnesio','Dihidrogenosulfito de magnesio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de K₂HPO₄, donde el fosfato retuvo solo 1 H⁺?',
 o:['Fosfato monoácido de potasio','Fosfato diácido de potasio','Fosfato de potasio','Bifosfato diácido de potasio']},
{tema:'sal-ac', c:'ind', k:'CTS',
 ctx:'El fosfato monoácido de calcio (CaHPO₄) se usa en Colombia como suplemento mineral en alimentación animal y en algunos fertilizantes agrícolas.',
 q:'¿Cuál es el nombre Stock correcto de CaHPO₄?',
 o:['Hidrogenofosfato de calcio','Dihidrogenofosfato de calcio','Hidrogenofosfito de calcio','Fosfato de calcio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de NH₄HS, sabiendo que el amonio actúa como catión de carga fija +1?',
 o:['Bisulfuro de amonio','Sulfuro de amonio','Bisulfato de amonio','Hidrogenosulfato de amonio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Li₂HPO₄?',
 o:['Fosfato monoácido de litio','Fosfato diácido de litio','Fosfato de litio','Difosfato ácido de litio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Ba(HSO₄)₂?',
 o:['Bisulfato de bario','Bisulfito de bario','Sulfato de bario','Hidrogenosulfito de bario']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de Sr(HSO₄)₂?',
 o:['Bisulfato de estroncio','Bisulfito de estroncio','Sulfato de estroncio','Hidrogenosulfito de estroncio']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Tradicional correcto de RbHSO₃?',
 o:['Bisulfito de rubidio','Bisulfato de rubidio','Sulfito de rubidio','Hidrogenosulfato de rubidio']},
{tema:'sal-ac', c:'uso', k:'Q', ctx:'',
 q:'¿Por qué el bicarbonato de sodio (NaHCO₃) se usa en polvos de hornear, a diferencia del carbonato de sodio (Na₂CO₃)?',
 o:['Porque conserva un hidrógeno y libera CO₂ con el calor o un ácido','Porque tiene el doble de sodio que el carbonato de sodio','Porque no contiene ningún oxoanión en su fórmula','Porque es insoluble en agua, a diferencia del carbonato']},
{tema:'sal-ac', c:'exp', k:'Q', ctx:'',
 q:'¿Cuál es el nombre Stock correcto de NaHCO₃?',
 o:['Hidrogenocarbonato de sodio','Bicarbonato de sodio (Stock)','Dihidrogenocarbonato de sodio','Hidrogenocarbonato de sodio (I)']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'', q:'¿Qué tipo de reacción es 2Na + Cl₂ → 2NaCl?', o:['Síntesis','Descomposición','Sustitución simple','Doble sustitución']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'', q:'¿Qué tipo de reacción es 2Mg + O₂ → 2MgO?', o:['Síntesis','Combustión','Descomposición','Sustitución simple']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'El hierro procesado en la Siderúrgica de Paz de Río (Boyacá) puede combinarse con cloro gaseoso en ensayos de laboratorio para formar cloruro de hierro (III).', q:'La reacción 2Fe + 3Cl₂ → 2FeCl₃ es un ejemplo de:', o:['Síntesis','Descomposición','Sustitución simple','Combustión']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'', q:'¿Qué tipo de reacción es C + O₂ → CO₂, sabiendo que el carbono puro no tiene hidrógeno para formar agua?', o:['Síntesis','Combustión','Descomposición','Sustitución simple']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'', q:'¿Qué tipo de reacción es P₂O₅ + 3H₂O → 2H₃PO₄?', o:['Síntesis','Descomposición','Doble sustitución','Combustión']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'El agua oxigenada (H₂O₂) usada en clínicas colombianas para desinfectar heridas se descompone liberando burbujas de oxígeno.', q:'La reacción 2H₂O₂ → 2H₂O + O₂ es un ejemplo de:', o:['Descomposición','Síntesis','Sustitución simple','Doble sustitución']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'', q:'¿Qué tipo de reacción es 2H₂O → 2H₂ + O₂ (electrólisis del agua)?', o:['Descomposición','Síntesis','Combustión','Sustitución simple']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'La piedra caliza de Cundinamarca y Boyacá se calcina en hornos para producir cal viva, base de la industria del cemento.', q:'La reacción CaCO₃ → CaO + CO₂ es un ejemplo de:', o:['Descomposición','Síntesis','Sustitución simple','Doble sustitución']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'', q:'¿Qué tipo de reacción es 2KClO₃ → 2KCl + 3O₂?', o:['Descomposición','Síntesis','Combustión','Sustitución simple']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'', q:'El bicarbonato de sodio (NaHCO₃), usado en cocinas colombianas, se descompone al calentarse en 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂. ¿Qué tipo de reacción es?', o:['Descomposición','Síntesis','Doble sustitución','Combustión']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'En laboratorios colombianos, el zinc metálico reacciona con ácido sulfúrico diluido liberando burbujas de gas hidrógeno.', q:'La reacción Zn + H₂SO₄ → ZnSO₄ + H₂ es un ejemplo de:', o:['Sustitución simple','Síntesis','Descomposición','Doble sustitución']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'Esta reacción se usa para recuperar cobre metálico de soluciones en algunas minas colombianas, usando hierro como agente desplazante.', q:'La reacción Fe + CuSO₄ → FeSO₄ + Cu es un ejemplo de:', o:['Sustitución simple','Doble sustitución','Descomposición','Síntesis']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'', q:'¿Qué tipo de reacción es 2Na + 2H₂O → 2NaOH + H₂?', o:['Sustitución simple','Síntesis','Combustión','Doble sustitución']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'', q:'¿Qué tipo de reacción es 2Al + 6HCl → 2AlCl₃ + 3H₂?', o:['Sustitución simple','Doble sustitución','Descomposición','Síntesis']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'En laboratorios de química del SENA y universidades colombianas, el cobre metálico reacciona con nitrato de plata formando cristales brillantes de plata.', q:'La reacción Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag es un ejemplo de:', o:['Sustitución simple','Doble sustitución','Síntesis','Descomposición']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'', q:'¿Qué tipo de reacción es Ca + 2H₂O → Ca(OH)₂ + H₂?', o:['Sustitución simple','Síntesis','Doble sustitución','Combustión']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'Esta reacción se usa en laboratorios colombianos para identificar la presencia de cloruros en muestras de agua, formando un precipitado blanco de cloruro de plata.', q:'La reacción NaCl + AgNO₃ → NaNO₃ + AgCl es un ejemplo de:', o:['Doble sustitución','Sustitución simple','Síntesis','Descomposición']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'', q:'¿Qué tipo de reacción es Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃, donde dos sales intercambian iones y se forma un precipitado amarillo?', o:['Doble sustitución','Sustitución simple','Combustión','Síntesis']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'El precipitado blanco de esta reacción, hidróxido de magnesio, es el mismo compuesto activo de la leche de magnesia vendida en farmacias colombianas.', q:'La reacción MgSO₄ + 2NaOH → Mg(OH)₂ + Na₂SO₄ es un ejemplo de:', o:['Doble sustitución','Sustitución simple','Descomposición','Síntesis']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'', q:'¿Qué tipo de reacción es CaCl₂ + Na₂SO₄ → CaSO₄ + 2NaCl?', o:['Doble sustitución','Sustitución simple','Síntesis','Descomposición']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'El sulfato de bario formado en esta reacción es tan insoluble que se usa como contraste en radiografías del sistema digestivo en hospitales colombianos.', q:'La reacción BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl es un ejemplo de:', o:['Doble sustitución','Sustitución simple','Síntesis','Combustión']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'', q:'¿Qué tipo de reacción es Na₂CO₃ + CaCl₂ → CaCO₃ + 2NaCl?', o:['Doble sustitución','Sustitución simple','Descomposición','Síntesis']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'El gas natural distribuido por Gases del Caribe y Surtigas en hogares colombianos se quema para cocinar y calentar agua.', q:'La reacción CH₄ + 2O₂ → CO₂ + 2H₂O es un ejemplo de:', o:['Combustión','Síntesis','Descomposición','Sustitución simple']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'', q:'¿Qué tipo de reacción es C₃H₈ + 5O₂ → 3CO₂ + 4H₂O (combustión del propano de los cilindros de gas)?', o:['Combustión','Síntesis','Doble sustitución','Sustitución simple']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'La gasolina (octano) refinada en Barrancabermeja se quema en los motores de los vehículos colombianos.', q:'La reacción 2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O es un ejemplo de:', o:['Combustión','Síntesis','Descomposición','Doble sustitución']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'El etanol producido a partir de caña de azúcar en el Valle del Cauca se mezcla con gasolina (E10) como biocombustible en Colombia.', q:'¿Qué dos productos se forman siempre al quemar completamente un hidrocarburo u otro combustible con oxígeno, como en C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O?', o:['Dióxido de carbono y agua','Monóxido de carbono y oxígeno','Carbono puro e hidrógeno','Un óxido básico y un hidróxido']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'', q:'El acetileno (C₂H₂) usado en soldadura oxiacetilénica en Colombia se quema según 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O. ¿Qué tipo de reacción es?', o:['Combustión','Síntesis','Sustitución simple','Doble sustitución']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'', q:'¿Cuál es la característica que define a una reacción de combustión, a diferencia de una síntesis?', o:['Un hidrocarburo reacciona con O₂ para dar siempre CO₂ y H₂O como productos','Dos sustancias simples se combinan en una sola, sin importar cuáles sean','Un elemento libre desplaza a otro dentro de un compuesto','Una sola sustancia se divide en dos o más productos']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'El vinagre de caña de azúcar colombiana (ácido acético) reacciona con hidróxido de sodio para formar acetato de sodio y agua.', q:'En la reacción CH₃COOH + NaOH → CH₃COONa + H₂O, ¿qué tipo de compuesto se forma como uno de los productos, junto con el agua?', o:['Una sal (acetato de sodio)','Un óxido básico','Un hidruro metálico','Un anhídrido']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'', q:'En la reacción H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O, ¿por qué se necesitan 2 moles de NaOH por cada mol de H₂SO₄?', o:['Porque el H₂SO₄ aporta 2 iones H⁺ que deben neutralizarse con 2 iones OH⁻','Porque el Na siempre aparece duplicado en cualquier reacción','Porque el agua formada necesita 2 moléculas de NaOH por regla general','Porque el azufre tiene 2 estados de oxidación posibles']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'El nitrato de calcio formado en esta reacción es un fertilizante nitrogenado usado en cultivos de flores de la Sabana de Bogotá.', q:'¿Cuántos moles de HNO₃ se necesitan para reaccionar completamente con 1 mol de Ca(OH)₂, según 2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O?', o:['2 moles','1 mol','3 moles','4 moles']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'', q:'¿Cuál de las siguientes ecuaciones sigue el patrón general de una reacción de descomposición (AB → A + B)?', o:['CaCO₃ → CaO + CO₂','2Na + Cl₂ → 2NaCl','Zn + H₂SO₄ → ZnSO₄ + H₂','NaCl + AgNO₃ → NaNO₃ + AgCl']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'', q:'¿Cuál de las siguientes ecuaciones sigue el patrón general de una reacción de sustitución simple (A + BC → AC + B)?', o:['Fe + CuSO₄ → FeSO₄ + Cu','CaCO₃ → CaO + CO₂','NaCl + AgNO₃ → NaNO₃ + AgCl','CH₄ + 2O₂ → CO₂ + 2H₂O']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'', q:'¿Cuál de las siguientes ecuaciones sigue el patrón general de una reacción de doble sustitución (AB + CD → AD + CB)?', o:['BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl','2Mg + O₂ → 2MgO','2KClO₃ → 2KCl + 3O₂','C + O₂ → CO₂']},
{tema:'reaccion', c:'ind', k:'CTS', ctx:'Esta reacción histórica, usada por Lavoisier para estudiar la composición del aire, descompone un óxido metálico en sus elementos al calentarlo.', q:'La reacción 2HgO → 2Hg + O₂ es un ejemplo de:', o:['Descomposición','Síntesis','Sustitución simple','Doble sustitución']},
{tema:'reaccion', c:'uso', k:'Q', ctx:'', q:'¿Qué pista visual en una ecuación SIN balancear te ayuda a reconocer rápidamente una reacción de combustión?', o:['Un hidrocarburo (compuesto de C e H) reaccionando con O₂','Dos elementos libres reaccionando entre sí','Una sola fórmula a la izquierda de la flecha','Dos sales intercambiando sus iones']},
{tema:'reaccion', c:'exp', k:'Q', ctx:'', q:'¿Qué elemento libre aparece como reactivo en una reacción de sustitución simple, a diferencia de una síntesis o una doble sustitución?', o:['Un metal o no metal sin combinar, como Zn, Fe o Cl₂','Un óxido metálico ya formado','Un hidrocarburo como el metano','Dos sales distintas']},

/* SABER — balanceo */
{tema:'balanceo', c:'exp', k:'Q', ctx:'', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Na + Cl₂ → NaCl?', o:['2, 1, 2','1, 1, 1','2, 2, 1','1, 2, 2']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Mg + O₂ → MgO?', o:['2, 1, 2','1, 1, 1','1, 2, 1','2, 2, 1']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'La electrólisis del agua para producir hidrógeno limpio se estudia en universidades colombianas como alternativa energética.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear H₂O → H₂ + O₂?', o:['2, 2, 1','1, 1, 1','2, 1, 2','1, 2, 1']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'El gas natural se quema en hogares colombianos para cocinar y calentar agua.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear CH₄ + O₂ → CO₂ + H₂O?', o:['1, 2, 1, 2','1, 1, 1, 1','2, 2, 1, 2','1, 2, 2, 1']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'', q:'Para balancear Fe + O₂ → Fe₂O₃, ¿por qué el coeficiente de Fe debe ser 4 y no 2?', o:['Porque hacen falta 2 Fe₂O₃ para que el oxígeno cuadre en enteros','Porque el hierro siempre lleva coeficiente 4 en cualquier óxido','Porque el O₂ obliga a duplicar todos los coeficientes','Porque el Fe₂O₃ tiene masa molar par']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'', q:'La ecuación HCl + NaOH → NaCl + H₂O, ¿con qué coeficientes queda balanceada?', o:['1, 1, 1, 1 (ya está balanceada)','2, 1, 1, 1','1, 2, 1, 1','1, 1, 2, 1']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'La cal apagada se usa para encalar cultivos en el campo colombiano.', q:'La ecuación CaO + H₂O → Ca(OH)₂, ¿con qué coeficientes queda balanceada?', o:['1, 1, 1 (ya está balanceada)','2, 1, 1','1, 2, 1','2, 2, 1']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'', q:'¿Cuáles son los coeficientes mínimos correctos para balancear N₂ + H₂ → NH₃?', o:['1, 3, 2','1, 1, 1','2, 3, 1','1, 2, 2']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'El zinc reacciona con ácido clorhídrico en laboratorios colombianos para producir hidrógeno gaseoso de forma controlada.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Zn + HCl → ZnCl₂ + H₂?', o:['1, 2, 1, 1','1, 1, 1, 1','2, 2, 1, 1','1, 2, 2, 1']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Al + O₂ → Al₂O₃?', o:['4, 3, 2','2, 3, 1','4, 2, 3','2, 1, 1']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'La cementación del cobre con hierro se usa para recuperar este metal de soluciones en algunas minas colombianas.', q:'La ecuación Fe + CuSO₄ → FeSO₄ + Cu, ¿con qué coeficientes queda balanceada?', o:['1, 1, 1, 1 (ya está balanceada)','2, 1, 1, 1','1, 2, 1, 1','1, 1, 2, 2']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'', q:'¿Cuáles son los coeficientes mínimos correctos para balancear H₂SO₄ + NaOH → Na₂SO₄ + H₂O?', o:['1, 2, 1, 2','2, 1, 1, 1','1, 1, 1, 1','2, 2, 1, 2']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'El propano se vende en cilindros de gas para cocinas de zonas rurales colombianas.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear C₃H₈ + O₂ → CO₂ + H₂O?', o:['1, 5, 3, 4','1, 5, 3, 3','1, 4, 3, 4','2, 5, 3, 4']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'', q:'¿Cuáles son los coeficientes mínimos correctos para balancear CaCO₃ + HCl → CaCl₂ + H₂O + CO₂?', o:['1, 2, 1, 1, 1','1, 1, 1, 1, 1','2, 2, 1, 1, 1','1, 2, 2, 1, 1']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'El sodio metálico reacciona violentamente con agua, un experimento demostrativo realizado con precaución en universidades colombianas.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Na + H₂O → NaOH + H₂?', o:['2, 2, 2, 1','1, 1, 1, 1','2, 1, 2, 1','1, 2, 1, 1']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'La reducción del óxido de hierro con monóxido de carbono es el proceso del alto horno en la Siderúrgica de Paz de Río, Boyacá.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Fe₂O₃ + CO → Fe + CO₂?', o:['1, 3, 2, 3','1, 2, 2, 2','2, 3, 2, 3','1, 3, 1, 3']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Cu + AgNO₃ → Cu(NO₃)₂ + Ag?', o:['1, 2, 1, 2','1, 1, 1, 1','2, 2, 1, 2','1, 2, 2, 1']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'', q:'¿Cuáles son los coeficientes mínimos correctos para balancear P + O₂ → P₂O₅?', o:['4, 5, 2','2, 5, 1','4, 5, 1','2, 3, 1']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'El ácido sulfúrico disuelve la caliza para formar yeso, un material usado en construcciones colombianas.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear H₂SO₄ + CaCO₃ → CaSO₄ + H₂O + CO₂?', o:['1, 1, 1, 1, 1 (ya está balanceada)','2, 1, 1, 1, 1','1, 2, 1, 1, 1','1, 1, 2, 1, 1']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'La gasolina (octano) refinada en Barrancabermeja necesita coeficientes grandes para balancear su combustión completa.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear C₈H₁₈ + O₂ → CO₂ + H₂O?', o:['2, 25, 16, 18','1, 12, 8, 9','2, 24, 16, 18','1, 25, 16, 18']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Al + H₂SO₄ → Al₂(SO₄)₃ + H₂?', o:['2, 3, 1, 3','2, 3, 1, 6','1, 3, 1, 3','2, 6, 1, 3']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'La roca fosfórica colombiana se trata con ácido sulfúrico para producir superfosfato, un fertilizante agrícola.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Ca₃(PO₄)₂ + H₂SO₄ → CaSO₄ + H₃PO₄?', o:['1, 3, 3, 2','1, 2, 3, 2','3, 3, 3, 2','1, 3, 2, 2']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'', q:'Al balancear una ecuación con el método de tanteo, ¿qué tipo de átomos conviene dejar para el final?', o:['El hidrógeno y el oxígeno, porque suelen aparecer en varias fórmulas a la vez','Los metales, porque siempre tienen valencia fija','Los elementos que aparecen una sola vez a cada lado','Los no metales distintos del oxígeno']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'', q:'Si al balancear una ecuación obtienes los coeficientes 4, 6, 2, pero todos son divisibles entre 2, ¿cuáles son los coeficientes finales correctos?', o:['2, 3, 1','4, 6, 2 (se dejan igual)','8, 12, 4','4, 3, 1']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'', q:'¿Por qué NO se puede balancear una ecuación cambiando el subíndice 2 de O₂ por un 3?', o:['Porque eso cambiaría la sustancia O₂ (oxígeno) por otra distinta, no la misma ecuación balanceada','Porque los subíndices solo se pueden cambiar en los productos','Porque el oxígeno no admite subíndices mayores a 2','Porque cambiar un subíndice siempre duplica la masa molar']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'Ecopetrol calcula con precisión el oxígeno necesario para quemar combustibles sin desperdiciarlo ni generar exceso de contaminantes.', q:'Si una ecuación de combustión queda con los coeficientes 2, 13, 8, 10 y todos son enteros sin un factor común, ¿se considera correctamente balanceada?', o:['Sí, porque no comparten ningún factor común entre sí','No, porque todo coeficiente mayor a 10 es inválido','No, porque faltaría dividir entre 2 obligatoriamente','Sí, pero solo si la reacción es de síntesis']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'', q:'En el método de tanteo, ¿qué tipo de elementos conviene balancear primero?', o:['Los que aparecen en una sola fórmula a cada lado de la ecuación','El hidrógeno siempre, sin excepción','El oxígeno siempre, sin excepción','Los metales de valencia variable']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'', q:'Según la Ley de Conservación de la Masa, ¿qué debe cumplirse en una ecuación química balanceada?', o:['El número de átomos de cada elemento debe ser igual en reactivos y productos','La masa de los reactivos debe ser mayor que la de los productos','El número de moléculas debe ser igual a ambos lados, sin importar los átomos','Los coeficientes deben sumar lo mismo que los subíndices']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'El sulfato de sodio formado en esta reacción se usa en detergentes y en la industria del papel en Colombia.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear H₂SO₄ + KOH → K₂SO₄ + H₂O?', o:['1, 2, 1, 2','1, 1, 1, 1','2, 2, 1, 2','1, 2, 2, 1']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'', q:'Si una ecuación tiene 3 moléculas de H₂O a la derecha, ¿cuántos átomos de hidrógeno representa eso en total?', o:['6 átomos de H','3 átomos de H','9 átomos de H','2 átomos de H']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'', q:'¿Qué significa, en una ecuación química, que un coeficiente sea "1" y no se escriba explícitamente?', o:['Que esa fórmula participa con una sola unidad, igual que si dijera el número 1','Que esa sustancia no participa en la reacción','Que la ecuación está mal balanceada','Que el subíndice de esa fórmula es cero']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'El bicarbonato de sodio se usa en cocinas colombianas como polvo de hornear.', q:'Si la ecuación 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂ ya tiene sus coeficientes mínimos, ¿qué pasaría si alguien le pusiera 4, 2, 2, 2 en su lugar?', o:['Seguiría siendo correcta en cuanto a átomos, pero no serían los coeficientes mínimos pedidos','Sería una ecuación distinta con otra sustancia','Sería incorrecta porque duplicaría la masa de los productos sin razón química','Sería imposible de balancear con esos números']},
{tema:'balanceo', c:'exp', k:'Q', ctx:'', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Fe + Cl₂ → FeCl₃?', o:['2, 3, 2','1, 3, 1','2, 3, 1','1, 1, 1']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'', q:'¿Cuáles son los coeficientes mínimos correctos para balancear K + O₂ → K₂O?', o:['4, 1, 2','2, 1, 1','4, 2, 2','2, 1, 2']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'El nitrato de calcio formado en esta reacción es un fertilizante usado en cultivos de flores de la Sabana de Bogotá.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + H₂O?', o:['2, 1, 1, 2','1, 1, 1, 1','2, 2, 1, 2','1, 2, 1, 2']},

/* SABER — mol-masa */
{tema:'balanceo', c:'ind', k:'CTS', ctx:'La oxidación catalítica del amoníaco es un paso clave en la fabricación industrial de ácido nítrico.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear NH₃ + O₂ → NO + H₂O?', o:['4, 5, 4, 6','4, 3, 4, 6','2, 5, 2, 3','4, 5, 2, 6']},
{tema:'balanceo', c:'ind', k:'CTS', ctx:'El hidróxido de hierro (III), un precipitado de color ocre, aparece en análisis de calidad del agua de ríos colombianos como el Bogotá.', q:'¿Cuáles son los coeficientes mínimos correctos para balancear Fe₂(SO₄)₃ + NaOH → Fe(OH)₃ + Na₂SO₄?', o:['1, 6, 2, 3','1, 3, 2, 3','2, 6, 2, 3','1, 6, 1, 3']},
{tema:'balanceo', c:'uso', k:'Q', ctx:'', q:'¿Cuáles son los coeficientes mínimos correctos para balancear HNO₃ + Cu → Cu(NO₃)₂ + NO + H₂O?', o:['8, 3, 3, 2, 4','4, 3, 3, 2, 2','8, 3, 3, 4, 4','6, 3, 3, 2, 3']},

{tema:'mol-masa', c:'exp', k:'Q', ctx:'', q:'¿Cuál es la masa molar correcta del CO₂, sabiendo que M(C)=12.011 g/mol y M(O)=15.999 g/mol?', o:['44.009 g/mol','28.010 g/mol','31.998 g/mol','60.008 g/mol'], f:'CO₂'},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'El ácido sulfúrico se usa en minería y en la fabricación de baterías en toda Colombia.', q:'¿Cuál es la masa molar correcta del H₂SO₄?', o:['98.072 g/mol','82.073 g/mol','96.056 g/mol','114.071 g/mol'], f:'H₂SO₄'},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'', q:'¿Cuál es la masa molar correcta del HCl?', o:['36.458 g/mol','35.450 g/mol','37.466 g/mol','34.442 g/mol'], f:'HCl'},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'La soda cáustica se usa en la fabricación de jabón artesanal en varias regiones de Colombia.', q:'¿Cuál es la masa molar correcta del NaOH?', o:['39.997 g/mol','38.989 g/mol','41.005 g/mol','56.996 g/mol'], f:'NaOH'},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'', q:'¿Cuál es la masa molar correcta del CaCO₃?', o:['100.086 g/mol','96.078 g/mol','84.075 g/mol','116.085 g/mol'], f:'CaCO₃'},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'El oxígeno molecular se produce industrialmente en Colombia para hospitales y siderurgia.', q:'¿Cuál es la masa molar correcta del O₂?', o:['31.998 g/mol','15.999 g/mol','32.998 g/mol','30.996 g/mol'], f:'O₂'},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'', q:'¿Cuál es la masa molar correcta del Fe₂O₃?', o:['159.687 g/mol','143.688 g/mol','167.682 g/mol','151.689 g/mol'], f:'Fe₂O₃'},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'La cal apagada se usa para encalar cultivos en zonas rurales colombianas.', q:'¿Cuál es la masa molar correcta del Ca(OH)₂?', o:['74.092 g/mol','56.077 g/mol','58.085 g/mol','90.091 g/mol'], f:'Ca(OH)₂'},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'', q:'¿Cuál es la masa molar correcta del NH₃?', o:['17.031 g/mol','14.007 g/mol','18.039 g/mol','15.015 g/mol'], f:'NH₃'},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'El gas natural se distribuye en ciudades colombianas para cocinar y calentar agua.', q:'¿Cuál es la masa molar correcta del CH₄?', o:['16.043 g/mol','12.011 g/mol','20.055 g/mol','14.035 g/mol'], f:'CH₄'},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'', q:'¿Cuál es la masa molar correcta del C₈H₁₈ (octano)?', o:['114.232 g/mol','106.198 g/mol','122.240 g/mol','98.182 g/mol'], f:'C₈H₁₈'},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'El permanganato de potasio se usa en plantas de potabilización de agua en Colombia.', q:'¿Cuál es la masa molar correcta del KMnO₄?', o:['158.032 g/mol','142.034 g/mol','174.030 g/mol','150.036 g/mol'], f:'KMnO₄'},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'', q:'¿Cuál es la masa molar correcta del Na₂SO₄?', o:['142.036 g/mol','126.037 g/mol','158.035 g/mol','110.040 g/mol'], f:'Na₂SO₄'},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'La alúmina (óxido de aluminio) se usa como refractario en varias industrias colombianas.', q:'¿Cuál es la masa molar correcta del Al₂O₃?', o:['101.961 g/mol','85.962 g/mol','117.960 g/mol','69.963 g/mol'], f:'Al₂O₃'},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'', q:'¿Cuál es la masa molar correcta del MgO?', o:['40.304 g/mol','32.296 g/mol','48.312 g/mol','56.303 g/mol'], f:'MgO'},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'El nitrógeno representa el 78% del aire que respiramos en Colombia.', q:'¿Cuál es la masa molar correcta del N₂?', o:['28.014 g/mol','14.007 g/mol','30.022 g/mol','26.006 g/mol'], f:'N₂'},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'', q:'¿Cuál es la masa molar correcta del H₂, el gas más ligero que existe?', o:['2.016 g/mol','1.008 g/mol','4.032 g/mol','2.000 g/mol'], f:'H₂'},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'El cloro se usa para potabilizar el agua en acueductos de ciudades colombianas.', q:'¿Cuál es la masa molar correcta del Cl₂?', o:['70.90 g/mol','35.45 g/mol','77.90 g/mol','63.90 g/mol'], f:'Cl₂'},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'', q:'¿Cuál es la masa molar correcta del FeCl₃?', o:['162.195 g/mol','146.745 g/mol','178.195 g/mol','126.745 g/mol'], f:'FeCl₃'},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'El sulfato de cobre se usa en cultivos de flores colombianos como fungicida.', q:'¿Cuál es la masa molar correcta del CuSO₄?', o:['159.602 g/mol','143.602 g/mol','175.606 g/mol','127.606 g/mol'], f:'CuSO₄'},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'', q:'¿Cuál es la masa molar correcta del ZnO?', o:['81.379 g/mol','65.380 g/mol','97.378 g/mol','73.389 g/mol'], f:'ZnO'},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'El dicromato de potasio se usa en análisis de calidad de aguas residuales en Colombia.', q:'¿Cuál es la masa molar correcta del K₂Cr₂O₇?', o:['294.181 g/mol','270.183 g/mol','252.185 g/mol','312.179 g/mol'], f:'K₂Cr₂O₇'},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'', q:'¿Cuál es la masa molar correcta del HNO₃, usado en la producción de fertilizantes nitrogenados en Colombia?', o:['63.012 g/mol','47.009 g/mol','79.012 g/mol','61.004 g/mol'], f:'HNO₃'},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'El agua de los ríos colombianos (Magdalena, Cauca) es la sustancia de referencia más común para practicar cálculos de mol.', q:'Si la masa molar del H₂O es 18.015 g/mol, ¿cuántos gramos hay en 3 moles de agua?', o:['54.045 g','18.015 g','36.030 g','60.050 g']},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'', q:'Si la masa molar del HCl es 36.458 g/mol, ¿cuántos gramos hay en 0.5 moles de HCl?', o:['18.229 g','36.458 g','72.916 g','9.115 g']},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'El ácido sulfúrico industrial se dosifica por moles en procesos mineros colombianos.', q:'Si la masa molar del H₂SO₄ es 98.072 g/mol, ¿cuántos gramos hay en 4 moles?', o:['392.288 g','98.072 g','196.144 g','245.180 g']},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'', q:'Si tienes 88.018 g de CO₂ (masa molar 44.009 g/mol), ¿cuántos moles son?', o:['2 moles','1 mol','4 moles','0.5 moles']},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'La sal de Zipaquirá se comercializa por toneladas, pero cada mol de NaCl contiene siempre el mismo número de partículas.', q:'Si tienes 29.22 g de NaCl (masa molar 58.44 g/mol), ¿cuántos moles son?', o:['0.5 moles','1 mol','2 moles','0.25 moles']},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'', q:'¿Cuál es la fórmula correcta para pasar de gramos a moles?', o:['moles = gramos ÷ masa molar','moles = gramos × masa molar','moles = masa molar ÷ gramos','moles = gramos + masa molar']},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'', q:'¿Cuál es la fórmula correcta para pasar de moles a gramos?', o:['gramos = moles × masa molar','gramos = moles ÷ masa molar','gramos = masa molar ÷ moles','gramos = moles + masa molar']},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'En la industria colombiana de baterías y minería se maneja el ácido sulfúrico en cantidades calculadas en moles.', q:'¿Por qué los químicos usan el mol en vez de contar átomos o moléculas uno por uno?', o:['Porque las partículas son demasiado pequeñas y numerosas para contarlas directamente','Porque el mol es una unidad de masa, no de cantidad de partículas','Porque solo los compuestos con oxígeno se pueden contar en moles','Porque el número de Avogadro cambia según la sustancia']},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'', q:'¿Cuántas partículas hay en 2 moles de cualquier sustancia?', o:['1.2044×10²⁴','6.022×10²³','3.011×10²³','1.2044×10²³']},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'', q:'Al calcular la masa molar del NaCl sumando 22.990 (Na) + 35.45 (Cl), ¿qué error daría un resultado incorrecto de 58.44×2=116.88 g/mol para 1 mol?', o:['Multiplicar por 2 sin que la fórmula tenga 2 átomos de algún elemento que lo justifique','Redondear los decimales de las masas atómicas','Usar la masa atómica del cloro en vez de la del sodio','Olvidar sumar el hidrógeno de la fórmula']},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'El óxido de zinc se usa en protector solar y pinturas fabricadas en Colombia.', q:'Para calcular la masa molar del ZnO, ¿qué pasos sigues?', o:['Sumar la masa atómica del Zn más la masa atómica del O','Sumar la masa atómica del Zn más el doble de la del O','Multiplicar la masa atómica del Zn por la del O','Restar la masa atómica del O a la del Zn']},
{tema:'mol-masa', c:'exp', k:'Q', ctx:'', q:'Si una fórmula tiene un subíndice 3 para el oxígeno, como en Al₂O₃, ¿cómo se incluye el oxígeno en el cálculo de la masa molar?', o:['Se multiplica la masa atómica del oxígeno por 3 antes de sumar','Se suma la masa atómica del oxígeno una sola vez, sin importar el subíndice','Se divide la masa atómica del oxígeno entre 3','Se ignora el subíndice si el compuesto tiene más de un elemento']},
{tema:'mol-masa', c:'uso', k:'Q', ctx:'', q:'¿En qué unidades se expresa siempre la masa molar?', o:['Gramos por mol (g/mol)','Gramos (g)','Moles (mol)','Unidades de masa atómica (uma) solamente']},
{tema:'mol-masa', c:'ind', k:'CTS', ctx:'El cloruro de hierro (III) se usa como coagulante en plantas de tratamiento de agua en Colombia.', q:'Si la masa molar del FeCl₃ es 162.195 g/mol, ¿cuántos gramos hay en 2 moles?', o:['324.390 g','162.195 g','81.098 g','243.293 g']},
{tema:'elemento', c:'sim', k:'Q', ctx:'', q:'¿Cuál es el nombre del elemento con símbolo "Na"?', o:['Sodio','Nitrógeno','Níquel','Neón']},
{tema:'elemento', c:'sim', k:'Q', ctx:'', q:'¿Cuál es el símbolo químico del calcio?', o:['Ca','Cl','C','Co']},
{tema:'elemento', c:'sim', k:'Q', ctx:'', q:'¿Cuál es el nombre del elemento con símbolo "K"?', o:['Potasio','Kriptón','Carbono','Calcio']},
{tema:'elemento', c:'sim', k:'Q', ctx:'', q:'¿Cuál es el símbolo químico del hierro?', o:['Fe','Hi','Ir','Hg']},
{tema:'elemento', c:'sim', k:'Q', ctx:'', q:'¿Qué elemento tiene el símbolo "Ag"?', o:['Plata','Oro','Aluminio','Argón']},
{tema:'elemento', c:'sim', k:'Q', ctx:'', q:'¿Cuál es el símbolo químico del oro?', o:['Au','Or','Ag','O']},
{tema:'elemento', c:'sim', k:'Q', ctx:'', q:'¿Qué elemento tiene el símbolo "Sn"?', o:['Estaño','Antimonio','Silicio','Azufre']},
{tema:'elemento', c:'sim', k:'Q', ctx:'', q:'¿Cuál es el símbolo químico del plomo?', o:['Pb','Pl','Po','P']},

{tema:'elemento', c:'num', k:'Q', ctx:'', q:'¿Cuál es el número atómico del oxígeno?', o:['8','16','6','18']},
{tema:'elemento', c:'num', k:'Q', ctx:'', q:'¿Cuántos protones tiene un átomo de sodio neutro?', o:['11','23','12','1']},
{tema:'elemento', c:'num', k:'Q', ctx:'', q:'¿Cuál es el número atómico del hierro?', o:['26','56','8','30']},
{tema:'elemento', c:'num', k:'Q', ctx:'', q:'¿Cuál es el número atómico del azufre?', o:['16','32','6','2']},
{tema:'elemento', c:'num', k:'Q', ctx:'', q:'¿Cuál es el número atómico del cloro?', o:['17','35','7','1']},

{tema:'elemento', c:'tipo', k:'Q', ctx:'', q:'El sodio (Na) pertenece al grupo 1 de la tabla periódica. ¿A qué categoría corresponde?', o:['Metal alcalino','Alcalinotérreo','Halógeno','Gas noble']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'', q:'El calcio (Ca) pertenece al grupo 2. ¿Cómo se clasifica?', o:['Alcalinotérreo','Metal alcalino','Metaloide','No metal']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'', q:'El cloro (Cl) pertenece al grupo 17. ¿Cómo se clasifica esta familia de elementos?', o:['Halógeno','Gas noble','Metal alcalino','Metaloide']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'', q:'El helio (He) y el neón (Ne) pertenecen al grupo 18. ¿Cómo se llama esta familia?', o:['Gas noble','Halógeno','Metal de transición','Alcalinotérreo']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'', q:'El hierro (Fe), el cobre (Cu) y el zinc (Zn) están en la zona central de la tabla periódica. ¿Cómo se clasifican?', o:['Metales de transición','Metaloides','Halógenos','Gases nobles']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'', q:'El silicio (Si) tiene propiedades intermedias entre metal y no metal. ¿Cómo se clasifica?', o:['Metaloide','Metal alcalino','Halógeno','Gas noble']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'', q:'Según su clasificación, ¿qué tienden a hacer los metales al formar un ion?', o:['Perder electrones y formar cationes','Ganar electrones y formar aniones','No formar iones','Ganar y perder electrones a la vez']},
{tema:'elemento', c:'tipo', k:'Q', ctx:'', q:'Según su clasificación, ¿qué tienden a hacer los no metales al formar un ion?', o:['Ganar electrones y formar aniones','Perder electrones y formar cationes','No formar iones','Compartir protones']},

{tema:'elemento', c:'per', k:'Q', ctx:'', q:'El sodio (Na) está en el periodo 3. ¿Qué indica el número de periodo de un elemento?', o:['El número de niveles (capas) de electrones del átomo','El número de protones en el núcleo','El número de electrones de valencia','El valor de la masa atómica']},
{tema:'elemento', c:'per', k:'Q', ctx:'', q:'El litio (Li) y el sodio (Na) tienen valencia +1 y están en el mismo grupo. ¿Qué otro elemento del mismo grupo también tendría previsiblemente EO +1?', o:['Potasio (K)','Calcio (Ca)','Cloro (Cl)','Hierro (Fe)']},
{tema:'elemento', c:'per', k:'Q', ctx:'', q:'El magnesio (Mg) y el calcio (Ca) están en el mismo grupo (2). ¿Qué estado de oxidación comparten?', o:['+2','+1','-2','+3']},
{tema:'elemento', c:'per', k:'Q', ctx:'', q:'El oxígeno está en el periodo 2. ¿En qué periodo está el azufre, que pertenece al mismo grupo?', o:['Periodo 3','Periodo 2','Periodo 4','Periodo 1']},
{tema:'elemento', c:'per', k:'Q', ctx:'', q:'¿Qué elemento está en el mismo grupo que el flúor (los halógenos)?', o:['Cloro','Oxígeno','Neón','Sodio']},

{tema:'elemento', c:'eo', k:'Q', ctx:'', q:'El calcio tiene valencia fija +2. ¿Cuál de estos elementos también tiene valencia fija +2?', o:['Magnesio','Sodio','Aluminio','Cloro']},
{tema:'elemento', c:'eo', k:'Q', ctx:'', q:'El hierro tiene más de un estado de oxidación posible. ¿Cuáles son sus dos valencias más comunes?', o:['+2 y +3','+1 y +2','+3 y +4','+2 y +4']},
{tema:'elemento', c:'eo', k:'Q', ctx:'', q:'El sodio tiene valencia fija +1. ¿Por qué no varía, a diferencia del hierro?', o:['Porque está en el grupo 1 y no es un metal de transición','Porque el sodio es en realidad un no metal','Porque el sodio no forma compuestos iónicos','Porque el sodio tiene más protones que el hierro']},
{tema:'elemento', c:'eo', k:'Q', ctx:'', q:'El oxígeno casi siempre tiene estado de oxidación -2. ¿Qué tipo de ion forma como consecuencia?', o:['Un anión','Un catión','No forma iones','Un ion con carga positiva']},
{tema:'elemento', c:'eo', k:'Q', ctx:'', q:'El cobre puede tener estado de oxidación +1 o +2. ¿Qué nombres tradicionales corresponden a estas dos valencias?', o:['Cuproso (+1) y cúprico (+2)','Ferroso (+1) y férrico (+2)','Niqueloso (+1) y niquélico (+2)','Auroso (+1) y aúrico (+2)']},

{tema:'elemento', c:'en', k:'Q', ctx:'', q:'Entre el flúor (F) y el sodio (Na), ¿cuál es más electronegativo?', o:['El flúor','El sodio','Ambos son iguales','Ninguno tiene electronegatividad']},
{tema:'elemento', c:'en', k:'Q', ctx:'', q:'Entre el oxígeno (O) y el calcio (Ca), ¿cuál es más electronegativo?', o:['El oxígeno','El calcio','Ambos son iguales','Ninguno']},
{tema:'elemento', c:'en', k:'Q', ctx:'', q:'Los gases nobles como el helio y el neón casi no reaccionan químicamente. ¿Qué se puede esperar de su electronegatividad?', o:['Que no se les asigna un valor útil de electronegatividad (no forman enlaces)','Que son los más electronegativos de la tabla','Que son iguales a los metales alcalinos','Que su electronegatividad aumenta con la masa']},
{tema:'elemento', c:'en', k:'Q', ctx:'', q:'Entre el cloro (Cl) y el aluminio (Al), ¿cuál es más electronegativo?', o:['El cloro','El aluminio','Ambos son iguales','Ninguno']},

{tema:'elemento', c:'ind', k:'CTS', ctx:'', q:'La industria colombiana explora depósitos de un metal alcalino en Boyacá, cuyo carbonato se usa en el tratamiento del trastorno bipolar en el sistema de salud público (EPS). ¿De qué elemento se trata?', o:['Litio','Sodio','Potasio','Magnesio']},
{tema:'elemento', c:'ind', k:'CTS', ctx:'', q:'Las minas de sal de Zipaquirá (Cundinamarca), Patrimonio Cultural colombiano con más de 500 años de explotación, extraen un compuesto formado por cloro y un metal alcalino. ¿Qué metal es?', o:['Sodio','Potasio','Litio','Calcio']},
{tema:'elemento', c:'ind', k:'CTS', ctx:'El volcán Galeras (Nariño) libera naturalmente un óxido de este elemento, que también se extrae del petróleo en Barrancabermeja y se usa en fungicidas agrícolas.', q:'¿De qué elemento se trata?', o:['Azufre','Carbono','Nitrógeno','Cloro']},
{tema:'elemento', c:'ind', k:'CTS', ctx:'', q:'Los fertilizantes usados en cultivos de café, arroz y palma africana en Colombia, y el ácido producido en plantas de Cartagena, tienen como elemento base a:', o:['Nitrógeno','Fósforo','Potasio','Azufre']},
{tema:'elemento', c:'ind', k:'CTS', ctx:'', q:'La única siderúrgica integrada de Colombia, en Paz de Río (Boyacá), procesa hematita para producir acero a partir de un metal de transición. ¿Cuál es ese metal?', o:['Hierro','Cobre','Zinc','Manganeso']},
{tema:'elemento', c:'ind', k:'CTS', ctx:'', q:'La minería artesanal de oro en Chocó, Antioquia y Cauca suele usar un metal líquido a temperatura ambiente para separar el oro, generando contaminación ambiental grave. ¿Qué elemento es ese metal?', o:['Mercurio','Plomo','Plata','Cadmio']},
{tema:'elemento', c:'ind', k:'CTS', ctx:'', q:'El nitrato de un metal alcalino (conocido como salitre) es clave en la floricultura de la Sabana de Bogotá y en la pólvora de las fiestas de fin de año. ¿Qué metal es?', o:['Potasio','Sodio','Litio','Calcio']},
{tema:'elemento', c:'ind', k:'CTS', ctx:'', q:'Desde 1950 Colombia exige añadir un halógeno a la sal de consumo humano para prevenir el bocio, algo que supervisa el INVIMA. ¿Qué elemento es?', o:['Yodo','Cloro','Flúor','Bromo']},

{tema:'reactividad', c:'oxi', k:'Q', ctx:'', q:'El litio tiene valencia +1. ¿Cuál es la fórmula de su óxido en la cadena de reactividad?', o:['Li₂O','LiO','Li₂O₂','LiO₂']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'', q:'El sodio tiene valencia +1. ¿Cuál es la fórmula de su óxido?', o:['Na₂O','NaO','Na₂O₂','NaO₂']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'', q:'El potasio tiene valencia +1. ¿Cuál es la fórmula de su óxido?', o:['K₂O','KO','K₂O₂','KO₂']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'', q:'El magnesio tiene valencia +2. ¿Cuál es la fórmula de su óxido?', o:['MgO','Mg₂O','MgO₂','Mg₂O₃']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'', q:'El calcio tiene valencia +2. ¿Cuál es la fórmula de su óxido?', o:['CaO','Ca₂O','CaO₂','Ca₂O₃']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'', q:'El bario tiene valencia +2. ¿Cuál es la fórmula de su óxido?', o:['BaO','Ba₂O','BaO₂','Ba₂O₃']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'', q:'El aluminio tiene valencia +3. ¿Cuál es la fórmula de su óxido?', o:['Al₂O₃','AlO₃','Al₃O₂','AlO']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'', q:'El hierro con valencia +2 forma un óxido. ¿Cuál es su fórmula?', o:['FeO','Fe₂O₃','FeO₂','Fe₂O']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'', q:'El hierro con valencia +3 forma un óxido distinto al de valencia +2. ¿Cuál es su fórmula?', o:['Fe₂O₃','FeO','Fe₃O₂','FeO₃']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'', q:'El cobre con valencia +2 forma un óxido. ¿Cuál es su fórmula?', o:['CuO','Cu₂O','CuO₂','Cu₂O₃']},
{tema:'reactividad', c:'oxi', k:'Q', ctx:'', q:'El zinc tiene valencia fija +2. ¿Cuál es la fórmula de su óxido?', o:['ZnO','Zn₂O','ZnO₂','Zn₂O₃']},

{tema:'reactividad', c:'hid', k:'Q', ctx:'', q:'El óxido de litio (Li₂O) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['LiOH','Li(OH)₂','Li₂OH','LiO₂H']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'', q:'El óxido de magnesio (MgO) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['Mg(OH)₂','MgOH','Mg(OH)₃','Mg₂OH']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'', q:'El óxido de aluminio (Al₂O₃) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['Al(OH)₃','Al(OH)₂','AlOH','Al₂(OH)₃']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'', q:'El óxido de bario (BaO) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['Ba(OH)₂','BaOH','Ba(OH)₃','Ba₂OH']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'', q:'El óxido de hierro(III) (Fe₂O₃) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['Fe(OH)₃','Fe(OH)₂','FeOH','Fe₂(OH)₃']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'', q:'El óxido de cobre (CuO) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['Cu(OH)₂','CuOH','Cu(OH)₃','Cu₂OH']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'', q:'El óxido de zinc (ZnO) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['Zn(OH)₂','ZnOH','Zn(OH)₃','Zn₂OH']},
{tema:'reactividad', c:'hid', k:'Q', ctx:'', q:'El óxido de potasio (K₂O) reacciona con agua. ¿Cuál es la fórmula del hidróxido resultante?', o:['KOH','K(OH)₂','K₂OH','KO₂H']},

{tema:'reactividad', c:'pas', k:'Q', ctx:'', q:'Para pasar del metal (sodio) a su óxido básico (Na₂O), ¿qué sustancia debe reaccionar con el sodio?', o:['Oxígeno (O₂)','Agua (H₂O)','Un ácido','Otro metal']},
{tema:'reactividad', c:'pas', k:'Q', ctx:'', q:'Para pasar del óxido básico (CaO) al hidróxido (Ca(OH)₂), ¿qué sustancia debe reaccionar con el óxido?', o:['Agua (H₂O)','Oxígeno (O₂)','Un ácido oxácido','Otro óxido']},
{tema:'reactividad', c:'pas', k:'Q', ctx:'', q:'Para pasar del hidróxido (Mg(OH)₂) a una sal, ¿qué tipo de sustancia debe reaccionar con el hidróxido?', o:['Un ácido (hídrico u oxácido)','Agua','Otro metal','Oxígeno']},
{tema:'reactividad', c:'pas', k:'Q', ctx:'', q:'Si el hidróxido de un metal reacciona con un ácido oxácido como el H₂SO₄, ¿qué tipo de sal se obtiene?', o:['Una sal oxigenada','Una sal binaria','Un óxido básico','Un hidróxido']},
{tema:'reactividad', c:'pas', k:'Q', ctx:'', q:'Al final de toda la cadena de reactividad (metal → óxido → hidróxido → sal), ¿qué otra sustancia se produce siempre junto con la sal?', o:['Agua (H₂O)','Oxígeno (O₂)','Hidrógeno gaseoso (H₂)','Otro óxido']},
{tema:'reactividad', c:'pas', k:'Q', ctx:'', q:'¿Cuál es el primer eslabón de la cadena de reactividad, antes de formar el óxido básico?', o:['El metal puro','El hidróxido','La sal','El ácido']},

{tema:'reactividad', c:'sal', k:'Q', ctx:'', q:'El hidróxido de sodio (NaOH) reacciona con ácido clorhídrico (HCl). ¿Cuál es la sal resultante?', o:['NaCl','Na₂Cl','NaCl₂','NaClO']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'', q:'El hidróxido de calcio (Ca(OH)₂) reacciona con ácido sulfúrico (H₂SO₄). ¿Cuál es la sal resultante?', o:['CaSO₄','Ca(SO₄)₂','CaSO₃','Ca₂SO₄']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'', q:'El hidróxido de aluminio (Al(OH)₃) reacciona con ácido nítrico (HNO₃). ¿Cuál es la sal resultante?', o:['Al(NO₃)₃','Al(NO₃)₂','Al₃NO₃','AlNO₃']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'', q:'El hidróxido de magnesio (Mg(OH)₂) reacciona con ácido fosfórico (H₃PO₄). ¿Cuál es la sal resultante?', o:['Mg₃(PO₄)₂','Mg(PO₄)₃','Mg₂PO₄','MgPO₄']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'', q:'El hidróxido de bario (Ba(OH)₂) reacciona con ácido clorhídrico (HCl). ¿Cuál es la sal resultante?', o:['BaCl₂','Ba₂Cl','BaCl','Ba(Cl)₃']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'', q:'El hidróxido de hierro(III) (Fe(OH)₃) reacciona con ácido sulfúrico (H₂SO₄). ¿Cuál es la sal resultante?', o:['Fe₂(SO₄)₃','FeSO₄','Fe(SO₄)₃','Fe₃(SO₄)₂']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'', q:'El hidróxido de cobre (Cu(OH)₂) reacciona con ácido clorhídrico (HCl). ¿Cuál es la sal resultante?', o:['CuCl₂','Cu₂Cl','CuCl','CuClO']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'', q:'El hidróxido de zinc (Zn(OH)₂) reacciona con ácido nítrico (HNO₃). ¿Cuál es la sal resultante?', o:['Zn(NO₃)₂','ZnNO₃','Zn(NO₃)₃','Zn₂NO₃']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'', q:'El hidróxido de litio (LiOH) reacciona con ácido perclórico (HClO₄). ¿Cuál es la sal resultante?', o:['LiClO₄','Li(ClO₄)₂','Li₂ClO₄','LiClO₃']},
{tema:'reactividad', c:'sal', k:'Q', ctx:'', q:'El hidróxido de potasio (KOH) reacciona con ácido sulfúrico (H₂SO₄). ¿Cuál es la sal resultante?', o:['K₂SO₄','KSO₄','K(SO₄)₂','K₂SO₃']},

{tema:'reactividad', c:'val', k:'Q', ctx:'', q:'¿Por qué un metal con valencia fija (como el sodio, siempre +1) genera una sola cadena de reactividad, mientras uno con valencia variable (como el hierro) genera varias?', o:['Porque cada valencia cambia la fórmula de óxido, hidróxido y sales','Porque el sodio no reacciona con el oxígeno del aire','Porque el hierro no alcanza a formar hidróxidos','Porque las cadenas de valencia fija no tienen sales']},
{tema:'reactividad', c:'val', k:'Q', ctx:'', q:'Si un metal tuviera una sola valencia posible (como el sodio o el calcio), ¿cuántas cadenas de reactividad completas generaría?', o:['Una sola','Dos','Tres','Ninguna']},

{tema:'reactividad', c:'mdec', k:'Q', ctx:'', q:'En el hidróxido de calcio (Ca(OH)₂), ¿qué color MDEC corresponde al grupo OH⁻?', o:['Hidróxido (rosado)','Catión (ámbar)','Anión simple (azul)','Oxoanión (verde)']},
{tema:'reactividad', c:'mdec', k:'Q', ctx:'', q:'En el sulfato de zinc (ZnSO₄), ¿qué color MDEC corresponde al Zn²⁺?', o:['Catión (ámbar)','Anión simple (azul)','Hidróxido (rosado)','Oxoanión (verde)']},
{tema:'reactividad', c:'mdec', k:'Q', ctx:'', q:'En el cloruro de magnesio (MgCl₂), ¿qué color MDEC corresponde al Cl⁻?', o:['Anión simple (azul)','Catión (ámbar)','Hidróxido (rosado)','Oxoanión (verde)']},
{tema:'reactividad', c:'mdec', k:'Q', ctx:'', q:'En el nitrato de aluminio (Al(NO₃)₃), ¿qué tipo de ion es el NO₃⁻ dentro del código de 4 colores?', o:['Oxoanión (verde)','Anión simple (azul)','Catión (ámbar)','Hidróxido (rosado)']},
{tema:'reactividad', c:'mdec', k:'Q', ctx:'', q:'En el óxido de bario (BaO), ¿qué color MDEC corresponde al Ba²⁺?', o:['Catión (ámbar)','Anión simple (azul)','Hidróxido (rosado)','Oxoanión (verde)']},
{tema:'reactividad', c:'mdec', k:'Q', ctx:'', q:'En el fosfato de magnesio (Mg₃(PO₄)₂), ¿qué tipo de ion es el PO₄³⁻?', o:['Oxoanión (verde)','Anión simple (azul)','Catión (ámbar)','Hidróxido (rosado)']}
,
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para la ecuación balanceada N₂ + 3H₂ → 2NH₃, si tienes 14 g de N₂ (MM=28.014 g/mol), ¿cuántos gramos de NH₃ (MM=17.031 g/mol) se producen?', o:['17.03 g','34.06 g','8.52 g','51.09 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para la ecuación CH₄ + 2O₂ → CO₂ + 2H₂O, si se queman 16 g de CH₄ (MM=16.043), ¿cuántos gramos de H₂O (MM=18.015) se producen?', o:['35.93 g','18.02 g','72.06 g','9.01 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para la ecuación 2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O, a partir de 72.92 g de HCl (MM=36.461), ¿cuántos gramos de CaCl₂ (MM=110.983) se producen?', o:['110.98 g','55.49 g','37.0 g','221.97 g']},
{tema:'estequiometria', c:'lim', k:'Q', ctx:'', q:'Para la reacción 2H₂ + O₂ → 2H₂O, ¿cuál es el reactivo limitante si tienes 4 g de H₂ (MM=2.016) y 40 g de O₂ (MM=32.00)?', o:['H₂','O₂','Ambos se agotan igual','Ninguno; sobran los dos']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para la ecuación 2Al + 3Cl₂ → 2AlCl₃, si reaccionan 27.0 g de Al (MM=26.982), ¿cuántos gramos de AlCl₃ (MM=133.341) se obtienen?', o:['133.3 g','266.7 g','44.4 g','88.9 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para 2Mg + O₂ → 2MgO, a partir de 12.15 g de Mg (MM=24.305), ¿cuántos gramos de MgO (MM=40.304) se producen?', o:['20.15 g','12.15 g','40.30 g','10.08 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para Zn + 2HCl → ZnCl₂ + H₂, a partir de 13.08 g de Zn (MM=65.38), ¿cuántos gramos de ZnCl₂ (MM=136.28) se producen?', o:['27.26 g','13.63 g','54.52 g','6.81 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para 4Al + 3O₂ → 2Al₂O₃, a partir de 54.0 g de Al (MM=26.982), ¿cuántos gramos de Al₂O₃ (MM=101.961) se producen?', o:['102.03 g','204.1 g','51.0 g','68.0 g']},
{tema:'estequiometria', c:'calc', k:'CTS', ctx:'En una planta de galvanizado se hace reaccionar hierro con sulfato de cobre para depositar cobre metálico, como en la reacción Fe + CuSO₄ → FeSO₄ + Cu.', q:'A partir de 31.92 g de CuSO₄ (MM=159.602), ¿cuántos gramos de Cu (MM=63.546) se obtienen?', o:['12.71 g','25.42 g','6.35 g','31.92 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O, a partir de 49.04 g de H₂SO₄ (MM=98.072), ¿cuántos gramos de Na₂SO₄ (MM=142.036) se producen?', o:['71.02 g','142.04 g','35.51 g','49.04 g']},
{tema:'estequiometria', c:'calc', k:'CTS', ctx:'El propano (C₃H₈) se usa en cilindros de gas en zonas rurales colombianas sin acceso a gas natural por tubería.', q:'Para C₃H₈ + 5O₂ → 3CO₂ + 4H₂O, a partir de 22.05 g de C₃H₈ (MM=44.097), ¿cuántos gramos de CO₂ (MM=44.009) se producen?', o:['66.02 g','44.01 g','22.05 g','132.03 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂, a partir de 50.04 g de CaCO₃ (MM=100.086), ¿cuántos gramos de HCl (MM=36.458) se necesitan?', o:['36.46 g','18.23 g','72.92 g','50.04 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para 2Na + 2H₂O → 2NaOH + H₂, a partir de 23.0 g de Na (MM=22.990), ¿cuántos gramos de H₂ (MM=2.016) se producen?', o:['1.01 g','2.02 g','0.50 g','4.03 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para Fe₂O₃ + 3CO → 2Fe + 3CO₂, a partir de 79.85 g de Fe₂O₃ (MM=159.687), ¿cuántos gramos de Fe (MM=55.845) se producen?', o:['55.85 g','111.69 g','27.92 g','79.85 g']},
{tema:'estequiometria', c:'calc', k:'CTS', ctx:'En joyería artesanal, el cobre metálico puede desplazar a la plata de una disolución de nitrato de plata, como en Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag.', q:'A partir de 31.77 g de Cu (MM=63.546), ¿cuántos gramos de Ag (MM=107.868) se obtienen?', o:['107.86 g','53.93 g','215.74 g','31.77 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para 4P + 5O₂ → 2P₂O₅, a partir de 12.39 g de P (MM=30.974), ¿cuántos gramos de P₂O₅ (MM=141.943) se producen?', o:['28.39 g','56.78 g','14.19 g','12.39 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para 2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂, a partir de 53.96 g de Al (MM=26.982), ¿cuántos gramos de H₂ (MM=2.016) se producen?', o:['6.05 g','4.03 g','12.10 g','2.02 g']},
{tema:'estequiometria', c:'calc', k:'CTS', ctx:'La roca fosfórica colombiana se trata con ácido sulfúrico para producir ácido fosfórico, usado en fertilizantes: Ca₃(PO₄)₂ + 3H₂SO₄ → 3CaSO₄ + 2H₃PO₄.', q:'A partir de 155.09 g de Ca₃(PO₄)₂ (MM=310.174), ¿cuántos gramos de H₃PO₄ (MM=97.994) se producen?', o:['98.0 g','196.0 g','49.0 g','155.09 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para 4NH₃ + 5O₂ → 4NO + 6H₂O, a partir de 34.06 g de NH₃ (MM=17.031), ¿cuántos gramos de NO (MM=30.006) se producen?', o:['60.01 g','30.01 g','120.02 g','34.06 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para CaO + H₂O → Ca(OH)₂, a partir de 28.04 g de CaO (MM=56.077), ¿cuántos gramos de Ca(OH)₂ (MM=74.092) se producen?', o:['37.05 g','28.04 g','74.09 g','18.52 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para HCl + NaOH → NaCl + H₂O, a partir de 36.46 g de HCl (MM=36.458), ¿cuántos gramos de NaCl (MM=58.44) se producen?', o:['58.44 g','36.46 g','29.22 g','116.88 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para N₂ + 3H₂ → 2NH₃, a partir de 6.05 g de H₂ (MM=2.016), ¿cuántos gramos de NH₃ (MM=17.031) se producen?', o:['34.07 g','17.03 g','68.14 g','6.05 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para 4Fe + 3O₂ → 2Fe₂O₃, a partir de 22.34 g de Fe (MM=55.845), ¿cuántos gramos de Fe₂O₃ (MM=159.687) se producen?', o:['31.94 g','63.87 g','22.34 g','15.97 g']},
{tema:'estequiometria', c:'calc', k:'Q', ctx:'', q:'Para H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O, si se necesitan neutralizar 20.0 g de NaOH (MM=39.997), ¿cuántos gramos de H₂SO₄ (MM=98.072) se requieren?', o:['24.52 g','49.04 g','20.0 g','12.26 g']},
{tema:'estequiometria', c:'pasos', k:'Q', ctx:'', q:'En el método de factor-unitario para resolver un problema de estequiometría, ¿cuál es el PRIMER paso, antes de usar la razón molar de la ecuación?', o:['Convertir los gramos del dato a moles del dato (÷ masa molar del dato)','Convertir los moles de lo pedido a gramos de lo pedido','Multiplicar directamente los gramos del dato por la masa molar de lo pedido','Balancear de nuevo la ecuación química']},
{tema:'estequiometria', c:'pasos', k:'Q', ctx:'', q:'¿Cuál es el error más común al calcular la razón molar entre dos especies de una ecuación balanceada?', o:['Usarla al revés (coeficiente del dato ÷ coeficiente de lo pedido, en vez de lo pedido ÷ dato)','Olvidar que los coeficientes deben ser números enteros','Confundir el coeficiente con el subíndice de la fórmula','Usar coeficientes de una ecuación sin balancear']},
{tema:'estequiometria', c:'pasos', k:'Q', ctx:'', q:'¿Por qué es obligatorio pasar primero los gramos del dato a MOLES, y no trabajar directamente con los gramos?', o:['Porque la razón molar de la ecuación balanceada relaciona moles, no gramos, de cada especie','Porque los gramos no se pueden convertir a otras unidades','Porque la masa molar solo sirve para sólidos','Porque los coeficientes de la ecuación están en gramos']},
{tema:'estequiometria', c:'lim', k:'Q', ctx:'', q:'Al identificar el reactivo limitante en una reacción con dos reactivos dados en gramos, ¿qué se debe comparar?', o:['Los moles disponibles de cada reactivo contra la razón molar que exige la ecuación balanceada','Los gramos disponibles de cada reactivo directamente, sin convertir a moles','Solo las masas molares de los dos reactivos','El color de cada reactivo en el laboratorio']},
{tema:'estequiometria', c:'lim', k:'Q', ctx:'', q:'¿Qué consecuencia tiene identificar mal el reactivo limitante en un cálculo de estequiometría?', o:['Se calcula una cantidad de producto mayor a la que realmente se puede formar','El resultado sigue siendo correcto porque el otro reactivo no afecta el cálculo','La ecuación química queda sin balancear','Cambia el estado de oxidación de los productos']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'', q:'¿Qué información necesitas ANTES de poder resolver cualquier problema de estequiometría entre dos especies de una reacción?', o:['La ecuación química ya balanceada (con sus coeficientes correctos)','Solo las masas molares de las especies, sin la ecuación','El estado físico (sólido, líquido, gas) de cada especie','El nombre comercial del compuesto']},
{tema:'estequiometria', c:'conc', k:'CTS', ctx:'Un ingeniero de una planta de fertilizantes en Colombia necesita calcular cuánto amoníaco (NH₃) comprar para producir una tonelada de un fertilizante nitrogenado.', q:'¿Qué dato adicional, además del precio del amoníaco, necesita el ingeniero para hacer este cálculo con estequiometría?', o:['La ecuación balanceada de la reacción entre el amoníaco y los demás reactivos del proceso','Solo el color del amoníaco líquido','La fecha de fabricación del fertilizante','El nombre del proveedor del amoníaco']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'', q:'Si una ecuación balanceada es 2Al + 3Cl₂ → 2AlCl₃, ¿cuál es la razón molar correcta para convertir de moles de Cl₂ a moles de AlCl₃?', o:['2 mol AlCl₃ / 3 mol Cl₂','3 mol AlCl₃ / 2 mol Cl₂','1 mol AlCl₃ / 1 mol Cl₂','2 mol Cl₂ / 3 mol AlCl₃']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'', q:'¿Qué unidad usan los coeficientes de una ecuación química balanceada para relacionar las cantidades de reactivos y productos?', o:['Moles','Gramos','Litros','Átomos individuales']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'', q:'Si duplicas la cantidad de gramos de un reactivo en un problema de estequiometría (y el otro reactivo sigue en exceso), ¿qué pasa con los gramos de producto obtenidos?', o:['También se duplican','Se reducen a la mitad','Quedan exactamente igual','Se triplican']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'', q:'¿Por qué NO se puede calcular estequiometría con una ecuación química que todavía no está balanceada?', o:['Porque los coeficientes sin balancear no reflejan la proporción real de átomos que reaccionan','Porque las fórmulas cambiarían de un lado a otro de la ecuación','Porque las masas molares solo existen para ecuaciones balanceadas','Porque una ecuación sin balancear no tiene reactivos ni productos']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'', q:'En el problema "a partir de 16 g de CH₄ (MM=16.043), ¿cuántos gramos de H₂O se producen?", ¿cuántos moles de CH₄ hay, aproximadamente, antes de aplicar la razón molar?', o:['≈0.997 mol','≈16 mol','≈1.6 mol','≈0.5 mol']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'', q:'¿Qué parte de la ecuación química NUNCA cambia al resolver un problema de estequiometría, sin importar los gramos que se den?', o:['Los coeficientes de la ecuación ya balanceada','La masa molar de cada especie','La cantidad de gramos del dato','El resultado final en gramos']},
{tema:'estequiometria', c:'conc', k:'Q', ctx:'', q:'¿Cuál de estas secuencias de conversión es la correcta para ir de "gramos del reactivo A" a "gramos del producto B"?', o:['gramos A → moles A → moles B → gramos B','gramos A → gramos B directamente','moles A → gramos A → gramos B','gramos A → moles B → gramos A → gramos B']},
{tema:'atomo', c:'uso', k:'Q', ctx:'', q:'¿Qué indica el número atómico (Z) de un elemento?', o:['El número de protones de su núcleo','El número de neutrones de su núcleo','La suma de protones y neutrones','El número de niveles de energía que tiene']},
{tema:'atomo', c:'exp', k:'Q', ctx:'En el tubo de rayos catódicos de Thomson, el haz invisible que sale del cátodo se desvía hacia la placa con carga positiva.', q:'¿Qué se puede concluir sobre las partículas que forman el haz?', o:['Tienen carga negativa','Tienen carga positiva','No tienen carga eléctrica','Son ondas de luz sin masa']},
{tema:'atomo', c:'ind', k:'Q', ctx:'En el experimento de Geiger y Marsden se dispararon partículas alfa contra una lámina de oro muy delgada. Casi todas la atravesaron sin desviarse, pero aproximadamente 1 de cada 8000 rebotó.', q:'¿Qué conclusión explica AMBOS resultados?', o:['El átomo es casi todo espacio vacío, con un núcleo pequeño, denso y positivo','El átomo es una esfera maciza de carga positiva repartida','Los electrones son más pesados que las partículas alfa','La lámina de oro tenía agujeros visibles']},
{tema:'atomo', c:'exp', k:'Q', ctx:'', q:'¿Qué idea del modelo de Dalton quedó descartada con el descubrimiento del electrón?', o:['Que el átomo es indivisible','Que la masa se conserva en las reacciones','Que los compuestos tienen proporciones fijas','Que los elementos están formados por átomos']},
{tema:'atomo', c:'uso', k:'Q', ctx:'', q:'Un ion tiene 16 protones, 16 neutrones y 18 electrones. ¿Cuál es?', o:['S²⁻ (azufre-32)','S²⁺ (azufre-32)','Ar (argón-34)','O²⁻ (oxígeno-16)']},
{tema:'atomo', c:'uso', k:'Q', ctx:'', q:'¿Cuántos neutrones tiene el isótopo cloro-37 (Z = 17)?', o:['20','17','37','54']},
{tema:'atomo', c:'ind', k:'CTS', ctx:'Los arqueólogos usan el carbono-14 para fechar restos de las culturas muisca y tairona. El carbono más abundante en la naturaleza es el carbono-12.', q:'¿En qué se diferencian un átomo de carbono-14 y uno de carbono-12?', o:['En el número de neutrones (8 y 6)','En el número de protones (14 y 12)','En el número de electrones del átomo neutro','En que el carbono-14 no es carbono']},
{tema:'atomo', c:'exp', k:'Q', ctx:'Según el modelo de Bohr, el electrón del hidrógeno solo puede ocupar ciertos niveles de energía.', q:'¿Qué ocurre cuando el electrón pasa de un nivel alto (n = 3) a uno más bajo (n = 2)?', o:['Emite un fotón con una energía definida (luz de un color específico)','Absorbe un fotón de cualquier energía','Cae al núcleo y el átomo desaparece','Se convierte en un protón']},
{tema:'atomo', c:'uso', k:'Q', ctx:'', q:'¿Qué describe un orbital en el modelo mecánico-cuántico actual?', o:['Una región del espacio donde es muy probable encontrar al electrón','La trayectoria circular exacta que sigue el electrón','El lugar del núcleo donde están los neutrones','La energía total del átomo']},
{tema:'atomo', c:'exp', k:'Q', ctx:'', q:'¿Por qué la masa atómica del cloro en la tabla periódica es 35,45 y no un número entero?', o:['Porque es el promedio ponderado de la masa de sus isótopos naturales','Porque el cloro tiene medio neutrón en su núcleo','Porque incluye la masa de los electrones ganados al formar iones','Porque los instrumentos no pueden medir masas exactas']},
{tema:'atomo', c:'ind', k:'Q', ctx:'Thomson repitió su experimento cambiando el metal del cátodo (cobre, hierro, aluminio) y el haz se desvió exactamente igual en todos los casos.', q:'¿Qué indica este resultado?', o:['Que el electrón es una partícula que está en todos los átomos','Que cada metal tiene un tipo distinto de electrón','Que el metal del cátodo no emite partículas','Que los rayos catódicos tienen carga positiva']},
{tema:'atomo', c:'uso', k:'Q', ctx:'', q:'¿Cuál es el orden histórico correcto de los modelos atómicos?', o:['Dalton → Thomson → Rutherford → Bohr','Thomson → Dalton → Bohr → Rutherford','Rutherford → Dalton → Thomson → Bohr','Dalton → Bohr → Rutherford → Thomson']},
{tema:'config-e', c:'uso', k:'Q', ctx:'', q:'¿Cuál es la configuración electrónica del oxígeno (Z = 8)?', o:['1s² 2s² 2p⁴','1s² 2s² 2p⁶','1s² 2p⁶','1s² 2s⁴ 2p²']},
{tema:'config-e', c:'uso', k:'Q', ctx:'', q:'Según el diagrama de Moeller, ¿qué subnivel se llena justo después del 3p?', o:['4s','3d','4p','3f']},
{tema:'config-e', c:'exp', k:'Q', ctx:'Un estudiante dibujó así los 3 electrones del subnivel 2p del nitrógeno: [↑↓] [↑] [  ].', q:'¿Qué regla incumplió?', o:['La regla de Hund: primero debe ir un electrón en cada orbital','El principio de Pauli: en un orbital no caben 2 electrones','El principio de Aufbau: el 2p se llena antes que el 2s','Ninguna: el diagrama es correcto']},
{tema:'config-e', c:'uso', k:'Q', ctx:'', q:'¿Qué elemento tiene la configuración abreviada [Ne] 3s² 3p⁵?', o:['Cloro (Z = 17)','Azufre (Z = 16)','Argón (Z = 18)','Flúor (Z = 9)']},
{tema:'config-e', c:'exp', k:'Q', ctx:'', q:'Un elemento neutro termina su configuración en 4p³. ¿Cuál es su periodo y su grupo?', o:['Periodo 4, grupo 15','Periodo 3, grupo 15','Periodo 4, grupo 3','Periodo 4, grupo 13']},
{tema:'config-e', c:'uso', k:'Q', ctx:'', q:'¿Cuántos electrones de valencia tiene el azufre, cuya configuración es [Ne] 3s² 3p⁴?', o:['6','4','2','16']},
{tema:'config-e', c:'exp', k:'Q', ctx:'La configuración esperada del cromo (Z = 24) por la regla de Moeller es [Ar] 4s² 3d⁴, pero la real es [Ar] 4s¹ 3d⁵.', q:'¿Cómo se explica esta excepción?', o:['Un subnivel d semilleno (d⁵) es especialmente estable','El 4s tiene más energía que el 4p','El cromo pierde un electrón al formarse','Los electrones del cromo no cumplen el principio de Pauli']},
{tema:'config-e', c:'uso', k:'Q', ctx:'El hierro (Z = 26) tiene la configuración [Ar] 4s² 3d⁶.', q:'¿Cuál es la configuración del ion Fe²⁺?', o:['[Ar] 3d⁶','[Ar] 4s² 3d⁴','[Ar] 4s² 3d⁸','[Ar] 4s¹ 3d⁵']},
{tema:'config-e', c:'uso', k:'Q', ctx:'', q:'¿Cuántos electrones caben como máximo en el nivel n = 3?', o:['18','8','9','32']},
{tema:'config-e', c:'ind', k:'CTS', ctx:'En la pólvora de fin de año, las sales de estroncio dan color rojo y las de bario color verde. En el laboratorio, el ensayo a la llama permite identificar metales por su color.', q:'¿Por qué cada elemento emite colores característicos al calentarse?', o:['Porque sus electrones excitados regresan a niveles más bajos emitiendo energías exactas, propias de cada elemento','Porque cada metal tiene un color de piel distinto','Porque el calor cambia el número de protones del núcleo','Porque los neutrones se liberan como luz']},
{tema:'config-e', c:'exp', k:'Q', ctx:'', q:'El último electrón de un elemento entra en un subnivel d. ¿A qué bloque de la tabla pertenece y qué tipo de elemento es?', o:['Bloque d: metal de transición','Bloque s: metal alcalino','Bloque p: no metal','Bloque f: lantánido']},
{tema:'config-e', c:'uso', k:'Q', ctx:'', q:'¿Cuántos electrones desapareados tiene el fósforo ([Ne] 3s² 3p³)?', o:['3','1','5','0']}

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

{tema:'ac-hid', t:'rx', q:'El hidrógeno gaseoso reacciona con yodo (I₂) para formar yoduro de hidrógeno (HI), que luego se disuelve en agua. Escribe la ecuación de formación y nombra el producto disuelto en agua.'},
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
{tema:'config-e', t:'mdec', q:'En esta configuración abreviada, cuenta el total de electrones e identifica el elemento. ¿Cuántos electrones de valencia tiene y cuántos están desapareados?', partes:[['[Ar]','an'],['4s²','cat'],['3d¹⁰','ox'],['4p²','oh']]}

]

};
