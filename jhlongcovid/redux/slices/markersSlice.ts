import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";


export type MarkersState = {
    markers: object;
}

const initialState: MarkersState = {
    markers: {
    }
}

interface PayLoadObject {
    name: string;
    marker: google.maps.Circle;
}

export const markersSlice = createSlice({
    name: "markers",
    initialState,
    reducers: {
        setMarker: (state, action: PayloadAction<PayLoadObject>) => {
            state.markers[action.payload.name] = action.payload.marker;
        }
    }
})