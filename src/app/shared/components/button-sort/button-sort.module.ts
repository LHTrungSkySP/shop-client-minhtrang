import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSortComponent } from './button-sort.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    ButtonSortComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    ButtonSortComponent
  ]
})
export class ButtonSortModule { }
