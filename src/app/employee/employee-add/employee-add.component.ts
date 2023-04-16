import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService, EmployeeRequest } from "../../api";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from 'src/app/common/form-base/form-base.component';

@Component({
    selector: 'app-employees-add',
    templateUrl: './employee-add.component.html',
    styleUrls: ['./employee-add.component.css']
})

export class EmployeeAddComponent extends FormBaseComponent implements OnInit {
    employee: Employee;
    employeeForm: FormGroup;

    constructor(private employeeService: EmployeeService,
        private formBuilder: FormBuilder) { super();}

    async ngOnInit() {
        this.employeeForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            isAdmin: ['', Validators.required],
            //createdDate: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
        
        this.activeForm = this.employeeForm;

        this.submitRequest.subscribe(()=>{
            this.addEmployee();
        })
    }

    addEmployee() {
        const employee = this.getEmployeeFromForm();
        console.log(employee);
        this.employeeService.addEmployee(employee).subscribe(
            result => {
                console.log('Successfuly added an employee');
            },
            error => {
                console.error(error);
            }
        );
    };

    getEmployeeFromForm(){
        const request = {} as EmployeeRequest;
        request.firstName = this.employeeForm.value['firstName'];
        request.lastName = this.employeeForm.value['lastName'];
        request.isAdmin = this.employeeForm.value['isAdmin'];
        request.createdDate = new Date();
        request.email = this.employeeForm.value['email'];
        request.password = this.employeeForm.value['password'];
        return request;
    }

    submit(){

    }
}
