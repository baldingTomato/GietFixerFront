import { Component, OnInit } from '@angular/core';
import { RepairmentService } from "../api";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  selectedRepairment: any;
  repairmentService : RepairmentService;

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

repairments: any;

constructor(rser : RepairmentService, private http: HttpClient, private router: Router) {

  this.repairmentService = rser;

}

deleteRepairment(repairmentId: string) {
  if (confirm("Are you sure you want to delete this repairment?")) {
  this.repairmentService.apiRepairmentRepairmentIdDelete(repairmentId).subscribe(
    data => {
      console.log('Repairment deleted successfully');
      // refresh the list of repairments
      this.ngOnInit();
    },
    error => {
      console.error('Error deleting repairment: ', error);
    }
  );
  }
}

editRepairment(selectedRepairment: any) {
  this.router.navigate(['/update', selectedRepairment.id], { queryParams: { repairment: JSON.stringify(selectedRepairment) } });
}
  
  
async ngOnInit(){

    console.log("dupa");

    this.repairmentService.apiRepairmentGet().subscribe(
      data => {
        this.repairments = data;
      }
    );

    console.log(this.repairments);

    console.log("chuj");
  }
}