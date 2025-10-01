import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { topikLessons } from "./topikLessons";

function TopikPracticeAllInteractive() {
  const { id } = useParams();
  const topic = topikLessons.find((t) => t.id === parseInt(id));

  const [visibleAnswers, setVisibleAnswers] = useState({}); // tracks which answers are visible

  if (!topic) return <div className="p-4">Топик не найден</div>;

  const toggleAnswer = (index) => {
    setVisibleAnswers((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">{topic.title}</h1>

      <div className="flex flex-col gap-4">
        {topic.data.dialogs.map((dialog, index) => (
          <div
            key={index}
            className="p-4 border rounded bg-gray-50 flex flex-col gap-2"
          >
            <div className="text-blue-600 font-medium">{dialog.german}</div>
            <div className="text-gray-700">{dialog.russian}</div>

            {(dialog.germanantwort || dialog.russianantwort) && (
              <button
                onClick={() => toggleAnswer(index)}
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded w-max"
              >
                {visibleAnswers[index] ? "Скрыть ответ" : "Показать ответ"}
              </button>
            )}

            {visibleAnswers[index] &&
              dialog.germanantwort &&
              dialog.russianantwort && (
                <div className="mt-2 p-2 border-l-4 border-blue-400 bg-gray-100 rounded">
                  <div className="text-blue-800 font-medium">
                    {dialog.germanantwort}
                  </div>
                  <div className="text-gray-700">{dialog.russianantwort}</div>
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopikPracticeAllInteractive;
