import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/authentication-service';
import { User } from '../auth-service/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string = '';
  password:string = '';
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  authService:AuthService;
  constructor(authService: AuthService, private router: Router) {
    this.authService = authService;
   }

  

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.users.push(new User(this.email,this.password,false))
    this.router.navigate(['/login']);

  }
}