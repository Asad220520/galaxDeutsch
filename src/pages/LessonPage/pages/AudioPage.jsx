import { useParams, Link } from "react-router-dom";
import { allLessons } from "../Lection/allLessons";
import AudioCard from "../components/AudioCard";

function AudioPage() {
  const { id, level } = useParams(); // добавляем level
  const lesson = allLessons.find((l) => l.id === Number(id));

  if (!lesson) {
    return <p className="text-center text-red-500 mt-4">Урок не найден</p>;
  }

  // если есть уровни → берём audio из уровня, иначе берём общий audio
  const audioData = lesson.levels ? lesson.levels[level]?.audio : lesson.audio;

  if (!audioData) {
    return (
      <p className="text-center text-red-500 mt-4">
        Аудиозадания не найдены для этого уровня
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        {lesson.title} — {audioData.title} {level && `(${level})`}
      </h1>

      <AudioCard title={audioData.title} src={audioData.src} />

      <Link
        to={`/lesson/${lesson.id}`}
        className="inline-block mt-4 text-blue-500 hover:underline"
      >
        ← Назад к уроку
      </Link>
    </div>
  );
}

export default AudioPage;
