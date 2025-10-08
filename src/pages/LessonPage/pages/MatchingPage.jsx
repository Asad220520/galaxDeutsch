import { useParams, Link } from "react-router-dom";
import { allLessons } from "../Lection/allLessons";
import MatchingCardColumns from "../components/MatchingCard";
import { Puzzle } from "lucide-react";
import { useState, useEffect } from "react";
import { getProgress, setProgress } from "../../../utils/progress";

function MatchingPage() {
  const { id, level } = useParams();
  const lesson = allLessons.find((l) => l.id === Number(id));

  const [completed, setCompleted] = useState(0);

  if (!lesson) {
    return <p className="text-center text-red-500 mt-4">Урок не найден</p>;
  }

  const levelData = lesson.levels?.[level] || {};
  const matchingData = levelData.matching || lesson.matching;

  if (!matchingData) {
    return (
      <p className="text-center text-red-500 mt-4">
        Мэтчинг не найден для этого уровня
      </p>
    );
  }

  const progressKey = `matching_${level || "default"}`;

  useEffect(() => {
    const lessonProgress = getProgress()[lesson.id] || {};
    setCompleted(lessonProgress[progressKey] || 0);
  }, [lesson.id, progressKey]);

  const handleComplete = (percent) => {
    // Обновляем локальный прогресс и записываем
    setCompleted(percent);
    setProgress(lesson.id, progressKey, percent);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {lesson.title} — {matchingData.title} {level ? `(${level})` : ""}
      </h1>

      <MatchingCardColumns
        title={matchingData.title}
        icon={<Puzzle size={24} />}
        words={matchingData.items}
        lessonId={lesson.id}
        levelKey={level || "default"}
        onComplete={handleComplete}
      />

      {/* Прогресс выполнения */}
      <div className="w-full bg-gray-200 h-3 rounded mt-2">
        <div
          className="bg-green-500 h-3 rounded transition-all duration-500"
          style={{ width: `${completed}%` }}
        ></div>
      </div>
      <p className="text-right text-gray-700">{completed}%</p>

      <Link
        to={`/lesson/${lesson.id}`}
        className="inline-block mt-4 text-blue-500 hover:underline"
      >
        ← Назад к уроку
      </Link>
    </div>
  );
}

export default MatchingPage;
