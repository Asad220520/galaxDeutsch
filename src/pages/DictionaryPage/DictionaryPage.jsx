import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favoritesSlice";
import { allLessons } from "../LessonPage/Lection/allLessons";
// import MatchingCardUniversal from "./MatchingCardUniversal";
import RepeatFavorites from "./RepeatFavorites";

// Подсветка поиска
const highlightMatch = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, idx) =>
    regex.test(part) ? (
      <span key={idx} className="bg-yellow-200">
        {part}
      </span>
    ) : (
      part
    )
  );
};

// Цвет карточки по артиклю
const getCardBg = (text) => {
  const match = text.match(/^(der|die|das)\s+/i);
  if (!match) return "bg-gray-50";
  const article = match[1].toLowerCase();
  if (article === "der") return "bg-blue-400 text-white";
  if (article === "die") return "bg-red-400 text-white";
  if (article === "das") return "bg-green-400 text-white";
  return "bg-gray-50";
};

const DictionaryPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all"); // all / favorites / repeat
  const [selectedLesson, setSelectedLesson] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  // Получаем все слова с уровнями
  const getDictionaryItems = () => {
    const vocab = [];
    allLessons.forEach((lesson) => {
      Object.entries(lesson.levels).forEach(([levelKey, level]) => {
        level.matching?.items.forEach((item) => {
          vocab.push({
            german: item.german,
            russian: item.russian,
            lessonTitle: lesson.title,
            levelTitle: level.title,
          });
        });
      });
    });
    return vocab;
  };

  let items = getDictionaryItems();

  if (tab === "favorites") items = favorites;

  if (selectedLesson !== "all")
    items = items.filter((w) => w.lessonTitle === selectedLesson);
  if (selectedLevel !== "all")
    items = items.filter((w) => w.levelTitle === selectedLevel);

  const filtered = items.filter(
    (item) =>
      item.german.toLowerCase().includes(search.toLowerCase()) ||
      item.russian.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (word) => {
    if (favorites.find((w) => w.german === word.german)) {
      dispatch(removeFavorite(word));
    } else {
      dispatch(addFavorite(word));
    }
  };

  // Получаем уровни выбранного урока
  const levelsForLesson =
    selectedLesson === "all"
      ? []
      : Object.values(
          allLessons.find((l) => l.title === selectedLesson)?.levels || []
        ).map((l) => l.title);

  // ————————————————————————————————
  // Вкладка повторения
  // ————————————————————————————————
  if (tab === "repeat") {
    return (
      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        <RepeatFavorites
          title="Повторение избранного"
          icon="🔁"
          useRedux={true} // используем repeatSlice
          pageSize={5}
        />
      </div>
    );
  }

  // ————————————————————————————————
  // Вкладки "Все слова" и "Избранное"
  // ————————————————————————————————
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Словарь</h1>

      {/* Вкладки */}
      <div className="flex justify-center gap-2 mb-4 flex-wrap">
        {["all", "favorites", "repeat"].map((t) => (
          <button
            key={t}
            className={`px-4 py-2 rounded ${
              tab === t ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setTab(t)}
          >
            {t === "all"
              ? "Все слова"
              : t === "favorites"
              ? "Избранное"
              : "Повторение"}
          </button>
        ))}
      </div>

      {/* Поиск и селекты */}
      <div className="flex flex-col sm:flex-row justify-center gap-2 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Поиск..."
          className="px-4 py-2 border rounded flex-1 min-w-[180px]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded min-w-[120px]"
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
        {levelsForLesson.length > 0 && (
          <select
            className="px-4 py-2 border rounded min-w-[120px]"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="all">Все уровни</option>
            {levelsForLesson.map((lvl, idx) => (
              <option key={idx} value={lvl}>
                {lvl}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Словарь */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 border rounded flex justify-between items-center ${getCardBg(
              item.german
            )}`}
          >
            <div>
              <div className="font-medium">
                {highlightMatch(item.german, search)}
              </div>
              <div
                className={`text-sm ${
                  getCardBg(item.german).includes("bg-gray")
                    ? "text-gray-800"
                    : "text-white"
                }`}
              >
                {highlightMatch(item.russian, search)}
              </div>
            </div>
            <button
              className={`px-2 py-1 rounded text-white ${
                favorites.find((w) => w.german === item.german)
                  ? "bg-red-500"
                  : "bg-green-500"
              }`}
              onClick={() => toggleFavorite(item)}
            >
              {favorites.find((w) => w.german === item.german) ? "★" : "☆"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DictionaryPage;
