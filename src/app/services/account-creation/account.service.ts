import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from 'src/app/appConfig/appConfig';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  token: string = ''
  constructor(
    @Inject(API_ENDPOINT) public apiEndpoint: string,
    private http: HttpClient,
    private localStorage: LocalStorageService
  ) {
    this.localStorage.getState('token').then(res => {
      this.token = res.value
    })
  }

  accountCreate(data: any): Observable<any> {
    console.log('**', this.token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token,
    });
    console.log(headers);

    return this.http.post(`${this.apiEndpoint}/user/bank/bankcreate`, data, {
      headers,
    });
  }
}
