import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.scss'],
})
export class PanComponent implements OnInit {
  pan = ''
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('PAN CARD');
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
    console.log(this.pan);
    this.router.navigate(['../main'], { relativeTo: this.route.parent })
  }

  handleRetake() {
    this.pan = ''
  }
}
