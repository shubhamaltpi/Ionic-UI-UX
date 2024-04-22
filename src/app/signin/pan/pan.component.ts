import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { API_ENDPOINT } from 'src/app/appConfig/appConfig';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.scss'],
})
export class PanComponent implements OnInit {
  pan = ''
  data: any
  constructor(@Inject(API_ENDPOINT) public apiEndpoint: string, private localStorage: LocalStorageService, private authService: AuthService, private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) { }

  async ngOnInit() {
    const res: any = await this.localStorage.getState('signup')
    this.data = JSON.parse(res.value)
  }

  onPanSelected(e: any) {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        this.pan = reader.result as string;
      }
      reader.readAsDataURL(file)
    } else {
      console.log('ERROR');
    }
  }


  handlePan() {
    // this.httpClient.post(`${this.apiEndpoint}/subadmin/userOnboard`, this.data).subscribe((res: any) => {
    //   if (res.Event) {
    //     localStorage.removeItem('signup')
    //     this.router.navigateByUrl('login/main')
    //   } else {
    //     console.log('Error when onboarding!');
    //   }
    // })
    this.authService.signin(this.data).subscribe((res: any) => {
      if (res.Event === 'success') {
        this.localStorage.removeState('signup')
        this.router.navigateByUrl('/login')
      } else {
        console.log(`Error while onboarding user.`);
      }
    })
  }

  handleRetake() {
    this.pan = ''
  }
}
