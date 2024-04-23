import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_ENDPOINT } from 'src/app/appConfig/appConfig';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss'],
})
export class BuyProductComponent implements OnInit {
  pageType: string = '';
  quantity: string = '';
  token: string = '';

  constructor(
    @Inject(API_ENDPOINT) public apiEndpoint: string,
    private localStorage: LocalStorageService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.localStorage.getState('token').then((res: any) => {
      this.token = res.value;
    });
    this.pageType = this.router.url.split('=')[1];
  }

  async showToast(msg: string) {
    await Toast.show({ text: msg, position: 'center', duration: 'long' });
  }

  handleBuy() {
    this.http
      .post(
        `${this.apiEndpoint}/user/goldsilver/gSBuy`,
        { metalType: this.pageType.toUpperCase(), quantity: this.quantity },
        { headers: { Authorization: this.token } }
      )
      .subscribe((res: any) => {
        if (res.event === 'sucess') {
          this.showToast('Purchased Successfully!');
          this.router.navigate(['../']);
        } else {
          this.showToast('Failed Transaction!');
        }
      });
  }
}
