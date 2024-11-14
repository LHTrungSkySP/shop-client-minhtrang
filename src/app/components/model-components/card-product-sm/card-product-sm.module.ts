import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductSmComponent } from './card-product-sm.component';
import { RippleModule } from 'primeng/ripple';
import { PipeModule } from '../../../shared/pipes/pipe.module';
import { ImageModule } from 'primeng/image';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from '../rating/rating.module';
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
