// WordLearningModule.jsx
import { useState, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import MatchingFavorites from "./modes/MatchingFavorites";
import Flashcards from "./modes/Flashcards";
import MultipleChoice from "./modes/MultipleChoice";
import ListenChoose from "./modes/ListenChoose";
import TypingTest from "./modes/TypingTest";

function WordLearningModule({ pageSize = 5 }) {
  const favorites = useSelector((state) => state.favorites.items);
  const [mode, setMode] = useState("matching");
  const [completedWords, setCompletedWords] = useState([]);

  const correctAudio = useRef(new Audio("/sounds/correct.mp3"));
  const wrongAudio = useRef(new Audio("/sounds/wrong.mp3"));

  const playSound = (correct = true) => {
    const audio = correct ? correctAudio.current : wrongAudio.current;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  };

  const modes = useMemo(() => [
    { key: "matching", label: "Метчинг" },
    { key: "flashcards", label: "Флешкарты" },
    { key: "multipleChoice", label: "Выбор" },
    { key: "listen", label: "Аудирование" },
    { key: "typing", label: "Письмо" },
  ], []);

  const handleCompleteWord = (word, correct) => {
    setCompletedWords((prev) => prev.includes(word) ? prev : [...prev, word]);
    playSound(correct);
  };
  
  const progress = favorites.length
    ? Math.round((completedWords.length / favorites.length) * 100)
    : 0;

  if (!favorites.length) return <p className="text-center mt-10">Сначала добавьте слова в избранное!</p>;

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Учим слова</h1>

      <div className="flex justify-center gap-2 mb-4 flex-wrap">
        {modes.map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            className={`px-3 py-1 rounded ${mode === m.key ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div
          className="bg-green-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="mt-4">
        {mode === "matching" && <MatchingFavorites onCompleteWord={handleCompleteWord} pageSize={pageSize} />}
        {mode === "flashcards" && <Flashcards onCompleteWord={handleCompleteWord} />}
        {mode === "multipleChoice" && <MultipleChoice onCompleteWord={handleCompleteWord} />}
        {mode === "listen" && <ListenChoose onCompleteWord={handleCompleteWord} />}
        {mode === "typing" && <TypingTest onCompleteWord={handleCompleteWord} />}
      </div>
    </div>
  );
}

export default WordLearningModule;
