export const lesson9 = {
  id: 9,
  title: "Урок 9-10: Новые слова",
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
          {
            german: "eigentlich",
            russian: "собственно говоря, на самом деле, вообще-то",
          },
          { german: "besondere", russian: "особенные" },
          { german: "das Geld", russian: "деньги" },
          { german: "verheiratet sein", russian: "быть замужем/женатым" },
          { german: "der Urlaub", russian: "отпуск" },
          { german: "das Wörterbuch", russian: "словарь" },
          { german: "der Lehrer", russian: "учитель" },
          { german: "glücklich", russian: "счастливый" },
          { german: "das Glück", russian: "счастье" },
          { german: "Glück haben", russian: "повезти" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Eigentlich mag ich keinen __.",
            russian: "На самом деле я не люблю кофе.",
            distractors: ["Tee", "Kaffee", "Wasser"],
          },
          {
            german: "Er spart __ für ein Auto.",
            russian: "Он копит деньги на машину.",
            distractors: ["Geld", "Zeit", "Bücher"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Bist du __?",
            russian: "Ты женат / замужем?",
            content: "verheiratet",
            distractors: ["ledig", "glücklich", "schuldig"],
          },
          {
            german: "Ich mache im Sommer __.",
            russian: "Я беру отпуск летом.",
            content: "Urlaub",
            distractors: ["Schule", "Arbeit", "Hausaufgaben"],
          },
        ],
      },
    },
    level2: {
      title: "Уровень 2",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "die Freizeit", russian: "свободное время" },
          { german: "der Schüler", russian: "ученик" },
          { german: "der Hund", russian: "собака" },
          { german: "der Beruf", russian: "профессия" },
          { german: "das Auto", russian: "машина" },
          { german: "natürlich", russian: "конечно" },
          { german: "gestern", russian: "вчера" },
          { german: "anfangen", russian: "начинать" },
          { german: "beenden", russian: "заканчивать" },
          { german: "sich verlassen", russian: "полагаться" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "In meiner __ spiele ich gerne Tennis.",
            russian: "В свободное время я люблю играть в теннис.",
            distractors: ["Freizeit", "Arbeit", "Schule"],
          },
          {
            german: "Der Schüler schreibt seine __.",
            russian: "Ученик пишет домашнее задание.",
            distractors: ["Hausaufgaben", "Test", "Bücher"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich fahre jeden Tag mit dem __ zur Arbeit.",
            russian: "Я каждый день еду на работу на машине.",
            content: "Auto",
            distractors: ["Bus", "Zug", "Fahrrad"],
          },
          {
            german: "Natürlich werde ich dir __!",
            russian: "Конечно, я помогу тебе!",
            content: "helfen",
            distractors: ["ignorieren", "leiden", "lernen"],
          },
        ],
      },
    },
    level3: {
      title: "Уровень 3",
      matching: {
        title: "Мэтчинг",
        items: [
          {
            german: "sich auskennen",
            russian: "ориентироваться, разбираться в чем-то",
          },
          { german: "passieren", russian: "случаться" },
          { german: "einräumen", russian: "убирать" },
          { german: "einladen", russian: "приглашать" },
          { german: "der Bus", russian: "автобус" },
          { german: "die Fahrkarte", russian: "проездной билет" },
          { german: "das Zeichen", russian: "знак" },
          { german: "das Abenteuer", russian: "приключение" },
          { german: "lassen", russian: "оставлять" },
          { german: "mitmachen", russian: "участвовать" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Sie kennt sich in der Stadt gut __.",
            russian: "Она хорошо ориентируется в городе.",
            distractors: ["auskennen", "verirren", "vergessen"],
          },
          {
            german: "Wir laden unsere Kollegen zur __ ein.",
            russian: "Мы приглашаем наших коллег на свадьбу.",
            distractors: ["Hochzeit", "Geburtstag", "Party"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich hoffe, es wird nichts __.",
            russian: "Я надеюсь, что ничего не случится.",
            content: "passieren",
            distractors: ["verlieren", "beginnen", "enden"],
          },
          {
            german: "Ich räume mein __ auf.",
            russian: "Я убираю свою комнату.",
            content: "Zimmer",
            distractors: ["Haus", "Auto", "Büro"],
          },
        ],
      },
    },
  },
  audio: {
    title: "Аудирование",
    src: "/audio/lesson8.mp3",
  },
};
