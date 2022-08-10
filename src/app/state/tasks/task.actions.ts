import { Action } from '@ngrx/store';

export const ADD_TASK = '[Task] Add';
export const REMOVE_TASK = '[Task] Remove';
export const RESET_TASKS = '[Task] Reset';

export class AddTask implements Action {
  readonly type = ADD_TASK;

  constructor(public payload: string) {}
}

export class RemoveTask implements Action {
  readonly type = REMOVE_TASK;

  constructor(public payload: number) {}
}

export class Reset implements Action {
  readonly type = RESET_TASKS;
}

export type All = AddTask | RemoveTask | Reset;
