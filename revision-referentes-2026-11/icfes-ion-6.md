# Informe icfes-ion-6 (IonNom, experto Saber 11 / Icfes)

**Revisadas:** 127. **Coincidencias a ciegas:** 127 de 127. Las 126 preguntas con datos completos coincidieron al resolverlas a ciegas. La 97 («¿Cuál gráfica representa el pH…?») no se puede resolver a ciegas porque las gráficas A–D no vienen en el lote. La verifiqué con los puntos de `opsGraf` en `ionom/assets/docente-datos.js` (solo lectura): la curva A es la correcta y coincide con la clave. Recalculé todas las cifras (pH, pOH, titulaciones, 73, 92, 96, 108–111, 116, 120) y los datos de tablas y gráficas (66, 90, 93, 94): todos sustentan la clave. No hallé claves incorrectas, dobles ni preguntas irresolubles.

## Hallazgos: 32 (0 altos, 29 medios, 3 bajos)
- **Etiquetas c/af (21, media):** 1; 6; 9; 11; 13; 19; 38; 39; 40; 45; 77; 97; 112; y 107, 108, 109, 111, 115, 116 (cálculos de reacción, evidencia 4.6, I2). La mayoría son preguntas con `af_escrita: false` (afirmación puesta por regla automática).
- **Correcta más larga (5, media):** 50, 119, 121, 126 (se acortan). En el lote la correcta es la opción más larga en 61 de 127 preguntas (48 %, frente a 25 % esperado). Solo estas cuatro lo son de forma muy evidente, y las demás no se tocaron.
- **Explicaciones con posición ordinal (5, media):** 91 a 96 citan «la segunda/tercera/cuarta opción», pero el juego baraja las opciones, así que la referencia queda errónea. Se cita cada opción por su contenido. La 97 cita letras de gráficas fijas, por lo que está bien.
- **Redacción (3, baja):** 7 («Ninguna» como distractor), 20 (83,5 °C debe ser 83,3 °C según la pendiente de la gráfica), 124 («3H₂» sin espacio).

## `ev` y `nd`
Asignados a las 127. Niveles: 23 de nivel 1, 61 de nivel 2, 38 de nivel 3 y 5 de nivel 4 (84, 92, 93, 94, 96). Es un lote bajo en nivel 4, aunque con proporción razonable de nivel 3 para 10.°. Las preguntas «¿los datos apoyan su predicción?» (49, 53, 120, 124) quedan en N4 con evidencia 9.5; si el docente prefiere ceñirse al Marco, serían N3 (9.5).

## Notas para el experto en currículo (no cambiadas)
- 91, 93, 94, 118, 124 y 126 usan Ka, pKa, Kw, energía de enlace o equilibrio (Le Chatelier). Son contenidos de 11.° (equilibrio químico); en 10.° pueden resultar exigentes. En 126 y 118 la clave se sostiene solo con los datos, así que no hay problema; 124 y 94 sí requieren el concepto.
- Redundancias: 45 y 78 (pH 5,6 de la lluvia por CO₂); 43 y 82 (cal agrícola en suelos ácidos). En 13 el modelo dice 3,4 °C por 1 000 m y en 20 la gráfica da 3,3 °C: son preguntas distintas, pero conviene unificar.

## Limitaciones
Las preguntas sin `exp` en la clave (la mayoría de 0 a 46 y 98 a 125) no tienen explicación que corregir en este lote. Los criterios de DBA y curso no se tocaron.
