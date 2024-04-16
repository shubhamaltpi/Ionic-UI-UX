import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BussinessPageRoutingModule } from './bussiness-routing.module';

import { BussinessPage } from './bussiness.page';
import { HttpClientModule } from '@angular/common/http';
import { GoldComponent } from './gold/gold.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BussinessPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BussinessPage, GoldComponent]
})
export class BussinessPageModule { }
