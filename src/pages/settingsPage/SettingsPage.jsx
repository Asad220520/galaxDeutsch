import { useState } from "react";

const verbsPart2 = [
  {
    infinitiv: "anfangen",
    praeteritum: "fing an",
    perfekt: "hat angefangen",
    translation: "начинать",
    exampleDE: "Der Kurs hat um 9 Uhr angefangen.",
    exampleRU: "Курс начался в 9 часов.",
  },
  {
    infinitiv: "aussehen",
    praeteritum: "sah aus",
    perfekt: "hat ausgesehen",
    translation: "выглядеть",
    exampleDE: "Du hast müde ausgesehen.",
    exampleRU: "Ты выглядел усталым.",
  },
  {
    infinitiv: "backen",
    praeteritum: "buk/backte",
    perfekt: "hat gebacken",
    translation: "печь",
    exampleDE: "Sie hat einen Kuchen gebacken.",
    exampleRU: "Она испекла торт.",
  },
  {
    infinitiv: "beginnen",
    praeteritum: "begann",
    perfekt: "hat begonnen",
    translation: "начинать",
    exampleDE: "Das Spiel begann um 18 Uhr.",
    exampleRU: "Игра началась в 18 часов.",
  },
  {
    infinitiv: "bekommen",
    praeteritum: "bekam",
    perfekt: "hat bekommen",
    translation: "получать",
    exampleDE: "Ich habe ein Geschenk bekommen.",
    exampleRU: "Я получил подарок.",
  },
  {
    infinitiv: "einladen",
    praeteritum: "lud ein",
    perfekt: "hat eingeladen",
    translation: "приглашать",
    exampleDE: "Wir haben unsere Freunde eingeladen.",
    exampleRU: "Мы пригласили наших друзей.",
  },
  {
    infinitiv: "fahren",
    praeteritum: "fuhr",
    perfekt: "ist gefahren",
    translation: "ехать, водить",
    exampleDE: "Wir sind nach Berlin gefahren.",
    exampleRU: "Мы поехали в Берлин.",
  },
  {
    infinitiv: "finden",
    praeteritum: "fand",
    perfekt: "hat gefunden",
    translation: "находить",
    exampleDE: "Ich habe meinen Schlüssel gefunden.",
    exampleRU: "Я нашёл свои ключи.",
  },
  {
    infinitiv: "geben",
    praeteritum: "gab",
    perfekt: "hat gegeben",
    translation: "давать",
    exampleDE: "Er hat mir ein Buch gegeben.",
    exampleRU: "Он дал мне книгу.",
  },
  {
    infinitiv: "gehen",
    praeteritum: "ging",
    perfekt: "ist gegangen",
    translation: "идти",
    exampleDE: "Wir sind zur Schule gegangen.",
    exampleRU: "Мы пошли в школу.",
  },
  {
    infinitiv: "halten",
    praeteritum: "hielt",
    perfekt: "hat gehalten",
    translation: "держать, остановиться",
    exampleDE: "Er hat die Hand festgehalten.",
    exampleRU: "Он крепко держал руку.",
  },
  {
    infinitiv: "helfen",
    praeteritum: "half",
    perfekt: "hat geholfen",
    translation: "помогать",
    exampleDE: "Sie hat mir geholfen.",
    exampleRU: "Она мне помогла.",
  },
  {
    infinitiv: "kennen",
    praeteritum: "kannte",
    perfekt: "hat gekannt",
    translation: "знать (человека/место)",
    exampleDE: "Ich habe ihn gut gekannt.",
    exampleRU: "Я его хорошо знал.",
  },
  {
    infinitiv: "kommen",
    praeteritum: "kam",
    perfekt: "ist gekommen",
    translation: "приходить",
    exampleDE: "Er ist spät gekommen.",
    exampleRU: "Он пришёл поздно.",
  },
  {
    infinitiv: "laufen",
    praeteritum: "lief",
    perfekt: "ist gelaufen",
    translation: "бегать, идти пешком",
    exampleDE: "Wir sind schnell gelaufen.",
    exampleRU: "Мы быстро шли.",
  },
];
const verbsPart6 = [
  {
    infinitiv: "spazieren gehen",
    praeteritum: "ging spazieren",
    perfekt: "ist spazieren gegangen",
    translation: "гулять (пешком)",
    exampleDE: "Wir gehen jeden Abend spazieren.",
    exampleRU: "Мы каждый вечер гуляем.",
  },
  {
    infinitiv: "springen",
    praeteritum: "sprang",
    perfekt: "ist gesprungen",
    translation: "прыгать",
    exampleDE: "Das Kind sprang über den Zaun.",
    exampleRU: "Ребёнок перепрыгнул через забор.",
  },
  {
    infinitiv: "stattfinden",
    praeteritum: "fand statt",
    perfekt: "hat stattgefunden",
    translation: "состояться, происходить",
    exampleDE: "Das Konzert hat gestern stattgefunden.",
    exampleRU: "Концерт состоялся вчера.",
  },
  {
    infinitiv: "stehen",
    praeteritum: "stand",
    perfekt: "hat gestanden",
    translation: "стоять",
    exampleDE: "Der Tisch steht in der Küche.",
    exampleRU: "Стол стоит на кухне.",
  },
  {
    infinitiv: "tragen",
    praeteritum: "trug",
    perfekt: "hat getragen",
    translation: "носить, нести",
    exampleDE: "Sie hat eine schwere Tasche getragen.",
    exampleRU: "Она несла тяжёлую сумку.",
  },
  {
    infinitiv: "überweisen",
    praeteritum: "überwies",
    perfekt: "hat überwiesen",
    translation: "переводить (деньги)",
    exampleDE: "Ich habe das Geld überwiesen.",
    exampleRU: "Я перевёл деньги.",
  },
  {
    infinitiv: "verbringen",
    praeteritum: "verbrachte",
    perfekt: "hat verbracht",
    translation: "проводить (время)",
    exampleDE: "Wir haben den Sommer am Meer verbracht.",
    exampleRU: "Мы провели лето у моря.",
  },
  {
    infinitiv: "vergleichen",
    praeteritum: "verglich",
    perfekt: "hat verglichen",
    translation: "сравнивать",
    exampleDE: "Er hat die Preise verglichen.",
    exampleRU: "Он сравнил цены.",
  },
  {
    infinitiv: "versprechen",
    praeteritum: "versprach",
    perfekt: "hat versprochen",
    translation: "обещать",
    exampleDE: "Ich habe es dir versprochen.",
    exampleRU: "Я тебе это обещал.",
  },
  {
    infinitiv: "bitten",
    praeteritum: "bat",
    perfekt: "hat gebeten",
    translation: "просить",
    exampleDE: "Sie hat ihn um Hilfe gebeten.",
    exampleRU: "Она попросила у него помощи.",
  },
  {
    infinitiv: "vorschlagen",
    praeteritum: "schlug vor",
    perfekt: "hat vorgeschlagen",
    translation: "предлагать",
    exampleDE: "Ich schlage vor, wir gehen ins Kino.",
    exampleRU: "Предлагаю пойти в кино.",
  },
  {
    infinitiv: "verschieben",
    praeteritum: "verschob",
    perfekt: "hat verschoben",
    translation: "переносить (встречу и т.п.)",
    exampleDE: "Wir müssen den Termin verschieben.",
    exampleRU: "Нам нужно перенести встречу.",
  },
  {
    infinitiv: "zurechtkommen",
    praeteritum: "kam zurecht",
    perfekt: "ist zurechtgekommen",
    translation: "справляться, ладить",
    exampleDE: "Kommst du mit der neuen Arbeit zurecht?",
    exampleRU: "Ты справляешься с новой работой?",
  },
  {
    infinitiv: "verschwinden",
    praeteritum: "verschwand",
    perfekt: "ist verschwunden",
    translation: "исчезать",
    exampleDE: "Meine Schlüssel sind verschwunden!",
    exampleRU: "Мои ключи исчезли!",
  },
  {
    infinitiv: "verzeihen",
    praeteritum: "verzieh",
    perfekt: "hat verziehen",
    translation: "прощать",
    exampleDE: "Verzeih mir, bitte!",
    exampleRU: "Прости меня, пожалуйста!",
  },
];
const allParts = [
  { title: "Часть 2", verbs: verbsPart2 },
  { title: "Часть 6", verbs: verbsPart6 },
];

