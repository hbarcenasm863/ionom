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
    sist: ['monóxido de dilitio', 'óxido de dilitio'],
    hint: 'Li tiene valencia fija +1. Dos Li⁺ compensan un O²⁻. Grupo 1A → óxido básico.'
  },
  {
    formula: 'Na₂O',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de sodio'],
    stock: [],
    sist: ['monóxido de disodio', 'óxido de disodio'],
    hint: 'Na tiene valencia fija +1. Dos Na⁺ compensan un O²⁻ → óxido de sodio.'
  },
  {
    formula: 'K₂O',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de potasio'],
    stock: [],
    sist: ['monóxido de dipotasio', 'óxido de dipotasio'],
    hint: 'K tiene valencia fija +1. Metal alcalino + O₂ forma óxido básico.'
  },
  {
    formula: 'Rb₂O',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de rubidio'],
    stock: [],
    sist: ['monóxido de dirubidio', 'óxido de dirubidio'],
    hint: 'Rb (grupo 1A) tiene valencia fija +1. Metal alcalino + O₂.'
  },
  {
    formula: 'Cs₂O',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de cesio'],
    stock: [],
    sist: ['monóxido de dicesio', 'óxido de dicesio'],
    hint: 'Cs (grupo 1A) tiene valencia fija +1. Óxido básico.'
  },
  {
    formula: 'BeO',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de berilio'],
    stock: [],
    sist: ['monóxido de berilio', 'óxido de berilio'],
    hint: 'Be tiene valencia fija +2. Ratio 1:1 con O²⁻ → BeO.'
  },
  {
    formula: 'MgO',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de magnesio'],
    stock: [],
    sist: ['monóxido de magnesio', 'óxido de magnesio'],
    hint: 'Mg tiene valencia fija +2. Mg²⁺ + O²⁻ → MgO.'
  },
  {
    formula: 'CaO',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de calcio'],
    stock: [],
    sist: ['monóxido de calcio', 'óxido de calcio'],
    hint: 'Ca tiene valencia +2. Metal alcalinotérreo + O₂ → óxido básico.'
  },
  {
    formula: 'SrO',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de estroncio'],
    stock: [],
    sist: ['monóxido de estroncio', 'óxido de estroncio'],
    hint: 'Sr (grupo 2A) tiene valencia fija +2. Sr²⁺ + O²⁻ → SrO.'
  },
  {
    formula: 'BaO',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de bario'],
    stock: [],
    sist: ['monóxido de bario', 'óxido de bario'],
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
    sist: ['monóxido de zinc', 'óxido de zinc'],
    hint: 'Zn tiene valencia fija +2. Zn²⁺ + O²⁻ → ZnO.'
  },
  {
    formula: 'Ag₂O',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de plata'],
    stock: [],
    sist: ['monóxido de diplata', 'óxido de diplata'],
    hint: 'Ag tiene valencia fija +1. Dos Ag⁺ compensan un O²⁻ → Ag₂O.'
  },

  // -- medium (variable-valence, 2 oxidation states) --
  {
    formula: 'FeO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido ferroso'],
    stock: ['óxido de hierro (II)'],
    sist: ['monóxido de hierro', 'óxido de hierro'],
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
    sist: ['monóxido de dicobre', 'óxido de dicobre'],
    hint: 'Cu⁺ es el EO menor del cobre → -oso → cuproso. Dos Cu⁺ compensan un O²⁻.'
  },
  {
    formula: 'CuO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido cúprico'],
    stock: ['óxido de cobre (II)'],
    sist: ['monóxido de cobre', 'óxido de cobre'],
    hint: 'Cu²⁺ es el EO mayor del cobre → -ico → cúprico. Cu²⁺ + O²⁻ → CuO.'
  },
  {
    formula: 'PbO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido plumboso'],
    stock: ['óxido de plomo (II)'],
    sist: ['monóxido de plomo', 'óxido de plomo'],
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
    sist: ['monóxido de estaño', 'óxido de estaño'],
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
    sist: ['monóxido de níquel', 'óxido de níquel'],
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
    sist: ['monóxido de cobalto', 'óxido de cobalto'],
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
    sist: ['monóxido de manganeso', 'óxido de manganeso'],
    hint: 'Mn puede tener EO +2,+4,+7. EO=+2 (menor habitual) → -oso → manganoso.'
  },
  {
    formula: 'MnO₂',
    group: 'ox-bas', level: 'hard',
    trad: [],
    stock: ['óxido de manganeso (IV)'],
    sist: ['dióxido de manganeso'],
    hint: 'Mn con EO=+4 (tiene +2, +3, +4, +7). Con 4 estados de oxidación el sistema -oso/-ico no aplica sin ambigüedad. Usa siempre Stock o Sistemática.'
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
    group: 'anhid', level: 'hard',
    trad: ['anhídrido vanádico'],
    stock: ['óxido de vanadio (V)'],
    sist: ['pentaóxido de divanadio'],
    hint: 'V₂O₅ es un óxido ácido (anhídrido). Es el precursor del ácido vanádico H₃VO₄. EO del V = +5.'
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
    sist: ['monóxido de mercurio', 'óxido de mercurio'],
    hint: 'Hg²⁺ (mercúrico) es el EO mayor del mercurio. Hg⁺ (mercurioso) forma Hg₂²⁺.'
  },
  {
    formula: 'Au₂O',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido auroso'],
    stock: ['óxido de oro (I)'],
    sist: ['monóxido de dioro', 'óxido de dioro'],
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
    sist: ['monóxido de vanadio', 'óxido de vanadio'],
    hint: 'V²⁺ es el EO menor del vanadio → -oso → vanadioso. V tiene EO +2,+3,+4,+5.'
  },
  {
    formula: 'V₂O₃',
    group: 'ox-bas', level: 'hard',
    trad: [],
    stock: ['óxido de vanadio (III)'],
    sist: ['trióxido de divanadio'],
    hint: 'V³⁺ EO intermedio del vanadio. Con 4 EO posibles (+2,+3,+4,+5) el sistema -oso/-ico genera ambigüedad; usa siempre Stock. 2(+3)+3(−2)=0.'
  },

  // ─────────────────────────────────────────────
  // ANHID  (anhídridos)  — nonmetal + O
  // ─────────────────────────────────────────────

  // -- easy --
  {
    formula: 'CO₂',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido carbónico', 'óxido carbónico'],
    stock: [],
    sist: ['dióxido de carbono'],
    hint: 'C con EO=+4 (mayor para C). No metal + O → anhídrido. → -ico → carbónico.'
  },
  {
    formula: 'SO₃',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido sulfúrico', 'óxido sulfúrico'],
    stock: [],
    sist: ['trióxido de azufre'],
    hint: 'S con EO=+6 (mayor). → -ico → sulfúrico → anhídrido sulfúrico. S+6 + 3O−2 = 0.'
  },
  {
    formula: 'SO₂',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido sulfuroso', 'óxido sulfuroso'],
    stock: [],
    sist: ['dióxido de azufre'],
    hint: 'S con EO=+4 (menor que +6). → -oso → sulfuroso → anhídrido sulfuroso.'
  },
  {
    formula: 'N₂O₅',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido nítrico', 'óxido nítrico'],
    stock: [],
    sist: ['pentaóxido de dinitrógeno'],
    hint: 'N con EO=+5 (mayor). → -ico → nítrico → anhídrido nítrico. 2(+5)+5(−2)=0.'
  },
  {
    formula: 'N₂O₃',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido nitroso', 'óxido nitroso'],
    stock: [],
    sist: ['trióxido de dinitrógeno'],
    hint: 'N con EO=+3 (menor que +5). → -oso → nitroso → anhídrido nitroso.'
  },
  {
    formula: 'Cl₂O',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido hipocloroso', 'óxido hipocloroso'],
    stock: [],
    sist: ['monóxido de dicloro', 'óxido de dicloro'],
    hint: 'Cl con EO=+1 (el mínimo). → prefijo hipo- → hipocloroso → anhídrido hipocloroso.'
  },
  {
    formula: 'P₂O₅',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido fosfórico', 'óxido fosfórico'],
    stock: [],
    sist: ['pentaóxido de difósforo'],
    hint: 'P con EO=+5 (mayor). → -ico → fosfórico → anhídrido fosfórico.'
  },

  // -- medium --
  {
    formula: 'P₂O₃',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido fosforoso', 'óxido fosforoso'],
    stock: [],
    sist: ['trióxido de difósforo'],
    hint: 'P con EO=+3 (menor que +5). → -oso → fosforoso → anhídrido fosforoso.'
  },
  {
    formula: 'Cl₂O₃',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido cloroso', 'óxido cloroso'],
    stock: [],
    sist: ['trióxido de dicloro'],
    hint: 'Cl con EO=+3. En la serie del cloro: +1(hipo-oso), +3(-oso), +5(-ico), +7(per-ico).'
  },
  {
    formula: 'Cl₂O₅',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido clórico', 'óxido clórico'],
    stock: [],
    sist: ['pentaóxido de dicloro'],
    hint: 'Cl con EO=+5 (penúltimo). → -ico → clórico → anhídrido clórico.'
  },
  {
    formula: 'Cl₂O₇',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido perclórico', 'óxido perclórico'],
    stock: [],
    sist: ['heptaóxido de dicloro'],
    hint: 'Cl con EO=+7 (máximo, ≥4 estados) → prefijo per- → perclórico → anhídrido perclórico.'
  },
  {
    formula: 'As₂O₃',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido arsenioso', 'óxido arsenioso'],
    stock: [],
    sist: ['trióxido de diarsénico'],
    hint: 'As con EO=+3 (menor). → -oso → arsenioso → anhídrido arsenioso.'
  },
  {
    formula: 'As₂O₅',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido arsénico', 'óxido arsénico'],
    stock: [],
    sist: ['pentaóxido de diarsénico'],
    hint: 'As con EO=+5 (mayor). → -ico → arsénico → anhídrido arsénico.'
  },
  {
    formula: 'Br₂O',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido hipobromoso', 'óxido hipobromoso'],
    stock: [],
    sist: ['monóxido de dibromo', 'óxido de dibromo'],
    hint: 'Br con EO=+1 (mínimo). → hipo-oso → hipobromoso → anhídrido hipobromoso.'
  },
  {
    formula: 'SiO₂',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido silícico', 'óxido silícico'],
    stock: [],
    sist: ['dióxido de silicio'],
    hint: 'Si con EO=+4 (único EO del Si). → -ico → silícico → anhídrido silícico.'
  },
  {
    formula: 'N₂O',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido hiponitroso', 'óxido hiponitroso'],
    stock: [],
    sist: ['monóxido de dinitrógeno', 'óxido de dinitrógeno'],
    hint: 'N con EO=+1 (el mínimo del N). → hipo-oso → hiponitroso → anhídrido hiponitroso.'
  },

  // -- hard --
  {
    formula: 'Mn₂O₇',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido permangánico', 'óxido permangánico'],
    stock: [],
    sist: ['heptaóxido de dimanganeso'],
    hint: 'Mn con EO=+7 (máximo, actúa como no metal). Prefijo per- → permangánico.'
  },
  {
    formula: 'CrO₃',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido crómico', 'óxido crómico'],
    stock: [],
    sist: ['trióxido de cromo'],
    hint: 'Cr con EO=+6 actúa como no metal → anhídrido. EO mayor → -ico → crómico.'
  },
  {
    formula: 'I₂O₅',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido yódico', 'óxido yódico'],
    stock: [],
    sist: ['pentaóxido de diyodo'],
    hint: 'I con EO=+5. → -ico → yódico → anhídrido yódico.'
  },
  {
    formula: 'SeO₂',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido selenioso', 'óxido selenioso'],
    stock: [],
    sist: ['dióxido de selenio'],
    hint: 'Se con EO=+4 (menor). → -oso → selenioso → anhídrido selenioso.'
  },
  {
    formula: 'SeO₃',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido selénico', 'óxido selénico'],
    stock: [],
    sist: ['trióxido de selenio'],
    hint: 'Se con EO=+6 (mayor). → -ico → selénico → anhídrido selénico.'
  },
  {
    formula: 'TeO₂',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido teluroso', 'óxido teluroso'],
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
    group: 'ac-hid', level: 'hard',
    trad: ['ácido clorhídrico'],
    stock: [],
    sist: ['cloruro de hidrógeno'],
    hint: 'H + Cl⁻. Cl→clor→clor-hídrico. IUPAC: nombre del anión + "de hidrógeno".'
  },
  {
    formula: 'HBr',
    group: 'ac-hid', level: 'hard',
    trad: ['ácido bromhídrico'],
    stock: [],
    sist: ['bromuro de hidrógeno'],
    hint: 'H + Br⁻. Br→brom→brom-hídrico. IUPAC: bromuro de hidrógeno.'
  },
  {
    formula: 'HI',
    group: 'ac-hid', level: 'hard',
    trad: ['ácido yodhídrico'],
    stock: [],
    sist: ['yoduro de hidrógeno'],
    hint: 'H + I⁻. I→yod→yod-hídrico. IUPAC: yoduro de hidrógeno.'
  },
  {
    formula: 'H₂S',
    group: 'ac-hid', level: 'hard',
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
    group: 'ac-ox', level: 'easy',
    trad: ['ácido perclórico'],
    stock: [],
    sist: ['ácido perclórico'],
    hint: 'H + ClO₄⁻ (perclorato). Cl con EO=+7 (máximo, ≥4 estados) → per-ico → perclórico.'
  },
  {
    formula: 'HClO₃',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido clórico'],
    stock: [],
    sist: ['ácido clórico'],
    hint: 'H + ClO₃⁻ (clorato). Cl con EO=+5 → -ico → clórico.'
  },
  {
    formula: 'HClO₂',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido cloroso'],
    stock: [],
    sist: ['ácido cloroso'],
    hint: 'H + ClO₂⁻ (clorito). Cl con EO=+3 → -oso → cloroso.'
  },
  {
    formula: 'HClO',
    group: 'ac-ox', level: 'easy',
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
    trad: ['ácido dicrómico'],
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
    sist: ['difosfato de tricalcio'],
    hint: 'PO₄³⁻ = fosfato. 3 Ca²⁺ + 2 PO₄³⁻ → Ca₃(PO₄)₂. Nombre sistemático: difosfato de tricalcio (2 PO₄ y 3 Ca). Componente principal de los huesos.'
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

  // ── ÓXIDOS BÁSICOS (banco adicional) ──
  {
    formula: 'Hg₂O',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido mercurioso'],
    stock: ['óxido de mercurio (I)'],
    sist: ['monóxido de dimercurio', 'óxido de dimercurio'],
    hint: 'Hg⁺ (EO menor) → mercurioso. 2Hg⁺ + O²⁻ → Hg₂O.'
  },
  {
    formula: 'PtO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido platinoso'],
    stock: ['óxido de platino (II)'],
    sist: ['monóxido de platino', 'óxido de platino'],
    hint: 'Pt²⁺ (EO menor) → platinoso. Pt²⁺ + O²⁻ → PtO.'
  },
  {
    formula: 'PtO₂',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido platínico'],
    stock: ['óxido de platino (IV)'],
    sist: ['dióxido de platino'],
    hint: 'Pt⁴⁺ (EO mayor) → platínico. Pt⁴⁺ + 2O²⁻ → PtO₂.'
  },
  {
    formula: 'CrO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido cromoso'],
    stock: ['óxido de cromo (II)'],
    sist: ['monóxido de cromo', 'óxido de cromo'],
    hint: 'Cr²⁺ (EO menor) → cromoso. Cr²⁺ + O²⁻ → CrO.'
  },

  // ── ANHÍDRIDOS (banco adicional) ──
  {
    formula: 'Br₂O₃',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido bromoso', 'óxido bromoso'],
    stock: ['óxido de bromo (III)'],
    sist: ['trióxido de dibromo'],
    hint: 'Br en EO +3 → bromoso (prefijo hipo- se omite en el intermedio). 2Br + 3O → Br₂O₃.'
  },
  {
    formula: 'Br₂O₅',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido brómico', 'óxido brómico'],
    stock: ['óxido de bromo (V)'],
    sist: ['pentaóxido de dibromo'],
    hint: 'Br en EO +5 → brómico. 2Br + 5O → Br₂O₅.'
  },
  {
    formula: 'Br₂O₇',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido perbrómico', 'óxido perbrómico'],
    stock: ['óxido de bromo (VII)'],
    sist: ['heptaóxido de dibromo'],
    hint: 'Br en EO +7 (máximo) → per…ico. 2Br + 7O → Br₂O₇.'
  },
  {
    formula: 'I₂O',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido hipoyodoso', 'óxido hipoyodoso'],
    stock: ['óxido de yodo (I)'],
    sist: ['monóxido de diyodo', 'óxido de diyodo'],
    hint: 'I en EO +1 (mínimo) → hipo…oso. 2I + O → I₂O.'
  },
  {
    formula: 'I₂O₃',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido yodoso', 'óxido yodoso'],
    stock: ['óxido de yodo (III)'],
    sist: ['trióxido de diyodo'],
    hint: 'I en EO +3 → yodoso. 2I + 3O → I₂O₃.'
  },
  {
    formula: 'I₂O₇',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido peryódico', 'óxido peryódico'],
    stock: ['óxido de yodo (VII)'],
    sist: ['heptaóxido de diyodo'],
    hint: 'I en EO +7 (máximo) → per…ico. 2I + 7O → I₂O₇.'
  },
  {
    formula: 'SO',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido hiposulfuroso', 'óxido hiposulfuroso'],
    stock: ['óxido de azufre (II)'],
    sist: ['monóxido de azufre', 'óxido de azufre'],
    hint: 'S en EO +2 (mínimo positivo) → hiposulfuroso. S + O → SO.'
  },
  {
    formula: 'SeO',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido hiposelenioso', 'óxido hiposelenioso'],
    stock: ['óxido de selenio (II)'],
    sist: ['monóxido de selenio', 'óxido de selenio'],
    hint: 'Se en EO +2 → hiposelenioso. Se + O → SeO.'
  },
  {
    formula: 'TeO₃',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido telúrico', 'óxido telúrico'],
    stock: ['óxido de telurio (VI)'],
    sist: ['trióxido de telurio'],
    hint: 'Te en EO +6 → telúrico. Te + 3O → TeO₃.'
  },
  {
    formula: 'B₂O₃',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido bórico', 'óxido bórico'],
    stock: ['óxido de boro (III)'],
    sist: ['trióxido de diboro'],
    hint: 'B en EO +3 (fijo) → bórico. 2B + 3O → B₂O₃.'
  },

  // ── HIDRÓXIDOS (banco adicional) ──
  {
    formula: 'CsOH',
    group: 'base', level: 'easy',
    trad: ['hidróxido de cesio'],
    stock: [],
    sist: ['hidróxido de cesio'],
    hint: 'Cs⁺ (valencia fija) + OH⁻ → CsOH; base fuerte del grupo 1.'
  },
  {
    formula: 'Cd(OH)₂',
    group: 'base', level: 'easy',
    trad: ['hidróxido de cadmio'],
    stock: [],
    sist: ['dihidróxido de cadmio'],
    hint: 'Cd²⁺ (valencia fija) + 2OH⁻ → Cd(OH)₂.'
  },
  {
    formula: 'Hg₂(OH)₂',
    group: 'base', level: 'medium',
    trad: ['hidróxido mercurioso'],
    stock: ['hidróxido de mercurio (I)'],
    sist: ['dihidróxido de dimercurio'],
    hint: 'El mercurio(I) existe siempre como catión dinuclear Hg₂²⁺, nunca como Hg⁺ aislado. Por eso la fórmula correcta es Hg₂(OH)₂, no HgOH. Este compuesto es muy inestable y se descompone en Hg₂O + H₂O.'
  },

  // ── ÁCIDOS OXÁCIDOS (banco adicional) ──
  {
    formula: 'HIO₂',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido yodoso'],
    stock: ['ácido dioxoyódico (III)'],
    sist: ['dioxoyodato (III) de hidrógeno'],
    hint: 'I en EO +3 → yodoso (dos oxígenos). H⁺ + IO₂⁻ → HIO₂.'
  },
  {
    formula: 'H₂SO₂',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido hiposulfuroso'],
    stock: ['ácido dioxosulfúrico (II)'],
    sist: ['dioxosulfato (II) de dihidrógeno'],
    hint: 'S en EO +2 → hiposulfuroso. 2H⁺ + SO₂²⁻ → H₂SO₂.'
  },
  {
    formula: 'H₂TeO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido teluroso'],
    stock: ['ácido trioxotelúrico (IV)'],
    sist: ['trioxotelurato (IV) de dihidrógeno'],
    hint: 'Te en EO +4 → teluroso. 2H⁺ + TeO₃²⁻ → H₂TeO₃.'
  },
  {
    formula: 'HBO₂',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido metabórico'],
    stock: ['ácido dioxobórico (III)'],
    sist: ['dioxoborato (III) de hidrógeno'],
    hint: 'Forma meta del ácido bórico (B en EO +3). H⁺ + BO₂⁻ → HBO₂.'
  },
  {
    formula: 'HPO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido metafosfórico'],
    stock: ['ácido trioxofosfórico (V)'],
    sist: ['trioxofosfato (V) de hidrógeno'],
    hint: 'Forma meta del ácido fosfórico (P en EO +5). H⁺ + PO₃⁻ → HPO₃.'
  },
  {
    formula: 'H₄P₂O₇',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido pirofosfórico'],
    stock: ['ácido heptaoxodifosfórico (V)'],
    sist: ['heptaoxodifosfato (V) de tetrahidrógeno'],
    hint: 'Forma piro (dos unidades de fósforo +5 condensadas). 4H⁺ + P₂O₇⁴⁻ → H₄P₂O₇.'
  },

  // ── SALES BINARIAS (banco adicional) ──
  {
    formula: 'LiF',
    group: 'sal-bin', level: 'easy',
    trad: ['fluoruro de litio'],
    stock: [],
    sist: ['fluoruro de litio'],
    hint: 'Li⁺ (valencia fija) + F⁻ → LiF; sal binaria de flúor y litio.'
  },
  {
    formula: 'BaI₂',
    group: 'sal-bin', level: 'easy',
    trad: ['yoduro de bario'],
    stock: [],
    sist: ['diyoduro de bario'],
    hint: 'Ba²⁺ (valencia fija) + 2I⁻ → BaI₂.'
  },
  {
    formula: 'AlF₃',
    group: 'sal-bin', level: 'easy',
    trad: ['fluoruro de aluminio'],
    stock: [],
    sist: ['trifluoruro de aluminio'],
    hint: 'Al³⁺ (valencia fija) + 3F⁻ → AlF₃.'
  },
  {
    formula: 'ZnS',
    group: 'sal-bin', level: 'easy',
    trad: ['sulfuro de zinc'],
    stock: [],
    sist: ['sulfuro de zinc'],
    hint: 'Zn²⁺ (valencia fija) + S²⁻ → ZnS.'
  },
  {
    formula: 'Hg₂I₂',
    group: 'sal-bin', level: 'medium',
    trad: ['yoduro mercurioso'],
    stock: ['yoduro de mercurio (I)'],
    sist: ['diyoduro de dimercurio'],
    hint: 'Hg⁺ (EO menor) → mercurioso. 2Hg⁺ + 2I⁻ → Hg₂I₂.'
  },
  {
    formula: 'HgI₂',
    group: 'sal-bin', level: 'medium',
    trad: ['yoduro mercúrico'],
    stock: ['yoduro de mercurio (II)'],
    sist: ['diyoduro de mercurio'],
    hint: 'Hg²⁺ (EO mayor) → mercúrico. Hg²⁺ + 2I⁻ → HgI₂.'
  },
  {
    formula: 'PbS₂',
    group: 'sal-bin', level: 'hard',
    trad: ['sulfuro plúmbico'],
    stock: ['sulfuro de plomo (IV)'],
    sist: ['disulfuro de plomo'],
    hint: 'Pb⁴⁺ (EO mayor) → plúmbico. Pb⁴⁺ + 2S²⁻ → PbS₂.'
  },
  {
    formula: 'SnF₂',
    group: 'sal-bin', level: 'medium',
    trad: ['fluoruro estannoso'],
    stock: ['fluoruro de estaño (II)'],
    sist: ['difluoruro de estaño'],
    hint: 'Sn²⁺ (EO menor) → estannoso. Sn²⁺ + 2F⁻ → SnF₂.'
  },
  {
    formula: 'SnF₄',
    group: 'sal-bin', level: 'hard',
    trad: ['fluoruro estánnico'],
    stock: ['fluoruro de estaño (IV)'],
    sist: ['tetrafluoruro de estaño'],
    hint: 'Sn⁴⁺ (EO mayor) → estánnico. Sn⁴⁺ + 4F⁻ → SnF₄.'
  },
  {
    formula: 'CoBr₃',
    group: 'sal-bin', level: 'medium',
    trad: ['bromuro cobáltico'],
    stock: ['bromuro de cobalto (III)'],
    sist: ['tribromuro de cobalto'],
    hint: 'Co³⁺ (EO mayor) → cobáltico. Co³⁺ + 3Br⁻ → CoBr₃.'
  },
  {
    formula: 'NiCl₃',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro niquélico'],
    stock: ['cloruro de níquel (III)'],
    sist: ['tricloruro de níquel'],
    hint: 'Ni³⁺ (EO mayor) → niquélico. Ni³⁺ + 3Cl⁻ → NiCl₃.'
  },
  {
    formula: 'PtCl₂',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro platinoso'],
    stock: ['cloruro de platino (II)'],
    sist: ['dicloruro de platino'],
    hint: 'Pt²⁺ (EO menor) → platinoso. Pt²⁺ + 2Cl⁻ → PtCl₂.'
  },
  {
    formula: 'AuI₃',
    group: 'sal-bin', level: 'hard',
    trad: ['yoduro áurico'],
    stock: ['yoduro de oro (III)'],
    sist: ['triyoduro de oro'],
    hint: 'Au³⁺ (EO mayor) → áurico. Au³⁺ + 3I⁻ → AuI₃.'
  },


  // ─────────────────────────────────────────────
  // NEW ENTRIES — batch 2 (appended)
  // ─────────────────────────────────────────────

  // ── OX-BAS: talio, tungsteno, molibdeno, titanio, vanadio (IV) ──
  {
    formula: 'Tl₂O',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido talioso'],
    stock: ['óxido de talio (I)'],
    sist: ['monóxido de ditalio', 'óxido de ditalio'],
    hint: 'Tl⁺ (EO menor del talio) → -oso → talioso. 2Tl⁺ + O²⁻ → Tl₂O.'
  },
  {
    formula: 'Tl₂O₃',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido tálico'],
    stock: ['óxido de talio (III)'],
    sist: ['trióxido de ditalio'],
    hint: 'Tl³⁺ (EO mayor del talio) → -ico → tálico. 2(+3)+3(−2)=0.'
  },
  {
    formula: 'WO₂',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido wolframioso'],
    stock: ['óxido de wolframio (IV)'],
    sist: ['dióxido de wolframio'],
    hint: 'W con EO=+4 (menor entre +4 y +6) → -oso → wolframioso. W⁴⁺ + 2O²⁻.'
  },
  {
    formula: 'WO₃',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido túngstico'],
    stock: ['óxido de wolframio (VI)'],
    sist: ['trióxido de wolframio'],
    hint: 'WO₃ es un óxido ácido (anhídrido). Es el precursor del ácido túngstico H₂WO₄. EO del W = +6.'
  },
  {
    formula: 'MoO₂',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido molibdoso'],
    stock: ['óxido de molibdeno (IV)'],
    sist: ['dióxido de molibdeno'],
    hint: 'Mo con EO=+4 (menor entre +4 y +6) → -oso → molibdoso. Mo⁴⁺ + 2O²⁻.'
  },
  {
    formula: 'MoO₃',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido molíbdico'],
    stock: ['óxido de molibdeno (VI)'],
    sist: ['trióxido de molibdeno'],
    hint: 'MoO₃ es un óxido ácido (anhídrido). Es el precursor del ácido molíbdico H₂MoO₄. EO del Mo = +6.'
  },
  {
    formula: 'TiO',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido titanoso'],
    stock: ['óxido de titanio (II)'],
    sist: ['monóxido de titanio', 'óxido de titanio'],
    hint: 'Ti con EO=+2 (menor). → -oso → titanoso. Ti²⁺ + O²⁻ → TiO.'
  },
  {
    formula: 'Ti₂O₃',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido titánico'],
    stock: ['óxido de titanio (III)'],
    sist: ['trióxido de dititanio'],
    hint: 'Ti con EO=+3 (intermedio). Stock preciso. 2(+3)+3(−2)=0.'
  },
  {
    formula: 'VO₂',
    group: 'ox-bas', level: 'hard',
    trad: [],
    stock: ['óxido de vanadio (IV)'],
    sist: ['dióxido de vanadio'],
    hint: 'V con EO=+4 (intermedio entre +3 y +5). Múltiples EO → trad vacío; usar Stock. V⁴⁺ + 2O²⁻.'
  },

  // ── ANHID: NO y NO₂ (casos especiales), P₄O₆, P₄O₁₀ ──
  {
    formula: 'NO',
    group: 'anhid', level: 'medium',
    trad: ['óxido nítrico'],
    stock: [],
    sist: ['monóxido de nitrógeno', 'óxido de nitrógeno'],
    hint: 'N con EO=+2. Molécula radicalaria (impar de electrones). Nombre común: óxido nítrico.'
  },
  {
    formula: 'NO₂',
    group: 'anhid', level: 'medium',
    trad: ['dióxido de nitrógeno'],
    stock: [],
    sist: ['dióxido de nitrógeno'],
    hint: 'N con EO=+4. También radical. NO₂ dimeriza a N₂O₄. No encaja bien en series trad.'
  },
  {
    formula: 'N₂O₄',
    group: 'anhid', level: 'medium',
    trad: [],
    stock: [],
    sist: ['tetraóxido de dinitrógeno'],
    hint: 'Dímero de NO₂ (N con EO=+4 promedio). El nombre "anhídrido nitroso" le pertenece a N₂O₃; N₂O₄ no tiene nombre tradicional estándar. IUPAC: tetraóxido de dinitrógeno.'
  },
  {
    formula: 'P₄O₆',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido fosforoso', 'óxido fosforoso'],
    stock: [],
    sist: ['hexaóxido de tetrafósforo'],
    hint: 'Fórmula molecular real del óxido de P(III). Equivale a 2×P₂O₃. → fosforoso.'
  },
  {
    formula: 'P₄O₁₀',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido fosfórico', 'óxido fosfórico'],
    stock: [],
    sist: ['decaóxido de tetrafósforo'],
    hint: 'Fórmula molecular real del óxido de P(V). Equivale a 2×P₂O₅. Gran desecante.'
  },

  // ── HIDRU: AlH₃, BeH₂, TiH₂ ──
  {
    formula: 'AlH₃',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de aluminio'],
    stock: [],
    sist: ['trihidruro de aluminio'],
    hint: 'Al tiene valencia fija +3. Al³⁺ + 3H⁻ → AlH₃. IUPAC: trihidruro de aluminio.'
  },
  {
    formula: 'BeH₂',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de berilio'],
    stock: [],
    sist: ['dihidruro de berilio'],
    hint: 'Be tiene valencia fija +2. Be²⁺ + 2H⁻ → BeH₂. IUPAC: dihidruro de berilio.'
  },
  {
    formula: 'TiH₂',
    group: 'hidru', level: 'hard',
    trad: ['hidruro titanoso'],
    stock: ['hidruro de titanio (II)'],
    sist: ['dihidruro de titanio'],
    hint: 'Ti con EO=+2 (menor) → -oso → titanoso → hidruro titanoso. TiH₂ se usa en metalurgia.'
  },

  // ── BASE: Mn(OH)₃, Tl(OH)₃, Ti(OH)₄ ──
  {
    formula: 'Mn(OH)₃',
    group: 'base', level: 'hard',
    trad: ['hidróxido mangánico'],
    stock: ['hidróxido de manganeso (III)'],
    sist: ['trihidróxido de manganeso'],
    hint: 'Mn³⁺ (EO mayor habitual en hidróxidos de Mn) → -ico → mangánico. Mn tiene +2,+3,+4,+7.'
  },
  {
    formula: 'Tl(OH)₃',
    group: 'base', level: 'hard',
    trad: ['hidróxido tálico'],
    stock: ['hidróxido de talio (III)'],
    sist: ['trihidróxido de talio'],
    hint: 'Tl³⁺ (EO mayor) → -ico → tálico → hidróxido tálico. 2 EO del Tl: +1 y +3.'
  },
  {
    formula: 'Ti(OH)₄',
    group: 'base', level: 'hard',
    trad: ['hidróxido titánico'],
    stock: ['hidróxido de titanio (IV)'],
    sist: ['tetrahidróxido de titanio'],
    hint: 'Ti con EO=+4 (el más estable) → -ico → titánico → hidróxido titánico. Ti⁴⁺ + 4OH⁻.'
  },

  // ── AC-OX: H₃PO₂ ──
  {
    formula: 'H₃PO₂',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido hipofosforoso'],
    stock: [],
    sist: ['ácido hipofosforoso'],
    hint: 'H₃ + PO₂³⁻ (hipofosfit). P con EO=+1 (mínimo) → hipo-oso → hipofosforoso.'
  },

  // ── SAL-BIN: NaF, sales de sulfuro, bromuro de cobre ──
  {
    formula: 'NaF',
    group: 'sal-bin', level: 'easy',
    trad: ['fluoruro de sodio'],
    stock: [],
    sist: ['fluoruro de sodio'],
    hint: 'F⁻ → fluoruro. Na⁺ → sodio. Valencia fija. Fluoruro de sodio (pasta dental).'
  },
  {
    formula: 'CaS',
    group: 'sal-bin', level: 'easy',
    trad: ['sulfuro de calcio'],
    stock: [],
    sist: ['sulfuro de calcio'],
    hint: 'S²⁻ → sulfuro. Ca²⁺ → calcio. Ca²⁺ + S²⁻ → CaS.'
  },
  {
    formula: 'Ag₂S',
    group: 'sal-bin', level: 'easy',
    trad: ['sulfuro de plata'],
    stock: [],
    sist: ['sulfuro de diplata'],
    hint: 'S²⁻ → sulfuro. Dos Ag⁺ por un S²⁻ → Ag₂S. Mineral argentita.'
  },
  {
    formula: 'Cu₂S',
    group: 'sal-bin', level: 'medium',
    trad: ['sulfuro cuproso'],
    stock: ['sulfuro de cobre (I)'],
    sist: ['sulfuro de dicobre'],
    hint: 'Cu⁺ (EO menor) → -oso → cuproso → sulfuro cuproso. Dos Cu⁺ + S²⁻ → Cu₂S.'
  },
  {
    formula: 'PbS',
    group: 'sal-bin', level: 'medium',
    trad: ['sulfuro plumboso'],
    stock: ['sulfuro de plomo (II)'],
    sist: ['sulfuro de plomo'],
    hint: 'Pb²⁺ (EO menor del Pb) → -oso → plumboso → sulfuro plumboso. Mineral galena.'
  },
  {
    formula: 'FeS₂',
    group: 'sal-bin', level: 'hard',
    trad: ['bisulfuro ferroso'],
    stock: ['disulfuro de hierro (II)'],
    sist: ['disulfuro de hierro'],
    hint: 'Fe²⁺ + S₂²⁻ (ion persulfuro). Mineral pirita (oro de los tontos). FeS₂.'
  },
  {
    formula: 'Bi₂S₃',
    group: 'sal-bin', level: 'hard',
    trad: ['sulfuro de bismuto'],
    stock: ['sulfuro de bismuto (III)'],
    sist: ['trisulfuro de dibismuto'],
    hint: 'Bi³⁺ (EO único habitual) + S²⁻. 2Bi³⁺ + 3S²⁻ → Bi₂S₃. Mineral bismutinita.'
  },
  {
    formula: 'CuBr',
    group: 'sal-bin', level: 'medium',
    trad: ['bromuro cuproso'],
    stock: ['bromuro de cobre (I)'],
    sist: ['bromuro de cobre'],
    hint: 'Cu⁺ (EO menor) → -oso → cuproso → bromuro cuproso. Cu⁺ + Br⁻ → CuBr.'
  },
  {
    formula: 'CuBr₂',
    group: 'sal-bin', level: 'medium',
    trad: ['bromuro cúprico'],
    stock: ['bromuro de cobre (II)'],
    sist: ['dibromuro de cobre'],
    hint: 'Cu²⁺ (EO mayor) → -ico → cúprico → bromuro cúprico. Cu²⁺ + 2Br⁻ → CuBr₂.'
  },

  // ── SAL-OX: carbonatos, cromatos, permanganato K₂, nitratos, fosfatos, sulfatos ──
  {
    formula: 'K₂CO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['carbonato de potasio'],
    stock: [],
    sist: ['carbonato de dipotasio'],
    hint: 'CO₃²⁻ = carbonato. Dos K⁺ por un CO₃²⁻ → K₂CO₃. Potasa (K₂CO₃).'
  },
  {
    formula: 'MgCO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['carbonato de magnesio'],
    stock: [],
    sist: ['carbonato de magnesio'],
    hint: 'CO₃²⁻ = carbonato. Mg²⁺ + CO₃²⁻ → MgCO₃. Mineral magnesita.'
  },
  {
    formula: 'BaCO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['carbonato de bario'],
    stock: [],
    sist: ['carbonato de bario'],
    hint: 'CO₃²⁻ = carbonato. Ba²⁺ + CO₃²⁻ → BaCO₃. Mineral witherita.'
  },
  {
    formula: 'Na₂CrO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['cromato de sodio'],
    stock: [],
    sist: ['cromato de disodio'],
    hint: 'CrO₄²⁻ = cromato (Cr EO=+6). Dos Na⁺ + CrO₄²⁻ → Na₂CrO₄. Color amarillo.'
  },
  {
    formula: 'Na₂Cr₂O₇',
    group: 'sal-ox', level: 'hard',
    trad: ['dicromato de sodio'],
    stock: [],
    sist: ['dicromato de disodio'],
    hint: 'Cr₂O₇²⁻ = dicromato. Dos Na⁺ + Cr₂O₇²⁻ → Na₂Cr₂O₇. Oxidante fuerte, naranja.'
  },
  {
    formula: 'K₂MnO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['manganato de potasio'],
    stock: [],
    sist: ['manganato de dipotasio'],
    hint: 'MnO₄²⁻ = manganato (Mn EO=+6). Dos K⁺ + MnO₄²⁻ → K₂MnO₄. Verde en solución.'
  },
  {
    formula: 'KNO₂',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrito de potasio'],
    stock: [],
    sist: ['nitrito de potasio'],
    hint: 'NO₂⁻ = nitrito (N EO=+3). K⁺ → potasio. Nitrito de potasio.'
  },
  {
    formula: 'Ca(NO₃)₂',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrato de calcio'],
    stock: [],
    sist: ['dinitrato de calcio'],
    hint: 'NO₃⁻ = nitrato. Ca²⁺ + 2NO₃⁻ → Ca(NO₃)₂. Nitrato de calcio (salitre nórdico).'
  },
  {
    formula: 'FePO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['fosfato férrico'],
    stock: ['fosfato de hierro (III)'],
    sist: ['fosfato de hierro'],
    hint: 'PO₄³⁻ = fosfato. Fe³⁺ (EO mayor) → férrico → fosfato férrico. Fe³⁺ + PO₄³⁻ → FePO₄.'
  },
  {
    formula: 'CaSO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de calcio'],
    stock: [],
    sist: ['sulfato de calcio'],
    hint: 'SO₄²⁻ = sulfato. Ca²⁺ + SO₄²⁻ → CaSO₄. Aljez/yeso en construcción colombiana.'
  },
  {
    formula: 'MgSO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de magnesio'],
    stock: [],
    sist: ['sulfato de magnesio'],
    hint: 'SO₄²⁻ = sulfato. Mg²⁺ + SO₄²⁻ → MgSO₄. Sal de Epsom, usos medicinales.'
  },
  {
    formula: 'NiSO₄',
    group: 'sal-ox', level: 'medium',
    trad: ['sulfato niqueloso'],
    stock: ['sulfato de níquel (II)'],
    sist: ['sulfato de níquel'],
    hint: 'SO₄²⁻ = sulfato. Ni²⁺ (EO menor) → niqueloso → sulfato niqueloso. Ni²⁺ + SO₄²⁻.'
  },
  {
    formula: 'Ag₂SO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de plata'],
    stock: [],
    sist: ['sulfato de diplata'],
    hint: 'SO₄²⁻ = sulfato. Dos Ag⁺ + SO₄²⁻ → Ag₂SO₄. Ligeramente soluble.'
  },

  // ─────────────────────────────────────────────
  // NEW ENTRIES — batch 3 (appended, +160)
  // ─────────────────────────────────────────────

  // ── OX-BAS (20) ──
  {
    formula: 'Fr₂O',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de francio'],
    stock: [],
    sist: ['monóxido de difrancio', 'óxido de difrancio'],
    hint: 'Fr tiene valencia fija +1. 2Fr⁺ + O²⁻ → Fr₂O. Metal alcalino.'
  },
  {
    formula: 'RaO',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de radio'],
    stock: [],
    sist: ['monóxido de radio', 'óxido de radio'],
    hint: 'Ra (grupo 2A) tiene valencia fija +2. Ra²⁺ + O²⁻ → RaO.'
  },
  {
    formula: 'CdO',
    group: 'ox-bas', level: 'easy',
    trad: ['óxido de cadmio'],
    stock: [],
    sist: ['monóxido de cadmio', 'óxido de cadmio'],
    hint: 'Cd tiene valencia fija +2. Cd²⁺ + O²⁻ → CdO.'
  },
  {
    formula: 'Cu₂O₃',
    group: 'ox-bas', level: 'hard',
    trad: [],
    stock: ['óxido de cobre (III)'],
    sist: ['trióxido de dicobre'],
    hint: 'Cu en EO +3 (poco común). "Cúprico" ya le pertenece a CuO (Cu²⁺, EO mayor en el par Cu⁺/Cu²⁺); Cu³⁺ no tiene nombre tradicional. Usa siempre Stock: óxido de cobre (III). 2(+3)+3(−2)=0.'
  },
  {
    formula: 'MnO₃',
    group: 'ox-bas', level: 'hard',
    trad: [],
    stock: ['óxido de manganeso (VI)'],
    sist: ['trióxido de manganeso'],
    hint: 'Mn en EO +6. Mn tiene 4 EO posibles (+2,+3,+4,+7); el sistema -oso/-ico es ambiguo. Usa Stock: óxido de manganeso (VI). Mn⁶⁺ + 3O²⁻.'
  },
  {
    formula: 'Mn₂O₃',
    group: 'ox-bas', level: 'hard',
    trad: [],
    stock: ['óxido de manganeso (III)'],
    sist: ['trióxido de dimanganeso'],
    hint: 'Mn en EO +3. Con 4 EO posibles el nombre tradicional es ambiguo; "mangánico" también se usa para MnO₂ y MnO₃. Usa Stock: óxido de manganeso (III). 2(+3)+3(−2)=0.'
  },
  {
    formula: 'Co₃O₄',
    group: 'ox-bas', level: 'hard',
    trad: [],
    stock: ['óxido de cobalto (II,III)'],
    sist: ['tetraóxido de tricobalto'],
    hint: 'Óxido mixto de Co²⁺ y Co³⁺ (espinela). No tiene forma tradicional simple; usar Stock o IUPAC.'
  },
  {
    formula: 'Fe₃O₄',
    group: 'ox-bas', level: 'hard',
    trad: [],
    stock: ['óxido de hierro (II,III)'],
    sist: ['tetraóxido de trihierro'],
    hint: 'Magnetita: óxido mixto de Fe²⁺ y Fe³⁺. No usa -oso/-ico simple; usar Stock o IUPAC.'
  },
  {
    formula: 'PdO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido paladoso'],
    stock: ['óxido de paladio (II)'],
    sist: ['monóxido de paladio', 'óxido de paladio'],
    hint: 'Pd²⁺ (EO menor habitual) → -oso → paladoso. Pd²⁺ + O²⁻ → PdO.'
  },
  {
    formula: 'IrO₂',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido irídico'],
    stock: ['óxido de iridio (IV)'],
    sist: ['dióxido de iridio'],
    hint: 'Ir en EO +4 → -ico → irídico. Ir⁴⁺ + 2O²⁻ → IrO₂.'
  },
  {
    formula: 'OsO₄',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido ósmico'],
    stock: ['óxido de osmio (VIII)'],
    sist: ['tetraóxido de osmio'],
    hint: 'Os en EO +8 (máximo conocido). Stock: óxido de osmio (VIII). Os⁸⁺ + 4O²⁻.'
  },
  {
    formula: 'ZrO₂',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido de circonio', 'óxido circónico'],
    stock: ['óxido de circonio (IV)'],
    sist: ['dióxido de circonio'],
    hint: 'Zr en EO +4 (el más estable). Trad. usual: óxido de circonio (circonia). Zr⁴⁺ + 2O²⁻ → ZrO₂.'
  },
  {
    formula: 'HfO₂',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido háfnico'],
    stock: ['óxido de hafnio (IV)'],
    sist: ['dióxido de hafnio'],
    hint: 'Hf en EO +4 → -ico → háfnico. Hf⁴⁺ + 2O²⁻ → HfO₂.'
  },
  {
    formula: 'Ce₂O₃',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido ceroso'],
    stock: ['óxido de cerio (III)'],
    sist: ['trióxido de dicerio'],
    hint: 'Ce³⁺ (EO menor del cerio) → -oso → ceroso. 2(+3)+3(−2)=0.'
  },
  {
    formula: 'CeO₂',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido cérico'],
    stock: ['óxido de cerio (IV)'],
    sist: ['dióxido de cerio'],
    hint: 'Ce⁴⁺ (EO mayor del cerio) → -ico → cérico. Ce⁴⁺ + 2O²⁻ → CeO₂.'
  },
  {
    formula: 'SnO₃',
    group: 'ox-bas', level: 'hard',
    trad: [],
    stock: ['óxido de estaño (VI)'],
    sist: ['trióxido de estaño'],
    hint: 'EO inusual (+6) del estaño; usar Stock o IUPAC en vez de tradicional.'
  },
  {
    formula: 'GeO₂',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido germánico'],
    stock: ['óxido de germanio (IV)'],
    sist: ['dióxido de germanio'],
    hint: 'Ge en EO +4 (mayor) → -ico → germánico. Ge⁴⁺ + 2O²⁻ → GeO₂.'
  },
  {
    formula: 'GeO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido germanoso'],
    stock: ['óxido de germanio (II)'],
    sist: ['monóxido de germanio', 'óxido de germanio'],
    hint: 'Ge en EO +2 (menor) → -oso → germanoso. Ge²⁺ + O²⁻ → GeO.'
  },
  {
    formula: 'NiO₂',
    group: 'ox-bas', level: 'hard',
    trad: [],
    stock: ['óxido de níquel (IV)'],
    sist: ['dióxido de níquel'],
    hint: 'Ni en EO +4 (poco común). Stock preciso: óxido de níquel (IV).'
  },

  // ── ANHID (20) ── (recordar: trad incluye anhídrido X y óxido X)
  {
    formula: 'CO',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido carbonoso', 'óxido carbonoso'],
    stock: ['óxido de carbono (II)'],
    sist: ['monóxido de carbono', 'óxido de carbono'],
    hint: 'C en EO +2 (menor). IUPAC: monóxido de carbono. Gas tóxico.'
  },
  {
    formula: 'Cl₂O₆',
    group: 'anhid', level: 'hard',
    trad: [],
    stock: ['óxido de cloro (VI)'],
    sist: ['hexaóxido de dicloro'],
    hint: 'EO mixto/inusual del cloro (+6); usar IUPAC o Stock. 2Cl + 6O → Cl₂O₆.'
  },
  {
    formula: 'F₂O',
    group: 'anhid', level: 'hard',
    trad: ['óxido de diflúor'],
    stock: ['óxido de flúor'],
    sist: ['monóxido de diflúor', 'óxido de diflúor'],
    hint: 'El flúor es más electronegativo que O; aquí O actúa como +2. IUPAC: monóxido de diflúor.'
  },
  {
    formula: 'I₂O₄',
    group: 'anhid', level: 'hard',
    trad: [],
    stock: ['óxido de yodo (IV)'],
    sist: ['tetraóxido de diyodo'],
    hint: 'Óxido mixto del yodo. Usar IUPAC o Stock. 2I + 4O → I₂O₄.'
  },
  {
    formula: 'XeO₃',
    group: 'anhid', level: 'hard',
    trad: [],
    stock: ['óxido de xenón (VI)'],
    sist: ['trióxido de xenón'],
    hint: 'Xe en EO +6 (gas noble reactivo). IUPAC: trióxido de xenón. Explosivo.'
  },
  {
    formula: 'XeO₄',
    group: 'anhid', level: 'hard',
    trad: [],
    stock: ['óxido de xenón (VIII)'],
    sist: ['tetraóxido de xenón'],
    hint: 'Xe en EO +8. IUPAC: tetraóxido de xenón. Muy inestable.'
  },
  {
    formula: 'As₂O₄',
    group: 'anhid', level: 'hard',
    trad: [],
    stock: ['óxido de arsénico (IV)'],
    sist: ['tetraóxido de diarsénico'],
    hint: 'Óxido mixto de As(III) y As(V). Usar IUPAC. 2As + 4O → As₂O₄.'
  },
  {
    formula: 'Sb₂O₃',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido antimonioso', 'óxido antimonioso'],
    stock: ['óxido de antimonio (III)'],
    sist: ['trióxido de diantimonio'],
    hint: 'Sb en EO +3 (menor) → -oso → antimonioso. 2(+3)+3(−2)=0.'
  },
  {
    formula: 'Sb₂O₅',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido antimónico', 'óxido antimónico'],
    stock: ['óxido de antimonio (V)'],
    sist: ['pentaóxido de diantimonio'],
    hint: 'Sb en EO +5 (mayor) → -ico → antimónico. 2(+5)+5(−2)=0.'
  },
  {
    formula: 'P₂O',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido hipofosforoso', 'óxido hipofosforoso'],
    stock: ['óxido de fósforo (I)'],
    sist: ['monóxido de difósforo', 'óxido de difósforo'],
    hint: 'P en EO +1 (mínimo) → hipo…oso. 2P + O → P₂O.'
  },
  {
    formula: 'N₂O₂',
    group: 'anhid', level: 'hard',
    trad: [],
    stock: ['óxido de nitrógeno (II)'],
    sist: ['dióxido de dinitrógeno'],
    hint: 'Dímero de NO. N en EO +2. Usar IUPAC o Stock.'
  },
  {
    formula: 'At₂O₇',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido perastatídico', 'óxido perastatídico'],
    stock: ['óxido de astato (VII)'],
    sist: ['heptaóxido de diastato'],
    hint: 'At en EO +7 (máximo) → per…ico. Análogo a Cl₂O₇. 2At + 7O → At₂O₇.'
  },
  {
    formula: 'TeO',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido hipoteluroso', 'óxido hipoteluroso'],
    stock: ['óxido de telurio (II)'],
    sist: ['monóxido de telurio', 'óxido de telurio'],
    hint: 'Te en EO +2 (mínimo) → hipo…oso → hipoteluroso. Te + O → TeO.'
  },
  {
    formula: 'Cl₂O₄',
    group: 'anhid', level: 'hard',
    trad: [],
    stock: ['óxido de cloro (IV)'],
    sist: ['tetraóxido de dicloro'],
    hint: 'Óxido del cloro en EO +4 (mixto). Usar IUPAC o Stock.'
  },
  {
    formula: 'ClO₂',
    group: 'anhid', level: 'hard',
    trad: [],
    stock: ['óxido de cloro (IV)'],
    sist: ['dióxido de cloro'],
    hint: 'Radical, Cl en EO +4. IUPAC: dióxido de cloro. Desinfectante.'
  },
  {
    formula: 'SiO',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido silicioso', 'óxido silicioso'],
    stock: ['óxido de silicio (II)'],
    sist: ['monóxido de silicio', 'óxido de silicio'],
    hint: 'Si en EO +2 (menor). IUPAC: monóxido de silicio.'
  },
  {
    formula: 'CrO₂',
    group: 'anhid', level: 'hard',
    trad: [],
    stock: ['óxido de cromo (IV)'],
    sist: ['dióxido de cromo'],
    hint: 'Cr en EO +4. Usar Stock o IUPAC. Usado en cintas magnéticas.'
  },
  {
    formula: 'V₂O₄',
    group: 'anhid', level: 'hard',
    trad: [],
    stock: ['óxido de vanadio (IV)'],
    sist: ['tetraóxido de divanadio'],
    hint: 'V en EO +4. Equivale a 2×VO₂. Usar Stock o IUPAC.'
  },
  {
    formula: 'Br₂O₂',
    group: 'anhid', level: 'hard',
    trad: [],
    stock: ['óxido de bromo (II)'],
    sist: ['dióxido de dibromo'],
    hint: 'Br en EO +2 (inusual). Usar IUPAC o Stock.'
  },
  {
    formula: 'At₂O₅',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido astatídico', 'óxido astatídico'],
    stock: ['óxido de astato (V)'],
    sist: ['pentaóxido de diastato'],
    hint: 'At (halógeno) en EO +5 → -ico. Análogo a I₂O₅. 2At + 5O → At₂O₅.'
  },

  // ── HIDRU (20) ──
  {
    formula: 'CsH',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de cesio'],
    stock: [],
    sist: ['hidruro de cesio'],
    hint: 'Cs tiene valencia fija +1. Cs⁺ + H⁻ → CsH.'
  },
  {
    formula: 'RaH₂',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de radio'],
    stock: [],
    sist: ['dihidruro de radio'],
    hint: 'Ra tiene valencia fija +2. Ra²⁺ + 2H⁻ → RaH₂.'
  },
  {
    formula: 'CuH₂',
    group: 'hidru', level: 'medium',
    trad: ['hidruro cúprico'],
    stock: ['hidruro de cobre (II)'],
    sist: ['dihidruro de cobre'],
    hint: 'Cu²⁺ (EO mayor) → -ico → cúprico → hidruro cúprico. Cu²⁺ + 2H⁻.'
  },
  {
    formula: 'NiH₃',
    group: 'hidru', level: 'hard',
    trad: ['hidruro niquélico'],
    stock: ['hidruro de níquel (III)'],
    sist: ['trihidruro de níquel'],
    hint: 'Ni³⁺ (EO mayor) → -ico → niquélico → hidruro niquélico.'
  },
  {
    formula: 'CoH₃',
    group: 'hidru', level: 'hard',
    trad: ['hidruro cobáltico'],
    stock: ['hidruro de cobalto (III)'],
    sist: ['trihidruro de cobalto'],
    hint: 'Co³⁺ (EO mayor) → -ico → cobáltico → hidruro cobáltico.'
  },
  {
    formula: 'SnH₂',
    group: 'hidru', level: 'medium',
    trad: ['hidruro estannoso'],
    stock: ['hidruro de estaño (II)'],
    sist: ['dihidruro de estaño'],
    hint: 'Sn²⁺ (EO menor) → -oso → estannoso → hidruro estannoso.'
  },
  {
    formula: 'SnH₄',
    group: 'hidru', level: 'hard',
    trad: ['hidruro estánnico'],
    stock: ['hidruro de estaño (IV)'],
    sist: ['tetrahidruro de estaño'],
    hint: 'Sn⁴⁺ (EO mayor) → -ico → estánnico → hidruro estánnico. (estannano)'
  },
  {
    formula: 'PbH₄',
    group: 'hidru', level: 'hard',
    trad: ['hidruro plúmbico'],
    stock: ['hidruro de plomo (IV)'],
    sist: ['tetrahidruro de plomo'],
    hint: 'Pb⁴⁺ (EO mayor) → -ico → plúmbico → hidruro plúmbico. (plumbano)'
  },
  {
    formula: 'CdH₂',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de cadmio'],
    stock: [],
    sist: ['dihidruro de cadmio'],
    hint: 'Cd tiene valencia fija +2. Cd²⁺ + 2H⁻ → CdH₂.'
  },
  {
    formula: 'CrH₆',
    group: 'hidru', level: 'hard',
    trad: [],
    stock: ['hidruro de cromo (VI)'],
    sist: ['hexahidruro de cromo'],
    hint: 'EO inusual (+6). Usar Stock o IUPAC en vez de tradicional.'
  },
  {
    formula: 'AuH',
    group: 'hidru', level: 'hard',
    trad: ['hidruro auroso'],
    stock: ['hidruro de oro (I)'],
    sist: ['hidruro de oro'],
    hint: 'Au⁺ (EO menor) → -oso → auroso → hidruro auroso.'
  },
  {
    formula: 'AuH₃',
    group: 'hidru', level: 'hard',
    trad: ['hidruro áurico'],
    stock: ['hidruro de oro (III)'],
    sist: ['trihidruro de oro'],
    hint: 'Au³⁺ (EO mayor) → -ico → áurico → hidruro áurico.'
  },
  {
    formula: 'HgH₂',
    group: 'hidru', level: 'hard',
    trad: ['hidruro mercúrico'],
    stock: ['hidruro de mercurio (II)'],
    sist: ['dihidruro de mercurio'],
    hint: 'Hg²⁺ (mercúrico) → hidruro mercúrico. Hg²⁺ + 2H⁻ → HgH₂.'
  },
  {
    formula: 'PtH₂',
    group: 'hidru', level: 'hard',
    trad: ['hidruro platinoso'],
    stock: ['hidruro de platino (II)'],
    sist: ['dihidruro de platino'],
    hint: 'Pt²⁺ (EO menor) → -oso → platinoso → hidruro platinoso.'
  },
  {
    formula: 'PtH₄',
    group: 'hidru', level: 'hard',
    trad: ['hidruro platínico'],
    stock: ['hidruro de platino (IV)'],
    sist: ['tetrahidruro de platino'],
    hint: 'Pt⁴⁺ (EO mayor) → -ico → platínico → hidruro platínico.'
  },
  {
    formula: 'GaH₃',
    group: 'hidru', level: 'medium',
    trad: ['hidruro de galio'],
    stock: [],
    sist: ['trihidruro de galio'],
    hint: 'Ga tiene valencia +3 (la habitual). Ga³⁺ + 3H⁻ → GaH₃.'
  },
  {
    formula: 'ZrH₂',
    group: 'hidru', level: 'hard',
    trad: ['hidruro de circonio', 'hidruro circónico'],
    stock: ['hidruro de circonio (IV)'],
    sist: ['dihidruro de circonio'],
    hint: 'Zr en EO +4 (su EO estable) → -ico → circónico. ZrH₂ almacena hidrógeno.'
  },
  {
    formula: 'VH₃',
    group: 'hidru', level: 'hard',
    trad: [],
    stock: ['hidruro de vanadio (III)'],
    sist: ['trihidruro de vanadio'],
    hint: 'V en EO +3. Con 4 EO posibles (+2,+3,+4,+5) el sistema -oso/-ico no aplica sin ambigüedad (V₂O₅ también usa -ico para EO +5). Usa siempre Stock: hidruro de vanadio (III). V³⁺ + 3H⁻ → VH₃.'
  },
  {
    formula: 'FrH',
    group: 'hidru', level: 'easy',
    trad: ['hidruro de francio'],
    stock: [],
    sist: ['hidruro de francio'],
    hint: 'Fr tiene valencia fija +1. Fr⁺ + H⁻ → FrH.'
  },
  {
    formula: 'GaH',
    group: 'hidru', level: 'hard',
    trad: [],
    stock: ['hidruro de galio (I)'],
    sist: ['hidruro de galio'],
    hint: 'Ga en EO +1 (poco común). Usar Stock para precisar el EO.'
  },

  // ── AC-HID (20) ──
  {
    formula: 'HSCN',
    group: 'ac-hid', level: 'hard',
    trad: ['ácido tiociánico'],
    stock: [],
    sist: ['tiocianato de hidrógeno'],
    hint: 'H + SCN⁻ (tiocianato). Pseudohaluro. IUPAC: tiocianato de hidrógeno.'
  },
  {
    formula: 'HN₃',
    group: 'ac-hid', level: 'hard',
    trad: ['ácido hidrazoico'],
    stock: [],
    sist: ['azida de hidrógeno'],
    hint: 'H + N₃⁻ (azida). Ácido hidrazoico, muy inestable. IUPAC: azida de hidrógeno.'
  },
  {
    formula: 'HAt',
    group: 'ac-hid', level: 'hard',
    trad: ['ácido astathídrico'],
    stock: [],
    sist: ['astaturo de hidrógeno'],
    hint: 'H + At⁻. At es halógeno radiactivo. Ácido astathídrico (análogo a HI).'
  },
  {
    formula: 'H₂Po',
    group: 'ac-hid', level: 'hard',
    trad: ['ácido polonhídrico'],
    stock: [],
    sist: ['poloniuro de hidrógeno'],
    hint: 'H₂ + Po²⁻ (análogo a H₂Te). Ácido polonhídrico. IUPAC: poloniuro de hidrógeno.'
  },
  {
    formula: 'HSeCN',
    group: 'ac-hid', level: 'hard',
    trad: ['ácido selenociánico'],
    stock: [],
    sist: ['selenocianato de hidrógeno'],
    hint: 'H + SeCN⁻ (selenocianato). Pseudohaluro análogo al tiocianato.'
  },
  {
    formula: 'HOCN',
    group: 'ac-hid', level: 'hard',
    trad: ['ácido ciánico'],
    stock: [],
    sist: ['cianato de hidrógeno'],
    hint: 'H + OCN⁻ (cianato). Pseudohaluro. IUPAC: cianato de hidrógeno.'
  },
  {
    formula: 'HONC',
    group: 'ac-hid', level: 'hard',
    trad: ['ácido fulmínico'],
    stock: [],
    sist: ['fulminato de hidrógeno'],
    hint: 'Isómero del ácido ciánico (CNO⁻ fulminato). Sales explosivas.'
  },

  // ── BASE (20) ──
  {
    formula: 'FrOH',
    group: 'base', level: 'easy',
    trad: ['hidróxido de francio'],
    stock: [],
    sist: ['hidróxido de francio'],
    hint: 'Fr tiene valencia fija +1. Fr⁺ + OH⁻ → FrOH. Base muy fuerte.'
  },
  {
    formula: 'Ra(OH)₂',
    group: 'base', level: 'easy',
    trad: ['hidróxido de radio'],
    stock: [],
    sist: ['dihidróxido de radio'],
    hint: 'Ra tiene valencia fija +2. Ra²⁺ + 2OH⁻ → Ra(OH)₂.'
  },
  {
    formula: 'Be(OH)₂',
    group: 'base', level: 'easy',
    trad: ['hidróxido de berilio'],
    stock: [],
    sist: ['dihidróxido de berilio'],
    hint: 'Be tiene valencia fija +2. Be²⁺ + 2OH⁻ → Be(OH)₂. Anfótero.'
  },
  {
    formula: 'Ga(OH)₃',
    group: 'base', level: 'medium',
    trad: ['hidróxido de galio'],
    stock: [],
    sist: ['trihidróxido de galio'],
    hint: 'Ga en EO +3 (el habitual). Ga³⁺ + 3OH⁻ → Ga(OH)₃.'
  },
  {
    formula: 'In(OH)₃',
    group: 'base', level: 'medium',
    trad: ['hidróxido de indio'],
    stock: [],
    sist: ['trihidróxido de indio'],
    hint: 'In en EO +3 (el habitual). In³⁺ + 3OH⁻ → In(OH)₃.'
  },
  {
    formula: 'Sn(OH)₃',
    group: 'base', level: 'hard',
    trad: [],
    stock: ['hidróxido de estaño (III)'],
    sist: ['trihidróxido de estaño'],
    hint: 'EO inusual (+3) del estaño; usar Stock o IUPAC.'
  },
  {
    formula: 'Cr(OH)₆',
    group: 'base', level: 'hard',
    trad: [],
    stock: ['hidróxido de cromo (VI)'],
    sist: ['hexahidróxido de cromo'],
    hint: 'EO inusual (+6) del cromo; usar Stock o IUPAC.'
  },
  {
    formula: 'Pt(OH)₂',
    group: 'base', level: 'hard',
    trad: ['hidróxido platinoso'],
    stock: ['hidróxido de platino (II)'],
    sist: ['dihidróxido de platino'],
    hint: 'Pt²⁺ (EO menor) → -oso → platinoso → hidróxido platinoso.'
  },
  {
    formula: 'Pt(OH)₄',
    group: 'base', level: 'hard',
    trad: ['hidróxido platínico'],
    stock: ['hidróxido de platino (IV)'],
    sist: ['tetrahidróxido de platino'],
    hint: 'Pt⁴⁺ (EO mayor) → -ico → platínico → hidróxido platínico.'
  },
  {
    formula: 'Pd(OH)₂',
    group: 'base', level: 'hard',
    trad: ['hidróxido paladoso'],
    stock: ['hidróxido de paladio (II)'],
    sist: ['dihidróxido de paladio'],
    hint: 'Pd²⁺ (EO menor habitual) → -oso → paladoso → hidróxido paladoso.'
  },
  {
    formula: 'Tl(OH)',
    group: 'base', level: 'medium',
    trad: ['hidróxido talioso'],
    stock: ['hidróxido de talio (I)'],
    sist: ['hidróxido de talio'],
    hint: 'Tl⁺ (EO menor) → -oso → talioso → hidróxido talioso. Base fuerte soluble.'
  },
  {
    formula: 'Cu(OH)',
    group: 'base', level: 'medium',
    trad: ['hidróxido cuproso'],
    stock: ['hidróxido de cobre (I)'],
    sist: ['hidróxido de cobre'],
    hint: 'Cu⁺ (EO menor) → -oso → cuproso → hidróxido cuproso (forma CuOH).'
  },
  {
    formula: 'V(OH)₃',
    group: 'base', level: 'hard',
    trad: ['hidróxido vanádico'],
    stock: ['hidróxido de vanadio (III)'],
    sist: ['trihidróxido de vanadio'],
    hint: 'V en EO +3 → -ico → vanádico → hidróxido vanádico.'
  },
  {
    formula: 'V(OH)₂',
    group: 'base', level: 'hard',
    trad: ['hidróxido vanadioso'],
    stock: ['hidróxido de vanadio (II)'],
    sist: ['dihidróxido de vanadio'],
    hint: 'V en EO +2 (menor) → -oso → vanadioso → hidróxido vanadioso.'
  },
  {
    formula: 'Zr(OH)₄',
    group: 'base', level: 'hard',
    trad: ['hidróxido de circonio', 'hidróxido circónico'],
    stock: ['hidróxido de circonio (IV)'],
    sist: ['tetrahidróxido de circonio'],
    hint: 'Zr en EO +4 (su EO estable) → -ico → circónico.'
  },
  {
    formula: 'Ce(OH)₃',
    group: 'base', level: 'hard',
    trad: ['hidróxido ceroso'],
    stock: ['hidróxido de cerio (III)'],
    sist: ['trihidróxido de cerio'],
    hint: 'Ce³⁺ (EO menor) → -oso → ceroso → hidróxido ceroso.'
  },
  {
    formula: 'Ce(OH)₄',
    group: 'base', level: 'hard',
    trad: ['hidróxido cérico'],
    stock: ['hidróxido de cerio (IV)'],
    sist: ['tetrahidróxido de cerio'],
    hint: 'Ce⁴⁺ (EO mayor) → -ico → cérico → hidróxido cérico.'
  },
  {
    formula: 'Co(OH)₂·H₂O',
    group: 'base', level: 'hard',
    trad: ['hidróxido cobaltoso hidratado'],
    stock: ['hidróxido de cobalto (II) hidratado'],
    sist: ['dihidróxido de cobalto hidratado'],
    hint: 'Forma hidratada del hidróxido cobaltoso (Co²⁺ → -oso).'
  },
  {
    formula: 'LiOH·H₂O',
    group: 'base', level: 'easy',
    trad: ['hidróxido de litio monohidratado'],
    stock: [],
    sist: ['hidróxido de litio monohidratado'],
    hint: 'Forma comercial hidratada del hidróxido de litio. Li⁺ valencia fija.'
  },
  {
    formula: 'Sr(OH)₂·8H₂O',
    group: 'base', level: 'medium',
    trad: ['hidróxido de estroncio octahidratado'],
    stock: [],
    sist: ['dihidróxido de estroncio octahidratado'],
    hint: 'Forma cristalina común del hidróxido de estroncio. Sr²⁺ valencia fija.'
  },

  // ── AC-OX (20) ──
  {
    formula: 'HNO',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido hiponitroso'],
    stock: [],
    sist: ['ácido hiponitroso'],
    hint: 'N en EO +1 (mínimo) → hipo-oso → hiponitroso. (forma HNO / H₂N₂O₂)'
  },
  {
    formula: 'H₂N₂O₂',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido hiponitroso'],
    stock: [],
    sist: ['ácido hiponitroso'],
    hint: 'N en EO +1 (mínimo). Forma dimérica real del ácido hiponitroso.'
  },
  {
    formula: 'H₂MnO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido mangánico'],
    stock: [],
    sist: ['ácido mangánico'],
    hint: 'H₂ + MnO₄²⁻ (manganato). Mn en EO +6 → -ico → mangánico.'
  },
  {
    formula: 'H₃SbO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido antimónico'],
    stock: [],
    sist: ['ácido antimónico'],
    hint: 'H₃ + SbO₄³⁻ (antimoniato). Sb en EO +5 → -ico → antimónico.'
  },
  {
    formula: 'H₃SbO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido antimonioso'],
    stock: [],
    sist: ['ácido antimonioso'],
    hint: 'H₃ + SbO₃³⁻ (antimonito). Sb en EO +3 → -oso → antimonioso.'
  },
  {
    formula: 'H₂MoO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido molíbdico'],
    stock: [],
    sist: ['ácido molíbdico'],
    hint: 'H₂ + MoO₄²⁻ (molibdato). Mo en EO +6 → -ico → molíbdico.'
  },
  {
    formula: 'H₂WO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido wolfrámico'],
    stock: [],
    sist: ['ácido wolfrámico'],
    hint: 'H₂ + WO₄²⁻ (wolframato). W en EO +6 → -ico → wolfrámico.'
  },
  {
    formula: 'HVO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido vanádico'],
    stock: [],
    sist: ['ácido metavanádico'],
    hint: 'H + VO₃⁻ (metavanadato). V en EO +5 → -ico → vanádico.'
  },
  {
    formula: 'H₃VO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido ortovanádico'],
    stock: [],
    sist: ['ácido ortovanádico'],
    hint: 'H₃ + VO₄³⁻ (ortovanadato). V en EO +5 → -ico → vanádico.'
  },
  {
    formula: 'HAtO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido astatídico'],
    stock: [],
    sist: ['ácido astatídico'],
    hint: 'H + AtO₃⁻ (astatato). At en EO +5 → -ico (análogo a yódico).'
  },
  {
    formula: 'HAtO',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido hipoastatoso'],
    stock: [],
    sist: ['ácido hipoastatoso'],
    hint: 'H + AtO⁻ (hipoastatito). At en EO +1 (mínimo) → hipo-oso.'
  },
  {
    formula: 'H₂CrO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido cromoso'],
    stock: [],
    sist: ['ácido cromoso'],
    hint: 'H₂ + CrO₃²⁻ (cromito). Cr en EO +4 (menor que +6) → -oso → cromoso.'
  },
  {
    formula: 'H₂SeO₂',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido hiposelenioso'],
    stock: [],
    sist: ['ácido hiposelenioso'],
    hint: 'H₂ + SeO₂²⁻. Se en EO +2 (mínimo) → hipo-oso → hiposelenioso.'
  },
  {
    formula: 'H₆TeO₆',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido ortotelúrico'],
    stock: [],
    sist: ['ácido ortotelúrico'],
    hint: 'Forma orto del ácido telúrico (Te en EO +6). 6H + TeO₆⁶⁻.'
  },
  {
    formula: 'H₅IO₆',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido ortoperyódico'],
    stock: [],
    sist: ['ácido ortoperyódico'],
    hint: 'Forma orto del ácido peryódico (I en EO +7). 5H + IO₆⁵⁻.'
  },
  {
    formula: 'HPO₂',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido metahipofosforoso'],
    stock: [],
    sist: ['ácido dioxofosfórico (III)'],
    hint: 'Forma meta del fosforoso. P en EO +3. H⁺ + PO₂⁻.'
  },
  {
    formula: 'H₂S₂O₇',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido disulfúrico', 'ácido pirosulfúrico'],
    stock: [],
    sist: ['ácido disulfúrico'],
    hint: 'Forma piro: dos unidades de azufre +6 condensadas. 2H + S₂O₇²⁻.'
  },
  {
    formula: 'H₂S₂O₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido tiosulfúrico'],
    stock: [],
    sist: ['ácido tiosulfúrico'],
    hint: 'Un O del sulfúrico sustituido por S (tio-). Base de los tiosulfatos.'
  },
  {
    formula: 'H₂CO₂',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido carbonoso'],
    stock: [],
    sist: ['ácido dioxocarbónico (II)'],
    hint: 'C en EO +2 (menor que +4) → -oso → carbonoso. 2H + CO₂²⁻.'
  },
  {
    formula: 'H₂Cr₃O₁₀',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido tricrómico'],
    stock: [],
    sist: ['ácido tricrómico'],
    hint: 'Forma policondensada (tres unidades de Cr +6). 2H + Cr₃O₁₀²⁻.'
  },

  // ── SAL-BIN (20) ──
  {
    formula: 'LiCl',
    group: 'sal-bin', level: 'easy',
    trad: ['cloruro de litio'],
    stock: [],
    sist: ['cloruro de litio'],
    hint: 'Li⁺ + Cl⁻ → LiCl. Valencia fija. Cloruro de litio (higroscópico).'
  },
  {
    formula: 'LiBr',
    group: 'sal-bin', level: 'easy',
    trad: ['bromuro de litio'],
    stock: [],
    sist: ['bromuro de litio'],
    hint: 'Li⁺ + Br⁻ → LiBr. Valencia fija. Bromuro de litio.'
  },
  {
    formula: 'LiI',
    group: 'sal-bin', level: 'easy',
    trad: ['yoduro de litio'],
    stock: [],
    sist: ['yoduro de litio'],
    hint: 'Li⁺ + I⁻ → LiI. Valencia fija. Yoduro de litio.'
  },
  {
    formula: 'RbCl',
    group: 'sal-bin', level: 'easy',
    trad: ['cloruro de rubidio'],
    stock: [],
    sist: ['cloruro de rubidio'],
    hint: 'Rb⁺ + Cl⁻ → RbCl. Valencia fija (grupo 1A).'
  },
  {
    formula: 'CsCl',
    group: 'sal-bin', level: 'easy',
    trad: ['cloruro de cesio'],
    stock: [],
    sist: ['cloruro de cesio'],
    hint: 'Cs⁺ + Cl⁻ → CsCl. Valencia fija. Estructura cristalina tipo CsCl.'
  },
  {
    formula: 'BaF₂',
    group: 'sal-bin', level: 'easy',
    trad: ['fluoruro de bario'],
    stock: [],
    sist: ['difluoruro de bario'],
    hint: 'Ba²⁺ + 2F⁻ → BaF₂. Valencia fija (grupo 2A).'
  },
  {
    formula: 'BaBr₂',
    group: 'sal-bin', level: 'easy',
    trad: ['bromuro de bario'],
    stock: [],
    sist: ['dibromuro de bario'],
    hint: 'Ba²⁺ + 2Br⁻ → BaBr₂. Valencia fija.'
  },
  {
    formula: 'SrCl₂',
    group: 'sal-bin', level: 'easy',
    trad: ['cloruro de estroncio'],
    stock: [],
    sist: ['dicloruro de estroncio'],
    hint: 'Sr²⁺ + 2Cl⁻ → SrCl₂. Valencia fija. Da color rojo a las llamas.'
  },
  {
    formula: 'MgF₂',
    group: 'sal-bin', level: 'easy',
    trad: ['fluoruro de magnesio'],
    stock: [],
    sist: ['difluoruro de magnesio'],
    hint: 'Mg²⁺ + 2F⁻ → MgF₂. Valencia fija. Mineral sellaíta.'
  },
  {
    formula: 'AgBr',
    group: 'sal-bin', level: 'medium',
    trad: ['bromuro de plata'],
    stock: [],
    sist: ['bromuro de plata'],
    hint: 'Ag⁺ + Br⁻ → AgBr. Valencia fija. Sensible a la luz (fotografía).'
  },
  {
    formula: 'AgI',
    group: 'sal-bin', level: 'medium',
    trad: ['yoduro de plata'],
    stock: [],
    sist: ['yoduro de plata'],
    hint: 'Ag⁺ + I⁻ → AgI. Valencia fija. Usado para inducir lluvia.'
  },
  {
    formula: 'AgF',
    group: 'sal-bin', level: 'medium',
    trad: ['fluoruro de plata'],
    stock: [],
    sist: ['fluoruro de plata'],
    hint: 'Ag⁺ + F⁻ → AgF. Valencia fija. A diferencia de AgCl, es soluble.'
  },
  {
    formula: 'FeBr₂',
    group: 'sal-bin', level: 'medium',
    trad: ['bromuro ferroso'],
    stock: ['bromuro de hierro (II)'],
    sist: ['dibromuro de hierro'],
    hint: 'Fe²⁺ (EO menor) → -oso → ferroso → bromuro ferroso.'
  },
  {
    formula: 'FeBr₃',
    group: 'sal-bin', level: 'medium',
    trad: ['bromuro férrico'],
    stock: ['bromuro de hierro (III)'],
    sist: ['tribromuro de hierro'],
    hint: 'Fe³⁺ (EO mayor) → -ico → férrico → bromuro férrico.'
  },
  {
    formula: 'FeF₂',
    group: 'sal-bin', level: 'medium',
    trad: ['fluoruro ferroso'],
    stock: ['fluoruro de hierro (II)'],
    sist: ['difluoruro de hierro'],
    hint: 'Fe²⁺ (EO menor) → -oso → ferroso → fluoruro ferroso.'
  },
  {
    formula: 'FeF₃',
    group: 'sal-bin', level: 'medium',
    trad: ['fluoruro férrico'],
    stock: ['fluoruro de hierro (III)'],
    sist: ['trifluoruro de hierro'],
    hint: 'Fe³⁺ (EO mayor) → -ico → férrico → fluoruro férrico.'
  },
  {
    formula: 'CuI',
    group: 'sal-bin', level: 'medium',
    trad: ['yoduro cuproso'],
    stock: ['yoduro de cobre (I)'],
    sist: ['yoduro de cobre'],
    hint: 'Cu⁺ (EO menor) → -oso → cuproso → yoduro cuproso. Cu⁺ + I⁻ → CuI.'
  },
  {
    formula: 'CuF₂',
    group: 'sal-bin', level: 'medium',
    trad: ['fluoruro cúprico'],
    stock: ['fluoruro de cobre (II)'],
    sist: ['difluoruro de cobre'],
    hint: 'Cu²⁺ (EO mayor) → -ico → cúprico → fluoruro cúprico.'
  },
  {
    formula: 'CrF₃',
    group: 'sal-bin', level: 'hard',
    trad: ['fluoruro crómico'],
    stock: ['fluoruro de cromo (III)'],
    sist: ['trifluoruro de cromo'],
    hint: 'Cr³⁺ (EO mayor en sales) → -ico → crómico → fluoruro crómico.'
  },
  {
    formula: 'MnS',
    group: 'sal-bin', level: 'hard',
    trad: ['sulfuro manganoso'],
    stock: ['sulfuro de manganeso (II)'],
    sist: ['sulfuro de manganeso'],
    hint: 'S²⁻ → sulfuro. Mn²⁺ (EO menor) → manganoso → sulfuro manganoso.'
  },

  // ── SAL-OX (20) ──
  {
    formula: 'LiNO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrato de litio'],
    stock: [],
    sist: ['nitrato de litio'],
    hint: 'NO₃⁻ = nitrato. Li⁺ → litio. Valencia fija. Nitrato de litio.'
  },
  {
    formula: 'Li₂CO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['carbonato de litio'],
    stock: [],
    sist: ['carbonato de dilitio'],
    hint: 'CO₃²⁻ = carbonato. 2Li⁺ + CO₃²⁻ → Li₂CO₃. Uso psiquiátrico.'
  },
  {
    formula: 'Li₂SO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de litio'],
    stock: [],
    sist: ['sulfato de dilitio'],
    hint: 'SO₄²⁻ = sulfato. 2Li⁺ + SO₄²⁻ → Li₂SO₄. Sulfato de litio.'
  },
  {
    formula: 'RbNO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrato de rubidio'],
    stock: [],
    sist: ['nitrato de rubidio'],
    hint: 'NO₃⁻ = nitrato. Rb⁺ → rubidio. Valencia fija.'
  },
  {
    formula: 'CsNO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrato de cesio'],
    stock: [],
    sist: ['nitrato de cesio'],
    hint: 'NO₃⁻ = nitrato. Cs⁺ → cesio. Valencia fija.'
  },
  {
    formula: 'SrCO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['carbonato de estroncio'],
    stock: [],
    sist: ['carbonato de estroncio'],
    hint: 'CO₃²⁻ = carbonato. Sr²⁺ + CO₃²⁻ → SrCO₃. Mineral estroncianita.'
  },
  {
    formula: 'SrSO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de estroncio'],
    stock: [],
    sist: ['sulfato de estroncio'],
    hint: 'SO₄²⁻ = sulfato. Sr²⁺ + SO₄²⁻ → SrSO₄. Mineral celestina.'
  },
  {
    formula: 'K₃BO₃',
    group: 'sal-ox', level: 'medium',
    trad: ['borato de potasio'],
    stock: [],
    sist: ['borato de tripotasio'],
    hint: 'BO₃³⁻ = borato. 3K⁺ + BO₃³⁻ → K₃BO₃. Borato de potasio.'
  },
  {
    formula: 'Na₂SiO₃',
    group: 'sal-ox', level: 'medium',
    trad: ['silicato de sodio'],
    stock: [],
    sist: ['silicato de disodio'],
    hint: 'SiO₃²⁻ = silicato. 2Na⁺ + SiO₃²⁻ → Na₂SiO₃. Vidrio soluble.'
  },
  {
    formula: 'KIO₃',
    group: 'sal-ox', level: 'medium',
    trad: ['yodato de potasio'],
    stock: [],
    sist: ['yodato de potasio'],
    hint: 'IO₃⁻ = yodato (I EO=+5). K⁺ → potasio. Aditivo de la sal yodada.'
  },
  {
    formula: 'KBrO',
    group: 'sal-ox', level: 'medium',
    trad: ['hipobromito de potasio'],
    stock: [],
    sist: ['hipobromito de potasio'],
    hint: 'BrO⁻ = hipobromito (Br EO=+1). K⁺ → potasio.'
  },
  {
    formula: 'NaBrO₃',
    group: 'sal-ox', level: 'medium',
    trad: ['bromato de sodio'],
    stock: [],
    sist: ['bromato de sodio'],
    hint: 'BrO₃⁻ = bromato (Br EO=+5). Na⁺ → sodio.'
  },
  {
    formula: 'CoSO₄',
    group: 'sal-ox', level: 'medium',
    trad: ['sulfato cobaltoso'],
    stock: ['sulfato de cobalto (II)'],
    sist: ['sulfato de cobalto'],
    hint: 'SO₄²⁻ = sulfato. Co²⁺ (EO menor) → cobaltoso → sulfato cobaltoso.'
  },
  {
    formula: 'MnSO₄',
    group: 'sal-ox', level: 'medium',
    trad: ['sulfato manganoso'],
    stock: ['sulfato de manganeso (II)'],
    sist: ['sulfato de manganeso'],
    hint: 'SO₄²⁻ = sulfato. Mn²⁺ (EO menor) → manganoso → sulfato manganoso.'
  },
  {
    formula: 'Cu₂CO₃',
    group: 'sal-ox', level: 'hard',
    trad: ['carbonato cuproso'],
    stock: ['carbonato de cobre (I)'],
    sist: ['carbonato de dicobre'],
    hint: 'CO₃²⁻ = carbonato. Cu⁺ (EO menor) → cuproso. 2Cu⁺ + CO₃²⁻.'
  },
  {
    formula: 'CuCO₃',
    group: 'sal-ox', level: 'medium',
    trad: ['carbonato cúprico'],
    stock: ['carbonato de cobre (II)'],
    sist: ['carbonato de cobre'],
    hint: 'CO₃²⁻ = carbonato. Cu²⁺ (EO mayor) → cúprico → carbonato cúprico.'
  },
  {
    formula: 'Fe₂(CO₃)₃',
    group: 'sal-ox', level: 'hard',
    trad: ['carbonato férrico'],
    stock: ['carbonato de hierro (III)'],
    sist: ['tricarbonato de dihierro'],
    hint: 'CO₃²⁻ = carbonato. Fe³⁺ (EO mayor) → férrico. 2Fe³⁺ + 3CO₃²⁻.'
  },
  {
    formula: 'FeCO₃',
    group: 'sal-ox', level: 'medium',
    trad: ['carbonato ferroso'],
    stock: ['carbonato de hierro (II)'],
    sist: ['carbonato de hierro'],
    hint: 'CO₃²⁻ = carbonato. Fe²⁺ (EO menor) → ferroso → carbonato ferroso. Mineral siderita.'
  },
  {
    formula: 'KIO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['peryodato de potasio'],
    stock: [],
    sist: ['peryodato de potasio'],
    hint: 'IO₄⁻ = peryodato (I EO=+7). K⁺ → potasio.'
  },
  {
    formula: 'NaIO₃',
    group: 'sal-ox', level: 'medium',
    trad: ['yodato de sodio'],
    stock: [],
    sist: ['yodato de sodio'],
    hint: 'IO₃⁻ = yodato (I EO=+5). Na⁺ → sodio. Aditivo de sal yodada.'
  },

  // ── extra (balance) ──
  {
    formula: 'CdCl₂',
    group: 'sal-bin', level: 'easy',
    trad: ['cloruro de cadmio'],
    stock: [],
    sist: ['dicloruro de cadmio'],
    hint: 'Cd²⁺ (valencia fija) + 2Cl⁻ → CdCl₂.'
  },
  {
    formula: 'CdS',
    group: 'sal-bin', level: 'easy',
    trad: ['sulfuro de cadmio'],
    stock: [],
    sist: ['sulfuro de cadmio'],
    hint: 'Cd²⁺ + S²⁻ → CdS. Pigmento amarillo cadmio.'
  },
  {
    formula: 'Ca(ClO)₂',
    group: 'sal-ox', level: 'medium',
    trad: ['hipoclorito de calcio'],
    stock: [],
    sist: ['di(hipoclorito) de calcio'],
    hint: 'ClO⁻ = hipoclorito. Ca²⁺ + 2ClO⁻ → Ca(ClO)₂. Cloro de piscina.'
  },
  {
    formula: 'KIO',
    group: 'sal-ox', level: 'medium',
    trad: ['hipoyodito de potasio'],
    stock: [],
    sist: ['hipoyodito de potasio'],
    hint: 'IO⁻ = hipoyodito (I EO=+1, mínimo → hipo-). K⁺ → potasio.'
  },
  {
    formula: 'NaBO₂',
    group: 'sal-ox', level: 'hard',
    trad: ['metaborato de sodio'],
    stock: [],
    sist: ['metaborato de sodio'],
    hint: 'BO₂⁻ = metaborato (B EO=+3). Na⁺ → sodio.'
  },
  {
    formula: 'CaSeO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['selenato de calcio'],
    stock: [],
    sist: ['selenato de calcio'],
    hint: 'SeO₄²⁻ = selenato (Se EO=+6). Ca²⁺ + SeO₄²⁻ → CaSeO₄.'
  },
  {
    formula: 'BaCrO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['cromato de bario'],
    stock: [],
    sist: ['cromato de bario'],
    hint: 'CrO₄²⁻ = cromato (Cr EO=+6). Ba²⁺ + CrO₄²⁻ → BaCrO₄. Pigmento amarillo.'
  },
  {
    formula: 'GaCl₃',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro de galio'],
    stock: [],
    sist: ['tricloruro de galio'],
    hint: 'Ga³⁺ (EO habitual) + 3Cl⁻ → GaCl₃.'
  },
  {
    formula: 'InCl₃',
    group: 'sal-bin', level: 'medium',
    trad: ['cloruro de indio'],
    stock: [],
    sist: ['tricloruro de indio'],
    hint: 'In³⁺ (EO habitual) + 3Cl⁻ → InCl₃.'
  },
  {
    formula: 'H₂S₂O₈',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido peroxodisulfúrico'],
    stock: [],
    sist: ['ácido peroxodisulfúrico'],
    hint: 'Contiene puente peroxo O–O. Base de los persulfatos. 2H + S₂O₈²⁻.'
  },
  {
    formula: 'HReO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido perrénico'],
    stock: [],
    sist: ['ácido perrénico'],
    hint: 'H + ReO₄⁻ (perrenato). Re en EO +7 (máximo) → per…ico → perrénico.'
  },
  {
    formula: 'H₂PoO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido polonoso'],
    stock: [],
    sist: ['ácido polonoso'],
    hint: 'Po en EO +4 → -oso (análogo al teluroso). 2H + PoO₃²⁻.'
  },

  // ── Sales relevantes currículo colombiano ──────────────────────────────────
  {
    formula: 'Ca(HCO₃)₂',
    group: 'sal-ac', level: 'medium',
    trad: ['bicarbonato de calcio'],
    stock: ['hidrogenocarbonato de calcio'],
    sist: ['dihidrogenocarbonato de calcio'],
    ions: [{t:'cat',l:'Ca²⁺'},{t:'an',l:'HCO₃⁻ × 2'}],
    tokens: [{w:'bicarbonato',t:'ox'},{w:'de',t:'neu'},{w:'calcio',t:'cat'}],
    hint: 'HCO₃⁻ = bicarbonato (hidrogenocarbonato). Ca²⁺ + 2HCO₃⁻ → Ca(HCO₃)₂. Causa la dureza temporal del agua de acueducto; al hervir se convierte en CaCO₃ insoluble (incrustaciones en ollas).'
  },
  {
    formula: 'NaHCO₃',
    group: 'sal-ac', level: 'easy',
    trad: ['bicarbonato de sodio'],
    stock: ['hidrogenocarbonato de sodio'],
    sist: ['hidrogenocarbonato de sodio'],
    ions: [{t:'cat',l:'Na⁺'},{t:'an',l:'HCO₃⁻'}],
    tokens: [{w:'bicarbonato',t:'ox'},{w:'de',t:'neu'},{w:'sodio',t:'cat'}],
    hint: 'H₂CO₃ cedió 1 de sus 2 H⁺. Anión HCO₃⁻ = bicarbonato (trad.) / hidrogenocarbonato (Stock). El "bicarbonato de sodio" casero; reacciona con ácidos liberando CO₂.'
  },

  // ── Sales de amonio (currículo DBA 3 Colombia) ─────────────────────────────
  {
    formula: 'NH₄Cl',
    group: 'sal-bin', level: 'easy',
    trad: ['cloruro de amonio'],
    stock: [],
    sist: ['cloruro de amonio'],
    ions: [{t:'cat',l:'NH₄⁺'},{t:'an',l:'Cl⁻'}],
    tokens: [{w:'cloruro',t:'an'},{w:'de',t:'neu'},{w:'amonio',t:'cat'}],
    hint: 'NH₄⁺ = catión amonio. Cl⁻ = cloruro. NH₄Cl se forma en la reacción NH₃ + HCl. Usado como fertilizante y en pilas.'
  },
  {
    formula: '(NH₄)₂SO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de amonio'],
    stock: [],
    sist: ['sulfato de diamonio'],
    ions: [{t:'cat',l:'NH₄⁺ × 2'},{t:'an',l:'SO₄²⁻'}],
    tokens: [{w:'sulfato',t:'ox'},{w:'de',t:'neu'},{w:'amonio',t:'cat'}],
    hint: 'NH₄⁺ (carga +1) + SO₄²⁻ (carga −2): se necesitan 2 NH₄⁺ para equilibrar. Fertilizante muy usado en Colombia (20% N, 24% S).'
  },
  {
    formula: 'NH₄NO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrato de amonio'],
    stock: [],
    sist: ['nitrato de amonio'],
    ions: [{t:'cat',l:'NH₄⁺'},{t:'an',l:'NO₃⁻'}],
    tokens: [{w:'nitrato',t:'ox'},{w:'de',t:'neu'},{w:'amonio',t:'cat'}],
    hint: 'NH₄⁺ + NO₃⁻ → NH₄NO₃. Fertilizante nitrogenado (34% N). El N del catión tiene EO −3 y el del anión +5.'
  },
  {
    formula: '(NH₄)₂CO₃',
    group: 'sal-ox', level: 'medium',
    trad: ['carbonato de amonio'],
    stock: [],
    sist: ['carbonato de diamonio'],
    ions: [{t:'cat',l:'NH₄⁺ × 2'},{t:'an',l:'CO₃²⁻'}],
    tokens: [{w:'carbonato',t:'ox'},{w:'de',t:'neu'},{w:'amonio',t:'cat'}],
    hint: 'CO₃²⁻ = carbonato. 2 NH₄⁺ equilibran la carga −2. Se descompone fácilmente en NH₃ + CO₂ + H₂O.'
  },
  {
    formula: 'NH₄H₂PO₄',
    group: 'sal-ox', level: 'medium',
    trad: ['dihidrogenofosfato de amonio'],
    stock: [],
    sist: ['dihidrogenofosfato de amonio'],
    ions: [{t:'cat',l:'NH₄⁺'},{t:'an',l:'H₂PO₄⁻'}],
    tokens: [{w:'dihidrogenofosfato',t:'ox'},{w:'de',t:'neu'},{w:'amonio',t:'cat'}],
    hint: 'H₂PO₄⁻ = dihidrogenofosfato (fosfato con 2H sin ionizar). NH₄⁺ + H₂PO₄⁻ → NH₄H₂PO₄. Fertilizante MAP (fosfato monoamónico).'
  },

  // ─────────────────────────────────────────────
  // NEW ENTRIES — batch 4 (dual naming ac-hid, more hidru, anhid, base, ac-ox)
  // ─────────────────────────────────────────────

  // ── AC-HID: forma gaseosa/pura (doble nomenclatura) ──
  // HF(aq) faltaba como entrada acuosa explícita
  {
    formula: 'HF(aq)',
    group: 'ac-hid', level: 'easy',
    trad: ['ácido fluorhídrico'],
    stock: [],
    sist: ['fluoruro de hidrógeno'],
    ions: [{t:'cat',l:'H⁺'},{t:'an',l:'F⁻'}],
    tokens: [{w:'ácido',t:'cat'},{w:'fluorhídrico',t:'an'}],
    hint: 'HF en solución acuosa: ácido fluorhídrico. Es un ácido DÉBIL (a diferencia de HCl, HBr, HI). Se usa en el grabado de vidrio y en la industria petroquímica de Barrancabermeja.'
  },
  // Forma gaseosa/pura de cada ácido hídrico
  {
    formula: 'HF(g)',
    group: 'ac-hid', level: 'easy',
    trad: ['fluoruro de hidrógeno'],
    stock: [],
    sist: ['fluoruro de hidrógeno'],
    ions: [{t:'cat',l:'H⁺'},{t:'an',l:'F⁻'}],
    tokens: [{w:'fluoruro',t:'an'},{w:'de',t:'neu'},{w:'hidrógeno',t:'cat'}],
    hint: 'El fluoruro de hidrógeno es un gas tóxico en estado puro. Al disolverse en agua forma el ácido fluorhídrico HF(aq). Se usa en el grabado de vidrio.'
  },
  {
    formula: 'HCl(g)',
    group: 'ac-hid', level: 'easy',
    trad: ['cloruro de hidrógeno'],
    stock: [],
    sist: ['cloruro de hidrógeno'],
    ions: [{t:'cat',l:'H⁺'},{t:'an',l:'Cl⁻'}],
    tokens: [{w:'cloruro',t:'an'},{w:'de',t:'neu'},{w:'hidrógeno',t:'cat'}],
    hint: 'El cloruro de hidrógeno es un gas incoloro e irritante. Como gas: cloruro de hidrógeno. Disuelto en agua: ácido clorhídrico.'
  },
  {
    formula: 'HBr(g)',
    group: 'ac-hid', level: 'easy',
    trad: ['bromuro de hidrógeno'],
    stock: [],
    sist: ['bromuro de hidrógeno'],
    ions: [{t:'cat',l:'H⁺'},{t:'an',l:'Br⁻'}],
    tokens: [{w:'bromuro',t:'an'},{w:'de',t:'neu'},{w:'hidrógeno',t:'cat'}],
    hint: 'El bromuro de hidrógeno es un gas ácido. Como compuesto puro: bromuro de hidrógeno. En solución: ácido bromhídrico.'
  },
  {
    formula: 'HI(g)',
    group: 'ac-hid', level: 'easy',
    trad: ['yoduro de hidrógeno'],
    stock: [],
    sist: ['yoduro de hidrógeno'],
    ions: [{t:'cat',l:'H⁺'},{t:'an',l:'I⁻'}],
    tokens: [{w:'yoduro',t:'an'},{w:'de',t:'neu'},{w:'hidrógeno',t:'cat'}],
    hint: 'El yoduro de hidrógeno es un gas incoloro. Como compuesto puro: yoduro de hidrógeno. En solución acuosa: ácido yodhídrico.'
  },
  {
    formula: 'H₂S(g)',
    group: 'ac-hid', level: 'easy',
    trad: ['sulfuro de dihidrógeno', 'sulfuro de hidrógeno'],
    stock: [],
    sist: ['sulfuro de dihidrógeno'],
    ions: [{t:'cat',l:'H⁺ × 2'},{t:'an',l:'S²⁻'}],
    tokens: [{w:'sulfuro',t:'an'},{w:'de',t:'neu'},{w:'dihidrógeno',t:'cat'}],
    hint: 'H₂S como gas huele a huevo podrido y es muy tóxico. Nombre como compuesto puro: sulfuro de dihidrógeno. En solución: ácido sulfhídrico. Presente en volcanes colombianos.'
  },
  // ── AC-HID: formas acuosas (ácido ___hídrico) ──
  {
    formula: 'HCl(aq)',
    group: 'ac-hid', level: 'easy',
    trad: ['ácido clorhídrico'],
    stock: [], sist: [],
    ions: [{t:'cat',l:'H⁺'},{t:'an',l:'Cl⁻'}],
    tokens: [{w:'ácido',t:'cat'},{w:'clorhídrico',t:'an'}],
    hint: 'HCl disuelto en agua: ácido clorhídrico. Es el ácido del estómago (jugo gástrico). Diferente al gas cloruro de hidrógeno.'
  },
  {
    formula: 'HBr(aq)',
    group: 'ac-hid', level: 'easy',
    trad: ['ácido bromhídrico'],
    stock: [], sist: [],
    ions: [{t:'cat',l:'H⁺'},{t:'an',l:'Br⁻'}],
    tokens: [{w:'ácido',t:'cat'},{w:'bromhídrico',t:'an'}],
    hint: 'HBr disuelto en agua: ácido bromhídrico. Ácido fuerte; se usa en síntesis orgánica.'
  },
  {
    formula: 'HI(aq)',
    group: 'ac-hid', level: 'easy',
    trad: ['ácido yodhídrico'],
    stock: [], sist: [],
    ions: [{t:'cat',l:'H⁺'},{t:'an',l:'I⁻'}],
    tokens: [{w:'ácido',t:'cat'},{w:'yodhídrico',t:'an'}],
    hint: 'HI disuelto en agua: ácido yodhídrico. Ácido fuerte. El yoduro se usa en medicina como antiséptico.'
  },
  {
    formula: 'H₂S(aq)',
    group: 'ac-hid', level: 'easy',
    trad: ['ácido sulfhídrico'],
    stock: [], sist: [],
    ions: [{t:'cat',l:'H⁺ × 2'},{t:'an',l:'S²⁻'}],
    tokens: [{w:'ácido',t:'cat'},{w:'sulfhídrico',t:'an'}],
    hint: 'H₂S disuelto en agua: ácido sulfhídrico. Ácido débil, presente en fuentes termales y aguas sulfurosas.'
  },
  {
    formula: 'H₂Se(aq)',
    group: 'ac-hid', level: 'medium',
    trad: ['ácido selenhídrico'],
    stock: [], sist: [],
    ions: [{t:'cat',l:'H⁺ × 2'},{t:'an',l:'Se²⁻'}],
    tokens: [{w:'ácido',t:'cat'},{w:'selenhídrico',t:'an'}],
    hint: 'H₂Se disuelto en agua: ácido selenhídrico. Más ácido que H₂S.'
  },
  {
    formula: 'HCN(aq)',
    group: 'ac-hid', level: 'medium',
    trad: ['ácido cianhídrico'],
    stock: [], sist: [],
    ions: [{t:'cat',l:'H⁺'},{t:'an',l:'CN⁻'}],
    tokens: [{w:'ácido',t:'cat'},{w:'cianhídrico',t:'an'}],
    hint: 'HCN disuelto en agua: ácido cianhídrico (también llamado ácido prúsico). Muy tóxico; el antídoto es el tiosulfato de sodio.'
  },
  {
    formula: 'H₂Se(g)',
    group: 'ac-hid', level: 'medium',
    trad: ['seleniuro de dihidrógeno'],
    stock: [],
    sist: ['seleniuro de dihidrógeno'],
    ions: [{t:'cat',l:'H⁺ × 2'},{t:'an',l:'Se²⁻'}],
    tokens: [{w:'seleniuro',t:'an'},{w:'de',t:'neu'},{w:'dihidrógeno',t:'cat'}],
    hint: 'Seleniuro de dihidrógeno como gas puro. En solución acuosa: ácido selenhídrico.'
  },
  {
    formula: 'H₂Te(g)',
    group: 'ac-hid', level: 'hard',
    trad: ['telururo de dihidrógeno'],
    stock: [],
    sist: ['telururo de dihidrógeno'],
    ions: [{t:'cat',l:'H⁺ × 2'},{t:'an',l:'Te²⁻'}],
    tokens: [{w:'telururo',t:'an'},{w:'de',t:'neu'},{w:'dihidrógeno',t:'cat'}],
    hint: 'Telururo de dihidrógeno como gas puro. En solución: ácido telurhídrico.'
  },
  {
    formula: 'HCN(g)',
    group: 'ac-hid', level: 'medium',
    trad: ['cianuro de hidrógeno'],
    stock: [],
    sist: ['cianuro de hidrógeno'],
    ions: [{t:'cat',l:'H⁺'},{t:'an',l:'CN⁻'}],
    tokens: [{w:'cianuro',t:'an'},{w:'de',t:'neu'},{w:'hidrógeno',t:'cat'}],
    hint: 'El cianuro de hidrógeno (ácido prúsico) es un gas muy tóxico. Como compuesto puro: cianuro de hidrógeno. En solución: ácido cianhídrico. Antídoto disponible en hospitales colombianos de alta complejidad.'
  },
  {
    formula: 'HAt(g)',
    group: 'ac-hid', level: 'hard',
    trad: ['astaturo de hidrógeno'],
    stock: [],
    sist: ['astaturo de hidrógeno'],
    ions: [{t:'cat',l:'H⁺'},{t:'an',l:'At⁻'}],
    tokens: [{w:'astaturo',t:'an'},{w:'de',t:'neu'},{w:'hidrógeno',t:'cat'}],
    hint: 'Análogo al HI pero con astato radiactivo. Como compuesto: astaturo de hidrógeno. En solución: ácido astathídrico.'
  },
  {
    formula: 'H₂Po(g)',
    group: 'ac-hid', level: 'hard',
    trad: ['poloniuro de dihidrógeno'],
    stock: [],
    sist: ['poloniuro de dihidrógeno'],
    ions: [{t:'cat',l:'H⁺ × 2'},{t:'an',l:'Po²⁻'}],
    tokens: [{w:'poloniuro',t:'an'},{w:'de',t:'neu'},{w:'dihidrógeno',t:'cat'}],
    hint: 'Análogo al H₂Te pero con polonio radiactivo. Como compuesto: poloniuro de dihidrógeno. En solución: ácido polonhídrico.'
  },
  {
    formula: 'HN₃(g)',
    group: 'ac-hid', level: 'hard',
    trad: ['trinitruro de hidrógeno', 'azoimida'],
    stock: [],
    sist: ['trinitruro de hidrógeno'],
    ions: [{t:'cat',l:'H⁺'},{t:'an',l:'N₃⁻'}],
    tokens: [{w:'trinitruro',t:'an'},{w:'de',t:'neu'},{w:'hidrógeno',t:'cat'}],
    hint: 'HN₃ es un compuesto explosivo. Como gas: trinitruro de hidrógeno. En solución: ácido hidrazoico.'
  },

  // ── HIDRU: 19 nuevos hidruros metálicos ──
  {
    formula: 'WH₂',
    group: 'hidru', level: 'hard',
    trad: ['hidruro wolframoso'],
    stock: ['hidruro de wolframio (II)'],
    sist: ['dihidruro de wolframio'],
    ions: [{t:'cat',l:'W²⁺'},{t:'an',l:'H⁻ × 2'}],
    tokens: [{w:'hidruro',t:'an'},{w:'wolframoso',t:'cat'}],
    hint: 'W con EO +2 (menor) → -oso → wolframoso. W²⁺ + 2H⁻ → WH₂.'
  },
  {
    formula: 'WH₃',
    group: 'hidru', level: 'hard',
    trad: [],
    stock: ['hidruro de wolframio (III)'],
    sist: ['trihidruro de wolframio'],
    ions: [{t:'cat',l:'W³⁺'},{t:'an',l:'H⁻ × 3'}],
    tokens: [{w:'hidruro',t:'an'},{w:'de',t:'neu'},{w:'wolframio',t:'cat'}],
    hint: 'W con EO +3. El sistema -oso/-ico no aplica con más de 2 estados. Usa Stock: hidruro de wolframio (III).'
  },
  {
    formula: 'WH₄',
    group: 'hidru', level: 'hard',
    trad: [],
    stock: ['hidruro de wolframio (IV)'],
    sist: ['tetrahidruro de wolframio'],
    ions: [{t:'cat',l:'W⁴⁺'},{t:'an',l:'H⁻ × 4'}],
    tokens: [{w:'hidruro',t:'an'},{w:'de',t:'neu'},{w:'wolframio',t:'cat'}],
    hint: 'W con EO +4. Stock: hidruro de wolframio (IV). W⁴⁺ + 4H⁻.'
  },
  {
    formula: 'WH₆',
    group: 'hidru', level: 'hard',
    trad: ['hidruro wolfrámico'],
    stock: ['hidruro de wolframio (VI)'],
    sist: ['hexahidruro de wolframio'],
    ions: [{t:'cat',l:'W⁶⁺'},{t:'an',l:'H⁻ × 6'}],
    tokens: [{w:'hidruro',t:'an'},{w:'wolfrámico',t:'cat'}],
    hint: 'W con EO +6 (mayor) → -ico → wolfrámico. W⁶⁺ + 6H⁻.'
  },
  {
    formula: 'MoH₂',
    group: 'hidru', level: 'hard',
    trad: ['hidruro molibdenoso'],
    stock: ['hidruro de molibdeno (II)'],
    sist: ['dihidruro de molibdeno'],
    ions: [{t:'cat',l:'Mo²⁺'},{t:'an',l:'H⁻ × 2'}],
    tokens: [{w:'hidruro',t:'an'},{w:'molibdenoso',t:'cat'}],
    hint: 'Mo con EO +2 → -oso → molibdenoso.'
  },
  {
    formula: 'MoH₃',
    group: 'hidru', level: 'hard',
    trad: [],
    stock: ['hidruro de molibdeno (III)'],
    sist: ['trihidruro de molibdeno'],
    ions: [{t:'cat',l:'Mo³⁺'},{t:'an',l:'H⁻ × 3'}],
    tokens: [{w:'hidruro',t:'an'},{w:'de',t:'neu'},{w:'molibdeno',t:'cat'}],
    hint: 'Mo con múltiples EO. Stock: hidruro de molibdeno (III).'
  },
  {
    formula: 'MnH₃',
    group: 'hidru', level: 'hard',
    trad: [],
    stock: ['hidruro de manganeso (III)'],
    sist: ['trihidruro de manganeso'],
    ions: [{t:'cat',l:'Mn³⁺'},{t:'an',l:'H⁻ × 3'}],
    tokens: [{w:'hidruro',t:'an'},{w:'de',t:'neu'},{w:'manganeso',t:'cat'}],
    hint: 'Mn con EO +3. Mn tiene 4 EO: -oso/-ico ambiguo. Stock: hidruro de manganeso (III).'
  },
  {
    formula: 'BiH₃',
    group: 'hidru', level: 'hard',
    trad: ['hidruro bismútico', 'bismutina'],
    stock: ['hidruro de bismuto (III)'],
    sist: ['trihidruro de bismuto'],
    ions: [{t:'cat',l:'Bi³⁺'},{t:'an',l:'H⁻ × 3'}],
    tokens: [{w:'hidruro',t:'an'},{w:'bismútico',t:'cat'}],
    hint: 'Bi con EO +3 (única valencia práctica). Bi³⁺ + 3H⁻ → BiH₃. También llamada bismutina.'
  },
  {
    formula: 'AsH₃',
    group: 'hidru', level: 'hard',
    trad: ['hidruro arsenioso', 'arsina'],
    stock: ['hidruro de arsénico (III)'],
    sist: ['trihidruro de arsénico'],
    ions: [{t:'cat',l:'As³⁺'},{t:'an',l:'H⁻ × 3'}],
    tokens: [{w:'hidruro',t:'an'},{w:'arsenioso',t:'cat'}],
    hint: 'As con EO +3. As³⁺ + 3H⁻ → AsH₃. También llamada arsina. Gas muy tóxico.'
  },
  {
    formula: 'SbH₃',
    group: 'hidru', level: 'hard',
    trad: ['hidruro estibioso', 'estibina'],
    stock: ['hidruro de antimonio (III)'],
    sist: ['trihidruro de antimonio'],
    ions: [{t:'cat',l:'Sb³⁺'},{t:'an',l:'H⁻ × 3'}],
    tokens: [{w:'hidruro',t:'an'},{w:'estibioso',t:'cat'}],
    hint: 'Sb con EO +3 (menor) → -oso → estibioso. También llamada estibina. Sb³⁺ + 3H⁻ → SbH₃.'
  },
  {
    formula: 'GeH₄',
    group: 'hidru', level: 'hard',
    trad: ['hidruro germánico', 'germano'],
    stock: ['hidruro de germanio (IV)'],
    sist: ['tetrahidruro de germanio'],
    ions: [{t:'cat',l:'Ge⁴⁺'},{t:'an',l:'H⁻ × 4'}],
    tokens: [{w:'hidruro',t:'an'},{w:'germánico',t:'cat'}],
    hint: 'Ge con EO +4. Ge⁴⁺ + 4H⁻ → GeH₄. También llamado germano. Análogo al metano.'
  },
  {
    formula: 'InH₃',
    group: 'hidru', level: 'hard',
    trad: ['hidruro índico'],
    stock: ['hidruro de indio (III)'],
    sist: ['trihidruro de indio'],
    ions: [{t:'cat',l:'In³⁺'},{t:'an',l:'H⁻ × 3'}],
    tokens: [{w:'hidruro',t:'an'},{w:'índico',t:'cat'}],
    hint: 'In con EO +3 (valencia fija). In³⁺ + 3H⁻ → InH₃.'
  },
  {
    formula: 'TlH',
    group: 'hidru', level: 'hard',
    trad: ['hidruro talioso'],
    stock: ['hidruro de talio (I)'],
    sist: ['hidruro de talio'],
    ions: [{t:'cat',l:'Tl⁺'},{t:'an',l:'H⁻'}],
    tokens: [{w:'hidruro',t:'an'},{w:'talioso',t:'cat'}],
    hint: 'Tl con EO +1 (menor) → -oso → talioso. Tl⁺ + H⁻ → TlH.'
  },
  {
    formula: 'TlH₃',
    group: 'hidru', level: 'hard',
    trad: ['hidruro tálico'],
    stock: ['hidruro de talio (III)'],
    sist: ['trihidruro de talio'],
    ions: [{t:'cat',l:'Tl³⁺'},{t:'an',l:'H⁻ × 3'}],
    tokens: [{w:'hidruro',t:'an'},{w:'tálico',t:'cat'}],
    hint: 'Tl con EO +3 (mayor) → -ico → tálico. Tl³⁺ + 3H⁻ → TlH₃.'
  },
  {
    formula: 'RhH₃',
    group: 'hidru', level: 'hard',
    trad: [],
    stock: ['hidruro de rodio (III)'],
    sist: ['trihidruro de rodio'],
    ions: [{t:'cat',l:'Rh³⁺'},{t:'an',l:'H⁻ × 3'}],
    tokens: [{w:'hidruro',t:'an'},{w:'de',t:'neu'},{w:'rodio',t:'cat'}],
    hint: 'Rh con EO +3. Rodio: metal del grupo platino. Stock: hidruro de rodio (III).'
  },
  {
    formula: 'IrH₃',
    group: 'hidru', level: 'hard',
    trad: [],
    stock: ['hidruro de iridio (III)'],
    sist: ['trihidruro de iridio'],
    ions: [{t:'cat',l:'Ir³⁺'},{t:'an',l:'H⁻ × 3'}],
    tokens: [{w:'hidruro',t:'an'},{w:'de',t:'neu'},{w:'iridio',t:'cat'}],
    hint: 'Ir con EO +3. Iridio: metal del grupo platino. Stock: hidruro de iridio (III).'
  },
  {
    formula: 'OsH₄',
    group: 'hidru', level: 'hard',
    trad: [],
    stock: ['hidruro de osmio (IV)'],
    sist: ['tetrahidruro de osmio'],
    ions: [{t:'cat',l:'Os⁴⁺'},{t:'an',l:'H⁻ × 4'}],
    tokens: [{w:'hidruro',t:'an'},{w:'de',t:'neu'},{w:'osmio',t:'cat'}],
    hint: 'Os con EO +4. Osmio: el elemento más denso. Stock: hidruro de osmio (IV).'
  },
  {
    formula: 'ReH₄',
    group: 'hidru', level: 'hard',
    trad: [],
    stock: ['hidruro de renio (IV)'],
    sist: ['tetrahidruro de renio'],
    ions: [{t:'cat',l:'Re⁴⁺'},{t:'an',l:'H⁻ × 4'}],
    tokens: [{w:'hidruro',t:'an'},{w:'de',t:'neu'},{w:'renio',t:'cat'}],
    hint: 'Re con EO +4. Renio tiene múltiples EO. Stock: hidruro de renio (IV).'
  },
  {
    formula: 'LaH₃',
    group: 'hidru', level: 'hard',
    trad: ['hidruro lántico'],
    stock: ['hidruro de lantano (III)'],
    sist: ['trihidruro de lantano'],
    ions: [{t:'cat',l:'La³⁺'},{t:'an',l:'H⁻ × 3'}],
    tokens: [{w:'hidruro',t:'an'},{w:'lántico',t:'cat'}],
    hint: 'La con EO +3 (fijo en lantánidos). La³⁺ + 3H⁻ → LaH₃. El hidruro de lantano tiene propiedades de almacenamiento de H₂ investigadas por la industria energética.'
  },

  // ── ANHID: 3 nuevos anhídridos ──
  {
    formula: 'TeO',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido hipoteluridhídrico', 'óxido hipoteluridhídrico'],
    stock: ['óxido de telurio (II)'],
    sist: ['monóxido de telurio'],
    hint: 'Te con EO +2. 2(+2)+2(−2)=0. Stock: óxido de telurio (II).'
  },
  {
    formula: 'PoO₂',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido polonoso', 'óxido polonoso'],
    stock: ['óxido de polonio (IV)'],
    sist: ['dióxido de polonio'],
    hint: 'Po con EO +4. Análogo al TeO₂. Stock: óxido de polonio (IV).'
  },
  {
    formula: 'PoO₃',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido polónico', 'óxido polónico'],
    stock: ['óxido de polonio (VI)'],
    sist: ['trióxido de polonio'],
    hint: 'Po con EO +6 (mayor). → -ico → polónico. Stock: óxido de polonio (VI).'
  },

  // ── BASE: 3 nuevos hidróxidos ──
  {
    formula: 'Pd(OH)₄',
    group: 'base', level: 'hard',
    trad: ['hidróxido paladioso'],
    stock: ['hidróxido de paladio (IV)'],
    sist: ['tetrahidróxido de paladio'],
    ions: [{t:'cat',l:'Pd⁴⁺'},{t:'oh',l:'OH⁻ × 4'}],
    tokens: [{w:'hidróxido',t:'oh'},{w:'paladioso',t:'cat'}],
    hint: 'Pd con EO +4. Pd⁴⁺ + 4OH⁻ → Pd(OH)₄. Metal del grupo platino.'
  },
  {
    formula: 'Rh(OH)₃',
    group: 'base', level: 'hard',
    trad: [],
    stock: ['hidróxido de rodio (III)'],
    sist: ['trihidróxido de rodio'],
    ions: [{t:'cat',l:'Rh³⁺'},{t:'oh',l:'OH⁻ × 3'}],
    tokens: [{w:'hidróxido',t:'oh'},{w:'de',t:'neu'},{w:'rodio',t:'cat'}],
    hint: 'Rh con EO +3. Rodio del grupo platino. Rh³⁺ + 3OH⁻ → Rh(OH)₃.'
  },
  {
    formula: 'Os(OH)₄',
    group: 'base', level: 'hard',
    trad: [],
    stock: ['hidróxido de osmio (IV)'],
    sist: ['tetrahidróxido de osmio'],
    ions: [{t:'cat',l:'Os⁴⁺'},{t:'oh',l:'OH⁻ × 4'}],
    tokens: [{w:'hidróxido',t:'oh'},{w:'de',t:'neu'},{w:'osmio',t:'cat'}],
    hint: 'Os con EO +4. El osmio es el metal más denso. Os⁴⁺ + 4OH⁻ → Os(OH)₄.'
  },

  // ── AC-OX: 2 nuevos ácidos oxácidos ──
  {
    formula: 'H₂MoO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido molibdenoso'],
    stock: [],
    sist: ['ácido molibdenoso'],
    hint: 'H₂MoO₃ = 2H + MoO₃²⁻. Mo con EO +4 (menor) → -oso → molibdenoso. Análogo al ácido cromoso.'
  },
  {
    formula: 'H₃VO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido vanadioso'],
    stock: [],
    sist: ['ácido vanadioso'],
    hint: 'H₃VO₃ = 3H + VO₃³⁻ (meta-vanadato). V con EO +3 (menor) → -oso → vanadioso.'
  },

  // ─────────────────────────────────────────────
  // SAL-AC  (sales ácidas)  — ácido poliprótico parcialmente neutralizado
  // ─────────────────────────────────────────────

  // -- Carbonatos ácidos (bicarbonatos) --
  {
    formula: 'KHCO₃',
    group: 'sal-ac', level: 'easy',
    trad: ['bicarbonato de potasio'],
    stock: ['hidrogenocarbonato de potasio'],
    sist: ['hidrogenocarbonato de potasio'],
    ions: [{t:'cat',l:'K⁺'},{t:'an',l:'HCO₃⁻'}],
    tokens: [{w:'bicarbonato',t:'ox'},{w:'de',t:'neu'},{w:'potasio',t:'cat'}],
    hint: 'H₂CO₃ cedió 1 de sus 2 H⁺. K⁺ + HCO₃⁻ → KHCO₃. Trad: bi- + carbonato = bicarbonato. Stock: hidrogeno- + carbonato = hidrogenocarbonato de potasio.'
  },
  {
    formula: 'Mg(HCO₃)₂',
    group: 'sal-ac', level: 'medium',
    trad: ['bicarbonato de magnesio'],
    stock: ['hidrogenocarbonato de magnesio'],
    sist: ['dihidrogenocarbonato de magnesio'],
    ions: [{t:'cat',l:'Mg²⁺'},{t:'an',l:'HCO₃⁻ × 2'}],
    tokens: [{w:'bicarbonato',t:'ox'},{w:'de',t:'neu'},{w:'magnesio',t:'cat'}],
    hint: 'Mg²⁺ (EO fijo +2) con 2 HCO₃⁻. El H₂CO₃ solo cedió 1 de 2 H⁺. Contribuye a la dureza temporal del agua junto con Ca(HCO₃)₂.'
  },
  {
    formula: 'Ba(HCO₃)₂',
    group: 'sal-ac', level: 'medium',
    trad: ['bicarbonato de bario'],
    stock: ['hidrogenocarbonato de bario'],
    sist: ['dihidrogenocarbonato de bario'],
    ions: [{t:'cat',l:'Ba²⁺'},{t:'an',l:'HCO₃⁻ × 2'}],
    tokens: [{w:'bicarbonato',t:'ox'},{w:'de',t:'neu'},{w:'bario',t:'cat'}],
    hint: 'Ba²⁺ + 2 HCO₃⁻ → Ba(HCO₃)₂. Sal ácida del ácido carbónico. El Ba²⁺ reemplazó solo 1 H de cada H₂CO₃ (necesitó 2 moléculas de H₂CO₃ parcialmente neutralizadas).'
  },
  {
    formula: 'Fe(HCO₃)₂',
    group: 'sal-ac', level: 'medium',
    trad: ['bicarbonato ferroso', 'bicarbonato de hierro (II)'],
    stock: ['hidrogenocarbonato de hierro (II)'],
    sist: ['dihidrogenocarbonato de hierro'],
    ions: [{t:'cat',l:'Fe²⁺'},{t:'an',l:'HCO₃⁻ × 2'}],
    tokens: [{w:'bicarbonato',t:'ox'},{w:'ferroso',t:'cat'}],
    hint: 'Fe²⁺ (EO menor, -oso) + 2 HCO₃⁻. Trad: bicarbonato ferroso. Stock: hidrogenocarbonato de hierro (II). El hierro tiene EO variable → se indica en paréntesis en Stock.'
  },
  {
    formula: 'Fe(HCO₃)₃',
    group: 'sal-ac', level: 'hard',
    trad: ['bicarbonato férrico', 'bicarbonato de hierro (III)'],
    stock: ['hidrogenocarbonato de hierro (III)'],
    sist: ['trihidrogenocarbonato de hierro'],
    ions: [{t:'cat',l:'Fe³⁺'},{t:'an',l:'HCO₃⁻ × 3'}],
    tokens: [{w:'bicarbonato',t:'ox'},{w:'férrico',t:'cat'}],
    hint: 'Fe³⁺ (EO mayor, -ico) + 3 HCO₃⁻. Trad: bicarbonato férrico. Stock: hidrogenocarbonato de hierro (III). Poco estable; se descompone fácilmente.'
  },

  // -- Sulfatos ácidos (bisulfatos) --
  {
    formula: 'NaHSO₄',
    group: 'sal-ac', level: 'easy',
    trad: ['bisulfato de sodio'],
    stock: ['hidrogenosulfato de sodio'],
    sist: ['hidrogenosulfato de sodio'],
    ions: [{t:'cat',l:'Na⁺'},{t:'an',l:'HSO₄⁻'}],
    tokens: [{w:'bisulfato',t:'ox'},{w:'de',t:'neu'},{w:'sodio',t:'cat'}],
    hint: 'H₂SO₄ (diprót.) cedió 1 de 2 H⁺. Anión HSO₄⁻: trad. = bisulfato (bi- + sulfato); Stock = hidrogenosulfato. Na⁺ → sodio (EO fijo, sin romano). Componente de algunos limpiadores ácidos.'
  },
  {
    formula: 'KHSO₄',
    group: 'sal-ac', level: 'easy',
    trad: ['bisulfato de potasio'],
    stock: ['hidrogenosulfato de potasio'],
    sist: ['hidrogenosulfato de potasio'],
    ions: [{t:'cat',l:'K⁺'},{t:'an',l:'HSO₄⁻'}],
    tokens: [{w:'bisulfato',t:'ox'},{w:'de',t:'neu'},{w:'potasio',t:'cat'}],
    hint: 'H₂SO₄ solo cedió 1 H⁺. K⁺ + HSO₄⁻ → KHSO₄. Trad: bi- + sulfato = bisulfato de potasio. Stock: hidrogeno- + sulfato = hidrogenosulfato de potasio.'
  },
  {
    formula: 'Ca(HSO₄)₂',
    group: 'sal-ac', level: 'medium',
    trad: ['bisulfato de calcio'],
    stock: ['hidrogenosulfato de calcio'],
    sist: ['dihidrogenosulfato de calcio'],
    ions: [{t:'cat',l:'Ca²⁺'},{t:'an',l:'HSO₄⁻ × 2'}],
    tokens: [{w:'bisulfato',t:'ox'},{w:'de',t:'neu'},{w:'calcio',t:'cat'}],
    hint: 'Ca²⁺ + 2 HSO₄⁻ → Ca(HSO₄)₂. Sal ácida del ácido sulfúrico. Solo 1 de 2 H fue reemplazado en cada anión. Trad: bisulfato de calcio; Stock: hidrogenosulfato de calcio.'
  },

  // -- Sulfitos ácidos (bisulfitos) --
  {
    formula: 'NaHSO₃',
    group: 'sal-ac', level: 'easy',
    trad: ['bisulfito de sodio'],
    stock: ['hidrogenosulfito de sodio'],
    sist: ['hidrogenosulfito de sodio'],
    ions: [{t:'cat',l:'Na⁺'},{t:'an',l:'HSO₃⁻'}],
    tokens: [{w:'bisulfito',t:'ox'},{w:'de',t:'neu'},{w:'sodio',t:'cat'}],
    hint: 'H₂SO₃ (diprót.) cedió 1 de 2 H⁺. Anión HSO₃⁻: trad. = bisulfito (bi- + sulfito); Stock = hidrogenosulfito. Se usa como conservante de alimentos (E222).'
  },
  {
    formula: 'KHSO₃',
    group: 'sal-ac', level: 'easy',
    trad: ['bisulfito de potasio'],
    stock: ['hidrogenosulfito de potasio'],
    sist: ['hidrogenosulfito de potasio'],
    ions: [{t:'cat',l:'K⁺'},{t:'an',l:'HSO₃⁻'}],
    tokens: [{w:'bisulfito',t:'ox'},{w:'de',t:'neu'},{w:'potasio',t:'cat'}],
    hint: 'K⁺ + HSO₃⁻ → KHSO₃. Trad: bisulfito de potasio (bi- + sulfito). Stock: hidrogenosulfito de potasio. H₂SO₃ solo cedió 1 de sus 2 H⁺.'
  },

  // -- Fosfatos ácidos (de H₃PO₄ triprót.) --
  {
    formula: 'NaH₂PO₄',
    group: 'sal-ac', level: 'medium',
    trad: ['fosfato ácido de sodio', 'dihidrogenofosfato de sodio'],
    stock: ['dihidrogenofosfato de sodio'],
    sist: ['dihidrogenofosfato de sodio'],
    ions: [{t:'cat',l:'Na⁺'},{t:'an',l:'H₂PO₄⁻'}],
    tokens: [{w:'dihidrogenofosfato',t:'ox'},{w:'de',t:'neu'},{w:'sodio',t:'cat'}],
    hint: 'H₃PO₄ (triprót.) cedió 1 de 3 H⁺. Quedan 2 H en el anión H₂PO₄⁻ = dihidrogenofosfato. 1 Na⁺ equilibra la carga −1. Stock = dihidrogeno- + fosfato de sodio.'
  },
  {
    formula: 'KH₂PO₄',
    group: 'sal-ac', level: 'medium',
    trad: ['dihidrogenofosfato de potasio'],
    stock: ['dihidrogenofosfato de potasio'],
    sist: ['dihidrogenofosfato de potasio'],
    ions: [{t:'cat',l:'K⁺'},{t:'an',l:'H₂PO₄⁻'}],
    tokens: [{w:'dihidrogenofosfato',t:'ox'},{w:'de',t:'neu'},{w:'potasio',t:'cat'}],
    hint: 'H₃PO₄ cedió 1 de 3 H⁺. K⁺ + H₂PO₄⁻ → KH₂PO₄. Anión = dihidrogenofosfato (2 H quedan). Fertilizante MAP (monofosfato de potasio) muy usado en agricultura colombiana.'
  },
  {
    formula: 'Ca(H₂PO₄)₂',
    group: 'sal-ac', level: 'hard',
    trad: ['dihidrogenofosfato de calcio'],
    stock: ['dihidrogenofosfato de calcio'],
    sist: ['dihihidrogenofosfato de calcio'],
    ions: [{t:'cat',l:'Ca²⁺'},{t:'an',l:'H₂PO₄⁻ × 2'}],
    tokens: [{w:'dihidrogenofosfato',t:'ox'},{w:'de',t:'neu'},{w:'calcio',t:'cat'}],
    hint: 'Ca²⁺ + 2 H₂PO₄⁻. H₃PO₄ cedió 1 de 3 H⁺ en cada anión. Superfosfato de calcio: fertilizante importante. Los 2 H residuales en el anión indican neutralización parcial.'
  },
  {
    formula: 'Al(H₂PO₄)₃',
    group: 'sal-ac', level: 'hard',
    trad: ['dihidrogenofosfato de aluminio'],
    stock: ['dihidrogenofosfato de aluminio'],
    sist: ['tris(dihidrogenofosfato) de aluminio'],
    ions: [{t:'cat',l:'Al³⁺'},{t:'an',l:'H₂PO₄⁻ × 3'}],
    tokens: [{w:'dihidrogenofosfato',t:'ox'},{w:'de',t:'neu'},{w:'aluminio',t:'cat'}],
    hint: 'Al³⁺ (EO fijo +3) + 3 H₂PO₄⁻. H₃PO₄ parcialmente neutralizado (1 de 3 H⁺ cedido). Al tiene EO fijo → sin número romano en Stock.'
  },
  {
    formula: 'Na₂HPO₄',
    group: 'sal-ac', level: 'medium',
    trad: ['fosfato ácido de disodio', 'hidrogenofosfato de sodio'],
    stock: ['hidrogenofosfato de sodio'],
    sist: ['hidrogenofosfato de disodio'],
    ions: [{t:'cat',l:'Na⁺ × 2'},{t:'an',l:'HPO₄²⁻'}],
    tokens: [{w:'hidrogenofosfato',t:'ox'},{w:'de',t:'neu'},{w:'sodio',t:'cat'}],
    hint: 'H₃PO₄ cedió 2 de 3 H⁺. Queda 1 H en el anión HPO₄²⁻ = hidrogenofosfato (carga −2). 2 Na⁺ equilibran la carga. Stock: hidrogeno- + fosfato de sodio. Presente en soluciones tampón.'
  },
  {
    formula: 'K₂HPO₄',
    group: 'sal-ac', level: 'medium',
    trad: ['fosfato ácido de dipotasio', 'hidrogenofosfato de potasio'],
    stock: ['hidrogenofosfato de potasio'],
    sist: ['hidrogenofosfato de dipotasio'],
    ions: [{t:'cat',l:'K⁺ × 2'},{t:'an',l:'HPO₄²⁻'}],
    tokens: [{w:'hidrogenofosfato',t:'ox'},{w:'de',t:'neu'},{w:'potasio',t:'cat'}],
    hint: '2 K⁺ + HPO₄²⁻. H₃PO₄ cedió 2 de 3 H⁺; 1 H queda en el anión. Stock: hidrogenofosfato de potasio. Fertilizante DKP usado en cultivos colombianos.'
  },
  {
    formula: 'CaHPO₄',
    group: 'sal-ac', level: 'medium',
    trad: ['fosfato ácido de calcio', 'hidrogenofosfato de calcio'],
    stock: ['hidrogenofosfato de calcio'],
    sist: ['hidrogenofosfato de calcio'],
    ions: [{t:'cat',l:'Ca²⁺'},{t:'an',l:'HPO₄²⁻'}],
    tokens: [{w:'hidrogenofosfato',t:'ox'},{w:'de',t:'neu'},{w:'calcio',t:'cat'}],
    hint: 'Ca²⁺ + HPO₄²⁻. H₃PO₄ cedió 2 de 3 H⁺; 1 H queda en el anión HPO₄²⁻. Ca tiene EO fijo (+2) → sin romano. Fosfato dicálcico: suplemento alimenticio y componente del esmalte dental.'
  },

  // -- Cromato ácido --
  {
    formula: 'NaHCrO₄',
    group: 'sal-ac', level: 'hard',
    trad: ['cromato ácido de sodio', 'bicromato de sodio hidrógeno'],
    stock: ['hidrogenocromato de sodio'],
    sist: ['hidrogenocromato de sodio'],
    ions: [{t:'cat',l:'Na⁺'},{t:'an',l:'HCrO₄⁻'}],
    tokens: [{w:'hidrogenocromato',t:'ox'},{w:'de',t:'neu'},{w:'sodio',t:'cat'}],
    hint: 'H₂CrO₄ (diprót.) cedió 1 de 2 H⁺. Anión HCrO₄⁻ = hidrogenocromato (Stock). Na⁺ sin romano (EO fijo). Al acidificar HCrO₄⁻ se dimeriza a Cr₂O₇²⁻ (dicromato).'
  },

  // ── Sal-ac batch 2: más bicarbonatos, bisulfatos, fosfatos ácidos ──
  {
    formula: 'LiHCO₃',
    group: 'sal-ac', level: 'easy',
    trad: ['bicarbonato de litio'],
    stock: ['hidrogenocarbonato de litio'],
    sist: ['hidrogenocarbonato de litio'],
    ions: [{t:'cat',l:'Li⁺'},{t:'an',l:'HCO₃⁻'}],
    tokens: [{w:'bicarbonato',t:'ox'},{w:'de',t:'neu'},{w:'litio',t:'cat'}],
    hint: 'HCO₃⁻ = bicarbonato (trad.) / hidrogenocarbonato (IUPAC). Li⁺ → litio. H₂CO₃ cedió 1 de 2 H⁺.'
  },
  {
    formula: 'NH₄HCO₃',
    group: 'sal-ac', level: 'medium',
    trad: ['bicarbonato de amonio'],
    stock: ['hidrogenocarbonato de amonio'],
    sist: ['hidrogenocarbonato de amonio'],
    ions: [{t:'cat',l:'NH₄⁺'},{t:'an',l:'HCO₃⁻'}],
    tokens: [{w:'bicarbonato',t:'ox'},{w:'de',t:'neu'},{w:'amonio',t:'cat'}],
    hint: 'NH₄⁺ = catión amonio. HCO₃⁻ = bicarbonato. Presente en polvos de hornear.'
  },
  {
    formula: 'LiHSO₄',
    group: 'sal-ac', level: 'easy',
    trad: ['bisulfato de litio'],
    stock: ['hidrogenosulfato de litio'],
    sist: ['hidrogenosulfato de litio'],
    ions: [{t:'cat',l:'Li⁺'},{t:'an',l:'HSO₄⁻'}],
    tokens: [{w:'bisulfato',t:'ox'},{w:'de',t:'neu'},{w:'litio',t:'cat'}],
    hint: 'HSO₄⁻ = bisulfato (trad.) / hidrogenosulfato (IUPAC). H₂SO₄ cedió 1 de 2 H⁺.'
  },
  {
    formula: 'Ca(HCO₃)₂',
    group: 'sal-ac', level: 'easy',
    trad: ['bicarbonato de calcio'],
    stock: ['hidrogenocarbonato de calcio'],
    sist: ['hidrogenocarbonato de calcio'],
    ions: [{t:'cat',l:'Ca²⁺'},{t:'an',l:'HCO₃⁻'}],
    tokens: [{w:'bicarbonato',t:'ox'},{w:'de',t:'neu'},{w:'calcio',t:'cat'}],
    hint: 'Ca²⁺ necesita 2×HCO₃⁻. HCO₃⁻ = bicarbonato (trad.) / hidrogenocarbonato (IUPAC). Causa la dureza temporal del agua.'
  },
  {
    formula: 'NH₄HSO₄',
    group: 'sal-ac', level: 'medium',
    trad: ['bisulfato de amonio'],
    stock: ['hidrogenosulfato de amonio'],
    sist: ['hidrogenosulfato de amonio'],
    ions: [{t:'cat',l:'NH₄⁺'},{t:'an',l:'HSO₄⁻'}],
    tokens: [{w:'bisulfato',t:'ox'},{w:'de',t:'neu'},{w:'amonio',t:'cat'}],
    hint: 'NH₄⁺ = catión amonio. HSO₄⁻ = bisulfato / hidrogenosulfato. H₂SO₄ parcialmente neutralizado.'
  },
  {
    formula: 'Fe(HSO₄)₂',
    group: 'sal-ac', level: 'hard',
    trad: ['bisulfato ferroso'],
    stock: ['hidrogenosulfato de hierro (II)'],
    sist: ['bis(hidrogenosulfato) de hierro'],
    ions: [{t:'cat',l:'Fe²⁺'},{t:'an',l:'HSO₄⁻'}],
    tokens: [{w:'bisulfato',t:'ox'},{w:'ferroso',t:'cat'}],
    hint: 'Fe²⁺ (ferroso). 2 aniones HSO₄⁻ para balancear. Fe²⁺ + 2 HSO₄⁻ → Fe(HSO₄)₂.'
  },
  {
    formula: 'Fe(HSO₄)₃',
    group: 'sal-ac', level: 'hard',
    trad: ['bisulfato férrico'],
    stock: ['hidrogenosulfato de hierro (III)'],
    sist: ['tris(hidrogenosulfato) de hierro'],
    ions: [{t:'cat',l:'Fe³⁺'},{t:'an',l:'HSO₄⁻'}],
    tokens: [{w:'bisulfato',t:'ox'},{w:'férrico',t:'cat'}],
    hint: 'Fe³⁺ (férrico). 3 aniones HSO₄⁻ para balancear. Fe³⁺ + 3 HSO₄⁻ → Fe(HSO₄)₃.'
  },
  {
    formula: 'LiH₂PO₄',
    group: 'sal-ac', level: 'medium',
    trad: ['fosfato ácido de litio', 'dihidrogenofosfato de litio'],
    stock: ['dihidrogenofosfato de litio'],
    sist: ['dihidrogenofosfato de litio'],
    ions: [{t:'cat',l:'Li⁺'},{t:'an',l:'H₂PO₄⁻'}],
    tokens: [{w:'dihidrogenofosfato',t:'ox'},{w:'de',t:'neu'},{w:'litio',t:'cat'}],
    hint: 'H₃PO₄ cedió 1 de 3 H⁺. Anión H₂PO₄⁻ = dihidrogenofosfato. Li⁺ → litio.'
  },
  {
    formula: 'Li₂HPO₄',
    group: 'sal-ac', level: 'medium',
    trad: ['hidrogenofosfato de litio'],
    stock: ['hidrogenofosfato de litio'],
    sist: ['hidrogenofosfato de dilítio'],
    ions: [{t:'cat',l:'Li⁺'},{t:'an',l:'HPO₄²⁻'}],
    tokens: [{w:'hidrogenofosfato',t:'ox'},{w:'de',t:'neu'},{w:'litio',t:'cat'}],
    hint: 'H₃PO₄ cedió 2 de 3 H⁺. Anión HPO₄²⁻ = hidrogenofosfato. 2Li⁺ para balancear carga −2.'
  },
  {
    formula: '(NH₄)₂HPO₄',
    group: 'sal-ac', level: 'medium',
    trad: ['hidrogenofosfato de amonio'],
    stock: ['hidrogenofosfato de amonio'],
    sist: ['hidrogenofosfato de amonio'],
    ions: [{t:'cat',l:'NH₄⁺'},{t:'an',l:'HPO₄²⁻'}],
    tokens: [{w:'hidrogenofosfato',t:'ox'},{w:'de',t:'neu'},{w:'amonio',t:'cat'}],
    hint: 'NH₄⁺ = amonio. HPO₄²⁻ = hidrogenofosfato. Se necesitan 2 NH₄⁺ para balancear la carga −2.'
  },
  {
    formula: 'NH₄H₂PO₄',
    group: 'sal-ac', level: 'medium',
    trad: ['dihidrogenofosfato de amonio'],
    stock: ['dihidrogenofosfato de amonio'],
    sist: ['dihidrogenofosfato de amonio'],
    ions: [{t:'cat',l:'NH₄⁺'},{t:'an',l:'H₂PO₄⁻'}],
    tokens: [{w:'dihidrogenofosfato',t:'ox'},{w:'de',t:'neu'},{w:'amonio',t:'cat'}],
    hint: 'NH₄⁺ = amonio. H₂PO₄⁻ = dihidrogenofosfato. H₃PO₄ cedió solo 1 H⁺.'
  },
  {
    formula: 'NaH₂PO₄',
    group: 'sal-ac', level: 'easy',
    trad: ['fosfato ácido de sodio', 'dihidrogenofosfato de sodio'],
    stock: ['dihidrogenofosfato de sodio'],
    sist: ['dihidrogenofosfato de sodio'],
    ions: [{t:'cat',l:'Na⁺'},{t:'an',l:'H₂PO₄⁻'}],
    tokens: [{w:'fosfato',t:'ox'},{w:'ácido',t:'neu'},{w:'de',t:'neu'},{w:'sodio',t:'cat'}],
    hint: 'H₃PO₄ (triprót.) cedió 1 de 3 H⁺. Anión H₂PO₄⁻ = dihidrogenofosfato. Na⁺ → sodio. Se usa como aditivo alimentario (E339).'
  },

