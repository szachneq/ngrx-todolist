import * as TaskActions from './task.actions';
import { Task, Tasks } from './task.model';

export type Action = TaskActions.All;

const defaultState: Tasks= {
  list: [],
  state: 'empty',
};

let counter: number = 0;

export function taskReducer(
  state: Tasks = defaultState,
  action: Action
): Tasks {
  switch (action.type) {
    case TaskActions.ADD_TASK:
      const newTask: Task = {
        name: action.payload.toString(),
        id: counter,
      };
      counter += 1;
      return {
        ...state,
        list: [ ...state.list, newTask ],
      };

    case TaskActions.REMOVE_TASK:
      return {
        ...state,
        list: state.list.filter(task => task.id !== Number(action.payload))
      }

    case TaskActions.RESET_TASKS:
      counter = 0;
      return defaultState;

    default:
      return state;
  }
}
