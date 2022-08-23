export interface User {
  id: number;
  name: string;
}

export interface AddUserAction {
  type: string;
  payload: string;
}

export interface RemoveUserAction {
  type: string;
  payload: number;
}

export type Action = AddUserAction & RemoveUserAction;
