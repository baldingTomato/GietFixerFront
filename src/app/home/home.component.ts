import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  users = [
    { value: 'tomasz', label: 'T' },
    { value: 'mAteusz', label: 'M' },
    { value: 'ola', label: 'O' },
    { value: 'kareta', label: 'K' }
  ]

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