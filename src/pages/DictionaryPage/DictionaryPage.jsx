import { useState } from "react";
import { dictionary } from "./dictionaryData";

function DictionaryPage() {
  const [search, setSearch] = useState("");

  // Фильтруем слова по поиску
  const filteredWords = dictionary.filter(
    (word) =>
      word.german.toLowerCase().includes(search.toLowerCase()) ||
      word.russian.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800">
        Немецко-Русский словарь
      </h1>

      <input
        type="text"
        placeholder="Поиск слова..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <ul className="space-y-4">
        {filteredWords.map((word) => (
          <li
            key={word.id}
            className="flex justify-between p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition"
          >
            <span className="font-semibold text-blue-600">{word.german}</span>
            <span className="text-gray-800">{word.russian}</span>
          </li>
        ))}
        {filteredWords.length === 0 && (
          <li className="text-center text-gray-500">Слова не найдены</li>
        )}
      </ul>
    </div>
  );
}

export default DictionaryPage;
