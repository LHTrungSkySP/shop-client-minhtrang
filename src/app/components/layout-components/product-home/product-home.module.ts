import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home.component';
import { RouterModule } from '@angular/router';
import { CardProductModule } from '../../model-components/card-product/card-product.module';



@NgModule({
  declarations: [
    ProductHomeComponent
  ],
  imports: [
    CommonModule,
    CardProductModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductHomeComponent
      }
    ])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProductHomeModule { }
