import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContributeComponent } from './contribute.component';
import { CardContributeModule } from '../card-contribute/card-contribute.module';



@NgModule({
  declarations: [
    ContributeComponent
  ],
  imports: [
    CommonModule,
    CardContributeModule
  ],
  exports: [
    ContributeComponent
  ]
})
export class ContributeModule { }
