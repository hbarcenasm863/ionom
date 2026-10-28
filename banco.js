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
{"formula": "HCNO", "group": "ac-ox", "level": "hard", "trad": ["ácido ciánico"], "stock": [], "sist": [], "hint": "H + OCN⁻ (cianato). A diferencia del HCN (ácido cianhídrico, sin oxígeno), este sí tiene oxígeno → oxácido. Su sal de sodio es el cianato de sodio."}
];

// Total: 681 entradas (incluye la ampliación +20 % por grupo; sin duplicados, sin formas meta-/piro-/hidratadas)
// Grupo reaccion: sintesis(19) descomposicion(15) sus-simple(15) sus-doble(15) combustion(12) neutralizacion(9)

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
  {id:'Partículas alfa', tema:'modelos', q:'¿Qué partículas se dispararon contra la lámina de oro en el experimento de Rutherford?', ok:'Partículas alfa (núcleos de helio, 2+)', d:['Electrones','Neutrones','Protones de hidrógeno'], x:'Geiger y Marsden usaron partículas alfa: dos protones y dos neutrones, con carga 2+.'},
  {id:'Lámina de oro: vacío', tema:'modelos', q:'En la lámina de oro, casi todas las partículas alfa pasaron sin desviarse. ¿Qué indica esto?', ok:'El átomo es casi todo espacio vacío', d:['El átomo es una esfera maciza','Los electrones son muy pesados','El oro no tiene carga eléctrica'], x:'Si casi nada desvía las partículas, la mayor parte del átomo está vacía.'},
  {id:'Lámina de oro: rebote', tema:'modelos', q:'Unas pocas partículas alfa REBOTARON en la lámina de oro. ¿Qué propuso Rutherford para explicarlo?', ok:'Un núcleo pequeño, denso y con carga positiva', d:['Electrones grandes que frenan las partículas','Una carga positiva repartida en todo el átomo','Átomos de oro con carga negativa'], x:'Solo una carga positiva muy concentrada, con casi toda la masa, puede devolver una partícula alfa.'},
  {id:'Límite de Rutherford', tema:'modelos', q:'¿Qué problema tenía el modelo planetario de Rutherford?', ok:'El electrón perdería energía girando y caería al núcleo', d:['No explicaba la existencia del núcleo','Suponía que el átomo era indivisible','No incluía electrones'], x:'Según la física clásica, una carga que gira emite energía; el átomo de Rutherford sería inestable.'},
  {id:'Modelo de Bohr', tema:'modelos', q:'¿Cuál es la idea central del modelo de Bohr?', ok:'El electrón solo puede estar en ciertos niveles de energía', d:['El electrón está incrustado en una esfera positiva','El electrón es una nube sin energía definida','El átomo no tiene núcleo'], x:'Bohr (1913): niveles de energía cuantizados (n = 1, 2, 3…) en los que el electrón no pierde energía.'},
  {id:'Salto de nivel', tema:'modelos', q:'Según Bohr, ¿qué ocurre cuando un electrón pasa del nivel n = 3 al nivel n = 2?', ok:'Emite un fotón de energía definida', d:['Absorbe un fotón','Cae al núcleo','Se convierte en un protón'], x:'Bajar de nivel libera la diferencia de energía como luz. En el hidrógeno, 3 → 2 da la línea roja de 656 nm.'},
  {id:'Espectro del hidrógeno', tema:'modelos', q:'¿Qué fenómeno logró explicar el modelo de Bohr?', ok:'El espectro de líneas del hidrógeno', d:['La radiactividad','La existencia del neutrón','Los enlaces de los compuestos orgánicos'], x:'Bohr calculó con exactitud las longitudes de onda que emite el hidrógeno.'},
  {id:'Orbital', tema:'modelos', q:'En el modelo mecánico-cuántico (actual), ¿qué es un orbital?', ok:'Una región donde es muy probable encontrar al electrón', d:['La trayectoria circular exacta del electrón','El núcleo del átomo','Un nivel de energía sin electrones'], x:'El modelo actual no habla de trayectorias, sino de probabilidades.'},
  {id:'Incertidumbre', tema:'modelos', q:'¿Qué dice el principio de incertidumbre de Heisenberg?', ok:'No se pueden conocer a la vez la posición y la velocidad exactas del electrón', d:['Los electrones no tienen masa','Dos electrones no pueden tener los mismos números cuánticos','Los electrones llenan primero los niveles de menor energía'], x:'Por eso el modelo actual describe al electrón con probabilidades (orbitales).'},
  {id:'Electrón como onda', tema:'modelos', q:'¿Qué propuso Louis de Broglie sobre el electrón?', ok:'Que también se comporta como una onda', d:['Que tiene carga positiva','Que está dentro del núcleo','Que es más pesado que el protón'], x:'La naturaleza ondulatoria del electrón es la base de la ecuación de Schrödinger.'},
  {id:'Neutrón', tema:'modelos', q:'¿Quién descubrió el neutrón y en qué año?', ok:'James Chadwick, 1932', d:['Ernest Rutherford, 1911','J. J. Thomson, 1897','Niels Bohr, 1913'], x:'Chadwick completó la imagen del núcleo: protones y neutrones.'},
  {id:'Orden de modelos', tema:'modelos', q:'¿Cuál es el orden histórico correcto de los modelos atómicos?', ok:'Dalton → Thomson → Rutherford → Bohr', d:['Thomson → Dalton → Bohr → Rutherford','Dalton → Rutherford → Thomson → Bohr','Bohr → Rutherford → Thomson → Dalton'], x:'Dalton (1808), Thomson (1897–1904), Rutherford (1911) y Bohr (1913).'},
  // ── Estructura del átomo, isótopos e iones ──
  {id:'Número atómico', tema:'estructura', q:'¿Qué indica el número atómico (Z) de un elemento?', ok:'El número de protones del núcleo', d:['El número de neutrones','La suma de protones y neutrones','El número de niveles de energía'], x:'Z identifica al elemento: todos los átomos de carbono tienen 6 protones.'},
  {id:'Número de masa', tema:'estructura', q:'¿Qué indica el número de masa (A)?', ok:'La suma de protones y neutrones', d:['El número de protones','El número de electrones','La masa atómica promedio de la tabla'], x:'A = p + n. Por ejemplo, el carbono-14 tiene A = 14 (6 p + 8 n).'},
  {id:'Isótopos', tema:'estructura', q:'El carbono-12 y el carbono-14 son isótopos. ¿En qué se diferencian?', ok:'En el número de neutrones', d:['En el número de protones','En el número de electrones del átomo neutro','En el símbolo químico'], x:'Los isótopos tienen el mismo Z (6 protones) pero distinto número de neutrones (6 y 8).'},
  {id:'Neutrones del ¹⁴C', tema:'estructura', q:'¿Cuántos neutrones tiene el carbono-14 (Z = 6)?', ok:'8', d:['6','14','20'], x:'n = A − Z = 14 − 6 = 8.'},
  {id:'Electrones de Na⁺', tema:'estructura', q:'¿Cuántos electrones tiene el ion sodio Na⁺ (Z = 11)?', ok:'10', d:['11','12','23'], x:'El catión 1+ perdió un electrón: 11 − 1 = 10.'},
  {id:'Electrones de Cl⁻', tema:'estructura', q:'¿Cuántos electrones tiene el ion cloruro Cl⁻ (Z = 17)?', ok:'18', d:['17','16','35'], x:'El anión 1− ganó un electrón: 17 + 1 = 18.'},
  {id:'Identificar ion', tema:'estructura', q:'Un ion tiene 12 protones, 12 neutrones y 10 electrones. ¿Cuál es?', ok:'Mg²⁺ (magnesio-24)', d:['Mg²⁻ (magnesio-24)','Ne (neón-22)','C²⁺ (carbono-12)'], x:'Z = 12 → magnesio; A = 12 + 12 = 24; carga = 12 − 10 = +2.'},
  {id:'Carga del ion', tema:'estructura', q:'Un ion tiene 8 protones y 10 electrones. ¿Cuál es su carga?', ok:'2−', d:['2+','0','8+'], x:'Carga = protones − electrones = 8 − 10 = −2. Es el ion óxido, O²⁻.'},
  {id:'Formación de cationes', tema:'estructura', q:'¿Cómo se forma un catión a partir de un átomo neutro?', ok:'Perdiendo electrones', d:['Ganando electrones','Ganando protones','Perdiendo neutrones'], x:'Al perder electrones quedan más protones que electrones: carga positiva.'},
  {id:'Partícula más liviana', tema:'estructura', q:'¿Cuál de estas partículas tiene MENOR masa?', ok:'El electrón', d:['El protón','El neutrón','La partícula alfa'], x:'El electrón tiene unas 1836 veces menos masa que un protón.'},
  {id:'Masa atómica decimal', tema:'estructura', q:'¿Por qué la masa atómica del cloro en la tabla periódica es 35,45 y no un número entero?', ok:'Es el promedio ponderado de sus isótopos (³⁵Cl y ³⁷Cl)', d:['Porque el cloro tiene medio neutrón','Porque se suman las masas de los electrones','Porque es un error de medición'], x:'Cerca del 76 % del cloro es ³⁵Cl y el 24 % es ³⁷Cl: el promedio da 35,45.'},
  // ── Configuración electrónica ──
  {id:'Electrones por orbital', tema:'config', q:'¿Cuántos electrones caben como máximo en un orbital?', ok:'2', d:['1','6','8'], x:'Principio de exclusión de Pauli: máximo 2 electrones, con espines opuestos.'},
  {id:'Capacidad del subnivel p', tema:'config', q:'¿Cuántos electrones caben como máximo en un subnivel p?', ok:'6', d:['2','10','14'], x:'El subnivel p tiene 3 orbitales × 2 electrones = 6.'},
  {id:'Capacidad del subnivel d', tema:'config', q:'¿Cuántos electrones caben como máximo en un subnivel d?', ok:'10', d:['6','14','18'], x:'El subnivel d tiene 5 orbitales × 2 electrones = 10.'},
  {id:'Capacidad del nivel 3', tema:'config', q:'¿Cuántos electrones caben como máximo en el nivel n = 3?', ok:'18', d:['8','9','32'], x:'Capacidad = 2n² = 2 × 3² = 18 (3s² 3p⁶ 3d¹⁰).'},
  {id:'Después de 3p', tema:'config', q:'Según el diagrama de Moeller, ¿qué subnivel se llena justo después del 3p?', ok:'4s', d:['3d','4p','3f'], x:'El 4s tiene menos energía que el 3d, por eso se llena primero: … 3p → 4s → 3d → 4p …'},
  {id:'Regla de Hund', tema:'config', q:'¿Qué dice la regla de Hund?', ok:'En un subnivel, los electrones ocupan primero un orbital cada uno antes de aparearse', d:['En un orbital caben máximo 2 electrones','Los electrones llenan primero los subniveles de menor energía','No se puede conocer la posición exacta del electrón'], x:'Como en un bus: nadie se sienta al lado de otro mientras haya puestos vacíos.'},
  {id:'Principio de Pauli', tema:'config', q:'¿Qué dice el principio de exclusión de Pauli?', ok:'Un orbital tiene máximo 2 electrones y con espines opuestos', d:['Los electrones se reparten uno por orbital antes de aparearse','Los electrones llenan primero los niveles más externos','El núcleo contiene protones y neutrones'], x:'Dos electrones del mismo orbital deben tener espín ↑ y ↓.'},
  {id:'Principio de Aufbau', tema:'config', q:'¿Qué dice el principio de Aufbau (de construcción)?', ok:'Los electrones ocupan primero los subniveles de menor energía', d:['Los electrones ocupan primero los subniveles más grandes','Cada orbital admite un solo electrón','Los electrones se ubican al azar'], x:'Por eso se sigue el orden del diagrama de Moeller: 1s, 2s, 2p, 3s, 3p, 4s, 3d…'},
  {id:'Configuración del O', tema:'config', q:'¿Cuál es la configuración electrónica del oxígeno (Z = 8)?', ok:'1s² 2s² 2p⁴', d:['1s² 2s² 2p⁶','1s² 2p⁶','1s² 2s² 2p² 3s²'], x:'8 electrones: 2 en 1s, 2 en 2s y los 4 restantes en 2p.'},
  {id:'Abreviada del Na', tema:'config', q:'¿Cuál es la configuración abreviada del sodio (Z = 11)?', ok:'[Ne] 3s¹', d:['[Ar] 3s¹','[Ne] 3p¹','[He] 3s¹'], x:'Los 10 primeros electrones son los del neón; el electrón 11 entra en 3s.'},
  {id:'[Ne] 3s² 3p⁵', tema:'config', q:'¿Qué elemento tiene la configuración [Ne] 3s² 3p⁵?', ok:'Cloro', d:['Azufre','Argón','Flúor'], x:'10 (neón) + 2 + 5 = 17 electrones → Z = 17, cloro.'},
  {id:'Desapareados del N', tema:'config', q:'¿Cuántos electrones desapareados tiene el nitrógeno (1s² 2s² 2p³)?', ok:'3', d:['1','2','5'], x:'Por la regla de Hund, los 3 electrones del 2p van uno en cada orbital: ↑ ↑ ↑.'},
  {id:'Excepción del Cr', tema:'config', q:'El cromo (Z = 24) es una excepción a la regla de Moeller. ¿Cuál es su configuración real?', ok:'[Ar] 4s¹ 3d⁵', d:['[Ar] 4s² 3d⁴','[Ar] 3d⁶','[Ar] 4s² 4p⁴'], x:'Un subnivel d semilleno (d⁵) es especialmente estable, así que un electrón del 4s pasa al 3d.'},
  {id:'Ion Fe²⁺', tema:'config', q:'¿Cuál es la configuración del ion Fe²⁺ (hierro: [Ar] 4s² 3d⁶)?', ok:'[Ar] 3d⁶', d:['[Ar] 4s² 3d⁴','[Ar] 4s² 3d⁶','[Ar] 4s¹ 3d⁵'], x:'Los metales de transición pierden primero los electrones del nivel más alto (4s), luego los 3d.'},
  {id:'Periodo y grupo 4p³', tema:'config', q:'Un elemento neutro termina su configuración en 4p³. ¿En qué periodo y grupo está?', ok:'Periodo 4, grupo 15', d:['Periodo 3, grupo 15','Periodo 4, grupo 3','Periodo 4, grupo 13'], x:'Periodo = nivel más alto (4). Grupo = 10 + 2 (4s²) + 3 (4p³) = 15. Es el arsénico.'},
  {id:'Bloque d', tema:'config', q:'Si el último electrón de un elemento entra en un subnivel d, ¿a qué bloque pertenece?', ok:'Bloque d (metales de transición)', d:['Bloque s','Bloque p','Bloque f'], x:'El bloque lo decide el subnivel donde entra el último electrón.'},
  {id:'Valencia del S', tema:'config', q:'El azufre tiene la configuración [Ne] 3s² 3p⁴. ¿Cuántos electrones de valencia tiene?', ok:'6', d:['4','2','16'], x:'Se cuentan los del último nivel (n = 3): 3s² + 3p⁴ = 6.'},
  {id:'Número cuántico l', tema:'config', q:'¿Qué valor tiene el número cuántico secundario (l) para un subnivel p?', ok:'1', d:['0','2','3'], x:'s → l = 0, p → l = 1, d → l = 2, f → l = 3.'},
  {id:'Números cuánticos del Na', tema:'config', q:'¿Cuáles son los números cuánticos (n, l, mₗ, mₛ) del último electrón del sodio (3s¹)?', ok:'(3, 0, 0, +½)', d:['(3, 1, 0, +½)','(1, 0, 0, +½)','(3, 0, 1, −½)'], x:'3s → n = 3, l = 0; en s solo existe mₗ = 0; un electrón solo → espín ↑ (+½).'}
];
