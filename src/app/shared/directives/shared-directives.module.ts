import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayTimeDirective } from './day-time.directive';
@NgModule({
  declarations: [
    DayTimeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DayTimeDirective
  ]
})
export class SharedDirectivesModule { }
