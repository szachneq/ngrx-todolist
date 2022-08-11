import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { Observable, of } from 'rxjs';
import { catchError, delay, map, switchMap } from 'rxjs/operators';

import * as taskActions from './task.actions';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  getTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(taskActions.getTasks),
      switchMap(() =>
        this.getTasksFromApi().pipe(
          map((taskNames) => taskActions.getTasksSuccess({ names: taskNames }))
        )
      ),
      catchError((error) => {
        console.error(error);
        return of(taskActions.getTasksFailure());
      })
    )
  );

  // should be moved to a separate service, here for now
  getTasksFromApi(): Observable<string[]> {
    interface taskResponse {
      title: string;
    }
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get<taskResponse[]>(apiUrl).pipe(
      map((tasks) => tasks.slice(0, 5)),
      map((tasks) => tasks.map((t) => t.title)),
      delay(2500)
    );
  }
}
