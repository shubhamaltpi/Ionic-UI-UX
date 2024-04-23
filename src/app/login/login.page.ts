import { Component, OnInit } from '@angular/core';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { AuthService } from '../services/auth/auth.service';

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

  constructor(private authService: AuthService, private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit(): void {
    console.log('Login');
  }

  handleLogin(data: any) {
    this.authService.login(this.loginData).subscribe({
      next: async (result: any) => {
        this.localStorage.setState('token', result.JWT)
        this.router.navigateByUrl('login/main/profile');
      },
      error: (err) => (this.errMsg = err.error.event),
    });
  }
}
