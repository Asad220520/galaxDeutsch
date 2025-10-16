import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favoritesSlice";
import { allLessons } from "../LessonPage/Lection/allLessons";
import WordLearningModule from "./WordLearningModule";

// ===== Компонент аудио-кнопки =====
const AudioButton = ({ word }) => {
  const speak = () => {
    if (!word) return;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "de-DE";
    speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={speak}
      className="ml-2 text-xl hover:scale-110 transition-transform p-2 rounded-md bg-gray-200 dark:bg-gray-700"
      title={`Прослушать "${word}"`}
    >
      🔊
    </button>
  );
};

// ===== Подсветка поиска =====
const highlightMatch = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, idx) =>
    regex.test(part) ? (
      <span key={idx} className="bg-yellow-200 dark:bg-yellow-600 rounded px-1">
        {part}
      </span>
    ) : (
      part
    )
  );
};

// ===== Цвет карточки =====
const getCardBg = (text) => {
  const match = text.match(/^(der|die|das)\s+/i);
  if (!match) return "bg-gray-50 dark:bg-gray-800";
  const article = match[1].toLowerCase();
  if (article === "der") return "bg-blue-400 text-white";
  if (article === "die") return "bg-red-400 text-white";
  if (article === "das") return "bg-green-400 text-white";
  return "bg-gray-50 dark:bg-gray-800";
};

const DictionaryPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");
  const [selectedLesson, setSelectedLesson] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const getDictionaryItems = () => {
    const vocab = [];
    allLessons.forEach((lesson) => {
      Object.entries(lesson.levels).forEach(([_, level]) => {
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

  const levelsForLesson =
    selectedLesson === "all"
      ? []
      : Object.values(
          allLessons.find((l) => l.title === selectedLesson)?.levels || []
        ).map((l) => l.title);

  // ===== Повторение =====
  if (tab === "repeat") {
    return (
      <div key="repeat" className="max-w-xl mx-auto p-4">
        <button
          onClick={() => setTab("favorites")}
          className="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded w-full text-center"
        >
          ← Назад к избранному
        </button>

        <WordLearningModule
          title="Повторение избранного"
          icon="🔁"
          useRedux={true}
          pageSize={5}
        />
      </div>
    );
  }

  // ===== Основное содержимое =====
  return (
    <div key={tab} className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        Словарь
      </h1>

      {/* Вкладки */}
      <div className="flex justify-center gap-2 mb-4 flex-wrap">
        {["all", "favorites", "repeat"].map((t) => (
          <button
            key={t}
            className={`px-4 py-2 rounded w-full sm:w-auto text-center ${
              tab === t
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700"
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

      {/* Поиск и фильтры */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          placeholder="Поиск..."
          className="px-4 py-2 border rounded flex-1 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-2 border rounded w-full sm:w-auto"
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
            className="px-4 py-2 border rounded w-full sm:w-auto"
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

      {/* 🔢 Количество найденных слов */}
      <div className="text-center text-sm text-gray-600 dark:text-gray-300 mb-3">
        Найдено слов: <b>{filtered.length}</b> / Всего:{" "}
        <b>
          {tab === "favorites" ? favorites.length : getDictionaryItems().length}
        </b>
      </div>

      {/* Список слов */}
      <div className="flex flex-col gap-3">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className={`p-4 border rounded flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 ${getCardBg(
              item.german
            )}`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full">
              <div className="font-medium flex items-center gap-2 flex-wrap">
                <AudioButton word={item.german} />
                {highlightMatch(item.german, search)}
              </div>
              <div
                className={`text-sm ${
                  getCardBg(item.german).includes("bg-gray")
                    ? "text-gray-800 dark:text-gray-200"
                    : "text-white"
                }`}
              >
                {highlightMatch(item.russian, search)}
              </div>
            </div>
            <button
              className={`px-4 py-2 rounded text-white mt-2 sm:mt-0 ${
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
