import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Toast } from '@capacitor/toast';
import { API_ENDPOINT } from 'src/app/appConfig/appConfig';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-sell-product',
  templateUrl: './sell-product.component.html',
  styleUrls: ['./sell-product.component.scss'],
})
export class SellProductComponent implements OnInit {
  pageType: any = '';
  quantity: any = '';
  token: any = '';

  constructor(
    @Inject(API_ENDPOINT) private apiEndpoint: string,
    private localStorage: LocalStorageService,
    private http: HttpClient,
    private router: Router
  ) {}

  async ngOnInit() {
    const res = await this.localStorage.getState('token');
    this.token = res.value;
  }

  async showToast(msg: string) {
    await Toast.show({ text: msg, position: 'top', duration: 'long' });
  }

  handleSell() {
    this.http
      .post(
        `${this.apiEndpoint}/user/goldsilver/gSSell`,
        {
          metalType: this.pageType.toUpperCase(),
          quantity: this.quantity,
        },
        { headers: { Authorization: this.token } }
      )
      .subscribe((res: any) => {
        if (res.event === 'succes') {
          this.showToast('Success!');
          this.router.navigateByUrl('login/main');
        } else {
          this.showToast('Failed Transaction!');
        }
      });
  }
}
