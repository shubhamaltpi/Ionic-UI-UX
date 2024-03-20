import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aadhar',
  templateUrl: './aadhar.component.html',
  styleUrls: ['./aadhar.component.scss'],
})
export class AadharComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Aadhar');
  }

  handleAadhar() {
    this.router.navigate(['signin/pan'])
  }
}
