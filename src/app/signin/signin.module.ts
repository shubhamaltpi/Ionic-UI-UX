import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPageRoutingModule } from './signin-routing.module';

import { SigninPage } from './signin.page';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelfieComponent } from './selfie/selfie.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { PanComponent } from './pan/pan.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninPageRoutingModule
  ],
  declarations: [SigninPage, PersonalInfoComponent, SelfieComponent, AadharComponent, PanComponent]
})
export class SigninPageModule { }
