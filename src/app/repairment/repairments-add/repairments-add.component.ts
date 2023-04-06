import { Component, OnInit } from '@angular/core';
import { Customer, CustomerService, Employee, EmployeeService, Item, ItemService, Repairment, RepairmentRequest, RepairmentService, RepairmentStatus } from "../../api";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from 'src/app/common/form-base/form-base.component';

@Component({
    selector: 'app-repairments-add',
    templateUrl: './repairments-add.component.html',
    styleUrls: ['./repairments-add.component.css']
})

export class RepairmentsAddComponent extends FormBaseComponent implements OnInit {
    employees: Employee[] ;
    customers: Customer[] ;
    items: Item[];
    repairmentForm: FormGroup;
    repairment: Repairment;

    constructor(private repairmentService: RepairmentService,
        private customerService: CustomerService,
        private employeesService: EmployeeService,
        private itemsService: ItemService,
        private formBuilder: FormBuilder) { super();}

    async ngOnInit() {
        this.repairmentForm = this.formBuilder.group({
            customerId: ['', Validators.required],
            itemId: ['', Validators.required],
            estimatedCost: ['', Validators.required],
            remarks: ['', Validators.required],
            employeeId: ['', Validators.required],
            total: ['',Validators.required],
            deliveryType: ['',Validators.required]
        })

        this.employeesService.getAllEmployees().subscribe(employees => {
            this.employees = employees;
            console.log(this.employees);
        });

        this.itemsService.getAllItems().subscribe(items => {
            this.items = items;
        });

        this.customerService.getAllCustomers().subscribe(customers => {
            this.customers = customers;
        });
        
        this.activeForm = this.repairmentForm;

        this.submitRequest.subscribe(()=>{
            this.addRepairment();
        })
    }

    addRepairment() {
        const repairment = this.getRepairmentFromForm();
        this.repairmentService.addRepairment(repairment).subscribe(
            result => {
                console.log('Successfuly added repairment');
            },
            error => {
                console.error(error);
            }
        );
    };

    getRepairmentFromForm(){
        const request = {} as RepairmentRequest;
        request.customerId = this.repairmentForm.value['customerId'];
        request.employeeId = this.repairmentForm.value['employeeId'];
        request.itemId = this.repairmentForm.value['itemId'];
        request.remarks = this.repairmentForm.value['remarks'];
        request.estimatedCost = this.repairmentForm.value['estimatedCost'];
        request.repairmentStatus = RepairmentStatus.Accepted;
        request.total = this.repairmentForm.value['total'];
        request.deliveryType = this.repairmentForm.value['deliveryType'];
        return request;
    }

    submit(){

    }
}
