import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { API_ENDPOINT } from 'src/app/appConfig/appConfig';

@Injectable({
  providedIn: 'root',
})
export class BussinessService {
  constructor(
    @Inject(API_ENDPOINT) private apiEndpoint: string,
    private http: HttpClient
  ) {}

  getRate() {
    return this.http.get(`${this.apiEndpoint}/getrate`);
  }

  getHistory(type: string, token: string) {
    return this.http.get(
      `${this.apiEndpoint}/user/party/data?dataType=${type}`,
      { headers: { Authorization: token } }
    );
  }
}
