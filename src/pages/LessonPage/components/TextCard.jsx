import { useState } from "react";

function TextCard({ title, items, icon }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // Если нет элементов
  if (!items || items.length === 0) {
    return (
      <div className="p-4 text-red-600 font-semibold text-center">
        Ошибка: отсутствуют данные для карточки.
      </div>
    );
  }

  // Если дошли до конца всех заданий
  if (currentIndex >= items.length) {
    return (
      <div className="p-6 text-green-600 font-semibold text-center rounded-xl shadow-lg max-w-md mx-auto">
        🎉 Поздравляем! Вы завершили все задания.
      </div>
    );
  }

  const currentItem = items[currentIndex];
  const correctAnswer = currentItem.content;
  const distractors = currentItem.distractors || [];

  // Перемешиваем варианты
  const options = Array.from(new Set([correctAnswer, ...distractors])).sort(
    () => Math.random() - 0.5
  );

  const handleClick = (option) => {
    if (selected) return; // запрещаем менять после выбора
    setSelected(option);
    setIsCorrect(option === correctAnswer);
  };

  const handleNext = () => {
    setSelected(null);
    setIsCorrect(null);
    setCurrentIndex((prev) => prev + 1);
  };

  const displayedTitle = currentItem.german.replace("__", selected || "_____");

  return (
    <div className="rounded-xl shadow-lg overflow-hidden max-w-md mx-auto transition-transform transform hover:scale-105">
      {/* Заголовок с пропуском */}
      <div className="p-4 bg-blue-500 text-white flex items-center gap-3 font-semibold text-lg">
        {icon}
        <span>{displayedTitle}</span>
      </div>

      <div className="p-4 bg-gray-50 text-gray-800 space-y-4">
        {/* Прогресс */}
        <p className="text-sm text-gray-600 text-center">
          Задание {currentIndex + 1} из {items.length}
        </p>

        {/* Варианты ответа */}
        <div className="flex flex-wrap gap-2 justify-center">
          {options.map((option, i) => {
            let bgClass = "bg-white hover:bg-gray-100";
            if (selected) {
              if (option === correctAnswer)
                bgClass = "bg-green-200 border-green-400";
              else if (option === selected)
                bgClass = "bg-red-200 border-red-400";
              else bgClass = "bg-gray-100";
            }

            return (
              <button
                key={i}
                onClick={() => handleClick(option)}
                disabled={!!selected}
                className={`px-4 py-2 border rounded-lg shadow-sm font-medium transition-all duration-300 transform ${bgClass} ${
                  selected === option ? "scale-105" : "scale-100"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {/* Результат и кнопка "Дальше" */}
        {selected && (
          <div className="text-center">
            <p
              className={`mt-3 font-semibold text-lg ${
                isCorrect ? "text-green-600" : "text-red-600"
              }`}
            >
              {isCorrect
                ? "✅ Правильно!"
                : `❌ Неправильно. Правильный ответ: ${correctAnswer}`}
            </p>

            <button
              onClick={handleNext}
              className="mt-3 w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
            >
              Дальше
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TextCard;
