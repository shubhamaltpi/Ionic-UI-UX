import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.scss'],
})
export class PanComponent implements OnInit {
  pan = ''
  data: any
  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('signup'))
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
    this.httpClient.post(`http://192.168.1.18:4001/subadmin/userOnboard`, this.data).subscribe((res: any) => {
      if (res.Event) {
        localStorage.removeItem('signup')
        this.router.navigateByUrl('login/main')
      } else {
        console.log('Error when onboarding!');
      }
    })
  }

  handleRetake() {
    this.pan = ''
  }
}
