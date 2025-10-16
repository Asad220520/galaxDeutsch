// src/store/repeatSlice.js (Ваш оригинальный код, плюс добавим shuffleQueue)

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queue: [],
  currentIndex: 0,
  correct: [],
  wrong: [],
};

const repeatSlice = createSlice({
  name: "repeat",
  initialState,
  reducers: {
    setQueue: (state, action) => {
      // Инициализация очереди
      state.queue = action.payload;
      state.currentIndex = 0;
      state.correct = [];
      state.wrong = [];
    },
    markCorrect: (state) => {
      // Добавляем текущее слово в "правильные" и сдвигаем индекс
      state.correct.push(state.queue[state.currentIndex]);
      state.currentIndex += 1;
    },
    markWrong: (state) => {
      // Добавляем текущее слово в "неправильные" и сдвигаем индекс
      state.wrong.push(state.queue[state.currentIndex]);
      state.currentIndex += 1;
    },
    // 🔥 НОВЫЙ REDUCER: Для повторения ошибочных слов
    setQueueFromWrong: (state) => {
      state.queue = [...state.wrong]; // Новая очередь - только ошибочные слова
      state.currentIndex = 0;
      state.correct = []; // Сбрасываем счетчики для новой сессии
      state.wrong = [];
    },
    resetRepeat: (state) => {
      state.queue = [];
      state.currentIndex = 0;
      state.correct = [];
      state.wrong = [];
    },
  },
});

export const {
  setQueue,
  markCorrect,
  markWrong,
  resetRepeat,
  setQueueFromWrong,
} = repeatSlice.actions;
export default repeatSlice.reducer;
