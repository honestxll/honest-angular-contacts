import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token = localStorage.getItem('token');
    const gotoUrl = state.url;

    const isLoginPage = gotoUrl === '/sign-in';
    if (!token && !isLoginPage) {
      this.router.navigateByUrl('/sign-in');
      return false;
    }
    if (token && isLoginPage) {
      this.router.navigateByUrl('/contacts');
      return false;
    }
    return true;
  }
}
