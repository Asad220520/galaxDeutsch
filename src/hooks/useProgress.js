import { useState, useEffect } from "react";

export function useProgress(lessonId) {
  const key = `progress_${lessonId}`;
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(progress));
  }, [progress]);

  const updateProgress = (exerciseKey, percent) => {
    setProgress((prev) => ({
      ...prev,
      [exerciseKey]: percent,
    }));
  };

  return [progress, updateProgress];
}
