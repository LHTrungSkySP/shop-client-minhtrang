import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { RatingModule } from '../../model-components/rating/rating.module';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PipeModule } from '../../../shared/pipes/pipe.module';

@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
		InputNumberModule,
		ButtonModule,
		RippleModule,ReactiveFormsModule,
		TabViewModule,
    PipeModule,
    RatingModule,GalleriaModule,RadioButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductDetailComponent,

      }
    ]),
  ]
})
export class ProductDetailModule { }
