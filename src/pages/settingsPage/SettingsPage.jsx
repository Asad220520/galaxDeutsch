import React, { useState } from "react";

const data = {
  Nominativ: {
    Maskulin: [
      {
        word: "der",
        sentence: "Der Mann arbeitet.",
        translation: "Мужчина работает.",
        note: "Определённый артикль — 'этот конкретный'.",
      },
      {
        word: "ein",
        sentence: "Ein Hund läuft.",
        translation: "Бежит (какой-то) пёс.",
        note: "Неопределённый артикль — 'один из многих'.",
      },
      {
        word: "kein",
        sentence: "Kein Lehrer fehlt.",
        translation: "Ни один учитель не отсутствует.",
        note: "Отрицание с 'kein'.",
      },
      {
        word: "mein",
        sentence: "Mein Freund kommt.",
        translation: "Мой друг приходит.",
        note: "Притяжательное местоимение — мой.",
      },
      {
        word: "dein",
        sentence: "Dein Bruder ist nett.",
        translation: "Твой брат милый.",
        note: "Притяжательное местоимение — твой.",
      },
      {
        word: "sein",
        sentence: "Sein Vater ist Arzt.",
        translation: "Его отец врач.",
        note: "Притяжательное местоимение — его.",
      },
      {
        word: "ihr",
        sentence: "Ihr Bruder ist groß.",
        translation: "Её брат высокий.",
        note: "Притяжательное местоимение — её.",
      },
      {
        word: "unser",
        sentence: "Unser Freund wohnt hier.",
        translation: "Наш друг живёт здесь.",
        note: "Притяжательное местоимение — наш.",
      },
      {
        word: "euer",
        sentence: "Euer Onkel ist lustig.",
        translation: "Ваш дядя смешной.",
        note: "Притяжательное местоимение множественного числа — ваш.",
      },
      {
        word: "Ihr",
        sentence: "Ihr Chef ist streng.",
        translation: "Ваш начальник строгий.",
        note: "Вежливая форма — Ihr.",
      },
      {
        word: "dieser",
        sentence: "Dieser Mann ist stark.",
        translation: "Этот мужчина сильный.",
        note: "Указательное местоимение — 'этот'.",
      },
      {
        word: "welcher",
        sentence: "Welcher Mann ist das?",
        translation: "Который это мужчина?",
        note: "Вопросительное местоимение — 'который'.",
      },
    ],
    Feminin: [
      {
        word: "die",
        sentence: "Die Frau lacht.",
        translation: "Женщина смеётся.",
        note: "Определённый артикль женского рода.",
      },
      {
        word: "eine",
        sentence: "Eine Katze schläft.",
        translation: "Кошка спит.",
        note: "Неопределённый артикль женского рода.",
      },
      {
        word: "keine",
        sentence: "Keine Blume ist gelb.",
        translation: "Нет ни одного жёлтого цветка.",
        note: "Отрицательный артикль 'kein'.",
      },
      {
        word: "meine",
        sentence: "Meine Schwester liest ein Buch.",
        translation: "Моя сестра читает книгу.",
        note: "Притяжательное местоимение — мой/моя.",
      },
      {
        word: "deine",
        sentence: "Deine Freundin kommt später.",
        translation: "Твоя подруга придёт позже.",
        note: "Притяжательное местоимение — твой/твоя.",
      },
      {
        word: "ihre",
        sentence: "Ihre Mutter ist Lehrerin.",
        translation: "Её мать — учительница.",
        note: "Притяжательное местоимение — её.",
      },
      {
        word: "unsere",
        sentence: "Unsere Tante wohnt in Berlin.",
        translation: "Наша тётя живёт в Берлине.",
        note: "Притяжательное местоимение — наш/наша.",
      },
      {
        word: "eure",
        sentence: "Eure Lehrerin ist nett.",
        translation: "Ваша учительница милая.",
        note: "Притяжательное местоимение множественного числа — ваш/ваша.",
      },
      {
        word: "Ihre",
        sentence: "Ihre Chefin ist streng.",
        translation: "Ваша (вежливая форма) начальница строгая.",
        note: "Вежливая форма 'Ihr'.",
      },
      {
        word: "diese",
        sentence: "Diese Frau ist freundlich.",
        translation: "Эта женщина дружелюбная.",
        note: "Указательное местоимение — эта.",
      },
      {
        word: "welche",
        sentence: "Welche Frau ist Lehrerin?",
        translation: "Какая женщина — учительница?",
        note: "Вопросительное местоимение — какая.",
      },
    ],
    Neutrum: [
      {
        word: "das",
        sentence: "Das Kind spielt.",
        translation: "Ребёнок играет.",
        note: "Определённый артикль среднего рода.",
      },
      {
        word: "ein",
        sentence: "Ein Haus steht da.",
        translation: "Там стоит дом.",
        note: "Неопределённый артикль среднего рода.",
      },
      {
        word: "kein",
        sentence: "Kein Auto ist rot.",
        translation: "Ни одна машина не красная.",
        note: "Отрицательный артикль.",
      },
      {
        word: "mein",
        sentence: "Mein Auto ist neu.",
        translation: "Моя машина новая.",
        note: "Притяжательное местоимение — мой.",
      },
      {
        word: "dieses",
        sentence: "Dieses Kind ist klug.",
        translation: "Этот ребёнок умный.",
        note: "Указательное местоимение — это.",
      },
      {
        word: "welches",
        sentence: "Welches Buch liest du?",
        translation: "Какую книгу ты читаешь?",
        note: "Вопросительное местоимение — какое.",
      },
    ],
    Plural: [
      {
        word: "die",
        sentence: "Die Kinder schlafen.",
        translation: "Дети спят.",
        note: "Определённый артикль во мн. числе.",
      },
      {
        word: "keine",
        sentence: "Keine Autos fahren.",
        translation: "Машины не едут.",
        note: "Отрицание с 'kein' во множественном числе.",
      },
      {
        word: "meine",
        sentence: "Meine Freunde sind hier.",
        translation: "Мои друзья здесь.",
        note: "Притяжательное местоимение — мой/моя.",
      },
      {
        word: "diese",
        sentence: "Diese Häuser sind alt.",
        translation: "Эти дома старые.",
        note: "Указательное местоимение — эти.",
      },
      {
        word: "welche",
        sentence: "Welche Bücher sind interessant?",
        translation: "Какие книги интересные?",
        note: "Вопросительное местоимение — какие.",
      },
    ],
  },

  Akkusativ: {
    Maskulin: [
      {
        word: "den",
        sentence: "Ich sehe den Mann.",
        translation: "Я вижу мужчину.",
        note: "Определённый артикль в винительном падеже.",
      },
      {
        word: "einen",
        sentence: "Ich habe einen Hund.",
        translation: "У меня есть собака.",
        note: "Неопределённый артикль.",
      },
      {
        word: "keinen",
        sentence: "Ich sehe keinen Lehrer.",
        translation: "Я не вижу учителя.",
        note: "Отрицание с 'kein'.",
      },
      {
        word: "meinen",
        sentence: "Ich sehe meinen Freund.",
        translation: "Я вижу своего друга.",
        note: "Притяжательное местоимение — мой.",
      },
      {
        word: "deinen",
        sentence: "Ich sehe deinen Bruder.",
        translation: "Я вижу твоего брата.",
        note: "Притяжательное местоимение — твой.",
      },
      {
        word: "seinen",
        sentence: "Ich sehe seinen Vater.",
        translation: "Я вижу его отца.",
        note: "Притяжательное местоимение — его.",
      },
      {
        word: "ihren",
        sentence: "Ich sehe ihren Bruder.",
        translation: "Я вижу её брата.",
        note: "Притяжательное местоимение — её.",
      },
      {
        word: "unseren",
        sentence: "Ich sehe unseren Freund.",
        translation: "Я вижу нашего друга.",
        note: "Притяжательное местоимение — наш.",
      },
      {
        word: "euren",
        sentence: "Ich sehe euren Onkel.",
        translation: "Я вижу вашего дядю.",
        note: "Притяжательное множественное число — ваш.",
      },
      {
        word: "Ihren",
        sentence: "Ich sehe Ihren Chef.",
        translation: "Я вижу Вашего начальника.",
        note: "Вежливая форма 'Ihr'.",
      },
      {
        word: "diesen",
        sentence: "Ich sehe diesen Mann.",
        translation: "Я вижу этого мужчину.",
        note: "Указательное местоимение — этот.",
      },
      {
        word: "welchen",
        sentence: "Welchen Mann siehst du?",
        translation: "Какого мужчину ты видишь?",
        note: "Вопросительное местоимение — какой.",
      },
    ],
    Feminin: [
      {
        word: "die",
        sentence: "Ich höre die Frau.",
        translation: "Я слышу женщину.",
        note: "Форма совпадает с Nominativ.",
      },
      {
        word: "eine",
        sentence: "Ich sehe eine Blume.",
        translation: "Я вижу цветок.",
        note: "Неопределённый артикль.",
      },
      {
        word: "keine",
        sentence: "Ich sehe keine Blume.",
        translation: "Я не вижу цветка.",
        note: "Отрицательный артикль.",
      },
      {
        word: "meine",
        sentence: "Ich sehe meine Schwester.",
        translation: "Я вижу свою сестру.",
        note: "Притяжательное местоимение — мой/моя.",
      },
      {
        word: "deine",
        sentence: "Ich sehe deine Freundin.",
        translation: "Я вижу твою подругу.",
        note: "Притяжательное — твой/твоя.",
      },
      {
        word: "ihre",
        sentence: "Ich sehe ihre Mutter.",
        translation: "Я вижу её мать.",
        note: "Притяжательное — её.",
      },
      {
        word: "unsere",
        sentence: "Ich sehe unsere Tante.",
        translation: "Я вижу нашу тётю.",
        note: "Притяжательное — наш/наша.",
      },
      {
        word: "eure",
        sentence: "Ich sehe eure Lehrerin.",
        translation: "Я вижу вашу учительницу.",
        note: "Притяжательное множественное число — ваш/ваша.",
      },
      {
        word: "Ihre",
        sentence: "Ich sehe Ihre Chefin.",
        translation: "Я вижу Вашу начальницу.",
        note: "Вежливая форма 'Ihr'.",
      },
      {
        word: "diese",
        sentence: "Ich sehe diese Frau.",
        translation: "Я вижу эту женщину.",
        note: "Указательное местоимение — эту.",
      },
      {
        word: "welche",
        sentence: "Welche Frau siehst du?",
        translation: "Какую женщину ты видишь?",
        note: "Вопросительное местоимение — какую.",
      },
    ],
    Neutrum: [
      {
        word: "das",
        sentence: "Ich habe das Buch.",
        translation: "У меня есть книга.",
        note: "Форма совпадает с Nominativ.",
      },
      {
        word: "ein",
        sentence: "Ich sehe ein Kind.",
        translation: "Я вижу ребёнка.",
        note: "Неопределённый артикль.",
      },
      {
        word: "kein",
        sentence: "Ich sehe kein Auto.",
        translation: "Я не вижу машину.",
        note: "Отрицание с 'kein'.",
      },
      {
        word: "mein",
        sentence: "Ich sehe mein Auto.",
        translation: "Я вижу мою машину.",
        note: "Притяжательное — мой.",
      },
      {
        word: "dieses",
        sentence: "Ich sehe dieses Kind.",
        translation: "Я вижу этого ребёнка.",
        note: "Указательное местоимение — этот.",
      },
      {
        word: "welches",
        sentence: "Welches Buch siehst du?",
        translation: "Какую книгу ты видишь?",
        note: "Вопросительное местоимение — какое.",
      },
    ],
    Plural: [
      {
        word: "die",
        sentence: "Ich kenne die Leute.",
        translation: "Я знаю людей.",
        note: "Форма совпадает с Nominativ Plural.",
      },
      {
        word: "keine",
        sentence: "Ich sehe keine Kinder.",
        translation: "Я не вижу детей.",
        note: "Отрицание во множественном числе.",
      },
      {
        word: "meine",
        sentence: "Ich sehe meine Freunde.",
        translation: "Я вижу своих друзей.",
        note: "Притяжательное множественное — мои.",
      },
      {
        word: "diese",
        sentence: "Ich sehe diese Häuser.",
        translation: "Я вижу эти дома.",
        note: "Указательное местоимение — эти.",
      },
      {
        word: "welche",
        sentence: "Welche Bücher siehst du?",
        translation: "Какие книги ты видишь?",
        note: "Вопросительное местоимение — какие.",
      },
    ],
  },

  Dativ: {
    Maskulin: [
      {
        word: "dem",
        sentence: "Ich helfe dem Mann.",
        translation: "Я помогаю мужчине.",
        note: "Дательный падеж — 'кому?'.",
      },
      {
        word: "einem",
        sentence: "Ich gebe einem Freund ein Buch.",
        translation: "Я даю книгу одному другу.",
        note: "Неопределённый артикль.",
      },
      {
        word: "keinem",
        sentence: "Ich helfe keinem Lehrer.",
        translation: "Я никому из учителей не помогаю.",
        note: "Отрицание.",
      },
      {
        word: "meinem",
        sentence: "Ich helfe meinem Freund.",
        translation: "Я помогаю своему другу.",
        note: "Притяжательное — мой.",
      },
      {
        word: "deinem",
        sentence: "Ich helfe deinem Bruder.",
        translation: "Я помогаю твоему брату.",
        note: "Притяжательное — твой.",
      },
      {
        word: "seinem",
        sentence: "Ich helfe seinem Vater.",
        translation: "Я помогаю его отцу.",
        note: "Притяжательное — его.",
      },
      {
        word: "ihrem",
        sentence: "Ich helfe ihrer Mutter.",
        translation: "Я помогаю её матери.",
        note: "Притяжательное — её.",
      },
      {
        word: "unserem",
        sentence: "Ich zeige unserem Freund den Weg.",
        translation: "Я показываю нашему другу путь.",
        note: "Притяжательное — наш.",
      },
      {
        word: "eurem",
        sentence: "Ich helfe eurem Onkel.",
        translation: "Я помогаю вашему дяде.",
        note: "Притяжательное множественное — ваш.",
      },
      {
        word: "Ihrem",
        sentence: "Ich helfe Ihrem Chef.",
        translation: "Я помогаю Вашему начальнику.",
        note: "Вежливая форма.",
      },
      {
        word: "diesem",
        sentence: "Ich helfe diesem Mann.",
        translation: "Я помогаю этому мужчине.",
        note: "Указательное местоимение — этот.",
      },
      {
        word: "welchem",
        sentence: "Ich helfe welchem Mann?",
        translation: "Какому мужчине я помогаю?",
        note: "Вопросительное местоимение — какому.",
      },
    ],
    Feminin: [
      {
        word: "der",
        sentence: "Ich danke der Frau.",
        translation: "Я благодарю женщину.",
        note: "Дательный падеж — женский род.",
      },
      {
        word: "einer",
        sentence: "Ich gebe einer Freundin ein Buch.",
        translation: "Я даю книге одной подруге.",
        note: "Неопределённый артикль.",
      },
      {
        word: "keiner",
        sentence: "Ich helfe keiner Frau.",
        translation: "Я никому из женщин не помогаю.",
        note: "Отрицание.",
      },
      {
        word: "meiner",
        sentence: "Ich helfe meiner Schwester.",
        translation: "Я помогаю своей сестре.",
        note: "Притяжательное — мой/моя.",
      },
      {
        word: "deiner",
        sentence: "Ich helfe deiner Freundin.",
        translation: "Я помогаю твоей подруге.",
        note: "Притяжательное — твой/твоя.",
      },
      {
        word: "ihrer",
        sentence: "Ich helfe ihrer Mutter.",
        translation: "Я помогаю её матери.",
        note: "Притяжательное — её.",
      },
      {
        word: "unserer",
        sentence: "Ich zeige unserer Tante den Weg.",
        translation: "Я показываю нашей тёте путь.",
        note: "Притяжательное — наш/наша.",
      },
      {
        word: "eurer",
        sentence: "Ich helfe eurer Lehrerin.",
        translation: "Я помогаю вашей учительнице.",
        note: "Притяжательное множественное — ваш/ваша.",
      },
      {
        word: "Ihrer",
        sentence: "Ich helfe Ihrer Chefin.",
        translation: "Я помогаю Вашей начальнице.",
        note: "Вежливая форма.",
      },
      {
        word: "dieser",
        sentence: "Ich helfe dieser Frau.",
        translation: "Я помогаю этой женщине.",
        note: "Указательное местоимение — эта.",
      },
      {
        word: "welcher",
        sentence: "Ich helfe welcher Frau?",
        translation: "К какой женщине я помогаю?",
        note: "Вопросительное местоимение — какой.",
      },
    ],
    Neutrum: [
      {
        word: "dem",
        sentence: "Ich gebe dem Kind Wasser.",
        translation: "Я даю ребёнку воду.",
        note: "Средний род в Dativ.",
      },
      {
        word: "einem",
        sentence: "Ich helfe einem Kind.",
        translation: "Я помогаю одному ребёнку.",
        note: "Неопределённый артикль.",
      },
      {
        word: "keinem",
        sentence: "Ich helfe keinem Kind.",
        translation: "Я никому из детей не помогаю.",
        note: "Отрицание.",
      },
      {
        word: "meinem",
        sentence: "Ich helfe meinem Kind.",
        translation: "Я помогаю своему ребёнку.",
        note: "Притяжательное — мой.",
      },
      {
        word: "diesem",
        sentence: "Ich helfe diesem Kind.",
        translation: "Я помогаю этому ребёнку.",
        note: "Указательное местоимение — этот.",
      },
      {
        word: "welchem",
        sentence: "Ich helfe welchem Kind?",
        translation: "Какому ребёнку я помогаю?",
        note: "Вопросительное местоимение — какому.",
      },
    ],
    Plural: [
      {
        word: "den",
        sentence: "Ich zeige den Kindern den Weg.",
        translation: "Я показываю детям путь.",
        note: "Во множественном числе добавляется '-n' к существительным.",
      },
      {
        word: "keinen",
        sentence: "Ich helfe keinen Kindern.",
        translation: "Я не помогаю детям.",
        note: "Отрицание во множественном числе.",
      },
      {
        word: "meinen",
        sentence: "Ich helfe meinen Freunden.",
        translation: "Я помогаю своим друзьям.",
        note: "Притяжательное во множественном числе.",
      },
      {
        word: "diesen",
        sentence: "Ich helfe diesen Kindern.",
        translation: "Я помогаю этим детям.",
        note: "Указательное местоимение — эти.",
      },
      {
        word: "welchen",
        sentence: "Ich helfe welchen Kindern?",
        translation: "Каким детям я помогаю?",
        note: "Вопросительное местоимение — какие.",
      },
    ],
  },
};

