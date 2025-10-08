export const lesson1 = {
  id: 1,
  title: "Урок 1: Приветствия",
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
