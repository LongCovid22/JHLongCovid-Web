import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../src/API";
import type { RootState } from "../store";

export type UserState = {
  user?: User | undefined;
};

const initialState: UserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = undefined;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
