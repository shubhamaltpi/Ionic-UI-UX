import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account-creation/account.service';

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
  constructor(private addAccount: AccountService) {}

  ngOnInit() {}

  createAccount(data) {
    this.addAccount.accountCreate(this.accountDetails).subscribe(()=>{
      
    })
  }
}
