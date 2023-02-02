import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RepairmentService } from "../api";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-update-repairment',
  templateUrl: './app-update-repairment.component.html',
  styleUrls: ['./app-update-repairment.component.css']
})
export class AppUpdateRepairmentComponent {
  @Input() repairment: any;
  @Output() updated = new EventEmitter<any>();

  repairmentService : RepairmentService;

  constructor(rser : RepairmentService, private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {

    this.repairmentService = rser;
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params['repairment']); // added this line to log the value of params['repairment']
      this.repairment = params['repairment'];
      console.log(this.repairment);
    });
  }

  

  onUpdate() {

    this.updated.emit(this.repairment);
    this.repairmentService.apiRepairmentEmployeeIdPut(this.repairment.id, this.repairment.employeeId, this.repairment).subscribe(
      result => {
        console.log('Repairment updated successfully', result);
      },
      error => {
        console.error('Error updating repairment', error);
      }
    );

  }
}