import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// import { HeaderModule } from '../header/header.module';
import { MenubarModule } from 'primeng/menubar';
import { CardProductModule } from '../../model-components/card-product/card-product.module';
import { BestSellerModule } from '../best-seller/best-seller.module';
import { ContributeModule } from '../contribute/contribute.module';
import { GalleryCategoryModule } from '../gallery-category/gallery-category.module';
import { SlideModule } from '../slide/slide.module';
// import { SupportCenterModule } from '../support-center/support-center.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // HeaderModule,
    MenubarModule,
    SlideModule,
    GalleryCategoryModule,
    BestSellerModule,
    CardProductModule,
    ContributeModule,

]
})
export class HomeModule { }
