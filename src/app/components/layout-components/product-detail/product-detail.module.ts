import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
		InputNumberModule,
		ButtonModule,
		RippleModule,
		TabViewModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductDetailComponent,

      }
    ]),
  ]
})
export class ProductDetailModule { }
