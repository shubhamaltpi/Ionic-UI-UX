import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BussinessService } from 'src/app/services/bussiness/bussiness.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-silver',
  templateUrl: './silver.component.html',
  styleUrls: ['./silver.component.scss'],
})
export class SilverComponent implements OnInit {
  data: any;
  historyData: any[] = [];
  silverBalance: any;
  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private bussinessService: BussinessService
  ) {}

  async ngOnInit() {
    this.fetchSilver();
    const token = await this.localStorage.getState('token');
    this.fetchSilverHistory(token.value);
    this.fetchSilverBalance(token.value);
  }

  async fetchSilver() {
    this.bussinessService.getRate().subscribe((res: any) => {
      if (res.statusCode === 200) {
        this.data = res.result.data;
      } else {
        console.log('Error in fetching Silver rate: ', res);
      }
    });
  }

  async fetchSilverHistory(token: string) {
    this.bussinessService.getHistory('his', token).subscribe((res: any) => {
      if (res.event === 'Succes') {
        this.historyData = res.hist
          .filter((history) => history.metalType === 'silver')
          .map((history: any) => {
            return {
              id: history.id,
              type: history.Type,
              invoiceNumber: history.invoiceNumber,
              merchantTransactionId: history.merchantTransactionId,
              quantity: history.quantity,
              rate: history.rate,
              totalAmount: history.totalAmount,
              userName: history.userName,
              createdAt: new Date(history.createdAt).toLocaleDateString(
                'en-us',
                { year: 'numeric', month: 'short', day: 'numeric' }
              ),
            };
          });
      } else {
        console.log('Error in fetching history:', res);
      }
    });
  }

  async fetchSilverBalance(token: string) {
    this.bussinessService.getHistory('', token).subscribe((res: any) => {
      if (res.event === 'Succes') {
        this.silverBalance = res.sBalance;
      } else {
        console.log('Error in fetching Silver balance:', res);
      }
    });
  }

  handleBuy() {
    this.router.navigateByUrl('login/bussiness/buy?type=silver');
  }

  handleSell() {
    this.router.navigateByUrl('login/bussiness/sell?type=silver');
  }

  handleBackBtn() {
    this.router.navigateByUrl('login/main/orders');
  }
}
