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
  firstName = ''
  lastName = ''
  state = ''
  city = ''
  personalData = {
    Name: '',
    emailId: '',
    dateOfBirth: '',
    password: '',
    mobileNumber: '',
    aadharNo: '',
    address: '',
    userPincode: '',
    userStateCode: '',
    userCityCode: '',
    country: '',
    nomineeName: '',
    nomineeDateOfBirth: '',
    nomineeRelation: '',
    utmSource: '',
    utmMedium: '',
    utmCampaign: ''
  }
  selectedElement: string = ''

  states = [
    { id: 1, name: 'Test 1' },
    { id: 2, name: 'Test 2' },
    { id: 3, name: 'Test 3' },
    { id: 4, name: 'Test 4' },
    { id: 5, name: 'Test 5' },
  ]
  statePage = 1
  stateName: string = ''

  cities = [
    { id: 1, name: 'Test 1' },
    { id: 2, name: 'Test 2' },
    { id: 3, name: 'Test 3' },
    { id: 4, name: 'Test 4' },
    { id: 5, name: 'Test 5' },
  ]
  cityPage = 1
  cityName: string = ''
  constructor(@Inject(GeoLocationAPIKEY) public API_KEY: string, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('loc'))
    this.getLocation(data).subscribe((res: any) => {
      const data = res.response.features[8].properties;
      this.personalData.address = data.name
      this.personalData.userPincode = data.postalcode
      this.state = data.region
      this.personalData.country = data.country
    })

    this.fetchStates()
    this.fetchCities()
  }

  getLocation({ lat, lng }) {
    return this.http.get(`https://api.geocodify.com/v2/reverse?api_key=${this.API_KEY}&lat=${lat}&lng=${lng}`)
  }

  handleFocus(element: string) {
    this.selectedElement = element
  }

  fetchStates() {
    this.http.get(`http://192.168.1.18:4001/getstates?count=100&name=${this.stateName}&page=${this.statePage}`).subscribe((res: any) => {
      console.log(res);
      this.states = res.result.data
    })
  }

  fetchCities() {
    this.http.get(`http://192.168.1.18:4001/getcities?stateId=${this.personalData.userStateCode}&count=100&name=${this.cityName}&page=${this.cityPage}`).subscribe((res: any) => {
      this.states = res.result.data
    })
  }

  handleSelectStates(data: any) {
    this.selectedElement = null
    if (data.el === 'state') {
      this.state = data.name
      this.personalData.userStateCode = data.id
    } else if (data.el === 'city') {
      this.city = data.name
      this.personalData.userCityCode = data.id
    }
  }

  handleInfinite(event: any, type: string) {
    console.log(event, type);
    if (type === 'state') {

    } else {

    }
    event.target.complete()
  }

  handlePersonalInfo() {
    this.personalData.Name = this.firstName + this.lastName
    console.log(this.personalData);
    this.router.navigate(['signin/selfie'])
  }

  handleRetake() {
    this.firstName = ''
    this.lastName = ''
    this.personalData.emailId = ''
    this.personalData.mobileNumber = ''
    this.personalData.aadharNo = ''
  }
}
