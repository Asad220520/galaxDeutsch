export const fullCasesData = {
  title: "Немецкие падежи – Nominativ, Akkusativ, Dativ",
  description:
    "Объединённая таблица с артиклями, местоимениями и окончаниями прилагательных с переводом. Каждая строка имеет собственные примеры.",
  table: [
    {
      type: "Определённые артикли",
      headers: [
        "Существительное/Лицо",
        "Nominativ",
        "Перевод",
        "Akkusativ",
        "Перевод",
        "Dativ",
        "Перевод",
      ],
      rows: [
        {
          word: [
            "der Mann",
            "der",
            "мужчина",
            "den",
            "мужчину",
            "dem",
            "мужчине",
          ],
          examples: [
            {
              german: "Der Mann sieht den Hund.",
              russian: "Мужчина видит собаку.",
            },
            {
              german: "Der Mann liest ein Buch.",
              russian: "Мужчина читает книгу.",
            },
          ],
        },
        {
          word: [
            "die Frau",
            "die",
            "женщина",
            "die",
            "женщину",
            "der",
            "женщине",
          ],
          examples: [
            {
              german: "Die Frau kocht das Abendessen.",
              russian: "Женщина готовит ужин.",
            },
            {
              german: "Die Frau liest eine Zeitung.",
              russian: "Женщина читает газету.",
            },
          ],
        },
        {
          word: [
            "das Kind",
            "das",
            "ребёнок",
            "das",
            "ребёнка",
            "dem",
            "ребёнку",
          ],
          examples: [
            {
              german: "Das Kind spielt im Garten.",
              russian: "Ребёнок играет в саду.",
            },
            { german: "Ich sehe das Kind.", russian: "Я вижу ребёнка." },
          ],
        },
        {
          word: ["die Kinder", "die", "дети", "die", "детей", "den", "детям"],
          examples: [
            {
              german: "Die Kinder lernen Deutsch.",
              russian: "Дети учат немецкий.",
            },
            { german: "Ich helfe den Kindern.", russian: "Я помогаю детям." },
          ],
        },
      ],
    },
    {
      type: "Неопределённые артикли",
      headers: [
        "Существительное/Лицо",
        "Nominativ",
        "Перевод",
        "Akkusativ",
        "Перевод",
        "Dativ",
        "Перевод",
      ],
      rows: [
        {
          word: [
            "ein Mann",
            "ein",
            "один мужчина",
            "einen",
            "одного мужчину",
            "einem",
            "одному мужчине",
          ],
          examples: [
            {
              german: "Ich sehe einen Mann.",
              russian: "Я вижу одного мужчину.",
            },
            {
              german: "Ein Mann hilft dem Kind.",
              russian: "Один мужчина помогает ребёнку.",
            },
          ],
        },
        {
          word: [
            "eine Frau",
            "eine",
            "одна женщина",
            "eine",
            "одну женщину",
            "einer",
            "одной женщине",
          ],
          examples: [
            { german: "Ich kenne eine Frau.", russian: "Я знаю одну женщину." },
            {
              german: "Eine Frau liest ein Buch.",
              russian: "Одна женщина читает книгу.",
            },
          ],
        },
        {
          word: [
            "ein Kind",
            "ein",
            "одно дитя",
            "ein",
            "одно дитя",
            "einem",
            "одному дитю",
          ],
          examples: [
            {
              german: "Ein Kind spielt im Park.",
              russian: "Одно дитя играет в парке.",
            },
            {
              german: "Ich gebe einem Kind einen Ball.",
              russian: "Я даю одному ребёнку мяч.",
            },
          ],
        },
      ],
    },
    {
      type: "Личные местоимения",
      headers: [
        "Личное местоимение",
        "Nominativ",
        "Перевод",
        "Akkusativ",
        "Перевод",
        "Dativ",
        "Перевод",
      ],
      rows: [
        {
          word: ["ich", "ich", "я", "mich", "меня", "mir", "мне"],
          examples: [
            { german: "Ich liebe dich.", russian: "Я люблю тебя." },
            {
              german: "Ich sehe mich im Spiegel.",
              russian: "Я вижу себя в зеркале.",
            },
          ],
        },
        {
          word: ["du", "du", "ты", "dich", "тебя", "dir", "тебе"],
          examples: [
            { german: "Du siehst mich.", russian: "Ты видишь меня." },
            { german: "Ich helfe dir.", russian: "Я помогаю тебе." },
          ],
        },
        {
          word: ["er", "er", "он", "ihn", "его", "ihm", "ему"],
          examples: [
            { german: "Er kennt ihn.", russian: "Он знает его." },
            { german: "Ich gebe ihm das Buch.", russian: "Я даю ему книгу." },
          ],
        },
        {
          word: ["sie", "sie", "она", "sie", "её", "ihr", "ей"],
          examples: [
            { german: "Ich sehe sie.", russian: "Я вижу её." },
            {
              german: "Ich gebe ihr einen Apfel.",
              russian: "Я даю ей яблоко.",
            },
          ],
        },
        {
          word: ["es", "es", "оно", "es", "его/её", "ihm", "ему/ей"],
          examples: [
            { german: "Ich sehe es.", russian: "Я вижу это." },
            { german: "Ich helfe ihm.", russian: "Я помогаю ему." },
          ],
        },
        {
          word: ["wir", "wir", "мы", "uns", "нас", "uns", "нам"],
          examples: [
            { german: "Wir sehen uns.", russian: "Мы видим друг друга." },
            { german: "Er hilft uns.", russian: "Он помогает нам." },
          ],
        },
        {
          word: ["ihr", "ihr", "вы", "euch", "вас", "euch", "вам"],
          examples: [
            { german: "Ich sehe euch.", russian: "Я вижу вас." },
            { german: "Wir helfen euch.", russian: "Мы помогаем вам." },
          ],
        },
        {
          word: [
            "sie/Sie",
            "sie/Sie",
            "они/Вы",
            "sie/Sie",
            "их/Вас",
            "ihnen/Ihnen",
            "им/Вам",
          ],
          examples: [
            { german: "Ich sehe sie.", russian: "Я вижу их." },
            { german: "Ich helfe Ihnen.", russian: "Я помогаю Вам." },
          ],
        },
      ],
    },
    {
      type: "Притяжательные местоимения",
      headers: [
        "Лицо",
        "Nominativ",
        "Перевод",
        "Akkusativ",
        "Перевод",
        "Dativ",
        "Перевод",
      ],
      rows: [
        {
          word: [
            "1 лицо ед.",
            "mein",
            "мой",
            "meinen",
            "моего",
            "meinem",
            "моему",
          ],
          examples: [
            {
              german: "Mein Vater liest ein Buch.",
              russian: "Мой отец читает книгу.",
            },
            {
              german: "Ich zeige meinem Freund mein Buch.",
              russian: "Я показываю мою книгу другу.",
            },
          ],
        },
        {
          word: [
            "2 лицо ед.",
            "dein",
            "твой",
            "deinen",
            "твоего",
            "deinem",
            "твоему",
          ],
          examples: [
            { german: "Dein Hund ist groß.", russian: "Твоя собака большая." },
            {
              german: "Ich gebe deinem Bruder das Buch.",
              russian: "Я даю твоему брату книгу.",
            },
          ],
        },
        {
          word: ["3 лицо м.", "sein", "его", "seinen", "его", "seinem", "ему"],
          examples: [
            {
              german: "Sein Auto ist schnell.",
              russian: "Его машина быстрая.",
            },
            {
              german: "Ich zeige seinem Freund das Bild.",
              russian: "Я показываю его другу картину.",
            },
          ],
        },
        {
          word: ["3 лицо ж.", "ihr", "её", "ihre", "её", "ihrer", "ей"],
          examples: [
            { german: "Ihr Kleid ist schön.", russian: "Её платье красивое." },
            {
              german: "Ich gebe ihrer Schwester das Buch.",
              russian: "Я даю её сестре книгу.",
            },
          ],
        },
        {
          word: [
            "3 лицо ср.",
            "sein",
            "его/её",
            "sein",
            "его/её",
            "seinem",
            "ему/ей",
          ],
          examples: [
            { german: "Sein Haus ist groß.", russian: "Его/Её дом большой." },
            {
              german: "Ich helfe seinem Kind.",
              russian: "Я помогаю его/её ребёнку.",
            },
          ],
        },
        {
          word: [
            "1 лицо мн.",
            "unser",
            "наш",
            "unseren",
            "нашего",
            "unserem",
            "нашему",
          ],
          examples: [
            {
              german: "Unser Lehrer ist nett.",
              russian: "Наш учитель хороший.",
            },
            {
              german: "Ich zeige unserem Freund das Bild.",
              russian: "Я показываю нашему другу картину.",
            },
          ],
        },
        {
          word: [
            "2 лицо мн.",
            "euer",
            "ваш",
            "euren",
            "вашего",
            "eurem",
            "вашему",
          ],
          examples: [
            { german: "Euer Hund ist groß.", russian: "Ваша собака большая." },
            {
              german: "Ich gebe eurem Bruder das Buch.",
              russian: "Я даю вашему брату книгу.",
            },
          ],
        },
        {
          word: [
            "3 лицо мн./Вы",
            "ihr/Ihr",
            "их/Ваш",
            "ihren/Ihren",
            "их/Вашего",
            "ihrem/Ihrem",
            "им/Вам",
          ],
          examples: [
            {
              german: "Ihr Auto ist schnell.",
              russian: "Их/Ваш автомобиль быстрый.",
            },
            {
              german: "Ich zeige ihrem Freund das Bild.",
              russian: "Я показываю их/Вашему другу картину.",
            },
          ],
        },
      ],
    },
    {
      type: "Возвратные местоимения",
      headers: [
        "Лицо",
        "Nominativ",
        "Перевод",
        "Akkusativ",
        "Перевод",
        "Dativ",
        "Перевод",
      ],
      rows: [
        {
          word: ["1 лицо ед.", "ich", "я", "mich", "себя", "mir", "себе"],
          examples: [
            { german: "Ich freue mich.", russian: "Я радуюсь." },
            {
              german: "Ich sehe mich im Spiegel.",
              russian: "Я вижу себя в зеркале.",
            },
          ],
        },
        {
          word: ["2 лицо ед.", "du", "ты", "dich", "себя", "dir", "себе"],
          examples: [
            { german: "Du freust dich.", russian: "Ты радуешься." },
            {
              german: "Du siehst dich im Spiegel.",
              russian: "Ты видишь себя в зеркале.",
            },
          ],
        },
        {
          word: [
            "3 лицо ед.",
            "er/sie/es",
            "он/она/оно",
            "sich",
            "себя",
            "sich",
            "себе",
          ],
          examples: [
            { german: "Er freut sich.", russian: "Он радуется." },
            { german: "Sie freut sich.", russian: "Она радуется." },
          ],
        },
        {
          word: ["1 лицо мн.", "wir", "мы", "uns", "себя", "uns", "себе"],
          examples: [
            { german: "Wir freuen uns.", russian: "Мы радуемся." },
            {
              german: "Wir sehen uns im Spiegel.",
              russian: "Мы видим себя в зеркале.",
            },
          ],
        },
        {
          word: ["2 лицо мн.", "ihr", "вы", "euch", "себя", "euch", "себе"],
          examples: [
            { german: "Ihr freut euch.", russian: "Вы радуетесь." },
            {
              german: "Ihr seht euch im Spiegel.",
              russian: "Вы видите себя в зеркале.",
            },
          ],
        },
        {
          word: [
            "3 лицо мн./Вы",
            "sie/Sie",
            "они/Вы",
            "sich",
            "себя",
            "sich",
            "себе",
          ],
          examples: [
            { german: "Sie freuen sich.", russian: "Они радуются." },
            { german: "Sie sehen sich.", russian: "Они видят друг друга." },
          ],
        },
      ],
    },
    {
      type: "Указательные местоимения",
      headers: [
        "Лицо/Род",
        "Nominativ",
        "Перевод",
        "Akkusativ",
        "Перевод",
        "Dativ",
        "Перевод",
      ],
      rows: [
        {
          word: [
            "мужской",
            "dieser",
            "этот",
            "diesen",
            "этого",
            "diesem",
            "этому",
          ],
          examples: [
            {
              german: "Dieser Mann ist freundlich.",
              russian: "Этот мужчина дружелюбный.",
            },
            {
              german: "Ich sehe diesen Mann.",
              russian: "Я вижу этого мужчину.",
            },
          ],
        },
        {
          word: ["женский", "diese", "эта", "diese", "эту", "dieser", "этой"],
          examples: [
            { german: "Diese Frau ist nett.", russian: "Эта женщина милая." },
            { german: "Ich kenne diese Frau.", russian: "Я знаю эту женщину." },
          ],
        },
        {
          word: [
            "средний",
            "dieses",
            "это",
            "dieses",
            "это",
            "diesem",
            "этому",
          ],
          examples: [
            { german: "Dieses Kind spielt.", russian: "Этот ребёнок играет." },
            {
              german: "Ich sehe dieses Kind.",
              russian: "Я вижу этого ребёнка.",
            },
          ],
        },
        {
          word: [
            "множественное число",
            "diese",
            "эти",
            "diese",
            "эти",
            "diesen",
            "этим",
          ],
          examples: [
            {
              german: "Diese Kinder lernen Deutsch.",
              russian: "Эти дети учат немецкий.",
            },
            {
              german: "Ich helfe diesen Kindern.",
              russian: "Я помогаю этим детям.",
            },
          ],
        },
      ],
    },
    {
      type: "Вопросительные местоимения",
      headers: [
        "Лицо/Род",
        "Nominativ",
        "Перевод",
        "Akkusativ",
        "Перевод",
        "Dativ",
        "Перевод",
      ],
      rows: [
        {
          word: [
            "мужской",
            "welcher",
            "какой",
            "welchen",
            "какого",
            "welchem",
            "какому",
          ],
          examples: [
            {
              german: "Welcher Mann ist dein Freund?",
              russian: "Какой мужчина твой друг?",
            },
            {
              german: "Ich kenne welchen Mann.",
              russian: "Я знаю какого мужчину.",
            },
          ],
        },
        {
          word: [
            "женский",
            "welche",
            "какая",
            "welche",
            "какую",
            "welcher",
            "какой",
          ],
          examples: [
            {
              german: "Welche Frau ist nett?",
              russian: "Какая женщина милая?",
            },
            {
              german: "Ich sehe welche Frau.",
              russian: "Я вижу какую женщину.",
            },
          ],
        },
        {
          word: [
            "средний",
            "welches",
            "какое",
            "welches",
            "какое",
            "welchem",
            "какому",
          ],
          examples: [
            {
              german: "Welches Kind spielt?",
              russian: "Какой ребёнок играет?",
            },
            {
              german: "Ich kenne welches Kind.",
              russian: "Я знаю какое дитя.",
            },
          ],
        },
        {
          word: [
            "множественное число",
            "welche",
            "какие",
            "welche",
            "какие",
            "welchen",
            "каким",
          ],
          examples: [
            {
              german: "Welche Kinder lernen Deutsch?",
              russian: "Какие дети учат немецкий?",
            },
            {
              german: "Ich helfe welchen Kindern.",
              russian: "Я помогаю каким детям.",
            },
          ],
        },
      ],
    },
    {
      type: "Окончания прилагательных (для всех падежей)",
      headers: ["Род/Число", "Nominativ", "Akkusativ", "Dativ"],
      rows: [
        {
          word: ["мужской", "-e", "-en", "-em"],
          examples: [
            {
              german: "Ich trage einen neuen Mantel.",
              russian: "Я ношу новый пальто.",
            },
            {
              german: "Er kauft einen roten Mantel.",
              russian: "Он покупает красное пальто.",
            },
          ],
        },
        {
          word: ["женский", "-e", "-e", "-er"],
          examples: [
            {
              german: "Ich habe eine schöne Bluse.",
              russian: "У меня есть красивая блузка.",
            },
            {
              german: "Sie trägt eine rote Jacke.",
              russian: "Она носит красную куртку.",
            },
          ],
        },
        {
          word: ["средний", "-e", "-e", "-em"],
          examples: [
            {
              german: "Das Kind trägt ein neues Hemd.",
              russian: "Ребёнок носит новую рубашку.",
            },
            {
              german: "Ich kaufe ein blaues Kleid.",
              russian: "Я покупаю синее платье.",
            },
          ],
        },
        {
          word: ["множественное число", "-en", "-en", "-en"],
          examples: [
            {
              german: "Die Kinder tragen neue Schuhe.",
              russian: "Дети носят новую обувь.",
            },
            {
              german: "Wir kaufen rote Äpfel.",
              russian: "Мы покупаем красные яблоки.",
            },
          ],
        },
      ],
    },
  ],
};
