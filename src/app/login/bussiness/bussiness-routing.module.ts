import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BussinessPage } from './bussiness.page';

const routes: Routes = [
  {
    path: '',
    component: BussinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BussinessPageRoutingModule {}
