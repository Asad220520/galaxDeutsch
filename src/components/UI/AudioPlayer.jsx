import React, { useImperativeHandle, forwardRef } from "react";

const AudioPlayer = forwardRef(({ word }, ref) => {
  const speak = () => {
    if (!word) return;

    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "de-DE"; // немецкий язык
    speechSynthesis.speak(utterance);
  };

  // expose speak() через ref
  useImperativeHandle(ref, () => ({
    play: speak,
  }));

  return (
    <button
      onClick={speak}
      className="ml-2 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
      title={`Прослушать "${word}"`}
    >
      🔊
    </button>
  );
});

export default AudioPlayer;
