// banco.js — IonNom compound bank
// Flat array used by the exercise generator.
// Fields: formula, group, level, trad[], stock[], sist[], hint

const BANCO = [

  // ─────────────────────────────────────────────
  // OX-BAS  (óxidos básicos)  — metal + O²⁻
  // ─────────────────────────────────────────────

  // -- easy (fixed-valence metals) --
  {
    formula: 'Li₂O',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de litio'],
    stock: [],
    sist: ['óxido de dilítio'],
    hint: 'Li tiene valencia fija +1. Dos Li⁺ compensan un O²⁻. Grupo 1A → óxido básico.'
  },
  {
    formula: 'Na₂O',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de sodio'],
    stock: [],
    sist: ['óxido de disodio'],
    hint: 'Na tiene valencia fija +1. Dos Na⁺ compensan un O²⁻ → óxido de sodio.'
  },
  {
    formula: 'K₂O',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de potasio'],
    stock: [],
    sist: ['óxido de dipotasio'],
    hint: 'K tiene valencia fija +1. Metal alcalino + O₂ forma óxido básico.'
  },
  {
    formula: 'Rb₂O',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de rubidio'],
    stock: [],
    sist: ['óxido de dirubidio'],
    hint: 'Rb (grupo 1A) tiene valencia fija +1. Metal alcalino + O₂.'
  },
  {
    formula: 'Cs₂O',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de cesio'],
    stock: [],
    sist: ['óxido de dicesio'],
    hint: 'Cs (grupo 1A) tiene valencia fija +1. Óxido básico.'
  },
  {
    formula: 'BeO',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de berilio'],
    stock: [],
    sist: ['óxido de berilio'],
    hint: 'Be tiene valencia fija +2. Ratio 1:1 con O²⁻ → BeO.'
  },
  {
    formula: 'MgO',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de magnesio'],
    stock: [],
    sist: ['óxido de magnesio'],
    hint: 'Mg tiene valencia fija +2. Mg²⁺ + O²⁻ → MgO.'
  },
  {
    formula: 'CaO',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de calcio'],
    stock: [],
    sist: ['óxido de calcio'],
    hint: 'Ca tiene valencia +2. Metal alcalinotérreo + O₂ → óxido básico.'
  },
  {
    formula: 'SrO',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de estroncio'],
    stock: [],
    sist: ['óxido de estroncio'],
    hint: 'Sr (grupo 2A) tiene valencia fija +2. Sr²⁺ + O²⁻ → SrO.'
  },
  {
    formula: 'BaO',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de bario'],
    stock: [],
    sist: ['óxido de bario'],
    hint: 'Ba (grupo 2A) tiene valencia fija +2. Óxido básico.'
  },
  {
    formula: 'Al₂O₃',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de aluminio'],
    stock: [],
    sist: ['trióxido de dialuminio'],
    hint: 'Al tiene valencia fija +3. 2 Al³⁺ + 3 O²⁻ = Al₂O₃. Carga: 2(+3)+3(−2)=0.'
  },
  {
    formula: 'ZnO',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de zinc'],
    stock: [],
    sist: ['óxido de zinc'],
    hint: 'Zn tiene valencia fija +2. Zn²⁺ + O²⁻ → ZnO.'
  },
  {
    formula: 'Ag₂O',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de plata'],
    stock: [],
    sist: ['óxido de diplata'],
    hint: 'Ag tiene valencia fija +1. Dos Ag⁺ compensan un O²⁻ → Ag₂O.'
  },

  // -- medium (variable-valence, 2 oxidation states) --
  {
    formula: 'FeO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido ferroso'],
    stock: ['óxido de hierro (II)'],
    sist: ['óxido de hierro'],
    hint: 'Fe²⁺ es el EO menor del hierro → sufijo -oso → ferroso. Compuesto: óxido ferroso.'
  },
  {
    formula: 'Fe₂O₃',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido férrico'],
    stock: ['óxido de hierro (III)'],
    sist: ['trióxido de dihierro'],
    hint: 'Fe³⁺ es el EO mayor del hierro → sufijo -ico → férrico. 2(+3)+3(−2)=0.'
  },
  {
    formula: 'Cu₂O',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido cuproso'],
    stock: ['óxido de cobre (I)'],
    sist: ['óxido de dicobre'],
    hint: 'Cu⁺ es el EO menor del cobre → -oso → cuproso. Dos Cu⁺ compensan un O²⁻.'
  },
  {
    formula: 'CuO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido cúprico'],
    stock: ['óxido de cobre (II)'],
    sist: ['óxido de cobre'],
    hint: 'Cu²⁺ es el EO mayor del cobre → -ico → cúprico. Cu²⁺ + O²⁻ → CuO.'
  },
  {
    formula: 'PbO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido plumboso'],
    stock: ['óxido de plomo (II)'],
    sist: ['óxido de plomo'],
    hint: 'Pb²⁺ es el EO menor del plomo → -oso → plumboso.'
  },
  {
    formula: 'PbO₂',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido plúmbico'],
    stock: ['óxido de plomo (IV)'],
    sist: ['dióxido de plomo'],
    hint: 'Pb⁴⁺ es el EO mayor del plomo → -ico → plúmbico. Pb⁴⁺ + 2 O²⁻ → PbO₂.'
  },
  {
    formula: 'SnO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido estannoso'],
    stock: ['óxido de estaño (II)'],
    sist: ['óxido de estaño'],
    hint: 'Sn²⁺ es el EO menor del estaño → -oso → estannoso.'
  },
  {
    formula: 'SnO₂',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido estánnico'],
    stock: ['óxido de estaño (IV)'],
    sist: ['dióxido de estaño'],
    hint: 'Sn⁴⁺ es el EO mayor del estaño → -ico → estánnico. Sn⁴⁺ + 2 O²⁻ → SnO₂.'
  },
  {
    formula: 'NiO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido niqueloso'],
    stock: ['óxido de níquel (II)'],
    sist: ['óxido de níquel'],
    hint: 'Ni²⁺ es el EO menor del níquel → -oso → niqueloso.'
  },
  {
    formula: 'Ni₂O₃',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido niquélico'],
    stock: ['óxido de níquel (III)'],
    sist: ['trióxido de diníquel'],
    hint: 'Ni³⁺ es el EO mayor habitual del níquel → -ico → niquélico. 2(+3)+3(−2)=0.'
  },
  {
    formula: 'CoO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido cobaltoso'],
    stock: ['óxido de cobalto (II)'],
    sist: ['óxido de cobalto'],
    hint: 'Co²⁺ es el EO menor del cobalto → -oso → cobaltoso.'
  },
  {
    formula: 'Co₂O₃',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido cobáltico'],
    stock: ['óxido de cobalto (III)'],
    sist: ['trióxido de dicobalto'],
    hint: 'Co³⁺ es el EO mayor del cobalto → -ico → cobáltico. 2(+3)+3(−2)=0.'
  },

  // -- hard (complex/multiple valences) --
  {
    formula: 'MnO',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido manganoso'],
    stock: ['óxido de manganeso (II)'],
    sist: ['óxido de manganeso'],
    hint: 'Mn puede tener EO +2,+4,+7. EO=+2 (menor habitual) → -oso → manganoso.'
  },
  {
    formula: 'MnO₂',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido mangánico'],
    stock: ['óxido de manganeso (IV)'],
    sist: ['dióxido de manganeso'],
    hint: 'Mn con EO=+4 entre +2 y +7. En tradicional hay ambigüedad; se acepta -ico para EO central.'
  },
  {
    formula: 'Cr₂O₃',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido crómico'],
    stock: ['óxido de cromo (III)'],
    sist: ['trióxido de dicromo'],
    hint: 'Cr³⁺ → EO mayor en óxidos básicos de Cr (el +6 actúa como no metal). → -ico → crómico.'
  },
  {
    formula: 'TiO₂',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido titánico'],
    stock: ['óxido de titanio (IV)'],
    sist: ['dióxido de titanio'],
    hint: 'Ti con EO=+4 (el más estable). → -ico → titánico. Mineral: rutilo.'
  },
  {
    formula: 'V₂O₅',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido vanádico'],
    stock: ['óxido de vanadio (V)'],
    sist: ['pentaóxido de divanadio'],
    hint: 'V con EO=+5 (mayor). En nomenclatura clásica → -ico → vanádico. 2(+5)+5(−2)=0.'
  },
  {
    formula: 'Bi₂O₃',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido bismutoso'],
    stock: ['óxido de bismuto (III)'],
    sist: ['trióxido de dibismuto'],
    hint: 'Bi³⁺ es el EO menor del bismuto → -oso → bismutoso. 2(+3)+3(−2)=0.'
  },
  {
    formula: 'HgO',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido mercúrico'],
    stock: ['óxido de mercurio (II)'],
    sist: ['óxido de mercurio'],
    hint: 'Hg²⁺ (mercúrico) es el EO mayor del mercurio. Hg⁺ (mercurioso) forma Hg₂²⁺.'
  },
  {
    formula: 'Au₂O',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido auroso'],
    stock: ['óxido de oro (I)'],
    sist: ['óxido de dioro'],
    hint: 'Au⁺ es el EO menor del oro → -oso → auroso. Dos Au⁺ por un O²⁻.'
  },
  {
    formula: 'Au₂O₃',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido áurico'],
    stock: ['óxido de oro (III)'],
    sist: ['trióxido de dioro'],
    hint: 'Au³⁺ es el EO mayor del oro → -ico → áurico. 2(+3)+3(−2)=0.'
  },
  {
    formula: 'VO',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido vanadioso'],
    stock: ['óxido de vanadio (II)'],
    sist: ['óxido de vanadio'],
    hint: 'V²⁺ es el EO menor del vanadio → -oso → vanadioso. V tiene EO +2,+3,+4,+5.'
  },
  {
    formula: 'V₂O₃',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido vanadioso'],
    stock: ['óxido de vanadio (III)'],
    sist: ['trióxido de divanadio'],
    hint: 'V³⁺ EO intermedio del vanadio. Stock siempre preciso. 2(+3)+3(−2)=0.'
  },

  // ─────────────────────────────────────────────
  // ANHID  (anhídridos)  — nonmetal + O
  // ─────────────────────────────────────────────

  // -- easy --
  {
    formula: 'CO₂',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido carbónico'],
    stock: [],
    sist: ['dióxido de carbono'],
    hint: 'C con EO=+4 (mayor para C). No metal + O → anhídrido. → -ico → carbónico.'
  },
  {
    formula: 'SO₃',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido sulfúrico'],
    stock: [],
    sist: ['trióxido de azufre'],
    hint: 'S con EO=+6 (mayor). → -ico → sulfúrico → anhídrido sulfúrico. S+6 + 3O−2 = 0.'
  },
  {
    formula: 'SO₂',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido sulfuroso'],
    stock: [],
    sist: ['dióxido de azufre'],
    hint: 'S con EO=+4 (menor que +6). → -oso → sulfuroso → anhídrido sulfuroso.'
  },
  {
    formula: 'N₂O₅',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido nítrico'],
    stock: [],
    sist: ['pentaóxido de dinitrógeno'],
    hint: 'N con EO=+5 (mayor). → -ico → nítrico → anhídrido nítrico. 2(+5)+5(−2)=0.'
  },
  {
    formula: 'N₂O₃',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido nitroso'],
    stock: [],
    sist: ['trióxido de dinitrógeno'],
    hint: 'N con EO=+3 (menor que +5). → -oso → nitroso → anhídrido nitroso.'
  },
  {
    formula: 'Cl₂O',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido hipocloroso'],
    stock: [],
    sist: ['monóxido de dicloro'],
    hint: 'Cl con EO=+1 (el mínimo). → prefijo hipo- → hipocloroso → anhídrido hipocloroso.'
  },
  {
    formula: 'P₂O₅',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido fosfórico'],
    stock: [],
    sist: ['pentaóxido de difósforo'],
    hint: 'P con EO=+5 (mayor). → -ico → fosfórico → anhídrido fosfórico.'
  },

  // -- medium --
  {
    formula: 'P₂O₃',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido fosforoso'],
    stock: [],
    sist: ['trióxido de difósforo'],
    hint: 'P con EO=+3 (menor que +5). → -oso → fosforoso → anhídrido fosforoso.'
  },
  {
    formula: 'Cl₂O₃',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido cloroso'],
    stock: [],
    sist: ['trióxido de dicloro'],
    hint: 'Cl con EO=+3. En la serie del cloro: +1(hipo-oso), +3(-oso), +5(-ico), +7(per-ico).'
  },
  {
    formula: 'Cl₂O₅',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido clórico'],
    stock: [],
    sist: ['pentaóxido de dicloro'],
    hint: 'Cl con EO=+5 (penúltimo). → -ico → clórico → anhídrido clórico.'
  },
  {
    formula: 'Cl₂O₇',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido perclórico'],
    stock: [],
    sist: ['heptaóxido de dicloro'],
    hint: 'Cl con EO=+7 (máximo, ≥4 estados) → prefijo per- → perclórico → anhídrido perclórico.'
  },
  {
    formula: 'As₂O₃',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido arsenioso'],
    stock: [],
    sist: ['trióxido de diarsénico'],
    hint: 'As con EO=+3 (menor). → -oso → arsenioso → anhídrido arsenioso.'
  },
  {
    formula: 'As₂O₅',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido arsénico'],
    stock: [],
    sist: ['pentaóxido de diarsénico'],
    hint: 'As con EO=+5 (mayor). → -ico → arsénico → anhídrido arsénico.'
  },
  {
    formula: 'Br₂O',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido hipobromoso'],
    stock: [],
    sist: ['monóxido de dibromo'],
    hint: 'Br con EO=+1 (mínimo). → hipo-oso → hipobromoso → anhídrido hipobromoso.'
  },
  {
    formula: 'SiO₂',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido silícico'],
    stock: [],
    sist: ['dióxido de silicio'],
    hint: 'Si con EO=+4 (único EO del Si). → -ico → silícico → anhídrido silícico.'
  },
  {
    formula: 'N₂O',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido hiponitroso'],
    stock: [],
    sist: ['monóxido de dinitrógeno'],
    hint: 'N con EO=+1 (el mínimo del N). → hipo-oso → hiponitroso → anhídrido hiponitroso.'
  },

  // -- hard --
  {
    formula: 'Mn₂O₇',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido permangánico'],
    stock: [],
    sist: ['heptaóxido de dimanganeso'],
    hint: 'Mn con EO=+7 (máximo, actúa como no metal). Prefijo per- → permangánico.'
  },
  {
    formula: 'CrO₃',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido crómico'],
    stock: [],
    sist: ['trióxido de cromo'],
    hint: 'Cr con EO=+6 actúa como no metal → anhídrido. EO mayor → -ico → crómico.'
  },
  {
    formula: 'I₂O₅',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido yódico'],
    stock: [],
    sist: ['pentaóxido de diyodo'],
    hint: 'I con EO=+5. → -ico → yódico → anhídrido yódico.'
  },
  {
    formula: 'SeO₂',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido selenioso'],
    stock: [],
    sist: ['dióxido de selenio'],
    hint: 'Se con EO=+4 (menor). → -oso → selenioso → anhídrido selenioso.'
  },
  {
    formula: 'SeO₃',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido selénico'],
    stock: [],
    sist: ['trióxido de selenio'],
    hint: 'Se con EO=+6 (mayor). → -ico → selénico → anhídrido selénico.'
  },
  {
    formula: 'TeO₂',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido teluroso'],
    stock: [],
    sist: ['dióxido de telurio'],
    hint: 'Te con EO=+4 (menor). → -oso → teluroso → anhídrido teluroso.'
  },

  // ─────────────────────────────────────────────
  // HIDRU  (hidruros metálicos)  — metal + H⁻
  // ─────────────────────────────────────────────

  // -- easy (fixed-valence) --
  {
    formula: 'NaH',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de sodio'],
    stock: [],
    sist: ['hidruro de sodio'],
    hint: 'H con EO=−1 en hidruros metálicos. Na tiene valencia fija +1. Nombre igual en los 3 sistemas.'
  },
  {
    formula: 'KH',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de potasio'],
    stock: [],
    sist: ['hidruro de potasio'],
    hint: 'K tiene valencia fija +1. K⁺ + H⁻ → KH. Nombre idéntico en los 3 sistemas.'
  },
  {
    formula: 'LiH',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de litio'],
    stock: [],
    sist: ['hidruro de litio'],
    hint: 'Li tiene valencia fija +1. Li⁺ + H⁻ → LiH. Hidruro de litio.'
  },
  {
    formula: 'CaH₂',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de calcio'],
    stock: [],
    sist: ['dihidruro de calcio'],
    hint: 'Ca tiene valencia fija +2. Ca²⁺ + 2H⁻ → CaH₂. IUPAC: dihidruro de calcio.'
  },
  {
    formula: 'MgH₂',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de magnesio'],
    stock: [],
    sist: ['dihidruro de magnesio'],
    hint: 'Mg tiene valencia fija +2. Mg²⁺ + 2H⁻ → MgH₂. IUPAC: dihidruro de magnesio.'
  },
  {
    formula: 'BaH₂',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de bario'],
    stock: [],
    sist: ['dihidruro de bario'],
    hint: 'Ba tiene valencia fija +2. Ba²⁺ + 2H⁻ → BaH₂.'
  },
  {
    formula: 'RbH',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de rubidio'],
    stock: [],
    sist: ['hidruro de rubidio'],
    hint: 'Rb tiene valencia fija +1 (grupo 1A). Rb⁺ + H⁻ → RbH.'
  },
  {
    formula: 'SrH₂',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de estroncio'],
    stock: [],
    sist: ['dihidruro de estroncio'],
    hint: 'Sr tiene valencia fija +2 (grupo 2A). Sr²⁺ + 2H⁻ → SrH₂.'
  },

  // -- medium (variable-valence) --
  {
    formula: 'FeH₂',
    group: 'hidru', level: 'medium',
    trad: ['hidruro ferroso'],
    stock: ['hidruro de hierro (II)'],
    sist: ['dihidruro de hierro'],
    hint: 'Fe²⁺ (EO menor) → -oso → ferroso → hidruro ferroso. Stock: hidruro de hierro (II).'
  },
  {
    formula: 'FeH₃',
    group: 'hidru', level: 'medium',
    trad: ['hidruro férrico'],
    stock: ['hidruro de hierro (III)'],
    sist: ['trihidruro de hierro'],
    hint: 'Fe³⁺ (EO mayor) → -ico → férrico → hidruro férrico. Stock: hidruro de hierro (III).'
  },
  {
    formula: 'CuH',
    group: 'hidru', level: 'medium',
    trad: ['hidruro cuproso'],
    stock: ['hidruro de cobre (I)'],
    sist: ['hidruro de cobre'],
    hint: 'Cu⁺ (EO menor) → -oso → cuproso → hidruro cuproso.'
  },
  {
    formula: 'ZnH₂',
    group: 'hidru', level: 'medium',
    trad: ['hidruro de zinc'],
    stock: [],
    sist: ['dihidruro de zinc'],
    hint: 'Zn tiene valencia fija +2. Zn²⁺ + 2H⁻ → ZnH₂. Hidruro de zinc.'
  },
  {
    formula: 'NiH₂',
    group: 'hidru', level: 'medium',
    trad: ['hidruro niqueloso'],
    stock: ['hidruro de níquel (II)'],
    sist: ['dihidruro de níquel'],
    hint: 'Ni²⁺ (EO menor del Ni) → -oso → niqueloso → hidruro niqueloso.'
  },
  {
    formula: 'CoH₂',
    group: 'hidru', level: 'medium',
    trad: ['hidruro cobaltoso'],
    stock: ['hidruro de cobalto (II)'],
    sist: ['dihidruro de cobalto'],
    hint: 'Co²⁺ (EO menor) → -oso → cobaltoso → hidruro cobaltoso.'
  },

  // -- hard --
  {
    formula: 'MnH₂',
    group: 'hidru', level: 'hard',
    trad: ['hidruro manganoso'],
    stock: ['hidruro de manganeso (II)'],
    sist: ['dihidruro de manganeso'],
    hint: 'Mn²⁺ (EO menor habitual del Mn) → -oso → manganoso → hidruro manganoso.'
  },
  {
    formula: 'CrH₂',
    group: 'hidru', level: 'hard',
    trad: ['hidruro cromoso'],
    stock: ['hidruro de cromo (II)'],
    sist: ['dihidruro de cromo'],
    hint: 'Cr²⁺ (EO menor del Cr) → -oso → cromoso → hidruro cromoso.'
  },
  {
    formula: 'CrH₃',
    group: 'hidru', level: 'hard',
    trad: ['hidruro crómico'],
    stock: ['hidruro de cromo (III)'],
    sist: ['trihidruro de cromo'],
    hint: 'Cr³⁺ (EO mayor en hidruros de Cr) → -ico → crómico → hidruro crómico.'
  },
  {
    formula: 'PbH₂',
    group: 'hidru', level: 'hard',
    trad: ['hidruro plumboso'],
    stock: ['hidruro de plomo (II)'],
    sist: ['dihidruro de plomo'],
    hint: 'Pb²⁺ (EO menor del Pb) → -oso → plumboso → hidruro plumboso.'
  },

  // ─────────────────────────────────────────────
  // AC-HID  (ácidos hídricos)  — H + nonmetal
  // ─────────────────────────────────────────────

  {
    formula: 'HF',
    group: 'ac-hid', level: 'easy',
    trad: ['ácido fluorhídrico'],
    stock: [],
    sist: ['fluoruro de hidrógeno'],
    hint: 'H + F⁻. Ácido sin oxígeno: ácido + raíz del no metal + -hídrico. F→fluor→fluorhídrico.'
  },
  {
    formula: 'HCl',
    group: 'ac-hid', level: 'easy',
    trad: ['ácido clorhídrico'],
    stock: [],
    sist: ['cloruro de hidrógeno'],
    hint: 'H + Cl⁻. Cl→clor→clor-hídrico. IUPAC: nombre del anión + "de hidrógeno".'
  },
  {
    formula: 'HBr',
    group: 'ac-hid', level: 'easy',
    trad: ['ácido bromhídrico'],
    stock: [],
    sist: ['bromuro de hidrógeno'],
    hint: 'H + Br⁻. Br→brom→brom-hídrico. IUPAC: bromuro de hidrógeno.'
  },
  {
    formula: 'HI',
    group: 'ac-hid', level: 'easy',
    trad: ['ácido yodhídrico'],
    stock: [],
    sist: ['yoduro de hidrógeno'],
    hint: 'H + I⁻. I→yod→yod-hídrico. IUPAC: yoduro de hidrógeno.'
  },
  {
    formula: 'H₂S',
    group: 'ac-hid', level: 'easy',
    trad: ['ácido sulfhídrico'],
    stock: [],
    sist: ['sulfuro de hidrógeno'],
    hint: 'H₂ + S²⁻. S→sulf→sulf-hídrico (con h intercalada). IUPAC: sulfuro de hidrógeno.'
  },
  {
    formula: 'H₂Se',
    group: 'ac-hid', level: 'medium',
    trad: ['ácido selenhídrico'],
    stock: [],
    sist: ['seleniuro de hidrógeno'],
    hint: 'H₂ + Se²⁻. Se→selen→selen-hídrico. IUPAC: seleniuro de hidrógeno.'
  },
  {
    formula: 'HCN',
    group: 'ac-hid', level: 'medium',
    trad: ['ácido cianhídrico'],
    stock: [],
    sist: ['cianuro de hidrógeno'],
    hint: 'H + CN⁻ (cianuro). Ácido hídrico del cianuro. IUPAC: cianuro de hidrógeno.'
  },
  {
    formula: 'H₂Te',
    group: 'ac-hid', level: 'hard',
    trad: ['ácido telurhídrico'],
    stock: [],
    sist: ['telururo de hidrógeno'],
    hint: 'H₂ + Te²⁻. Te→telur→telur-hídrico. IUPAC: telururo de hidrógeno.'
  },

  // ─────────────────────────────────────────────
  // BASE  (bases / hidróxidos)  — metal + OH⁻
  // ─────────────────────────────────────────────

  // -- easy (fixed-valence metals) --
  {
    formula: 'LiOH',
    group: 'base', level: 'easy',
    trad: ['hidróxido de litio'],
    stock: [],
    sist: ['hidróxido de litio'],
    hint: 'Li tiene valencia fija +1. Li⁺ + OH⁻ → LiOH. Hidróxido de litio.'
  },
  {
    formula: 'NaOH',
    group: 'base', level: 'easy',
    trad: ['hidróxido de sodio'],
    stock: [],
    sist: ['hidróxido de sodio'],
    hint: 'Na tiene valencia fija +1. OH⁻ siempre es hidróxido. → hidróxido de sodio.'
  },
  {
    formula: 'KOH',
    group: 'base', level: 'easy',
    trad: ['hidróxido de potasio'],
    stock: [],
    sist: ['hidróxido de potasio'],
    hint: 'K tiene valencia +1. K⁺ + OH⁻ → KOH. Base fuerte.'
  },
  {
    formula: 'RbOH',
    group: 'base', level: 'easy',
    trad: ['hidróxido de rubidio'],
    stock: [],
    sist: ['hidróxido de rubidio'],
    hint: 'Rb tiene valencia fija +1 (grupo 1A). Rb⁺ + OH⁻ → RbOH.'
  },
  {
    formula: 'Mg(OH)₂',
    group: 'base', level: 'easy',
    trad: ['hidróxido de magnesio'],
    stock: [],
    sist: ['dihidróxido de magnesio'],
    hint: 'Mg tiene valencia fija +2. Mg²⁺ + 2OH⁻ → Mg(OH)₂. IUPAC: dihidróxido de magnesio.'
  },
  {
    formula: 'Ca(OH)₂',
    group: 'base', level: 'easy',
    trad: ['hidróxido de calcio'],
    stock: [],
    sist: ['dihidróxido de calcio'],
    hint: 'Ca²⁺ necesita 2 OH⁻. → Ca(OH)₂. Nombre: hidróxido de calcio (cal apagada).'
  },
  {
    formula: 'Sr(OH)₂',
    group: 'base', level: 'easy',
    trad: ['hidróxido de estroncio'],
    stock: [],
    sist: ['dihidróxido de estroncio'],
    hint: 'Sr²⁺ + 2OH⁻ → Sr(OH)₂. Valencia fija +2 (grupo 2A).'
  },
  {
    formula: 'Ba(OH)₂',
    group: 'base', level: 'easy',
    trad: ['hidróxido de bario'],
    stock: [],
    sist: ['dihidróxido de bario'],
    hint: 'Ba²⁺ + 2OH⁻ → Ba(OH)₂. Valencia fija +2. Base fuerte.'
  },
  {
    formula: 'Al(OH)₃',
    group: 'base', level: 'easy',
    trad: ['hidróxido de aluminio'],
    stock: [],
    sist: ['trihidróxido de aluminio'],
    hint: 'Al³⁺ + 3OH⁻ → Al(OH)₃. Valencia fija +3. Anfótero.'
  },
  {
    formula: 'Zn(OH)₂',
    group: 'base', level: 'easy',
    trad: ['hidróxido de zinc'],
    stock: [],
    sist: ['dihidróxido de zinc'],
    hint: 'Zn tiene valencia fija +2. Zn²⁺ + 2OH⁻ → Zn(OH)₂.'
  },
  {
    formula: 'AgOH',
    group: 'base', level: 'easy',
    trad: ['hidróxido de plata'],
    stock: [],
    sist: ['hidróxido de plata'],
    hint: 'Ag tiene valencia fija +1. Ag⁺ + OH⁻ → AgOH. Inestable, se descompone fácilmente.'
  },

  // -- medium (variable-valence, 2 oxidation states) --
  {
    formula: 'Fe(OH)₂',
    group: 'base', level: 'medium',
    trad: ['hidróxido ferroso'],
    stock: ['hidróxido de hierro (II)'],
    sist: ['dihidróxido de hierro'],
    hint: 'Fe²⁺ (EO menor) → -oso → ferroso → hidróxido ferroso.'
  },
  {
    formula: 'Fe(OH)₃',
    group: 'base', level: 'medium',
    trad: ['hidróxido férrico'],
    stock: ['hidróxido de hierro (III)'],
    sist: ['trihidróxido de hierro'],
    hint: 'Fe³⁺ (EO mayor) → -ico → férrico → hidróxido férrico.'
  },
  {
    formula: 'Cu(OH)₂',
    group: 'base', level: 'medium',
    trad: ['hidróxido cúprico'],
    stock: ['hidróxido de cobre (II)'],
    sist: ['dihidróxido de cobre'],
    hint: 'Cu²⁺ (EO mayor del Cu) → -ico → cúprico → hidróxido cúprico.'
  },
  {
    formula: 'CuOH',
    group: 'base', level: 'medium',
    trad: ['hidróxido cuproso'],
    stock: ['hidróxido de cobre (I)'],
    sist: ['hidróxido de cobre'],
    hint: 'Cu⁺ (EO menor del Cu) → -oso → cuproso → hidróxido cuproso.'
  },
  {
    formula: 'Ni(OH)₂',
    group: 'base', level: 'medium',
    trad: ['hidróxido niqueloso'],
    stock: ['hidróxido de níquel (II)'],
    sist: ['dihidróxido de níquel'],
    hint: 'Ni²⁺ (EO menor del Ni) → -oso → niqueloso → hidróxido niqueloso.'
  },
  {
    formula: 'Ni(OH)₃',
    group: 'base', level: 'medium',
    trad: ['hidróxido niquélico'],
    stock: ['hidróxido de níquel (III)'],
    sist: ['trihidróxido de níquel'],
    hint: 'Ni³⁺ (EO mayor del Ni) → -ico → niquélico → hidróxido niquélico.'
  },
  {
    formula: 'Co(OH)₂',
    group: 'base', level: 'medium',
    trad: ['hidróxido cobaltoso'],
    stock: ['hidróxido de cobalto (II)'],
    sist: ['dihidróxido de cobalto'],
    hint: 'Co²⁺ (EO menor) → -oso → cobaltoso → hidróxido cobaltoso.'
  },
  {
    formula: 'Co(OH)₃',
    group: 'base', level: 'medium',
    trad: ['hidróxido cobáltico'],
    stock: ['hidróxido de cobalto (III)'],
    sist: ['trihidróxido de cobalto'],
    hint: 'Co³⁺ (EO mayor) → -ico → cobáltico → hidróxido cobáltico.'
  },
  {
    formula: 'Pb(OH)₂',
    group: 'base', level: 'medium',
    trad: ['hidróxido plumboso'],
    stock: ['hidróxido de plomo (II)'],
    sist: ['dihidróxido de plomo'],
    hint: 'Pb²⁺ (EO menor del Pb) → -oso → plumboso → hidróxido plumboso.'
  },
  {
    formula: 'Pb(OH)₄',
    group: 'base', level: 'medium',
    trad: ['hidróxido plúmbico'],
    stock: ['hidróxido de plomo (IV)'],
    sist: ['tetrahidróxido de plomo'],
    hint: 'Pb⁴⁺ (EO mayor del Pb) → -ico → plúmbico → hidróxido plúmbico.'
  },
  {
    formula: 'Sn(OH)₂',
    group: 'base', level: 'medium',
    trad: ['hidróxido estannoso'],
    stock: ['hidróxido de estaño (II)'],
    sist: ['dihidróxido de estaño'],
    hint: 'Sn²⁺ (EO menor) → -oso → estannoso → hidróxido estannoso.'
  },
  {
    formula: 'Sn(OH)₄',
    group: 'base', level: 'medium',
    trad: ['hidróxido estánnico'],
    stock: ['hidróxido de estaño (IV)'],
    sist: ['tetrahidróxido de estaño'],
    hint: 'Sn⁴⁺ (EO mayor) → -ico → estánnico → hidróxido estánnico.'
  },

  // -- hard --
  {
    formula: 'Mn(OH)₂',
    group: 'base', level: 'hard',
    trad: ['hidróxido manganoso'],
    stock: ['hidróxido de manganeso (II)'],
    sist: ['dihidróxido de manganeso'],
    hint: 'Mn²⁺ (EO menor habitual) → -oso → manganoso → hidróxido manganoso.'
  },
  {
    formula: 'Cr(OH)₂',
    group: 'base', level: 'hard',
    trad: ['hidróxido cromoso'],
    stock: ['hidróxido de cromo (II)'],
    sist: ['dihidróxido de cromo'],
    hint: 'Cr²⁺ (EO menor del Cr) → -oso → cromoso → hidróxido cromoso.'
  },
  {
    formula: 'Cr(OH)₃',
    group: 'base', level: 'hard',
    trad: ['hidróxido crómico'],
    stock: ['hidróxido de cromo (III)'],
    sist: ['trihidróxido de cromo'],
    hint: 'Cr³⁺ (EO mayor en bases de Cr) → -ico → crómico → hidróxido crómico.'
  },
  {
    formula: 'Hg(OH)₂',
    group: 'base', level: 'hard',
    trad: ['hidróxido mercúrico'],
    stock: ['hidróxido de mercurio (II)'],
    sist: ['dihidróxido de mercurio'],
    hint: 'Hg²⁺ (mercúrico, EO mayor del Hg como ion simple) → hidróxido mercúrico.'
  },
  {
    formula: 'AuOH',
    group: 'base', level: 'hard',
    trad: ['hidróxido auroso'],
    stock: ['hidróxido de oro (I)'],
    sist: ['hidróxido de oro'],
    hint: 'Au⁺ (EO menor del Au) → -oso → auroso → hidróxido auroso.'
  },
  {
    formula: 'Au(OH)₃',
    group: 'base', level: 'hard',
    trad: ['hidróxido áurico'],
    stock: ['hidróxido de oro (III)'],
    sist: ['trihidróxido de oro'],
    hint: 'Au³⁺ (EO mayor del Au) → -ico → áurico → hidróxido áurico.'
  },
  {
    formula: 'Bi(OH)₃',
    group: 'base', level: 'hard',
    trad: ['hidróxido de bismuto'],
    stock: ['hidróxido de bismuto (III)'],
    sist: ['trihidróxido de bismuto'],
    hint: 'Bi³⁺ es el EO más común del Bi. En trad. suele decirse hidróxido de bismuto.'
  },
  {
    formula: 'NH₄OH',
    group: 'base', level: 'hard',
    trad: ['hidróxido de amonio'],
    stock: [],
    sist: ['hidróxido de amonio'],
    hint: 'NH₄⁺ es el catión amonio. NH₄OH es la base de amonio. Nombre igual en todos los sistemas.'
  },

  // ─────────────────────────────────────────────
  // AC-OX  (ácidos oxácidos)  — H + oxoanion
  // ─────────────────────────────────────────────

  // -- easy --
  {
    formula: 'H₂SO₄',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido sulfúrico'],
    stock: [],
    sist: ['ácido sulfúrico'],
    hint: 'H₂ + SO₄²⁻ (sulfato). S con EO=+6 → -ico → sulfúrico. Ácido fuerte.'
  },
  {
    formula: 'H₂SO₃',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido sulfuroso'],
    stock: [],
    sist: ['ácido sulfuroso'],
    hint: 'H₂ + SO₃²⁻ (sulfito). S con EO=+4 → -oso → sulfuroso.'
  },
  {
    formula: 'HNO₃',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido nítrico'],
    stock: [],
    sist: ['ácido nítrico'],
    hint: 'H + NO₃⁻ (nitrato). N con EO=+5 → -ico → nítrico. Ácido fuerte.'
  },
  {
    formula: 'HNO₂',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido nitroso'],
    stock: [],
    sist: ['ácido nitroso'],
    hint: 'H + NO₂⁻ (nitrito). N con EO=+3 → -oso → nitroso. Ácido débil.'
  },
  {
    formula: 'H₃PO₄',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido fosfórico'],
    stock: [],
    sist: ['ácido fosfórico'],
    hint: 'H₃ + PO₄³⁻ (fosfato). P con EO=+5 → -ico → fosfórico.'
  },
  {
    formula: 'H₂CO₃',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido carbónico'],
    stock: [],
    sist: ['ácido carbónico'],
    hint: 'H₂ + CO₃²⁻ (carbonato). C con EO=+4 → -ico → carbónico. Inestable, se disocia.'
  },
  {
    formula: 'H₃BO₃',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido bórico'],
    stock: [],
    sist: ['ácido bórico'],
    hint: 'H₃ + BO₃³⁻ (borato). B con EO=+3 → -ico → bórico. Ácido débil.'
  },

  // -- medium --
  {
    formula: 'H₃PO₃',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido fosforoso'],
    stock: [],
    sist: ['ácido fosforoso'],
    hint: 'H₃ + PO₃³⁻ (fosfito). P con EO=+3 → -oso → fosforoso.'
  },
  {
    formula: 'HClO₄',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido perclórico'],
    stock: [],
    sist: ['ácido perclórico'],
    hint: 'H + ClO₄⁻ (perclorato). Cl con EO=+7 (máximo, ≥4 estados) → per-ico → perclórico.'
  },
  {
    formula: 'HClO₃',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido clórico'],
    stock: [],
    sist: ['ácido clórico'],
    hint: 'H + ClO₃⁻ (clorato). Cl con EO=+5 → -ico → clórico.'
  },
  {
    formula: 'HClO₂',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido cloroso'],
    stock: [],
    sist: ['ácido cloroso'],
    hint: 'H + ClO₂⁻ (clorito). Cl con EO=+3 → -oso → cloroso.'
  },
  {
    formula: 'HClO',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido hipocloroso'],
    stock: [],
    sist: ['ácido hipocloroso'],
    hint: 'H + ClO⁻ (hipoclorito). Cl con EO=+1 (mínimo) → hipo-oso → hipocloroso.'
  },
  {
    formula: 'H₂SiO₃',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido silícico'],
    stock: [],
    sist: ['ácido silícico'],
    hint: 'H₂ + SiO₃²⁻ (silicato). Si con EO=+4 → -ico → silícico. Ácido débil insoluble.'
  },
  {
    formula: 'HBrO₄',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido perbrómico'],
    stock: [],
    sist: ['ácido perbrómico'],
    hint: 'H + BrO₄⁻ (perbromato). Br con EO=+7 (máximo) → per-ico → perbrómico.'
  },
  {
    formula: 'HBrO₃',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido brómico'],
    stock: [],
    sist: ['ácido brómico'],
    hint: 'H + BrO₃⁻ (bromato). Br con EO=+5 → -ico → brómico.'
  },
  {
    formula: 'HBrO₂',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido bromoso'],
    stock: [],
    sist: ['ácido bromoso'],
    hint: 'H + BrO₂⁻ (bromito). Br con EO=+3 → -oso → bromoso.'
  },
  {
    formula: 'HBrO',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido hipobromoso'],
    stock: [],
    sist: ['ácido hipobromoso'],
    hint: 'H + BrO⁻ (hipobromito). Br con EO=+1 (mínimo) → hipo-oso → hipobromoso.'
  },

  // -- hard --
  {
    formula: 'HIO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido peryódico'],
    stock: [],
    sist: ['ácido peryódico'],
    hint: 'H + IO₄⁻ (peryodato). I con EO=+7 (máximo) → per-ico → peryódico.'
  },
  {
    formula: 'HIO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido yódico'],
    stock: [],
    sist: ['ácido yódico'],
    hint: 'H + IO₃⁻ (yodato). I con EO=+5 → -ico → yódico.'
  },
  {
    formula: 'HIO',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido hipoyodoso'],
    stock: [],
    sist: ['ácido hipoyodoso'],
    hint: 'H + IO⁻ (hipoyodito). I con EO=+1 (mínimo) → hipo-oso → hipoyodoso.'
  },
  {
    formula: 'H₂CrO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido crómico'],
    stock: [],
    sist: ['ácido crómico'],
    hint: 'H₂ + CrO₄²⁻ (cromato). Cr con EO=+6 → -ico → crómico.'
  },
  {
    formula: 'H₂Cr₂O₇',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido dicromatoso', 'ácido dicrómico'],
    stock: [],
    sist: ['ácido dicrómico'],
    hint: 'H₂ + Cr₂O₇²⁻ (dicromato). Dos átomos de Cr con EO=+6 cada uno.'
  },
  {
    formula: 'HMnO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido permangánico'],
    stock: [],
    sist: ['ácido permangánico'],
    hint: 'H + MnO₄⁻ (permanganato). Mn con EO=+7 → per-ico → permangánico.'
  },
  {
    formula: 'H₃AsO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido arsénico'],
    stock: [],
    sist: ['ácido arsénico'],
    hint: 'H₃ + AsO₄³⁻ (arseniato). As con EO=+5 → -ico → arsénico.'
  },
  {
    formula: 'H₃AsO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido arsenioso'],
    stock: [],
    sist: ['ácido arsenioso'],
    hint: 'H₃ + AsO₃³⁻ (arsenito). As con EO=+3 → -oso → arsenioso.'
  },
  {
    formula: 'H₂SeO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido selénico'],
    stock: [],
    sist: ['ácido selénico'],
    hint: 'H₂ + SeO₄²⁻ (selenato). Se con EO=+6 → -ico → selénico.'
  },
  {
    formula: 'H₂SeO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido selenioso'],
    stock: [],
    sist: ['ácido selenioso'],
    hint: 'H₂ + SeO₃²⁻ (selenito). Se con EO=+4 → -oso → selenioso.'
  },
  {
    formula: 'H₂TeO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido telúrico'],
    stock: [],
    sist: ['ácido telúrico'],
    hint: 'H₂ + TeO₄²⁻ (telurato). Te con EO=+6 → -ico → telúrico.'
  },

  // ─────────────────────────────────────────────
  // SAL-BIN  (sales binarias)  — metal + non-O anion
  // ─────────────────────────────────────────────

  // -- easy (fixed-valence metals) --
  {
    formula: 'NaCl',
    group: 'sal-bin', level: 'easy',
    trad: ['cloruro de sodio'],
    stock: [],
    sist: ['cloruro de sodio'],
    hint: 'Cl⁻ → cloruro. Na⁺ → sodio. Anión + "de" + catión. Sal de mesa.'
  },
  {
    formula: 'KCl',
    group: 'sal-bin', level: 'easy',
    trad: ['cloruro de potasio'],
    stock: [],
    sist: ['cloruro de potasio'],
    hint: 'Cl⁻ → cloruro. K⁺ → potasio. Valencia fija: no se indica cantidad.'
  },
  {
    formula: 'KBr',
    group: 'sal-bin', level: 'easy',
    trad: ['bromuro de potasio'],
    stock: [],
    sist: ['bromuro de potasio'],
    hint: 'Br⁻ → bromuro. K⁺ → potasio. Bromuro de potasio.'
  },
  {
    formula: 'KI',
    group: 'sal-bin', level: 'easy',
    trad: ['yoduro de potasio'],
    stock: [],
    sist: ['yoduro de potasio'],
    hint: 'I⁻ → yoduro. K⁺ → potasio. Yoduro de potasio.'
  },
  {
    formula: 'KF',
    group: 'sal-bin', level: 'easy',
    trad: ['fluoruro de potasio'],
    stock: [],
    sist: ['fluoruro de potasio'],
    hint: 'F⁻ → fluoruro. K⁺ → potasio. Fluoruro de potasio.'
  },
  {
    formula: 'NaBr',
    group: 'sal-bin', level: 'easy',
    trad: ['bromuro de sodio'],
    stock: [],
    sist: ['bromuro de sodio'],
    hint: 'Br⁻ → bromuro. Na⁺ → sodio. Bromuro de sodio.'
  },
  {
    formula: 'NaI',
    group: 'sal-bin', level: 'easy',
    trad: ['yoduro de sodio'],
    stock: [],
    sist: ['yoduro de sodio'],
    hint: 'I⁻ → yoduro. Na⁺ → sodio. Yoduro de sodio.'
  },
  {
    formula: 'Na₂S',
    group: 'sal-bin', level: 'easy',
    trad: ['sulfuro de sodio'],
    stock: [],
    sist: ['sulfuro de disodio'],
    hint: 'S²⁻ → sulfuro. Dos Na⁺ por un S²⁻. Trad: sulfuro de sodio. IUPAC: sulfuro de disodio.'
  },
  {
    formula: 'K₂S',
    group: 'sal-bin', level: 'easy',
    trad: ['sulfuro de potasio'],
    stock: [],
    sist: ['sulfuro de dipotasio'],
    hint: 'S²⁻ → sulfuro. Dos K⁺ por un S²⁻. Sulfuro de potasio.'
  },
  {
    formula: 'CaCl₂',
    group: 'sal-bin', level: 'easy',
    trad: ['cloruro de calcio'],
    stock: [],
    sist: ['dicloruro de calcio'],
    hint: 'Cl⁻ → cloruro. Ca²⁺ → calcio. Cloruro de calcio (sal fija).'
  },
  {
    formula: 'CaF₂',
    group: 'sal-bin', level: 'easy',
    trad: ['fluoruro de calcio'],
    stock: [],
    sist: ['difluoruro de calcio'],
    hint: 'F⁻ → fluoruro. Ca²⁺ → calcio. Mineral fluorita: CaF₂.'
  },
  {
    formula: 'CaI₂',
    group: 'sal-bin', level: 'easy',
    trad: ['yoduro de calcio'],
    stock: [],
    sist: ['diyoduro de calcio'],
    hint: 'I⁻ → yoduro. Ca²⁺ + 2I⁻ → CaI₂. Yoduro de calcio.'
  },
  {
    formula: 'MgCl₂',
    group: 'sal-bin', level: 'easy',
    trad: ['cloruro de magnesio'],
    stock: [],
    sist: ['dicloruro de magnesio'],
    hint: 'Cl⁻ → cloruro. Mg²⁺ → magnesio. Mg²⁺ + 2Cl⁻ → MgCl₂.'
  },
  {
    formula: 'MgBr₂',
    group: 'sal-bin', level: 'easy',
    trad: ['bromuro de magnesio'],
    stock: [],
    sist: ['dibromuro de magnesio'],
    hint: 'Br⁻ → bromuro. Mg²⁺ → magnesio. Mg²⁺ + 2Br⁻ → MgBr₂.'
  },
  {
    formula: 'AlCl₃',
    group: 'sal-bin', level: 'easy',
    trad: ['cloruro de aluminio'],
    stock: [],
    sist: ['tricloruro de aluminio'],
    hint: 'Cl⁻ → cloruro. Al³⁺ → aluminio. Al³⁺ + 3Cl⁻ → AlCl₃.'
  },
  {
    formula: 'AlBr₃',
    group: 'sal-bin', level: 'easy',
    trad: ['bromuro de aluminio'],
    stock: [],
    sist: ['tribromuro de aluminio'],
    hint: 'Br⁻ → bromuro. Al³⁺ + 3Br⁻ → AlBr₃. Tribromuro de aluminio (IUPAC).'
  },
  {
    formula: 'BaCl₂',
    group: 'sal-bin', level: 'easy',
    trad: ['cloruro de bario'],
    stock: [],
    sist: ['dicloruro de bario'],
    hint: 'Cl⁻ → cloruro. Ba²⁺ → bario. Ba²⁺ + 2Cl⁻ → BaCl₂.'
  },

  // -- medium (variable-valence metals) --
  {
    formula: 'FeCl₂',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro ferroso'],
    stock: ['cloruro de hierro (II)'],
    sist: ['dicloruro de hierro'],
    hint: 'Fe²⁺ (EO menor) → -oso → ferroso → cloruro ferroso. Stock: cloruro de hierro (II).'
  },
  {
    formula: 'FeCl₃',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro férrico'],
    stock: ['cloruro de hierro (III)'],
    sist: ['tricloruro de hierro'],
    hint: 'Fe³⁺ (EO mayor) → -ico → férrico → cloruro férrico. Stock: cloruro de hierro (III).'
  },
  {
    formula: 'CuCl',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro cuproso'],
    stock: ['cloruro de cobre (I)'],
    sist: ['cloruro de cobre'],
    hint: 'Cu⁺ (EO menor) → -oso → cuproso → cloruro cuproso.'
  },
  {
    formula: 'CuCl₂',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro cúprico'],
    stock: ['cloruro de cobre (II)'],
    sist: ['dicloruro de cobre'],
    hint: 'Cu²⁺ (EO mayor) → -ico → cúprico → cloruro cúprico.'
  },
  {
    formula: 'SnCl₂',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro estannoso'],
    stock: ['cloruro de estaño (II)'],
    sist: ['dicloruro de estaño'],
    hint: 'Sn²⁺ (EO menor del Sn) → -oso → estannoso → cloruro estannoso.'
  },
  {
    formula: 'SnCl₄',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro estánnico'],
    stock: ['cloruro de estaño (IV)'],
    sist: ['tetracloruro de estaño'],
    hint: 'Sn⁴⁺ (EO mayor del Sn) → -ico → estánnico → cloruro estánnico.'
  },
  {
    formula: 'PbCl₂',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro plumboso'],
    stock: ['cloruro de plomo (II)'],
    sist: ['dicloruro de plomo'],
    hint: 'Pb²⁺ (EO menor) → -oso → plumboso → cloruro plumboso.'
  },
  {
    formula: 'PbCl₄',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro plúmbico'],
    stock: ['cloruro de plomo (IV)'],
    sist: ['tetracloruro de plomo'],
    hint: 'Pb⁴⁺ (EO mayor) → -ico → plúmbico → cloruro plúmbico.'
  },
  {
    formula: 'NiCl₂',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro niqueloso'],
    stock: ['cloruro de níquel (II)'],
    sist: ['dicloruro de níquel'],
    hint: 'Ni²⁺ (EO menor del Ni) → -oso → niqueloso → cloruro niqueloso.'
  },
  {
    formula: 'CoBr₂',
    group: 'sal-bin', level: 'medium',
    trad: ['bromuro cobaltoso'],
    stock: ['bromuro de cobalto (II)'],
    sist: ['dibromuro de cobalto'],
    hint: 'Co²⁺ (EO menor) → -oso → cobaltoso → bromuro cobaltoso.'
  },
  {
    formula: 'ZnCl₂',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro de zinc'],
    stock: [],
    sist: ['dicloruro de zinc'],
    hint: 'Zn tiene valencia fija +2. Zn²⁺ + 2Cl⁻ → ZnCl₂. Cloruro de zinc.'
  },
  {
    formula: 'FeS',
    group: 'sal-bin', level: 'medium',
    trad: ['sulfuro ferroso'],
    stock: ['sulfuro de hierro (II)'],
    sist: ['sulfuro de hierro'],
    hint: 'S²⁻ → sulfuro. Fe²⁺ (EO menor) → ferroso → sulfuro ferroso.'
  },
  {
    formula: 'Fe₂S₃',
    group: 'sal-bin', level: 'medium',
    trad: ['sulfuro férrico'],
    stock: ['sulfuro de hierro (III)'],
    sist: ['trisulfuro de dihierro'],
    hint: 'S²⁻ → sulfuro. Fe³⁺ (EO mayor) → férrico → sulfuro férrico. 2(+3)+3(−2)=0.'
  },
  {
    formula: 'CuS',
    group: 'sal-bin', level: 'medium',
    trad: ['sulfuro cúprico'],
    stock: ['sulfuro de cobre (II)'],
    sist: ['sulfuro de cobre'],
    hint: 'S²⁻ → sulfuro. Cu²⁺ (EO mayor) → cúprico → sulfuro cúprico.'
  },

  // -- hard --
  {
    formula: 'MnCl₂',
    group: 'sal-bin', level: 'hard',
    trad: ['cloruro manganoso'],
    stock: ['cloruro de manganeso (II)'],
    sist: ['dicloruro de manganeso'],
    hint: 'Mn²⁺ (EO menor habitual) → -oso → manganoso → cloruro manganoso.'
  },
  {
    formula: 'CrCl₂',
    group: 'sal-bin', level: 'hard',
    trad: ['cloruro cromoso'],
    stock: ['cloruro de cromo (II)'],
    sist: ['dicloruro de cromo'],
    hint: 'Cr²⁺ (EO menor del Cr) → -oso → cromoso → cloruro cromoso.'
  },
  {
    formula: 'CrCl₃',
    group: 'sal-bin', level: 'hard',
    trad: ['cloruro crómico'],
    stock: ['cloruro de cromo (III)'],
    sist: ['tricloruro de cromo'],
    hint: 'Cr³⁺ (EO mayor en sales de Cr) → -ico → crómico → cloruro crómico.'
  },
  {
    formula: 'AgCl',
    group: 'sal-bin', level: 'hard',
    trad: ['cloruro de plata'],
    stock: [],
    sist: ['cloruro de plata'],
    hint: 'Ag tiene valencia fija +1. Ag⁺ + Cl⁻ → AgCl. Precipitado blanco insoluble.'
  },
  {
    formula: 'HgCl₂',
    group: 'sal-bin', level: 'hard',
    trad: ['cloruro mercúrico'],
    stock: ['cloruro de mercurio (II)'],
    sist: ['dicloruro de mercurio'],
    hint: 'Hg²⁺ (mercúrico, EO mayor) → cloruro mercúrico. Tóxico.'
  },
  {
    formula: 'Hg₂Cl₂',
    group: 'sal-bin', level: 'hard',
    trad: ['cloruro mercurioso'],
    stock: ['cloruro de mercurio (I)'],
    sist: ['dicloruro de dimercurio'],
    hint: 'Hg₂²⁺ es el catión mercurioso (dinuclear). EO formal +1 por Hg. IUPAC: dicloruro de dimercurio.'
  },
  {
    formula: 'AuCl',
    group: 'sal-bin', level: 'hard',
    trad: ['cloruro auroso'],
    stock: ['cloruro de oro (I)'],
    sist: ['cloruro de oro'],
    hint: 'Au⁺ (EO menor del Au) → -oso → auroso → cloruro auroso.'
  },
  {
    formula: 'AuCl₃',
    group: 'sal-bin', level: 'hard',
    trad: ['cloruro áurico'],
    stock: ['cloruro de oro (III)'],
    sist: ['tricloruro de oro'],
    hint: 'Au³⁺ (EO mayor del Au) → -ico → áurico → cloruro áurico.'
  },
  {
    formula: 'TiCl₄',
    group: 'sal-bin', level: 'hard',
    trad: ['cloruro titánico'],
    stock: ['cloruro de titanio (IV)'],
    sist: ['tetracloruro de titanio'],
    hint: 'Ti⁴⁺ (EO más estable del Ti) → -ico → titánico → cloruro titánico.'
  },

  // ─────────────────────────────────────────────
  // SAL-OX  (sales oxigenadas)  — metal + oxoanion
  // ─────────────────────────────────────────────

  // -- easy (fixed-valence metals) --
  {
    formula: 'NaClO',
    group: 'sal-ox', level: 'easy',
    trad: ['hipoclorito de sodio'],
    stock: [],
    sist: ['hipoclorito de sodio'],
    hint: 'ClO⁻ = hipoclorito (Cl EO=+1). Na⁺ → sodio. Anión + "de" + catión.'
  },
  {
    formula: 'Na₂SO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de sodio'],
    stock: [],
    sist: ['sulfato de disodio'],
    hint: 'SO₄²⁻ = sulfato. Dos Na⁺ compensan la carga. Sulfato de sodio.'
  },
  {
    formula: 'NaNO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrato de sodio'],
    stock: [],
    sist: ['nitrato de sodio'],
    hint: 'NO₃⁻ = nitrato. Na⁺ → sodio. Nitrato de sodio (salitre).'
  },
  {
    formula: 'KNO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrato de potasio'],
    stock: [],
    sist: ['nitrato de potasio'],
    hint: 'NO₃⁻ = nitrato. K⁺ → potasio. Nitrato de potasio (salitre potásico).'
  },
  {
    formula: 'K₂SO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de potasio'],
    stock: [],
    sist: ['sulfato de dipotasio'],
    hint: 'SO₄²⁻ = sulfato. Dos K⁺ compensan la carga. Sulfato de potasio.'
  },
  {
    formula: 'Na₂CO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['carbonato de sodio'],
    stock: [],
    sist: ['carbonato de disodio'],
    hint: 'CO₃²⁻ = carbonato. Dos Na⁺ por un CO₃²⁻. Sosa (carbonato de sodio).'
  },
  {
    formula: 'CaCO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['carbonato de calcio'],
    stock: [],
    sist: ['carbonato de calcio'],
    hint: 'CO₃²⁻ = carbonato. Ca²⁺ → calcio. CaCO₃ es la piedra caliza/calcita.'
  },
  {
    formula: 'NaHCO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['bicarbonato de sodio'],
    stock: [],
    sist: ['hidrogenocarbonato de sodio'],
    hint: 'HCO₃⁻ = bicarbonato (trad.) / hidrogenocarbonato (IUPAC). Na⁺ → sodio.'
  },
  {
    formula: 'K₃PO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['fosfato de potasio'],
    stock: [],
    sist: ['fosfato de tripotasio'],
    hint: 'PO₄³⁻ = fosfato. Tres K⁺ por un PO₄³⁻. Fosfato de potasio.'
  },
  {
    formula: 'Na₃PO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['fosfato de sodio'],
    stock: [],
    sist: ['fosfato de trisodio'],
    hint: 'PO₄³⁻ = fosfato. Tres Na⁺ por un PO₄³⁻. Fosfato trisódico.'
  },
  {
    formula: 'Ca₃(PO₄)₂',
    group: 'sal-ox', level: 'easy',
    trad: ['fosfato de calcio'],
    stock: [],
    sist: ['fosfato de calcio'],
    hint: 'PO₄³⁻ = fosfato. 3 Ca²⁺ + 2 PO₄³⁻ → Ca₃(PO₄)₂. Componente de los huesos.'
  },
  {
    formula: 'Mg(NO₃)₂',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrato de magnesio'],
    stock: [],
    sist: ['dinitrato de magnesio'],
    hint: 'NO₃⁻ = nitrato. Mg²⁺ + 2NO₃⁻ → Mg(NO₃)₂. Nitrato de magnesio.'
  },
  {
    formula: 'Al₂(SO₄)₃',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de aluminio'],
    stock: [],
    sist: ['trisulfato de dialuminio'],
    hint: 'SO₄²⁻ = sulfato. 2Al³⁺ + 3SO₄²⁻ → Al₂(SO₄)₃. Valencia fija: no usa -oso/-ico.'
  },
  {
    formula: 'BaSO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de bario'],
    stock: [],
    sist: ['sulfato de bario'],
    hint: 'SO₄²⁻ = sulfato. Ba²⁺ → bario. Mineral barita, muy insoluble.'
  },
  {
    formula: 'NaNO₂',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrito de sodio'],
    stock: [],
    sist: ['nitrito de sodio'],
    hint: 'NO₂⁻ = nitrito (N EO=+3). Na⁺ → sodio. Nitrito de sodio (conservante).'
  },
  {
    formula: 'NaClO₂',
    group: 'sal-ox', level: 'easy',
    trad: ['clorito de sodio'],
    stock: [],
    sist: ['clorito de sodio'],
    hint: 'ClO₂⁻ = clorito (Cl EO=+3). Na⁺ → sodio. Clorito de sodio.'
  },
  {
    formula: 'NaClO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['clorato de sodio'],
    stock: [],
    sist: ['clorato de sodio'],
    hint: 'ClO₃⁻ = clorato (Cl EO=+5). Na⁺ → sodio. Clorato de sodio.'
  },
  {
    formula: 'NaClO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['perclorato de sodio'],
    stock: [],
    sist: ['perclorato de sodio'],
    hint: 'ClO₄⁻ = perclorato (Cl EO=+7). Na⁺ → sodio. Perclorato de sodio.'
  },
  {
    formula: 'KBrO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['bromato de potasio'],
    stock: [],
    sist: ['bromato de potasio'],
    hint: 'BrO₃⁻ = bromato (Br EO=+5). K⁺ → potasio. Bromato de potasio.'
  },

  // -- medium (variable-valence metals) --
  {
    formula: 'FeSO₄',
    group: 'sal-ox', level: 'medium',
    trad: ['sulfato ferroso'],
    stock: ['sulfato de hierro (II)'],
    sist: ['sulfato de hierro'],
    hint: 'SO₄²⁻ = sulfato. Fe²⁺ (EO menor) → ferroso → sulfato ferroso.'
  },
  {
    formula: 'Fe₂(SO₄)₃',
    group: 'sal-ox', level: 'medium',
    trad: ['sulfato férrico'],
    stock: ['sulfato de hierro (III)'],
    sist: ['trisulfato de dihierro'],
    hint: 'SO₄²⁻ = sulfato. Fe³⁺ (EO mayor) → férrico → sulfato férrico. 2Fe³⁺ + 3SO₄²⁻.'
  },
  {
    formula: 'CuSO₄',
    group: 'sal-ox', level: 'medium',
    trad: ['sulfato cúprico'],
    stock: ['sulfato de cobre (II)'],
    sist: ['sulfato de cobre'],
    hint: 'SO₄²⁻ = sulfato. Cu²⁺ (EO mayor) → cúprico → sulfato cúprico. Piedra azul.'
  },
  {
    formula: 'Cu(NO₃)₂',
    group: 'sal-ox', level: 'medium',
    trad: ['nitrato cúprico'],
    stock: ['nitrato de cobre (II)'],
    sist: ['dinitrato de cobre'],
    hint: 'NO₃⁻ = nitrato. Cu²⁺ → cúprico → nitrato cúprico. Cu²⁺ + 2NO₃⁻.'
  },
  {
    formula: 'Ni(NO₃)₂',
    group: 'sal-ox', level: 'medium',
    trad: ['nitrato niqueloso'],
    stock: ['nitrato de níquel (II)'],
    sist: ['dinitrato de níquel'],
    hint: 'NO₃⁻ = nitrato. Ni²⁺ (EO menor del Ni) → niqueloso → nitrato niqueloso.'
  },
  {
    formula: 'Co(NO₃)₂',
    group: 'sal-ox', level: 'medium',
    trad: ['nitrato cobaltoso'],
    stock: ['nitrato de cobalto (II)'],
    sist: ['dinitrato de cobalto'],
    hint: 'NO₃⁻ = nitrato. Co²⁺ (EO menor) → cobaltoso → nitrato cobaltoso.'
  },
  {
    formula: 'ZnSO₄',
    group: 'sal-ox', level: 'medium',
    trad: ['sulfato de zinc'],
    stock: [],
    sist: ['sulfato de zinc'],
    hint: 'SO₄²⁻ = sulfato. Zn tiene valencia fija +2. Sulfato de zinc (caparrosa blanca).'
  },
  {
    formula: 'Pb(NO₃)₂',
    group: 'sal-ox', level: 'medium',
    trad: ['nitrato plumboso'],
    stock: ['nitrato de plomo (II)'],
    sist: ['dinitrato de plomo'],
    hint: 'NO₃⁻ = nitrato. Pb²⁺ (EO menor) → plumboso → nitrato plumboso.'
  },
  {
    formula: 'Fe(NO₃)₃',
    group: 'sal-ox', level: 'medium',
    trad: ['nitrato férrico'],
    stock: ['nitrato de hierro (III)'],
    sist: ['trinitrato de hierro'],
    hint: 'NO₃⁻ = nitrato. Fe³⁺ (EO mayor) → férrico → nitrato férrico.'
  },
  {
    formula: 'SnSO₄',
    group: 'sal-ox', level: 'medium',
    trad: ['sulfato estannoso'],
    stock: ['sulfato de estaño (II)'],
    sist: ['sulfato de estaño'],
    hint: 'SO₄²⁻ = sulfato. Sn²⁺ (EO menor) → estannoso → sulfato estannoso.'
  },

  // -- hard --
  {
    formula: 'KMnO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['permanganato de potasio'],
    stock: [],
    sist: ['permanganato de potasio'],
    hint: 'MnO₄⁻ = permanganato (Mn EO=+7, prefijo per-). K⁺ → potasio.'
  },
  {
    formula: 'K₂CrO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['cromato de potasio'],
    stock: [],
    sist: ['cromato de dipotasio'],
    hint: 'CrO₄²⁻ = cromato (Cr EO=+6). Dos K⁺ por un CrO₄²⁻. Color amarillo.'
  },
  {
    formula: 'K₂Cr₂O₇',
    group: 'sal-ox', level: 'hard',
    trad: ['dicromato de potasio'],
    stock: [],
    sist: ['dicromato de dipotasio'],
    hint: 'Cr₂O₇²⁻ = dicromato (2 átomos de Cr EO=+6 cada uno). Dos K⁺. Color naranja.'
  },
  {
    formula: 'KClO₃',
    group: 'sal-ox', level: 'hard',
    trad: ['clorato de potasio'],
    stock: [],
    sist: ['clorato de potasio'],
    hint: 'ClO₃⁻ = clorato (Cl EO=+5). K⁺ → potasio. Oxidante fuerte.'
  },
  {
    formula: 'KClO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['perclorato de potasio'],
    stock: [],
    sist: ['perclorato de potasio'],
    hint: 'ClO₄⁻ = perclorato (Cl EO=+7, máximo). K⁺ → potasio.'
  },
  {
    formula: 'KClO',
    group: 'sal-ox', level: 'hard',
    trad: ['hipoclorito de potasio'],
    stock: [],
    sist: ['hipoclorito de potasio'],
    hint: 'ClO⁻ = hipoclorito (Cl EO=+1, mínimo → hipo-). K⁺ → potasio.'
  },
  {
    formula: 'Mn(NO₃)₂',
    group: 'sal-ox', level: 'hard',
    trad: ['nitrato manganoso'],
    stock: ['nitrato de manganeso (II)'],
    sist: ['dinitrato de manganeso'],
    hint: 'NO₃⁻ = nitrato. Mn²⁺ (EO menor) → manganoso → nitrato manganoso.'
  },
  {
    formula: 'Cr₂(SO₄)₃',
    group: 'sal-ox', level: 'hard',
    trad: ['sulfato crómico'],
    stock: ['sulfato de cromo (III)'],
    sist: ['trisulfato de dicromo'],
    hint: 'SO₄²⁻ = sulfato. Cr³⁺ → crómico → sulfato crómico. 2Cr³⁺ + 3SO₄²⁻.'
  },
  {
    formula: 'AlPO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['fosfato de aluminio'],
    stock: [],
    sist: ['fosfato de aluminio'],
    hint: 'PO₄³⁻ = fosfato. Al³⁺ → aluminio. Valencia fija. Al³⁺ + PO₄³⁻ → AlPO₄.'
  },
  {
    formula: 'Ca(ClO₃)₂',
    group: 'sal-ox', level: 'hard',
    trad: ['clorato de calcio'],
    stock: [],
    sist: ['diclorato de calcio'],
    hint: 'ClO₃⁻ = clorato. Ca²⁺ → calcio. Ca²⁺ + 2ClO₃⁻ → Ca(ClO₃)₂.'
  },

];

// Total: 218 compounds
