import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../_services/auth.service';
// import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @Input() isLoggedIn = false;
  @Input() showAdminBoard = false;
  @Output() logOut = new EventEmitter<boolean>();


  makeUserLogOut(){
    this.logOut.emit(true);
  }


}