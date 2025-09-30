import { useState } from "react";
import { dictionary } from "./dictionaryData";

function DictionaryPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("words"); // слова, favorite, review, settings
  const [favorites, setFavorites] = useState([]);

  // Фильтруем слова по поиску
  const filteredWords = dictionary.filter(
    (word) =>
      word.german.toLowerCase().includes(search.toLowerCase()) ||
      word.russian.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const renderWords = (words) => (
    <ul className="space-y-4">
      {words.map((word) => (
        <li
          key={word.id}
          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition"
        >
          <div>
            <span className="font-semibold text-blue-600">{word.german}</span> -{" "}
            <span className="text-gray-800">{word.russian}</span>
          </div>
          <button
            onClick={() => toggleFavorite(word.id)}
            className={`ml-4 text-xl ${
              favorites.includes(word.id) ? "text-yellow-400" : "text-gray-400"
            }`}
          >
            ★
          </button>
        </li>
      ))}
      {words.length === 0 && (
        <li className="text-center text-gray-500">Слова не найдены</li>
      )}
    </ul>
  );

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Немецко-Русский словарь
      </h1>

      {/* Вкладки */}
      <div className="flex justify-around mb-4 border-b border-gray-200">
        {["words", "favorite", "review", "settings"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-3 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
          >
            {tab === "words" && "Слова"}
            {tab === "favorite" && "Избранное"}
            {tab === "review" && "На повторение"}
            {tab === "settings" && "Настройки"}
          </button>
        ))}
      </div>

      {/* Контент */}
      {activeTab === "words" && (
        <>
          <input
            type="text"
            placeholder="Поиск слова..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {renderWords(filteredWords)}
        </>
      )}

      {activeTab === "favorite" &&
        renderWords(dictionary.filter((w) => favorites.includes(w.id)))}

      {activeTab === "review" && (
        <div className="text-center text-gray-500 mt-8">
          Здесь можно добавить слова для повторения (пока пусто)
        </div>
      )}

      {activeTab === "settings" && (
        <div className="space-y-4 text-gray-700 mt-4">
          <div>
            Настройка темы: <button className="text-blue-500">Сменить</button>
          </div>
          <div>
            Язык интерфейса:{" "}
            <button className="text-blue-500">Русский/Немецкий</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DictionaryPage;
