
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "../store";

export type UserState = {
    email : string
}

const initialState: UserState = {
    email : ''
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<UserState>) => {
        state.email = action.payload.email;
      },
    },
});

export const { setUser } = userSlice.actions;

export const selectUserEmail = (state: RootState) => state.user.email;

export default userSlice.reducer;