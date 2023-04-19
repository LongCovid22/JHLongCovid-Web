import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export type LocationState = {
  lat: number | null;
  lng: number | null;
};

const initialState: LocationState = {
  lat: null,
  lng: null,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationState>) => {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export const selectLocation = (state: RootState) => state.location;

export default locationSlice.reducer;
