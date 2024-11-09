import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCategoryComponent } from './gallery-category.component';
import { CardOverviewModule } from '../../model-components/card-overview/card-overview.module';

@NgModule({
  declarations: [
    GalleryCategoryComponent,
  ],
  imports: [
    CommonModule,
    CardOverviewModule
  ],
  exports: [
    GalleryCategoryComponent
  ]
})
export class GalleryCategoryModule { }
