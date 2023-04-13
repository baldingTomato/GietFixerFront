import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  loggedIn = new EventEmitter<boolean>();

  users: Array<User> = [
    new User("testuser@wp.pl","321",true)
  ]

  constructor() { 
    const userFromStorage: string | null = localStorage.getItem("currentUser");
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(userFromStorage || '{"email":"default","password":"default","isAdmin":false}'));
    this.currentUser = this.currentUserSubject.asObservable();
    this.currentUserSubject.subscribe(u=>{
      if(u.email === 'default'){
        this.loggedIn.emit(false);
      } else {
        this.loggedIn.emit(true);
      }
    })
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    if(this.users.find(u => u.email == email && u.password == password)){
      let user = new User(email, password, false);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.loggedIn.emit(true);
      return user;
    } else{
      return false;
    }

  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(new User("default","default",false));
    this.loggedIn.emit(false);
  }
}