import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_ENDPOINT } from 'src/app/appConfig/appConfig';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject(API_ENDPOINT) public apiEndpoint: string,
    private httpClient: HttpClient
  ) {}

  signin(data: any) {
    this.httpClient.post(`${this.apiEndpoint}/subadmin/userOnboard`, data);
  }

  login(data: any) {
    return this.httpClient.post(`${this.apiEndpoint}/user/login`, data);
  }
}
