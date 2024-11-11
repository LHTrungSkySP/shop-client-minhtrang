import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './product-home.component';
import { RouterModule } from '@angular/router';
// import { CardProductModule } from '../../model-components/card-product/card-product.module';
import { CardProductSmModule } from '../../model-components/card-product-sm/card-product-sm.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonSortModule } from "../../../shared/components/button-sort/button-sort.module";
import { PaginatorModule } from 'primeng/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    ProductHomeComponent
  ],
  imports: [
    CommonModule,
    CardProductSmModule,
    InputTextModule,
    ButtonSortModule,
    ButtonModule,
    ReactiveFormsModule,
    PaginatorModule,

    RouterModule.forChild([
      {
        path: '',
        component: ProductHomeComponent,

      }
    ]),
    ButtonSortModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductHomeModule { }
