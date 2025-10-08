// data.js
const data = {
  Nominativ: {
    Maskulin: [
      {
        word: "der",
        sentence: "Der Mann arbeitet.",
        translation: "Мужчина работает.",
      },
      {
        word: "ein",
        sentence: "Ein Hund läuft.",
        translation: "Бежит (какой-то) пёс.",
      },
      {
        word: "kein",
        sentence: "Kein Lehrer fehlt.",
        translation: "Ни один учитель не отсутствует.",
      },
    ],
    Feminin: [
      {
        word: "die",
        sentence: "Die Frau lacht.",
        translation: "Женщина смеётся.",
      },
      {
        word: "eine",
        sentence: "Eine Katze schläft.",
        translation: "Кошка спит.",
      },
      {
        word: "keine",
        sentence: "Keine Blume ist gelb.",
        translation: "Нет ни одного жёлтого цветка.",
      },
    ],
  },
  Akkusativ: {
    Maskulin: [
      {
        word: "den",
        sentence: "Ich sehe den Mann.",
        translation: "Я вижу мужчину.",
      },
      {
        word: "einen",
        sentence: "Ich habe einen Hund.",
        translation: "У меня есть собака.",
      },
      {
        word: "keinen",
        sentence: "Ich sehe keinen Lehrer.",
        translation: "Я не вижу учителя.",
      },
    ],
    Feminin: [
      {
        word: "die",
        sentence: "Ich höre die Frau.",
        translation: "Я слышу женщину.",
      },
      {
        word: "eine",
        sentence: "Ich sehe eine Blume.",
        translation: "Я вижу цветок.",
      },
      {
        word: "keine",
        sentence: "Ich sehe keine Blume.",
        translation: "Я не вижу цветка.",
      },
    ],
  },

  // mini exercise: пары для сопоставления
  pairsExercise: [
    {
      question: "Мужской род, Nominativ, определённый артикль",
      options: ["der", "die", "das", "ein"],
      answer: "der",
      explanation:
        "‘der’ — это определённый артикль для мужского рода в именительном падеже.",
    },
    {
      question: "Женский род, Nominativ, неопределённый артикль",
      options: ["die", "eine", "kein", "der"],
      answer: "eine",
      explanation:
        "‘eine’ — это неопределённый артикль для женского рода в именительном падеже.",
    },
    {
      question: "Средний род, Akkusativ, отрицание",
      options: ["kein", "die", "der", "ein"],
      answer: "kein",
      explanation:
        "‘kein’ используется для отрицания существительного среднего рода в винительном падеже.",
    },
    {
      question: "Plural, Nominativ, указательное местоимение",
      options: ["diese", "dieser", "dieses", "die"],
      answer: "diese",
      explanation:
        "‘diese’ — указательное местоимение для множественного числа в именительном падеже.",
    },
  ],
};

export default data;
