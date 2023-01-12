import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './repairment.component.html',
  styleUrls: ['./repairment.component.css']
})


export class RepairmentComponent implements OnInit {
  content?: string;
  showGazowy: boolean = false;
  showCiekly: boolean = false;
  showStaly: boolean = false;

  delete = 'assets/delete.png'
  edit = 'assets/edit.png'
  check = 'assets/check.png'
  selectedNaprawa: any;

  naprawy = [

    {
      id: 1,
      customer: "Tomasz",
      total: 12.50,
      kolor: "zielony",
      remarks: "hildegard.org",
      stan: "gazowy",
    },
    {
      id: 2,
      customer: "Johnny",
      total: 100.00,
      kolor: "zjeb",
      remarks: "no spoko",
      stan: "gazowy",
    },
    {
      id: 3,
      customer: "Rumcajs",
      total: 1.23,
      kolor: "zakochany",
      remarks: "zaraz oszaleje",
      stan: "ciekly",
    },
    {
      id: 4,
      customer: "Alonzo",
      total: 123.50,
      kolor: "baran",
      remarks: "stabilnie",
      stan: "gazowy",
    },
    {
      id: 5,
      customer: "Co ludzie powiedza?",
      total: 444.50,
      kolor: "gowno",
      remarks: "piwko",
      stan: "staly",
    },
    {
      id: 6,
      customer: "626",
      total: 123.50,
      kolor: "sticz",
      remarks: "taki stwor z bajki",
      stan: "staly",
    }

];

  deleteNaprawa(naprawa: any) {
    if (confirm("Are you sure you want to delete this naprawa?")) {
      const index = this.naprawy.indexOf(naprawa);
      this.naprawy.splice(index, 1);
    }
  }

  editNaprawa(naprawa: any) {
    if (confirm("Are you sure you want to edit?")) {
      this.selectedNaprawa = naprawa;
    }
  }
  
  
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
