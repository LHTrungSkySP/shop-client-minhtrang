import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { MenubarModule } from 'primeng/menubar';
import { SlideModule } from '../slide/slide.module';
import { GalleryCategoryModule } from '../gallery-category/gallery-category.module';
import { BestSellerModule } from "../best-seller/best-seller.module";
import { CardProductModule } from '../card-product/card-product.module';
import { ContributeModule } from '../contribute/contribute.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    MenubarModule,
    SlideModule,
    GalleryCategoryModule,
    BestSellerModule,
    CardProductModule,
    ContributeModule
]
})
export class HomeModule { }
