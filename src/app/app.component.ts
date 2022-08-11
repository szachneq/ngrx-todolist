import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Tasks } from './state/tasks/task.model';
import * as TaskActions from './state/tasks/task.actions';
import { AppState } from './state/state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks$: Observable<Tasks>;
  inputValue: string = '';

  constructor(private store: Store<AppState>) {
    this.tasks$ = this.store.select('tasks');
  }

  getTasks() {
    this.store.dispatch(TaskActions.getTasks());
  }

  addTask() {
    if (this.inputValue.trim().length < 1) return;
    this.store.dispatch(TaskActions.addTask({ name: this.inputValue }));
    this.inputValue = '';
  }

  removeTask(id: number) {
    this.store.dispatch(TaskActions.removeTask({ id }));
  }

  resetTasks() {
    this.store.dispatch(TaskActions.reset());
  }
}
