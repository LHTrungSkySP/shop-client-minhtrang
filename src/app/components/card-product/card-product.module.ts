import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product.component';
import { PipeModule } from '../../shared/pipes/pipe.module';
import { RippleModule } from 'primeng/ripple';

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
