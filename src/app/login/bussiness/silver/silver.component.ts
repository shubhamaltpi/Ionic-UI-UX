import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-silver',
  templateUrl: './silver.component.html',
  styleUrls: ['./silver.component.scss'],
})
export class SilverComponent implements OnInit {
  data: any;
  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit() {
    console.log('Silver Page');
    this.fetchSilver();
  }

  async fetchSilver() {
    this.httpClient
      .get('http://192.168.1.18:4001/getrate')
      .subscribe((res: any) => {
        if (res.statusCode == 200) {
          this.data = res.result.data;
        } else {
          console.log('Error: ', res);
        }
      });
  }

  handleBackBtn() {
    this.router.navigateByUrl('login/main/order');
  }
}
