import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RepairmentService } from "../api";
import { EmployeeService } from "../api";
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

  employees: any;
  selectedEmp: any;

  repairmentService : RepairmentService;
  employeeService : EmployeeService;

  constructor(rser : RepairmentService, eser : EmployeeService, private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {

    this.repairmentService = rser;
    this.employeeService = eser;
    this.activatedRoute.queryParams.subscribe(params => {
      this.repairment = JSON.parse(params['repairment']);
      console.log(this.repairment);
    });
  }

 async ngOnInit(){

    console.log("dupa");

    this.employeeService.apiEmployeeGet().subscribe(
      data => {
        this.employees = data;
        console.log(this.employees);
        this.selectedEmp = this.employees.find((employee: any) => employee.firstName + " " + employee.lastName === this.repairment.employee);
        console.log(this.selectedEmp);
      }
    );

    console.log("chuj");
  }


  onUpdate() {

    this.updated.emit(this.repairment);
    if (this.selectedEmp) {
      this.repairmentService.apiRepairmentEmployeeIdPut(this.repairment.id, this.selectedEmp.id, this.repairment).subscribe(
        result => {
          console.log('Repairment updated successfully', result);
        },
        error => {
          console.error('Error updating repairment', error);
        }
      );
    } else {
      console.error('Error: selectedEmp is undefined');
    }

  }
}