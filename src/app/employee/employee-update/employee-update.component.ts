import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee, EmployeeRequest, EmployeeService } from "../../api";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class UpdateEmployeeComponent {
  @Input() employee: Employee;
  @Output() updated = new EventEmitter<any>();

  employeeForm: FormGroup;
  selectedEmployee: Employee;

  employeeService: EmployeeService;

  constructor(eser: EmployeeService, private http: HttpClient,
    private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {

    this.employeeService = eser;
    this.activatedRoute.queryParams.subscribe(params => {
      this.employee = JSON.parse(params['employee']);
    });
  }

  async ngOnInit() {

    this.employeeForm = this.formBuilder.group({
      firstName: [this.employee.firstName, Validators.required],
      lastName: [this.employee.lastName, Validators.required],
      isAdmin: [this.employee.isAdmin, Validators.required]
    });
    
  }

  onUpdate() {

    const updatedEmployee = this.getEmployeeFromForm();

    this.updated.emit(this.employee);
    //console.log(updatedRepairment);
    //console.log(this.repairment);
      this.employeeService.updateEmployee(this.employee.id, updatedEmployee).subscribe(
        result => {
          console.log('Employee updated successfully', result);
          this.router.navigate(['/home'], { queryParams: { selectedTab: 'EMPLOYEE' } });
        },
        error => {
          console.error('Error updating an employee', error);
        }
      );

  }

  getEmployeeFromForm(){
    const request = {} as EmployeeRequest;
    request.firstName = this.employeeForm.value['firstName'];
    request.lastName = this.employeeForm.value['lastName'];
    request.isAdmin = this.employeeForm.value['isAdmin'];
    request.email = this.employee.email;
    request.createdDate = this.employee.createdDate;
    request.password = this.employee.password;
    return request;
}
}