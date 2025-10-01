export const lesson10 = {
  id: 10,
  title: "Урок 11-12: Путешествия и транспорт",
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
          { german: "das Flugzeug", russian: "самолет" },
          { german: "der Zug", russian: "поезд" },
          { german: "das Schiff", russian: "корабль" },
          { german: "das Ticket", russian: "билет" },
          { german: "das Fahrrad", russian: "велосипед" },
          { german: "der Führerschein", russian: "водительские права" },
          { german: "beginnen", russian: "начинать" },
          { german: "absolvieren", russian: "заканчивать" },
          { german: "erwarten", russian: "ожидать" },
          { german: "dauern", russian: "длиться" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Wir fliegen morgen mit dem __ nach Paris.",
            russian: "Мы летим завтра на самолёте в Париж.",
            distractors: ["Flugzeug", "Zug", "Schiff"],
          },
          {
            german: "Wir fahren mit dem __ nach Berlin.",
            russian: "Мы едем в Берлин на поезде.",
            distractors: ["Zug", "Bus", "Auto"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Ich beginne morgen einen neuen __.",
            russian: "Я начинаю новую работу завтра.",
            content: "Job",
            distractors: ["Film", "Test", "Kurs"],
          },
          {
            german: "Er wird im Sommer seine Ausbildung __.",
            russian: "Он завершит своё обучение летом.",
            content: "absolvieren",
            distractors: ["beginnen", "lernen", "machen"],
          },
        ],
      },
    },
    level2: {
      title: "Уровень 2",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "aufhören", russian: "прекращать" },
          { german: "kommen", russian: "приходить" },
          { german: "bleiben", russian: "оставаться" },
          { german: "früher", russian: "раньше" },
          { german: "ab und zu", russian: "время от времени, иногда" },
          { german: "reisen", russian: "путешествовать" },
          { german: "schwimmen", russian: "плавать" },
          { german: "laufen", russian: "бегать" },
          { german: "umziehen", russian: "переезжать" },
          { german: "fliegen", russian: "летать" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Wir müssen jetzt __, sonst verpassen wir Bus.",
            russian:
              "Нам нужно сейчас прекратить, иначе мы опоздаем на автобус.",
            distractors: ["aufhören", "beginnen", "laufen"],
          },
          {
            german: "Ich möchte gerne nach Japan __.",
            russian: "Я хотел бы поехать в Японию.",
            distractors: ["reisen", "laufen", "fliegen"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Schwimmst du gern im Meer oder im __?",
            russian: "Ты любишь плавать в море или в бассейне?",
            content: "Pool",
            distractors: ["See", "Fluss", "Schiff"],
          },
          {
            german: "Ich laufe jeden Morgen im __.",
            russian: "Я бегаю каждое утро в парке.",
            content: "Park",
            distractors: ["Haus", "Zimmer", "Garten"],
          },
        ],
      },
    },
    level3: {
      title: "Уровень 3",
      matching: {
        title: "Мэтчинг",
        items: [
          { german: "helfen", russian: "помогать" },
          { german: "spazieren gehen", russian: "гулять" },
          { german: "die Verbindung", russian: "связь" },
          { german: "das Fahrzeug", russian: "транспортное средство" },
          { german: "die U-Bahn", russian: "метро" },
          { german: "die Richtung", russian: "направление" },
          { german: "liegen", russian: "лежать, находиться" },
          { german: "danach", russian: "затем, потом" },
          { german: "der Flug", russian: "полёт, рейс" },
          { german: "jetzt", russian: "сейчас" },
        ],
      },
      puzzle: {
        title: "Пазл",
        items: [
          {
            german: "Kannst du mir die __ zeigen?",
            russian: "Ты можешь показать мне направление?",
            distractors: ["Richtung", "Verbindung", "Fahrkarte"],
          },
          {
            german: "Berlin __ in Deutschland.",
            russian: "Берлин находится в Германии.",
            distractors: ["liegt", "bleibt", "kommt"],
          },
        ],
      },
      text: {
        title: "Заполните пропуск",
        items: [
          {
            german: "Das __ kostet 300 Euro.",
            russian: "Билет на самолет стоит 300 евро.",
            content: "Flugticket",
            distractors: ["Ticket", "Fahrkarte", "Bus"],
          },
          {
            german: "Wir gehen ins Kino und __ essen wir Pizza.",
            russian: "Мы идём в кино, а потом поедим пиццу.",
            content: "danach",
            distractors: ["zuerst", "später", "vorher"],
          },
        ],
      },
    },
  },
  audio: {
    title: "Аудирование",
    src: "/audio/lesson9.mp3",
  },
};
