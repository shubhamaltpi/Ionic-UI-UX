import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoldService } from 'src/app/services/gold/gold.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  bankStatus: string
  goldBalance: string
  silverBalance: string
  constructor(private router: Router, private localStorage: LocalStorageService, private goldService: GoldService) { }

  async ngOnInit() {
    const token = await this.localStorage.getState('token')
    this.fetchBankDetail(token.value)
  }

  async fetchBankDetail(token: string) {
    this.goldService.getGoldHistory('bank', token).subscribe((res: any) => {
      if (res.event) {
        this.bankStatus = res.aCnumber.status
      }
    })

    this.goldService.getGoldHistory('', token).subscribe((res: any) => {
      this.goldBalance = res.gBalance
      this.silverBalance = res.sBalance
    })
  }

  addAccount() {
    this.router.navigateByUrl('login/main/account');
    console.log('laha');
  }
}
