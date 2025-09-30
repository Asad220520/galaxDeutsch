import { Link, useParams } from "react-router-dom";
import { Puzzle, Book, FileText, Headphones } from "lucide-react";
import { allLessons } from "./allLessons";

function LessonPage() {
  const { id } = useParams();
  const lesson = allLessons.find((l) => l.id === Number(id));

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

  // Если урок с уровнями
  const levels = lesson.levels ? Object.entries(lesson.levels) : null;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6 text-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{lesson.title}</h1>

      {levels ? (
        levels.map(([levelKey, levelData]) => (
          <div key={levelKey} className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-700">
              {levelData.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {exercises.map((ex) => {
                // Проверяем есть ли соответствующее упражнение на этом уровне
                if (!levelData[ex.key]) return null;

                return (
                  <Link
                    key={ex.key}
                    to={`/lesson/${lesson.id}/${ex.key}/${levelKey}`}
                    className="flex items-center gap-3 p-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
                  >
                    {ex.icon}
                    <span className="font-semibold">{ex.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {exercises.map((ex) => (
            <Link
              key={ex.key}
              to={`/lesson/${lesson.id}/${ex.key}`}
              className="flex items-center gap-3 p-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition"
            >
              {ex.icon}
              <span className="font-semibold">{ex.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default LessonPage;
