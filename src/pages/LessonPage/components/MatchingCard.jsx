import { useState, useEffect } from "react";

function MatchingCard({ title, icon, words, pageSize = 5 }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [leftWords, setLeftWords] = useState([]);
  const [rightWords, setRightWords] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({}); // {german: russian}
  const [showAnswer, setShowAnswer] = useState(true);

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

  useEffect(() => {
    const pageItems = getPageItems();
    setLeftWords(pageItems.map((w) => w.german));
    setRightWords(shuffle(pageItems.map((w) => w.russian)));
    setSelectedLeft(null);
    setMatches({});
    setShowAnswer(true);
  }, [words, currentPage]);

  const handleSelect = (side, value) => {
    if (side === "left") {
      setSelectedLeft(value);
    } else if (side === "right" && selectedLeft) {
      setMatches((prev) => ({
        ...prev,
        [selectedLeft]: value,
      }));
      setSelectedLeft(null);
    }
  };

  const isCorrect = (german) =>
    matches[german] === words.find((w) => w.german === german).russian;

  const totalPages = Math.ceil(words.length / pageSize);

  const pageItems = getPageItems();

  return (
    <div className="rounded-lg shadow overflow-hidden hover:shadow-lg transition">
      <div className="p-4 bg-blue-500 text-white flex items-center gap-3">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>
      <div className="p-4 bg-gray-50 text-gray-800">
        {showAnswer ? (
          <div className="space-y-2">
            {pageItems.map((item, i) => (
              <div
                key={item.german + i}
                className="flex justify-between p-2 border rounded bg-gray-100"
              >
                <span className="font-medium">{item.german}</span>
                <span className="font-semibold text-blue-600">
                  {item.russian}
                </span>
              </div>
            ))}
            <button
              onClick={() => setShowAnswer(false)}
              className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Перемешать и начать
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4">
              {/* Левая колонка */}
              <div className="space-y-2">
                {leftWords.map((word) => (
                  <button
                    key={word}
                    onClick={() => handleSelect("left", word)}
                    className={`p-2 border rounded w-full transition
                      ${
                        selectedLeft === word
                          ? "bg-blue-200"
                          : "bg-white hover:bg-gray-200"
                      }
                      ${
                        matches[word]
                          ? isCorrect(word)
                            ? "bg-green-400 text-white"
                            : "bg-red-400 text-white"
                          : ""
                      }`}
                  >
                    {word}
                  </button>
                ))}
              </div>

              {/* Правая колонка */}
              <div className="space-y-2">
                {rightWords.map((word) => (
                  <button
                    key={word}
                    onClick={() => handleSelect("right", word)}
                    className={`p-2 border rounded w-full transition
                      ${
                        Object.values(matches).includes(word)
                          ? "opacity-50 cursor-not-allowed"
                          : "bg-white hover:bg-gray-200"
                      }`}
                    disabled={Object.values(matches).includes(word)}
                  >
                    {word}
                  </button>
                ))}
              </div>
            </div>

            {/* Прогресс */}
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 font-medium">
                Сопоставлено {Object.keys(matches).length} из {words.length}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${
                      (Object.keys(matches).length / words.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Навигация страниц */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
                disabled={currentPage === 0}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Предыдущие 5
              </button>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages - 1))
                }
                disabled={currentPage === totalPages - 1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
              >
                Следующие 5
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default MatchingCard;
