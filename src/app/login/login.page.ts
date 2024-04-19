import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errMsg: string;
  loginData: any = {
    email: '',
    password: '',
  };

  constructor(
    private loginService: LoginService,
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit(): void {}

  handleLogin(data: any) {
    this.loginService.sendLoginCredential(this.loginData).subscribe({
      next: async (result: any) => {
        this.router.navigateByUrl('login/main/profile');
        console.log(result);
      },
      error: (err) => (this.errMsg = err.error.event),
    });
  }

  saveToken(token: string): void {
    this.storage.set('authToken', token); // Store token in storage
  }
}