// Total: batch 4 adds 12 ac-hid, 19 hidru, 3 anhid, 3 base, 2 ac-ox
// sal-ac section: 31 entries (bicarbonatos, bisulfatos, bisulfitos, fosfatos ácidos, cromato ácido)

  // ─────────────────────────────────────────────
  // REACCION — tipos de reacción química (40 ecuaciones)
  // ─────────────────────────────────────────────

  // -- Síntesis (10) --
  {
    id: 'rx-001',
    group: 'reaccion', level: 'easy',
    ecuacion: '2H₂ + O₂ → 2H₂O',
    tipo_rx: 'sintesis',
    hint: 'Dos sustancias simples se combinan para formar una sola. A + B → AB',
    col: 'El hidrógeno como combustible limpio es investigado por Ecopetrol en proyectos H2 en los Llanos Orientales.'
  },
  {
    id: 'rx-002',
    group: 'reaccion', level: 'easy',
    ecuacion: '2Na + Cl₂ → 2NaCl',
    tipo_rx: 'sintesis',
    hint: 'Metal + no metal → sal binaria. A + B → AB. Sal de cocina = síntesis directa.',
    col: 'El cloruro de sodio (NaCl) se extrae en las salinas de Manaure, La Guajira, y en la mina de sal de Zipaquirá, Cundinamarca.'
  },
  {
    id: 'rx-003',
    group: 'reaccion', level: 'easy',
    ecuacion: '2Fe + 3Cl₂ → 2FeCl₃',
    tipo_rx: 'sintesis',
    hint: 'Fe (valencia variable) + Cl₂ → cloruro. El Fe usa su valencia más alta (+3) con Cl₂.',
    col: 'El hierro colombiano proviene principalmente de la Siderúrgica de Paz de Río en Boyacá.'
  },
  {
    id: 'rx-004',
    group: 'reaccion', level: 'medium',
    ecuacion: 'N₂ + 3H₂ → 2NH₃',
    tipo_rx: 'sintesis',
    hint: 'Dos sustancias simples (N₂ y H₂) forman un único producto (NH₃). Proceso Haber-Bosch.',
    col: 'El amoníaco (NH₃) es base de los fertilizantes usados en cultivos de la Sabana de Bogotá.'
  },
  {
    id: 'rx-005',
    group: 'reaccion', level: 'easy',
    ecuacion: 'CaO + H₂O → Ca(OH)₂',
    tipo_rx: 'sintesis',
    hint: 'Óxido básico + agua → hidróxido. A + B → AB. Cal viva + agua = cal apagada.',
    col: 'La cal viva (CaO) se produce en hornos en Cundinamarca y Boyacá para construcción y agricultura.'
  },
  {
    id: 'rx-006',
    group: 'reaccion', level: 'medium',
    ecuacion: 'SO₃ + H₂O → H₂SO₄',
    tipo_rx: 'sintesis',
    hint: 'Óxido ácido + agua → oxoácido. A + B → AB. Lluvia ácida ocurre por este mecanismo.',
    col: 'El H₂SO₄ industrial se produce en Colombia para minería y procesamiento de minerales.'
  },
  {
    id: 'rx-007',
    group: 'reaccion', level: 'easy',
    ecuacion: '2Mg + O₂ → 2MgO',
    tipo_rx: 'sintesis',
    hint: 'Metal + oxígeno → óxido básico. A + B → AB. El Mg arde con llama blanca brillante.',
    col: 'El óxido de magnesio (MgO) se usa en refractarios industriales en Colombia.'
  },
  {
    id: 'rx-008',
    group: 'reaccion', level: 'medium',
    ecuacion: '4Fe + 3O₂ → 2Fe₂O₃',
    tipo_rx: 'sintesis',
    hint: 'Metal + oxígeno → óxido. A + B → AB. Fe₂O₃ es el óxido del hierro (herrumbre).',
    col: 'La oxidación del hierro (Fe₂O₃) afecta estructuras metálicas en zonas costeras como Cartagena.'
  },
  {
    id: 'rx-009',
    group: 'reaccion', level: 'hard',
    ecuacion: 'P₂O₅ + 3H₂O → 2H₃PO₄',
    tipo_rx: 'sintesis',
    hint: 'Óxido ácido + agua → oxoácido. P₂O₅ es el anhídrido del ácido fosfórico.',
    col: 'El ácido fosfórico (H₃PO₄) es base de fertilizantes fosfatados usados en Colombia.'
  },
  {
    id: 'rx-010',
    group: 'reaccion', level: 'easy',
    ecuacion: 'C + O₂ → CO₂',
    tipo_rx: 'sintesis',
    hint: 'No metal + oxígeno → óxido ácido. A + B → AB. El carbón al quemarse forma CO₂.',
    col: 'El carbón del Cerrejón (La Guajira) y la zona del Cesar al oxidarse produce CO₂.'
  },

  // -- Descomposición (8) --
  {
    id: 'rx-011',
    group: 'reaccion', level: 'easy',
    ecuacion: '2H₂O → 2H₂ + O₂',
    tipo_rx: 'descomposicion',
    hint: 'Una sola sustancia se divide en dos o más. AB → A + B. Electrólisis del agua.',
    col: 'La electrólisis del agua en proyectos de Ecopetrol genera H₂ limpio en los Llanos Orientales.'
  },
  {
    id: 'rx-012',
    group: 'reaccion', level: 'easy',
    ecuacion: '2H₂O₂ → 2H₂O + O₂',
    tipo_rx: 'descomposicion',
    hint: 'El agua oxigenada (H₂O₂) se descompone en agua y oxígeno. AB → A + B.',
    col: 'El agua oxigenada usada en clínicas colombianas se descompone liberando O₂ burbujeante.'
  },
  {
    id: 'rx-013',
    group: 'reaccion', level: 'medium',
    ecuacion: 'CaCO₃ → CaO + CO₂',
    tipo_rx: 'descomposicion',
    hint: 'La piedra caliza se descompone con calor. AB → A + B. Base de la industria del cemento.',
    col: 'La caliza de Cundinamarca y Boyacá se calcina en hornos para producir cal viva (CaO).'
  },
  {
    id: 'rx-014',
    group: 'reaccion', level: 'medium',
    ecuacion: '2NaHCO₃ → Na₂CO₃ + H₂O + CO₂',
    tipo_rx: 'descomposicion',
    hint: 'El bicarbonato de sodio al calentarse se descompone en tres productos. AB → A + B + C.',
    col: 'El bicarbonato (NaHCO₃) se usa en cocinas colombianas como polvo de hornear.'
  },
  {
    id: 'rx-015',
    group: 'reaccion', level: 'medium',
    ecuacion: '2KClO₃ → 2KCl + 3O₂',
    tipo_rx: 'descomposicion',
    hint: 'El clorato de potasio produce oxígeno al calentarse. AB → A + B.',
    col: 'La producción de O₂ por descomposición de KClO₃ se usa en laboratorios de química en Colombia.'
  },
  {
    id: 'rx-016',
    group: 'reaccion', level: 'hard',
    ecuacion: '2HgO → 2Hg + O₂',
    tipo_rx: 'descomposicion',
    hint: 'El óxido de mercurio se descompone en sus elementos. AB → A + B.',
    col: 'Esta reacción histórica fue usada por Lavoisier para demostrar la composición del aire.'
  },
  {
    id: 'rx-017',
    group: 'reaccion', level: 'medium',
    ecuacion: 'NH₄Cl → NH₃ + HCl',
    tipo_rx: 'descomposicion',
    hint: 'Una sal de amonio se descompone en gas amoníaco y ácido clorhídrico. AB → A + B.',
    col: 'El cloruro de amonio (NH₄Cl) se usa en baterías y en metalurgia en Colombia.'
  },
  {
    id: 'rx-018',
    group: 'reaccion', level: 'hard',
    ecuacion: '2Fe(OH)₃ → Fe₂O₃ + 3H₂O',
    tipo_rx: 'descomposicion',
    hint: 'El hidróxido de hierro (III) al calentarse se descompone en óxido y agua. AB → A + B.',
    col: 'La herrumbre hidratada Fe(OH)₃ se convierte en Fe₂O₃ con el calor solar en estructuras colombianas.'
  },

  // -- Sustitución simple (8) --
  {
    id: 'rx-019',
    group: 'reaccion', level: 'easy',
    ecuacion: 'Zn + H₂SO₄ → ZnSO₄ + H₂',
    tipo_rx: 'sus-simple',
    hint: 'Metal más activo (Zn) desplaza a H del ácido. A + BC → AC + B.',
    col: 'El zinc metálico reacciona con ácido sulfúrico diluido en laboratorios colombianos liberando burbujas de H₂. Colombia importa y procesa zinc en la industria metalmecánica.'
  },
  {
    id: 'rx-020',
    group: 'reaccion', level: 'easy',
    ecuacion: 'Fe + CuSO₄ → FeSO₄ + Cu',
    tipo_rx: 'sus-simple',
    hint: 'El Fe más activo que Cu desplaza al Cu²⁺ de su sal. A + BC → AC + B.',
    col: 'Esta reacción se usa para recuperar cobre de soluciones en minas colombianas.'
  },
  {
    id: 'rx-021',
    group: 'reaccion', level: 'medium',
    ecuacion: '2Na + 2H₂O → 2NaOH + H₂',
    tipo_rx: 'sus-simple',
    hint: 'Metal alcalino desplaza al H del agua. A + BC → AC + B. Reacción vigorosa.',
    col: 'El sodio reacciona violentamente con agua; se estudia con precaución en laboratorios colombianos.'
  },
  {
    id: 'rx-022',
    group: 'reaccion', level: 'medium',
    ecuacion: '2Al + 6HCl → 2AlCl₃ + 3H₂',
    tipo_rx: 'sus-simple',
    hint: 'El aluminio desplaza al H del HCl. A + BC → AC + B. Necesita balanceo cuidadoso.',
    col: 'El aluminio producido en Colombia (Alumina S.A.) reacciona con ácidos liberando H₂.'
  },
  {
    id: 'rx-023',
    group: 'reaccion', level: 'easy',
    ecuacion: 'Mg + H₂SO₄ → MgSO₄ + H₂',
    tipo_rx: 'sus-simple',
    hint: 'El Mg más activo que H desplaza al hidrógeno del ácido sulfúrico. A + BC → AC + B.',
    col: 'El magnesio en contacto con ácido sulfúrico produce burbujas de H₂ visibles en el laboratorio.'
  },
  {
    id: 'rx-024',
    group: 'reaccion', level: 'hard',
    ecuacion: 'Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag',
    tipo_rx: 'sus-simple',
    hint: 'El Cu más activo que Ag desplaza al Ag⁺. A + BC → AC + B. Se forman cristales de plata.',
    col: 'Este experimento se hace en laboratorios de química del SENA y universidades colombianas.'
  },
  {
    id: 'rx-025',
    group: 'reaccion', level: 'medium',
    ecuacion: 'Zn + 2AgNO₃ → Zn(NO₃)₂ + 2Ag',
    tipo_rx: 'sus-simple',
    hint: 'El Zn más activo que Ag desplaza a dos Ag⁺. A + BC → AC + B.',
    col: 'El zinc de la industria colombiana desplaza plata de soluciones en procesos metalúrgicos.'
  },
  {
    id: 'rx-026',
    group: 'reaccion', level: 'medium',
    ecuacion: 'Ca + 2H₂O → Ca(OH)₂ + H₂',
    tipo_rx: 'sus-simple',
    hint: 'El Ca más activo que H₂ desplaza hidrógeno del agua. A + BC → AC + B.',
    col: 'El calcio metálico reacciona con agua produciendo cal apagada Ca(OH)₂ usada en construcción.'
  },

  // -- Sustitución doble (8) --
  {
    id: 'rx-027',
    group: 'reaccion', level: 'easy',
    ecuacion: 'NaCl + AgNO₃ → NaNO₃ + AgCl',
    tipo_rx: 'sus-doble',
    hint: 'Dos sales intercambian iones. AB + CD → AD + CB. AgCl es precipitado blanco.',
    col: 'Esta reacción identifica la presencia de cloruros en muestras de agua colombiana.'
  },
  {
    id: 'rx-028',
    group: 'reaccion', level: 'easy',
    ecuacion: 'Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃',
    tipo_rx: 'sus-doble',
    hint: 'Dos sales intercambian iones. AB + CD → AD + CB. PbI₂ es precipitado amarillo brillante.',
    col: 'La formación de PbI₂ (precipitado amarillo) se usa como prueba de laboratorio en universidades colombianas.'
  },
  {
    id: 'rx-029',
    group: 'reaccion', level: 'medium',
    ecuacion: 'MgSO₄ + 2NaOH → Mg(OH)₂ + Na₂SO₄',
    tipo_rx: 'sus-doble',
    hint: 'Intercambio iónico: sal + base → hidróxido precipitado + nueva sal. AB + 2CD → A(OH)₂ + DB.',
    col: 'El Mg(OH)₂ (precipitado blanco) se usa como antiácido estomacal en farmacias colombianas.'
  },
  {
    id: 'rx-030',
    group: 'reaccion', level: 'medium',
    ecuacion: 'CaCl₂ + Na₂SO₄ → CaSO₄ + 2NaCl',
    tipo_rx: 'sus-doble',
    hint: 'Dos sales intercambian iones. AB + CD → AD + CB. CaSO₄ es yeso, poco soluble.',
    col: 'El sulfato de calcio (CaSO₄) o yeso se usa ampliamente en construcciones colombianas.'
  },
  {
    id: 'rx-031',
    group: 'reaccion', level: 'medium',
    ecuacion: 'Pb(NO₃)₂ + Na₂SO₄ → PbSO₄ + 2NaNO₃',
    tipo_rx: 'sus-doble',
    hint: 'Intercambio de iones entre dos sales. AB + CD → AD + CB. PbSO₄ precipita.',
    col: 'El plomo es un metal estudiado en análisis de aguas contaminadas en ríos colombianos.'
  },
  {
    id: 'rx-032',
    group: 'reaccion', level: 'medium',
    ecuacion: 'BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl',
    tipo_rx: 'sus-doble',
    hint: 'Intercambio iónico. AB + CD → AD + CB. BaSO₄ es precipitado blanco insoluble.',
    col: 'El sulfato de bario (BaSO₄) se usa en radiografías médicas en hospitales colombianos.'
  },
  {
    id: 'rx-033',
    group: 'reaccion', level: 'hard',
    ecuacion: 'Fe₂(SO₄)₃ + 6NaOH → 2Fe(OH)₃ + 3Na₂SO₄',
    tipo_rx: 'sus-doble',
    hint: 'Sal con ion multivalente + base → precipitado. Requiere balanceo cuidadoso.',
    col: 'El hidróxido de hierro Fe(OH)₃ (color ocre) precipita en análisis de aguas del río Bogotá.'
  },
  {
    id: 'rx-034',
    group: 'reaccion', level: 'medium',
    ecuacion: 'Na₂CO₃ + CaCl₂ → CaCO₃ + 2NaCl',
    tipo_rx: 'sus-doble',
    hint: 'Los iones CO₃²⁻ y Ca²⁺ se atraen y forman un precipitado blanco (CaCO₃). AB + CD → AD + CB.',
    col: 'El carbonato de calcio CaCO₃ (caliza) que precipita en esta reacción es abundante en Cundinamarca y Boyacá.'
  },

  // -- Combustión (7) --
  {
    id: 'rx-035',
    group: 'reaccion', level: 'easy',
    ecuacion: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
    tipo_rx: 'combustion',
    hint: 'Hidrocarburo + O₂ → CO₂ + H₂O. Combustión completa del metano (gas natural).',
    col: 'El gas natural (CH₄) distribuido por Gases del Caribe y Surtigas se usa en hogares colombianos.'
  },
  {
    id: 'rx-036',
    group: 'reaccion', level: 'medium',
    ecuacion: 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O',
    tipo_rx: 'combustion',
    hint: 'Propano + oxígeno → CO₂ + H₂O. Combustión completa. El propano es el gas en cilindros.',
    col: 'El propano (C₃H₈) en cilindros de gas es el combustible de cocinas en zonas rurales colombianas.'
  },
  {
    id: 'rx-037',
    group: 'reaccion', level: 'hard',
    ecuacion: '2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O',
    tipo_rx: 'combustion',
    hint: 'Octano (gasolina) + O₂ → CO₂ + H₂O. Combustión completa con coeficientes grandes.',
    col: 'La gasolina (octano C₈H₁₈) refinada en Barrancabermeja mueve los vehículos colombianos.'
  },
  {
    id: 'rx-038',
    group: 'reaccion', level: 'hard',
    ecuacion: '2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O',
    tipo_rx: 'combustion',
    hint: 'Acetileno (C₂H₂) + O₂ → CO₂ + H₂O. Combustión completa con llama muy caliente.',
    col: 'El acetileno (C₂H₂) se usa en soldadura oxiacetilénica en industrias metalmecánicas colombianas.'
  },
  {
    id: 'rx-041',
    group: 'reaccion', level: 'easy',
    ecuacion: 'C₂H₄ + 3O₂ → 2CO₂ + 2H₂O',
    tipo_rx: 'combustion',
    hint: 'Etileno (C₂H₄) + O₂ → CO₂ + H₂O. Combustión completa de un alqueno. C: 2=2, H: 4=4, O: 6=6.',
    col: 'El etileno C₂H₄ es un gas derivado del petróleo refinado en Barrancabermeja usado en la industria petroquímica colombiana.'
  },
  {
    id: 'rx-042',
    group: 'reaccion', level: 'medium',
    ecuacion: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O',
    tipo_rx: 'combustion',
    hint: 'Alcohol etílico (etanol) + O₂ → CO₂ + H₂O. Combustión completa del etanol.',
    col: 'El etanol de caña de azúcar producido en el Valle del Cauca se usa como biocombustible en mezclas E10 en Colombia.'
  },
  {
    id: 'rx-043',
    group: 'reaccion', level: 'medium',
    ecuacion: 'C₄H₁₀ + 13/2 O₂ → 4CO₂ + 5H₂O',
    tipo_rx: 'combustion',
    hint: 'Butano (C₄H₁₀) + O₂ → CO₂ + H₂O. También se escribe: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O.',
    col: 'El butano se usa como gas combustible en encendedores y camping en Colombia.'
  },

  // -- Neutralización (7) --
  {
    id: 'rx-039',
    group: 'reaccion', level: 'easy',
    ecuacion: 'HCl + NaOH → NaCl + H₂O',
    tipo_rx: 'neutralizacion',
    hint: 'Ácido monoprótico + base monovalente → sal + agua. Mol a mol. Ácido clorhídrico + sosa.',
    col: 'La neutralización de HCl con NaOH se practica en titulaciones ácido-base en laboratorios del SENA Colombia.'
  },
  {
    id: 'rx-040',
    group: 'reaccion', level: 'medium',
    ecuacion: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O',
    tipo_rx: 'neutralizacion',
    hint: 'Ácido dibásico + 2 bases → sal + agua. El H₂SO₄ aporta 2 H⁺, necesita 2 OH⁻.',
    col: 'El sulfato de sodio Na₂SO₄ formado se usa en detergentes industriales producidos en Colombia.'
  },
  {
    id: 'rx-044',
    group: 'reaccion', level: 'medium',
    ecuacion: '2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O',
    tipo_rx: 'neutralizacion',
    hint: 'Ácido monoprótico + base divalente → sal + agua. Se necesitan 2 mol de HNO₃ por mol de Ca(OH)₂.',
    col: 'El nitrato de calcio Ca(NO₃)₂ es un fertilizante nitrogenado usado en cultivos de flores en la Sabana de Bogotá.'
  },
  {
    id: 'rx-045',
    group: 'reaccion', level: 'medium',
    ecuacion: 'H₂SO₄ + 2KOH → K₂SO₄ + 2H₂O',
    tipo_rx: 'neutralizacion',
    hint: 'Ácido dibásico + base monovalente → sal + agua. Se necesitan 2 mol de KOH por mol de H₂SO₄.',
    col: 'El sulfato de potasio K₂SO₄ es un fertilizante potásico usado en cultivos de banano en el Urabá antioqueño.'
  },
  {
    id: 'rx-046',
    group: 'reaccion', level: 'easy',
    ecuacion: 'CH₃COOH + NaOH → CH₃COONa + H₂O',
    tipo_rx: 'neutralizacion',
    hint: 'Ácido débil (acético) + base fuerte → sal (acetato) + agua. Misma proporción 1:1.',
    col: 'El vinagre (CH₃COOH) de caña de azúcar colombiana neutralizado con NaOH forma acetato de sodio.'
  },
  {
    id: 'rx-047',
    group: 'reaccion', level: 'hard',
    ecuacion: 'H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O',
    tipo_rx: 'neutralizacion',
    hint: 'Ácido triprótico + 3 bases → sal + agua. El H₃PO₄ aporta 3 H⁺, necesita 3 OH⁻.',
    col: 'El fosfato trisódico Na₃PO₄ se usa en limpiadores industriales y tratamiento de agua en Colombia.'
  },
  {
    id: 'rx-048',
    group: 'reaccion', level: 'medium',
    ecuacion: '2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O',
    tipo_rx: 'neutralizacion',
    hint: 'Ácido monoprótico + base divalente → sal + agua. 2 HCl neutralizan los 2 OH⁻ del Ca(OH)₂.',
    col: 'El cloruro de calcio CaCl₂ se usa como antiácido estomacal y deshidratante en laboratorios colombianos.'
  },

  // ─────────────────────────────────────────────
  // BALANCEO — ecuaciones para balancear (30)
  // ─────────────────────────────────────────────

  // -- easy (10) --
  {
    id: 'bal-001',
    group: 'balanceo', level: 'easy',
    ecuacion_sin_coef: 'H₂ + O₂ → H₂O',
    coeficientes: [2, 1, 2],
    especies: ['H₂', 'O₂', 'H₂O'],
    hint: 'Cuenta H: 2 izq. → necesitas 2 H₂O. Luego O: 2 der. → 1 O₂.',
    col: 'El hidrógeno como combustible limpio es investigado por universidades colombianas.'
  },
  {
    id: 'bal-002',
    group: 'balanceo', level: 'easy',
    ecuacion_sin_coef: 'Na + Cl₂ → NaCl',
    coeficientes: [2, 1, 2],
    especies: ['Na', 'Cl₂', 'NaCl'],
    hint: 'Cl₂ aporta 2 Cl → necesitas 2 NaCl → 2 Na. Coeficientes: 2, 1, 2.',
    col: 'El NaCl se extrae en las salinas de Zipaquirá, Cundinamarca.'
  },
  {
    id: 'bal-003',
    group: 'balanceo', level: 'easy',
    ecuacion_sin_coef: 'Mg + O₂ → MgO',
    coeficientes: [2, 1, 2],
    especies: ['Mg', 'O₂', 'MgO'],
    hint: 'O₂ aporta 2 O → 2 MgO → 2 Mg. Coeficientes: 2, 1, 2.',
    col: 'El magnesio arde con llama blanca brillante, demostración clásica en laboratorios colombianos.'
  },
  {
    id: 'bal-004',
    group: 'balanceo', level: 'easy',
    ecuacion_sin_coef: 'H₂O → H₂ + O₂',
    coeficientes: [2, 2, 1],
    especies: ['H₂O', 'H₂', 'O₂'],
    hint: 'O₂ tiene 2 O → 2 H₂O → 4 H → 2 H₂. Coeficientes: 2, 2, 1.',
    col: 'La electrólisis del agua produce H₂ para celdas de combustible en proyectos colombianos.'
  },
  {
    id: 'bal-005',
    group: 'balanceo', level: 'easy',
    ecuacion_sin_coef: 'CH₄ + O₂ → CO₂ + H₂O',
    coeficientes: [1, 2, 1, 2],
    especies: ['CH₄', 'O₂', 'CO₂', 'H₂O'],
    hint: 'C: 1=1. H: 4 → 2 H₂O. O der: 2+2=4 → 2 O₂. Coeficientes: 1, 2, 1, 2.',
    col: 'El gas natural (CH₄) se quema en hogares colombianos para cocinar y calentar agua.'
  },
  {
    id: 'bal-006',
    group: 'balanceo', level: 'easy',
    ecuacion_sin_coef: 'Fe + O₂ → Fe₂O₃',
    coeficientes: [4, 3, 2],
    especies: ['Fe', 'O₂', 'Fe₂O₃'],
    hint: 'Fe₂O₃: 2 Fe y 3 O. MCM(2,3)=6 → 2 Fe₂O₃ → 4 Fe; 3 O₂. Coeficientes: 4, 3, 2.',
    col: 'La oxidación del hierro (herrumbre) afecta infraestructuras en ciudades colombianas costeras.'
  },
  {
    id: 'bal-007',
    group: 'balanceo', level: 'easy',
    ecuacion_sin_coef: 'HCl + NaOH → NaCl + H₂O',
    coeficientes: [1, 1, 1, 1],
    especies: ['HCl', 'NaOH', 'NaCl', 'H₂O'],
    hint: 'Ya está balanceada: 1 Na, 1 Cl, 1 O, 2 H en cada lado. Coeficientes: 1, 1, 1, 1.',
    col: 'La neutralización ácido-base se practica en laboratorios del SENA en toda Colombia.'
  },
  {
    id: 'bal-008',
    group: 'balanceo', level: 'easy',
    ecuacion_sin_coef: 'CaO + H₂O → Ca(OH)₂',
    coeficientes: [1, 1, 1],
    especies: ['CaO', 'H₂O', 'Ca(OH)₂'],
    hint: 'Ya balanceada: 1 Ca, 1 O+2 O=2 O(+), 2 H. Coeficientes: 1, 1, 1.',
    col: 'La cal apagada Ca(OH)₂ se usa para encalar cultivos en el campo colombiano.'
  },
  {
    id: 'bal-009',
    group: 'balanceo', level: 'easy',
    ecuacion_sin_coef: 'N₂ + H₂ → NH₃',
    coeficientes: [1, 3, 2],
    especies: ['N₂', 'H₂', 'NH₃'],
    hint: 'N₂: 2 N → 2 NH₃. 2 NH₃: 6 H → 3 H₂. Coeficientes: 1, 3, 2.',
    col: 'El amoníaco NH₃ es base de fertilizantes usados en la Sabana de Bogotá.'
  },
  {
    id: 'bal-010',
    group: 'balanceo', level: 'easy',
    ecuacion_sin_coef: 'Zn + HCl → ZnCl₂ + H₂',
    coeficientes: [1, 2, 1, 1],
    especies: ['Zn', 'HCl', 'ZnCl₂', 'H₂'],
    hint: 'ZnCl₂ necesita 2 Cl → 2 HCl → 2 H → 1 H₂. Coeficientes: 1, 2, 1, 1.',
    col: 'El zinc reacciona con HCl en laboratorios colombianos para producir hidrógeno gaseoso.'
  },

  // -- medium (12) --
  {
    id: 'bal-011',
    group: 'balanceo', level: 'easy',
    ecuacion_sin_coef: 'Al + O₂ → Al₂O₃',
    coeficientes: [4, 3, 2],
    especies: ['Al', 'O₂', 'Al₂O₃'],
    hint: 'Al₂O₃: 2 Al, 3 O. MCM(2,3)=6 → 2 Al₂O₃ → 4 Al; 3 O₂. Coeficientes: 4, 3, 2.',
    col: 'El óxido de aluminio Al₂O₃ (alúmina) se refina en Colombia para obtener aluminio metálico.'
  },
  {
    id: 'bal-012',
    group: 'balanceo', level: 'easy',
    ecuacion_sin_coef: 'Fe + CuSO₄ → FeSO₄ + Cu',
    coeficientes: [1, 1, 1, 1],
    especies: ['Fe', 'CuSO₄', 'FeSO₄', 'Cu'],
    hint: 'El grupo SO₄ se mantiene. Fe→Fe, Cu→Cu. Ya balanceada: 1, 1, 1, 1.',
    col: 'La cementación del cobre con hierro recupera Cu de soluciones en minas colombianas.'
  },
  {
    id: 'bal-013',
    group: 'balanceo', level: 'easy',
    ecuacion_sin_coef: 'H₂SO₄ + NaOH → Na₂SO₄ + H₂O',
    coeficientes: [1, 2, 1, 2],
    especies: ['H₂SO₄', 'NaOH', 'Na₂SO₄', 'H₂O'],
    hint: 'Na₂SO₄ necesita 2 Na → 2 NaOH. 2 NaOH + H₂SO₄ → 2 H₂O. Coeficientes: 1, 2, 1, 2.',
    col: 'El Na₂SO₄ se usa en detergentes y papel producidos en la industria colombiana.'
  },
  {
    id: 'bal-014',
    group: 'balanceo', level: 'medium',
    ecuacion_sin_coef: 'KMnO₄ + HCl → KCl + MnCl₂ + H₂O + Cl₂',
    coeficientes: [2, 16, 2, 2, 8, 5],
    especies: ['KMnO₄', 'HCl', 'KCl', 'MnCl₂', 'H₂O', 'Cl₂'],
    hint: 'Reacción redox compleja. Mn pasa de +7 a +2 (gana 5e⁻). Cl⁻ → Cl₂ (pierde 1e⁻). Coeficientes: 2, 16, 2, 2, 8, 5.',
    col: 'El KMnO₄ se usa en potabilización de agua en plantas de tratamiento colombianas.'
  },
  {
    id: 'bal-015',
    group: 'balanceo', level: 'medium',
    ecuacion_sin_coef: 'C₃H₈ + O₂ → CO₂ + H₂O',
    coeficientes: [1, 5, 3, 4],
    especies: ['C₃H₈', 'O₂', 'CO₂', 'H₂O'],
    hint: 'C: 3→3CO₂. H: 8→4H₂O. O der: 6+4=10 → 5O₂. Coeficientes: 1, 5, 3, 4.',
    col: 'El propano (C₃H₈) en cilindros se usa en cocinas de zonas rurales colombianas.'
  },
  {
    id: 'bal-016',
    group: 'balanceo', level: 'medium',
    ecuacion_sin_coef: 'CaCO₃ + HCl → CaCl₂ + H₂O + CO₂',
    coeficientes: [1, 2, 1, 1, 1],
    especies: ['CaCO₃', 'HCl', 'CaCl₂', 'H₂O', 'CO₂'],
    hint: 'CaCl₂ necesita 2 Cl → 2 HCl → 1 H₂O. CO₃ → CO₂. Coeficientes: 1, 2, 1, 1, 1.',
    col: 'El mármol (CaCO₃) de Cundinamarca reacciona con ácido clorhídrico diluido en laboratorio.'
  },
  {
    id: 'bal-017',
    group: 'balanceo', level: 'medium',
    ecuacion_sin_coef: 'Na + H₂O → NaOH + H₂',
    coeficientes: [2, 2, 2, 1],
    especies: ['Na', 'H₂O', 'NaOH', 'H₂'],
    hint: 'H₂ tiene 2 H → 2 H₂O → 2 Na. 2 NaOH. Coeficientes: 2, 2, 2, 1.',
    col: 'El sodio metálico reacciona violentamente con agua; experimento demostrativo en universidades colombianas.'
  },
  {
    id: 'bal-018',
    group: 'balanceo', level: 'medium',
    ecuacion_sin_coef: 'Fe₂O₃ + CO → Fe + CO₂',
    coeficientes: [1, 3, 2, 3],
    especies: ['Fe₂O₃', 'CO', 'Fe', 'CO₂'],
    hint: 'Fe: 2→2Fe. O en Fe₂O₃: 3; CO→CO₂ consume 3 CO. Coeficientes: 1, 3, 2, 3.',
    col: 'La reducción de Fe₂O₃ con CO es el proceso del alto horno en Paz de Río, Boyacá.'
  },
  {
    id: 'bal-019',
    group: 'balanceo', level: 'medium',
    ecuacion_sin_coef: 'Cu + AgNO₃ → Cu(NO₃)₂ + Ag',
    coeficientes: [1, 2, 1, 2],
    especies: ['Cu', 'AgNO₃', 'Cu(NO₃)₂', 'Ag'],
    hint: 'Cu(NO₃)₂ necesita 2 NO₃ → 2 AgNO₃ → 2 Ag. Coeficientes: 1, 2, 1, 2.',
    col: 'La plata que desplaza el cobre aparece como cristales brillantes en laboratorios colombianos.'
  },
  {
    id: 'bal-020',
    group: 'balanceo', level: 'medium',
    ecuacion_sin_coef: 'NH₃ + O₂ → NO + H₂O',
    coeficientes: [4, 5, 4, 6],
    especies: ['NH₃', 'O₂', 'NO', 'H₂O'],
    hint: 'N: 4→4NO. H: 12→6H₂O. O der: 4+6=10 → 5O₂. Coeficientes: 4, 5, 4, 6.',
    col: 'La oxidación catalítica del NH₃ produce NO, paso clave en la fabricación de ácido nítrico.'
  },
  {
    id: 'bal-021',
    group: 'balanceo', level: 'medium',
    ecuacion_sin_coef: 'P + O₂ → P₂O₅',
    coeficientes: [4, 5, 2],
    especies: ['P', 'O₂', 'P₂O₅'],
    hint: 'P₂O₅: 2 P, 5 O. MCM(2,5)=10 → 2 P₂O₅ → 4 P; 5 O₂. Coeficientes: 4, 5, 2.',
    col: 'El pentóxido de fósforo P₂O₅ es precursor del ácido fosfórico para fertilizantes colombianos.'
  },
  {
    id: 'bal-022',
    group: 'balanceo', level: 'medium',
    ecuacion_sin_coef: 'H₂SO₄ + CaCO₃ → CaSO₄ + H₂O + CO₂',
    coeficientes: [1, 1, 1, 1, 1],
    especies: ['H₂SO₄', 'CaCO₃', 'CaSO₄', 'H₂O', 'CO₂'],
    hint: 'Ca: 1=1. SO₄: 1=1. CO₃→CO₂. 2H→H₂O. Coeficientes: 1, 1, 1, 1, 1.',
    col: 'El ácido sulfúrico disuelve la caliza (CaCO₃) formando yeso (CaSO₄), usado en construcción.'
  },

  // -- hard (8) --
  {
    id: 'bal-023',
    group: 'balanceo', level: 'hard',
    ecuacion_sin_coef: 'C₈H₁₈ + O₂ → CO₂ + H₂O',
    coeficientes: [2, 25, 16, 18],
    especies: ['C₈H₁₈', 'O₂', 'CO₂', 'H₂O'],
    hint: '2 C₈H₁₈: 16C→16CO₂; 36H→18H₂O. O der: 32+18=50 → 25O₂. Coeficientes: 2, 25, 16, 18.',
    col: 'La gasolina (octano C₈H₁₈) refinada en Barrancabermeja requiere balanceo con coeficientes grandes.'
  },
  {
    id: 'bal-024',
    group: 'balanceo', level: 'hard',
    ecuacion_sin_coef: 'Fe₂(SO₄)₃ + NaOH → Fe(OH)₃ + Na₂SO₄',
    coeficientes: [1, 6, 2, 3],
    especies: ['Fe₂(SO₄)₃', 'NaOH', 'Fe(OH)₃', 'Na₂SO₄'],
    hint: 'Fe: 2→2Fe(OH)₃. SO₄: 3→3Na₂SO₄→6Na→6NaOH. Coeficientes: 1, 6, 2, 3.',
    col: 'El Fe(OH)₃ precipitado ocre se forma al tratar aguas ferrosas en acueductos colombianos.'
  },
  {
    id: 'bal-025',
    group: 'balanceo', level: 'hard',
    ecuacion_sin_coef: 'MnO₂ + HCl → MnCl₂ + H₂O + Cl₂',
    coeficientes: [1, 4, 1, 2, 1],
    especies: ['MnO₂', 'HCl', 'MnCl₂', 'H₂O', 'Cl₂'],
    hint: 'Mn: +4→+2 (gana 2e⁻). 2 Cl⁻→Cl₂ (pierde 2e⁻). 4 HCl en total. Coeficientes: 1, 4, 1, 2, 1.',
    col: 'Esta reacción redox se usa en laboratorios colombianos para generar Cl₂ con precaución.'
  },
  {
    id: 'bal-026',
    group: 'balanceo', level: 'hard',
    ecuacion_sin_coef: 'Al + H₂SO₄ → Al₂(SO₄)₃ + H₂',
    coeficientes: [2, 3, 1, 3],
    especies: ['Al', 'H₂SO₄', 'Al₂(SO₄)₃', 'H₂'],
    hint: 'Al₂(SO₄)₃: 2 Al, 3 SO₄ → 3H₂SO₄ → 6H → 3H₂. Coeficientes: 2, 3, 1, 3.',
    col: 'El aluminio reacciona con H₂SO₄ en laboratorios de química industrial en Colombia.'
  },
  {
    id: 'bal-027',
    group: 'balanceo', level: 'hard',
    ecuacion_sin_coef: 'K₂Cr₂O₇ + HCl → KCl + CrCl₃ + H₂O + Cl₂',
    coeficientes: [1, 14, 2, 2, 7, 3],
    especies: ['K₂Cr₂O₇', 'HCl', 'KCl', 'CrCl₃', 'H₂O', 'Cl₂'],
    hint: 'Cr: +6→+3 (gana 3e⁻ cada uno, 6e⁻ total). Cl⁻→Cl₂ (pierde 1e⁻ cada par). Coeficientes: 1, 14, 2, 2, 7, 3.',
    col: 'El dicromato de potasio K₂Cr₂O₇ se usa como oxidante en análisis de DQO en aguas residuales colombianas.'
  },
  {
    id: 'bal-028',
    group: 'balanceo', level: 'hard',
    ecuacion_sin_coef: 'Ca₃(PO₄)₂ + H₂SO₄ → CaSO₄ + H₃PO₄',
    coeficientes: [1, 3, 3, 2],
    especies: ['Ca₃(PO₄)₂', 'H₂SO₄', 'CaSO₄', 'H₃PO₄'],
    hint: 'Ca: 3→3CaSO₄→3H₂SO₄. PO₄: 2→2H₃PO₄. Coeficientes: 1, 3, 3, 2.',
    col: 'La roca fosfórica Ca₃(PO₄)₂ se trata con H₂SO₄ para producir superfosfato, fertilizante colombiano.'
  },
  {
    id: 'bal-029',
    group: 'balanceo', level: 'hard',
    ecuacion_sin_coef: 'CuO + NH₃ → Cu + N₂ + H₂O',
    coeficientes: [3, 2, 3, 1, 3],
    especies: ['CuO', 'NH₃', 'Cu', 'N₂', 'H₂O'],
    hint: 'N: 2 NH₃→1 N₂. H: 6 H→3 H₂O→3 O. Cu: 3 CuO→3 Cu. Coeficientes: 3, 2, 3, 1, 3.',
    col: 'La reducción del óxido de cobre con NH₃ ilustra reacciones redox en laboratorios universitarios.'
  },
  {
    id: 'bal-030',
    group: 'balanceo', level: 'hard',
    ecuacion_sin_coef: 'HNO₃ + Cu → Cu(NO₃)₂ + NO + H₂O',
    coeficientes: [8, 3, 3, 2, 4],
    especies: ['HNO₃', 'Cu', 'Cu(NO₃)₂', 'NO', 'H₂O'],
    hint: 'Cu: +0→+2 (pierde 2e⁻). N en HNO₃: +5→+2 en NO (gana 3e⁻). MCM(2,3)=6: 3Cu, 2NO. Coeficientes: 8, 3, 3, 2, 4.',
    col: 'El cobre reacciona con HNO₃ diluido produciendo gas NO (incoloro). Reacción redox clásica.'
  },

  // ─────────────────────────────────────────────
  // MOL-MASA — masa molar de compuestos (25)
  // ─────────────────────────────────────────────

  {
    formula: 'H₂O',
    group: 'mol-masa', level: 'easy',
    masa_molar: 18.015,
    formula_calc: '2(1.008) + 15.999 = 18.015',
    hint: 'H₂O: 2 átomos de H (1.008 g/mol c/u) + 1 átomo de O (15.999 g/mol) = 18.015 g/mol',
    col: 'El agua de los ríos colombianos (Magdalena, Cauca) tiene masa molar de 18.015 g/mol.'
  },
  {
    formula: 'NaCl',
    group: 'mol-masa', level: 'easy',
    masa_molar: 58.44,
    formula_calc: '22.990 + 35.45 = 58.44',
    hint: 'NaCl: 1 átomo de Na (22.990 g/mol) + 1 átomo de Cl (35.45 g/mol) = 58.44 g/mol',
    col: 'La sal de Zipaquirá (NaCl) tiene una masa molar de 58.44 g/mol. En 1 mol caben 6.022×10²³ pares Na⁺Cl⁻.'
  },
  {
    formula: 'CO₂',
    group: 'mol-masa', level: 'easy',
    masa_molar: 44.009,
    formula_calc: '12.011 + 2(15.999) = 44.009',
    hint: 'CO₂: 1 C (12.011) + 2 O (2×15.999=31.998) = 44.009 g/mol',
    col: 'El CO₂ liberado por la industria y transporte colombiano tiene masa molar de 44.009 g/mol.'
  },
  {
    formula: 'H₂SO₄',
    group: 'mol-masa', level: 'medium',
    masa_molar: 98.072,
    formula_calc: '2(1.008) + 32.06 + 4(15.999) = 2.016 + 32.06 + 63.996 = 98.072',
    hint: 'H₂SO₄: 2H + 1S + 4O = 2.016 + 32.06 + 63.996 = 98.072 g/mol',
    col: 'El ácido sulfúrico H₂SO₄ (98.072 g/mol) se usa en minería y baterías en toda Colombia.'
  },
  {
    formula: 'HCl',
    group: 'mol-masa', level: 'easy',
    masa_molar: 36.458,
    formula_calc: '1.008 + 35.45 = 36.458',
    hint: 'HCl: 1 H (1.008 g/mol) + 1 Cl (35.45 g/mol) = 36.458 g/mol',
    col: 'El ácido muriático (HCl) usado en limpieza de pisos en hogares colombianos tiene M = 36.458 g/mol.'
  },
  {
    formula: 'NaOH',
    group: 'mol-masa', level: 'easy',
    masa_molar: 39.997,
    formula_calc: '22.990 + 15.999 + 1.008 = 39.997',
    hint: 'NaOH: 1 Na + 1 O + 1 H = 22.990 + 15.999 + 1.008 = 39.997 g/mol',
    col: 'La soda cáustica (NaOH) usada en fabricación de jabón artesanal colombiano tiene M = 39.997 g/mol.'
  },
  {
    formula: 'CaCO₃',
    group: 'mol-masa', level: 'medium',
    masa_molar: 100.086,
    formula_calc: '40.078 + 12.011 + 3(15.999) = 40.078 + 12.011 + 47.997 = 100.086',
    hint: 'CaCO₃: 1 Ca + 1 C + 3 O = 40.078 + 12.011 + 47.997 = 100.086 g/mol',
    col: 'La piedra caliza (CaCO₃) de Cundinamarca y Boyacá tiene una masa molar de 100.086 g/mol.'
  },
  {
    formula: 'O₂',
    group: 'mol-masa', level: 'easy',
    masa_molar: 31.998,
    formula_calc: '2(15.999) = 31.998',
    hint: 'O₂: 2 átomos de O × 15.999 g/mol = 31.998 g/mol',
    col: 'El oxígeno molecular O₂ usado en hospitales colombianos tiene masa molar de 31.998 g/mol.'
  },
  {
    formula: 'Fe₂O₃',
    group: 'mol-masa', level: 'medium',
    masa_molar: 159.687,
    formula_calc: '2(55.845) + 3(15.999) = 111.690 + 47.997 = 159.687',
    hint: 'Fe₂O₃: 2 Fe (2×55.845=111.690) + 3 O (3×15.999=47.997) = 159.687 g/mol',
    col: 'El óxido de hierro Fe₂O₃ (herrumbre) presente en estructuras colombianas tiene M = 159.687 g/mol.'
  },
  {
    formula: 'Ca(OH)₂',
    group: 'mol-masa', level: 'medium',
    masa_molar: 74.092,
    formula_calc: '40.078 + 2(15.999) + 2(1.008) = 40.078 + 31.998 + 2.016 = 74.092',
    hint: 'Ca(OH)₂: 1 Ca + 2 O + 2 H = 40.078 + 31.998 + 2.016 = 74.092 g/mol',
    col: 'La cal apagada Ca(OH)₂ usada en encalado de cultivos colombianos tiene M = 74.092 g/mol.'
  },
  {
    formula: 'NH₃',
    group: 'mol-masa', level: 'easy',
    masa_molar: 17.031,
    formula_calc: '14.007 + 3(1.008) = 14.007 + 3.024 = 17.031',
    hint: 'NH₃: 1 N (14.007) + 3 H (3×1.008=3.024) = 17.031 g/mol',
    col: 'El amoníaco NH₃ base de los fertilizantes colombianos tiene masa molar de 17.031 g/mol.'
  },
  {
    formula: 'CH₄',
    group: 'mol-masa', level: 'easy',
    masa_molar: 16.043,
    formula_calc: '12.011 + 4(1.008) = 12.011 + 4.032 = 16.043',
    hint: 'CH₄: 1 C (12.011) + 4 H (4×1.008=4.032) = 16.043 g/mol',
    col: 'El gas natural (CH₄) distribuido en ciudades colombianas tiene masa molar de 16.043 g/mol.'
  },
  {
    formula: 'C₈H₁₈',
    group: 'mol-masa', level: 'hard',
    masa_molar: 114.232,
    formula_calc: '8(12.011) + 18(1.008) = 96.088 + 18.144 = 114.232',
    hint: 'C₈H₁₈ (octano): 8 C (8×12.011=96.088) + 18 H (18×1.008=18.144) = 114.232 g/mol',
    col: 'La gasolina (octano C₈H₁₈) refinada en Barrancabermeja tiene masa molar de 114.232 g/mol.'
  },
  {
    formula: 'KMnO₄',
    group: 'mol-masa', level: 'hard',
    masa_molar: 158.032,
    formula_calc: '39.098 + 54.938 + 4(15.999) = 39.098 + 54.938 + 63.996 = 158.032',
    hint: 'KMnO₄: 1 K (39.098) + 1 Mn (54.938) + 4 O (4×15.999=63.996) = 158.032 g/mol',
    col: 'El permanganato de potasio KMnO₄ usado en plantas de agua de Colombia tiene M = 158.032 g/mol.'
  },
  {
    formula: 'Na₂SO₄',
    group: 'mol-masa', level: 'medium',
    masa_molar: 142.036,
    formula_calc: '2(22.990) + 32.06 + 4(15.999) = 45.980 + 32.06 + 63.996 = 142.036',
    hint: 'Na₂SO₄: 2 Na (2×22.990=45.980) + 1 S (32.06) + 4 O (4×15.999=63.996) = 142.036 g/mol',
    col: 'El sulfato de sodio Na₂SO₄ (142.036 g/mol) se usa en detergentes y vidrio en Colombia.'
  },
  {
    formula: 'Al₂O₃',
    group: 'mol-masa', level: 'medium',
    masa_molar: 101.961,
    formula_calc: '2(26.982) + 3(15.999) = 53.964 + 47.997 = 101.961',
    hint: 'Al₂O₃: 2 Al (2×26.982=53.964) + 3 O (3×15.999=47.997) = 101.961 g/mol',
    col: 'La alúmina Al₂O₃ refractaria usada en industrias colombianas tiene M = 101.961 g/mol.'
  },
  {
    formula: 'MgO',
    group: 'mol-masa', level: 'easy',
    masa_molar: 40.304,
    formula_calc: '24.305 + 15.999 = 40.304',
    hint: 'MgO: 1 Mg (24.305) + 1 O (15.999) = 40.304 g/mol',
    col: 'El óxido de magnesio MgO (40.304 g/mol) se usa como refractario en industrias metalúrgicas colombianas.'
  },
  {
    formula: 'N₂',
    group: 'mol-masa', level: 'easy',
    masa_molar: 28.014,
    formula_calc: '2(14.007) = 28.014',
    hint: 'N₂: 2 átomos de N × 14.007 g/mol = 28.014 g/mol',
    col: 'El nitrógeno N₂ (28.014 g/mol) representa el 78% del aire que respiramos en Colombia.'
  },
  {
    formula: 'H₂',
    group: 'mol-masa', level: 'easy',
    masa_molar: 2.016,
    formula_calc: '2(1.008) = 2.016',
    hint: 'H₂: 2 átomos de H × 1.008 g/mol = 2.016 g/mol. El gas más ligero que existe.',
    col: 'El hidrógeno H₂ (2.016 g/mol) es el combustible limpio investigado en proyectos colombianos.'
  },
  {
    formula: 'Cl₂',
    group: 'mol-masa', level: 'easy',
    masa_molar: 70.90,
    formula_calc: '2(35.45) = 70.90',
    hint: 'Cl₂: 2 átomos de Cl × 35.45 g/mol = 70.90 g/mol',
    col: 'El cloro Cl₂ (70.90 g/mol) se usa para potabilizar el agua en acueductos de ciudades colombianas.'
  },
  {
    formula: 'FeCl₃',
    group: 'mol-masa', level: 'medium',
    masa_molar: 162.195,
    formula_calc: '55.845 + 3(35.45) = 55.845 + 106.35 = 162.195',
    hint: 'FeCl₃: 1 Fe (55.845) + 3 Cl (3×35.45=106.35) = 162.195 g/mol',
    col: 'El cloruro de hierro (III) FeCl₃ (162.195 g/mol) se usa como coagulante en plantas de agua colombianas.'
  },
  {
    formula: 'CuSO₄',
    group: 'mol-masa', level: 'medium',
    masa_molar: 159.602,
    formula_calc: '63.546 + 32.06 + 4(15.999) = 63.546 + 32.06 + 63.996 = 159.602',
    hint: 'CuSO₄: 1 Cu (63.546) + 1 S (32.06) + 4 O (4×15.999=63.996) = 159.602 g/mol',
    col: 'El sulfato de cobre CuSO₄ (159.602 g/mol) se usa en cultivos de flores colombianos como fungicida.'
  },
  {
    formula: 'ZnO',
    group: 'mol-masa', level: 'easy',
    masa_molar: 81.379,
    formula_calc: '65.38 + 15.999 = 81.379',
    hint: 'ZnO: 1 Zn (65.38) + 1 O (15.999) = 81.379 g/mol',
    col: 'El óxido de zinc ZnO (81.379 g/mol) se usa en protector solar y pinturas en Colombia.'
  },
  {
    formula: 'K₂Cr₂O₇',
    group: 'mol-masa', level: 'hard',
    masa_molar: 294.181,
    formula_calc: '2(39.098) + 2(51.996) + 7(15.999) = 78.196 + 103.992 + 111.993 = 294.181',
    hint: 'K₂Cr₂O₇: 2 K (2×39.098=78.196) + 2 Cr (2×51.996=103.992) + 7 O (7×15.999=111.993) = 294.181 g/mol',
    col: 'El dicromato de potasio K₂Cr₂O₇ (294.181 g/mol) se usa en análisis de DQO en aguas colombianas.'
  },
  {
    formula: 'HNO₃',
    group: 'mol-masa', level: 'medium',
    masa_molar: 63.012,
    formula_calc: '1.008 + 14.007 + 3(15.999) = 1.008 + 14.007 + 47.997 = 63.012',
    hint: 'HNO₃: 1 H (1.008) + 1 N (14.007) + 3 O (3×15.999=47.997) = 63.012 g/mol',
    col: 'El ácido nítrico HNO₃ (63.012 g/mol) se usa en producción de fertilizantes nitrogenados en Colombia.'
  },


];

// Total: ~450 entries — nomenclatura + reaccion(40) + balanceo(30) + mol-masa(25)
