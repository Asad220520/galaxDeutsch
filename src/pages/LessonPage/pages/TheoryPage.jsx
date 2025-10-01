import { useParams, Link } from "react-router-dom";
import { allLessons } from "../Lection/allLessons";
import TheoryCard from "../components/TheoryCard";

function TheoryPage() {
  const { id, level } = useParams(); // добавили level
  const lesson = allLessons.find((l) => l.id === Number(id));

  if (!lesson) {
    return <p className="text-center text-red-500 mt-4">Урок не найден</p>;
  }

  // если есть уровни → берём theory из уровня, иначе берём общий theory
  const theoryData = lesson.levels
    ? lesson.levels[level]?.theory
    : lesson.theory;

  if (!theoryData) {
    return (
      <p className="text-center text-red-500 mt-4">
        Теория не найдена для этого уровня
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {lesson.title} — {theoryData.title} {level && `(${level})`}
      </h1>

      <TheoryCard title={theoryData.title} content={theoryData.content} />

      <Link
        to={`/lesson/${lesson.id}`}
        className="inline-block mt-4 text-blue-500 hover:underline"
      >
        ← Назад к уроку
      </Link>
    </div>
  );
}

export default TheoryPage;
