import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BussinessPage } from './bussiness.page';
import { GoldComponent } from './gold/gold.component';
import { SilverComponent } from './silver/silver.component';

const routes: Routes = [
  {
    path: '',
    component: BussinessPage,
  },
  { path: 'gold', component: GoldComponent },
  { path: 'silver', component: SilverComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BussinessPageRoutingModule {}
