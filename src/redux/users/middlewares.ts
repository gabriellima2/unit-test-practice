import type { Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";

import type { Action } from "./utils";

export const loggerMiddleware: Middleware =
  <T extends Dispatch<Action> = Dispatch<Action>>(store: MiddlewareAPI<T>) =>
    (next: Dispatch<Action>) =>
      <T extends Action>(action: T) => {
        console.log(action);
        console.log(store);
        console.log(next);

        next(action);
}

export const confirmToRemoveMiddleware: Middleware =
  <T extends Dispatch<Action> = Dispatch<Action>>(store: MiddlewareAPI<T>) =>
    (next: Dispatch<Action>) =>
      <T extends Action>(action: T) => {
        if (action.type !== "user/removeUser") return next(action);

        if (!window.confirm("Deseja excluir?")) return;

        next(action);
}
