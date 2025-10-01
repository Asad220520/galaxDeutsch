import { Link } from "react-router-dom";
import { Book } from "lucide-react";
import { useState, useEffect } from "react";
import { allLessons } from "../LessonPage/Lection/allLessons";
import { getProgress } from "../../utils/progress";

function HomePage() {
  const [progress, setProgressState] = useState({});

  useEffect(() => {
    setProgressState(getProgress());
  }, []);

  const calculateLessonProgress = (lesson) => {
    const lessonProgress = progress[lesson.id] || {};
    const exercises = ["theory", "matching", "puzzle", "audio", "text"];

    if (lesson.levels) {
      let total = 0;
      let count = 0;
      Object.entries(lesson.levels).forEach(([levelKey, levelData]) => {
        exercises.forEach((ex) => {
          if (levelData[ex] !== undefined) {
            total += lessonProgress[`${ex}_${levelKey}`] || 0;
            count++;
          }
        });
      });
      return count > 0 ? Math.round(total / count) : 0;
    } else {
      const available = exercises.filter((ex) => lesson[ex] !== undefined);
      const total = available.reduce(
        (sum, ex) => sum + (lessonProgress[ex] || 0),
        0
      );
      return available.length ? Math.round(total / available.length) : 0;
    }
  };

  const getProgressColor = (percent) => {
    if (percent <= 40) return "bg-red-500";
    if (percent <= 70) return "bg-yellow-400";
    return "bg-green-400";
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Уроки немецкого языка
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {allLessons.map((lesson) => {
          const percent = calculateLessonProgress(lesson);
          const progressColor = getProgressColor(percent);

          return (
            <Link
              key={lesson.id}
              to={`/lesson/${lesson.id}`}
              className="group relative flex flex-col gap-2 p-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              <div className="flex items-center gap-3">
                <Book size={24} />
                <span className="font-semibold">{lesson.title}</span>
              </div>

              <div className="w-full bg-white/30 h-2 rounded mt-2">
                <div
                  className={`${progressColor} h-2 rounded transition-all duration-500`}
                  style={{ width: `${percent}%` }}
                ></div>
              </div>
              <span className="text-sm text-right">{percent}%</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
