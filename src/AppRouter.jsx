import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import SettingsPage from "./pages/settingsPage/SettingsPage";
import Header from "./components/header/Header";
import DictionaryPage from "./pages/DictionaryPage/DictionaryPage";


import LessonPage from "./pages/LessonPage/LessonPage";
import TheoryPage from "./pages/LessonPage/pages/TheoryPage";
import MatchingPage from "./pages/LessonPage/pages/MatchingPage";
import PuzzlePage from "./pages/LessonPage/pages/PuzzlePage";
import AudioPage from "./pages/LessonPage/pages/AudioPage";
import TextPage from "./pages/LessonPage/pages/TextPage";


const AppRouter = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/lesson/:id" element={<LessonPage />} />
        <Route path="/lesson/:id/theory" element={<TheoryPage />} />
        <Route path="/lesson/:id/matching" element={<MatchingPage />} />
        <Route path="/lesson/:id/puzzle" element={<PuzzlePage />} />
        <Route path="/lesson/:id/audio" element={<AudioPage />} />
        <Route path="/lesson/:id/text" element={<TextPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
