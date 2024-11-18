import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponentTestComponent } from './a-component-test.component';



@NgModule({
  declarations: [
    AComponentTestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AComponentTestComponent
  ]
})
export class AComponentTestModule { }
