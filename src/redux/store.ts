import { configureStore, PreloadedState } from "@reduxjs/toolkit";

import { rootReducer } from "."
import { confirmToRemoveMiddleware, loggerMiddleware } from "./users/middlewares";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware).concat(confirmToRemoveMiddleware)
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
