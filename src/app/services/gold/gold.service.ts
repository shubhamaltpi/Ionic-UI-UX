import { Inject, Injectable } from '@angular/core';
import { API_ENDPOINT } from 'src/app/appConfig/appConfig';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoldService {
  constructor(@Inject(API_ENDPOINT) public endpoint: string, private httpClient: HttpClient) {

  }

  getGoldRate() {
    return this.httpClient.get(`${this.endpoint}/getrate`)
  }

  getGoldHistory(type: string, token: string) {
    return this.httpClient.get(`${this.endpoint}/user/party/data?dataType=${type}`, { headers: { 'Authorization': token } })
  }
}
