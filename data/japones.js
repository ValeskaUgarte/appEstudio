// =================================================================
// CUESTIONARIO COMPLETO DE JAPONÉS - CON FRASES DE EJEMPLO
// =================================================================


window.BANK = window.BANK || {};
BANK.japones = [

    // ==================== NIVEL BÁSICO (N5) - profe: true ====================
    // HIRAGANA
    {
        profe: true, intermedio: false, avanzado: false, unit: "Hiragana", diff: "easy",
        q: "¿Cómo se lee 'あ'?",
        opts: ["i", "u", "e", "a"],
        ans: 3, exp: "あ = 'a'. Frase: あおい (aoi) = azul. Romanización: a."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Hiragana", diff: "easy",
        q: "¿Cómo se lee 'い'?",
        opts: ["a", "i", "u", "e"],
        ans: 1, exp: "い = 'i'. Frase: いぬ (inu) = perro. Romanización: i."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Hiragana", diff: "easy",
        q: "¿Cómo se lee 'う'?",
        opts: ["a", "i", "u", "e"],
        ans: 2, exp: "う = 'u'. Frase: うみ (umi) = mar. Romanización: u."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Hiragana", diff: "easy",
        q: "¿Cuál es el hiragana para 'ka'?",
        opts: ["か", "き", "く", "け"],
        ans: 0, exp: "か = 'ka'. Frase: かさ (kasa) = paraguas. Romanización: ka."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Hiragana", diff: "easy",
        q: "¿Cuál es el hiragana para 'sa'?",
        opts: ["さ", "し", "す", "せ"],
        ans: 0, exp: "さ = 'sa'. Frase: さかな (sakana) = pescado. Romanización: sa."
    },
    // KATAKANA
    {
        profe: true, intermedio: false, avanzado: false, unit: "Katakana", diff: "easy",
        q: "¿Qué significa 'コーヒー'?",
        opts: ["Té", "Café", "Leche", "Agua"],
        ans: 1, exp: "コーヒー = 'kōhī' (café). Frase: コーヒーをください (Kōhī o kudasai) = Café por favor. Romanización: kōhī."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Katakana", diff: "easy",
        q: "¿Qué significa 'テレビ'?",
        opts: ["Radio", "Teléfono", "Televisión", "Computadora"],
        ans: 2, exp: "テレビ = 'terebi' (televisión). Frase: テレビを見る (Terebi o miru) = Ver televisión. Romanización: terebi."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Katakana", diff: "easy",
        q: "¿Qué significa 'インターネット'?",
        opts: ["Internet", "Computadora", "Teléfono", "Correo"],
        ans: 0, exp: "インターネット = 'intānetto' (Internet). Frase: インターネットを使う (Intānetto o tsukau) = Usar Internet. Romanización: intānetto."
    },
    // SALUDOS Y FRASES ÚTILES
    {
        profe: true, intermedio: false, avanzado: false, unit: "Saludos", diff: "easy",
        q: "¿Cómo se dice 'Buenos días' formal?",
        opts: ["こんにちは", "こんばんは", "おはようございます", "おやすみなさい"],
        ans: 2, exp: "おはようございます = 'Ohayō gozaimasu'. Frase: 毎朝、おはようございます (Maiasa, ohayō gozaimasu) = Buenos días cada mañana."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Saludos", diff: "easy",
        q: "¿Cómo se dice 'Buenas tardes'?",
        opts: ["おはよう", "こんにちは", "こんばんは", "おやすみ"],
        ans: 1, exp: "こんにちは = 'Konnichiwa'. Frase: こんにちは、お元気ですか？ (Konnichiwa, o-genki desu ka?) = Buenas tardes, ¿cómo está?"
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Saludos", diff: "easy",
        q: "¿Qué significa 'いただきます'?",
        opts: ["Buen provecho (antes de comer)", "Gracias por la comida (después)", "Lo siento", "Buenos días"],
        ans: 0, exp: "いただきます = 'Itadakimasu'. Frase: 食事の前に「いただきます」と言う (Shokuji no mae ni 'itadakimasu' to iu) = Se dice 'itadakimasu' antes de comer."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Saludos", diff: "easy",
        q: "¿Qué significa 'ただいま'?",
        opts: ["Bienvenido a casa", "Ya llegué a casa", "Adiós", "Buen viaje"],
        ans: 1, exp: "ただいま = 'Tadaima'. Frase: ただいま！おなかすいた (Tadaima! Onaka suita) = ¡Ya llegué! Tengo hambre. Respuesta: おかえり (Okaeri)."
    },
    // NÚMEROS
    {
        profe: true, intermedio: false, avanzado: false, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '7' (lectura común)?",
        opts: ["しち", "なな", "ご", "ろく"],
        ans: 1, exp: "なな = 'nana' (7). 'Shichi' también es válido pero 'nana' es más común. Frase: 七時に起きる (Shichi-ji ni okiru / Nana-ji ni okiru) = Me levanto a las 7."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '9'?",
        opts: ["きゅう", "く", "はち", "じゅう"],
        ans: 0, exp: "きゅう = 'kyū' (9). Frase: 九時です (Ku-ji desu / Kyū-ji desu) = Son las 9. 'Ku' suena a 'sufrimiento', por eso se prefiere 'kyū'."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '10'?",
        opts: ["じゅう", "ひゃく", "せん", "まん"],
        ans: 0, exp: "じゅう = 'jū' (10). Frase: 十匹の猫 (Jū-biki no neko) = 10 gatos."
    },
    // KANJI BÁSICO
    {
        profe: true, intermedio: false, avanzado: false, unit: "Kanji", diff: "easy",
        q: "¿Qué significa el kanji '水'?",
        opts: ["Fuego", "Agua", "Tierra", "Viento"],
        ans: 1, exp: "水 = 'mizu' (agua). Frase: 水を飲む (Mizu o nomu) = Beber agua. Romanización: mizu."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Kanji", diff: "easy",
        q: "¿Qué significa el kanji '火'?",
        opts: ["Agua", "Fuego", "Madera", "Oro"],
        ans: 1, exp: "火 = 'hi' (fuego). Frase: 火が怖い (Hi ga kowai) = El fuego da miedo. Romanización: hi."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Kanji", diff: "easy",
        q: "¿Qué significa el kanji '木'?",
        opts: ["Árbol", "Flor", "Hierba", "Fruta"],
        ans: 0, exp: "木 = 'ki' (árbol). Frase: 木を植える (Ki o ueru) = Plantar un árbol. Romanización: ki."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Kanji", diff: "easy",
        q: "¿Qué significa el kanji '口'?",
        opts: ["Ojo", "Boca", "Oreja", "Nariz"],
        ans: 1, exp: "口 = 'kuchi' (boca). Frase: 口を開ける (Kuchi o akeru) = Abrir la boca. Romanización: kuchi."
    },
    // VERBOS BÁSICOS
    {
        profe: true, intermedio: false, avanzado: false, unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'comer' en forma de diccionario?",
        opts: ["食べる", "飲む", "見る", "行く"],
        ans: 0, exp: "食べる = 'taberu'. Frase: ご飯を食べる (Gohan o taberu) = Comer arroz/comida. Romanización: taberu."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'beber'?",
        opts: ["食べる", "飲む", "見る", "行く"],
        ans: 1, exp: "飲む = 'nomu'. Frase: 水を飲む (Mizu o nomu) = Beber agua. Romanización: nomu."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'ir'?",
        opts: ["来る", "帰る", "行く", "歩く"],
        ans: 2, exp: "行く = 'iku'. Frase: 学校へ行く (Gakkō e iku) = Ir a la escuela. Romanización: iku."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'venir'?",
        opts: ["行く", "帰る", "来る", "戻る"],
        ans: 2, exp: "来る = 'kuru'. Frase: 日本へ来る (Nihon e kuru) = Venir a Japón. Romanización: kuru."
    },
    // ADJETIVOS
    {
        profe: true, intermedio: false, avanzado: false, unit: "Adjetivos", diff: "easy",
        q: "¿Qué significa '新しい' (atarashii)?",
        opts: ["Viejo", "Nuevo", "Bonito", "Feo"],
        ans: 1, exp: "新しい = 'atarashii'. Frase: 新しい車 (Atarashii kuruma) = Auto nuevo. Romanización: atarashii."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Adjetivos", diff: "easy",
        q: "¿Qué significa '古い' (furui)?",
        opts: ["Nuevo", "Bonito", "Viejo", "Rápido"],
        ans: 2, exp: "古い = 'furui'. Frase: 古い友達 (Furui tomodachi) = Amigo viejo (de mucho tiempo). Romanización: furui."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Adjetivos", diff: "easy",
        q: "¿Qué significa '高い' (takai)?",
        opts: ["Barato", "Caro/alto", "Bajo", "Ancho"],
        ans: 1, exp: "高い = 'takai'. Frase: 山が高い (Yama ga takai) = La montaña es alta / 値段が高い (Nedan ga takai) = El precio es caro."
    },
    // PARTÍCULAS EN FRASES
    {
        profe: true, intermedio: false, avanzado: false, unit: "Partículas", diff: "easy",
        q: "En '私は学生です', ¿qué función tiene は?",
        opts: ["Objeto directo", "Tema", "Sujeto", "Dirección"],
        ans: 1, exp: "は = 'wa' (marca el tema). Frase completa: 私は学生です (Watashi wa gakusei desu) = En cuanto a mí, soy estudiante."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Partículas", diff: "easy",
        q: "En 'ご飯を食べる', ¿qué función tiene を?",
        opts: ["Tema", "Sujeto", "Objeto directo", "Lugar"],
        ans: 2, exp: "を = 'o' (objeto directo). Frase: ご飯を食べる (Gohan o taberu) = Comer arroz (el arroz es el objeto)."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Partículas", diff: "easy",
        q: "En '公園で遊ぶ', ¿qué función tiene で?",
        opts: ["Dirección", "Lugar de acción", "Compañía", "Instrumento"],
        ans: 1, exp: "で = 'de' (lugar donde ocurre la acción). Frase: 公園で遊ぶ (Kōen de asobu) = Jugar en el parque."
    },
    {
        profe: true, intermedio: false, avanzado: false, unit: "Partículas", diff: "easy",
        q: "En '友達と話す', ¿qué significa と?",
        opts: ["Y (conjunción)", "Con (compañía)", "Hacia", "Desde"],
        ans: 1, exp: "と = 'to' (marca compañía). Frase: 友達と話す (Tomodachi to hanasu) = Hablar con un amigo."
    },

    // ==================== NIVEL INTERMEDIO (N4-N3) - intermedio: true ====================
    // FORMA TE + FRASES
    {
        profe: false, intermedio: true, avanzado: false, unit: "Forma TE", diff: "medium",
        q: "¿Cómo se forma el TE de 食べる?",
        opts: ["食べて", "食べって", "食べた", "食べで"],
        ans: 0, exp: "食べる (taberu) → 食べて (tabete). Frase: 食べてください (Tabete kudasai) = Por favor coma. Romanización: tabete."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Forma TE", diff: "medium",
        q: "Forma TE de 行く:",
        opts: ["行いて", "行って", "行きて", "行くて"],
        ans: 1, exp: "行く (iku) → 行って (itte) - excepción. Frase: 学校に行って、勉強する (Gakkō ni itte, benkyō suru) = Voy a la escuela y estudio."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Forma TE", diff: "medium",
        q: "Forma TE de 話す:",
        opts: ["話して", "話って", "話すて", "話した"],
        ans: 0, exp: "話す (hanasu) → 話して (hanashite). Frase: 先生と話してる (Sensei to hanashiteru) = Estoy hablando con el profesor."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "TE + IRU", diff: "medium",
        q: "¿Qué significa '雨が降っている'?",
        opts: ["Llovió", "Está lloviendo", "Va a llover", "Llueve a veces"],
        ans: 1, exp: "降っている = 'futte iru' (está lloviendo). Frase: 今、雨が降っている (Ima, ame ga futte iru) = Ahora mismo está lloviendo."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "TE + IRU", diff: "medium",
        q: "¿Qué diferencia hay entre '食べている' y '食べた'?",
        opts: ["Pasado vs presente", "Está comiendo vs comió", "Futuro vs pasado", "Hábito vs acción puntual"],
        ans: 1, exp: "食べている = 'tabete iru' (está comiendo - en progreso). 食べた = 'tabeta' (comió - completado). Frase: 今食べているところです (Ima tabete iru tokoro desu) = Justo ahora estoy comiendo."
    },
    // DAR Y RECIBIR - FRASES
    {
        profe: false, intermedio: true, avanzado: false, unit: "Dar/Recibir", diff: "medium",
        q: "¿Qué significa '友達にプレゼントをあげた'?",
        opts: ["Mi amigo me dio un regalo", "Le di un regalo a mi amigo", "Recibí un regalo de mi amigo", "Mi amigo le dio un regalo a otro"],
        ans: 1, exp: "あげる = 'ageru' (dar de yo → otro). Frase: 友達にプレゼントをあげた (Tomodachi ni purezento o ageta) = Le di un regalo a mi amigo."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Dar/Recibir", diff: "medium",
        q: "¿Qué significa '友達がプレゼントをくれた'?",
        opts: ["Le di un regalo a mi amigo", "Mi amigo me dio un regalo", "Recibí un regalo de mi amigo (同じ)", "Mi amigo recibió un regalo"],
        ans: 1, exp: "くれる = 'kureru' (dar de otro → yo). Frase: 友達がプレゼントをくれた (Tomodachi ga purezento o kureta) = Mi amigo me dio un regalo."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Dar/Recibir", diff: "medium",
        q: "¿Cómo se dice 'Recibí un libro de mi profesor'?",
        opts: ["先生に本をあげた", "先生が本をくれた", "先生から本をもらった", "先生に本をやった"],
        ans: 2, exp: "もらう = 'morau' (recibir). Frase: 先生から本をもらった (Sensei kara hon o moratta) = Recibí un libro de mi profesor. 'Kara' indica origen."
    },
    // DESEO たい - FRASES
    {
        profe: false, intermedio: true, avanzado: false, unit: "Deseo", diff: "medium",
        q: "¿Cómo se dice 'Quiero ir a Japón'?",
        opts: ["日本に行く", "日本に行きたい", "日本へ行きます", "日本に行って"],
        ans: 1, exp: "行きたい = 'ikitai' (quiero ir). Frase: 日本に行きたい (Nihon ni ikitai) = Quiero ir a Japón."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Deseo", diff: "medium",
        q: "¿Qué significa '何も食べたくない'?",
        opts: ["Quiero comer algo", "No quiero comer nada", "Quiero comer todo", "No puedo comer"],
        ans: 1, exp: "食べたくない = 'tabetakunai' (no quiero comer). 何も (nanimo) + negativo = 'nada'. Frase: お腹がいっぱいで、何も食べたくない (Onaka ga ippai de, nanimo tabetakunai) = Estoy lleno, no quiero comer nada."
    },
    // PERMISO Y PROHIBICIÓN
    {
        profe: false, intermedio: true, avanzado: false, unit: "Permiso", diff: "medium",
        q: "¿Cómo se pregunta '¿Puedo entrar?' formalmente?",
        opts: ["入るか？", "入ってもいいですか？", "入れますか？", "入りましょうか？"],
        ans: 1, exp: "入ってもいいですか = 'Haitte mo ii desu ka?' Frase: 失礼ですが、入ってもいいですか？ (Shitsurei desu ga, haitte mo ii desu ka?) = Disculpe, ¿puedo entrar?"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Prohibición", diff: "medium",
        q: "¿Qué significa 'ここでタバコを吸ってはいけない'?",
        opts: ["Aquí se puede fumar", "Aquí no se debe fumar", "Aquí quiero fumar", "Aquí fumaré"],
        ans: 1, exp: "吸ってはいけない = 'sutte wa ikenai' (no está permitido fumar). Frase: ここでタバコを吸ってはいけない (Koko de tabako o sutte wa ikenai) = No se debe fumar aquí."
    },
    // OBLIGACIÓN
    {
        profe: false, intermedio: true, avanzado: false, unit: "Obligación", diff: "medium",
        q: "¿Qué significa '宿題をしなければならない'?",
        opts: ["Puedo hacer la tarea", "No tengo que hacer la tarea", "Tengo que hacer la tarea", "Quiero hacer la tarea"],
        ans: 2, exp: "しなければならない = 'shinakereba naranai' (tengo que hacer). Frase: 宿題をしなければならない (Shukudai o shinakereba naranai) = Tengo que hacer la tarea."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Obligación", diff: "medium",
        q: "Forma coloquial de '行かなければならない':",
        opts: ["行かないと", "行かなくちゃ", "行かなきゃ", "Todas las anteriores"],
        ans: 3, exp: "Formas coloquiales: 行かなきゃ (ikanakya), 行かなくちゃ (ikanakucha), 行かないと (ikanai to). Frase: もう行かなきゃ (Mō ikanakya) = Ya me tengo que ir."
    },
    // CONDICIONALES
    {
        profe: false, intermedio: true, avanzado: false, unit: "Condicional", diff: "medium",
        q: "¿Qué significa '雨が降ったら、行かない'?",
        opts: ["Si llueve, voy", "Si llueve, no voy", "Llovió y no fui", "Aunque llueva, voy"],
        ans: 1, exp: "降ったら = 'futtara' (si llueve). Frase: 雨が降ったら、行かない (Ame ga futtara, ikanai) = Si llueve, no voy."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Condicional", diff: "medium",
        q: "¿Qué significa '春になると、桜が咲く'?",
        opts: ["Si llega la primavera, tal vez florecen los cerezos", "Cuando llega la primavera, los cerezos florecen (verdad general)", "La primavera llegó y florecieron", "Aunque llegue la primavera, no florecen"],
        ans: 1, exp: "と = 'to' (verdad general/consecuencia natural). Frase: 春になると、桜が咲く (Haru ni naru to, sakura ga saku) = Cuando llega la primavera, los cerezos florecen."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Condicional", diff: "medium",
        q: "¿Qué significa '時間があれば、行きます'?",
        opts: ["Si tengo tiempo, voy", "Si no tengo tiempo, voy", "Aunque no tenga tiempo, voy", "Cuando tenga tiempo, iré"],
        ans: 0, exp: "あれば = 'areba' (si hay). Frase: 時間があれば、行きます (Jikan ga areba, ikimasu) = Si tengo tiempo, voy."
    },
    // POTENCIAL
    {
        profe: false, intermedio: true, avanzado: false, unit: "Potencial", diff: "medium",
        q: "¿Cómo se dice 'Puedo comer sushi'?",
        opts: ["寿司を食べる", "寿司が食べられる", "寿司を食べたい", "寿司を食べている"],
        ans: 1, exp: "食べられる = 'taberareru' (potencial). Frase: 私は寿司が食べられる (Watashi wa sushi ga taberareru) = Puedo comer sushi. Nota: la partícula a menudo es が con potencial."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Potencial", diff: "medium",
        q: "Forma potencial coloquial de '見る' (poder ver):",
        opts: ["見られる", "見れる", "見える", "見ることができる"],
        ans: 1, exp: "見れる = 'mireru' (ra-nuki kotoba - forma coloquial). Frase: この映画、見れる？ (Kono eiga, mireru?) = ¿Puedes ver esta película? La forma estándar es 見られる (mirareru)."
    },
    // COMPARACIONES
    {
        profe: false, intermedio: true, avanzado: false, unit: "Comparación", diff: "medium",
        q: "¿Cómo se dice 'El sushi es más delicioso que el ramen'?",
        opts: ["寿司はラーメンよりおいしい", "ラーメンは寿司よりおいしい", "寿司よりラーメンのほうがおいしい", "A y C son correctas"],
        ans: 3, exp: "A: 寿司はラーメンよりおいしい (Sushi wa ramen yori oishii). C: 寿司よりラーメンのほうがおいしい (Sushi yori ramen no hō ga oishii). Ambas son correctas. Romanización: Sushi wa ramen yori oishii."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Comparación", diff: "medium",
        q: "¿Qué significa '一番好きな食べ物は何ですか？'?",
        opts: ["¿Cuál es tu comida menos favorita?", "¿Cuál es tu comida más favorita?", "¿Te gusta la comida?", "¿Qué comida no te gusta?"],
        ans: 1, exp: "一番 = 'ichiban' (el más). Frase: 一番好きな食べ物は何ですか？ (Ichiban suki na tabemono wa nan desu ka?) = ¿Cuál es tu comida favorita?"
    },
    // CONTADORES
    {
        profe: false, intermedio: true, avanzado: false, unit: "Contadores", diff: "medium",
        q: "¿Cómo se dice 'dos personas'?",
        opts: ["二人", "二名", "二人 (ふたり)", "二方"],
        ans: 2, exp: "二人 = 'futari' (excepción, no 'nini'). Frase: 二人で行きます (Futari de ikimasu) = Vamos dos personas. Romanización: futari."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Contadores", diff: "medium",
        q: "¿Qué significa '三本のペン'?",
        opts: ["Tres hojas de papel", "Tres lápices (objetos largos)", "Tres personas", "Tres animales pequeños"],
        ans: 1, exp: "本 = 'hon' (contador para objetos largos: lápices, botellas, árboles). Frase: 三本のペン (San-bon no pen) = Tres lápices. Romanización: sanbon (cambia a 'bon' por sonorización)."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Contadores", diff: "medium",
        q: "¿Cómo se dice 'un día' (fecha, no duración)?",
        opts: ["いちにち", "ついたち", "いちじつ", "ひとひ"],
        ans: 1, exp: "ついたち = 'tsuitachi' (día 1 del mes). Frase: 一月一日 (Ichigatsu tsuitachi) = 1 de enero. Para duración 'un día' se dice 一日 (ichinichi)."
    },
    // VOLITIVA
    {
        profe: false, intermedio: true, avanzado: false, unit: "Volitiva", diff: "medium",
        q: "¿Qué significa '行こう！'?",
        opts: ["¡Voy!", "¡Vamos!", "¡Ve!", "¡Vete!"],
        ans: 1, exp: "行こう = 'ikō' (vamos - volitiva informal). Frase: みんなで行こう！ (Minna de ikō!) = ¡Vamos todos juntos!"
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Volitiva", diff: "medium",
        q: "¿Qué significa '勉強しようと思う'?",
        opts: ["Estudié", "Voy a estudiar (intención)", "Estudia", "Quiero estudiar"],
        ans: 1, exp: "しようと思う = 'shiyō to omou' (pensar en hacer - intención). Frase: 今日は勉強しようと思う (Kyō wa benkyō shiyō to omou) = Pienso estudiar hoy."
    },
    // てしまう
    {
        profe: false, intermedio: true, avanzado: false, unit: "てしまう", diff: "medium",
        q: "¿Qué significa 'ケーキを全部食べてしまった'?",
        opts: ["Comí todo el pastel (y me arrepiento o ya no queda)", "No comí el pastel", "Quiero comer el pastel", "Me comí un poco del pastel"],
        ans: 0, exp: "食べてしまった = 'tabete shimatta' (completación/arrepentimiento). Frase: ケーキを全部食べてしまった (Kēki o zenbu tabete shimatta) = Me comí todo el pastel (ya no queda / me arrepiento)."
    },
    // ておく
    {
        profe: false, intermedio: true, avanzado: false, unit: "ておく", diff: "medium",
        q: "¿Qué significa '予約しておく'?",
        opts: ["Cancelar reserva", "Reservar con anticipación (preparación)", "Olvidar reservar", "Confirmar reserva"],
        ans: 1, exp: "予約しておく = 'yoyaku shite oku' (reservar con anticipación como preparación). Frase: レストランを予約しておく (Resutoran o yoyaku shite oku) = Reservo el restaurante con anticipación."
    },
    // てみる
    {
        profe: false, intermedio: true, avanzado: false, unit: "てみる", diff: "medium",
        q: "¿Qué significa '一度、日本に行ってみたい'?",
        opts: ["Fui a Japón una vez", "Quiero ir a Japón una vez (para ver cómo es)", "Nunca iré a Japón", "Voy a Japón ahora"],
        ans: 1, exp: "行ってみる = 'itte miru' (intentar hacer/probar). Frase: 一度、日本に行ってみたい (Ichido, Nihon ni itte mitai) = Quiero ir a Japón una vez (para experimentarlo)."
    },
    // はず
    {
        profe: false, intermedio: true, avanzado: false, unit: "はず", diff: "medium",
        q: "¿Qué significa '彼はもうすぐ来るはずだ'?",
        opts: ["Él ya se fue", "Él debería venir pronto (expectativa lógica)", "Él no va a venir", "Él quiere venir"],
        ans: 1, exp: "はず = 'hazu' (expectativa basada en evidencia). Frase: 彼はもうすぐ来るはずだ (Kare wa mōsugu kuru hazu da) = Él debería venir pronto (porque normalmente es puntual / ya debería estar aquí)."
    },
    // かもしれない
    {
        profe: false, intermedio: true, avanzado: false, unit: "かもしれない", diff: "medium",
        q: "¿Qué significa '明日は雨が降るかもしれない'?",
        opts: ["Mañana definitivamente lloverá", "Mañana tal vez llueva", "Mañana no lloverá", "Mañana quiero que llueva"],
        ans: 1, exp: "かもしれない = 'kamo shirenai' (quizás, tal vez). Frase: 明日は雨が降るかもしれない (Ashita wa ame ga furu kamo shirenai) = Mañana tal vez llueva."
    },
    // そうだ (apariencia)
    {
        profe: false, intermedio: true, avanzado: false, unit: "そうだ", diff: "medium",
        q: "¿Qué significa 'このケーキはおいしそう'?",
        opts: ["Este pastel es delicioso", "Este pastel parece delicioso", "Este pastel no es delicioso", "Quiero este pastel"],
        ans: 1, exp: "おいしそう = 'oishisō' (parece delicioso - basado en apariencia). Frase: このケーキはおいしそう (Kono kēki wa oishisō) = Este pastel parece delicioso."
    },
    // ようだ
    {
        profe: false, intermedio: true, avanzado: false, unit: "ようだ", diff: "medium",
        q: "¿Qué significa '誰かがいるようだ'?",
        opts: ["Parece que hay alguien (basado en evidencia)", "No hay nadie", "Quiero que venga alguien", "Hay mucha gente"],
        ans: 0, exp: "ようだ = 'yō da' (parece que - basado en observación). Frase: 誰かがいるようだ (Dareka ga iru yō da) = Parece que hay alguien (por ejemplo, por las luces o ruidos)."
    },
    // つもり
    {
        profe: false, intermedio: true, avanzado: false, unit: "つもり", diff: "medium",
        q: "¿Qué significa '卒業したら、日本で働くつもりです'?",
        opts: ["Trabajé en Japón después de graduarme", "Tengo la intención de trabajar en Japón después de graduarme", "No quiero trabajar en Japón", "Trabajo en Japón ahora"],
        ans: 1, exp: "つもり = 'tsumori' (intención/plan). Frase: 卒業したら、日本で働くつもりです (Sotsugyō shitara, Nihon de hataraku tsumori desu) = Tengo la intención de trabajar en Japón después de graduarme."
    },
    // ながら
    {
        profe: false, intermedio: true, avanzado: false, unit: "ながら", diff: "medium",
        q: "¿Qué significa 'テレビを見ながら勉強する'?",
        opts: ["Estudio después de ver televisión", "Estudio mientras veo televisión", "Veo televisión después de estudiar", "No estudio ni veo televisión"],
        ans: 1, exp: "ながら = 'nagara' (mientras). Frase: テレビを見ながら勉強する (Terebi o minagara benkyō suru) = Estudio mientras veo televisión."
    },
    // 前に / 後で
    {
        profe: false, intermedio: true, avanzado: false, unit: "Tiempo", diff: "medium",
        q: "¿Qué significa '食べた後で、歯を磨く'?",
        opts: ["Me lavo los dientes antes de comer", "Me lavo los dientes después de comer", "Como después de lavarme los dientes", "No me lavo los dientes"],
        ans: 1, exp: "た後で = 'ta ato de' (después de hacer). Frase: 食べた後で、歯を磨く (Tabeta ato de, ha o migaku) = Me lavo los dientes después de comer."
    },
    {
        profe: false, intermedio: true, avanzado: false, unit: "Tiempo", diff: "medium",
        q: "¿Qué significa '寝る前に、本を読む'?",
        opts: ["Leo un libro después de dormir", "Leo un libro antes de dormir", "Duermo después de leer", "No leo antes de dormir"],
        ans: 1, exp: "前に = 'mae ni' (antes de). Frase: 寝る前に、本を読む (Neru mae ni, hon o yomu) = Leo un libro antes de dormir."
    },
    // PASIVA
    {
        profe: false, intermedio: true, avanzado: false, unit: "Voz pasiva", diff: "hard",
        q: "¿Qué significa 'この本は多くの人に読まれている'?",
        opts: ["Mucha gente lee este libro", "Este libro es leído por mucha gente", "Este libro no es leído", "Leí este libro"],
        ans: 1, exp: "読まれている = 'yomarete iru' (está siendo leído - pasiva). Frase: この本は多くの人に読まれている (Kono hon wa ōku no hito ni yomarete iru) = Este libro es leído por mucha gente."
    },
    // CAUSATIVA
    {
        profe: false, intermedio: true, avanzado: false, unit: "Causativa", diff: "hard",
        q: "¿Qué significa '子供に野菜を食べさせる'?",
        opts: ["El niño come verduras", "Hago que el niño coma verduras", "El niño no come verduras", "Como verduras con el niño"],
        ans: 1, exp: "食べさせる = 'tabesaseru' (hacer comer - causativa). Frase: 子供に野菜を食べさせる (Kodomo ni yasai o tabesaseru) = Hago que el niño coma verduras / Le doy de comer verduras al niño."
    },

    // ==================== NIVEL AVANZADO (N2-N1) - avanzado: true ====================
    // KEIGO HONORÍFICO CON FRASES
    {
        profe: false, intermedio: false, avanzado: true, unit: "Keigo Honorífico", diff: "hard",
        q: "¿Qué significa '社長がいらっしゃいます'?",
        opts: ["El presidente se fue", "El presidente está/va/ven (honorífico)", "El presidente no está", "Llamé al presidente"],
        ans: 1, exp: "いらっしゃる = 'irassharu' (honorífico de ir/venir/estar). Frase: 社長がいらっしゃいます (Shachō ga irasshaimasu) = El presidente está (honorífico)."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Keigo Honorífico", diff: "hard",
        q: "¿Qué significa '先生がおっしゃいました'?",
        opts: ["El profesor dijo (honorífico)", "El profesor escuchó", "Le dije al profesor", "El profesor vino"],
        ans: 0, exp: "おっしゃる = 'ossharu' (honorífico de 'decir'). Frase: 先生がおっしゃいました (Sensei ga osshaimashita) = El profesor dijo (honorífico)."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Keigo Honorífico", diff: "hard",
        q: "¿Qué significa '何をなさいますか？'?",
        opts: ["¿Qué hiciste?", "¿Qué va a hacer (honorífico)?", "¿Qué quieres hacer?", "¿Qué estás haciendo?"],
        ans: 1, exp: "なさる = 'nasaru' (honorífico de 'hacer'). Frase: 何をなさいますか？ (Nani o nasaimasu ka?) = ¿Qué va a hacer? (honorífico, a un superior)."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Keigo Honorífico", diff: "hard",
        q: "¿Qué significa 'ご覧になりましたか？'?",
        opts: ["¿Viste?", "¿Lo vio (honorífico)?", "¿Quieres ver?", "¿Mostraste?"],
        ans: 1, exp: "ご覧になる = 'goran ni naru' (honorífico de 'ver'). Frase: 映画をご覧になりましたか？ (Eiga o goran ni narimashita ka?) = ¿Vio la película? (honorífico)."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Keigo Honorífico", diff: "hard",
        q: "¿Qué significa 'どうぞ召し上がってください'?",
        opts: ["Por favor, no coma", "Por favor, coma (honorífico)", "Por favor, beba", "Por favor, venga"],
        ans: 1, exp: "召し上がる = 'meshiagaru' (honorífico de comer/beber). Frase: どうぞ召し上がってください (Dōzo meshiagatte kudasai) = Por favor, coma (honorífico, a un invitado)."
    },
    // KEIGO HUMILDE
    {
        profe: false, intermedio: false, avanzado: true, unit: "Keigo Humilde", diff: "hard",
        q: "¿Qué significa '私が参ります'?",
        opts: ["Usted viene", "Yo voy (humilde)", "Él viene", "Nosotros vamos"],
        ans: 1, exp: "参る = 'mairu' (humilde de ir/venir). Frase: 私が参ります (Watashi ga mairimasu) = Yo voy (humilde, hablando de uno mismo)."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Keigo Humilde", diff: "hard",
        q: "¿Qué significa '先生に申しました'?",
        opts: ["Le dije al profesor (humilde)", "El profesor dijo", "Escuché al profesor", "Pregunté al profesor"],
        ans: 0, exp: "申す = 'mōsu' (humilde de 'decir'). Frase: 先生に申しました (Sensei ni mōshimashita) = Le dije al profesor (humilde, rebajando mi acción)."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Keigo Humilde", diff: "hard",
        q: "¿Qué significa '私がいたします'?",
        opts: ["Usted hace", "Yo hago (humilde)", "Él hace", "Ellos hacen"],
        ans: 1, exp: "いたす = 'itasu' (humilde de 'hacer'). Frase: 私がいたします (Watashi ga itashimasu) = Yo lo haré (humilde)."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Keigo Humilde", diff: "hard",
        q: "¿Qué significa 'お手紙を拝見しました'?",
        opts: ["Escribí una carta", "Vi la carta (humilde)", "Envié la carta", "Recibí la carta"],
        ans: 1, exp: "拝見する = 'haiken suru' (humilde de 'ver'). Frase: お手紙を拝見しました (O-tegami o haiken shimashita) = Vi su carta (humilde, rebajando mi acción de ver)."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Keigo Humilde", diff: "hard",
        q: "¿Qué significa 'この本をいただいてもいいですか？'?",
        opts: ["¿Puedo dar este libro?", "¿Puedo recibir este libro (humilde)?", "¿Puedo leer este libro?", "¿Puedo comprar este libro?"],
        ans: 1, exp: "いただく = 'itadaku' (humilde de 'recibir/comer/beber'). Frase: この本をいただいてもいいですか？ (Kono hon o itadaite mo ii desu ka?) = ¿Puedo recibir este libro? (humilde)."
    },
    // FORMAS LITERARIAS
    {
        profe: false, intermedio: false, avanzado: true, unit: "Literario", diff: "hard",
        q: "¿Qué significa '知らず' en contexto literario?",
        opts: ["Saber", "Sin saber (forma literaria de 知らない)", "Saber mucho", "Querer saber"],
        ans: 1, exp: "知らず = 'shirazu' (forma literaria de 知らない - sin saber). Frase literaria: 知らず知らず (Shirazu shirazu) = Sin darse cuenta."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Literario", diff: "hard",
        q: "¿Qué significa '行くまい'?",
        opts: ["Iré", "No iré (intención negativa literaria)", "Quiero ir", "Debo ir"],
        ans: 1, exp: "まい = 'mai' (intención negativa literaria). Frase: 二度と行くまい (Nido to iku mai) = No iré nunca más (literario)."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Literario", diff: "hard",
        q: "¿Qué significa '風の如く' (Kaze no gotoku)?",
        opts: ["Contra el viento", "Como el viento (símil literario)", "Con el viento", "Sin viento"],
        ans: 1, exp: "如く = 'gotoku' (como, semejante a - literario). Frase: 風の如く (Kaze no gotoku) = Como el viento."
    },
    // YOJIJUKUGO - FRASES
    {
        profe: false, intermedio: false, avanzado: true, unit: "Yojijukugo", diff: "hard",
        q: "¿Qué significa '自業自得' (jigou jitoku)?",
        opts: ["Autosuficiencia", "Cosechas lo que siembras", "Trabajo en equipo", "Suerte"],
        ans: 1, exp: "自業自得 = 'jigō jitoku' (pagar las consecuencias). Frase: 自業自得だよ (Jigō jitoku da yo) = Te lo buscaste / Son las consecuencias de tus actos."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Yojijukugo", diff: "hard",
        q: "¿Qué significa '起死回生' (kishikaisei)?",
        opts: ["Muerte y resurrección", "Recuperación milagrosa / volver de la muerte", "Vida después de la muerte", "Renacer"],
        ans: 1, exp: "起死回生 = 'kishikaisei' (resucitar de una situación desesperada). Frase: 起死回生のホームラン (Kishikaisei no hōmuran) = Un jonrón que cambió el juego milagrosamente."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Yojijukugo", diff: "hard",
        q: "¿Qué significa '一念発起' (ichinen hokki)?",
        opts: ["Olvidar algo", "Decidirse a hacer algo con determinación", "Tener miedo", "Perder la esperanza"],
        ans: 1, exp: "一念発起 = 'ichinen hokki' (decidirse firmemente a hacer algo). Frase: 一念発起して日本語を勉強する (Ichinen hokki shite nihongo o benkyō suru) = Me decidí firmemente a estudiar japonés."
    },
    // PROVERBIOS
    {
        profe: false, intermedio: false, avanzado: true, unit: "Proverbios", diff: "hard",
        q: "¿Qué significa '出る釘は打たれる' (Deru kugi wa utareru)?",
        opts: ["El clavo que sobresale recibe el martillazo (no destaques)", "El que la hace la paga", "Más vale tarde que nunca", "A caballo regalado no le mires el diente"],
        ans: 0, exp: "出る釘は打たれる = 'Deru kugi wa utareru' (El clavo que sobresale es golpeado). Refleja la cultura japonesa de conformidad social."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Proverbios", diff: "hard",
        q: "¿Qué significa '花鳥風月' (Kachō fūgetsu)?",
        opts: ["Las estaciones del año", "La belleza de la naturaleza (flores, aves, viento, luna)", "Los elementos de la tierra", "Los animales"],
        ans: 1, exp: "花鳥風月 = 'Kachō fūgetsu' (la belleza de la naturaleza). Se usa en poesía y arte tradicional. Frase: 花鳥風月を愛でる (Kachō fūgetsu o mederu) = Apreciar la belleza de la naturaleza."
    },
    // PASIVA DE SUFRIMIENTO
    {
        profe: false, intermedio: false, avanzado: true, unit: "Voz pasiva", diff: "hard",
        q: "¿Qué significa '妻に先立たれた'?",
        opts: ["Mi esposa me dejó primero", "Mi esposa falleció antes que yo (y sufro por ello)", "Mi esposa me acompañó", "Mi esposa llegó tarde"],
        ans: 1, exp: "先立たれた = 'sakidatareta' (pasiva de sufrimiento - perder a alguien). Frase: 妻に先立たれた (Tsuma ni sakidatareta) = Mi esposa falleció antes que yo (y sufro por ello). Es una forma delicada de decirlo."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Voz pasiva", diff: "hard",
        q: "¿Qué significa '子供に泣かれた'?",
        opts: ["El niño lloró (y me afectó)", "Hice llorar al niño", "El niño no lloró", "El niño lloró (sin afectarme)"],
        ans: 0, exp: "泣かれた = 'nakareta' (pasiva de sufrimiento). Frase: 子供に泣かれて困った (Kodomo ni nakarete komatta) = El niño lloró y me causó problemas / Me afectó su llanto."
    },
    // CAUSATIVA-PASIVA
    {
        profe: false, intermedio: false, avanzado: true, unit: "Causativa-pasiva", diff: "hard",
        q: "¿Qué significa '仕事をさせられている'?",
        opts: ["Estoy haciendo trabajo", "Me están obligando a trabajar", "Quiero trabajar", "No puedo trabajar"],
        ans: 1, exp: "させられている = 'saserarete iru' (causativa-pasiva - siendo obligado a hacer). Frase: 毎日残業をさせられている (Mainichi zangyō o saserarete iru) = Me están obligando a hacer horas extras todos los días."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Causativa-pasiva", diff: "hard",
        q: "Forma contraída coloquial de '飲まさせられる' (ser obligado a beber):",
        opts: ["飲まされる", "飲ませられる", "飲まれる", "飲ませる"],
        ans: 0, exp: "飲まされる = 'nomasareru' (contracción de 飲まさせられる). Frase: 上司に酒を飲まされた (Jōshi ni sake o nomasareta) = Mi jefe me obligó a beber alcohol."
    },
    // EXPRESIONES AVANZADAS
    {
        profe: false, intermedio: false, avanzado: true, unit: "Expresiones", diff: "hard",
        q: "¿Qué significa '言わざるを得ない'?",
        opts: ["No puedo evitar decir", "No quiero decir", "Puedo decir", "Dije"],
        ans: 0, exp: "ざるを得ない = 'zaru o enai' (no tener más remedio que). Frase: 事実だから、言わざるを得ない (Jijitsu dakara, iwazaru o enai) = Porque es un hecho, no puedo evitar decirlo."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Expresiones", diff: "hard",
        q: "¿Qué significa 'に限らず' en '子供に限らず、大人も楽しめる'?",
        opts: ["Solo los niños", "No solo los niños sino también los adultos", "Excepto los niños", "Ni niños ni adultos"],
        ans: 1, exp: "に限らず = 'ni kagurazu' (no solo... sino también). Frase: 子供に限らず、大人も楽しめる (Kodomo ni kagurazu, otona mo tanoshimeru) = No solo los niños, sino también los adultos pueden disfrutarlo."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Expresiones", diff: "hard",
        q: "¿Qué significa 'に違いない' en '彼は日本人に違いない'?",
        opts: ["Tal vez es japonés", "Seguramente es japonés (no hay duda)", "No es japonés", "Puede que sea japonés"],
        ans: 1, exp: "に違いない = 'ni chigai nai' (seguramente, sin duda). Frase: 彼は日本人に違いない (Kare wa nihonjin ni chigai nai) = Seguramente él es japonés."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Expresiones", diff: "hard",
        q: "¿Qué significa '〜にもかかわらず' en '雨にもかかわらず、出かけた'?",
        opts: ["Debido a la lluvia", "A pesar de la lluvia", "Por la lluvia", "Sin lluvia"],
        ans: 1, exp: "にもかかわらず = 'ni mo kakawarazu' (a pesar de). Frase: 雨にもかかわらず、出かけた (Ame ni mo kakawarazu, dekaketa) = A pesar de la lluvia, salí."
    },
    // ONOMATOPEYAS AVANZADAS
    {
        profe: false, intermedio: false, avanzado: true, unit: "Onomatopeyas", diff: "hard",
        q: "¿Qué significa 'いらいら'?",
        opts: ["Relajado", "Irritado / impaciente", "Triste", "Feliz"],
        ans: 1, exp: "いらいら = 'iraira' (irritación, impaciencia). Frase: 待ちくたびれていらいらする (Machikutabirete iraira suru) = Estoy irritado de tanto esperar."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Onomatopeyas", diff: "hard",
        q: "¿Qué significa 'わくわく'?",
        opts: ["Aburrido", "Emocionado / con expectación", "Triste", "Enojado"],
        ans: 1, exp: "わくわく = 'wakuwaku' (emoción anticipatoria). Frase: 明日の旅行を考えるとわくわくする (Ashita no ryokō o kangaeru to wakuwaku suru) = Solo de pensar en el viaje de mañana me emociono."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Onomatopeyas", diff: "hard",
        q: "¿Qué significa 'すっきり'?",
        opts: ["Desordenado", "Limpio / refrescado / satisfactorio", "Sucio", "Pesado"],
        ans: 1, exp: "すっきり = 'sukkiri' (sensación de limpieza, claridad, alivio). Frase: 問題が解決してすっきりした (Mondai ga kaiketsu shite sukkiri shita) = El problema se resolvió y me siento aliviado."
    },
    // KANJI AVANZADO - LECTURAS
    {
        profe: false, intermedio: false, avanzado: true, unit: "Kanji avanzado", diff: "hard",
        q: "¿Cómo se lee '一日' cuando significa 'primer día del mes'?",
        opts: ["いちにち", "ついたち", "ひとひ", "いちじつ"],
        ans: 1, exp: "一日 (primer día) = 'tsuitachi'. Frase: 一月一日 (Ichigatsu tsuitachi) = 1 de enero. Para duración 'un día' se lee 'ichinichi'."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Kanji avanzado", diff: "hard",
        q: "¿Cómo se lee '大人'?",
        opts: ["おとな", "だいじん", "たいじん", "おおひと"],
        ans: 0, exp: "大人 = 'otona' (adulto). Frase: 大人になる (Otona ni naru) = Convertirse en adulto."
    },
    {
        profe: false, intermedio: false, avanzado: true, unit: "Kanji avanzado", diff: "hard",
        q: "¿Cómo se lee '今朝'?",
        opts: ["いまあさ", "こんちょう", "けさ", "こんあさ"],
        ans: 2, exp: "今朝 = 'kesa' (esta mañana). Frase: 今朝、早く起きた (Kesa, hayaku okita) = Me levanté temprano esta mañana."
    },
    // ~ざるを得ない
    {
        profe: false, intermedio: false, avanzado: true, unit: "Expresiones", diff: "hard",
        q: "¿Qué significa '認めざるを得ない'?",
        opts: ["No puedo evitar reconocer", "No quiero reconocer", "Puedo reconocer", "Reconocí"],
        ans: 0, exp: "ざるを得ない = 'zaru o enai' (no tener más remedio que). Frase: 彼の才能は認めざるを得ない (Kare no sainō wa mitomezaru o enai) = No puedo evitar reconocer su talento."
    },
    // 〜べからず
    {
        profe: false, intermedio: false, avanzado: true, unit: "Literario", diff: "hard",
        q: "¿Qué significa '入るべからず' en un letrero?",
        opts: ["Se permite entrar", "Prohibido entrar (literario)", "Entre con cuidado", "Entrada libre"],
        ans: 1, exp: "べからず = 'bekarazu' (prohibición literaria/arcaica). Frase: 立入るべからず (Tachiiru bekarazu) = Prohibido entrar (letrero formal/antiguo)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Hiragana - Dakuten", diff: "easy",
        q: "¿Cómo se lee 'が'?",
        opts: ["ka", "ga", "gi", "gu"],
        ans: 1, exp: "が = 'ga'. Frase: がっこう (gakkō) = escuela. Romanización: ga."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Hiragana - Dakuten", diff: "easy",
        q: "¿Cómo se lee 'ぎ'?",
        opts: ["gi", "ki", "ga", "gu"],
        ans: 0, exp: "ぎ = 'gi'. Frase: ぎゅうにゅう (gyūnyū) = leche. Romanización: gi."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Hiragana - Dakuten", diff: "easy",
        q: "¿Cómo se lee 'ぐ'?",
        opts: ["gu", "ku", "ga", "gi"],
        ans: 0, exp: "ぐ = 'gu'. Frase: ぐあい (guai) = condición. Romanización: gu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Hiragana - Dakuten", diff: "easy",
        q: "¿Cómo se lee 'げ'?",
        opts: ["ge", "ke", "ga", "go"],
        ans: 0, exp: "げ = 'ge'. Frase: げんき (genki) = saludable. Romanización: ge."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Hiragana - Dakuten", diff: "easy",
        q: "¿Cómo se lee 'ご'?",
        opts: ["go", "ko", "ga", "gi"],
        ans: 0, exp: "ご = 'go'. Frase: ごはん (gohan) = arroz/comida. Romanización: go."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Hiragana - Dakuten", diff: "easy",
        q: "¿Cómo se lee 'ざ'?",
        opts: ["za", "sa", "zu", "ze"],
        ans: 0, exp: "ざ = 'za'. Frase: ざっし (zasshi) = revista. Romanización: za."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Hiragana - Dakuten", diff: "easy",
        q: "¿Cómo se lee 'じ'?",
        opts: ["ji", "shi", "za", "zu"],
        ans: 0, exp: "じ = 'ji'. Frase: じかん (jikan) = tiempo. Romanización: ji."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Hiragana - Dakuten", diff: "easy",
        q: "¿Cómo se lee 'ず'?",
        opts: ["zu", "su", "za", "ze"],
        ans: 0, exp: "ず = 'zu'. Frase: ずるい (zurui) = astuto. Romanización: zu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Hiragana - Dakuten", diff: "easy",
        q: "¿Cómo se lee 'ぜ'?",
        opts: ["ze", "se", "za", "zu"],
        ans: 0, exp: "ぜ = 'ze'. Frase: ぜんぶ (zenbu) = todo. Romanización: ze."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Hiragana - Dakuten", diff: "easy",
        q: "¿Cómo se lee 'ぞ'?",
        opts: ["zo", "so", "za", "zu"],
        ans: 0, exp: "ぞ = 'zo'. Frase: ぞう (zō) = elefante. Romanización: zo."
    },
    // Preguntas 11-20: Katakana palabras extranjeras
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Katakana", diff: "easy",
        q: "¿Qué significa 'コンピュータ'?",
        opts: ["Computadora", "Teléfono", "Tablet", "Televisión"],
        ans: 0, exp: "コンピュータ = 'konpyūta' (computadora). Frase: 新しいコンピュータを買った (Atarashii konpyūta o katta)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Katakana", diff: "easy",
        q: "¿Qué significa 'スマホ'?",
        opts: ["Computadora", "Smartphone", "Tablet", "Reloj"],
        ans: 1, exp: "スマホ = 'sumaho' (smartphone, abrev.). Frase: スマホを忘れた (Sumaho o wasureta)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Katakana", diff: "easy",
        q: "¿Qué significa 'バイト'?",
        opts: ["Trabajo tiempo completo", "Trabajo parcial", "Estudio", "Vacaciones"],
        ans: 1, exp: "バイト = 'baito' (trabajo parcial, de Arubaito). Frase: コンビニでバイトをしている (Konbini de baito o shite iru)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Katakana", diff: "easy",
        q: "¿Qué significa 'エアコン'?",
        opts: ["Calefacción", "Aire acondicionado", "Ventilador", "Calentador"],
        ans: 1, exp: "エアコン = 'eakon' (aire acondicionado). Frase: エアコンをつける (Eakon o tsukeru)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Katakana", diff: "easy",
        q: "¿Qué significa 'リモコン'?",
        opts: ["Control remoto", "Teléfono", "Radio", "Micrófono"],
        ans: 0, exp: "リモコン = 'rimokon' (control remoto). Frase: リモコンがどこにあるか分からない (Rimokon ga doko ni aru ka wakaranai)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Katakana", diff: "easy",
        q: "¿Qué significa 'カラオケ'?",
        opts: ["Baile", "Cantar con pista", "Instrumento", "Concierto"],
        ans: 1, exp: "カラオケ = 'karaoke' (karaoke). Frase: 友達とカラオケに行く (Tomodachi to karaoke ni iku)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Katakana", diff: "easy",
        q: "¿Qué significa 'アニメ'?",
        opts: ["Película", "Animé japonés", "Dibujo", "Cómic"],
        ans: 1, exp: "アニメ = 'anime' (animación japonesa). Frase: アニメを見るのが好き (Anime o miru no ga suki)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Katakana", diff: "easy",
        q: "¿Qué significa 'マンガ'?",
        opts: ["Libro", "Revista", "Cómic japonés", "Periódico"],
        ans: 2, exp: "マンガ = 'manga' (cómic japonés). Frase: 週刊マンガを読む (Shūkan manga o yomu)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Katakana", diff: "easy",
        q: "¿Qué significa 'ゲーム'?",
        opts: ["Deporte", "Juego", "Competencia", "Ejercicio"],
        ans: 1, exp: "ゲーム = 'gēmu' (juego). Frase: ビデオゲームをする (Bideo gēmu o suru)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Katakana", diff: "easy",
        q: "¿Qué significa 'アルバイト'?",
        opts: ["Trabajo tiempo completo", "Trabajo parcial", "Práctica", "Voluntariado"],
        ans: 1, exp: "アルバイト = 'arubaito' (trabajo parcial, del alemán Arbeit). Frase: アルバイトを探している (Arubaito o sagashite iru)."
    },
    // Preguntas 21-30: Días de la semana
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Días de semana", diff: "easy",
        q: "¿Cómo se dice 'domingo'?",
        opts: ["月曜日", "火曜日", "日曜日", "土曜日"],
        ans: 2, exp: "日曜日 = 'nichiyōbi'. Frase: 日曜日は休みです (Nichiyōbi wa yasumi desu). Romanización: nichiyōbi."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Días de semana", diff: "easy",
        q: "¿Cómo se dice 'lunes'?",
        opts: ["月曜日", "火曜日", "水曜日", "木曜日"],
        ans: 0, exp: "月曜日 = 'getsuyōbi'. Frase: 月曜日から仕事が始まる (Getsuyōbi kara shigoto ga hajimaru). Romanización: getsuyōbi."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Días de semana", diff: "easy",
        q: "¿Cómo se dice 'martes'?",
        opts: ["水曜日", "木曜日", "火曜日", "金曜日"],
        ans: 2, exp: "火曜日 = 'kayōbi'. Frase: 火曜日に映画を見る (Kayōbi ni eiga o miru). Romanización: kayōbi."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Días de semana", diff: "easy",
        q: "¿Cómo se dice 'miércoles'?",
        opts: ["火曜日", "水曜日", "木曜日", "金曜日"],
        ans: 1, exp: "水曜日 = 'suiyōbi'. Frase: 水曜日は会議がある (Suiyōbi wa kaigi ga aru). Romanización: suiyōbi."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Días de semana", diff: "easy",
        q: "¿Cómo se dice 'jueves'?",
        opts: ["水曜日", "木曜日", "金曜日", "土曜日"],
        ans: 1, exp: "木曜日 = 'mokuyōbi'. Frase: 木曜日にテストがある (Mokuyōbi ni tesuto ga aru). Romanización: mokuyōbi."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Días de semana", diff: "easy",
        q: "¿Cómo se dice 'viernes'?",
        opts: ["木曜日", "金曜日", "土曜日", "日曜日"],
        ans: 1, exp: "金曜日 = 'kin'yōbi'. Frase: 金曜日の夜は飲み会 (Kin'yōbi no yoru wa nomikai). Romanización: kin'yōbi."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Días de semana", diff: "easy",
        q: "¿Cómo se dice 'sábado'?",
        opts: ["金曜日", "土曜日", "日曜日", "月曜日"],
        ans: 1, exp: "土曜日 = 'doyōbi'. Frase: 土曜日は遅くまで寝る (Doyōbi wa osoku made neru). Romanización: doyōbi."
    },
    // Preguntas 31-40: Meses
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Meses", diff: "easy",
        q: "¿Cómo se dice 'enero'?",
        opts: ["一月", "二月", "三月", "四月"],
        ans: 0, exp: "一月 = 'ichigatsu'. Frase: 一月は寒い (Ichigatsu wa samui). Romanización: ichigatsu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Meses", diff: "easy",
        q: "¿Cómo se dice 'febrero'?",
        opts: ["一月", "二月", "三月", "四月"],
        ans: 1, exp: "二月 = 'nigatsu'. Frase: 二月にバレンタインがある (Nigatsu ni Barentain ga aru). Romanización: nigatsu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Meses", diff: "easy",
        q: "¿Cómo se dice 'marzo'?",
        opts: ["一月", "二月", "三月", "四月"],
        ans: 2, exp: "三月 = 'sangatsu'. Frase: 三月に卒業式がある (Sangatsu ni sotsugyōshiki ga aru). Romanización: sangatsu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Meses", diff: "easy",
        q: "¿Cómo se dice 'abril'?",
        opts: ["三月", "四月", "五月", "六月"],
        ans: 1, exp: "四月 = 'shigatsu'. Frase: 四月に新学期が始まる (Shigatsu ni shingakki ga hajimaru). Romanización: shigatsu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Meses", diff: "easy",
        q: "¿Cómo se dice 'mayo'?",
        opts: ["四月", "五月", "六月", "七月"],
        ans: 1, exp: "五月 = 'gogatsu'. Frase: 五月はGWがある (Gogatsu wa GW ga aru). Romanización: gogatsu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Meses", diff: "easy",
        q: "¿Cómo se dice 'junio'?",
        opts: ["五月", "六月", "七月", "八月"],
        ans: 1, exp: "六月 = 'rokugatsu'. Frase: 六月に梅雨が始まる (Rokugatsu ni tsuyu ga hajimaru). Romanización: rokugatsu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Meses", diff: "easy",
        q: "¿Cómo se dice 'julio'?",
        opts: ["六月", "七月", "八月", "九月"],
        ans: 1, exp: "七月 = 'shichigatsu'. Frase: 七月に海に行く (Shichigatsu ni umi ni iku). Romanización: shichigatsu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Meses", diff: "easy",
        q: "¿Cómo se dice 'agosto'?",
        opts: ["七月", "八月", "九月", "十月"],
        ans: 1, exp: "八月 = 'hachigatsu'. Frase: 八月は暑い (Hachigatsu wa atsui). Romanización: hachigatsu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Meses", diff: "easy",
        q: "¿Cómo se dice 'septiembre'?",
        opts: ["八月", "九月", "十月", "十一月"],
        ans: 1, exp: "九月 = 'kugatsu'. Frase: 九月に運動会がある (Kugatsu ni undōkai ga aru). Romanización: kugatsu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Meses", diff: "easy",
        q: "¿Cómo se dice 'octubre'?",
        opts: ["九月", "十月", "十一月", "十二月"],
        ans: 1, exp: "十月 = 'jūgatsu'. Frase: 十月にハロウィンがある (Jūgatsu ni Harowin ga aru). Romanización: jūgatsu."
    },
    // Preguntas 41-50: Colores
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Colores", diff: "easy",
        q: "¿Qué significa '赤'?",
        opts: ["Rojo", "Azul", "Verde", "Amarillo"],
        ans: 0, exp: "赤 = 'aka' (rojo). Frase: 赤い車 (Akai kuruma). Romanización: aka."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Colores", diff: "easy",
        q: "¿Qué significa '青'?",
        opts: ["Rojo", "Azul", "Verde", "Amarillo"],
        ans: 1, exp: "青 = 'ao' (azul). Frase: 青い空 (Aoi sora). Romanización: ao."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Colores", diff: "easy",
        q: "¿Qué significa '緑'?",
        opts: ["Rojo", "Azul", "Verde", "Amarillo"],
        ans: 2, exp: "緑 = 'midori' (verde). Frase: 緑の芝生 (Midori no shibafu). Romanización: midori."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Colores", diff: "easy",
        q: "¿Qué significa '黄色'?",
        opts: ["Rojo", "Azul", "Verde", "Amarillo"],
        ans: 3, exp: "黄色 = 'kiiro' (amarillo). Frase: 黄色い花 (Kiiroi hana). Romanización: kiiro."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Colores", diff: "easy",
        q: "¿Qué significa '黒'?",
        opts: ["Blanco", "Negro", "Gris", "Marrón"],
        ans: 1, exp: "黒 = 'kuro' (negro). Frase: 黒い猫 (Kuroi neko). Romanización: kuro."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Colores", diff: "easy",
        q: "¿Qué significa '白'?",
        opts: ["Blanco", "Negro", "Gris", "Marrón"],
        ans: 0, exp: "白 = 'shiro' (blanco). Frase: 白い雪 (Shiroi yuki). Romanización: shiro."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Colores", diff: "easy",
        q: "¿Qué significa '茶色'?",
        opts: ["Blanco", "Negro", "Gris", "Marrón"],
        ans: 3, exp: "茶色 = 'chairo' (marrón). Frase: 茶色の犬 (Chairo no inu). Romanización: chairo."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Colores", diff: "easy",
        q: "¿Qué significa 'ピンク'?",
        opts: ["Rojo", "Rosa", "Morado", "Naranja"],
        ans: 1, exp: "ピンク = 'pinku' (rosa). Frase: ピンクの花 (Pinku no hana). Romanización: pinku."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Colores", diff: "easy",
        q: "¿Qué significa '紫'?",
        opts: ["Rojo", "Azul", "Morado", "Verde"],
        ans: 2, exp: "紫 = 'murasaki' (morado). Frase: 紫のブドウ (Murasaki no budō). Romanización: murasaki."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Colores", diff: "easy",
        q: "¿Qué significa 'オレンジ'?",
        opts: ["Rojo", "Amarillo", "Naranja", "Marrón"],
        ans: 2, exp: "オレンジ = 'orenji' (naranja). Frase: オレンジのジュース (Orenji no jūsu). Romanización: orenji."
    },
    // Preguntas 51-60: Familia (continuación)
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Familia", diff: "easy",
        q: "¿Cómo se dice 'hermano mayor' (propio)?",
        opts: ["弟", "兄", "姉", "妹"],
        ans: 1, exp: "兄 = 'ani' (mi hermano mayor). Frase: 兄は大学生です (Ani wa daigakusei desu). Romanización: ani."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Familia", diff: "easy",
        q: "¿Cómo se dice 'hermana mayor' (propia)?",
        opts: ["弟", "兄", "姉", "妹"],
        ans: 2, exp: "姉 = 'ane' (mi hermana mayor). Frase: 姉は看護師です (Ane wa kangoshi desu). Romanización: ane."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Familia", diff: "easy",
        q: "¿Cómo se dice 'hermano menor' (propio)?",
        opts: ["弟", "兄", "姉", "妹"],
        ans: 0, exp: "弟 = 'otōto' (mi hermano menor). Frase: 弟は中学生です (Otōto wa chūgakusei desu). Romanización: otōto."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Familia", diff: "easy",
        q: "¿Cómo se dice 'hermana menor' (propia)?",
        opts: ["弟", "兄", "姉", "妹"],
        ans: 3, exp: "妹 = 'imōto' (mi hermana menor). Frase: 妹は小学生です (Imōto wa shōgakusei desu). Romanización: imōto."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Familia", diff: "easy",
        q: "¿Cómo se dice 'abuela' (propia)?",
        opts: ["祖父", "祖母", "おじいさん", "おばあさん"],
        ans: 1, exp: "祖母 = 'sobo' (mi abuela). Frase: 祖母は元気です (Sobo wa genki desu). Romanización: sobo."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Familia", diff: "easy",
        q: "¿Cómo se dice 'abuelo' (propio)?",
        opts: ["祖父", "祖母", "おじいさん", "おばあさん"],
        ans: 0, exp: "祖父 = 'sofu' (mi abuelo). Frase: 祖父は医者でした (Sofu wa isha deshita). Romanización: sofu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Familia", diff: "easy",
        q: "¿Cómo se dice 'esposo' (propio)?",
        opts: ["妻", "夫", "彼氏", "彼女"],
        ans: 1, exp: "夫 = 'otto' (mi esposo). Frase: 夫は会社員です (Otto wa kaishain desu). Romanización: otto."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Familia", diff: "easy",
        q: "¿Cómo se dice 'esposa' (propia)?",
        opts: ["妻", "夫", "彼氏", "彼女"],
        ans: 0, exp: "妻 = 'tsuma' (mi esposa). Frase: 妻は料理が上手です (Tsuma wa ryōri ga jōzu desu). Romanización: tsuma."
    },
    // Preguntas 61-70: Verbos de movimiento
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'correr'?",
        opts: ["歩く", "走る", "飛ぶ", "泳ぐ"],
        ans: 1, exp: "走る = 'hashiru'. Frase: 公園を走る (Kōen o hashiru). Romanización: hashiru."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'caminar'?",
        opts: ["歩く", "走る", "飛ぶ", "泳ぐ"],
        ans: 0, exp: "歩く = 'aruku'. Frase: 学校へ歩く (Gakkō e aruku). Romanización: aruku."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'volar'?",
        opts: ["歩く", "走る", "飛ぶ", "泳ぐ"],
        ans: 2, exp: "飛ぶ = 'tobu'. Frase: 鳥が空を飛ぶ (Tori ga sora o tobu). Romanización: tobu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'nadar'?",
        opts: ["歩く", "走る", "飛ぶ", "泳ぐ"],
        ans: 3, exp: "泳ぐ = 'oyogu'. Frase: プールで泳ぐ (Pūru de oyogu). Romanización: oyogu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'subir'?",
        opts: ["上がる", "下がる", "入る", "出る"],
        ans: 0, exp: "上がる = 'agaru'. Frase: 階段を上がる (Kaidan o agaru). Romanización: agaru."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'bajar'?",
        opts: ["上がる", "下がる", "入る", "出る"],
        ans: 1, exp: "下がる = 'sagaru'. Frase: エレベーターで下がる (Erebētā de sagaru). Romanización: sagaru."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'entrar'?",
        opts: ["上がる", "下がる", "入る", "出る"],
        ans: 2, exp: "入る = 'hairu'. Frase: 部屋に入る (Heya ni hairu). Romanización: hairu."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'salir'?",
        opts: ["上がる", "下がる", "入る", "出る"],
        ans: 3, exp: "出る = 'deru'. Frase: 家を出る (Ie o deru). Romanización: deru."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'volver' (a casa)?",
        opts: ["行く", "来る", "帰る", "戻る"],
        ans: 2, exp: "帰る = 'kaeru'. Frase: 家に帰る (Ie ni kaeru). Romanización: kaeru."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Verbos", diff: "easy",
        q: "¿Cómo se dice 'regresar' (a un lugar)?",
        opts: ["行く", "来る", "帰る", "戻る"],
        ans: 3, exp: "戻る = 'modoru'. Frase: 会社に戻る (Kaisha ni modoru). Romanización: modoru."
    },
    // Preguntas 71-80: Adjetivos opuestos
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Adjetivos", diff: "easy",
        q: "¿Cuál es el opuesto de 'おおきい' (ōkii)?",
        opts: ["ちいさい", "たかい", "ひくい", "ながい"],
        ans: 0, exp: "ちいさい = 'chiisai' (pequeño). Frase: 小さい犬 (Chiisai inu)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Adjetivos", diff: "easy",
        q: "¿Cuál es el opuesto de 'たかい' (takai - alto)?",
        opts: ["ひくい", "ひろい", "せまい", "ふるい"],
        ans: 0, exp: "ひくい = 'hikui' (bajo). Frase: 低い山 (Hikui yama)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Adjetivos", diff: "easy",
        q: "¿Cuál es el opuesto de 'あたらしい' (atarashii)?",
        opts: ["ふるい", "わかい", "おそい", "はやい"],
        ans: 0, exp: "ふるい = 'furui' (viejo). Frase: 古い車 (Furui kuruma)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Adjetivos", diff: "easy",
        q: "¿Cuál es el opuesto de 'はやい' (hayai - rápido)?",
        opts: ["おそい", "おもい", "かるい", "あつい"],
        ans: 0, exp: "おそい = 'osoi' (lento/tardío). Frase: 遅い電車 (Osoi densha)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Adjetivos", diff: "easy",
        q: "¿Cuál es el opuesto de 'あつい' (atsui - caliente)?",
        opts: ["つめたい", "さむい", "あたたかい", "すずしい"],
        ans: 0, exp: "つめたい = 'tsumetai' (frío al tacto). Frase: 冷たい水 (Tsumetai mizu)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Adjetivos", diff: "easy",
        q: "¿Cuál es el opuesto de 'かるい' (karui)?",
        opts: ["おもい", "おそい", "ふかい", "あさい"],
        ans: 0, exp: "おもい = 'omoi' (pesado). Frase: 重い荷物 (Omoi nimotsu)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Adjetivos", diff: "easy",
        q: "¿Cuál es el opuesto de 'ひろい' (hiroi)?",
        opts: ["せまい", "ながい", "みじかい", "おおい"],
        ans: 0, exp: "せまい = 'semai' (estrecho). Frase: 狭い部屋 (Semai heya)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Adjetivos", diff: "easy",
        q: "¿Cuál es el opuesto de 'あかるい' (akarui)?",
        opts: ["くらい", "しずか", "にぎやか", "うつくしい"],
        ans: 0, exp: "くらい = 'kurai' (oscuro). Frase: 暗い部屋 (Kurai heya)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Adjetivos", diff: "easy",
        q: "¿Cuál es el opuesto de 'しずか' (shizuka)?",
        opts: ["にぎやか", "うるさい", "あかるい", "くらい"],
        ans: 0, exp: "にぎやか = 'nigiyaka' (animado/ruidoso). Frase: 賑やかな街 (Nigiyaka na machi)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Adjetivos", diff: "easy",
        q: "¿Cuál es el opuesto de 'うつくしい' (utsukushii)?",
        opts: ["みにくい", "おいしい", "まずい", "たのしい"],
        ans: 0, exp: "みにくい = 'minikui' (feo). Frase: 醜いアヒル (Minikui ahiru)."
    },
    // Preguntas 81-90: Comida
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Comida", diff: "easy",
        q: "¿Qué significa 'ごはん'?",
        opts: ["Arroz/comida", "Pan", "Fideos", "Carne"],
        ans: 0, exp: "ごはん = 'gohan' (arroz cocido o comida en general). Frase: 朝ごはん (Asagohan) = desayuno."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Comida", diff: "easy",
        q: "¿Qué significa 'やさい'?",
        opts: ["Carne", "Pescado", "Verdura", "Fruta"],
        ans: 2, exp: "やさい = 'yasai' (verdura). Frase: 野菜を食べる (Yasai o taberu)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Comida", diff: "easy",
        q: "¿Qué significa 'くだもの'?",
        opts: ["Carne", "Pescado", "Verdura", "Fruta"],
        ans: 3, exp: "くだもの = 'kudamono' (fruta). Frase: 果物を買う (Kudamono o kau)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Comida", diff: "easy",
        q: "¿Qué significa 'にく'?",
        opts: ["Pescado", "Carne", "Arroz", "Sopa"],
        ans: 1, exp: "にく = 'niku' (carne). Frase: 肉を焼く (Niku o yaku)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Comida", diff: "easy",
        q: "¿Qué significa 'さかな'?",
        opts: ["Carne", "Pescado", "Arroz", "Sopa"],
        ans: 1, exp: "さかな = 'sakana' (pescado). Frase: 魚を食べる (Sakana o taberu)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Comida", diff: "easy",
        q: "¿Qué significa 'たまご'?",
        opts: ["Leche", "Huevo", "Queso", "Mantequilla"],
        ans: 1, exp: "たまご = 'tamago' (huevo). Frase: 卵を焼く (Tamago o yaku)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Comida", diff: "easy",
        q: "¿Qué significa 'みそ'?",
        opts: ["Salsa de soja", "Pasta de soja fermentada", "Vinagre", "Aceite"],
        ans: 1, exp: "みそ = 'miso' (pasta de soja fermentada). Frase: 味噌汁 (Miso shiru) = sopa de miso."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Comida", diff: "easy",
        q: "¿Qué significa 'しょうゆ'?",
        opts: ["Salsa de soja", "Miso", "Vinagre", "Aceite"],
        ans: 0, exp: "しょうゆ = 'shōyu' (salsa de soja). Frase: 醤油をかける (Shōyu o kakeru)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Comida", diff: "easy",
        q: "¿Qué significa 'すし'?",
        opts: ["Arroz con vinagre y pescado", "Pescado crudo", "Arroz blanco", "Alga"],
        ans: 0, exp: "すし = 'sushi' (arroz avinagrado con pescado u otros ingredientes). Frase: 寿司を食べに行く (Sushi o tabe ni iku)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Comida", diff: "easy",
        q: "¿Qué significa 'てんぷら'?",
        opts: ["Pescado crudo", "Rebozado frito", "Carne a la parrilla", "Sopa de fideos"],
        ans: 1, exp: "てんぷら = 'tenpura' (mariscos o verduras rebozados y fritos). Frase: 天ぷらを食べる (Tenpura o taberu)."
    },
    // Preguntas 91-100: Lugares y direcciones
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Lugares", diff: "easy",
        q: "¿Qué significa 'みせ'?",
        opts: ["Casa", "Tienda", "Escuela", "Hospital"],
        ans: 1, exp: "みせ = 'mise' (tienda). Frase: この店は安い (Kono mise wa yasui)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Lugares", diff: "easy",
        q: "¿Qué significa 'びょういん'?",
        opts: ["Farmacia", "Hospital", "Clínica", "Consultorio"],
        ans: 1, exp: "びょういん = 'byōin' (hospital). Frase: 病院に行く (Byōin ni iku)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Lugares", diff: "easy",
        q: "¿Qué significa 'がっこう'?",
        opts: ["Universidad", "Escuela", "Jardín", "Oficina"],
        ans: 1, exp: "がっこう = 'gakkō' (escuela). Frase: 学校に行く (Gakkō ni iku)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Lugares", diff: "easy",
        q: "¿Qué significa 'えき'?",
        opts: ["Aeropuerto", "Estación de tren", "Parada de bus", "Puerto"],
        ans: 1, exp: "えき = 'eki' (estación de tren). Frase: 駅で待ち合わせ (Eki de machiawase)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Lugares", diff: "easy",
        q: "¿Qué significa 'こうえん'?",
        opts: ["Jardín", "Parque", "Plaza", "Bosque"],
        ans: 1, exp: "こうえん = 'kōen' (parque). Frase: 公園で遊ぶ (Kōen de asobu)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Direcciones", diff: "easy",
        q: "¿Qué significa 'みぎ'?",
        opts: ["Izquierda", "Derecha", "Recto", "Atrás"],
        ans: 1, exp: "みぎ = 'migi' (derecha). Frase: 右に曲がる (Migi ni magaru)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Direcciones", diff: "easy",
        q: "¿Qué significa 'ひだり'?",
        opts: ["Izquierda", "Derecha", "Recto", "Atrás"],
        ans: 0, exp: "ひだり = 'hidari' (izquierda). Frase: 左に曲がる (Hidari ni magaru)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Direcciones", diff: "easy",
        q: "¿Qué significa 'まっすぐ'?",
        opts: ["Izquierda", "Derecha", "Recto", "Atrás"],
        ans: 2, exp: "まっすぐ = 'massugu' (recto, todo derecho). Frase: まっすぐ行く (Massugu iku)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Direcciones", diff: "easy",
        q: "¿Qué significa 'うしろ'?",
        opts: ["Delante", "Detrás", "Arriba", "Abajo"],
        ans: 1, exp: "うしろ = 'ushiro' (detrás). Frase: 後ろに立つ (Ushiro ni tatsu)."
    },
    {
        profe: true, intermedio: false, avanzado: false, experto: false,
        unit: "Direcciones", diff: "easy",
        q: "¿Qué significa 'まえ'?",
        opts: ["Delante", "Detrás", "Arriba", "Abajo"],
        ans: 0, exp: "まえ = 'mae' (delante). Frase: 前に座る (Mae ni suwaru)."
    },

    // ==================== INTERMEDIO (intermedio: true) - 100 preguntas NUEVAS ====================
    // Preguntas 101-110: Forma TE + ayudantes
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "TE + miru", diff: "medium",
        q: "¿Qué significa '食べてみる'?",
        opts: ["Comer", "Intentar comer/probar", "Terminar de comer", "Dejar de comer"],
        ans: 1, exp: "〜てみる = '-te miru' (intentar hacer). Frase: 一度食べてみて (Ichido tabete mite). Romanización: tabete miru."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "TE + oku", diff: "medium",
        q: "¿Qué significa '買っておく'?",
        opts: ["Comprar y guardar", "Comprar para después (preparación)", "Comprar por error", "Comprar y tirar"],
        ans: 1, exp: "〜ておく = '-te oku' (hacer con anticipación como preparación). Frase: ビールを冷やしておく (Bīru o hiyashite oku). Romanización: katte oku."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "TE + aru", diff: "medium",
        q: "¿Qué significa '書いてある'?",
        opts: ["Escribí", "Está escrito (resultado)", "Escribiré", "Estoy escribiendo"],
        ans: 1, exp: "〜てある = '-te aru' (algo está hecho, resultado visible). Frase: 壁に名前が書いてある (Kabe ni namae ga kaite aru). Romanización: kaite aru."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "TE + shimau", diff: "medium",
        q: "¿Qué significa '忘れてしまった'?",
        opts: ["Olvidé", "Olvidé (y ya no puedo recuperar, arrepentimiento)", "Olvidaré", "Estoy olvidando"],
        ans: 1, exp: "〜てしまう = '-te shimau' (completación o arrepentimiento). Frase: 約束を忘れてしまった (Yakusoku o wasurete shimatta). Romanización: wasurete shimatta."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "TE + iru", diff: "medium",
        q: "¿Qué diferencia hay entre '食べている' y '食べた'?",
        opts: ["Pasado vs presente", "En progreso vs completado", "Futuro vs pasado", "Hábito vs acción"],
        ans: 1, exp: "食べている = 'tabete iru' (está comiendo - en progreso). 食べた = 'tabeta' (comió - completado)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "TE + kuru", diff: "medium",
        q: "¿Qué significa '雨が降ってきた'?",
        opts: ["Llovió", "Empezó a llover (venir hacia)", "Dejará de llover", "Llueve siempre"],
        ans: 1, exp: "〜てくる = '-te kuru' (acción que se acerca o comienza). Frase: 雨が降ってきた (Ame ga futte kita) = Empezó a llover. Romanización: futte kita."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "TE + iku", diff: "medium",
        q: "¿Qué significa '歩いていく'?",
        opts: ["Venir caminando", "Ir caminando (alejándose)", "Caminar", "Correr"],
        ans: 1, exp: "〜ていく = '-te iku' (acción que se aleja o continúa en el futuro). Frase: 学校へ歩いていく (Gakkō e aruite iku). Romanización: aruite iku."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "TE + hoshii", diff: "medium",
        q: "¿Cómo se dice 'quiero que vengas'?",
        opts: ["来たい", "来てほしい", "来てください", "来よう"],
        ans: 1, exp: "〜てほしい = '-te hoshii' (querer que alguien haga algo). Frase: 早く来てほしい (Hayaku kite hoshii). Romanización: kite hoshii."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "TE + ageru/kureru/morau", diff: "medium",
        q: "¿Qué significa '手伝ってあげる'?",
        opts: ["Ayúdame", "Te ayudo (dar ayuda)", "Me ayudas", "Ayuda mutua"],
        ans: 1, exp: "〜てあげる = '-te ageru' (hacer algo por alguien). Frase: 宿題を手伝ってあげる (Shukudai o tetsudatte ageru). Romanización: tetsudatte ageru."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "TE + kureru", diff: "medium",
        q: "¿Qué significa '教えてくれた'?",
        opts: ["Enseñé", "Me enseñó (dar a mí)", "Enseñaremos", "Enseña"],
        ans: 1, exp: "〜てくれる = '-te kureru' (alguien hace algo por mí). Frase: 先生が教えてくれた (Sensei ga oshiete kureta). Romanización: oshiete kureta."
    },
    // Preguntas 111-120: Dar y recibir avanzado
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "Dar/Recibir", diff: "medium",
        q: "¿Qué verbo se usa para dar a un superior?",
        opts: ["あげる", "さしあげる", "くれる", "くださる"],
        ans: 1, exp: "さしあげる = 'sashiageru' (dar a un superior). Frase: 先生に花をさしあげる (Sensei ni hana o sashiageru)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "Dar/Recibir", diff: "medium",
        q: "¿Qué verbo se usa cuando un superior te da algo?",
        opts: ["あげる", "さしあげる", "くれる", "くださる"],
        ans: 3, exp: "くださる = 'kudasaru' (dar de un superior a mí). Frase: 社長が褒めてくださった (Shachō ga homete kudasatta)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "Dar/Recibir", diff: "medium",
        q: "¿Qué verbo se usa para recibir de un superior?",
        opts: ["もらう", "いただく", "くれる", "くださる"],
        ans: 1, exp: "いただく = 'itadaku' (recibir de un superior, humilde). Frase: 先生から本をいただいた (Sensei kara hon o itadaita)."
    },
    // Preguntas 121-130: Condicionales complejos
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "Condicional", diff: "medium",
        q: "¿Qué expresa '勉強すればするほど'?",
        opts: ["Si estudio", "Cuanto más estudio", "Estudio y estudio", "Si no estudio"],
        ans: 1, exp: "〜ば〜ほど = '-ba -hodo' (cuanto más... más...). Frase: 勉強すればするほど難しくなる (Benkyō sureba suru hodo muzukashiku naru). Romanización: sureba suru hodo."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "Condicional", diff: "medium",
        q: "¿Qué significa 'あれば'?",
        opts: ["Si hay", "Si no hay", "Cuando hay", "Aunque haya"],
        ans: 0, exp: "あれば = 'areba' (forma condicional de ある). Frase: 時間があれば行く (Jikan ga areba iku)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "Condicional", diff: "medium",
        q: "¿Qué significa 'なければ'?",
        opts: ["Si hay", "Si no hay", "Cuando hay", "Aunque haya"],
        ans: 1, exp: "なければ = 'nakereba' (forma condicional negativa). Frase: 雨がなければ行く (Ame ga nakereba iku)."
    },
    // Preguntas 131-140: Potencial formas especiales
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "Potencial", diff: "medium",
        q: "Forma potencial de '来る'?",
        opts: ["来られる", "来れる", "来ることができる", "Todas"],
        ans: 3, exp: "来る (kuru) → 来られる (korareru) / 来れる (koreru coloq) / 来ることができる (kuru koto ga dekiru). Frase: 明日来られますか (Ashita koraremasu ka)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "Potencial", diff: "medium",
        q: "¿Qué significa '日本語が話せる'?",
        opts: ["Hablo japonés", "Puedo hablar japonés", "Quiero hablar japonés", "Hablaré japonés"],
        ans: 1, exp: "話せる = 'hanaseru' (potencial de 話す). Frase: 日本語が話せる (Nihongo ga hanaseru)."
    },
    // Preguntas 141-150: Volitiva formas especiales
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "Volitiva", diff: "medium",
        q: "Forma volitiva de 'する'?",
        opts: ["しよう", "しろ", "しなさい", "せよ"],
        ans: 0, exp: "する → しよう (shiyō). Frase: 一緒に勉強しよう (Issho ni benkyō shiyō)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "Volitiva", diff: "medium",
        q: "Forma volitiva de '来る'?",
        opts: ["来よう", "来い", "来なさい", "こよう"],
        ans: 3, exp: "来る → 来よう (koyō). Frase: 私の家に来よう (Watashi no ie ni koyō)."
    },
    // Preguntas 151-160: そうだ / ようだ / らしい
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "そうだ", diff: "medium",
        q: "¿Qué significa '雨が降りそうだ'?",
        opts: ["Está lloviendo", "Parece que va a llover", "Llovió", "No llueve"],
        ans: 1, exp: "〜そうだ = '-sō da' (apariencia). Frase: 雨が降りそうだ (Ame ga furisō da). Romanización: furisō da."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "ようだ", diff: "medium",
        q: "¿Qué significa '誰かがいるようだ'?",
        opts: ["Hay alguien", "Parece que hay alguien (evidencia)", "No hay nadie", "Quiero que venga alguien"],
        ans: 1, exp: "〜ようだ = '-yō da' (conjetura basada en evidencia). Frase: 誰かがいるようだ (Dareka ga iru yō da)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "らしい", diff: "medium",
        q: "¿Qué significa '彼は日本人らしい'?",
        opts: ["Es japonés", "Parece japonés (típico de japonés)", "Quiere ser japonés", "No es japonés"],
        ans: 1, exp: "〜らしい = '-rashii' (típico de / parece que). Frase: 彼は日本人らしい (Kare wa nihonjin rashii)."
    },
    // Preguntas 161-170: つもり / はず / かもしれない
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "つもり", diff: "medium",
        q: "¿Qué significa '行くつもりです'?",
        opts: ["Fui", "Tengo intención de ir", "Debo ir", "Puedo ir"],
        ans: 1, exp: "つもり = 'tsumori' (intención). Frase: 日本に行くつもりです (Nihon ni iku tsumori desu)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "はず", diff: "medium",
        q: "¿Qué significa '彼はもう来るはずだ'?",
        opts: ["Ya vino", "Debería venir (expectativa)", "No vendrá", "Quiere venir"],
        ans: 1, exp: "はず = 'hazu' (expectativa lógica). Frase: 彼はもう来るはずだ (Kare wa mō kuru hazu da)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "かもしれない", diff: "medium",
        q: "¿Qué significa '明日は雨かもしれない'?",
        opts: ["Lloverá seguro", "Quizás llueva", "No lloverá", "Quiero que llueva"],
        ans: 1, exp: "かもしれない = 'kamo shirenai' (quizás). Frase: 明日は雨かもしれない (Ashita wa ame kamo shirenai)."
    },
    // Preguntas 171-180: ながら / つつ / まま
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "ながら", diff: "medium",
        q: "¿Qué significa '音楽を聞きながら勉強する'?",
        opts: ["Estudio después de oír música", "Estudio mientras oigo música", "Oigo música después de estudiar", "No estudio"],
        ans: 1, exp: "ながら = 'nagara' (mientras). Frase: 音楽を聞きながら勉強する (Ongaku o kikinagara benkyō suru)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "つつ", diff: "medium",
        q: "¿Qué significa '悪いと知りつつ'?",
        opts: ["Sabiendo que está mal (a pesar de)", "Sin saber", "Si está mal", "Porque está mal"],
        ans: 0, exp: "つつ = 'tsutsu' (aunque, mientras, a pesar de). Frase: 悪いと知りつつやってしまった (Warui to shiritsutsu yatte shimatta)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "まま", diff: "medium",
        q: "¿Qué significa '靴のまま入る'?",
        opts: ["Entrar con zapatos (sin cambiarse)", "Entrar sin zapatos", "Entrar después de quitarse", "No entrar"],
        ans: 0, exp: "まま = 'mama' (en el mismo estado). Frase: 靴のまま入らないでください (Kutsu no mama hairanaide kudasai)."
    },
    // Preguntas 181-190: ばかり / ところ / はず
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "ばかり", diff: "medium",
        q: "¿Qué significa '食べたばかり'?",
        opts: ["Solo come", "Acabo de comer", "Come mucho", "Come poco"],
        ans: 1, exp: "たばかり = '-ta bakari' (acabo de hacer). Frase: 食べたばかりです (Tabeta bakari desu)."
    },
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "ところ", diff: "medium",
        q: "¿Qué significa '今、食べているところです'?",
        opts: ["Acabo de comer", "Estoy justo ahora comiendo", "Voy a comer", "Comí"],
        ans: 1, exp: "ているところ = '-te iru tokoro' (justo en medio de la acción). Frase: 今、食べているところです (Ima, tabete iru tokoro desu)."
    },
    // Preguntas 191-200: こと / の nominalización avanzada
    {
        profe: false, intermedio: true, avanzado: false, experto: false,
        unit: "Nominalización", diff: "medium",
        q: "¿Cuándo se usa 'の' en lugar de 'こと' para nominalizar?",
        opts: ["Con verbos de percepción (ver, oír, sentir)", "Con verbos de pensamiento", "Siempre", "Nunca"],
        ans: 0, exp: "の se usa con verbos de percepción (見る, 聞く, 感じる). こと se usa con verbos de pensamiento/comunicación. Frase: 彼が走るのを見た (Kare ga hashiru no o mita)."
    },

    // ==================== AVANZADO (avanzado: true) - 60 preguntas NUEVAS ====================
    // Preguntas 201-210: Keigo empresarial
    {
        profe: false, intermedio: false, avanzado: true, experto: false,
        unit: "Keigo", diff: "hard",
        q: "¿Qué significa 'お世話になっております'?",
        opts: ["Lo siento", "Gracias por su ayuda (negocios)", "Buenos días", "Adiós"],
        ans: 1, exp: "お世話になっております = 'Osewa ni natte orimasu' (frase de negocios: gracias por su ayuda). Frase: いつもお世話になっております (Itsumo osewa ni natte orimasu)."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false,
        unit: "Keigo", diff: "hard",
        q: "¿Qué significa '申し訳ございません'?",
        opts: ["Gracias", "Lo siento mucho (muy formal)", "Entendido", "Por favor"],
        ans: 1, exp: "申し訳ございません = 'Mōshiwake gozaimasen' (disculpa muy formal). Frase: ご迷惑をおかけして申し訳ございません (Gomeiwaku o okake shite mōshiwake gozaimasen)."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false,
        unit: "Keigo", diff: "hard",
        q: "¿Qué significa 'かしこまりました'?",
        opts: ["No entiendo", "Entendido (formal)", "Lo siento", "Gracias"],
        ans: 1, exp: "かしこまりました = 'Kashikomarimashita' (entendido, formal). Frase: かしこまりました、すぐに確認します (Kashikomarimashita, sugu ni kakunin shimasu)."
    },
    // Preguntas 211-220: Pasiva de sufrimiento
    {
        profe: false, intermedio: false, avanzado: true, experto: false,
        unit: "Pasiva", diff: "hard",
        q: "¿Qué significa '妻に先立たれた'?",
        opts: ["Mi esposa me dejó", "Mi esposa falleció (y sufro)", "Dejé a mi esposa", "Mi esposa se fue"],
        ans: 1, exp: "先立たれた = 'sakidatareta' (pasiva de sufrimiento - perder a alguien). Frase: 妻に先立たれた (Tsuma ni sakidatareta)."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false,
        unit: "Pasiva", diff: "hard",
        q: "¿Qué significa '子供に泣かれた'?",
        opts: ["Hice llorar al niño", "El niño lloró (y me afectó)", "El niño no lloró", "El niño ríe"],
        ans: 1, exp: "泣かれた = 'nakareta' (pasiva de sufrimiento). Frase: 子供に泣かれて困った (Kodomo ni nakarete komatta)."
    },
    // Preguntas 221-230: Causativa-pasiva
    {
        profe: false, intermedio: false, avanzado: true, experto: false,
        unit: "Causativa-pasiva", diff: "hard",
        q: "Forma causativa-pasiva de '行く'?",
        opts: ["行かせられる", "行かされる", "行かせれる", "A y B"],
        ans: 3, exp: "行かせられる (ikaserareru) / 行かされる (ikasareru) = ser obligado a ir. Frase: 上司に残業させられた (Jōshi ni zangyō saserareta)."
    },
    // Preguntas 231-240: Yojijukugo
    {
        profe: false, intermedio: false, avanzado: true, experto: false,
        unit: "Yojijukugo", diff: "hard",
        q: "¿Qué significa '十人十色'?",
        opts: ["Diez personas diez colores", "Cada quien tiene su gusto", "Todos diferentes", "Todas"],
        ans: 3, exp: "十人十色 = 'jūnin toiro' (cada persona tiene sus preferencias). Frase: 好みは十人十色だ (Konomi wa jūnin toiro da)."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false,
        unit: "Yojijukugo", diff: "hard",
        q: "¿Qué significa '以心伝心'?",
        opts: ["Telepatía", "Entenderse sin palabras", "Comunicación corazón a corazón", "Todas"],
        ans: 3, exp: "以心伝心 = 'ishin denshin' (comunicación sin palabras). Frase: 以心伝心の関係 (Ishin denshin no kankei)."
    },
    // Preguntas 241-250: Expresiones avanzadas
    {
        profe: false, intermedio: false, avanzado: true, experto: false,
        unit: "Expresiones", diff: "hard",
        q: "¿Qué significa '〜に伴って'?",
        opts: ["A pesar de", "Junto con / a medida que", "En lugar de", "Sin"],
        ans: 1, exp: "に伴って = 'ni tomonatte' (junto con, a medida que). Frase: 経済の発展に伴って (Keizai no hatten ni tomonatte)."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false,
        unit: "Expresiones", diff: "hard",
        q: "¿Qué significa '〜に基づいて'?",
        opts: ["Basado en", "A pesar de", "Además de", "En lugar de"],
        ans: 0, exp: "に基づいて = 'ni motozuite' (basado en). Frase: 事実に基づいて判断する (Jijitsu ni motozuite handan suru)."
    },
    // Preguntas 251-260: Onomatopeyas
    {
        profe: false, intermedio: false, avanzado: true, experto: false,
        unit: "Onomatopeyas", diff: "hard",
        q: "¿Qué significa 'いらいら'?",
        opts: ["Relajado", "Irritado", "Triste", "Feliz"],
        ans: 1, exp: "いらいら = 'iraira' (irritación). Frase: 待ちくたびれていらいらする (Machikutabirete iraira suru)."
    },
    {
        profe: false, intermedio: false, avanzado: true, experto: false,
        unit: "Onomatopeyas", diff: "hard",
        q: "¿Qué significa 'わくわく'?",
        opts: ["Aburrido", "Emocionado", "Triste", "Enojado"],
        ans: 1, exp: "わくわく = 'wakuwaku' (emoción anticipatoria). Frase: 旅行を考えるとわくわくする (Ryokō o kangaeru to wakuwaku suru)."
    },

    // ==================== EXPERTO (experto: true) - 40 preguntas NUEVAS ====================
    // Preguntas 261-270: Japonés clásico
    {
        profe: false, intermedio: false, avanzado: false, experto: true,
        unit: "Clásico", diff: "expert",
        q: "En japonés clásico, ¿qué significa '〜ぬ'?",
        opts: ["Negación", "Pasado", "Futuro", "Deseo"],
        ans: 0, exp: "ぬ = 'nu' (negación clásica, equivalente a ない moderno). Ej: 知らぬ (shiranu) = no saber."
    },
    {
        profe: false, intermedio: false, avanzado: false, experto: true,
        unit: "Clásico", diff: "expert",
        q: "En japonés clásico, ¿qué significa '〜つ'?",
        opts: ["Presente", "Pasado", "Futuro", "Imperativo"],
        ans: 1, exp: "つ = 'tsu' (sufijo de pasado clásico). Ej: 立ちつ (tachitsu) = se paró."
    },
    // Preguntas 271-280: Dialectos
    {
        profe: false, intermedio: false, avanzado: false, experto: true,
        unit: "Dialectos", diff: "expert",
        q: "En Kansai-ben, ¿qué significa '〜へん'?",
        opts: ["Negación", "Afirmación", "Pasado", "Futuro"],
        ans: 0, exp: "へん = '-hen' (negación en Kansai-ben). Ej: 行かへん (ikahen) = no ir (standard: 行かない)."
    },
    {
        profe: false, intermedio: false, avanzado: false, experto: true,
        unit: "Dialectos", diff: "expert",
        q: "En Tōhoku-ben, ¿qué significa '〜べ'?",
        opts: ["Negación", "Volición/invitación", "Pasado", "Pregunta"],
        ans: 1, exp: "べ = '-be' (volitivo en Tōhoku-ben, equivalente a 〜よう). Ej: 行くべ (iku be) = vamos."
    },
    // Preguntas 281-290: Keigo ultraformal
    {
        profe: false, intermedio: false, avanzado: false, experto: true,
        unit: "Keigo ultra", diff: "expert",
        q: "¿Qué significa '拝承いたしました'?",
        opts: ["No entiendo", "Entendido (muy formal)", "Lo siento", "Gracias"],
        ans: 1, exp: "拝承いたしました = 'Haishō itashimashita' (entendido - nivel ultraformal)."
    },
    {
        profe: false, intermedio: false, avanzado: false, experto: true,
        unit: "Keigo ultra", diff: "expert",
        q: "¿Qué significa '恐れ入ります'?",
        opts: ["Gracias", "Lo siento / Disculpe (muy formal)", "Entendido", "Buenos días"],
        ans: 1, exp: "恐れ入ります = 'Osore irimasu' (disculpa muy reverencial). Frase: 恐れ入りますが、もう一度お願いします (Osore irimasu ga, mō ichido onegai shimasu)."
    },
    // Preguntas 291-300: Kanji raros
    {
        profe: false, intermedio: false, avanzado: false, experto: true,
        unit: "Kanji raros", diff: "expert",
        q: "¿Qué significa el kanji '夊'?",
        opts: ["Ir despacio", "Correr", "Saltar", "Caer"],
        ans: 0, exp: "夊 = 'sui' (ir despacio, arrastrar los pies). Kanji extremadamente raro."
    },
    {
        profe: false, intermedio: false, avanzado: false, experto: true,
        unit: "Kanji raros", diff: "expert",
        q: "¿Qué significa el kanji '爨'?",
        opts: ["Cocinar", "Fuego", "Agua", "Comer"],
        ans: 0, exp: "爨 = 'san' (cocinar, encender el fuego para cocinar). Tiene 30 trazos, uno de los más complejos."
    }
];

// Registrar la asignatura
registrarAsignatura('japones', BANK.japones);