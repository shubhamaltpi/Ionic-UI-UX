import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent {

  constructor(private route: Router, private router: ActivatedRoute) { }


  handlePersonalInfo() {
    this.route.navigate(['signin/selfie'])
  }
}
