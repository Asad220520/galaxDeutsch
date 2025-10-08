import { useState, useEffect, useMemo, useRef } from "react";
import AudioPlayer from "../../../components/UI/AudioPlayer";

function ListenChoose({ onCompleteWord }) {
  const [favorites, setFavorites] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const audioRef = useRef(null);

  // Загружаем избранное один раз
  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(fav);
  }, []);

  const card = favorites[current];

  // Генерируем варианты ответов
  const options = useMemo(() => {
    if (!card) return [];
    const shuffled = [...favorites]
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((w) => w.german);
    if (!shuffled.includes(card.german)) shuffled[0] = card.german;
    return shuffled.sort(() => Math.random() - 0.5);
  }, [card, favorites]);

  // Автозапуск озвучки при смене карточки
  useEffect(() => {
    if (card && audioRef.current) {
      audioRef.current.play();
    }
  }, [card]);

  const handleSelect = (value) => {
    if (!card) return;
    setSelected(value);
    const correct = value === card.german;
    onCompleteWord?.(card.german, correct);

    setTimeout(() => {
      setSelected(null);
      setCurrent((prev) => (prev + 1 < favorites.length ? prev + 1 : 0));
    }, 600);
  };

  if (!favorites.length) {
    return (
      <p className="text-center mt-10">Сначала добавьте слова в избранное!</p>
    );
  }

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg flex flex-col items-center gap-4 w-full max-w-md mx-auto">
      <AudioPlayer ref={audioRef} word={card.german} />
      <div className="flex flex-col gap-2 w-full mt-2">
        {options.map((opt) => {
          let classes = "px-4 py-2 rounded border w-full text-left ";
          if (selected) {
            if (opt === card.german) classes += "bg-green-500 text-white";
            else if (opt === selected) classes += "bg-red-500 text-white";
            else classes += "bg-white text-black";
          } else {
            classes += "bg-white hover:bg-gray-100";
          }
          return (
            <button
              key={opt}
              disabled={!!selected}
              className={classes}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ListenChoose;
