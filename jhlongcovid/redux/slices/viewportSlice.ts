import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// slice for storing the viewport height and width. Could be useful when sizing elements
// in the future.
export type ViewportState = {
  height: number;
  width: number;
};

const initialState: ViewportState = {
  height: 0,
  width: 0,
};

export const viewportSlice = createSlice({
  name: "viewport",
  initialState,
  reducers: {
    setDimensions: (state, action: PayloadAction<ViewportState>) => {
      state.height = action.payload.height;
      state.width = action.payload.width;
    },
  },
});

export const { setDimensions } = viewportSlice.actions;

export const selectWidth = (state: RootState) => state.viewport.width;
export const selectHeight = (state: RootState) => state.viewport.height;

export default viewportSlice.reducer;
