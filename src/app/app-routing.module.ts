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
        path: ':product',
        loadChildren: () => import('./components/layout-components/product-home/product-home.module').then(m => m.ProductHomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
