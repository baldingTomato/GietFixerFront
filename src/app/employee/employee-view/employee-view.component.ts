import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmployeeService, Employee } from 'src/app/api';

@Component({
  selector: 'app-employees',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})

export class EmployeeComponent implements OnInit {
  content?: string;
  
  employeeService : EmployeeService;
  employees: Employee[];

constructor(eser : EmployeeService, private http: HttpClient, private router: Router) {

  this.employeeService = eser;

}

deleteEmployee(employeeId: string | undefined) {
  if(employeeId == undefined){
    return;
  }
  if (confirm("Are you sure you want to delete this customer?")) {
  this.employeeService.deleteEmployee(employeeId).subscribe(
    data => {
      console.log('Employee deleted successfully');
      // refresh the list of items
      this.ngOnInit();
    },
    error => {
      console.error('Error deleting an employee: ', error);
    }
  );
  }
}

updateEmployee(selectedEmployee: Employee) {
  console.log(selectedEmployee);
  this.router.navigate(['/updateEmployee', selectedEmployee.id], { queryParams: { employee: JSON.stringify(selectedEmployee) } });
}
  
  
async ngOnInit(){
    this.employeeService.getAllEmployees().subscribe(
      data => {
        this.employees = data;
        console.log(data);
      }
    );

  }
}
