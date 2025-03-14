import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitterTimerComponent } from './splitter-timer.component';

@NgModule({
  declarations: [
    SplitterTimerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SplitterTimerComponent
  ]
})
export class SplitterTimerModule { }
