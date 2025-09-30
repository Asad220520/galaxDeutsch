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
          { german: "Schrank", russian: "Шкаф" },
          { german: "Regal", russian: "Полка" },
          { german: "Tisch", russian: "Стол" },
          { german: "Sessel", russian: "Кресло" },
          { german: "Euro", russian: "Евро" },
          { german: "Stadt", russian: "Город" },
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
          {
            german: "Der Schrank ist teuer",
            russian: "Шкаф дорогой",
            distractors: ["praktisch", "günstig"],
          },
          {
            german: "Das Regal ist praktisch",
            russian: "Полка практичная",
            distractors: ["teuer", "schön"],
          },
          {
            german: "Die Lampe kostet 10 Euro",
            russian: "Лампа стоит 10 евро",
            distractors: ["Euroes", "Euros"],
          },
          {
            german: "Ich lerne nur Deutsch",
            russian: "Я учу только немецкий",
            distractors: ["nicht", "sehr", "da"],
          },
          {
            german: "Der Stuhl ist bequem",
            russian: "Стул удобный",
            distractors: ["schön", "praktisch", "neu"],
          },
          {
            german: "Bischkek ist schön",
            russian: "Бишкек красивый",
            distractors: ["klein", "modern", "neu"],
          },
          {
            german: "Ich komme immer früh",
            russian: "Я всегда прихожу рано",
            distractors: ["später", "nur", "da"],
          },
          {
            german: "Ich bleibe in Bischkek",
            russian: "Я остаюсь в Бишкеке",
            distractors: ["Berlin", "Deutschland", "der Stadt"],
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
          {
            german: "Der Schrank ist __",
            content: "teuer",
            distractors: ["praktisch", "günstig", "neu"],
          },
          {
            german: "Das Regal ist __",
            content: "praktisch",
            distractors: ["teuer", "schön", "neu"],
          },
          {
            german: "Die Lampe kostet 10 __",
            content: "Euro",
            distractors: ["Euroes", "Euros", "Eure"],
          },
          {
            german: "Ich lerne __ Deutsch",
            content: "nur",
            distractors: ["nicht", "sehr", "da"],
          },
          {
            german: "Der Stuhl ist __",
            content: "bequem",
            distractors: ["schön", "praktisch", "neu"],
          },
          {
            german: "Bischkek ist __",
            content: "schön",
            distractors: ["klein", "modern", "neu"],
          },
          {
            german: "Ich komme immer __",
            content: "früh",
            distractors: ["später", "nur", "da"],
          },
          {
            german: "Ich bleibe in __",
            content: "Bischkek",
            distractors: ["Berlin", "Deutschland", "der Stadt"],
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
            german: "Die Lampe ist __",
            russian: "Лампа новая",
            distractors: ["alt", "praktisch", "modern"],
          },
          {
            german: "Die Wohnung ist __",
            russian: "Квартира современная",
            distractors: ["alt", "neu", "praktisch"],
          },
          {
            german: "Der Sessel ist __",
            russian: "Кресло удобное",
            distractors: ["schön", "teuer", "praktisch"],
          },
          {
            german: "Der Tisch ist __",
            russian: "Стол выгодный",
            distractors: ["teuer", "schön", "praktisch"],
          },
          {
            german: "Wir gehen __ nach Hause",
            russian: "Мы пойдём домой позже",
            distractors: ["früh", "nur", "da"],
          },
          {
            german: "Wann kommst du?",
            russian: "Когда ты придёшь?",
            distractors: ["Wie", "Wo", "Was"],
          },
          {
            german: "Das ist __",
            russian: "Это жаль",
            distractors: ["gut", "schön", "praktisch"],
          },
          {
            german: "Ich habe keine __",
            russian: "У меня нет желания",
            distractors: ["Zeit", "Geld", "Freude"],
          },
          {
            german: "Ich spiele __ gut",
            russian: "Я очень хорошо играю",
            distractors: ["nicht", "nur", "da"],
          },
          {
            german: "Ich bleibe __ Bischkek",
            russian: "Я остаюсь в Бишкеке",
            distractors: ["nach", "zu", "von"],
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
            german: "Die Wohnung ist __",
            content: "modern",
            distractors: ["alt", "neu", "praktisch"],
          },
          {
            german: "Der Sessel ist __",
            content: "bequem",
            distractors: ["schön", "teuer", "praktisch"],
          },
          {
            german: "Der Tisch ist __",
            content: "günstig",
            distractors: ["teuer", "schön", "praktisch"],
          },
          {
            german: "Wir gehen __ nach Hause",
            content: "später",
            distractors: ["früh", "nur", "da"],
          },
          {
            german: "__ kommst du?",
            content: "Wann",
            distractors: ["Wie", "Wo", "Was"],
          },
          {
            german: "Das ist __",
            content: "schade",
            distractors: ["gut", "schön", "praktisch"],
          },
          {
            german: "Ich habe keine __",
            content: "Lust",
            distractors: ["Zeit", "Geld", "Freude"],
          },
          {
            german: "Ich spiele __ gut",
            content: "sehr",
            distractors: ["nicht", "nur", "da"],
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
            german: "Das Ticket ist __",
            russian: "Билет дорогой",
            distractors: ["praktisch", "günstig", "neu"],
          },
          {
            german: "Ich lerne __ Deutsch",
            russian: "Я учу немецкий",
            distractors: ["nicht", "nur", "da"],
          },
          {
            german: "Ich lese ein __",
            russian: "Я читаю книгу",
            distractors: ["Haus", "Zeitung", "Buch"],
          },
          {
            german: "Ich studiere in __",
            russian: "Я учусь в Германии",
            distractors: ["Berlin", "nur", "lernen"],
          },
          {
            german: "Der Käse ist __",
            russian: "Сыр вкусный",
            distractors: ["teuer", "praktisch", "neu"],
          },
          {
            german: "Ich komme immer __",
            russian: "Я всегда прихожу рано",
            distractors: ["später", "nur", "da"],
          },
          {
            german: "Die Lampe ist __",
            russian: "Лампа практичная",
            distractors: ["teuer", "schön", "neu"],
          },
          {
            german: "Der Stuhl ist __",
            russian: "Стул удобный",
            distractors: ["teuer", "schön", "praktisch"],
          },
          {
            german: "Die Wohnung ist __",
            russian: "Квартира маленькая",
            distractors: ["groß", "neu", "modern"],
          },
          {
            german: "Ich bleibe __ Bischkek",
            russian: "Я остаюсь в Бишкеке",
            distractors: ["Berlin", "Deutschland", "der Stadt"],
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
