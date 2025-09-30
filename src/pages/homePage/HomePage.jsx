import { Link } from "react-router-dom";
import { Book, CheckCircle } from "lucide-react";
import { useState } from "react";
import { allLessons } from "../LessonPage/allLessons"; // импортируем массив всех уроков

function HomePage() {
  const [lessons, setLessons] = useState(allLessons);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Уроки немецкого языка
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {lessons.map((lesson) => {
          return (
            <div
              key={lesson.id}
              className="relative group rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Ссылка на детальный урок */}
              <Link
                to={`/lesson/${lesson.id}`}
                className="flex items-center gap-3 p-4 bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                <Book size={24} />
                <span className="font-semibold">{lesson.title}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
