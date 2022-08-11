import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { Observable, take, of } from 'rxjs';
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
      catchError(() => [taskActions.getTasksFailure()])
    )
  );

  // should be moved to a separate service, here for now
  getTasksFromApi(): Observable<string[]> {
    console.log('api call');
    return of(['ala', 'ma', 'kota']);
    // interface taskResponse {
    //   title: string;
    // }
    // const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    // return this.http.get<taskResponse[]>(apiUrl).pipe(
    //   take(5),
    //   map((tasks) => {
    //     console.log(tasks);
    //     return tasks.map((t) => t.title);
    //   })
    //   // delay(2500)
    // );
  }
}
