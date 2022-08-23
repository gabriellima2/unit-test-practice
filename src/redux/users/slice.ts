import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

import type { AddUserAction, RemoveUserAction, User } from "./utils";

const initialState: User[] = [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: AddUserAction) => {
      const newUser: User = {
        id: state.length,
        name: action.payload
      }

      return [
        ...state,
        { ...newUser }
      ];
    },
    removeUser: (state, action: RemoveUserAction) => {
      return state.filter((user) => user.id !== action.payload);
    },
  },
});

export const userSelect = (state: RootState) => state.users;
export const { addUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
