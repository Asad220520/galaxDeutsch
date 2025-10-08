import React, { useState } from "react";
import data from "./data";

export default function MiniPairsQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const exercise = data.pairsExercise;
  const currentQuestion = exercise[currentIndex];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < exercise.length - 1 ? prev + 1 : 0));
    setSelectedOption("");
    setShowAnswer(false);
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg max-w-md mx-auto flex flex-col h-screen">
      <h2 className="text-xl font-bold text-blue-700 mb-4 text-center">
        Мини-тест на парочки
      </h2>

      <div className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-r from-blue-50 to-white shadow-md flex-1 flex flex-col justify-center">
        <p className="text-gray-900 text-lg mb-4">{currentQuestion.question}</p>

        <div className="grid grid-cols-2 gap-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              disabled={showAnswer}
              className={`p-3 rounded-xl border shadow font-semibold ${
                showAnswer
                  ? option === currentQuestion.answer
                    ? "bg-green-600 text-white"
                    : option === selectedOption
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-800"
                  : "bg-blue-200 text-gray-900 hover:bg-blue-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {showAnswer && (
          <div className="mt-4 p-4 bg-white border-l-4 border-blue-600 rounded shadow text-left">
            <p className="text-lg font-bold text-blue-700">
              Правильный ответ: {currentQuestion.answer}
            </p>
            <p className="text-gray-500 mt-2">{currentQuestion.explanation}</p>
          </div>
        )}

        <button
          onClick={handleNext}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 self-center"
        >
          Следующий
        </button>

        <p className="text-gray-500 text-sm mt-4 text-center">
          Вопрос {currentIndex + 1} из {exercise.length}
        </p>
      </div>
    </div>
  );
}
