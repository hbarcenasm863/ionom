/* ═════════════════════════════════════════════════════════════════════
   bancos-extra.js — bancos de «Cazar errores» y del «Ahorcado», que usan el
   Juego (juego.html) y el generador docente (docente.html).
   Viven fuera de banco.js a propósito: sw.js sirve este archivo
   network-first (siempre la versión nueva si hay internet), mientras que
   banco.js es cache-first y en un celular solo se actualiza cuando alguien
   toca «Actualizar». Con estos bancos dentro de banco.js, el Ahorcado salía
   vacío («0 palabras») hasta que se actualizaba la app.
   ═════════════════════════════════════════════════════════════════════ */
/* ── Cazar errores (Juego y generador docente) ──
   Por tema: [afirmación de un compañero con UN error, la corrección].
   Se basan solo en lo que explica la página de cada tema. En el Juego
   salen como «¿Cuál es la corrección?» con distractores tomados de las
   correcciones de otros errores del mismo tema; en el generador docente,
   como ejercicios para encontrar y corregir el error. */
window.BANCO_CAZAR={
"modelos": [
[
"Una teoría se convierte en ley cuando se comprueba con muchos experimentos.",
"No: la ley describe qué pasa y la teoría explica por qué; responden preguntas distintas."
],
[
"La ley de Boyle explica por qué la presión de un gas aumenta al comprimirlo.",
"La ley solo describe (P × V = constante); lo explica la teoría cinético-molecular."
],
[
"El modelo de bolitas que rebotan es una copia exacta de un gas real.",
"Es un modelo: simplifica (las partículas reales no son bolas), pero permite predecir."
],
[
"Según la teoría cinético-molecular, al reducir el volumen las partículas chocan menos veces contra las paredes y la presión baja.",
"Chocan más veces por segundo y la presión sube."
],
[
"«Si caliento el globo, se inflará más» es una ley.",
"Es una hipótesis: una predicción que se puede poner a prueba."
],
[
"«En una reacción química, la masa total se conserva» es una teoría.",
"Es una ley: describe lo que ocurre siempre."
],
[
"Un dibujo del átomo con su núcleo y los electrones en niveles es una teoría.",
"Es un modelo: una representación que explica y predice."
],
[
"La ley de Boyle dice que, a temperatura constante, la presión y el volumen son directamente proporcionales.",
"Son inversamente proporcionales."
],
[
"Si un gas tiene 60 mL a 1 atm, a 2 atm ocupará 120 mL.",
"Al duplicar la presión el volumen baja a la mitad: 30 mL."
],
[
"En el experimento de la jeringa, el volumen es la variable independiente porque es lo que se mide.",
"Lo que se mide es la variable dependiente; la presión es la que se cambia (independiente)."
],
[
"En el experimento de la jeringa, la temperatura y la cantidad de aire son variables dependientes.",
"Son variables controladas: se mantienen iguales."
],
[
"La gráfica de V contra P de un gas que cumple la ley de Boyle es una línea recta.",
"Es una curva; la recta es la gráfica de P contra 1/V."
],
[
"Usar un modelo hecho con datos de 0 a 3000 m para predecir a 4800 m es una interpolación.",
"Es una extrapolación: está fuera del rango de los datos y es más arriesgada."
],
[
"Predecir el punto de ebullición a 1500 m con un modelo hecho con datos de 0 a 3000 m es una extrapolación.",
"Es una interpolación: está dentro del rango de los datos."
],
[
"El agua hierve a mayor temperatura en Bogotá que en Cartagena.",
"Hierve a menor temperatura (unos 91 °C): con la altura hay menos presión."
],
[
"Un líquido hierve cuando su presión de vapor es menor que la presión del aire.",
"Hierve cuando su presión de vapor iguala la presión del aire."
],
[
"Con el modelo T = 100 − 3,4 × (altitud ÷ 1000), en Medellín (1495 m) el agua hierve a 105,1 °C.",
"Hay que restar: 100 − 3,4 × 1,495 ≈ 94,9 °C."
],
[
"Si un modelo predice 91,0 °C y un estudiante mide 91,8 °C, el modelo está equivocado.",
"La diferencia es pequeña: el modelo funciona bien."
],
[
"Con más altura hay más aire encima, por eso la presión atmosférica sube.",
"Hay menos aire encima: la presión baja."
],
[
"Si subes la temperatura del gas de la jeringa, las partículas se mueven más despacio y la presión baja.",
"Se mueven más rápido y la presión aumenta (Gay-Lussac)."
],
[
"La teoría atómica es menos confiable que una ley porque es «solo una teoría».",
"La teoría atómica está tan comprobada como cualquier ley."
]
],
"acidobase": [
[
"Según Arrhenius, un ácido es una sustancia que en agua libera OH⁻.",
"El ácido libera H⁺; la base libera OH⁻."
],
[
"Según Brønsted-Lowry, una base es la sustancia que dona un H⁺.",
"La base acepta un H⁺; el ácido lo dona."
],
[
"En NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, el NH₃ es el ácido porque forma NH₄⁺.",
"El NH₃ acepta el H⁺: es la base; el agua es el ácido."
],
[
"En HCl + H₂O → H₃O⁺ + Cl⁻, la base conjugada del HCl es el H₃O⁺.",
"Es el Cl⁻; el H₃O⁺ es el ácido conjugado del agua."
],
[
"El agua siempre actúa como base.",
"Es anfótera: con el HCl actúa como base y con el NH₃ como ácido."
],
[
"El pH se calcula como pH = log[H⁺].",
"pH = −log[H⁺]."
],
[
"Una solución con [H⁺] = 1 × 10⁻³ mol/L tiene pH 11.",
"Su pH es 3; 11 es su pOH."
],
[
"Si una solución tiene pH 4, su pOH también es 4.",
"pH + pOH = 14: el pOH es 10."
],
[
"Una solución de pH 3 tiene 3 veces más H⁺ que una de pH 6.",
"Cada unidad de pH es 10 veces: 10³ = 1000 veces más."
],
[
"Una solución de pH 9 es ácida.",
"Es básica: está por encima de 7."
],
[
"El HCl y el vinagre de la misma concentración tienen el mismo pH porque los dos son ácidos.",
"El HCl es fuerte (pH ≈ 1) y el ácido acético débil (pH ≈ 2,9)."
],
[
"«Ácido fuerte» y «ácido concentrado» significan lo mismo.",
"Fuerte describe cuánto se ioniza; concentrado, cuánto ácido hay disuelto."
],
[
"El ácido acético del vinagre es un ácido fuerte.",
"Es débil: solo una pequeña parte de sus moléculas suelta el H⁺."
],
[
"En la neutralización HCl + NaOH → NaCl + H₂O se forman un ácido y una base nuevos.",
"Se forman una sal y agua."
],
[
"En el fondo de toda neutralización ocurre H⁺ + Cl⁻ → HCl.",
"Ocurre H⁺ + OH⁻ → H₂O."
],
[
"El pH de la sangre de una persona sana se mantiene entre 6,5 y 7,0.",
"Se mantiene entre 7,35 y 7,45."
],
[
"El jugo gástrico es básico para poder digerir las proteínas.",
"Es ácido (pH 1,5 – 3,5): el HCl activa la pepsina."
],
[
"Tomar agua alcalina sube el pH de la sangre.",
"El cuerpo lo regula con amortiguadores, pulmones y riñones; además, el agua se neutraliza en el estómago."
],
[
"La lluvia normal tiene pH 7, igual que el agua pura.",
"Tiene pH ≈ 5,6 por el CO₂ del aire."
],
[
"La cal agrícola, CaCO₃, baja el pH de los suelos ácidos.",
"Lo sube: consume H⁺ (CaCO₃ + 2 H⁺ → Ca²⁺ + H₂O + CO₂)."
],
[
"Si el pH del mar baja de 8,2 a 8,1, el mar tiene menos H⁺.",
"Tiene más H⁺ (cerca de 26 % más)."
],
[
"El indicador de repollo morado se pone verde en los ácidos.",
"En ácido se pone rojo o rosado; verde o amarillo en base."
]
],
"industria": [
[
"La ecuación Al + Cu²⁺ → Al³⁺ + Cu está bien porque tiene los mismos átomos a cada lado.",
"La carga no se conserva (+2 frente a +3): 2 Al + 3 Cu²⁺ → 2 Al³⁺ + 3 Cu."
],
[
"Una ecuación iónica está balanceada si se conserva la masa, aunque la carga no se conserve.",
"Deben conservarse las dos: la masa y la carga."
],
[
"La calcinación de la caliza, CaCO₃ → CaO + CO₂, es una síntesis.",
"Es una descomposición: un compuesto se separa en dos."
],
[
"El proceso Haber, N₂ + 3 H₂ → 2 NH₃, es una descomposición.",
"Es una síntesis: dos gases se combinan en uno."
],
[
"La ecuación balanceada del proceso Haber es N₂ + H₂ → NH₃.",
"Faltan coeficientes: N₂ + 3 H₂ → 2 NH₃."
],
[
"En el alto horno, Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂, el hierro se oxida.",
"El Fe pasa de +3 a 0: se reduce; el C (de +2 a +4) se oxida."
],
[
"En la potabilización del agua se forma un gas que atrapa la suciedad.",
"Se forma un precipitado gelatinoso de Al(OH)₃."
],
[
"La electrólisis de la salmuera produce NaOH, Cl₂ y O₂.",
"Produce NaOH, Cl₂ y H₂."
],
[
"Con 280 kg de N₂ y 80 kg de H₂, el limitante es el H₂ porque hay menos kilogramos.",
"Hay que comparar moles: el N₂ es el limitante y sobra H₂."
],
[
"El reactivo limitante es el que sobra cuando termina la reacción.",
"El limitante es el que se acaba; el que sobra es el reactivo en exceso."
],
[
"Para encontrar el reactivo limitante se comparan directamente los kilogramos de cada reactivo.",
"Se pasan a moles y se comparan con la razón molar de la ecuación."
],
[
"Según N₂ + 3 H₂ → 2 NH₃, con 10 000 mol de N₂ se forman 10 000 mol de NH₃.",
"La razón es 1 N₂ : 2 NH₃: se forman 20 000 mol."
],
[
"En 1000 kg de caliza con 90 % de CaCO₃ hay 1000 kg de CaCO₃ útil.",
"Hay 1000 × 90 / 100 = 900 kg."
],
[
"Rendimiento = masa teórica ÷ masa real × 100.",
"Rendimiento = masa real ÷ masa teórica × 100."
],
[
"Si se obtienen 480 kg de CaO y la masa teórica es 504 kg, el rendimiento es 105 %.",
"480 ÷ 504 × 100 ≈ 95,2 %."
],
[
"Cada tonelada de CaCO₃ puro libera 1000 kg de CO₂ al calcinarse.",
"Libera 440 kg de CO₂."
],
[
"Cuando la cáscara de huevo reacciona con el vinagre se libera O₂.",
"Se libera CO₂: CaCO₃ + 2 CH₃COOH → Ca(CH₃COO)₂ + H₂O + CO₂."
],
[
"En el experimento de la cáscara, la masa que se pierde es solo agua evaporada.",
"Es sobre todo el CO₂ que escapa; parte del agua también se evapora, por eso se usa un vaso de control."
],
[
"El cloro de la electrólisis se usa en jabones y la soda cáustica para desinfectar el agua.",
"Es al revés: el cloro desinfecta el agua y la soda se usa en jabones y papel."
],
[
"En la calcinación CaCO₃ → CaO + CO₂, la razón molar entre CaCO₃ y CO₂ es 1 : 2.",
"Es 1 : 1."
],
[
"Fe³⁺ + 3 OH⁻ → Fe(OH)₃↓ no conserva la carga.",
"Sí la conserva: +3 + 3(−1) = 0 a la izquierda y 0 a la derecha."
]
],
"gases": [
[
"En las leyes de los gases se puede usar la temperatura en °C.",
"Siempre en kelvin: K = °C + 273."
],
[
"Si un gas pasa de 10 °C a 20 °C, su temperatura absoluta se duplica.",
"Pasa de 283 K a 293 K: solo un 3,5 % más."
],
[
"1 atm equivale a 101,3 mmHg.",
"1 atm = 760 mmHg = 101,3 kPa."
],
[
"Para pasar de °C a kelvin se usa K = °C − 273.",
"K = °C + 273."
],
[
"Según la ley de Boyle, si el volumen baja a la mitad, la presión también baja a la mitad.",
"La presión se duplica: P y V son inversamente proporcionales."
],
[
"La ley de Charles se cumple a volumen constante.",
"Se cumple con n y P constantes; a volumen constante es Gay-Lussac."
],
[
"La ley de Gay-Lussac se escribe P₁ × T₁ = P₂ × T₂.",
"Se escribe P₁/T₁ = P₂/T₂."
],
[
"Un aerosol se puede acercar al fuego porque su volumen no cambia.",
"Justo por eso es peligroso: a volumen fijo la presión sube con la temperatura."
],
[
"A 0 °C y 1 atm, 1 mol de cualquier gas ocupa 2,24 L.",
"Ocupa 22,4 L."
],
[
"En PV = nRT, R = 8,2 atm·L/(mol·K).",
"R = 0,082 atm·L/(mol·K)."
],
[
"El paquete de papas llega inflado a Bogotá porque allá hace más calor que en Cartagena.",
"En Bogotá hace más frío; lo infla la menor presión (0,74 atm)."
],
[
"Según la ley de Dalton, la presión total es el producto de las presiones parciales.",
"Es la suma: P total = P₁ + P₂ + …"
],
[
"La presión parcial de un gas se calcula como Pᵢ = P total ÷ Xᵢ.",
"Pᵢ = Xᵢ × P total."
],
[
"En Bogotá, P(O₂) = 0,21 × 1,00 atm = 0,21 atm, igual que en Cartagena.",
"En Bogotá la presión es 0,74 atm: P(O₂) = 0,21 × 0,74 ≈ 0,155 atm."
],
[
"En la ley combinada, V₂ = P₁ × V₁ × T₁ ÷ (T₂ × P₂).",
"V₂ = P₁ × V₁ × T₂ ÷ (T₁ × P₂)."
],
[
"Un globo que se deja al sol se arruga y en la nevera se infla.",
"Es al revés: al sol se infla y en la nevera se arruga (Charles)."
],
[
"A la misma presión y temperatura, volúmenes iguales de gases distintos tienen distinto número de moléculas.",
"Tienen el mismo número de moléculas (Avogadro)."
],
[
"El gas ideal es un modelo de partículas grandes que se atraen mucho.",
"Son partículas muy pequeñas que no se atraen; los gases reales se le parecen a bajas presiones."
],
[
"Cuando un buzo sube rápido, el aire de sus pulmones se comprime porque baja la presión.",
"Al bajar la presión el aire se expande (Boyle)."
],
[
"Para calcular los moles de aire de un salón se usa n = P × V × R × T.",
"n = PV ÷ RT."
],
[
"En Bogotá la presión atmosférica es de unos 1,00 atm, igual que en Cartagena.",
"En Bogotá es de unos 0,74 atm (560 mmHg)."
]
],
"soluciones": [
[
"Al disolverse la sal, el O del agua se orienta hacia el Cl⁻ y los H hacia el Na⁺.",
"El O (δ−) mira hacia el Na⁺ y los H (δ+) hacia el Cl⁻."
],
[
"Al disolverse, el NaCl queda en el agua como moléculas de NaCl sueltas.",
"Queda como iones hidratados: NaCl(s) → Na⁺(ac) + Cl⁻(ac)."
],
[
"El agua con azúcar conduce la electricidad porque el azúcar se disuelve.",
"El azúcar se disuelve como moléculas, sin formar iones: no conduce."
],
[
"El aceite se disuelve en agua si se agita con fuerza.",
"El aceite es apolar: no se disuelve en agua; semejante disuelve a semejante."
],
[
"Agitar el agua hace que se pueda disolver más sal.",
"Agitar acelera la disolución, pero no cambia cuánto se puede disolver (la solubilidad)."
],
[
"Moler el soluto hace más lenta la disolución.",
"La hace más rápida: hay más superficie de contacto."
],
[
"Una solución saturada todavía puede disolver más soluto a la misma temperatura.",
"Eso es una solución insaturada; la saturada ya no admite más."
],
[
"A 60 °C caben 110 g de KNO₃ en 100 g de agua, así que con 80 g la solución queda saturada.",
"Queda insaturada: 80 g es menos de lo que cabe."
],
[
"Al enfriar a 20 °C una solución con 80 g de KNO₃ en 100 g de agua, cristalizan 31,6 g.",
"A 20 °C caben 31,6 g: cristalizan 80 − 31,6 = 48,4 g."
],
[
"% m/m = gramos de soluto ÷ gramos de solvente × 100.",
"Se divide entre los gramos de solución (soluto + solvente)."
],
[
"15 g de azúcar en 135 g de agua dan una solución al 11,1 % m/m.",
"La solución pesa 150 g: 15 ÷ 150 × 100 = 10 %."
],
[
"El suero fisiológico al 0,9 % m/v tiene 0,9 g de NaCl en cada litro.",
"Tiene 0,9 g en cada 100 mL (9 g por litro)."
],
[
"Un aguardiente de 29 grados tiene 29 mL de etanol por cada litro.",
"Tiene 29 mL por cada 100 mL: 29 % v/v."
],
[
"Un agua con 1,5 ppm de cloro tiene 1,5 g de cloro por litro.",
"1,5 ppm en agua = 1,5 mg por litro."
],
[
"La molaridad son los moles de soluto por kilogramo de solvente.",
"Eso es la molalidad; la molaridad son moles por litro de solución."
],
[
"La molaridad no cambia con la temperatura, pero la molalidad sí.",
"Es al revés: la molalidad no cambia con la temperatura."
],
[
"4,5 g de NaCl (58,5 g/mol) en 500 mL de solución dan una concentración de 0,0769 M.",
"0,0769 son los moles; M = 0,0769 ÷ 0,500 L = 0,154 M."
],
[
"Al diluir una solución con agua, los moles de soluto aumentan.",
"Los moles no cambian: C₁ × V₁ = C₂ × V₂."
],
[
"Para preparar 250 mL de HCl 0,1 M a partir de HCl 2 M se miden 125 mL del ácido concentrado.",
"V₁ = 0,1 × 250 ÷ 2 = 12,5 mL."
],
[
"Para diluir un ácido concentrado se agrega el agua sobre el ácido.",
"Siempre el ácido sobre el agua, porque se libera calor."
],
[
"El H₂SO₄ 1 M es 1 N porque tiene un solo átomo de azufre.",
"Aporta 2 H⁺: es 2 N."
],
[
"En el aire, la fracción molar del O₂ es 21.",
"La fracción molar no tiene unidades y va de 0 a 1: X(O₂) ≈ 0,21."
]
],
"ac-hid": [
[
"El HCl disuelto en agua se llama cloruro de hidrógeno.",
"En agua se llama ácido clorhídrico; cloruro de hidrógeno es el nombre del gas."
],
[
"El HCl en estado gaseoso se llama ácido clorhídrico.",
"Como gas es cloruro de hidrógeno; ácido clorhídrico es en solución acuosa."
],
[
"El H₂S disuelto en agua se llama ácido sulfúrico.",
"Se llama ácido sulfhídrico; el sulfúrico es un oxácido, H₂SO₄."
],
[
"La fórmula del ácido sulfhídrico es HS.",
"Es H₂S: el azufre actúa con −2 y necesita dos H."
],
[
"La fórmula del ácido fluorhídrico es HF₂.",
"Es HF: el flúor actúa con −1."
],
[
"El HBr disuelto en agua se llama ácido brómico.",
"Se llama ácido bromhídrico (sufijo -hídrico)."
],
[
"La fórmula del ácido yodhídrico es H₂I.",
"Es HI: el yodo actúa con −1."
],
[
"Los ácidos hídricos tienen oxígeno en su fórmula.",
"No tienen oxígeno: solo H y un no metal. Los que tienen O son oxácidos."
],
[
"En los ácidos hídricos el hidrógeno va al final de la fórmula, como en ClH.",
"En los ácidos hídricos el H va al inicio: HCl. Al final va en los hidruros metálicos."
],
[
"El NaH es un ácido hídrico porque tiene hidrógeno.",
"Es un hidruro metálico: metal + H, con el H al final."
],
[
"Los ácidos hídricos se forman cuando un hidruro metálico se disuelve en agua.",
"Se forman cuando un hidruro de no metal se disuelve en agua."
],
[
"El H₂Se disuelto en agua se llama ácido selénico.",
"Se llama ácido selenhídrico."
],
[
"El H₂S en estado gaseoso se llama sulfuro de azufre.",
"Se llama sulfuro de hidrógeno."
],
[
"El HCN disuelto en agua se llama ácido cianúrico.",
"Se llama ácido cianhídrico."
],
[
"En el HCl, el cloro actúa con estado de oxidación +1.",
"Actúa con −1; el hidrógeno es el que tiene +1."
],
[
"En el H₂S, el azufre actúa con estado de oxidación −1.",
"Actúa con −2: por eso la fórmula lleva dos H."
],
[
"El HF disuelto en agua se llama ácido fluórico.",
"Se llama ácido fluorhídrico."
],
[
"El ácido clorhídrico se escribe H₂Cl porque el hidrógeno siempre lleva subíndice 2.",
"Se escribe HCl: el cloro actúa con −1 y basta un H."
],
[
"El bromuro de hidrógeno es el nombre del HBr disuelto en agua.",
"Es el nombre del gas; en solución es ácido bromhídrico."
],
[
"Un ácido hídrico se nombra con la raíz del no metal y el sufijo -ico, como «ácido clórico».",
"Se usa el sufijo -hídrico: ácido clorhídrico."
],
[
"La fórmula del ácido selenhídrico es HSe₂.",
"Es H₂Se: el selenio actúa con −2."
]
]
};


