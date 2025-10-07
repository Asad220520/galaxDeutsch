export const lesson8 = {
  id: 8,
  title: "Урок 8: Новые слова",
  levels: {
    level1: {
      title: "Уровень 1",
      theory: {
        title: "Теория",
        content: `
Новые немецкие слова с переводом на русский, примеры предложений и использование в контексте.

---

### Императив (Imperativ) — повелительное наклонение

Императив используется для того, чтобы давать **команды, просьбы, инструкции или советы**.  
Формы зависят от того, к кому вы обращаетесь: один человек, группа или вежливая форма.

---

#### 1️⃣ Обращение к одному человеку (du)
- Берём основу глагола (Infinitiv минус **-en**) и убираем окончание -st.  
- Иногда можно оставить **-e**, но часто оно опускается.  
- Примеры:
  - **lern(e)!** — Учись!  
  - **geh!** — Иди!  
  - **öffne!** — Открой!  

**Отрицание:**
- Добавляем **nicht** после глагола:  
  - **Geh nicht!** — Не иди!  
  - **Iss das nicht!** — Не ешь это!

---

#### 2️⃣ Обращение к группе людей (ihr)
- Форма императива совпадает с формой **ihr** настоящего времени без местоимения.  
- Примеры:
  - **lernt!** — Учитесь!  
  - **geht!** — Идите!  
  - **öffnet das Fenster!** — Откройте окно!

**Отрицание:**
- После глагола ставим **nicht**:  
  - **Geht nicht!** — Не идите!  

---

#### 3️⃣ Вежливая форма (Sie) — один или несколько человек
- Используется для формального обращения.  
- Конструкция: **Глагол + Sie**  
- Примеры:
  - **Lernen Sie Deutsch!** — Учите немецкий!  
  - **Öffnen Sie bitte das Fenster!** — Пожалуйста, откройте окно!  

**Отрицание:**
- Добавляем **nicht** перед объектом/действием:  
  - **Gehen Sie nicht!** — Не идите!  
  - **Öffnen Sie das Fenster nicht!** — Не открывайте окно!  

---

#### 4️⃣ Особенности императива
- Глаголы с изменением корня (например, **fahren → fahr!**) сохраняют корень в императиве.  
- Модальные глаголы и вспомогательные (например, **können, sollen**) тоже имеют императив:  
  - **Könn(e) bitte leise sein!** — Будь(те) пожалуйста тихим/тихими!  
- Часто добавляют **bitte** для вежливости:  
  - **Gib mir bitte das Buch!** — Дай мне, пожалуйста, книгу!  
  - **Schreib bitte deinen Namen!** — Напиши, пожалуйста, своё имя!  

---

#### 5️⃣ Примеры в контексте
- **Du:**  
  - „Komm hier!“ — Подойди сюда!  
  - „Iss dein Gemüse!“ — Ешь свои овощи!  

- **Ihr:**  
  - „Kommt bitte pünktlich!“ — Приходите, пожалуйста, вовремя!  
  - „Spielt draußen!“ — Играйте на улице!  

- **Sie:**  
  - „Sprechen Sie langsamer, bitte!“ — Говорите медленнее, пожалуйста!  
  - „Folgen Sie mir!“ — Следуйте за мной!  

---

Императив — очень полезен для повседневного общения, инструкций и команд. Рекомендуется практиковать все три формы: **du, ihr, Sie**.
  `,
      },

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
            german: "Es ist __ 8 Uhr.",
            russian: "Сейчас только 8 часов.",
            distractors: ["erst", "einmal", "halb"],
          },
          {
            german: "Kannst du bitte das Licht __?",
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
          { german: "der Computer", russian: "компьютер", content: "Computer" },
          { german: "die Stunde", russian: "час, урок", content: "Stunde" },
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
            german: "Wir __ morgen.",
            russian: "Мы поговорим по телефону завтра.",
            distractors: ["telefonieren", "essen", "schreiben"],
          },
          {
            german: "Mit __ wohnst du?",
            russian: "С кем ты живёшь?",
            distractors: ["mit", "bei", "für"],
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
          { german: "der Kunde", russian: "клиент", content: "Kunde" },
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
            german: "Meine Freunde sind immer __.",
            russian: "Мои друзья всегда весёлые.",
            distractors: ["lustig", "ruhig", "traurig"],
          },
          {
            german: "Erzählen Sie bitte über Ihre __.",
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
            content: "Geschichte",
          },
          { german: "die Arbeit", russian: "работа", content: "Arbeit" },
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