export default function GermanArticleTrainer() {
  const [selectedCase, setSelectedCase] = useState("Nominativ");
  const [selectedGender, setSelectedGender] = useState("Maskulin");

  const cases = Object.keys(data);
  const genders = Object.keys(data[selectedCase]);
  const examples = data[selectedCase][selectedGender];

  const caseNames = {
    Nominativ: "Именительный (кто? что?)",
    Akkusativ: "Винительный (кого? что?)",
    Dativ: "Дательный (кому? чему?)",
    Genitiv: "Родительный (чей?)",
  };

  const genderNames = {
    Maskulin: "Мужской род",
    Feminin: "Женский род",
    Neutrum: "Средний род",
    Plural: "Множественное число",
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-bold text-blue-700 mb-3">
        Немецкие артикли и местоимения
      </h2>

      <div className="flex flex-col gap-2 mb-4">
        <select
          value={selectedCase}
          onChange={(e) => setSelectedCase(e.target.value)}
          className="p-2 border rounded-lg"
        >
          {cases.map((c) => (
            <option key={c} value={c}>
              {c} — {caseNames[c]}
            </option>
          ))}
        </select>
        <select
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
          className="p-2 border rounded-lg"
        >
          {genders.map((g) => (
            <option key={g} value={g}>
              {genderNames[g]}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        {examples.map((ex) => (
          <div
            key={ex.word + ex.sentence}
            className="p-3 rounded-xl border border-gray-200 bg-gray-50 text-left"
          >
            <p className="font-bold text-blue-700 text-lg">{ex.word}</p>
            <p className="text-gray-900">{ex.sentence}</p>
            <p className="text-gray-600 text-sm italic">{ex.translation}</p>
            <p className="text-gray-500 text-xs mt-1">{ex.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
