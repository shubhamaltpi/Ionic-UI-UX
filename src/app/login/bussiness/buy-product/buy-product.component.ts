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

  // async showToast(msg: string) {
  //   await Toast.show({ text: msg, position: 'center', duration: 'long' });
  // }

  handleBuy() {
    this.http
      .post(
        `${this.apiEndpoint}/user/goldsilver/gSBuy`,
        { metalType: this.pageType.toUpperCase(), quantity: this.quantity },
        { headers: { Authorization: this.token } }
      )
      .subscribe((res: any) => {
        if (res.event === 'sucess') {
          // this.showToast('Purchased Successfully!');
          this.headerMsg = 'Purchase Successfull 🎉'
          this.message = 'You have successfully purchased the gold you can check it in your profile.'
          this.isDialogOpen = true
          setTimeout(() => {
            this.isDialogOpen = false
            this.router.navigate(['../']);
          }, 1500)
        } else {
          // this.showToast('Failed Transaction!');
          this.headerMsg = 'Purchase Failed ❌'
          this.message = 'Your purchased failed Your money will be back to your account!'
          this.isDialogOpen = true
          setTimeout(() => {
            this.isDialogOpen = false
            this.router.navigate(['../']);
          }, 1500)
        }
      });
  }

  alertButtons() { }
}
