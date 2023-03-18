import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../api/service/authentication-guard';
import { AuthService } from '../api/service/authentication-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authGuard: AuthService;
  isLoggedIn = false;
  constructor(service:AuthService){
    this.authGuard = service;
    this.authGuard.currentUser.subscribe(u=>{
      if(u.email !== 'default'){
        this.isLoggedIn = true;
      }
    })
  }

  ngOnInit(): void {
    this.authGuard.loggedIn.subscribe(b => {
      this.isLoggedIn = b;
    })
  }
}
