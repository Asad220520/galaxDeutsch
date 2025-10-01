export const lesson2 = {
  id: 2,
  title: "Урок 2: Слова и предложения",
  theory: {
    title: "Теория",
    content:
      "Слова с артиклями, множественным числом и примеры предложений на немецком с переводом на русский.",
  },
  levels: {
    level1: {
      title: "Уровень 1",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "Haus", russian: "Дом" },
          { german: "Buch", russian: "Книга" },
          { german: "Lampe", russian: "Лампа" },
          { german: "Stuhl", russian: "Стул" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich habe kein Geld",
            russian: "У меня нет денег",
            distractors: ["nicht", "Euro"],
          },
          {
            german: "Die Wohnung ist klein",
            russian: "Квартира маленькая",
            distractors: ["groß", "Haus"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich habe __ Geld",
            content: "kein",
            distractors: ["nicht", "nur", "da"],
          },
          {
            german: "__ Wohnung ist klein",
            content: "Die",
            distractors: ["Der", "Das", "Die"],
          },
        ],
      },
    },
    level2: {
      title: "Уровень 2",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "neu", russian: "новый" },
          { german: "modern", russian: "современный" },
          { german: "Sessel", russian: "Кресло" },
          { german: "günstig", russian: "выгодный" },
          { german: "da", russian: "там" },
          { german: "schön", russian: "красивый" },
          { german: "aber", russian: "но" },
          { german: "klein", russian: "маленький" },
          { german: "später", russian: "позже" },
          { german: "wann", russian: "когда" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich habe kein Geld",
            russian: "У меня нет денег",
            distractors: ["nicht", "Euro"],
          },
          {
            german: "Die Wohnung ist klein",
            russian: "Квартира маленькая",
            distractors: ["groß", "Haus"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Die Lampe ist __",
            content: "neu",
            distractors: ["alt", "praktisch", "modern"],
          },

          {
            german: "Ich bleibe __ Bischkek",
            content: "in",
            distractors: ["nach", "zu", "von"],
          },
        ],
      },
    },
    level3: {
      title: "Уровень 3",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "der Käse", russian: "сыр" },
          { german: "früh", russian: "рано" },
          { german: "Ticket", russian: "билет" },
          { german: "lernen", russian: "учить" },
          { german: "Berlin", russian: "Берлин" },
          { german: "Zeitung", russian: "газета" },
          { german: "praktisch", russian: "практичный" },
          { german: "teuer", russian: "дорогой" },
          { german: "neu", russian: "новый" },
          { german: "modern", russian: "современный" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich habe kein Geld",
            russian: "У меня нет денег",
            distractors: ["nicht", "Euro"],
          },
          {
            german: "Die Wohnung ist klein",
            russian: "Квартира маленькая",
            distractors: ["groß", "Haus"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Das Ticket ist __",
            content: "teuer",
            distractors: ["praktisch", "günstig", "neu"],
          },
          {
            german: "Ich lerne __ Deutsch",
            content: "nur",
            distractors: ["nicht", "sehr", "da"],
          },
          {
            german: "Ich lese ein __",
            content: "Buch",
            distractors: ["Haus", "Zeitung", "Lampe"],
          },
          {
            german: "Ich studiere in __",
            content: "Deutschland",
            distractors: ["Berlin", "nur", "lernen"],
          },
          {
            german: "Der Käse ist __",
            content: "lecker",
            distractors: ["teuer", "praktisch", "neu"],
          },
          {
            german: "Ich komme immer __",
            content: "früh",
            distractors: ["später", "nur", "da"],
          },
          {
            german: "Die Lampe ist __",
            content: "praktisch",
            distractors: ["teuer", "schön", "neu"],
          },
          {
            german: "Der Stuhl ist __",
            content: "bequem",
            distractors: ["teuer", "schön", "praktisch"],
          },
          {
            german: "Die Wohnung ist __",
            content: "klein",
            distractors: ["groß", "neu", "modern"],
          },
          {
            german: "Ich bleibe __ Bischkek",
            content: "in",
            distractors: ["Berlin", "Deutschland", "der Stadt"],
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
