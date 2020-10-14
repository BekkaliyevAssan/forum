import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    let user = JSON.parse(localStorage.getItem('user')) || null
    if (user) return true
    else {
      this.router.navigate(['login'])
      return false
    }
  }
}
