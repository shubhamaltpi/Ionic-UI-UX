import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeoLocationAPIKEY } from 'src/app/appConfig/appConfig'

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
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
  constructor(@Inject(GeoLocationAPIKEY) public API_KEY: string, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('loc'))
    console.log(data);
    this.getLocation(data).subscribe((res: any) => {
      const data = res.response.features[8].properties;
      console.log(data);

      this.personalData.address = data.name
      this.personalData.pinCode = data.postalcode
      this.personalData.state = data.region
      this.personalData.country = data.country
    })
  }

  getLocation({ lat, lng }) {
    return this.http.get(`https://api.geocodify.com/v2/reverse?api_key=${this.API_KEY}&lat=${lat}&lng=${lng}`)
  }

  handlePersonalInfo() {
    console.log(this.personalData);
    this.router.navigate(['signin/selfie'])
  }

  handleRetake() {
    this.personalData.firstName = ''
    this.personalData.lastName = ''
    this.personalData.email = ''
    this.personalData.mobile = ''
    this.personalData.aadharNo = ''
  }
}
