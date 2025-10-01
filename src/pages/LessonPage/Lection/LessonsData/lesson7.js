export const lesson7 = {
  id: 7,
  title: "Урок 7: Путешествия",
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
          { german: "die Cola", russian: "кола" },
          { german: "liebe", russian: "милая, дорогая" },
          { german: "deine", russian: "твоя" },
          { german: "die Einladung", russian: "приглашение" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Wie heißt deine Mutter?",
            russian: "Как зовут твою маму?",
            distractors: ["Wer", "Wo"],
          },
          {
            german: "Wann kann ich Einladung bekommen?",
            russian: "Когда я могу получить приглашение?",
            distractors: ["Warum", "Wie"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich gehe nach __.",
            russian: "После работы я иду домой.",
            content: "Hause",
            distractors: ["Arbeit", "Schule", "Park"],
          },
          {
            german: "Ich möchte deutsche Kultur besser __.",
            russian: "Я хочу лучше узнать немецкую культуру.",
            content: "kennenlernen",
            distractors: ["kennen", "lernen", "studieren"],
          },
        ],
      },
    },
    level2: {
      title: "Уровень 2",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "kennen", russian: "знать" },
          { german: "ihn", russian: "его" },
          { german: "sie", russian: "она, они" },
          { german: "schon", russian: "уже" },
          { german: "studieren", russian: "учиться" },
          { german: "noch", russian: "еще" },
          { german: "können", russian: "мочь, уметь" },
          { german: "seit", russian: "с" },
          { german: "die Woche", russian: "неделя" },
          { german: "fast", russian: "почти" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich kann schon auf Deutsch sprechen.",
            russian: "Я уже могу говорить на немецком.",
            distractors: ["noch", "nicht"],
          },
          {
            german: "Wo studierst du?",
            russian: "Где ты учишься?",
            distractors: ["Wann", "Wie"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Alles ist __ Ordnung.",
            russian: "Всё в порядке.",
            content: "in",
            distractors: ["auf", "bei", "mit"],
          },
          {
            german: "Warum gibst du so viel __?",
            russian: "Почему ты тратишь так много?",
            content: "aus",
            distractors: ["an", "mit", "für"],
          },
        ],
      },
    },
    level3: {
      title: "Уровень 3",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "bestimmt", russian: "определённо, точно" },
          { german: "sich freuen", russian: "радоваться" },
          { german: "mich", russian: "меня" },
          { german: "viel", russian: "много" },
          { german: "der Spaß", russian: "удовольствие, шутка, забава" },
          { german: "der Grüss", russian: "приветствие" },
          { german: "an", russian: "на, у" },
          { german: "der Arbeitstag", russian: "рабочий день" },
          { german: "meistens", russian: "чаще всего" },
          { german: "gegen", russian: "против; около" },
          { german: "das Büro", russian: "офис" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Er hat bestimmt viel Arbeit.",
            russian: "У него, определённо, много работы.",
            distractors: ["nicht", "wenig"],
          },
          {
            german: "Macht dir Spaß Deutsch zu lernen?",
            russian: "Ты с удовольствием учишь немецкий?",
            distractors: ["nicht", "nie"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Mein Arbeitstag beginnt __ 9 Uhr.",
            russian: "Мой рабочий день начинается в 9 часов.",
            content: "um",
            distractors: ["an", "bei", "gegen"],
          },
          {
            german: "Ich bin __ diese Idee.",
            russian: "Я против этой идеи.",
            content: "gegen",
            distractors: ["für", "mit", "bei"],
          },
        ],
      },
    },
  },
  audio: {
    title: "Аудирование",
    src: "/audio/lesson2.mp3",
  },
};
