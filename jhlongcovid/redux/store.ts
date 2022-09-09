import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import zoomReducer from "./slices/zoomSlice";
import presentationReducer from "./slices/presentationSlice";
import viewportReducer from "./slices/viewportSlice";

import surveyReducer from "./slices/surveySlice";

const store = configureStore({
  reducer: {
    zoom: zoomReducer,
    presentation: presentationReducer,
    viewport: viewportReducer,
    survey: surveyReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
