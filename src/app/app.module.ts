import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppStateModule } from './state/state.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppStateModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
