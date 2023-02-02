import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showForm = false;
  note: string = '';
  notes: string[] = [];

  constructor() { }

  ngOnInit() {
    // Check if there are any saved notes in session storage
    const savedNotes = sessionStorage.getItem('notes');
    if (savedNotes) {
      // If there are, parse the savedNotes string into an array of strings
      this.notes = JSON.parse(savedNotes);
    }
  }

  addNote() {
    this.showForm = true;
  }

  cancelNote() {
    this.note = '';
    this.showForm = false;
  }

  submitNote() {
    if (this.note.length > 300) {
      console.log("Note exceeds 300 characters.");
      alert("Note exceeds 300 characters, please shorten your note.");
      return;
    }
    this.notes.push(this.note);
    this.note = '';
    this.showForm = false;

    // Save the notes to session storage
    sessionStorage.setItem('notes', JSON.stringify(this.notes));
  }

  deleteNote(note: string) {
    if (confirm("Are you sure you want to delete this note?")) {
    const index = this.notes.indexOf(note);
    if (index > -1) {
    this.notes.splice(index, 1);
    // Save the updated notes to session storage
    sessionStorage.setItem('notes', JSON.stringify(this.notes));
    }
  }
}
}