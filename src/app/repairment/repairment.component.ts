import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './repairment.component.html',
  styleUrls: ['./repairment.component.css']
})


export class RepairmentComponent implements OnInit {
  content?: string;
  showCompleted: boolean = false;

  naprawy = [

    {
      id: 1,
      customer: "Tomasz",
      total: 12.50,
      status: "zielony",
      remarks: "hildegard.org",
      stan: "gazowy",
    },
    {
      id: 2,
      customer: "Johnny",
      total: 100.00,
      status: "zjeb",
      remarks: "no spoko",
      stan: "gazowy",
    },
    {
      id: 3,
      customer: "Rumcajs",
      total: 1.23,
      status: "zakochany",
      remarks: "zaraz oszaleje",
      stan: "ciekły",
    },
    {
      id: 4,
      customer: "Alonzo",
      total: 123.50,
      status: "baran",
      remarks: "stabilnie",
      stan: "gazowy",
    }

];

  
  
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