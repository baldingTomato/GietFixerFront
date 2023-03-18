import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // add this line

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    email: string;
    message: string;
  
    constructor() {
      this.email = '';
      this.message = '';
    }

    submit() {
        // your submit logic here
      }
}
