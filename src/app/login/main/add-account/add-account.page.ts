import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit() {}

  createAccount(data) {
    console.log('click', this.accountDetails);
  }
}
