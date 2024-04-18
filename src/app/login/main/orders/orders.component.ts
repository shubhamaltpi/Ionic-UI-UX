import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersComponent implements OnInit {
  page = '';

  constructor(private router: Router) {
    console.log('Orders');
  }

  ngOnInit() {
    console.log('Order');
  }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  handleProduct() {
    this.router.navigateByUrl('login/bussiness/gold');
  }
}
