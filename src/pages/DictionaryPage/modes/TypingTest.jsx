import { useState, useEffect } from "react";
import AudioPlayer from "../../../components/UI/AudioPlayer";

function TypingTest({ onCompleteWord }) {
  const [favorites, setFavorites] = useState([]);
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [showGerman, setShowGerman] = useState(true); // 👈 состояние видимости немецкого слова

  // Загружаем избранное
  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(fav);
  }, []);

  const card = favorites[current];

  // Автопроизношение при смене слова
  useEffect(() => {
    if (card) {
      const utterance = new SpeechSynthesisUtterance(card.german);
      utterance.lang = "de-DE";
      speechSynthesis.speak(utterance);
    }
  }, [card]);

  // Универсальная нормализация для сравнения
  const normalize = (str) =>
    str
      ?.trim()
      .toLowerCase()
      .replace(/ё/g, "е")
      .replace(/[^a-zа-я0-9\s]/gi, "")
      .replace(/\s+/g, " ")
      .trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!card) return;

    const normalizedInput = normalize(input);
    const correct =
      normalizedInput === normalize(card.russian) ||
      normalizedInput === normalize(card.german);

    onCompleteWord?.(card.german, correct);
    setFeedback(correct ? "✅ Правильно!" : "❌ Ошибка");

    setTimeout(() => {
      setCurrent((prev) => (prev + 1 < favorites.length ? prev + 1 : 0));
      setInput("");
      setFeedback(null);
    }, 800);
  };

  if (!favorites.length) {
    return (
      <p className="text-center mt-10">Сначала добавьте слова в избранное!</p>
    );
  }

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      {/* Немецкое слово (по желанию) */}
      {showGerman && (
        <div className="text-2xl font-bold mb-2">{card.german}</div>
      )}

      <AudioPlayer word={card.german} />

      {/* Кнопка показать/скрыть немецкое слово */}
      <button
        onClick={() => setShowGerman((prev) => !prev)}
        className="text-sm text-blue-500 hover:underline"
      >
        {showGerman ? "Скрыть немецкое слово" : "Показать немецкое слово"}
      </button>

      {/* Подсказка */}
      <div className="text-sm text-gray-500 mb-2 text-center">
        Введите перевод на <b>русском</b> или <b>немецком</b>:
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Введите перевод..."
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Проверить
        </button>
      </form>

      {/* Результат */}
      {feedback && <div className="text-xl">{feedback}</div>}

     
    </div>
  );
}

export default TypingTest;
