import { useState, useEffect } from "react";
import { setProgress } from "../../../utils/progress";

function LessonCard({
  title,
  icon,
  words,
  pageSize = 5,
  lessonId,
  levelKey,
  onComplete,
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [matches, setMatches] = useState({});
  const [typingIndex, setTypingIndex] = useState(0);
  const [phase, setPhase] = useState("matching"); // "matching" или "typing"

  // === Matching state ===
  const [leftWords, setLeftWords] = useState([]);
  const [rightWords, setRightWords] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [shakeWord, setShakeWord] = useState(null);

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

  const pageItems = getPageItems();

  // === Matching logic ===
  useEffect(() => {
    setLeftWords(pageItems.map((w) => w.german));
    setRightWords(shuffle(pageItems.map((w) => w.russian)));
    setSelectedLeft(null);
  }, [currentPage, words]);

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

          // Прогресс
          const correctCountAll = Object.keys(newMatches).filter((g) =>
            isCorrect(g, newMatches[g])
          ).length;

          const percent = Math.round((correctCountAll / words.length) * 100);
          setProgress(lessonId, `lesson_${levelKey}`, percent);

          return newMatches;
        });
        setSelectedLeft(null);
      } else {
        setShakeWord(selectedLeft);
        setTimeout(() => setShakeWord(null), 500);
      }
    }
  };

  const allMatched = pageItems.every((item) => matches[item.german]);

  // === Typing logic ===
  const currentTypingItem = pageItems[typingIndex] || {};
  const [inputValue, setInputValue] = useState("");
  const [isCorrectTyping, setIsCorrectTyping] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const handleTypingSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    if (!currentTypingItem || !currentTypingItem.german) return;

    const correct =
      inputValue.trim().toLowerCase() ===
      currentTypingItem.german.toLowerCase();
    setIsCorrectTyping(correct);

    if (correct) {
      const completedCount = typingIndex + 1;
      const percent = Math.round(
        ((Object.keys(matches).length + completedCount) / words.length) * 100
      );
      setProgress(lessonId, `lesson_${levelKey}`, percent);
    }
  };

  const handleTypingNext = () => {
    if (typingIndex + 1 < pageItems.length) {
      setTypingIndex((i) => i + 1);
      setInputValue("");
      setIsCorrectTyping(null);
      setShowHint(false);
    } else {
      // Переходим к следующей странице
      if (currentPage + 1 < Math.ceil(words.length / pageSize)) {
        setCurrentPage((p) => p + 1);
        setTypingIndex(0);
        setPhase("matching");
      } else {
        // Все страницы пройдены
        if (onComplete) onComplete();
      }
    }
  };

  const getHighlightedAnswer = () => {
    if (!currentTypingItem || !currentTypingItem.german) return null;

    return currentTypingItem.german.split("").map((char, i) => {
      const userChar = inputValue[i] || "";
      const correct = userChar.toLowerCase() === char.toLowerCase();
      return (
        <span key={i} className={correct ? "text-green-600" : "text-gray-400"}>
          {char}
        </span>
      );
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-4 text-xl font-bold text-blue-600">
        {icon} {title}
      </div>

      {phase === "matching" ? (
        <>
          {allMatched ? (
            <div className="text-center py-8">
              <h2 className="text-2xl text-green-500 mb-2">🎉 Отлично!</h2>
              <button
                onClick={() => setPhase("typing")}
                className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold w-full"
              >
                Перейти к вводу немецких слов
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                {leftWords.map((word) => {
                  const matched = matches[word];
                  const wrong = shakeWord === word;
                  return (
                    <button
                      key={word}
                      onClick={() => handleSelect("left", word)}
                      disabled={!!matched}
                      className={`
                        w-full p-4 rounded-lg font-medium text-center text-lg transition
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
                      `}
                    >
                      🇩🇪 {word}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2">
                {rightWords.map((word) => {
                  const leftKey = Object.keys(matches).find(
                    (k) => matches[k] === word
                  );
                  const correct = leftKey && isCorrect(leftKey, word);
                  const wrong = leftKey && !isCorrect(leftKey, word);
                  return (
                    <button
                      key={word}
                      onClick={() => handleSelect("right", word)}
                      disabled={!!leftKey}
                      className={`
                        w-full p-4 rounded-lg font-medium text-center text-lg transition
                        ${
                          correct
                            ? "bg-green-500 text-white border-green-600 font-bold"
                            : ""
                        }
                        ${
                          wrong
                            ? "bg-red-500 text-white border-red-600 shake"
                            : ""
                        }
                        ${
                          !leftKey
                            ? "bg-white hover:bg-gray-100"
                            : "opacity-50 cursor-not-allowed"
                        }
                      `}
                    >
                      🇷🇺 {word}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className="bg-blue-500 text-white p-4 font-semibold flex flex-col gap-2">
            <span>{currentTypingItem.russian}</span>
            {currentTypingItem.german && (
              <span className="text-sm text-gray-100">
                Введите немецкое слово
              </span>
            )}
          </div>

          <form
            onSubmit={handleTypingSubmit}
            className="mt-4 flex flex-col gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border rounded p-2 text-lg"
              placeholder="Введите немецкое слово..."
              disabled={isCorrectTyping !== null}
            />
            <button
              type="submit"
              disabled={isCorrectTyping !== null}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Проверить
            </button>
          </form>

          {isCorrectTyping !== null && (
            <div className="mt-3 text-center">
              <p
                className={isCorrectTyping ? "text-green-600" : "text-red-600"}
              >
                {isCorrectTyping
                  ? "✅ Правильно"
                  : showHint
                  ? getHighlightedAnswer()
                  : "❌ Неправильно. Попробуйте ещё раз!"}
              </p>

              {!isCorrectTyping && !showHint && (
                <button
                  onClick={() => setShowHint(true)}
                  className="mt-1 text-sm text-blue-500 underline"
                >
                  Показать подсказку
                </button>
              )}

              <button
                onClick={handleTypingNext}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Дальше
              </button>
            </div>
          )}
        </>
      )}

      <style>{`
        .shake { animation: shake 0.3s ease-in-out; }
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

export default LessonCard;
