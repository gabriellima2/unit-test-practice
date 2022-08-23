import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./users/slice";

export const rootReducer = combineReducers({ users: userReducer });
