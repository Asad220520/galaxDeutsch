import { useParams, Link } from "react-router-dom";
import { allLessons } from "../allLessons";
import AudioCard from "../components/AudioCard";

function AudioPage() {
  const { id } = useParams();
  const lesson = allLessons.find((l) => l.id === Number(id));

  if (!lesson)
    return <p className="text-center text-red-500 mt-4">Урок не найден</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
    

      <AudioCard title={lesson.audio.title} src={lesson.audio.src} />

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
