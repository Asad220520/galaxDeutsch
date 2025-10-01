import { useParams, Link } from "react-router-dom";
import { allLessons } from "../allLessons";
import PuzzleCard from "../components/PuzzleCard";
import { getLessonProgress, setProgress } from "../../../utils/progress";
import { useState, useEffect } from "react";

function PuzzlePage() {
  const { id, level } = useParams();
  const lesson = allLessons.find((l) => l.id === Number(id));

  const [progress, setLocalProgress] = useState({ value: 0, key: "" });

  useEffect(() => {
    if (lesson) {
      const lessonProgress = getLessonProgress(lesson.id);
      const key = level ? `puzzle_${level}` : "puzzle_default";
      setLocalProgress({ value: lessonProgress[key] || 0, key });
    }
  }, [lesson, level]);

  if (!lesson) {
    return <p className="text-center text-red-500 mt-4">Урок не найден</p>;
  }

  const puzzleData = lesson.levels
    ? lesson.levels[level]?.puzzle
    : lesson.puzzle;

  if (!puzzleData) {
    return (
      <p className="text-center text-red-500 mt-4">
        Пазл не найден для этого уровня
      </p>
    );
  }

  const handleProgressUpdate = (percent) => {
    const key = level ? `puzzle_${level}` : "puzzle_default";
    setProgress(lesson.id, key, percent);
    setLocalProgress({ value: percent, key });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">
        {lesson.title} — {puzzleData.title} {level ? `(${level})` : ""}
      </h1>

      {/* Прогрессбар */}
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-green-500 h-4 transition-all"
          style={{ width: `${progress.value}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 text-right">
        {progress.value}% завершено
      </p>

      <PuzzleCard
        items={puzzleData.items}
        lessonId={lesson.id}
        levelKey={level || "default"}
        onNext={(isCorrect, currentIndex, total) => {
          const percent = Math.round(((currentIndex + 1) / total) * 100);
          handleProgressUpdate(percent);
        }}
      />

      <Link
        to={`/lesson/${lesson.id}`}
        className="inline-block mt-4 text-blue-500 hover:underline"
      >
        ← Назад к уроку
      </Link>
    </div>
  );
}

export default PuzzlePage;
