import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from 'src/app/appConfig/appConfig';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(
    @Inject(API_ENDPOINT) public apiEndpoint: string,
    private http: HttpClient
  ) {}

  accountCreate(data: any): Observable<any> {
    const authToken = localStorage.getItem('authToken');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: authToken,
    });
    console.log(headers);

    return this.http.post(`${this.apiEndpoint}/user/bank/bankcreate`, data, {
      headers,
    });
  }
}
