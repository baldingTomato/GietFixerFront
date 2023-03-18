import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../api";
import { RepairmentService } from "../api";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
 templateUrl: './repairment.component.html',
  styleUrls: ['./repairment.component.css']
})

export class RepairmentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  content?: string;
  showGazowy: boolean = false;
  showCiekly: boolean = false;
  showStaly: boolean = false;

  delete = 'assets/delete.png'
  edit = 'assets/edit.png'
  check = 'assets/check.png'
  selectedRepairment: any;
  repairmentService : RepairmentService;

constructor(private router: Router) { }

repairments: any;

constructor(rser : RepairmentService, private http: HttpClient, private router: Router) {

  this.repairmentService = rser;

}

deleteRepairment(repairmentId: string) {
  if (confirm("Are you sure you want to delete this repairment?")) {
  this.repairmentService.apiRepairmentRepairmentIdDelete(repairmentId).subscribe(
    data => {
      console.log('Repairment deleted successfully');
       refresh the list of repairments
      this.ngOnInit();
    },
    error => {
      console.error('Error deleting repairment: ', error);
    }
  );
  }
}

editRepairment(repairmentId: string) {
  //this.router.navigate(['/update', repairmentId]);
}
  
  
async ngOnInit(){

    console.log("dupa");

    this.repairmentService.apiRepairmentGet().subscribe(
      data => {
        this.repairments = data;
      }
    );

    console.log(this.repairments);

 //   console.log("chuj");
  }
}
