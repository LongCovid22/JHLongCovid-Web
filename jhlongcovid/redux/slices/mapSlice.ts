import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// declaring the types for our state
export type MapState = {
  lat: number,
  long: number
};

const initialState: MapState = {
  lat: 39.8283,
  long: -98.5795
};

export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setLat: (state, action: PayloadAction<number>) => {
      state.lat = action.payload;

      console.log(state.lat);
    },
    setLong: (state, action: PayloadAction<number>) => {
        state.long = action.payload;
        console.log(state.long);
    }
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const { setLat, setLong } = mapSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectLat = (state: RootState) => state.map.lat;
export const selectLong = (state: RootState) => state.map.long;

// exporting the reducer here, as we need to add this to the store
export default mapSlice.reducer;