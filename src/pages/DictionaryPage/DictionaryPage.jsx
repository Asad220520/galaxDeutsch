import React, { useState } from "react";
import { allLessons } from "../LessonPage/Lection/allLessons";

const DictionaryPage = () => {
  const [search, setSearch] = useState("");

  // Функция для извлечения слов только из matching
  const getDictionaryItems = (lesson) => {
    const vocab = [];

    Object.values(lesson.levels).forEach((level) => {
      if (level.matching && level.matching.items) {
        level.matching.items.forEach((item) => {
          vocab.push({ german: item.german, russian: item.russian });
        });
      }
    });

    // Убираем дубликаты
    return Array.from(
      new Map(vocab.map((item) => [item.german, item])).values()
    );
  };

  const allVocab = allLessons.flatMap((lesson) => getDictionaryItems(lesson));

  // Фильтрация по поиску
  const filteredVocab = allVocab.filter(
    (item) =>
      item.german.toLowerCase().includes(search.toLowerCase()) ||
      item.russian.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Словарь всех уроков
      </h1>
      <p className="text-center mb-4 text-gray-600">
        Всего слов: {filteredVocab.length}
      </p>

      <div className="mb-4 text-center">
        <input
          type="text"
          placeholder="Поиск по слову или переводу..."
          className="w-full sm:w-2/3 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredVocab.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded bg-gray-50 hover:bg-gray-100 transition flex flex-col"
          >
            <div className="text-gray-500 text-sm mb-1">#{index + 1}</div>
            <div className="text-blue-700 font-medium">{item.german}</div>
            <div className="text-gray-700">{item.russian}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DictionaryPage;
