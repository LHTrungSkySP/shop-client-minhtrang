import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    // component: AppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./components/layout-components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: '',
        loadChildren: () => import('./components/layout-components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: ':category',
        loadChildren: () => import('./components/layout-components/product-home/product-home.module').then(m => m.ProductHomeModule)
      },
      {
        path: ':category/:product-name',
        loadChildren: () => import('./components/layout-components/product-detail/product-detail.module').then(m => m.ProductDetailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
