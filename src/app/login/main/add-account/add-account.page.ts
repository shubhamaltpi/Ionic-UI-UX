import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account-creation/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.page.html',
  styleUrls: ['./add-account.page.scss'],
})
export class AddAccountPage implements OnInit {
  accountDetails: any = {
    accountNumber: '',
    accountName: '',
    ifscCode: '',
  };
  errMsg: any;
  constructor(private addAccount: AccountService, private router: Router) {}

  ngOnInit() {}

  createAccount(data) {
    this.addAccount.accountCreate(this.accountDetails).subscribe({
      next: async (result: any) => {
        this.router.navigateByUrl('../profile');
      },
      error: (err) => (
        (this.errMsg = err.message),
        this.router.navigateByUrl('login/main/account')
      ),
    });
  }
}
