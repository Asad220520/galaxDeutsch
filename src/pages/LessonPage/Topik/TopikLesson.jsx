import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { topikLessons } from "./topikLessons";
import PlayAudioButton from "../../../components/UI/AudioPlayer"; // твой компонент для прослушивания

function TopikPracticeInteractive() {
  const { id } = useParams();
  const topic = topikLessons.find((t) => t.id === parseInt(id));

  const [visibleAnswers, setVisibleAnswers] = useState({});
  const [userAnswers, setUserAnswers] = useState({});
  const [results, setResults] = useState({});

  if (!topic) return <div className="p-4">Топик не найден</div>;

  const toggleAnswer = (index) => {
    setVisibleAnswers((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleInput = (index, value) => {
    setUserAnswers((prev) => ({ ...prev, [index]: value }));
  };

  const checkAnswer = (index) => {
    const correct =
      topic.data.dialogs[index].germanantwort.toLowerCase().trim() ===
      (userAnswers[index] || "").toLowerCase().trim();
    setResults((prev) => ({ ...prev, [index]: correct }));
    setVisibleAnswers((prev) => ({ ...prev, [index]: true }));
  };

  const showAll = () => {
    const newState = {};
    topic.data.dialogs.forEach((_, i) => (newState[i] = true));
    setVisibleAnswers(newState);
  };

  const hideAll = () => {
    setVisibleAnswers({});
  };

  const openedCount = Object.values(visibleAnswers).filter(Boolean).length;
  const correctCount = Object.values(results).filter(Boolean).length;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">{topic.title}</h1>

      {/* Прогресс */}
      <p className="text-sm text-gray-500 mb-4 text-center">
        Открыто {openedCount} из {topic.data.dialogs.length} карточек. Правильно{" "}
        {correctCount}.
      </p>

      {/* Кнопки показать/скрыть все */}
      <div className="flex gap-2 justify-center mb-6">
        <button
          onClick={showAll}
          className="px-3 py-1 bg-green-500 text-white rounded w-max"
        >
          Показать все
        </button>
        <button
          onClick={hideAll}
          className="px-3 py-1 bg-red-500 text-white rounded w-max"
        >
          Скрыть все
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {topic.data.dialogs.map((dialog, index) => (
          <div
            key={index}
            className={`p-4 border rounded flex flex-col gap-2 transition-colors ${
              visibleAnswers[index]
                ? "bg-blue-50 border-blue-300"
                : "bg-gray-50 border-gray-200"
            } hover:bg-blue-100`}
          >
            {/* Немецкий текст (всегда виден) */}
            <div className="text-blue-600 font-medium">{dialog.german}</div>

            {/* Русский перевод */}
            <div className="text-gray-700">{dialog.russian}</div>

            {/* Поле для ответа пользователя */}
            {dialog.germanantwort && (
              <div className="flex flex-col gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Введите перевод на немецкий"
                  value={userAnswers[index] || ""}
                  onChange={(e) => handleInput(index, e.target.value)}
                  className="px-2 py-1 border rounded"
                />
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => checkAnswer(index)}
                    className="px-3 py-1 bg-blue-500 text-white rounded w-max"
                  >
                    Проверить
                  </button>

                  {/* Кнопка прослушивания */}
                  <PlayAudioButton word={dialog.german} />

                  <button
                    onClick={() => toggleAnswer(index)}
                    className="px-3 py-1 bg-purple-500 text-white rounded w-max"
                  >
                    {visibleAnswers[index] ? "Скрыть ответ" : "Показать ответ"}
                  </button>
                </div>

                {/* Правильный ответ */}
                {visibleAnswers[index] && (
                  <div
                    className={`mt-2 p-2 border-l-4 rounded ${
                      results[index]
                        ? "border-green-400 bg-green-50"
                        : "border-red-400 bg-red-50"
                    }`}
                  >
                    <div className="text-blue-800 font-medium">
                      {dialog.germanantwort}
                    </div>
                    <div className="text-gray-700">{dialog.russianantwort}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopikPracticeInteractive;
