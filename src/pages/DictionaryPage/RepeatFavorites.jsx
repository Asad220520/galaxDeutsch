// RepeatFavoritesMatching.jsx
import { useState, useEffect, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQueue, markCorrect, markWrong } from "../../store/repeatSlice";
import AudioPlayer from "../../components/UI/AudioPlayer";

function MatchingFavorites({ pageSize = 5 }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const queue = useSelector((state) => state.repeat.queue);

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matches, setMatches] = useState({});
  const [shakeWord, setShakeWord] = useState(null);
  const [highlightWord, setHighlightWord] = useState(null);
  const [wrongWord, setWrongWord] = useState(null);
  const [showCongrats, setShowCongrats] = useState(false);
  const [previewMode, setPreviewMode] = useState(true);
  const [rightWords, setRightWords] = useState([]);

  const shakeTimer = useRef(null);
  const highlightTimer = useRef(null);
  const wrongTimer = useRef(null);

  // Звуки
  const correctAudio = useRef(new Audio("/sounds/correct.mp3"));
  const wrongAudio = useRef(new Audio("/sounds/wrong.mp3"));

  const playSound = (correct = true) => {
    const audio = correct ? correctAudio.current : wrongAudio.current;
    audio.currentTime = 0;
    audio.play();
  };

  const shuffle = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  useEffect(() => {
    if (favorites.length) dispatch(setQueue(favorites));
  }, [favorites, dispatch]);

  const pageItems = useMemo(
    () =>
      queue.slice(currentPage * pageSize, currentPage * pageSize + pageSize),
    [queue, currentPage, pageSize]
  );

  const leftWords = useMemo(() => pageItems.map((w) => w.german), [pageItems]);

  useEffect(() => {
    setRightWords(shuffle(pageItems.map((w) => w.russian)));
    setSelectedLeft(null);
    setMatches({});
    setShowCongrats(false);
    setShakeWord(null);
    setHighlightWord(null);
    setWrongWord(null);
    setPreviewMode(true);
  }, [pageItems]);

  const isCorrect = (german, russian) =>
    queue.find((w) => w.german === german)?.russian === russian;

  const handleSelect = (side, value) => {
    if (side === "left") {
      if (matches[value]) return;
      setSelectedLeft(value);
      setShakeWord(null);
      setWrongWord(null);
    } else if (side === "right" && selectedLeft) {
      if (isCorrect(selectedLeft, value)) {
        setMatches((prev) => ({ ...prev, [selectedLeft]: value }));
        setSelectedLeft(null);
        dispatch(markCorrect());

        playSound(true);

        setHighlightWord(selectedLeft);
        if (highlightTimer.current) clearTimeout(highlightTimer.current);
        highlightTimer.current = setTimeout(() => setHighlightWord(null), 600);
      } else {
        setShakeWord(selectedLeft);
        setWrongWord(selectedLeft);
        dispatch(markWrong());

        playSound(false);

        if (shakeTimer.current) clearTimeout(shakeTimer.current);
        shakeTimer.current = setTimeout(() => setShakeWord(null), 400);

        if (wrongTimer.current) clearTimeout(wrongTimer.current);
        wrongTimer.current = setTimeout(() => setWrongWord(null), 600);
      }
    }
  };

  const allMatched = pageItems.every((item) => matches[item.german]);
  const totalPages = Math.ceil(queue.length / pageSize);

  useEffect(() => {
    if (allMatched && pageItems.length > 0) setShowCongrats(true);
  }, [allMatched, pageItems]);

  const repeatPage = () => {
    const incorrect = pageItems
      .filter((item) => !matches[item.german])
      .map((item) => item.russian);

    setRightWords(shuffle(incorrect));
    setSelectedLeft(null);
    setShowCongrats(false);
    setPreviewMode(true);
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage((p) => p + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage((p) => p - 1);
  };

  const handleShuffle = () => {
    const incorrect = pageItems
      .filter((item) => !matches[item.german])
      .map((item) => item.russian);
    setRightWords(shuffle(incorrect));
    setPreviewMode(false);
  };

  const getLeftButtonClasses = (word) => {
    const matched = !!matches[word];
    const wrong = wrongWord === word;
    const shake = shakeWord === word;
    const highlight = highlightWord === word;
    const selected = selectedLeft === word;

    return [
      "flex-1 p-4 rounded-lg border font-medium text-lg transition relative",
      matched
        ? "bg-green-500 text-white border-green-600 font-bold fade-green"
        : "bg-white hover:bg-gray-100",
      highlight ? "animate-bounce" : "",
      wrong ? "fade-red" : "",
      shake ? "shake" : "",
      selected ? "bg-blue-200 border-2 border-blue-500" : "",
      previewMode ? "opacity-50 cursor-not-allowed" : "",
    ].join(" ");
  };

  const getRightButtonClasses = (word, idx) => {
    const leftKey = Object.keys(matches).find((k) => matches[k] === word);
    const disabled = !!leftKey || previewMode || !selectedLeft;

    return [
      "flex-1 p-4 rounded-lg font-medium text-lg border border-gray-300 transition-opacity",
      leftKey
        ? "opacity-50 cursor-not-allowed"
        : "bg-white hover:bg-gray-100 fade-in",
      disabled ? "opacity-50 cursor-not-allowed" : "",
    ].join(" ");
  };

  if (!queue.length)
    return (
      <div className="text-center mt-10">
        <p>Сначала добавьте слова в избранное!</p>
      </div>
    );

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Повторение избранного
      </h2>

      <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-500"
          style={{
            width: `${(Object.keys(matches).length / pageItems.length) * 100}%`,
          }}
        ></div>
      </div>

      {previewMode && !allMatched && (
        <div className="text-center mb-4">
          <button
            onClick={handleShuffle}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold"
          >
            Перемешать слова
          </button>
        </div>
      )}

      {showCongrats ? (
        <div className="text-center py-6">
          <h2 className="text-2xl text-green-500 mb-4 animate-bounce">
            🎉 Отлично!
          </h2>
          <div className="flex justify-center gap-4">
            {currentPage > 0 && (
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg font-semibold"
                onClick={handlePrev}
              >
                Назад
              </button>
            )}
            {currentPage < totalPages - 1 && (
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold"
                onClick={handleNext}
              >
                Следующая страница
              </button>
            )}
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold"
              onClick={repeatPage}
            >
              Повторить страницу
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            {leftWords.map((word) => (
              <div key={word} className="flex items-center">
                <AudioPlayer word={word} />
                <button
                  onClick={() => handleSelect("left", word)}
                  disabled={!!matches[word] || previewMode}
                  className={getLeftButtonClasses(word)}
                >
                  🇩🇪 {word}
                </button>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {rightWords.map((word, idx) => (
              <button
                key={word + idx}
                disabled={!!matches[word] || previewMode || !selectedLeft}
                onClick={() => handleSelect("right", word)}
                className={getRightButtonClasses(word, idx)}
              >
                🇷🇺 {word}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        .shake { animation: shake 0.3s ease-in-out; }
        @keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-6px); } 50% { transform: translateX(6px); } 75% { transform: translateX(-6px); } 100% { transform: translateX(0); } }

        .fade-green { animation: fadeGreen 0.6s ease-in-out; }
        @keyframes fadeGreen { 0% { background-color: #22c55e; transform: scale(1); } 50% { background-color: #16a34a; transform: scale(1.1); } 100% { background-color: #22c55e; transform: scale(1); } }

        .fade-red { animation: fadeRed 0.6s ease-in-out; }
        @keyframes fadeRed { 0% { background-color: #ef4444; transform: scale(1); } 50% { background-color: #b91c1c; transform: scale(1.05); } 100% { background-color: #ef4444; transform: scale(1); } }

        .fade-in { animation: fadeIn 0.4s ease-in-out; }
        @keyframes fadeIn { 0% { opacity: 0; transform: translateY(-5px); } 100% { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}

export default MatchingFavorites;
