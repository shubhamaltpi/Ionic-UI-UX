import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BussinessPageRoutingModule } from './bussiness-routing.module';

import { BussinessPage } from './bussiness.page';
import { HttpClientModule } from '@angular/common/http';
import { GoldComponent } from './gold/gold.component';
import { SilverComponent } from './silver/silver.component';
import { BuyProductComponent } from './buy-product/buy-product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BussinessPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [BussinessPage, GoldComponent, SilverComponent, BuyProductComponent],
})
export class BussinessPageModule { }
