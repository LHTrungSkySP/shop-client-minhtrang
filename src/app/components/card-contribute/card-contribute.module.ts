import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContributeComponent } from './card-contribute.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    CardContributeComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    CardContributeComponent
  ]
})
export class CardContributeModule { }
