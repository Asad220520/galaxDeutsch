// Home.jsx
import { Link } from "react-router-dom";
import { allQuestions } from "./questions";

export default function FragenPage() {
  // Создаем массив тем из allQuestions
  const lessons = Object.keys(allQuestions).map((key, index) => ({
    id: key,
    title: `Lektion ${index + 1} – ${allQuestions[key][0]?.topic || "Thema"}`,
  }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Wähle ein Thema</h1>

        <div className="space-y-3">
          {lessons.map((lesson) => (
            <Link
              key={lesson.id}
              to={`/fragen/${lesson.id}`}
              className="block bg-blue-500 text-white py-3 px-4 rounded-xl hover:bg-blue-600 transition shadow"
            >
              {lesson.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
