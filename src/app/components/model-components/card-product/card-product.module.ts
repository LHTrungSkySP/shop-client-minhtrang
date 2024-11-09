import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product.component';
import { RippleModule } from 'primeng/ripple';
import { PipeModule } from '../../../shared/pipes/pipe.module';

@NgModule({
  declarations: [
    CardProductComponent
  ],
  imports: [
    CommonModule,
    PipeModule,
    RippleModule
  ],
  exports: [
    CardProductComponent
  ]
})
export class CardProductModule { }
