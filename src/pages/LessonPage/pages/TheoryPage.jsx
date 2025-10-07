import { useParams } from "react-router-dom";
import { allLessons } from "../Lection/allLessons";
import TheoryCard from "../components/TheoryCard";

function TheoryPage() {
  const { id, level } = useParams();
  const lesson = allLessons.find((l) => l.id === Number(id));

  if (!lesson) {
    return <p className="text-center text-red-500 mt-6">Урок не найден</p>;
  }

  const levelData = lesson.levels[level];
  if (!levelData || !levelData.theory) {
    return <p className="text-center text-red-500 mt-6">Теория не найдена</p>;
  }

  const { title, content } = levelData.theory;

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-6">
        {lesson.title}
      </h1>
      <TheoryCard title={title} content={content} />
    </div>
  );
}

export default TheoryPage;
