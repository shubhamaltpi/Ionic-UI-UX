import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account-creation/account.service';
import { Router } from '@angular/router';
import { Toast } from '@capacitor/toast';

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

  ngOnInit() {
    console.log('ADD ACCOUNT');
  }

  async showToast(msg: string) {
    await Toast.show({ text: msg, position: 'center', duration: 'long' });
  }

  createAccount(data) {
    this.addAccount.accountCreate(this.accountDetails).subscribe({
      next: async (result: any) => {
        this.showToast('Purchased Successfully!');
        this.router.navigateByUrl('login/main/profile');
      },
      error: (err) => {
        (this.errMsg = err.message),
          this.router.navigateByUrl('login/main/account');
        this.showToast('Failed Transaction!');
      },
    });
  }
}
