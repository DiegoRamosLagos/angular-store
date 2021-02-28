import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules,
} from '@angular/router';
import { AdminGuard } from './admin.guard';
import { DemoComponent } from './demo/demo.component';
import { LayoutComponent } from './layout/components/layout/layout.component';

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
          import('./home/home.module').then(
            (module) => module.HomeModule,
          ),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./product/product.module').then(
            (module) => module.ProductModule,
          ),
        canActivate: [AdminGuard],
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./contact/contact.module').then(
            (module) => module.ContactModule,
          ),
        canActivate: [AdminGuard],
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./order/order.module').then(
            (module) => module.OrderModule,
          ),
      },
    ],
  },
  {
    path: 'demo',
    component: DemoComponent,
    canActivate: [AdminGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(
        (module) => module.AdminModule,
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (module) => module.AuthModule,
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (module) => module.PageNotFoundModule,
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
