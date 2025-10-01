import { Link } from "react-router-dom";
import { MessagesSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { topikLessons } from "./topikLessons";
import { getProgress } from "../../../utils/progress";

function TopikPage() {
  const [progress, setProgressState] = useState({});

  useEffect(() => {
    setProgressState(getProgress());
  }, []);

  const getProgressColor = (percent) => {
    if (percent <= 40) return "bg-red-500";
    if (percent <= 70) return "bg-yellow-400";
    return "bg-green-400";
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Топики для тренировки диалогов
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topikLessons.map((topic) => {
          const topikProgress = progress[`topik_${topic.id}`] || 0;
          const progressColor = getProgressColor(topikProgress);

          return (
            <Link
              key={topic.id}
              to={`/topik-lesson/${topic.id}`}
              className="group relative flex flex-col gap-2 p-4 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition"
            >
              <div className="flex items-center gap-3">
                <MessagesSquare size={24} />
                <span className="font-semibold">{topic.title}</span>
              </div>

              <div className="w-full bg-white/30 h-2 rounded mt-2">
                <div
                  className={`${progressColor} h-2 rounded transition-all duration-500`}
                  style={{ width: `${topikProgress}%` }}
                ></div>
              </div>
              <span className="text-sm text-right">{topikProgress}%</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TopikPage;
