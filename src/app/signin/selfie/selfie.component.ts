import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.scss'],
})
export class SelfieComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Selfie');
  }

  handleSelfie() {
    this.router.navigate(['signin/aadhar'])
  }
}
