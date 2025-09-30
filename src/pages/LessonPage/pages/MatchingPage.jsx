import { useParams, Link } from "react-router-dom";
import { allLessons } from "../allLessons";
import MatchingCard from "../components/MatchingCard";
import { Puzzle } from "lucide-react";

function MatchingPage() {
  const { id } = useParams();
  const lesson = allLessons.find((l) => l.id === Number(id));

  if (!lesson)
    return <p className="text-center text-red-500 mt-4">Урок не найден</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {lesson.title} — {lesson.matching.title}
      </h1>

      <MatchingCard
        title={lesson.matching.title}
        icon={<Puzzle size={24} />}
        words={lesson.matching.items}
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