export default function VerbListMulti() {
  const [currentPartIndex, setCurrentPartIndex] = useState(0); // Начало с первой части
  const [openIndex, setOpenIndex] = useState(null);

  const verbs = allParts[currentPartIndex].verbs;

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-50 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Глаголы на немецком — {allParts[currentPartIndex].title}
      </h1>

      {/* Кнопки переключения частей */}
      <div className="flex justify-center mb-6 flex-wrap gap-2">
        {allParts.map((part, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-lg ${
              currentPartIndex === i ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => {
              setCurrentPartIndex(i);
              setOpenIndex(null);
            }}
          >
            {part.title}
          </button>
        ))}
      </div>

      <ul className="space-y-3">
        {verbs.map((verb, i) => (
          <li key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
            <button
              className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-100"
              onClick={() => toggle(i)}
            >
              <span className="font-semibold text-lg">
                {i + 1}. {verb.infinitiv}
              </span>
              <span>{openIndex === i ? "▲" : "▼"}</span>
            </button>
            {openIndex === i && (
              <div className="p-4 border-t border-gray-200 bg-gray-50 space-y-1">
                <p>
                  <strong>Präteritum:</strong> {verb.praeteritum}
                </p>
                <p>
                  <strong>Perfekt:</strong> {verb.perfekt}
                </p>
                <p>
                  <strong>Перевод:</strong> {verb.translation}
                </p>
                <p>
                  <strong>Пример DE:</strong> {verb.exampleDE}
                </p>
                <p>
                  <strong>Пример RU:</strong> {verb.exampleRU}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
