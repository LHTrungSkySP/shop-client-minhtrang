import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownTimerComponent } from './countdown-timer.component';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountdownTimerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputMaskModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    CountdownTimerComponent
  ]
})
export class CountdownTimerModule { }
