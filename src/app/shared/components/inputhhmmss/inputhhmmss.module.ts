import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputhhmmssComponent } from './inputhhmmss.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedDirectivesModule } from '../../directives/shared-directives.module';
import { DayTimeDirective } from '../../directives/day-time.directive';

@NgModule({
  declarations: [
    InputhhmmssComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedDirectivesModule,
    SharedDirectivesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputhhmmssComponent
  ]
})
export class InputhhmmssModule { }
