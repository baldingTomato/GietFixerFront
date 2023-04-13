import { Component } from '@angular/core';
import { AuthService } from './auth-service/authentication-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;
  public showAdminBoard: boolean;

  constructor(private authenticationService: AuthService) {
    this.isLoggedIn = !!this.authenticationService.currentUserValue;
    this.showAdminBoard = !!this.authenticationService.currentUserValue;
  }
}