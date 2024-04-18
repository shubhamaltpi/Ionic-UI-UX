import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';
// import { AddAccountComponent } from './add-account/add-account.component';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'order', component: OrdersComponent },
      { path: 'support', component: SupportComponent },
      // { path: 'account', component: AddAccountComponent },
    ],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./add-account/add-account.module').then(
        (m) => m.AddAccountPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
