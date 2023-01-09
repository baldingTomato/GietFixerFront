import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './repairment.component.html',
  styleUrls: ['./repairment.component.css']
})

class Naprawy {
  private values: { [key: string]: any[] } = {};

  setValues(key: string, ...values: any[]) {
    this.values[key] = values;
  }

  getValues(key: string) {
    return this.values[key];
  }
}

const container = new Naprawy();
container.setValues('key1', "komura", "tv", "telefon", "huwhauw");
container.setValues('key2', "audi", "komp", "warga", "ponczek");

export class RepairmentComponent implements OnInit {
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