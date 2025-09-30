import { useParams, Link } from "react-router-dom";
import { allLessons } from "../allLessons";
import MatchingCard from "../components/MatchingCard";
import { Puzzle } from "lucide-react";

function MatchingPage() {
  const { id, level } = useParams(); // добавили level
  const lesson = allLessons.find((l) => l.id === Number(id));

  if (!lesson)
    return <p className="text-center text-red-500 mt-4">Урок не найден</p>;

  // получаем matching именно для выбранного уровня
  const levelData = lesson.levels?.[level] || lesson.matching;

  if (!levelData || !levelData.matching) {
    return (
      <p className="text-center text-red-500 mt-4">
        Мэтчинг не найден для этого уровня
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {lesson.title} — {levelData.matching.title} ({level})
      </h1>

      <MatchingCard
        title={levelData.matching.title}
        icon={<Puzzle size={24} />}
        words={levelData.matching.items}
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

export default MatchingPage;
