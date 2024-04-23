import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { SettingComponent } from './setting/setting.component';
import { AuthenticationGuard } from '../guard/authentication/authentication.guard';
import { AuthGuard } from '../guard/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginPage,
    canActivate: [AuthGuard],
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainPageModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'setting',
    component: SettingComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'bussiness',
    loadChildren: () =>
      import('./bussiness/bussiness.module').then((m) => m.BussinessPageModule),
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
