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
              german:
                "Der Mann sieht den Hund.  (den — AKK, кого? что?)",
              russian: "Мужчина видит собаку.",
            },
            {
              german:
                "Ich gebe dem Kind ein Buch.  (dem — DAT, кому?)",
              russian: "Я даю ребёнку книгу.",
            },
            {
              german:
                "Das Geschenk gehört dem Mann.  (dem — DAT, кому?)",
              russian: "Подарок принадлежит мужчине.",
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
              german: "Die Frau liest ein Buch.  (Die — NM, кто? что?)",
              russian: "Женщина читает книгу.",
            },
            {
              german: "Ich sehe die Frau.  (die — AKK, кого? что?)",
              russian: "Я вижу женщину.",
            },
            {
              german: "Ich gebe der Frau ein Buch.  (der — DT, кому?)",
              russian: "Я даю женщине книгу.",
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
            // Средний род, единственное число
            {
              german: "Das Kind spielt im Garten.  (Das — NM, кто? что?)",
              russian: "Ребёнок играет в саду.",
            },
            {
              german: "Ich sehe das Kind.  (das — AKK, кого? что?)",
              russian: "Я вижу ребёнка.",
            },
            {
              german: "Ich gebe dem Kind ein Buch.  (dem — DT, кому?)",
              russian: "Я даю ребёнку книгу.",
            },
          ],
        },
        {
          word: ["die Kinder", "die", "дети", "die", "детей", "den", "детям"],
          examples: [
            // Множественное число
            {
              german: "Die Kinder spielen im Garten.  (Die — NM, кто? что?)",
              russian: "Дети играют в саду.",
            },
            {
              german: "Ich sehe die Kinder.  (die — AKK, кого? что?)",
              russian: "Я вижу детей.",
            },
            {
              german: "Ich gebe den Kindern Bücher.  (den — DT, кому?)",
              russian: "Я даю детям книги.",
            },
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
              german: "Der Mann liest ein Buch.",
              russian: "Мужчина читает книгу.",
            },
            {
              german: "Ich sehe den Mann.",
              russian: "Я вижу мужчину.",
            },
            {
              german: "Ich gebe dem Mann ein Buch.",
              russian: "Я даю мужчине книгу.",
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
            // Женский род
            {
              german: "Die Frau liest ein Buch.",
              russian: "Женщина читает книгу.",
            },
            {
              german: "Ich sehe die Frau.",
              russian: "Я вижу женщину.",
            },
            {
              german: "Ich gebe der Frau ein Buch.",
              russian: "Я даю женщине книгу.",
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
            // Средний род
            {
              german: "Das Kind spielt im Garten.",
              russian: "Ребёнок играет в саду.",
            },
            {
              german: "Ich sehe das Kind.",
              russian: "Я вижу ребёнка.",
            },
            {
              german: "Ich gebe dem Kind ein Buch.",
              russian: "Я даю ребёнку книгу.",
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
            // Именительный падеж (Nominativ) — кто делает действие
            {
              german: "Ich lese ein Buch.",
              russian: "Я читаю книгу.",
            },

            // Винительный падеж (Akkusativ) — кого/что видят
            {
              german: "Er sieht mich.",
              russian: "Он видит меня.",
            },

            // Дательный падеж (Dativ) — кому что-то дают
            {
              german: "Er gibt mir ein Buch.",
              russian: "Он даёт мне книгу.",
            },
          ],
        },
        {
          word: ["du", "du", "ты", "dich", "тебя", "dir", "тебе"],
          examples: [
            // Именительный падеж (Nominativ) — кто делает действие
            {
              german: "Du liest ein Buch.",
              russian: "Ты читаешь книгу.",
            },

            // Винительный падеж (Akkusativ) — кого/что видят
            {
              german: "Ich sehe dich.",
              russian: "Я вижу тебя.",
            },

            // Дательный падеж (Dativ) — кому что-то дают
            {
              german: "Ich gebe dir ein Buch.",
              russian: "Я даю тебе книгу.",
            },
          ],
        },
        {
          word: ["er", "er", "он", "ihn", "его", "ihm", "ему"],
          examples: [
            // Именительный падеж (Nominativ) — кто делает действие
            {
              german: "Er liest ein Buch.",
              russian: "Он читает книгу.",
            },

            // Винительный падеж (Akkusativ) — кого/что видят
            {
              german: "Ich sehe ihn.",
              russian: "Я вижу его.",
            },

            // Дательный падеж (Dativ) — кому что-то дают
            {
              german: "Ich gebe ihm ein Buch.",
              russian: "Я даю ему книгу.",
            },
          ],
        },
        {
          word: ["sie", "sie", "она", "sie", "её", "ihr", "ей"],
          examples: [
            // Именительный падеж (Nominativ) — кто делает действие
            {
              german: "Sie liest ein Buch.",
              russian: "Она читает книгу.",
            },

            // Винительный падеж (Akkusativ) — кого/что видят
            {
              german: "Ich sehe sie.",
              russian: "Я вижу её.",
            },

            // Дательный падеж (Dativ) — кому что-то дают
            {
              german: "Ich gebe ihr ein Buch.",
              russian: "Я даю ей книгу.",
            },
          ],
        },
        {
          word: ["es", "es", "оно", "es", "его/её", "ihm", "ему/ей"],
          examples: [
            // Именительный падеж (Nominativ) — кто делает действие
            {
              german: "Es liest ein Buch.",
              russian: "Оно читает книгу.",
            },

            // Винительный падеж (Akkusativ) — кого/что видят
            {
              german: "Ich sehe es.",
              russian: "Я вижу его/её.",
            },

            // Дательный падеж (Dativ) — кому что-то дают
            {
              german: "Ich gebe ihm ein Buch.",
              russian: "Я даю ему/ей книгу.",
            },
          ],
        },
        {
          word: ["wir", "wir", "мы", "uns", "нас", "uns", "нам"],
          examples: [
            // Именительный падеж (Nominativ) — кто делает действие
            {
              german: "Wir lesen ein Buch.",
              russian: "Мы читаем книгу.",
            },

            // Винительный падеж (Akkusativ) — кого/что видят
            {
              german: "Er sieht uns.",
              russian: "Он видит нас.",
            },

            // Дательный падеж (Dativ) — кому что-то дают
            {
              german: "Er gibt uns ein Buch.",
              russian: "Он даёт нам книгу.",
            },
          ],
        },
        {
          word: ["ihr", "ihr", "вы", "euch", "вас", "euch", "вам"],
          examples: [
            // Именительный падеж (Nominativ) — кто делает действие
            {
              german: "Ihr lest ein Buch.",
              russian: "Вы читаете книгу.",
            },

            // Винительный падеж (Akkusativ) — кого/что видят
            {
              german: "Ich sehe euch.",
              russian: "Я вижу вас.",
            },

            // Дательный падеж (Dativ) — кому что-то дают
            {
              german: "Ich gebe euch ein Buch.",
              russian: "Я даю вам книгу.",
            },
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
            // Именительный падеж (Nominativ) — кто делает действие
            {
              german: "Sie lesen ein Buch.", // можно "Sie" = они или Вы (вежл.)
              russian: "Они читают книгу / Вы читаете книгу.",
            },

            // Винительный падеж (Akkusativ) — кого/что видят
            {
              german: "Ich sehe sie/Sie.",
              russian: "Я вижу их / Вас.",
            },

            // Дательный падеж (Dativ) — кому что-то дают
            {
              german: "Ich gebe ihnen/Ihnen ein Buch.",
              russian: "Я даю им / Вам книгу.",
            },
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
            // Именительный падеж (Nominativ)
            {
              german: "Mein Hund ist groß.",
              russian: "Моя собака большая.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ich sehe meinen Hund.",
              russian: "Я вижу мою собаку.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Ich gebe meinem Hund einen Knochen.",
              russian: "Я даю моей собаке кость.",
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
            // Именительный падеж (Nominativ)
            {
              german: "Dein Hund ist groß.",
              russian: "Твоя собака большая.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ich sehe deinen Hund.",
              russian: "Я вижу твою собаку.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Ich gebe deinem Hund einen Knochen.",
              russian: "Я даю твоей собаке кость.",
            },
          ],
        },
        {
          word: ["3 лицо м.", "sein", "его", "seinen", "его", "seinem", "ему"],
          examples: [
            // Именительный падеж (Nominativ)
            {
              german: "Sein Hund ist groß.",
              russian: "Его собака большая.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ich sehe seinen Hund.",
              russian: "Я вижу его собаку.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Ich gebe seinem Hund einen Knochen.",
              russian: "Я даю его собаке кость.",
            },
          ],
        },
        {
          word: ["3 лицо ж.", "ihr", "её", "ihre", "её", "ihrer", "ей"],
          examples: [
            // Именительный падеж (Nominativ)
            {
              german: "Ihr Hund ist groß.",
              russian: "Её собака большая.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ich sehe ihre Hund.",
              russian: "Я вижу её собаку.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Ich gebe ihrer Hund einen Knochen.",
              russian: "Я даю её собаке кость.",
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
            // Именительный падеж (Nominativ)
            {
              german: "Sein Buch ist interessant.",
              russian: "Его/её книга интересная.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ich sehe sein Buch.",
              russian: "Я вижу его/её книгу.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Ich gebe seinem Buch einen Umschlag.",
              russian: "Я даю его/её книге обложку.",
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
            // Именительный падеж (Nominativ)
            {
              german: "Unser Hund ist groß.",
              russian: "Наша собака большая.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ich sehe unseren Hund.",
              russian: "Я вижу нашу собаку.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Ich gebe unserem Hund einen Knochen.",
              russian: "Я даю нашей собаке кость.",
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
            // Именительный падеж (Nominativ)
            {
              german: "Euer Hund ist groß.",
              russian: "Ваша собака большая.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ich sehe euren Hund.",
              russian: "Я вижу вашу собаку.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Ich gebe eurem Hund einen Knochen.",
              russian: "Я даю вашей собаке кость.",
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
            // Именительный падеж (Nominativ)
            {
              german: "Ihr Hund ist groß. / Ihr Hund ist groß.",
              russian: "Их собака большая. / Ваша собака большая.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ich sehe ihren Hund. / Ich sehe Ihren Hund.",
              russian: "Я вижу их собаку. / Я вижу Вашу собаку.",
            },

            // Дательный падеж (Dativ)
            {
              german:
                "Ich gebe ihrem Hund einen Knochen. / Ich gebe Ihrem Hund einen Knochen.",
              russian: "Я даю их собаке кость. / Я даю Вашей собаке кость.",
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
            // Именительный падеж (Nominativ)
            {
              german: "Ich sehe mich im Spiegel.",
              russian: "Я вижу себя в зеркале.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ich liebe mich.",
              russian: "Я люблю себя.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Ich kaufe mir ein Buch.",
              russian: "Я покупаю себе книгу.",
            },
          ],
        },
        {
          word: ["2 лицо ед.", "du", "ты", "dich", "себя", "dir", "себе"],
          examples: [
            // Именительный падеж (Nominativ)
            {
              german: "Du siehst dich im Spiegel.",
              russian: "Ты видишь себя в зеркале.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Du liebst dich.",
              russian: "Ты любишь себя.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Du kaufst dir ein Buch.",
              russian: "Ты покупаешь себе книгу.",
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
            // Именительный падеж (Nominativ)
            {
              german: "Er/Sie/Es sieht sich im Spiegel.",
              russian: "Он/Она/Оно видит себя в зеркале.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Er/Sie/Es liebt sich.",
              russian: "Он/Она/Оно любит себя.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Er/Sie/Es kauft sich ein Buch.",
              russian: "Он/Она/Оно покупает себе книгу.",
            },
          ],
        },
        {
          word: ["1 лицо мн.", "wir", "мы", "uns", "себя", "uns", "себе"],
          examples: [
            // Именительный падеж (Nominativ)
            {
              german: "Wir sehen uns im Spiegel.",
              russian: "Мы видим себя в зеркале.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Wir lieben uns.",
              russian: "Мы любим себя.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Wir kaufen uns ein Buch.",
              russian: "Мы покупаем себе книгу.",
            },
          ],
        },
        {
          word: ["2 лицо мн.", "ihr", "вы", "euch", "себя", "euch", "себе"],
          examples: [
            // Именительный падеж (Nominativ)
            {
              german: "Ihr seht euch im Spiegel.",
              russian: "Вы видите себя в зеркале.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ihr liebt euch.",
              russian: "Вы любите себя.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Ihr kauft euch ein Buch.",
              russian: "Вы покупаете себе книгу.",
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
            // Именительный падеж (Nominativ)
            {
              german: "Sie sehen sich im Spiegel. / Sie sehen sich im Spiegel.",
              russian: "Они видят себя в зеркале. / Вы видите себя в зеркале.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Sie lieben sich. / Sie lieben sich.",
              russian: "Они любят себя. / Вы любите себя.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Sie kaufen sich ein Buch. / Sie kaufen sich ein Buch.",
              russian: "Они покупают себе книгу. / Вы покупаете себе книгу.",
            },
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
            // Именительный падеж (Nominativ)
            {
              german: "Dieser Hund ist groß.",
              russian: "Этот пёс большой.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ich sehe diesen Hund.",
              russian: "Я вижу этого пса.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Ich gebe diesem Hund einen Knochen.",
              russian: "Я даю этому псу кость.",
            },
          ],
        },
        {
          word: ["женский", "diese", "эта", "diese", "эту", "dieser", "этой"],
          examples: [
            // Именительный падеж (Nominativ)
            {
              german: "Diese Frau ist nett.",
              russian: "Эта женщина приятная.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ich sehe diese Frau.",
              russian: "Я вижу эту женщину.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Ich gebe dieser Frau ein Buch.",
              russian: "Я даю этой женщине книгу.",
            },
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
            // Именительный падеж (Nominativ)
            {
              german: "Dieses Buch ist interessant.",
              russian: "Эта книга интересная.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ich sehe dieses Buch.",
              russian: "Я вижу эту книгу.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Ich gebe diesem Buch einen Umschlag.",
              russian: "Я даю этой книге обложку.",
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
            // Множественное число
            // Именительный падеж (Nominativ)
            {
              german: "Diese Bücher sind interessant.",
              russian: "Эти книги интересные.",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Ich sehe diese Bücher.",
              russian: "Я вижу эти книги.",
            },

            // Дательный падеж (Dativ)
            {
              german: "Ich gebe diesen Büchern Umschläge.",
              russian: "Я даю этим книгам обложки.",
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
            // Именительный падеж (Nominativ)
            {
              german: "Welcher Hund ist groß?",
              russian: "Какой пёс большой?",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Welchen Hund siehst du?",
              russian: "Какого пса ты видишь?",
            },

            // Дательный падеж (Dativ)
            {
              german: "Welchem Hund gibst du einen Knochen?",
              russian: "Какому псу ты даёшь кость?",
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
            // Женский род
            // Именительный падеж (Nominativ)
            {
              german: "Welche Frau ist nett?",
              russian: "Какая женщина приятная?",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Welche Frau siehst du?",
              russian: "Какую женщину ты видишь?",
            },

            // Дательный падеж (Dativ)
            {
              german: "Welcher Frau gibst du ein Buch?",
              russian: "Какой женщине ты даёшь книгу?",
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
            // Средний род
            // Именительный падеж (Nominativ)
            {
              german: "Welches Buch ist interessant?",
              russian: "Какая книга интересная?",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Welches Buch siehst du?",
              russian: "Какую книгу ты видишь?",
            },

            // Дательный падеж (Dativ)
            {
              german: "Welchem Buch gibst du einen Umschlag?",
              russian: "Какой книге ты даёшь обложку?",
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
            // Множественное число
            // Именительный падеж (Nominativ)
            {
              german: "Welche Bücher sind interessant?",
              russian: "Какие книги интересные?",
            },

            // Винительный падеж (Akkusativ)
            {
              german: "Welche Bücher siehst du?",
              russian: "Какие книги ты видишь?",
            },

            // Дательный падеж (Dativ)
            {
              german: "Welchen Büchern gibst du Umschläge?",
              russian: "Каким книгам ты даёшь обложки?",
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
