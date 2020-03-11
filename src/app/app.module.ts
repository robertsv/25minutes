import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TaskManagerComponent } from './task-manager/task-manager.component';
import { TaskListComponent } from './task-list/task-list.component';
import { MinValidatorDirective } from './shared/min-validator.directive';
import { MaxValidatorDirective } from './shared/max-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TaskManagerComponent,
    TaskListComponent,
    MinValidatorDirective,
    MaxValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
