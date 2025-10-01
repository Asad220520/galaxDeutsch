import { useState, useEffect } from "react";

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function TextCard({ items, lessonId, levelKey, onProgress }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [options, setOptions] = useState([]);

  // если items нет, присваиваем пустой массив, чтобы хуки всегда вызывались
  const safeItems = items || [];

  const currentItem = safeItems[currentIndex];
  const correctAnswer = currentItem?.content;
  const distractors = currentItem?.distractors || [];

  useEffect(() => {
    if (!currentItem) return;
    setSelected(null);
    setIsCorrect(null);
    setOptions(shuffleArray([correctAnswer, ...distractors]));
  }, [currentIndex, correctAnswer, distractors]);

  const handleClick = (option) => {
    if (selected) return;

    setSelected(option);
    const correct = option === correctAnswer;
    setIsCorrect(correct);

    if (correct && onProgress) {
      const percent = Math.round(((currentIndex + 1) / safeItems.length) * 100);
      onProgress(percent);
    }
  };

  const handleNext = () => setCurrentIndex((prev) => prev + 1);

  if (!safeItems.length) return <div>Нет данных</div>;
  if (currentIndex >= safeItems.length)
    return <div>🎉 Все задания выполнены!</div>;

  const displayedTitle = currentItem.german.includes("__")
    ? currentItem.german.replace("__", selected || "_____")
    : currentItem.german;

  return (
    <div className="p-4 bg-gray-50 rounded-xl shadow max-w-md mx-auto">
      <div className="bg-blue-500 text-white p-4 font-semibold flex flex-col gap-2">
        <span>{displayedTitle}</span>
        {currentItem.russian && (
          <span className="text-sm text-gray-100">{currentItem.russian}</span>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {options.map((opt) => (
          <button
            key={`${currentIndex}_${opt}`}
            onClick={() => handleClick(opt)}
            disabled={!!selected}
            className={`px-3 py-1 border rounded transition-transform duration-200 ${
              selected === opt ? "scale-105" : ""
            } ${
              selected
                ? opt === correctAnswer
                  ? "bg-green-200"
                  : selected === opt
                  ? "bg-red-200"
                  : "bg-gray-100"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {selected && (
        <div className="mt-3 text-center">
          <p className={isCorrect ? "text-green-600" : "text-red-600"}>
            {isCorrect ? "✅ Правильно" : `❌ Неправильно. ${correctAnswer}`}
          </p>
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

export default TextCard;
