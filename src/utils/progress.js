// Утилиты для работы с прогрессом в localStorage

export const getProgress = () => {
  return JSON.parse(localStorage.getItem("lessonProgress")) || {};
};

export const setProgress = (lessonId, key, percent) => {
  const progress = getProgress();
  if (!progress[lessonId]) progress[lessonId] = {};
  progress[lessonId][key] = percent;
  localStorage.setItem("lessonProgress", JSON.stringify(progress));
};

export const getLessonProgress = (lessonId) => {
  const progress = getProgress();
  return progress[lessonId] || {};
};

export const resetProgress = () => {
  localStorage.removeItem("lessonProgress");
};
