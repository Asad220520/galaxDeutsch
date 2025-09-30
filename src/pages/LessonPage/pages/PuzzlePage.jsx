import { useParams, Link } from "react-router-dom";
import { allLessons } from "../allLessons";
import PuzzleCard from "../components/PuzzleCard";

function PuzzlePage() {
  const { id, level } = useParams(); // добавили level
  const lesson = allLessons.find((l) => l.id === Number(id));

  if (!lesson)
    return <p className="text-center text-red-500 mt-4">Урок не найден</p>;

  // получаем puzzle именно для выбранного уровня
  const levelData = lesson.levels?.[level] || lesson.puzzle;

  if (!levelData || !levelData.puzzle?.items) {
    return (
      <p className="text-center text-red-500 mt-4">
        Пазлы не найдены для этого уровня
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <Link
        to={`/lesson/${lesson.id}`}
        className="inline-block mt-4 text-blue-500 hover:underline"
      >
        ← Назад к уроку
      </Link>

      <PuzzleCard
        items={levelData.puzzle.items}
        title={levelData.puzzle.title}
      />
    </div>
  );
}

export default PuzzlePage;
