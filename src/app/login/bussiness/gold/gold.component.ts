
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { h } from 'ionicons/dist/types/stencil-public-runtime';
import { GoldService } from 'src/app/services/gold/gold.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.scss'],
})
export class GoldComponent implements OnInit {
  data: any
  historyData: any[] = []
  goldBalance: any

  constructor(private localStorage: LocalStorageService, private router: Router, private goldService: GoldService) { }

  async ngOnInit() {

    this.fetchGold()
    const token = await this.localStorage.getState('token')
    this.fetchGoldTxnHistory(token.value)
    this.fetchBalance(token.value)
  }

  async fetchGold() {
    this.goldService.getGoldRate().subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.data = res.result.data
      } else {
        console.log('Error: ', res);
      }
    })
  }

  async fetchGoldTxnHistory(token: string) {
    this.goldService.getGoldHistory('his', token).subscribe((res: any) => {
      console.log(res);

      if (res.event === 'Succes') {
        const data = res.hist.map(history => {
          return {
            id: history.id,
            type: history.Type,
            invoiceNumber: history.invoiceNumber,
            merchantTransactionId: history.merchantTransactionId,
            quantity: history.quantity,
            rate: history.rate,
            totalAmount: history.totalAmount,
            userName: history.userName,
            createdAt: new Date(history.createdAt).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })
          }
        })
        this.historyData = data
      }
    })
  }

  async fetchBalance(token: string) {
    this.goldService.getGoldHistory('', token).subscribe((res: any) => this.goldBalance = res.gBalance)
  }

  handleBuying() {
    this.router.navigateByUrl('login/bussiness/buy?type=gold')
  }

  handleSell() {
    this.router.navigateByUrl('login/bussiness/sell?type=gold')
  }

  handleBackBtn() {
    this.router.navigateByUrl('login/main/order')
  }
}
