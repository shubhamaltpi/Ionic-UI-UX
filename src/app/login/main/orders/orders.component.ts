import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  page = '';
  constructor() {
    console.log('Orders');
  }

  ngOnInit() {}
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
}
