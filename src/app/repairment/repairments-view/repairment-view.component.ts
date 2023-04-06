import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RepairmentService } from 'src/app/api';

@Component({
  selector: 'app-repairments',
  templateUrl: './repairment-view.component.html',
  styleUrls: ['./repairment-view.component.css']
})

export class RepairmentComponent implements OnInit {
  content?: string;
  Oczekiwane: boolean = false;
  Wtrakcie: boolean = false;
  Zakonczone: boolean = false;
  selectedRepairment: any;
  repairmentService : RepairmentService;

repairments: any;

constructor(rser : RepairmentService, private http: HttpClient, private router: Router) {

  this.repairmentService = rser;

}

deleteRepairment(repairmentId: string) {
  if (confirm("Are you sure you want to delete this repairment?")) {
  this.repairmentService.deleteRepairment(repairmentId).subscribe(
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
    this.repairmentService.getAllRepairments().subscribe(
      data => {
        this.repairments = data;
      }
    );

   
  }
}
