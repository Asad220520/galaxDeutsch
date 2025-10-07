export const lesson8 = {
  id: 8,
  title: "Урок 8: Новые слова",
  levels: {
    level1: {
      title: "Уровень 1",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "erst", russian: "сперва, только, лишь, сначала" },
          { german: "einschalten", russian: "включать" },
          { german: "einmal", russian: "один раз" },
          { german: "der Computer", russian: "компьютер" },
          { german: "die Stunde", russian: "час, урок" },
          { german: "erste", russian: "первая" },
          { german: "ruhig", russian: "спокойный, тихий" },
          { german: "öffnen", russian: "открывать" },
          { german: "die Mailbox", russian: "почтовый ящик" },
          { german: "beantworten", russian: "отвечать" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Es ist erst 8 Uhr.",
            russian: "Сейчас только 8 часов.",
            distractors: ["erst", "einmal", "halb"],
          },
          {
            german: "Kannst du bitte das Licht einschalten?",
            russian: "Можешь, пожалуйста, включить свет?",
            distractors: ["einschalten", "öffnen", "telefonieren"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich arbeite jeden Tag am __.",
            russian: "Я работаю каждый день за компьютером.",
            content: "Computer",
            distractors: ["Kindergarten", "Büro", "Park"],
          },
          {
            german: "Der Film dauert zwei __.",
            russian: "Фильм длится два часа.",
            content: "Stunden",
            distractors: ["Minuten", "Tage", "Wochen"],
          },
        ],
      },
      typing: {
        title: "Проверка написания",
        items: [
          {
            german: "erst",
            russian: "сперва, только, лишь, сначала",
            content: "erst",
          },
          {
            german: "einschalten",
            russian: "включать",
            content: "einschalten",
          },
          { german: "einmal", russian: "один раз", content: "einmal" },
          {
            german: "der Computer",
            russian: "компьютер",
            content: "der Computer",
          },
          { german: "die Stunde", russian: "час, урок", content: "die Stunde" },
        ],
      },
    },
    level2: {
      title: "Уровень 2",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "telefonieren", russian: "говорить по телефону" },
          { german: "mit", russian: "с, вместе с" },
          { german: "der Kunde", russian: "клиент" },
          { german: "mittags", russian: "в полдень, днём" },
          { german: "ein paar", russian: "пара, несколько" },
          { german: "andere", russian: "другие" },
          { german: "die Abteilung", russian: "отдел" },
          { german: "essen", russian: "есть, кушать" },
          { german: "immer", russian: "всегда, постоянно, каждый раз" },
          { german: "weil", russian: "потому что" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Wir telefonieren morgen.",
            russian: "Мы поговорим по телефону завтра.",
            distractors: ["telefonieren", "essen", "schreiben"],
          },
          {
            german: "Mit wem wohnst du?",
            russian: "С кем ты живёшь?",
            distractors: ["mit", "wem", "für"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Die Kunden warten schon an der __.",
            russian: "Клиенты уже ждут на кассе.",
            content: "Kasse",
            distractors: ["Abteilung", "Büro", "Post"],
          },
          {
            german: "Mittags ist es sehr __ in der Stadt.",
            russian: "Днём в городе очень тихо.",
            content: "ruhig",
            distractors: ["laut", "spannend", "lustig"],
          },
        ],
      },
      typing: {
        title: "Проверка написания",
        items: [
          {
            german: "telefonieren",
            russian: "говорить по телефону",
            content: "telefonieren",
          },
          { german: "mit", russian: "с, вместе с", content: "mit" },
          { german: "der Kunde", russian: "клиент", content: "der Kunde" },
          { german: "mittags", russian: "в полдень, днём", content: "mittags" },
          {
            german: "ein paar",
            russian: "пара, несколько",
            content: "ein paar",
          },
        ],
      },
    },
    level3: {
      title: "Уровень 3",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "lustig", russian: "весёлый, смешной" },
          { german: "die Geschichte", russian: "история, рассказ" },
          { german: "die Arbeit", russian: "работа" },
          { german: "erzählen", russian: "рассказывать" },
          { german: "manchmal", russian: "иногда" },
          { german: "fragen", russian: "спрашивать" },
          { german: "die wichtigste", russian: "самая важная" },
          { german: "das Ding, die Dinge", russian: "вещь, предмет" },
          { german: "halb", russian: "половина" },
          { german: "der Kindergarten", russian: "детский сад" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Meine Freunde sind immer fröhlich.",
            russian: "Мои друзья всегда весёлые.",
            distractors: ["fröhlich", "ruhig", "traurig"],
          },
          {
            german: "Erzählen Sie bitte über Ihre Familie.",
            russian: "Расскажите о вашей семье.",
            distractors: ["Familie", "Freunde", "Arbeit"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Manchmal gehe ich __.",
            russian: "Иногда я хожу на прогулки.",
            content: "spazieren",
            distractors: ["essen", "arbeiten", "schlafen"],
          },
          {
            german: "Kann ich dich etwas __?",
            russian: "Могу я тебя что-то спросить?",
            content: "fragen",
            distractors: ["antworten", "erzählen", "machen"],
          },
        ],
      },
      typing: {
        title: "Проверка написания",
        items: [
          { german: "lustig", russian: "весёлый, смешной", content: "lustig" },
          {
            german: "die Geschichte",
            russian: "история, рассказ",
            content: "die Geschichte",
          },
          { german: "die Arbeit", russian: "работа", content: "die Arbeit" },
          { german: "erzählen", russian: "рассказывать", content: "erzählen" },
          { german: "manchmal", russian: "иногда", content: "manchmal" },
        ],
      },
    },
  },
  audio: {
    title: "Аудирование",
    src: "/audio/lesson7.mp3",
  },
};
