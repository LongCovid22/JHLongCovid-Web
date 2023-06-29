import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { randomUUID } from "crypto";
import { NotificationFrequency, User } from "../../src/API";
import type { RootState } from "../store";
import { v4 as uuidv4 } from "uuid";

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
      // const currentDate = new Date();
      // const eightDaysAgo = new Date(
      //   currentDate.getTime() - 6 * 24 * 60 * 60 * 1000
      // );

      // const sampleUser: User = {
      //   __typename: "User",
      //   id: uuidv4(),
      //   email: "test@gmail.com",
      //   createdAt: new Date().toLocaleString(),
      //   updatedAt: new Date().toLocaleString(),
      //   lastSubmission: eightDaysAgo.toLocaleString(),
      //   notificationFreq: NotificationFrequency.WEEKLY,
      // };

      state.user = action.payload;
      // state.user = sampleUser;
    },
    resetUser: (state) => {
      state.user = undefined;
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
