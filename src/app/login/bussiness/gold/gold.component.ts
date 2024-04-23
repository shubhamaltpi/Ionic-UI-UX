import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BussinessService } from 'src/app/services/bussiness/bussiness.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.scss'],
})
export class GoldComponent implements OnInit {
  data: any;
  historyData: any[] = [];
  goldBalance: any;

  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private bussinessService: BussinessService
  ) {}

  async ngOnInit() {
    this.fetchGold();
    const token = await this.localStorage.getState('token');
    this.fetchGoldTxnHistory(token.value);
    this.fetchBalance(token.value);
  }

  async fetchGold() {
    this.bussinessService.getRate().subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.data = res.result.data;
      } else {
        console.log('Error: ', res);
      }
    });
  }

  async fetchGoldTxnHistory(token: string) {
    this.bussinessService.getHistory('his', token).subscribe((res: any) => {
      console.log(res);

      if (res.event === 'Succes') {
        this.historyData = res.hist
          .filter((history) => history.metalType === 'gold')
          .map((history) => {
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
        console.log('Error in fetching history');
      }
    });
  }

  async fetchBalance(token: string) {
    this.bussinessService
      .getHistory('', token)
      .subscribe((res: any) => (this.goldBalance = res.gBalance));
  }

  handleBuying() {
    this.router.navigateByUrl('login/bussiness/buy?type=gold');
  }

  handleSell() {
    this.router.navigateByUrl('login/bussiness/sell?type=gold');
  }

  handleBackBtn() {
    this.router.navigateByUrl('login/main/orders');
  }
}
