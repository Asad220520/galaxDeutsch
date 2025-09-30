import { useState, useEffect } from "react";

function MatchingCard({ title, icon, words }) {
  const [leftWords, setLeftWords] = useState([]);
  const [rightWords, setRightWords] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({}); // {german: russian}

  useEffect(() => {
    setLeftWords(words.map((w) => w.german));
    // Перемешиваем правые слова
    setRightWords(shuffle(words.map((w) => w.russian)));
  }, [words]);

  const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

  const handleSelect = (side, value) => {
    if (side === "left") {
      setSelectedLeft(value);
    } else if (side === "right" && selectedLeft) {
      const correct = words.find((w) => w.german === selectedLeft).russian;
      setMatches((prev) => ({
        ...prev,
        [selectedLeft]: value,
      }));
      setSelectedLeft(null);
    }
  };

  const isCorrect = (german) =>
    matches[german] === words.find((w) => w.german === german).russian;

  return (
    <div className="rounded-lg shadow overflow-hidden hover:shadow-lg transition">
      <div className="p-4 bg-blue-500 text-white flex items-center gap-3">
        {icon}
        <span className="font-semibold">{title}</span>
      </div>
      <div className="p-4 bg-gray-50 text-gray-800">
        <div className="grid grid-cols-2 gap-4">
          {/* Левая колонка */}
          <div className="space-y-2">
            {leftWords.map((word) => (
              <button
                key={word}
                onClick={() => handleSelect("left", word)}
                className={`p-2 border rounded w-full transition 
                  ${selectedLeft === word ? "bg-blue-200" : ""}
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
      </div>
    </div>
  );
}

export default MatchingCard;
