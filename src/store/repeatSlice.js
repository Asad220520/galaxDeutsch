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
      state.queue = action.payload;
      state.currentIndex = 0;
      state.correct = [];
      state.wrong = [];
    },
    markCorrect: (state) => {
      state.correct.push(state.queue[state.currentIndex]);
      state.currentIndex += 1;
    },
    markWrong: (state) => {
      state.wrong.push(state.queue[state.currentIndex]);
      state.currentIndex += 1;
    },
    resetRepeat: (state) => {
      state.queue = [];
      state.currentIndex = 0;
      state.correct = [];
      state.wrong = [];
    },
  },
});

export const { setQueue, markCorrect, markWrong, resetRepeat } =
  repeatSlice.actions;
export default repeatSlice.reducer;
