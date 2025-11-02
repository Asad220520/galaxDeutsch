import React, { useState, useMemo } from "react";
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
      className="ml-2 text-xl hover:scale-110 transition-transform p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-10 h-10 flex items-center justify-center flex-shrink-0"
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
      <span key={idx} className="bg-amber-200 dark:bg-amber-600 rounded px-1">
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
  if (!match)
    return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200";

  const article = match[1].toLowerCase();
  if (article === "der")
    return "bg-sky-200 text-sky-800 dark:bg-sky-800 dark:text-sky-100";
  if (article === "die")
    return "bg-fuchsia-200 text-fuchsia-800 dark:bg-fuchsia-800 dark:text-fuchsia-100";
  if (article === "das")
    return "bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100";

  return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200";
};

// ===== Главный компонент =====
const DictionaryPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);

  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");
  const [selectedLesson, setSelectedLesson] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchDuplicates, setSearchDuplicates] = useState("");

  // ===== Уникальные слова с вариантами =====
  const getDictionaryItems = useMemo(() => {
    const vocabMap = new Map();

    allLessons.forEach((lesson) => {
      Object.entries(lesson.levels).forEach(([_, level]) => {
        level.matching?.items.forEach((item) => {
          const key = item.german.trim().toLowerCase();
          const value = {
            german: item.german.trim(),
            russian: item.russian.trim(),
            lessonTitle: lesson.title,
            levelTitle: level.title,
          };

          if (!vocabMap.has(key)) {
            vocabMap.set(key, { ...value, variants: [value] });
          } else {
            vocabMap.get(key).variants.push(value);
          }
        });
      });
    });

    return Array.from(vocabMap.values());
  }, []);

  const favoriteSet = useMemo(
    () => new Set(favorites.map((w) => w.german.trim().toLowerCase())),
    [favorites]
  );

  // ===== Фильтрация слов =====
  const items = useMemo(() => {
    let base = tab === "favorites" ? favorites : getDictionaryItems;

    if (selectedLesson !== "all")
      base = base.filter((w) => w.lessonTitle === selectedLesson);
    if (selectedLevel !== "all")
      base = base.filter((w) => w.levelTitle === selectedLevel);

    if (search.trim())
      base = base.filter(
        (item) =>
          item.german.toLowerCase().includes(search.toLowerCase()) ||
          item.russian.toLowerCase().includes(search.toLowerCase())
      );

    return base;
  }, [
    tab,
    favorites,
    getDictionaryItems,
    selectedLesson,
    selectedLevel,
    search,
  ]);

  const toggleFavorite = (word) => {
    const key = word.german.trim().toLowerCase();
    if (favoriteSet.has(key)) {
      dispatch(removeFavorite(word));
    } else {
      dispatch(addFavorite(word));
    }
  };

  const levelsForLesson = useMemo(() => {
    if (selectedLesson === "all") return [];
    return Object.values(
      allLessons.find((l) => l.title === selectedLesson)?.levels || []
    ).map((l) => l.title);
  }, [selectedLesson]);

  // ===== Функция копирования всех похожих слов =====
  const copyAllDuplicates = () => {
    const duplicatesText = getDictionaryItems
      .filter((item) => item.variants.length > 1)
      .map((item) =>
        item.variants
          .filter(
            (v) =>
              !searchDuplicates ||
              v.german.toLowerCase().includes(searchDuplicates.toLowerCase()) ||
              v.russian.toLowerCase().includes(searchDuplicates.toLowerCase())
          )
          .map(
            (v) =>
              `${v.german} — ${v.russian} (Урок: ${v.lessonTitle}, Уровень: ${v.levelTitle})`
          )
          .join("\n")
      )
      .filter(Boolean)
      .join("\n\n");

    navigator.clipboard.writeText(duplicatesText).then(() => {
      alert("Все похожие слова скопированы в буфер обмена!");
    });
  };

  // ===== Повторение =====
  if (tab === "repeat") {
    return (
      <div key="repeat" className="max-w-xl mx-auto p-4">
        <button
          onClick={() => setTab("favorites")}
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

  // ===== Основной контент =====
  return (
    <div key={tab} className="max-w-xl mx-auto p-2 sm:p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-3 text-center">
        Словарь
      </h1>

      {/* Вкладки */}
      <div className="flex justify-center gap-2 mb-3">
        {["all", "favorites", "repeat", "duplicates"].map((t) => (
          <button
            key={t}
            className={`flex-1 px-3 py-1.5 rounded text-sm sm:text-base text-center transition-colors duration-200 ${
              tab === t
                ? "bg-indigo-600 text-white dark:bg-indigo-700"
                : "bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
            onClick={() => setTab(t)}
          >
            {t === "all"
              ? "Все слова"
              : t === "favorites"
              ? "Избранное"
              : t === "repeat"
              ? "Повторение"
              : "Все похожие слова"}
          </button>
        ))}
      </div>

      {/* Поиск и фильтры */}
      {tab !== "duplicates" && (
        <div className="flex flex-col gap-2 mb-3">
          <input
            type="text"
            placeholder="Поиск..."
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
      )}

      {/* ===== Основной список слов ===== */}
      {(tab === "all" || tab === "favorites") && (
        <>
          <div className="text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-3">
            Найдено: <b>{items.length}</b> / Всего:{" "}
            <b>
              {tab === "favorites"
                ? favorites.length
                : getDictionaryItems.length}
            </b>
          </div>

          <div className="flex flex-col gap-2">
            {items.map((item, idx) => (
              <div
                key={idx}
                className={`p-3 border rounded flex flex-col ${getCardBg(
                  item.german
                )}`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col flex-1 min-w-0">
                    <div className="font-bold flex items-center gap-1 text-base sm:text-lg flex-wrap">
                      <span>{highlightMatch(item.german, search)}</span>
                      <AudioButton word={item.german} />
                    </div>
                    <div className="text-sm sm:text-base ml-1 mt-0.5">
                      {highlightMatch(item.russian, search)}
                    </div>
                  </div>

                  <button
                    className={`text-xl p-2 rounded-full flex-shrink-0 ml-2 h-10 w-10 flex items-center justify-center transition-colors duration-200 ${
                      favoriteSet.has(item.german.trim().toLowerCase())
                        ? "bg-red-500 hover:bg-red-600 text-white dark:bg-red-700 dark:hover:bg-red-600"
                        : "bg-amber-400 hover:bg-amber-500 text-gray-800 dark:bg-amber-600 dark:text-gray-100 dark:hover:bg-amber-500"
                    }`}
                    onClick={() => toggleFavorite(item)}
                    title={
                      favoriteSet.has(item.german.trim().toLowerCase())
                        ? "Убрать из избранного"
                        : "Добавить в избранное"
                    }
                  >
                    {favoriteSet.has(item.german.trim().toLowerCase())
                      ? "★"
                      : "☆"}
                  </button>
                </div>

                {item.variants && item.variants.length > 1 && (
                  <details className="mt-2 ml-1 text-sm">
                    <summary className="cursor-pointer text-slate-700 dark:text-slate-300">
                      Похожие варианты ({item.variants.length})
                    </summary>
                    <ul className="ml-4 list-disc mt-1 space-y-1">
                      {item.variants.map((v, i) => (
                        <li key={i}>
                          <div>
                            <b>{v.german}</b> — {v.russian}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400 ml-2">
                            📘 {v.lessonTitle} • 🧩 {v.levelTitle}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* ===== Все похожие слова ===== */}
      {tab === "duplicates" && (
        <>
          <div className="flex justify-between items-center mb-2">
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Всего слов с похожими вариантами:{" "}
              <b>
                {getDictionaryItems.filter((i) => i.variants.length > 1).length}
              </b>
            </div>
            <button
              onClick={copyAllDuplicates}
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
            >
              📋 Скопировать все
            </button>
          </div>

          <input
            type="text"
            placeholder="Поиск похожих слов..."
            className="px-3 py-1.5 border rounded w-full dark:bg-slate-700 dark:text-slate-200 text-base mb-3"
            value={searchDuplicates}
            onChange={(e) => setSearchDuplicates(e.target.value)}
          />

          <div className="flex flex-col gap-2">
            {getDictionaryItems
              .filter((item) => item.variants.length > 1)
              .map((item, idx) => {
                const filteredVariants = item.variants.filter(
                  (v) =>
                    !searchDuplicates ||
                    v.german
                      .toLowerCase()
                      .includes(searchDuplicates.toLowerCase()) ||
                    v.russian
                      .toLowerCase()
                      .includes(searchDuplicates.toLowerCase())
                );
                if (!filteredVariants.length) return null;
                return (
                  <div
                    key={idx}
                    className="p-3 border rounded flex flex-col bg-slate-100 dark:bg-slate-700"
                  >
                    <div className="font-semibold mb-1">{item.german}</div>
                    <ul className="ml-4 list-disc mt-1 space-y-1 text-sm">
                      {filteredVariants.map((v, i) => (
                        <li key={i}>
                          <div>
                            <b>{v.german}</b> — {v.russian}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-400 ml-2">
                            📘 {v.lessonTitle} • 🧩 {v.levelTitle}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default DictionaryPage;
