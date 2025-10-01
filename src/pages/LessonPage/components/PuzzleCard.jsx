import { useState, useEffect } from "react";
import Button from "../../../components/UI/Button";
import { setProgress } from "../../../utils/progress";

function PuzzleCard({ title, items, lessonId, levelKey, onProgressUpdate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPuzzle, setShowPuzzle] = useState(true);

  const handleNext = (isCorrect) => {
    if (isCorrect) {
      const percent = Math.round(((currentIndex + 1) / items.length) * 100);
      setProgress(lessonId, `puzzle_${levelKey || "default"}`, percent);
      if (onProgressUpdate) onProgressUpdate();
    }

    setShowPuzzle(false);
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setShowPuzzle(true);
    }, 300);
  };

  if (currentIndex >= items.length) {
    return (
      <p className="text-green-600 font-semibold text-center mt-4 text-base sm:text-lg">
        Поздравляем! Вы завершили все предложения.
      </p>
    );
  }

  return (
    <div className="overflow-hidden mx-2 my-4 sm:mx-0">
      <div className="p-4 text-white flex items-center gap-3">
        <span className="font-semibold text-lg sm:text-xl">{title}</span>
      </div>
      <div className="p-4 bg-gray-50 text-gray-800">
        <div
          className={`transition-opacity duration-300 ${
            showPuzzle ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="mb-3 text-center">
            <p className="text-sm text-gray-600 font-medium">
              Задание {currentIndex + 1} из {items.length}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentIndex + 1) / items.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <SinglePuzzle
            key={currentIndex}
            sentence={items[currentIndex].german}
            translation={items[currentIndex].russian}
            distractors={items[currentIndex].distractors || []}
            onNext={handleNext}
          />
        </div>
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

  const shuffle = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const normalize = (str) => str.trim().toLowerCase().replace(/\s+/g, " ");

  useEffect(() => {
    const shuffled = shuffle([...words, ...distractors]);
    setAvailableWords(shuffled);
    setSelectedWords([]);
    setChecked(false);
    setIsCorrect(false);
  }, [sentence, distractors]);

  const handleSelect = (word) => {
    if (checked) return;
    setAvailableWords(
      availableWords.filter((w, i) => i !== availableWords.indexOf(word))
    );
    setSelectedWords([...selectedWords, word]);
  };

  const handleDeselect = (word) => {
    if (checked) return;
    setSelectedWords(
      selectedWords.filter((w, i) => i !== selectedWords.indexOf(word))
    );
    setAvailableWords([...availableWords, word]);
  };

  const handleCheck = () => {
    const correct = normalize(selectedWords.join(" ")) === normalize(sentence);
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
    <div className="relative flex flex-col pb-24">
      <p className="mb-2 text-gray-700 font-medium text-sm sm:text-base text-center">
        Соберите фразу
      </p>
      <Button variant="secondary" size="sm" className="mb-2 w-full" disabled>
        {translation}
      </Button>

      <div className="rounded-xl p-3 m-2 sm:m-4 flex flex-wrap gap-2 justify-center min-h-[50px]">
        {selectedWords.length > 0 ? (
          selectedWords.map((word, i) => (
            <button
              key={word + i}
              onClick={() => handleDeselect(word)}
              disabled={checked}
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

      <div className="fixed bottom-0 left-0 w-full bg-white p-3 shadow-[0_-2px_6px_rgba(0,0,0,0.1)]">
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {availableWords.map((word, i) => (
            <button
              key={word + i}
              onClick={() => handleSelect(word)}
              disabled={checked}
              className={`px-3 py-2 rounded-xl border text-sm sm:text-base ${getWordClass(
                false,
                words.includes(word)
              )}`}
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
          <div className="flex flex-col items-center">
            <p
              className={`text-center font-semibold mb-2 ${
                isCorrect ? "text-green-600" : "text-red-600"
              }`}
            >
              {isCorrect ? "Правильно!" : "Неправильно"}
            </p>
            {!isCorrect && (
              <p className="text-center text-gray-700 mb-2 text-sm">
                Правильный ответ:{" "}
                <span className="font-semibold">{sentence}</span>
              </p>
            )}
            <Button
              onClick={() => onNext(isCorrect)}
              variant="primary"
              size="md"
              className="w-full"
            >
              Дальше
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PuzzleCard;
