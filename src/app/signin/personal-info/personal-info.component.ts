import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {
  personalData = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    aadharNo: '',
    address: '',
    pinCode: '',
    state: '',
    country: ''
  }
  constructor(private router: Router) { }

  handlePersonalInfo() {
    this.router.navigate(['signin/selfie'])
  }
}
