export const lesson3 = {
  id: 3,
  title: "Урок 3: Жильё, мебель и повседневные вещи",
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
          { german: "die Wohnung", russian: "квартира" },
          { german: "der Schrank, die Schränke", russian: "шкаф, шкафы" },
          { german: "das Regal, die Regale", russian: "полка" },
          { german: "die Lampe, die Lampen", russian: "лампа" },
          { german: "der Stuhl, die Stühle", russian: "стул" },
          { german: "der Tisch, die Tische", russian: "стол" },
          { german: "der Sessel, die Sessel", russian: "кресло" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Die Wohnung ist klein.",
            russian: "Квартира маленькая.",
            distractors: ["Die Wohnung ist neu.", "Die Wohnung ist modern."],
          },
          {
            german: "Der Schrank ist teuer.",
            russian: "Шкаф дорогой.",
            distractors: [
              "Der Schrank ist praktisch.",
              "Der Schrank ist günstig.",
            ],
          },
          {
            german: "Das Regal ist praktisch.",
            russian: "Полка практичная.",
            distractors: ["Das Regal ist teuer.", "Das Regal ist neu."],
          },
          {
            german: "Die Lampe kostet 10 Euro.",
            russian: "Лампа стоит 10 евро.",
            distractors: [
              "Der Tisch kostet 10 Euro.",
              "Der Stuhl kostet 10 Euro.",
            ],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Das Regal ist __.",
            russian: "Полка практичная.",
            content: "praktisch",
            distractors: ["teuer", "modern", "neu"],
          },
          {
            german: "Die Lampe kostet 10 __.",
            russian: "Лампа стоит 10 евро.",
            content: "Euro",
            distractors: ["Tisch", "Stuhl", "Sessel"],
          },
        ],
      },
    },
    level2: {
      title: "Уровень 2",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "teuer", russian: "дорогой" },
          { german: "günstig", russian: "выгодный" },
          { german: "bequem", russian: "удобный" },
          { german: "schön", russian: "красивый" },
          { german: "neu", russian: "новый" },
          { german: "modern", russian: "современный" },
          { german: "nur", russian: "только" },
          { german: "sehr", russian: "очень" },
          { german: "kein", russian: "не (отрицание)" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich habe kein Geld.",
            russian: "У меня нет денег.",
            distractors: ["Ich habe nur Geld.", "Ich habe sehr Geld."],
          },
          {
            german: "Das Ticket ist teuer.",
            russian: "Билет дорогой.",
            distractors: [
              "Das Ticket ist praktisch.",
              "Das Ticket ist günstig.",
            ],
          },
          {
            german: "Ich lerne nur Deutsch.",
            russian: "Я учу только немецкий.",
            distractors: ["Ich lerne sehr Deutsch.", "Ich lerne neu Deutsch."],
          },
          {
            german: "Bischkek ist schön.",
            russian: "Бишкек красивый.",
            distractors: ["Bischkek ist teuer.", "Bischkek ist bequem."],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich lerne __ Deutsch.",
            russian: "Я учу только немецкий.",
            content: "nur",
            distractors: ["sehr", "neu", "modern"],
          },
          {
            german: "Bischkek ist __.",
            russian: "Бишкек красивый.",
            content: "schön",
            distractors: ["teuer", "praktisch", "bequem"],
          },
        ],
      },
    },
    level3: {
      title: "Уровень 3",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "da", russian: "там" },
          { german: "später", russian: "позже" },
          { german: "wann", russian: "когда" },
          { german: "bleiben", russian: "оставаться" },
          { german: "früh", russian: "рано" },
          { german: "die Lust", russian: "желание" },
          { german: "schade", russian: "жаль" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Wir gehen später nach Hause.",
            russian: "Мы пойдём домой позже.",
            distractors: [
              "Wir gehen früh nach Hause.",
              "Wir bleiben nach Hause.",
            ],
          },
          {
            german: "Ich komme immer früh.",
            russian: "Я всегда прихожу рано.",
            distractors: ["Ich komme immer später.", "Ich bleibe immer da."],
          },
          {
            german: "Ich habe keine Lust.",
            russian: "У меня нет желания.",
            distractors: ["Ich habe die Lust.", "Ich habe da Lust."],
          },
          {
            german: "Das ist schade.",
            russian: "Это жаль.",
            distractors: ["Das ist bleiben.", "Das ist wann."],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich habe keine __.",
            russian: "У меня нет желания.",
            content: "Lust",
            distractors: ["Früh", "Schade", "Da"],
          },
          {
            german: "Das ist __.",
            russian: "Это жаль.",
            content: "schade",
            distractors: ["bleiben", "wann", "da"],
          },
        ],
      },
    },
  },
  audio: {
    title: "Аудирование",
    src: "/audio/lesson3.mp3",
  },
};
