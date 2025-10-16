// RepeatFavoritesQuiz.jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
// ⭐️ Важно: Используем setQueueFromWrong, но не используем removeWord
import {
  setQueue,
  markCorrect,
  markWrong,
  setQueueFromWrong,
} from "../../../store/repeatSlice";

// Компонент AudioPlayer (без изменений)
const AudioPlayer = ({ word }) => {
  const speak = (w) => {
    if (!w) return;
    const utterance = new SpeechSynthesisUtterance(w);
    utterance.lang = "de-DE";
    speechSynthesis.speak(utterance);
  };
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        speak(word);
      }}
      className="text-2xl p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 flex-shrink-0 transition-colors"
      title={`Прослушать "${word}"`}
    >
      🔊
    </button>
  );
};

// Константа для количества вариантов ответа
const QUIZ_OPTIONS = 4;

function RepeatFavoritesQuiz() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  // Используем все данные из слайса
  const { queue, currentIndex, correct, wrong } = useSelector(
    (state) => state.repeat
  );
  const totalFavoriteLength = favorites.length;

  const [options, setOptions] = useState([]);
  const [answerState, setAnswerState] = useState(null); // 'correct', 'wrong', null
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Определяем текущее слово через индекс
  const currentWord = useMemo(() => {
    return queue.length > 0 && currentIndex < queue.length
      ? queue[currentIndex]
      : null;
  }, [queue, currentIndex]);

  // Проверка завершения: True, если индекс достиг конца очереди
  const isFinished = currentIndex >= queue.length && queue.length > 0;

  // === Вспомогательные функции ===

  const shuffle = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const getDistractors = useCallback((correctRussian, allRussians) => {
    const available = allRussians.filter((r) => r !== correctRussian);
    const shuffledAvailable = shuffle(available);
    return shuffledAvailable.slice(0, QUIZ_OPTIONS - 1);
  }, []);

  const setupOptions = useCallback(() => {
    if (!currentWord) {
      setOptions([]);
      return;
    }

    const correctRussian = currentWord.russian;
    // Используем все переводы из избранного в качестве потенциальных отвлекающих
    const allRussians = favorites.map((w) => w.russian);
    const distractors = getDistractors(correctRussian, allRussians);

    const newOptions = shuffle([correctRussian, ...distractors]);

    setOptions(newOptions);
    setAnswerState(null);
    setSelectedAnswer(null);
  }, [currentWord, favorites, getDistractors]);

  // === Эффекты ===

  // 1. Инициализация очереди (при первом запуске)
  useEffect(() => {
    if (totalFavoriteLength > 0 && queue.length === 0) {
      // Если избранное есть, а очередь пуста, инициализируем ее
      dispatch(setQueue(shuffle([...favorites])));
    }
  }, [favorites, dispatch, queue.length, totalFavoriteLength]);

  // 2. Установка вариантов ответа при смене слова
  useEffect(() => {
    if (currentWord) {
      setupOptions();
    }
  }, [currentWord, setupOptions]);

  // === Обработчик выбора ===

  const handleAnswer = (selected) => {
    if (answerState || !currentWord) return;

    setSelectedAnswer(selected);

    if (selected === currentWord.russian) {
      setAnswerState("correct");
      // ⭐️ Используем markCorrect, которое сдвигает currentIndex
      dispatch(markCorrect());

      // Немедленно генерируем варианты для следующего слова, чтобы подготовить UI
      setTimeout(() => {
        // Ничего не делаем, useEffect сам сработает при изменении currentIndex
      }, 500);
    } else {
      setAnswerState("wrong");
      // ⭐️ Используем markWrong, которое сдвигает currentIndex
      dispatch(markWrong());

      // Сброс состояния для возможности перейти к следующему вопросу, но с фидбэком
      setTimeout(() => {
        // Ничего не делаем, useEffect сам сработает при изменении currentIndex
      }, 1500);
    }
  };

  // === Классы ===

  const getButtonClasses = (option) => {
    let base =
      "w-full p-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-md";

    if (!answerState) {
      // До выбора: нейтральный
      base +=
        " bg-white hover:bg-indigo-100 dark:bg-gray-700 dark:hover:bg-gray-600";
    } else if (option === currentWord.russian) {
      // Верный ответ
      base += " bg-emerald-500 text-white shadow-lg scale-[1.02]";
    } else if (option === selectedAnswer && answerState === "wrong") {
      // Неверный ответ, который выбрал пользователь
      base += " bg-red-500 text-white shake";
    } else {
      // Отключенные неверные варианты
      base += " bg-slate-200 text-slate-500 dark:bg-slate-700 opacity-60";
    }

    return base;
  };

  if (totalFavoriteLength === 0)
    return (
      <div className="text-center mt-10 p-4">
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Сначала добавьте слова в избранное, чтобы начать тест!
        </p>
      </div>
    );

  if (isFinished)
    return (
      <div className="text-center py-10 bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
        <h2 className="text-3xl text-emerald-500 mb-6 font-extrabold">
          🎉 Тест завершен!
        </h2>
        <p className="text-xl mb-6">
          Правильных ответов:{" "}
          <span className="text-emerald-500">{correct.length}</span> / Ошибок:{" "}
          <span className="text-red-500">{wrong.length}</span>
        </p>
        {wrong.length > 0 && (
          <button
            className="w-full max-w-xs mx-auto px-6 py-3 mb-3 bg-amber-600 text-white rounded-xl font-bold shadow-md hover:bg-amber-700 transition-colors"
            onClick={() => dispatch(setQueueFromWrong())}
          >
            Повторить {wrong.length} ошибочных слов
          </button>
        )}
        <button
          className="w-full max-w-xs mx-auto px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-md hover:bg-indigo-700 transition-colors"
          onClick={() => dispatch(setQueue(shuffle([...favorites])))}
        >
          Начать сначала ({totalFavoriteLength} слов)
        </button>
      </div>
    );

  return (
    <div className="p-4 max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
        Тест (Выбери перевод)
      </h2>

      {/* Прогресс */}
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
        Прогресс: <span className="font-bold">{currentIndex}</span> /{" "}
        {queue.length}
      </div>

      {currentWord && (
        <>
          {/* Немецкое слово */}
          <div className="flex items-center justify-center p-6 mb-6 bg-indigo-100 dark:bg-indigo-900 rounded-xl shadow-inner border-2 border-indigo-300 dark:border-indigo-700">
            <AudioPlayer word={currentWord.german} />
            <h3 className="text-3xl font-extrabold text-indigo-800 dark:text-indigo-200 ml-4">
              {currentWord.german}
            </h3>
          </div>

          {/* Варианты ответов */}
          <div className="space-y-3">
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                disabled={!!answerState}
                className={getButtonClasses(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Анимация Shake */}
      <style>{`
        .shake { animation: shake 0.3s ease-in-out; }
        @keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-6px); } 50% { transform: translateX(6px); } 75% { transform: translateX(-6px); } 100% { transform: translateX(0); } }
      `}</style>
    </div>
  );
}

export default RepeatFavoritesQuiz;
