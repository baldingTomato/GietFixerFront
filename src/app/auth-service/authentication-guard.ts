import { EventEmitter, Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './authentication-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {}

  canActivate(): boolean {
    if (this.authenticationService.currentUserValue && this.authenticationService.currentUserValue.email !== 'default') {
      return true;
    }
    this.router.navigate(['/login']);

    return false;
  }
} 