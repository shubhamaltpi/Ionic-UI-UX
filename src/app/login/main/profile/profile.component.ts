import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BussinessService } from 'src/app/services/bussiness/bussiness.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  bankDetail: any;
  goldBalance: string;
  silverBalance: string;
  userName: string;
  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private bussinessService: BussinessService
  ) {}

  async ngOnInit() {
    const token = await this.localStorage.getState('token');
    this.fetchBankDetail(token.value);
  }

  async fetchBankDetail(token: string) {
    this.bussinessService.getHistory('bank', token).subscribe((res: any) => {
      if (res.event) {
        console.log(res.aCnumber);
        this.bankDetail = res.aCnumber;
      }
    });

    this.bussinessService.getHistory('', token).subscribe((res: any) => {
      this.goldBalance = res.gBalance;
      this.silverBalance = res.sBalance;
      this.userName = res.name;
      console.log(res);
    });
  }

  addAccount() {
    this.router.navigateByUrl('login/main/account');
    console.log('laha');
  }

  handleLogout() {
    this.localStorage.removeState('token');
    this.router.navigateByUrl('/login');
  }
}
