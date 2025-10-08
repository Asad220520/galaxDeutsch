export const lesson4 = {
  id: 4,
  title: "Lektion 3. Tag 2. Повседневные действия и вещи",
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
          { german: "möchten", russian: "хотеть" },
          { german: "mögen", russian: "любить, нравиться" },
          { german: "wissen", russian: "знать" },
          { german: "tun", russian: "делать, выполнять" },
          { german: "das Buch", russian: "книга, учебник" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich möchte einen Tee.",
            russian: "Я хочу чай.",
            distractors: ["Ich mag einen Tee.", "Ich weiß einen Tee."],
          },
          {
            german: "Er mag diesen Film.",
            russian: "Ему нравится этот фильм.",
            distractors: ["Er möchte diesen Film.", "Er tut diesen Film."],
          },
          {
            german: "Wir wissen die Antwort.",
            russian: "Мы знаем ответ.",
            distractors: ["Wir mögen die Antwort.", "Wir tun die Antwort."],
          },
          {
            german: "Ich tue meine Hausaufgaben.",
            russian: "Я делаю домашнее задание.",
            distractors: [
              "Ich möchte meine Hausaufgaben.",
              "Ich weiß meine Hausaufgaben.",
            ],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich __ ein Buch.",
            russian: "Я хочу книгу.",
            content: "möchte",
            distractors: ["mag", "weiß", "tue"],
          },
          {
            german: "Er __ diesen Film.",
            russian: "Ему нравится этот фильм.",
            content: "mag",
            distractors: ["möchte", "weiß", "tut"],
          },
        ],
      },
    },
    level2: {
      title: "Уровень 2",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "das Zimmer", russian: "комната, номер" },
          { german: "nach", russian: "в" },
          { german: "das Ticket", russian: "билет" },
          { german: "der Meerblick", russian: "вид на море" },
          { german: "der Film", russian: "фильм" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich gehe nach Hause.",
            russian: "Я иду домой.",
            distractors: ["Ich gehe zu Hause.", "Ich gehe zum Zimmer."],
          },
          {
            german: "Das Zimmer hat Meerblick.",
            russian: "У комнаты есть вид на море.",
            distractors: [
              "Das Zimmer hat einen Film.",
              "Das Zimmer hat ein Ticket.",
            ],
          },
          {
            german: "Wir kaufen ein Ticket für den Film.",
            russian: "Мы покупаем билет на фильм.",
            distractors: [
              "Wir kaufen ein Meerblick für den Film.",
              "Wir kaufen ein Zimmer für den Film.",
            ],
          },
          {
            german: "Ich bin zu Hause.",
            russian: "Я дома.",
            distractors: ["Ich gehe nach Hause.", "Ich gehe ins Zimmer."],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich gehe __ Hause.",
            russian: "Я иду домой.",
            content: "nach",
            distractors: ["zu", "ins", "im"],
          },
          {
            german: "Das Zimmer hat __.",
            russian: "У комнаты есть вид на море.",
            content: "Meerblick",
            distractors: ["Film", "Ticket", "Buch"],
          },
        ],
      },
    },
    level3: {
      title: "Уровень 3",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "Sport treiben", russian: "заниматься спортом" },
          { german: "die Suppe", russian: "суп" },
          { german: "der Tee", russian: "чай" },
          { german: "heute", russian: "сегодня" },
          { german: "morgen", russian: "завтра" },
          { german: "buchstabieren", russian: "говорить по буквам" },
          { german: "lesen", russian: "читать" },
          { german: "warum", russian: "почему" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich treibe heute Sport.",
            russian: "Сегодня я занимаюсь спортом.",
            distractors: ["Ich lese heute.", "Ich esse heute Suppe."],
          },
          {
            german: "Sie trinkt Tee.",
            russian: "Она пьёт чай.",
            distractors: ["Sie isst Suppe.", "Sie treibt Sport."],
          },
          {
            german: "Wir lesen das Buch.",
            russian: "Мы читаем книгу.",
            distractors: ["Wir trinken Tee.", "Wir treiben Sport."],
          },
          {
            german: "Kannst du das Wort buchstabieren?",
            russian: "Ты можешь произнести это слово по буквам?",
            distractors: ["Kannst du lesen?", "Kannst du trinken?"],
          },
          {
            german: "Warum bist du müde?",
            russian: "Почему ты устал?",
            distractors: ["Warum liest du?", "Warum trinkst du Tee?"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich trinke __.",
            russian: "Я пью чай.",
            content: "Tee",
            distractors: ["Suppe", "Buch", "Sport"],
          },
          {
            german: "__ lese ich das Buch.",
            russian: "Сегодня я читаю книгу.",
            content: "Heute",
            distractors: ["Morgen", "Gestern", "Jetzt"],
          },
        ],
      },
    },
  },
  audio: {
    title: "Аудирование",
    src: "/audio/lesson4.mp3",
  },
};
