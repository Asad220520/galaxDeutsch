import React, { useState } from "react";
import data from "./data";

export default function GermanArticleTrainer() {
  const [selectedTab, setSelectedTab] = useState("list"); // "list", "quiz", "pairs"
  const [selectedCase, setSelectedCase] = useState("Nominativ");
  const [selectedGender, setSelectedGender] = useState("Maskulin");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const cases = Object.keys(data || {});
  const genders = data[selectedCase] ? Object.keys(data[selectedCase]) : [];
  const examples = data[selectedCase]?.[selectedGender] || [];
  const pairsExercise = data.pairsExercise || [];

  const caseNames = {
    Nominativ: "Именительный (кто? что?)",
    Akkusativ: "Винительный (кого? что?)",
    Dativ: "Дательный (кому? чему?)",
    Genitiv: "Родительный (чей?)",
  };

  const genderNames = {
    Maskulin: "Мужской род",
    Feminin: "Женский род",
    Neutrum: "Средний род",
    Plural: "Множественное число",
  };

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) =>
      selectedTab === "pairs"
        ? prev < pairsExercise.length - 1
          ? prev + 1
          : 0
        : prev < examples.length - 1
        ? prev + 1
        : 0
    );
    setSelectedOption("");
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) =>
      selectedTab === "pairs"
        ? prev > 0
          ? prev - 1
          : pairsExercise.length - 1
        : prev > 0
        ? prev - 1
        : examples.length - 1
    );
    setSelectedOption("");
  };

  const handleCaseChange = (e) => {
    setSelectedCase(e.target.value);
    setCurrentIndex(0);
    setShowAnswer(false);
    setSelectedOption("");
  };

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
    setCurrentIndex(0);
    setShowAnswer(false);
    setSelectedOption("");
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);
  };

  const currentExample = examples[currentIndex] || {};
  const currentPair = pairsExercise[currentIndex % pairsExercise.length] || {
    question: "",
    options: [],
    answer: "",
    explanation: "",
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow-lg max-w-md mx-auto flex flex-col h-screen">
      <h2 className="text-xl font-bold text-blue-700 mb-3 text-center">
        Немецкие артикли и местоимения
      </h2>

      {/* Таб переключения */}
      <div className="flex mb-4">
        <button
          className={`flex-1 py-2 rounded-t-xl font-semibold ${
            selectedTab === "list" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("list")}
        >
          Список
        </button>
        <button
          className={`flex-1 py-2 rounded-t-xl font-semibold ${
            selectedTab === "quiz" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("quiz")}
        >
          Мини-тест
        </button>
        <button
          className={`flex-1 py-2 rounded-t-xl font-semibold ${
            selectedTab === "pairs" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => {
            setSelectedTab("pairs");
            setCurrentIndex(0);
            setShowAnswer(false);
            setSelectedOption("");
          }}
        >
          Парочки
        </button>
      </div>

      {/* Селекты */}
      {selectedTab !== "pairs" && (
        <div className="flex flex-col gap-2 mb-4">
          <select
            value={selectedCase}
            onChange={handleCaseChange}
            className="p-2 border rounded-lg w-full"
          >
            {cases.map((c) => (
              <option key={c} value={c}>
                {c} — {caseNames[c]}
              </option>
            ))}
          </select>
          <select
            value={selectedGender}
            onChange={handleGenderChange}
            className="p-2 border rounded-lg w-full"
          >
            {genders.map((g) => (
              <option key={g} value={g}>
                {genderNames[g]}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Список */}
      {selectedTab === "list" && (
        <div className="space-y-3 overflow-y-auto flex-1">
          {examples.length > 0 ? (
            examples.map((ex) => (
              <div
                key={ex.word + ex.sentence}
                className="p-3 rounded-xl border border-gray-200 bg-gray-50 text-left"
              >
                <p className="font-bold text-blue-700 text-lg">{ex.word}</p>
                <p className="text-gray-900">{ex.sentence}</p>
                <p className="text-gray-600 text-sm italic">{ex.translation}</p>
                <p className="text-gray-500 text-xs mt-1">{ex.note}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-4">
              Нет примеров для выбранного случая/рода.
            </p>
          )}
        </div>
      )}

      {/* Мини-тест */}
      {selectedTab === "quiz" && examples.length > 0 && (
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-r from-blue-50 to-white shadow-md text-center w-full">
            <p className="text-gray-900 text-lg mb-4">
              Вставьте правильный артикль/местоимение:
            </p>
            <p className="font-bold text-2xl text-blue-700">
              {currentExample.sentence.replace(currentExample.word, "___")}
            </p>
          </div>

          <div className="flex justify-between mt-6 w-full">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
            >
              Предыдущий
            </button>
            {!showAnswer ? (
              <button
                onClick={() => setShowAnswer(true)}
                className="px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700"
              >
                Показать ответ
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
              >
                Следующий
              </button>
            )}
          </div>

          {showAnswer && (
            <div className="mt-4 p-4 bg-white border-l-4 border-blue-600 rounded shadow w-full text-left">
              <p className="text-lg font-bold text-blue-700">
                Ответ: {currentExample.word}
              </p>
              <p className="text-gray-900 mt-1">{currentExample.sentence}</p>
              <p className="text-gray-800 italic mt-1">
                {currentExample.translation}
              </p>
              <p className="text-gray-500 mt-2">{currentExample.note}</p>
            </div>
          )}

          <p className="text-gray-500 text-sm mt-4 text-center">
            Пример {currentIndex + 1} из {examples.length}
          </p>
        </div>
      )}

      {/* Парочки */}
      {selectedTab === "pairs" && pairsExercise.length > 0 && (
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="p-6 rounded-2xl border border-gray-200 bg-gradient-to-r from-blue-50 to-white shadow-md flex-1 flex flex-col justify-center w-full">
            <p className="text-gray-900 text-lg mb-4">{currentPair.question}</p>

            <div className="grid grid-cols-2 gap-3">
              {currentPair.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  disabled={showAnswer}
                  className={`p-3 rounded-xl border shadow font-semibold ${
                    showAnswer
                      ? option === currentPair.answer
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
                  Правильный ответ: {currentPair.answer}
                </p>
                <p className="text-gray-500 mt-2">{currentPair.explanation}</p>
              </div>
            )}

            <button
              onClick={handleNext}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 self-center"
            >
              Следующий
            </button>

            <p className="text-gray-500 text-sm mt-4 text-center">
              Вопрос {currentIndex + 1} из {pairsExercise.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
