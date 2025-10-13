import { useNavigate } from "react-router-dom";
import AppRouter from "./AppRouter";
import { ArrowLeft } from "lucide-react"; // красивая иконка из lucide-react

function App() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
      {/* Кнопка "Назад" */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-3 left-3 z-50 bg-white/80 backdrop-blur-md border border-gray-300 rounded-full p-2 shadow-md active:scale-95 transition"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700" />
      </button>

      {/* Основное содержимое */}
      <AppRouter />
    </div>
  );
}

export default App;
