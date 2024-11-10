import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductSmComponent } from './card-product-sm.component';
import { RippleModule } from 'primeng/ripple';
import { PipeModule } from '../../../shared/pipes/pipe.module';
import { ImageModule } from 'primeng/image';
import { RatingModule } from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CardProductSmComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PipeModule,
    RippleModule,
    ImageModule,
    RatingModule
  ],
  exports: [
    CardProductSmComponent
  ]
})
export class CardProductSmModule { }
