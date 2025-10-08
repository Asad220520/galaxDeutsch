export const lesson1 = {
  id: 1,
  title: "Урок 1 + 2: Приветствия и базовые фразы",
  theory: {
    title: "Теория",
    content:
      "Новые немецкие слова с переводом на русский, примеры предложений и использование в контексте.",
  },
  levels: {
    level1: {
      title: "Уровень 1",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "Hallo", russian: "Привет" },
          { german: "Guten Tag", russian: "Добрый день" },
          { german: "Guten Morgen", russian: "Доброе утро" },
          { german: "Guten Abend", russian: "Добрый вечер" },
          { german: "Gute Nacht", russian: "Доброй ночи" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Wie geht es dir?",
            russian: "Как у тебя дела?",
            distractors: ["Wo", "Wann"],
          },
          {
            german: "Wie geht es Ihnen?",
            russian: "Как у Вас дела?",
            distractors: ["Wer", "Woher"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "___! Schön dich zu sehen.",
            russian: "Привет! Рад тебя видеть.",
            content: "Hallo",
            distractors: ["Guten Abend", "Tschüss", "Bis bald"],
          },
          {
            german: "Ich sage __, wenn ich gehe.",
            russian: "Я говорю до свидания, когда ухожу.",
            content: "Auf Wiedersehen",
            distractors: ["Hallo", "Guten Tag", "Danke"],
          },
        ],
      },
    },
    level2: {
      title: "Уровень 2",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "Danke! Gut", russian: "Спасибо! Хорошо" },
          { german: "Es geht", russian: "Пойдёт" },
          { german: "Entschuldigung", russian: "Извините" },
          {
            german: "Entschuldigen Sie bitte",
            russian: "Извините, пожалуйста",
          },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Darf ich hinein?",
            russian: "Могу я войти?",
            distractors: ["Darf ich hinaus?", "Möchte ich hinein?"],
          },
          {
            german: "Darf ich hinaus?",
            russian: "Могу я выйти?",
            distractors: ["Darf ich hinein?", "Kann ich bleiben?"],
          },
          {
            german: "Ich sage Tschüss, wenn ich gehe.",
            russian: "Я говорю пока, когда ухожу.",
            distractors: ["Ich sage Hallo", "Ich sage Guten Tag"],
          },
          {
            german: "Bis morgen!",
            russian: "До завтра!",
            distractors: ["Bis bald!", "Gute Nacht!"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich sage __, wenn ich gehe.",
            russian: "Я говорю пока, когда ухожу.",
            content: "Tschüss",
            distractors: ["Hallo", "Danke", "Guten Abend"],
          },
          {
            german: "__ morgen!",
            russian: "До завтра!",
            content: "Bis",
            distractors: ["Guten", "Auf", "Ja"],
          },
        ],
      },
    },
    level3: {
      title: "Уровень 3",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "machen", russian: "делать" },
          { german: "spielen", russian: "играть" },
          { german: "wohnen", russian: "жить" },
          { german: "hören", russian: "слушать" },
          { german: "kommen", russian: "приходить" },
          { german: "lernen", russian: "учиться" },
          { german: "lieben", russian: "любить" },
          { german: "fragen", russian: "спрашивать" },
          { german: "lügen", russian: "лгать" },
          { german: "heißen", russian: "зваться, называться" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich lerne jeden Tag Deutsch.",
            russian: "Я учусь немецкому каждый день.",
            distractors: [
              "Ich spiele jeden Tag Deutsch.",
              "Ich höre jeden Tag Deutsch.",
            ],
          },
          {
            german: "Wir spielen oft im Park.",
            russian: "Мы часто играем в парке.",
            distractors: ["Wir wohnen oft im Park.", "Wir machen oft im Park."],
          },
          {
            german: "Ich wohne in Berlin.",
            russian: "Я живу в Берлине.",
            distractors: ["Ich höre in Berlin.", "Ich lerne in Berlin."],
          },
          {
            german: "Wie heißt du?",
            russian: "Как тебя зовут?",
            distractors: ["Wie liebst du?", "Wie lernst du?"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich __ in Berlin.",
            russian: "Я живу в Берлине.",
            content: "wohne",
            distractors: ["spiele", "komme", "mache"],
          },
          {
            german: "Wie __ du?",
            russian: "Как тебя зовут?",
            content: "heißt",
            distractors: ["liebst", "fragst", "lernst"],
          },
        ],
      },
    },
  },
  audio: {
    title: "Аудирование",
    src: "/audio/lesson1.mp3",
  },
};
