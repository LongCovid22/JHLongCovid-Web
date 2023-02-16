import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RealOrMock } from "../../pages";
import type { RootState } from "../store";

// declaring the types for our state
export type MapDataState = {
  stateData: any;
  countyData: any;
  displayData: any[];
};

const initialState: MapDataState = {
  stateData: {},
  countyData: {},
  displayData: [],
};

export const mapDataSlice = createSlice({
  name: "mapData",
  initialState,
  reducers: {
    updateStateData: (state, action: PayloadAction<any>) => {
      const newMapData = action.payload;
      const key = `${newMapData.level}#${newMapData.lat}#${newMapData.long}`;
      state.stateData[key] = newMapData;
    },
    updateCountyData: (state, action: PayloadAction<any>) => {
      const newMapData = action.payload;
      const key = `${newMapData.level}#${newMapData.lat}#${newMapData.long}`;
      state.countyData[key] = newMapData;
    },
    updateAllStateData: (state, action: PayloadAction<any>) => {
      state.stateData = action.payload;
    },
    updateAllCountyData: (state, action: PayloadAction<any>) => {
      state.countyData = action.payload;
    },
    toggleDisplayData: (
      state,
      action: PayloadAction<{
        realOrMock: RealOrMock;
        zoomNum: number;
        latLow: number;
        latHigh: number;
        longLow: number;
        longHigh: number;
      }>
    ) => {
      const { realOrMock, zoomNum, latLow, latHigh, longLow, longHigh } =
        action.payload;

      let countyData: any;
      let stateData: any;

      if (realOrMock === RealOrMock.REAL) {
        countyData = { ...state.countyData };
        stateData = { ...state.stateData };
      } else {
        countyData = [...state.countyData];
        stateData = [...state.stateData];
      }

      if (zoomNum >= 8) {
        let array: any[] = [];
        if (realOrMock === RealOrMock.REAL) {
          Object.keys(countyData).map((key) => {
            let county = countyData[key];
            if (
              latLow <= county.lat &&
              county.lat <= latHigh &&
              longLow <= county.long &&
              county.long <= longHigh
            ) {
              if (county.totalFullEntries >= 10) array.push(county);
            }
          });
        } else {
          for (let i = 0; i < countyData.length; i++) {
            let county = countyData[i];
            if (
              latLow <= county.lat &&
              county.lat <= latHigh &&
              longLow <= county.long &&
              county.long <= longHigh
            ) {
              if (county.totalFullEntries >= 10) array.push(county);
            }
          }
        }
        state.displayData = array;
      } else if (zoomNum < 8) {
        let array: any[] = [];
        if (realOrMock === RealOrMock.REAL) {
          Object.keys(stateData).map((key) => {
            let st = stateData[key];
            if (st.totalFullEntries >= 10) array.push(st);
          });
        } else {
          array = stateData.filter((st: any) => st.totalFullEntries >= 10);
        }
        state.displayData = array;
      }
    },
  },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
  updateAllStateData,
  updateAllCountyData,
  toggleDisplayData,
  updateCountyData,
  updateStateData,
} = mapDataSlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectStateData = (state: RootState) => state.mapData.stateData;
export const selectCountyData = (state: RootState) => state.mapData.countyData;
export const selectDisplayData = (state: RootState) =>
  state.mapData.displayData;

// exporting the reducer here, as we need to add this to the store
export default mapDataSlice.reducer;
