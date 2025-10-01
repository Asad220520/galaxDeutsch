import { Link, useParams } from "react-router-dom";
import { Puzzle, Book, FileText, Headphones } from "lucide-react";
import { allLessons } from "./allLessons";
import { getProgress } from "../../utils/progress";
import { useState, useEffect } from "react";

function LessonPage() {
  const { id } = useParams();
  const lesson = allLessons.find((l) => l.id === Number(id));

  const [progressState, setProgressState] = useState({}); // прогресс упражнений

  useEffect(() => {
    if (lesson) {
      const saved = getProgress();
      setProgressState(saved[lesson.id] || {});
    }
  }, [lesson?.id]);

  if (!lesson) {
    return <p className="text-center text-red-500 mt-4">Урок не найден</p>;
  }

  const exercises = [
    { key: "theory", title: "Теория", icon: <Book size={24} /> },
    { key: "matching", title: "Мэтчинг", icon: <Puzzle size={24} /> },
    { key: "puzzle", title: "Пазл", icon: <Puzzle size={24} /> },
    { key: "audio", title: "Аудирование", icon: <Headphones size={24} /> },
    { key: "text", title: "Текст", icon: <FileText size={24} /> },
  ];

  const levels = lesson.levels ? Object.entries(lesson.levels) : null;

  // Функция для подсчета общего прогресса по уроку
  const calculateTotalProgress = () => {
    let total = 0;
    let count = 0;

    if (levels) {
      levels.forEach(([levelKey, levelData]) => {
        exercises.forEach((ex) => {
          if (levelData[ex.key] !== undefined) {
            total += progressState[`${ex.key}_${levelKey}`] || 0;
            count++;
          }
        });
      });
    } else {
      exercises.forEach((ex) => {
        if (lesson[ex.key] !== undefined) {
          total += progressState[ex.key] || 0;
          count++;
        }
      });
    }

    return count > 0 ? Math.round(total / count) : 0;
  };

  const totalProgress = calculateTotalProgress();

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{lesson.title}</h1>

      {levels ? (
        levels.map(([levelKey, levelData]) => (
          <div key={levelKey} className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-700">
              {levelData.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {exercises.map((ex) => {
                if (!levelData[ex.key]) return null;

                const percent = progressState[`${ex.key}_${levelKey}`] || 0;

                return (
                  <Link
                    key={ex.key}
                    to={`/lesson/${lesson.id}/${ex.key}/${levelKey}`}
                    className="flex flex-col gap-2 p-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
                  >
                    <div className="flex items-center gap-3">
                      {ex.icon}
                      <span className="font-semibold">{ex.title}</span>
                    </div>

                    {/* прогресс упражнения */}
                    <div className="w-full bg-white/30 h-2 rounded">
                      <div
                        className="bg-green-400 h-2 rounded"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-right">{percent}%</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {exercises.map((ex) => {
            if (!lesson[ex.key]) return null;

            const percent = progressState[ex.key] || 0;

            return (
              <Link
                key={ex.key}
                to={`/lesson/${lesson.id}/${ex.key}`}
                className="flex flex-col gap-2 p-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
              >
                <div className="flex items-center gap-3">
                  {ex.icon}
                  <span className="font-semibold">{ex.title}</span>
                </div>

                {/* прогресс упражнения */}
                <div className="w-full bg-white/30 h-2 rounded">
                  <div
                    className="bg-green-400 h-2 rounded"
                    style={{ width: `${percent}%` }}
                  ></div>
                </div>
                <span className="text-sm text-right">{percent}%</span>
              </Link>
            );
          })}
        </div>
      )}

      {/* Общий прогресс по уроку */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700">Прогресс урока:</h2>
        <div className="w-full bg-gray-200 h-3 rounded mt-2">
          <div
            className="bg-green-500 h-3 rounded"
            style={{ width: `${totalProgress}%` }}
          ></div>
        </div>
        <p className="text-center mt-1 text-gray-700">{totalProgress}%</p>
      </div>
    </div>
  );
}

export default LessonPage;
