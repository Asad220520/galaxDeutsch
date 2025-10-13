// questions.js
export const allQuestions = {
  less1: [
    {
      id: 1,
      topic: "Begrüßung",
      question: { de: "Wie heißt du?", ru: "Как тебя зовут?" },
      options: [
        { de: "Ich heiße Anna.", ru: "Меня зовут Анна." },
        { de: "Ich bin 20.", ru: "Мне 20 лет." },
        { de: "Ich wohne in Berlin.", ru: "Я живу в Берлине." },
      ],
      answer: { de: "Ich heiße Anna.", ru: "Меня зовут Анна." },
    },
    {
      id: 2,
      topic: "Familie",
      question: {
        de: "Hast du Geschwister?",
        ru: "У тебя есть братья или сестры?",
      },
      options: [
        { de: "Ja, ich habe einen Bruder.", ru: "Да, у меня есть брат." },
        { de: "Nein, ich habe keinen Bruder.", ru: "Нет, у меня нет брата." },
        { de: "Ich bin müde.", ru: "Я устал." },
      ],
      answer: { de: "Ja, ich habe einen Bruder.", ru: "Да, у меня есть брат." },
    },
  ],
  less2: [
    {
      id: 1,
      topic: "Zahlen",
      question: {
        de: "Wie viel ist zwei plus drei?",
        ru: "Сколько будет два плюс три?",
      },
      options: [
        { de: "Fünf", ru: "Пять" },
        { de: "Sechs", ru: "Шесть" },
        { de: "Vier", ru: "Четыре" },
      ],
      answer: { de: "Fünf", ru: "Пять" },
    },
  ],
  less3: [
    {
      id: 1,
      topic: "Tiere",
      question: { de: "Was ist das?", ru: "Кто это?" },
      options: [
        { de: "Das ist ein Hund.", ru: "Это собака." },
        { de: "Das ist ein Tisch.", ru: "Это стол." },
        { de: "Das ist ein Auto.", ru: "Это машина." },
      ],
      answer: { de: "Das ist ein Hund.", ru: "Это собака." },
    },
  ],
};
