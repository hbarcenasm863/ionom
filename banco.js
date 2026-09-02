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
    sist: ['pentóxido de dibromo'],
    hint: 'Br en EO +5 → brómico. 2Br + 5O → Br₂O₅.'
  },
  {
    formula: 'Br₂O₇',
    group: 'anhid', level: 'hard',
    trad: ['anhídrido perbrómico'],
    stock: ['óxido de bromo (VII)'],
    sist: ['heptóxido de dibromo'],
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
    sist: ['heptóxido de diyodo'],
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
    formula: 'SeO',
    group: 'anhid', level: 'medium',
    trad: ['anhídrido hiposelenioso'],
    stock: ['óxido de selenio (II)'],
    sist: ['monóxido de selenio'],
    hint: 'Se en EO +2 → hiposelenioso. Se + O → SeO.'
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
    trad: ['hidróxido césico'],
    stock: ['hidróxido de cesio'],
    sist: ['monohidróxido de cesio'],
    hint: 'Cs⁺ (valencia fija) + OH⁻ → CsOH; base fuerte del grupo 1.'
  },
  {
    formula: 'Cd(OH)₂',
    group: 'base', level: 'easy',
    trad: ['hidróxido cádmico'],
    stock: ['hidróxido de cadmio'],
    sist: ['dihidróxido de cadmio'],
    hint: 'Cd²⁺ (valencia fija) + 2OH⁻ → Cd(OH)₂.'
  },
  {
    formula: 'HgOH',
    group: 'base', level: 'medium',
    trad: ['hidróxido mercurioso'],
    stock: ['hidróxido de mercurio (I)'],
    sist: ['monohidróxido de dimercurio'],
    hint: 'Hg⁺ (EO menor) → mercurioso. Hg⁺ + OH⁻ → HgOH.'
  },

  // ── ÁCIDOS OXÁCIDOS (banco adicional) ──
  {
    formula: 'HIO₂',
    group: 'ac-ox', level: 'medium',
    trad: ['ácido yodoso'],
    stock: ['ácido dioxoyódico (III)'],
    sist: ['dioxoyodato (III) de hidrógeno'],
    hint: 'I en EO +3 → yodoso (dos oxígenos). H⁺ + IO₂⁻ → HIO₂.'
  },
  {
    formula: 'H₂SO₂',
    group: 'ac-ox', level: 'medium',
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
    group: 'ac-ox', level: 'medium',
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
    trad: ['fluoruro lítico'],
    stock: ['fluoruro de litio'],
    sist: ['monofluoruro de litio'],
    hint: 'Li⁺ (valencia fija) + F⁻ → LiF; sal binaria de flúor y litio.'
  },
  {
    formula: 'BaI₂',
    group: 'sal-bin', level: 'easy',
    trad: ['yoduro bárico'],
    stock: ['yoduro de bario'],
    sist: ['diyoduro de bario'],
    hint: 'Ba²⁺ (valencia fija) + 2I⁻ → BaI₂.'
  },
  {
    formula: 'AlF₃',
    group: 'sal-bin', level: 'easy',
    trad: ['fluoruro alumínico'],
    stock: ['fluoruro de aluminio'],
    sist: ['trifluoruro de aluminio'],
    hint: 'Al³⁺ (valencia fija) + 3F⁻ → AlF₃.'
  },
  {
    formula: 'ZnS',
    group: 'sal-bin', level: 'easy',
    trad: ['sulfuro zíncico'],
    stock: ['sulfuro de zinc'],
    sist: ['monosulfuro de zinc'],
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
    trad: ['fluoruro estañoso'],
    stock: ['fluoruro de estaño (II)'],
    sist: ['difluoruro de estaño'],
    hint: 'Sn²⁺ (EO menor) → estañoso. Sn²⁺ + 2F⁻ → SnF₂.'
  },
  {
    formula: 'SnF₄',
    group: 'sal-bin', level: 'hard',
    trad: ['fluoruro estáñico'],
    stock: ['fluoruro de estaño (IV)'],
    sist: ['tetrafluoruro de estaño'],
    hint: 'Sn⁴⁺ (EO mayor) → estáñico. Sn⁴⁺ + 4F⁻ → SnF₄.'
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
    group: 'balanceo', level: 'medium',
    ecuacion_sin_coef: 'Al + O₂ → Al₂O₃',
    coeficientes: [4, 3, 2],
    especies: ['Al', 'O₂', 'Al₂O₃'],
    hint: 'Al₂O₃: 2 Al, 3 O. MCM(2,3)=6 → 2 Al₂O₃ → 4 Al; 3 O₂. Coeficientes: 4, 3, 2.',
    col: 'El óxido de aluminio Al₂O₃ (alúmina) se refina en Colombia para obtener aluminio metálico.'
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

  // ── Óxidos básicos adicionales ──
  {formula:'BaO',  group:'ox-bas',level:'easy',  trad:['óxido de bario'],   stock:[],                         sist:['óxido de bario'],         hint:'Ba²⁺ + O²⁻. Valencia fija +2 (grupo 2A).'},
  {formula:'Li₂O', group:'ox-bas',level:'easy',  trad:['óxido de litio'],   stock:[],                         sist:['óxido de litio'],          hint:'Li⁺ (grupo 1A, valencia fija +1). 2 Li + O.'},
  {formula:'K₂O',  group:'ox-bas',level:'easy',  trad:['óxido de potasio'], stock:[],                         sist:['óxido de potasio'],        hint:'K⁺ (grupo 1A). 2 K + O.'},
  {formula:'SrO',  group:'ox-bas',level:'easy',  trad:['óxido de estroncio'],stock:[],                        sist:['óxido de estroncio'],      hint:'Sr²⁺ (grupo 2A). Vale igual que CaO.'},
  {formula:'Ag₂O', group:'ox-bas',level:'medium', trad:['óxido de plata'],   stock:['óxido de plata (I)'],     sist:['óxido de plata'],          hint:'Ag tiene valencia habitual +1. 2 Ag⁺ + O²⁻.'},
  {formula:'NiO',  group:'ox-bas',level:'medium', trad:['óxido niqueloso'],  stock:['óxido de níquel (II)'],   sist:['óxido de níquel'],         hint:'Ni²⁺ (EO menor) → -oso → niqueloso.'},
  {formula:'CoO',  group:'ox-bas',level:'medium', trad:['óxido cobaltoso'],  stock:['óxido de cobalto (II)'],  sist:['óxido de cobalto'],        hint:'Co²⁺ (EO menor) → -oso → cobaltoso.'},
  {formula:'Co₂O₃',group:'ox-bas',level:'medium', trad:['óxido cobáltico'],  stock:['óxido de cobalto (III)'], sist:['trióxido de dico balto'],  hint:'Co³⁺ (EO mayor) → -ico → cobáltico.'},
  {formula:'TiO₂', group:'ox-bas',level:'hard',   trad:[],                   stock:['óxido de titanio (IV)'],  sist:['dióxido de titanio'],      hint:'Ti con EO=+4. Se conoce como dióxido de titanio (pigmento blanco).'},
  {formula:'V₂O₅', group:'ox-bas',level:'hard',   trad:[],                   stock:['óxido de vanadio (V)'],   sist:['pentaóxido de divanadio'], hint:'V con EO=+5 (máximo). Catalizador en síntesis de H₂SO₄.'},

  // ── Anhídridos adicionales ──
  {formula:'N₂O',  group:'anhid',level:'easy',  trad:['anhídrido hiponitroso'],stock:[],                      sist:['óxido de dinitrógeno'],    hint:'N con EO=+1 (mínimo para N con O) → hipo- → hiponitroso.'},
  {formula:'N₂O₃', group:'anhid',level:'medium', trad:['anhídrido nitroso'],   stock:['óxido de nitrógeno (III)'],sist:['trióxido de dinitrógeno'],hint:'N con EO=+3 → -oso → nitroso. El EO menor par de N.'},
  {formula:'SeO₂', group:'anhid',level:'hard',   trad:['anhídrido selenioso'], stock:['óxido de selenio (IV)'], sist:['dióxido de selenio'],      hint:'Se actúa como no metal. EO=+4 (menor) → -oso → selenioso.'},
  {formula:'SeO₃', group:'anhid',level:'hard',   trad:['anhídrido selénico'],  stock:['óxido de selenio (VI)'], sist:['trióxido de selenio'],     hint:'Se EO=+6 (mayor) → -ico → selénico.'},
  {formula:'As₂O₃',group:'anhid',level:'hard',   trad:['anhídrido arsenioso'], stock:['óxido de arsénico (III)'],sist:['trióxido de diarsénico'], hint:'As EO=+3 (menor) → -oso → arsenioso.'},
  {formula:'As₂O₅',group:'anhid',level:'hard',   trad:['anhídrido arsénico'],  stock:['óxido de arsénico (V)'],  sist:['pentaóxido de diarsénico'],hint:'As EO=+5 (mayor) → -ico → arsénico.'},

  // ── Hidruros adicionales ──
  {formula:'KH',   group:'hidru',level:'easy',  trad:['hidruro de potasio'],   stock:[],                        sist:['hidruro de potasio'],      hint:'K⁺ (grupo 1A) + H⁻. Igual para todos los metales alcalinos.'},
  {formula:'BaH₂', group:'hidru',level:'easy',  trad:['hidruro de bario'],     stock:[],                        sist:['hidruro de bario'],         hint:'Ba²⁺ (grupo 2A) + 2 H⁻.'},
  {formula:'AlH₃', group:'hidru',level:'medium', trad:['hidruro de aluminio'],  stock:[],                        sist:['trihidruro de aluminio'],   hint:'Al³⁺ + 3 H⁻. En todos los sistemas: hidruro de aluminio.'},
  {formula:'LiH',  group:'hidru',level:'easy',  trad:['hidruro de litio'],     stock:[],                        sist:['hidruro de litio'],         hint:'Li⁺ + H⁻. Hidruro iónico del litio.'},
  {formula:'CuH',  group:'hidru',level:'medium', trad:['hidruro cuproso'],      stock:['hidruro de cobre (I)'],  sist:['hidruro de cobre'],         hint:'Cu⁺ (EO menor) → -oso → cuproso → hidruro cuproso.'},
  {formula:'MgH₂', group:'hidru',level:'easy',  trad:['hidruro de magnesio'],  stock:[],                        sist:['dihidruro de magnesio'],    hint:'Mg²⁺ + 2 H⁻. Mismo nombre en los tres sistemas.'},
  {formula:'ZnH₂', group:'hidru',level:'medium', trad:['hidruro de zinc'],      stock:[],                        sist:['dihidruro de zinc'],        hint:'Zn²⁺ + 2 H⁻. Valencia fija +2.'},

  // ── Ácidos hídricos adicionales ──
  {formula:'HBr',  group:'ac-hid',level:'easy',  trad:['ácido bromhídrico'],   stock:['bromuro de hidrógeno'],   sist:['bromuro de hidrógeno'],    hint:'HBr en solución = ácido bromhídrico. Br⁻ → brom- → bromhídrico.'},
  {formula:'HI',   group:'ac-hid',level:'easy',  trad:['ácido yodhídrico'],    stock:['yoduro de hidrógeno'],    sist:['yoduro de hidrógeno'],     hint:'HI en solución = ácido yodhídrico. I⁻ → yod- → yodhídrico.'},
  {formula:'HF',   group:'ac-hid',level:'easy',  trad:['ácido fluorhídrico'],  stock:['fluoruro de hidrógeno'],  sist:['fluoruro de hidrógeno'],   hint:'HF = ácido fluorhídrico. F⁻ → fluor- → fluorhídrico. El más débil de los haluros.'},
  {formula:'H₂Se', group:'ac-hid',level:'hard',  trad:['ácido selenhídrico'],  stock:['seleniuro de hidrógeno'], sist:['seleniuro de dihidrógeno'],hint:'H₂Se en solución = ácido selenhídrico. Se²⁻ → selen- → selenhídrico.'},
  {formula:'H₂Te', group:'ac-hid',level:'hard',  trad:['ácido telurhídrico'],  stock:['telururo de hidrógeno'],  sist:['telururo de dihidrógeno'], hint:'H₂Te = ácido telurhídrico. Te²⁻ → telur- → telurhídrico.'},

  // ── Bases adicionales ──
  {formula:'LiOH', group:'base',level:'easy',  trad:['hidróxido de litio'],   stock:[],                         sist:['hidróxido de litio'],       hint:'Li⁺ + OH⁻. Valencia fija +1.'},
  {formula:'Sr(OH)₂',group:'base',level:'easy',trad:['hidróxido de estroncio'],stock:[],                       sist:['dihidróxido de estroncio'],hint:'Sr²⁺ + 2 OH⁻. Grupo 2A, valencia +2.'},
  {formula:'Ba(OH)₂',group:'base',level:'easy',trad:['hidróxido de bario'],   stock:[],                         sist:['dihidróxido de bario'],    hint:'Ba²⁺ + 2 OH⁻. La base fuerte del grupo 2A más soluble.'},
  {formula:'Mn(OH)₂',group:'base',level:'medium',trad:['hidróxido manganoso'],stock:['hidróxido de manganeso (II)'],sist:['dihidróxido de manganeso'],hint:'Mn²⁺ (EO menor) → -oso → manganoso → hidróxido manganoso.',avanzado:true},
  {formula:'Ni(OH)₂',group:'base',level:'medium',trad:['hidróxido niqueloso'],stock:['hidróxido de níquel (II)'],sist:['dihidróxido de níquel'],  hint:'Ni²⁺ (EO menor) → -oso → niqueloso → hidróxido niqueloso.',avanzado:true},
  {formula:'Co(OH)₂',group:'base',level:'medium',trad:['hidróxido cobaltoso'],stock:['hidróxido de cobalto (II)'],sist:['dihidróxido de cobalto'],hint:'Co²⁺ (EO menor) → -oso → cobaltoso → hidróxido cobaltoso.',avanzado:true},
  {formula:'AgOH',group:'base',level:'medium', trad:['hidróxido de plata'],   stock:['hidróxido de plata (I)'],  sist:['hidróxido de plata'],      hint:'Ag⁺ + OH⁻. Valencia habitual +1.'},
  {formula:'Cr(OH)₃',group:'base',level:'hard', trad:['hidróxido crómico'],   stock:['hidróxido de cromo (III)'],sist:['trihidróxido de cromo'],   hint:'Cr³⁺ (EO mayor habitual) → -ico → crómico. Anfótero.',avanzado:true},

  // ── Ácidos oxácidos adicionales ──
  {formula:'H₂SO₃',group:'ac-ox',level:'medium', trad:['ácido sulfuroso'],  stock:[],                           sist:['ácido sulfuroso'],          hint:'SO₃²⁻ = sulfito. Derivado del SO₂. Menos oxidante que H₂SO₄.'},
  {formula:'H₃PO₄',group:'ac-ox',level:'medium', trad:['ácido fosfórico'],  stock:[],                           sist:['ácido fosfórico'],          hint:'PO₄³⁻ = fosfato. Tres H⁺ reemplazables.'},
  {formula:'H₃PO₃',group:'ac-ox',level:'hard',   trad:['ácido fosforoso'],  stock:[],                           sist:['ácido fosforoso'],          hint:'HPO₃²⁻ = fosfonato. Solo 2 H⁺ ácidos (el tercero está unido al P).'},
  {formula:'H₂CO₃',group:'ac-ox',level:'easy',   trad:['ácido carbónico'],  stock:[],                           sist:['ácido carbónico'],          hint:'CO₃²⁻ = carbonato. H₂O + CO₂ en solución.'},
  {formula:'HClO', group:'ac-ox',level:'medium',  trad:['ácido hipocloroso'],stock:[],                           sist:['ácido hipocloroso'],        hint:'ClO⁻ = hipoclorito. Cl EO=+1 (mínimo) → prefijo hipo-.'},
  {formula:'HClO₂',group:'ac-ox',level:'medium',  trad:['ácido cloroso'],    stock:[],                           sist:['ácido cloroso'],            hint:'ClO₂⁻ = clorito. Cl EO=+3 → -oso → cloroso.'},
  {formula:'HClO₃',group:'ac-ox',level:'medium',  trad:['ácido clórico'],    stock:[],                           sist:['ácido clórico'],            hint:'ClO₃⁻ = clorato. Cl EO=+5 → -ico → clórico.'},
  {formula:'HClO₄',group:'ac-ox',level:'hard',    trad:['ácido perclórico'], stock:[],                           sist:['ácido perclórico'],         hint:'ClO₄⁻ = perclorato. Cl EO=+7 (máximo) → per- → perclórico.'},
  {formula:'HNO₂',  group:'ac-ox',level:'medium',  trad:['ácido nitroso'],    stock:[],                           sist:['ácido nitroso'],            hint:'NO₂⁻ = nitrito. N EO=+3 (menor) → -oso → nitroso.'},
  {formula:'H₂CrO₄',group:'ac-ox',level:'hard',   trad:['ácido crómico'],    stock:[],                           sist:['ácido crómico'],            hint:'CrO₄²⁻ = cromato. Cr EO=+6.',avanzado:true},
  {formula:'H₂Cr₂O₇',group:'ac-ox',level:'hard',  trad:['ácido dicroómico'], stock:[],                           sist:['ácido dicroómico'],         hint:'Cr₂O₇²⁻ = dicromato. Cr EO=+6 en dos átomos.',avanzado:true},
  {formula:'H₃BO₃', group:'ac-ox',level:'hard',   trad:['ácido bórico'],     stock:[],                           sist:['ácido bórico'],             hint:'BO₃³⁻ = borato. B EO=+3. Ácido muy débil.'},

  // ── Sales binarias adicionales ──
  {formula:'AgCl',   group:'sal-bin',level:'easy',   trad:['cloruro de plata'],   stock:['cloruro de plata (I)'],    sist:['cloruro de plata'],          hint:'Ag⁺ + Cl⁻. Precipitado blanco insoluble.'},
  {formula:'AgBr',   group:'sal-bin',level:'easy',   trad:['bromuro de plata'],   stock:['bromuro de plata (I)'],    sist:['bromuro de plata'],           hint:'Ag⁺ + Br⁻. Sensible a la luz (fotografía antigua).'},
  {formula:'AgI',    group:'sal-bin',level:'easy',   trad:['yoduro de plata'],    stock:['yoduro de plata (I)'],     sist:['yoduro de plata'],            hint:'Ag⁺ + I⁻. Precipitado amarillo insoluble.'},
  {formula:'BaS',    group:'sal-bin',level:'easy',   trad:['sulfuro de bario'],   stock:[],                          sist:['sulfuro de bario'],           hint:'Ba²⁺ + S²⁻. Ambos con valencia fija.'},
  {formula:'CaS',    group:'sal-bin',level:'easy',   trad:['sulfuro de calcio'],  stock:[],                          sist:['sulfuro de calcio'],          hint:'Ca²⁺ + S²⁻.'},
  {formula:'NaF',    group:'sal-bin',level:'easy',   trad:['fluoruro de sodio'],  stock:[],                          sist:['fluoruro de sodio'],          hint:'Na⁺ + F⁻. Presente en pastas dentales.'},
  {formula:'MgBr₂',  group:'sal-bin',level:'easy',   trad:['bromuro de magnesio'],stock:[],                          sist:['dibromuro de magnesio'],      hint:'Mg²⁺ + 2 Br⁻.'},
  {formula:'NiCl₂',  group:'sal-bin',level:'medium',  trad:['cloruro niqueloso'],  stock:['cloruro de níquel (II)'],  sist:['dicloruro de níquel'],        hint:'Ni²⁺ (EO menor) → -oso → niqueloso.',avanzado:true},
  {formula:'CoCl₂',  group:'sal-bin',level:'medium',  trad:['cloruro cobaltoso'],  stock:['cloruro de cobalto (II)'], sist:['dicloruro de cobalto'],       hint:'Co²⁺ (EO menor) → -oso → cobaltoso.',avanzado:true},
  {formula:'CoCl₃',  group:'sal-bin',level:'medium',  trad:['cloruro cobáltico'],  stock:['cloruro de cobalto (III)'],sist:['tricloruro de cobalto'],      hint:'Co³⁺ (EO mayor) → -ico → cobáltico.',avanzado:true},
  {formula:'MnCl₂',  group:'sal-bin',level:'medium',  trad:['cloruro manganoso'],  stock:['cloruro de manganeso (II)'],sist:['dicloruro de manganeso'],    hint:'Mn²⁺ (EO menor) → -oso → manganoso.',avanzado:true},
  {formula:'SnS',    group:'sal-bin',level:'medium',  trad:['sulfuro estannoso'],  stock:['sulfuro de estaño (II)'],  sist:['sulfuro de estaño'],          hint:'Sn²⁺ + S²⁻. EO menor → -oso → estannoso.'},
  {formula:'SnS₂',   group:'sal-bin',level:'medium',  trad:['sulfuro estánnico'],  stock:['sulfuro de estaño (IV)'],  sist:['disulfuro de estaño'],        hint:'Sn⁴⁺ + 2 S²⁻. EO mayor → -ico → estánnico.'},
  {formula:'PbS',    group:'sal-bin',level:'medium',  trad:['sulfuro plumboso'],   stock:['sulfuro de plomo (II)'],   sist:['sulfuro de plomo'],           hint:'Pb²⁺ + S²⁻. EO menor → -oso → plumboso.'},
  {formula:'PbCl₂',  group:'sal-bin',level:'medium',  trad:['cloruro plumboso'],   stock:['cloruro de plomo (II)'],   sist:['dicloruro de plomo'],         hint:'Pb²⁺ + 2 Cl⁻. EO menor → plumboso.'},
  {formula:'PbCl₄',  group:'sal-bin',level:'hard',    trad:['cloruro plúmbico'],   stock:['cloruro de plomo (IV)'],   sist:['tetracloruro de plomo'],      hint:'Pb⁴⁺ + 4 Cl⁻. EO mayor → -ico → plúmbico.'},

  // ── Sales oxigenadas adicionales ──
  {formula:'BaSO₄',  group:'sal-ox',level:'easy',   trad:['sulfato de bario'],    stock:[],                          sist:['sulfato de bario'],           hint:'Ba²⁺ + SO₄²⁻. Muy insoluble — contraste en rayos X.'},
  {formula:'CaCO₃',  group:'sal-ox',level:'easy',   trad:['carbonato de calcio'], stock:[],                          sist:['carbonato de calcio'],        hint:'Ca²⁺ + CO₃²⁻. Piedra caliza, mármol, conchas marinas.'},
  {formula:'MgCO₃',  group:'sal-ox',level:'easy',   trad:['carbonato de magnesio'],stock:[],                         sist:['carbonato de magnesio'],      hint:'Mg²⁺ + CO₃²⁻. Antácido estomacal.'},
  {formula:'K₂SO₄',  group:'sal-ox',level:'easy',   trad:['sulfato de potasio'],  stock:[],                          sist:['sulfato de dipotasio'],       hint:'K⁺ + SO₄²⁻. Fertilizante agrícola.'},
  {formula:'Na₂CO₃', group:'sal-ox',level:'easy',   trad:['carbonato de sodio'],  stock:[],                          sist:['carbonato de disodio'],       hint:'Na⁺ + CO₃²⁻. Soda (carbonato de soda).'},
  {formula:'AgNO₃',  group:'sal-ox',level:'easy',   trad:['nitrato de plata'],    stock:['nitrato de plata (I)'],     sist:['nitrato de plata'],           hint:'Ag⁺ + NO₃⁻. Reactivo para detectar haluros.'},
  {formula:'Ba(NO₃)₂',group:'sal-ox',level:'easy',  trad:['nitrato de bario'],   stock:[],                           sist:['dinitrato de bario'],         hint:'Ba²⁺ + 2 NO₃⁻. Color verde en pirotecnia.'},
  {formula:'Mg(NO₃)₂',group:'sal-ox',level:'easy',  trad:['nitrato de magnesio'],stock:[],                           sist:['dinitrato de magnesio'],      hint:'Mg²⁺ + 2 NO₃⁻. Fertilizante.'},
  {formula:'FeSO₃',  group:'sal-ox',level:'medium',  trad:['sulfito ferroso'],    stock:['sulfito de hierro (II)'],   sist:['sulfito de hierro'],          hint:'Fe²⁺ + SO₃²⁻. Distinguir sulfito (SO₃) de sulfato (SO₄).'},
  {formula:'Fe₂(SO₄)₃',group:'sal-ox',level:'medium',trad:['sulfato férrico'],   stock:['sulfato de hierro (III)'],  sist:['trisulfato de dihierro'],     hint:'Fe³⁺ + SO₄²⁻. EO mayor → -ico → férrico.'},
  {formula:'NiSO₄',  group:'sal-ox',level:'medium',  trad:['sulfato niqueloso'],  stock:['sulfato de níquel (II)'],   sist:['sulfato de níquel'],          hint:'Ni²⁺ + SO₄²⁻ → sulfato niqueloso.',avanzado:true},
  {formula:'CoPO₄',  group:'sal-ox',level:'hard',    trad:['fosfato cobáltico'],  stock:['fosfato de cobalto (III)'], sist:['fosfato de cobalto'],         hint:'Co³⁺ + PO₄³⁻. EO mayor → -ico → cobáltico.',avanzado:true},
  {formula:'Pb(NO₃)₂',group:'sal-ox',level:'medium', trad:['nitrato plumboso'],   stock:['nitrato de plomo (II)'],    sist:['dinitrato de plomo'],         hint:'Pb²⁺ + 2 NO₃⁻. EO menor → -oso → plumboso.'},
  {formula:'Cu(NO₃)₂',group:'sal-ox',level:'medium', trad:['nitrato cúprico'],    stock:['nitrato de cobre (II)'],    sist:['dinitrato de cobre'],         hint:'Cu²⁺ + 2 NO₃⁻. EO mayor → cúprico.'},
  {formula:'Al₂(SO₄)₃',group:'sal-ox',level:'medium',trad:['sulfato de aluminio'],stock:[],                          sist:['trisulfato de dialuminio'],   hint:'Al³⁺ (fijo) + SO₄²⁻. 2 Al³⁺ necesitan 3 SO₄²⁻.'},
  {formula:'Na₂SO₃', group:'sal-ox',level:'medium',  trad:['sulfito de sodio'],   stock:[],                          sist:['sulfito de disodio'],         hint:'Na⁺ + SO₃²⁻. Sulfito ≠ sulfato (SO₄²⁻).'},
  {formula:'CaSO₃',  group:'sal-ox',level:'medium',  trad:['sulfito de calcio'],  stock:[],                          sist:['sulfito de calcio'],          hint:'Ca²⁺ + SO₃²⁻.'},
  {formula:'Na₃PO₄', group:'sal-ox',level:'medium',  trad:['fosfato de sodio'],   stock:[],                          sist:['fosfato de trisodio'],        hint:'Na⁺ + PO₄³⁻. 3 Na⁺ para equilibrar la carga −3 del fosfato.'},
  {formula:'Ca₃(PO₄)₂',group:'sal-ox',level:'medium',trad:['fosfato de calcio'],  stock:[],                         sist:['difosfato de tricalcio'],     hint:'Ca²⁺ + PO₄³⁻. Mineral principal de los huesos.'},
  {formula:'MgSO₄',  group:'sal-ox',level:'easy',    trad:['sulfato de magnesio'],stock:[],                          sist:['sulfato de magnesio'],        hint:'Mg²⁺ + SO₄²⁻. "Sal de Epsom" — purgante y fertilizante.'},

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
];

// Total: ~450 compounds
// Grupo reaccion: sintesis(10) descomposicion(8) sus-simple(8) sus-doble(8) combustion(7) neutralizacion(7)
