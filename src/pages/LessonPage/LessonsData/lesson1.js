export const lesson1 = {
  id: 1,
  title: "Урок 1: Основные глаголы и существительные",
  theory: {
    title: "Теория",
    content: "Объяснение грамматики и слов, примеры предложений на немецком.",
  },
  matching: {
    title: "Мэтчинг",
    items: [
      { german: "ich", russian: "Я" },
      { german: "du", russian: "Ты" },
      { german: "er", russian: "Он" },
      { german: "sie", russian: "Она" },
    ],
  },
  puzzle: {
    title: "Пазл",
    items: [
      {
        german: "ich studiere in Deutschland",
        russian: "Я учусь в Германии",
        distractors: ["lernen", "Berlin"], // лишние слова
      },
      {
        german: "ich lese ein Buch",
        russian: "Я читаю книгу",
        distractors: ["Zeitung", "Haus"], // лишние слова
      },
    ],
  },
  audio: {
    title: "Аудирование",
    src: "/audio/lesson1.mp3",
  },
  text: {
    title: "Текст",
    content: "Короткий диалог или текст для чтения на немецком языке.",
  },
};
