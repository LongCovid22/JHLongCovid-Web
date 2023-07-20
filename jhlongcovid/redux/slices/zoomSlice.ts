import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type ZoomState = {
  value: number;
  low_long: number;
  high_long: number;
  low_lat: number;
  high_lat: number;
};

const initialState: ZoomState = {
  value: 5,
  low_long: -126.79,
  high_long: -70.4,
  low_lat: 24.15,
  high_lat: 52.6,
};

export const zoomSlice = createSlice({
  name: "zoom",
  initialState,
  reducers: {
    setByAmount: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },

    setLowLong: (state, action: PayloadAction<number>) => {
      state.low_long = action.payload;
    },

    setHiLong: (state, action: PayloadAction<number>) => {
      state.high_long = action.payload;
    },

    setLowLat: (state, action: PayloadAction<number>) => {
      state.low_lat = action.payload;
    },
    setHiLat: (state, action: PayloadAction<number>) => {
      state.high_lat = action.payload;
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { setByAmount, setLowLong, setHiLong, setLowLat, setHiLat } =
  zoomSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectZoom = (state: RootState) => state.zoom.value;
export const selectLoLat = (state: RootState) => state.zoom.low_lat;
export const selectHighLat = (state: RootState) => state.zoom.high_lat;
export const selectLoLong = (state: RootState) => state.zoom.low_long;
export const selectHighLong = (state: RootState) => state.zoom.high_long;

// exporting the reducer here, as we need to add this to the store
export default zoomSlice.reducer;
