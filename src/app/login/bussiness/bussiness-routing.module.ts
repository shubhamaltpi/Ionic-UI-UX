import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BussinessPage } from './bussiness.page';
import { GoldComponent } from './gold/gold.component';

const routes: Routes = [
  {
    path: '',
    component: BussinessPage
  },
  { path: 'gold', component: GoldComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BussinessPageRoutingModule { }
