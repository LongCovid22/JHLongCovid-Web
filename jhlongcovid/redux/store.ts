import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import zoomReducer from "../features/zoom/zoomSlice";

const store = configureStore({
  reducer: {
    zoom: zoomReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
