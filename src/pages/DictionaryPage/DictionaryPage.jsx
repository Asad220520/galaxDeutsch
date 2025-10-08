import React, { useState } from "react";
import { allLessons } from "../LessonPage/Lection/allLessons";

// Подсветка поиска
const highlightMatch = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, index) =>
    regex.test(part) ? (
      <span key={index} className="bg-yellow-200">
        {part}
      </span>
    ) : (
      part
    )
  );
};

// Определяем фон карточки по артиклю
const getCardBg = (text) => {
  const articleRegex = /^(der|die|das)\s+/i;
  const match = text.match(articleRegex);

  if (!match) return "bg-gray-50"; // слова без артикля

  const article = match[1].toLowerCase();
  if (article === "der") return "bg-blue-400";
  if (article === "die") return "bg-red-400";
  if (article === "das") return "bg-green-400";

  return "bg-gray-50";
};

const DictionaryPage = () => {
  const [search, setSearch] = useState("");
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const getDictionaryItems = (lesson) => {
    const vocab = [];

    Object.entries(lesson.levels).forEach(([levelKey, level]) => {
      if (level.matching?.items) {
        level.matching.items.forEach((item) => {
          const examples = [];
          if (level.puzzle?.items) {
            level.puzzle.items.forEach((p) => {
              if (p.german.includes(item.german)) {
                examples.push(p.german + " — " + p.russian);
              }
            });
          }
          if (level.text?.items) {
            level.text.items.forEach((t) => {
              if (t.german.includes(item.german)) {
                examples.push(t.german + " — " + t.russian);
              }
            });
          }

          vocab.push({
            german: item.german,
            russian: item.russian,
            examples,
            lessonTitle: lesson.title,
            levelTitle: level.title,
          });
        });
      }
    });

    return Array.from(
      new Map(vocab.map((item) => [item.german, item])).values()
    );
  };

  const allVocab = allLessons.flatMap((lesson) => getDictionaryItems(lesson));

  const filteredVocab = allVocab
    .filter(
      (item) =>
        (selectedLesson === "all" || item.lessonTitle === selectedLesson) &&
        (selectedLevel === "all" || item.levelTitle === selectedLevel) &&
        (item.german.toLowerCase().includes(search.toLowerCase()) ||
          item.russian.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => a.german.localeCompare(b.german));

  const levelsForLesson =
    selectedLesson === "all"
      ? []
      : Object.values(
          allLessons.find((l) => l.title === selectedLesson).levels
        ).map((l) => ({ title: l.title }));

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Словарь всех уроков
      </h1>
      <p className="text-center mb-4 text-gray-600">
        Всего слов: {filteredVocab.length}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-4">
        <input
          type="text"
          placeholder="Поиск по слову или переводу..."
          className="w-full sm:w-2/3 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="w-full sm:w-1/3 px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={selectedLesson}
          onChange={(e) => {
            setSelectedLesson(e.target.value);
            setSelectedLevel("all");
          }}
        >
          <option value="all">Все уроки</option>
          {allLessons.map((lesson, idx) => (
            <option key={idx} value={lesson.title}>
              {lesson.title}
            </option>
          ))}
        </select>
      </div>

      {levelsForLesson.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <button
            className={`px-4 py-1 rounded ${
              selectedLevel === "all" ? "bg-blue-700 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedLevel("all")}
          >
            Все уровни
          </button>
          {levelsForLesson.map((level, idx) => (
            <button
              key={idx}
              className={`px-4 py-1 rounded ${
                selectedLevel === level.title
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setSelectedLevel(level.title)}
            >
              {level.title}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredVocab.map((item, index) => (
          <div
            key={index}
            className={`${getCardBg(
              item.german
            )} p-4 border rounded transition cursor-pointer flex flex-col hover:brightness-95`}
            onClick={() => setSelectedWord(item)}
          >
            <div className="text-white text-sm mb-1">#{index + 1}</div>
            <div className="text-blue-700 font-medium">
              {highlightMatch(item.german, search)}
            </div>
            <div className="text-gray-700">
              {highlightMatch(item.russian, search)}
            </div>
            <div className="text-gray-700 text-xs mt-1">
              {item.lessonTitle} — {item.levelTitle}
            </div>
          </div>
        ))}
      </div>

      {selectedWord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedWord(null)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedWord.german}</h2>
            <p className="text-gray-700 mb-4">{selectedWord.russian}</p>
            {selectedWord.examples.length > 0 ? (
              <div>
                <h3 className="font-semibold mb-2">Примеры:</h3>
                <ul className="list-disc list-inside">
                  {selectedWord.examples.map((ex, idx) => (
                    <li key={idx} className="mb-1">
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-gray-500">Примеры отсутствуют</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DictionaryPage;
