import { useState } from "react";
import { setProgress } from "../../../utils/progress";

function TypingCard({ items, lessonId, levelKey, onProgress }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const safeItems = items || [];
  const currentItem = safeItems[currentIndex];
  const correctAnswer = currentItem?.content || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) return;

    const correct =
      inputValue.trim().toLowerCase() === correctAnswer.toLowerCase();
    setIsCorrect(correct);

    if (correct && onProgress) {
      const percent = Math.round(((currentIndex + 1) / safeItems.length) * 100);
      onProgress(percent);
      setProgress(lessonId, `typing_${levelKey}`, percent);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setInputValue("");
    setIsCorrect(null);
    setShowHint(false);
  };

  const getHighlightedAnswer = () => {
    return correctAnswer.split("").map((char, i) => {
      const userChar = inputValue[i] || "";
      const correct = userChar.toLowerCase() === char.toLowerCase();
      return (
        <span key={i} className={correct ? "text-green-600" : "text-gray-400"}>
          {char}
        </span>
      );
    });
  };

  if (!safeItems.length) return <div>Нет данных</div>;
  if (currentIndex >= safeItems.length)
    return <div>🎉 Все задания выполнены!</div>;

  return (
    <div className="p-4 bg-gray-50 rounded-xl shadow max-w-md mx-auto">
      <div className="bg-blue-500 text-white p-4 font-semibold flex flex-col gap-2">
        <span>{currentItem.german}</span>
        {currentItem.russian && (
          <span className="text-sm text-gray-100">{currentItem.russian}</span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border rounded p-2 text-lg"
          placeholder="Введите перевод..."
          disabled={isCorrect !== null}
        />
        <button
          type="submit"
          disabled={isCorrect !== null}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Проверить
        </button>
      </form>

      {isCorrect !== null && (
        <div className="mt-3 text-center">
          <p className={isCorrect ? "text-green-600" : "text-red-600"}>
            {isCorrect
              ? "✅ Правильно"
              : showHint
              ? getHighlightedAnswer()
              : "❌ Неправильно. Попробуйте ещё раз!"}
          </p>

          {!isCorrect && !showHint && (
            <button
              onClick={() => setShowHint(true)}
              className="mt-1 text-sm text-blue-500 underline"
            >
              Показать подсказку
            </button>
          )}

          <button
            onClick={handleNext}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Дальше
          </button>
        </div>
      )}
    </div>
  );
}

export default TypingCard;
