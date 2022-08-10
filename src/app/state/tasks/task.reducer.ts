import * as TaskActions from './task.actions';
import { Task } from './task.model';

export type Action = TaskActions.All;

const defaultState: Task[] = [];

let counter: number = 0;

export function taskReducer(state: Task[] = defaultState, action: Action) {
  switch (action.type) {
    case TaskActions.ADD_TASK:
      const newTask: Task = {
        name: action.payload.toString(),
        id: counter,
      };
      counter += 1;
      return [...state, newTask];

    case TaskActions.REMOVE_TASK:
      return state.filter((task) => task.id !== Number(action.payload));

    case TaskActions.RESET_TASKS:
      counter = 0;
      return defaultState;

    default:
      return state;
  }
}
