import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.page.html',
  styleUrls: ['./bussiness.page.scss'],
})
export class BussinessPage implements OnInit {
  data: any

  constructor(private router: Router, private location: Location, private httpClient: HttpClient) { }

  ngOnInit() {
    console.log('Business Page');
    this.fetchGold()
  }

  async fetchGold() {
    this.httpClient.get('http://192.168.1.12:4001/getrate').subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.data = res.result.data
      } else {
        console.log('Error: ', res);
      }
    })
  }

  handleBackBtn() {
    this.router.navigateByUrl('login/main/order')
  }
}
