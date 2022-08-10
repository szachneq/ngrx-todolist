import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { taskReducer } from './tasks/task.reducer';
import { TaskEffects } from './tasks/task.effects';

@NgModule({
  imports: [
    // Signature matches AppState interface
    StoreModule.forRoot({
      tasks: taskReducer,
    }),
    EffectsModule.forRoot([TaskEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 20,
    }),
  ],
  providers: [TaskEffects],
})
export class AppStateModule {}
