import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BussinessPage } from './bussiness.page';
import { GoldComponent } from './gold/gold.component';
import { SilverComponent } from './silver/silver.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { SellProductComponent } from './sell-product/sell-product.component';

const routes: Routes = [
  {
    path: '',
    component: BussinessPage,
  },
  { path: 'gold', component: GoldComponent },
  { path: 'silver', component: SilverComponent },
  { path: 'buy', component: BuyProductComponent },
  { path: 'sell', component: SellProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BussinessPageRoutingModule { }