/* ── Ahorcado con 3 pistas (Juego) ──
   [palabra, tema, pista 1 (general), pista 2, pista 3 (la más reveladora)].
   Palabras clave de las páginas del sitio; las pistas usan solo lo que allí
   se explica. Las tildes no cuentan al adivinar (la A descubre también la Á). */
window.BANCO_AHORCADO=[
[
"PROTÓN",
"atomo",
"Partícula del núcleo con carga positiva.",
"Su número define de qué elemento es el átomo.",
"Su número es Z, el número atómico."
],
[
"NEUTRÓN",
"atomo",
"Partícula del núcleo sin carga eléctrica.",
"Su número se calcula como A − Z.",
"Los isótopos de un elemento tienen distinto número de esta partícula."
],
[
"ELECTRÓN",
"atomo",
"Partícula con carga negativa.",
"Thomson la descubrió con el tubo de rayos catódicos.",
"En un átomo neutro hay tantos como protones."
],
[
"ISÓTOPO",
"atomo",
"Átomos del mismo elemento con distinta masa.",
"Tienen el mismo Z y distinto A.",
"El carbono-12 y el carbono-14 son un ejemplo."
],
[
"NÚCLEO",
"atomo",
"Centro del átomo, muy pequeño y denso.",
"Rutherford lo descubrió con la lámina de oro.",
"Allí están los protones y los neutrones."
],
[
"CATIÓN",
"atomo",
"Ion con carga positiva.",
"Se forma cuando un átomo pierde electrones.",
"El Na⁺ es un ejemplo."
],
[
"ANIÓN",
"atomo",
"Ion con carga negativa.",
"Se forma cuando un átomo gana electrones.",
"El Cl⁻ es un ejemplo."
],
[
"RUTHERFORD",
"atomo",
"Científico del experimento de la lámina de oro.",
"Propuso un átomo con un núcleo pequeño y denso.",
"Su modelo reemplazó al de Thomson."
],
[
"BOHR",
"atomo",
"Propuso que los electrones giran en niveles de energía.",
"Su modelo explica la luz que emite el hidrógeno.",
"Científico danés; su apellido tiene 4 letras."
],
[
"ORBITAL",
"config-e",
"Región donde es más probable encontrar un electrón.",
"Le caben como máximo 2 electrones.",
"Los hay de tipo s, p, d y f."
],
[
"AUFBAU",
"config-e",
"Principio de llenado de los orbitales.",
"Los electrones ocupan primero los de menor energía.",
"Principio de ___ (palabra alemana)."
],
[
"HUND",
"config-e",
"Regla para orbitales de igual energía.",
"Primero va un electrón en cada orbital, con el mismo espín.",
"Regla de ___: apellido de 4 letras."
],
[
"PAULI",
"config-e",
"Principio: dos electrones no pueden tener los 4 números cuánticos iguales.",
"Por eso un orbital tiene como máximo 2 electrones.",
"Principio de exclusión de ___."
],
[
"ESPÍN",
"config-e",
"Número cuántico con valores +½ y −½.",
"Se dibuja con las flechas ↑ y ↓.",
"Es el cuarto número cuántico."
],
[
"VALENCIA",
"config-e",
"Electrones del último nivel de energía.",
"Son los que forman los enlaces.",
"El sodio tiene 1 electrón de ___."
],
[
"MOELLER",
"config-e",
"Diagrama de flechas diagonales para llenar los subniveles.",
"Muestra que el 4s se llena antes que el 3d.",
"Diagrama de ___."
],
[
"PERIODO",
"elemento",
"Fila horizontal de la tabla periódica.",
"En la tabla hay 7.",
"Su número indica el último nivel de energía ocupado."
],
[
"GRUPO",
"elemento",
"Columna de la tabla periódica.",
"Sus elementos tienen propiedades parecidas.",
"En la tabla actual hay 18."
],
[
"HALÓGENOS",
"elemento",
"Elementos del grupo 17.",
"Flúor, cloro, bromo y yodo.",
"Con los metales forman sales, como el NaCl."
],
[
"ALCALINOS",
"elemento",
"Elementos del grupo 1, sin contar el hidrógeno.",
"Litio, sodio, potasio…",
"Metales muy reactivos con el agua."
],
[
"METALOIDE",
"elemento",
"Elemento con propiedades entre las de un metal y un no metal.",
"El silicio de los chips es uno.",
"Está junto a la «escalera» de la tabla."
],
[
"ELECTRONEGATIVIDAD",
"elemento",
"Capacidad de un átomo para atraer los electrones de un enlace.",
"La escala más usada es la de Pauling.",
"El flúor es el que la tiene mayor."
],
[
"MENDELÉIEV",
"elemento",
"Ordenó los elementos en una tabla en 1869.",
"Dejó huecos para elementos que aún no se conocían.",
"Químico ruso."
],
[
"IÓNICO",
"enlace",
"Enlace entre un metal y un no metal.",
"Su ΔEN es de 1,7 o más.",
"Hay transferencia de electrones, como en el NaCl."
],
[
"COVALENTE",
"enlace",
"Enlace en el que se comparten electrones.",
"Se da entre no metales.",
"Puede ser polar o apolar."
],
[
"METÁLICO",
"enlace",
"Enlace con un «mar de electrones».",
"Explica que los metales conduzcan la electricidad.",
"Es el enlace del cobre de los cables."
],
[
"OCTETO",
"enlace",
"Regla de los 8 electrones.",
"Los átomos ganan, pierden o comparten electrones para cumplirla.",
"Los gases nobles ya la cumplen."
],
[
"LEWIS",
"enlace",
"Estructuras que dibujan con puntos los electrones de valencia.",
"Muestran los pares enlazantes y los pares libres.",
"Estructuras de ___."
],
[
"POLAR",
"enlace",
"Enlace covalente en el que un átomo atrae más los electrones.",
"Su ΔEN está entre 0,4 y 1,7.",
"El enlace H−Cl es un ejemplo."
],
[
"ÓXIDO",
"ox-bas",
"Compuesto de un elemento con oxígeno.",
"Puede ser básico (con un metal) o ácido (con un no metal).",
"El Fe₂O₃ es el ___ férrico."
],
[
"ANHÍDRIDO",
"anhid",
"Nombre tradicional del óxido de un no metal.",
"Con agua forma un oxácido.",
"El SO₃ es el ___ sulfúrico."
],
[
"HIDRÓXIDO",
"base",
"Base formada por un metal y el grupo OH⁻.",
"Se forma cuando un óxido básico reacciona con agua.",
"El NaOH es el ___ de sodio."
],
[
"HIDRURO",
"hidru",
"Compuesto de un metal con hidrógeno.",
"El H va al final de la fórmula.",
"El NaH es el ___ de sodio."
],
[
"OXÁCIDO",
"ac-ox",
"Ácido formado por hidrógeno, un no metal y oxígeno.",
"Se forma con un anhídrido y agua.",
"El H₂SO₄ es uno."
],
[
"HIDRÁCIDO",
"ac-hid",
"Ácido de hidrógeno y un no metal, sin oxígeno.",
"En agua se nombra con el sufijo -hídrico.",
"El HCl disuelto en agua es uno."
],
[
"STOCK",
"ox-bas",
"Sistema de nomenclatura que usa números romanos.",
"El número romano es el estado de oxidación del metal.",
"«Óxido de hierro (III)» es un nombre ___."
],
[
"SISTEMÁTICA",
"ox-bas",
"Nomenclatura que usa los prefijos mono-, di-, tri-…",
"Los prefijos dicen cuántos átomos hay de cada elemento.",
"«Trióxido de dihierro» es un nombre en nomenclatura ___."
],
[
"TRADICIONAL",
"ox-bas",
"Nomenclatura que usa los sufijos -oso e -ico.",
"El sufijo -oso es para el estado de oxidación menor.",
"«Óxido férrico» es un nombre en nomenclatura ___."
],
[
"OXISAL",
"sal-ox",
"Sal que tiene oxígeno.",
"Se forma con un oxácido y una base.",
"El CaCO₃ de la caliza es una."
],
[
"SÍNTESIS",
"reaccion",
"Dos sustancias se unen en una sola.",
"A + B → AB.",
"2 H₂ + O₂ → 2 H₂O es de este tipo."
],
[
"DESCOMPOSICIÓN",
"reaccion",
"Una sustancia se separa en dos o más.",
"AB → A + B.",
"La calcinación de la caliza es de este tipo."
],
[
"COMBUSTIÓN",
"reaccion",
"Reacción de un combustible con oxígeno.",
"Si es completa produce CO₂ y H₂O.",
"Quemar el gas de la estufa es una."
],
[
"NEUTRALIZACIÓN",
"reaccion",
"Ácido + base → sal + agua.",
"En el fondo es H⁺ + OH⁻ → H₂O.",
"HCl + NaOH → NaCl + H₂O es una."
],
[
"PRECIPITADO",
"reaccion",
"Sólido que aparece al mezclar dos soluciones.",
"En la potabilización del agua atrapa la suciedad.",
"Se marca con una flecha hacia abajo, ↓."
],
[
"COEFICIENTE",
"balanceo",
"Número que va delante de una fórmula en una ecuación.",
"Se cambia para balancear; el subíndice, nunca.",
"En 2 H₂O, el 2 es el ___."
],
[
"CATALIZADOR",
"industria",
"Sustancia que acelera una reacción sin gastarse.",
"Se escribe sobre la flecha de la ecuación.",
"En el proceso Haber es de hierro."
],
[
"OXIDACIÓN",
"industria",
"Pérdida de electrones.",
"El número de oxidación aumenta.",
"En el alto horno, el C del CO pasa de +2 a +4: sufre una ___."
],
[
"REDUCCIÓN",
"industria",
"Ganancia de electrones.",
"El número de oxidación disminuye.",
"En el alto horno, el Fe pasa de +3 a 0: sufre una ___."
],
[
"ÁCIDO",
"acidobase",
"Según Arrhenius, libera H⁺ en el agua.",
"Su pH es menor que 7.",
"El limón y el vinagre lo son."
],
[
"BASE",
"acidobase",
"Según Brønsted-Lowry, acepta un H⁺.",
"Su pH es mayor que 7.",
"La leche de magnesia es una."
],
[
"INDICADOR",
"acidobase",
"Sustancia que cambia de color según el pH.",
"El agua del repollo morado es uno natural.",
"Se pone rojo en ácido y verde en base."
],
[
"AMORTIGUADOR",
"acidobase",
"Mantiene el pH casi constante.",
"En la sangre es el par H₂CO₃ / HCO₃⁻.",
"Gracias a él la comida no cambia el pH de la sangre."
],
[
"HIDRONIO",
"acidobase",
"Ion H₃O⁺.",
"Se forma cuando el agua acepta un H⁺.",
"Ion ___."
],
[
"ANFÓTERO",
"acidobase",
"Sustancia que puede actuar como ácido o como base.",
"El agua es el ejemplo más común.",
"Con el HCl actúa como base y con el NH₃ como ácido."
],
[
"ENCALADO",
"acidobase",
"Agregar cal al suelo para subir su pH.",
"Se usa en los suelos ácidos de la Orinoquía.",
"CaCO₃ + 2 H⁺ → Ca²⁺ + H₂O + CO₂."
],
[
"PEPSINA",
"acidobase",
"Enzima del estómago que digiere las proteínas.",
"Necesita el pH ácido del jugo gástrico.",
"La activa el HCl del estómago."
],
[
"ACIDIFICACIÓN",
"acidobase",
"Le pasa al mar cuando absorbe CO₂.",
"Su pH bajó de unos 8,2 a unos 8,1.",
"Les dificulta a los corales formar su esqueleto."
],
[
"MOL",
"mol-masa",
"Unidad de cantidad de sustancia.",
"Tiene 6,022 × 10²³ partículas.",
"n = m ÷ M."
],
[
"AVOGADRO",
"mol-masa",
"Su número es 6,022 × 10²³.",
"También tiene una ley: volúmenes iguales de gases, igual número de moléculas.",
"Número de ___."
],
[
"MASA MOLAR",
"mol-masa",
"Masa de un mol de una sustancia.",
"Se mide en g/mol.",
"Para el H₂O es de unos 18 g/mol."
],
[
"LIMITANTE",
"estequiometria",
"Reactivo que se acaba primero.",
"Decide cuánto producto se forma.",
"Reactivo ___."
],
[
"RENDIMIENTO",
"industria",
"Masa real ÷ masa teórica × 100.",
"Se expresa en porcentaje.",
"Si es 95 %, se perdió una parte del producto."
],
[
"PUREZA",
"industria",
"Porcentaje de sustancia útil en una materia prima.",
"Una caliza puede tener 90 % de CaCO₃.",
"Se corrige multiplicando la masa por ese porcentaje."
],
[
"AMONÍACO",
"industria",
"Producto del proceso Haber.",
"N₂ + 3 H₂ → 2 NH₃.",
"Con él se fabrican fertilizantes para el campo."
],
[
"CALCINACIÓN",
"industria",
"Calentar la caliza a unos 900 °C.",
"CaCO₃ → CaO + CO₂.",
"Así se obtiene la cal viva para el cemento."
],
[
"ELECTRÓLISIS",
"industria",
"Separar sustancias con corriente eléctrica.",
"De la salmuera salen NaOH, Cl₂ y H₂.",
"Proceso cloro-soda con la sal de Zipaquirá."
],
[
"ESTEQUIOMETRÍA",
"estequiometria",
"Cálculo de las cantidades en una reacción.",
"Usa la razón molar de la ecuación balanceada.",
"Se resuelve con cadenas de factores de conversión."
],
[
"PRESIÓN",
"gases",
"Resulta de los choques de las partículas contra las paredes.",
"Se mide en atm, mmHg o kPa.",
"En Bogotá es de unos 0,74 atm."
],
[
"KELVIN",
"gases",
"Escala de temperatura absoluta.",
"K = °C + 273.",
"En ella el cero absoluto vale 0."
],
[
"BOYLE",
"gases",
"Ley: a temperatura constante, P × V es constante.",
"La presión y el volumen son inversamente proporcionales.",
"Ley de ___ (1662)."
],
[
"CHARLES",
"gases",
"Ley: a presión constante, V/T es constante.",
"Por ella un globo que se deja al sol se infla.",
"Ley de ___ (1787)."
],
[
"DALTON",
"gases",
"Ley de las presiones parciales.",
"P total = P₁ + P₂ + …",
"Explica por qué en el páramo te cansas más."
],
[
"CERO ABSOLUTO",
"gases",
"Equivale a −273 °C.",
"Ahí llega a V = 0 la recta de la ley de Charles.",
"Es 0 K."
],
[
"GAS IDEAL",
"gases",
"Modelo de partículas muy pequeñas que no se atraen.",
"Cumple PV = nRT.",
"Los gases reales se le parecen a bajas presiones."
],
[
"SOLUTO",
"soluciones",
"Sustancia que se disuelve.",
"Suele estar en menor cantidad.",
"En el suero fisiológico es el NaCl."
],
[
"SOLVENTE",
"soluciones",
"Sustancia que disuelve.",
"Suele estar en mayor cantidad.",
"El agua es el más común."
],
[
"SATURADA",
"soluciones",
"Solución que ya no admite más soluto.",
"Su punto está sobre la curva de solubilidad.",
"Lo que sobra se queda en el fondo."
],
[
"SOLUBILIDAD",
"soluciones",
"Máxima cantidad de soluto que se puede disolver.",
"Se mide en gramos por 100 g de agua.",
"La del KNO₃ aumenta mucho con la temperatura."
],
[
"MOLARIDAD",
"soluciones",
"Moles de soluto por litro de solución.",
"Se escribe con la letra M.",
"El HCl 0,1 M del laboratorio usa esta unidad."
],
[
"MOLALIDAD",
"soluciones",
"Moles de soluto por kilogramo de solvente.",
"Se escribe con la letra m minúscula.",
"No cambia con la temperatura."
],
[
"DILUCIÓN",
"soluciones",
"Agregar solvente para bajar la concentración.",
"C₁V₁ = C₂V₂.",
"Los moles de soluto no cambian."
],
[
"HIDRATACIÓN",
"soluciones",
"Capa de moléculas de agua alrededor de un ion.",
"El O del agua mira hacia el Na⁺.",
"Mantiene separados los iones disueltos."
],
[
"CRISTALIZACIÓN",
"soluciones",
"Formación de cristales al enfriar una solución saturada.",
"Sirve para purificar sustancias.",
"Al enfriar KNO₃ de 60 °C a 20 °C aparecen 48,4 g de cristales."
],
[
"HIPÓTESIS",
"modelos",
"Predicción que se puede poner a prueba.",
"«Si caliento el globo, se inflará más.»",
"Es el primer paso del laboratorio de Boyle."
],
[
"TEORÍA",
"modelos",
"Explica por qué ocurre algo, con muchas evidencias.",
"La cinético-molecular es una.",
"No es «una idea sin pruebas»."
],
[
"LEY",
"modelos",
"Describe lo que ocurre siempre en ciertas condiciones.",
"P × V = constante es una.",
"Dice qué pasa, pero no por qué."
],
[
"MODELO",
"modelos",
"Representación que explica y predice.",
"Las bolitas que rebotan en la jeringa son uno.",
"El dibujo del átomo de Bohr es uno."
],
[
"EXTRAPOLAR",
"modelos",
"Predecir fuera del rango de los datos.",
"Es más arriesgado que interpolar.",
"Usar datos de 0 a 3000 m para predecir en un nevado."
],
[
"INTERPOLAR",
"modelos",
"Predecir dentro del rango de los datos.",
"Es más confiable que extrapolar.",
"Lo contrario de extrapolar."
]
];

