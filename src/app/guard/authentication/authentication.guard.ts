import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  isLoggedIn: boolean = true
  constructor(private localStorage: LocalStorageService, private router: Router) {
    this.checkAuth()
    console.log('heyt');
    
  }

  async checkAuth() {
    const res = await this.localStorage.getState('token')
    const data = res.value
    if (data) {
      this.isLoggedIn = true
    } else {
      this.isLoggedIn = false
    }
    console.log(this.isLoggedIn);

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLoggedIn ? true : this.router.navigateByUrl('/login')
  }
}
