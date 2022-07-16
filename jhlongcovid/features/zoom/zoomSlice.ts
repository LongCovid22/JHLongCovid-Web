import {
    createSlice,
    PayloadAction,
  } from '@reduxjs/toolkit';
  import type { RootState } from '../../redux/store';
  
  // declaring the types for our state
  export type ZoomState = {
    value: number;
  };
  
  const initialState: ZoomState = {
    value: 10,
  };
  
  export const zoomSlice = createSlice({
    name: 'zoom',
    initialState,
    reducers: {
      setByAmount: (state, action: PayloadAction<number>) => {
        
        state.value = action.payload;
        console.log(state.value);
      }
    },
  });
  // Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
  export const {
    setByAmount
  } = zoomSlice.actions;
  
  // calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
  export const selectZoom = (state: RootState) => state.zoom.value;
  
  // exporting the reducer here, as we need to add this to the store
  export default zoomSlice.reducer;