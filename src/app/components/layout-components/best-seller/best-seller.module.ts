import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellerComponent } from './best-seller.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CommonFormModule } from '../../../shared/common-form/common-form.module';
import { CardProductModule } from '../../model-components/card-product/card-product.module';

@NgModule({
  declarations: [
    BestSellerComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    CommonFormModule,
    CardProductModule
  ],
  exports: [
    BestSellerComponent
  ]
})
export class BestSellerModule { }
