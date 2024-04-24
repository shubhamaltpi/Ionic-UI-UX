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
  isDialogOpen: boolean = false;
  headerMsg: string = ''
  message: string = ''

  public alertButtons = [
    {
      text: 'Ok', role: 'confirm', handler: () => {
        this.isDialogOpen = false
        this.router.navigateByUrl(`login/bussiness/${this.pageType}`)
      }
    }
  ]

  constructor(
    @Inject(API_ENDPOINT) public apiEndpoint: string,
    private localStorage: LocalStorageService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.localStorage.getState('token').then((res: any) => {
      this.token = res.value;
    });
    this.pageType = this.router.url.split('=')[1];
  }

  handleBuy() {
    this.http
      .post(
        `${this.apiEndpoint}/user/goldsilver/gSBuy`,
        { metalType: this.pageType.toUpperCase(), quantity: this.quantity },
        { headers: { Authorization: this.token } }
      )
      .subscribe(async (res: any) => {
        this.isDialogOpen = true
        if (res.event === 'sucess') {
          this.headerMsg = 'Purchase Successfull 🎉'
          this.message = `You have successfully purchased the ${this.pageType} you can check it in your profile.`
        } else {
          this.isDialogOpen = true
          this.headerMsg = 'Purchase Failed ❌'
          this.message = 'Your purchased failed Your money will be back to your account!'
        }
      });
  }
}
