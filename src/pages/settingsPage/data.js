const data = {
  Nominativ: {
    Maskulin: [
      {
        word: "der",
        sentence: "Der Mann arbeitet.",
        translation: "Мужчина работает.",
        note: "Определённый артикль — 'этот конкретный'.",
      },
      {
        word: "ein",
        sentence: "Ein Hund läuft.",
        translation: "Бежит (какой-то) пёс.",
        note: "Неопределённый артикль — 'один из многих'.",
      },
      {
        word: "kein",
        sentence: "Kein Lehrer fehlt.",
        translation: "Ни один учитель не отсутствует.",
        note: "Отрицание с 'kein'.",
      },
      {
        word: "mein",
        sentence: "Mein Freund kommt.",
        translation: "Мой друг приходит.",
        note: "Притяжательное местоимение — мой.",
      },
      {
        word: "dein",
        sentence: "Dein Bruder ist nett.",
        translation: "Твой брат милый.",
        note: "Притяжательное местоимение — твой.",
      },
      {
        word: "sein",
        sentence: "Sein Vater ist Arzt.",
        translation: "Его отец врач.",
        note: "Притяжательное местоимение — его.",
      },
      {
        word: "ihr",
        sentence: "Ihr Bruder ist groß.",
        translation: "Её брат высокий.",
        note: "Притяжательное местоимение — её.",
      },
      {
        word: "unser",
        sentence: "Unser Freund wohnt hier.",
        translation: "Наш друг живёт здесь.",
        note: "Притяжательное местоимение — наш.",
      },
      {
        word: "euer",
        sentence: "Euer Onkel ist lustig.",
        translation: "Ваш дядя смешной.",
        note: "Притяжательное местоимение множественного числа — ваш.",
      },
      {
        word: "Ihr",
        sentence: "Ihr Chef ist streng.",
        translation: "Ваш начальник строгий.",
        note: "Вежливая форма — Ihr.",
      },
      {
        word: "dieser",
        sentence: "Dieser Mann ist stark.",
        translation: "Этот мужчина сильный.",
        note: "Указательное местоимение — 'этот'.",
      },
      {
        word: "welcher",
        sentence: "Welcher Mann ist das?",
        translation: "Который это мужчина?",
        note: "Вопросительное местоимение — 'который'.",
      },
    ],
    Feminin: [
      {
        word: "die",
        sentence: "Die Frau lacht.",
        translation: "Женщина смеётся.",
        note: "Определённый артикль женского рода.",
      },
      {
        word: "eine",
        sentence: "Eine Katze schläft.",
        translation: "Кошка спит.",
        note: "Неопределённый артикль женского рода.",
      },
      {
        word: "keine",
        sentence: "Keine Blume ist gelb.",
        translation: "Нет ни одного жёлтого цветка.",
        note: "Отрицательный артикль 'kein'.",
      },
      {
        word: "meine",
        sentence: "Meine Schwester liest ein Buch.",
        translation: "Моя сестра читает книгу.",
        note: "Притяжательное местоимение — мой/моя.",
      },
      {
        word: "deine",
        sentence: "Deine Freundin kommt später.",
        translation: "Твоя подруга придёт позже.",
        note: "Притяжательное местоимение — твой/твоя.",
      },
      {
        word: "ihre",
        sentence: "Ihre Mutter ist Lehrerin.",
        translation: "Её мать — учительница.",
        note: "Притяжательное местоимение — её.",
      },
      {
        word: "unsere",
        sentence: "Unsere Tante wohnt in Berlin.",
        translation: "Наша тётя живёт в Берлине.",
        note: "Притяжательное местоимение — наш/наша.",
      },
      {
        word: "eure",
        sentence: "Eure Lehrerin ist nett.",
        translation: "Ваша учительница милая.",
        note: "Притяжательное местоимение множественного числа — ваш/ваша.",
      },
      {
        word: "Ihre",
        sentence: "Ihre Chefin ist streng.",
        translation: "Ваша (вежливая форма) начальница строгая.",
        note: "Вежливая форма 'Ihr'.",
      },
      {
        word: "diese",
        sentence: "Diese Frau ist freundlich.",
        translation: "Эта женщина дружелюбная.",
        note: "Указательное местоимение — эта.",
      },
      {
        word: "welche",
        sentence: "Welche Frau ist Lehrerin?",
        translation: "Какая женщина — учительница?",
        note: "Вопросительное местоимение — какая.",
      },
    ],
    Neutrum: [
      {
        word: "das",
        sentence: "Das Kind spielt.",
        translation: "Ребёнок играет.",
        note: "Определённый артикль среднего рода.",
      },
      {
        word: "ein",
        sentence: "Ein Haus steht da.",
        translation: "Там стоит дом.",
        note: "Неопределённый артикль среднего рода.",
      },
      {
        word: "kein",
        sentence: "Kein Auto ist rot.",
        translation: "Ни одна машина не красная.",
        note: "Отрицательный артикль.",
      },
      {
        word: "mein",
        sentence: "Mein Auto ist neu.",
        translation: "Моя машина новая.",
        note: "Притяжательное местоимение — мой.",
      },
      {
        word: "dieses",
        sentence: "Dieses Kind ist klug.",
        translation: "Этот ребёнок умный.",
        note: "Указательное местоимение — это.",
      },
      {
        word: "welches",
        sentence: "Welches Buch liest du?",
        translation: "Какую книгу ты читаешь?",
        note: "Вопросительное местоимение — какое.",
      },
    ],
    Plural: [
      {
        word: "die",
        sentence: "Die Kinder schlafen.",
        translation: "Дети спят.",
        note: "Определённый артикль во мн. числе.",
      },
      {
        word: "keine",
        sentence: "Keine Autos fahren.",
        translation: "Машины не едут.",
        note: "Отрицание с 'kein' во множественном числе.",
      },
      {
        word: "meine",
        sentence: "Meine Freunde sind hier.",
        translation: "Мои друзья здесь.",
        note: "Притяжательное местоимение — мой/моя.",
      },
      {
        word: "diese",
        sentence: "Diese Häuser sind alt.",
        translation: "Эти дома старые.",
        note: "Указательное местоимение — эти.",
      },
      {
        word: "welche",
        sentence: "Welche Bücher sind interessant?",
        translation: "Какие книги интересные?",
        note: "Вопросительное местоимение — какие.",
      },
    ],
  },

  Akkusativ: {
    Maskulin: [
      {
        word: "den",
        sentence: "Ich sehe den Mann.",
        translation: "Я вижу мужчину.",
        note: "Определённый артикль в винительном падеже.",
      },
      {
        word: "einen",
        sentence: "Ich habe einen Hund.",
        translation: "У меня есть собака.",
        note: "Неопределённый артикль.",
      },
      {
        word: "keinen",
        sentence: "Ich sehe keinen Lehrer.",
        translation: "Я не вижу учителя.",
        note: "Отрицание с 'kein'.",
      },
      {
        word: "meinen",
        sentence: "Ich sehe meinen Freund.",
        translation: "Я вижу своего друга.",
        note: "Притяжательное местоимение — мой.",
      },
      {
        word: "deinen",
        sentence: "Ich sehe deinen Bruder.",
        translation: "Я вижу твоего брата.",
        note: "Притяжательное местоимение — твой.",
      },
      {
        word: "seinen",
        sentence: "Ich sehe seinen Vater.",
        translation: "Я вижу его отца.",
        note: "Притяжательное местоимение — его.",
      },
      {
        word: "ihren",
        sentence: "Ich sehe ihren Bruder.",
        translation: "Я вижу её брата.",
        note: "Притяжательное местоимение — её.",
      },
      {
        word: "unseren",
        sentence: "Ich sehe unseren Freund.",
        translation: "Я вижу нашего друга.",
        note: "Притяжательное местоимение — наш.",
      },
      {
        word: "euren",
        sentence: "Ich sehe euren Onkel.",
        translation: "Я вижу вашего дядю.",
        note: "Притяжательное множественное число — ваш.",
      },
      {
        word: "Ihren",
        sentence: "Ich sehe Ihren Chef.",
        translation: "Я вижу Вашего начальника.",
        note: "Вежливая форма 'Ihr'.",
      },
      {
        word: "diesen",
        sentence: "Ich sehe diesen Mann.",
        translation: "Я вижу этого мужчину.",
        note: "Указательное местоимение — этот.",
      },
      {
        word: "welchen",
        sentence: "Welchen Mann siehst du?",
        translation: "Какого мужчину ты видишь?",
        note: "Вопросительное местоимение — какой.",
      },
    ],
    Feminin: [
      {
        word: "die",
        sentence: "Ich höre die Frau.",
        translation: "Я слышу женщину.",
        note: "Форма совпадает с Nominativ.",
      },
      {
        word: "eine",
        sentence: "Ich sehe eine Blume.",
        translation: "Я вижу цветок.",
        note: "Неопределённый артикль.",
      },
      {
        word: "keine",
        sentence: "Ich sehe keine Blume.",
        translation: "Я не вижу цветка.",
        note: "Отрицательный артикль.",
      },
      {
        word: "meine",
        sentence: "Ich sehe meine Schwester.",
        translation: "Я вижу свою сестру.",
        note: "Притяжательное местоимение — мой/моя.",
      },
      {
        word: "deine",
        sentence: "Ich sehe deine Freundin.",
        translation: "Я вижу твою подругу.",
        note: "Притяжательное — твой/твоя.",
      },
      {
        word: "ihre",
        sentence: "Ich sehe ihre Mutter.",
        translation: "Я вижу её мать.",
        note: "Притяжательное — её.",
      },
      {
        word: "unsere",
        sentence: "Ich sehe unsere Tante.",
        translation: "Я вижу нашу тётю.",
        note: "Притяжательное — наш/наша.",
      },
      {
        word: "eure",
        sentence: "Ich sehe eure Lehrerin.",
        translation: "Я вижу вашу учительницу.",
        note: "Притяжательное множественное число — ваш/ваша.",
      },
      {
        word: "Ihre",
        sentence: "Ich sehe Ihre Chefin.",
        translation: "Я вижу Вашу начальницу.",
        note: "Вежливая форма 'Ihr'.",
      },
      {
        word: "diese",
        sentence: "Ich sehe diese Frau.",
        translation: "Я вижу эту женщину.",
        note: "Указательное местоимение — эту.",
      },
      {
        word: "welche",
        sentence: "Welche Frau siehst du?",
        translation: "Какую женщину ты видишь?",
        note: "Вопросительное местоимение — какую.",
      },
    ],
    Neutrum: [
      {
        word: "das",
        sentence: "Ich habe das Buch.",
        translation: "У меня есть книга.",
        note: "Форма совпадает с Nominativ.",
      },
      {
        word: "ein",
        sentence: "Ich sehe ein Kind.",
        translation: "Я вижу ребёнка.",
        note: "Неопределённый артикль.",
      },
      {
        word: "kein",
        sentence: "Ich sehe kein Auto.",
        translation: "Я не вижу машину.",
        note: "Отрицание с 'kein'.",
      },
      {
        word: "mein",
        sentence: "Ich sehe mein Auto.",
        translation: "Я вижу мою машину.",
        note: "Притяжательное — мой.",
      },
      {
        word: "dieses",
        sentence: "Ich sehe dieses Kind.",
        translation: "Я вижу этого ребёнка.",
        note: "Указательное местоимение — этот.",
      },
      {
        word: "welches",
        sentence: "Welches Buch siehst du?",
        translation: "Какую книгу ты видишь?",
        note: "Вопросительное местоимение — какое.",
      },
    ],
    Plural: [
      {
        word: "die",
        sentence: "Ich kenne die Leute.",
        translation: "Я знаю людей.",
        note: "Форма совпадает с Nominativ Plural.",
      },
      {
        word: "keine",
        sentence: "Ich sehe keine Kinder.",
        translation: "Я не вижу детей.",
        note: "Отрицание во множественном числе.",
      },
      {
        word: "meine",
        sentence: "Ich sehe meine Freunde.",
        translation: "Я вижу своих друзей.",
        note: "Притяжательное во множественном числе — мои.",
      },
      {
        word: "diese",
        sentence: "Ich sehe diese Häuser.",
        translation: "Я вижу эти дома.",
        note: "Указательное местоимение — эти.",
      },
      {
        word: "welche",
        sentence: "Welche Bücher siehst du?",
        translation: "Какие книги ты видишь?",
        note: "Вопросительное местоимение — какие.",
      },
    ],
  },

  Dativ: {
    Maskulin: [
      {
        word: "dem",
        sentence: "Ich helfe dem Mann.",
        translation: "Я помогаю мужчине.",
        note: "Дательный падеж — 'кому?'.",
      },
      {
        word: "einem",
        sentence: "Ich gebe einem Freund ein Buch.",
        translation: "Я даю книгу одному другу.",
        note: "Неопределённый артикль.",
      },
      {
        word: "keinem",
        sentence: "Ich helfe keinem Lehrer.",
        translation: "Я никому из учителей не помогаю.",
        note: "Отрицание.",
      },
      {
        word: "meinem",
        sentence: "Ich helfe meinem Freund.",
        translation: "Я помогаю своему другу.",
        note: "Притяжательное — мой.",
      },
      {
        word: "deinem",
        sentence: "Ich helfe deinem Bruder.",
        translation: "Я помогаю твоему брату.",
        note: "Притяжательное — твой.",
      },
      {
        word: "seinem",
        sentence: "Ich helfe seinem Vater.",
        translation: "Я помогаю его отцу.",
        note: "Притяжательное — его.",
      },
      {
        word: "ihrem",
        sentence: "Ich helfe ihrer Mutter.",
        translation: "Я помогаю её матери.",
        note: "Притяжательное — её.",
      },
      {
        word: "unserem",
        sentence: "Ich zeige unserem Freund den Weg.",
        translation: "Я показываю нашему другу путь.",
        note: "Притяжательное — наш.",
      },
      {
        word: "eurem",
        sentence: "Ich helfe eurem Onkel.",
        translation: "Я помогаю вашему дяде.",
        note: "Притяжательное множественное — ваш.",
      },
      {
        word: "Ihrem",
        sentence: "Ich helfe Ihrem Chef.",
        translation: "Я помогаю Вашему начальнику.",
        note: "Вежливая форма.",
      },
      {
        word: "diesem",
        sentence: "Ich helfe diesem Mann.",
        translation: "Я помогаю этому мужчине.",
        note: "Указательное местоимение — этот.",
      },
      {
        word: "welchem",
        sentence: "Ich helfe welchem Mann?",
        translation: "Какому мужчине я помогаю?",
        note: "Вопросительное местоимение — какому.",
      },
    ],
    Feminin: [
      {
        word: "der",
        sentence: "Ich danke der Frau.",
        translation: "Я благодарю женщину.",
        note: "Дательный падеж — женский род.",
      },
      {
        word: "einer",
        sentence: "Ich gebe einer Freundin ein Buch.",
        translation: "Я даю книге одной подруге.",
        note: "Неопределённый артикль.",
      },
      {
        word: "keiner",
        sentence: "Ich helfe keiner Frau.",
        translation: "Я никому из женщин не помогаю.",
        note: "Отрицание.",
      },
      {
        word: "meiner",
        sentence: "Ich helfe meiner Schwester.",
        translation: "Я помогаю своей сестре.",
        note: "Притяжательное — мой/моя.",
      },
      {
        word: "deiner",
        sentence: "Ich helfe deiner Freundin.",
        translation: "Я помогаю твоей подруге.",
        note: "Притяжательное — твой/твоя.",
      },
      {
        word: "ihrer",
        sentence: "Ich helfe ihrer Mutter.",
        translation: "Я помогаю её матери.",
        note: "Притяжательное — её.",
      },
      {
        word: "unserer",
        sentence: "Ich zeige unserer Tante den Weg.",
        translation: "Я показываю нашей тёте путь.",
        note: "Притяжательное — наш/наша.",
      },
      {
        word: "eurer",
        sentence: "Ich helfe eurer Lehrerin.",
        translation: "Я помогаю вашей учительнице.",
        note: "Притяжательное множественное — ваш/ваша.",
      },
      {
        word: "Ihrer",
        sentence: "Ich helfe Ihrer Chefin.",
        translation: "Я помогаю Вашей начальнице.",
        note: "Вежливая форма.",
      },
      {
        word: "dieser",
        sentence: "Ich helfe dieser Frau.",
        translation: "Я помогаю этой женщине.",
        note: "Указательное местоимение — эта.",
      },
      {
        word: "welcher",
        sentence: "Ich helfe welcher Frau?",
        translation: "К какой женщине я помогаю?",
        note: "Вопросительное местоимение — какой.",
      },
    ],
    Neutrum: [
      {
        word: "dem",
        sentence: "Ich gebe dem Kind Wasser.",
        translation: "Я даю ребёнку воду.",
        note: "Средний род в Dativ.",
      },
      {
        word: "einem",
        sentence: "Ich helfe einem Kind.",
        translation: "Я помогаю одному ребёнку.",
        note: "Неопределённый артикль.",
      },
      {
        word: "keinem",
        sentence: "Ich helfe keinem Kind.",
        translation: "Я никому из детей не помогаю.",
        note: "Отрицание.",
      },
      {
        word: "meinem",
        sentence: "Ich helfe meinem Kind.",
        translation: "Я помогаю своему ребёнку.",
        note: "Притяжательное — мой.",
      },
      {
        word: "diesem",
        sentence: "Ich helfe diesem Kind.",
        translation: "Я помогаю этому ребёнку.",
        note: "Указательное местоимение — этот.",
      },
      {
        word: "welchem",
        sentence: "Ich helfe welchem Kind?",
        translation: "Какому ребёнку я помогаю?",
        note: "Вопросительное местоимение — какому.",
      },
    ],
    Plural: [
      {
        word: "den",
        sentence: "Ich zeige den Kindern den Weg.",
        translation: "Я показываю детям путь.",
        note: "Во множественном числе добавляется '-n' к существительным.",
      },
      {
        word: "keinen",
        sentence: "Ich helfe keinen Kindern.",
        translation: "Я не помогаю детям.",
        note: "Отрицание во множественном числе.",
      },
      {
        word: "meinen",
        sentence: "Ich helfe meinen Freunden.",
        translation: "Я помогаю своим друзьям.",
        note: "Притяжательное во множественном числе.",
      },
      {
        word: "diesen",
        sentence: "Ich helfe diesen Kindern.",
        translation: "Я помогаю этим детям.",
        note: "Указательное местоимение — эти.",
      },
      {
        word: "welchen",
        sentence: "Ich helfe welchen Kindern?",
        translation: "Каким детям я помогаю?",
        note: "Вопросительное местоимение — какие.",
      },
    ],
  },

  pairsExercise: [
    // ---------------- Nominativ ----------------
    // Определённые
    {
      question:
        "Выберите правильный определённый артикль для 'Mann' в Nominativ:",
      options: ["der", "die", "das"],
      answer: "der",
      explanation:
        "Мужской род, именительный падеж — определённый артикль 'der'.",
    },
    {
      question:
        "Выберите правильный определённый артикль для 'Frau' в Nominativ:",
      options: ["die", "der", "das"],
      answer: "die",
      explanation:
        "Женский род, именительный падеж — определённый артикль 'die'.",
    },
    {
      question:
        "Выберите правильный определённый артикль для 'Kind' в Nominativ:",
      options: ["das", "der", "die"],
      answer: "das",
      explanation:
        "Средний род, именительный падеж — определённый артикль 'das'.",
    },
    {
      question:
        "Выберите правильный определённый артикль для 'Kinder' в Nominativ:",
      options: ["die", "der", "das"],
      answer: "die",
      explanation:
        "Множественное число, именительный падеж — определённый артикль 'die'.",
    },

    // Неопределённые
    {
      question:
        "Выберите правильный неопределённый артикль для 'Hund' в Nominativ:",
      options: ["ein", "eine", "einen"],
      answer: "ein",
      explanation:
        "Мужской род, именительный падеж — неопределённый артикль 'ein'.",
    },
    {
      question:
        "Выберите правильный неопределённый артикль для 'Katze' в Nominativ:",
      options: ["eine", "ein", "einer"],
      answer: "eine",
      explanation:
        "Женский род, именительный падеж — неопределённый артикль 'eine'.",
    },
    {
      question:
        "Выберите правильный неопределённый артикль для 'Haus' в Nominativ:",
      options: ["ein", "eine", "eines"],
      answer: "ein",
      explanation:
        "Средний род, именительный падеж — неопределённый артикль 'ein'.",
    },

    // Отрицательные
    {
      question:
        "Выберите правильный отрицательный артикль для 'Lehrer' в Nominativ:",
      options: ["kein", "keine", "keinen"],
      answer: "kein",
      explanation:
        "Мужской род, именительный падеж — отрицательный артикль 'kein'.",
    },
    {
      question:
        "Выберите правильный отрицательный артикль для 'Blume' в Nominativ:",
      options: ["keine", "kein", "keiner"],
      answer: "keine",
      explanation:
        "Женский род, именительный падеж — отрицательный артикль 'keine'.",
    },
    {
      question:
        "Выберите правильный отрицательный артикль для 'Auto' в Nominativ:",
      options: ["kein", "keine", "keines"],
      answer: "kein",
      explanation:
        "Средний род, именительный падеж — отрицательный артикль 'kein'.",
    },

    // Притяжательные
    {
      question: "Выберите правильное притяжательное для 'Freund' в Nominativ:",
      options: ["mein", "dein", "sein"],
      answer: "mein",
      explanation: "Мужской род, именительный падеж — притяжательное 'мой'.",
    },
    {
      question:
        "Выберите правильное притяжательное для 'Schwester' в Nominativ:",
      options: ["meine", "deine", "seine"],
      answer: "meine",
      explanation: "Женский род, именительный падеж — притяжательное 'моя'.",
    },
    {
      question: "Выберите правильное притяжательное для 'Kind' в Nominativ:",
      options: ["mein", "sein", "unser"],
      answer: "mein",
      explanation: "Средний род, именительный падеж — притяжательное 'мой'.",
    },
    {
      question: "Выберите правильное притяжательное для 'Freunde' в Nominativ:",
      options: ["meine", "deine", "unsere"],
      answer: "meine",
      explanation:
        "Множественное число, именительный падеж — притяжательное 'мои'.",
    },

    // Вежливые формы
    {
      question:
        "Выберите правильное вежливое притяжательное для 'Chef' в Nominativ:",
      options: ["Ihr", "Ihre", "Ihren"],
      answer: "Ihr",
      explanation: "Вежливая форма, именительный падеж — 'Ihr'.",
    },
    {
      question:
        "Выберите правильное вежливое притяжательное для 'Chefin' в Akkusativ:",
      options: ["Ihre", "Ihr", "Ihren"],
      answer: "Ihre",
      explanation: "Вежливая форма, винительный падеж — 'Ihre'.",
    },
    {
      question:
        "Выберите правильное вежливое притяжательное для 'Chef' в Dativ:",
      options: ["Ihrem", "Ihr", "Ihren"],
      answer: "Ihrem",
      explanation: "Вежливая форма, дательный падеж — 'Ihrem'.",
    },

    // Указательные
    {
      question: "Выберите правильное указательное для 'Mann' в Nominativ:",
      options: ["dieser", "diese", "dieses"],
      answer: "dieser",
      explanation: "Мужской род, именительный падеж — указательное 'dieser'.",
    },
    {
      question: "Выберите правильное указательное для 'Frau' в Nominativ:",
      options: ["diese", "dieser", "dieses"],
      answer: "diese",
      explanation: "Женский род, именительный падеж — указательное 'diese'.",
    },
    {
      question: "Выберите правильное указательное для 'Kind' в Nominativ:",
      options: ["dieses", "dieser", "diese"],
      answer: "dieses",
      explanation: "Средний род, именительный падеж — указательное 'dieses'.",
    },
    {
      question: "Выберите правильное указательное для 'Kinder' в Nominativ:",
      options: ["diese", "dieser", "dieses"],
      answer: "diese",
      explanation:
        "Множественное число, именительный падеж — указательное 'diese'.",
    },

    // Вопросительные
    {
      question: "Выберите правильное вопросительное для 'Mann' в Nominativ:",
      options: ["welcher", "wer", "wie"],
      answer: "welcher",
      explanation:
        "Мужской род, именительный падеж — вопросительное 'welcher'.",
    },
    {
      question: "Выберите правильное вопросительное для 'Frau' в Nominativ:",
      options: ["welche", "wer", "wie"],
      answer: "welche",
      explanation: "Женский род, именительный падеж — вопросительное 'welche'.",
    },
    {
      question: "Выберите правильное вопросительное для 'Kind' в Nominativ:",
      options: ["welches", "wer", "wie"],
      answer: "welches",
      explanation:
        "Средний род, именительный падеж — вопросительное 'welches'.",
    },
    {
      question: "Выберите правильное вопросительное для 'Kinder' в Nominativ:",
      options: ["welche", "wer", "wie"],
      answer: "welche",
      explanation:
        "Множественное число, именительный падеж — вопросительное 'welche'.",
    },

    // ---------------- Akkusativ ----------------
    // Определённые
    {
      question:
        "Выберите правильный определённый артикль для 'Mann' в Akkusativ:",
      options: ["den", "der", "das"],
      answer: "den",
      explanation:
        "Мужской род, винительный падеж — определённый артикль 'den'.",
    },
    {
      question:
        "Выберите правильный определённый артикль для 'Frau' в Akkusativ:",
      options: ["die", "der", "das"],
      answer: "die",
      explanation:
        "Женский род, винительный падеж — определённый артикль 'die'.",
    },
    {
      question:
        "Выберите правильный определённый артикль для 'Kind' в Akkusativ:",
      options: ["das", "der", "die"],
      answer: "das",
      explanation:
        "Средний род, винительный падеж — определённый артикль 'das'.",
    },
    {
      question:
        "Выберите правильный определённый артикль для 'Kinder' в Akkusativ:",
      options: ["die", "der", "das"],
      answer: "die",
      explanation:
        "Множественное число, винительный падеж — определённый артикль 'die'.",
    },

    // Неопределённые
    {
      question:
        "Выберите правильный неопределённый артикль для 'Hund' в Akkusativ:",
      options: ["einen", "ein", "eine"],
      answer: "einen",
      explanation:
        "Мужской род, винительный падеж — неопределённый артикль 'einen'.",
    },
    {
      question:
        "Выберите правильный неопределённый артикль для 'Katze' в Akkusativ:",
      options: ["eine", "ein", "einer"],
      answer: "eine",
      explanation:
        "Женский род, винительный падеж — неопределённый артикль 'eine'.",
    },
    {
      question:
        "Выберите правильный неопределённый артикль для 'Haus' в Akkusativ:",
      options: ["ein", "eine", "eines"],
      answer: "ein",
      explanation:
        "Средний род, винительный падеж — неопределённый артикль 'ein'.",
    },

    // Отрицательные
    {
      question:
        "Выберите правильный отрицательный артикль для 'Lehrer' в Akkusativ:",
      options: ["keinen", "kein", "keine"],
      answer: "keinen",
      explanation:
        "Мужской род, винительный падеж — отрицательный артикль 'keinen'.",
    },
    {
      question:
        "Выберите правильный отрицательный артикль для 'Blume' в Akkusativ:",
      options: ["keine", "kein", "keiner"],
      answer: "keine",
      explanation:
        "Женский род, винительный падеж — отрицательный артикль 'keine'.",
    },
    {
      question:
        "Выберите правильный отрицательный артикль для 'Auto' в Akkusativ:",
      options: ["kein", "keine", "keines"],
      answer: "kein",
      explanation:
        "Средний род, винительный падеж — отрицательный артикль 'kein'.",
    },

    // Притяжательные
    {
      question: "Выберите правильное притяжательное для 'Freund' в Akkusativ:",
      options: ["meinen", "deinen", "seinen"],
      answer: "meinen",
      explanation: "Мужской род, винительный падеж — притяжательное 'мой'.",
    },
    {
      question:
        "Выберите правильное притяжательное для 'Schwester' в Akkusativ:",
      options: ["meine", "deine", "seine"],
      answer: "meine",
      explanation: "Женский род, винительный падеж — притяжательное 'моя'.",
    },
    {
      question: "Выберите правильное притяжательное для 'Kind' в Akkusativ:",
      options: ["mein", "sein", "unser"],
      answer: "mein",
      explanation: "Средний род, винительный падеж — притяжательное 'мой'.",
    },
    {
      question: "Выберите правильное притяжательное для 'Freunde' в Akkusativ:",
      options: ["meine", "deine", "unsere"],
      answer: "meine",
      explanation:
        "Множественное число, винительный падеж — притяжательное 'мои'.",
    },

    // Указательные
    {
      question: "Выберите правильное указательное для 'Mann' в Akkusativ:",
      options: ["diesen", "dieser", "dieses"],
      answer: "diesen",
      explanation: "Мужской род, винительный падеж — указательное 'diesen'.",
    },
    {
      question: "Выберите правильное указательное для 'Frau' в Akkusativ:",
      options: ["diese", "dieser", "dieses"],
      answer: "diese",
      explanation: "Женский род, винительный падеж — указательное 'diese'.",
    },
    {
      question: "Выберите правильное указательное для 'Kind' в Akkusativ:",
      options: ["dieses", "dieser", "diese"],
      answer: "dieses",
      explanation: "Средний род, винительный падеж — указательное 'dieses'.",
    },
    {
      question: "Выберите правильное указательное для 'Kinder' в Akkusativ:",
      options: ["diese", "dieser", "dieses"],
      answer: "diese",
      explanation:
        "Множественное число, винительный падеж — указательное 'diese'.",
    },

    // Вопросительные
    {
      question: "Выберите правильное вопросительное для 'Mann' в Akkusativ:",
      options: ["welchen", "wer", "wie"],
      answer: "welchen",
      explanation: "Мужской род, винительный падеж — вопросительное 'welchen'.",
    },
    {
      question: "Выберите правильное вопросительное для 'Frau' в Akkusativ:",
      options: ["welche", "wer", "wie"],
      answer: "welche",
      explanation: "Женский род, винительный падеж — вопросительное 'welche'.",
    },
    {
      question: "Выберите правильное вопросительное для 'Kind' в Akkusativ:",
      options: ["welches", "wer", "wie"],
      answer: "welches",
      explanation: "Средний род, винительный падеж — вопросительное 'welches'.",
    },
    {
      question: "Выберите правильное вопросительное для 'Kinder' в Akkusativ:",
      options: ["welche", "wer", "wie"],
      answer: "welche",
      explanation:
        "Множественное число, винительный падеж — вопросительное 'welche'.",
    }, // ---------------- Dativ ----------------
    // Определённые
    {
      question: "Выберите правильный определённый артикль для 'Mann' в Dativ:",
      options: ["dem", "der", "den"],
      answer: "dem",
      explanation: "Мужской род, дательный падеж — определённый артикль 'dem'.",
    },
    {
      question: "Выберите правильный определённый артикль для 'Frau' в Dativ:",
      options: ["der", "dem", "den"],
      answer: "der",
      explanation: "Женский род, дательный падеж — определённый артикль 'der'.",
    },
    {
      question: "Выберите правильный определённый артикль для 'Kind' в Dativ:",
      options: ["dem", "der", "den"],
      answer: "dem",
      explanation: "Средний род, дательный падеж — определённый артикль 'dem'.",
    },
    {
      question:
        "Выберите правильный определённый артикль для 'Kinder' в Dativ:",
      options: ["den", "der", "dem"],
      answer: "den",
      explanation:
        "Множественное число, дательный падеж — определённый артикль 'den'.",
    },

    // Неопределённые
    {
      question:
        "Выберите правильный неопределённый артикль для 'Hund' в Dativ:",
      options: ["einem", "ein", "eine"],
      answer: "einem",
      explanation:
        "Мужской род, дательный падеж — неопределённый артикль 'einem'.",
    },
    {
      question:
        "Выберите правильный неопределённый артикль для 'Katze' в Dativ:",
      options: ["einer", "ein", "eine"],
      answer: "einer",
      explanation:
        "Женский род, дательный падеж — неопределённый артикль 'einer'.",
    },
    {
      question:
        "Выберите правильный неопределённый артикль для 'Haus' в Dativ:",
      options: ["einem", "ein", "eine"],
      answer: "einem",
      explanation:
        "Средний род, дательный падеж — неопределённый артикль 'einem'.",
    }, // Отрицательные (продолжение)
    {
      question:
        "Выберите правильный отрицательный артикль для 'Blume' в Dativ:",
      options: ["keiner", "keine", "kein"],
      answer: "keiner",
      explanation:
        "Женский род, дательный падеж — отрицательный артикль 'keiner'.",
    },
    {
      question: "Выберите правильный отрицательный артикль для 'Auto' в Dativ:",
      options: ["keinem", "kein", "keine"],
      answer: "keinem",
      explanation:
        "Средний род, дательный падеж — отрицательный артикль 'keinem'.",
    },
    {
      question:
        "Выберите правильный отрицательный артикль для 'Kinder' в Dativ:",
      options: ["keinen", "keine", "kein"],
      answer: "keinen",
      explanation:
        "Множественное число, дательный падеж — отрицательный артикль 'keinen'.",
    },

    // Притяжательные
    {
      question: "Выберите правильное притяжательное для 'Freund' в Dativ:",
      options: ["meinem", "deinem", "seinem"],
      answer: "meinem",
      explanation: "Мужской род, дательный падеж — притяжательное 'мой'.",
    },
    {
      question: "Выберите правильное притяжательное для 'Schwester' в Dativ:",
      options: ["meiner", "deiner", "ihrer"],
      answer: "meiner",
      explanation: "Женский род, дательный падеж — притяжательное 'моя'.",
    },
    {
      question: "Выберите правильное притяжательное для 'Kind' в Dativ:",
      options: ["meinem", "seinem", "unserem"],
      answer: "meinem",
      explanation: "Средний род, дательный падеж — притяжательное 'мой'.",
    },
    {
      question: "Выберите правильное притяжательное для 'Freunde' в Dativ:",
      options: ["meinen", "deinen", "unseren"],
      answer: "meinen",
      explanation:
        "Множественное число, дательный падеж — притяжательное 'мои'.",
    },

    // Вежливые формы
    {
      question:
        "Выберите правильное вежливое притяжательное для 'Chef' в Dativ:",
      options: ["Ihrem", "Ihr", "Ihren"],
      answer: "Ihrem",
      explanation: "Вежливая форма, дательный падеж — 'Ihrem'.",
    },
    {
      question:
        "Выберите правильное вежливое притяжательное для 'Chefin' в Dativ:",
      options: ["Ihrer", "Ihr", "Ihren"],
      answer: "Ihrer",
      explanation: "Вежливая форма, дательный падеж — 'Ihrer'.",
    },

    // Указательные
    {
      question: "Выберите правильное указательное для 'Mann' в Dativ:",
      options: ["diesem", "dieser", "diesen"],
      answer: "diesem",
      explanation: "Мужской род, дательный падеж — указательное 'diesem'.",
    },
    {
      question: "Выберите правильное указательное для 'Frau' в Dativ:",
      options: ["dieser", "diesem", "diese"],
      answer: "dieser",
      explanation: "Женский род, дательный падеж — указательное 'dieser'.",
    },
    {
      question: "Выберите правильное указательное для 'Kind' в Dativ:",
      options: ["diesem", "dieser", "dieses"],
      answer: "diesem",
      explanation: "Средний род, дательный падеж — указательное 'diesem'.",
    },
    {
      question: "Выберите правильное указательное для 'Kinder' в Dativ:",
      options: ["diesen", "diesem", "dieser"],
      answer: "diesen",
      explanation:
        "Множественное число, дательный падеж — указательное 'diesen'.",
    },

    // Вопросительные
    {
      question: "Выберите правильное вопросительное для 'Mann' в Dativ:",
      options: ["welchem", "wer", "wie"],
      answer: "welchem",
      explanation: "Мужской род, дательный падеж — вопросительное 'welchem'.",
    },
    {
      question: "Выберите правильное вопросительное для 'Frau' в Dativ:",
      options: ["welcher", "wer", "wie"],
      answer: "welcher",
      explanation: "Женский род, дательный падеж — вопросительное 'welcher'.",
    },
    {
      question: "Выберите правильное вопросительное для 'Kind' в Dativ:",
      options: ["welchem", "wer", "wie"],
      answer: "welchem",
      explanation: "Средний род, дательный падеж — вопросительное 'welchem'.",
    },
    {
      question: "Выберите правильное вопросительное для 'Kinder' в Dativ:",
      options: ["welchen", "wer", "wie"],
      answer: "welchen",
      explanation:
        "Множественное число, дательный падеж — вопросительное 'welchen'.",
    },
  ],
};

export default data;
