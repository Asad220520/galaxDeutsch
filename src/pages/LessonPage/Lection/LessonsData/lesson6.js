export const lesson6 = {
  id: 6,
  title: "Lektion 5 +6: Повседневная жизнь и досуг",
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
          { german: "schwimmen", russian: "плавать" },
          { german: "hoffentlich", russian: "в надежде" },
          { german: "vielleicht", russian: "возможно" },
          { german: "beide", russian: "оба, обе" },
          { german: "schneller", russian: "быстрее" },
          { german: "länger", russian: "дольше" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Er schwimmt im See.",
            russian: "Он плавает в озере.",
            distractors: ["Er läuft im See.", "Er fährt im See."],
          },
          {
            german: "Hoffentlich kommt er bald.",
            russian: "Надеюсь, он скоро придёт.",
            distractors: ["Vielleicht kommt er bald.", "Beide kommen bald."],
          },
          {
            german: "Vielleicht ist er zu Hause.",
            russian: "Возможно, он дома.",
            distractors: [
              "Er ist nicht zu Hause.",
              "Hoffentlich ist er zu Hause.",
            ],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Beide __ spielen gut.",
            russian: "Оба клуба играют хорошо.",
            content: "Teams",
            distractors: ["Spieler", "Mannschaften", "Lehrer"],
          },
          {
            german: "Er läuft __ als ich.",
            russian: "Он бегает быстрее, чем я.",
            content: "schneller",
            distractors: ["länger", "höher", "stärker"],
          },
          {
            german: "Ich kann heute __ arbeiten.",
            russian: "Я могу работать сегодня дольше.",
            content: "länger",
            distractors: ["schneller", "besser", "früher"],
          },
        ],
      },
    },
    level2: {
      title: "Уровень 2",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "helfen", russian: "помогать" },
          { german: "einkaufen", russian: "закупаться" },
          { german: "das ist nicht fair", russian: "так не честно" },
          { german: "kochen", russian: "готовить" },
          { german: "aufräumen", russian: "убираться" },
          { german: "der Urlaub", russian: "отпуск" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Der Lehrer hilft uns mit HA.",
            russian: "Учитель помогает нам с ДЗ.",
            distractors: ["Die Oma hilft uns.", "Wir helfen dem Lehrer."],
          },
          {
            german: "Ich gehe heute einkaufen.",
            russian: "Я сегодня иду за покупками.",
            distractors: [
              "Ich kaufe heute ein Buch.",
              "Ich spiele heute einkaufen.",
            ],
          },
          {
            german: "Das ist nicht fair.",
            russian: "Так не честно.",
            distractors: ["Das ist fair.", "Das ist besonders."],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Was kannst du gut __?",
            russian: "Что ты можешь хорошо готовить?",
            content: "kochen",
            distractors: ["essen", "trinken", "lesen"],
          },
          {
            german: "Ich räume am Wochenende __.",
            russian: "Я на выходных убираюсь.",
            content: "auf",
            distractors: ["ein", "mit", "ab"],
          },
          {
            german: "Ich nehme im Sommer __.",
            russian: "Я беру отпуск летом.",
            content: "Urlaub",
            distractors: ["Ferien", "Kurs", "Arbeit"],
          },
        ],
      },
    },
    level3: {
      title: "Уровень 3",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "die Oma", russian: "бабушка" },
          { german: "kosten", russian: "стоить" },
          { german: "fernsehen", russian: "смотреть телевизор" },
          { german: "der Arzt", russian: "врач" },
          { german: "fragen", russian: "спрашивать" },
          { german: "am Montag", russian: "в понедельник" },
          { german: "die Tochter", russian: "дочь" },
          { german: "besuchen", russian: "посещать, навещать" },
          { german: "leider", russian: "к сожалению" },
          { german: "am Nachmittag", russian: "после обеда" },
          { german: "spazieren gehen", russian: "гулять" },
          { german: "zusammen", russian: "вместе" },
          { german: "das Aufenthaltserlaubnis", russian: "вид на жительство" },
          { german: "verlängern", russian: "продлевать" },
          { german: "der Stock", russian: "этаж" },
          { german: "mitnehmen", russian: "взять с собой" },
          { german: "bleiben", russian: "оставаться" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Oma, wie geht es dir?",
            russian: "Бабушка, как ты себя чувствуешь?",
            distractors: ["Oma, wo bist du?", "Oma, was machst du?"],
          },
          {
            german: "Wie viel kostet das Buch?",
            russian: "Сколько стоит эта книга?",
            distractors: ["Wie alt ist das Buch?", "Was kostet das Buch?"],
          },
          {
            german: "Ich sehe jeden Abend fern.",
            russian: "Я смотрю телевизор каждый вечер.",
            distractors: ["Ich lese jeden Abend.", "Ich spiele jeden Abend."],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Er arbeitet als __.",
            russian: "Он работает врачом.",
            content: "Arzt",
            distractors: ["Lehrer", "Kellner", "Ingenieur"],
          },
          {
            german: "Am Montag fahren wir nach __.",
            russian: "В понедельник мы поедем в Талас.",
            content: "Talas",
            distractors: ["Bischkek", "Osh", "Berlin"],
          },
          {
            german: "Wir möchten __ in Deutschland arbeiten.",
            russian: "Мы хотели бы вместе работать в Германии.",
            content: "zusammen",
            distractors: ["allein", "beide", "vielleicht"],
          },
        ],
      },
    },
  },
  audio: {
    title: "Аудирование",
    src: "/audio/lesson7.mp3",
  },
};
