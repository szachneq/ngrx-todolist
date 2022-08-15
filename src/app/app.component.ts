import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './state/state';
import * as TaskActions from './state/tasks/task.actions';
import { Tasks } from './state/tasks/task.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // $localize`:meaning|description@@id:source message text`;
  // $localize`:meaning|:source message text`;
  // $localize`:description:source message text`;
  // $localize`:@@id:source message text`;
  appName: string = $localize`:appname|the name of the application:Todo List`;
  tasks$: Observable<Tasks>;
  inputValue: string = '';

  constructor(private titleService: Title, private store: Store<AppState>) {
    this.tasks$ = this.store.select('tasks');
    this.titleService.setTitle($localize`${this.appName}`);
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
