import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favoritesSlice";
import { allLessons } from "../LessonPage/Lection/allLessons";
import WordLearningModule from "./WordLearningModule";

// ===== Компонент аудио-кнопки (без изменений) =====
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
      // Классы аудио-кнопки не меняем, они нейтральные и функциональные
      className="ml-2 text-xl hover:scale-110 transition-transform p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-10 h-10 flex items-center justify-center flex-shrink-0"
      title={`Прослушать "${word}"`}
    >
      🔊
    </button>
  );
};

// ===== Подсветка поиска (меняем желтый на более мягкий) =====
const highlightMatch = (text, query) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, idx) =>
    regex.test(part) ? (
      // Использован bg-amber-200 вместо bg-yellow-200
      <span key={idx} className="bg-amber-200 dark:bg-amber-600 rounded px-1">
        {part}
      </span>
    ) : (
      part
    )
  );
};

// ===== Цвет карточки: ПРИЯТНЫЕ ЦВЕТА =====
const getCardBg = (text) => {
  const match = text.match(/^(der|die|das)\s+/i);
  if (!match)
    // Нейтральный фон: светло-серый -> темно-серый для хорошего контраста
    return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200";

  const article = match[1].toLowerCase();

  // Der (Синий -> Небесно-голубой/Индиго)
  if (article === "der")
    return "bg-sky-200 text-sky-800 dark:bg-sky-800 dark:text-sky-100";

  // Die (Розовый -> Розовый-персиковый/Фуксия)
  if (article === "die")
    return "bg-fuchsia-200 text-fuchsia-800 dark:bg-fuchsia-800 dark:text-fuchsia-100";

  // Das (Зеленый -> Мягкий мятный/Изумрудный)
  if (article === "das")
    return "bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100";

  return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200";
};

const DictionaryPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");
  const [selectedLesson, setSelectedLesson] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  // ... (логика словаря getDictionaryItems, items, filtered, toggleFavorite, levelsForLesson - без изменений)
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
  // ... (конец логики словаря)

  // ===== Повторение (стили кнопок изменены) =====
  if (tab === "repeat") {
    return (
      <div key="repeat" className="max-w-xl mx-auto p-4">
        <button
          onClick={() => setTab("favorites")}
          // Изменен серый фон на более мягкий
          className="mb-4 px-4 py-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600 rounded w-full text-center"
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
    <div key={tab} className="max-w-xl mx-auto p-2 sm:p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
        Словарь
      </h1>

      {/* Вкладки: синий цвет акцента стал более глубоким и спокойным */}
      <div className="flex justify-center gap-2 mb-3">
        {["all", "favorites", "repeat"].map((t) => (
          <button
            key={t}
            className={`flex-1 px-3 py-1.5 rounded text-sm sm:text-base text-center transition-colors duration-200 ${
              tab === t
                ? // Активный синий: bg-indigo-600 (более глубокий и благородный)
                  "bg-indigo-600 text-white dark:bg-indigo-700"
                : // Неактивный фон: bg-slate-200
                  "bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
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

      {/* Поиск и фильтры: нейтральные цвета стали мягче */}
      <div className="flex flex-col gap-2 mb-3">
        <input
          type="text"
          placeholder="Поиск..."
          // Использован bg-slate-100 для светлой темы
          className="px-3 py-1.5 border rounded w-full dark:bg-slate-700 dark:text-slate-200 text-base"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex gap-2">
          <select
            className="px-3 py-1.5 border rounded w-1/2 dark:bg-slate-700 dark:text-slate-200 text-sm sm:text-base"
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
              className="px-3 py-1.5 border rounded w-1/2 dark:bg-slate-700 dark:text-slate-200 text-sm sm:text-base"
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
      </div>

      {/* 🔢 Количество найденных слов */}
      <div className="text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3">
        Найдено: <b>{filtered.length}</b> / Всего:{" "}
        <b>
          {tab === "favorites" ? favorites.length : getDictionaryItems().length}
        </b>
      </div>

      {/* Список слов */}
      <div className="flex flex-col gap-2">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            // getCardBg теперь использует более мягкие цвета
            className={`p-3 border rounded flex justify-between items-center ${getCardBg(
              item.german
            )}`}
          >
            <div className="flex flex-col flex-1 min-w-0">
              <div className="font-bold flex items-center gap-1 text-base sm:text-lg flex-wrap">
                <span className="order-2 sm:order-none">
                  {highlightMatch(item.german, search)}
                </span>
                <span className="order-1 sm:order-none flex-shrink-0">
                  <AudioButton word={item.german} />
                </span>
              </div>
              <div
                // Классы для русского текста удалены, так как getCardBg обеспечивает контраст
                className={`text-sm sm:text-base ml-1 mt-0.5`}
              >
                {highlightMatch(item.russian, search)}
              </div>
            </div>

            {/* Кнопка избранного: Желтый/Красный стали более приятными */}
            <button
              className={`text-xl p-2 rounded-full flex-shrink-0 ml-2 h-10 w-10 flex items-center justify-center transition-colors duration-200 ${
                favorites.find((w) => w.german === item.german)
                  ? // Красный для '★': более глубокий, с хорошим контрастом
                    "bg-red-500 hover:bg-red-600 text-white dark:bg-red-700 dark:hover:bg-red-600"
                  : // Желтый для '☆': мягкий оранжево-желтый (amber/orange), чтобы не был "кислотным"
                    "bg-amber-400 hover:bg-amber-500 text-gray-800 dark:bg-amber-600 dark:text-gray-100 dark:hover:bg-amber-500"
              }`}
              onClick={() => toggleFavorite(item)}
              title={
                favorites.find((w) => w.german === item.german)
                  ? "Убрать из избранного"
                  : "Добавить в избранное"
              }
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
