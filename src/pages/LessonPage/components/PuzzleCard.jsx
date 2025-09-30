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
  const [shuffledWords, setShuffledWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [clickedWord, setClickedWord] = useState(null);
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    const shuffled = [...words, ...distractors].sort(() => Math.random() - 0.5);
    setShuffledWords(shuffled);
    setSelectedWords([]);
    setClickedWord(null);
    setChecked(false);
    setIsCorrect(false);
  }, [sentence, distractors]);

  const handleClick = (word) => {
    if (checked) return;

    setClickedWord(word);
    setTimeout(() => setClickedWord(null), 200);

    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
    } else {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleCheck = () => {
    const correct = selectedWords.join(" ") === sentence;
    setIsCorrect(correct);
    setChecked(true);
  };

  // Функция для подсветки слов после проверки
  const getWordClass = (word) => {
    if (!checked)
      return "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200";

    if (words.includes(word)) {
      if (selectedWords.includes(word))
        return "bg-green-500 text-white border-green-500";
      return "bg-gray-200 text-gray-700 border-gray-300"; // правильное слово, не выбрано
    } else if (selectedWords.includes(word)) {
      return "bg-red-500 text-white border-red-500"; // неверное выбранное слово
    }
    return "bg-gray-100 text-gray-800 border-gray-300"; // остальные
  };

  return (
    <>
      <p className="mb-2 text-gray-700 font-medium text-sm sm:text-base text-center">
        Соберите фразу
      </p>
      <Button variant="secondary" size="sm" className="mb-2 w-full" disabled>
        {translation}
      </Button>
      <div className="border rounded-xl p-6 bg-white shadow-md m-2 sm:m-4">
        <p className="mb-4 text-gray-800 text-sm sm:text-base text-center min-h-[40px]">
          <span className="font-semibold">{selectedWords.join(" ")}</span>
        </p>
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {shuffledWords.map((word, i) => (
            <button
              key={i}
              onClick={() => handleClick(word)}
              className={`px-3 py-3 rounded-xl border text-base transition-transform duration-200 transform
                ${getWordClass(word)}
                ${
                  clickedWord === word
                    ? "scale-110 -translate-y-1 rotate-2"
                    : ""
                }
              `}
            >
              {word}
            </button>
          ))}
        </div>

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
            <p className="text-center text-gray-700 mb-4">
              Правильный ответ:{" "}
              <span className="font-semibold">{sentence}</span>
            </p>
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
