import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/authentication-service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  passwordErrors = {};
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/home']);
    } else {
      // Display an error message
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
