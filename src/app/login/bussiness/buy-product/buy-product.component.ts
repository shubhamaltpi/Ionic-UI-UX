import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_ENDPOINT } from 'src/app/appConfig/appConfig';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss'],
})
export class BuyProductComponent implements OnInit {
  pageType: string = ''
  quantity: string = ''
  token: string = ''

  constructor(@Inject(API_ENDPOINT) public apiEndpoint: string, private localStorage: LocalStorageService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.localStorage.getState('token').then((res: any) => {
      this.token = res.value
    })
    this.pageType = this.router.url.split('=')[1]
  }

  handleBuy() {
    console.log(this.pageType, this.quantity)
    this.http.post(`${this.apiEndpoint}/user/goldsilver/gSBuy`, { metalType: this.pageType.toUpperCase(), quantity: this.quantity }, { headers: { 'Authorization': 'Bearer ' + this.token } }).subscribe((res: any) => {
      console.log(res);
    })
  }
}
