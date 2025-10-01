import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// Импорт страниц
import HomePage from "./pages/homePage/HomePage";
import DictionaryPage from "./pages/DictionaryPage/DictionaryPage";
import SettingsPage from "./pages/settingsPage/SettingsPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
// Импорт хедера
import Header from "./components/header/Header";
// Импорт страниц уроков и упражнений
import LessonPage from "./pages/LessonPage/LessonPage";
import TheoryPage from "./pages/LessonPage/pages/TheoryPage";
import MatchingPage from "./pages/LessonPage/pages/MatchingPage";
import PuzzlePage from "./pages/LessonPage/pages/PuzzlePage";
import AudioPage from "./pages/LessonPage/pages/AudioPage";
import TextPage from "./pages/LessonPage/pages/TextPage";
import NotFoundPage from "./pages/LessonPage/pages/NotFoundPage";
import TopikPage from "./pages/LessonPage/Topik/TopikPage";
import TopikLesson from "./pages/LessonPage/Topik/TopikLesson";

const AppRouter = () => {
  const location = useLocation();

  // роуты, где не нужен Header
  const hideHeaderRoutes = ["/lesson/:id/:exercise/:level"];

  // проверяем, нужно ли скрыть хедер
  const shouldHideHeader = hideHeaderRoutes.some((route) =>
    location.pathname.match(
      route
        .replace(":id", "[^/]+")
        .replace(":exercise", "[^/]+")
        .replace(":level", "[^/]+")
    )
  );

  return (
    <div>
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/topik-page" element={<TopikPage />} />
        <Route path="/topik-lesson/:id" element={<TopikLesson />} />
        <Route path="*" element={<NotFoundPage />} />

        {/* Страница выбора урока */}
        <Route path="/lesson/:id" element={<LessonPage />} />

        {/* Страницы упражнений с уровнями */}
        <Route path="/lesson/:id/theory/:level" element={<TheoryPage />} />
        <Route path="/lesson/:id/matching/:level" element={<MatchingPage />} />
        <Route path="/lesson/:id/puzzle/:level" element={<PuzzlePage />} />
        <Route path="/lesson/:id/audio/:level" element={<AudioPage />} />
        <Route path="/lesson/:id/text/:level" element={<TextPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
