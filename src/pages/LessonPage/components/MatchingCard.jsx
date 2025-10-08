import { useState, useEffect } from "react";
import AudioPlayer from "../../../components/UI/AudioPlayer";

function MatchingCardColumns({ title, icon, words, pageSize = 5, onComplete }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [leftWords, setLeftWords] = useState([]);
  const [rightWords, setRightWords] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({});
  const [shakeWord, setShakeWord] = useState(null);
  const [showCongrats, setShowCongrats] = useState(false);
  const [awaitingChoice, setAwaitingChoice] = useState(false);
  const [previewMode, setPreviewMode] = useState(true);

  // ————————————————————————————————
  // Вспомогательные функции
  // ————————————————————————————————
  const shuffle = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const getPageItems = () => {
    const start = currentPage * pageSize;
    return words.slice(start, start + pageSize);
  };

  const isCorrect = (german, russian) =>
    words.find((w) => w.german === german)?.russian === russian;

  // ————————————————————————————————
  // Инициализация страницы
  // ————————————————————————————————
  useEffect(() => {
    const pageItems = getPageItems();
    setLeftWords(pageItems.map((w) => w.german));
    setRightWords(pageItems.map((w) => w.russian));
    setSelectedLeft(null);
    setShowCongrats(false);
    setAwaitingChoice(false);
    setPreviewMode(true);
  }, [words, currentPage]);

  // ————————————————————————————————
  // Обработка кликов
  // ————————————————————————————————
  const handleSelect = (side, value) => {
    if (side === "left") {
      if (matches[value]) return; // уже сопоставлено
      setSelectedLeft(value);
      setShakeWord(null);
    } else if (side === "right" && selectedLeft) {
      if (isCorrect(selectedLeft, value)) {
        setMatches((prev) => ({ ...prev, [selectedLeft]: value }));
        setSelectedLeft(null);
      } else {
        setShakeWord(selectedLeft);
        setTimeout(() => setShakeWord(null), 400);
      }
    }
  };

  const pageItems = getPageItems();
  const totalPages = Math.ceil(words.length / pageSize);
  const allMatched = pageItems.every((item) => matches[item.german]);

  // ————————————————————————————————
  // Вызываем onComplete после обновления matches
  // ————————————————————————————————
  useEffect(() => {
    const percent = Math.round(
      (Object.keys(matches).length / words.length) * 100
    );
    if (onComplete) onComplete(percent);
  }, [matches, words, onComplete]);

  // ————————————————————————————————
  // Показ "отлично" при завершении страницы
  // ————————————————————————————————
  useEffect(() => {
    if (allMatched && pageItems.length > 0) {
      setShowCongrats(true);
      setAwaitingChoice(true);
    }
  }, [allMatched, pageItems.length]);

  // ————————————————————————————————
  // Поведение кнопок “далее / повторить”
  // ————————————————————————————————
  const handleChoice = (choice) => {
    if (choice === "next" && currentPage < totalPages - 1) {
      setCurrentPage((p) => p + 1);
    } else if (choice === "repeat") {
      // сбрасываем только текущую страницу
      const newMatches = { ...matches };
      pageItems.forEach((item) => delete newMatches[item.german]);
      setMatches(newMatches);
      setPreviewMode(true);
      setRightWords(pageItems.map((w) => w.russian));
      setSelectedLeft(null);
    }
    setShowCongrats(false);
    setAwaitingChoice(false);
  };

  const handleShuffle = () => {
    const items = getPageItems();
    setRightWords(shuffle(items.map((w) => w.russian)));
    setPreviewMode(false);
  };

  // ————————————————————————————————
  // Рендер
  // ————————————————————————————————
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-4 text-xl font-bold text-blue-600">
        {icon} {title}
      </div>

      {/* Прогресс бар */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-300"
          style={{
            width: `${(Object.keys(matches).length / words.length) * 100}%`,
          }}
        ></div>
      </div>

      {/* Кнопка перемешать */}
      {previewMode && !allMatched && (
        <div className="text-center mb-4">
          <button
            onClick={handleShuffle}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold"
          >
            Перемешать слова
          </button>
        </div>
      )}

      {/* Экран “отлично!” */}
      {showCongrats && awaitingChoice ? (
        <div className="text-center py-8">
          <h2 className="text-2xl text-green-500 mb-4 animate-bounce">
            🎉 Отлично!
          </h2>
          <p className="mb-4">Выберите, что делать дальше:</p>
          <div className="flex gap-4 justify-center">
            {currentPage < totalPages - 1 && (
              <button
                onClick={() => handleChoice("next")}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold"
              >
                Следующая страница
              </button>
            )}
            <button
              onClick={() => handleChoice("repeat")}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold"
            >
              Повторить текущую
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {/* Левая колонка */}
          <div className="space-y-2">
            {leftWords.map((word) => {
              const matched = !!matches[word];
              const wrong = shakeWord === word;
              return (
                <div key={word} className="flex items-center">
                  <div className="flex rounded-lg items-center w-full border border-gray-300">
                    <AudioPlayer word={word} />
                    <button
                      onClick={() => handleSelect("left", word)}
                      disabled={matched || previewMode}
                      className={`flex-1 p-4 rounded-lg font-medium text-start text-lg transition
                        ${
                          selectedLeft === word
                            ? "bg-blue-200 border-2 border-blue-500"
                            : ""
                        }
                        ${
                          matched
                            ? "bg-green-500 text-white border-green-600 font-bold"
                            : "bg-white hover:bg-gray-100"
                        }
                        ${
                          wrong
                            ? "bg-red-500 text-white border-red-600 shake"
                            : ""
                        }
                        ${previewMode ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      🇩🇪 {word}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Правая колонка */}
          <div className="space-y-2">
            {rightWords.map((word, index) => {
              const leftKey = Object.keys(matches).find(
                (k) => matches[k] === word
              );
              const disabled = !!leftKey || previewMode || !selectedLeft;
              return (
                <div key={word + index} className="flex items-center gap-2">
                  <button
                    onClick={() => handleSelect("right", word)}
                    disabled={disabled}
                    className={`flex-1 p-4 rounded-lg font-medium text-start border border-gray-300 text-lg transition 
                      ${
                        leftKey
                          ? "opacity-50 cursor-not-allowed"
                          : "bg-white hover:bg-gray-100"
                      }`}
                  >
                    🇷🇺 {word}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <style>{`
        .shake {
          animation: shake 0.3s ease-in-out;
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          50% { transform: translateX(6px); }
          75% { transform: translateX(-6px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default MatchingCardColumns;
