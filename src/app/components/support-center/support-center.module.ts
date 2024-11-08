import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportCenterComponent } from './support-center.component';
import { CommonFormModule } from '../../shared/common-form/common-form.module';



@NgModule({
  declarations: [
    SupportCenterComponent
  ],
  imports: [
    CommonModule,
    CommonFormModule
  ],
  exports: [
    SupportCenterComponent
  ]
})
export class SupportCenterModule { }
