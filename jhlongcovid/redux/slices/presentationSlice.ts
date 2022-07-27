import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// this slice can be used for presentation throughout the app. When there is state that
// controls somethings display, it should go in here
export type PresentationState = {
  leftSidePanel: boolean;
};

const initialState: PresentationState = {
  leftSidePanel: false,
};

export const presentationSlice = createSlice({
  name: "presentation",
  initialState,
  reducers: {
    setLeftSidePanelPres: (state, action: PayloadAction<boolean>) => {
      state.leftSidePanel = action.payload;
    },
  },
});

export const { setLeftSidePanelPres } = presentationSlice.actions;

export const selectLeftSidePanelPres = (state: RootState) =>
  state.presentation.leftSidePanel;

export default presentationSlice.reducer;
