import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  sendLoginCredential(data: any) {
    return this.http.post('http://192.168.1.11:4001/user/login', data);
  }
}
