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
    sist: ['óxido de dilitio'],
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
    hint: "El Mn tiene varios EO (+2, +3, +4, +6, +7). Como catión, +2 es el menor → -oso → manganoso."
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
    formula: 'Bi₂O₃',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido de bismuto'],
    stock: ['óxido de bismuto (III)'],
    sist: ['trióxido de dibismuto'],
    hint: "Bi³⁺ (EO +3, el más común; el bismuto también tiene +5) + O²⁻. 2(+3)+3(−2)=0. Stock: óxido de bismuto (III)."
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
    trad: ['óxido hipovanadioso'],
    stock: ['óxido de vanadio (II)'],
    sist: ['óxido de vanadio'],
    hint: 'V tiene 4 EO: +2,+3,+4,+5 → serie hipo-oso/-oso/-ico/per-ico. V²⁺ es el mínimo → hipovanadioso.'
  },
  {
    formula: 'V₂O₃',
    group: 'ox-bas', level: 'hard',
    trad: ['óxido vanadioso'],
    stock: ['óxido de vanadio (III)'],
    sist: ['trióxido de divanadio'],
    hint: 'V³⁺, segundo EO de la serie hipo-oso/-oso/-ico/per-ico → vanadioso (sin prefijo). Stock siempre preciso. 2(+3)+3(−2)=0.'
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
    hint: 'H + F⁻. Ácido sin oxígeno: ácido + raíz del no metal + -hídrico. F→fluor→fluorhídrico. IUPAC (gas/puro): fluoruro de hidrógeno.'
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
    hint: "Bi³⁺ es el EO más común del Bi (también existe +5). En trad. suele decirse hidróxido de bismuto."
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
    sist: [],
    hint: 'H₂ + SO₄²⁻ (sulfato). S con EO=+6 → -ico → sulfúrico. Ácido fuerte.'
  },
  {
    formula: 'H₂SO₃',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido sulfuroso'],
    stock: [],
    sist: [],
    hint: 'H₂ + SO₃²⁻ (sulfito). S con EO=+4 → -oso → sulfuroso.'
  },
  {
    formula: 'HNO₃',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido nítrico'],
    stock: [],
    sist: [],
    hint: 'H + NO₃⁻ (nitrato). N con EO=+5 → -ico → nítrico. Ácido fuerte.'
  },
  {
    formula: 'HNO₂',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido nitroso'],
    stock: [],
    sist: [],
    hint: 'H + NO₂⁻ (nitrito). N con EO=+3 → -oso → nitroso. Ácido débil.'
  },
  {
    formula: 'H₃PO₄',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido fosfórico'],
    stock: [],
    sist: [],
    hint: 'H₃ + PO₄³⁻ (fosfato). P con EO=+5 → -ico → fosfórico.'
  },
  {
    formula: 'H₂CO₃',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido carbónico'],
    stock: [],
    sist: [],
    hint: 'H₂ + CO₃²⁻ (carbonato). C con EO=+4 → -ico → carbónico. Inestable, se disocia.'
  },
  {
    formula: 'H₃BO₃',
    group: 'ac-ox', level: 'easy',
    trad: ['ácido bórico'],
    stock: [],
    sist: [],
    hint: 'H₃ + BO₃³⁻ (borato). B con EO=+3 → -ico → bórico. Ácido débil.'
  },

  // -- medium --
  {
    formula: 'H₃PO₃',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido fosforoso'],
    stock: [],
    sist: [],
    hint: 'H₃ + PO₃³⁻ (fosfito). P con EO=+3 → -oso → fosforoso.'
  },
  {
    formula: 'HClO₄',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido perclórico'],
    stock: [],
    sist: [],
    hint: 'H + ClO₄⁻ (perclorato). Cl con EO=+7 (máximo, ≥4 estados) → per-ico → perclórico.'
  },
  {
    formula: 'HClO₃',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido clórico'],
    stock: [],
    sist: [],
    hint: 'H + ClO₃⁻ (clorato). Cl con EO=+5 → -ico → clórico.'
  },
  {
    formula: 'HClO₂',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido cloroso'],
    stock: [],
    sist: [],
    hint: 'H + ClO₂⁻ (clorito). Cl con EO=+3 → -oso → cloroso.'
  },
  {
    formula: 'HClO',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido hipocloroso'],
    stock: [],
    sist: [],
    hint: 'H + ClO⁻ (hipoclorito). Cl con EO=+1 (mínimo) → hipo-oso → hipocloroso.'
  },
  {
    formula: 'H₂SiO₃',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido silícico'],
    stock: [],
    sist: [],
    hint: 'H₂ + SiO₃²⁻ (silicato). Si con EO=+4 → -ico → silícico. Ácido débil insoluble.'
  },
  {
    formula: 'HBrO₄',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido perbrómico'],
    stock: [],
    sist: [],
    hint: 'H + BrO₄⁻ (perbromato). Br con EO=+7 (máximo) → per-ico → perbrómico.'
  },
  {
    formula: 'HBrO₃',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido brómico'],
    stock: [],
    sist: [],
    hint: 'H + BrO₃⁻ (bromato). Br con EO=+5 → -ico → brómico.'
  },
  {
    formula: 'HBrO₂',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido bromoso'],
    stock: [],
    sist: [],
    hint: 'H + BrO₂⁻ (bromito). Br con EO=+3 → -oso → bromoso.'
  },
  {
    formula: 'HBrO',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido hipobromoso'],
    stock: [],
    sist: [],
    hint: 'H + BrO⁻ (hipobromito). Br con EO=+1 (mínimo) → hipo-oso → hipobromoso.'
  },

  // -- hard --
  {
    formula: 'HIO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido peryódico'],
    stock: [],
    sist: [],
    hint: 'H + IO₄⁻ (peryodato). I con EO=+7 (máximo) → per-ico → peryódico.'
  },
  {
    formula: 'HIO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido yódico'],
    stock: [],
    sist: [],
    hint: 'H + IO₃⁻ (yodato). I con EO=+5 → -ico → yódico.'
  },
  {
    formula: 'HIO',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido hipoyodoso'],
    stock: [],
    sist: [],
    hint: 'H + IO⁻ (hipoyodito). I con EO=+1 (mínimo) → hipo-oso → hipoyodoso.'
  },
  {
    formula: 'H₂CrO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido crómico'],
    stock: [],
    sist: [],
    hint: 'H₂ + CrO₄²⁻ (cromato). Cr con EO=+6 → -ico → crómico.'
  },
  {
    formula: 'H₂Cr₂O₇',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido dicrómico'],
    stock: [],
    sist: [],
    hint: 'H₂ + Cr₂O₇²⁻ (dicromato). Dos átomos de Cr con EO=+6 cada uno.'
  },
  {
    formula: 'HMnO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido permangánico'],
    stock: [],
    sist: [],
    hint: 'H + MnO₄⁻ (permanganato). Mn con EO=+7 → per-ico → permangánico.'
  },
  {
    formula: 'H₃AsO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido arsénico'],
    stock: [],
    sist: [],
    hint: 'H₃ + AsO₄³⁻ (arseniato). As con EO=+5 → -ico → arsénico.'
  },
  {
    formula: 'H₃AsO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido arsenioso'],
    stock: [],
    sist: [],
    hint: 'H₃ + AsO₃³⁻ (arsenito). As con EO=+3 → -oso → arsenioso.'
  },
  {
    formula: 'H₂SeO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido selénico'],
    stock: [],
    sist: [],
    hint: 'H₂ + SeO₄²⁻ (selenato). Se con EO=+6 → -ico → selénico.'
  },
  {
    formula: 'H₂SeO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido selenioso'],
    stock: [],
    sist: [],
    hint: 'H₂ + SeO₃²⁻ (selenito). Se con EO=+4 → -oso → selenioso.'
  },
  {
    formula: 'H₂TeO₄',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido telúrico'],
    stock: [],
    sist: [],
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
    sist: [],
    hint: 'ClO⁻ = hipoclorito (Cl EO=+1). Na⁺ → sodio. Anión + "de" + catión.'
  },
  {
    formula: 'Na₂SO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de sodio'],
    stock: [],
    sist: [],
    hint: 'SO₄²⁻ = sulfato. Dos Na⁺ compensan la carga. Sulfato de sodio.'
  },
  {
    formula: 'NaNO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrato de sodio'],
    stock: [],
    sist: [],
    hint: 'NO₃⁻ = nitrato. Na⁺ → sodio. Nitrato de sodio (salitre).'
  },
  {
    formula: 'KNO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrato de potasio'],
    stock: [],
    sist: [],
    hint: 'NO₃⁻ = nitrato. K⁺ → potasio. Nitrato de potasio (salitre potásico).'
  },
  {
    formula: 'K₂SO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de potasio'],
    stock: [],
    sist: [],
    hint: 'SO₄²⁻ = sulfato. Dos K⁺ compensan la carga. Sulfato de potasio.'
  },
  {
    formula: 'Na₂CO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['carbonato de sodio'],
    stock: [],
    sist: [],
    hint: 'CO₃²⁻ = carbonato. Dos Na⁺ por un CO₃²⁻. Sosa (carbonato de sodio).'
  },
  {
    formula: 'CaCO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['carbonato de calcio'],
    stock: [],
    sist: [],
    hint: 'CO₃²⁻ = carbonato. Ca²⁺ → calcio. CaCO₃ es la piedra caliza/calcita.'
  },
  {
    formula: 'K₃PO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['fosfato de potasio'],
    stock: [],
    sist: [],
    hint: 'PO₄³⁻ = fosfato. Tres K⁺ por un PO₄³⁻. Fosfato de potasio.'
  },
  {
    formula: 'Na₃PO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['fosfato de sodio'],
    stock: [],
    sist: [],
    hint: 'PO₄³⁻ = fosfato. Tres Na⁺ por un PO₄³⁻. Fosfato trisódico.'
  },
  {
    formula: 'Ca₃(PO₄)₂',
    group: 'sal-ox', level: 'easy',
    trad: ['fosfato de calcio'],
    stock: [],
    sist: [],
    hint: 'PO₄³⁻ = fosfato. 3 Ca²⁺ + 2 PO₄³⁻ → Ca₃(PO₄)₂. Componente de los huesos.'
  },
  {
    formula: 'Mg(NO₃)₂',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrato de magnesio'],
    stock: [],
    sist: [],
    hint: 'NO₃⁻ = nitrato. Mg²⁺ + 2NO₃⁻ → Mg(NO₃)₂. Nitrato de magnesio.'
  },
  {
    formula: 'Al₂(SO₄)₃',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de aluminio'],
    stock: [],
    sist: [],
    hint: 'SO₄²⁻ = sulfato. 2Al³⁺ + 3SO₄²⁻ → Al₂(SO₄)₃. Valencia fija: no usa -oso/-ico.'
  },
  {
    formula: 'BaSO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['sulfato de bario'],
    stock: [],
    sist: [],
    hint: 'SO₄²⁻ = sulfato. Ba²⁺ → bario. Mineral barita, muy insoluble.'
  },
  {
    formula: 'NaNO₂',
    group: 'sal-ox', level: 'easy',
    trad: ['nitrito de sodio'],
    stock: [],
    sist: [],
    hint: 'NO₂⁻ = nitrito (N EO=+3). Na⁺ → sodio. Nitrito de sodio (conservante).'
  },
  {
    formula: 'NaClO₂',
    group: 'sal-ox', level: 'easy',
    trad: ['clorito de sodio'],
    stock: [],
    sist: [],
    hint: 'ClO₂⁻ = clorito (Cl EO=+3). Na⁺ → sodio. Clorito de sodio.'
  },
  {
    formula: 'NaClO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['clorato de sodio'],
    stock: [],
    sist: [],
    hint: 'ClO₃⁻ = clorato (Cl EO=+5). Na⁺ → sodio. Clorato de sodio.'
  },
  {
    formula: 'NaClO₄',
    group: 'sal-ox', level: 'easy',
    trad: ['perclorato de sodio'],
    stock: [],
    sist: [],
    hint: 'ClO₄⁻ = perclorato (Cl EO=+7). Na⁺ → sodio. Perclorato de sodio.'
  },
  {
    formula: 'KBrO₃',
    group: 'sal-ox', level: 'easy',
    trad: ['bromato de potasio'],
    stock: [],
    sist: [],
    hint: 'BrO₃⁻ = bromato (Br EO=+5). K⁺ → potasio. Bromato de potasio.'
  },

  // -- medium (variable-valence metals) --
  {
    formula: 'FeSO₄',
    group: 'sal-ox', level: 'medium',
    trad: ['sulfato ferroso'],
    stock: [],
    sist: [],
    hint: 'SO₄²⁻ = sulfato. Fe²⁺ (EO menor) → ferroso → sulfato ferroso.'
  },
  {
    formula: 'Fe₂(SO₄)₃',
    group: 'sal-ox', level: 'medium',
    trad: ['sulfato férrico'],
    stock: [],
    sist: [],
    hint: 'SO₄²⁻ = sulfato. Fe³⁺ (EO mayor) → férrico → sulfato férrico. 2Fe³⁺ + 3SO₄²⁻.'
  },
  {
    formula: 'CuSO₄',
    group: 'sal-ox', level: 'medium',
    trad: ['sulfato cúprico'],
    stock: [],
    sist: [],
    hint: 'SO₄²⁻ = sulfato. Cu²⁺ (EO mayor) → cúprico → sulfato cúprico. Piedra azul.'
  },
  {
    formula: 'Cu(NO₃)₂',
    group: 'sal-ox', level: 'medium',
    trad: ['nitrato cúprico'],
    stock: [],
    sist: [],
    hint: 'NO₃⁻ = nitrato. Cu²⁺ → cúprico → nitrato cúprico. Cu²⁺ + 2NO₃⁻.'
  },
  {
    formula: 'Ni(NO₃)₂',
    group: 'sal-ox', level: 'medium',
    trad: ['nitrato niqueloso'],
    stock: [],
    sist: [],
    hint: 'NO₃⁻ = nitrato. Ni²⁺ (EO menor del Ni) → niqueloso → nitrato niqueloso.'
  },
  {
    formula: 'Co(NO₃)₂',
    group: 'sal-ox', level: 'medium',
    trad: ['nitrato cobaltoso'],
    stock: [],
    sist: [],
    hint: 'NO₃⁻ = nitrato. Co²⁺ (EO menor) → cobaltoso → nitrato cobaltoso.'
  },
  {
    formula: 'ZnSO₄',
    group: 'sal-ox', level: 'medium',
    trad: ['sulfato de zinc'],
    stock: [],
    sist: [],
    hint: 'SO₄²⁻ = sulfato. Zn tiene valencia fija +2. Sulfato de zinc (caparrosa blanca).'
  },
  {
    formula: 'Pb(NO₃)₂',
    group: 'sal-ox', level: 'medium',
    trad: ['nitrato plumboso'],
    stock: [],
    sist: [],
    hint: 'NO₃⁻ = nitrato. Pb²⁺ (EO menor) → plumboso → nitrato plumboso.'
  },
  {
    formula: 'Fe(NO₃)₃',
    group: 'sal-ox', level: 'medium',
    trad: ['nitrato férrico'],
    stock: [],
    sist: [],
    hint: 'NO₃⁻ = nitrato. Fe³⁺ (EO mayor) → férrico → nitrato férrico.'
  },
  {
    formula: 'SnSO₄',
    group: 'sal-ox', level: 'medium',
    trad: ['sulfato estannoso'],
    stock: [],
    sist: [],
    hint: 'SO₄²⁻ = sulfato. Sn²⁺ (EO menor) → estannoso → sulfato estannoso.'
  },

  // -- hard --
  {
    formula: 'KMnO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['permanganato de potasio'],
    stock: [],
    sist: [],
    hint: 'MnO₄⁻ = permanganato (Mn EO=+7, prefijo per-). K⁺ → potasio.'
  },
  {
    formula: 'K₂CrO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['cromato de potasio'],
    stock: [],
    sist: [],
    hint: 'CrO₄²⁻ = cromato (Cr EO=+6). Dos K⁺ por un CrO₄²⁻. Color amarillo.'
  },
  {
    formula: 'K₂Cr₂O₇',
    group: 'sal-ox', level: 'hard',
    trad: ['dicromato de potasio'],
    stock: [],
    sist: [],
    hint: 'Cr₂O₇²⁻ = dicromato (2 átomos de Cr EO=+6 cada uno). Dos K⁺. Color naranja.'
  },
  {
    formula: 'KClO₃',
    group: 'sal-ox', level: 'hard',
    trad: ['clorato de potasio'],
    stock: [],
    sist: [],
    hint: 'ClO₃⁻ = clorato (Cl EO=+5). K⁺ → potasio. Oxidante fuerte.'
  },
  {
    formula: 'KClO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['perclorato de potasio'],
    stock: [],
    sist: [],
    hint: 'ClO₄⁻ = perclorato (Cl EO=+7, máximo). K⁺ → potasio.'
  },
  {
    formula: 'KClO',
    group: 'sal-ox', level: 'hard',
    trad: ['hipoclorito de potasio'],
    stock: [],
    sist: [],
    hint: 'ClO⁻ = hipoclorito (Cl EO=+1, mínimo → hipo-). K⁺ → potasio.'
  },
  {
    formula: 'Mn(NO₃)₂',
    group: 'sal-ox', level: 'hard',
    trad: ['nitrato manganoso'],
    stock: [],
    sist: [],
    hint: 'NO₃⁻ = nitrato. Mn²⁺ (EO menor) → manganoso → nitrato manganoso.'
  },
  {
    formula: 'Cr₂(SO₄)₃',
    group: 'sal-ox', level: 'hard',
    trad: ['sulfato crómico'],
    stock: [],
    sist: [],
    hint: 'SO₄²⁻ = sulfato. Cr³⁺ → crómico → sulfato crómico. 2Cr³⁺ + 3SO₄²⁻.'
  },
  {
    formula: 'AlPO₄',
    group: 'sal-ox', level: 'hard',
    trad: ['fosfato de aluminio'],
    stock: [],
    sist: [],
    hint: 'PO₄³⁻ = fosfato. Al³⁺ → aluminio. Valencia fija. Al³⁺ + PO₄³⁻ → AlPO₄.'
  },
  {
    formula: 'Ca(ClO₃)₂',
    group: 'sal-ox', level: 'hard',
    trad: ['clorato de calcio'],
    stock: [],
    sist: [],
    hint: 'ClO₃⁻ = clorato. Ca²⁺ → calcio. Ca²⁺ + 2ClO₃⁻ → Ca(ClO₃)₂.'
  },

  // ── ÓXIDOS BÁSICOS (banco adicional) ──
  {
    formula: 'Hg₂O',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido mercurioso'],
    stock: ['óxido de mercurio (I)'],
    sist: ['monóxido de dimercurio'],
    hint: 'Hg⁺ (EO menor) → mercurioso. 2Hg⁺ + O²⁻ → Hg₂O.'
  },
  {
    formula: 'PtO',
    group: 'ox-bas', level: 'medium',
    trad: ['óxido platinoso'],
    stock: ['óxido de platino (II)'],
    sist: ['monóxido de platino'],
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
    sist: ['monóxido de cromo'],
    hint: 'Cr²⁺ (EO menor) → cromoso. Cr²⁺ + O²⁻ → CrO.'
  },

  // ── ANHÍDRIDOS (banco adicional) ──
  {
    formula: 'Br₂O₃',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido bromoso'],
    stock: ['óxido de bromo (III)'],
    sist: ['trióxido de dibromo'],
    hint: 'Br en EO +3 → bromoso (prefijo hipo- se omite en el intermedio). 2Br + 3O → Br₂O₃.'
  },
  {
    formula: 'Br₂O₅',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido brómico'],
    stock: ['óxido de bromo (V)'],
    sist: ["pentaóxido de dibromo"],
    hint: 'Br en EO +5 → brómico. 2Br + 5O → Br₂O₅.'
  },
  {
    formula: 'Br₂O₇',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido perbrómico'],
    stock: ['óxido de bromo (VII)'],
    sist: ["heptaóxido de dibromo"],
    hint: 'Br en EO +7 (máximo) → per…ico. 2Br + 7O → Br₂O₇.'
  },
  {
    formula: 'I₂O',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido hipoyodoso'],
    stock: ['óxido de yodo (I)'],
    sist: ['monóxido de diyodo'],
    hint: 'I en EO +1 (mínimo) → hipo…oso. 2I + O → I₂O.'
  },
  {
    formula: 'I₂O₃',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido yodoso'],
    stock: ['óxido de yodo (III)'],
    sist: ['trióxido de diyodo'],
    hint: 'I en EO +3 → yodoso. 2I + 3O → I₂O₃.'
  },
  {
    formula: 'I₂O₇',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido peryódico'],
    stock: ['óxido de yodo (VII)'],
    sist: ["heptaóxido de diyodo"],
    hint: 'I en EO +7 (máximo) → per…ico. 2I + 7O → I₂O₇.'
  },
  {
    formula: 'SO',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido hiposulfuroso'],
    stock: ['óxido de azufre (II)'],
    sist: ['monóxido de azufre'],
    hint: 'S en EO +2 (mínimo positivo) → hiposulfuroso. S + O → SO.'
  },
  {
    formula: 'TeO₃',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido telúrico'],
    stock: ['óxido de telurio (VI)'],
    sist: ['trióxido de telurio'],
    hint: 'Te en EO +6 → telúrico. Te + 3O → TeO₃.'
  },
  {
    formula: 'B₂O₃',
    group: 'anhid', level: 'easy',
    trad: ['anhídrido bórico'],
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
    sist: ['monohidróxido de cesio'],
    hint: 'Cs⁺ (valencia fija) + OH⁻ → CsOH; base fuerte del grupo 1. Valencia única → sin sufijo -oso/-ico.'
  },
  {
    formula: 'Cd(OH)₂',
    group: 'base', level: 'easy',
    trad: ['hidróxido de cadmio'],
    stock: [],
    sist: ['dihidróxido de cadmio'],
    hint: 'Cd²⁺ (valencia fija) + 2OH⁻ → Cd(OH)₂. Valencia única → sin sufijo -oso/-ico.'
  },

  // ── ÁCIDOS OXÁCIDOS (banco adicional) ──
  {
    formula: 'HIO₂',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido yodoso'],
    stock: [],
    sist: [],
    hint: 'I en EO +3 → yodoso (dos oxígenos). H⁺ + IO₂⁻ → HIO₂.'
  },
  {
    formula: 'H₂SO₂',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido hiposulfuroso'],
    stock: [],
    sist: [],
    hint: 'S en EO +2 → hiposulfuroso. 2H⁺ + SO₂²⁻ → H₂SO₂.'
  },
  {
    formula: 'H₂TeO₃',
    group: 'ac-ox', level: 'hard',
    trad: ['ácido teluroso'],
    stock: [],
    sist: [],
    hint: 'Te en EO +4 → teluroso. 2H⁺ + TeO₃²⁻ → H₂TeO₃.'
  },
  // ── SALES BINARIAS (banco adicional) ──
  {
    formula: 'LiF',
    group: 'sal-bin', level: 'easy',
    trad: ['fluoruro de litio'],
    stock: [],
    sist: ['monofluoruro de litio'],
    hint: 'Li⁺ (valencia fija) + F⁻ → LiF; sal binaria de flúor y litio. Valencia única → sin sufijo -oso/-ico.'
  },
  {
    formula: 'BaI₂',
    group: 'sal-bin', level: 'easy',
    trad: ['yoduro de bario'],
    stock: [],
    sist: ['diyoduro de bario'],
    hint: 'Ba²⁺ (valencia fija) + 2I⁻ → BaI₂. Valencia única → sin sufijo -oso/-ico.'
  },
  {
    formula: 'AlF₃',
    group: 'sal-bin', level: 'easy',
    trad: ['fluoruro de aluminio'],
    stock: [],
    sist: ['trifluoruro de aluminio'],
    hint: 'Al³⁺ (valencia fija) + 3F⁻ → AlF₃. Valencia única → sin sufijo -oso/-ico.'
  },
  {
    formula: 'ZnS',
    group: 'sal-bin', level: 'easy',
    trad: ['sulfuro de zinc'],
    stock: [],
    sist: ['monosulfuro de zinc'],
    hint: 'Zn²⁺ (valencia fija) + S²⁻ → ZnS. Valencia única → sin sufijo -oso/-ico.'
  },
  {
    formula: 'Hg₂I₂',
    group: 'sal-bin', level: 'medium',
    trad: ['yoduro mercurioso'],
    stock: ['yoduro de mercurio (I)'],
    sist: ['diyoduro de dimercurio'],
    hint: "El mercurio (I) existe como ion dímero Hg₂²⁺ (EO +1 cada Hg) → mercurioso. Hg₂²⁺ + 2I⁻ → Hg₂I₂."
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
    hint: "Una sal de amonio se descompone en gas amoníaco y cloruro de hidrógeno (gas). AB → A + B.",
    col: 'El cloruro de amonio (NH₄Cl) se usa en baterías y en metalurgia en Colombia.'
  },
  {
    id: 'rx-018',
    group: 'reaccion', level: 'hard',
    ecuacion: '2Fe(OH)₃ → Fe₂O₃ + 3H₂O',
    tipo_rx: 'descomposicion',
    hint: 'El hidróxido de hierro (III) al calentarse se descompone en óxido y agua. AB → A + B.',
    col: "Al calentar el hidróxido de hierro (III) se obtiene óxido de hierro (III), un pigmento rojo usado en pinturas y cerámica."
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
    col: "El aluminio reacciona con ácidos como el muriático (HCl) y libera hidrógeno: por eso no se deben guardar ácidos en recipientes de aluminio."
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
    ecuacion: '2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O',
    tipo_rx: 'combustion',
    hint: 'Butano (C₄H₁₀) + O₂ → CO₂ + H₂O, con coeficientes enteros mínimos (evita la fracción 13/2).',
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
    col: "El cloruro de calcio (CaCl₂) se usa como deshidratante en laboratorios y para controlar el polvo en vías destapadas."
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
    hint: "Ya balanceada: Ca 1=1; O: 1 (CaO) + 1 (H₂O) = 2; H: 2=2. Coeficientes: 1, 1, 1.",
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
    group: 'balanceo', level: 'medium',
    ecuacion_sin_coef: 'Al + O₂ → Al₂O₃',
    coeficientes: [4, 3, 2],
    especies: ['Al', 'O₂', 'Al₂O₃'],
    hint: 'Al₂O₃: 2 Al, 3 O. MCM(2,3)=6 → 2 Al₂O₃ → 4 Al; 3 O₂. Coeficientes: 4, 3, 2.',
    col: "El óxido de aluminio (alúmina) es la materia prima para obtener aluminio metálico por electrólisis."
  },
  {
    id: 'bal-012',
    group: 'balanceo', level: 'medium',
    ecuacion_sin_coef: 'Fe + CuSO₄ → FeSO₄ + Cu',
    coeficientes: [1, 1, 1, 1],
    especies: ['Fe', 'CuSO₄', 'FeSO₄', 'Cu'],
    hint: 'El grupo SO₄ se mantiene. Fe→Fe, Cu→Cu. Ya balanceada: 1, 1, 1, 1.',
    col: 'La cementación del cobre con hierro recupera Cu de soluciones en minas colombianas.'
  },
  {
    id: 'bal-013',
    group: 'balanceo', level: 'medium',
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
    hint: "Cr: +6→+3 (gana 3e⁻ cada uno, 6e⁻ por K₂Cr₂O₇). Cada Cl⁻ pierde 1e⁻ (2e⁻ por cada Cl₂) → 3Cl₂. Coeficientes: 1, 14, 2, 2, 7, 3.",
    col: 'El dicromato de potasio K₂Cr₂O₇ se usa como oxidante en análisis de DQO en aguas residuales colombianas.'
  },
  {
    id: 'bal-028',
    group: 'balanceo', level: 'hard',
    ecuacion_sin_coef: 'Ca₃(PO₄)₂ + H₂SO₄ → CaSO₄ + H₃PO₄',
    coeficientes: [1, 3, 3, 2],
    especies: ['Ca₃(PO₄)₂', 'H₂SO₄', 'CaSO₄', 'H₃PO₄'],
    hint: 'Ca: 3→3CaSO₄→3H₂SO₄. PO₄: 2→2H₃PO₄. Coeficientes: 1, 3, 3, 2.',
    col: "Al tratar la roca fosfórica con suficiente ácido sulfúrico se obtiene ácido fosfórico, base de muchos fertilizantes."
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

  // ── Hidruros adicionales ──
  {formula:'AlH₃', group:'hidru',level:'medium', trad:['hidruro de aluminio'],  stock:[],                        sist:['trihidruro de aluminio'],   hint:"Al³⁺ + 3 H⁻. Al tiene valencia fija: tradicional «hidruro de aluminio»; sistemática «trihidruro de aluminio»."},
  // ── Sales binarias adicionales ──
  {formula:'AgBr',   group:'sal-bin',level:'easy',   trad:['bromuro de plata'],   stock:[],    sist:['bromuro de plata'],           hint:'Ag⁺ + Br⁻. Sensible a la luz (fotografía antigua).'},
  {formula:'AgI',    group:'sal-bin',level:'easy',   trad:['yoduro de plata'],    stock:[],     sist:['yoduro de plata'],            hint:'Ag⁺ + I⁻. Precipitado amarillo insoluble.'},
  {formula:'BaS',    group:'sal-bin',level:'easy',   trad:['sulfuro de bario'],   stock:[],                          sist:['sulfuro de bario'],           hint:'Ba²⁺ + S²⁻. Ambos con valencia fija.'},
  {formula:'CaS',    group:'sal-bin',level:'easy',   trad:['sulfuro de calcio'],  stock:[],                          sist:['sulfuro de calcio'],          hint:'Ca²⁺ + S²⁻.'},
  {formula:'NaF',    group:'sal-bin',level:'easy',   trad:['fluoruro de sodio'],  stock:[],                          sist:['fluoruro de sodio'],          hint:'Na⁺ + F⁻. Presente en pastas dentales.'},
  {formula:'CoCl₂',  group:'sal-bin',level:'medium',  trad:['cloruro cobaltoso'],  stock:['cloruro de cobalto (II)'], sist:['dicloruro de cobalto'],       hint:'Co²⁺ (EO menor) → -oso → cobaltoso.',avanzado:true},
  {formula:'CoCl₃',  group:'sal-bin',level:'medium',  trad:['cloruro cobáltico'],  stock:['cloruro de cobalto (III)'],sist:['tricloruro de cobalto'],      hint:'Co³⁺ (EO mayor) → -ico → cobáltico.',avanzado:true},
  {formula:'SnS',    group:'sal-bin',level:'medium',  trad:['sulfuro estannoso'],  stock:['sulfuro de estaño (II)'],  sist:['sulfuro de estaño'],          hint:'Sn²⁺ + S²⁻. EO menor → -oso → estannoso.'},
  {formula:'SnS₂',   group:'sal-bin',level:'medium',  trad:['sulfuro estánnico'],  stock:['sulfuro de estaño (IV)'],  sist:['disulfuro de estaño'],        hint:'Sn⁴⁺ + 2 S²⁻. EO mayor → -ico → estánnico.'},
  {formula:'PbS',    group:'sal-bin',level:'medium',  trad:['sulfuro plumboso'],   stock:['sulfuro de plomo (II)'],   sist:['sulfuro de plomo'],           hint:'Pb²⁺ + S²⁻. EO menor → -oso → plumboso.'},
  // ── Sales oxigenadas adicionales ──
  {formula:'MgCO₃',  group:'sal-ox',level:'easy',   trad:['carbonato de magnesio'],stock:[],                         sist: [],      hint:'Mg²⁺ + CO₃²⁻. Antácido estomacal.'},
  {formula:'AgNO₃',  group:'sal-ox',level:'easy',   trad:['nitrato de plata'],    stock: [],     sist: [],           hint:'Ag⁺ + NO₃⁻. Reactivo para detectar haluros.'},
  {formula:'Ba(NO₃)₂',group:'sal-ox',level:'easy',  trad:['nitrato de bario'],   stock: [],                           sist: [],         hint:'Ba²⁺ + 2 NO₃⁻. Color verde en pirotecnia.'},
  {formula:'FeSO₃',  group:'sal-ox',level:'medium',  trad:['sulfito ferroso'],    stock: [],   sist: [],          hint:'Fe²⁺ + SO₃²⁻. Distinguir sulfito (SO₃) de sulfato (SO₄).'},
  {formula:'NiSO₄',  group:'sal-ox',level:'medium',  trad:['sulfato niqueloso'],  stock: [],   sist: [],          hint:'Ni²⁺ + SO₄²⁻ → sulfato niqueloso.',avanzado:true},
  {formula:'CoPO₄',  group:'sal-ox',level:'hard',    trad:['fosfato cobáltico'],  stock: [], sist: [],         hint:'Co³⁺ + PO₄³⁻. EO mayor → -ico → cobáltico.',avanzado:true},
  {formula:'Na₂SO₃', group:'sal-ox',level:'medium',  trad:['sulfito de sodio'],   stock: [],                          sist: [],         hint:'Na⁺ + SO₃²⁻. Sulfito ≠ sulfato (SO₄²⁻).'},
  {formula:'CaSO₃',  group:'sal-ox',level:'medium',  trad:['sulfito de calcio'],  stock:[],                          sist: [],          hint:'Ca²⁺ + SO₃²⁻.'},
  {formula:'MgSO₄',  group:'sal-ox',level:'easy',    trad:['sulfato de magnesio'],stock:[],                          sist: [],        hint:'Mg²⁺ + SO₄²⁻. "Sal de Epsom" — purgante y fertilizante.'},

  // ── sal-ac: sales ácidas — el anión conserva 1 o 2 H⁺ del ácido poliprótico ──
  {formula:'NaHCO₃', group:'sal-ac',level:'easy',   trad:['bicarbonato de sodio'],  stock:['hidrogenocarbonato de sodio'],   sist:[], hint:'Na⁺ + HCO₃⁻ (CO₃²⁻ retuvo 1 H⁺). Trad: bi- + oxoanión. Stock: hidrogeno- + oxoanión. Base del polvo de hornear.'},
  {formula:'KHCO₃',  group:'sal-ac',level:'easy',   trad:['bicarbonato de potasio'],stock:['hidrogenocarbonato de potasio'], sist:[], hint:'K⁺ + HCO₃⁻. Mismo patrón que el bicarbonato de sodio.'},
  {formula:'NaHSO₄', group:'sal-ac',level:'easy',   trad:['bisulfato de sodio'],    stock:['hidrogenosulfato de sodio'],     sist:[], hint:'Na⁺ + HSO₄⁻ (SO₄²⁻ retuvo 1 H⁺). Trad: bi-. Stock: hidrogeno-.'},
  {formula:'NaHSO₃', group:'sal-ac',level:'medium', trad:['bisulfito de sodio'],    stock:['hidrogenosulfito de sodio'],     sist:[], hint:'Na⁺ + HSO₃⁻ (SO₃²⁻ retuvo 1 H⁺). Sulfito ≠ sulfato — cuidado con el sufijo.'},
  {formula:'KHSO₄',  group:'sal-ac',level:'medium', trad:['bisulfato de potasio'],  stock:['hidrogenosulfato de potasio'],   sist:[], hint:'K⁺ + HSO₄⁻. Mismo patrón que el bisulfato de sodio.'},
  {formula:'NH₄HCO₃',group:'sal-ac',level:'medium', trad:['bicarbonato de amonio'], stock:['hidrogenocarbonato de amonio'],  sist:[], hint:'NH₄⁺ + HCO₃⁻. El amonio actúa como catión de carga fija +1.'},
  {formula:'Ca(HCO₃)₂',group:'sal-ac',level:'medium',trad:['bicarbonato de calcio'],stock:['hidrogenocarbonato de calcio'],  sist:[], hint:'Ca²⁺ + 2 HCO₃⁻. Responsable de la dureza temporal del agua.'},
  {formula:'Mg(HCO₃)₂',group:'sal-ac',level:'medium',trad:['bicarbonato de magnesio'],stock:['hidrogenocarbonato de magnesio'],sist:[], hint:'Mg²⁺ + 2 HCO₃⁻. Igual razonamiento que el bicarbonato de calcio.'},
  {formula:'Ca(HSO₃)₂',group:'sal-ac',level:'hard', trad:['bisulfito de calcio'],   stock:['hidrogenosulfito de calcio'],    sist:[], hint:'Ca²⁺ + 2 HSO₃⁻ (carga −1 cada uno, 2 para neutralizar +2).'},
  {formula:'Na₂HPO₄',group:'sal-ac',level:'hard',   trad:['fosfato monoácido de sodio'],stock:['hidrogenofosfato de sodio'], sist:[], hint:'2 Na⁺ + HPO₄²⁻ (PO₄³⁻ retuvo 1 H⁺, queda carga −2). Un solo "hidrogeno-" → 1 H conservado.'},
  {formula:'NaH₂PO₄',group:'sal-ac',level:'hard',   trad:['fosfato diácido de sodio'],  stock:['dihidrogenofosfato de sodio'],sist:[], hint:'Na⁺ + H₂PO₄⁻ (PO₄³⁻ retuvo 2 H⁺, queda carga −1). "Dihidrogeno-" → 2 H conservados.'},
  {formula:'KH₂PO₄', group:'sal-ac',level:'hard',   trad:['fosfato diácido de potasio'],stock:['dihidrogenofosfato de potasio'],sist:[], hint:'K⁺ + H₂PO₄⁻. Mismo patrón que el fosfato diácido de sodio.'},
  // ── Sales ácidas adicionales (mayor variedad, sin formas meta/piro/hidratadas) ──
  {formula:'LiHCO₃', group:'sal-ac',level:'easy',  trad:['bicarbonato de litio'],   stock:['hidrogenocarbonato de litio'],  sist:[], hint:'Li⁺ + HCO₃⁻ (CO₃²⁻ retuvo 1 H⁺). Li⁺ es de valencia fija +1, igual que Na⁺ y K⁺.'},
  {formula:'LiHSO₄', group:'sal-ac',level:'easy',  trad:['bisulfato de litio'],     stock:['hidrogenosulfato de litio'],    sist:[], hint:'Li⁺ + HSO₄⁻ (SO₄²⁻ retuvo 1 H⁺). Mismo patrón que el bisulfato de sodio.'},
  {formula:'NaHS',   group:'sal-ac',level:'easy',  trad:['bisulfuro de sodio'],     stock:['hidrogenosulfuro de sodio'],    sist:[], hint:'Na⁺ + HS⁻ (S²⁻ del H₂S retuvo 1 H⁺). El H₂S es diprótico, igual que el H₂CO₃ o el H₂SO₄.'},
  {formula:'KHS',    group:'sal-ac',level:'easy',  trad:['bisulfuro de potasio'],   stock:['hidrogenosulfuro de potasio'],  sist:[], hint:'K⁺ + HS⁻. Mismo patrón que el bisulfuro de sodio.'},
  {formula:'LiHS',   group:'sal-ac',level:'easy',  trad:['bisulfuro de litio'],     stock:['hidrogenosulfuro de litio'],    sist:[], hint:'Li⁺ + HS⁻. Valencia fija +1, igual razonamiento que NaHS y KHS.'},
  {formula:'RbHCO₃', group:'sal-ac',level:'easy',  trad:['bicarbonato de rubidio'], stock:['hidrogenocarbonato de rubidio'],sist:[], hint:'Rb⁺ + HCO₃⁻. Rb es un metal alcalino, valencia fija +1.'},
  {formula:'CsHCO₃', group:'sal-ac',level:'easy',  trad:['bicarbonato de cesio'],   stock:['hidrogenocarbonato de cesio'],  sist:[], hint:'Cs⁺ + HCO₃⁻. Cs es un metal alcalino, valencia fija +1.'},
  {formula:'Ba(HCO₃)₂',group:'sal-ac',level:'medium',trad:['bicarbonato de bario'],  stock:['hidrogenocarbonato de bario'],  sist:[], hint:'Ba²⁺ + 2 HCO₃⁻. Catión divalente, mismo patrón que el bicarbonato de calcio.'},
  {formula:'Sr(HCO₃)₂',group:'sal-ac',level:'medium',trad:['bicarbonato de estroncio'],stock:['hidrogenocarbonato de estroncio'],sist:[], hint:'Sr²⁺ + 2 HCO₃⁻. Igual razonamiento que el bicarbonato de calcio o magnesio.'},
  {formula:'NH₄HSO₄',group:'sal-ac',level:'medium', trad:['bisulfato de amonio'],   stock:['hidrogenosulfato de amonio'],   sist:[], hint:'NH₄⁺ + HSO₄⁻. El amonio actúa como catión de carga fija +1.'},
  {formula:'Fe(HCO₃)₂',group:'sal-ac',level:'hard',  trad:['bicarbonato ferroso'],   stock:['hidrogenocarbonato de hierro (II)'],sist:[], hint:"Fe²⁺ (EO menor) + 2 HCO₃⁻ → bicarbonato ferroso. Disuelto en aguas subterráneas; al oxidarse forma Fe(OH)₃, que da el color rojizo."},

  // ── Ácidos hídricos: pseudohalógeno adicional ──
  {formula:'HN₃',    group:'ac-hid',level:'hard',   trad:['ácido hidrazoico'],      stock: [], sist: ['azida de hidrógeno'], hint:'H + N₃⁻ (azida). Pseudohalógeno; ácido hídrico poco común pero real, muy tóxico e inestable. IUPAC: azida de hidrógeno.'},

  // ── Hidruros: metal alcalino adicional ──
  {formula:'CsH',    group:'hidru',level:'easy',    trad:['hidruro de cesio'],      stock:[], sist:['hidruro de cesio'], hint:'Cs⁺ (grupo 1A, valencia fija +1) + H⁻. Igual patrón que el hidruro de rubidio.'},

  // ── Ampliación del banco (10°): un elemento más (Cd, Be) donde aún faltaba,
  // y muchas más sales/bases con cationes y aniones ya usados en el banco, para
  // dar más variedad sin salir del marco de nomenclatura de 10° (valencias fijas
  // y las variables de 2 estados que ya se enseñan). Óxidos básicos, hidruros,
  // ácidos hídricos y ácidos oxácidos casi no crecen a propósito: con los
  // elementos que realmente se enseñan en 10°, esas familias ya estaban casi
  // completas (cada metal/no metal común ya tenía su(s) compuesto(s)) — sumar
  // más ahí exigiría meterse con elementos poco comunes o forzar una dificultad
  // mayor, y eso iría en contra de que los compuestos nuevos sean simples.

  // ── Óxidos básicos: un metal fijo más ──
  {formula:'CdO', group:'ox-bas',level:'easy', trad:['óxido de cadmio'], stock:[], sist:['óxido de cadmio'], hint:'Cd²⁺ (valencia fija +2, igual que Zn²⁺) + O²⁻ → CdO.'},

  // ── Hidruros: el alcalinotérreo que faltaba ──
  {formula:'BeH₂', group:'hidru',level:'easy', trad:['hidruro de berilio'], stock:[], sist:["dihidruro de berilio"], hint:'Be²⁺ (grupo 2A, valencia fija +2) + 2H⁻ → BeH₂. Mismo patrón que el hidruro de magnesio.'},

  // ── Bases: el alcalinotérreo que faltaba ──
  {formula:'Be(OH)₂', group:'base',level:'easy', trad:['hidróxido de berilio'], stock:[], sist:["dihidróxido de berilio"], hint:'Be²⁺ (valencia fija +2) + 2OH⁻ → Be(OH)₂. Mismo patrón que el hidróxido de magnesio.'},

  // ── Ácidos oxácidos: los 2 miembros que faltaban en familias ya vistas ──
  {formula:'H₃PO₂', group:'ac-ox',level:'medium', trad:['ácido hipofosforoso'], stock:[], sist: [], hint:"P con EO=+1 → hipo-…-oso → hipofosforoso (fórmula formal H₃ + PO₂³⁻; en la realidad solo 1 H es ácido). Mismo patrón hipo-/-oso/-ico que el azufre."},
  {formula:'H₂MnO₄', group:'ac-ox',level:'hard', trad:['ácido mangánico'], stock:[], sist: [], hint:'H₂ + MnO₄²⁻ (manganato). Mn con EO=+6 → -ico → mangánico (EO+7 → per-ico → permangánico, ya visto).'},

  // ── Sales binarias: completar la parrilla alcalinos/alcalinotérreos × halógeno/azufre ──
  {formula:'LiCl', group:'sal-bin',level:'easy', trad:['cloruro de litio'], stock:[], sist:['cloruro de litio'], hint:'Cl⁻ → cloruro. Li⁺ (valencia fija +1) → litio. Mismo patrón que el cloruro de sodio.'},
  {formula:'LiBr', group:'sal-bin',level:'easy', trad:['bromuro de litio'], stock:[], sist:['bromuro de litio'], hint:'Br⁻ → bromuro. Li⁺ → litio.'},
  {formula:'LiI', group:'sal-bin',level:'easy', trad:['yoduro de litio'], stock:[], sist:['yoduro de litio'], hint:'I⁻ → yoduro. Li⁺ → litio.'},
  {formula:'RbF', group:'sal-bin',level:'easy', trad:['fluoruro de rubidio'], stock:[], sist:['fluoruro de rubidio'], hint:'F⁻ → fluoruro. Rb⁺ (grupo 1A) → rubidio.'},
  {formula:'RbCl', group:'sal-bin',level:'easy', trad:['cloruro de rubidio'], stock:[], sist:['cloruro de rubidio'], hint:'Cl⁻ → cloruro. Rb⁺ → rubidio.'},
  {formula:'RbBr', group:'sal-bin',level:'easy', trad:['bromuro de rubidio'], stock:[], sist:['bromuro de rubidio'], hint:'Br⁻ → bromuro. Rb⁺ → rubidio.'},
  {formula:'RbI', group:'sal-bin',level:'easy', trad:['yoduro de rubidio'], stock:[], sist:['yoduro de rubidio'], hint:'I⁻ → yoduro. Rb⁺ → rubidio.'},
  {formula:'CsF', group:'sal-bin',level:'easy', trad:['fluoruro de cesio'], stock:[], sist:['fluoruro de cesio'], hint:'F⁻ → fluoruro. Cs⁺ (grupo 1A) → cesio.'},
  {formula:'CsCl', group:'sal-bin',level:'easy', trad:['cloruro de cesio'], stock:[], sist:['cloruro de cesio'], hint:'Cl⁻ → cloruro. Cs⁺ → cesio.'},
  {formula:'CsBr', group:'sal-bin',level:'easy', trad:['bromuro de cesio'], stock:[], sist:['bromuro de cesio'], hint:'Br⁻ → bromuro. Cs⁺ → cesio.'},
  {formula:'CsI', group:'sal-bin',level:'easy', trad:['yoduro de cesio'], stock:[], sist:['yoduro de cesio'], hint:'I⁻ → yoduro. Cs⁺ → cesio.'},
  {formula:'MgF₂', group:'sal-bin',level:'easy', trad:['fluoruro de magnesio'], stock:[], sist:['difluoruro de magnesio'], hint:'F⁻ → fluoruro. Mg²⁺ + 2F⁻ → MgF₂.'},
  {formula:'MgI₂', group:'sal-bin',level:'easy', trad:['yoduro de magnesio'], stock:[], sist:['diyoduro de magnesio'], hint:'I⁻ → yoduro. Mg²⁺ + 2I⁻ → MgI₂.'},
  {formula:'CaBr₂', group:'sal-bin',level:'easy', trad:['bromuro de calcio'], stock:[], sist:['dibromuro de calcio'], hint:'Br⁻ → bromuro. Ca²⁺ + 2Br⁻ → CaBr₂.'},
  {formula:'SrF₂', group:'sal-bin',level:'easy', trad:['fluoruro de estroncio'], stock:[], sist:['difluoruro de estroncio'], hint:'F⁻ → fluoruro. Sr²⁺ + 2F⁻ → SrF₂.'},
  {formula:'SrCl₂', group:'sal-bin',level:'easy', trad:['cloruro de estroncio'], stock:[], sist:['dicloruro de estroncio'], hint:'Cl⁻ → cloruro. Sr²⁺ + 2Cl⁻ → SrCl₂.'},
  {formula:'SrBr₂', group:'sal-bin',level:'easy', trad:['bromuro de estroncio'], stock:[], sist:['dibromuro de estroncio'], hint:'Br⁻ → bromuro. Sr²⁺ + 2Br⁻ → SrBr₂.'},
  {formula:'SrI₂', group:'sal-bin',level:'easy', trad:['yoduro de estroncio'], stock:[], sist:['diyoduro de estroncio'], hint:'I⁻ → yoduro. Sr²⁺ + 2I⁻ → SrI₂.'},
  {formula:'BaF₂', group:'sal-bin',level:'easy', trad:['fluoruro de bario'], stock:[], sist:['difluoruro de bario'], hint:'F⁻ → fluoruro. Ba²⁺ + 2F⁻ → BaF₂.'},
  {formula:'BaBr₂', group:'sal-bin',level:'easy', trad:['bromuro de bario'], stock:[], sist:['dibromuro de bario'], hint:'Br⁻ → bromuro. Ba²⁺ + 2Br⁻ → BaBr₂.'},
  {formula:'BeF₂', group:'sal-bin',level:'easy', trad:['fluoruro de berilio'], stock:[], sist:['difluoruro de berilio'], hint:'F⁻ → fluoruro. Be²⁺ (valencia fija +2) + 2F⁻ → BeF₂.'},
  {formula:'BeCl₂', group:'sal-bin',level:'easy', trad:['cloruro de berilio'], stock:[], sist:['dicloruro de berilio'], hint:'Cl⁻ → cloruro. Be²⁺ + 2Cl⁻ → BeCl₂.'},
  {formula:'BeBr₂', group:'sal-bin',level:'easy', trad:['bromuro de berilio'], stock:[], sist:['dibromuro de berilio'], hint:'Br⁻ → bromuro. Be²⁺ + 2Br⁻ → BeBr₂.'},
  {formula:'BeI₂', group:'sal-bin',level:'easy', trad:['yoduro de berilio'], stock:[], sist:['diyoduro de berilio'], hint:'I⁻ → yoduro. Be²⁺ + 2I⁻ → BeI₂.'},
  {formula:'AlI₃', group:'sal-bin',level:'easy', trad:['yoduro de aluminio'], stock:[], sist:['triyoduro de aluminio'], hint:'I⁻ → yoduro. Al³⁺ + 3I⁻ → AlI₃.'},
  {formula:'ZnF₂', group:'sal-bin',level:'easy', trad:['fluoruro de zinc'], stock:[], sist:['difluoruro de zinc'], hint:'F⁻ → fluoruro. Zn²⁺ (valencia fija +2) + 2F⁻ → ZnF₂.'},
  {formula:'ZnBr₂', group:'sal-bin',level:'easy', trad:['bromuro de zinc'], stock:[], sist:['dibromuro de zinc'], hint:'Br⁻ → bromuro. Zn²⁺ + 2Br⁻ → ZnBr₂.'},
  {formula:'ZnI₂', group:'sal-bin',level:'easy', trad:['yoduro de zinc'], stock:[], sist:['diyoduro de zinc'], hint:'I⁻ → yoduro. Zn²⁺ + 2I⁻ → ZnI₂.'},
  {formula:'AgF', group:'sal-bin',level:'easy', trad:['fluoruro de plata'], stock:[], sist:['fluoruro de plata'], hint:'F⁻ → fluoruro. Ag⁺ (valencia fija +1) → plata.'},
  {formula:'Li₂S', group:'sal-bin',level:'easy', trad:['sulfuro de litio'], stock:[], sist:['sulfuro de dilitio'], hint:'S²⁻ → sulfuro. Dos Li⁺ por un S²⁻.'},
  {formula:'MgS', group:'sal-bin',level:'easy', trad:['sulfuro de magnesio'], stock:[], sist:['sulfuro de magnesio'], hint:'S²⁻ → sulfuro. Mg²⁺ → magnesio.'},
  {formula:'SrS', group:'sal-bin',level:'easy', trad:['sulfuro de estroncio'], stock:[], sist:['sulfuro de estroncio'], hint:'S²⁻ → sulfuro. Sr²⁺ → estroncio.'},
  {formula:'Rb₂S', group:'sal-bin',level:'easy', trad:['sulfuro de rubidio'], stock:[], sist:['sulfuro de dirubidio'], hint:'S²⁻ → sulfuro. Dos Rb⁺ por un S²⁻.'},
  {formula:'Cs₂S', group:'sal-bin',level:'easy', trad:['sulfuro de cesio'], stock:[], sist:['sulfuro de dicesio'], hint:'S²⁻ → sulfuro. Dos Cs⁺ por un S²⁻.'},
  {formula:'CdCl₂', group:'sal-bin',level:'easy', trad:['cloruro de cadmio'], stock:[], sist:['dicloruro de cadmio'], hint:'Cl⁻ → cloruro. Cd²⁺ (valencia fija +2) + 2Cl⁻ → CdCl₂.'},

  // ── Sales oxigenadas: más cationes de valencia fija con los oxoaniones ya vistos ──
  {formula:'Li₂SO₄', group:'sal-ox',level:'easy', trad:['sulfato de litio'], stock:[], sist: [], hint:'SO₄²⁻ = sulfato. Dos Li⁺ por un SO₄²⁻.'},
  {formula:'LiNO₃', group:'sal-ox',level:'easy', trad:['nitrato de litio'], stock:[], sist: [], hint:'NO₃⁻ = nitrato. Li⁺ → litio.'},
  {formula:'Li₂CO₃', group:'sal-ox',level:'easy', trad:['carbonato de litio'], stock:[], sist: [], hint:'CO₃²⁻ = carbonato. Dos Li⁺ por un CO₃²⁻. Usado en medicamentos para el trastorno bipolar.'},
  {formula:'Li₃PO₄', group:'sal-ox',level:'easy', trad:['fosfato de litio'], stock:[], sist: [], hint:'PO₄³⁻ = fosfato. Tres Li⁺ por un PO₄³⁻.'},
  {formula:'K₂CO₃', group:'sal-ox',level:'easy', trad:['carbonato de potasio'], stock:[], sist: [], hint:'CO₃²⁻ = carbonato. Dos K⁺ por un CO₃²⁻. Usado en la fabricación de jabón y vidrio.'},
  {formula:'K₂SO₃', group:'sal-ox',level:'easy', trad:['sulfito de potasio'], stock:[], sist: [], hint:'SO₃²⁻ = sulfito. Dos K⁺ por un SO₃²⁻. Sulfito ≠ sulfato — cuidado con el sufijo.'},
  {formula:'LiClO', group:'sal-ox',level:'easy', trad:['hipoclorito de litio'], stock:[], sist: [], hint:'ClO⁻ = hipoclorito (Cl con EO=+1). Li⁺ → litio. Usado como blanqueador y desinfectante.'},
  {formula:'Rb₂CO₃', group:'sal-ox',level:'easy', trad:['carbonato de rubidio'], stock:[], sist: [], hint:'CO₃²⁻ = carbonato. Dos Rb⁺ por un CO₃²⁻.'},
  {formula:'Rb₂SO₄', group:'sal-ox',level:'easy', trad:['sulfato de rubidio'], stock:[], sist: [], hint:'SO₄²⁻ = sulfato. Dos Rb⁺ por un SO₄²⁻.'},
  {formula:'RbNO₃', group:'sal-ox',level:'easy', trad:['nitrato de rubidio'], stock:[], sist: [], hint:'NO₃⁻ = nitrato. Rb⁺ → rubidio.'},
  {formula:'Cs₂SO₄', group:'sal-ox',level:'easy', trad:['sulfato de cesio'], stock:[], sist: [], hint:'SO₄²⁻ = sulfato. Dos Cs⁺ por un SO₄²⁻.'},
  {formula:'CsNO₃', group:'sal-ox',level:'easy', trad:['nitrato de cesio'], stock:[], sist: [], hint:'NO₃⁻ = nitrato. Cs⁺ → cesio.'},
  {formula:'Mg₃(PO₄)₂', group:'sal-ox',level:'easy', trad:['fosfato de magnesio'], stock:[], sist: [], hint:'PO₄³⁻ = fosfato. 3Mg²⁺ + 2PO₄³⁻ → Mg₃(PO₄)₂.'},
  {formula:'MgSO₃', group:'sal-ox',level:'easy', trad:['sulfito de magnesio'], stock:[], sist: [], hint:'SO₃²⁻ = sulfito. Mg²⁺ → magnesio.'},
  {formula:'CaSO₄', group:'sal-ox',level:'easy', trad:['sulfato de calcio'], stock:[], sist: [], hint:'SO₄²⁻ = sulfato. Ca²⁺ → calcio. El yeso es CaSO₄ hidratado.'},
  {formula:'Ca(NO₃)₂', group:'sal-ox',level:'easy', trad:['nitrato de calcio'], stock:[], sist: [], hint:'NO₃⁻ = nitrato. Ca²⁺ + 2NO₃⁻ → Ca(NO₃)₂. Usado como fertilizante.'},
  {formula:'SrSO₄', group:'sal-ox',level:'easy', trad:['sulfato de estroncio'], stock:[], sist: [], hint:'SO₄²⁻ = sulfato. Sr²⁺ → estroncio. Mineral celestina.'},
  {formula:'Sr(NO₃)₂', group:'sal-ox',level:'easy', trad:['nitrato de estroncio'], stock:[], sist: [], hint:'NO₃⁻ = nitrato. Sr²⁺ + 2NO₃⁻ → Sr(NO₃)₂. Da el color rojo en fuegos artificiales.'},
  {formula:'BaCO₃', group:'sal-ox',level:'easy', trad:['carbonato de bario'], stock:[], sist: [], hint:'CO₃²⁻ = carbonato. Ba²⁺ → bario.'},
  {formula:'Al(NO₃)₃', group:'sal-ox',level:'easy', trad:['nitrato de aluminio'], stock:[], sist: [], hint:'NO₃⁻ = nitrato. Al³⁺ + 3NO₃⁻ → Al(NO₃)₃.'},
  {formula:'Zn(NO₃)₂', group:'sal-ox',level:'easy', trad:['nitrato de zinc'], stock:[], sist: [], hint:'NO₃⁻ = nitrato. Zn²⁺ + 2NO₃⁻ → Zn(NO₃)₂.'},
  {formula:'ZnCO₃', group:'sal-ox',level:'easy', trad:['carbonato de zinc'], stock:[], sist: [], hint:'CO₃²⁻ = carbonato. Zn²⁺ → zinc.'},
  {formula:'Ag₂CO₃', group:'sal-ox',level:'easy', trad:['carbonato de plata'], stock:[], sist: [], hint:'CO₃²⁻ = carbonato. Dos Ag⁺ por un CO₃²⁻. Sal poco soluble, clásica al estudiar reglas de solubilidad.'},
  {formula:'Ag₂SO₄', group:'sal-ox',level:'easy', trad:['sulfato de plata'], stock:[], sist: [], hint:'SO₄²⁻ = sulfato. Dos Ag⁺ por un SO₄²⁻.'},
  {formula:'CdSO₄', group:'sal-ox',level:'easy', trad:['sulfato de cadmio'], stock:[], sist: [], hint:'SO₄²⁻ = sulfato. Cd²⁺ (valencia fija +2) → cadmio.'},
  {formula:'SrCO₃', group:'sal-ox',level:'easy', trad:['carbonato de estroncio'], stock:[], sist: [], hint:'CO₃²⁻ = carbonato. Sr²⁺ → estroncio. Usado en pantallas antiguas de tubo de rayos catódicos.'},

  // ── Sales ácidas: más cationes de valencia fija con los aniones ácidos ya vistos ──
  {formula:'RbHS', group:'sal-ac',level:'easy', trad:['bisulfuro de rubidio'], stock:['hidrogenosulfuro de rubidio'], sist:[], hint:'Rb⁺ + HS⁻ (S²⁻ del H₂S retuvo 1 H⁺). Mismo patrón que el bisulfuro de sodio o potasio.'},
  {formula:'CsHS', group:'sal-ac',level:'easy', trad:['bisulfuro de cesio'], stock:['hidrogenosulfuro de cesio'], sist:[], hint:'Cs⁺ + HS⁻. Mismo patrón que el bisulfuro de rubidio.'},
  {formula:'RbHSO₄', group:'sal-ac',level:'medium', trad:['bisulfato de rubidio'], stock:['hidrogenosulfato de rubidio'], sist:[], hint:'Rb⁺ + HSO₄⁻ (SO₄²⁻ retuvo 1 H⁺). Mismo patrón que el bisulfato de potasio.'},
  {formula:'CsHSO₄', group:'sal-ac',level:'medium', trad:['bisulfato de cesio'], stock:['hidrogenosulfato de cesio'], sist:[], hint:'Cs⁺ + HSO₄⁻. Mismo patrón que el bisulfato de rubidio.'},
  {formula:'KHSO₃', group:'sal-ac',level:'medium', trad:['bisulfito de potasio'], stock:['hidrogenosulfito de potasio'], sist:[], hint:'K⁺ + HSO₃⁻ (SO₃²⁻ retuvo 1 H⁺). Mismo patrón que el bisulfito de sodio.'},
  {formula:'Mg(HSO₃)₂', group:'sal-ac',level:'hard', trad:['bisulfito de magnesio'], stock:['hidrogenosulfito de magnesio'], sist:[], hint:'Mg²⁺ + 2 HSO₃⁻. Catión divalente, mismo patrón que el bisulfito de calcio.'},
  {formula:'K₂HPO₄', group:'sal-ac',level:'hard', trad:['fosfato monoácido de potasio'], stock:['hidrogenofosfato de potasio'], sist:[], hint:'2 K⁺ + HPO₄²⁻ (PO₄³⁻ retuvo 1 H⁺, queda carga −2). Mismo patrón que el fosfato monoácido de sodio.'},
  {formula:'CaHPO₄', group:'sal-ac',level:'hard', trad:['fosfato monoácido de calcio'], stock:['hidrogenofosfato de calcio'], sist:[], hint:'Ca²⁺ + HPO₄²⁻ (cargas +2 y −2 se compensan 1 a 1). Usado como suplemento de calcio y en fertilizantes.'},
  {formula:'NH₄HS', group:'sal-ac',level:'medium', trad:['bisulfuro de amonio'], stock:['hidrogenosulfuro de amonio'], sist:[], hint:'NH₄⁺ + HS⁻. El amonio actúa como catión de carga fija +1, igual que en el bicarbonato o bisulfato de amonio.'},
  {formula:'Li₂HPO₄', group:'sal-ac',level:'hard', trad:['fosfato monoácido de litio'], stock:['hidrogenofosfato de litio'], sist:[], hint:'2 Li⁺ + HPO₄²⁻. Mismo patrón que el fosfato monoácido de potasio.'},
  {formula:'Ba(HSO₄)₂', group:'sal-ac',level:'hard', trad:['bisulfato de bario'], stock:['hidrogenosulfato de bario'], sist:[], hint:'Ba²⁺ + 2 HSO₄⁻. Catión divalente, mismo patrón que el bicarbonato de bario.'},
  {formula:'Sr(HSO₄)₂', group:'sal-ac',level:'hard', trad:['bisulfato de estroncio'], stock:['hidrogenosulfato de estroncio'], sist:[], hint:'Sr²⁺ + 2 HSO₄⁻. Mismo patrón que el bisulfato de bario.'},
  {formula:'RbHSO₃', group:'sal-ac',level:'medium', trad:['bisulfito de rubidio'], stock:['hidrogenosulfito de rubidio'], sist:[], hint:'Rb⁺ + HSO₃⁻. Mismo patrón que el bisulfito de potasio.'},
{formula:'Sb₂O₃',group:'anhid',level:'hard',trad:['anhídrido antimonioso'],stock:['óxido de antimonio (III)'],sist:['trióxido de diantimonio'],hint:'Sb con EO=+3 (menor). → -oso → antimonioso → anhídrido antimonioso.'},
{formula:'Sb₂O₅',group:'anhid',level:'hard',trad:['anhídrido antimónico'],stock:['óxido de antimonio (V)'],sist:['pentaóxido de diantimonio'],hint:'Sb con EO=+5 (mayor). → -ico → antimónico → anhídrido antimónico.'},
{formula:'GeO₂',group:'anhid',level:'hard',trad:['anhídrido germánico'],stock:['óxido de germanio (IV)'],sist:['dióxido de germanio'],hint:'Ge con EO=+4 (único EO común del Ge, como el Si). → -ico → germánico → anhídrido germánico.'},
{formula:'V₂O₅',group:'anhid',level:'hard',trad:['anhídrido vanádico'],stock:["óxido de vanadio (V)"],sist:['pentaóxido de divanadio'],hint:'V con EO=+5 (el más estable del V, actúa como no metal). → -ico → vanádico → anhídrido vanádico.'},
{formula:'AgH',group:'hidru',level:'hard',trad:['hidruro de plata'],stock:[],sist:['hidruro de plata'],hint:'Ag tiene valencia fija +1 (como catión simple). Ag⁺ + H⁻ → AgH. Nombre igual en los 3 sistemas.'},
{formula:'CdH₂',group:'hidru',level:'hard',trad:['hidruro de cadmio'],stock:[],sist:['dihidruro de cadmio'],hint:'Cd tiene valencia fija +2. Cd²⁺ + 2H⁻ → CdH₂. Mismo patrón que el hidruro de zinc.'},
{formula:'SnH₂',group:'hidru',level:'hard',trad:['hidruro estannoso'],stock:['hidruro de estaño (II)'],sist:['dihidruro de estaño'],hint:'Sn²⁺ (EO menor del Sn) → -oso → estannoso → hidruro estannoso.'},
{formula:'SnH₄',group:'hidru',level:'hard',trad:['hidruro estánnico'],stock:['hidruro de estaño (IV)'],sist:['tetrahidruro de estaño'],hint:'Sn⁴⁺ (EO mayor del Sn) → -ico → estánnico → hidruro estánnico.'},
{"formula":"H₃SbO₄","group":"ac-ox","level":"hard","trad":["ácido antimónico"],"stock":[],"sist":[],"hint":"H₃ + SbO₄³⁻ (antimoniato). Sb con EO=+5 → -ico → antimónico. Mismo patrón que el ácido arsénico (mismo grupo 15)."},
{"formula":"H₃SbO₃","group":"ac-ox","level":"hard","trad":["ácido antimonioso"],"stock":[],"sist":[],"hint":"H₃ + SbO₃³⁻ (antimonito). Sb con EO=+3 → -oso → antimonioso."},
{"formula":"H₂GeO₃","group":"ac-ox","level":"hard","trad":["ácido germánico"],"stock":[],"sist":[],"hint":"H₂ + GeO₃²⁻ (germanato). Ge con EO=+4 (único común) → -ico → germánico. Mismo patrón que el ácido silícico (mismo grupo 14)."},
{"formula":"H₄SiO₄","group":"ac-ox","level":"hard","trad":["ácido ortosilícico"],"stock":[],"sist":[],"hint":"H₄ + SiO₄⁴⁻ (ortosilicato). Forma más hidratada del ácido silícico (H₂SiO₃); Si conserva EO=+4."},
{"formula":"HVO₃","group":"ac-ox","level":"hard","trad":["ácido vanádico"],"stock":[],"sist":[],"hint":"H + VO₃⁻ (vanadato). V con EO=+5 (su valencia más común) → -ico → vanádico."},
{"formula":"H₂N₂O₂","group":"ac-ox","level":"hard","trad":["ácido hiponitroso"],"stock":[],"sist":[],"hint":"2H⁺ + N₂O₂²⁻ (hiponitrito). N con EO=+1 (el más bajo) → hipo-oso → hiponitroso. Mismo patrón hipo- que el ácido hiposulfuroso."},
{"formula":"H₂MoO₄","group":"ac-ox","level":"hard","trad":["ácido molíbdico"],"stock":[],"sist":[],"hint":"H₂ + MoO₄²⁻ (molibdato). Mo con EO=+6 → -ico → molíbdico. Mismo patrón que el ácido crómico (mismo grupo 6)."},
{"formula":"H₂WO₄","group":"ac-ox","level":"hard","trad":["ácido túngstico"],"stock":[],"sist":[],"hint":"H₂ + WO₄²⁻ (tungstato). W con EO=+6 → -ico → túngstico. Mismo patrón que el ácido crómico y el molíbdico."},
{"formula":"Ca(H₂PO₄)₂","group":"sal-ac","level":"hard","trad":["fosfato diácido de calcio"],"stock":["dihidrogenofosfato de calcio"],"sist":[],"hint":"Ca²⁺ + 2 H₂PO₄⁻ (PO₄³⁻ retuvo 2 H⁺ cada uno). Es el componente principal del «superfosfato», un fertilizante fosfatado."},
{"formula":"Mg(H₂PO₄)₂","group":"sal-ac","level":"hard","trad":["fosfato diácido de magnesio"],"stock":["dihidrogenofosfato de magnesio"],"sist":[],"hint":"Mg²⁺ + 2 H₂PO₄⁻. Mismo patrón que el fosfato diácido de calcio."},
{"formula":"NH₄H₂PO₄","group":"sal-ac","level":"hard","trad":["fosfato diácido de amonio"],"stock":["dihidrogenofosfato de amonio"],"sist":[],"hint":"NH₄⁺ + H₂PO₄⁻. Conocido como MAP (fosfato monoamónico), uno de los fertilizantes fosfatados más usados en el mundo."},
{"formula":"(NH₄)₂HPO₄","group":"sal-ac","level":"hard","trad":["fosfato monoácido de amonio"],"stock":["hidrogenofosfato de amonio"],"sist":[],"hint":"2 NH₄⁺ + HPO₄²⁻. Conocido como DAP (fosfato diamónico), el fertilizante fosfatado de mayor uso agrícola en el mundo, incluida Colombia."},
{"formula":"MgHPO₄","group":"sal-ac","level":"hard","trad":["fosfato monoácido de magnesio"],"stock":["hidrogenofosfato de magnesio"],"sist":[],"hint":"Mg²⁺ + HPO₄²⁻ (cargas +2 y −2 se compensan 1 a 1). Mismo patrón que el fosfato monoácido de calcio."},
{"formula":"BaHPO₄","group":"sal-ac","level":"hard","trad":["fosfato monoácido de bario"],"stock":["hidrogenofosfato de bario"],"sist":[],"hint":"Ba²⁺ + HPO₄²⁻. Mismo patrón que el fosfato monoácido de calcio o magnesio."},
{"id":"rx-049","group":"reaccion","level":"easy","ecuacion":"2K + Cl₂ → 2KCl","tipo_rx":"sintesis","hint":"Metal alcalino + halógeno → sal binaria. A + B → AB.","col":"El cloruro de potasio (KCl) se usa como fertilizante potásico en cultivos de papa en Boyacá y Cundinamarca."},
{"id":"rx-050","group":"reaccion","level":"easy","ecuacion":"S + O₂ → SO₂","tipo_rx":"sintesis","hint":"No metal + oxígeno → óxido ácido. A + B → AB.","col":"El azufre extraído en minas del Nariño se oxida en procesos industriales para producir ácido sulfúrico."},
{"id":"rx-051","group":"reaccion","level":"easy","ecuacion":"2Ca + O₂ → 2CaO","tipo_rx":"sintesis","hint":"Metal + oxígeno → óxido básico. A + B → AB.","col":"El óxido de calcio producido en hornos de Boyacá es insumo de la industria del cemento."},
{"id":"rx-052","group":"reaccion","level":"easy","ecuacion":"4Na + O₂ → 2Na₂O","tipo_rx":"sintesis","hint":"Metal alcalino + oxígeno → óxido básico. 4 átomos de Na por cada O₂.","col":"El sodio metálico se maneja con extremo cuidado en laboratorios de química industrial colombianos."},
{"id":"rx-053","group":"reaccion","level":"medium","ecuacion":"CO₂ + H₂O → H₂CO₃","tipo_rx":"sintesis","hint":"Óxido ácido + agua → ácido oxácido. A + B → AB.","col":"Esta reacción ocurre al carbonatar las bebidas gaseosas producidas por la industria de alimentos colombiana."},
{"id":"rx-054","group":"reaccion","level":"medium","ecuacion":"Si + O₂ → SiO₂","tipo_rx":"sintesis","hint":"No metal + oxígeno → óxido ácido. A + B → AB.","col":"El dióxido de silicio (SiO₂) es la base de la industria del vidrio y la cerámica de Ráquira, Boyacá."},
{"id":"rx-055","group":"reaccion","level":"medium","ecuacion":"CuCO₃ → CuO + CO₂","tipo_rx":"descomposicion","hint":"Un carbonato metálico se descompone con calor en óxido y CO₂. AB → A + B.","col":"Al calentar los carbonatos de cobre se obtiene óxido de cobre; la malaquita, un mineral de cobre, es un carbonato básico de cobre."},
{"id":"rx-056","group":"reaccion","level":"medium","ecuacion":"2KNO₃ → 2KNO₂ + O₂","tipo_rx":"descomposicion","hint":"El nitrato de potasio se descompone con calor liberando oxígeno. AB → A + B.","col":"El nitrato de potasio (KNO₃) es un fertilizante nitro-potásico usado en cultivos de flores de exportación."},
{"id":"rx-057","group":"reaccion","level":"hard","ecuacion":"2Al(OH)₃ → Al₂O₃ + 3H₂O","tipo_rx":"descomposicion","hint":"El hidróxido de aluminio se deshidrata con calor formando alúmina. AB → A + B.","col":"La deshidratación del Al(OH)₃ para obtener alúmina (Al₂O₃) es un paso clave en la producción de aluminio."},
{"id":"rx-058","group":"reaccion","level":"medium","ecuacion":"MgCO₃ → MgO + CO₂","tipo_rx":"descomposicion","hint":"Un carbonato metálico se descompone con calor en óxido y CO₂. AB → A + B.","col":"La magnesita (MgCO₃) se calcina para producir óxido de magnesio usado en refractarios industriales."},
{"id":"rx-059","group":"reaccion","level":"easy","ecuacion":"Mg + 2HCl → MgCl₂ + H₂","tipo_rx":"sus-simple","hint":"Metal más activo que H desplaza al hidrógeno del ácido. A + BC → AC + B.","col":"El magnesio metálico reacciona con ácido clorhídrico diluido en prácticas de laboratorio escolar colombianas."},
{"id":"rx-060","group":"reaccion","level":"easy","ecuacion":"Ca + 2HCl → CaCl₂ + H₂","tipo_rx":"sus-simple","hint":"Metal más activo que H desplaza al hidrógeno del ácido. A + BC → AC + B.","col":"El cloruro de calcio producido en esta reacción se usa como deshidratante industrial en Colombia."},
{"id":"rx-061","group":"reaccion","level":"hard","ecuacion":"2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂","tipo_rx":"sus-simple","hint":"Metal más activo que H desplaza al hidrógeno del ácido sulfúrico. Requiere balanceo cuidadoso.","col":"El aluminio reacciona con ácido sulfúrico diluido liberando hidrógeno gaseoso."},
{"id":"rx-062","group":"reaccion","level":"medium","ecuacion":"Zn + Pb(NO₃)₂ → Zn(NO₃)₂ + Pb","tipo_rx":"sus-simple","hint":"El Zn más activo que Pb desplaza al Pb²⁺ de su sal. A + BC → AC + B.","col":"Este desplazamiento metálico se estudia en análisis de metales pesados en muestras mineras colombianas."},
{"id":"rx-063","group":"reaccion","level":"easy","ecuacion":"K₂CO₃ + CaCl₂ → CaCO₃ + 2KCl","tipo_rx":"sus-doble","hint":"Dos sales intercambian iones. AB + CD → AD + CB. CaCO₃ precipita.","col":"La precipitación de CaCO₃ se usa para identificar la dureza del agua en acueductos colombianos."},
{"id":"rx-064","group":"reaccion","level":"easy","ecuacion":"Ba(NO₃)₂ + K₂CO₃ → BaCO₃ + 2KNO₃","tipo_rx":"sus-doble","hint":"Intercambio de iones; precipita el carbonato de bario (blanco). AB + CD → AD + CB.","col":"Las reacciones de precipitación como esta se usan en el laboratorio para separar e identificar iones."},
{"id":"rx-065","group":"reaccion","level":"medium","ecuacion":"BaCl₂ + K₂SO₄ → BaSO₄ + 2KCl","tipo_rx":"sus-doble","hint":"Dos sales intercambian iones. AB + CD → AD + CB. BaSO₄ es precipitado blanco insoluble.","col":"El precipitado de BaSO₄ se usa en análisis gravimétrico en laboratorios universitarios colombianos."},
{"id":"rx-066","group":"reaccion","level":"medium","ecuacion":"Pb(NO₃)₂ + 2NaCl → PbCl₂ + 2NaNO₃","tipo_rx":"sus-doble","hint":"Dos sales intercambian iones. AB + CD → AD + CB. PbCl₂ precipita.","col":"La formación de PbCl₂ se usa en análisis de contaminación por plomo en ríos colombianos."},
{"id":"rx-067","group":"reaccion","level":"hard","ecuacion":"2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O","tipo_rx":"combustion","hint":"Etano + O₂ → CO₂ + H₂O. Combustión completa con coeficientes que requieren duplicar todo para evitar fracciones.","col":"El etano (C₂H₆) es un componente del gas natural distribuido por empresas colombianas de gas domiciliario."},
{"id":"rx-068","group":"reaccion","level":"medium","ecuacion":"C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O","tipo_rx":"combustion","hint":"Glucosa + O₂ → CO₂ + H₂O. Es la misma reacción global de la respiración celular.","col":"La glucosa de la caña de azúcar del Valle del Cauca se metaboliza mediante esta misma reacción de combustión/respiración."},
{"id":"rx-069","group":"reaccion","level":"medium","ecuacion":"C₄H₈ + 6O₂ → 4CO₂ + 4H₂O","tipo_rx":"combustion","hint":"Buteno (alqueno) + O₂ → CO₂ + H₂O. Combustión completa.","col":"El buteno es un hidrocarburo derivado del petróleo procesado en refinerías colombianas."},
{"id":"bal-032","group":"balanceo","level":"hard","ecuacion_sin_coef":"Al + Fe₂O₃ → Al₂O₃ + Fe","coeficientes":[2,1,1,2],"especies":["Al","Fe₂O₃","Al₂O₃","Fe"],"hint":"Reacción termita. Al: 2→Al₂O₃. Fe₂O₃ aporta 2 Fe. Coeficientes: 2, 1, 1, 2.","col":"La reacción termita (aluminotermia) se usa en soldadura de rieles de tren en Colombia."},
{"id":"bal-033","group":"balanceo","level":"medium","ecuacion_sin_coef":"C + CO₂ → CO","coeficientes":[1,1,2],"especies":["C","CO₂","CO"],"hint":"C total: 1(izq)+1(en CO₂)=2 → 2 CO. O: 2 = 2. Coeficientes: 1, 1, 2.","col":"Esta reacción (equilibrio de Boudouard) ocurre dentro del alto horno de la siderúrgica de Paz de Río."},
{"id":"bal-034","group":"balanceo","level":"easy","ecuacion_sin_coef":"N₂ + O₂ → NO","coeficientes":[1,1,2],"especies":["N₂","O₂","NO"],"hint":"N₂ aporta 2 N → 2 NO. O₂ aporta 2 O → 2 NO. Coeficientes: 1, 1, 2.","col":"Esta reacción ocurre a alta temperatura en motores de combustión de vehículos colombianos, contribuyendo al smog urbano."},
{"id":"bal-035","group":"balanceo","level":"medium","ecuacion_sin_coef":"Zn + AgNO₃ → Zn(NO₃)₂ + Ag","coeficientes":[1,2,1,2],"especies":["Zn","AgNO₃","Zn(NO₃)₂","Ag"],"hint":"Zn(NO₃)₂ necesita 2 NO₃ → 2 AgNO₃ → 2 Ag. Coeficientes: 1, 2, 1, 2.","col":"El desplazamiento de plata por zinc se estudia en laboratorios de química analítica en Colombia."},
{"id":"bal-036","group":"balanceo","level":"medium","ecuacion_sin_coef":"Al₂O₃ + HCl → AlCl₃ + H₂O","coeficientes":[1,6,2,3],"especies":["Al₂O₃","HCl","AlCl₃","H₂O"],"hint":"Al: 2→2AlCl₃→6Cl→6HCl. O: 3→3H₂O. Coeficientes: 1, 6, 2, 3.","col":"La alúmina (Al₂O₃) reacciona con ácido clorhídrico en procesos de refinación de aluminio."},
{"id":"bal-037","group":"balanceo","level":"hard","ecuacion_sin_coef":"Mg₃N₂ + H₂O → Mg(OH)₂ + NH₃","coeficientes":[1,6,3,2],"especies":["Mg₃N₂","H₂O","Mg(OH)₂","NH₃"],"hint":"Mg: 3→3Mg(OH)₂→6OH→6H₂O. N: 2→2NH₃. Verifica H: 12 izq = 6(en Mg(OH)₂)+6(en NH₃)=12 der. Coeficientes: 1, 6, 3, 2.","col":"El nitruro de magnesio se estudia en cursos universitarios de química inorgánica avanzada en Colombia."},
{"id":"bal-038","group":"balanceo","level":"hard","ecuacion_sin_coef":"CaC₂ + H₂O → Ca(OH)₂ + C₂H₂","coeficientes":[1,2,1,1],"especies":["CaC₂","H₂O","Ca(OH)₂","C₂H₂"],"hint":"Ca: 1=1. C: 2=2. H: 4 izq = 2(Ca(OH)₂)+2(C₂H₂)=4 der. O: 2=2. Coeficientes: 1, 2, 1, 1.","col":"El carburo de calcio se usó en lámparas de carburo de mineros colombianos antes de la electrificación de minas."},
{"id":"bal-039","group":"balanceo","level":"hard","ecuacion_sin_coef":"Fe + H₂O → Fe₃O₄ + H₂","coeficientes":[3,4,1,4],"especies":["Fe","H₂O","Fe₃O₄","H₂"],"hint":"Fe: 3→Fe₃O₄. O: 4→4H₂O. H: 8 izq = 8 der (4H₂). Coeficientes: 3, 4, 1, 4.","col":"El vapor de agua sobre hierro caliente forma óxido ferrosoférrico, reacción clásica de corrosión acelerada."},
{"id":"bal-040","group":"balanceo","level":"medium","ecuacion_sin_coef":"NaCl + H₂SO₄ → Na₂SO₄ + HCl","coeficientes":[2,1,1,2],"especies":["NaCl","H₂SO₄","Na₂SO₄","HCl"],"hint":"Na₂SO₄ necesita 2 Na → 2 NaCl → 2 Cl → 2 HCl. Coeficientes: 2, 1, 1, 2.","col":"Este método industrial produce ácido clorhídrico a partir de sal común en plantas químicas colombianas."},
{"id":"bal-041","group":"balanceo","level":"easy","ecuacion_sin_coef":"KI + Cl₂ → KCl + I₂","coeficientes":[2,1,2,1],"especies":["KI","Cl₂","KCl","I₂"],"hint":"Cl₂ desplaza al yoduro. K: 2=2. Cl: 2=2. I: 2=2. Coeficientes: 2, 1, 2, 1.","col":"El desplazamiento de halógenos se usa para enseñar reactividad química en colegios colombianos."},
{"id":"bal-042","group":"balanceo","level":"easy","ecuacion_sin_coef":"C₂H₄ + H₂ → C₂H₆","coeficientes":[1,1,1],"especies":["C₂H₄","H₂","C₂H₆"],"hint":"Ya balanceada: C 2=2, H 4+2=6=6. Coeficientes: 1, 1, 1.","col":"La hidrogenación de etileno es un proceso petroquímico estudiado en la refinería de Barrancabermeja."},
{"id":"bal-043","group":"balanceo","level":"medium","ecuacion_sin_coef":"P₂O₅ + H₂O → H₃PO₄","coeficientes":[1,3,2],"especies":["P₂O₅","H₂O","H₃PO₄"],"hint":"P: 2→2H₃PO₄. H: 6→3H₂O. O: 5+3=8=2×4 en H₃PO₄. Coeficientes: 1, 3, 2.","col":"El ácido fosfórico producido así es insumo de fertilizantes para cultivos de palma africana."},
{"id":"bal-044","group":"balanceo","level":"easy","ecuacion_sin_coef":"MgCO₃ → MgO + CO₂","coeficientes":[1,1,1],"especies":["MgCO₃","MgO","CO₂"],"hint":"Ya balanceada: Mg 1=1, C 1=1, O 3=1+2=3. Coeficientes: 1, 1, 1.","col":"La magnesita (MgCO₃) se calcina en hornos industriales para producir óxido de magnesio."},
{"id":"bal-045","group":"balanceo","level":"medium","ecuacion_sin_coef":"Ba + H₂O → Ba(OH)₂ + H₂","coeficientes":[1,2,1,1],"especies":["Ba","H₂O","Ba(OH)₂","H₂"],"hint":"Ba(OH)₂ necesita 2 OH → 2 H₂O. H: 4 izq = 2(Ba(OH)₂)+2(H₂)=4 der. Coeficientes: 1, 2, 1, 1.","col":"El bario metálico reacciona con agua de forma similar al calcio, aunque es mucho menos común en el laboratorio escolar."},
{"id":"bal-046","group":"balanceo","level":"medium","ecuacion_sin_coef":"SO₂ + O₂ → SO₃","coeficientes":[2,1,2],"especies":["SO₂","O₂","SO₃"],"hint":"S: 2=2. O: 4+2=6=6 (2×3 en SO₃). Coeficientes: 2, 1, 2.","col":"Esta reacción catalítica es el paso central del proceso de contacto para producir ácido sulfúrico industrial."},
{"id":"bal-047","group":"balanceo","level":"medium","ecuacion_sin_coef":"NaOH + H₃PO₄ → Na₃PO₄ + H₂O","coeficientes":[3,1,1,3],"especies":["NaOH","H₃PO₄","Na₃PO₄","H₂O"],"hint":"Na₃PO₄ necesita 3 Na → 3 NaOH. H: 3+3=6 izq = 6 der (3H₂O). O: 3+4=7 = 4(Na₃PO₄)+3(H₂O)=7. Coeficientes: 3, 1, 1, 3.","col":"El fosfato trisódico se usa en productos de limpieza industrial y tratamiento de agua en Colombia."},
{"id":"bal-048","group":"balanceo","level":"easy","ecuacion_sin_coef":"C + H₂O → CO + H₂","coeficientes":[1,1,1,1],"especies":["C","H₂O","CO","H₂"],"hint":"Ya balanceada: C 1=1, H 2=2, O 1=1. Coeficientes: 1, 1, 1, 1.","col":"Esta reacción produce «gas de síntesis» (CO + H₂), materia prima de la industria química."},
{"id":"bal-049","group":"balanceo","level":"medium","ecuacion_sin_coef":"Fe₂O₃ + C → Fe + CO","coeficientes":[1,3,2,3],"especies":["Fe₂O₃","C","Fe","CO"],"hint":"Fe: 2→2Fe. O: 3→3CO, que necesita 3 C. Coeficientes: 1, 3, 2, 3.","col":"La reducción del mineral de hierro con carbón es el proceso base del alto horno en Paz de Río, Boyacá."},
{"id":"bal-050","group":"balanceo","level":"easy","ecuacion_sin_coef":"Ca(OH)₂ + CO₂ → CaCO₃ + H₂O","coeficientes":[1,1,1,1],"especies":["Ca(OH)₂","CO₂","CaCO₃","H₂O"],"hint":"Ya balanceada: Ca 1=1, O 2+2=4=3+1=4, H 2=2, C 1=1. Coeficientes: 1, 1, 1, 1.","col":"Esta reacción (agua de cal que se enturbia) se usa en colegios colombianos para identificar la presencia de CO₂."},
{"formula":"KCl","group":"mol-masa","level":"easy","masa_molar":74.548,"formula_calc":"39.098 + 35.45 = 74.548","hint":"KCl: 1 K (39.098) + 1 Cl (35.45) = 74.548 g/mol","col":"El cloruro de potasio (KCl, 74.548 g/mol) es un fertilizante potásico usado en cultivos de papa de Boyacá."},
{"formula":"CaCl₂","group":"mol-masa","level":"easy","masa_molar":110.978,"formula_calc":"40.078 + 2(35.45) = 40.078 + 70.9 = 110.978","hint":"CaCl₂: 1 Ca (40.078) + 2 Cl (2×35.45=70.9) = 110.978 g/mol","col":"El cloruro de calcio (110.978 g/mol) se usa como deshidratante y anticongelante industrial en Colombia."},
{"formula":"MgCl₂","group":"mol-masa","level":"easy","masa_molar":95.205,"formula_calc":"24.305 + 2(35.45) = 24.305 + 70.9 = 95.205","hint":"MgCl₂: 1 Mg (24.305) + 2 Cl (2×35.45=70.9) = 95.205 g/mol","col":"El cloruro de magnesio (95.205 g/mol) se extrae de salmueras en las salinas de Manaure, La Guajira."},
{"formula":"K₂SO₄","group":"mol-masa","level":"medium","masa_molar":174.252,"formula_calc":"2(39.098) + 32.06 + 4(15.999) = 78.196 + 32.06 + 63.996 = 174.252","hint":"K₂SO₄: 2 K (78.196) + 1 S (32.06) + 4 O (63.996) = 174.252 g/mol","col":"El sulfato de potasio (174.252 g/mol) es un fertilizante usado en cultivos de banano del Urabá antioqueño."},
{"formula":"(NH₄)₂SO₄","group":"mol-masa","level":"hard","masa_molar":132.134,"formula_calc":"2(14.007+4(1.008)) + 32.06 + 4(15.999) = 2(18.039) + 32.06 + 63.996 = 36.078 + 32.06 + 63.996 = 132.134","hint":"(NH₄)₂SO₄: 2 grupos NH₄ (2×18.039=36.078) + 1 S (32.06) + 4 O (63.996) = 132.134 g/mol","col":"El sulfato de amonio (132.134 g/mol) es un fertilizante nitrogenado usado en cultivos de arroz del Tolima."},
{"formula":"NH₄NO₃","group":"mol-masa","level":"medium","masa_molar":80.043,"formula_calc":"2(14.007) + 4(1.008) + 3(15.999) = 28.014 + 4.032 + 47.997 = 80.043","hint":"NH₄NO₃: 2 N (28.014) + 4 H (4.032) + 3 O (47.997) = 80.043 g/mol","col":"El nitrato de amonio (80.043 g/mol) es un fertilizante nitrogenado de uso agrícola común en Colombia."},
{"formula":"Mg(NO₃)₂","group":"mol-masa","level":"medium","masa_molar":148.313,"formula_calc":"24.305 + 2(14.007+3(15.999)) = 24.305 + 2(62.004) = 24.305 + 124.008 = 148.313","hint":"Mg(NO₃)₂: 1 Mg (24.305) + 2 grupos NO₃ (2×62.004=124.008) = 148.313 g/mol","col":"El nitrato de magnesio (148.313 g/mol) se usa como fertilizante en floricultura de la Sabana de Bogotá."},
{"formula":"CaSO₄","group":"mol-masa","level":"medium","masa_molar":136.134,"formula_calc":"40.078 + 32.06 + 4(15.999) = 40.078 + 32.06 + 63.996 = 136.134","hint":"CaSO₄: 1 Ca (40.078) + 1 S (32.06) + 4 O (63.996) = 136.134 g/mol","col":"El sulfato de calcio o yeso (136.134 g/mol) se usa ampliamente en la construcción colombiana."},
{"formula":"Na₂CO₃","group":"mol-masa","level":"medium","masa_molar":105.988,"formula_calc":"2(22.990) + 12.011 + 3(15.999) = 45.98 + 12.011 + 47.997 = 105.988","hint":"Na₂CO₃: 2 Na (45.98) + 1 C (12.011) + 3 O (47.997) = 105.988 g/mol","col":"El carbonato de sodio (105.988 g/mol) es materia prima de la industria del vidrio y los detergentes."},
{"formula":"NaHCO₃","group":"mol-masa","level":"easy","masa_molar":84.006,"formula_calc":"22.990 + 1.008 + 12.011 + 3(15.999) = 22.99 + 1.008 + 12.011 + 47.997 = 84.006","hint":"NaHCO₃: 1 Na (22.99) + 1 H (1.008) + 1 C (12.011) + 3 O (47.997) = 84.006 g/mol","col":"El bicarbonato de sodio (84.006 g/mol) se usa como polvo de hornear en la industria alimentaria colombiana."},
{"formula":"AgNO₃","group":"mol-masa","level":"medium","masa_molar":169.872,"formula_calc":"107.868 + 14.007 + 3(15.999) = 107.868 + 14.007 + 47.997 = 169.872","hint":"AgNO₃: 1 Ag (107.868) + 1 N (14.007) + 3 O (47.997) = 169.872 g/mol","col":"El nitrato de plata (169.872 g/mol) se usa en análisis químico de cloruros en laboratorios colombianos."},
{"formula":"BaSO₄","group":"mol-masa","level":"medium","masa_molar":233.383,"formula_calc":"137.327 + 32.06 + 4(15.999) = 137.327 + 32.06 + 63.996 = 233.383","hint":"BaSO₄: 1 Ba (137.327) + 1 S (32.06) + 4 O (63.996) = 233.383 g/mol","col":"El sulfato de bario (233.383 g/mol) se usa como contraste en radiografías en hospitales colombianos."},
{"formula":"Pb(NO₃)₂","group":"mol-masa","level":"hard","masa_molar":331.208,"formula_calc":"207.2 + 2(14.007+3(15.999)) = 207.2 + 2(62.004) = 207.2 + 124.008 = 331.208","hint":"Pb(NO₃)₂: 1 Pb (207.2) + 2 grupos NO₃ (2×62.004=124.008) = 331.208 g/mol","col":"El nitrato de plomo (331.208 g/mol) se usa en análisis de contaminación por metales pesados en ríos colombianos."},
{"formula":"KNO₃","group":"mol-masa","level":"medium","masa_molar":101.102,"formula_calc":"39.098 + 14.007 + 3(15.999) = 39.098 + 14.007 + 47.997 = 101.102","hint":"KNO₃: 1 K (39.098) + 1 N (14.007) + 3 O (47.997) = 101.102 g/mol","col":"El nitrato de potasio (101.102 g/mol) es un fertilizante nitro-potásico usado en floricultura colombiana."},
{"formula":"ZnSO₄","group":"mol-masa","level":"medium","masa_molar":161.436,"formula_calc":"65.38 + 32.06 + 4(15.999) = 65.38 + 32.06 + 63.996 = 161.436","hint":"ZnSO₄: 1 Zn (65.38) + 1 S (32.06) + 4 O (63.996) = 161.436 g/mol","col":"El sulfato de zinc (161.436 g/mol) se usa como fungicida y suplemento nutricional en agricultura colombiana."},
{"formula":"MnO₂","group":"mol-masa","level":"easy","masa_molar":86.936,"formula_calc":"54.938 + 2(15.999) = 54.938 + 31.998 = 86.936","hint":"MnO₂: 1 Mn (54.938) + 2 O (31.998) = 86.936 g/mol","col":"El dióxido de manganeso (86.936 g/mol) se usa en las pilas secas."},

  // ── AMPLIACIÓN (+20 % por grupo): óxidos, anhídridos, hidruros, hídricos, bases, oxácidos,
  //    sales binarias, oxisales, sales ácidas, reacciones, balanceo y mol-masa ──
{"formula": "Ga₂O₃", "group": "ox-bas", "level": "medium", "trad": ["óxido de galio"], "stock": [], "sist": ["trióxido de digalio"], "hint": "Ga tiene valencia fija +3 (grupo 13, como el Al). 2(+3)+3(−2)=0 → Ga₂O₃."},
{"formula": "ZrO₂", "group": "ox-bas", "level": "hard", "trad": ["óxido de circonio"], "stock": [], "sist": ["dióxido de circonio"], "hint": "Zr con EO +4. Zr⁴⁺ + 2O²⁻ → ZrO₂ (circona, usada en coronas dentales)."},
{"formula": "In₂O₃", "group": "ox-bas", "level": "hard", "trad": ["óxido de indio"], "stock": [], "sist": ["trióxido de diindio"], "hint": "In tiene valencia +3 (grupo 13). 2(+3)+3(−2)=0 → In₂O₃."},
{"formula": "La₂O₃", "group": "ox-bas", "level": "hard", "trad": ["óxido de lantano"], "stock": [], "sist": ["trióxido de dilantano"], "hint": "La tiene valencia fija +3. 2(+3)+3(−2)=0 → La₂O₃."},
{"formula": "Sc₂O₃", "group": "ox-bas", "level": "hard", "trad": ["óxido de escandio"], "stock": [], "sist": ["trióxido de diescandio"], "hint": "Sc tiene valencia fija +3. 2(+3)+3(−2)=0 → Sc₂O₃."},
{"formula": "Y₂O₃", "group": "ox-bas", "level": "hard", "trad": ["óxido de itrio"], "stock": [], "sist": ["trióxido de diitrio"], "hint": "Y tiene valencia fija +3. 2(+3)+3(−2)=0 → Y₂O₃."},
{"formula": "Ce₂O₃", "group": "ox-bas", "level": "hard", "trad": ["óxido ceroso"], "stock": ["óxido de cerio (III)"], "sist": ["trióxido de dicerio"], "hint": "Ce³⁺ es el EO menor del cerio (+3/+4) → -oso → óxido ceroso."},
{"formula": "CeO₂", "group": "ox-bas", "level": "hard", "trad": ["óxido cérico"], "stock": ["óxido de cerio (IV)"], "sist": ["dióxido de cerio"], "hint": "Ce⁴⁺ es el EO mayor del cerio → -ico → óxido cérico. Ce⁴⁺ + 2O²⁻ → CeO₂."},
{"formula": "PdO", "group": "ox-bas", "level": "hard", "trad": ["óxido paladioso"], "stock": ["óxido de paladio (II)"], "sist": ["monóxido de paladio"], "hint": "Pd²⁺ es el EO menor del paladio (+2/+4) → -oso → óxido paladioso."},
{"formula": "CO", "group": "anhid", "level": "easy", "trad": ["anhídrido carbonoso"], "stock": [], "sist": ["monóxido de carbono"], "hint": "C con EO +2 (el menor de +2/+4) → -oso → anhídrido carbonoso. Gas tóxico de la combustión incompleta."},
{"formula": "MnO₃", "group": "anhid", "level": "hard", "trad": ["anhídrido mangánico"], "stock": [], "sist": ["trióxido de manganeso"], "hint": "Mn con EO +6 → anhídrido mangánico (con agua da H₂MnO₄, ácido mangánico)."},
{"formula": "MoO₃", "group": "anhid", "level": "hard", "trad": ["anhídrido molíbdico"], "stock": [], "sist": ["trióxido de molibdeno"], "hint": "Mo con EO +6 → anhídrido molíbdico (con agua da H₂MoO₄, ácido molíbdico)."},
{"formula": "WO₃", "group": "anhid", "level": "hard", "trad": ["anhídrido túngstico"], "stock": [], "sist": ["trióxido de tungsteno"], "hint": "W con EO +6 → anhídrido túngstico (con agua da H₂WO₄, ácido túngstico)."},
{"formula": "MnO₂", "group": "anhid", "level": "hard", "trad": ["anhídrido manganoso"], "stock": ["óxido de manganeso (IV)"], "sist": ["dióxido de manganeso"], "hint": "Mn con EO +4 actuando como no metal → anhídrido manganoso (con agua da H₂MnO₃). También se clasifica como óxido."},
{"formula": "SnO₂", "group": "anhid", "level": "hard", "trad": ["anhídrido estánnico"], "stock": [], "sist": ["dióxido de estaño"], "hint": "Sn con EO +4 tiene carácter anfótero → como anhídrido: anhídrido estánnico (con agua da H₂SnO₃)."},
{"formula": "PbO₂", "group": "anhid", "level": "hard", "trad": ["anhídrido plúmbico"], "stock": [], "sist": ["dióxido de plomo"], "hint": "Pb con EO +4 tiene carácter anfótero → como anhídrido: anhídrido plúmbico (con agua da H₂PbO₃)."},
{"formula": "PbH₄", "group": "hidru", "level": "hard", "trad": ["hidruro plúmbico"], "stock": ["hidruro de plomo (IV)"], "sist": ["tetrahidruro de plomo"], "hint": "Pb⁴⁺ (EO mayor) → -ico → plúmbico. Pb⁴⁺ + 4H⁻ → PbH₄."},
{"formula": "AuH", "group": "hidru", "level": "hard", "trad": ["hidruro auroso"], "stock": ["hidruro de oro (I)"], "sist": ["monohidruro de oro"], "hint": "Au⁺ (EO menor) → -oso → auroso. Au⁺ + H⁻ → AuH."},
{"formula": "AuH₃", "group": "hidru", "level": "hard", "trad": ["hidruro áurico"], "stock": ["hidruro de oro (III)"], "sist": ["trihidruro de oro"], "hint": "Au³⁺ (EO mayor) → -ico → áurico. Au³⁺ + 3H⁻ → AuH₃."},
{"formula": "HgH₂", "group": "hidru", "level": "hard", "trad": ["hidruro mercúrico"], "stock": ["hidruro de mercurio (II)"], "sist": ["dihidruro de mercurio"], "hint": "Hg²⁺ (EO mayor) → -ico → mercúrico. Hg²⁺ + 2H⁻ → HgH₂."},
{"formula": "PtH₂", "group": "hidru", "level": "hard", "trad": ["hidruro platinoso"], "stock": ["hidruro de platino (II)"], "sist": ["dihidruro de platino"], "hint": "Pt²⁺ (EO menor de +2/+4) → -oso → platinoso. Pt²⁺ + 2H⁻ → PtH₂."},
{"formula": "HSCN", "group": "ac-hid", "level": "hard", "trad": ["ácido sulfocianhídrico", "ácido tiociánico"], "stock": [], "sist": ["tiocianato de hidrógeno"], "hint": "H⁺ + SCN⁻ (tiocianato). Como el HCN, es un pseudohídrico: ácido sin oxígeno → terminación -hídrico."},
{"formula": "Mn(OH)₃", "group": "base", "level": "medium", "trad": ["hidróxido mangánico"], "stock": ["hidróxido de manganeso (III)"], "sist": ["trihidróxido de manganeso"], "hint": "Mn³⁺ (EO mayor como catión, +2/+3) → -ico → mangánico. Mn³⁺ + 3OH⁻."},
{"formula": "Ga(OH)₃", "group": "base", "level": "medium", "trad": ["hidróxido de galio"], "stock": [], "sist": ["trihidróxido de galio"], "hint": "Ga tiene valencia fija +3. Ga³⁺ + 3OH⁻ → Ga(OH)₃."},
{"formula": "Pt(OH)₂", "group": "base", "level": "hard", "trad": ["hidróxido platinoso"], "stock": ["hidróxido de platino (II)"], "sist": ["dihidróxido de platino"], "hint": "Pt²⁺ (EO menor) → -oso → platinoso. Pt²⁺ + 2OH⁻."},
{"formula": "Pt(OH)₄", "group": "base", "level": "hard", "trad": ["hidróxido platínico"], "stock": ["hidróxido de platino (IV)"], "sist": ["tetrahidróxido de platino"], "hint": "Pt⁴⁺ (EO mayor) → -ico → platínico. Pt⁴⁺ + 4OH⁻."},
{"formula": "In(OH)₃", "group": "base", "level": "hard", "trad": ["hidróxido de indio"], "stock": [], "sist": ["trihidróxido de indio"], "hint": "In tiene valencia +3. In³⁺ + 3OH⁻ → In(OH)₃."},
{"formula": "La(OH)₃", "group": "base", "level": "hard", "trad": ["hidróxido de lantano"], "stock": [], "sist": ["trihidróxido de lantano"], "hint": "La tiene valencia fija +3. La³⁺ + 3OH⁻ → La(OH)₃."},
{"formula": "Ce(OH)₄", "group": "base", "level": "hard", "trad": ["hidróxido cérico"], "stock": ["hidróxido de cerio (IV)"], "sist": ["tetrahidróxido de cerio"], "hint": "Ce⁴⁺ (EO mayor del cerio) → -ico → cérico. Ce⁴⁺ + 4OH⁻."},
{"formula": "H₂MnO₃", "group": "ac-ox", "level": "hard", "trad": ["ácido manganoso"], "stock": [], "sist": [], "hint": "MnO₂ (anhídrido manganoso, Mn +4) + H₂O → H₂MnO₃. -oso: el menor de los EO del Mn como no metal (+4/+6/+7)."},
{"formula": "HCrO₂", "group": "ac-ox", "level": "hard", "trad": ["ácido cromoso"], "stock": [], "sist": [], "hint": "Cr con EO +3 → -oso → ácido cromoso. H + CrO₂⁻ (cromito)."},
{"formula": "H₂S₂O₃", "group": "ac-ox", "level": "hard", "trad": ["ácido tiosulfúrico"], "stock": [], "sist": [], "hint": "Ácido sulfúrico (H₂SO₄) con un O reemplazado por S: prefijo tio- → ácido tiosulfúrico. Su sal de sodio se usa en fotografía."},
{"formula": "H₂SnO₂", "group": "ac-ox", "level": "hard", "trad": ["ácido estannoso"], "stock": [], "sist": [], "hint": "SnO (Sn +2) + H₂O → H₂SnO₂. -oso: EO menor del estaño."},
{"formula": "H₂SnO₃", "group": "ac-ox", "level": "hard", "trad": ["ácido estánnico"], "stock": [], "sist": [], "hint": "SnO₂ (anhídrido estánnico, Sn +4) + H₂O → H₂SnO₃. -ico: EO mayor del estaño."},
{"formula": "H₂PbO₂", "group": "ac-ox", "level": "hard", "trad": ["ácido plumboso"], "stock": [], "sist": [], "hint": "PbO (Pb +2) + H₂O → H₂PbO₂. -oso: EO menor del plomo."},
{"formula": "H₂PbO₃", "group": "ac-ox", "level": "hard", "trad": ["ácido plúmbico"], "stock": [], "sist": [], "hint": "PbO₂ (anhídrido plúmbico, Pb +4) + H₂O → H₂PbO₃. -ico: EO mayor del plomo."},
{"formula": "H₂SeO₂", "group": "ac-ox", "level": "hard", "trad": ["ácido hiposelenioso"], "stock": [], "sist": [], "hint": "Se con EO +2 → hipo- … -oso → ácido hiposelenioso (mismo patrón que H₂SO₂, ácido hiposulfuroso)."},
{"formula": "H₂TeO₂", "group": "ac-ox", "level": "hard", "trad": ["ácido hipoteluroso"], "stock": [], "sist": [], "hint": "Te con EO +2 → hipo- … -oso → ácido hipoteluroso (mismo patrón que el azufre y el selenio)."},
{"formula": "Al₂S₃", "group": "sal-bin", "level": "easy", "trad": ["sulfuro de aluminio"], "stock": [], "sist": ["trisulfuro de dialuminio"], "hint": "Al³⁺ + S²⁻. Cruce de cargas: Al₂S₃. 2(+3)+3(−2)=0."},
{"formula": "PbI₂", "group": "sal-bin", "level": "medium", "trad": ["yoduro plumboso"], "stock": ["yoduro de plomo (II)"], "sist": ["diyoduro de plomo"], "hint": "Pb²⁺ (EO menor) → plumboso. Pb²⁺ + 2I⁻ → PbI₂: el precipitado amarillo de la «lluvia de oro»."},
{"formula": "NH₄Cl", "group": "sal-bin", "level": "easy", "trad": ["cloruro de amonio"], "stock": [], "sist": ["cloruro de amonio"], "hint": "NH₄⁺ (catión amonio, carga +1) + Cl⁻ → NH₄Cl. Sal binaria con catión poliatómico."},
{"formula": "NH₄Br", "group": "sal-bin", "level": "medium", "trad": ["bromuro de amonio"], "stock": [], "sist": ["bromuro de amonio"], "hint": "NH₄⁺ + Br⁻ → NH₄Br. El amonio se nombra igual que un metal de valencia +1."},
{"formula": "FeBr₃", "group": "sal-bin", "level": "medium", "trad": ["bromuro férrico"], "stock": ["bromuro de hierro (III)"], "sist": ["tribromuro de hierro"], "hint": "Fe³⁺ (EO mayor) → férrico. Fe³⁺ + 3Br⁻ → FeBr₃."},
{"formula": "FeI₂", "group": "sal-bin", "level": "medium", "trad": ["yoduro ferroso"], "stock": ["yoduro de hierro (II)"], "sist": ["diyoduro de hierro"], "hint": "Fe²⁺ (EO menor) → ferroso. Fe²⁺ + 2I⁻ → FeI₂."},
{"formula": "CuBr₂", "group": "sal-bin", "level": "medium", "trad": ["bromuro cúprico"], "stock": ["bromuro de cobre (II)"], "sist": ["dibromuro de cobre"], "hint": "Cu²⁺ (EO mayor) → cúprico. Cu²⁺ + 2Br⁻ → CuBr₂."},
{"formula": "CuI", "group": "sal-bin", "level": "medium", "trad": ["yoduro cuproso"], "stock": ["yoduro de cobre (I)"], "sist": ["monoyoduro de cobre"], "hint": "Cu⁺ (EO menor) → cuproso. Cu⁺ + I⁻ → CuI."},
{"formula": "Ag₂S", "group": "sal-bin", "level": "easy", "trad": ["sulfuro de plata"], "stock": [], "sist": ["sulfuro de diplata"], "hint": "Ag⁺ + S²⁻ → Ag₂S. Es la capa negra que oscurece los objetos de plata."},
{"formula": "HgS", "group": "sal-bin", "level": "medium", "trad": ["sulfuro mercúrico"], "stock": ["sulfuro de mercurio (II)"], "sist": ["monosulfuro de mercurio"], "hint": "Hg²⁺ (EO mayor) → mercúrico. Hg²⁺ + S²⁻ → HgS (cinabrio, mena del mercurio)."},
{"formula": "CdS", "group": "sal-bin", "level": "medium", "trad": ["sulfuro de cadmio"], "stock": [], "sist": ["sulfuro de cadmio"], "hint": "Cd tiene valencia +2. Cd²⁺ + S²⁻ → CdS (pigmento amarillo)."},
{"formula": "MnS", "group": "sal-bin", "level": "medium", "trad": ["sulfuro manganoso"], "stock": ["sulfuro de manganeso (II)"], "sist": ["monosulfuro de manganeso"], "hint": "Mn²⁺ (EO menor) → manganoso. Mn²⁺ + S²⁻ → MnS."},
{"formula": "NiS", "group": "sal-bin", "level": "medium", "trad": ["sulfuro niqueloso"], "stock": ["sulfuro de níquel (II)"], "sist": ["monosulfuro de níquel"], "hint": "Ni²⁺ (EO menor) → niqueloso. Ni²⁺ + S²⁻ → NiS."},
{"formula": "CoS", "group": "sal-bin", "level": "medium", "trad": ["sulfuro cobaltoso"], "stock": ["sulfuro de cobalto (II)"], "sist": ["monosulfuro de cobalto"], "hint": "Co²⁺ (EO menor) → cobaltoso. Co²⁺ + S²⁻ → CoS."},
{"formula": "Mg₃N₂", "group": "sal-bin", "level": "medium", "trad": ["nitruro de magnesio"], "stock": [], "sist": ["dinitruro de trimagnesio"], "hint": "Mg²⁺ + N³⁻ (nitruro). Cruce de cargas: Mg₃N₂. 3(+2)+2(−3)=0."},
{"formula": "Li₃N", "group": "sal-bin", "level": "medium", "trad": ["nitruro de litio"], "stock": [], "sist": ["nitruro de trilitio"], "hint": "Li⁺ + N³⁻ → Li₃N. 3(+1)+(−3)=0."},
{"formula": "AlN", "group": "sal-bin", "level": "medium", "trad": ["nitruro de aluminio"], "stock": [], "sist": ["nitruro de aluminio"], "hint": "Al³⁺ + N³⁻ → AlN. Las cargas se cancelan 1:1."},
{"formula": "Ca₃P₂", "group": "sal-bin", "level": "hard", "trad": ["fosfuro de calcio"], "stock": [], "sist": ["difosfuro de tricalcio"], "hint": "Ca²⁺ + P³⁻ (fosfuro). Cruce de cargas: Ca₃P₂. 3(+2)+2(−3)=0."},
{"formula": "Na₂Se", "group": "sal-bin", "level": "hard", "trad": ["seleniuro de sodio"], "stock": [], "sist": ["seleniuro de disodio"], "hint": "Na⁺ + Se²⁻ (seleniuro, como el sulfuro). Cruce de cargas: Na₂Se."},
{"formula": "SnBr₄", "group": "sal-bin", "level": "medium", "trad": ["bromuro estánnico"], "stock": ["bromuro de estaño (IV)"], "sist": ["tetrabromuro de estaño"], "hint": "Sn⁴⁺ (EO mayor) → estánnico. Sn⁴⁺ + 4Br⁻ → SnBr₄."},
{"formula": "FeF₃", "group": "sal-bin", "level": "medium", "trad": ["fluoruro férrico"], "stock": ["fluoruro de hierro (III)"], "sist": ["trifluoruro de hierro"], "hint": "Fe³⁺ (EO mayor) → férrico. Fe³⁺ + 3F⁻ → FeF₃."},
{"formula": "KNO₂", "group": "sal-ox", "level": "easy", "trad": ["nitrito de potasio"], "stock": [], "sist": [], "hint": "NO₂⁻ = nitrito (de HNO₂, ácido nitroso). K⁺ + NO₂⁻ → nitrito de potasio."},
{"formula": "Ca(NO₂)₂", "group": "sal-ox", "level": "medium", "trad": ["nitrito de calcio"], "stock": [], "sist": [], "hint": "Ca²⁺ + 2NO₂⁻ → Ca(NO₂)₂. -oso del ácido → -ito en la sal."},
{"formula": "NaBrO₃", "group": "sal-ox", "level": "medium", "trad": ["bromato de sodio"], "stock": [], "sist": [], "hint": "BrO₃⁻ = bromato (de HBrO₃, ácido brómico). -ico del ácido → -ato en la sal."},
{"formula": "KIO₃", "group": "sal-ox", "level": "easy", "trad": ["yodato de potasio"], "stock": [], "sist": [], "hint": "IO₃⁻ = yodato. Se agrega a la sal de cocina para prevenir el bocio por falta de yodo."},
{"formula": "Na₂CrO₄", "group": "sal-ox", "level": "medium", "trad": ["cromato de sodio"], "stock": [], "sist": [], "hint": "CrO₄²⁻ = cromato (de H₂CrO₄). 2Na⁺ + CrO₄²⁻ → Na₂CrO₄."},
{"formula": "Na₂Cr₂O₇", "group": "sal-ox", "level": "medium", "trad": ["dicromato de sodio"], "stock": [], "sist": [], "hint": "Cr₂O₇²⁻ = dicromato (de H₂Cr₂O₇). 2Na⁺ + Cr₂O₇²⁻ → Na₂Cr₂O₇."},
{"formula": "NaMnO₄", "group": "sal-ox", "level": "medium", "trad": ["permanganato de sodio"], "stock": [], "sist": [], "hint": "MnO₄⁻ = permanganato (de HMnO₄, ácido permangánico). per-…-ico → per-…-ato."},
{"formula": "K₂MnO₄", "group": "sal-ox", "level": "hard", "trad": ["manganato de potasio"], "stock": [], "sist": [], "hint": "MnO₄²⁻ = manganato (de H₂MnO₄, ácido mangánico). Ojo: no confundir con el permanganato MnO₄⁻."},
{"formula": "CuCO₃", "group": "sal-ox", "level": "medium", "trad": ["carbonato cúprico"], "stock": [], "sist": [], "hint": "Cu²⁺ (EO mayor) + CO₃²⁻ → carbonato cúprico. Al calentarlo se descompone en CuO y CO₂."},
{"formula": "FeCO₃", "group": "sal-ox", "level": "medium", "trad": ["carbonato ferroso"], "stock": [], "sist": [], "hint": "Fe²⁺ (EO menor) + CO₃²⁻ → carbonato ferroso (siderita, mineral de hierro)."},
{"formula": "PbCO₃", "group": "sal-ox", "level": "medium", "trad": ["carbonato plumboso"], "stock": [], "sist": [], "hint": "Pb²⁺ (EO menor) + CO₃²⁻ → carbonato plumboso."},
{"formula": "Ca(ClO)₂", "group": "sal-ox", "level": "easy", "trad": ["hipoclorito de calcio"], "stock": [], "sist": [], "hint": "ClO⁻ = hipoclorito. Ca²⁺ + 2ClO⁻ → Ca(ClO)₂. Se usa para clorar el agua de piscinas y tanques."},
{"formula": "Na₂SiO₃", "group": "sal-ox", "level": "medium", "trad": ["silicato de sodio"], "stock": [], "sist": [], "hint": "SiO₃²⁻ = silicato (de H₂SiO₃, ácido silícico). 2Na⁺ + SiO₃²⁻ → Na₂SiO₃."},
{"formula": "Na₂S₂O₃", "group": "sal-ox", "level": "hard", "trad": ["tiosulfato de sodio"], "stock": [], "sist": [], "hint": "S₂O₃²⁻ = tiosulfato (de H₂S₂O₃). 2Na⁺ + S₂O₃²⁻. Se usa como fijador en fotografía."},
{"formula": "(NH₄)₂SO₄", "group": "sal-ox", "level": "easy", "trad": ["sulfato de amonio"], "stock": [], "sist": [], "hint": "2NH₄⁺ + SO₄²⁻ → (NH₄)₂SO₄. Fertilizante nitrogenado muy usado en el campo."},
{"formula": "Ca(ClO₄)₂", "group": "sal-ox", "level": "medium", "trad": ["perclorato de calcio"], "stock": [], "sist": [], "hint": "ClO₄⁻ = perclorato (de HClO₄, ácido perclórico). Ca²⁺ + 2ClO₄⁻ → Ca(ClO₄)₂."},
{"formula": "Ca(HS)₂", "group": "sal-ac", "level": "medium", "trad": ["bisulfuro de calcio"], "stock": ["hidrogenosulfuro de calcio"], "sist": [], "hint": "Ca²⁺ + 2HS⁻ (el S²⁻ retuvo 1 H⁺). Sal ácida de un hidrácido: bi- / hidrogeno-."},
{"formula": "Ba(HS)₂", "group": "sal-ac", "level": "medium", "trad": ["bisulfuro de bario"], "stock": ["hidrogenosulfuro de bario"], "sist": [], "hint": "Ba²⁺ + 2HS⁻ → Ba(HS)₂. Mismo patrón que el NaHS."},
{"formula": "Zn(HCO₃)₂", "group": "sal-ac", "level": "medium", "trad": ["bicarbonato de zinc"], "stock": ["hidrogenocarbonato de zinc"], "sist": [], "hint": "Zn²⁺ + 2HCO₃⁻ → Zn(HCO₃)₂."},
{"formula": "Cu(HCO₃)₂", "group": "sal-ac", "level": "hard", "trad": ["bicarbonato cúprico"], "stock": ["hidrogenocarbonato de cobre (II)"], "sist": [], "hint": "Cu²⁺ (EO mayor) + 2HCO₃⁻ → bicarbonato cúprico."},
{"formula": "Al(HSO₄)₃", "group": "sal-ac", "level": "hard", "trad": ["bisulfato de aluminio"], "stock": ["hidrogenosulfato de aluminio"], "sist": [], "hint": "Al³⁺ + 3HSO₄⁻ (el SO₄²⁻ retuvo 1 H⁺) → Al(HSO₄)₃."},
{"formula": "LiH₂PO₄", "group": "sal-ac", "level": "hard", "trad": ["fosfato diácido de litio"], "stock": ["dihidrogenofosfato de litio"], "sist": [], "hint": "Li⁺ + H₂PO₄⁻ (el PO₄³⁻ retuvo 2 H⁺) → «di-hidrogeno»."},
{"formula": "Ca(HSO₄)₂", "group": "sal-ac", "level": "medium", "trad": ["bisulfato de calcio"], "stock": ["hidrogenosulfato de calcio"], "sist": [], "hint": "Ca²⁺ + 2HSO₄⁻ → Ca(HSO₄)₂."},
{"formula": "Mg(HSO₄)₂", "group": "sal-ac", "level": "medium", "trad": ["bisulfato de magnesio"], "stock": ["hidrogenosulfato de magnesio"], "sist": [], "hint": "Mg²⁺ + 2HSO₄⁻ → Mg(HSO₄)₂."},
{"formula": "NH₄HSO₃", "group": "sal-ac", "level": "medium", "trad": ["bisulfito de amonio"], "stock": ["hidrogenosulfito de amonio"], "sist": [], "hint": "NH₄⁺ + HSO₃⁻ (el SO₃²⁻ retuvo 1 H⁺) → bisulfito de amonio."},
{"formula": "C₆H₁₂O₆", "group": "mol-masa", "level": "medium", "masa_molar": 180.156, "formula_calc": "6(12.011) + 12(1.008) + 6(15.999) = 72.066 + 12.096 + 95.994 = 180.156", "hint": "C₆H₁₂O₆: 6 C + 12 H + 6 O → 180.156 g/mol", "col": "La glucosa es el azúcar que las células usan como fuente de energía."},
{"formula": "C₂H₅OH", "group": "mol-masa", "level": "medium", "masa_molar": 46.069, "formula_calc": "2(12.011) + 6(1.008) + 15.999 = 24.022 + 6.048 + 15.999 = 46.069", "hint": "C₂H₅OH: 2 C + 6 H + 1 O → 46.069 g/mol", "col": "El etanol se produce en Colombia a partir de la caña de azúcar y se mezcla con la gasolina."},
{"formula": "CH₃COOH", "group": "mol-masa", "level": "medium", "masa_molar": 60.052, "formula_calc": "2(12.011) + 4(1.008) + 2(15.999) = 24.022 + 4.032 + 31.998 = 60.052", "hint": "CH₃COOH: 2 C + 4 H + 2 O → 60.052 g/mol", "col": "El vinagre de cocina es una solución diluida de ácido acético."},
{"formula": "C₁₂H₂₂O₁₁", "group": "mol-masa", "level": "hard", "masa_molar": 342.297, "formula_calc": "12(12.011) + 22(1.008) + 11(15.999) = 144.132 + 22.176 + 175.989 = 342.297", "hint": "C₁₂H₂₂O₁₁: 12 C + 22 H + 11 O → 342.297 g/mol", "col": "La sacarosa es el azúcar principal de la caña, de la que se hace la panela."},
{"formula": "C₃H₈", "group": "mol-masa", "level": "easy", "masa_molar": 44.097, "formula_calc": "3(12.011) + 8(1.008) = 36.033 + 8.064 = 44.097", "hint": "C₃H₈: 3 C + 8 H → 44.097 g/mol", "col": "El propano es el principal componente del gas de cilindro (GLP) que se usa en muchas cocinas."},
{"formula": "H₃PO₄", "group": "mol-masa", "level": "medium", "masa_molar": 97.994, "formula_calc": "3(1.008) + 4(15.999) + 30.974 = 3.024 + 63.996 + 30.974 = 97.994", "hint": "H₃PO₄: 3 H + 4 O + 1 P → 97.994 g/mol", "col": "El ácido fosfórico se usa en fertilizantes y en algunas bebidas gaseosas."},
{"formula": "KOH", "group": "mol-masa", "level": "easy", "masa_molar": 56.105, "formula_calc": "1.008 + 15.999 + 39.098 = 56.105", "hint": "KOH: 1 H + 1 O + 1 K → 56.105 g/mol", "col": "El hidróxido de potasio se usa para fabricar jabones líquidos."},
{"formula": "Mg(OH)₂", "group": "mol-masa", "level": "easy", "masa_molar": 58.319, "formula_calc": "2(1.008) + 2(15.999) + 24.305 = 2.016 + 31.998 + 24.305 = 58.319", "hint": "Mg(OH)₂: 2 H + 2 O + 1 Mg → 58.319 g/mol", "col": "La leche de magnesia es una suspensión de hidróxido de magnesio usada como antiácido."},
{"formula": "NaClO", "group": "mol-masa", "level": "easy", "masa_molar": 74.439, "formula_calc": "15.999 + 22.990 + 35.45 = 74.439", "hint": "NaClO: 1 O + 1 Na + 1 Cl → 74.439 g/mol", "col": "El hipoclorito de sodio es el principio activo del blanqueador de uso doméstico."},
{"formula": "SO₂", "group": "mol-masa", "level": "easy", "masa_molar": 64.058, "formula_calc": "2(15.999) + 32.06 = 31.998 + 32.06 = 64.058", "hint": "SO₂: 2 O + 1 S → 64.058 g/mol", "col": "El dióxido de azufre se libera al quemar combustibles que contienen azufre."},
{"id": "rx-070", "group": "reaccion", "level": "easy", "ecuacion": "2Cu + O₂ → 2CuO", "tipo_rx": "sintesis", "hint": "Metal + O₂ → óxido básico. A + B → AB.", "col": "El cobre de los cables se oscurece con el tiempo porque se forma una capa de óxido."},
{"id": "rx-071", "group": "reaccion", "level": "easy", "ecuacion": "SO₂ + H₂O → H₂SO₃", "tipo_rx": "sintesis", "hint": "Anhídrido + agua → ácido oxácido. A + B → AB.", "col": "El SO₂ de la quema de combustibles con azufre forma ácidos con el agua de lluvia: es el origen de la lluvia ácida."},
{"id": "rx-072", "group": "reaccion", "level": "easy", "ecuacion": "Na₂O + H₂O → 2NaOH", "tipo_rx": "sintesis", "hint": "Óxido básico + agua → hidróxido. A + B → AB.", "col": "Los óxidos de metales alcalinos reaccionan con el agua y forman bases fuertes como la soda cáustica."},
{"id": "rx-073", "group": "reaccion", "level": "medium", "ecuacion": "2NaCl → 2Na + Cl₂", "tipo_rx": "descomposicion", "hint": "Un solo reactivo se separa en dos sustancias simples (por electrólisis). AB → A + B.", "col": "La electrólisis de la sal fundida produce sodio metálico y cloro gaseoso."},
{"id": "rx-074", "group": "reaccion", "level": "hard", "ecuacion": "2Ag₂O → 4Ag + O₂", "tipo_rx": "descomposicion", "hint": "Al calentar el óxido de plata se separa en plata y oxígeno. AB → A + B.", "col": "El óxido de plata se descompone con el calor: un ejemplo clásico de laboratorio de descomposición térmica."},
{"id": "rx-075", "group": "reaccion", "level": "easy", "ecuacion": "ZnCO₃ → ZnO + CO₂", "tipo_rx": "descomposicion", "hint": "Un carbonato se descompone por calor en óxido + CO₂. AB → A + B.", "col": "Los carbonatos metálicos liberan CO₂ al calentarse, igual que la caliza en los hornos de cal."},
{"id": "rx-076", "group": "reaccion", "level": "easy", "ecuacion": "Fe + 2HCl → FeCl₂ + H₂", "tipo_rx": "sus-simple", "hint": "El hierro desplaza al hidrógeno del ácido. A + BC → AC + B.", "col": "El ácido muriático (HCl) ataca las herramientas de hierro y libera burbujas de hidrógeno."},
{"id": "rx-077", "group": "reaccion", "level": "medium", "ecuacion": "Cl₂ + 2KBr → 2KCl + Br₂", "tipo_rx": "sus-simple", "hint": "El cloro (más reactivo) desplaza al bromo. A + BC → AC + B.", "col": "Los halógenos más reactivos desplazan a los menos reactivos de sus sales: Cl₂ > Br₂ > I₂."},
{"id": "rx-078", "group": "reaccion", "level": "easy", "ecuacion": "2K + 2H₂O → 2KOH + H₂", "tipo_rx": "sus-simple", "hint": "El potasio desplaza al hidrógeno del agua. A + BC → AC + B.", "col": "Los metales alcalinos reaccionan violentamente con el agua; por eso se guardan en aceite."},
{"id": "rx-079", "group": "reaccion", "level": "medium", "ecuacion": "CuSO₄ + 2NaOH → Cu(OH)₂ + Na₂SO₄", "tipo_rx": "sus-doble", "hint": "Intercambio de iones; precipita el hidróxido de cobre (azul). AB + CD → AD + CB.", "col": "La aparición de un precipitado azul de Cu(OH)₂ sirve para identificar iones Cu²⁺ en el laboratorio."},
{"id": "rx-080", "group": "reaccion", "level": "easy", "ecuacion": "AgNO₃ + KCl → AgCl + KNO₃", "tipo_rx": "sus-doble", "hint": "Intercambio de iones; precipita AgCl (blanco). AB + CD → AD + CB.", "col": "El precipitado blanco de AgCl permite detectar cloruros en una muestra de agua."},
{"id": "rx-081", "group": "reaccion", "level": "medium", "ecuacion": "Na₂S + 2HCl → 2NaCl + H₂S", "tipo_rx": "sus-doble", "hint": "Intercambio de iones; se libera H₂S (gas con olor a huevo podrido). AB + CD → AD + CB.", "col": "El olor a huevo podrido de algunas aguas termales se debe al H₂S."},
{"id": "rx-082", "group": "reaccion", "level": "medium", "ecuacion": "C₅H₁₂ + 8O₂ → 5CO₂ + 6H₂O", "tipo_rx": "combustion", "hint": "Pentano (hidrocarburo) + O₂ → CO₂ + H₂O. Combustión completa.", "col": "El pentano es uno de los componentes de la gasolina."},
{"id": "rx-083", "group": "reaccion", "level": "medium", "ecuacion": "2CH₃OH + 3O₂ → 2CO₂ + 4H₂O", "tipo_rx": "combustion", "hint": "Metanol (alcohol) + O₂ → CO₂ + H₂O. Combustión completa.", "col": "El metanol arde con una llama casi invisible; se usa como combustible en algunos laboratorios."},
{"id": "rx-084", "group": "reaccion", "level": "easy", "ecuacion": "HNO₃ + KOH → KNO₃ + H₂O", "tipo_rx": "neutralizacion", "hint": "Ácido + base → sal + agua.", "col": "El nitrato de potasio que se forma se usa como fertilizante."},
{"id": "rx-085", "group": "reaccion", "level": "easy", "ecuacion": "2HCl + Mg(OH)₂ → MgCl₂ + 2H₂O", "tipo_rx": "neutralizacion", "hint": "Ácido + base → sal + agua.", "col": "La leche de magnesia (Mg(OH)₂) neutraliza el exceso de ácido clorhídrico del estómago."},
{"id": "bal-051", "group": "balanceo", "level": "easy", "ecuacion_sin_coef": "Fe + Cl₂ → FeCl₃", "coeficientes": [2, 3, 2], "especies": ["Fe", "Cl₂", "FeCl₃"], "hint": "Cl₂ aporta 2 Cl y FeCl₃ tiene 3: mínimo común 6 → 3Cl₂ y 2FeCl₃ → 2Fe.", "col": "El cloruro férrico se usa para tratar agua y para grabar circuitos impresos."},
{"id": "bal-052", "group": "balanceo", "level": "easy", "ecuacion_sin_coef": "Al + Cl₂ → AlCl₃", "coeficientes": [2, 3, 2], "especies": ["Al", "Cl₂", "AlCl₃"], "hint": "Mismo patrón que el hierro: 6 Cl → 3Cl₂ y 2AlCl₃ → 2Al.", "col": "El cloruro de aluminio se usa como catalizador en la industria química."},
{"id": "bal-053", "group": "balanceo", "level": "medium", "ecuacion_sin_coef": "C₂H₆ + O₂ → CO₂ + H₂O", "coeficientes": [2, 7, 4, 6], "especies": ["C₂H₆", "O₂", "CO₂", "H₂O"], "hint": "C: 2 → 2CO₂; H: 6 → 3H₂O; O: 7 → 7/2 O₂. Se duplica todo: 2, 7, 4, 6.", "col": "El etano forma parte del gas natural."},
{"id": "bal-054", "group": "balanceo", "level": "easy", "ecuacion_sin_coef": "KClO₃ → KCl + O₂", "coeficientes": [2, 2, 3], "especies": ["KClO₃", "KCl", "O₂"], "hint": "O: 3 a la izquierda y 2 a la derecha → mínimo común 6 → 2KClO₃ y 3O₂.", "col": "Esta descomposición se usa en laboratorio para obtener oxígeno."},
{"id": "bal-055", "group": "balanceo", "level": "medium", "ecuacion_sin_coef": "Na₂O₂ + H₂O → NaOH + O₂", "coeficientes": [2, 2, 4, 1], "especies": ["Na₂O₂", "H₂O", "NaOH", "O₂"], "hint": "Na: 2 → 2NaOH; luego O y H. Con 2Na₂O₂ salen 4NaOH y 1 O₂.", "col": "El peróxido de sodio libera oxígeno con el agua; se ha usado para regenerar aire en espacios cerrados."},
{"id": "bal-056", "group": "balanceo", "level": "medium", "ecuacion_sin_coef": "Al(OH)₃ + H₂SO₄ → Al₂(SO₄)₃ + H₂O", "coeficientes": [2, 3, 1, 6], "especies": ["Al(OH)₃", "H₂SO₄", "Al₂(SO₄)₃", "H₂O"], "hint": "Al: 2 → 2Al(OH)₃; SO₄: 3 → 3H₂SO₄; H: 6+6=12 → 6H₂O.", "col": "El hidróxido de aluminio es un componente común de los antiácidos."},
{"id": "bal-057", "group": "balanceo", "level": "hard", "ecuacion_sin_coef": "Ca(OH)₂ + H₃PO₄ → Ca₃(PO₄)₂ + H₂O", "coeficientes": [3, 2, 1, 6], "especies": ["Ca(OH)₂", "H₃PO₄", "Ca₃(PO₄)₂", "H₂O"], "hint": "Ca: 3 → 3Ca(OH)₂; PO₄: 2 → 2H₃PO₄; H: 6+6=12 → 6H₂O.", "col": "El fosfato de calcio es el principal mineral de huesos y dientes."},
{"id": "bal-058", "group": "balanceo", "level": "medium", "ecuacion_sin_coef": "C₆H₁₂O₆ + O₂ → CO₂ + H₂O", "coeficientes": [1, 6, 6, 6], "especies": ["C₆H₁₂O₆", "O₂", "CO₂", "H₂O"], "hint": "C: 6 → 6CO₂; H: 12 → 6H₂O; O: 12+6=18 → 18−6=12 → 6O₂.", "col": "Es la ecuación global de la respiración celular."},
{"id": "bal-059", "group": "balanceo", "level": "hard", "ecuacion_sin_coef": "Cu + HNO₃ → Cu(NO₃)₂ + NO₂ + H₂O", "coeficientes": [1, 4, 1, 2, 2], "especies": ["Cu", "HNO₃", "Cu(NO₃)₂", "NO₂", "H₂O"], "hint": "Cu: 1; N: 2 en la sal + 2 en NO₂ = 4 HNO₃; H: 4 → 2H₂O. O: 12 = 6+4+2.", "col": "Con ácido nítrico concentrado el cobre libera NO₂, un gas café rojizo."},
{"id": "bal-060", "group": "balanceo", "level": "easy", "ecuacion_sin_coef": "NH₄NO₃ → N₂O + H₂O", "coeficientes": [1, 1, 2], "especies": ["NH₄NO₃", "N₂O", "H₂O"], "hint": "N: 2 = 2; H: 4 → 2H₂O; O: 3 = 1 + 2.", "col": "La descomposición del nitrato de amonio produce N₂O, el «gas de la risa»."},
{"id": "bal-061", "group": "balanceo", "level": "easy", "ecuacion_sin_coef": "Mg + N₂ → Mg₃N₂", "coeficientes": [3, 1, 1], "especies": ["Mg", "N₂", "Mg₃N₂"], "hint": "Mg: 3 → 3Mg; N: 2 = 2.", "col": "Al arder en el aire, parte del magnesio reacciona con el nitrógeno y forma nitruro."},
{"id": "bal-062", "group": "balanceo", "level": "medium", "ecuacion_sin_coef": "H₂S + O₂ → SO₂ + H₂O", "coeficientes": [2, 3, 2, 2], "especies": ["H₂S", "O₂", "SO₂", "H₂O"], "hint": "S: 1=1; H: 2 → 1H₂O; O: 2+1=3 → 3/2 O₂. Se duplica: 2, 3, 2, 2.", "col": "El H₂S de los gases volcánicos y de los pozos petroleros se quema y produce SO₂."},
{"formula": "Mn₂O₃", "group": "ox-bas", "level": "hard", "trad": ["óxido mangánico"], "stock": ["óxido de manganeso (III)"], "sist": ["trióxido de dimanganeso"], "hint": "Mn³⁺ es el EO mayor del manganeso como catión (+2/+3) → -ico → óxido mangánico. 2(+3)+3(−2)=0."},
{"formula": "PdO₂", "group": "ox-bas", "level": "hard", "trad": ["óxido paládico"], "stock": ["óxido de paladio (IV)"], "sist": ["dióxido de paladio"], "hint": "Pd⁴⁺ es el EO mayor del paladio (+2/+4) → -ico → óxido paládico. Pd⁴⁺ + 2O²⁻ → PdO₂."},
{"formula": "Ti(OH)₄", "group": "base", "level": "hard", "trad": ["hidróxido titánico"], "stock": ["hidróxido de titanio (IV)"], "sist": ["tetrahidróxido de titanio"], "hint": "Ti⁴⁺ (EO mayor, como en el TiO₂ óxido titánico) → -ico → titánico. Ti⁴⁺ + 4OH⁻."},
{"formula": "HCNO", "group": "ac-ox", "level": "hard", "trad": ["ácido ciánico"], "stock": [], "sist": [], "hint": "H + OCN⁻ (cianato). A diferencia del HCN (ácido cianhídrico, sin oxígeno), este sí tiene oxígeno → oxácido. Su sal de sodio es el cianato de sodio."},
// ── Ampliación de noviembre de 2026 (+15–20 % por grupo) ──
{"formula": "Tl₂O", "group": "ox-bas", "level": "hard", "trad": ["óxido talioso"], "stock": ["óxido de talio (I)"], "sist": ["óxido de ditalio"], "hint": "Tl⁺ es el EO menor del talio (+1, +3) → -oso → talioso. 2Tl⁺ + O²⁻ → Tl₂O."},
{"formula": "Tl₂O₃", "group": "ox-bas", "level": "hard", "trad": ["óxido tálico"], "stock": ["óxido de talio (III)"], "sist": ["trióxido de ditalio"], "hint": "Tl³⁺ es el EO mayor del talio → -ico → tálico. 2(+3) + 3(−2) = 0."},
{"formula": "Ti₂O₃", "group": "ox-bas", "level": "hard", "trad": ["óxido titanoso"], "stock": ["óxido de titanio (III)"], "sist": ["trióxido de dititanio"], "hint": "Ti³⁺ es el EO menor del titanio (+3, +4) → titanoso. Con Ti⁴⁺ se forma el TiO₂ (titánico)."},
{"formula": "HfO₂", "group": "ox-bas", "level": "hard", "trad": ["óxido de hafnio"], "stock": [], "sist": ["dióxido de hafnio"], "hint": "El hafnio actúa con valencia +4 (como el circonio). Hf⁴⁺ + 2O²⁻ → HfO₂. Se usa en chips de computador."},
{"formula": "RaO", "group": "ox-bas", "level": "medium", "trad": ["óxido de radio"], "stock": [], "sist": ["óxido de radio"], "hint": "El radio es alcalinotérreo (grupo 2): valencia fija +2. Ra²⁺ + O²⁻ → RaO. Es radiactivo."},
{"formula": "Nd₂O₃", "group": "ox-bas", "level": "hard", "trad": ["óxido de neodimio"], "stock": [], "sist": ["trióxido de dineodimio"], "hint": "El neodimio (lantánido) actúa con +3. 2Nd³⁺ + 3O²⁻ → Nd₂O₃. El Nd forma los imanes más potentes (audífonos, motores eléctricos)."},
{"formula": "Gd₂O₃", "group": "ox-bas", "level": "hard", "trad": ["óxido de gadolinio"], "stock": [], "sist": ["trióxido de digadolinio"], "hint": "El gadolinio actúa con +3: Gd₂O₃. Sus compuestos se usan como medio de contraste en resonancias magnéticas."},
{"formula": "Dy₂O₃", "group": "ox-bas", "level": "hard", "trad": ["óxido de disprosio"], "stock": [], "sist": ["trióxido de didisprosio"], "hint": "El disprosio (lantánido) actúa con +3: 2(+3) + 3(−2) = 0 → Dy₂O₃."},
{"formula": "SeO", "group": "anhid", "level": "hard", "trad": ["anhídrido hiposelenioso"], "stock": ["óxido de selenio (II)"], "sist": ["monóxido de selenio"], "hint": "Se con EO = +2 (el menor de +2, +4, +6) → hipo-…-oso → hiposelenioso. Igual que el SO (hiposulfuroso)."},
{"formula": "TeO", "group": "anhid", "level": "hard", "trad": ["anhídrido hipoteluroso"], "stock": ["óxido de telurio (II)"], "sist": ["monóxido de telurio"], "hint": "Te con EO = +2 (el menor de +2, +4, +6) → hipoteluroso. Mismo patrón que el S y el Se."},
{"formula": "P₂O", "group": "anhid", "level": "hard", "trad": ["anhídrido hipofosforoso"], "stock": [], "sist": ["monóxido de difósforo"], "hint": "P con EO = +1 (el menor de +1, +3, +5) → hipo-…-oso → hipofosforoso. 2(+1) + (−2) = 0. Con agua daría el ácido hipofosforoso."},
{"formula": "GeO", "group": "anhid", "level": "hard", "trad": ["anhídrido germanoso"], "stock": ["óxido de germanio (II)"], "sist": ["monóxido de germanio"], "hint": "Ge con EO = +2 (el menor de +2, +4) → -oso → germanoso. Con +4 se forma el GeO₂ (germánico)."},
{"formula": "NiH₃", "group": "hidru", "level": "medium", "trad": ["hidruro niquélico"], "stock": ["hidruro de níquel (III)"], "sist": ["trihidruro de níquel"], "hint": "Ni³⁺ (EO mayor) → -ico → niquélico. Ni³⁺ + 3H⁻ → NiH₃."},
{"formula": "CoH₃", "group": "hidru", "level": "medium", "trad": ["hidruro cobáltico"], "stock": ["hidruro de cobalto (III)"], "sist": ["trihidruro de cobalto"], "hint": "Co³⁺ (EO mayor) → -ico → cobáltico. Co³⁺ + 3H⁻ → CoH₃."},
{"formula": "CuH₂", "group": "hidru", "level": "medium", "trad": ["hidruro cúprico"], "stock": ["hidruro de cobre (II)"], "sist": ["dihidruro de cobre"], "hint": "Cu²⁺ (EO mayor del cobre) → cúprico. Cu²⁺ + 2H⁻ → CuH₂."},
{"formula": "PtH₄", "group": "hidru", "level": "hard", "trad": ["hidruro platínico"], "stock": ["hidruro de platino (IV)"], "sist": ["tetrahidruro de platino"], "hint": "Pt⁴⁺ (EO mayor del platino: +2, +4) → platínico. Pt⁴⁺ + 4H⁻ → PtH₄."},
{"formula": "MnH₃", "group": "hidru", "level": "hard", "trad": ["hidruro mangánico"], "stock": ["hidruro de manganeso (III)"], "sist": ["trihidruro de manganeso"], "hint": "Mn³⁺ actuando como metal (EO mayor de +2, +3) → mangánico. Mn³⁺ + 3H⁻ → MnH₃."},
{"formula": "GaH₃", "group": "hidru", "level": "medium", "trad": ["hidruro de galio"], "stock": [], "sist": ["trihidruro de galio"], "hint": "El galio (grupo 13) tiene valencia fija +3, como el aluminio. Ga³⁺ + 3H⁻ → GaH₃."},
{"formula": "Pd(OH)₂", "group": "base", "level": "hard", "trad": ["hidróxido paladioso"], "stock": ["hidróxido de paladio (II)"], "sist": ["dihidróxido de paladio"], "hint": "Pd²⁺ (EO menor del paladio: +2, +4) → paladioso. Pd²⁺ + 2OH⁻ → Pd(OH)₂."},
{"formula": "Pd(OH)₄", "group": "base", "level": "hard", "trad": ["hidróxido paládico"], "stock": ["hidróxido de paladio (IV)"], "sist": ["tetrahidróxido de paladio"], "hint": "Pd⁴⁺ (EO mayor) → paládico. Pd⁴⁺ + 4OH⁻ → Pd(OH)₄."},
{"formula": "TlOH", "group": "base", "level": "hard", "trad": ["hidróxido talioso"], "stock": ["hidróxido de talio (I)"], "sist": ["hidróxido de talio"], "hint": "Tl⁺ (EO menor del talio: +1, +3) → talioso. Tl⁺ + OH⁻ → TlOH."},
{"formula": "Tl(OH)₃", "group": "base", "level": "hard", "trad": ["hidróxido tálico"], "stock": ["hidróxido de talio (III)"], "sist": ["trihidróxido de talio"], "hint": "Tl³⁺ (EO mayor) → tálico. Tl³⁺ + 3OH⁻ → Tl(OH)₃."},
{"formula": "Ce(OH)₃", "group": "base", "level": "hard", "trad": ["hidróxido ceroso"], "stock": ["hidróxido de cerio (III)"], "sist": ["trihidróxido de cerio"], "hint": "Ce³⁺ (EO menor del cerio: +3, +4) → ceroso. Con Ce⁴⁺ se forma el Ce(OH)₄ (cérico)."},
{"formula": "Sc(OH)₃", "group": "base", "level": "hard", "trad": ["hidróxido de escandio"], "stock": [], "sist": ["trihidróxido de escandio"], "hint": "El escandio tiene valencia fija +3. Sc³⁺ + 3OH⁻ → Sc(OH)₃."},
{"formula": "Y(OH)₃", "group": "base", "level": "hard", "trad": ["hidróxido de itrio"], "stock": [], "sist": ["trihidróxido de itrio"], "hint": "El itrio tiene valencia fija +3. Y³⁺ + 3OH⁻ → Y(OH)₃."},
{"formula": "Na₃N", "group": "sal-bin", "level": "medium", "trad": ["nitruro de sodio"], "stock": [], "sist": ["nitruro de trisodio"], "hint": "N³⁻ → nitruro. Se necesitan 3 Na⁺ para compensar la carga −3."},
{"formula": "Ca₃N₂", "group": "sal-bin", "level": "medium", "trad": ["nitruro de calcio"], "stock": [], "sist": ["dinitruro de tricalcio"], "hint": "Ca²⁺ + N³⁻. Cruce de cargas: Ca₃N₂. 3(+2) + 2(−3) = 0."},
{"formula": "AlP", "group": "sal-bin", "level": "medium", "trad": ["fosfuro de aluminio"], "stock": [], "sist": ["fosfuro de aluminio"], "hint": "Al³⁺ + P³⁻ → AlP (las cargas se cancelan 1:1). Se usa como fumigante de granos almacenados."},
{"formula": "Zn₃P₂", "group": "sal-bin", "level": "hard", "trad": ["fosfuro de zinc"], "stock": [], "sist": ["difosfuro de trizinc"], "hint": "Zn²⁺ + P³⁻. Cruce de cargas: Zn₃P₂. Se usa como raticida."},
{"formula": "K₂Se", "group": "sal-bin", "level": "hard", "trad": ["seleniuro de potasio"], "stock": [], "sist": ["seleniuro de dipotasio"], "hint": "Se²⁻ → seleniuro (como el sulfuro). 2K⁺ + Se²⁻ → K₂Se."},
{"formula": "FeBr₂", "group": "sal-bin", "level": "medium", "trad": ["bromuro ferroso"], "stock": ["bromuro de hierro (II)"], "sist": ["dibromuro de hierro"], "hint": "Fe²⁺ (EO menor) → ferroso. Fe²⁺ + 2Br⁻ → FeBr₂."},
{"formula": "CuBr", "group": "sal-bin", "level": "medium", "trad": ["bromuro cuproso"], "stock": ["bromuro de cobre (I)"], "sist": ["bromuro de cobre"], "hint": "Cu⁺ (EO menor) → cuproso. Cu⁺ + Br⁻ → CuBr."},
{"formula": "Cu₂S", "group": "sal-bin", "level": "medium", "trad": ["sulfuro cuproso"], "stock": ["sulfuro de cobre (I)"], "sist": ["sulfuro de dicobre"], "hint": "Cu⁺ (EO menor) → cuproso. 2Cu⁺ + S²⁻ → Cu₂S. Es la calcosina, un mineral de cobre."},
{"formula": "NiBr₂", "group": "sal-bin", "level": "medium", "trad": ["bromuro niqueloso"], "stock": ["bromuro de níquel (II)"], "sist": ["dibromuro de níquel"], "hint": "Ni²⁺ (EO menor) → niqueloso. Ni²⁺ + 2Br⁻ → NiBr₂."},
{"formula": "CoI₂", "group": "sal-bin", "level": "medium", "trad": ["yoduro cobaltoso"], "stock": ["yoduro de cobalto (II)"], "sist": ["diyoduro de cobalto"], "hint": "Co²⁺ (EO menor) → cobaltoso. Co²⁺ + 2I⁻ → CoI₂."},
{"formula": "PbBr₂", "group": "sal-bin", "level": "medium", "trad": ["bromuro plumboso"], "stock": ["bromuro de plomo (II)"], "sist": ["dibromuro de plomo"], "hint": "Pb²⁺ (EO menor) → plumboso. Pb²⁺ + 2Br⁻ → PbBr₂."},
{"formula": "SnI₂", "group": "sal-bin", "level": "medium", "trad": ["yoduro estannoso"], "stock": ["yoduro de estaño (II)"], "sist": ["diyoduro de estaño"], "hint": "Sn²⁺ (EO menor) → estannoso. Sn²⁺ + 2I⁻ → SnI₂."},
{"formula": "HgBr₂", "group": "sal-bin", "level": "hard", "trad": ["bromuro mercúrico"], "stock": ["bromuro de mercurio (II)"], "sist": ["dibromuro de mercurio"], "hint": "Hg²⁺ (EO mayor) → mercúrico. Hg²⁺ + 2Br⁻ → HgBr₂."},
{"formula": "MnBr₂", "group": "sal-bin", "level": "hard", "trad": ["bromuro manganoso"], "stock": ["bromuro de manganeso (II)"], "sist": ["dibromuro de manganeso"], "hint": "Mn²⁺ (EO menor como metal) → manganoso. Mn²⁺ + 2Br⁻ → MnBr₂."},
{"formula": "CrBr₃", "group": "sal-bin", "level": "hard", "trad": ["bromuro crómico"], "stock": ["bromuro de cromo (III)"], "sist": ["tribromuro de cromo"], "hint": "Cr³⁺ (EO mayor como metal: +2, +3) → crómico. Cr³⁺ + 3Br⁻ → CrBr₃."},
{"formula": "AuBr₃", "group": "sal-bin", "level": "hard", "trad": ["bromuro áurico"], "stock": ["bromuro de oro (III)"], "sist": ["tribromuro de oro"], "hint": "Au³⁺ (EO mayor) → áurico. Au³⁺ + 3Br⁻ → AuBr₃."},
{"formula": "PtCl₄", "group": "sal-bin", "level": "hard", "trad": ["cloruro platínico"], "stock": ["cloruro de platino (IV)"], "sist": ["tetracloruro de platino"], "hint": "Pt⁴⁺ (EO mayor) → platínico. Pt⁴⁺ + 4Cl⁻ → PtCl₄."},
{"formula": "NH₄I", "group": "sal-bin", "level": "medium", "trad": ["yoduro de amonio"], "stock": [], "sist": ["yoduro de amonio"], "hint": "NH₄⁺ (amonio, +1) + I⁻ (yoduro) → NH₄I. Sal binaria con catión poliatómico."},
{"formula": "GaCl₃", "group": "sal-bin", "level": "medium", "trad": ["cloruro de galio"], "stock": [], "sist": ["tricloruro de galio"], "hint": "El galio tiene valencia fija +3. Ga³⁺ + 3Cl⁻ → GaCl₃."},
{"formula": "FeF₂", "group": "sal-bin", "level": "medium", "trad": ["fluoruro ferroso"], "stock": ["fluoruro de hierro (II)"], "sist": ["difluoruro de hierro"], "hint": "Fe²⁺ (EO menor) → ferroso. Fe²⁺ + 2F⁻ → FeF₂."},
{"formula": "NH₄NO₃", "group": "sal-ox", "level": "medium", "trad": ["nitrato de amonio"], "stock": [], "sist": [], "hint": "NH₄⁺ (amonio) + NO₃⁻ (nitrato). Fertilizante nitrogenado muy usado en Colombia."},
{"formula": "PbSO₄", "group": "sal-ox", "level": "medium", "trad": ["sulfato plumboso"], "stock": [], "sist": [], "hint": "SO₄²⁻ = sulfato. Pb²⁺ (EO menor) → plumboso. Se forma en las placas de las baterías de los carros."},
{"formula": "KClO₂", "group": "sal-ox", "level": "easy", "trad": ["clorito de potasio"], "stock": [], "sist": [], "hint": "ClO₂⁻ = clorito (Cl con EO = +3, -oso → -ito). K⁺ → potasio."},
{"formula": "NaBrO", "group": "sal-ox", "level": "easy", "trad": ["hipobromito de sodio"], "stock": [], "sist": [], "hint": "BrO⁻ = hipobromito (Br con EO = +1, hipo-…-oso → hipo-…-ito). Na⁺ → sodio."},
{"formula": "KIO₄", "group": "sal-ox", "level": "medium", "trad": ["peryodato de potasio"], "stock": [], "sist": [], "hint": "IO₄⁻ = peryodato (I con EO = +7, per-…-ico → per-…-ato). K⁺ → potasio."},
{"formula": "NaIO₃", "group": "sal-ox", "level": "easy", "trad": ["yodato de sodio"], "stock": [], "sist": [], "hint": "IO₃⁻ = yodato (I con EO = +5, -ico → -ato). Se agrega a la sal de cocina para prevenir el bocio."},
{"formula": "Ba(ClO₃)₂", "group": "sal-ox", "level": "medium", "trad": ["clorato de bario"], "stock": [], "sist": [], "hint": "ClO₃⁻ = clorato. Ba²⁺ necesita dos ClO₃⁻. Da el color verde en la pólvora."},
{"formula": "Mg(ClO₄)₂", "group": "sal-ox", "level": "medium", "trad": ["perclorato de magnesio"], "stock": [], "sist": [], "hint": "ClO₄⁻ = perclorato (Cl con EO = +7). Mg²⁺ necesita dos ClO₄⁻."},
{"formula": "Fe(NO₃)₂", "group": "sal-ox", "level": "medium", "trad": ["nitrato ferroso"], "stock": [], "sist": [], "hint": "NO₃⁻ = nitrato. Fe²⁺ (EO menor) → ferroso. Fe²⁺ + 2NO₃⁻."},
{"formula": "Hg(NO₃)₂", "group": "sal-ox", "level": "hard", "trad": ["nitrato mercúrico"], "stock": [], "sist": [], "hint": "NO₃⁻ = nitrato. Hg²⁺ (EO mayor) → mercúrico."},
{"formula": "Zn₃(PO₄)₂", "group": "sal-ox", "level": "hard", "trad": ["fosfato de zinc"], "stock": [], "sist": [], "hint": "PO₄³⁻ = fosfato. 3Zn²⁺ + 2PO₄³⁻: 3(+2) + 2(−3) = 0. Se usa en cementos dentales."},
{"formula": "FePO₄", "group": "sal-ox", "level": "hard", "trad": ["fosfato férrico"], "stock": [], "sist": [], "hint": "PO₄³⁻ = fosfato. Fe³⁺ (EO mayor) → férrico. Fe³⁺ + PO₄³⁻ → FePO₄."},
{"formula": "(NH₄)₃PO₄", "group": "sal-ox", "level": "hard", "trad": ["fosfato de amonio"], "stock": [], "sist": [], "hint": "PO₄³⁻ necesita tres NH₄⁺. Fertilizante que aporta nitrógeno y fósforo."},
{"formula": "K₂SiO₃", "group": "sal-ox", "level": "medium", "trad": ["silicato de potasio"], "stock": [], "sist": [], "hint": "SiO₃²⁻ = silicato (como en el silicato de sodio). Dos K⁺ compensan la carga."},
{"formula": "Na₃AsO₄", "group": "sal-ox", "level": "hard", "trad": ["arseniato de sodio"], "stock": [], "sist": [], "hint": "AsO₄³⁻ = arseniato (del ácido arsénico, As con EO = +5). Tres Na⁺ compensan la carga."},
{"formula": "LiHSO₃", "group": "sal-ac", "level": "easy", "trad": ["bisulfito de litio"], "stock": ["hidrogenosulfito de litio"], "sist": [], "hint": "Li⁺ + HSO₃⁻ (el SO₃²⁻ retuvo 1 H⁺). Trad: bi-. Stock: hidrogeno-."},
{"formula": "Ba(HSO₃)₂", "group": "sal-ac", "level": "medium", "trad": ["bisulfito de bario"], "stock": ["hidrogenosulfito de bario"], "sist": [], "hint": "Ba²⁺ + 2HSO₃⁻ → Ba(HSO₃)₂."},
{"formula": "Sr(HSO₃)₂", "group": "sal-ac", "level": "medium", "trad": ["bisulfito de estroncio"], "stock": ["hidrogenosulfito de estroncio"], "sist": [], "hint": "Sr²⁺ + 2HSO₃⁻ → Sr(HSO₃)₂."},
{"formula": "Mg(HS)₂", "group": "sal-ac", "level": "medium", "trad": ["bisulfuro de magnesio"], "stock": ["hidrogenosulfuro de magnesio"], "sist": [], "hint": "Mg²⁺ + 2HS⁻ (el S²⁻ retuvo 1 H⁺) → Mg(HS)₂."},
{"formula": "Sr(HS)₂", "group": "sal-ac", "level": "medium", "trad": ["bisulfuro de estroncio"], "stock": ["hidrogenosulfuro de estroncio"], "sist": [], "hint": "Sr²⁺ + 2HS⁻ → Sr(HS)₂."},
{"formula": "Mn(HCO₃)₂", "group": "sal-ac", "level": "hard", "trad": ["bicarbonato manganoso"], "stock": ["hidrogenocarbonato de manganeso (II)"], "sist": [], "hint": "Mn²⁺ (EO menor) + 2HCO₃⁻ → bicarbonato manganoso. Aparece disuelto en algunas aguas subterráneas."},
{"formula": "Sr(H₂PO₄)₂", "group": "sal-ac", "level": "hard", "trad": ["fosfato diácido de estroncio"], "stock": ["dihidrogenofosfato de estroncio"], "sist": [], "hint": "Sr²⁺ + 2H₂PO₄⁻ (el PO₄³⁻ retuvo 2 H⁺) → Sr(H₂PO₄)₂."},
{"formula": "Ba(H₂PO₄)₂", "group": "sal-ac", "level": "hard", "trad": ["fosfato diácido de bario"], "stock": ["dihidrogenofosfato de bario"], "sist": [], "hint": "Ba²⁺ + 2H₂PO₄⁻ → Ba(H₂PO₄)₂."},
{"id": "rx-086", "group": "reaccion", "level": "easy", "ecuacion": "H₂ + Cl₂ → 2HCl", "tipo_rx": "sintesis", "hint": "Dos sustancias simples se unen en un solo producto: A + B → AB.", "col": "El ácido clorhídrico se fabrica en plantas químicas de Cartagena y Betania."},
{"id": "rx-087", "group": "reaccion", "level": "medium", "ecuacion": "2Al + 3Br₂ → 2AlBr₃", "tipo_rx": "sintesis", "hint": "Metal + no metal → una sola sal: síntesis.", "col": "El aluminio reacciona con los halógenos con desprendimiento de calor."},
{"id": "rx-088", "group": "reaccion", "level": "easy", "ecuacion": "BaO + H₂O → Ba(OH)₂", "tipo_rx": "sintesis", "hint": "Óxido básico + agua → hidróxido: síntesis.", "col": "Los óxidos de los metales del grupo 2 forman bases al disolverse."},
{"id": "rx-089", "group": "reaccion", "level": "medium", "ecuacion": "2NaN₃ → 2Na + 3N₂", "tipo_rx": "descomposicion", "hint": "Un solo reactivo se separa en varios productos: AB → A + B.", "col": "Esta reacción infla las bolsas de aire (airbags) de los carros en milisegundos."},
{"id": "rx-090", "group": "reaccion", "level": "easy", "ecuacion": "Cu(OH)₂ → CuO + H₂O", "tipo_rx": "descomposicion", "hint": "Al calentar el hidróxido se descompone en óxido y agua.", "col": "El hidróxido de cobre azul se vuelve negro (CuO) al calentarlo en el laboratorio."},
{"id": "rx-091", "group": "reaccion", "level": "easy", "ecuacion": "Zn + CuSO₄ → ZnSO₄ + Cu", "tipo_rx": "sus-simple", "hint": "Un elemento más activo (Zn) desplaza a otro (Cu) de su compuesto: A + BC → AC + B.", "col": "Así se recubren piezas con cobre en talleres de galvanoplastia."},
{"id": "rx-092", "group": "reaccion", "level": "medium", "ecuacion": "Cl₂ + 2NaI → 2NaCl + I₂", "tipo_rx": "sus-simple", "hint": "Un halógeno más activo (Cl₂) desplaza al yodo de su sal.", "col": "El cloro de las piscinas oxida al yoduro: se nota porque aparece color café."},
{"id": "rx-093", "group": "reaccion", "level": "hard", "ecuacion": "2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu", "tipo_rx": "sus-simple", "hint": "El aluminio, más activo, desplaza al cobre: sustitución simple.", "col": "El papel aluminio en una disolución de sulfato de cobre se cubre de cobre rojizo."},
{"id": "rx-094", "group": "reaccion", "level": "easy", "ecuacion": "AgNO₃ + NaBr → AgBr + NaNO₃", "tipo_rx": "sus-doble", "hint": "Los dos compuestos intercambian iones: AB + CD → AD + CB. El AgBr precipita.", "col": "El bromuro de plata era la sustancia sensible a la luz de las películas fotográficas."},
{"id": "rx-095", "group": "reaccion", "level": "medium", "ecuacion": "FeCl₃ + 3NaOH → Fe(OH)₃ + 3NaCl", "tipo_rx": "sus-doble", "hint": "Intercambio de iones: se forma el precipitado café de Fe(OH)₃.", "col": "Las plantas de tratamiento de agua usan sales de hierro para atrapar impurezas."},
{"id": "rx-096", "group": "reaccion", "level": "medium", "ecuacion": "2C₃H₆ + 9O₂ → 6CO₂ + 6H₂O", "tipo_rx": "combustion", "hint": "Un hidrocarburo arde con O₂ y produce CO₂ y H₂O: combustión.", "col": "El propeno (propileno) es materia prima de plásticos en la refinería de Cartagena."},
{"id": "rx-097", "group": "reaccion", "level": "hard", "ecuacion": "2C₆H₆ + 15O₂ → 12CO₂ + 6H₂O", "tipo_rx": "combustion", "hint": "Combustión completa del benceno: CO₂ y H₂O.", "col": "El benceno está en la gasolina en pequeñas cantidades y es tóxico."},
{"id": "rx-098", "group": "reaccion", "level": "easy", "ecuacion": "HBr + KOH → KBr + H₂O", "tipo_rx": "neutralizacion", "hint": "Ácido + base → sal + agua: neutralización.", "col": "Las neutralizaciones controlan el pH de las aguas residuales de las industrias."},
{"id": "rx-099", "group": "reaccion", "level": "medium", "ecuacion": "H₂SO₄ + Ba(OH)₂ → BaSO₄ + 2H₂O", "tipo_rx": "neutralizacion", "hint": "Ácido + base → sal + agua. Además, el BaSO₄ precipita.", "col": "El sulfato de bario se usa como medio de contraste en radiografías del estómago."},
{"id": "bal-063", "group": "balanceo", "level": "easy", "ecuacion_sin_coef": "Al + Br₂ → AlBr₃", "coeficientes": [2, 3, 2], "especies": ["Al", "Br₂", "AlBr₃"], "hint": "Br: 2 izq. y 3 der. → mcm 6: 3Br₂ y 2AlBr₃; luego 2Al.", "col": "El bromuro de aluminio se usa como catalizador en la industria."},
{"id": "bal-064", "group": "balanceo", "level": "easy", "ecuacion_sin_coef": "K + H₂O → KOH + H₂", "coeficientes": [2, 2, 2, 1], "especies": ["K", "H₂O", "KOH", "H₂"], "hint": "Como con el sodio: 2K + 2H₂O → 2KOH + H₂.", "col": "El potasio reacciona con el agua de forma aún más violenta que el sodio."},
{"id": "bal-065", "group": "balanceo", "level": "easy", "ecuacion_sin_coef": "Li + O₂ → Li₂O", "coeficientes": [4, 1, 2], "especies": ["Li", "O₂", "Li₂O"], "hint": "O: 2 izq. → 2Li₂O; Li: 4 der. → 4Li.", "col": "El litio se explora en Colombia para baterías."},
{"id": "bal-066", "group": "balanceo", "level": "medium", "ecuacion_sin_coef": "C₃H₆ + O₂ → CO₂ + H₂O", "coeficientes": [2, 9, 6, 6], "especies": ["C₃H₆", "O₂", "CO₂", "H₂O"], "hint": "C: 3CO₂; H: 3H₂O; O: 6 + 3 = 9 → 9/2 O₂. Se duplica todo: 2, 9, 6, 6.", "col": "El propeno es materia prima de plásticos."},
{"id": "bal-067", "group": "balanceo", "level": "medium", "ecuacion_sin_coef": "NaN₃ → Na + N₂", "coeficientes": [2, 2, 3], "especies": ["NaN₃", "Na", "N₂"], "hint": "N: 3 izq. y 2 der. → mcm 6: 2NaN₃ y 3N₂; luego 2Na.", "col": "Esta reacción infla las bolsas de aire de los carros."},
{"id": "bal-068", "group": "balanceo", "level": "medium", "ecuacion_sin_coef": "FeCl₃ + NaOH → Fe(OH)₃ + NaCl", "coeficientes": [1, 3, 1, 3], "especies": ["FeCl₃", "NaOH", "Fe(OH)₃", "NaCl"], "hint": "OH: 3 der. → 3NaOH; Na: 3 → 3NaCl; Cl: 3 = 3.", "col": "Se usa para precipitar hierro en el tratamiento de aguas."},
{"id": "bal-069", "group": "balanceo", "level": "medium", "ecuacion_sin_coef": "Al + CuSO₄ → Al₂(SO₄)₃ + Cu", "coeficientes": [2, 3, 1, 3], "especies": ["Al", "CuSO₄", "Al₂(SO₄)₃", "Cu"], "hint": "SO₄: 3 der. → 3CuSO₄; Cu: 3Cu; Al: 2Al.", "col": "El aluminio desplaza al cobre de sus sales."},
{"id": "bal-070", "group": "balanceo", "level": "hard", "ecuacion_sin_coef": "C₆H₆ + O₂ → CO₂ + H₂O", "coeficientes": [2, 15, 12, 6], "especies": ["C₆H₆", "O₂", "CO₂", "H₂O"], "hint": "C: 6CO₂; H: 3H₂O; O: 12 + 3 = 15 → 15/2 O₂. Se duplica: 2, 15, 12, 6.", "col": "Combustión del benceno."},
{"id": "bal-071", "group": "balanceo", "level": "medium", "ecuacion_sin_coef": "Fe₃O₄ + H₂ → Fe + H₂O", "coeficientes": [1, 4, 3, 4], "especies": ["Fe₃O₄", "H₂", "Fe", "H₂O"], "hint": "Fe: 3Fe; O: 4 → 4H₂O; H: 8 → 4H₂.", "col": "La magnetita (Fe₃O₄) se reduce a hierro metálico en la siderurgia."},
{"id": "bal-072", "group": "balanceo", "level": "hard", "ecuacion_sin_coef": "PCl₅ + H₂O → H₃PO₄ + HCl", "coeficientes": [1, 4, 1, 5], "especies": ["PCl₅", "H₂O", "H₃PO₄", "HCl"], "hint": "Cl: 5HCl; O: 4 → 4H₂O; H: 8 = 3 + 5.", "col": "El PCl₅ reacciona con la humedad del aire y libera HCl."},
{"id": "bal-073", "group": "balanceo", "level": "medium", "ecuacion_sin_coef": "SiCl₄ + H₂O → SiO₂ + HCl", "coeficientes": [1, 2, 1, 4], "especies": ["SiCl₄", "H₂O", "SiO₂", "HCl"], "hint": "Cl: 4HCl; H: 4 → 2H₂O; O: 2 = 2.", "col": "El SiCl₄ se usa para fabricar silicio puro para chips y paneles solares."},
{"formula": "NaNO₃", "group": "mol-masa", "level": "easy", "masa_molar": 84.994, "formula_calc": "22.990 + 14.007 + 3(15.999) = 84.994", "hint": "NaNO₃: 1 Na, 1 N, 3 O → 84.994 g/mol", "col": "El nitrato de sodio (salitre de Chile) se usa como fertilizante."},
{"formula": "MgSO₄", "group": "mol-masa", "level": "medium", "masa_molar": 120.361, "formula_calc": "24.305 + 32.060 + 4(15.999) = 120.361", "hint": "MgSO₄: 1 Mg, 1 S, 4 O → 120.361 g/mol", "col": "El sulfato de magnesio (sal de Epsom) se usa en baños y en la agricultura."},
{"formula": "Al₂(SO₄)₃", "group": "mol-masa", "level": "hard", "masa_molar": 342.132, "formula_calc": "2(26.982) + 3(32.060) + 12(15.999) = 342.132", "hint": "Al₂(SO₄)₃: 2 Al, 3 S, 12 O → 342.132 g/mol", "col": "El sulfato de aluminio se usa en los acueductos colombianos para clarificar el agua."},
{"formula": "Ca₃(PO₄)₂", "group": "mol-masa", "level": "hard", "masa_molar": 310.174, "formula_calc": "3(40.078) + 2(30.974) + 8(15.999) = 310.174", "hint": "Ca₃(PO₄)₂: 3 Ca, 2 P, 8 O → 310.174 g/mol", "col": "El fosfato de calcio forma la parte mineral de huesos y dientes."},
{"formula": "NH₄Cl", "group": "mol-masa", "level": "easy", "masa_molar": 53.489, "formula_calc": "14.007 + 4(1.008) + 35.450 = 53.489", "hint": "NH₄Cl: 1 N, 4 H, 1 Cl → 53.489 g/mol", "col": "El cloruro de amonio se usa en pilas secas y como fertilizante."},
{"formula": "H₂O₂", "group": "mol-masa", "level": "easy", "masa_molar": 34.014, "formula_calc": "2(1.008) + 2(15.999) = 34.014", "hint": "H₂O₂: 2 H, 2 O → 34.014 g/mol", "col": "El agua oxigenada del botiquín es una solución de peróxido de hidrógeno."},
{"formula": "FeSO₄", "group": "mol-masa", "level": "medium", "masa_molar": 151.901, "formula_calc": "55.845 + 32.060 + 4(15.999) = 151.901", "hint": "FeSO₄: 1 Fe, 1 S, 4 O → 151.901 g/mol", "col": "El sulfato ferroso se receta como suplemento de hierro contra la anemia."},
{"formula": "KI", "group": "mol-masa", "level": "easy", "masa_molar": 166.002, "formula_calc": "39.098 + 126.904 = 166.002", "hint": "KI: 1 K, 1 I → 166.002 g/mol", "col": "El yoduro de potasio se usa para yodar la sal y en el laboratorio."},
{"formula": "CaO", "group": "mol-masa", "level": "easy", "masa_molar": 56.077, "formula_calc": "40.078 + 15.999 = 56.077", "hint": "CaO: 1 Ca, 1 O → 56.077 g/mol", "col": "La cal viva se usa para encalar troncos y desinfectar corrales en el campo colombiano."}
];

// Total: 783 entradas (incluye la ampliación +20 % por grupo y la de noviembre de 2026, +15–20 % por grupo salvo ácidos hidrácidos y oxácidos, que ya estaban completos; sin duplicados, sin formas meta-/piro-/hidratadas)
// Grupo reaccion: sintesis(22) descomposicion(17) sus-simple(18) sus-doble(17) combustion(14) neutralizacion(11)

// ═══════════════════════════════════════════════════════════════════════════
// BANCO_ATOMO — Teoría atómica y configuración electrónica (juego.html, grupo
// 'atomo'). Preguntas de opción múltiple escritas a mano: ok = respuesta
// correcta, d = 3 distractores (errores típicos), x = explicación que se
// muestra después de responder, id = etiqueta corta para "Temas para
// repasar". Acompaña a atomo.html y configuracion.html.
// ═══════════════════════════════════════════════════════════════════════════
const BANCO_ATOMO = [
  // ── Modelos atómicos ──
  {id:'Demócrito', tema:'modelos', q:'¿Quién propuso por primera vez, sin hacer experimentos, que la materia está formada por partículas indivisibles llamadas átomos?', ok:'Leucipo y Demócrito', d:['John Dalton','Aristóteles','Antoine Lavoisier'], x:'Hacia el 400 a. C. Leucipo y Demócrito propusieron la idea por razonamiento filosófico; "átomo" significa "sin división".'},
  {id:'Modelo de Dalton', tema:'modelos', q:'¿Qué científico propuso que los átomos de un mismo elemento son iguales y que los compuestos se forman uniendo átomos en proporciones de números enteros?', ok:'John Dalton', d:['J. J. Thomson','Ernest Rutherford','Niels Bohr'], x:'Dalton (1808) apoyó su teoría en las leyes de conservación de la masa y de las proporciones definidas.'},
  {id:'Límite de Dalton', tema:'modelos', q:'¿Qué idea de Dalton resultó FALSA con el descubrimiento del electrón?', ok:'Que el átomo es indivisible', d:['Que los compuestos tienen proporciones fijas','Que en una reacción los átomos se reorganizan','Que la masa se conserva'], x:'Si de cualquier átomo salen electrones, el átomo tiene partes más pequeñas: no es indivisible.'},
  {id:'Budín de pasas', tema:'modelos', q:'¿Qué modelo describe el átomo como una esfera de carga positiva con electrones incrustados, como pasas en un budín?', ok:'El modelo de Thomson', d:['El modelo de Rutherford','El modelo de Bohr','El modelo de Dalton'], x:'Thomson (1904) propuso el "budín de pasas" después de descubrir el electrón en 1897.'},
  {id:'Rayos catódicos', tema:'modelos', q:'En el tubo de rayos catódicos, el haz se desvía hacia la placa POSITIVA. ¿Qué concluyó Thomson?', ok:'Las partículas del haz tienen carga negativa', d:['Las partículas del haz tienen carga positiva','Las partículas del haz no tienen carga','El haz está formado por luz'], x:'Las cargas opuestas se atraen: si el haz va hacia la placa +, sus partículas (los electrones) son negativas.'},
  {id:'Cátodo de otro metal', tema:'modelos', q:'Thomson cambió el metal del cátodo y los rayos se comportaron exactamente igual. ¿Qué significa?', ok:'Todos los átomos contienen los mismos electrones', d:['Cada metal tiene un electrón distinto','Los rayos no salen del metal','El metal no influye porque no tiene carga'], x:'El electrón es una partícula universal: está en los átomos de todos los elementos.'},
  {id:'Gota de aceite', tema:'modelos', q:'¿Qué experimento permitió medir la carga del electrón (1,6 × 10⁻¹⁹ C)?', ok:'La gota de aceite de Millikan', d:['La lámina de oro de Rutherford','El tubo de rayos catódicos de Thomson','El espectro del hidrógeno de Bohr'], x:'Millikan (1909) equilibró gotas de aceite cargadas en un campo eléctrico y encontró que su carga siempre era múltiplo de 1,6 × 10⁻¹⁹ C.'},
  {id:'Partículas alfa', tema:'modelos', q:'¿Qué partículas se dispararon contra la lámina de oro en el experimento de Rutherford?', ok:'Partículas alfa (núcleos de helio, 2+)', d:['Electrones (rayos catódicos, 1−)','Neutrones (sin carga)','Protones de hidrógeno (1+)'], x:'Geiger y Marsden usaron partículas alfa: dos protones y dos neutrones, con carga 2+.'},
  {id:'Lámina de oro: vacío', tema:'modelos', q:'En la lámina de oro, casi todas las partículas alfa pasaron sin desviarse. ¿Qué indica esto?', ok:'El átomo es casi todo espacio vacío', d:['El átomo es una esfera maciza','Los electrones son muy pesados','El oro no tiene carga eléctrica'], x:'Si casi nada desvía las partículas, la mayor parte del átomo está vacía.'},
  {id:'Lámina de oro: rebote', tema:'modelos', q:'Unas pocas partículas alfa REBOTARON en la lámina de oro. ¿Qué propuso Rutherford para explicarlo?', ok:'Un núcleo pequeño, denso y con carga positiva', d:['Electrones grandes que frenan las partículas','Una carga positiva repartida en todo el átomo','Átomos de oro con carga negativa'], x:'Solo una carga positiva muy concentrada, con casi toda la masa, puede devolver una partícula alfa.'},
  {id:'Límite de Rutherford', tema:'modelos', q:'¿Qué problema tenía el modelo planetario de Rutherford?', ok:'El electrón perdería energía girando y caería al núcleo', d:['No explicaba la existencia del núcleo pequeño y denso','Suponía que el átomo era indivisible, como Dalton','No incluía electrones alrededor del núcleo'], x:'Según la física clásica, una carga que gira emite energía; el átomo de Rutherford sería inestable.'},
  {id:'Modelo de Bohr', tema:'modelos', q:'¿Cuál es la idea central del modelo de Bohr?', ok:'El electrón solo puede estar en ciertos niveles de energía', d:['El electrón está incrustado en una esfera positiva','El electrón es una nube sin energía definida','El átomo no tiene núcleo'], x:'Bohr (1913): niveles de energía cuantizados (n = 1, 2, 3…) en los que el electrón no pierde energía.'},
  {id:'Salto de nivel', tema:'modelos', q:'Según Bohr, ¿qué ocurre cuando un electrón pasa del nivel n = 3 al nivel n = 2?', ok:'Emite un fotón de energía definida', d:['Absorbe un fotón de energía definida','Cae al núcleo y pierde su carga','Se convierte en un protón del núcleo'], x:'Bajar de nivel libera la diferencia de energía como luz. En el hidrógeno, 3 → 2 da la línea roja de 656 nm.'},
  {id:'Espectro del hidrógeno', tema:'modelos', q:'¿Qué fenómeno logró explicar el modelo de Bohr?', ok:'El espectro de líneas del hidrógeno', d:['La radiactividad','La existencia del neutrón','Los enlaces de los compuestos orgánicos'], x:'Bohr calculó con exactitud las longitudes de onda que emite el hidrógeno.'},
  {id:'Orbital', tema:'modelos', q:'En el modelo mecánico-cuántico (actual), ¿qué es un orbital?', ok:'Una región donde es muy probable encontrar al electrón', d:['La trayectoria circular exacta que sigue el electrón','El núcleo del átomo, donde están los protones','Un nivel de energía en el que no hay electrones'], x:'El modelo actual no habla de trayectorias, sino de probabilidades.'},
  {id:'Incertidumbre', tema:'modelos', q:'¿Qué dice el principio de incertidumbre de Heisenberg?', ok:'No se pueden conocer a la vez la posición y la velocidad exactas del electrón', d:['Los electrones no tienen masa','Dos electrones no pueden tener los mismos números cuánticos','Los electrones llenan primero los niveles de menor energía'], x:'Por eso el modelo actual describe al electrón con probabilidades (orbitales).'},
  {id:'Electrón como onda', tema:'modelos', q:'¿Qué propuso Louis de Broglie sobre el electrón?', ok:'Que también se comporta como una onda', d:['Que tiene carga positiva','Que está dentro del núcleo','Que es más pesado que el protón'], x:'La naturaleza ondulatoria del electrón es la base de la ecuación de Schrödinger.'},
  {id:'Neutrón', tema:'modelos', q:'¿Quién descubrió el neutrón y en qué año?', ok:'James Chadwick, 1932', d:['Ernest Rutherford, 1911','J. J. Thomson, 1897','Niels Bohr, 1913'], x:'Chadwick completó la imagen del núcleo: protones y neutrones.'},
  {id:'Orden de modelos', tema:'modelos', ctx:'Para una exposición, un grupo debe ordenar en una línea del tiempo los modelos atómicos que estudió.', q:'¿Cuál es el orden histórico correcto de los modelos atómicos?', ok:'Dalton → Thomson → Rutherford → Bohr', d:['Thomson → Dalton → Bohr → Rutherford','Dalton → Rutherford → Thomson → Bohr','Bohr → Rutherford → Thomson → Dalton'], x:'Dalton (1808), Thomson (1897–1904), Rutherford (1911) y Bohr (1913).'},
  // ── Estructura del átomo, isótopos e iones ──
  {id:'Número atómico', tema:'estructura', ctx:'Un estudiante consulta la tabla periódica para saber qué elemento tiene 8 protones.', q:'¿Qué indica el número atómico (Z) de un elemento?', ok:'El número de protones del núcleo', d:['El número de neutrones','La suma de protones y neutrones','El número de niveles de energía'], x:'Z identifica al elemento: todos los átomos de carbono tienen 6 protones.'},
  {id:'Número de masa', tema:'estructura', q:'¿Qué indica el número de masa (A)?', ok:'La suma de protones y neutrones', d:['El número de protones','El número de electrones','La masa atómica promedio de la tabla'], x:'A = p + n. Por ejemplo, el carbono-14 tiene A = 14 (6 p + 8 n).'},
  {id:'Isótopos', tema:'estructura', q:'El carbono-12 y el carbono-14 son isótopos. ¿En qué se diferencian?', ok:'En el número de neutrones', d:['En el número de protones','En el número de electrones del átomo neutro','En el símbolo químico'], x:'Los isótopos tienen el mismo Z (6 protones) pero distinto número de neutrones (6 y 8).'},
  {id:'Neutrones del ¹⁴C', tema:'estructura', q:'¿Cuántos neutrones tiene el carbono-14 (Z = 6)?', ok:'8', d:['6','14','20'], x:'n = A − Z = 14 − 6 = 8.'},
  {id:'Electrones de Na⁺', tema:'estructura', q:'¿Cuántos electrones tiene el ion sodio Na⁺ (Z = 11)?', ok:'10', d:['11','12','23'], x:'El catión 1+ perdió un electrón: 11 − 1 = 10.'},
  {id:'Electrones de Cl⁻', tema:'estructura', q:'¿Cuántos electrones tiene el ion cloruro Cl⁻ (Z = 17)?', ok:'18', d:['17','16','35'], x:'El anión 1− ganó un electrón: 17 + 1 = 18.'},
  {id:'Identificar ion', tema:'estructura', q:'Un ion tiene 12 protones, 12 neutrones y 10 electrones. ¿Cuál es?', ok:'Mg²⁺ (magnesio-24)', d:['Mg²⁻ (magnesio-24)','Ne (neón-22)','C²⁺ (carbono-12)'], x:'Z = 12 → magnesio; A = 12 + 12 = 24; carga = 12 − 10 = +2.'},
  {id:'Carga del ion', tema:'estructura', q:'Un ion tiene 8 protones y 10 electrones. ¿Cuál es su carga?', ok:'2−', d:['2+','0','8+'], x:'Carga = protones − electrones = 8 − 10 = −2. Es el ion óxido, O²⁻.'},
  {id:'Formación de cationes', tema:'estructura', q:'¿Cómo se forma un catión a partir de un átomo neutro?', ok:'Perdiendo electrones', d:['Ganando electrones','Ganando protones','Perdiendo neutrones'], x:'Al perder electrones quedan más protones que electrones: carga positiva.'},
  {id:'Partícula más liviana', tema:'estructura', q:'¿Cuál de estas partículas tiene MENOR masa?', ok:'El electrón', d:['El protón','El neutrón','La partícula alfa'], x:'El electrón tiene unas 1836 veces menos masa que un protón.'},
  {id:'Masa atómica decimal', tema:'estructura', ctx:'En la tabla periódica, la masa atómica del cloro aparece con decimales.', q:'¿Por qué la masa atómica del cloro en la tabla periódica es 35,45 y no un número entero?', ok:'Es el promedio ponderado de sus isótopos (³⁵Cl y ³⁷Cl)', d:['Porque el cloro tiene medio neutrón','Porque se suman las masas de los electrones','Porque es un error de medición'], x:'Cerca del 76 % del cloro es ³⁵Cl y el 24 % es ³⁷Cl: el promedio da 35,45.'},
  // ── Configuración electrónica ──
  {id:'Electrones por orbital', tema:'config', q:'¿Cuántos electrones caben como máximo en un orbital?', ok:'2', d:['1','6','8'], x:'Principio de exclusión de Pauli: máximo 2 electrones, con espines opuestos.'},
  {id:'Capacidad del subnivel p', tema:'config', q:'¿Cuántos electrones caben como máximo en un subnivel p?', ok:'6', d:['2','10','14'], x:'El subnivel p tiene 3 orbitales × 2 electrones = 6.'},
  {id:'Capacidad del subnivel d', tema:'config', q:'¿Cuántos electrones caben como máximo en un subnivel d?', ok:'10', d:['6','14','18'], x:'El subnivel d tiene 5 orbitales × 2 electrones = 10.'},
  {id:'Capacidad del nivel 3', tema:'config', ctx:'Un estudiante calcula cuántos electrones caben en el tercer nivel de energía de un átomo.', q:'¿Cuántos electrones caben como máximo en el nivel n = 3?', ok:'18', d:['8','9','32'], x:'Capacidad = 2n² = 2 × 3² = 18 (3s² 3p⁶ 3d¹⁰).'},
  {id:'Después de 3p', tema:'config', ctx:'Un estudiante llena el diagrama de Moeller para escribir la configuración del potasio.', q:'Según el diagrama de Moeller, ¿qué subnivel se llena justo después del 3p?', ok:'4s', d:['3d','4p','3f'], x:'El 4s tiene menos energía que el 3d, por eso se llena primero: … 3p → 4s → 3d → 4p …'},
  {id:'Regla de Hund', tema:'config', q:'¿Qué dice la regla de Hund?', ok:'En un subnivel, los electrones ocupan primero un orbital cada uno antes de aparearse', d:['En un orbital caben como máximo 2 electrones con espín opuesto','Los electrones llenan primero los subniveles de menor energía','No se puede conocer a la vez la posición y la velocidad del electrón'], x:'Como en un bus: nadie se sienta al lado de otro mientras haya puestos vacíos.'},
  {id:'Principio de Pauli', tema:'config', q:'¿Qué dice el principio de exclusión de Pauli?', ok:'Un orbital tiene máximo 2 electrones y con espines opuestos', d:['Los electrones se reparten uno por orbital antes de aparearse','Los electrones llenan primero los niveles más externos','El núcleo contiene protones y neutrones'], x:'Dos electrones del mismo orbital deben tener espín ↑ y ↓.'},
  {id:'Principio de Aufbau', tema:'config', q:'¿Qué dice el principio de Aufbau (de construcción)?', ok:'Los electrones ocupan primero los subniveles de menor energía', d:['Los electrones ocupan primero los subniveles más grandes','Cada orbital admite un solo electrón','Los electrones se ubican al azar'], x:'Por eso se sigue el orden del diagrama de Moeller: 1s, 2s, 2p, 3s, 3p, 4s, 3d…'},
  {id:'Configuración del O', tema:'config', ctx:'El oxígeno que respiramos tiene 8 electrones, que se distribuyen en niveles y subniveles.', q:'¿Cuál es la configuración electrónica del oxígeno (Z = 8)?', ok:'1s² 2s² 2p⁴', d:['1s² 2s² 2p⁶','1s² 2p⁶','1s² 2s² 2p² 3s²'], x:'8 electrones: 2 en 1s, 2 en 2s y los 4 restantes en 2p.'},
  {id:'Abreviada del Na', tema:'config', q:'¿Cuál es la configuración abreviada del sodio (Z = 11)?', ok:'[Ne] 3s¹', d:['[Ar] 3s¹','[Ne] 3p¹','[He] 3s¹'], x:'Los 10 primeros electrones son los del neón; el electrón 11 entra en 3s.'},
  {id:'[Ne] 3s² 3p⁵', tema:'config', q:'¿Qué elemento tiene la configuración [Ne] 3s² 3p⁵?', ok:'Cloro', d:['Azufre','Argón','Flúor'], x:'10 (neón) + 2 + 5 = 17 electrones → Z = 17, cloro.'},
  {id:'Desapareados del N', tema:'config', q:'¿Cuántos electrones desapareados tiene el nitrógeno (1s² 2s² 2p³)?', ok:'3', d:['1','2','5'], x:'Por la regla de Hund, los 3 electrones del 2p van uno en cada orbital: ↑ ↑ ↑.'},
  {id:'Excepción del Cr', tema:'config', q:'El cromo (Z = 24) es una excepción a la regla de Moeller. ¿Cuál es su configuración real?', ok:'[Ar] 4s¹ 3d⁵', d:['[Ar] 4s² 3d⁴','[Ar] 3d⁶','[Ar] 4s² 4p⁴'], x:'Un subnivel d semilleno (d⁵) es especialmente estable, así que un electrón del 4s pasa al 3d.'},
  {id:'Ion Fe²⁺', tema:'config', q:'¿Cuál es la configuración del ion Fe²⁺ (hierro: [Ar] 4s² 3d⁶)?', ok:'[Ar] 3d⁶', d:['[Ar] 4s² 3d⁴','[Ar] 4s² 3d⁶','[Ar] 4s¹ 3d⁵'], x:'Los metales de transición pierden primero los electrones del nivel más alto (4s), luego los 3d.'},
  {id:'Periodo y grupo 4p³', tema:'config', q:'Un elemento neutro termina su configuración en 4p³. ¿En qué periodo y grupo está?', ok:'Periodo 4, grupo 15', d:['Periodo 3, grupo 15','Periodo 4, grupo 3','Periodo 4, grupo 13'], x:'Periodo = nivel más alto (4). Grupo = 10 + 2 (4s²) + 3 (4p³) = 15. Es el arsénico.'},
  {id:'Bloque d', tema:'config', q:'Si el último electrón de un elemento entra en un subnivel d, ¿a qué bloque pertenece?', ok:'Bloque d (metales de transición)', d:['Bloque s (metales alcalinos)','Bloque p (no metales y metaloides)','Bloque f (lantánidos y actínidos)'], x:'El bloque lo decide el subnivel donde entra el último electrón.'},
  {id:'Valencia del S', tema:'config', q:'El azufre tiene la configuración [Ne] 3s² 3p⁴. ¿Cuántos electrones de valencia tiene?', ok:'6', d:['4','2','16'], x:'Se cuentan los del último nivel (n = 3): 3s² + 3p⁴ = 6.'},
  {id:'Número cuántico l', tema:'config', q:'¿Qué valor tiene el número cuántico secundario (l) para un subnivel p?', ok:'1', d:['0','2','3'], x:'s → l = 0, p → l = 1, d → l = 2, f → l = 3.'},
  {id:'Números cuánticos del Na', tema:'config', q:'¿Cuáles son los números cuánticos (n, l, mₗ, mₛ) del último electrón del sodio (3s¹)?', ok:'(3, 0, 0, +½)', d:['(3, 1, 0, +½)','(1, 0, 0, +½)','(3, 0, 1, −½)'], x:'3s → n = 3, l = 0; en s solo existe mₗ = 0; un electrón solo → espín ↑ (+½).'},
  // ── Tabla periódica: historia, organización y propiedades (tabla.html) ──
  {id:'Criterio de Mendeléiev', tema:'tabla', q:'¿Qué criterio usó Mendeléiev en 1869 para ordenar los elementos?', ok:'La masa atómica, agrupando los de propiedades parecidas', d:['El número atómico, agrupando los de igual carga nuclear','El orden alfabético, agrupando los de nombre parecido','La fecha de descubrimiento, del más antiguo al más nuevo'], x:'Mendeléiev ordenó los 63 elementos conocidos por masa atómica, pero priorizó poner juntos a los de propiedades parecidas.'},
  {id:'Huecos de Mendeléiev', tema:'tabla', q:'¿Por qué Mendeléiev dejó casillas vacías en su tabla?', ok:'Para elementos que aún no se habían descubierto', d:['Porque no le alcanzó el papel para todos','Para ubicar después a los gases nobles','Para los elementos radiactivos peligrosos'], x:'Predijo el eka-silicio, y en 1886 se descubrió el germanio con casi las mismas propiedades.'},
  {id:'Ley de Moseley', tema:'tabla', q:'Según Moseley (1913), ¿qué determina el orden correcto de la tabla periódica?', ok:'El número atómico (los protones)', d:['La masa atómica','La densidad','Los electrones de valencia'], x:'Con los rayos X de cada elemento mostró que Z aumenta de uno en uno: es la ley periódica moderna.'},
  {id:'Tríadas', tema:'tabla', q:'En la tríada de Döbereiner Li (6,9), Na (¿?), K (39,1), ¿qué masa se predice para el sodio?', ok:'≈ 23,0', d:['≈ 46,0','≈ 32,2','≈ 6,9'], x:'Es el promedio de los extremos: (6,9 + 39,1) ÷ 2 = 23,0. El valor real es 22,99.'},
  {id:'Octavas', tema:'tabla', q:'¿Quién propuso que cada octavo elemento se parece al primero, como las notas musicales?', ok:'John Newlands', d:['Döbereiner','Lavoisier','Seaborg'], x:'Es la ley de las octavas (1865). Funcionaba solo hasta el calcio.'},
  {id:'Gases nobles en la tabla', tema:'tabla', q:'¿Qué agregó William Ramsay a la tabla periódica?', ok:'Una columna nueva: los gases nobles', d:['Una fila nueva: los lantánidos','El número atómico como criterio','Los metales de transición del centro'], x:'Descubrió el argón, el neón, el kriptón y el xenón, que no reaccionaban, y formaron el grupo 18.'},
  {id:'Actínidos', tema:'tabla', q:'¿Qué propuso Glenn Seaborg en 1945?', ok:'Ubicar los actínidos en una fila aparte, debajo de los lantánidos', d:['Ordenar todos los elementos por su número atómico creciente','Proponer la ley de las octavas, agrupando los elementos de a ocho','Agregar al final de la tabla la columna de los gases nobles'], x:'Su idea dio a la tabla la forma actual y le ayudó a descubrir el americio y el curio.'},
  {id:'Lista de Lavoisier', tema:'tabla', q:'Lavoisier incluyó en su lista de 1789 algo que hoy NO es un elemento. ¿Qué?', ok:'La luz y el calórico', d:['El oxígeno','El platino','El azufre'], x:'Creía que eran sustancias simples, pero la luz y el calor no son materia.'},
  {id:'Grupo 16 tradicional', tema:'tabla', q:'El grupo 16 (IUPAC) en la numeración tradicional es el:', ok:'VIA', d:['VIB','IVA','XVI'], x:'En los grupos 13 a 18 se resta 10 y se usa la letra A: 16 → VIA.'},
  {id:'Grupos 8, 9 y 10', tema:'tabla', q:'Los grupos 8, 9 y 10 (IUPAC) comparten en la numeración tradicional el nombre:', ok:'VIIIB', d:['VIIIA','VIIB','IB'], x:'Los tres son metales de transición (Fe, Co, Ni en el periodo 4) y forman el grupo VIIIB.'},
  {id:'Qué indica el periodo', tema:'tabla', q:'¿Qué indica el número del periodo de un elemento?', ok:'El número de niveles de energía ocupados', d:['El número de electrones de valencia','El número de neutrones del núcleo','La carga del ion que forma el elemento'], x:'El periodo coincide con el nivel n más alto de la configuración.'},
  {id:'Mismo grupo', tema:'tabla', q:'¿Por qué los elementos de un mismo grupo tienen propiedades químicas parecidas?', ok:'Tienen los mismos electrones de valencia', d:['Tienen la misma masa atómica','Tienen el mismo número de niveles','Tienen el mismo número de neutrones'], x:'Las reacciones dependen de los electrones externos, que son iguales en toda la columna.'},
  {id:'Columnas del bloque d', tema:'tabla', q:'¿Por qué el bloque d tiene 10 columnas?', ok:'Porque un subnivel d admite 10 electrones', d:['Porque hay 10 metales de transición','Porque el nivel 3 tiene 10 orbitales','Por decisión de Mendeléiev'], x:'El ancho de cada bloque es la capacidad del subnivel: s = 2, p = 6, d = 10, f = 14.'},
  {id:'Ubicar 3p⁴', tema:'tabla', q:'Un elemento termina en 3s² 3p⁴. ¿Dónde está en la tabla?', ok:'Periodo 3, grupo 16, bloque p', d:['Periodo 4, grupo 16, bloque p','Periodo 3, grupo 4, bloque s','Periodo 3, grupo 14, bloque p'], x:'Nivel más alto 3 → periodo 3; termina en p → bloque p; 2 + 4 = 6 e⁻ de valencia → grupo 16. Es el azufre.'},
  {id:'Radio Na/Cl', tema:'tabla', q:'¿Cuál tiene mayor radio atómico: el sodio o el cloro?', ok:'El sodio', d:['El cloro','Son iguales','Depende de la temperatura'], x:'Están en el mismo periodo: el cloro tiene más protones con los mismos niveles y atrae más sus electrones. Na = 190 pm, Cl = 79 pm.'},
  {id:'Ionización Na/Cl', tema:'tabla', q:'¿Cuál tiene mayor energía de ionización: el sodio o el cloro?', ok:'El cloro', d:['El sodio','Son iguales','Ninguno tiene energía de ionización'], x:'En un periodo la energía de ionización aumenta hacia la derecha: Na = 496 y Cl = 1251 kJ/mol.'},
  {id:'Más electronegativo', tema:'tabla', ctx:'El flúor de las cremas dentales es el elemento que más atrae los electrones de un enlace.', q:'¿Cuál es el elemento más electronegativo de la tabla periódica?', ok:'Flúor', d:['Oxígeno','Cesio','Cloro'], x:'El flúor (3,98 en la escala de Pauling) está arriba a la derecha, sin contar los gases nobles.'},
  {id:'Carácter metálico', tema:'tabla', q:'¿En qué zona de la tabla está el mayor carácter metálico?', ok:'Abajo a la izquierda', d:['Arriba a la derecha','En el centro','Arriba a la izquierda'], x:'El carácter metálico aumenta hacia abajo y hacia la izquierda: el cesio y el francio son los más metálicos.'},
  {id:'Radio al bajar', tema:'tabla', ctx:'Un estudiante compara el tamaño de los átomos del litio, el sodio y el potasio.', q:'¿Por qué el radio atómico aumenta al bajar en un grupo?', ok:'Porque cada elemento tiene un nivel de energía más', d:['Porque pierde protones','Porque los electrones se acercan al núcleo','Porque aumenta la electronegatividad'], x:'Un nivel más deja los electrones externos más lejos del núcleo y más apantallados.'},
  {id:'Excepción Be/B', tema:'tabla', q:'El berilio (900 kJ/mol) tiene mayor energía de ionización que el boro (801). ¿Por qué?', ok:'El Be tiene el subnivel 2s lleno, que es muy estable', d:['El boro tiene menos protones que el berilio','El berilio es un gas noble muy estable','Es un error de medición de los datos'], x:'El boro pierde un electrón 2p solitario, más fácil de quitar que uno del 2s lleno del berilio.'},
  {id:'Metaloides', tema:'tabla', q:'El silicio y el germanio se usan en chips y paneles solares. ¿Cómo se clasifican?', ok:'Metaloides', d:['Metales alcalinos','Halógenos','Gases nobles'], x:'Tienen propiedades intermedias entre metales y no metales: por eso son semiconductores.'},
  // ── Números cuánticos y modelo de Bohr frente a orbitales (configuracion.html#cuanticos) ──
  {id:'Número cuántico n', tema:'cuanticos', ctx:'Un estudiante describe el electrón de un átomo con cuatro números cuánticos.', q:'¿Qué indica el número cuántico principal (n)?', ok:'El nivel de energía y el tamaño del orbital', d:['La forma del orbital (s, p, d, f)','La orientación del orbital en el espacio','El giro o espín del electrón'], x:'n = 1, 2, 3… A mayor n, más lejos del núcleo y más energía.'},
  {id:'Forma y l', tema:'cuanticos', q:'¿Qué número cuántico indica la forma del orbital (s, p, d, f)?', ok:'El secundario o azimutal (l)', d:['El principal (n)','El magnético (mₗ)','El de espín (mₛ)'], x:'l = 0 → s (esfera), 1 → p (dos lóbulos), 2 → d, 3 → f.'},
  {id:'Número cuántico mₗ', tema:'cuanticos', ctx:'Los tres orbitales p de un subnivel tienen la misma forma, pero apuntan en direcciones distintas.', q:'¿Qué indica el número cuántico magnético (mₗ)?', ok:'La orientación del orbital en el espacio', d:['El nivel de energía del electrón','El tamaño total del átomo','La carga eléctrica del electrón'], x:'mₗ va de −l a +l: hay 2l + 1 orientaciones (orbitales) en cada subnivel.'},
  {id:'Valores de mₛ', tema:'cuanticos', ctx:'Dos electrones del mismo orbital se diferencian en un número cuántico.', q:'¿Qué valores puede tomar el número cuántico de espín (mₛ)?', ok:'+½ o −½', d:['0 o 1','−1, 0 o +1','Cualquier número entero'], x:'Representa el giro del electrón: ↑ (+½) o ↓ (−½).'},
  {id:'Valores de l con n = 3', tema:'cuanticos', ctx:'Un estudiante escribe los subniveles posibles del tercer nivel de energía.', q:'Si n = 3, ¿qué valores puede tomar l?', ok:'0, 1 y 2', d:['1, 2 y 3','0, 1, 2 y 3','Solo 3'], x:'l va de 0 a n − 1. Por eso el nivel 3 tiene 3s, 3p y 3d.'},
  {id:'Valores de mₗ con l = 2', tema:'cuanticos', ctx:'Un estudiante quiere saber cuántos orbitales tiene el subnivel d de los metales de transición.', q:'Si l = 2, ¿qué valores puede tomar mₗ?', ok:'−2, −1, 0, +1 y +2', d:['0, 1 y 2','−1, 0 y +1','Solo +2'], x:'mₗ va de −l a +l: 5 valores, por eso un subnivel d tiene 5 orbitales.'},
  {id:'No existe el 2d', tema:'cuanticos', ctx:'Un compañero escribió «2d» en una configuración electrónica y el profesor le marcó un error.', q:'¿Por qué no existe un subnivel 2d?', ok:'Porque con n = 2, l solo puede ser 0 o 1', d:['Porque el nivel 2 está siempre lleno','Porque los orbitales d son de los metales','Porque el 2d tiene más energía que el 3s'], x:'Un subnivel d necesita l = 2, y eso exige n ≥ 3.'},
  {id:'Orbitales en n = 3', tema:'cuanticos', ctx:'Un estudiante cuenta los orbitales del tercer nivel de energía de un átomo.', q:'¿Cuántos orbitales hay en total en el nivel n = 3?', ok:'9', d:['3','18','6'], x:'n² = 9: uno 3s, tres 3p y cinco 3d. Caben 2n² = 18 electrones.'},
  {id:'Conjunto posible', tema:'cuanticos', q:'¿Cuál de estos conjuntos (n, l, mₗ, mₛ) es posible?', ok:'(3, 2, −1, +½)', d:['(2, 2, 0, +½)','(3, 1, +2, −½)','(1, 0, 0, +1)'], x:'Debe cumplirse l < n, |mₗ| ≤ l y mₛ = ±½. Solo (3, 2, −1, +½) cumple las tres.'},
  {id:'Conjunto imposible', tema:'cuanticos', q:'¿Por qué es imposible el conjunto (2, 2, 0, +½)?', ok:'Porque l debe ser menor que n', d:['Porque mₗ no puede ser 0','Porque mₛ no puede ser +½','Porque n no puede ser 2'], x:'Con n = 2, l solo puede valer 0 o 1.'},
  {id:'Pauli y números cuánticos', tema:'cuanticos', q:'Según el principio de exclusión de Pauli, dos electrones de un mismo átomo…', ok:'no pueden tener los cuatro números cuánticos iguales', d:['no pueden estar en el mismo nivel de energía','deben tener siempre el mismo espín','no pueden estar en el mismo subnivel'], x:'Si comparten n, l y mₗ (el mismo orbital), deben diferir en mₛ: por eso caben solo 2 por orbital.'},
  {id:'Subnivel de (4, 0, 0, +½)', tema:'cuanticos', q:'¿En qué subnivel está un electrón con los números (4, 0, 0, +½)?', ok:'4s', d:['4p','3d','4d'], x:'n = 4 y l = 0 (s): es un electrón 4s.'},
  {id:'Último e⁻ del cloro', tema:'cuanticos', q:'¿Cuáles son los números cuánticos del último electrón del cloro (3p⁵)? (mₗ de −l a +l, primero ↑)', ok:'(3, 1, 0, −½)', d:['(3, 1, +1, +½)','(3, 2, 0, −½)','(2, 1, 0, −½)'], x:'Casillas de 3p: ↑↓ ↑↓ ↑. El quinto electrón es el segundo ↓, en mₗ = 0.'},
  {id:'Último e⁻ del oxígeno', tema:'cuanticos', q:'¿Cuáles son los números cuánticos del último electrón del oxígeno (2p⁴)? (mₗ de −l a +l, primero ↑)', ok:'(2, 1, −1, −½)', d:['(2, 1, +1, +½)','(2, 0, 0, −½)','(2, 1, 0, +½)'], x:'Casillas de 2p: ↑↓ ↑ ↑. Tras poner un ↑ en cada casilla, el cuarto electrón se aparea en mₗ = −1.'},
  {id:'Forma del orbital s', tema:'cuanticos', ctx:'El único electrón del hidrógeno ocupa el orbital de menor energía.', q:'¿Qué forma tienen los orbitales s?', ok:'Esférica', d:['De dos lóbulos','De trébol de cuatro hojas','De anillo'], x:'Un orbital s (l = 0) es una esfera alrededor del núcleo; no tiene orientación.'},
  {id:'Forma del orbital p', tema:'cuanticos', q:'¿Qué forma tienen los orbitales p?', ok:'Dos lóbulos a lado y lado del núcleo', d:['Una esfera alrededor del núcleo','Cuatro lóbulos en forma de trébol','Un anillo plano alrededor del núcleo'], x:'Hay tres orbitales p (mₗ = −1, 0, +1), orientados según los ejes x, y, z.'},
  {id:'Orbitales de un subnivel f', tema:'cuanticos', ctx:'Los lantánidos, que se usan en los imanes de los audífonos, llenan un subnivel f.', q:'¿Cuántos orbitales tiene un subnivel f (l = 3)?', ok:'7', d:['3','5','14'], x:'2l + 1 = 7 orbitales, con capacidad para 14 electrones.'},
  {id:'Capacidad de n = 2', tema:'cuanticos', q:'¿Cuántos electrones caben como máximo en el nivel n = 2?', ok:'8', d:['2','4','18'], x:'2n² = 8: 2 en el 2s y 6 en el 2p.'},
  {id:'Bohr frente a orbitales', tema:'cuanticos', q:'¿Cuál es la diferencia principal entre una órbita de Bohr y un orbital?', ok:'La órbita es una trayectoria exacta; el orbital es una región de probabilidad', d:['Son lo mismo, pero con distinto nombre en cada modelo','El orbital es más pequeño que la órbita de Bohr','La órbita tiene más electrones que el orbital'], x:'En el modelo cuántico no se puede conocer la trayectoria del electrón, solo dónde es probable encontrarlo.'},
  {id:'Bohr y subniveles', tema:'cuanticos', q:'En el modelo de Bohr, ¿dónde están los electrones 2s y 2p del oxígeno?', ok:'En la misma órbita n = 2: Bohr no distingue subniveles', d:['En dos órbitas distintas, una para 2s y otra para 2p','El 2s en la órbita 2 y el 2p en la órbita 3','En ninguna: Bohr no tiene órbita n = 2'], x:'Bohr solo tiene niveles n. Los subniveles s, p, d y f llegaron con el modelo mecánico-cuántico.'},
  {id:'Forma del modelo de Bohr', tema:'cuanticos', q:'Si se gira en 3D, ¿cómo se ve el átomo de Bohr comparado con el modelo de orbitales?', ok:'Bohr es plano (órbitas en un plano) y los orbitales ocupan el espacio en 3D', d:['Los dos se ven como esferas idénticas alrededor del núcleo','Bohr es una nube en 3D y los orbitales son círculos planos','Los dos son planos, con los electrones en un mismo círculo'], x:'Bohr dibujó órbitas circulares concéntricas en un plano; los orbitales s, p y d se extienden en las tres dimensiones.'},
  // ── A, Z, neutrones e iones (atomo.html#calculos) ──
  {id:'Neutrones del ³⁹K', tema:'iones', ctx:'El potasio de los bananos tiene un isótopo muy abundante de masa 39.', q:'¿Cuántos neutrones tiene el potasio-39 (Z = 19)?', ok:'20', d:['19','39','58'], x:'n⁰ = A − Z = 39 − 19 = 20.'},
  {id:'Electrones de S²⁻', tema:'iones', q:'¿Cuántos electrones tiene el ion sulfuro S²⁻ (Z = 16)?', ok:'18', d:['16','14','32'], x:'Es un anión: ganó 2 electrones. e⁻ = 16 − (−2) = 18.'},
  {id:'Electrones de Fe³⁺', tema:'iones', ctx:'El hierro de la herrumbre está como ion con carga +3.', q:'¿Cuántos electrones tiene el ion Fe³⁺ (Z = 26)?', ok:'23', d:['26','29','30'], x:'Es un catión: perdió 3 electrones. e⁻ = 26 − 3 = 23.'},
  {id:'Número de masa del P', tema:'iones', q:'Un átomo tiene 15 protones y 16 neutrones. ¿Cuál es su número de masa?', ok:'31', d:['15','16','46'], x:'A = p⁺ + n⁰ = 15 + 16 = 31. Es el fósforo-31.'},
  {id:'Átomo neutro', tema:'iones', ctx:'Un átomo de sodio de la sal tiene la misma cantidad de partículas positivas y negativas antes de reaccionar.', q:'¿Cuándo un átomo es eléctricamente neutro?', ok:'Cuando tiene igual número de protones que de electrones', d:['Cuando tiene igual número de protones que de neutrones','Cuando no tiene neutrones','Cuando tiene 8 electrones de valencia'], x:'Las cargas + de los protones se cancelan con las − de los electrones.'},
  {id:'Definición de catión', tema:'iones', q:'Un catión es un ion que tiene…', ok:'más protones que electrones (perdió electrones)', d:['más electrones que protones','más neutrones que protones','igual número de protones y electrones'], x:'Al perder electrones (negativos) quedan protones sin pareja: la carga es positiva.'},
  {id:'Definición de anión', tema:'iones', q:'¿Cómo se forma un anión?', ok:'Cuando el átomo gana electrones', d:['Cuando pierde electrones','Cuando gana protones','Cuando pierde neutrones'], x:'Los electrones de más dan carga negativa. Ejemplo: Cl + 1 e⁻ → Cl⁻.'},
  {id:'Ion calcio', tema:'iones', q:'El ion Ca²⁺ se formó porque el átomo de calcio…', ok:'perdió 2 electrones', d:['ganó 2 electrones','perdió 2 protones','ganó 2 protones'], x:'La carga 2+ indica 2 electrones menos: 20 p⁺ y 18 e⁻.'},
  {id:'Metales y cationes', tema:'iones', q:'¿Qué tipo de ion forman normalmente los metales como el sodio y el magnesio?', ok:'Cationes', d:['Aniones','Átomos neutros','No forman iones'], x:'Tienen pocos electrones de valencia y les resulta más fácil perderlos.'},
  {id:'Nombre del anión', tema:'iones', q:'¿Cómo se llama el ion Cl⁻?', ok:'Cloruro', d:['Clorato','Catión cloro','Clorito'], x:'Los aniones de un solo elemento terminan en -uro (cloruro, sulfuro, nitruro), salvo el óxido O²⁻.'},
  {id:'Na⁺ y neón', tema:'iones', q:'¿Con qué gas noble comparte el número de electrones el ion Na⁺?', ok:'Neón', d:['Argón','Helio','Kriptón'], x:'Na⁺ tiene 11 − 1 = 10 electrones, igual que el neón: quedó con su configuración.'},
  {id:'Isótopos: qué comparten', tema:'iones', q:'Los isótopos de un elemento tienen igual número de…', ok:'protones', d:['neutrones','número de masa','nucleones'], x:'Mismo Z (mismo elemento), distinto número de neutrones y, por tanto, distinto A.'},
  {id:'¹⁴C y ¹⁴N', tema:'iones', q:'El carbono-14 y el nitrógeno-14 tienen el mismo número de masa y distinto Z. Son:', ok:'Isóbaros', d:['Isótopos','Isótonos','Iones'], x:'Isóbaros: mismo A (14), distinto número atómico (6 y 7).'},
  {id:'¹³C y ¹⁴N', tema:'iones', q:'El carbono-13 (Z = 6) y el nitrógeno-14 (Z = 7) tienen 7 neutrones cada uno. Son:', ok:'Isótonos', d:['Isótopos','Isóbaros','El mismo elemento'], x:'Isótonos: mismo número de neutrones (13 − 6 = 14 − 7 = 7), distinto Z y distinto A.'},
  {id:'³⁵Cl y ³⁷Cl', tema:'iones', q:'El cloro-35 y el cloro-37 son:', ok:'Isótopos', d:['Isóbaros','Isótonos','Elementos distintos'], x:'Mismo Z (17), distinto número de neutrones (18 y 20).'},
  {id:'Masa promedio del boro', tema:'iones', q:'El boro tiene dos isótopos: boro-10 (19,9 %) y boro-11 (80,1 %). Su masa atómica promedio es:', ok:'≈ 10,8 u', d:['≈ 10,5 u','≈ 10,2 u','Exactamente 11 u'], x:'Promedio ponderado: (10,013 × 19,9 + 11,009 × 80,1) ÷ 100 ≈ 10,81 u, más cerca del isótopo más abundante.'},
  {id:'Identificar Fe²⁺', tema:'iones', q:'Una especie tiene 26 protones, 30 neutrones y 24 electrones. ¿Cuál es?', ok:'⁵⁶Fe²⁺', d:['⁵⁶Fe²⁻','⁵⁰Fe²⁺','³⁰Zn²⁺'], x:'Z = 26 → hierro; A = 26 + 30 = 56; carga = 26 − 24 = 2+.'},
  {id:'Qué cambia en un ion', tema:'iones', q:'Cuando un átomo se convierte en ion, ¿qué cambia?', ok:'Solo el número de electrones', d:['El número de protones','El número de neutrones','El número de masa'], x:'Si cambiaran los protones sería otro elemento; los neutrones no intervienen en las reacciones químicas.'},
  {id:'Z define el elemento', tema:'iones', q:'Un átomo tiene 6 protones. ¿Qué se puede asegurar?', ok:'Que es carbono, tenga los neutrones que tenga', d:['Que tiene 6 neutrones en el núcleo','Que su número de masa es 6','Que es un ion con carga positiva'], x:'El número atómico define el elemento: todo átomo con Z = 6 es carbono (¹²C, ¹³C o ¹⁴C).'},
  {id:'Neutrones del ²³⁵U', tema:'iones', ctx:'El combustible de algunas centrales nucleares es un isótopo del uranio.', q:'¿Cuántos neutrones tiene el uranio-235 (Z = 92)?', ok:'143', d:['92','235','327'], x:'n⁰ = A − Z = 235 − 92 = 143.'},
  {id:'Carga de N³⁻', tema:'iones', ctx:'En los nitruros que se usan para endurecer piezas de acero, el nitrógeno está como ion.', q:'Un ion tiene 7 protones y 10 electrones. ¿Cuál es?', ok:'N³⁻ (nitruro)', d:['N³⁺','Ne','O²⁻'], x:'Z = 7 → nitrógeno; carga = 7 − 10 = −3. Es el anión nitruro.'},
  // ── Formatos interactivos (tipo: ordenar, relacionar, completar, calcular, escribir) ──
  {id:'Orden de los modelos', tema:'modelos', tipo:'ordenar', q:'Ordena los modelos atómicos del más antiguo al más reciente.', items:['Dalton (bola de billar)','Thomson (budín de pasas)','Rutherford (núcleo)','Bohr (niveles de energía)','Modelo mecánico-cuántico'], x:'Dalton 1808 → Thomson 1897 → Rutherford 1911 → Bohr 1913 → modelo cuántico 1926. Cada uno cayó ante un experimento nuevo.'},
  {id:'Modelo y experimento', tema:'modelos', tipo:'relacionar', q:'Relaciona cada científico con el experimento que respaldó su aporte.', pares:[['Thomson','Tubo de rayos catódicos'],['Rutherford','Lámina de oro'],['Bohr','Espectro del hidrógeno'],['Millikan','Gota de aceite']], x:'Thomson descubrió el electrón, Rutherford el núcleo, Bohr explicó las líneas del hidrógeno y Millikan midió la carga del electrón.'},
  {id:'Completa: Rutherford', tema:'modelos', tipo:'completar', q:'Rutherford propuso que el átomo tiene un ____ pequeño, denso y positivo, y que casi todo el átomo es ____ vacío.', ok:['núcleo','espacio'], d:['electrón','orbital','lleno'], x:'Casi todas las partículas alfa atravesaron la lámina (espacio vacío) y unas pocas rebotaron contra el núcleo.'},
  {id:'Calcula: número de masa', tema:'estructura', tipo:'calcular', q:'Un átomo de aluminio tiene 13 protones y 14 neutrones. ¿Cuál es su número de masa (A)?', ok:27, tol:0, x:'A = protones + neutrones = 13 + 14 = 27.'},
  {id:'Escribe: partícula sin carga', tema:'estructura', tipo:'escribir', q:'¿Cómo se llama la partícula del núcleo que no tiene carga eléctrica?', ok:'neutrón', alt:['neutron','el neutrón','el neutron','neutrones'], x:'El neutrón (descubierto por Chadwick en 1932) tiene masa parecida a la del protón y carga cero.'},
  {id:'Completa: Hund y Pauli', tema:'config', tipo:'completar', q:'Según la regla de ____, los electrones ocupan primero un orbital cada uno antes de aparearse; según el principio de ____, en un orbital caben máximo dos electrones con espín opuesto.', ok:['Hund','Pauli'], d:['Aufbau','Bohr','Moeller'], x:'Hund: uno por orbital antes de aparear. Pauli: máximo 2 por orbital (↑↓). Aufbau: primero lo de menor energía.'},
  {id:'Ordena: llenado de Moeller', tema:'config', tipo:'ordenar', q:'Ordena estos subniveles según el orden en que se llenan (diagrama de Moeller).', items:['3s','3p','4s','3d','4p'], x:'El 4s tiene menos energía que el 3d y se llena antes: … 3s 3p 4s 3d 4p …'},
  {id:'Calcula: valencia del S', tema:'config', tipo:'calcular', q:'¿Cuántos electrones de valencia tiene el azufre (1s² 2s² 2p⁶ 3s² 3p⁴)?', ok:6, tol:0, x:'Los del último nivel (n = 3): 3s² + 3p⁴ = 2 + 4 = 6.'},
  {id:'Ordena: historia de la tabla', tema:'tabla', tipo:'ordenar', q:'Ordena estos aportes a la tabla periódica del más antiguo al más reciente.', items:['Lavoisier: lista de 33 sustancias','Döbereiner: tríadas','Newlands: ley de las octavas','Mendeléiev: tabla con huecos','Moseley: número atómico'], x:'1789 → 1829 → 1865 → 1869 → 1913.'},
  {id:'Calcula: tríada del bromo', tema:'tabla', tipo:'calcular', q:'Usa la regla de las tríadas de Döbereiner: el cloro tiene masa 35,5 y el yodo 126,9. ¿Qué masa predice para el bromo?', ok:81.2, tol:0.2, unidad:'u', x:'(35,5 + 126,9) ÷ 2 = 81,2. La masa real del bromo es 79,9: la regla se cumple de forma aproximada.'},
  {id:'Relaciona: familias', tema:'tabla', tipo:'relacionar', q:'Relaciona cada grupo de la tabla periódica con el nombre de su familia.', pares:[['Grupo 1','Metales alcalinos'],['Grupo 2','Alcalinotérreos'],['Grupo 17','Halógenos'],['Grupo 18','Gases nobles']], x:'En la numeración tradicional: IA, IIA, VIIA y VIIIA.'},
  {id:'Ordena: radio del periodo 3', tema:'tabla', tipo:'ordenar', q:'Ordena estos elementos del periodo 3 de MAYOR a MENOR radio atómico.', items:['Na','Mg','Al','Si','Cl'], x:'En un periodo el radio disminuye hacia la derecha: Na 190 > Mg 145 > Al 118 > Si 111 > Cl 79 pm.'},
  {id:'Relaciona: números cuánticos', tema:'cuanticos', tipo:'relacionar', q:'Relaciona cada número cuántico con lo que indica.', pares:[['n','Nivel de energía'],['l','Forma del orbital (subnivel)'],['mₗ','Orientación del orbital'],['mₛ','Espín del electrón']], x:'n: principal · l: secundario o azimutal · mₗ: magnético · mₛ: de espín.'},
  {id:'Calcula: electrones en n = 3', tema:'cuanticos', tipo:'calcular', q:'¿Cuántos electrones caben como máximo en el nivel n = 3? (usa 2n²)', ok:18, tol:0, x:'2n² = 2 × 3² = 18: 2 en el 3s, 6 en el 3p y 10 en el 3d.'},
  {id:'Completa: subnivel d', tema:'cuanticos', tipo:'completar', q:'Un subnivel d tiene l = ____ y está formado por ____ orbitales.', ok:['2','5'], d:['1','3','7','10'], x:'l = 2 → mₗ = −2, −1, 0, +1, +2: 5 orbitales con capacidad para 10 electrones.'},
  {id:'Escribe: subnivel de n = 3, l = 1', tema:'cuanticos', tipo:'escribir', q:'Un electrón tiene n = 3 y l = 1. Escribe el subnivel en que se encuentra (por ejemplo, 2s).', ok:'3p', alt:['3 p'], x:'n = 3 es el nivel y l = 1 corresponde a p: subnivel 3p.'},
  {id:'Calcula: neutrones del ⁵⁶Fe', tema:'iones', tipo:'calcular', q:'¿Cuántos neutrones tiene el hierro-56 (Z = 26)?', ok:30, tol:0, x:'n⁰ = A − Z = 56 − 26 = 30.'},
  {id:'Calcula: masa promedio del cloro', tema:'iones', tipo:'calcular', q:'El cloro tiene dos isótopos: ³⁵Cl (34,97 u; 75,8 %) y ³⁷Cl (36,97 u; 24,2 %). Calcula su masa atómica promedio (dos decimales).', ok:35.45, tol:0.03, unidad:'u', x:'(34,97 × 75,8 + 36,97 × 24,2) ÷ 100 = 35,45 u, el valor de la tabla periódica.'},
  {id:'Relaciona: isótopos e isóbaros', tema:'iones', tipo:'relacionar', q:'Relaciona cada pareja con su relación.', pares:[['¹²C y ¹⁴C','Isótopos'],['¹⁴C y ¹⁴N','Isóbaros'],['¹³C y ¹⁴N','Isótonos'],['¹²C y ¹⁶O','Ninguna de las tres']], x:'Isótopos: mismo Z. Isóbaros: mismo A. Isótonos: mismos neutrones (¹³C y ¹⁴N tienen 7). ¹²C (6 n⁰) y ¹⁶O (8 n⁰) no comparten Z, A ni neutrones.'},
  {id:'Completa: catión y anión', tema:'iones', tipo:'completar', q:'Cuando un átomo pierde electrones se convierte en un ____; cuando los gana, en un ____.', ok:['catión','anión'], d:['isótopo','neutrón','protón'], x:'Perder electrones (negativos) deja carga positiva: catión. Ganarlos da carga negativa: anión.'}
];

// ═══════════════════════════════════════════════════════════════════════════
// BANCO_ENLACE — Enlace químico (juego.html, grupo 'enlace'). Mismo formato
// que BANCO_ATOMO: ok = respuesta correcta, d = 3 distractores, x =
// explicación, id = etiqueta corta para "Temas para repasar". Las ΔEN usan
// las electronegatividades de Pauling de tabla.html y la misma regla de
// enlace.html (no metal + no metal: apolar si ΔEN < 0,4; metal + no metal:
// iónico si ΔEN ≥ 1,7). Acompaña a enlace.html.
// ═══════════════════════════════════════════════════════════════════════════
const BANCO_ENLACE = [
  // ── Octeto y estructuras de Lewis ──
  {id:'Regla del octeto', tema:'lewis', q:'¿Qué dice la regla del octeto?', ok:'Los átomos ganan, pierden o comparten electrones hasta tener 8 en su último nivel', d:['Todos los átomos tienen 8 protones en el núcleo cuando son estables','Cada enlace químico se forma con exactamente 8 electrones compartidos','Los átomos solo se unen en grupos de 8 para formar moléculas'], x:'Al completar 8 electrones de valencia el átomo queda con la configuración estable de un gas noble.'},
  {id:'Dueto del hidrógeno', tema:'lewis', q:'¿Con cuántos electrones queda estable el hidrógeno al formar un enlace?', ok:'Con 2 (como el helio)', d:['Con 8 (como el neón)','Con 1','Con 4'], x:'El hidrógeno solo tiene el nivel 1, que se llena con 2 electrones: cumple el "dueto", no el octeto.'},
  {id:'Lewis del oxígeno', tema:'lewis', q:'¿Cuántos puntos lleva el símbolo de Lewis del oxígeno (grupo 16)?', ok:'6', d:['8','2','16'], x:'Los puntos son los electrones de valencia: el oxígeno (2s² 2p⁴) tiene 6.'},
  {id:'Lewis del nitrógeno', tema:'lewis', q:'En el símbolo de Lewis del nitrógeno, ¿cuántos electrones están desapareados y listos para enlazar?', ok:'3', d:['5','1','2'], x:'El N tiene 5 electrones de valencia: un par y 3 electrones solos. Por eso forma 3 enlaces (como en NH₃ o N₂).'},
  {id:'Pares libres del H₂O', tema:'lewis', q:'En la estructura de Lewis del agua (H₂O), ¿cuántos pares libres (no enlazantes) tiene el oxígeno?', ok:'2', d:['0','1','3'], x:'El O tiene 6 electrones de valencia: usa 2 en los enlaces O–H y le quedan 4, es decir, 2 pares libres.'},
  {id:'Lewis del CO₂', tema:'lewis', q:'¿Cuál es la estructura de Lewis correcta del dióxido de carbono?', ok:'O=C=O, con dos enlaces dobles', d:['O–C–O, con dos enlaces simples','C=O–O, con el carbono en un extremo','O≡C–O, con un enlace triple y uno simple'], x:'Hay 16 electrones de valencia. Con dos dobles enlaces el C y los dos O completan el octeto.'},
  {id:'Enlace del N₂', tema:'lewis', q:'¿Qué tipo de enlace une los dos átomos de la molécula de nitrógeno (N₂)?', ok:'Un enlace triple (3 pares compartidos)', d:['Un enlace simple (1 par)','Un enlace doble (2 pares)','Un enlace iónico (sin pares)'], x:'Cada N necesita 3 electrones más: comparten 3 pares (N≡N). Es uno de los enlaces más fuertes, 945 kJ/mol.'},
  {id:'Valencia del NH₃', tema:'lewis', q:'¿Cuántos electrones de valencia hay en total en la molécula de amoníaco (NH₃)?', ok:'8', d:['10','4','7'], x:'N aporta 5 y cada H aporta 1: 5 + 3 × 1 = 8 electrones (3 pares de enlace y 1 par libre).'},
  {id:'Pares libres del HCl', tema:'lewis', q:'En la estructura de Lewis del HCl, ¿cuántos pares libres tiene el cloro?', ok:'3', d:['1','4','0'], x:'El Cl tiene 7 electrones de valencia: 1 lo comparte con el H y le quedan 6, es decir, 3 pares libres.'},
  {id:'Enlaces del carbono', tema:'lewis', q:'¿Cuántos enlaces covalentes forma el carbono en el metano (CH₄)?', ok:'4 enlaces simples', d:['2 enlaces dobles','1 enlace triple y 1 simple','3 enlaces simples y un par libre'], x:'El C tiene 4 electrones de valencia y comparte uno con cada H: 4 enlaces C–H y octeto completo.'},
  // ── Enlace iónico ──
  {id:'Formación del NaCl', tema:'ionico', q:'¿Qué ocurre cuando se forma el cloruro de sodio (NaCl)?', ok:'El Na cede 1 electrón al Cl y se forman Na⁺ y Cl⁻', d:['El Na y el Cl comparten un par de electrones','El Cl cede 1 electrón al Na','Los dos átomos pierden un electrón'], x:'El metal (Na) pierde su único electrón de valencia y el no metal (Cl) lo gana; los iones de carga opuesta se atraen.'},
  {id:'Ion del magnesio', tema:'ionico', q:'¿Qué ion forma el magnesio (grupo 2)?', ok:'Mg²⁺', d:['Mg²⁻','Mg⁺','Mg⁶⁻'], x:'Es más fácil perder 2 electrones de valencia que ganar 6: queda Mg²⁺ con la configuración del neón.'},
  {id:'Ion del oxígeno', tema:'ionico', q:'¿Qué ion forma el oxígeno al reaccionar con un metal?', ok:'O²⁻', d:['O²⁺','O⁶⁺','O⁻'], x:'El O tiene 6 electrones de valencia: gana 2 para completar el octeto y queda O²⁻ (óxido).'},
  {id:'Fórmula Ca + Cl', tema:'ionico', q:'¿Cuál es la fórmula del compuesto iónico que forman el calcio (Ca²⁺) y el cloro (Cl⁻)?', ok:'CaCl₂', d:['CaCl','Ca₂Cl','Ca₂Cl₃'], x:'Se necesitan 2 Cl⁻ para neutralizar la carga 2+ del Ca²⁺ (cruce de cargas).'},
  {id:'Fórmula Al + O', tema:'ionico', q:'¿Cuál es la fórmula del compuesto que forman el aluminio (Al³⁺) y el oxígeno (O²⁻)?', ok:'Al₂O₃', d:['AlO','Al₃O₂','AlO₃'], x:'Cruce de cargas: 2 Al³⁺ (+6) y 3 O²⁻ (−6) dan un compuesto neutro.'},
  {id:'Fórmula Mg + N', tema:'ionico', q:'¿Cuál es la fórmula del nitruro de magnesio, formado por Mg²⁺ y N³⁻?', ok:'Mg₃N₂', d:['MgN','Mg₂N₃','MgN₂'], x:'3 Mg²⁺ (+6) neutralizan 2 N³⁻ (−6).'},
  {id:'Configuración del Na⁺', tema:'ionico', q:'Al perder su electrón, el ion Na⁺ queda con la misma configuración electrónica que…', ok:'el neón (Ne)', d:['el argón (Ar)','el magnesio (Mg)','el cloro (Cl)'], x:'Na⁺ tiene 10 electrones: 1s² 2s² 2p⁶, igual que el gas noble neón.'},
  {id:'Tamaño del catión', tema:'ionico', q:'¿Cómo es el tamaño del ion Na⁺ comparado con el átomo de Na?', ok:'Más pequeño, porque pierde su capa externa', d:['Más grande, porque gana carga','Igual, porque tiene los mismos protones','Más grande, porque gana un electrón'], x:'Al perder el electrón del nivel 3, el Na⁺ queda solo con dos capas y los 11 protones las atraen con más fuerza.'},
  {id:'Tamaño del anión', tema:'ionico', q:'¿Cómo es el tamaño del ion Cl⁻ comparado con el átomo de Cl?', ok:'Más grande, porque el electrón extra aumenta la repulsión', d:['Más pequeño, porque gana carga negativa','Igual, porque tiene los mismos protones','Más pequeño, porque pierde una capa'], x:'Los 17 protones atraen ahora 18 electrones: la nube se expande y el anión crece.'},
  {id:'Unidad fórmula', tema:'ionico', q:'¿Por qué se dice que "NaCl" es una unidad fórmula y no una molécula?', ok:'Porque indica la proporción 1:1 de iones en una red cristalina, no una partícula aislada', d:['Porque el NaCl es un gas formado por moléculas sueltas','Porque el Na y el Cl comparten electrones como en el agua','Porque el NaCl solo existe cuando está disuelto en agua'], x:'En el cristal cada Na⁺ está rodeado de 6 Cl⁻ y viceversa: no hay "parejas" separadas.'},
  // ── Enlace covalente ──
  {id:'Enlace covalente', tema:'covalente', q:'¿Qué caracteriza al enlace covalente?', ok:'Los átomos comparten pares de electrones', d:['Un átomo cede electrones al otro','Los electrones se mueven libres por toda una red','Los núcleos se unen entre sí'], x:'Se da principalmente entre no metales, que tienen electronegatividades altas y no ceden electrones con facilidad.'},
  {id:'Enlace simple', tema:'covalente', q:'¿Cuántos electrones forman un enlace covalente simple?', ok:'2 (un par compartido)', d:['1 (un electrón solo)','4 (dos pares)','8 (un octeto)'], x:'Simple = 1 par (2 e⁻), doble = 2 pares (4 e⁻) y triple = 3 pares (6 e⁻).'},
  {id:'Longitud de enlace', tema:'covalente', q:'En la curva de energía de dos átomos de H que se acercan, ¿qué es la longitud de enlace?', ok:'La distancia donde la energía es mínima (74 pm para el H₂)', d:['La distancia donde los núcleos se tocan','La distancia donde la energía es máxima','La suma de los radios de los iones'], x:'A esa distancia la atracción núcleo–electrones y la repulsión entre núcleos se equilibran.'},
  {id:'Átomos demasiado cerca', tema:'covalente', q:'Si dos átomos de hidrógeno se acercan más allá de la longitud de enlace, ¿qué pasa con la energía?', ok:'Sube bruscamente por la repulsión entre los núcleos', d:['Baja hasta cero porque los núcleos se tocan','Se mantiene constante a cualquier distancia','Se forma un enlace más fuerte y estable'], x:'Los dos núcleos positivos se repelen: por eso la curva sube tan rápido a distancias cortas.'},
  {id:'Enlace más fuerte', tema:'covalente', q:'¿Cuál de estos enlaces necesita más energía para romperse?', ok:'N≡N (945 kJ/mol)', d:['O=O (498 kJ/mol)','H–H (436 kJ/mol)','Cl–Cl (242 kJ/mol)'], x:'Más pares compartidos → enlace más fuerte y más corto. El triple del N₂ es de los más fuertes que existen.'},
  {id:'Energía de enlace', tema:'covalente', q:'"La energía de enlace del H–H es 436 kJ/mol". ¿Qué significa?', ok:'Que se necesitan 436 kJ para romper un mol de enlaces H–H', d:['Que un mol de moléculas de H₂ pesa 436 g','Que la molécula de H₂ mide 436 pm de largo','Que al formar un mol de H₂ se absorben 436 kJ'], x:'Romper un enlace siempre requiere energía; al formarse se libera la misma cantidad.'},
  // ── Electronegatividad y polaridad ──
  {id:'Electronegatividad', tema:'polaridad', q:'¿Qué mide la electronegatividad de un elemento?', ok:'La fuerza con que atrae los electrones de un enlace', d:['El número de electrones de valencia','La carga del ion que forma el elemento','La energía necesaria para fundirlo'], x:'Pauling la definió en una escala donde el flúor es el más electronegativo (3,98).'},
  {id:'Más electronegativo', tema:'polaridad', q:'¿Cuál es el elemento más electronegativo de la tabla periódica?', ok:'Flúor (3,98)', d:['Oxígeno (3,44)','Cloro (3,16)','Francio (0,7)'], x:'La electronegatividad aumenta hacia arriba y a la derecha de la tabla (sin contar los gases nobles).'},
  {id:'ΔEN del HCl', tema:'polaridad', q:'Con EN(H) = 2,20 y EN(Cl) = 3,16, ¿qué tipo de enlace hay en el HCl?', ok:'Covalente polar (ΔEN = 0,96)', d:['Covalente apolar (ΔEN = 0,96)','Iónico (ΔEN = 5,36)','Metálico'], x:'Dos no metales con ΔEN ≥ 0,4: comparten el par, pero el Cl lo atrae más (δ−).'},
  {id:'Enlace del Cl₂', tema:'polaridad', q:'¿Qué tipo de enlace hay en la molécula de cloro (Cl₂)?', ok:'Covalente apolar (ΔEN = 0)', d:['Covalente polar (ΔEN > 0,5)','Iónico (ΔEN > 1,7)','Metálico (mar de electrones)'], x:'Dos átomos iguales atraen el par con la misma fuerza: se reparte por igual.'},
  {id:'ΔEN del NaCl', tema:'polaridad', q:'Con EN(Na) = 0,93 y EN(Cl) = 3,16, ¿qué tipo de enlace hay en el NaCl?', ok:'Iónico (ΔEN = 2,23)', d:['Covalente polar (ΔEN = 2,23)','Covalente apolar (ΔEN = 0,23)','Metálico'], x:'Metal + no metal con ΔEN ≥ 1,7: el Cl le quita el electrón al Na.'},
  {id:'ΔEN del C–H', tema:'polaridad', q:'Con EN(C) = 2,55 y EN(H) = 2,20, ¿cómo se clasifica el enlace C–H?', ok:'Covalente apolar (ΔEN = 0,35)', d:['Covalente polar (ΔEN = 0,35)','Iónico (ΔEN = 4,75)','Metálico'], x:'ΔEN < 0,4: el par se comparte casi por igual. Por eso los hidrocarburos son apolares.'},
  {id:'Carga parcial δ−', tema:'polaridad', q:'En la molécula H–F, ¿qué átomo queda con carga parcial negativa (δ−)?', ok:'El flúor, porque es más electronegativo', d:['El hidrógeno, porque es más pequeño','Ninguno, porque es apolar','Los dos por igual'], x:'El F (3,98) atrae el par compartido mucho más que el H (2,20): el F queda δ− y el H δ+.'},
  {id:'Enlace más polar', tema:'polaridad', q:'¿Cuál de estos enlaces es el más polar?', ok:'H–F (ΔEN = 1,78)', d:['H–Cl (ΔEN = 0,96)','H–Br (ΔEN = 0,76)','H–I (ΔEN = 0,46)'], x:'A mayor diferencia de electronegatividad, más polar. El HF sigue siendo covalente aunque pase de 1,7 porque los dos son no metales.'},
  {id:'CO₂ apolar', tema:'polaridad', q:'Los enlaces C=O son polares, pero la molécula de CO₂ es apolar. ¿Por qué?', ok:'Porque es lineal y los dos dipolos se cancelan', d:['Porque el carbono no tiene electrones','Porque los enlaces dobles nunca son polares','Porque el oxígeno es menos electronegativo que el carbono'], x:'O=C=O es simétrica: los dos dipolos son iguales y apuntan en sentidos opuestos.'},
  {id:'Agua polar', tema:'polaridad', q:'¿Por qué la molécula de agua es polar?', ok:'Porque es angular y sus dos dipolos O–H no se cancelan', d:['Porque es lineal y sus dipolos se suman','Porque el H es más electronegativo que el O','Porque tiene enlaces iónicos entre O y H'], x:'Los 2 pares libres del O doblan la molécula (≈104,5°): el lado del O queda δ− y el de los H δ+.'},
  // ── Enlace metálico ──
  {id:'Mar de electrones', tema:'metalico', q:'¿Cómo describe el modelo del "mar de electrones" al enlace metálico?', ok:'Cationes fijos en una red rodeados de electrones de valencia que se mueven libremente', d:['Aniones y cationes que se atraen fijos en una red cristalina','Pares de electrones compartidos solo entre dos átomos vecinos','Moléculas separadas unidas entre sí por fuerzas muy débiles'], x:'Los electrones de valencia no pertenecen a un átomo: los comparte toda la red.'},
  {id:'Metal conduce sólido', tema:'metalico', q:'¿Por qué un alambre de cobre conduce la electricidad en estado sólido?', ok:'Porque sus electrones de valencia se mueven libres por la red', d:['Porque tiene iones que viajan a los electrodos','Porque se funde al pasar la corriente','Porque el cobre tiene protones libres'], x:'Al conectar una pila, el mar de electrones fluye del polo − al +: eso es la corriente.'},
  {id:'Metal maleable', tema:'metalico', q:'¿Por qué un metal se aplana al martillarlo en vez de romperse?', ok:'Las capas de cationes se deslizan y el mar de electrones las mantiene unidas', d:['Porque sus iones de igual carga se repelen y se separan','Porque el golpe funde el metal en el punto de impacto','Porque sus moléculas son blandas y se doblan sin romperse'], x:'Al desplazarse una capa no quedan cargas iguales enfrentadas: los electrones siguen "pegando" la red.'},
  {id:'Metal y calor', tema:'metalico', q:'¿Por qué una cuchara metálica se calienta rápido si se deja en una olla caliente?', ok:'Porque los electrones libres transportan la energía por todo el metal', d:['Porque el metal absorbe el agua caliente','Porque sus enlaces se rompen con el calor','Porque los metales tienen baja temperatura de fusión'], x:'Los metales son buenos conductores del calor gracias al mar de electrones.'},
  // ── Propiedades y laboratorio ──
  {id:'NaCl y conductividad', tema:'propiedades', q:'¿Por qué la sal (NaCl) NO conduce la electricidad en estado sólido, pero sí disuelta en agua?', ok:'En el sólido los iones están fijos; disueltos quedan libres para moverse', d:['El agua le aporta los electrones libres que conducen','En el sólido no hay iones; se forman al disolverse','Al disolverse se forman enlaces metálicos entre iones'], x:'Disuelta (o fundida), los Na⁺ viajan al electrodo − y los Cl⁻ al +.'},
  {id:'Iónico frágil', tema:'propiedades', q:'¿Por qué un cristal iónico se rompe al golpearlo?', ok:'Al deslizarse una capa quedan iones de igual carga enfrentados y se repelen', d:['Porque pierde sus electrones con el golpe y se separa','Porque sus moléculas son pequeñas y no resisten golpes','Porque el golpe lo funde en la línea donde se rompe'], x:'+ frente a + y − frente a −: la repulsión parte el cristal. Por eso los iónicos son duros pero frágiles.'},
  {id:'Azúcar disuelta', tema:'propiedades', q:'El azúcar se disuelve en agua, pero la disolución no enciende el bombillo. ¿Por qué?', ok:'Porque en el agua quedan moléculas neutras, no iones', d:['Porque el azúcar es un metal','Porque el azúcar no se disuelve de verdad','Porque el agua impide toda corriente'], x:'El azúcar es covalente: al disolverse se separan las moléculas enteras, que no tienen carga.'},
  {id:'Fusión de la parafina', tema:'propiedades', q:'La parafina funde a unos 55 °C y la sal a 801 °C. ¿Qué explica la diferencia?', ok:'Entre las moléculas de parafina hay fuerzas débiles; en la sal, fuertes atracciones entre iones', d:['La parafina tiene enlaces iónicos, pero más débiles que los de la sal','La sal tiene un mar de electrones que la mantiene muy unida','La parafina es un metal blando con un enlace metálico débil'], x:'Para fundir la parafina basta separar moléculas; para fundir la sal hay que vencer la red iónica.'},
  {id:'Cuarzo', tema:'propiedades', q:'El cuarzo (SiO₂) funde a unos 1700 °C y no conduce la electricidad. ¿Qué tipo de sólido es?', ok:'Un sólido covalente de red', d:['Un sólido iónico','Un metal','Un sólido molecular blando'], x:'Todos sus átomos están unidos por enlaces covalentes en una red gigante: hay que romper enlaces para fundirlo.'},
  {id:'Muestra iónica', tema:'propiedades', q:'Una muestra funde a 772 °C, no conduce en estado sólido y sí conduce disuelta en agua. ¿Qué enlace tiene?', ok:'Iónico', d:['Metálico','Covalente apolar','Covalente de red'], x:'Alto punto de fusión + conducción solo con los iones libres = compuesto iónico (por ejemplo, CaCl₂).'},
  {id:'Muestra metálica', tema:'propiedades', q:'Una muestra brilla, conduce la electricidad en estado sólido y se aplana al martillarla. ¿Qué enlace tiene?', ok:'Metálico', d:['Iónico','Covalente polar','Covalente apolar'], x:'Brillo, conducción en sólido y maleabilidad son las huellas del mar de electrones.'},
  // ── Formatos interactivos (tipo: ordenar, relacionar, completar, calcular, escribir) ──
  {id:'Calcula: e⁻ de valencia del CO₂', tema:'lewis', tipo:'calcular', q:'Suma los electrones de valencia de la molécula de CO₂ (C: grupo 14; O: grupo 16).', ok:16, tol:0, x:'C aporta 4 y cada O aporta 6: 4 + 2 × 6 = 16 electrones.'},
  {id:'Relaciona: puntos de Lewis', tema:'lewis', tipo:'relacionar', q:'Relaciona cada elemento con los puntos de su símbolo de Lewis.', pares:[['Na','1 punto'],['Mg','2 puntos'],['N','5 puntos'],['Cl','7 puntos']], x:'Los puntos son los electrones de valencia: Na (grupo 1) 1, Mg (2) 2, N (15) 5, Cl (17) 7.'},
  {id:'Completa: octeto y dueto', tema:'lewis', tipo:'completar', q:'Al formar enlaces, la mayoría de los átomos buscan tener ____ electrones en su último nivel; el hidrógeno queda estable con ____.', ok:['8','2'], d:['6','4','18'], x:'Regla del octeto (8) y dueto del hidrógeno (2, como el helio).'},
  {id:'Escribe: fórmula K y S', tema:'ionico', tipo:'escribir', q:'Escribe la fórmula del compuesto iónico que forman K⁺ y S²⁻ (puedes escribir los subíndices como números normales, por ejemplo Na2O).', ok:'K2S', alt:['K₂S'], x:'Se necesitan 2 K⁺ para compensar la carga del S²⁻: K₂S, sulfuro de potasio.'},
  {id:'Ordena: fórmula de un compuesto iónico', tema:'ionico', tipo:'ordenar', q:'Ordena los pasos para escribir la fórmula de un compuesto iónico.', items:['Escribir el catión y el anión con sus cargas','Intercambiar las cargas como subíndices','Simplificar los subíndices si es posible','Comprobar que la suma de cargas sea cero'], x:'Ejemplo: Al³⁺ y O²⁻ → Al₂O₃; 2(+3) + 3(−2) = 0.'},
  {id:'Calcula: carga en Al₂O₃', tema:'ionico', tipo:'calcular', q:'En el Al₂O₃, ¿cuál es la carga positiva total que aportan los dos iones Al³⁺?', ok:6, tol:0, x:'2 × (+3) = +6, que se compensa con 3 × (−2) = −6 de los tres O²⁻.'},
  {id:'Relaciona: enlaces simple, doble y triple', tema:'covalente', tipo:'relacionar', q:'Relaciona cada molécula con el tipo de enlace entre sus átomos.', pares:[['H–H (hidrógeno)','Simple: 1 par compartido'],['O=O (oxígeno)','Doble: 2 pares compartidos'],['N≡N (nitrógeno)','Triple: 3 pares compartidos']], x:'Más pares compartidos → enlace más corto y más fuerte: N≡N es el más difícil de romper.'},
  {id:'Calcula: electrones compartidos en N₂', tema:'covalente', tipo:'calcular', q:'¿Cuántos electrones comparten en total los dos átomos de la molécula de N₂?', ok:6, tol:0, x:'El enlace triple son 3 pares: 3 × 2 = 6 electrones compartidos.'},
  {id:'Completa: enlace covalente', tema:'covalente', tipo:'completar', q:'En el enlace covalente los átomos ____ pares de electrones; suele darse entre dos ____.', ok:['comparten','no metales'], d:['ceden','metales','ganan'], x:'Entre no metales, ninguno logra quitarle el electrón al otro, así que lo comparten.'},
  {id:'Calcula: ΔEN del O–H', tema:'polaridad', tipo:'calcular', q:'Calcula la diferencia de electronegatividad (ΔEN) del enlace O–H. EN: O = 3,44; H = 2,20.', ok:1.24, tol:0.01, x:'ΔEN = 3,44 − 2,20 = 1,24: enlace covalente polar (entre 0,4 y 1,7).'},
  {id:'Ordena: polaridad de enlaces', tema:'polaridad', tipo:'ordenar', q:'Ordena estos enlaces de MENOR a MAYOR polaridad. EN: H 2,20 · C 2,55 · N 3,04 · O 3,44 · F 3,98.', items:['C–H','N–H','O–H','F–H'], x:'ΔEN: C–H 0,35 < N–H 0,84 < O–H 1,24 < F–H 1,78.'},
  {id:'Relaciona: tipo de enlace por ΔEN', tema:'polaridad', tipo:'relacionar', q:'Relaciona cada enlace con su clasificación según la ΔEN.', pares:[['Cl–Cl (ΔEN = 0)','Covalente apolar'],['H–Cl (ΔEN = 0,96)','Covalente polar'],['Na–Cl (ΔEN = 2,23)','Iónico']], x:'Apolar: ΔEN < 0,4 · polar: 0,4 a 1,7 · iónico: ΔEN ≥ 1,7 entre metal y no metal.'},
  {id:'Completa: mar de electrones', tema:'metalico', tipo:'completar', q:'En el enlace metálico, los ____ ocupan posiciones fijas en una red y los ____ de valencia se mueven libremente entre ellos.', ok:['cationes','electrones'], d:['aniones','protones','neutrones'], x:'Es el modelo del «mar de electrones»: explica la conductividad y la maleabilidad de los metales.'},
  {id:'Relaciona: propiedades de los metales', tema:'metalico', tipo:'relacionar', q:'Relaciona cada propiedad de los metales con su explicación.', pares:[['Conducen la electricidad','Los electrones libres se desplazan'],['Son maleables','Las capas de cationes se deslizan sin romperse'],['Conducen el calor','Los electrones libres transportan la energía']], x:'Las tres propiedades se explican con el mar de electrones móviles.'},
  {id:'Escribe: metal líquido', tema:'metalico', tipo:'escribir', q:'¿Qué metal es líquido a temperatura ambiente? Escribe su nombre.', ok:'mercurio', alt:['el mercurio','hg'], x:'El mercurio (Hg) funde a −39 °C: su enlace metálico es muy débil. Es tóxico y contamina ríos en la minería de oro.'},
  {id:'Relaciona: sustancia y enlace', tema:'propiedades', tipo:'relacionar', q:'Relaciona cada sustancia con su tipo de enlace.', pares:[['NaCl (sal)','Iónico'],['H₂O (agua)','Covalente polar'],['Cu (cobre)','Metálico'],['O₂ (oxígeno)','Covalente apolar']], x:'Metal + no metal → iónico; no metales distintos → polar; iguales → apolar; metal puro → metálico.'},
  {id:'Ordena: punto de fusión', tema:'propiedades', tipo:'ordenar', q:'Ordena estas sustancias de MENOR a MAYOR punto de fusión.', items:['O₂','H₂O','Parafina','NaCl'], x:'O₂ −218 °C < H₂O 0 °C < parafina ≈ 55 °C < NaCl 801 °C. Romper un cristal iónico exige mucha más energía.'},
  {id:'Completa: conducción del NaCl', tema:'propiedades', tipo:'completar', q:'La sal sólida no conduce la electricidad porque sus ____ están fijos en el cristal; disuelta en agua sí conduce, porque los iones quedan ____.', ok:['iones','libres'], d:['electrones','fijos','neutrones'], x:'La corriente necesita cargas que se muevan: en el agua los iones Na⁺ y Cl⁻ se desplazan.'}
];

// ═══════════════════════════════════════════════════════════════════════════
// BANCO_PH — Ácidos, bases y pH (juego.html, grupo 'acidobase'; ph.html).
// Mismo formato que BANCO_ATOMO: ok = respuesta correcta, d = 3 distractores,
// x = explicación, id = etiqueta corta para «Temas para repasar», tipo =
// formato interactivo (calcular, ordenar, relacionar, completar, escribir).
// Valores de pH de sustancias: rangos típicos de tablas de referencia.
// Cubre las evidencias SED 10q-ind1, 10q-ind3 y 10q-exp4.
// ═══════════════════════════════════════════════════════════════════════════
const BANCO_PH = [
  // ── Teorías ácido-base ──
  {id:'Ácido de Arrhenius', tema:'teorias', ctx:'En el laboratorio se disuelve ácido muriático en agua y la solución conduce la electricidad.', q:'Según Arrhenius, ¿qué es un ácido?', ok:'Una sustancia que en agua libera iones H⁺', d:['Una sustancia que en agua libera iones OH⁻','Una sustancia que acepta iones H⁺','Cualquier sustancia con sabor dulce'], x:'Arrhenius (1887): ácido → libera H⁺ en agua (HCl → H⁺ + Cl⁻); base → libera OH⁻ (NaOH → Na⁺ + OH⁻).'},
  {id:'Base de Arrhenius', tema:'teorias', ctx:'La soda cáustica que se usa para destapar cañerías es una base fuerte.', q:'Según Arrhenius, ¿cuál de estas sustancias es una base?', ok:'NaOH, porque en agua libera OH⁻', d:['HCl, porque en agua libera H⁺','NaCl, porque tiene sodio','H₂O₂, porque tiene oxígeno'], x:'NaOH → Na⁺ + OH⁻. El ion hidróxido es el que da las propiedades básicas.'},
  {id:'Ácido de Brønsted', tema:'teorias', ctx:'Un estudiante estudia qué pasa cuando un ácido se disuelve en agua.', q:'Según Brønsted y Lowry, un ácido es una sustancia que…', ok:'Dona un protón (H⁺)', d:['Acepta un protón (H⁺)','Dona un par de electrones','Libera iones OH⁻'], x:'Ácido = donador de H⁺; base = aceptor de H⁺. Así se explican también bases sin OH⁻, como el amoníaco.'},
  {id:'NH₃ como base', tema:'teorias', ctx:'Los limpiadores con amoníaco forman soluciones básicas en el agua.', q:'En NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, ¿por qué el amoníaco es una base de Brønsted-Lowry?', ok:'Porque acepta un H⁺ del agua', d:['Porque tiene grupos OH⁻ en su fórmula','Porque dona un H⁺ al agua','Porque es un gas'], x:'El NH₃ no tiene OH⁻, pero toma un H⁺ del agua y deja libre un OH⁻. Arrhenius no podía explicarlo; Brønsted-Lowry sí.'},
  {id:'Par conjugado', tema:'teorias', ctx:'El ácido muriático cede su hidrógeno al agua cuando se disuelve.', q:'En HCl + H₂O → H₃O⁺ + Cl⁻, ¿cuál es la base conjugada del HCl?', ok:'Cl⁻', d:['H₃O⁺','H₂O','OH⁻'], x:'Al donar su H⁺, el HCl queda como Cl⁻: esa es su base conjugada. El par conjugado difiere en un H⁺.'},
  {id:'Ion hidronio', tema:'teorias', ctx:'Cuando el ácido de un limón se disuelve en agua se forman iones positivos.', q:'¿Cómo se llama el ion H₃O⁺ que se forma cuando un ácido cede su H⁺ al agua?', ok:'Ion hidronio', d:['Ion hidróxido','Ion hidruro','Ion amonio'], x:'En el agua, el H⁺ no queda suelto: se une a una molécula de H₂O y forma H₃O⁺ (hidronio).'},
  // ── Escala de pH ──
  {id:'Neutro', tema:'escala', ctx:'Un estudiante mide el pH del agua destilada del laboratorio.', q:'A 25 °C, ¿qué pH tiene una solución neutra, como el agua pura?', ok:'7', d:['0','14','1'], x:'En el agua pura [H⁺] = [OH⁻] = 1 × 10⁻⁷ mol/L, así que pH = 7.'},
  {id:'pH ácido', tema:'escala', ctx:'Un estudiante mide el pH del jugo de limón con papel indicador.', q:'Una solución tiene pH 3. ¿Cómo se clasifica?', ok:'Ácida', d:['Básica','Neutra','No se puede saber'], x:'pH < 7 ácida, pH = 7 neutra, pH > 7 básica (a 25 °C).'},
  {id:'Escala logarítmica', tema:'escala', ctx:'Un estudiante compara el pH de un jugo de naranja con el del agua de la llave.', q:'¿Cuántas veces más ácido (más H⁺) es un jugo de pH 3 que un agua de pH 6?', ok:'1000 veces', d:['3 veces','2 veces','300 veces'], x:'Cada unidad de pH es un factor de 10: 10 × 10 × 10 = 1000. La diferencia es de 3 unidades.'},
  {id:'pH desde [H⁺]', tema:'escala', ctx:'En el laboratorio se prepara una solución ácida de concentración conocida.', q:'Una solución tiene [H⁺] = 1 × 10⁻⁴ mol/L. ¿Cuál es su pH?', ok:'4', d:['−4','10','0,0001'], x:'pH = −log[H⁺] = −log(10⁻⁴) = 4.'},
  {id:'pH + pOH', tema:'escala', ctx:'Un limpiador de hornos tiene un pH muy alto.', q:'Si el pH de una solución es 11, ¿cuál es su pOH a 25 °C?', ok:'3', d:['11','14','7'], x:'pH + pOH = 14 → pOH = 14 − 11 = 3.'},
  {id:'Fenolftaleína', tema:'escala', ctx:'En el laboratorio se usa fenolftaleína para saber si una solución es ácida o básica.', q:'¿En qué tipo de solución se pone fucsia la fenolftaleína?', ok:'En una básica (pH mayor que unos 8,2)', d:['En una ácida (pH menor que 7)','En una neutra (pH igual a 7)','En cualquier solución con agua'], x:'La fenolftaleína es incolora en medio ácido o neutro y fucsia en medio básico.'},
  // ── Fuertes y débiles ──
  {id:'Ácido fuerte', tema:'fuerza', ctx:'El ácido muriático y el vinagre tienen la misma concentración, pero no el mismo pH.', q:'¿Qué diferencia a un ácido fuerte, como el HCl, de uno débil, como el ácido acético del vinagre?', ok:'El fuerte se ioniza casi por completo; el débil, solo en parte', d:['El fuerte siempre está más concentrado que el ácido débil','El débil no tiene hidrógeno que pueda liberar','El fuerte es sólido y el débil es líquido'], x:'«Fuerte» habla de cuánto se ioniza, no de la concentración. A 0,1 mol/L, el HCl da pH 1 y el ácido acético, cerca de 2,9.'},
  {id:'Fuerte o concentrado', tema:'fuerza', ctx:'Un estudiante compara el pH de un ácido fuerte muy diluido con el de un vinagre.', q:'¿Puede una solución de un ácido fuerte tener un pH mayor que una de un ácido débil?', ok:'Sí, si la del ácido fuerte está mucho más diluida', d:['No, nunca: un ácido fuerte siempre tiene el pH más bajo','Sí, pero solo si la solución del ácido fuerte se calienta','No, porque el pH no depende de la concentración del ácido'], x:'El pH depende de la fuerza y de la concentración. Un HCl muy diluido puede tener menos H⁺ que un vinagre concentrado.'},
  {id:'Neutralización', tema:'fuerza', ctx:'En el laboratorio se neutraliza ácido muriático con soda cáustica.', q:'¿Qué productos se forman en la neutralización HCl + NaOH?', ok:'NaCl + H₂O', d:['NaH + HClO','Na₂O + H₂','NaClO + H₂'], x:'Ácido + base → sal + agua. En el fondo: H⁺ + OH⁻ → H₂O.'},
  {id:'Antiácido', tema:'fuerza', ctx:'La leche de magnesia se toma para aliviar la acidez estomacal.', q:'La leche de magnesia, Mg(OH)₂, alivia la acidez estomacal. ¿Qué reacción ocurre en el estómago?', ok:'Mg(OH)₂ + 2 HCl → MgCl₂ + 2 H₂O', d:['Mg(OH)₂ + HCl → MgCl + H₂O','Mg(OH)₂ → MgO + H₂','Mg + 2 HCl → MgCl₂ + H₂'], x:'Es una neutralización: la base consume parte del HCl del jugo gástrico. Cada Mg(OH)₂ neutraliza 2 HCl.'},
  // ── El cuerpo y los alimentos ──
  {id:'pH del estómago', tema:'cuerpo', ctx:'El estómago produce jugos digestivos muy ácidos.', q:'¿Por qué el jugo gástrico tiene un pH tan bajo (entre 1,5 y 3,5)?', ok:'Porque contiene ácido clorhídrico, que ayuda a digerir', d:['Porque contiene bicarbonato de sodio del páncreas','Porque recibe el ácido de las frutas que comemos','Porque contiene azúcares que se fermentan'], x:'Las células del estómago secretan HCl. Ese medio ácido activa la pepsina, la enzima que rompe proteínas.'},
  {id:'pH de la sangre', tema:'cuerpo', ctx:'Un laboratorio clínico mide el pH de la sangre de un paciente.', q:'¿En qué rango se mantiene el pH de la sangre de una persona sana?', ok:'Entre 7,35 y 7,45', d:['Entre 1 y 2','Entre 5 y 6','Entre 9 y 10'], x:'La sangre es ligeramente básica y casi no cambia. Si baja de 7,35 hay acidosis; si sube de 7,45, alcalosis. Las dos son peligrosas.'},
  {id:'Amortiguador', tema:'cuerpo', ctx:'Después de una comida muy ácida, el pH de la sangre casi no cambia.', q:'¿Qué mantiene casi constante el pH de la sangre aunque comamos alimentos ácidos?', ok:'Amortiguadores como el bicarbonato, con pulmones y riñones', d:['El agua que tomamos, que diluye los ácidos','La sal de los alimentos, que neutraliza los ácidos que comemos','El azúcar de la sangre, que absorbe los H⁺'], x:'Un amortiguador (buffer) reacciona con el ácido o la base que llega y evita cambios bruscos de pH. Los pulmones eliminan CO₂ y los riñones regulan el bicarbonato.'},
  {id:'Mito alcalino', tema:'cuerpo', ctx:'En redes sociales circula un anuncio sobre una dieta que «alcaliniza» la sangre.', q:'Un anuncio dice que una «dieta alcalina» cambia el pH de la sangre. ¿Qué dice la evidencia científica?', ok:'Los alimentos casi no cambian el pH de la sangre: el cuerpo lo regula', d:['Es cierto: cada comida ácida o básica cambia el pH de la sangre','Es cierto, pero solo si se toma agua alcalina','La sangre no tiene pH porque no es una solución'], x:'La dieta puede cambiar un poco el pH de la orina, pero no el de la sangre. Evaluar una afirmación exige buscar datos y entender el mecanismo.'},
  {id:'Caries', tema:'cuerpo', ctx:'El odontólogo advierte sobre el efecto de las gaseosas en los dientes.', q:'¿Por qué tomar gaseosa con frecuencia aumenta el riesgo de caries?', ok:'Porque baja el pH de la boca y eso disuelve el esmalte', d:['Porque las burbujas de CO₂ golpean y rompen los dientes','Porque la gaseosa es básica y ablanda el esmalte','Porque el agua de la gaseosa hincha los dientes'], x:'El esmalte empieza a disolverse cuando el pH de la boca baja de unos 5,5. Las gaseosas tienen pH cercano a 2,5 y, además, azúcar que las bacterias convierten en ácidos.'},
  {id:'Bicarbonato', tema:'cuerpo', ctx:'Algunas personas toman bicarbonato con agua para aliviar la acidez estomacal.', q:'¿Qué gas se libera cuando el bicarbonato de sodio neutraliza el ácido del estómago (NaHCO₃ + HCl)?', ok:'CO₂', d:['O₂','H₂','Cl₂'], x:'NaHCO₃ + HCl → NaCl + H₂O + CO₂. El CO₂ es el que produce los eructos.'},
  // ── Ambiente y territorio ──
  {id:'Suelos ácidos', tema:'ambiente', ctx:'Los suelos de los Llanos Orientales son muy ácidos para muchos cultivos.', q:'Muchos suelos de la Orinoquía y la Amazonía colombianas tienen pH entre 4 y 5. ¿Qué se agrega para corregirlos?', ok:'Cal agrícola (CaCO₃)', d:['Ácido sulfúrico diluido','Sal de cocina (NaCl)','Azúcar o melaza'], x:'Encalado: CaCO₃ + 2 H⁺ → Ca²⁺ + H₂O + CO₂. Sube el pH y aporta calcio a las plantas.'},
  {id:'Lluvia ácida', tema:'ambiente', ctx:'Cerca de algunas zonas industriales, la lluvia daña las estatuas de mármol.', q:'¿Qué gases producen la lluvia ácida (pH menor que 5,6)?', ok:'Óxidos de azufre y de nitrógeno (SO₂ y NOₓ)', d:['Oxígeno y nitrógeno puros del aire','Vapor de agua que se evapora de los ríos y del mar','Helio y neón de la atmósfera'], x:'SO₂ y NOₓ forman ácido sulfúrico y ácido nítrico en las nubes. Vienen sobre todo del carbón, el diésel y algunas industrias.'},
  {id:'Lluvia normal', tema:'ambiente', ctx:'Un estudiante mide el pH del agua de lluvia en una vereda sin industrias.', q:'¿Por qué hasta la lluvia «limpia» tiene un pH cercano a 5,6 y no 7?', ok:'Porque el CO₂ del aire forma ácido carbónico', d:['Porque tiene sal que trae el viento del mar','Porque el agua de lluvia es un poco básica','Porque el oxígeno del aire la vuelve ácida'], x:'CO₂ + H₂O ⇌ H₂CO₃, un ácido débil. Por eso solo se habla de lluvia ácida cuando el pH baja de 5,6.'},
  {id:'Acidificación del mar', tema:'ambiente', ctx:'Los biólogos marinos estudian los cambios en el pH del océano desde hace dos siglos.', q:'El pH de la superficie del océano bajó de unos 8,2 a unos 8,1 desde la Revolución Industrial. ¿Qué lo causa?', ok:'El CO₂ extra del aire que se disuelve en el mar', d:['Los derrames de petróleo de los barcos y plataformas','La sal que traen los ríos al mar','El calor del sol que evapora el agua'], x:'Una baja de 0,1 en el pH significa cerca de 26 % más H⁺. Afecta a los corales, como los del Caribe colombiano, porque disuelve el carbonato de calcio.'},
  // ── Formatos interactivos ──
  {id:'Ordena: pH de sustancias', tema:'escala', tipo:'ordenar', q:'Ordena estas sustancias de MÁS ÁCIDA a MÁS BÁSICA.', items:['Jugo gástrico (≈ 2)','Café (≈ 5)','Sangre (≈ 7,4)','Leche de magnesia (≈ 10,5)'], x:'A menor pH, más ácida: jugo gástrico < café < sangre < leche de magnesia.'},
  {id:'Calcula: pH', tema:'escala', tipo:'calcular', q:'Una solución tiene [H⁺] = 1 × 10⁻⁹ mol/L. ¿Cuál es su pH?', ok:9, tol:0, x:'pH = −log(10⁻⁹) = 9: es básica.'},
  {id:'Calcula: veces más ácido', tema:'escala', tipo:'calcular', q:'Un limón tiene pH 2 y un tomate pH 4. ¿Cuántas veces más H⁺ tiene el limón?', ok:100, tol:0, x:'2 unidades de diferencia → 10 × 10 = 100 veces.'},
  {id:'Relaciona: ácido o base', tema:'teorias', tipo:'relacionar', q:'Relaciona cada sustancia con su comportamiento en agua.', pares:[['HCl','Ácido fuerte'],['CH₃COOH (vinagre)','Ácido débil'],['NaOH','Base fuerte'],['NH₃ (amoníaco)','Base débil']], x:'HCl y NaOH se ionizan casi por completo; el ácido acético y el amoníaco solo en parte.'},
  {id:'Completa: neutralización', tema:'fuerza', tipo:'completar', q:'En una neutralización, el ____ reacciona con la base y se forman una sal y ____.', ok:['ácido','agua'], d:['oxígeno','metal','hidrógeno'], x:'Ácido + base → sal + agua (H⁺ + OH⁻ → H₂O).'},
  {id:'Escribe: ion del ácido', tema:'teorias', tipo:'escribir', q:'¿Qué ion liberan los ácidos en agua según Arrhenius? Escribe su nombre (hidrógeno o hidronio).', ok:'hidrógeno', alt:['hidronio','ion hidrógeno','ion hidronio','h+','h3o+','protón','proton'], x:'Los ácidos liberan H⁺, que en el agua se une a H₂O y forma H₃O⁺ (hidronio).'}
];

// ═══════════════════════════════════════════════════════════════════════════
// BANCO_INDUSTRIA — Estequiometría de procesos industriales (juego.html,
// grupo 'industria'; industria.html). Mismo formato. Masas molares con
// valores redondeados de la tabla (C = 12, H = 1, O = 16, N = 14, Ca = 40,
// Fe = 56, Na = 23, Cl = 35,5). Evidencias SED 10q-ind2, 10q-uso2 y 10q-uso3.
// ═══════════════════════════════════════════════════════════════════════════
const BANCO_INDUSTRIA = [
  {id:'Conservación de la masa', tema:'conservacion', ctx:'Lavoisier pesó los reactivos y los productos de muchas reacciones en recipientes cerrados.', q:'¿Qué dice la ley de conservación de la masa (Lavoisier)?', ok:'La masa de los reactivos es igual a la de los productos', d:['Los productos siempre pesan menos que los reactivos','La masa aumenta cuando se calienta la mezcla','Solo se conserva la masa de los sólidos y líquidos'], x:'Los átomos no se crean ni se destruyen: solo se reorganizan. Por eso las ecuaciones se balancean.'},
  {id:'Conservación de la carga', tema:'conservacion', ctx:'En el laboratorio se escribe la ecuación de la reacción del aluminio con iones de cobre.', q:'En una ecuación iónica bien balanceada, ¿qué debe cumplirse además de igualar los átomos?', ok:'La carga total debe ser igual en los dos lados', d:['Debe haber igual número de moléculas en los dos lados','Todos los iones deben ser positivos','No debe haber electrones'], x:'Ejemplo: Fe + Cu²⁺ → Fe²⁺ + Cu. Átomos: 1 Fe y 1 Cu en cada lado; carga: +2 en cada lado.'},
  {id:'Carga sin balancear', tema:'conservacion', ctx:'Un estudiante escribió una ecuación iónica con los átomos igualados y el docente le marcó un error.', q:'¿Por qué está mal la ecuación Al + Cu²⁺ → Al³⁺ + Cu?', ok:'Los átomos están igualados, pero la carga no', d:['Porque el aluminio no reacciona con el cobre','Porque falta oxígeno para formar los óxidos','Porque el cobre debe tener carga +3 como el Al'], x:'Balanceada en masa y en carga: 2 Al + 3 Cu²⁺ → 2 Al³⁺ + 3 Cu (carga +6 en cada lado).'},
  {id:'Cemento: calcinación', tema:'procesos', ctx:'En las cementeras de Boyacá y Antioquia se calienta la caliza en hornos rotatorios.', q:'En las cementeras, la caliza se calienta: CaCO₃ → CaO + CO₂. ¿Qué tipo de reacción es?', ok:'Descomposición', d:['Síntesis','Neutralización','Sustitución simple'], x:'Un solo reactivo da dos productos más sencillos. El CaO (cal viva) es la base del cemento.'},
  {id:'Haber', tema:'procesos', ctx:'En la planta de fertilizantes de Cartagena se produce amoníaco a partir del aire.', q:'El amoníaco para fertilizantes se obtiene por el proceso Haber: N₂ + 3 H₂ → 2 NH₃. ¿Qué tipo de reacción es?', ok:'Síntesis', d:['Descomposición','Doble sustitución','Combustión'], x:'Dos sustancias se combinan en una sola. Necesita catalizador de hierro, alta presión y unos 450 °C.'},
  {id:'Floculación', tema:'procesos', ctx:'En las plantas de tratamiento de agua se agregan sustancias que forman un sólido que atrapa la suciedad.', q:'En las plantas de tratamiento de agua se agrega sulfato de aluminio y cal; se forma Al(OH)₃, un sólido gelatinoso que atrapa la suciedad. ¿Qué tipo de reacción es?', ok:'Precipitación', d:['Combustión','Síntesis','Descomposición'], x:'Al₂(SO₄)₃ + 3 Ca(OH)₂ → 2 Al(OH)₃↓ + 3 CaSO₄. El precipitado arrastra las partículas al fondo.'},
  {id:'Acería', tema:'procesos', ctx:'En los altos hornos de Paz de Río se obtiene hierro a partir de la hematita.', q:'En el alto horno de una siderúrgica, Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂. ¿Qué le pasa al hierro?', ok:'Se reduce: pasa de +3 a 0', d:['Se oxida: pasa de 0 a +3','No cambia su estado de oxidación','Se neutraliza'], x:'Es una redox: el Fe³⁺ gana electrones (se reduce) y el carbono del CO se oxida de +2 a +4.'},
  {id:'Cloro y soda', tema:'procesos', ctx:'En una planta química se obtienen cloro y soda cáustica a partir de agua salada.', q:'De la sal (NaCl) se obtienen cloro y soda cáustica: 2 NaCl + 2 H₂O → 2 NaOH + Cl₂ + H₂. ¿Qué se necesita para que ocurra?', ok:'Electricidad (electrólisis)', d:['Agitar la mezcla con fuerza','Agregar un ácido fuerte','Enfriar la salmuera a 0 °C'], x:'La electrólisis usa corriente eléctrica para forzar una redox que no ocurre sola. El cloro se usa para potabilizar el agua.'},
  {id:'Reactivo limitante', tema:'limitante', ctx:'En una fábrica, uno de los reactivos se acaba antes que el otro y la producción se detiene.', q:'¿Qué es el reactivo limitante?', ok:'El que se acaba primero y limita el producto', d:['El que está en mayor cantidad en la mezcla','El que se agrega al final del proceso','El que no reacciona y queda sin cambio'], x:'Cuando se agota el limitante, la reacción se detiene aunque sobre el otro reactivo (el que está en exceso).'},
  {id:'Limitante en Haber', tema:'limitante', ctx:'En una planta de amoníaco se mezclan nitrógeno e hidrógeno en una proporción dada.', q:'Se mezclan 1 mol de N₂ y 2 mol de H₂ (N₂ + 3 H₂ → 2 NH₃). ¿Cuál es el limitante?', ok:'El H₂, porque faltaría 1 mol de H₂', d:['El N₂, porque hay menos moles de N₂','Ninguno: están en la proporción justa','El NH₃, porque es el producto'], x:'1 mol N₂ necesita 3 mol H₂ y solo hay 2: el H₂ se acaba primero. Se forman 2 × 2/3 ≈ 1,33 mol de NH₃.'},
  {id:'Masa de CaO', tema:'limitante', ctx:'En las caleras de Boyacá se calcina caliza pura para obtener cal viva.', q:'¿Cuántos gramos de CaO se obtienen al calcinar 100 g de CaCO₃ puro? (CaCO₃ = 100 g/mol; CaO = 56 g/mol)', ok:'56 g', d:['100 g','44 g','156 g'], x:'100 g ÷ 100 g/mol = 1 mol CaCO₃ → 1 mol CaO × 56 g/mol = 56 g. Los otros 44 g salen como CO₂.'},
  {id:'CO₂ del cemento', tema:'limitante', ctx:'Una cementera calcula cuánto CO₂ libera al calcinar una tonelada de caliza.', q:'Al calcinar 1000 kg de CaCO₃, ¿cuántos kg de CO₂ se liberan? (CaCO₃ = 100 g/mol; CO₂ = 44 g/mol)', ok:'440 kg', d:['1000 kg','560 kg','44 kg'], x:'10 kmol CaCO₃ → 10 kmol CO₂ × 44 kg/kmol = 440 kg. Por eso la industria del cemento es una gran fuente de CO₂.'},
  {id:'Pureza', tema:'pureza', ctx:'Una calera compra una roca caliza que no es pura.', q:'Una caliza tiene 90 % de CaCO₃. ¿Cuánto CaCO₃ hay en 500 kg de esa roca?', ok:'450 kg', d:['500 kg','50 kg','90 kg'], x:'500 kg × 90/100 = 450 kg de CaCO₃. El resto son impurezas que no producen CaO.'},
  {id:'Rendimiento', tema:'pureza', ctx:'Una planta química compara lo que produjo con lo que debía producir según el cálculo.', q:'Según el cálculo, una planta debía obtener 200 kg de producto, pero obtuvo 170 kg. ¿Cuál es el rendimiento porcentual?', ok:'85 %', d:['117,6 %','30 %','170 %'], x:'Rendimiento = real ÷ teórico × 100 = 170 ÷ 200 × 100 = 85 %.'},
  {id:'Por qué no 100 %', tema:'pureza', ctx:'Ninguna planta química logra obtener todo el producto que predice el cálculo teórico.', q:'¿Por qué el rendimiento real de un proceso industrial casi nunca llega a 100 %?', ok:'Por reacciones incompletas y pérdidas al purificar', d:['Porque la masa no se conserva en la industria','Porque las ecuaciones están mal balanceadas','Porque parte del producto se convierte en energía'], x:'La masa sí se conserva, pero parte de los reactivos no llega al producto deseado o se pierde en el proceso.'},
  {id:'Rendimiento mayor que 100', tema:'pureza', ctx:'Un estudiante pesó el producto de una reacción sin secarlo y obtuvo más de lo esperado.', q:'Un estudiante calcula un rendimiento de 110 %. ¿Qué indica?', ok:'Un error: el producto estaba húmedo o impuro', d:['Que la reacción creó masa nueva','Que el proceso fue mejor que el teórico','Que se usó un catalizador muy bueno'], x:'No se puede obtener más producto que el teórico. Un valor mayor que 100 % señala un error de medida o un producto impuro.'},
  {id:'Cáscara de huevo', tema:'pureza', ctx:'Un estudiante deja una cáscara de huevo en vinagre durante la noche.', q:'Al poner cáscara de huevo en vinagre salen burbujas. ¿Qué gas es y de dónde sale?', ok:'CO₂, del carbonato de calcio de la cáscara', d:['O₂, que se separa del agua del vinagre','H₂, que sale del calcio de la cáscara','Cl₂, que viene de la sal del huevo'], x:'CaCO₃ + 2 CH₃COOH → Ca(CH₃COO)₂ + H₂O + CO₂. Midiendo la masa de CO₂ que sale se puede calcular cuánto CaCO₃ tenía la cáscara.'},
  {id:'Razón molar', tema:'conservacion', ctx:'El gas de los encendedores contiene butano, que se quema con el oxígeno del aire.', q:'En 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O, ¿cuántos moles de CO₂ se forman por cada mol de butano?', ok:'4', d:['8','2','13'], x:'8 mol CO₂ / 2 mol C₄H₁₀ = 4 mol de CO₂ por mol de butano.'},
  {id:'Masa total', tema:'conservacion', ctx:'En un laboratorio se forma agua a partir de cantidades conocidas de hidrógeno y oxígeno.', q:'Reaccionan 4 g de H₂ con 32 g de O₂ y se forma solo agua. ¿Cuánta agua se obtiene?', ok:'36 g', d:['32 g','28 g','4 g'], x:'Por conservación de la masa: 4 g + 32 g = 36 g de H₂O (2 H₂ + O₂ → 2 H₂O).'},
  {id:'Exceso', tema:'limitante', ctx:'En una planta de tratamiento de agua se agrega un poco más de cal de la que se necesita.', q:'En la floculación se agrega un poco más de cal de la necesaria. ¿Cómo se llama ese reactivo?', ok:'Reactivo en exceso', d:['Reactivo limitante','Catalizador','Producto'], x:'El que sobra cuando el limitante se acaba es el reactivo en exceso. A veces se agrega a propósito para que el otro reaccione por completo.'},
  // ── Formatos interactivos ──
  {id:'Calcula: rendimiento', tema:'pureza', tipo:'calcular', q:'Se esperaban 56 g de CaO y se obtuvieron 50,4 g. ¿Cuál es el rendimiento porcentual (sin el signo %)?', ok:90, tol:0.5, x:'50,4 ÷ 56 × 100 = 90 %.'},
  {id:'Calcula: masa de NH₃', tema:'limitante', tipo:'calcular', q:'¿Cuántos gramos de NH₃ se forman con 28 g de N₂ y suficiente H₂? (N₂ + 3 H₂ → 2 NH₃; N₂ = 28 g/mol; NH₃ = 17 g/mol)', ok:34, tol:0.5, x:'28 g ÷ 28 = 1 mol N₂ → 2 mol NH₃ × 17 g/mol = 34 g.'},
  {id:'Calcula: pureza', tema:'pureza', tipo:'calcular', q:'De 10 g de cáscara de huevo salieron 4 g de CO₂. ¿Cuántos gramos de CaCO₃ tenía? (CaCO₃ = 100 g/mol; CO₂ = 44 g/mol)', ok:9.1, tol:0.1, x:'4 g ÷ 44 g/mol = 0,0909 mol CO₂ = 0,0909 mol CaCO₃ × 100 g/mol ≈ 9,1 g (91 % de pureza).'},
  {id:'Relaciona: proceso y reacción', tema:'procesos', tipo:'relacionar', q:'Relaciona cada proceso industrial con su tipo de reacción.', pares:[['Calcinación de la caliza (cemento)','Descomposición'],['Proceso Haber (amoníaco)','Síntesis'],['Floculación del agua','Precipitación'],['Alto horno (acero)','Óxido-reducción']], x:'CaCO₃ → CaO + CO₂; N₂ + 3 H₂ → 2 NH₃; se forma Al(OH)₃↓; Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂.'},
  {id:'Ordena: pasos', tema:'limitante', tipo:'ordenar', q:'Ordena los pasos para calcular la masa de producto.', items:['Balancear la ecuación','Pasar gramos del dato a moles','Usar la razón molar de la ecuación','Pasar moles del producto a gramos'], x:'Ecuación balanceada → g a mol → razón molar → mol a g. Siempre con factores de conversión.'},
  {id:'Completa: rendimiento', tema:'pureza', tipo:'completar', q:'El rendimiento porcentual es la masa ____ dividida entre la masa ____, por 100.', ok:['real','teórica'], d:['inicial','perdida','total'], x:'% rendimiento = (real ÷ teórico) × 100.'}
];

// ═══════════════════════════════════════════════════════════════════════════
// BANCO_MODELOS — Teorías, leyes, modelos y datos (juego.html, grupo
// 'modelos'; modelos.html). Mismo formato. Evidencias SED 10c (indagación,
// explicación de fenómenos y uso comprensivo).
// ═══════════════════════════════════════════════════════════════════════════
const BANCO_MODELOS = [
  {id:'Qué es una ley', tema:'naturaleza', ctx:'En clase se compara la ley de Boyle con la teoría cinético-molecular de los gases.', q:'En ciencias, ¿qué es una ley?', ok:'Una descripción de lo que ocurre siempre en ciertas condiciones', d:['Una teoría que ya fue demostrada con muchos experimentos','Una norma que dictan los científicos para todos','Una suposición que nadie ha podido probar'], x:'Una ley describe QUÉ pasa (por ejemplo, P × V = constante). No explica por qué.'},
  {id:'Qué es una teoría', tema:'naturaleza', ctx:'En clase se discute por qué la teoría cinético-molecular explica el comportamiento de los gases.', q:'En ciencias, ¿qué es una teoría?', ok:'Una explicación, con muchas evidencias, de por qué ocurre algo', d:['Una idea sin pruebas, una simple opinión de un científico','Una ley que todavía no se ha podido comprobar','Un experimento que salió bien una sola vez'], x:'En el lenguaje diario «teoría» suena a suposición, pero en ciencia es lo contrario: la teoría cinético-molecular o la teoría atómica están muy comprobadas.'},
  {id:'Ley vs teoría', tema:'naturaleza', ctx:'Un estudiante cree que las teorías se vuelven leyes cuando ya están muy comprobadas.', q:'¿Una teoría se convierte en ley cuando se comprueba?', ok:'No: la ley describe y la teoría explica', d:['Sí, siempre que se compruebe','Sí, después de 100 experimentos','No, porque las leyes son más antiguas'], x:'La ley de Boyle describe cómo cambia el volumen de un gas; la teoría cinético-molecular explica por qué. Ninguna «asciende» a la otra.'},
  {id:'Qué es un modelo', tema:'naturaleza', ctx:'En clase se usan esferas de icopor y palillos para representar las moléculas.', q:'¿Qué es un modelo científico?', ok:'Una representación simplificada para explicar y predecir', d:['Una copia exacta y completa de la realidad, sin errores','Una maqueta que se exhibe en un museo','Una teoría antigua que ya no sirve'], x:'Los modelos atómicos, una maqueta de moléculas o una ecuación son modelos. Todos simplifican, y por eso tienen límites.'},
  {id:'Hipótesis', tema:'naturaleza', ctx:'Antes de un experimento, un estudiante escribe lo que cree que va a pasar y por qué.', q:'¿Qué es una hipótesis?', ok:'Una respuesta posible que se puede poner a prueba', d:['Una conclusión que ya se demostró','Una ley universal que siempre se cumple sin excepciones','Un dato medido en el laboratorio'], x:'Ejemplo: «Si aumento la presión sobre el gas, su volumen disminuye». Luego se mide para ver si se cumple.'},
  {id:'Cambio de modelo', tema:'naturaleza', ctx:'El experimento de la lámina de oro de Rutherford cambió la forma de representar el átomo.', q:'¿Por qué se reemplazó el modelo atómico de Thomson por el de Rutherford?', ok:'Porque la lámina de oro mostró algo que Thomson no explicaba', d:['Porque Rutherford era más famoso que Thomson','Porque el modelo de Thomson ya era muy antiguo para la época','Porque Thomson cambió de opinión sin razón'], x:'Un modelo se cambia cuando aparecen evidencias que no explica. Así avanza la ciencia.'},
  {id:'Variable independiente', tema:'datos', ctx:'En el laboratorio se empuja el émbolo de una jeringa tapada y se mide el volumen del aire.', q:'En un experimento cambias la presión sobre un gas y mides su volumen. ¿Cuál es la variable independiente?', ok:'La presión', d:['El volumen','La temperatura, que se mantiene fija','El tipo de gas'], x:'La independiente es la que tú cambias; la dependiente (el volumen) es la que mides; la temperatura es una variable controlada.'},
  {id:'Variable controlada', tema:'datos', ctx:'Un grupo va a repetir el experimento de Boyle con una jeringa y unas pesas.', q:'Para comprobar la ley de Boyle, ¿qué variable debe mantenerse constante?', ok:'La temperatura', d:['La presión','El volumen','Ninguna'], x:'La ley de Boyle vale a temperatura constante. Si la temperatura cambia, ya no se puede atribuir el cambio de volumen solo a la presión.'},
  {id:'Ley de Boyle', tema:'gases', ctx:'Un estudiante comprime el aire de una jeringa con el doble de fuerza.', q:'Según la ley de Boyle, si la presión sobre un gas se duplica (a temperatura constante), ¿qué le pasa a su volumen?', ok:'Se reduce a la mitad', d:['Se duplica','No cambia','Se reduce a la cuarta parte'], x:'P × V = constante: si P pasa a 2P, V debe pasar a V/2.'},
  {id:'Calcular con Boyle', tema:'gases', ctx:'El aire de una jeringa tapada se comprime en el laboratorio sin cambiar la temperatura.', q:'Un gas ocupa 6 L a 1 atm. ¿Qué volumen ocupa a 3 atm, a la misma temperatura?', ok:'2 L', d:['18 L','3 L','6 L'], x:'P₁V₁ = P₂V₂ → 1 × 6 = 3 × V₂ → V₂ = 2 L.'},
  {id:'Teoría cinética', tema:'gases', ctx:'Al bombear aire en una llanta, esta se pone más dura.', q:'¿Cómo explica la teoría cinético-molecular que un gas comprimido ejerce más presión?', ok:'Las partículas chocan más veces contra las paredes', d:['Las partículas se hacen más grandes al apretarse','Las partículas se detienen y se amontonan','Las partículas se vuelven líquidas al comprimirse'], x:'La presión es el efecto de los choques de las partículas contra las paredes. Menos volumen → más choques por segundo.'},
  {id:'Gráfica de Boyle', tema:'gases', ctx:'Un grupo grafica los datos de su experimento con la jeringa para encontrar una relación.', q:'Si graficas P contra 1/V para un gas a temperatura constante, ¿qué forma tiene la gráfica?', ok:'Una línea recta que pasa por el origen', d:['Una curva que sube cada vez más rápido','Una línea horizontal','Una parábola'], x:'P = k × (1/V): es una proporcionalidad directa. Linealizar los datos ayuda a encontrar la constante k.'},
  {id:'Ebullición en Bogotá', tema:'datos', ctx:'Un estudiante de Bogotá y otro de Cartagena miden la temperatura del agua hirviendo.', q:'¿Por qué el agua hierve a unos 91 °C en Bogotá y a 100 °C en Cartagena?', ok:'Porque en Bogotá la presión atmosférica es menor', d:['Porque en Bogotá hace más frío que en la costa','Porque el agua de Bogotá tiene menos sal disuelta','Porque en Cartagena hay más humedad en el aire'], x:'Un líquido hierve cuando su presión de vapor iguala la presión del aire. Con menos presión, eso pasa a menor temperatura.'},
  {id:'Modelo lineal', tema:'datos', ctx:'Un estudiante usa un modelo para predecir el punto de ebullición del agua en una ciudad de montaña.', q:'Un modelo dice que el punto de ebullición del agua baja unos 3,4 °C por cada 1000 m de altura. ¿Qué predice para una ciudad a 2000 m?', ok:'Unos 93 °C', d:['Unos 97 °C','Unos 80 °C','100 °C'], x:'100 − 2 × 3,4 = 93,2 °C. Es una predicción: luego se compara con una medida real.'},
  {id:'Extrapolar', tema:'datos', ctx:'Un estudiante quiere usar el modelo del punto de ebullición para un nevado muy alto.', q:'Un modelo se construyó con datos de ciudades entre 0 y 3000 m. ¿Qué precaución hay que tener al usarlo para la cima de un nevado a 5000 m?', ok:'Es una extrapolación: puede fallar fuera del rango', d:['Ninguna: un buen modelo sirve para cualquier valor','No se puede usar ningún modelo en la montaña','Hay que sumar 5000 al resultado del modelo'], x:'Interpolar (dentro del rango medido) es más confiable que extrapolar (fuera de él).'},
  {id:'Datos y modelo', tema:'datos', ctx:'Un estudiante de Bogotá compara su medición del punto de ebullición con la predicción de un modelo.', q:'Un modelo predice 91,0 °C y un estudiante mide 91,8 °C en Bogotá. ¿Qué es lo más razonable concluir?', ok:'El modelo funciona bien: la diferencia es pequeña', d:['El modelo está equivocado porque no coincide','El termómetro mide mal y hay que botarlo','El agua de Bogotá no es agua pura y falla'], x:'Ninguna medida coincide exactamente con un modelo. Hay que comparar la diferencia con la incertidumbre del instrumento.'},
  {id:'Predicción', tema:'datos', ctx:'El IDEAM usa modelos matemáticos para pronosticar la lluvia y la temperatura.', q:'¿Para qué sirve un modelo matemático en ciencias?', ok:'Para predecir valores que no se han medido', d:['Solo para que el informe se vea mejor','Para no tener que hacer experimentos nunca','Para corregir los datos que no coinciden'], x:'Un buen modelo predice. Si la predicción falla, se ajusta o se cambia el modelo.'},
  {id:'Datos del territorio', tema:'datos', ctx:'Un estudiante quiere investigar si su municipio se ha calentado con el cambio climático.', q:'Quieres saber si la temperatura promedio de tu municipio ha subido en los últimos 30 años. ¿Qué datos necesitas?', ok:'Registros de temperatura del municipio durante 30 años', d:['La temperatura de hoy medida con cuidado','La opinión de los vecinos más antiguos','Los registros de temperatura de otro país con clima parecido'], x:'Para encontrar una tendencia se necesitan datos medidos durante mucho tiempo y con el mismo método, como los del IDEAM.'},
  {id:'Olla a presión', tema:'gases', ctx:'En las cocinas de Bogotá se usa la olla a presión para cocinar los fríjoles.', q:'¿Por qué los fríjoles se cocinan más rápido en olla a presión en Bogotá?', ok:'Porque con más presión el agua hierve a más temperatura', d:['Porque la olla recibe más fuego de la estufa','Porque la presión ablanda los fríjoles sin necesidad de calor','Porque se pierde menos agua por evaporación'], x:'Dentro de la olla la presión sube y el agua puede llegar a unos 115–120 °C sin hervir: los alimentos se cocinan más rápido.'},
  {id:'Ley de Charles', tema:'gases', ctx:'Un globo que estaba en la sombra se pone al sol durante una hora.', q:'Un globo se infla un poco más cuando lo sacas al sol. ¿Qué ley lo describe?', ok:'La ley de Charles (V aumenta con T)', d:['La ley de Boyle (V cambia con P)','La ley de conservación de la masa','La ley de Coulomb (cargas eléctricas)'], x:'V/T = constante (con T en kelvin). Más temperatura → partículas más rápidas → el gas ocupa más volumen.'},
  // ── Formatos interactivos ──
  {id:'Calcula: volumen', tema:'gases', tipo:'calcular', q:'Un gas ocupa 4 L a 2 atm. ¿Qué volumen ocupa (en L) a 1 atm y la misma temperatura?', ok:8, tol:0, x:'P₁V₁ = P₂V₂ → 2 × 4 = 1 × V₂ → V₂ = 8 L.'},
  {id:'Calcula: constante', tema:'gases', tipo:'calcular', q:'En un experimento P × V da 12 atm·L. Si la presión es 4 atm, ¿cuál es el volumen (en L)?', ok:3, tol:0, x:'V = k ÷ P = 12 ÷ 4 = 3 L.'},
  {id:'Relaciona: tipo de idea', tema:'naturaleza', tipo:'relacionar', q:'Relaciona cada enunciado con lo que es.', pares:[['P × V = constante, a T constante','Ley'],['La materia está hecha de partículas en movimiento','Teoría'],['Esferas de icopor unidas con palillos','Modelo'],['Si caliento el gas, su volumen aumentará','Hipótesis']], x:'Ley: describe; teoría: explica; modelo: representa; hipótesis: se pone a prueba.'},
  {id:'Ordena: método', tema:'naturaleza', tipo:'ordenar', q:'Ordena los pasos de una investigación.', items:['Plantear una pregunta','Formular una hipótesis','Medir y registrar datos','Analizar datos y concluir'], x:'Pregunta → hipótesis → experimento con datos → análisis y conclusión (que puede llevar a nuevas preguntas).'},
  {id:'Completa: variables', tema:'datos', tipo:'completar', q:'La variable que el investigador cambia es la ____; la que mide como resultado es la ____.', ok:['independiente','dependiente'], d:['controlada','constante','aleatoria'], x:'Independiente → la que cambias; dependiente → la que mides; controladas → las que mantienes iguales.'}
];

// ═══════════════════════════════════════════════════════════════════════════
// BANCO_GASES — Leyes de los gases (juego.html, grupo 'gases'; gases.html).
// Mismo formato que BANCO_ATOMO. R = 0,082 atm·L/(mol·K); K = °C + 273.
// ═══════════════════════════════════════════════════════════════════════════
const BANCO_GASES = [
  {id:'Kelvin', tema:'variables', ctx:'En los cálculos con gases, el docente insiste en convertir siempre la temperatura antes de usarla.', q:'¿Por qué en las leyes de los gases la temperatura se usa en kelvin y no en °C?', ok:'Porque el volumen y la presión son proporcionales a la temperatura absoluta', d:['Porque los kelvin son más fáciles de leer en el termómetro','Porque en °C los resultados siempre salen negativos','Porque el kelvin es la unidad que se usa en Colombia'], x:'V y P son proporcionales a T medida desde el cero absoluto (0 K = −273 °C). Con °C, 0 °C daría volumen cero, lo cual es falso.'},
  {id:'Conversión de presión', tema:'variables', ctx:'Los barómetros de las estaciones meteorológicas de Bogotá miden la presión del aire en mmHg.', q:'En Bogotá la presión atmosférica es de unos 560 mmHg. ¿Cuánto es en atm?', ok:'Unas 0,74 atm', d:['Unas 1,36 atm','Unas 5,6 atm','Unas 0,56 atm'], x:'560 mmHg ÷ 760 mmHg/atm ≈ 0,74 atm.'},
  {id:'Cero absoluto', tema:'variables', ctx:'Los científicos han enfriado gases hasta temperaturas muy cercanas a la más baja posible.', q:'¿Qué temperatura es el cero absoluto?', ok:'0 K, que equivale a −273 °C', d:['0 °C, cuando el agua se congela','−100 °C, la temperatura más fría medida','273 K, que equivale a 0 °C'], x:'Es la temperatura a la que, según la ley de Charles extrapolada, el volumen de un gas sería cero. No se puede alcanzar del todo.'},
  {id:'Qué es la presión', tema:'variables', ctx:'Al inflar un balón, el aire de adentro empuja las paredes y lo pone duro.', q:'Según la teoría cinético-molecular, ¿qué produce la presión de un gas?', ok:'Los choques de sus partículas contra las paredes del recipiente', d:['El peso de las partículas que se acumulan en el fondo','La atracción entre las partículas del gas','El calor que sale de las paredes del recipiente'], x:'Cada choque empuja la pared. Más choques por segundo, o choques más fuertes, significan más presión.'},
  {id:'Boyle', tema:'leyes', ctx:'El aire de una jeringa tapada se comprime al empujar el émbolo.', q:'Un gas ocupa 8 L a 1 atm. Si la presión sube a 4 atm a temperatura constante, ¿qué volumen ocupa?', ok:'2 L', d:['32 L','4 L','8 L'], x:'P₁V₁ = P₂V₂ → 1 × 8 = 4 × V₂ → V₂ = 2 L.'},
  {id:'Charles', tema:'leyes', ctx:'Un globo inflado en la sombra se pone al sol y se calienta.', q:'Un globo tiene 3 L a 300 K. Si se calienta a 600 K a presión constante, ¿qué volumen tendrá?', ok:'6 L', d:['1,5 L','3 L','9 L'], x:'V₁/T₁ = V₂/T₂ → V₂ = 3 × 600 ÷ 300 = 6 L.'},
  {id:'Charles con °C', tema:'leyes', ctx:'Un estudiante cree que, al doblar la temperatura en grados Celsius, un gas dobla su volumen.', q:'Un gas pasa de 20 °C a 40 °C a presión constante. ¿Su volumen se duplica?', ok:'No: pasa de 293 K a 313 K, un aumento de solo 7 %', d:['Sí, porque la temperatura se duplicó','No: se reduce a la mitad','Sí, porque V y T son proporcionales'], x:'La proporción se cumple con kelvin: 313 ÷ 293 ≈ 1,07.'},
  {id:'Gay-Lussac', tema:'leyes', ctx:'Las latas de aerosol traen la advertencia de no exponerlas al calor.', q:'¿Por qué un aerosol no se debe acercar al fuego?', ok:'Porque al calentarlo, la presión del gas dentro sube y puede explotar', d:['Porque el gas se vuelve más pesado y rompe la lata','Porque el frío del fuego congela el gas','Porque el volumen de la lata se reduce con el calor'], x:'Con el volumen fijo, P es proporcional a T (Gay-Lussac). Si T sube mucho, la lata no resiste la presión.'},
  {id:'Gay-Lussac llanta', tema:'leyes', ctx:'La presión de las llantas se mide en la mañana y otra vez después de un viaje largo por carretera.', q:'Una llanta tiene 2,0 atm a 300 K. Después de rodar está a 330 K. Si el volumen no cambia, ¿cuál es su presión?', ok:'2,2 atm', d:['1,8 atm','2,0 atm','22 atm'], x:'P₂ = 2,0 × 330 ÷ 300 = 2,2 atm.'},
  {id:'Avogadro', tema:'leyes', ctx:'Un químico necesita saber qué volumen ocupa una cantidad conocida de gas en condiciones normales.', q:'Según Avogadro, a 0 °C y 1 atm, ¿qué volumen ocupa 1 mol de cualquier gas ideal?', ok:'22,4 L', d:['1 L','6,02 L','24,5 L a cualquier temperatura'], x:'Es el volumen molar en condiciones normales: 1 × 0,082 × 273 ÷ 1 ≈ 22,4 L.'},
  {id:'Avogadro globo', tema:'leyes', ctx:'Al soplar un globo, cada vez que le metemos aire se hace más grande.', q:'Al inflar un globo soplando, ¿qué ley explica que el volumen aumente?', ok:'Avogadro: más moles de gas ocupan más volumen', d:['Boyle: más presión produce más volumen','Charles: el aire de los pulmones está muy caliente','Dalton: el aire es una mezcla de gases'], x:'Con P y T casi constantes, V es proporcional al número de moles.'},
  {id:'Ley combinada', tema:'leyes', ctx:'Un globo meteorológico sube y en el camino cambian a la vez la presión, el volumen y la temperatura.', q:'¿Qué ley se usa cuando cambian a la vez la presión, el volumen y la temperatura de una misma cantidad de gas?', ok:'La ley combinada: P₁V₁/T₁ = P₂V₂/T₂', d:['La ley de Boyle: P₁V₁ = P₂V₂','La ley de Dalton: P total = P₁ + P₂','La ley de Avogadro: V₁/n₁ = V₂/n₂'], x:'La ley combinada junta Boyle, Charles y Gay-Lussac para n constante.'},
  {id:'Paquete de papas', tema:'leyes', ctx:'Los paquetes de papas que se sellan en la costa llegan muy inflados a las ciudades de montaña.', q:'Un paquete de papas sellado en Cartagena llega inflado a Bogotá, aunque en Bogotá hace más frío. ¿Qué lo explica?', ok:'La presión exterior es menor y el gas se expande', d:['El frío de Bogotá hace que el gas se expanda','El paquete absorbe aire durante el viaje','Las papas producen gas durante el viaje'], x:'De 1 atm a 0,74 atm el volumen crece más de lo que lo reduce el enfriamiento (ley combinada).'},
  {id:'Gas ideal moles', tema:'ideal', ctx:'En el laboratorio se recoge un gas en un recipiente a temperatura ambiente.', q:'¿Cuántos moles hay en 24,6 L de gas a 1 atm y 27 °C? (R = 0,082 atm·L/(mol·K))', ok:'1 mol', d:['2 mol','0,5 mol','11 mol'], x:'n = PV ÷ RT = 1 × 24,6 ÷ (0,082 × 300) = 1 mol.'},
  {id:'Gas ideal volumen', tema:'ideal', ctx:'Una fábrica de bebidas necesita saber qué volumen ocupa el CO₂ que usa para las gaseosas.', q:'¿Qué volumen ocupan 44 g de CO₂ (44 g/mol) a 0 °C y 1 atm?', ok:'22,4 L', d:['44 L','11,2 L','1 L'], x:'44 g ÷ 44 g/mol = 1 mol → en condiciones normales ocupa 22,4 L.'},
  {id:'Constante R', tema:'ideal', ctx:'Un estudiante usa la ecuación de los gases ideales para un problema del taller.', q:'¿Cuál es el valor de R en atm·L/(mol·K)?', ok:'0,082', d:['8,314','22,4','6,02 × 10²³'], x:'R = 0,082 atm·L/(mol·K) = 8,314 J/(mol·K). 22,4 es el volumen molar y 6,02 × 10²³ el número de Avogadro.'},
  {id:'Gas ideal vs real', tema:'ideal', ctx:'Los gases de los cilindros de oxígeno de los hospitales están muy comprimidos.', q:'¿En qué condiciones un gas real se comporta casi como ideal?', ok:'A presión baja y temperatura alta', d:['A presión alta y temperatura baja','Solo cuando está a 0 °C exactos','Cuando se está condensando en líquido'], x:'A presión baja las partículas están lejos unas de otras y casi no se atraen: se cumple el modelo ideal.'},
  {id:'Dalton', tema:'dalton', ctx:'Un tanque de buceo contiene una mezcla de nitrógeno y oxígeno.', q:'Una mezcla de N₂ (0,6 atm) y O₂ (0,3 atm) está en un recipiente. ¿Cuál es la presión total?', ok:'0,9 atm', d:['0,3 atm','0,6 atm','0,18 atm'], x:'Dalton: P total = 0,6 + 0,3 = 0,9 atm.'},
  {id:'Oxígeno en Bogotá', tema:'dalton', ctx:'Los deportistas que entrenan en Bogotá respiran un aire con menos oxígeno disponible que en la costa.', q:'El aire tiene 21 % de O₂. En Bogotá (0,74 atm), ¿cuál es la presión parcial del oxígeno?', ok:'Unas 0,16 atm', d:['0,21 atm, igual que en la costa','Unas 0,74 atm','Unas 0,53 atm'], x:'P(O₂) = 0,21 × 0,74 ≈ 0,155 atm: un 26 % menos que al nivel del mar. Por eso uno se cansa más rápido en la altura.'},
  {id:'Fracción molar', tema:'dalton', ctx:'Un tanque de buceo profundo contiene una mezcla de helio y neón.', q:'En una mezcla de 1 mol de He y 3 mol de Ne a 2 atm, ¿cuál es la presión parcial del He?', ok:'0,5 atm', d:['1 atm','1,5 atm','0,25 atm'], x:'X(He) = 1 ÷ 4 = 0,25 → P(He) = 0,25 × 2 = 0,5 atm.'},
  {id:'Calcula: Boyle', tema:'leyes', tipo:'calcular', q:'Un gas ocupa 10 L a 0,5 atm. ¿Qué volumen ocupa a 2 atm y la misma temperatura? (en L)', ok:2.5, tol:0.05, x:'V₂ = 0,5 × 10 ÷ 2 = 2,5 L.'},
  {id:'Calcula: Charles', tema:'leyes', tipo:'calcular', q:'Un gas ocupa 2 L a 27 °C. ¿Qué volumen ocupa a 127 °C a presión constante? (en L)', ok:2.67, tol:0.03, x:'T₁ = 300 K, T₂ = 400 K → V₂ = 2 × 400 ÷ 300 ≈ 2,67 L.'},
  {id:'Calcula: moles', tema:'ideal', tipo:'calcular', q:'¿Cuántos moles hay en 10 L de gas a 2 atm y 0 °C? (R = 0,082) (en mol)', ok:0.893, tol:0.01, x:'n = 2 × 10 ÷ (0,082 × 273) ≈ 0,893 mol.'},
  {id:'Relaciona: leyes', tema:'leyes', tipo:'relacionar', q:'Relaciona cada ley con lo que se mantiene constante.', pares:[['Boyle','n y T'],['Charles','n y P'],['Gay-Lussac','n y V'],['Avogadro','P y T']], x:'Boyle (P–V), Charles (V–T), Gay-Lussac (P–T) y Avogadro (V–n).'},
  {id:'Completa: Boyle', tema:'leyes', tipo:'completar', q:'Según la ley de Boyle, a temperatura constante, si el volumen ____, la presión ____.', ok:['disminuye','aumenta'], d:['se mantiene','desaparece'], x:'P y V son inversamente proporcionales.'}
];

// ═══════════════════════════════════════════════════════════════════════════
// BANCO_SOLUCIONES — Soluciones y concentración (juego.html, grupo
// 'soluciones'; soluciones.html). Mismo formato. Masas molares redondeadas.
// ═══════════════════════════════════════════════════════════════════════════
const BANCO_SOLUCIONES = [
  {id:'Soluto y solvente', tema:'disolucion', ctx:'El suero que se aplica en los hospitales es agua con un poco de sal disuelta.', q:'En el suero fisiológico (agua con 0,9 % de NaCl), ¿cuál es el soluto?', ok:'El cloruro de sodio', d:['El agua, porque es el líquido','La mezcla completa de agua y sal','El recipiente donde se guarda el suero'], x:'El soluto es lo que se disuelve (NaCl); el solvente, lo que disuelve (agua).'},
  {id:'Mezcla homogénea', tema:'disolucion', ctx:'El agua con sal del suero fisiológico se ve igual en cualquier parte del frasco.', q:'¿Por qué una solución es una mezcla homogénea?', ok:'Porque sus componentes no se distinguen y tiene la misma composición en todas partes', d:['Porque tiene un solo componente puro, sin otras sustancias mezcladas','Porque sus componentes se separan si se deja quieta un tiempo','Porque siempre es un líquido transparente e incoloro, como el agua'], x:'En una solución el soluto está repartido en partículas del tamaño de iones o moléculas.'},
  {id:'Hidratación de iones', tema:'disolucion', ctx:'Cuando la sal de cocina se disuelve, las moléculas de agua rodean a cada ion.', q:'Al disolverse la sal, ¿hacia dónde apunta el oxígeno (δ−) de las moléculas de agua que rodean a un Na⁺?', ok:'Hacia el ion Na⁺', d:['Hacia el ion Cl⁻ más cercano','Hacia arriba, lejos de los iones','Hacia otra molécula de agua'], x:'Cargas opuestas se atraen: el O (δ−) mira al catión Na⁺ y los H (δ+) miran al anión Cl⁻.'},
  {id:'Conducción', tema:'disolucion', ctx:'En el laboratorio se prueba con un bombillo si conducen la electricidad el agua con sal y el agua con azúcar.', q:'¿Por qué el agua con sal conduce la electricidad y el agua con azúcar no?', ok:'La sal se separa en iones con carga; el azúcar en moléculas neutras', d:['El azúcar es más pesado y frena la corriente','La sal se disuelve más rápido que el azúcar','El azúcar absorbe la electricidad del agua'], x:'NaCl → Na⁺ + Cl⁻: los iones llevan la corriente. El azúcar se disuelve como moléculas enteras, sin carga.'},
  {id:'Aceite', tema:'disolucion', ctx:'En la cocina, el aceite que cae en una olla con agua queda flotando en una capa separada.', q:'¿Por qué el aceite no se disuelve en agua?', ok:'Porque es apolar y el agua es polar', d:['Porque es más denso que el agua','Porque el agua está demasiado fría','Porque el aceite es una sustancia iónica'], x:'«Semejante disuelve a semejante». Las moléculas de agua se atraen entre sí y no rodean al aceite.'},
  {id:'Rapidez de disolución', tema:'disolucion', ctx:'Un estudiante prepara limonada y quiere que el azúcar se disuelva lo más rápido posible.', q:'¿Cuál de estas acciones NO hace que el azúcar se disuelva más rápido?', ok:'Usar un vaso más grande con la misma cantidad de agua', d:['Calentar el agua del vaso antes de echarlo','Agitar la mezcla con una cuchara','Usar azúcar molida en vez de terrones'], x:'La temperatura, la agitación y la superficie de contacto aceleran la disolución; el tamaño del vaso no.'},
  {id:'Saturada', tema:'solubilidad', ctx:'Al agregar sal a un vaso de agua, llega un momento en que ya no se disuelve más.', q:'¿Qué es una solución saturada?', ok:'La que tiene disuelta la máxima cantidad de soluto a esa temperatura', d:['La que tiene muy poco soluto disuelto en mucho solvente','La que tiene más soluto del que se puede disolver a esa temperatura','La que ya no tiene solvente porque se evaporó y solo queda soluto'], x:'Si se agrega más soluto a una solución saturada, se queda sin disolver en el fondo.'},
  {id:'Curva de solubilidad', tema:'solubilidad', ctx:'El nitrato de potasio que se usa como abono se puede purificar disolviéndolo en caliente y enfriando.', q:'La solubilidad del KNO₃ es 32 g/100 g de agua a 20 °C y 110 g a 60 °C. Si una solución saturada a 60 °C (con 100 g de agua) se enfría a 20 °C, ¿cuánto KNO₃ cristaliza?', ok:'78 g', d:['32 g','110 g','142 g'], x:'110 − 32 = 78 g se separan como cristales. Así se purifican sustancias por cristalización.'},
  {id:'Sal y temperatura', tema:'solubilidad', ctx:'En las salinas de Manaure, en La Guajira, se produce sal a partir del agua del mar.', q:'La solubilidad del NaCl casi no cambia con la temperatura. ¿Cómo se obtiene entonces la sal en Manaure?', ok:'Evaporando el agua de mar con el sol y el viento', d:['Enfriando el agua de mar hasta que cristalice','Calentando el agua de mar hasta que cristalice','Filtrando el agua de mar con arena'], x:'Al evaporarse el solvente, la solución se satura y la sal cristaliza.'},
  {id:'Gases en agua', tema:'solubilidad', ctx:'Una gaseosa que se deja al sol pierde las burbujas más rápido que una de la nevera.', q:'¿Por qué una gaseosa caliente pierde el gas más rápido que una fría?', ok:'Porque la solubilidad de los gases disminuye al subir la temperatura', d:['Porque el calor produce más CO₂ dentro de la botella','Porque el azúcar de la gaseosa atrapa el gas al calentarse','Porque la gaseosa caliente es más densa'], x:'Al contrario de casi todos los sólidos, los gases se disuelven menos en agua caliente.'},
  {id:'% m/v suero', tema:'concentracion', ctx:'Una enfermera prepara una bolsa de suero de 500 mL para un paciente.', q:'El suero fisiológico es NaCl al 0,9 % m/v. ¿Cuántos gramos de NaCl hay en 500 mL?', ok:'4,5 g', d:['0,9 g','45 g','0,45 g'], x:'0,9 g por cada 100 mL → 500 mL × 0,9 ÷ 100 = 4,5 g.'},
  {id:'% m/m', tema:'concentracion', ctx:'Un estudiante prepara un almíbar disolviendo azúcar en agua.', q:'Se disuelven 20 g de azúcar en 80 g de agua. ¿Cuál es el % m/m?', ok:'20 %', d:['25 %','16 %','80 %'], x:'Masa de solución = 20 + 80 = 100 g → 20 ÷ 100 × 100 = 20 %. Se divide entre la solución, no entre el agua.'},
  {id:'% v/v', tema:'concentracion', ctx:'El alcohol antiséptico de las farmacias trae en la etiqueta su concentración en % v/v.', q:'¿Cuántos mL de etanol hay en 500 mL de alcohol antiséptico al 70 % v/v?', ok:'350 mL', d:['70 mL','150 mL','700 mL'], x:'500 mL × 70 ÷ 100 = 350 mL de etanol; el resto es agua.'},
  {id:'ppm cloro', tema:'concentracion', ctx:'La empresa de acueducto controla la cantidad de cloro que tiene el agua de un tanque.', q:'Un tanque de 2000 L de agua potable tiene 1 ppm de cloro. ¿Cuánto cloro tiene?', ok:'2 g', d:['2 mg','1 g','2 kg'], x:'1 ppm en agua = 1 mg/L → 2000 L × 1 mg/L = 2000 mg = 2 g.'},
  {id:'Molaridad', tema:'concentracion', ctx:'En el laboratorio se prepara una solución de sal de concentración conocida para un experimento.', q:'Se disuelven 58,5 g de NaCl (58,5 g/mol) en agua hasta completar 2 L de solución. ¿Cuál es la molaridad?', ok:'0,5 M', d:['1 M','2 M','29,25 M'], x:'n = 58,5 ÷ 58,5 = 1 mol → M = 1 mol ÷ 2 L = 0,5 mol/L.'},
  {id:'Gramos para preparar', tema:'concentracion', ctx:'Un estudiante debe preparar una solución de soda cáustica para una titulación.', q:'¿Cuántos gramos de NaOH (40 g/mol) se necesitan para 250 mL de solución 0,2 M?', ok:'2 g', d:['8 g','0,05 g','20 g'], x:'n = 0,2 × 0,250 = 0,05 mol → 0,05 × 40 = 2 g.'},
  {id:'Molalidad', tema:'concentracion', ctx:'En un libro aparecen dos formas de expresar la concentración con nombres muy parecidos.', q:'¿En qué se diferencia la molalidad de la molaridad?', ok:'Se divide entre kg de solvente, no entre litros de solución', d:['Se divide entre gramos de soluto, no entre moles','Es lo mismo, pero con otra unidad','Solo se usa para gases y no para líquidos'], x:'m = mol de soluto ÷ kg de solvente. No cambia con la temperatura porque no depende del volumen.'},
  {id:'Fracción molar', tema:'concentracion', ctx:'Un químico prepara una mezcla de etanol y agua para un experimento.', q:'Una mezcla tiene 1 mol de etanol y 4 mol de agua. ¿Cuál es la fracción molar del etanol?', ok:'0,2', d:['0,25','0,8','4'], x:'X = 1 ÷ (1 + 4) = 0,2. La suma de todas las fracciones molares es 1.'},
  {id:'Normalidad', tema:'concentracion', ctx:'En el laboratorio hay una solución de ácido sulfúrico de molaridad conocida.', q:'¿Cuál es la normalidad de una solución 0,5 M de H₂SO₄?', ok:'1 N', d:['0,5 N','0,25 N','2 N'], x:'El H₂SO₄ aporta 2 H⁺: N = M × 2 = 1 N.'},
  {id:'Dilución', tema:'dilucion', ctx:'Un estudiante diluye un jugo concentrado agregándole agua.', q:'Al diluir una solución agregando agua, ¿qué se mantiene igual?', ok:'Los moles de soluto', d:['La concentración de la solución','El volumen de la solución','La masa total de la solución'], x:'Solo se agrega solvente: el soluto es el mismo, repartido en más volumen. Por eso C₁V₁ = C₂V₂.'},
  {id:'C1V1', tema:'dilucion', ctx:'En el laboratorio se prepara ácido muriático diluido a partir de una solución más concentrada.', q:'¿Cuántos mL de HCl 2 M se necesitan para preparar 500 mL de HCl 0,1 M?', ok:'25 mL', d:['250 mL','10 mL','100 mL'], x:'V₁ = 0,1 × 500 ÷ 2 = 25 mL; se completa con agua hasta 500 mL.'},
  {id:'Ácido sobre agua', tema:'dilucion', ctx:'Las etiquetas del ácido sulfúrico advierten cómo mezclarlo con agua sin peligro.', q:'Al diluir un ácido concentrado, ¿por qué se agrega el ácido sobre el agua y no al revés?', ok:'Porque se libera mucho calor y así el agua lo absorbe sin salpicar', d:['Porque el ácido es más liviano que el agua y flota encima','Porque así se gasta menos ácido para la misma solución','Porque el agua sobre el ácido no lo alcanza a diluir'], x:'La dilución de ácidos fuertes es muy exotérmica. Si se echa agua sobre el ácido, puede hervir y salpicar ácido.'},
  {id:'Calcula: molaridad', tema:'concentracion', tipo:'calcular', q:'Se disuelven 20 g de NaOH (40 g/mol) hasta 500 mL de solución. ¿Cuál es la molaridad? (en mol/L)', ok:1, tol:0.01, x:'n = 20 ÷ 40 = 0,5 mol → M = 0,5 ÷ 0,5 L = 1 M.'},
  {id:'Calcula: dilución', tema:'dilucion', tipo:'calcular', q:'Se diluyen 50 mL de una solución 0,8 M hasta 200 mL. ¿Cuál es la nueva concentración? (en M)', ok:0.2, tol:0.005, x:'C₂ = 0,8 × 50 ÷ 200 = 0,2 M.'},
  {id:'Calcula: % m/v', tema:'concentracion', tipo:'calcular', q:'Se disuelven 6 g de azúcar hasta 150 mL de solución. ¿Cuál es el % m/v? (sin el signo %)', ok:4, tol:0.05, x:'6 ÷ 150 × 100 = 4 %.'},
  {id:'Relaciona: unidades', tema:'concentracion', tipo:'relacionar', q:'Relaciona cada unidad con su definición.', pares:[['Molaridad','mol de soluto / L de solución'],['Molalidad','mol de soluto / kg de solvente'],['% m/v','g de soluto / 100 mL de solución'],['ppm','mg de soluto / L de solución']], x:'Fíjate en qué va en el denominador: solución o solvente, litros o kilogramos.'},
  {id:'Ordena: preparar', tema:'concentracion', tipo:'ordenar', q:'Ordena los pasos para preparar 250 mL de una solución 0,1 M.', items:['Calcular los gramos de soluto','Pesar el soluto en la balanza','Disolverlo en un poco de agua','Completar con agua hasta 250 mL en el balón aforado'], x:'Primero el cálculo (n = M × V; masa = n × masa molar), luego pesar, disolver y aforar.'}
];

// ═══════════════════════════════════════════════════════════════════════════
// BANCO_ESTEQUIOMETRIA — Estequiometría (juego.html, grupo 'estequiometria';
// estequiometria.html). Mismo formato que BANCO_INDUSTRIA. Masas molares
// redondeadas (H = 1, C = 12, N = 14, O = 16, Na = 23, Mg = 24, S = 32,
// Cl = 35,5, Ca = 40, Zn = 65). Temas: razón molar, masas molares, ruta
// g → mol → mol → g, factores de conversión, limitante, rendimiento y
// conservación de la masa.
// ═══════════════════════════════════════════════════════════════════════════
const BANCO_ESTEQUIOMETRIA = [
  {id:"Qué dicen los coeficientes", tema:"razon", ctx:"Un estudiante lee la ecuación balanceada 2 H₂ + O₂ → 2 H₂O.", q:"En 2 H₂ + O₂ → 2 H₂O, ¿qué indican los coeficientes?", ok:"Cuántos moles de cada sustancia reaccionan o se forman", d:["Cuántos átomos tiene cada molécula", "La masa en gramos de cada sustancia", "El estado físico de cada sustancia"], x:"Los coeficientes son razones molares: 2 mol de H₂ reaccionan con 1 mol de O₂ y forman 2 mol de H₂O."},
  {id:"Razón molar agua y oxígeno", tema:"razon", ctx:"En un laboratorio se produce agua a partir de hidrógeno y oxígeno.", q:"En 2 H₂ + O₂ → 2 H₂O, ¿cuál es la razón molar entre el H₂O formada y el O₂ que reacciona?", ok:"2 mol de H₂O por cada 1 mol de O₂", d:["1 mol de H₂O por cada 2 mol de O₂", "3 mol de H₂O por cada 1 mol de O₂", "2 mol de H₂O por cada 3 mol de O₂"], x:"La razón sale de los coeficientes: H₂O tiene 2 y O₂ tiene 1."},
  {id:"Moles de amoníaco", tema:"razon", ctx:"En la planta de fertilizantes de Cartagena se produce amoníaco con el proceso Haber.", q:"Según N₂ + 3 H₂ → 2 NH₃, ¿cuántos moles de NH₃ se forman con 6 mol de H₂?", ok:"4 mol", d:["2 mol", "6 mol", "9 mol"], x:"6 mol H₂ × (2 mol NH₃ / 3 mol H₂) = 4 mol NH₃."},
  {id:"Oxígeno para el metano", tema:"razon", ctx:"El gas natural que llega a las casas es metano y se quema con el oxígeno del aire.", q:"Según CH₄ + 2 O₂ → CO₂ + 2 H₂O, ¿cuántos moles de O₂ se necesitan para quemar 3 mol de CH₄?", ok:"6 mol", d:["3 mol", "1,5 mol", "9 mol"], x:"3 mol CH₄ × (2 mol O₂ / 1 mol CH₄) = 6 mol O₂."},
  {id:"Ecuación sin balancear", tema:"razon", ctx:"Un estudiante calcula con la ecuación H₂ + O₂ → H₂O tal como la escribió, sin balancearla.", q:"¿Qué problema tendrá su resultado?", ok:"La razón molar saldrá mal porque los coeficientes no son los correctos", d:["No tendrá ningún problema, porque los coeficientes no importan", "La masa molar de los reactivos cambiará por no balancear", "Los gramos de producto serán siempre mayores a los reales"], x:"Sin balancear no se cumple la conservación de los átomos y la razón molar no es la verdadera."},
  {id:"Moles y no gramos", tema:"razon", ctx:"El docente insiste en pasar siempre a moles antes de usar los coeficientes.", q:"¿Por qué los coeficientes se aplican a moles y no a gramos?", ok:"Porque cuentan partículas, y 1 mol de cada sustancia tiene una masa distinta", d:["Porque los gramos no se pueden medir en el laboratorio", "Porque la masa de los reactivos y la de los productos es distinta", "Porque los moles solo se pueden usar con los gases"], x:"Los coeficientes comparan cantidades de partículas; los gramos de cada sustancia dependen de su masa molar."},
  {id:"Masa molar del agua", tema:"masas", ctx:"En una práctica se pesa agua para una reacción.", q:"¿Cuál es la masa molar del H₂O? (H = 1; O = 16)", ok:"18 g/mol", d:["16 g/mol", "2 g/mol", "34 g/mol"], x:"2 × 1 + 16 = 18 g/mol."},
  {id:"Masa molar del CO₂", tema:"masas", ctx:"Una cementera calcula el gas que sale de sus hornos.", q:"¿Cuál es la masa molar del CO₂? (C = 12; O = 16)", ok:"44 g/mol", d:["28 g/mol", "32 g/mol", "56 g/mol"], x:"12 + 2 × 16 = 44 g/mol."},
  {id:"Masa molar del amoníaco", tema:"masas", ctx:"El amoníaco se usa para fabricar abonos.", q:"¿Cuál es la masa molar del NH₃? (N = 14; H = 1)", ok:"17 g/mol", d:["14 g/mol", "18 g/mol", "31 g/mol"], x:"14 + 3 × 1 = 17 g/mol."},
  {id:"Masa molar de la cal apagada", tema:"masas", ctx:"Las plantas de tratamiento de agua usan cal apagada.", q:"¿Cuál es la masa molar del Ca(OH)₂? (Ca = 40; O = 16; H = 1)", ok:"74 g/mol", d:["57 g/mol", "58 g/mol", "90 g/mol"], x:"El grupo OH aparece dos veces: 40 + 2 × (16 + 1) = 74 g/mol."},
  {id:"Gramos a moles del agua", tema:"masas", ctx:"Un estudiante pesa 36 g de agua para una reacción.", q:"¿Cuántos moles hay en 36 g de H₂O? (masa molar = 18 g/mol)", ok:"2 mol", d:["0,5 mol", "18 mol", "648 mol"], x:"n = m / M = 36 g ÷ 18 g/mol = 2 mol."},
  {id:"Gramos a moles del CO₂", tema:"masas", ctx:"Se recoge el gas que sale de una reacción con vinagre y bicarbonato.", q:"¿Cuántos moles hay en 88 g de CO₂? (masa molar = 44 g/mol)", ok:"2 mol", d:["0,5 mol", "44 mol", "3872 mol"], x:"n = 88 g ÷ 44 g/mol = 2 mol."},
  {id:"Moles a gramos de sal", tema:"masas", ctx:"En la cocina se mide la sal para una receta.", q:"¿Cuántos gramos son 0,5 mol de NaCl? (masa molar = 58,5 g/mol)", ok:"29,25 g", d:["58,5 g", "117 g", "14,6 g"], x:"m = n × M = 0,5 mol × 58,5 g/mol = 29,25 g."},
  {id:"Orden de la ruta", tema:"ruta", ctx:"El docente dibuja en el tablero los tres portones de la ruta estequiométrica.", q:"¿Cuál es el orden correcto de la ruta estequiométrica?", ok:"Gramos → moles → razón molar → gramos", d:["Gramos → razón molar → moles → gramos", "Moles → gramos → razón molar → moles", "Razón molar → gramos → gramos → moles"], x:"Primero se pasa a moles con la masa molar, luego se cambia de sustancia con la razón molar y al final se vuelve a gramos."},
  {id:"Dónde se usan los coeficientes", tema:"ruta", ctx:"Un estudiante resuelve un problema por pasos.", q:"¿En cuál paso se usan los coeficientes de la ecuación?", ok:"Al pasar de moles de una sustancia a moles de otra", d:["Al pasar de gramos a moles", "Al pasar de moles a gramos", "Al pesar la muestra en la balanza"], x:"Los coeficientes dan la razón molar, que conecta dos sustancias distintas de la ecuación."},
  {id:"Agua desde hidrógeno", tema:"ruta", ctx:"En un laboratorio se quema hidrógeno para obtener agua.", q:"Según 2 H₂ + O₂ → 2 H₂O, ¿cuántos gramos de H₂O se forman con 8 g de H₂? (H₂ = 2 g/mol; H₂O = 18 g/mol)", ok:"72 g", d:["36 g", "144 g", "8 g"], x:"8 g ÷ 2 = 4 mol H₂ → 4 mol H₂O → 4 × 18 = 72 g."},
  {id:"Agua desde oxígeno", tema:"ruta", ctx:"En el mismo laboratorio se parte de la masa de oxígeno.", q:"Según 2 H₂ + O₂ → 2 H₂O, ¿cuántos moles de H₂O se forman con 32 g de O₂? (O₂ = 32 g/mol)", ok:"2 mol", d:["1 mol", "4 mol", "0,5 mol"], x:"32 g ÷ 32 = 1 mol O₂ → 1 × (2 / 1) = 2 mol H₂O."},
  {id:"Hidrógeno del magnesio", tema:"ruta", ctx:"Una cinta de magnesio se deja caer en ácido muriático y salen burbujas.", q:"Según Mg + 2 HCl → MgCl₂ + H₂, ¿cuántos gramos de H₂ se producen con 24 g de Mg? (Mg = 24 g/mol; H₂ = 2 g/mol)", ok:"2 g", d:["1 g", "24 g", "4 g"], x:"24 g ÷ 24 = 1 mol Mg → 1 mol H₂ → 2 g."},
  {id:"Sal desde sodio", tema:"ruta", ctx:"Se hace reaccionar sodio con cloro para obtener sal.", q:"Según 2 Na + Cl₂ → 2 NaCl, ¿cuántos gramos de NaCl se forman con 46 g de Na? (Na = 23; NaCl = 58,5 g/mol)", ok:"117 g", d:["58,5 g", "46 g", "234 g"], x:"46 ÷ 23 = 2 mol Na → 2 mol NaCl → 2 × 58,5 = 117 g."},
  {id:"Dióxido de azufre", tema:"ruta", ctx:"Al quemar azufre en una fundición se libera un gas irritante.", q:"Según S + O₂ → SO₂, ¿cuántos gramos de SO₂ se forman con 16 g de S? (S = 32; SO₂ = 64 g/mol)", ok:"32 g", d:["16 g", "64 g", "48 g"], x:"16 ÷ 32 = 0,5 mol S → 0,5 mol SO₂ → 0,5 × 64 = 32 g."},
  {id:"Oxígeno del clorato", tema:"ruta", ctx:"Algunas bengalas liberan oxígeno al calentar clorato de potasio.", q:"Según 2 KClO₃ → 2 KCl + 3 O₂, ¿cuántos moles de O₂ se obtienen con 2 mol de KClO₃?", ok:"3 mol", d:["2 mol", "6 mol", "1 mol"], x:"2 mol KClO₃ × (3 mol O₂ / 2 mol KClO₃) = 3 mol O₂."},
  {id:"Ventaja de los factores", tema:"factores", ctx:"Un estudiante prefiere la regla de tres porque la aprendió en primaria.", q:"¿Qué ventaja tienen los factores de conversión sobre la regla de tres?", ok:"Muestran si las unidades se cancelan y delatan errores", d:["Evitan tener que balancear la ecuación", "Dan siempre un resultado mayor", "Permiten no usar masas molares"], x:"Con factores se ve de inmediato si las unidades no se cancelan."},
  {id:"Factor de la razón molar", tema:"factores", ctx:"El docente pide armar el factor que une el oxígeno con el agua.", q:"En 2 H₂ + O₂ → 2 H₂O, ¿cuál factor pasa de mol de O₂ a mol de H₂O?", ok:"2 mol H₂O / 1 mol O₂", d:["1 mol H₂O / 2 mol O₂", "2 mol H₂O / 2 mol O₂", "18 g H₂O / 1 mol O₂"], x:"La sustancia que se busca va arriba y la que se tiene va abajo, cada una con su coeficiente."},
  {id:"Unidades que no se cancelan", tema:"factores", ctx:"Al terminar un cálculo, a un estudiante le queda «mol²/g» como unidad.", q:"¿Qué le indica ese resultado?", ok:"Que algún factor quedó al revés y las unidades no se cancelaron", d:["Que la ecuación estaba bien balanceada", "Que la respuesta está en unidades correctas", "Que debe multiplicar el resultado por 100"], x:"Si el cálculo es correcto, solo queda la unidad que se busca."},
  {id:"Factor de masa molar", tema:"factores", ctx:"Se arma el primer portón de la ruta para pasar de moles a gramos de agua.", q:"¿Cuál es el factor de conversión de moles a gramos para el agua?", ok:"18 g H₂O / 1 mol H₂O", d:["1 g H₂O / 18 mol H₂O", "18 mol H₂O / 1 g H₂O", "2 g H₂O / 1 mol H₂O"], x:"La masa molar del agua (18 g/mol) relaciona gramos y moles."},
  {id:"Limitante con igual cantidad", tema:"limitante", ctx:"Se mezclan cantidades iguales de hidrógeno y oxígeno en un recipiente cerrado.", q:"Se mezclan 2 mol de H₂ y 2 mol de O₂ (2 H₂ + O₂ → 2 H₂O). ¿Cuál es el limitante?", ok:"El H₂; el O₂ sobra", d:["El O₂; el H₂ sobra", "Ninguno; se agotan a la vez", "Los dos, porque hay igual cantidad"], x:"2 mol de H₂ solo necesitan 1 mol de O₂, así que el H₂ se agota primero."},
  {id:"Producto con limitante", tema:"limitante", ctx:"En la planta de amoníaco no se mezclan los gases en la proporción exacta.", q:"Se mezclan 3 mol de N₂ con 6 mol de H₂ (N₂ + 3 H₂ → 2 NH₃). ¿Cuántos moles de NH₃ se forman?", ok:"4 mol", d:["6 mol", "3 mol", "2 mol"], x:"El limitante es el H₂: 6 mol H₂ × (2 mol NH₃ / 3 mol H₂) = 4 mol NH₃."},
  {id:"Cuánto sobra", tema:"limitante", ctx:"Después de una reacción queda gas sin reaccionar en el recipiente.", q:"Reaccionan 2 mol de H₂ con 2 mol de O₂ (2 H₂ + O₂ → 2 H₂O). ¿Qué sobra al final?", ok:"1 mol de O₂", d:["2 mol de H₂", "1 mol de H₂", "Nada, porque no sobra ningún reactivo"], x:"El H₂ gasta 1 mol de O₂; de los 2 mol que había, sobra 1 mol."},
  {id:"Qué se compara", tema:"limitante", ctx:"El docente explica cómo decidir cuál reactivo se acaba primero.", q:"Para encontrar el reactivo limitante, ¿qué se compara?", ok:"Los moles disponibles de cada reactivo con los que pide la ecuación", d:["Las masas en gramos de cada reactivo sin convertir", "Los volúmenes de los recipientes donde están", "Los coeficientes de los productos solamente"], x:"Se pasa todo a moles y se compara con la razón molar de la ecuación."},
  {id:"Menos gramos no es limitante", tema:"limitante", ctx:"Un estudiante afirma que el reactivo con menos gramos siempre es el limitante.", q:"¿Es correcta su afirmación?", ok:"No siempre: hay que pasar a moles y comparar con la razón molar", d:["Sí, siempre se acaba primero el de menos gramos", "Sí, porque la masa decide cuánto producto se forma", "No, el limitante es siempre el de mayor masa molar"], x:"Los gramos no se pueden comparar directamente: 1 g de H₂ son 0,5 mol y 1 g de O₂ son 0,03 mol."},
  {id:"Limitante del magnesio", tema:"limitante", ctx:"Una cinta de magnesio se pone en ácido muriático para producir hidrógeno.", q:"Se mezclan 24 g de Mg con 36,5 g de HCl (Mg + 2 HCl → MgCl₂ + H₂; Mg = 24; HCl = 36,5 g/mol). ¿Cuál es el limitante?", ok:"El HCl", d:["El Mg", "Ninguno; se agotan a la vez", "Los dos, porque tienen casi la misma masa"], x:"Hay 1 mol de Mg y 1 mol de HCl, pero cada Mg necesita 2 HCl: el HCl se acaba primero."},
  {id:"Sal desde el limitante", tema:"limitante", ctx:"En la industria se obtiene sal a partir de sodio y cloro.", q:"Con 2 mol de Na y 2 mol de Cl₂ (2 Na + Cl₂ → 2 NaCl), ¿cuántos gramos de NaCl se forman? (NaCl = 58,5 g/mol)", ok:"117 g", d:["234 g", "58,5 g", "175,5 g"], x:"El limitante es el Na (necesita solo 1 mol de Cl₂): 2 mol NaCl × 58,5 = 117 g."},
  {id:"Por qué desde el limitante", tema:"limitante", ctx:"Un estudiante calcula el producto con la cantidad del reactivo que sobra.", q:"¿Por qué el cálculo se hace desde el reactivo limitante?", ok:"Porque se acaba primero y fija la cantidad máxima de producto", d:["Porque siempre es el que tiene menor masa molar", "Porque el reactivo en exceso no participa en la reacción", "Porque así no hace falta balancear la ecuación"], x:"Cuando el limitante se agota, la reacción se detiene."},
  {id:"Calcular desde el exceso", tema:"limitante", ctx:"Se calcula el producto de una reacción con el reactivo en exceso.", q:"¿Qué resultado se obtiene si se calcula desde el reactivo en exceso?", ok:"Una cantidad de producto que en realidad no se puede formar", d:["La cantidad real de producto obtenida", "Una cantidad menor que la del limitante", "El mismo resultado que con el limitante"], x:"El reactivo en exceso daría más producto del que el limitante permite."},
  {id:"Fórmula del rendimiento", tema:"rendimiento", ctx:"Una planta compara lo que produjo con lo que debía producir.", q:"¿Cómo se calcula el rendimiento porcentual?", ok:"Producto real ÷ producto teórico × 100", d:["Producto teórico ÷ producto real × 100", "Producto real − producto teórico", "Producto real × producto teórico ÷ 100"], x:"El rendimiento compara lo obtenido (real) con lo máximo posible (teórico)."},
  {id:"Rendimiento de 30 y 40", tema:"rendimiento", ctx:"En un laboratorio se esperaban 40 g de producto y se obtuvieron 30 g.", q:"¿Cuál es el rendimiento porcentual?", ok:"75 %", d:["133 %", "25 %", "70 %"], x:"30 ÷ 40 × 100 = 75 %."},
  {id:"Caliza pura", tema:"rendimiento", ctx:"Una calera compra roca caliza que no es completamente pura.", q:"Una roca de 200 kg tiene 80 % de CaCO₃. ¿Cuántos kg de CaCO₃ puro hay?", ok:"160 kg", d:["200 kg", "120 kg", "40 kg"], x:"200 kg × 80 / 100 = 160 kg."},
  {id:"Hierro y azufre", tema:"conservacion", ctx:"En un recipiente cerrado se calienta hierro con azufre y se forma sulfuro de hierro.", q:"Reaccionan 5,6 g de Fe con 3,2 g de S y se forma solo FeS. ¿Cuántos gramos de FeS se obtienen?", ok:"8,8 g", d:["2,4 g", "5,6 g", "17,9 g"], x:"La masa se conserva: 5,6 g + 3,2 g = 8,8 g."},
  {id:"Carbono y oxígeno", tema:"conservacion", ctx:"Se quema carbón en un recipiente cerrado y se pesa todo antes y después.", q:"Reaccionan 12 g de C con 32 g de O₂ y se forma solo CO₂. ¿Cuántos gramos de CO₂ se forman?", ok:"44 g", d:["32 g", "12 g", "384 g"], x:"12 g + 32 g = 44 g, y coincide con la masa molar del CO₂."},
  {id:"Moléculas en un mol", tema:"conservacion", ctx:"El docente recuerda qué cuenta realmente un mol.", q:"¿Cuántas moléculas de H₂O hay en 1 mol de agua?", ok:"6,02 × 10²³", d:["18", "6,02 × 10²⁴", "3,01 × 10²³"], x:"Un mol contiene el número de Avogadro de partículas, sea cual sea la sustancia."},
  {id:"Calcula: CO₂ del carbono", tema:"ruta", tipo:'calcular', ctx:"Se quema carbón puro en el laboratorio.", q:"¿Cuántos gramos de CO₂ se forman al quemar 12 g de C? (C + O₂ → CO₂; C = 12; CO₂ = 44 g/mol)", ok:44, tol:0.5, x:"12 g ÷ 12 = 1 mol C → 1 mol CO₂ → 44 g."},
  {id:"Calcula: oxígeno para metano", tema:"razon", tipo:'calcular', ctx:"Una estufa de gas natural quema metano.", q:"¿Cuántos moles de O₂ se necesitan para quemar 4 mol de CH₄? (CH₄ + 2 O₂ → CO₂ + 2 H₂O)", ok:8, tol:0.1, x:"4 mol CH₄ × (2 mol O₂ / 1 mol CH₄) = 8 mol O₂."},
  {id:"Calcula: hidrógeno del zinc", tema:"ruta", tipo:'calcular', ctx:"Un trozo de zinc se disuelve en ácido muriático.", q:"¿Cuántos gramos de H₂ se obtienen con 65 g de Zn? (Zn + 2 HCl → ZnCl₂ + H₂; Zn = 65; H₂ = 2 g/mol)", ok:2, tol:0.1, x:"65 ÷ 65 = 1 mol Zn → 1 mol H₂ → 2 g."},
  {id:"Calcula: rendimiento 80 y 60", tema:"rendimiento", tipo:'calcular', ctx:"Una planta esperaba 80 g de producto y obtuvo 60 g.", q:"¿Cuál es el rendimiento porcentual (sin el signo %)?", ok:75, tol:0.5, x:"60 ÷ 80 × 100 = 75 %."},
  {id:"Calcula: amoníaco desde H₂", tema:"ruta", tipo:'calcular', ctx:"En una planta de fertilizantes sobra nitrógeno, pero el hidrógeno es limitado.", q:"¿Cuántos gramos de NH₃ se forman con 6 g de H₂ y exceso de N₂? (N₂ + 3 H₂ → 2 NH₃; H₂ = 2; NH₃ = 17 g/mol)", ok:34, tol:0.5, x:"6 ÷ 2 = 3 mol H₂ → 2 mol NH₃ → 34 g."},
  {id:"Calcula: agua con limitante", tema:"limitante", tipo:'calcular', ctx:"Se mezclan 4 g de hidrógeno con 40 g de oxígeno.", q:"¿Cuántos gramos de H₂O se forman? (2 H₂ + O₂ → 2 H₂O; H₂ = 2; O₂ = 32; H₂O = 18 g/mol)", ok:36, tol:0.5, x:"H₂: 2 mol; O₂: 1,25 mol. El H₂ necesita solo 1 mol de O₂, así que es el limitante: 2 mol H₂O = 36 g."}
];
