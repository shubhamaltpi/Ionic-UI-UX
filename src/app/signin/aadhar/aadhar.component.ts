import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aadhar',
  templateUrl: './aadhar.component.html',
  styleUrls: ['./aadhar.component.scss'],
})
export class AadharComponent implements OnInit {
  aadharFront = ''
  aadharBack = ''
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Aadhar');
  }

  onAadharChangeFront(e: any) {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        this.aadharFront = reader.result as string;
      }
      reader.readAsDataURL(file)
    } else {
      console.log('ERROR');
    }
  }

  onAadharChangeBack(e: any) {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        this.aadharBack = reader.result as string;
      }
      reader.readAsDataURL(file)
    } else {
      console.log('ERROR');
    }
  }

  handleAadhar() {
    this.router.navigate(['signin/pan'])
  }

  handleRetake() {
    this.aadharFront = ''
    this.aadharBack = ''
  }
}
