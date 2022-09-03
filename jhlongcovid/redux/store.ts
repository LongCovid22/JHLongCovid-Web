import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import zoomReducer from "./slices/zoomSlice";
import presentationReducer from "./slices/presentationSlice";
import viewportReducer from "./slices/viewportSlice";
import surveyReducer from "./slices/surveySlice";

import userReducer from "./slices/userSlice";

import mapReducer from './slices/mapSlice';

const store = configureStore({
  reducer: {
    zoom: zoomReducer,
    presentation: presentationReducer,
    viewport: viewportReducer,
    survey: surveyReducer,
    user : userReducer,
    map: mapReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
