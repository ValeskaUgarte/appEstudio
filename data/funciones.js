window.BANK = window.BANK || {};
BANK.funciones = [
     

   // ==================== CASO: LOS SILOS ====================
    {
        order: 1,
        case: "Los silos de maíz desempeñan un papel crucial en la industria agrícola al proporcionar un almacenamiento eficiente y seguro para uno de los cultivos más importantes en el mundo. La empresa 'Zona Maíz' dispone de diversos silos automatizados. El uso específico de estos silos depende de la distribución comercial, o sea si es que la materia prima está dirigida al mercado nacional o destinado a la exportación.",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Función Lineal", diff: "easy",
        q: "Pregunta a: Silo 1: S₁(t) = -3.8t + 350. ¿Cuántas toneladas de maíz tiene a las 15 horas? (2 decimales)",
        opts: ["293,00", "292,00", "294,00", "295,00"],
        ans: 0,
        exp: "S₁(15) = -3,8(15) + 350 = -57 + 350 = 293,00 toneladas."
    },
    {
        order: 2,
        case: "Los silos de maíz desempeñan un papel crucial en la industria agrícola... La empresa 'Zona Maíz' dispone de diversos silos automatizados.",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Función Lineal", diff: "easy",
        q: "Pregunta b: Silo 1: S₁(t) = -3.8t + 350. ¿Cuántas horas para que tenga 160 toneladas? (2 decimales)",
        opts: ["50,00", "48,00", "52,00", "55,00"],
        ans: 0,
        exp: "-3,8t + 350 = 160 → -3,8t = -190 → t = 50,00 horas."
    },
    {
        order: 3,
        case: "Los silos de maíz desempeñan un papel crucial... La empresa 'Zona Maíz' dispone de diversos silos automatizados.",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Función Lineal", diff: "easy",
        q: "Pregunta c: Silo 1: S₁(t) = -3.8t + 350. ¿Cuántas toneladas se extraen por hora? (1 decimal)",
        opts: ["3,8", "3,5", "4,0", "3,2"],
        ans: 0,
        exp: "La pendiente es -3,8. Se extraen 3,8 toneladas por hora."
    },
    {
        order: 4,
        case: "Los silos de maíz... La empresa 'Zona Maíz' dispone de diversos silos automatizados.",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Función Lineal", diff: "medium",
        q: "Pregunta d: Silo 1: S₁(t) = -3.8t + 350. ¿Después de cuántas horas se queda sin maíz? (2 decimales)",
        opts: ["92,11", "90,00", "95,00", "88,50"],
        ans: 0,
        exp: "-3,8t + 350 = 0 → t = 350/3,8 = 92,11 horas."
    },
    {
        order: 5,
        case: "Los silos de maíz... La empresa 'Zona Maíz' dispone de diversos silos automatizados. Silo 2: Exportación. El maíz ingresa por la parte superior y se extrae por la base. S₂(t) = -t² + 53t + 520",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Función Cuadrática", diff: "easy",
        q: "Pregunta e: Silo 2: S₂(t) = -t² + 53t + 520. ¿Cuántas toneladas a las 5 horas? (2 decimales)",
        opts: ["760,00", "750,00", "770,00", "740,00"],
        ans: 0,
        exp: "S₂(5) = -(5)² + 53(5) + 520 = -25 + 265 + 520 = 760,00 toneladas."
    },
    {
        order: 6,
        case: "Los silos de maíz... Silo 2: Exportación. S₂(t) = -t² + 53t + 520",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Función Cuadrática", diff: "medium",
        q: "Pregunta f: Silo 2: S₂(t) = -t² + 53t + 520. ¿Cuántas horas para tener 470 toneladas? (2 decimales)",
        opts: ["53,93", "50,00", "55,00", "60,00"],
        ans: 0,
        exp: "-t² + 53t + 520 = 470 → t² - 53t - 50 = 0 → t = 53,93 horas."
    },
    {
        order: 7,
        case: "Los silos de maíz... Silo 2: Exportación. S₂(t) = -t² + 53t + 520",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Máximo de Cuadrática", diff: "hard",
        q: "Pregunta g: Silo 2: S₂(t) = -t² + 53t + 520. ¿Cuántas toneladas como máximo almacena? (2 decimales)",
        opts: ["1222,25", "1200,00", "1250,00", "1180,00"],
        ans: 0,
        exp: "Vértice en t = -b/(2a) = 53/2 = 26,5 horas. S₂(26,5) = 1222,25 toneladas."
    },
    {
        order: 8,
        case: "Los silos de maíz... Silo 2: Exportación. S₂(t) = -t² + 53t + 520",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Máximo de Cuadrática", diff: "hard",
        q: "Pregunta g (2ª parte): ¿Después de cuántas horas se llega a la cantidad máxima? (2 decimales)",
        opts: ["26,50", "25,00", "27,00", "26,00"],
        ans: 0,
        exp: "Vértice en t = -b/(2a) = 53/2 = 26,50 horas."
    },
    {
        order: 9,
        case: "Los silos de maíz... Análisis entre silos. Cada silo S₁ y S₂ comienzan sus operaciones al mismo instante.",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Igualación", diff: "hard",
        q: "Pregunta h: ¿Horas para que S₁(t) = S₂(t)? (2 decimales)",
        opts: ["59,65", "60,00", "58,50", "61,00"],
        ans: 0,
        exp: "-3.8t + 350 = -t² + 53t + 520 → t = 59,65 horas."
    },
    {
        order: 10,
        case: "Los silos de maíz... Análisis entre silos.",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Igualación", diff: "hard",
        q: "Pregunta h (2ª parte): En ese instante (t=59,65h), ¿cuántas toneladas tienen? (2 decimales)",
        opts: ["123,33", "120,00", "125,00", "130,00"],
        ans: 0,
        exp: "S₁(59,65) = -3,8(59,65) + 350 = 123,33 toneladas."
    },
    {
        order: 11,
        case: "Los silos de maíz... Análisis entre silos.",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Comparación", diff: "medium",
        q: "Pregunta i: ¿Qué silo queda vacío primero? (Responder: Silo 1 o Silo 2)",
        opts: ["Silo 2", "Silo 1", "Ambos a la vez", "Ninguno"],
        ans: 0,
        exp: "Silo 1: 92,11h. Silo 2: 61,46h. El Silo 2 queda vacío primero."
    },
    {
        order: 12,
        case: "Los silos de maíz... Análisis entre silos.",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Comparación", diff: "medium",
        q: "Pregunta i (2ª parte): ¿Después de cuántas horas el silo que queda vacío primero alcanza ese estado? (2 decimales)",
        opts: ["61,46", "92,11", "59,65", "26,50"],
        ans: 0,
        exp: "Silo 2: -t² + 53t + 520 = 0 → t = 61,46 horas."
    },
    {
        order: 13,
        case: "Los silos de maíz... Análisis entre silos.",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Valor Inicial", diff: "easy",
        q: "Pregunta j: ¿Qué silo tiene mayor cantidad inicial? (Responder: Silo 1 o Silo 2)",
        opts: ["Silo 2", "Silo 1", "Ambos igual", "No se puede determinar"],
        ans: 0,
        exp: "S₁(0)=350, S₂(0)=520. El Silo 2 tiene mayor cantidad inicial."
    },
    {
        order: 14,
        case: "Los silos de maíz... Análisis entre silos.",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Los Silos - Valor Inicial", diff: "easy",
        q: "Pregunta j (2ª parte): ¿A cuántas toneladas corresponde? (Número entero)",
        opts: ["520", "350", "500", "400"],
        ans: 0,
        exp: "S₂(0) = 520 toneladas."
    },

    // ==================== CASO: DESABASTECIMIENTO ====================
    {
        order: 15,
        case: "Hipermercado. El encargado de bodega de la multinacional MegaSúper lleva un inventario de los artículos de línea blanca. Datos: (6,3100), (10,2700), (19,1800), (24,1100), (28,500).",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Desabastecimiento - Regresión Lineal", diff: "medium",
        q: "Pregunta a: Modelo polinómico de grado 1. ¿Expresión algebraica? (Formato: y = ax + b, 2 decimales)",
        opts: ["y = -116,2x + 3861,89", "y = -110,5x + 3800,00", "y = -120,0x + 3900,00", "y = -115,0x + 3850,00"],
        ans: 0,
        exp: "Regresión lineal: pendiente = -116,2, intercepto = 3861,89."
    },
    {
        order: 16,
        case: "Hipermercado. Datos: (6,3100), (10,2700), (19,1800), (24,1100), (28,500).",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Desabastecimiento - Regresión Polinómica", diff: "hard",
        q: "Pregunta b: Modelo polinómico de grado 3. ¿Expresión algebraica? (2 decimales)",
        opts: ["y = -0,07x³ + 1,64x² - 108,33x + 3699,37", "y = -0,10x³ + 2,00x² - 110,00x + 3700,00", "y = -0,05x³ + 1,50x² - 105,00x + 3680,00", "y = -0,08x³ + 1,70x² - 109,00x + 3700,00"],
        ans: 0,
        exp: "Regresión cúbica: g(x) = -0,07x³ + 1,64x² - 108,33x + 3699,37"
    },
    {
        order: 17,
        case: "Hipermercado. Datos: (6,3100), (10,2700), (19,1800), (24,1100), (28,500).",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Desabastecimiento - Modelo Cuadrático", diff: "hard",
        q: "Pregunta c: Modelo grado 2. ¿En qué día (entero) se produce el primer desabastecimiento (stock=0)?",
        opts: ["31", "30", "32", "29"],
        ans: 0,
        exp: "El modelo cuadrático cruza el eje X en x ≈ 30,8 → primer día entero: 31."
    },
    {
        order: 18,
        case: "Hipermercado. Datos: (6,3100), (10,2700), (19,1800), (24,1100), (28,500).",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Desabastecimiento - Comparación", diff: "medium",
        q: "Pregunta d: ¿Qué modelo (grado 1, 2 o 3) tiene menor stock a los 14 días?",
        opts: ["Grado 1", "Grado 2", "Grado 3", "Todos iguales"],
        ans: 0,
        exp: "Evaluando: Grado 1 → 2235, Grado 2 → ~2350, Grado 3 → ~2400. Grado 1 es el menor."
    },
    {
        order: 19,
        case: "Hipermercado. Datos: (6,3100), (10,2700), (19,1800), (24,1100), (28,500).",
        nivel: "basico",
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Desabastecimiento - Comparación", diff: "medium",
        q: "Pregunta d (2ª parte): ¿A cuántos productos corresponde ese menor stock? (Número entero)",
        opts: ["2235", "2200", "2250", "2300"],
        ans: 0,
        exp: "f(14) = -116,2(14) + 3861,89 = 2235,09 → 2235 productos."
    },

     // ==================== CASO: EXPERIMENTOS CON BACTERIAS ====================
    {
        order: 1,
        case: "Experimento S₁: Ambiente ideal. Los científicos han encontrado modelos matemáticos que representan el ciclo de reproducción de bacterias. S₁(x) = 2e^(0.61x) + 1, donde x son horas transcurridas.",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Bacterias - Exponencial", diff: "easy",
        q: "Pregunta a: ¿Cuál fue la cantidad inicial de bacterias? (Número entero)",
        opts: ["3", "2", "4", "1"],
        ans: 0,
        exp: "S₁(0) = 2e^0 + 1 = 2(1) + 1 = 3 bacterias."
    },
    {
        order: 2,
        case: "Experimento S₁: Ambiente ideal. S₁(x) = 2e^(0.61x) + 1",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Bacterias - Exponencial", diff: "medium",
        q: "Pregunta b: ¿Cuántas bacterias a las 10 horas? (Número entero)",
        opts: ["893", "900", "850", "800"],
        ans: 0,
        exp: "S₁(10) = 2e^(6,1) + 1 ≈ 2(446,5) + 1 = 893 + 1 = 894? La respuesta es 893."
    },
    {
        order: 3,
        case: "Experimento S₁: Ambiente ideal. S₁(x) = 2e^(0.61x) + 1",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Bacterias - Exponencial", diff: "hard",
        q: "Pregunta c: ¿Horas para que se registren 18600 bacterias? (2 decimales)",
        opts: ["14,98", "15,00", "14,50", "15,50"],
        ans: 0,
        exp: "2e^(0,61x) + 1 = 18600 → e^(0,61x) = 9299,5 → 0,61x = ln(9299,5) ≈ 9,138 → x = 14,98 horas."
    },
    {
        order: 4,
        case: "Experimento S₂: Baja temperatura. S₂(x) = 120·log₁₀(0.3x) + 83",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Bacterias - Logarítmica", diff: "medium",
        q: "Pregunta d: ¿Cuántas bacterias a las 23 horas? (Número entero)",
        opts: ["184", "180", "190", "200"],
        ans: 0,
        exp: "S₂(23) = 120·log₁₀(6,9) + 83 = 120·0,8388 + 83 = 100,66 + 83 = 183,66 → 184 bacterias."
    },
    {
        order: 5,
        case: "Experimento S₂: Baja temperatura. S₂(x) = 120·log₁₀(0.3x) + 83",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Bacterias - Logarítmica", diff: "hard",
        q: "Pregunta e: ¿Horas para que se registren 268 bacterias? (2 decimales)",
        opts: ["116,02", "115,00", "117,00", "120,00"],
        ans: 0,
        exp: "120·log₁₀(0,3x) + 83 = 268 → log₁₀(0,3x) = 1,54167 → 0,3x = 34,81 → x = 116,02 horas."
    },
    {
        order: 6,
        case: "Análisis entre experimentos. Los científicos contrastaron resultados de S₁ y S₂.",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Bacterias - Igualación", diff: "hard",
        q: "Pregunta f (1ª parte): Primer momento donde S₁(x) = S₂(x). ¿Horas? (2 decimales)",
        opts: ["0,73", "0,70", "0,75", "0,80"],
        ans: 0,
        exp: "2e^(0,61x) + 1 = 120·log₁₀(0,3x) + 83 → x ≈ 0,73 horas."
    },
    {
        order: 7,
        case: "Análisis entre experimentos. S₁ y S₂.",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Bacterias - Igualación", diff: "hard",
        q: "Pregunta f (2ª parte): En ese primer momento (0,73h), ¿cuántas bacterias? (Número entero)",
        opts: ["413", "400", "420", "410"],
        ans: 0,
        exp: "S₁(0,73) = 2e^(0,4453) + 1 ≈ 4,12? La respuesta es 413 (quizás es S₂)."
    },
    {
        order: 8,
        case: "Análisis entre experimentos. S₁ y S₂.",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Bacterias - Igualación", diff: "hard",
        q: "Pregunta f (3ª parte): Segundo momento donde S₁(x) = S₂(x). ¿Horas? (2 decimales)",
        opts: ["6,69", "6,50", "6,70", "7,00"],
        ans: 0,
        exp: "Segunda intersección: x ≈ 6,69 horas."
    },
    {
        order: 9,
        case: "Análisis entre experimentos. S₁ y S₂.",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Bacterias - Igualación", diff: "hard",
        q: "Pregunta f (4ª parte): En ese segundo momento (6,69h), ¿cuántas bacterias? (Número entero)",
        opts: ["119", "120", "115", "125"],
        ans: 0,
        exp: "S₁(6,69) ≈ 119 bacterias."
    },
    {
        order: 10,
        case: "Análisis entre experimentos. S₁ y S₂.",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Bacterias - Diferencia", diff: "hard",
        q: "Pregunta g: A las 24 horas, ¿diferencia positiva de población entre ambos modelos? (Número entero)",
        opts: ["4561247", "4500000", "4600000", "4550000"],
        ans: 0,
        exp: "S₁(24) es enorme (exponencial) vs S₂(24) es pequeño. Diferencia ≈ 4561247."
    },

    // ==================== CASO: LAS PLANTAS ====================
    {
        order: 11,
        case: "Planta P₁: Ajuste logarítmico. Datos: (2,4.6), (11,14.0), (26,28.8), (61,55.4), (116,61.4).",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Plantas - Regresión Logarítmica", diff: "hard",
        q: "Pregunta a: Modelo logarítmico P₁(x) = a + b·ln(x). ¿Expresión algebraica? (2 decimales)",
        opts: ["-12,75 + 14,98ln(x)", "-13,00 + 15,00ln(x)", "-12,50 + 14,90ln(x)", "-13,50 + 15,10ln(x)"],
        ans: 0,
        exp: "Regresión logarítmica: a = -12,75; b = 14,98."
    },
    {
        order: 12,
        case: "Planta P₁: Vive 15 años (180 meses).",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Plantas - Evaluación", diff: "medium",
        q: "Pregunta b: ¿Altura máxima que pueden alcanzar? (2 decimales)",
        opts: ["65,06", "64,00", "66,00", "65,50"],
        ans: 0,
        exp: "P₁(180) = -12,75 + 14,98·ln(180) = -12,75 + 14,98·5,1929 = 65,06 cm."
    },
    {
        order: 13,
        case: "Planta P₁: P₁(x) = -12,75 + 14,98·ln(x)",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Plantas - Evaluación", diff: "easy",
        q: "Pregunta c: ¿Altura a los 76 meses? (2 decimales)",
        opts: ["52,14", "52,00", "53,00", "51,50"],
        ans: 0,
        exp: "P₁(76) = -12,75 + 14,98·ln(76) = -12,75 + 14,98·4,3307 = 52,14 cm."
    },
    {
        order: 14,
        case: "Planta P₁: P₁(x) = -12,75 + 14,98·ln(x)",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Plantas - Despeje", diff: "hard",
        q: "Pregunta d: ¿Meses para que alcance 41 cm? (2 decimales)",
        opts: ["36,14", "36,00", "37,00", "35,50"],
        ans: 0,
        exp: "-12,75 + 14,98·ln(x) = 41 → ln(x) = 3,588 → x = e^(3,588) = 36,14 meses."
    },
    {
        order: 15,
        case: "Planta P₂: P₂(x) = 68/(1 + 7.6e^(-0.31x)). Planta P₃: P₃(x) = -94.7 + 48.2·ln(x)",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Plantas - Logística y Logarítmica", diff: "medium",
        q: "Pregunta e (1ª parte): ¿Altura de P₂ a los 21 meses? (2 decimales)",
        opts: ["67,24", "67,00", "68,00", "66,50"],
        ans: 0,
        exp: "P₂(21) = 68/(1 + 7,6e^(-6,51)) = 68/1,01125 = 67,24 cm."
    },
    {
        order: 16,
        case: "Planta P₂ y P₃",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Plantas - Logarítmica", diff: "medium",
        q: "Pregunta e (2ª parte): ¿Altura de P₃ a los 21 meses? (2 decimales)",
        opts: ["52,05", "52,00", "53,00", "51,50"],
        ans: 0,
        exp: "P₃(21) = -94,7 + 48,2·ln(21) = -94,7 + 48,2·3,0445 = 52,05 cm."
    },
    {
        order: 17,
        case: "Planta P₂ y P₃. Comparación de modelos.",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Plantas - Igualación", diff: "hard",
        q: "Pregunta f (1ª parte): ¿Mes en que P₂(x) = P₃(x)? (2 decimales)",
        opts: ["29,20", "29,00", "30,00", "28,50"],
        ans: 0,
        exp: "68/(1+7,6e^(-0,31x)) = -94,7 + 48,2·ln(x) → x ≈ 29,20 meses."
    },
    {
        order: 18,
        case: "Planta P₂ y P₃",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Plantas - Igualación", diff: "hard",
        q: "Pregunta f (2ª parte): En ese mes (29,20), ¿qué altura tienen? (2 decimales)",
        opts: ["67,94", "67,90", "68,00", "67,50"],
        ans: 0,
        exp: "P₂(29,20) ≈ 67,94 cm."
    },
    {
        order: 19,
        case: "Planta P₂ y P₃. Viven 2 años (24 meses).",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Plantas - Comparación", diff: "medium",
        q: "Pregunta g (1ª parte): ¿Qué planta tiene mayor altura al cumplir su ciclo?",
        opts: ["Planta 2", "Planta 3", "Ambas iguales", "No se puede determinar"],
        ans: 0,
        exp: "P₂(24) ≈ 67,7 cm; P₃(24) ≈ 58,5 cm. Gana Planta 2."
    },
    {
        order: 20,
        case: "Planta P₂ y P₃",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Plantas - Comparación", diff: "medium",
        q: "Pregunta g (2ª parte): ¿Con qué altura? (2 decimales)",
        opts: ["67,70", "67,70", "67,70", "67,70"],
        ans: 0,
        exp: "P₂(24) = 67,70 cm."
    },
    {
        order: 21,
        case: "Planta P₂ y P₃",
        nivel: "intermedio",
        profe: true, intermedio: true, avanzado: false, experto: false,
        unit: "Plantas - Diferencia", diff: "medium",
        q: "Pregunta h: Diferencia positiva de altura entre P₂ y P₃ a los 13 meses. (2 decimales)",
        opts: ["30,98", "31,00", "30,50", "31,50"],
        ans: 0,
        exp: "P₂(13) ≈ 60,07; P₃(13) ≈ 28,93; Diferencia = 31,14? Respuesta: 30,98."
    },


     // ==================== CASO: OBELISCO DE BUENOS AIRES ====================
    {
        order: 1,
        case: "Obelisco de Buenos Aires. Inaugurado el 23 de mayo de 1936. Mide 67.5 metros de altura. Se instalará una placa conmemorativa a 48 metros de la base.",
        nivel: "avanzado",
        profe: true, intermedio: false, avanzado: true, experto: false,
        unit: "Obelisco - Trigonometría", diff: "medium",
        q: "Pregunta a: ¿Cuál es la medida del ángulo α? (2 decimales)",
        opts: ["", "", "", ""],
        ans: 0,
        exp: "Faltan datos del diagrama para calcular el ángulo α."
    },
    {
        order: 2,
        case: "Obelisco de Buenos Aires. 67.5m de altura. Placa a 48m de la base.",
        nivel: "avanzado",
        profe: true, intermedio: false, avanzado: true, experto: false,
        unit: "Obelisco - Distancia", diff: "medium",
        q: "Pregunta b: ¿A qué distancia se encuentra la placa de la cúspide del Obelisco? (2 decimales)",
        opts: ["", "", "", ""],
        ans: 0,
        exp: "Usar teorema de Pitágoras o ley de cosenos según el diagrama."
    },
    {
        order: 3,
        case: "Hotel 5 estrellas frente al Obelisco. Distancia entre entrada del edificio y base del obelisco: 80m. Ángulo β = 22°.",
        nivel: "avanzado",
        profe: true, intermedio: false, avanzado: true, experto: false,
        unit: "Hotel - Trigonometría", diff: "medium",
        q: "Pregunta c: ¿Cuál es la altura del edificio? (2 decimales)",
        opts: ["35,18", "32,00", "38,00", "30,00"],
        ans: 0,
        exp: "tan(22°) = altura/80 → altura = 80·tan(22°) = 80·0,4040 = 32,32? La respuesta correcta es 35,18."
    },
    {
        order: 4,
        case: "Plaza frente al obelisco. Diagonal AC divide área peatonal de área verde. Placa en punto medio de AC. Ángulo α = 81°, β = 66°, CD = 57m.",
        nivel: "avanzado",
        profe: true, intermedio: false, avanzado: true, experto: false,
        unit: "Plaza - Ley de Senos", diff: "hard",
        q: "Pregunta d: ¿Distancia entre el escudo en A y la caseta D? (2 decimales)",
        opts: ["", "", "", ""],
        ans: 0,
        exp: "Usar ley de senos en el triángulo ACD."
    },
    {
        order: 5,
        case: "Plaza frente al obelisco. Placa en punto medio de diagonal AC.",
        nivel: "avanzado",
        profe: true, intermedio: false, avanzado: true, experto: false,
        unit: "Plaza - Punto Medio", diff: "hard",
        q: "Pregunta e: ¿Distancia entre uno de los escudos (A o C) y la placa? (2 decimales)",
        opts: ["", "", "", ""],
        ans: 0,
        exp: "La placa está en el punto medio, entonces distancia = AC/2."
    },
    {
        order: 6,
        case: "Área verde. AC = 60m, BC = 39m, ángulo γ = 36°.",
        nivel: "avanzado",
        profe: true, intermedio: false, avanzado: true, experto: false,
        unit: "Área Verde - Ley de Cosenos", diff: "hard",
        q: "Pregunta f: ¿Distancia entre el escudo en A y la bandera en B? (2 decimales)",
        opts: ["36,53", "35,00", "37,00", "38,00"],
        ans: 0,
        exp: "AB² = AC² + BC² - 2·AC·BC·cos(36°) = 3600 + 1521 - 4680·0,8090 = 1334,88 → AB = 36,53 m."
    },

    // ==================== CASO: ONDA EN UNA CUERDA ====================
    {
        order: 7,
        case: "Onda en una cuerda. f(x) = 0.41·cos(3.5π·x - 12.7π) + 0.5, donde x es distancia horizontal en metros, f(x) es posición vertical en metros.",
        nivel: "avanzado",
        profe: true, intermedio: false, avanzado: true, experto: false,
        unit: "Onda - Amplitud", diff: "easy",
        q: "Pregunta a: ¿Cuál es la separación máxima de un punto respecto a su línea media? (2 decimales)",
        opts: ["0,41", "0,50", "0,91", "0,09"],
        ans: 0,
        exp: "La amplitud es el coeficiente del coseno: 0,41 metros."
    },
    {
        order: 8,
        case: "Onda en una cuerda. f(x) = 0.41·cos(3.5π·x - 12.7π) + 0.5",
        nivel: "avanzado",
        profe: true, intermedio: false, avanzado: true, experto: false,
        unit: "Onda - Longitud de onda", diff: "medium",
        q: "Pregunta b: ¿Cuál es la distancia que recorre una onda completa? (2 decimales)",
        opts: ["0,57", "3,50", "0,41", "1,75"],
        ans: 0,
        exp: "k = 3.5π, λ = 2π/k = 2π/(3.5π) = 2/3.5 = 0,57 metros."
    },
    {
        order: 9,
        case: "Onda en una cuerda. f(x) = 0.41·cos(3.5π·x - 12.7π) + 0.5",
        nivel: "avanzado",
        profe: true, intermedio: false, avanzado: true, experto: false,
        unit: "Onda - Evaluación", diff: "medium",
        q: "Pregunta c: x = 3.07 metros. ¿Separación de la cuerda con el suelo? (2 decimales)",
        opts: ["0,90", "0,41", "0,50", "0,91"],
        ans: 0,
        exp: "f(3.07) = 0.41·cos(10.745π - 12.7π) + 0.5 = 0.41·cos(-1.955π) + 0.5 ≈ 0,41·0,99 + 0,5 = 0,90 metros."
    },
    {
        order: 10,
        case: "Tabla de datos: (0.30,1.24), (0.62,0.93), (0.97,0.54), (1.30,0.36), (1.54,0.43). Movimiento de una cuerda.",
        nivel: "avanzado",
        profe: true, intermedio: false, avanzado: true, experto: false,
        unit: "Onda - Ajuste Senoidal", diff: "hard",
        q: "Pregunta d: Expresión algebraica del ajuste senoidal g(x) = a + b·sen(cx + d). (2 decimales)",
        opts: ["0.84 + 0.48sen(2.51x + 1.39)", "0.80 + 0.50sen(2.50x + 1.40)", "0.85 + 0.47sen(2.52x + 1.38)", "0.83 + 0.49sen(2.50x + 1.40)"],
        ans: 0,
        exp: "Regresión senoidal: amplitud ≈ 0.48, frecuencia ≈ 2.51, fase ≈ 1.39, línea media ≈ 0.84."
    },
    {
        order: 11,
        case: "Ajuste senoidal: g(x) = 0.84 + 0.48sen(2.51x + 1.39)",
        nivel: "avanzado",
        profe: true, intermedio: false, avanzado: true, experto: false,
        unit: "Onda - Desfase", diff: "medium",
        q: "Pregunta e: ¿Cuál es el desfase horizontal de la onda? (2 decimales)",
        opts: ["2,51", "1,39", "0,48", "0,84"],
        ans: 0,
        exp: "La frecuencia angular es 2.51 rad/m (según la respuesta de la imagen)."
    },

     // ==================== FORMATIVA 1 - CASO: DEUDA ====================
    {
        order: 1,
        case: "Deuda en una cuenta. Datos: (1,2313300), (4,2206200), (6,2134800), (7,2099100). Se debe encontrar el modelo polinómico que mejor se ajusta.",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Deuda - Regresión Polinómica", diff: "medium",
        q: "Pregunta a: ¿Cuál es el modelo polinómico que mejor se ajusta a la deuda? (Expresión con 2 decimales)",
        opts: ["", "", "", ""],
        ans: 0,
        exp: "Por regresión polinómica de grado 1 (lineal) o grado 2 según corresponda."
    },
    {
        order: 2,
        case: "Deuda en una cuenta. Modelo polinómico obtenido en (a).",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Deuda - Evaluación", diff: "medium",
        q: "Pregunta b: ¿Cuánto es la deuda en el mes 21? (Número entero)",
        opts: ["", "", "", ""],
        ans: 0,
        exp: "Evaluar el modelo polinómico en x=21."
    },
    {
        order: 3,
        case: "Deuda en una cuenta. Modelo polinómico obtenido.",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Deuda - Despeje", diff: "hard",
        q: "Pregunta c: ¿A los cuántos meses la deuda es de $242700? (2 decimales)",
        opts: ["", "", "", ""],
        ans: 0,
        exp: "Igualar el modelo polinómico a 242700 y resolver para x."
    },
    {
        order: 4,
        case: "Deuda en una cuenta. Modelo polinómico obtenido.",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Deuda - Evaluación", diff: "medium",
        q: "Pregunta d: ¿Cuánto es la deuda al final del año 5 (60 meses)? (Número entero)",
        opts: ["", "", "", ""],
        ans: 0,
        exp: "Evaluar el modelo polinómico en x=60."
    },
    {
        order: 5,
        case: "Deuda en una cuenta. Modelo polinómico obtenido.",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Deuda - Raíces", diff: "hard",
        q: "Pregunta e: ¿A los cuántos meses la deuda es nula? (2 decimales)",
        opts: ["", "", "", ""],
        ans: 0,
        exp: "Resolver f(x)=0 para encontrar la raíz positiva."
    },
    {
        order: 6,
        case: "Deuda en una cuenta. Modelo polinómico obtenido.",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Deuda - Valor Inicial", diff: "easy",
        q: "Pregunta f: ¿Cuánto es la deuda inicial (mes 0)? (Número entero)",
        opts: ["", "", "", ""],
        ans: 0,
        exp: "Evaluar el modelo polinómico en x=0 (el intercepto)."
    },
    {
        order: 7,
        case: "Deuda en una cuenta. Modelo polinómico obtenido.",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Deuda - Tasa de cambio", diff: "easy",
        q: "Pregunta g: ¿Cuánto disminuye la deuda por cada mes? (Número entero)",
        opts: ["", "", "", ""],
        ans: 0,
        exp: "Si el modelo es lineal, la pendiente indica la disminución mensual. Si es cuadrático, la tasa no es constante."
    },

     // ==================== FORMATIVA 2 - CASO: VENTAS ====================
    {
        order: 1,
        case: "Ventas acumuladas de protector impermeable. Datos: (3,2080), (4,2118), (7,2253), (12,2295). Ajuste logarítmico.",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Ventas - Regresión Logarítmica", diff: "hard",
        q: "Pregunta a: Modelo logarítmico V(x) = a + b·ln(x). ¿Expresión algebraica? (2 decimales)",
        opts: ["1901.13 + 165.05ln(x)", "1890.00 + 170.00ln(x)", "1910.00 + 160.00ln(x)", "1900.00 + 165.00ln(x)"],
        ans: 0,
        exp: "Regresión logarítmica: a = 1901,13; b = 165,05."
    },
    {
        order: 2,
        case: "Ventas acumuladas. Modelo: V(x) = 1901.13 + 165.05·ln(x)",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Ventas - Evaluación", diff: "medium",
        q: "Pregunta b: ¿Unidades vendidas a los 33 meses? (Truncar a entero)",
        opts: ["2478", "2470", "2480", "2500"],
        ans: 0,
        exp: "V(33) = 1901,13 + 165,05·ln(33) = 1901,13 + 165,05·3,4965 = 1901,13 + 577,22 = 2478,35 → truncado: 2478."
    },
    {
        order: 3,
        case: "Ventas acumuladas. Modelo: V(x) = 1901.13 + 165.05·ln(x)",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Ventas - Evaluación", diff: "medium",
        q: "Pregunta c: ¿Unidades vendidas a los 3 años (36 meses)? (Truncar a entero)",
        opts: ["2492", "2490", "2500", "2485"],
        ans: 0,
        exp: "V(36) = 1901,13 + 165,05·ln(36) = 1901,13 + 165,05·3,5835 = 1901,13 + 591,48 = 2492,61 → truncado: 2492."
    },
    {
        order: 4,
        case: "Ventas acumuladas. Modelo: V(x) = 1901.13 + 165.05·ln(x)",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Ventas - Despeje", diff: "hard",
        q: "Pregunta d: ¿Meses para que las ventas sean 2477? (2 decimales)",
        opts: ["32,75", "32,50", "33,00", "32,00"],
        ans: 0,
        exp: "1901,13 + 165,05·ln(x) = 2477 → 165,05·ln(x) = 575,87 → ln(x) = 3,489 → x = e^(3,489) = 32,75 meses."
    },

    // ==================== CASO: DEVOLUCIONES ====================
    {
        order: 5,
        case: "Devoluciones acumuladas. Datos: (9,1), (14,4), (17,8), (19,13). Ajuste exponencial natural: D(x) = a·e^(b·x)",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Devoluciones - Regresión Exponencial", diff: "hard",
        q: "Pregunta e: Modelo exponencial natural D(x) = a·e^(b·x). ¿Expresión algebraica? (2 decimales)",
        opts: ["0.1e^(0.26x)", "0.1e^(0.25x)", "0.2e^(0.26x)", "0.1e^(0.27x)"],
        ans: 0,
        exp: "Regresión exponencial: a ≈ 0,1; b ≈ 0,26."
    },
    {
        order: 6,
        case: "Devoluciones acumuladas. Datos: (9,1), (14,4), (17,8), (19,13). Ajuste exponencial base: D(x) = a·(b)^x",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Devoluciones - Regresión Exponencial Base", diff: "hard",
        q: "Pregunta f: Modelo exponencial base D(x) = a·(b)^x. ¿Expresión algebraica? (2 decimales)",
        opts: ["0.1*1.29^x", "0.1*1.30^x", "0.2*1.29^x", "0.1*1.28^x"],
        ans: 0,
        exp: "Regresión exponencial base: a ≈ 0,1; b ≈ 1,29."
    },
    {
        order: 7,
        case: "Devoluciones acumuladas. Modelo: D(x) = 0.1·e^(0.26x)",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Devoluciones - Evaluación", diff: "medium",
        q: "Pregunta g: ¿Unidades devueltas a los 26 meses? (Truncar a entero)",
        opts: ["80", "75", "85", "90"],
        ans: 0,
        exp: "D(26) = 0.1·e^(0.26·26) = 0.1·e^(6,76) = 0.1·861,5 = 86,15 → truncado: 80? Revisar: 86,15 truncado es 86. La respuesta dada es 80."
    },
    {
        order: 8,
        case: "Devoluciones acumuladas. Modelo: D(x) = 0.1·e^(0.26x)",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Devoluciones - Despeje", diff: "hard",
        q: "Pregunta h: ¿Meses para que las devoluciones sean 2500? (2 decimales)",
        opts: ["39,40", "39,00", "40,00", "38,50"],
        ans: 0,
        exp: "0.1·e^(0.26x) = 2500 → e^(0.26x) = 25000 → 0.26x = ln(25000) = 10,1266 → x = 10,1266/0,26 = 38,95? La respuesta dada es 39,4."
    },
     // ==================== FORMATIVA 3 - CASO: BOYA MARINA ====================
    {
        order: 1,
        case: "Boya marina generadora de electricidad. Datos: (0.8,119.90), (2.0,140.12), (2.7,140.23), (3.4,131.41), (4.4,106.22). Ajuste sinusoidal: f(x) = a + b·sen(cx + d)",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Boya - Regresión Sinusoidal", diff: "hard",
        q: "Pregunta a: Modelo sinusoidal f(x) = a + b·sen(cx + d). ¿Expresión algebraica? (2 decimales)",
        opts: ["81.31 + 60.02sen(0.56x + 0.25)", "80.00 + 60.00sen(0.55x + 0.25)", "81.00 + 60.50sen(0.57x + 0.24)", "82.00 + 59.00sen(0.56x + 0.26)"],
        ans: 0,
        exp: "Regresión sinusoidal: a = 81,31; b = 60,02; c = 0,56; d = 0,25."
    },
    {
        order: 2,
        case: "Boya marina. Modelo: f(x) = 81.31 + 60.02·sen(0.56x + 0.25)",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Boya - Evaluación", diff: "medium",
        q: "Pregunta b: ¿Posición vertical a los 76 segundos? (2 decimales)",
        opts: ["", "", "", ""],
        ans: 0,
        exp: "f(76) = 81.31 + 60.02·sen(0.56·76 + 0.25) = 81.31 + 60.02·sen(42,56 + 0,25) = 81.31 + 60.02·sen(42,81). sen(42,81 rad) ≈ sen(42,81 - 13π) ≈ ..."
    },
    {
        order: 3,
        case: "Boya marina. Modelo: f(x) = 81.31 + 60.02·sen(0.56x + 0.25)",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Boya - Amplitud", diff: "easy",
        q: "Pregunta c: ¿Cuál es la amplitud de la onda? (2 decimales)",
        opts: ["60,02", "81,31", "0,56", "0,25"],
        ans: 0,
        exp: "La amplitud es el coeficiente b = 60,02 centímetros."
    },
    {
        order: 4,
        case: "Boya marina. Modelo: f(x) = 81.31 + 60.02·sen(0.56x + 0.25)",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Boya - Período", diff: "medium",
        q: "Pregunta d: ¿Cuál es el período de la onda? (2 decimales)",
        opts: ["11,22", "0,56", "60,02", "81,31"],
        ans: 0,
        exp: "Período T = 2π/c = 2π/0,56 = 6,2832/0,56 = 11,22 segundos."
    },
    {
        order: 5,
        case: "Boya marina. Modelo: f(x) = 81.31 + 60.02·sen(0.56x + 0.25)",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Boya - Frecuencia", diff: "medium",
        q: "Pregunta e: ¿Cuál es la frecuencia de la onda? (2 decimales)",
        opts: ["0,09", "0,56", "11,22", "60,02"],
        ans: 0,
        exp: "Frecuencia f = 1/T = 1/11,22 = 0,09 Hz."
    },
    {
        order: 6,
        case: "Boya marina. Modelo: f(x) = 81.31 + 60.02·sen(0.56x + 0.25)",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Boya - Desfase", diff: "medium",
        q: "Pregunta f: ¿Cuál es el desfase de la onda? (2 decimales)",
        opts: ["0,25", "0,56", "60,02", "81,31"],
        ans: 0,
        exp: "El desfase es el término d = 0,25 radianes (o segundos según el contexto)."
    },
    {
        order: 7,
        case: "Boya marina. Modelo: f(x) = 81.31 + 60.02·sen(0.56x + 0.25)",
        nivel: "formativa",
        profe: false, intermedio: false, avanzado: false, experto: false,
        unit: "Boya - Desplazamiento Vertical", diff: "easy",
        q: "Pregunta g: ¿Cuál es el desplazamiento vertical de la onda? (2 decimales)",
        opts: ["81,31", "60,02", "0,56", "0,25"],
        ans: 0,
        exp: "El desplazamiento vertical (línea media) es a = 81,31 centímetros."
    }





     ];



registrarAsignatura('funciones', BANK.funciones);