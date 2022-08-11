import { createAction, props } from '@ngrx/store';

export const getTasks = createAction('[Tasks] Get');
export const getTasksSuccess = createAction(
  '[Tasks] Get success',
  props<{ names: string[] }>()
);
export const getTasksFailure = createAction('[Tasks] Get failure');
export const addTask = createAction('[Tasks] Add', props<{ name: string }>());
export const removeTask = createAction(
  '[Tasks] Remove',
  props<{ id: number }>()
);
export const reset = createAction('[Tasks] Reset');
