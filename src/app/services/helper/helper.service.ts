import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_ENDPOINT } from 'src/app/appConfig/appConfig';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(@Inject(API_ENDPOINT) public apiEndpoint: string, private httpClient: HttpClient) { }

  getStates({ stateName, pageNo }) {
    return this.httpClient.get(`${this.apiEndpoint}/getstates?count=100&name=${stateName}&page=${pageNo}`)
  }

  getCities({ id, cityName, pageNo }) {
    return this.httpClient.get(`${this.apiEndpoint}/getcities?stateId=${id}&count=100&name=${cityName}&page=${pageNo}`)
  }
}
