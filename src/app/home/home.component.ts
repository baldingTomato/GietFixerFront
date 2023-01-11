import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  kurwy = [
    {id: 1, name:'Tomasz'},
    {id: 2, name:'Piotr'},
    {id: 5, name:'Zakochana'},
    {id: 3, name:'Para'},
    {id: 4, name:'LOOOOOO'}
];

  constructor() { }

  ngOnInit(): void {
    // this.userService.getPublicContent().subscribe({
    //   next: data => {
    //     this.content = data;
    //   },
    //   error: err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // });
  }
}