/* Grupos de temas del Ahorcado y de la Sopa de letras (generador docente):
   [id, rótulo, temas de BANCO_AHORCADO]. */
window.AHORCADO_SITIO='IonNom';
window.AHORCADO_GRUPOS=[
['atomo','⚛️ Átomo y configuración',['atomo','config-e']],
['tabla','📊 Tabla periódica y enlace',['elemento','enlace']],
['nom','🏷️ Nomenclatura',['ox-bas','anhid','base','hidru','ac-ox','ac-hid','sal-ox','sal-bin','sal-ac']],
['rx','⚗️ Reacciones y pH',['reaccion','balanceo','acidobase']],
['calc','🧮 Mol, estequiometría e industria',['mol-masa','estequiometria','industria']],
['gas','🎈 Gases y soluciones',['gases','soluciones']],
['mod','🔭 Modelos y datos',['modelos']]
];

/* Marca del sitio para las hojas impresas (Ahorcado y Sopa de letras):
   mismo logo, marca de agua y pie que los crucigramas y laberintos. */
window.HOJA_SITIO={logo:'assets/logo-ionom-hoja.png',marca:'assets/marca-ionom.png',nombre:'IonNom',pie:'<span class="m">Ion<b>Nom</b> · Nombra con precisión</span><span>© 2026 Harvey Bárcenas Morales · Licencia CC BY-NC 4.0</span>'};
