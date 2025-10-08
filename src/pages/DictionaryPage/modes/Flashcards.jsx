// modes/Flashcards.jsx
import { useState, useEffect } from "react";
import AudioPlayer from "../../../components/UI/AudioPlayer";

function Flashcards({ onCompleteWord }) {
  const [cards, setCards] = useState([]);
  const [current, setCurrent] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
    setCards(fav);
  }, []);

  if (!cards.length)
    return (
      <p className="text-center mt-10">Сначала добавьте слова в избранное!</p>
    );

  const card = cards[current];

  const handleNext = () => {
    setShowTranslation(false);
    setCurrent((prev) => (prev + 1 < cards.length ? prev + 1 : 0));
  };

  const handleShow = (correct = true) => {
    setShowTranslation(true);
    onCompleteWord?.(card.german, correct);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg flex flex-col items-center gap-4">
      <AudioPlayer word={card.german} />
      <div className="text-2xl font-bold">{card.german}</div>
      {showTranslation && (
        <div className="text-xl text-gray-700">{card.russian}</div>
      )}
      <div className="flex gap-2">
        {!showTranslation && (
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => handleShow(true)}
          >
            Показать
          </button>
        )}
        {showTranslation && (
          <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            onClick={handleNext}
          >
            Следующее
          </button>
        )}
      </div>
    </div>
  );
}

export default Flashcards;
