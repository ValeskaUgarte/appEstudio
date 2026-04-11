// Banco de Preguntas - Coreano (250 preguntas con romanización)
// Banco de Preguntas - Coreano (250 preguntas REALES)
window.BANK = window.BANK || {};
BANK.coreano = [

    // ==================== BÁSICO (profe: true) - 100 preguntas ====================
    
    // Hangul - Vocales (15)
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Cómo se llama el alfabeto coreano?",
        opts: ["Kanji", "Hiragana", "Hangul (한글)", "Pinyin"],
        ans: 2,
        exp: "Hangul (한글) = 'han-gul'. Creado por el Rey Sejong en 1443."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué vocal suena como 'a'?",
        opts: ["ㅏ (a)", "ㅓ (eo)", "ㅗ (o)", "ㅜ (u)"],
        ans: 0,
        exp: "ㅏ = 'a'. 가 (ga) = ir."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué vocal suena como 'eo'?",
        opts: ["ㅏ (a)", "ㅓ (eo)", "ㅗ (o)", "ㅜ (u)"],
        ans: 1,
        exp: "ㅓ = 'eo'. 어머니 (eo-meo-ni) = madre."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué vocal suena como 'o'?",
        opts: ["ㅏ (a)", "ㅓ (eo)", "ㅗ (o)", "ㅜ (u)"],
        ans: 2,
        exp: "ㅗ = 'o'. 오이 (o-i) = pepino."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué vocal suena como 'u'?",
        opts: ["ㅏ (a)", "ㅓ (eo)", "ㅗ (o)", "ㅜ (u)"],
        ans: 3,
        exp: "ㅜ = 'u'. 우리 (u-ri) = nosotros."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué vocal suena como 'eu'?",
        opts: ["ㅣ (i)", "ㅡ (eu)", "ㅏ (a)", "ㅗ (o)"],
        ans: 1,
        exp: "ㅡ = 'eu'. 음악 (eu-mak) = música."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué vocal suena como 'i'?",
        opts: ["ㅏ (a)", "ㅓ (eo)", "ㅗ (o)", "ㅣ (i)"],
        ans: 3,
        exp: "ㅣ = 'i'. 이 (i) = dos."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué vocal suena como 'ya'?",
        opts: ["ㅑ (ya)", "ㅕ (yeo)", "ㅛ (yo)", "ㅠ (yu)"],
        ans: 0,
        exp: "ㅑ = 'ya'. 야구 (ya-gu) = béisbol."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué vocal suena como 'yeo'?",
        opts: ["ㅑ (ya)", "ㅕ (yeo)", "ㅛ (yo)", "ㅠ (yu)"],
        ans: 1,
        exp: "ㅕ = 'yeo'. 여자 (yeo-ja) = mujer."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué vocal suena como 'yo'?",
        opts: ["ㅑ (ya)", "ㅕ (yeo)", "ㅛ (yo)", "ㅠ (yu)"],
        ans: 2,
        exp: "ㅛ = 'yo'. 요리 (yo-ri) = cocina."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué vocal suena como 'yu'?",
        opts: ["ㅑ (ya)", "ㅕ (yeo)", "ㅛ (yo)", "ㅠ (yu)"],
        ans: 3,
        exp: "ㅠ = 'yu'. 유리 (yu-ri) = cristal."
    },
    {
        profe: true, unit: "Hangul", diff: "medium",
        q: "¿Qué vocal compuesta suena como 'ae'?",
        opts: ["ㅐ (ae)", "ㅔ (e)", "ㅒ (yae)", "ㅖ (ye)"],
        ans: 0,
        exp: "ㅐ = 'ae'. 애기 (ae-gi) = bebé."
    },
    {
        profe: true, unit: "Hangul", diff: "medium",
        q: "¿Qué vocal compuesta suena como 'e'?",
        opts: ["ㅐ (ae)", "ㅔ (e)", "ㅒ (yae)", "ㅖ (ye)"],
        ans: 1,
        exp: "ㅔ = 'e'. 게 (ge) = cangrejo."
    },
    {
        profe: true, unit: "Hangul", diff: "medium",
        q: "¿Qué vocal compuesta suena como 'yae'?",
        opts: ["ㅐ (ae)", "ㅔ (e)", "ㅒ (yae)", "ㅖ (ye)"],
        ans: 2,
        exp: "ㅒ = 'yae'. 얘기 (yae-gi) = conversación (abreviatura de 이야기)."
    },
    {
        profe: true, unit: "Hangul", diff: "medium",
        q: "¿Qué vocal compuesta suena como 'ye'?",
        opts: ["ㅐ (ae)", "ㅔ (e)", "ㅒ (yae)", "ㅖ (ye)"],
        ans: 3,
        exp: "ㅖ = 'ye'. 예 (ye) = sí (formal)."
    },

    // Hangul - Consonantes simples (14)
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante suena como 'g' suave?",
        opts: ["ㄱ (g)", "ㄴ (n)", "ㄷ (d)", "ㄹ (r/l)"],
        ans: 0,
        exp: "ㄱ (gi-yeok) = 'g' suave. 가다 (ga-da) = ir."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante suena como 'n'?",
        opts: ["ㄱ (g)", "ㄴ (n)", "ㄷ (d)", "ㄹ (r/l)"],
        ans: 1,
        exp: "ㄴ (ni-eun) = 'n'. 나 (na) = yo."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante suena como 'd' suave?",
        opts: ["ㄱ (g)", "ㄴ (n)", "ㄷ (d)", "ㄹ (r/l)"],
        ans: 2,
        exp: "ㄷ (di-geut) = 'd' suave. 다리 (da-ri) = puente."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante suena como 'r' al inicio y 'l' al final?",
        opts: ["ㄱ (g)", "ㄴ (n)", "ㄷ (d)", "ㄹ (r/l)"],
        ans: 3,
        exp: "ㄹ (ri-eul) = 'r' al inicio (라면 = ra-myeon), 'l' al final (말 = mal)."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante suena como 'm'?",
        opts: ["ㅂ (b)", "ㅁ (m)", "ㅅ (s)", "ㅇ (muda)"],
        ans: 1,
        exp: "ㅁ (mi-eum) = 'm'. 엄마 (eom-ma) = mamá."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante suena como 'b' suave?",
        opts: ["ㅂ (b)", "ㅁ (m)", "ㅅ (s)", "ㅇ (muda)"],
        ans: 0,
        exp: "ㅂ (bi-eup) = 'b' suave. 바다 (ba-da) = mar."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante suena como 's'?",
        opts: ["ㅂ (b)", "ㅁ (m)", "ㅅ (s)", "ㅇ (muda)"],
        ans: 2,
        exp: "ㅅ (si-ot) = 's'. 사람 (sa-ram) = persona. Antes de 'i' suena 'sh' (시 = shi)."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante es muda al inicio de sílaba?",
        opts: ["ㅂ (b)", "ㅁ (m)", "ㅅ (s)", "ㅇ (muda)"],
        ans: 3,
        exp: "ㅇ (ieung) = muda al inicio. 아이 (a-i) = niño. Al final suena 'ng' (강 = gang)."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante suena como 'j' suave?",
        opts: ["ㅈ (j)", "ㅊ (ch)", "ㅉ (jj)", "ㅅ (s)"],
        ans: 0,
        exp: "ㅈ (ji-eut) = 'j' suave. 자다 (ja-da) = dormir."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante suena como 'h'?",
        opts: ["ㄱ (g)", "ㄷ (d)", "ㅂ (b)", "ㅎ (h)"],
        ans: 3,
        exp: "ㅎ (hi-eut) = 'h'. 하다 (ha-da) = hacer."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante aspirada suena como 'k' fuerte?",
        opts: ["ㄱ (g)", "ㅋ (k)", "ㄲ (kk)", "ㄹ (r/l)"],
        ans: 1,
        exp: "ㅋ (ki-eok) = 'k' aspirada. 커피 (keo-pi) = café."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante aspirada suena como 't' fuerte?",
        opts: ["ㄷ (d)", "ㅌ (t)", "ㄸ (tt)", "ㄹ (r/l)"],
        ans: 1,
        exp: "ㅌ (ti-eut) = 't' aspirada. 토마토 (to-ma-to) = tomate."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante aspirada suena como 'p' fuerte?",
        opts: ["ㅂ (b)", "ㅍ (p)", "ㅃ (pp)", "ㅁ (m)"],
        ans: 1,
        exp: "ㅍ (pi-eup) = 'p' aspirada. 파 (pa) = cebolleta."
    },
    {
        profe: true, unit: "Hangul", diff: "easy",
        q: "¿Qué consonante aspirada suena como 'ch' fuerte?",
        opts: ["ㅈ (j)", "ㅊ (ch)", "ㅉ (jj)", "ㅅ (s)"],
        ans: 1,
        exp: "ㅊ (chi-eut) = 'ch' aspirada. 차 (cha) = té."
    },

    // Hangul - Consonantes dobles (5)
    {
        profe: true, unit: "Hangul", diff: "medium",
        q: "¿Qué consonante doble suena como 'kk' tensa?",
        opts: ["ㄱ (g)", "ㅋ (k)", "ㄲ (kk)", "ㄹ (r/l)"],
        ans: 2,
        exp: "ㄲ (ssang-gi-yeok) = 'kk' tensa. 꼬리 (kko-ri) = cola."
    },
    {
        profe: true, unit: "Hangul", diff: "medium",
        q: "¿Qué consonante doble suena como 'tt' tensa?",
        opts: ["ㄷ (d)", "ㅌ (t)", "ㄸ (tt)", "ㄹ (r/l)"],
        ans: 2,
        exp: "ㄸ (ssang-di-geut) = 'tt' tensa. 떡 (tteok) = pastel de arroz."
    },
    {
        profe: true, unit: "Hangul", diff: "medium",
        q: "¿Qué consonante doble suena como 'pp' tensa?",
        opts: ["ㅂ (b)", "ㅍ (p)", "ㅃ (pp)", "ㅁ (m)"],
        ans: 2,
        exp: "ㅃ (ssang-bi-eup) = 'pp' tensa. 빵 (ppang) = pan."
    },
    {
        profe: true, unit: "Hangul", diff: "medium",
        q: "¿Qué consonante doble suena como 'ss' tensa?",
        opts: ["ㅅ (s)", "ㅆ (ss)", "ㅈ (j)", "ㅊ (ch)"],
        ans: 1,
        exp: "ㅆ (ssang-si-ot) = 'ss' tensa. 쌀 (ssal) = arroz."
    },
    {
        profe: true, unit: "Hangul", diff: "medium",
        q: "¿Qué consonante doble suena como 'jj' tensa?",
        opts: ["ㅈ (j)", "ㅊ (ch)", "ㅉ (jj)", "ㅅ (s)"],
        ans: 2,
        exp: "ㅉ (ssang-ji-eut) = 'jj' tensa. 짜다 (jja-da) = salado."
    },

    // Saludos (10)
    {
        profe: true, unit: "Saludos", diff: "easy",
        q: "¿Cómo se dice 'hola'? (an-nyeong-ha-se-yo)",
        opts: ["안녕하세요", "감사합니다", "죄송합니다", "안녕히 가세요"],
        ans: 0,
        exp: "안녕하세요 (an-nyeong-ha-se-yo) = Hola."
    },
    {
        profe: true, unit: "Saludos", diff: "easy",
        q: "¿Cómo se dice 'gracias'? (gam-sa-ham-ni-da)",
        opts: ["안녕하세요", "감사합니다", "죄송합니다", "고맙습니다"],
        ans: 1,
        exp: "감사합니다 (gam-sa-ham-ni-da) = Gracias."
    },
    {
        profe: true, unit: "Saludos", diff: "easy",
        q: "¿Cómo se dice 'lo siento'? (joe-song-ham-ni-da)",
        opts: ["감사합니다", "안녕하세요", "죄송합니다", "괜찮아요"],
        ans: 2,
        exp: "죄송합니다 (joe-song-ham-ni-da) = Lo siento."
    },
    {
        profe: true, unit: "Saludos", diff: "easy",
        q: "¿Cómo se dice 'sí'?",
        opts: ["아니요", "네", "예", "네 y 예 son correctas"],
        ans: 3,
        exp: "네 (ne) o 예 (ye) = sí."
    },
    {
        profe: true, unit: "Saludos", diff: "easy",
        q: "¿Cómo se dice 'no'? (a-ni-yo)",
        opts: ["네", "예", "아니요", "괜찮아요"],
        ans: 2,
        exp: "아니요 (a-ni-yo) = No."
    },
    {
        profe: true, unit: "Saludos", diff: "easy",
        q: "¿Qué dices cuando TE VAS? (an-nyeong-hi gye-se-yo)",
        opts: ["안녕히 가세요", "안녕히 계세요", "안녕", "잘 가요"],
        ans: 1,
        exp: "안녕히 계세요 (an-nyeong-hi gye-se-yo) = 'Quédate en paz' (lo dice quien se va)."
    },
    {
        profe: true, unit: "Saludos", diff: "easy",
        q: "¿Qué dices cuando OTRO SE VA? (an-nyeong-hi ga-se-yo)",
        opts: ["안녕히 가세요", "안녕히 계세요", "안녕", "잘 가요"],
        ans: 0,
        exp: "안녕히 가세요 (an-nyeong-hi ga-se-yo) = 'Vete en paz' (lo dice quien se queda)."
    },
    {
        profe: true, unit: "Saludos", diff: "easy",
        q: "¿Cómo se dice 'disculpe' al pasar? (sil-lye-ham-ni-da)",
        opts: ["죄송합니다", "미안합니다", "잠시만요", "실례합니다"],
        ans: 3,
        exp: "실례합니다 (sil-lye-ham-ni-da) = Disculpe (al pasar)."
    },
    {
        profe: true, unit: "Saludos", diff: "easy",
        q: "¿Cómo se pregunta '¿cómo estás?'? (jal ji-naess-eo-yo?)",
        opts: ["뭐 해요?", "잘 지냈어요?", "어디 가요?", "뭐예요?"],
        ans: 1,
        exp: "잘 지냈어요? (jal ji-naess-eo-yo?) = ¿Cómo estás?"
    },
    {
        profe: true, unit: "Saludos", diff: "easy",
        q: "¿Cómo se dice 'un momento, por favor'? (jam-si-man-yo)",
        opts: ["실례합니다", "잠시만요", "죄송합니다", "기다리세요"],
        ans: 1,
        exp: "잠시만요 (jam-si-man-yo) = Un momento, por favor."
    },

    // Vocabulario básico (15)
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Qué significa '사랑'? (sa-rang)",
        opts: ["Amistad", "Amor", "Familia", "Felicidad"],
        ans: 1,
        exp: "사랑 (sa-rang) = Amor."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Qué significa '우정'? (u-jeong)",
        opts: ["Amor", "Amistad", "Familia", "Tristeza"],
        ans: 1,
        exp: "우정 (u-jeong) = Amistad."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Cómo se dice 'familia'? (ga-jok)",
        opts: ["가족", "친구", "엄마", "아빠"],
        ans: 0,
        exp: "가족 (ga-jok) = Familia."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Cómo se dice 'agua'? (mul)",
        opts: ["밥", "물", "김치", "고기"],
        ans: 1,
        exp: "물 (mul) = Agua."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Cómo se dice 'casa'? (jip)",
        opts: ["집", "차", "학교", "회사"],
        ans: 0,
        exp: "집 (jip) = Casa."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Cómo se dice 'persona'? (sa-ram)",
        opts: ["사람", "남자", "여자", "아이"],
        ans: 0,
        exp: "사람 (sa-ram) = Persona."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Cómo se dice 'perro'? (gae)",
        opts: ["고양이", "개", "돼지", "소"],
        ans: 1,
        exp: "개 (gae) = Perro."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Cómo se dice 'gato'? (go-yang-i)",
        opts: ["개", "고양이", "쥐", "토끼"],
        ans: 1,
        exp: "고양이 (go-yang-i) = Gato."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Qué significa '오늘'? (o-neul)",
        opts: ["Ayer", "Hoy", "Mañana", "Noche"],
        ans: 1,
        exp: "오늘 (o-neul) = Hoy."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Qué significa '내일'? (nae-il)",
        opts: ["Ayer", "Hoy", "Mañana", "Noche"],
        ans: 2,
        exp: "내일 (nae-il) = Mañana."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Qué significa '어제'? (eo-je)",
        opts: ["Ayer", "Hoy", "Mañana", "Temprano"],
        ans: 0,
        exp: "어제 (eo-je) = Ayer."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Cómo se dice 'comida/arroz'? (bap)",
        opts: ["물", "밥", "김치", "반찬"],
        ans: 1,
        exp: "밥 (bap) = Arroz/comida."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Cómo se dice 'coche'? (cha)",
        opts: ["집", "차", "학교", "회사"],
        ans: 1,
        exp: "차 (cha) = Coche/té."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Cómo se dice 'escuela'? (hak-gyo)",
        opts: ["집", "차", "학교", "회사"],
        ans: 2,
        exp: "학교 (hak-gyo) = Escuela."
    },
    {
        profe: true, unit: "Vocabulario", diff: "easy",
        q: "¿Cómo se dice 'trabajo/empresa'? (hoe-sa)",
        opts: ["집", "차", "학교", "회사"],
        ans: 3,
        exp: "회사 (hoe-sa) = Empresa/trabajo."
    },

    // Números nativos (12)
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '1'? (ha-na)",
        opts: ["일", "하나", "이", "삼"],
        ans: 1,
        exp: "하나 (ha-na) = 1. Con contadores: 한."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '2'? (dul)",
        opts: ["이", "둘", "삼", "사"],
        ans: 1,
        exp: "둘 (dul) = 2. Con contadores: 두."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '3'? (set)",
        opts: ["셋", "넷", "다섯", "여섯"],
        ans: 0,
        exp: "셋 (set) = 3. Con contadores: 세."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '4'? (net)",
        opts: ["셋", "넷", "다섯", "여섯"],
        ans: 1,
        exp: "넷 (net) = 4. Con contadores: 네."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '5'? (da-seot)",
        opts: ["다섯", "여섯", "일곱", "여덟"],
        ans: 0,
        exp: "다섯 (da-seot) = 5."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '6'? (yeo-seot)",
        opts: ["다섯", "여섯", "일곱", "여덟"],
        ans: 1,
        exp: "여섯 (yeo-seot) = 6."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '7'? (il-gop)",
        opts: ["여섯", "일곱", "여덟", "아홉"],
        ans: 1,
        exp: "일곱 (il-gop) = 7."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '8'? (yeo-deol)",
        opts: ["일곱", "여덟", "아홉", "열"],
        ans: 1,
        exp: "여덟 (yeo-deol) = 8."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '9'? (a-hop)",
        opts: ["여덟", "아홉", "열", "스물"],
        ans: 1,
        exp: "아홉 (a-hop) = 9."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '10'? (yeol)",
        opts: ["열", "스물", "서른", "마흔"],
        ans: 0,
        exp: "열 (yeol) = 10."
    },
    {
        profe: true, unit: "Números", diff: "medium",
        q: "¿Cómo se dice '20'? (seu-mul)",
        opts: ["열", "스물", "서른", "마흔"],
        ans: 1,
        exp: "스물 (seu-mul) = 20."
    },
    {
        profe: true, unit: "Números", diff: "medium",
        q: "¿Cómo se dice '30'? (seo-reun)",
        opts: ["스물", "서른", "마흔", "쉰"],
        ans: 1,
        exp: "서른 (seo-reun) = 30."
    },

    // Números sino-coreanos (12)
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '1' en sino-coreano? (il)",
        opts: ["하나", "일", "이", "삼"],
        ans: 1,
        exp: "일 (il) = 1 (sino-coreano)."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '2' en sino-coreano? (i)",
        opts: ["일", "이", "삼", "사"],
        ans: 1,
        exp: "이 (i) = 2."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '3' en sino-coreano? (sam)",
        opts: ["이", "삼", "사", "오"],
        ans: 1,
        exp: "삼 (sam) = 3."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '4' en sino-coreano? (sa)",
        opts: ["삼", "사", "오", "육"],
        ans: 1,
        exp: "사 (sa) = 4."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '5' en sino-coreano? (o)",
        opts: ["사", "오", "육", "칠"],
        ans: 1,
        exp: "오 (o) = 5."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '10' en sino-coreano? (sip)",
        opts: ["십", "백", "천", "만"],
        ans: 0,
        exp: "십 (sip) = 10."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '100' en sino-coreano? (baek)",
        opts: ["십", "백", "천", "만"],
        ans: 1,
        exp: "백 (baek) = 100."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '1000' en sino-coreano? (cheon)",
        opts: ["십", "백", "천", "만"],
        ans: 2,
        exp: "천 (cheon) = 1,000."
    },
    {
        profe: true, unit: "Números", diff: "easy",
        q: "¿Cómo se dice '10,000' en sino-coreano? (man)",
        opts: ["십", "백", "천", "만"],
        ans: 3,
        exp: "만 (man) = 10,000."
    },
    {
        profe: true, unit: "Números", diff: "medium",
        q: "¿Cómo se dice '11'? (sip-il)",
        opts: ["십일", "십이", "십삼", "십사"],
        ans: 0,
        exp: "십일 (sip-il) = 11."
    },
    {
        profe: true, unit: "Números", diff: "medium",
        q: "¿Cómo se dice '20' en sino-coreano? (i-sip)",
        opts: ["이십", "삼십", "사십", "오십"],
        ans: 0,
        exp: "이십 (i-sip) = 20."
    },
    {
        profe: true, unit: "Números", diff: "medium",
        q: "¿Cómo se dice '100,000'? (sip-man)",
        opts: ["백만", "십만", "천만", "억"],
        ans: 1,
        exp: "십만 (sip-man) = 100,000."
    },

    // Contadores (9)
    {
        profe: true, unit: "Contadores", diff: "medium",
        q: "¿Contador para objetos? (gae)",
        opts: ["명", "개", "마리", "잔"],
        ans: 1,
        exp: "개 (gae) = contador de objetos."
    },
    {
        profe: true, unit: "Contadores", diff: "medium",
        q: "¿Contador para personas? (myeong)",
        opts: ["개", "명", "마리", "잔"],
        ans: 1,
        exp: "명 (myeong) = contador de personas."
    },
    {
        profe: true, unit: "Contadores", diff: "medium",
        q: "¿Contador para animales? (ma-ri)",
        opts: ["개", "명", "마리", "잔"],
        ans: 2,
        exp: "마리 (ma-ri) = contador de animales."
    },
    {
        profe: true, unit: "Contadores", diff: "medium",
        q: "¿Contador para tazas? (jan)",
        opts: ["개", "명", "마리", "잔"],
        ans: 3,
        exp: "잔 (jan) = contador de tazas/bebidas."
    },
    {
        profe: true, unit: "Contadores", diff: "medium",
        q: "¿Cómo se dice 'una persona'? (han myeong)",
        opts: ["일명", "한 명", "하나 명", "일 명"],
        ans: 1,
        exp: "한 명 (han myeong) = una persona."
    },
    {
        profe: true, unit: "Contadores", diff: "medium",
        q: "¿Cómo se dice 'dos personas'? (du myeong)",
        opts: ["이명", "두 명", "둘 명", "이 명"],
        ans: 1,
        exp: "두 명 (du myeong) = dos personas."
    },
    {
        profe: true, unit: "Contadores", diff: "medium",
        q: "¿Cómo se dice 'tres personas'? (se myeong)",
        opts: ["삼명", "세 명", "셋 명", "삼 명"],
        ans: 1,
        exp: "세 명 (se myeong) = tres personas."
    },
    {
        profe: true, unit: "Contadores", diff: "medium",
        q: "¿Contador para libros? (gwon)",
        opts: ["장", "권", "벌", "켤레"],
        ans: 1,
        exp: "권 (gwon) = contador de libros."
    },
    {
        profe: true, unit: "Contadores", diff: "medium",
        q: "¿Contador para hojas? (jang)",
        opts: ["장", "권", "벌", "켤레"],
        ans: 0,
        exp: "장 (jang) = contador de hojas."
    },

    // Verbos presente (8)
    {
        profe: true, unit: "Verbos", diff: "medium",
        q: "¿Verbo 'ir'? (ga-da)",
        opts: ["가다", "오다", "먹다", "마시다"],
        ans: 0,
        exp: "가다 (ga-da) = ir."
    },
    {
        profe: true, unit: "Verbos", diff: "medium",
        q: "¿Verbo 'venir'? (o-da)",
        opts: ["가다", "오다", "먹다", "자다"],
        ans: 1,
        exp: "오다 (o-da) = venir."
    },
    {
        profe: true, unit: "Verbos", diff: "medium",
        q: "¿Verbo 'comer'? (meok-da)",
        opts: ["마시다", "먹다", "자다", "보다"],
        ans: 1,
        exp: "먹다 (meok-da) = comer."
    },
    {
        profe: true, unit: "Verbos", diff: "medium",
        q: "¿Cómo se dice 'voy'? (ga-yo)",
        opts: ["가요", "와요", "바요", "사요"],
        ans: 0,
        exp: "가다 → 가요 = voy."
    },
    {
        profe: true, unit: "Verbos", diff: "medium",
        q: "¿Cómo se dice 'vengo'? (wa-yo)",
        opts: ["가요", "와요", "바요", "사요"],
        ans: 1,
        exp: "오다 → 와요 = vengo."
    },
    {
        profe: true, unit: "Verbos", diff: "medium",
        q: "¿Cómo se dice 'como'? (meo-geo-yo)",
        opts: ["마셔요", "먹어요", "자요", "봐요"],
        ans: 1,
        exp: "먹다 → 먹어요 = como."
    },
    {
        profe: true, unit: "Verbos", diff: "medium",
        q: "¿Cómo se dice 'voy a casa'? (ji-be ga-yo)",
        opts: ["집에 가요", "집에 와요", "집에 있어요", "집에 살아요"],
        ans: 0,
        exp: "집에 가요 (ji-be ga-yo) = Voy a casa."
    },
    {
        profe: true, unit: "Verbos", diff: "medium",
        q: "¿Cómo se dice 'como kimchi'? (gim-chi-reul meo-geo-yo)",
        opts: ["김치를 먹어요", "김치를 마셔요", "김치를 봐요", "김치를 자요"],
        ans: 0,
        exp: "김치를 먹어요 (gim-chi-reul meo-geo-yo) = Como kimchi."
    },

    // Partículas básicas (8)
    {
        profe: true, unit: "Partículas", diff: "medium",
        q: "¿Partícula de sujeto después de consonante? (i)",
        opts: ["가", "이", "은", "는"],
        ans: 1,
        exp: "이 (i) = sujeto después de consonante. 사람이."
    },
    {
        profe: true, unit: "Partículas", diff: "medium",
        q: "¿Partícula de sujeto después de vocal? (ga)",
        opts: ["가", "이", "은", "는"],
        ans: 0,
        exp: "가 (ga) = sujeto después de vocal. 내가."
    },
    {
        profe: true, unit: "Partículas", diff: "medium",
        q: "¿Partícula de objeto después de consonante? (eul)",
        opts: ["를", "을", "가", "이"],
        ans: 1,
        exp: "을 (eul) = objeto después de consonante. 김치를."
    },
    {
        profe: true, unit: "Partículas", diff: "medium",
        q: "¿Partícula de objeto después de vocal? (reul)",
        opts: ["를", "을", "가", "이"],
        ans: 0,
        exp: "를 (reul) = objeto después de vocal. 나를."
    },
    {
        profe: true, unit: "Partículas", diff: "medium",
        q: "¿Qué significa '도'? (do = también)",
        opts: ["Solo", "También", "Y", "Pero"],
        ans: 1,
        exp: "도 (do) = también. 저도 = yo también."
    },
    {
        profe: true, unit: "Partículas", diff: "medium",
        q: "¿Qué significa '만'? (man = solo)",
        opts: ["También", "Solo", "Y", "O"],
        ans: 1,
        exp: "만 (man) = solo. 물만 = solo agua."
    },
    {
        profe: true, unit: "Partículas", diff: "medium",
        q: "¿Partícula de destino? (e = a/hacia)",
        opts: ["에", "에서", "도", "만"],
        ans: 0,
        exp: "에 (e) = destino. 집에 = a casa."
    },
    {
        profe: true, unit: "Partículas", diff: "medium",
        q: "¿Partícula de lugar de acción? (e-seo = en)",
        opts: ["에", "에서", "도", "만"],
        ans: 1,
        exp: "에서 (e-seo) = lugar de acción. 학교에서 = en la escuela."
    },

    // Adjetivos básicos (5)
    {
        profe: true, unit: "Adjetivos", diff: "medium",
        q: "¿Cómo se dice 'bonito'? (ye-ppeu-da)",
        opts: ["예쁘다", "크다", "작다", "덥다"],
        ans: 0,
        exp: "예쁘다 (ye-ppeu-da) = bonito."
    },
    {
        profe: true, unit: "Adjetivos", diff: "medium",
        q: "¿Cómo se dice 'grande'? (keu-da)",
        opts: ["예쁘다", "크다", "작다", "차갑다"],
        ans: 1,
        exp: "크다 (keu-da) = grande."
    },
    {
        profe: true, unit: "Adjetivos", diff: "medium",
        q: "¿Cómo se dice 'pequeño'? (jak-da)",
        opts: ["예쁘다", "크다", "작다", "덥다"],
        ans: 2,
        exp: "작다 (jak-da) = pequeño."
    },
    {
        profe: true, unit: "Adjetivos", diff: "medium",
        q: "¿Cómo se dice 'hace frío'? (chup-da)",
        opts: ["춥다", "덥다", "시원하다", "따뜻하다"],
        ans: 0,
        exp: "춥다 (chup-da) = hace frío."
    },
    {
        profe: true, unit: "Adjetivos", diff: "medium",
        q: "¿Cómo se dice 'hace calor'? (deop-da)",
        opts: ["춥다", "덥다", "시원하다", "차갑다"],
        ans: 1,
        exp: "덥다 (deop-da) = hace calor."
    },

    // ==================== INTERMEDIO (profe: false) - 50 preguntas ====================
    
    // Pasado (4)
    {
        profe: false, unit: "Pasado", diff: "medium",
        q: "¿Cómo se dice 'fui'? (ga-ss-eo-yo)",
        opts: ["가요", "갔어요", "갈 거예요", "가고 있어요"],
        ans: 1,
        exp: "가다 → 갔어요 = fui."
    },
    {
        profe: false, unit: "Pasado", diff: "medium",
        q: "¿Cómo se dice 'comí'? (meo-geoss-eo-yo)",
        opts: ["먹어요", "먹었어요", "먹을 거예요", "먹고 있어요"],
        ans: 1,
        exp: "먹다 → 먹었어요 = comí."
    },
    {
        profe: false, unit: "Pasado", diff: "medium",
        q: "¿Cómo se dice 'hice'? (haess-eo-yo)",
        opts: ["해요", "했어요", "할 거예요", "하고 있어요"],
        ans: 1,
        exp: "하다 → 했어요 = hice."
    },
    {
        profe: false, unit: "Pasado", diff: "medium",
        q: "¿Cómo se dice 'fui a Corea'? (Han-guk-e ga-ss-eo-yo)",
        opts: ["한국에 가요", "한국에 갔어요", "한국에 갈 거예요", "한국에 가고 있어요"],
        ans: 1,
        exp: "한국에 갔어요 = Fui a Corea."
    },

    // Futuro (4)
    {
        profe: false, unit: "Futuro", diff: "medium",
        q: "¿Forma más común de futuro? (eul geo-ye-yo)",
        opts: ["-겠어요", "-을 거예요", "-ㄹ게요", "-ㄹ래요"],
        ans: 1,
        exp: "-을 거예요 = futuro. 갈 거예요 = iré."
    },
    {
        profe: false, unit: "Futuro", diff: "medium",
        q: "¿Cómo se dice 'iré'? (gal geo-ye-yo)",
        opts: ["가요", "갔어요", "갈 거예요", "가겠어요"],
        ans: 2,
        exp: "갈 거예요 = iré."
    },
    {
        profe: false, unit: "Futuro", diff: "hard",
        q: "¿Qué expresa '-겠어요'?",
        opts: ["Plan", "Promesa", "Intención/conjetura", "Pregunta"],
        ans: 2,
        exp: "-겠어요 = intención o conjetura."
    },
    {
        profe: false, unit: "Futuro", diff: "hard",
        q: "¿Qué expresa '-ㄹ게요'?",
        opts: ["Plan", "Promesa al oyente", "Conjetura", "Pregunta"],
        ans: 1,
        exp: "-ㄹ게요 = promesa/compromiso. 제가 할게요 = yo lo haré (promesa)."
    },

    // Deseo (2)
    {
        profe: false, unit: "Deseo", diff: "medium",
        q: "¿Cómo se dice 'quiero comer'? (meok-go si-peo-yo)",
        opts: ["먹어요", "먹었어요", "먹고 싶어요", "먹을 거예요"],
        ans: 2,
        exp: "먹고 싶어요 = quiero comer."
    },
    {
        profe: false, unit: "Deseo", diff: "medium",
        q: "¿Cómo se dice 'quiero ir a Corea'?",
        opts: ["한국에 가요", "한국에 갔어요", "한국에 가고 싶어요", "한국에 갈 거예요"],
        ans: 2,
        exp: "한국에 가고 싶어요 = Quiero ir a Corea."
    },

    // Habilidad (2)
    {
        profe: false, unit: "Habilidad", diff: "medium",
        q: "¿Cómo se dice 'puedo leer'? (il-geul su iss-eo-yo)",
        opts: ["읽어요", "읽었어요", "읽고 싶어요", "읽을 수 있어요"],
        ans: 3,
        exp: "읽을 수 있어요 = puedo leer."
    },
    {
        profe: false, unit: "Habilidad", diff: "medium",
        q: "¿Cómo se dice 'puedo hablar coreano'?",
        opts: ["한국어를 해요", "한국어를 했어요", "한국어를 하고 싶어요", "한국어를 할 수 있어요"],
        ans: 3,
        exp: "한국어를 할 수 있어요 = Puedo hablar coreano."
    },

    // Negación (3)
    {
        profe: false, unit: "Negación", diff: "medium",
        q: "¿Diferencia entre '안 가요' y '못 가요'?",
        opts: ["No hay", "안 = no quiero, 못 = no puedo", "안 es pasado", "못 es formal"],
        ans: 1,
        exp: "안 = negación voluntaria. 못 = imposibilidad."
    },
    {
        profe: false, unit: "Negación", diff: "medium",
        q: "¿Cómo se dice 'no sé'?",
        opts: ["몰라요", "안 알아요", "모르겠어요", "Ambas correctas"],
        ans: 3,
        exp: "몰라요 y 모르겠어요 = no sé."
    },
    {
        profe: false, unit: "Negación", diff: "hard",
        q: "¿Forma larga de negación de '먹다'?",
        opts: ["안 먹어요", "먹지 않아요", "못 먹어요", "먹지 마요"],
        ans: 1,
        exp: "먹지 않아요 = no comer (forma larga)."
    },

    // Obligación (2)
    {
        profe: false, unit: "Obligación", diff: "hard",
        q: "¿Cómo se dice 'tengo que estudiar'?",
        opts: ["공부해도 돼요", "공부하고 싶어요", "공부해야 해요", "공부할 수 있어요"],
        ans: 2,
        exp: "공부해야 해요 = Tengo que estudiar."
    },
    {
        profe: false, unit: "Obligación", diff: "hard",
        q: "¿Cómo se dice 'tengo que ir'?",
        opts: ["가도 돼요", "가고 싶어요", "가야 해요", "갈 수 있어요"],
        ans: 2,
        exp: "가야 해요 = Tengo que ir."
    },

    // Permiso (1)
    {
        profe: false, unit: "Permiso", diff: "hard",
        q: "¿Cómo se pregunta '¿puedo entrar?'?",
        opts: ["들어가도 돼요?", "들어가야 해요?", "들어가고 싶어요?", "들어갈 수 있어요?"],
        ans: 0,
        exp: "들어가도 돼요? = ¿Puedo entrar?"
    },

    // Conectores (6)
    {
        profe: false, unit: "Conectores", diff: "hard",
        q: "¿Qué significa '-고'?",
        opts: ["Pero", "Porque", "Y", "Así que"],
        ans: 2,
        exp: "-고 = y. 먹고 마셔요 = como y bebo."
    },
    {
        profe: false, unit: "Conectores", diff: "hard",
        q: "¿Qué significa '-지만'?",
        opts: ["Y", "Porque", "Pero", "Así que"],
        ans: 2,
        exp: "-지만 = pero. 비싸지만 좋아요 = caro pero bueno."
    },
    {
        profe: false, unit: "Conectores", diff: "hard",
        q: "¿Qué significa '-아서/어서'?",
        opts: ["Pero", "Porque", "Para", "Mientras"],
        ans: 1,
        exp: "-아서/어서 = porque. 배고파서 먹어요 = tengo hambre, como."
    },
    {
        profe: false, unit: "Conectores", diff: "hard",
        q: "¿Diferencia entre '-아서' y '-니까'?",
        opts: ["Ninguna", "-니까 puede usarse en imperativos", "-아서 es más formal", "-니까 es subjetivo"],
        ans: 1,
        exp: "-니까 puede usarse con imperativos: 배고프니까 먹자."
    },
    {
        profe: false, unit: "Conectores", diff: "hard",
        q: "¿Qué significa '-거나'?",
        opts: ["Y", "Pero", "O", "Así que"],
        ans: 2,
        exp: "-거나 = o. 커피나 차 = café o té."
    },
    {
        profe: false, unit: "Conectores", diff: "hard",
        q: "¿Qué significa '-면서'?",
        opts: ["Y", "Mientras", "Pero", "Porque"],
        ans: 1,
        exp: "-면서 = mientras. 음악을 들으면서 공부해요 = estudio mientras escucho música."
    },

    // Presente progresivo (2)
    {
        profe: false, unit: "Progresivo", diff: "hard",
        q: "¿Cómo se dice 'estoy comiendo'? (meok-go iss-eo-yo)",
        opts: ["먹어요", "먹었어요", "먹고 있어요", "먹을 거예요"],
        ans: 2,
        exp: "먹고 있어요 = Estoy comiendo."
    },
    {
        profe: false, unit: "Progresivo", diff: "hard",
        q: "¿Cómo se dice 'estoy estudiando coreano'?",
        opts: ["공부해요", "공부했어요", "공부하고 있어요", "공부할 거예요"],
        ans: 2,
        exp: "공부하고 있어요 = Estoy estudiando."
    },

    // Partículas intermedias (4)
    {
        profe: false, unit: "Partículas", diff: "hard",
        q: "¿Qué significa '께'?",
        opts: ["Sujeto honorífico", "Objeto honorífico", "Para/a (honorífico)", "De (posesión)"],
        ans: 2,
        exp: "께 = 'a' (honorífico). 할머니께 = a la abuela."
    },
    {
        profe: false, unit: "Partículas", diff: "hard",
        q: "¿Qué significa '에게'?",
        opts: ["A (persona)", "En", "Con", "Para"],
        ans: 0,
        exp: "에게 = 'a' (para personas). 친구에게 = al amigo."
    },
    {
        profe: false, unit: "Partículas", diff: "hard",
        q: "¿Qué significa '한테'?",
        opts: ["A (persona, coloquial)", "En", "Con", "Para"],
        ans: 0,
        exp: "한테 = 'a' (coloquial). 친구한테 = al amigo."
    },
    {
        profe: false, unit: "Partículas", diff: "hard",
        q: "¿Qué significa '와/과'?",
        opts: ["Y/con", "Pero", "O", "Así que"],
        ans: 0,
        exp: "와/과 = y / con. 친구와 = con el amigo."
    },

    // Honoríficos básicos (5)
    {
        profe: false, unit: "Honoríficos", diff: "hard",
        q: "¿Cómo se añade honorífico a un verbo?",
        opts: ["-시-", "-이-", "-히-", "-리-"],
        ans: 0,
        exp: "-(으)시- = sufijo honorífico. 가다 → 가시다."
    },
    {
        profe: false, unit: "Honoríficos", diff: "hard",
        q: "¿Cómo se dice 'vaya' (honorífico de ir)?",
        opts: ["가요", "가세요", "가십니다", "갑니다"],
        ans: 1,
        exp: "가다 → 가세요 = vaya (honorífico)."
    },
    {
        profe: false, unit: "Honoríficos", diff: "hard",
        q: "¿Cómo se dice 'coma' (honorífico de comer)?",
        opts: ["먹어요", "드세요", "먹으세요", "먹습니다"],
        ans: 1,
        exp: "먹다 → 드세요 = coma (honorífico)."
    },
    {
        profe: false, unit: "Honoríficos", diff: "hard",
        q: "¿Cómo se pregunta la edad honoríficamente?",
        opts: ["나이가 몇 살이에요?", "연세가 어떻게 되세요?", "몇 살이세요?", "나이가 어떻게 돼요?"],
        ans: 1,
        exp: "연세가 어떻게 되세요? = ¿Cuántos años tiene? (honorífico)."
    },
    {
        profe: false, unit: "Honoríficos", diff: "hard",
        q: "¿Qué es '존댓말'?",
        opts: ["Habla informal", "Habla formal/cortés", "Dialecto", "Jerga"],
        ans: 1,
        exp: "존댓말 = habla formal/cortés (respetuosa)."

    // ==================== AVANZADO (profe: null) - 50 preguntas ====================
    },
    {
        profe: null, unit: "Honoríficos", diff: "hard",
        q: "¿Forma honorífica especial de 'comer'? (ja-bsu-si-da)",
        opts: ["드시다", "잡수시다", "먹으시다", "식사하다"],
        ans: 1,
        exp: "잡수시다 = comer (honorífico especial)."
    },
    {
        profe: null, unit: "Honoríficos", diff: "hard",
        q: "¿Forma honorífica de 'estar' para personas? (gye-si-da)",
        opts: ["있으시다", "계시다", "존재하다", "머무르다"],
        ans: 1,
        exp: "계시다 = estar (personas respetadas)."
    },
    {
        profe: null, unit: "Honoríficos", diff: "hard",
        q: "¿Forma honorífica de 'dar'? (deu-ri-da)",
        opts: ["주시다", "드리다", "주다", "선물하다"],
        ans: 1,
        exp: "드리다 = dar a persona respetada."
    },
    {
        profe: null, unit: "Honoríficos", diff: "hard",
        q: "¿Forma honorífica de 'dormir'? (ju-mu-si-da)",
        opts: ["주무시다", "주무세요", "잠자다", "둥지다"],
        ans: 0,
        exp: "주무시다 = dormir (honorífico)."
    },
    {
        profe: null, unit: "Honoríficos", diff: "hard",
        q: "¿Forma honorífica de 'hablar'? (mal-sseum-ha-da)",
        opts: ["말씀하다", "말하시다", "이야기하다", "대화하다"],
        ans: 0,
        exp: "말씀하다 = hablar (honorífico)."
    },
    {
        profe: null, unit: "Honoríficos", diff: "hard",
        q: "¿Forma honorífica de 'morir'? (do-lo-ga-si-da)",
        opts: ["죽다", "돌아가시다", "사망하다", "별세하다"],
        ans: 1,
        exp: "돌아가시다 = morir (honorífico)."
    },
    {
        profe: null, unit: "Niveles", diff: "hard",
        q: "¿Qué es '반말'? (ban-mal)",
        opts: ["Formal", "Informal entre amigos", "Dialecto", "Escrito"],
        ans: 1,
        exp: "반말 = habla informal. Solo con amigos cercanos o menores."
    },
    {
        profe: null, unit: "Niveles", diff: "hard",
        q: "¿Qué nivel es '해요체'?",
        opts: ["Formal", "Informal cortés", "Informal entre amigos", "Muy formal"],
        ans: 1,
        exp: "해요체 = informal cortés (uso diario)."
    },
    {
        profe: null, unit: "Niveles", diff: "hard",
        q: "¿Qué nivel es '합쇼체'?",
        opts: ["Informal", "Formal respetuoso", "Íntimo", "Neutro"],
        ans: 1,
        exp: "합쇼체 = formal respetuoso (noticias, presentaciones)."
    },
    {
        profe: null, unit: "Modismos", diff: "hard",
        q: "¿Qué significa '눈이 높다'? (exigente)",
        opts: ["Buena vista", "Exigente", "Arrogante", "Enojado"],
        ans: 1,
        exp: "눈이 높다 = ser exigente (estándares altos)."
    },
    {
        profe: null, unit: "Modismos", diff: "hard",
        q: "¿Qué significa '입이 짧다'? (quisquilloso con comida)",
        opts: ["Hablar poco", "Quisquilloso con comida", "Boca pequeña", "Maleducado"],
        ans: 1,
        exp: "입이 짧다 = ser quisquilloso para comer."
    },
    {
        profe: null, unit: "Modismos", diff: "hard",
        q: "¿Qué significa '배가 아프다'? (envidia)",
        opts: ["Enfermo", "Celoso/envidioso", "Triste", "Cansado"],
        ans: 1,
        exp: "배가 아프다 = tener envidia."
    },
    {
        profe: null, unit: "Modismos", diff: "hard",
        q: "¿Qué significa '발이 넓다'? (muchos contactos)",
        opts: ["Pies grandes", "Muchos contactos", "Torpe", "Rápido"],
        ans: 1,
        exp: "발이 넓다 = tener muchos contactos."
    },
    {
        profe: null, unit: "Modismos", diff: "hard",
        q: "¿Qué significa '눈코 뜰 새 없다'? (muy ocupado)",
        opts: ["Oscuro", "Muy ocupado", "No ver nada", "Dormido"],
        ans: 1,
        exp: "눈코 뜰 새 없다 = estar extremadamente ocupado."
    },
    {
        profe: null, unit: "Modismos", diff: "hard",
        q: "¿Qué significa '손이 크다'? (mano grande = generoso)",
        opts: ["Mano grande", "Generoso", "Torpe", "Fuerte"],
        ans: 1,
        exp: "손이 크다 = ser generoso (literal: mano grande)."
    },
    {
        profe: null, unit: "Modismos", diff: "hard",
        q: "¿Qué significa '마음이 따뜻하다'? (corazón cálido = amable)",
        opts: ["Corazón cálido", "Amable/bondadoso", "Enojado", "Triste"],
        ans: 1,
        exp: "마음이 따뜻하다 = ser amable/bondadoso."
    },
    {
        profe: null, unit: "Cultura", diff: "hard",
        q: "¿Qué es '한국식 나이'? (edad coreana)",
        opts: ["Igual occidental", "Naces con 1 año, +1 el 1/1", "Solo año", "+2 años"],
        ans: 1,
        exp: "Edad coreana: 1 año al nacer, +1 cada 1 de enero."
    },
    {
        profe: null, unit: "Cultura", diff: "hard",
        q: "¿Qué se hace al recibir algo de un mayor?",
        opts: ["Una mano", "Dos manos", "Asentir", "Inclinar cabeza"],
        ans: 1,
        exp: "Recibir con dos manos = muestra de respeto."
    },
    {
        profe: null, unit: "Cultura", diff: "hard",
        q: "¿Qué es '김장'? (kim-jang)",
        opts: ["Tipo de kimchi", "Preparar kimchi para invierno", "Sopa", "Ceremonia"],
        ans: 1,
        exp: "김장 = tradición de preparar kimchi para el invierno (UNESCO)."
    },
    {
        profe: null, unit: "Cultura", diff: "hard",
        q: "¿Qué es '정'? (jeong)",
        opts: ["Amor", "Apego emocional coreano", "Amistad", "Respeto"],
        ans: 1,
        exp: "정 = sentimiento de apego/conección emocional (concepto cultural coreano)."
    },
    {
        profe: null, unit: "Cultura", diff: "hard",
        q: "¿Qué se celebra el '설날'? (Seollal)",
        opts: ["Año nuevo lunar", "Cosecha", "Cumpleaños", "Día del amor"],
        ans: 0,
        exp: "설날 = Año Nuevo Lunar (festividad más importante)."
    },
    {
        profe: null, unit: "Cultura", diff: "hard",
        q: "¿Qué se celebra el '추석'? (Chuseok)",
        opts: ["Año nuevo", "Festival de la cosecha", "Día de los enamorados", "Día de los niños"],
        ans: 1,
        exp: "추석 = Festival de la Cosecha (acciones de gracias coreano)."
    },
    {
        profe: null, unit: "Gramática", diff: "hard",
        q: "¿Qué significa '-던'? (recuerdo/pasado)",
        opts: ["Futuro", "Presente", "Recuerdo del pasado", "Imperativo"],
        ans: 2,
        exp: "-던 = acción que se hacía en el pasado (ya no se hace)."
    },
    {
        profe: null, unit: "Gramática", diff: "hard",
        q: "¿Qué significa '-는 바람에'? (causa negativa)",
        opts: ["Finalidad", "Causa negativa inesperada", "Concesión", "Condición"],
        ans: 1,
        exp: "-는 바람에 = causa inesperada con resultado negativo."
    },
    {
        profe: null, unit: "Gramática", diff: "hard",
        q: "¿Qué significa '-을 뻔하다'? (casi/por poco)",
        opts: ["Casi hacer algo", "Tener que hacer", "Poder hacer", "Querer hacer"],
        ans: 0,
        exp: "-을 뻔하다 = casi / por poco. 넘어질 뻔했어요 = por poco me caigo."
    },
    {
        profe: null, unit: "Gramática", diff: "hard",
        q: "¿Qué significa '-는 척하다'? (fingir)",
        opts: ["Fingir", "Parecer", "Como si", "Aunque"],
        ans: 0,
        exp: "-는 척하다 = fingir. 아는 척해요 = finge saber."
    },
    {
        profe: null, unit: "Gramática", diff: "hard",
        q: "¿Qué significa '-기로 하다'? (decidir hacer)",
        opts: ["Empezar a hacer", "Decidir hacer", "Terminar de hacer", "Poder hacer"],
        ans: 1,
        exp: "-기로 하다 = decidir hacer. 공부하기로 했어요 = decidí estudiar."
    },
    {
        profe: null, unit: "Gramática", diff: "hard",
        q: "¿Qué significa '어쩔 수 없다'? (no hay otra opción)",
        opts: ["No sé", "No entiendo", "No hay otra opción", "No me importa"],
        ans: 2,
        exp: "어쩔 수 없다 = no hay manera / no puedo evitarlo."
    },
    {
        profe: null, unit: "Gramática", diff: "hard",
        q: "¿Qué significa '-(으)ㄹ수록'? (cuanto más...)",
        opts: ["Cuanto más", "Porque", "Aunque", "Mientras"],
        ans: 0,
        exp: "-(으)ㄹ수록 = cuanto más. 많을수록 좋아요 = cuanto más, mejor."
    },
    {
        profe: null, unit: "Gramática", diff: "hard",
        q: "¿Qué significa '-아/어도'? (aunque)",
        opts: ["Porque", "Aunque", "Para", "Así que"],
        ans: 1,
        exp: "-아/어도 = aunque. 비싸도 살 거예요 = aunque sea caro, lo compraré."

    // ==================== EXPERTO (profe: "experto") - 50 preguntas ====================
    },
    {
        profe: "experto", unit: "Proverbios", diff: "expert",
        q: "¿Qué significa '시작이 반이다'? (empezar es la mitad)",
        opts: ["El fin justifica medios", "Empezar es la mitad", "Más vale tarde", "Ojos que no ven"],
        ans: 1,
        exp: "시작이 반이다 = Empezar es la mitad del trabajo."
    },
    {
        profe: "experto", unit: "Proverbios", diff: "expert",
        q: "¿Qué significa '가는 말이 고와야 오는 말이 곱다'?",
        opts: ["Palabras bonitas", "Si hablas bien, te responden bien", "Silencio es oro", "Hablar es plata"],
        ans: 1,
        exp: "Trata a los demás como quieres que te traten."
    },
    {
        profe: "experto", unit: "Proverbios", diff: "expert",
        q: "¿Qué significa '등잔 밑이 어둡다'? (nadie es profeta en su tierra)",
        opts: ["Todo oscuro", "Oscuridad bajo la lámpara", "Nadie es profeta en su tierra", "Cerca de casa"],
        ans: 2,
        exp: "등잔 밑이 어둡다 = Es difícil ver lo que tienes cerca."
    },
    {
        profe: "experto", unit: "Proverbios", diff: "expert",
        q: "¿Qué significa '원숭이도 나무에서 떨어진다'?",
        opts: ["Los monos caen", "El hábito hace al monje", "Errar es humano", "Incluso los monos caen"],
        ans: 3,
        exp: "원숭이도 나무에서 떨어진다 = Incluso los expertos cometen errores."
    },
    {
        profe: "experto", unit: "Proverbios", diff: "expert",
        q: "¿Qué significa '소 잃고 외양간 고친다'? (a toro pasado)",
        opts: ["Arreglar después", "Prevenir", "A toro pasado", "Después de perder la vaca, arreglas el establo"],
        ans: 3,
        exp: "Tomar medidas después de que ya pasó el problema."
    },
    {
        profe: "experto", unit: "Proverbios", diff: "expert",
        q: "¿Qué significa '구더기 무서워서 장 못 담글까'?",
        opts: ["Tener miedo", "No tener miedo", "Con miedo no se hace nada", "El que tiene miedo no hace"],
        ans: 2,
        exp: "Literal: '¿No vas a hacer kimchi por miedo a los gusan"
        },
        {
        profe: "experto", unit: "Viajes", diff: "expert",
        q: "¿Cómo se dice '¿dónde está el baño?' en coreano?",
        opts: ["화장실이 어디예요? (hwa-jang-sir-i eo-di-ye-yo?)", "욕실이 어디예요? (yok-sir-i eo-di-ye-yo?)", "변기가 어디예요? (byeon-gi-ga eo-di-ye-yo?)", "세면대가 어디예요? (se-myeon-dae-ga eo-di-ye-yo?)"],
        ans: 0,
        exp: "화장실이 어디예요? (hwa-jang-sir-i eo-di-ye-yo?) = ¿Dónde está el baño? 화장실 = baño."
    },
    {
        profe: "experto", unit: "Viajes", diff: "expert",
        q: "¿Cómo se dice 'quiero ir a esta dirección' en coreano?",
        opts: ["여기에 가고 싶어요 (yeo-gi-e ga-go si-peo-yo)", "이 주소로 가고 싶어요 (i ju-so-ro ga-go si-peo-yo)", "이곳에 가고 싶어요 (i-gos-e ga-go si-peo-yo)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son correctas: '여기에' (aquí), '이 주소로' (a esta dirección), '이곳에' (a este lugar)."
    },
    {
        profe: "experto", unit: "Viajes", diff: "expert",
        q: "¿Cómo se dice '¿cuánto cuesta ir a Incheon?' en coreano?",
        opts: ["인천까지 얼마예요? (in-cheon-kka-ji eol-ma-ye-yo?)", "인천에 얼마예요? (in-cheon-e eol-ma-ye-yo?)", "인천으로 얼마예요? (in-cheon-eu-ro eol-ma-ye-yo?)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son correctas. '까지' = hasta, '에' = a, '으로' = hacia."
    },
    {
        profe: "experto", unit: "Viajes", diff: "expert",
        q: "¿Cómo se dice '¿me puede ayudar?' en coreano?",
        opts: ["도와주세요 (do-wa-ju-se-yo)", "도움이 필요해요 (do-wom-i pil-yo-hae-yo)", "좀 도와주실 수 있나요? (jom do-wa-ju-sil su it-na-yo?)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas válidas de pedir ayuda. La más directa es '도와주세요'."
    },
    {
        profe: "experto", unit: "Viajes", diff: "expert",
        q: "¿Cómo se dice '¿puedo pagar con tarjeta?' en coreano?",
        opts: ["카드로 돼요? (ka-deu-ro dwae-yo?)", "카드 돼요? (ka-deu dwae-yo?)", "카드로 결제할 수 있어요? (ka-deu-ro gyeol-je-hal su iss-eo-yo?)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas comunes de preguntar si se puede pagar con tarjeta."
    },
    {
        profe: "experto", unit: "Viajes", diff: "expert",
        q: "¿Cómo se dice '¿aceptan efectivo?' en coreano?",
        opts: ["현금 돼요? (hyeon-geum dwae-yo?)", "현금으로 돼요? (hyeon-geum-eu-ro dwae-yo?)", "현금 받으세요? (hyeon-geum ba-deu-se-yo?)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas válidas de preguntar si aceptan efectivo."
    },
    {
        profe: "experto", unit: "Viajes", diff: "expert",
        q: "¿Cómo se dice 'estoy perdido, ¿dónde está la estación?' en coreano?",
        opts: ["길을 잃었어요, 역이 어디예요? (gil-eul ilh-eoss-eo-yo, yeok-i eo-di-ye-yo?)", "잃어버렸어요, 역이 어디예요? (ilh-eo-beo-ryeoss-eo-yo, yeok-i eo-di-ye-yo?)", "몰라요, 역이 어디예요? (mol-la-yo, yeok-i eo-di-ye-yo?)", "어디예요, 역이 어디예요? (eo-di-ye-yo, yeok-i eo-di-ye-yo?)"],
        ans: 0,
        exp: "길을 잃었어요 (me perdí) + 역이 어디예요? (¿dónde está la estación?)."
    },
    {
        profe: "experto", unit: "Viajes", diff: "expert",
        q: "¿Cómo se dice '¿qué me recomienda comer?' en coreano?",
        opts: ["뭐 먹는 게 좋아요? (mwo meok-neun ge jo-a-yo?)", "추천 메뉴가 뭐예요? (chu-cheon me-nyu-ga mwo-ye-yo?)", "뭐가 맛있어요? (mwo-ga ma-siss-eo-yo?)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas de preguntar por recomendaciones de comida."
    },
    {
        profe: "experto", unit: "Viajes", diff: "expert",
        q: "¿Cómo se dice 'sin picante, por favor' en coreano?",
        opts: ["안 맵게 해주세요 (an maep-ge hae-ju-se-yo)", "덜 맵게 해주세요 (deol maep-ge hae-ju-se-yo)", "맵지 않게 해주세요 (maep-ji an-ke hae-ju-se-yo)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas válidas de pedir que la comida no sea picante."
    },
    {
        profe: "experto", unit: "Viajes", diff: "expert",
        q: "¿Cómo se dice '¿puedo probar esto?' (en una tienda de comida)?",
        opts: ["이거 맛볼 수 있어요? (i-geo mat-bol su iss-eo-yo?)", "이거 시식해도 돼요? (i-geo si-sik-hae-do dwae-yo?)", "이거 먹어도 돼요? (i-geo meo-geo-do dwae-yo?)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas de preguntar si se puede probar algo antes de comprar."

    // ----- EXPRESIONES DE TIEMPO (10) -----
    },
    {
        profe: null, unit: "Tiempo", diff: "hard",
        q: "¿Cómo se dice 'todos los días' en coreano?",
        opts: ["매일 (mae-il)", "날마다 (nal-ma-da)", "매일매일 (mae-il-mae-il)", "Todas son correctas"],
        ans: 3,
        exp: "Todas significan 'todos los días'. '매일' es la más común."
    },
    {
        profe: null, unit: "Tiempo", diff: "hard",
        q: "¿Cómo se dice 'a veces' en coreano?",
        opts: ["가끔 (ga-kkeum)", "때때로 (ttae-ttae-ro)", "이따금 (i-tta-geum)", "Todas son correctas"],
        ans: 3,
        exp: "Todas significan 'a veces'. '가끔' es la más común en conversación."
    },
    {
        profe: null, unit: "Tiempo", diff: "hard",
        q: "¿Cómo se dice 'siempre' en coreano?",
        opts: ["항상 (hang-sang)", "언제나 (eon-je-na)", "늘 (neul)", "Todas son correctas"],
        ans: 3,
        exp: "Todas significan 'siempre'. '항상' es la más formal, '늘' es más coloquial."
    },
    {
        profe: null, unit: "Tiempo", diff: "hard",
        q: "¿Cómo se dice 'nunca' en coreano?",
        opts: ["절대 (jeol-dae)", "전혀 (jeon-hyeo)", "결코 (gyeol-ko)", "Todas son correctas pero con matices diferentes"],
        ans: 3,
        exp: "'절대' = nunca (énfasis), '전혀' = nunca / en absoluto, '결코' = nunca (formal). Normalmente van con negación: 절대 안 가요 = nunca voy."
    },
    {
        profe: null, unit: "Tiempo", diff: "hard",
        q: "¿Cómo se dice 'rápidamente' en coreano?",
        opts: ["빨리 (ppal-li)", "재빨리 (jae-ppal-li)", "신속히 (sin-sok-hi)", "Todas son correctas"],
        ans: 3,
        exp: "Todas significan 'rápidamente'. '빨리' es la más común."
    },
    {
        profe: null, unit: "Tiempo", diff: "hard",
        q: "¿Cómo se dice 'despacio' / 'lentamente' en coreano?",
        opts: ["천천히 (cheon-cheon-hi)", "느리게 (neu-ri-ge)", "서행 (seo-haeng)", "Todas son correctas"],
        ans: 3,
        exp: "'천천히' es la más común para 'despacio'. '느리게' es más literal 'lentamente'."
    },
    {
        profe: null, unit: "Tiempo", diff: "hard",
        q: "¿Cómo se dice 'inmediatamente' / 'ahora mismo' en coreano?",
        opts: ["지금 (ji-geum)", "당장 (dang-jang)", "즉시 (jeuk-si)", "Todas son correctas con diferentes matices"],
        ans: 3,
        exp: "'지금' = ahora, '당장' = en este instante (urgente), '즉시' = inmediatamente (formal)."
    },
    {
        profe: null, unit: "Tiempo", diff: "hard",
        q: "¿Cómo se dice 'pronto' en coreano?",
        opts: ["곧 (got)", "이내 (i-nae)", "머지않아 (meo-ji-an-a)", "Todas son correctas"],
        ans: 3,
        exp: "Todas significan 'pronto'. '곧' es la más común y directa."
    },
    {
        profe: null, unit: "Tiempo", diff: "hard",
        q: "¿Cómo se dice 'todavía' / 'aún' en coreano?",
        opts: ["아직 (a-jik)", "여전히 (yeo-jeon-hi)", "아직도 (a-jik-do)", "Todas son correctas"],
        ans: 3,
        exp: "'아직' = todavía (en oraciones positivas) / aún no (con negación). '아직도' = todavía (con énfasis)."
    },
    {
        profe: null, unit: "Tiempo", diff: "hard",
        q: "¿Cómo se dice 'ya' en coreano?",
        opts: ["벌써 (beol-sseo)", "이미 (i-mi)", "다 (da)", "Todas son correctas con matices diferentes"],
        ans: 3,
        exp: "'벌써' = ya (sorprendido de que haya pasado rápido), '이미' = ya (neutral), '다' = completamente (ya todo)."

    // ----- FAMILIA Y TÍTULOS (10) -----
    },
    {
        profe: false, unit: "Familia", diff: "medium",
        q: "¿Cómo se dice 'padre' (de forma formal / refiriéndose al propio padre)?",
        opts: ["아버지 (a-beo-ji)", "아빠 (ap-pa)", "부친 (bu-chin)", "아버님 (a-beo-nim)"],
        ans: 0,
        exp: "아버지 = padre (formal). 아빠 = papá (cariñoso). 부친 = padre (muy formal, en documentos). 아버님 = padre (honorífico al hablar del padre de otro)."
    },
    {
        profe: false, unit: "Familia", diff: "medium",
        q: "¿Cómo se dice 'madre' (de forma formal / refiriéndose a la propia madre)?",
        opts: ["어머니 (eo-meo-ni)", "엄마 (eom-ma)", "모친 (mo-chin)", "어머님 (eo-meo-nim)"],
        ans: 0,
        exp: "어머니 = madre (formal). 엄마 = mamá (cariñoso). 모친 = madre (muy formal). 어머님 = madre (honorífico al hablar de la madre de otro)."
    },
    {
        profe: false, unit: "Familia", diff: "medium",
        q: "¿Cómo se dice 'hermano mayor' si eres hombre?",
        opts: ["형 (hyeong)", "오빠 (op-ppa)", "형님 (hyeong-nim)", "Todas son correctas según contexto"],
        ans: 0,
        exp: "형 = hermano mayor (si el hablante es hombre). 오빠 = hermano mayor (si el hablante es mujer)."
    },
    {
        profe: false, unit: "Familia", diff: "medium",
        q: "¿Cómo se dice 'hermana mayor' si eres mujer?",
        opts: ["언니 (eon-ni)", "누나 (nu-na)", "누님 (nu-nim)", "Todas son correctas según contexto"],
        ans: 0,
        exp: "언니 = hermana mayor (si el hablante es mujer). 누나 = hermana mayor (si el hablante es hombre)."
    },
    {
        profe: false, unit: "Familia", diff: "medium",
        q: "¿Cómo se dice 'abuelo' en coreano?",
        opts: ["할아버지 (ha-ra-beo-ji)", "할아버님 (ha-ra-beo-nim)", "조부 (jo-bu)", "Todas son correctas según formalidad"],
        ans: 3,
        exp: "할아버지 = abuelo (estándar). 할아버님 = abuelo (honorífico). 조부 = abuelo (formal, documentos)."
    },
    {
        profe: false, unit: "Familia", diff: "medium",
        q: "¿Cómo se dice 'abuela' en coreano?",
        opts: ["할머니 (hal-meo-ni)", "할머님 (hal-meo-nim)", "조모 (jo-mo)", "Todas son correctas según formalidad"],
        ans: 3,
        exp: "할머니 = abuela (estándar). 할머님 = abuela (honorífico). 조모 = abuela (formal)."
    },
    {
        profe: false, unit: "Familia", diff: "medium",
        q: "¿Cómo se llama a un 'tío' (hermano del padre) en coreano?",
        opts: ["삼촌 (sam-chon)", "아저씨 (a-jeo-ssi)", "고모부 (go-mo-bu)", "외삼촌 (oe-sam-chon)"],
        ans: 0,
        exp: "삼촌 = tío (hermano del padre). 외삼촌 = tío (hermano de la madre)."
    },
    {
        profe: false, unit: "Familia", diff: "medium",
        q: "¿Cómo se dice 'primo' en coreano?",
        opts: ["사촌 (sa-chon)", "친척 (chin-cheok)", "조카 (jo-ka)", "이모 (i-mo)"],
        ans: 0,
        exp: "사촌 = primo/a (hijo del tío/a). 친척 = pariente en general. 조카 = sobrino/a."
    },
    {
        profe: false, unit: "Familia", diff: "medium",
        q: "¿Cómo se dice 'esposo' / 'marido' en coreano?",
        opts: ["남편 (nam-pyeon)", "남자 (nam-ja)", "아내 (a-nae)", "부인 (bu-in)"],
        ans: 0,
        exp: "남편 = esposo/marido. 아내 = esposa. 부인 = esposa (formal)."
    },
    {
        profe: false, unit: "Familia", diff: "medium",
        q: "¿Cómo se dice 'esposa' en coreano?",
        opts: ["아내 (a-nae)", "와이프 (wa-i-peu)", "부인 (bu-in)", "Todas son correctas"],
        ans: 3,
        exp: "아내 = esposa (coreano nativo). 와이프 = esposa (préstamo del inglés). 부인 = esposa (formal)."

    // ----- EMOCIONES Y SENTIMIENTOS (10) -----
    },
    {
        profe: false, unit: "Emociones", diff: "medium",
        q: "¿Cómo se dice 'feliz' en coreano?",
        opts: ["행복하다 (haeng-bok-ha-da)", "기쁘다 (gi-ppeu-da)", "즐겁다 (jeul-geop-da)", "Todas son correctas con matices diferentes"],
        ans: 3,
        exp: "행복하다 = feliz (estado general). 기쁘다 = alegre/contento (momento específico). 즐겁다 = divertido/placentero."
    },
    {
        profe: false, unit: "Emociones", diff: "medium",
        q: "¿Cómo se dice 'triste' en coreano?",
        opts: ["슬프다 (seul-peu-da)", "우울하다 (u-ul-ha-da)", "섭섭하다 (seop-seop-ha-da)", "Todas son correctas con matices diferentes"],
        ans: 3,
        exp: "슬프다 = triste. 우울하다 = deprimido. 섭섭하다 = decepcionado / desilusionado (por una acción de otro)."
    },
    {
        profe: false, unit: "Emociones", diff: "medium",
        q: "¿Cómo se dice 'enojado' / 'molesto' en coreano?",
        opts: ["화나다 (hwa-na-da)", "짜증나다 (jja-jeung-na-da)", "성나다 (seong-na-da)", "Todas son correctas"],
        ans: 3,
        exp: "화나다 = estar enojado. 짜증나다 = estar irritado/frustrado. 성나다 = estar furioso (más fuerte)."
    },
    {
        profe: false, unit: "Emociones", diff: "medium",
        q: "¿Cómo se dice 'tener miedo' / 'asustado' en coreano?",
        opts: ["무섭다 (mu-seop-da)", "겁나다 (geop-na-da)", "두렵다 (du-ryeop-da)", "Todas son correctas con matices diferentes"],
        ans: 3,
        exp: "무섭다 = da miedo (algo aterrador). 겁나다 = tener miedo (coloquial). 두렵다 = temer (más formal)."
    },
    {
        profe: false, unit: "Emociones", diff: "medium",
        q: "¿Cómo se dice 'sorprendido' en coreano?",
        opts: ["놀라다 (nol-la-da)", "깜짝 놀라다 (kkam-jjak nol-la-da)", "어리둥절하다 (eo-ri-dung-jeol-ha-da)", "Todas son correctas"],
        ans: 3,
        exp: "놀라다 = sorprenderse. 깜짝 놀라다 = sorprenderse de repente (sobresaltarse). 어리둥절하다 = estar desconcertado."
    },
    {
        profe: false, unit: "Emociones", diff: "medium",
        q: "¿Cómo se dice 'cansado' en coreano?",
        opts: ["피곤하다 (pi-gon-ha-da)", "지치다 (ji-chi-da)", "힘들다 (him-deul-da)", "Todas son correctas con matices diferentes"],
        ans: 3,
        exp: "피곤하다 = estar cansado (falta de sueño). 지치다 = agotado (emocional/físico). 힘들다 = difícil / agotador (situación)."
    },
    {
        profe: false, unit: "Emociones", diff: "medium",
        q: "¿Cómo se dice 'preocupado' en coreano?",
        opts: ["걱정하다 (geok-jeong-ha-da)", "불안하다 (bul-an-ha-da)", "신경 쓰이다 (sin-gyeong sseu-i-da)", "Todas son correctas"],
        ans: 3,
        exp: "걱정하다 = preocuparse (activo). 불안하다 = estar ansioso. 신경 쓰이다 = estar molesto/preocupado por algo."
    },
    {
        profe: false, unit: "Emociones", diff: "medium",
        q: "¿Cómo se dice 'aburrido' en coreano?",
        opts: ["지루하다 (ji-ru-ha-da)", "심심하다 (sim-sim-ha-da)", "따분하다 (tta-bun-ha-da)", "Todas son correctas con matices diferentes"],
        ans: 3,
        exp: "지루하다 = aburrido (algo que es aburrido). 심심하다 = estar aburrido (sin nada que hacer). 따분하다 = tedioso."
    },
    {
        profe: false, unit: "Emociones", diff: "medium",
        q: "¿Cómo se dice 'sentir vergüenza' en coreano?",
        opts: ["부끄럽다 (bu-kkeu-reop-da)", "창피하다 (chang-pi-ha-da)", "민망하다 (min-mang-ha-da)", "Todas son correctas con matices diferentes"],
        ans: 3,
        exp: "부끄럽다 = tímido / vergüenza (personal). 창피하다 = avergonzado (por algo externo). 민망하다 = sentirse incómodo/apenado."
    },
    {
        profe: false, unit: "Emociones", diff: "medium",
        q: "¿Cómo se dice 'tener hambre' en coreano?",
        opts: ["배고프다 (bae-go-peu-da)", "출출하다 (chul-chul-ha-da)", "식욕이 있다 (sik-yok-i it-da)", "배고파 죽겠다 (bae-go-pa juk-get-da)"],
        ans: 0,
        exp: "배고프다 = tener hambre (la forma más común). 배고파 죽겠다 = me muero de hambre (exagerado)."

    // ----- CLIMA Y NATURALEZA (10) -----
    },
    {
        profe: false, unit: "Clima", diff: "medium",
        q: "¿Cómo se dice 'llueve' en coreano?",
        opts: ["비가 와요 (bi-ga wa-yo)", "비가 내려요 (bi-ga nae-ryeo-yo)", "비가 오고 있어요 (bi-ga o-go iss-eo-yo)", "Todas son correctas"],
        ans: 3,
        exp: "Todas significan 'está lloviendo'. '비가 와요' es la más común."
    },
    {
        profe: false, unit: "Clima", diff: "medium",
        q: "¿Cómo se dice 'nieva' en coreano?",
        opts: ["눈이 와요 (nun-i wa-yo)", "눈이 내려요 (nun-i nae-ryeo-yo)", "눈이 오고 있어요 (nun-i o-go iss-eo-yo)", "Todas son correctas"],
        ans: 3,
        exp: "Todas significan 'está nevando'. '눈이 와요' es la más común."
    },
    {
        profe: false, unit: "Clima", diff: "medium",
        q: "¿Cómo se dice 'hace buen tiempo' en coreano?",
        opts: ["날씨가 좋아요 (nal-ssi-ga jo-a-yo)", "날씨가 맑아요 (nal-ssi-ga malg-a-yo)", "날씨가 화창해요 (nal-ssi-ga hwa-chang-hae-yo)", "Todas son correctas"],
        ans: 3,
        exp: "Todas significan 'hace buen tiempo / el clima está agradable'."
    },
    {
        profe: false, unit: "Clima", diff: "medium",
        q: "¿Cómo se dice 'hace viento' en coreano?",
        opts: ["바람이 불어요 (ba-ram-i bu-reo-yo)", "바람이 쌔요 (ba-ram-i ssae-yo)", "바람이 강해요 (ba-ram-i gang-hae-yo)", "Todas son correctas"],
        ans: 3,
        exp: "'바람이 불어요' = hace viento (literal: el viento sopla)."
    },
    {
        profe: false, unit: "Clima", diff: "medium",
        q: "¿Cómo se dice 'está nublado' en coreano?",
        opts: ["흐려요 (heu-ryeo-yo)", "구름이 많아요 (gu-reum-i manh-a-yo)", "하늘이 흐려요 (ha-neur-i heu-ryeo-yo)", "Todas son correctas"],
        ans: 3,
        exp: "흐려요 = está nublado (forma más común)."
    },
    {
        profe: false, unit: "Clima", diff: "medium",
        q: "¿Cómo se dice 'hace sol' / 'hay sol' en coreano?",
        opts: ["해가 나요 (hae-ga na-yo)", "날씨가 맑아요 (nal-ssi-ga malg-a-yo)", "화창해요 (hwa-chang-hae-yo)", "Todas son correctas"],
        ans: 3,
        exp: "'해가 나요' = hay sol / está soleado. '맑아요' = está despejado."
    },
    {
        profe: false, unit: "Clima", diff: "medium",
        q: "¿Cómo se dice 'primavera' en coreano?",
        opts: ["봄 (bom)", "여름 (yeo-reum)", "가을 (ga-eul)", "겨울 (gyeo-ul)"],
        ans: 0,
        exp: "봄 = primavera. 여름 = verano. 가을 = otoño. 겨울 = invierno."
    },
    {
        profe: false, unit: "Clima", diff: "medium",
        q: "¿Cómo se dice 'verano' en coreano?",
        opts: ["봄 (bom)", "여름 (yeo-reum)", "가을 (ga-eul)", "겨울 (gyeo-ul)"],
        ans: 1,
        exp: "여름 = verano."
    },
    {
        profe: false, unit: "Clima", diff: "medium",
        q: "¿Cómo se dice 'otoño' en coreano?",
        opts: ["봄 (bom)", "여름 (yeo-reum)", "가을 (ga-eul)", "겨울 (gyeo-ul)"],
        ans: 2,
        exp: "가을 = otoño."
    },
    {
        profe: false, unit: "Clima", diff: "medium",
        q: "¿Cómo se dice 'invierno' en coreano?",
        opts: ["봄 (bom)", "여름 (yeo-reum)", "가을 (ga-eul)", "겨울 (gyeo-ul)"],
        ans: 3,
        exp: "겨울 = invierno."

    // ----- PREGUNTAS ÚTILES ADICIONALES (10) -----
    },
    {
        profe: "experto", unit: "Útiles", diff: "expert",
        q: "¿Cómo se dice '¿puedo sentarme aquí?' en coreano?",
        opts: ["여기 앉아도 돼요? (yeo-gi an-j-a-do dwae-yo?)", "여기 앉을 수 있어요? (yeo-gi an-jeul su iss-eo-yo?)", "이 자리 괜찮아요? (i ja-ri gwaen-chanh-a-yo?)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas válidas de preguntar si puedes sentarte en un lugar."
    },
    {
        profe: "experto", unit: "Útiles", diff: "expert",
        q: "¿Cómo se dice '¿a qué hora abre?' en coreano?",
        opts: ["몇 시에 열어요? (myeot si-e yeo-reo-yo?)", "언제 열어요? (eon-je yeo-reo-yo?)", "오픈 시간이 어떻게 되세요? (o-peun si-gan-i eo-tteo-ke doe-se-yo?)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas de preguntar la hora de apertura."
    },
    {
        profe: "experto", unit: "Útiles", diff: "expert",
        q: "¿Cómo se dice '¿a qué hora cierra?' en coreano?",
        opts: ["몇 시에 닫아요? (myeot si-e da-da-yo?)", "언제 닫아요? (eon-je da-da-yo?)", "마감 시간이 어떻게 되세요? (ma-gam si-gan-i eo-tteo-ke doe-se-yo?)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas de preguntar la hora de cierre."
    },
    {
        profe: "experto", unit: "Útiles", diff: "expert",
        q: "¿Cómo se dice '¿puedo usar el baño?' en coreano?",
        opts: ["화장실 사용해도 돼요? (hwa-jang-sir sa-yong-hae-do dwae-yo?)", "화장실 가도 돼요? (hwa-jang-sir ga-do dwae-yo?)", "화장실 좀 써도 될까요? (hwa-jang-sir jom sseo-do doel-kka-yo?)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas educadas de preguntar si se puede usar el baño."
    },
    {
        profe: "experto", unit: "Útiles", diff: "expert",
        q: "¿Cómo se dice 'tengo una pregunta' en coreano?",
        opts: ["질문 있어요 (jil-mun iss-eo-yo)", "물어볼 게 있어요 (mu-reo-bol ge iss-eo-yo)", "하나 물어봐도 될까요? (ha-na mu-reo-bwa-do doel-kka-yo?)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas de decir que tienes una pregunta."
    },
    {
        profe: "experto", unit: "Útiles", diff: "expert",
        q: "¿Cómo se dice '¿puede repetir, por favor?' en coreano?",
        opts: ["다시 말씀해 주세요 (da-si mal-sseum-hae ju-se-yo)", "한 번 더 말해 주세요 (han beon deo mal-hae ju-se-yo)", "다시 한 번 해 주세요 (da-si han beon hae ju-se-yo)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas educadas de pedir que repitan algo."
    },
    {
        profe: "experto", unit: "Útiles", diff: "expert",
        q: "¿Cómo se dice 'hablo un poco de coreano' en coreano?",
        opts: ["한국어를 조금 해요 (han-gu-geo-reul jo-geum hae-yo)", "한국어를 조금 할 수 있어요 (han-gu-geo-reul jo-geum hal su iss-eo-yo)", "한국어를 조금 알아요 (han-gu-geo-reul jo-geum a-ra-yo)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas de decir que hablas un poco de coreano."
    },
    {
        profe: "experto", unit: "Útiles", diff: "expert",
        q: "¿Cómo se dice '¿entiende inglés?' en coreano?",
        opts: ["영어 할 수 있어요? (yeong-eo hal su iss-eo-yo?)", "영어 알아요? (yeong-eo a-ra-yo?)", "영어 되세요? (yeong-eo doe-se-yo?)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas de preguntar si alguien entiende/habla inglés."
    },
    {
        profe: "experto", unit: "Útiles", diff: "expert",
        q: "¿Cómo se dice 'necesito un médico' en coreano?",
        opts: ["의사가 필요해요 (ui-sa-ga pil-yo-hae-yo)", "병원에 가야 해요 (byeong-won-e ga-ya hae-yo)", "의사를 불러 주세요 (ui-sa-reul bul-leo ju-se-yo)", "Todas son correctas"],
        ans: 3,
        exp: "Todas son formas de pedir ayuda médica."
    },
    {
        profe: "experto", unit: "Útiles", diff: "expert",
        q: "¿Cómo se dice '¡ayuda!' (emergencia) en coreano?",
        opts: ["도와주세요 (do-wa-ju-se-yo)", "살려주세요 (sal-lyeo-ju-se-yo)", "도움! (do-um!)", "Todas son correctas según gravedad"],
        ans: 3,
        exp: "도와주세요 = ayuda (general). 살려주세요 = sálvame (vida o muerte)."
    }
];

registrarAsignatura('coreano', BANK.coreano);   