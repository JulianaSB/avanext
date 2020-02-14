import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoggedGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isLogged()) {
      this.router.navigate(['home']);
      return false;
    }

    return true;
  }
}
