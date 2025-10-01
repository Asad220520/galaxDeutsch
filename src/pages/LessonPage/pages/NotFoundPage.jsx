import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Упс! Страница не найдена.</p>
      <p className="text-gray-500 mb-6">
        Похоже, вы попали на несуществующий маршрут.
      </p>
      <Link
        to="/"
        className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
      >
        <Home size={20} className="mr-2" />
        На главную
      </Link>
      <img
        src="https://undraw.co/api/illustrations/404" // Можно заменить на локальный svg
        alt="Not found"
        className="mt-8 w-80 max-w-full opacity-70"
      />
    </div>
  );
}

export default NotFoundPage;
