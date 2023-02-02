import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import zoomReducer from "./slices/zoomSlice";
import presentationReducer from "./slices/presentationSlice";
import viewportReducer from "./slices/viewportSlice";
import surveyReducer from "./slices/surveySlice/surveySlice";
import userReducer from "./slices/userSlice";
import mapDataReducer from "./slices/mapDataSlice";

const store = configureStore({
  reducer: {
    zoom: zoomReducer,
    presentation: presentationReducer,
    viewport: viewportReducer,
    survey: surveyReducer,
    user: userReducer,
    mapData: mapDataReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
