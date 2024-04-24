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
  isDialogOpen: boolean = false;
  headerMsg: string = ''
  message: string = ''

  public alertButtons = [{
    text: 'Ok',
    role: 'confirm',
    handler: () => {
      this.isDialogOpen = false
      this.router.navigateByUrl(`login/bussiness/${this.pageType}`)

    }
  }]

  constructor(
    @Inject(API_ENDPOINT) private apiEndpoint: string,
    private localStorage: LocalStorageService,
    private http: HttpClient,
    private router: Router
  ) { }

  async ngOnInit() {
    const res = await this.localStorage.getState('token');
    this.token = res.value;
    this.pageType = this.router.url.split('=')[1];
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
      .subscribe(async (res: any) => {
        this.isDialogOpen = true
        if (res.event === 'succes') {
          this.headerMsg = 'Purchase Successfull 🎉'
          this.message = `You have successfully purchased the ${this.pageType} you can check it in your profile.`
        } else {
          this.headerMsg = 'Purchase Failed ❌'
          this.message = 'Your purchased failed Your money will be back to your account!'
        }
      });
  }
}
