export const lesson5 = {
  id: 5,
  title: "Lektion 4: Повседневная жизнь и вещи",
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
          { german: "dann", russian: "потом" },
          { german: "allein", russian: "один, одинокий" },
          { german: "das Cafe, die Cafes", russian: "кафе" },
          { german: "trinken", russian: "пить" },
          { german: "der Kaffee", russian: "кофе" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich wohne allein in Bischkek.",
            russian: "Я живу один в Бишкеке.",
            distractors: [
              "Ich wohne mit Freunden.",
              "Ich wohne in einem Cafe.",
            ],
          },
          {
            german: "Trinkst du Kaffee?",
            russian: "Ты пьешь кофе?",
            distractors: ["Trinkst du Tee?", "Trinkst du Wasser?"],
          },
          {
            german: "Wir möchten in Deutschland arbeiten.",
            russian: "Мы хотим работать в Германии.",
            distractors: [
              "Wir mögen in Deutschland arbeiten.",
              "Wir tun in Deutschland arbeiten.",
            ],
          },
          {
            german: "Was nimmst du?",
            russian: "Что ты берешь?",
            distractors: ["Was möchtest du?", "Was machst du?"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich wohne __ in Bischkek.",
            russian: "Я живу один в Бишкеке.",
            content: "allein",
            distractors: ["mit Freunden", "im Cafe", "zu Hause"],
          },
          {
            german: "Wir __ in Deutschland arbeiten.",
            russian: "Мы хотим работать в Германии.",
            content: "möchten",
            distractors: ["mögen", "tun", "wissen"],
          },
        ],
      },
    },
    level2: {
      title: "Уровень 2",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "auch", russian: "тоже, также" },
          { german: "der Kuchen, die Kuchen", russian: "пирог, пироги" },
          { german: "lecker", russian: "вкусный" },
          { german: "danke", russian: "спасибо" },
          { german: "formell", russian: "официальный" },
          { german: "informell", russian: "неофициальный" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich spiele auch Fußball.",
            russian: "Я тоже играю футбол.",
            distractors: [
              "Ich spiele nicht Fußball.",
              "Ich spiele allein Fußball.",
            ],
          },
          {
            german: "Meine Mutter kocht lecker.",
            russian: "Моя мама вкусно готовит.",
            distractors: [
              "Meine Mutter kocht schlecht.",
              "Meine Mutter kocht Kuchen.",
            ],
          },
          {
            german: "Danke für deine Hilfe.",
            russian: "Спасибо за твою помощь.",
            distractors: ["Danke für das Buch.", "Danke für den Kuchen."],
          },
          {
            german: "Möchtest du Wasser oder Kaffee trinken?",
            russian: "Хочешь воду или кофе?",
            distractors: [
              "Möchtest du Tee oder Kaffee trinken?",
              "Möchtest du Kuchen oder Tee?",
            ],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich spiele __ Fußball.",
            russian: "Я тоже играю футбол.",
            content: "auch",
            distractors: ["nicht", "allein", "nur"],
          },
          {
            german: "Meine Mutter kocht __.",
            russian: "Моя мама вкусно готовит.",
            content: "lecker",
            distractors: ["schlecht", "gut", "alt"],
          },
        ],
      },
    },
    level3: {
      title: "Уровень 3",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "im Internet surfen", russian: "сидеть в интернете" },
          { german: "ein bisschen", russian: "немного" },
          { german: "machen", russian: "делать" },
          { german: "schreiben", russian: "писать" },
          { german: "gerade", russian: "как раз, сейчас" },
          { german: "die E-Mail", russian: "электронная почта" },
          { german: "lesen", russian: "читать" },
          { german: "bedeuten", russian: "значить, означать" },
          { german: "herein", russian: "внутрь" },
          { german: "unser", russian: "наш" },
          { german: "das Kind, die Kinder", russian: "ребенок, дети" },
          { german: "etwas", russian: "что-нибудь" },
          { german: "alt", russian: "старый" },
          { german: "klein", russian: "маленький" },
          { german: "bequem", russian: "удобный" },
          { german: "mein", russian: "мой" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich schreibe eine E-Mail.",
            russian: "Я пишу электронное письмо.",
            distractors: ["Ich lese eine E-Mail.", "Ich trinke eine E-Mail."],
          },
          {
            german: "Ich esse gerade.",
            russian: "Я сейчас ем.",
            distractors: ["Ich esse morgen.", "Ich esse alt."],
          },
          {
            german: "Darf ich herein?",
            russian: "Можно войти?",
            distractors: ["Darf ich gehen?", "Darf ich trinken?"],
          },
          {
            german: "Die Kinder spielen im Garten.",
            russian: "Дети играют в саду.",
            distractors: [
              "Die Kinder lesen im Garten.",
              "Die Kinder trinken im Garten.",
            ],
          },
          {
            german: "Das ist mein Buch.",
            russian: "Это моя книга.",
            distractors: ["Das ist dein Buch.", "Das ist unser Buch."],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich schreibe eine __.",
            russian: "Я пишу электронное письмо.",
            content: "E-Mail",
            distractors: ["Buch", "Brief", "Kuchen"],
          },
          {
            german: "Das ist __ Buch.",
            russian: "Это моя книга.",
            content: "mein",
            distractors: ["unser", "dein", "ihr"],
          },
        ],
      },
    },
    level4: {
      title: "Уровень 4 Über mich und meine Familie",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "heißen", russian: "зваться, называться" },
          { german: "studieren", russian: "учиться (в ВУЗе)" },
          { german: "kostenlos", russian: "бесплатно, безвозмездно" },
          { german: "weil", russian: "потому что" },
          {
            german: "die Möglichkeit, -en",
            russian: "возможность, вариант, шанс",
          },
          {
            german: "das Fachbereich",
            russian: "специальность, область науки, факультет",
          },
          { german: "der Reiseleiter", russian: "экскурсовод, гид" },
          { german: "die Kindheit", russian: "детство" },
          { german: "besonders", russian: "особенно" },
          { german: "das Gebiet", russian: "область, сфера, район" },
          { german: "wegen", russian: "из-за" },
          { german: "bestehen aus", russian: "состоять из" },
          { german: "unterrichten", russian: "преподавать, обучать" },
          { german: "aufhören", russian: "прекращать" },
          { german: "kümmern", russian: "заботиться" },
          { german: "die Krankenschwester", russian: "медсестра" },
          { german: "besuchen", russian: "посещать, навещать" },
          {
            german: "das Studentenwohnheim",
            russian: "студенческое общежитие",
          },
          { german: "lebendig", russian: "живой, оживлённый" },
          { german: "gemeinsam", russian: "общий, совместный" },
          {
            german: "Das macht viel Spaß",
            russian: "Это доставляет много удовольствия",
          },
          { german: "enden", russian: "заканчиваться" },
          { german: "auf Deutsch sprechen", russian: "говорить на немецком" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Ich heiße Anna.",
            russian: "Меня зовут Анна.",
            distractors: ["Ich studiere Anna.", "Ich kostenlos Anna."],
          },
          {
            german: "Ich studiere im Fachbereich Informatik.",
            russian: "Я учусь на факультете информатики.",
            distractors: [
              "Ich heiße im Fachbereich Informatik.",
              "Ich besuche im Fachbereich Informatik.",
            ],
          },
          {
            german: "Die Eintrittskarten sind kostenlos.",
            russian: "Билеты бесплатные.",
            distractors: [
              "Die Eintrittskarten sind teuer.",
              "Die Eintrittskarten sind besonders.",
            ],
          },
          {
            german: "Ich gehe nicht, weil ich krank bin.",
            russian: "Я не иду, потому что болею.",
            distractors: [
              "Ich gehe, weil ich gesund bin.",
              "Ich studiere, weil ich krank bin.",
            ],
          },
          {
            german: "Der Kurs besteht aus 20 Studenten.",
            russian: "Курс состоит из 20 студентов.",
            distractors: [
              "Der Kurs besucht 20 Studenten.",
              "Der Kurs endet aus 20 Studenten.",
            ],
          },
          {
            german: "Wir sprechen auf Deutsch.",
            russian: "Мы говорим на немецком.",
            distractors: [
              "Wir sprechen auf Englisch.",
              "Wir schreiben auf Deutsch.",
            ],
          },
          {
            german: "Das macht viel Spaß.",
            russian: "Это доставляет много удовольствия.",
            distractors: ["Das macht keinen Spaß.", "Das macht traurig."],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Die Klasse __ aus 20 Studenten.",
            russian: "Класс состоит из 20 студентов.",
            content: "besteht",
            distractors: ["unterrichtet", "besucht", "endet"],
          },
          {
            german: "Ich __ Anna.",
            russian: "Меня зовут Анна.",
            content: "heiße",
            distractors: ["studiere", "besuche", "kümmer"],
          },
          {
            german: "Wir __ auf Deutsch.",
            russian: "Мы говорим на немецком.",
            content: "sprechen",
            distractors: ["schreiben", "lesen", "kümmern"],
          },
          {
            german: "Das ist __.",
            russian: "Это доставляет много удовольствия.",
            content: "Das macht viel Spaß",
            distractors: ["besonders", "lebendig", "kostenlos"],
          },
        ],
      },
    },
  },

  audio: {
    title: "Аудирование",
    src: "/audio/lesson5.mp3",
  },
};
