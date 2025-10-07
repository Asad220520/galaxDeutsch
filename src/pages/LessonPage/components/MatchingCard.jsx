import { useState, useEffect } from "react";
import { setProgress } from "../../../utils/progress";
import AudioPlayer from "../../../components/UI/AudioPlayer";

function MatchingCardColumns({
  title,
  icon,
  words,
  pageSize = 5,
  lessonId,
  levelKey,
  onComplete,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [leftWords, setLeftWords] = useState([]);
  const [rightWords, setRightWords] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({});
  const [shakeWord, setShakeWord] = useState(null);
  const [pendingProgress, setPendingProgress] = useState(null);
  const [showCongrats, setShowCongrats] = useState(false);
  const [awaitingChoice, setAwaitingChoice] = useState(false);
  const [previewMode, setPreviewMode] = useState(true); // показываем правильный вариант до перемешивания

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

  // Инициализация страницы
  useEffect(() => {
    const pageItems = getPageItems();
    setLeftWords(pageItems.map((w) => w.german));
    setRightWords(pageItems.map((w) => w.russian)); // правильный вариант
    setSelectedLeft(null);
    setMatches({});
    setShowCongrats(false);
    setAwaitingChoice(false);
    setPreviewMode(true);
  }, [words, currentPage]);

  useEffect(() => {
    if (pendingProgress !== null) {
      if (onComplete) onComplete(pendingProgress);
      setPendingProgress(null);
    }
  }, [pendingProgress, onComplete]);

  const isCorrect = (german, russian) =>
    words.find((w) => w.german === german)?.russian === russian;

  const handleSelect = (side, value) => {
    if (side === "left") {
      setSelectedLeft(value);
      setShakeWord(null);
    } else if (side === "right" && selectedLeft) {
      if (isCorrect(selectedLeft, value)) {
        setMatches((prev) => {
          const newMatches = { ...prev, [selectedLeft]: value };
          const correctCountAll = Object.keys(newMatches).filter((g) =>
            isCorrect(g, newMatches[g])
          ).length;
          const percent = Math.round((correctCountAll / words.length) * 100);

          setProgress(lessonId, `matching_${levelKey}`, percent);
          setPendingProgress(percent);

          return newMatches;
        });
        setSelectedLeft(null);
      } else {
        setShakeWord(selectedLeft);
        setTimeout(() => setShakeWord(null), 500);
      }
    }
  };

  const pageItems = getPageItems();
  const totalPages = Math.ceil(words.length / pageSize);
  const allMatched = pageItems.every((item) => matches[item.german]);

  useEffect(() => {
    if (allMatched) {
      setShowCongrats(true);
      setAwaitingChoice(true);
    }
  }, [allMatched]);

  const handleChoice = (choice) => {
    if (choice === "next" && currentPage < totalPages - 1) {
      setCurrentPage((p) => p + 1);
    } else if (choice === "repeat" || currentPage === totalPages - 1) {
      const pageItems = getPageItems();
      setLeftWords(pageItems.map((w) => w.german));
      setRightWords(pageItems.map((w) => w.russian));
      setMatches({});
      setPreviewMode(true);
    }
    setShowCongrats(false);
    setAwaitingChoice(false);
  };

  const handleShuffle = () => {
    const pageItems = getPageItems();
    setRightWords(shuffle(pageItems.map((w) => w.russian)));
    setPreviewMode(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-4 text-xl font-bold text-blue-600">
        {icon} {title}
      </div>

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
              const matched = matches[word];
              const wrong = shakeWord === word;

              return (
                <div key={word} className="flex items-center">
                  <div className="flex rounded-lg items-center w-full border border-gray-300">
                    {/* Кнопка озвучки */}
                    <AudioPlayer word={word} />
                    <button
                      onClick={() => handleSelect("left", word)}
                      disabled={!!matched || previewMode}
                      className={`flex-1 p-4 rounded-lg font-medium text-start  text-lg transition 
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
              ${wrong ? "bg-red-500 text-white border-red-600 shake" : ""}
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
              const correct = leftKey && isCorrect(leftKey, word);
              const wrong = leftKey && !isCorrect(leftKey, word);

              return (
                <div key={word + index} className="flex items-center gap-2">
                  <button
                    onClick={() => handleSelect("right", word)}
                    disabled={!!leftKey || previewMode}
                    className={`flex-1 p-4 rounded-lg font-medium text-start border border-gray-300 text-lg transition 
              ${
                correct
                  ? "bg-green-500 text-white border-green-600 font-bold"
                  : ""
              }
              ${wrong ? "bg-red-500 text-white border-red-600 shake" : ""}
              ${
                !leftKey && !previewMode
                  ? "bg-white hover:bg-gray-100"
                  : "opacity-50 cursor-not-allowed"
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
