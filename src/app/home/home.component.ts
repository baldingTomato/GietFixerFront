import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  Customer: string = '';
  Item: string = '';
  EstimatedCost: number = 0.0;
  Employee: string= '';
  Remarks: string= '';
  static readonly  AddTab = "ADD";
  static readonly  RepairmentsTab = "REPAIRMENTS";
  static readonly  Contact = "CONTACT";

  selectedTab = HomeComponent.AddTab;
  names = [
    {id: 1, name:'Tomasz'},
    {id: 2, name:'Piotr'},
    {id: 5, name:'Zakochana'},
    {id: 3, name:'Para'},
    {id: 4, name:'LOOOOOO'}
];

setTab(tab:string){
  this.selectedTab = tab;
}

submit() {
  // your submit logic here
}

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