import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { allQuestions } from "./questions";

export default function App() {
  const { id } = useParams();
  const [lesson, setLesson] = useState(id || "");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [activeTab, setActiveTab] = useState("quiz"); // "quiz" | "review"

  useEffect(() => {
    if (id) {
      setLesson(id);
      const q = allQuestions[id] || [];
      setQuestions(q);
      setCurrentQuestion(0);
      setScore(0);
      setSelectedOption(null);
      setShowAnswer(false);
      setShowScore(false);
      setAnswers([]);
      setActiveTab("quiz");
    }
  }, [id]);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);

    const correct = option.de === questions[currentQuestion].answer.de;
    if (correct) setScore((s) => s + 1);

    setAnswers((prev) => {
      const existingIndex = prev.findIndex((a) => a.index === currentQuestion);
      const newEntry = {
        index: currentQuestion,
        question: questions[currentQuestion].question,
        selected: option,
        correct: questions[currentQuestion].answer,
        isCorrect: correct,
      };
      if (existingIndex !== -1) {
        const copy = [...prev];
        copy[existingIndex] = newEntry;
        return copy;
      } else {
        return [...prev, newEntry];
      }
    });
  };

  const handleNext = () => {
    const next = currentQuestion + 1;
    setSelectedOption(null);
    setShowAnswer(false);
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setShowScore(false);
    setAnswers([]);
    setActiveTab("quiz");
  };

  const jumpToQuestion = (index) => {
    setCurrentQuestion(index);
    setSelectedOption(answers.find((a) => a.index === index)?.selected || null);
    setShowAnswer(false);
    setShowScore(false);
    setActiveTab("quiz");
  };

  if (!lesson) {
    return (
      <div className="text-center mt-10 p-4">
        <p>Тема не выбрана.</p>
        <div className="mt-4">
          <Link to="/fragen" className="text-blue-600 underline">
            Назад к выбору
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 p-4 sm:p-6">
      <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg w-full max-w-4xl">
        {/* Заголовок и вкладки */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 mb-4">
          <h1 className="text-lg sm:text-xl font-bold text-center sm:text-left">
            {questions[0]?.topic
              ? `Тема: ${questions[0].topic}`
              : "Тест по немецкому"}
          </h1>

          <div className="flex gap-2 flex-wrap justify-center sm:justify-end">
            <button
              onClick={() => setActiveTab("quiz")}
              className={`py-2 px-4 rounded-lg text-sm sm:text-base transition ${
                activeTab === "quiz"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Викторина
            </button>
            <button
              onClick={() => setActiveTab("review")}
              className={`py-2 px-4 rounded-lg text-sm sm:text-base transition ${
                activeTab === "review"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Разбор
            </button>
            <Link
              to="/fragen"
              className="py-2 px-4 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 text-sm sm:text-base transition"
            >
              Выбор темы
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Левая часть — контент */}
          <div className="lg:col-span-2">
            {activeTab === "quiz" && (
              <>
                {!showScore ? (
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold mb-2">
                      Вопрос {currentQuestion + 1} из {questions.length}
                    </h2>

                    <p className="mb-4 text-base">
                      {questions[currentQuestion]?.question.de}
                      {showAnswer && (
                        <span className="text-gray-500 block mt-1 text-sm">
                          {questions[currentQuestion]?.question.ru}
                        </span>
                      )}
                    </p>

                    <div className="space-y-3">
                      {questions[currentQuestion]?.options.map((option) => (
                        <button
                          key={option.de}
                          onClick={() => handleAnswer(option)}
                          disabled={showAnswer}
                          className={`w-full text-left py-3 px-4 rounded-lg transition text-base shadow-sm ${
                            showAnswer
                              ? option.de ===
                                questions[currentQuestion].answer.de
                                ? "bg-green-500 text-white"
                                : option.de === selectedOption?.de
                                ? "bg-red-500 text-white"
                                : "bg-gray-100 text-gray-600"
                              : "bg-blue-500 text-white hover:bg-blue-600"
                          }`}
                        >
                          <span>{option.de}</span>
                          {showAnswer && (
                            <div className="text-gray-200 text-sm mt-1">
                              {option.ru}
                            </div>
                          )}
                        </button>
                      ))}
                    </div>

                    {showAnswer && (
                      <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={handleNext}
                          className="py-3 px-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition w-full sm:w-auto"
                        >
                          {currentQuestion + 1 === questions.length
                            ? "Показать результат"
                            : "Следующий вопрос"}
                        </button>

                        <button
                          onClick={() => setActiveTab("review")}
                          className="py-3 px-4 bg-gray-200 rounded hover:bg-gray-300 transition w-full sm:w-auto"
                        >
                          Перейти к разбору
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-bold mb-3">Результат</h2>
                    <p className="text-lg mb-4">
                      {score} из {questions.length} правильных
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mb-4 justify-center sm:justify-start">
                      <button
                        onClick={handleRestart}
                        className="py-3 px-4 bg-green-500 text-white rounded hover:bg-green-600 transition"
                      >
                        Пройти заново
                      </button>
                      <button
                        onClick={() => setActiveTab("review")}
                        className="py-3 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                      >
                        Посмотреть ответы
                      </button>
                    </div>

                    <p className="text-sm text-gray-600">
                      Во вкладке «Разбор» можно увидеть все вопросы с
                      правильными и вашими ответами.
                    </p>
                  </div>
                )}
              </>
            )}

            {activeTab === "review" && (
              <div>
                <h2 className="text-lg font-semibold mb-3">Разбор вопросов</h2>

                {questions.length === 0 ? (
                  <p>Нет вопросов для этой темы.</p>
                ) : (
                  <div className="space-y-3">
                    {questions.map((q, idx) => {
                      const ans = answers.find((a) => a.index === idx);
                      const isCorrect = ans ? ans.isCorrect : false;
                      return (
                        <div
                          key={idx}
                          className="p-3 border rounded-lg hover:shadow cursor-pointer"
                          onClick={() => jumpToQuestion(idx)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">
                                {idx + 1}. {q.question.de}
                              </div>
                              <div className="text-xs text-gray-500">
                                {q.question.ru}
                              </div>
                            </div>

                            <div className="text-sm">
                              {ans ? (
                                <span
                                  className={`px-2 py-1 rounded text-white text-xs ${
                                    isCorrect ? "bg-green-500" : "bg-red-500"
                                  }`}
                                >
                                  {isCorrect ? "Правильно" : "Ошибка"}
                                </span>
                              ) : (
                                <span className="px-2 py-1 rounded bg-gray-200 text-xs text-gray-700">
                                  Не отвечено
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            <div className="p-2 bg-gray-50 rounded">
                              <div className="text-xs text-gray-500">
                                Правильный ответ
                              </div>
                              <div className="font-medium">{q.answer.de}</div>
                              <div className="text-xs text-gray-500">
                                {q.answer.ru}
                              </div>
                            </div>

                            <div
                              className="p-2 rounded"
                              style={{
                                background: ans
                                  ? ans.isCorrect
                                    ? "rgba(34,197,94,0.08)"
                                    : "rgba(239,68,68,0.06)"
                                  : "transparent",
                              }}
                            >
                              <div className="text-xs text-gray-500">
                                Ваш ответ
                              </div>
                              <div className="font-medium">
                                {ans ? ans.selected.de : "—"}
                              </div>
                              <div className="text-xs text-gray-500">
                                {ans ? ans.selected.ru : ""}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Правая колонка */}
          <aside className="lg:col-span-1 space-y-4">
            <div className="p-3 border rounded-lg">
              <div className="text-sm text-gray-500">Прогресс</div>
              <div className="font-medium">
                {answers.length} из {questions.length} отвечено
              </div>
              <div className="text-sm text-gray-500 mt-2">Баллы</div>
              <div className="font-medium">{score}</div>
            </div>

            <div className="p-3 border rounded-lg">
              <div className="text-sm text-gray-500 mb-2">Вопросы</div>
              <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-5 gap-2">
                {questions.map((_, idx) => {
                  const ans = answers.find((a) => a.index === idx);
                  const cls = ans
                    ? ans.isCorrect
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-gray-200";
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentQuestion(idx);
                        setActiveTab("quiz");
                        setSelectedOption(
                          answers.find((a) => a.index === idx)?.selected || null
                        );
                        setShowAnswer(false);
                        setShowScore(false);
                      }}
                      className={`py-2 px-2 rounded text-white text-xs ${cls} hover:opacity-90`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
