import { useState, useEffect } from "react";
import Button from "../../../components/UI/Button";

function PuzzleCard({ title, items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPuzzle, setShowPuzzle] = useState(true);

  const handleNext = () => {
    setShowPuzzle(false);
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setShowPuzzle(true);
    }, 300);
  };

  return (
    <div className="rounded-xl shadow-lg overflow-hidden mx-2 my-4 sm:mx-0">
      <div className="p-4 bg-blue-600 text-white flex items-center gap-3">
        <span className="font-semibold text-lg sm:text-xl">{title}</span>
      </div>
      <div className="p-4 bg-gray-50 text-gray-800 min-h-[220px] sm:min-h-[200px]">
        {currentIndex < items.length ? (
          <div
            className={`transition-opacity duration-300 ${
              showPuzzle ? "opacity-100" : "opacity-0"
            }`}
          >
            <SinglePuzzle
              key={currentIndex}
              sentence={items[currentIndex].german}
              translation={items[currentIndex].russian}
              distractors={items[currentIndex].distractors || []}
              onNext={handleNext}
            />
          </div>
        ) : (
          <p className="text-green-600 font-semibold text-center mt-4 text-base sm:text-lg">
            Поздравляем! Вы завершили все предложения.
          </p>
        )}
      </div>
    </div>
  );
}

function SinglePuzzle({ sentence, translation, distractors, onNext }) {
  const words = sentence.split(" ");
  const [availableWords, setAvailableWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const shuffled = [...words, ...distractors].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setSelectedWords([]);
    setChecked(false);
    setIsCorrect(false);
  }, [sentence, distractors]);

  const handleSelect = (word) => {
    if (checked) return;
    setAvailableWords(availableWords.filter((w) => w !== word));
    setSelectedWords([...selectedWords, word]);
  };

  const handleDeselect = (word) => {
    if (checked) return;
    setSelectedWords(selectedWords.filter((w) => w !== word));
    setAvailableWords([...availableWords, word]);
  };

  const handleCheck = () => {
    const correct = selectedWords.join(" ") === sentence;
    setIsCorrect(correct);
    setChecked(true);
  };

  const getWordClass = (isSelected, isCorrectWord) => {
    if (!checked)
      return "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200";

    if (isSelected && isCorrectWord)
      return "bg-green-500 text-white border-green-500";
    if (isSelected && !isCorrectWord)
      return "bg-red-500 text-white border-red-500";
    if (!isSelected && isCorrectWord)
      return "bg-gray-200 text-gray-700 border-gray-300";
    return "bg-gray-100 text-gray-800 border-gray-300";
  };

  return (
    <>
      <p className="mb-2 text-gray-700 font-medium text-sm sm:text-base text-center">
        Соберите фразу
      </p>
      <Button variant="secondary" size="sm" className="mb-2 w-full" disabled>
        {translation}
      </Button>

      {/* Выбранная фраза */}
      <div className="border rounded-xl p-3 bg-white shadow-sm m-2 sm:m-4 min-h-[48px] flex flex-wrap gap-2 justify-center">
        {selectedWords.length > 0 ? (
          selectedWords.map((word, i) => (
            <button
              key={i}
              onClick={() => handleDeselect(word)}
              className={`px-3 py-2 rounded-xl border text-sm sm:text-base ${getWordClass(
                true,
                words.includes(word)
              )}`}
            >
              {word}
            </button>
          ))
        ) : (
          <span className="text-gray-400 text-base">Выберите слова ниже</span>
        )}
      </div>

      {/* Кнопки доступных слов */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {availableWords.map((word, i) => (
          <button
            key={i}
            onClick={() => handleSelect(word)}
            className={`px-3 py-2 rounded-xl border text-sm sm:text-base ${getWordClass(
              false,
              words.includes(word)
            )}`}
          >
            {word}
          </button>
        ))}
      </div>

      {/* Кнопка проверки/дальше */}
      <div className="mt-auto">
        {!checked ? (
          <Button
            onClick={handleCheck}
            disabled={selectedWords.length !== words.length}
            variant="primary"
            size="md"
            className="w-full"
          >
            Проверить
          </Button>
        ) : (
          <>
            <p
              className={`text-center font-semibold mb-2 ${
                isCorrect ? "text-green-600" : "text-red-600"
              }`}
            >
              {isCorrect ? "Правильно!" : "Неправильно"}
            </p>
            {!isCorrect && (
              <p className="text-center text-gray-700 mb-4">
                Правильный ответ:{" "}
                <span className="font-semibold">{sentence}</span>
              </p>
            )}
            <Button
              onClick={onNext}
              variant="primary"
              size="md"
              className="w-full"
            >
              Дальше
            </Button>
          </>
        )}
      </div>
    </>
  );
}

export default PuzzleCard;
