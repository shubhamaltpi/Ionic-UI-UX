import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API_ENDPOINT } from 'src/app/appConfig/appConfig';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.scss'],
})
export class GoldComponent implements OnInit {
  data: any

  constructor(@Inject(API_ENDPOINT) public endpoint: string, private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    console.log('Gold Page');
    this.fetchGold()
  }


  async fetchGold() {
    this.httpClient.get(`http://192.168.1.18/getrate`).subscribe((res: any) => {
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
