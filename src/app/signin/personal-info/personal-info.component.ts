import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeoLocationAPIKEY } from 'src/app/appConfig/appConfig';
import { HelperService } from 'src/app/services/helper/helper.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  firstName = '';
  lastName = '';
  state = '';
  city = '';
  address: '';
  aadharNo: '';
  country: '';
  personalData = {
    Name: '',
    emailId: '',
    dateOfBirth: '',
    password: '',
    mobileNumber: '',
    userPincode: '',
    userStateCode: '',
    userCityCode: '',

    nomineeName: '',
    nomineeDateOfBirth: '',
    nomineeRelation: '',
    utmSource: '',
    utmMedium: '',
    utmCampaign: '',
  };
  selectedElement: string = '';

  states = [];
  statePage = 1;
  stateName: string = '';

  cities = [];
  cityPage = 1;
  cityName: string = '';
  constructor(
    @Inject(GeoLocationAPIKEY) public API_KEY: string,
    private localStorage: LocalStorageService,
    private router: Router,
    private http: HttpClient,
    private helperService: HelperService
  ) {}

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('loc'));
    this.getLocation(data).subscribe((res: any) => {
      const data = res.response.features[8].properties;
      
      this.stateName = data.name;
      // this.personalData.userPincode = data.postalcode
      // this.state = data.region
      this.country = data.country;
    });

    this.fetchStates(this.stateName, this.statePage);
    this.fetchCities(
      this.personalData.userStateCode,
      this.cityName,
      this.cityPage
    );
  }

  getLocation({ lat, lng }) {
    return this.http.get(
      `https://api.geocodify.com/v2/reverse?api_key=${this.API_KEY}&lat=${lat}&lng=${lng}`
    );
  }

  handleFocus(element: string) {
    this.selectedElement = element;
  }

  fetchStates(stateName: any, pageNo: any) {
    this.helperService
      .getStates({ stateName, pageNo })
      .subscribe((res: any) => {
        this.states = res.result.data;
      });
  }

  fetchCities(id: any, cityName: any, pageNo: any) {
    this.helperService
      .getCities({ id, cityName, pageNo })
      .subscribe((res: any) => {
        this.cities = res.result.data;
      });
  }

  handleSelectStates(data: any) {
    this.selectedElement = null;
    if (data.el === 'state') {
      this.state = data.name;
      this.personalData.userStateCode = data.id;
    } else if (data.el === 'city') {
      this.city = data.name;
      this.personalData.userCityCode = data.id;
    }
  }

  handleInfinite(event: any) {
    console.log(event);
    event.target.complete();
  }

  handleSearch(event: any, element: string) {
    const name = event.target.value;
    if (element === 'city') {
      this.fetchCities(this.personalData.userStateCode, name, this.cityPage);
    } else if (element === 'state') {
      this.fetchStates(name, this.statePage);
    }
  }

  handlePersonalInfo() {
    this.personalData.Name = this.firstName + this.lastName;
    console.log(this.personalData);

    // localStorage.setItem('signup', JSON.stringify(this.personalData))
    this.localStorage.setState('signup', JSON.stringify(this.personalData));
    this.router.navigate(['signin/selfie']);
  }

  handleRetake() {
    this.firstName = '';
    this.lastName = '';
    this.personalData.emailId = '';
    this.personalData.mobileNumber = '';
    this.aadharNo = '';
  }
}
