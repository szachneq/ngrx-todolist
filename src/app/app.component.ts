import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Task } from './state/tasks/task.model';
import * as TaskActions from './state/tasks/task.actions';
import { AppState } from './state/state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks$: Observable<Task[]>;
  inputValue: string = '';

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select('tasks');
  }

  addTask() {
    if (this.inputValue.trim().length < 1) return;
    this.store.dispatch(new TaskActions.AddTask(this.inputValue));
    this.inputValue = '';
  }

  removeTask(taskId: number) {
    this.store.dispatch(new TaskActions.RemoveTask(taskId));
  }

  resetTasks() {
    this.store.dispatch(new TaskActions.Reset());
  }
}
