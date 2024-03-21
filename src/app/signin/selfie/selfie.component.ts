import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.component.html',
  styleUrls: ['./selfie.component.scss'],
})
export class SelfieComponent implements OnInit {
  selfie = ''
  constructor(private router: Router) { }

  ngOnInit() {
    console.log('Selfie');
  }

  onFileSelected(e: any) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        this.selfie = reader.result as string;
      }
      reader.readAsDataURL(file)
    } else {
      console.log('ERROR');
    }
  }

  retakeSelfie() {
    this.selfie = ''
  }

  handleSelfie() {
    this.router.navigate(['signin/aadhar'])
  }
}
