import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from 'src/app/appConfig/appConfig';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(@Inject(API_ENDPOINT) private apiEndpoint: string, private http: HttpClient) { }

  sendLoginCredential(data: any) {
    return this.http.post(`${this.apiEndpoint}/user/login`, data);
  }
}
