import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home.component';
import { RouterModule } from '@angular/router';
// import { CardProductModule } from '../../model-components/card-product/card-product.module';
import { CardProductSmModule } from '../../model-components/card-product-sm/card-product-sm.module';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    ProductHomeComponent
  ],
  imports: [
    CommonModule,
    CardProductSmModule,DropdownModule,
    IconFieldModule,InputTextModule,InputIconModule,
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
