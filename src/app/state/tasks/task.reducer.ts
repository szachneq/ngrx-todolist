import { createReducer, on } from '@ngrx/store';

import * as TaskActions from './task.actions';
import { Task, Tasks } from './task.model';

const defaultState: Tasks = {
  list: [],
  state: 'initial',
};

let counter: number = 0;

export const taskReducer = createReducer(
  defaultState,
  on(TaskActions.getTasks, (state) => ({
    ...state,
    state: 'loading',
  })),
  on(TaskActions.getTasksSuccess, (state, { names }) => {
    const newTasks = names.map((name) => {
      const newTask = {
        id: counter,
        name,
      };
      counter += 1;
      return newTask;
    });
    return {
      ...state,
      state: 'loaded',
      list: [...state.list, ...newTasks],
    };
  }),
  on(TaskActions.getTasksFailure, (state) => ({
    ...state,
    state: 'failure',
  })),
  on(TaskActions.addTask, (state, { name }) => {
    const newTask: Task = {
      name,
      id: counter,
    };
    counter += 1;
    return {
      ...state,
      list: [...state.list, newTask],
    };
  }),
  on(TaskActions.removeTask, (state, { id }) => ({
    ...state,
    list: state.list.filter((task) => task.id !== id),
  })),
  on(TaskActions.reset, (state) => {
    counter = 0;
    return defaultState;
  })
);
