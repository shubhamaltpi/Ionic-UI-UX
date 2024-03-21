import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelfieComponent } from './selfie/selfie.component';
import { AadharComponent } from './aadhar/aadhar.component';
import { PanComponent } from './pan/pan.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'personal',
    pathMatch: 'full'
  },
  { path: 'personal', component: PersonalInfoComponent },
  { path: 'selfie', component: SelfieComponent },
  { path: 'aadhar', component: AadharComponent },
  { path: 'pan', component: PanComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninPageRoutingModule { }
