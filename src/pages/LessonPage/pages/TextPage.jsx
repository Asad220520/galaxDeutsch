import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { allLessons } from "../allLessons";
import TextCard from "../components/TextCard";
import { FileText } from "lucide-react";

function TextPage() {
  const { id } = useParams();
  const lesson = allLessons.find((l) => l.id === Number(id));

  const [currentLevel, setCurrentLevel] = useState("level1"); // по умолчанию уровень 1

  if (!lesson) {
    return <p className="text-center text-red-500 mt-4">Урок не найден</p>;
  }

  const levelData = lesson.levels[currentLevel];

  if (!levelData || !levelData.text || levelData.text.items.length === 0) {
    return (
      <p className="text-center text-red-500 mt-4">
        Текстовые задания не найдены для этого уровня
      </p>
    );
  }

  const levelsList = Object.keys(lesson.levels);

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {lesson.title} — {levelData.text.title}
      </h1>

      {/* Выбор уровня */}
      <div className="flex gap-2 mb-4">
        {levelsList.map((lvl) => (
          <button
            key={lvl}
            onClick={() => setCurrentLevel(lvl)}
            className={`px-3 py-1 rounded ${
              currentLevel === lvl
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {lesson.levels[lvl].title}
          </button>
        ))}
      </div>

      {/* TextCard с пошаговыми заданиями */}
      <TextCard
        title={levelData.text.title}
        items={levelData.text.items}
        icon={<FileText size={24} />}
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

export default TextPage;
