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
],
[
"NÚMERO ATÓMICO",
"atomo",
"Número de protones de un átomo.",
"Define de qué elemento se trata.",
"Se escribe Z; para el carbono es 6."
],
[
"THOMSON",
"atomo",
"Científico que descubrió el electrón.",
"Usó el tubo de rayos catódicos.",
"Su modelo fue reemplazado por el de Rutherford."
],
[
"NIVEL",
"config-e",
"Capa de energía donde están los electrones.",
"Se numera con n = 1, 2, 3…",
"Bohr propuso que los electrones giran en ellos."
],
[
"SUBNIVEL",
"config-e",
"División de un nivel de energía: s, p, d o f.",
"El p admite hasta 6 electrones.",
"El 4s se llena antes que el 3d."
],
[
"CUÁNTICOS",
"config-e",
"Números que describen a cada electrón del átomo.",
"Son cuatro: n, l, mₗ y s.",
"Números ___."
],
[
"EXCITADO",
"atomo",
"Estado de un electrón que subió a un nivel de mayor energía.",
"Al volver a su nivel emite luz.",
"Lo contrario del estado fundamental."
],
[
"METAL",
"elemento",
"Elemento brillante que conduce la electricidad.",
"Está a la izquierda de la escalera de la tabla.",
"Tiende a perder electrones y formar cationes."
],
[
"NO METAL",
"elemento",
"Elemento a la derecha de la escalera de la tabla.",
"Tiende a ganar electrones.",
"El cloro y el oxígeno lo son."
],
[
"GASES NOBLES",
"elemento",
"Elementos del grupo 18.",
"Ya cumplen la regla del octeto.",
"El helio, el neón y el argón."
],
[
"IONIZACIÓN",
"elemento",
"Proceso en que un átomo pierde un electrón y queda como ion.",
"Su energía aumenta hacia la derecha del periodo.",
"Energía de ___."
],
[
"RADIO",
"elemento",
"Distancia del núcleo al último nivel de un átomo.",
"Aumenta hacia abajo en un grupo.",
"___ atómico."
],
[
"BLOQUE",
"elemento",
"Zona de la tabla según el último subnivel que se llena.",
"Los hay s, p, d y f.",
"El sodio está en el s."
],
[
"APOLAR",
"enlace",
"Enlace covalente con ΔEN menor que 0,4.",
"Es el de la molécula de H₂.",
"Los dos átomos atraen igual los electrones."
],
[
"TRANSFERENCIA",
"enlace",
"Paso de electrones de un metal a un no metal.",
"Ocurre en el enlace iónico.",
"Así se forma el NaCl."
],
[
"PAULING",
"enlace",
"Científico de la escala de electronegatividad más usada.",
"En su escala, el flúor vale 3,98.",
"Escala de ___."
],
[
"SAL BINARIA",
"sal-bin",
"Compuesto de un metal y un no metal, sin oxígeno.",
"El NaCl es una.",
"Su nombre termina en -uro."
],
[
"SAL ÁCIDA",
"sal-ac",
"Sal que conserva hidrógeno del ácido.",
"El NaHCO₃ es una.",
"Se forma con un ácido que no perdió todos sus H."
],
[
"ICO",
"ox-bas",
"Sufijo del estado de oxidación mayor en la nomenclatura tradicional.",
"Como en «óxido férrico».",
"Lo contrario de -oso."
],
[
"OSO",
"ox-bas",
"Sufijo del estado de oxidación menor en la nomenclatura tradicional.",
"Como en «óxido ferroso».",
"Lo contrario de -ico."
],
[
"HIPO",
"ac-ox",
"Prefijo del estado de oxidación más bajo cuando hay cuatro.",
"Como en «ácido hipocloroso».",
"Va con el sufijo -oso."
],
[
"PER",
"ac-ox",
"Prefijo del estado de oxidación más alto cuando hay cuatro.",
"Como en «ácido perclórico».",
"Va con el sufijo -ico."
],
[
"ATO",
"sal-ox",
"Terminación del anión de un ácido terminado en -ico.",
"El SO₄²⁻ es el sulfato.",
"Ácido sulfúrico → sulf___."
],
[
"ITO",
"sal-ox",
"Terminación del anión de un ácido terminado en -oso.",
"El SO₃²⁻ es el sulfito.",
"Ácido sulfuroso → sulf___."
],
[
"PREFIJO",
"ox-bas",
"Parte del nombre sistemático que dice cuántos átomos hay.",
"Mono-, di-, tri-, tetra-…",
"En «trióxido» es tri-."
],
[
"CARGA",
"ox-bas",
"Valor que se cruza para obtener los subíndices de una fórmula.",
"La del oxígeno en los óxidos es −2.",
"Cruce de ___s."
],
[
"SULFATO",
"sal-ox",
"Anión SO₄²⁻.",
"Viene del ácido sulfúrico.",
"El CuSO₄ es el ___ de cobre."
],
[
"NITRATO",
"sal-ox",
"Anión NO₃⁻.",
"Viene del ácido nítrico.",
"El KNO₃ es el ___ de potasio."
],
[
"CARBONATO",
"sal-ox",
"Anión CO₃²⁻.",
"Está en la caliza y en la cáscara de huevo.",
"El CaCO₃ es el ___ de calcio."
],
[
"CLORURO",
"sal-bin",
"Anión Cl⁻.",
"Viene del ácido clorhídrico.",
"El NaCl es el ___ de sodio."
],
[
"REACTIVO",
"reaccion",
"Sustancia que se transforma en una reacción.",
"Se escribe a la izquierda de la flecha.",
"Lo contrario de producto."
],
[
"PRODUCTO",
"reaccion",
"Sustancia que se forma en una reacción.",
"Se escribe a la derecha de la flecha.",
"Lo contrario de reactivo."
],
[
"SUSTITUCIÓN",
"reaccion",
"Un elemento reemplaza a otro en un compuesto.",
"Puede ser simple o doble.",
"Zn + CuSO₄ → ZnSO₄ + Cu es una ___ simple."
],
[
"BALANCEO",
"balanceo",
"Ajuste de coeficientes para que haya los mismos átomos a cada lado.",
"Cumple la conservación de la masa.",
"Se hace por tanteo o por el método algebraico."
],
[
"TANTEO",
"balanceo",
"Método de balanceo por ensayo y error.",
"Se prueban coeficientes hasta igualar los átomos.",
"Lo contrario del método algebraico."
],
[
"POH",
"acidobase",
"Medida de la concentración de OH⁻ de una solución.",
"Sumado al pH da 14, a 25 °C.",
"pOH = −log[OH⁻]."
],
[
"NEUTRO",
"acidobase",
"Ni ácido ni básico.",
"Su pH es 7.",
"El agua pura lo es."
],
[
"BICARBONATO",
"acidobase",
"Base suave que neutraliza los ácidos de la boca y del intestino.",
"La saliva y el páncreas lo usan.",
"HCO₃⁻."
],
[
"LLUVIA ÁCIDA",
"acidobase",
"Lluvia con un pH menor que 5,6.",
"La causan el SO₂ y los NOₓ de la quema de carbón y diésel.",
"Daña los páramos y los monumentos de piedra caliza."
],
[
"ANTIÁCIDO",
"acidobase",
"Base que alivia la acidez estomacal.",
"La leche de magnesia es uno.",
"Mg(OH)₂ + 2 HCl → MgCl₂ + 2 H₂O."
],
[
"FACTOR",
"estequiometria",
"Fracción que convierte unas unidades en otras.",
"Se encadenan en la estequiometría.",
"___ de conversión."
],
[
"EXCESO",
"estequiometria",
"Reactivo que sobra al terminar la reacción.",
"En el ejemplo del amoníaco era el H₂.",
"Reactivo en ___."
],
[
"TEÓRICO",
"industria",
"Rendimiento que se calcula con la ecuación.",
"Casi nunca se obtiene completo.",
"Rendimiento ___."
],
[
"CALIZA",
"industria",
"Roca de CaCO₃ de las canteras.",
"Se calcina para hacer cal y cemento.",
"Libera CO₂ al calentarla."
],
[
"CEMENTO",
"industria",
"Material de construcción hecho con cal viva.",
"Se fabrica calcinando caliza.",
"Su producción libera mucho CO₂."
],
[
"HABER",
"industria",
"Proceso para fabricar amoníaco.",
"N₂ + 3 H₂ → 2 NH₃.",
"Usa un catalizador de hierro."
],
[
"ALTO HORNO",
"industria",
"Lugar donde se reduce el mineral de hierro.",
"Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂.",
"Allí se obtiene el hierro para el acero."
],
[
"SALMUERA",
"industria",
"Agua con mucha sal disuelta.",
"Su electrólisis da NaOH, Cl₂ y H₂.",
"Proceso cloro-soda."
],
[
"COAGULANTE",
"industria",
"Sustancia que se agrega al agua para formar un sólido que atrapa la suciedad.",
"Se usa en las plantas de potabilización.",
"Forma un precipitado gelatinoso."
],
[
"RAZÓN MOLAR",
"estequiometria",
"Relación entre los coeficientes de una ecuación balanceada.",
"En N₂ + 3 H₂ → 2 NH₃ es 1 : 3 : 2.",
"Sirve para pasar de los moles de una sustancia a los de otra."
],
[
"VOLUMEN",
"gases",
"Espacio que ocupa un gas.",
"Se mide en L o en mL.",
"Según Boyle, baja si la presión sube."
],
[
"TEMPERATURA",
"gases",
"Variable de los gases que se mide en kelvin.",
"K = °C + 273.",
"Según Charles, si sube, el volumen sube."
],
[
"CONCENTRACIÓN",
"soluciones",
"Cantidad de soluto en una cantidad de solución.",
"Se expresa en %, ppm, M, m…",
"Baja al diluir."
],
[
"PPM",
"soluciones",
"Unidad de concentración: miligramos por litro, en agua.",
"Partes por millón.",
"El cloro del agua potable va de 0,3 a 2,0."
],
[
"SUERO",
"soluciones",
"Solución de NaCl al 0,9 % m/v.",
"Su molaridad es 0,154 M.",
"___ fisiológico."
],
[
"INSATURADA",
"soluciones",
"Solución que todavía admite más soluto.",
"Su punto está bajo la curva de solubilidad.",
"Lo contrario de saturada."
],
[
"NORMALIDAD",
"soluciones",
"Concentración en equivalentes por litro.",
"El H₂SO₄ 1 M es 2 N.",
"Se escribe con la letra N."
],
[
"SOLUCIÓN",
"soluciones",
"Mezcla homogénea de un soluto y un solvente.",
"El suero y el alcohol antiséptico lo son.",
"Se prepara en un balón aforado."
],
[
"VARIABLE",
"modelos",
"Lo que puede cambiar en un experimento.",
"Puede ser independiente, dependiente o controlada.",
"La presión lo es en el experimento de la jeringa."
],
[
"INDEPENDIENTE",
"modelos",
"Variable que el investigador cambia a propósito.",
"En la jeringa es la presión.",
"Variable ___."
],
[
"DEPENDIENTE",
"modelos",
"Variable que se mide en el experimento.",
"En la jeringa es el volumen.",
"Variable ___."
],
[
"CONTROLADA",
"modelos",
"Variable que se mantiene igual en el experimento.",
"En la jeringa, la temperatura.",
"Variable ___."
],
[
"GRÁFICA",
"modelos",
"Dibujo que muestra la relación entre dos variables.",
"La de P contra 1/V es una recta.",
"Se hace con los datos de la tabla."
],
[
"DATOS",
"modelos",
"Medidas que se registran en un experimento.",
"Se organizan en una tabla.",
"Con ellos se construye un modelo."
],
[
"PROMEDIO",
"modelos",
"Valor que resulta de sumar las medidas y dividir entre cuántas son.",
"Se calcula con las medidas de P × V.",
"Resume varias medidas en un solo número."
],
[
"EVIDENCIA",
"modelos",
"Dato que apoya o rechaza una idea.",
"Una teoría está respaldada por muchas.",
"Sin ella, una idea es solo una suposición."
],
[
"PREDICCIÓN",
"modelos",
"Lo que un modelo dice que va a pasar.",
"Se compara con una medida.",
"Con la recta se hace una para Popayán."
],
[
"MEDICIÓN",
"modelos",
"Proceso de obtener un dato con un instrumento.",
"Siempre trae un pequeño error.",
"El termómetro sirve para hacerla."
],
[
"JERINGA",
"modelos",
"Instrumento del laboratorio virtual de Boyle.",
"Se aprieta para cambiar la presión.",
"Contiene aire a 20 °C."
],
[
"IDEAM",
"modelos",
"Entidad que publica los datos de las estaciones meteorológicas de Colombia.",
"Sus registros sirven para estudiar el clima.",
"Datos históricos del territorio."
],
[
"CINÉTICA",
"modelos",
"Teoría ___-molecular, que explica los gases como partículas en movimiento.",
"Explica por qué se cumple la ley de Boyle.",
"Teoría ___-molecular."
],
[
"PENDIENTE",
"modelos",
"Inclinación de la recta de un modelo lineal.",
"En el modelo de ebullición se ajusta para que la recta pase cerca de los puntos.",
"Se mide en °C por cada 1000 m."
],
[
"ALTITUD",
"modelos",
"Altura sobre el nivel del mar.",
"A más altitud, el agua hierve a menor temperatura.",
"Bogotá está a unos 2640 m."
],
[
"EBULLICIÓN",
"modelos",
"Paso de líquido a vapor cuando el líquido hierve.",
"En Bogotá el agua lo hace a unos 91 °C.",
"Punto de ___."
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

/* Historias del «Detective químico» (extras.js): [grupo, título, partes].
   Cada parte es texto fijo o [versión correcta, versión con error]; cada hoja
   elige al azar cuáles puntos dudosos salen con error. Basadas en lo que
   explican las páginas del sitio. */
window.DETECTIVE=[
[
"atomo",
"La maqueta del átomo",
[
"Para la feria de ciencias, Camila armó una maqueta del átomo.",
[
"Puso los protones y los neutrones en el núcleo, y los electrones alrededor.",
"Puso los protones y los electrones en el núcleo, y los neutrones alrededor."
],
[
"Explicó que Rutherford descubrió el núcleo con el experimento de la lámina de oro.",
"Explicó que Thomson descubrió el núcleo con el experimento de la lámina de oro."
],
[
"Para el sodio-23, con Z = 11, contó 11 protones y 12 neutrones.",
"Para el sodio-23, con Z = 11, contó 11 protones y 23 neutrones."
],
[
"Al ion Na⁺ le quitó un electrón, porque un catión pierde electrones.",
"Al ion Na⁺ le agregó un electrón, porque un catión gana electrones."
],
[
"Mostró que el carbono-12 y el carbono-14 son isótopos: tienen el mismo Z y distinto A.",
"Mostró que el carbono-12 y el carbono-14 son isótopos: tienen distinto Z y el mismo A."
],
"Luego escribió la configuración electrónica del potasio, con Z = 19.",
[
"Siguiendo el diagrama de Moeller, llenó el 4s antes que el 3d: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹.",
"Siguiendo el diagrama de Moeller, llenó el 3d antes que el 4s: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹."
],
[
"Recordó que en un orbital caben como máximo 2 electrones, con espines opuestos.",
"Recordó que en un orbital caben hasta 8 electrones con el mismo espín."
],
"Su maqueta ganó el primer puesto."
]
],
[
"atomo",
"La historia del átomo en una línea del tiempo",
[
"Para la clase de historia de la ciencia, Daniela hizo una línea del tiempo del átomo.",
[
"Dalton imaginó el átomo como una esfera maciza e indivisible.",
"Dalton imaginó el átomo con un núcleo pequeño y electrones girando."
],
[
"Thomson descubrió el electrón con el tubo de rayos catódicos.",
"Thomson descubrió el neutrón con el tubo de rayos catódicos."
],
[
"En el experimento de Rutherford, la mayoría de las partículas atravesó la lámina de oro sin desviarse.",
"En el experimento de Rutherford, la mayoría de las partículas rebotó en la lámina de oro."
],
[
"De ahí concluyó que el átomo es casi todo espacio vacío, con un núcleo pequeño y positivo.",
"De ahí concluyó que el átomo es una masa compacta, sin espacios vacíos."
],
[
"Bohr propuso que los electrones giran en niveles de energía fijos.",
"Bohr propuso que los electrones pueden estar a cualquier distancia del núcleo."
],
[
"Cuando un electrón excitado vuelve a su nivel, emite luz.",
"Cuando un electrón excitado vuelve a su nivel, absorbe luz."
],
[
"El número atómico Z es el número de protones del átomo.",
"El número atómico Z es el número de neutrones del átomo."
],
[
"El número de masa A es la suma de protones y neutrones.",
"El número de masa A es la suma de protones y electrones."
],
"Su línea del tiempo quedó colgada en el pasillo."
]
],
[
"atomo",
"El código de los electrones",
[
"Esteban practicó configuraciones electrónicas con su compañero Simón.",
[
"El subnivel s admite 2 electrones y el p, 6.",
"El subnivel s admite 6 electrones y el p, 2."
],
[
"El subnivel d admite hasta 10 electrones.",
"El subnivel d admite hasta 14 electrones."
],
[
"Para el oxígeno, con Z = 8, escribieron 1s² 2s² 2p⁴.",
"Para el oxígeno, con Z = 8, escribieron 1s² 2s² 2p⁶."
],
[
"El oxígeno tiene 6 electrones de valencia.",
"El oxígeno tiene 8 electrones de valencia."
],
[
"Según la regla de Hund, en el 2p los electrones ocupan primero orbitales vacíos con el mismo espín.",
"Según la regla de Hund, en el 2p los electrones se aparean primero en un mismo orbital."
],
"Luego hablaron de los números cuánticos.",
[
"El número cuántico principal n indica el nivel de energía.",
"El número cuántico principal n indica el espín del electrón."
],
[
"Dos electrones de un mismo átomo no pueden tener los cuatro números cuánticos iguales.",
"Dos electrones de un mismo átomo pueden tener los cuatro números cuánticos iguales si están en el mismo orbital."
],
[
"El ion Cl⁻ tiene un electrón más que el átomo de cloro.",
"El ion Cl⁻ tiene un electrón menos que el átomo de cloro."
],
"Al final, Simón ya escribía configuraciones sin mirar el diagrama."
]
],
[
"tabla",
"Un recorrido por la tabla periódica",
[
"Juan recorrió con el dedo la tabla periódica del salón.",
[
"Las filas horizontales son los periodos, y las columnas, los grupos.",
"Las filas horizontales son los grupos, y las columnas, los periodos."
],
[
"En el grupo 1 están los metales alcalinos, muy reactivos con el agua.",
"En el grupo 17 están los metales alcalinos, muy reactivos con el agua."
],
[
"El flúor es el elemento con la mayor electronegatividad.",
"El sodio es el elemento con la mayor electronegatividad."
],
[
"En un periodo, el radio atómico disminuye hacia la derecha.",
"En un periodo, el radio atómico aumenta hacia la derecha."
],
"Después Juan analizó la sal de cocina, NaCl.",
[
"Entre el sodio y el cloro la ΔEN es mayor que 1,7: el enlace es iónico.",
"Entre el sodio y el cloro la ΔEN es menor que 0,4: el enlace es covalente apolar."
],
[
"En el HCl, el cloro atrae más los electrones compartidos: es un enlace covalente polar.",
"En el HCl, los dos átomos atraen igual los electrones compartidos: es un enlace covalente apolar."
],
[
"El cobre de los cables tiene enlace metálico, con un «mar de electrones» que conduce la electricidad.",
"El cobre de los cables tiene enlace iónico, y por eso conduce la electricidad."
],
[
"Mendeléiev ordenó los elementos en 1869 y dejó huecos para los que faltaban por descubrir.",
"Mendeléiev ordenó los elementos en 1969 y no dejó huecos."
],
"Juan entendió que la posición de un elemento predice cómo se enlaza."
]
],
[
"tabla",
"El juego de las cartas de elementos",
[
"Mariana inventó un juego de cartas con los elementos de la tabla periódica.",
[
"Las cartas de los metales decían «brillante y buen conductor de la electricidad».",
"Las cartas de los metales decían «opaco y mal conductor de la electricidad»."
],
[
"Los metales están a la izquierda de la escalera de la tabla, y los no metales, a la derecha.",
"Los metales están a la derecha de la escalera de la tabla, y los no metales, a la izquierda."
],
[
"Los gases nobles, del grupo 18, casi no reaccionan porque ya tienen el octeto completo.",
"Los gases nobles, del grupo 18, son los más reactivos de la tabla."
],
[
"El radio atómico aumenta hacia abajo en un grupo, porque hay más niveles.",
"El radio atómico disminuye hacia abajo en un grupo, porque hay más niveles."
],
[
"La energía de ionización aumenta hacia la derecha de un periodo.",
"La energía de ionización disminuye hacia la derecha de un periodo."
],
[
"Los halógenos están en el grupo 17 y tienden a ganar un electrón.",
"Los halógenos están en el grupo 1 y tienden a perder un electrón."
],
[
"El sodio está en el bloque s, porque su último electrón entra en un orbital s.",
"El sodio está en el bloque d, porque es un metal."
],
[
"En la escala de Pauling, el flúor tiene el valor más alto: 3,98.",
"En la escala de Pauling, el cesio tiene el valor más alto: 3,98."
],
"El juego se volvió el favorito del recreo."
]
],
[
"tabla",
"Los enlaces del agua y la sal",
[
"Andrea quiso entender por qué la sal se disuelve en agua y el aceite no.",
[
"En el NaCl, el sodio le transfiere un electrón al cloro: el enlace es iónico.",
"En el NaCl, el sodio y el cloro comparten un par de electrones: el enlace es covalente."
],
[
"Los compuestos iónicos tienen puntos de fusión altos.",
"Los compuestos iónicos tienen puntos de fusión muy bajos."
],
[
"La sal sólida no conduce la electricidad, pero disuelta en agua sí.",
"La sal sólida conduce muy bien la electricidad, pero disuelta en agua no."
],
[
"En la molécula de H₂ el enlace es covalente apolar, porque los dos átomos son iguales.",
"En la molécula de H₂ el enlace es iónico, porque los dos átomos son iguales."
],
[
"En el agua, el oxígeno atrae más los electrones: el enlace O−H es covalente polar.",
"En el agua, el hidrógeno atrae más los electrones: el enlace O−H es covalente apolar."
],
[
"Si la diferencia de electronegatividad es menor que 0,4, el enlace es covalente apolar.",
"Si la diferencia de electronegatividad es menor que 0,4, el enlace es iónico."
],
[
"En la estructura de Lewis del agua, el oxígeno tiene dos pares de electrones sin compartir.",
"En la estructura de Lewis del agua, el oxígeno no tiene pares de electrones sin compartir."
],
[
"El enlace metálico explica que los metales se puedan doblar sin romperse.",
"El enlace iónico explica que los metales se puedan doblar sin romperse."
],
"Andrea concluyó que el tipo de enlace explica las propiedades."
]
],
[
"nom",
"Las etiquetas del laboratorio",
[
"El laboratorio necesitaba etiquetas nuevas y Sofía se ofreció a escribirlas.",
[
"Para el Fe₂O₃ escribió «óxido de hierro (III)» en Stock y «óxido férrico» en tradicional.",
"Para el Fe₂O₃ escribió «óxido de hierro (II)» en Stock y «óxido ferroso» en tradicional."
],
[
"En la nomenclatura sistemática, el Fe₂O₃ se llama trióxido de dihierro.",
"En la nomenclatura sistemática, el Fe₂O₃ se llama dióxido de trihierro."
],
[
"En la tradicional, el sufijo -oso indica el estado de oxidación menor.",
"En la tradicional, el sufijo -oso indica el estado de oxidación mayor."
],
[
"El NaOH es un hidróxido: un metal con el grupo OH⁻.",
"El NaOH es un óxido ácido: un no metal con oxígeno."
],
[
"El HCl gaseoso se llama cloruro de hidrógeno y, disuelto en agua, ácido clorhídrico.",
"El HCl gaseoso se llama ácido clorhídrico y, disuelto en agua, cloruro de hidrógeno."
],
[
"El H₂SO₄ es un oxácido, porque tiene hidrógeno, un no metal y oxígeno.",
"El H₂SO₄ es un hidrácido, porque tiene hidrógeno, un no metal y oxígeno."
],
[
"El NaCl es una sal binaria y el CaCO₃ de la caliza es una oxisal.",
"El NaCl es una oxisal y el CaCO₃ de la caliza es una sal binaria."
],
[
"El NaH es un hidruro metálico, con el hidrógeno al final de la fórmula.",
"El NaH es un ácido hidrácido, con el hidrógeno al final de la fórmula."
],
"Al final, cada frasco quedó con su nombre correcto."
]
],
[
"nom",
"El inventario de la bodega",
[
"Felipe hizo el inventario de los reactivos de la bodega del colegio.",
[
"El CaO, la cal viva, es un óxido básico: un metal con oxígeno.",
"El CaO, la cal viva, es un óxido ácido: un no metal con oxígeno."
],
[
"El CO₂ es un óxido ácido; en la sistemática se llama dióxido de carbono.",
"El CO₂ es un óxido básico; en la sistemática se llama monóxido de dicarbono."
],
[
"El Ca(OH)₂ se llama hidróxido de calcio.",
"El Ca(OH)₂ se llama óxido de calcio."
],
[
"El HNO₃ es el ácido nítrico, y su anión NO₃⁻ se llama nitrato.",
"El HNO₃ es el ácido nítrico, y su anión NO₃⁻ se llama nitrito."
],
[
"Un anión terminado en -ito viene de un ácido terminado en -oso.",
"Un anión terminado en -ito viene de un ácido terminado en -ico."
],
[
"En la tradicional, si un no metal tiene cuatro estados, el más alto lleva per- e -ico.",
"En la tradicional, si un no metal tiene cuatro estados, el más alto lleva hipo- y -oso."
],
[
"El CuSO₄ es una oxisal: el sulfato de cobre (II).",
"El CuSO₄ es una sal binaria: el sulfuro de cobre (II)."
],
[
"El NaHCO₃ es una sal ácida, porque conserva un hidrógeno del ácido.",
"El NaHCO₃ es una sal binaria, porque conserva un hidrógeno del ácido."
],
"El inventario quedó listo para la próxima práctica."
]
],
[
"nom",
"Escribiendo fórmulas con cruce de cargas",
[
"Valeria explicó a su grupo cómo escribir fórmulas cruzando las cargas.",
[
"Para el óxido de aluminio cruzó Al³⁺ y O²⁻ y obtuvo Al₂O₃.",
"Para el óxido de aluminio cruzó Al³⁺ y O²⁻ y obtuvo Al₃O₂."
],
[
"La suma de las cargas de una fórmula siempre da cero.",
"La suma de las cargas de una fórmula siempre da +1."
],
[
"Para el cloruro de magnesio, con Mg²⁺ y Cl⁻, escribió MgCl₂.",
"Para el cloruro de magnesio, con Mg²⁺ y Cl⁻, escribió Mg₂Cl."
],
[
"En el nombre sistemático, el prefijo tri- indica tres átomos.",
"En el nombre sistemático, el prefijo tri- indica cuatro átomos."
],
[
"En la nomenclatura Stock, el estado de oxidación se escribe en números romanos.",
"En la nomenclatura Stock, el estado de oxidación se escribe con prefijos griegos."
],
[
"El FeO se llama óxido ferroso, porque el hierro usa su estado menor, +2.",
"El FeO se llama óxido férrico, porque el hierro usa su estado menor, +2."
],
[
"Los hidrácidos, como el HCl o el H₂S, no tienen oxígeno.",
"Los hidrácidos, como el HCl o el H₂S, siempre tienen oxígeno."
],
[
"Las sales binarias, como el NaCl, terminan su nombre en -uro.",
"Las sales binarias, como el NaCl, terminan su nombre en -ato."
],
"Su grupo sacó la nota más alta en el quiz."
]
],
[
"rx",
"La práctica de reacciones y pH",
[
"En la práctica de laboratorio, el grupo de Mateo probó varias reacciones.",
[
"Al quemar gas propano obtuvieron CO₂ y agua: una combustión.",
"Al quemar gas propano obtuvieron CO₂ y agua: una descomposición."
],
[
"Al calentar la caliza se formaron cal viva y CO₂: una descomposición.",
"Al calentar la caliza se formaron cal viva y CO₂: una síntesis."
],
[
"Para balancear las ecuaciones cambiaron los coeficientes, nunca los subíndices.",
"Para balancear las ecuaciones cambiaron los subíndices de las fórmulas."
],
"Luego midieron el pH con agua de repollo morado.",
[
"El limón tiñó el indicador de rojo, porque es ácido.",
"El limón tiñó el indicador de verde, porque es ácido."
],
[
"Una solución de pH 3 tiene mil veces más H⁺ que una de pH 6.",
"Una solución de pH 3 tiene el doble de H⁺ que una de pH 6."
],
[
"Al mezclar HCl con NaOH se formaron una sal y agua: una neutralización.",
"Al mezclar HCl con NaOH se formaron un ácido y una base nuevos."
],
[
"El ácido acético del vinagre es débil: solo una parte de sus moléculas suelta el H⁺.",
"El ácido acético del vinagre es fuerte: todas sus moléculas sueltan el H⁺."
],
[
"La profesora recordó que el pH de la sangre se mantiene entre 7,35 y 7,45.",
"La profesora recordó que el pH de la sangre se mantiene entre 5 y 6."
],
"Mateo anotó todo en su bitácora."
]
],
[
"rx",
"La cocina como laboratorio",
[
"Sebastián buscó reacciones químicas en la cocina de su casa.",
[
"La llama de la estufa es una combustión: el gas reacciona con el oxígeno.",
"La llama de la estufa es una descomposición: el gas se separa en sus elementos."
],
[
"Al echar bicarbonato en vinagre salieron burbujas de CO₂: una reacción ácido-base.",
"Al echar bicarbonato en vinagre salieron burbujas de O₂: una combustión."
],
[
"Una reacción de síntesis une dos sustancias en una sola.",
"Una reacción de síntesis separa una sustancia en dos."
],
[
"En una ecuación, los reactivos se escriben a la izquierda de la flecha.",
"En una ecuación, los productos se escriben a la izquierda de la flecha."
],
"Luego midió el pH de varios productos.",
[
"El jabón de manos tenía pH mayor que 7: es básico.",
"El jabón de manos tenía pH menor que 7: es básico."
],
[
"El agua pura tiene pH 7: es neutra.",
"El agua pura tiene pH 0: es neutra."
],
[
"A 25 °C, el pH y el pOH suman 14.",
"A 25 °C, el pH y el pOH suman 7."
],
[
"Un antiácido como la leche de magnesia neutraliza el exceso de ácido del estómago.",
"Un antiácido como la leche de magnesia aumenta la acidez del estómago."
],
"Sebastián concluyó que cocinar es hacer química."
]
],
[
"rx",
"El reporte del río",
[
"El curso tomó muestras de agua de un río cerca del colegio.",
[
"La lluvia ácida tiene un pH menor que 5,6.",
"La lluvia ácida tiene un pH mayor que 8."
],
[
"La lluvia ácida se forma por el SO₂ y los NOₓ de la quema de carbón y diésel.",
"La lluvia ácida se forma por el oxígeno que producen las plantas."
],
[
"Un ácido fuerte se disocia por completo en el agua.",
"Un ácido fuerte solo se disocia en una pequeña parte en el agua."
],
[
"Según Arrhenius, una base libera iones OH⁻ en el agua.",
"Según Arrhenius, una base libera iones H⁺ en el agua."
],
"Luego balancearon la ecuación de la combustión del metano.",
[
"Escribieron CH₄ + 2 O₂ → CO₂ + 2 H₂O.",
"Escribieron CH₄ + O₂ → CO₂ + H₂O, porque ya estaba balanceada."
],
[
"Una ecuación balanceada tiene los mismos átomos de cada elemento a los dos lados.",
"Una ecuación balanceada tiene las mismas moléculas a los dos lados."
],
[
"El balanceo cumple la ley de conservación de la masa.",
"El balanceo no tiene relación con la conservación de la masa."
],
[
"En Zn + CuSO₄ → ZnSO₄ + Cu, el zinc reemplaza al cobre: una sustitución simple.",
"En Zn + CuSO₄ → ZnSO₄ + Cu, el zinc reemplaza al cobre: una doble sustitución."
],
"El informe del río se envió a la alcaldía."
]
],
[
"calc",
"La visita a la cementera",
[
"El curso visitó una cementera de Antioquia.",
[
"El ingeniero explicó que la caliza se calcina así: CaCO₃ → CaO + CO₂.",
"El ingeniero explicó que la caliza se calcina así: CaCO₃ → CaO + O₂."
],
[
"La masa molar del CO₂ es 44 g/mol: 12 + 2 × 16.",
"La masa molar del CO₂ es 28 g/mol: 12 + 16."
],
[
"Un mol de cualquier sustancia tiene 6,022 × 10²³ partículas.",
"Un mol de cualquier sustancia tiene 6,022 × 10²³ gramos."
],
[
"Si la caliza tiene 90 % de CaCO₃, en 1000 kg hay 900 kg de CaCO₃ útil.",
"Si la caliza tiene 90 % de CaCO₃, en 1000 kg hay 1000 kg de CaCO₃ útil."
],
"Luego hablaron del amoníaco para los fertilizantes: N₂ + 3 H₂ → 2 NH₃.",
[
"El reactivo que se acaba primero es el reactivo limitante.",
"El reactivo que sobra al final es el reactivo limitante."
],
[
"Con 1 mol de N₂ se forman 2 mol de NH₃.",
"Con 1 mol de N₂ se forma 1 mol de NH₃."
],
[
"El rendimiento se calcula como masa real ÷ masa teórica × 100.",
"El rendimiento se calcula como masa teórica ÷ masa real × 100."
],
[
"Una ecuación iónica bien escrita conserva la masa y también la carga.",
"Una ecuación iónica bien escrita conserva la masa, aunque la carga cambie."
],
"Los estudiantes salieron con ganas de ser ingenieros químicos."
]
],
[
"calc",
"La receta de las arepas y los moles",
[
"Tatiana usó una receta de arepas para explicar la estequiometría a su hermano.",
[
"Así como la receta dice cuánta harina va por cada taza de agua, la ecuación dice cuántos moles reaccionan.",
"Así como la receta dice cuánta harina va por cada taza de agua, la ecuación dice cuántos gramos exactos reaccionan, sin usar moles."
],
[
"En N₂ + 3 H₂ → 2 NH₃, la razón molar entre N₂ y H₂ es 1 : 3.",
"En N₂ + 3 H₂ → 2 NH₃, la razón molar entre N₂ y H₂ es 3 : 1."
],
[
"La masa molar del agua es 18 g/mol: 2 × 1 + 16.",
"La masa molar del agua es 17 g/mol: 1 + 16."
],
[
"Para pasar de gramos a moles se divide entre la masa molar.",
"Para pasar de gramos a moles se multiplica por la masa molar."
],
[
"36 g de agua son 2 moles de agua.",
"36 g de agua son 36 moles de agua."
],
"Luego le habló del reactivo limitante.",
[
"Si hay harina para 10 arepas y queso para 6, el queso es el limitante.",
"Si hay harina para 10 arepas y queso para 6, la harina es el limitante."
],
[
"El reactivo en exceso es el que sobra cuando termina la reacción.",
"El reactivo en exceso es el que se acaba primero."
],
[
"Los factores de conversión se encadenan para cancelar las unidades.",
"Los factores de conversión se suman para cancelar las unidades."
],
"Su hermano entendió la estequiometría y además comió arepas."
]
],
[
"calc",
"La planta de agua potable",
[
"El curso visitó la planta de tratamiento de agua de la ciudad.",
[
"El ingeniero explicó que agregan un coagulante para formar un sólido que atrapa la suciedad.",
"El ingeniero explicó que agregan un coagulante para disolver la suciedad en el agua."
],
[
"Al final añaden cloro para eliminar los microorganismos.",
"Al final añaden cloro para darle color al agua."
],
"Después hablaron de otras industrias químicas.",
[
"El proceso cloro-soda obtiene NaOH, Cl₂ y H₂ a partir de salmuera.",
"El proceso cloro-soda obtiene azúcar a partir de salmuera."
],
[
"En el proceso Haber se fabrica amoníaco con N₂ e H₂ y un catalizador de hierro.",
"En el proceso Haber se fabrica amoníaco con CO₂ y agua, sin catalizador."
],
[
"En el alto horno, el CO reduce el óxido de hierro y se obtiene hierro metálico.",
"En el alto horno, el CO oxida el hierro metálico y se obtiene óxido de hierro."
],
[
"El rendimiento real casi siempre es menor que el teórico.",
"El rendimiento real casi siempre es mayor que el teórico."
],
[
"Si se esperaban 100 kg y se obtuvieron 80 kg, el rendimiento fue del 80 %.",
"Si se esperaban 100 kg y se obtuvieron 80 kg, el rendimiento fue del 125 %."
],
[
"Calcinar caliza para hacer cemento libera mucho CO₂.",
"Calcinar caliza para hacer cemento absorbe CO₂ del aire."
],
"Los estudiantes valoraron el agua que sale de la llave."
]
],
[
"gas",
"De Cartagena a Bogotá",
[
"Lucía viajó en bus de Cartagena a Bogotá con un paquete de papas en la maleta.",
[
"Al llegar, el paquete estaba inflado porque en Bogotá la presión del aire es menor.",
"Al llegar, el paquete estaba inflado porque en Bogotá la presión del aire es mayor."
],
[
"Para calcularlo usó la ley combinada, con la temperatura en kelvin.",
"Para calcularlo usó la ley combinada, con la temperatura en grados Celsius."
],
[
"Según la ley de Boyle, si la presión baja, el volumen del gas aumenta.",
"Según la ley de Boyle, si la presión baja, el volumen del gas también baja."
],
[
"En Bogotá se cansaba más al subir escaleras, porque la presión parcial del oxígeno es menor.",
"En Bogotá se cansaba más al subir escaleras, porque el aire tiene menos porcentaje de oxígeno."
],
"En la casa de su tía preparó un suero.",
[
"Al disolver la sal, el agua rodeó cada ion: el O hacia el Na⁺ y los H hacia el Cl⁻.",
"Al disolver la sal, el agua rodeó cada ion: los H hacia el Na⁺ y el O hacia el Cl⁻."
],
[
"El suero fisiológico tiene 0,9 g de NaCl por cada 100 mL de solución.",
"El suero fisiológico tiene 0,9 g de NaCl por cada litro de solución."
],
[
"Revolver hizo que la sal se disolviera más rápido, pero no que se disolviera más.",
"Revolver hizo que se pudiera disolver más sal en la misma agua."
],
[
"Al agregar más agua, la concentración bajó, pero los moles de sal siguieron iguales.",
"Al agregar más agua, la concentración bajó porque se perdieron moles de sal."
],
"Lucía comprobó que la química viaja con ella."
]
],
[
"gas",
"El globo de la fiesta",
[
"Para la fiesta de su hermana, Nicolás infló globos y pensó en las leyes de los gases.",
[
"Un globo dejado al sol se infla más: según Charles, si la temperatura sube, el volumen sube.",
"Un globo dejado al sol se desinfla: según Charles, si la temperatura sube, el volumen baja."
],
[
"En las leyes de los gases, la temperatura siempre se usa en kelvin.",
"En las leyes de los gases, la temperatura siempre se usa en grados Celsius."
],
[
"25 °C equivalen a 298 K.",
"25 °C equivalen a 25 K."
],
[
"Según Gay-Lussac, en un recipiente rígido la presión sube si la temperatura sube.",
"Según Gay-Lussac, en un recipiente rígido la presión baja si la temperatura sube."
],
[
"Según Avogadro, a igual presión y temperatura, más moles de gas ocupan más volumen.",
"Según Avogadro, a igual presión y temperatura, más moles de gas ocupan menos volumen."
],
[
"En la ecuación PV = nRT, la n representa los moles del gas.",
"En la ecuación PV = nRT, la n representa la masa del gas en gramos."
],
[
"Las partículas de un gas se mueven más rápido cuando la temperatura aumenta.",
"Las partículas de un gas se mueven más lento cuando la temperatura aumenta."
],
[
"Un gas ocupa todo el volumen del recipiente que lo contiene.",
"Un gas ocupa solo la mitad inferior del recipiente que lo contiene."
],
"La fiesta terminó con todos los globos en el techo."
]
],
[
"gas",
"La enfermería del colegio",
[
"La enfermera del colegio le mostró a Laura las soluciones que usa.",
[
"El alcohol antiséptico es una solución: una mezcla homogénea.",
"El alcohol antiséptico es una mezcla heterogénea, porque se ven dos fases."
],
[
"En una solución, el soluto es lo que se disuelve, y el solvente, lo que disuelve.",
"En una solución, el solvente es lo que se disuelve, y el soluto, lo que disuelve."
],
[
"El suero fisiológico tiene una concentración de 0,154 M de NaCl.",
"El suero fisiológico tiene una concentración de 9 M de NaCl."
],
[
"La molaridad son los moles de soluto por cada litro de solución.",
"La molaridad son los gramos de soluto por cada litro de solvente."
],
[
"Una solución insaturada todavía admite más soluto.",
"Una solución insaturada ya no admite más soluto."
],
"Luego hablaron del agua de la llave.",
[
"El cloro del agua potable se mide en ppm, que en agua equivalen a miligramos por litro.",
"El cloro del agua potable se mide en ppm, que en agua equivalen a gramos por mililitro."
],
[
"Al diluir una solución, los moles de soluto no cambian: C₁V₁ = C₂V₂.",
"Al diluir una solución, los moles de soluto aumentan."
],
[
"Una solución de H₂SO₄ 1 M es 2 N, porque cada molécula aporta dos H⁺.",
"Una solución de H₂SO₄ 1 M es 0,5 N, porque cada molécula aporta dos H⁺."
],
"Laura decidió que quiere estudiar enfermería."
]
],
[
"mod",
"El experimento de la jeringa",
[
"En clase de ciencias, el grupo de Felipe investigó qué le pasa al aire de una jeringa al apretarla.",
[
"Primero escribieron su hipótesis: «si aumenta la presión, el volumen disminuye».",
"Primero escribieron su ley: «si aumenta la presión, el volumen disminuye», aunque todavía no habían medido nada."
],
[
"La presión era la variable independiente, y el volumen, la dependiente.",
"El volumen era la variable independiente, porque era lo que medían."
],
[
"Mantuvieron iguales la temperatura y la cantidad de aire: eran las variables controladas.",
"Cambiaron la temperatura en cada medida para tener más datos."
],
[
"Al multiplicar P × V obtuvieron casi el mismo valor en todas las medidas: la ley de Boyle.",
"Al sumar P + V obtuvieron casi el mismo valor en todas las medidas: la ley de Boyle."
],
[
"La teoría cinético-molecular lo explica: con menos volumen, las partículas chocan más veces contra las paredes.",
"La teoría cinético-molecular lo explica: con menos volumen, las partículas chocan menos veces contra las paredes."
],
"Después usaron un modelo del punto de ebullición del agua según la altitud.",
[
"Predecir para Medellín, dentro del rango de los datos, fue una interpolación.",
"Predecir para Medellín, dentro del rango de los datos, fue una extrapolación."
],
[
"Predecir para la cima de un nevado, fuera del rango, fue más arriesgado: una extrapolación.",
"Predecir para la cima de un nevado, fuera del rango, fue lo más seguro de todo."
],
[
"Felipe concluyó que una teoría no es «una idea sin pruebas»: explica algo con muchas evidencias.",
"Felipe concluyó que una teoría es «una idea que todavía no se ha comprobado»."
],
"El grupo presentó sus resultados con una gráfica de P contra 1/V."
]
],
[
"mod",
"El clima de mi ciudad",
[
"El curso analizó datos de temperatura de una estación del IDEAM.",
[
"Primero organizaron los datos en una tabla, con sus unidades.",
"Primero borraron los datos que no les gustaron."
],
[
"Calcularon el promedio sumando las medidas y dividiendo entre cuántas eran.",
"Calcularon el promedio tomando solo la medida más alta."
],
[
"Con los datos hicieron una gráfica para ver la relación entre las variables.",
"Con los datos hicieron una gráfica sin rótulos ni unidades en los ejes."
],
[
"Toda medición trae un pequeño error, por eso se repiten las medidas.",
"Una medición bien hecha nunca tiene ningún error, por eso basta una sola."
],
"Después compararon el agua hirviendo en distintas ciudades.",
[
"A mayor altitud, el agua hierve a menor temperatura.",
"A mayor altitud, el agua hierve a mayor temperatura."
],
[
"En Bogotá el agua hierve a unos 91 °C.",
"En Bogotá el agua hierve a 120 °C."
],
[
"La pendiente de la recta dice cuántos grados baja la ebullición por cada 1000 m.",
"La pendiente de la recta dice a qué hora hierve el agua."
],
[
"Un modelo sirve para hacer predicciones que luego se comparan con medidas.",
"Un modelo es una verdad que ya no necesita compararse con medidas."
],
"Con su modelo, el curso predijo cuánto tardaría en cocinarse un huevo en el páramo."
]
],
[
"mod",
"La feria de ciencias",
[
"Para la feria de ciencias, Juliana diseñó un experimento con su grupo.",
[
"Empezaron con una pregunta que se pudiera responder midiendo.",
"Empezaron con la conclusión y después buscaron datos que la apoyaran."
],
[
"La hipótesis es una respuesta posible que se pone a prueba.",
"La hipótesis es una ley que ya está comprobada."
],
[
"La variable independiente es la que el investigador cambia a propósito.",
"La variable independiente es la que se mantiene igual en todo el experimento."
],
[
"La variable dependiente es la que se mide.",
"La variable dependiente es la que se cambia a propósito."
],
[
"Las variables controladas se mantienen iguales para que la prueba sea justa.",
"Las variables controladas se cambian al azar en cada medida."
],
"Al final presentaron sus resultados.",
[
"Una evidencia es un dato que apoya o rechaza una idea.",
"Una evidencia es una opinión del grupo sobre el experimento."
],
[
"Predecir dentro del rango de los datos, o interpolar, es más confiable que extrapolar.",
"Predecir fuera del rango de los datos, o extrapolar, es más confiable que interpolar."
],
[
"Una ley describe qué pasa; una teoría explica por qué pasa.",
"Una ley explica por qué pasa algo; una teoría solo es una suposición."
],
"El jurado destacó el orden de su método."
]
]
];
