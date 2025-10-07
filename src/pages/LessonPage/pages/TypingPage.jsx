import { useParams, Link } from "react-router-dom";
import TypingCard from "../components/TypingCard";
import { allLessons } from "../Lection/allLessons";
import { getProgress, setProgress } from "../../../utils/progress";
import { useState, useEffect } from "react";

function TypingPage() {
  const { id, level } = useParams();
  const lesson = allLessons.find((l) => l.id === Number(id));
  const [progress, setLocalProgress] = useState(0);

  if (!lesson) {
    return <p className="text-center text-red-500 mt-4">Урок не найден</p>;
  }

  const typingData = lesson.levels
    ? lesson.levels[level]?.typing
    : lesson.typing;

  if (!typingData || !typingData.items) {
    return (
      <p className="text-center text-red-500 mt-4">
        Упражнения на проверку написания не найдены для этого уровня
      </p>
    );
  }

  const progressKey = `typing_${level || "default"}`;

  // Загружаем сохранённый прогресс
  useEffect(() => {
    const lessonProgress = getProgress()[lesson.id] || {};
    setLocalProgress(lessonProgress[progressKey] || 0);
  }, [lesson.id, progressKey]);

  // Обновление прогресса
  const handleProgressUpdate = (percent) => {
    setLocalProgress((prev) => {
      const newPercent = Math.max(prev, percent); // сохраняем максимум
      setProgress(lesson.id, progressKey, newPercent);
      return newPercent;
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {lesson.title} — {typingData.title} {level ? `(${level})` : ""}
      </h1>

      <TypingCard
        items={typingData.items}
        lessonId={lesson.id}
        levelKey={level || "default"}
        onProgress={handleProgressUpdate}
      />

      {/* Прогрессбар */}
      <div className="w-full bg-gray-200 h-3 rounded mt-2">
        <div
          className="bg-green-500 h-3 rounded transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-center mt-1 text-gray-700">{progress}%</p>

      <Link
        to={`/lesson/${lesson.id}`}
        className="inline-block mt-4 text-blue-500 hover:underline"
      >
        ← Назад к уроку
      </Link>
    </div>
  );
}

export default TypingPage;
