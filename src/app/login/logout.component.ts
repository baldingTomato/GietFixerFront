import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/authentication-service';

@Component({
  selector: 'app-logout',
  template: `
    <button (click)="onLogout()">Logout</button>
  `
})
export class LogoutComponent {

  constructor(private authService: AuthService, private router: Router) { }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
