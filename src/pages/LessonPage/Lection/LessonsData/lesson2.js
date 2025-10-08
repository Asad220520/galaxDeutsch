export const lesson2 = {
  id: 2,
  title: "Урок 1 + 2 tag 2: Повседневные фразы и профессии",
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
          { german: "Sehen wir uns noch", russian: "Увидимся ещё" },
          { german: "Schönes Wochenende!", russian: "Хороших выходных" },
          { german: "gleichfalls, ebenso", russian: "Взаимно" },
          { german: "Alles Gute!", russian: "Всего хорошего" },
          { german: "Viel Erfolg!", russian: "Успехов! Удачи" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ist alles in Ordnung?",
            russian: "Всё в порядке?",
            distractors: ["Ist nichts in Ordnung?", "Ist neu in Ordnung?"],
          },
          {
            german: "Was ist los?",
            russian: "Что случилось?",
            distractors: ["Was ist neu?", "Was ist alt?"],
          },
          {
            german: "Was gibt es Neues?",
            russian: "Что нового?",
            distractors: ["Was gibt es Alt?", "Was gibt es Schönes?"],
          },
          {
            german: "Was war die Hausaufgabe?",
            russian: "Что было задано?",
            distractors: [
              "Wer war die Hausaufgabe?",
              "Wie war die Hausaufgabe?",
            ],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Haben Sie __?",
            russian: "Вы сделали?",
            content: "gemacht",
            distractors: ["arbeiten", "gefragt", "gehört"],
          },
          {
            german: "__ war die Hausaufgabe?",
            russian: "Что было задано?",
            content: "Was",
            distractors: ["Wie", "Wer", "Wo"],
          },
        ],
      },
    },
    level2: {
      title: "Уровень 2",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "wiederholen", russian: "повторять" },
          { german: "arbeiten", russian: "работать, трудиться" },
          { german: "reden", russian: "разговаривать, беседовать" },
          { german: "antworten", russian: "отвечать, давать ответ" },
          { german: "arbeiten als", russian: "работать кем-л., в качестве" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich wiederhole jeden Tag Deutsch.",
            russian: "Я повторяю немецкий каждый день.",
            distractors: [
              "Ich arbeite jeden Tag Deutsch.",
              "Ich rede jeden Tag Deutsch.",
            ],
          },
          {
            german: "Wir reden Deutsch.",
            russian: "Мы говорим по-немецки.",
            distractors: ["Wir arbeiten Deutsch.", "Wir antworten Deutsch."],
          },
          {
            german: "Wo arbeitest du?",
            russian: "Где ты работаешь?",
            distractors: ["Wo lernst du?", "Wo kommst du?"],
          },
          {
            german: "Er antwortet schnell.",
            russian: "Он быстро отвечает.",
            distractors: ["Er arbeitet schnell.", "Er redet schnell."],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich __ jeden Tag Deutsch.",
            russian: "Я повторяю немецкий каждый день.",
            content: "wiederhole",
            distractors: ["arbeite", "rede", "lerne"],
          },
          {
            german: "Wo __ du?",
            russian: "Где ты работаешь?",
            content: "arbeitest",
            distractors: ["kommst", "spielst", "lernst"],
          },
        ],
      },
    },
    level3: {
      title: "Уровень 3",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "Ingenieur", russian: "инженер" },
          { german: "Kfz-Mechatroniker", russian: "автомеханик" },
          { german: "Friseur", russian: "парикмахер" },
          { german: "Ärztin", russian: "женщина врач" },
          { german: "Lehrer", russian: "учитель" },
          { german: "Verkäufer", russian: "продавец" },
          { german: "Kellnerin", russian: "официантка" },
          { german: "Paketzusteller", russian: "курьер, доставщик" },
          { german: "übersetzen", russian: "переводить" },
          { german: "kochen", russian: "готовить" },
          { german: "joggen", russian: "бегать" },
          { german: "reisen", russian: "путешествовать" },
          { german: "singen", russian: "петь" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich arbeite als Ingenieur.",
            russian: "Я работаю инженером.",
            distractors: [
              "Ich arbeite als Friseur.",
              "Ich arbeite als Kellnerin.",
            ],
          },
          {
            german: "Sie kocht jeden Tag.",
            russian: "Она готовит каждый день.",
            distractors: ["Sie singt jeden Tag.", "Sie joggt jeden Tag."],
          },
          {
            german: "Ich gehe zur Schule.",
            russian: "Я иду в школу.",
            distractors: ["Ich gehe zur Arbeit.", "Ich gehe nach Hause."],
          },
          {
            german: "Er reist oft.",
            russian: "Он часто путешествует.",
            distractors: ["Er singt oft.", "Er joggt oft."],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich arbeite als __.",
            russian: "Я работаю инженером.",
            content: "Ingenieur",
            distractors: ["Friseur", "Kellnerin", "Ärztin"],
          },
          {
            german: "Sie __ jeden Tag.",
            russian: "Она готовит каждый день.",
            content: "kocht",
            distractors: ["singt", "joggt", "reist"],
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
