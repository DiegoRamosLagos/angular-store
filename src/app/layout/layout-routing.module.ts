import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then(
            (module) => module.HomeModule,
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../products/products.module').then(
            (module) => module.ProductsModule,
          ),
      },
      {
        path: 'products/:id',
        loadChildren: () =>
          import('../product-detail/product-detail.module').then(
            (module) => module.ProductDetailModule,
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../contact/contact.module').then(
            (module) => module.ContactModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
