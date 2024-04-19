import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage {

  demoOrderData = [
    {
      id: 0,
      title: 'Product 1',
      price: 230,
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quascupiditate.',
      productImg: 'https://avatars.githubusercontent.com/u/78205495?v=4',
    },
    {
      id: 1,
      title: 'Product 2',
      price: 230,
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quascupiditate.',
      productImg: 'https://avatars.githubusercontent.com/u/78205495?v=4',
    },
    {
      id: 2,
      title: 'Product 3',
      price: 230,
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quascupiditate.',
      productImg: 'https://avatars.githubusercontent.com/u/78205495?v=4',
    },
  ];

  page = '';
  constructor() {
    console.log('Orders');
  }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

}
