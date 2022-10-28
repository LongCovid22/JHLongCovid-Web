import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../src/API";
import type { RootState } from "../store";

export type UserState = {
  user?: User;
};

const initialState: UserState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      const user = payload.user;
      state.user = user;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
