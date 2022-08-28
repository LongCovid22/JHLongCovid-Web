import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// this slice can be used for presentation throughout the app. When there is state that
// controls somethings display, it should go in here
export type SurveyState = {
  progress: number;
};

const initialState: SurveyState = {
  progress: -2,
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    incrementProgress: (state) => {
      state.progress = state.progress + 1;
    },
    decrementProgress: (state) => {
      state.progress = state.progress - 1;
    }
  },
});

export const { incrementProgress, decrementProgress } = surveySlice.actions;

export const selectProgress = (state: RootState) => state.survey.progress;

export default surveySlice.reducer;
