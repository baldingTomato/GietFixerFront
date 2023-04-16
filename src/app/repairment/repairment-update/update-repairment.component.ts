import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee, EmployeeService, DeliveryType, RepairmentStatus ,Repairment, RepairmentRequest, RepairmentService, Customer, Item, CustomerService, ItemService } from "../../api";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnumHelper } from 'src/app/helpers/enum-helper';

@Component({
  selector: 'app-update-repairment',
  templateUrl: './update-repairment.component.html',
  styleUrls: ['./update-repairment.component.css']
})
export class UpdateRepairmentComponent {
  @Input() repairment: Repairment;
  @Output() updated = new EventEmitter<any>();

  repairmentForm: FormGroup;

  deliveryTypes = EnumHelper.GetAllEnumValues(DeliveryType);
  repairmentStatus = EnumHelper.GetAllEnumValues(RepairmentStatus);

  employees: Employee[];
  items: Item[];
  customers: Customer[];
  selectedEmp: any;
  selectedCus: Customer;

  repairmentService: RepairmentService;
  employeeService: EmployeeService;
  repairmentRequest: RepairmentRequest;
  itemService: ItemService;
  customerService: CustomerService;

  constructor(rser: RepairmentService, eser: EmployeeService, private http: HttpClient,
    private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, cser: CustomerService, iser: ItemService) {

    this.repairmentService = rser;
    this.employeeService = eser;
    this.customerService = cser;
    this.itemService = iser;
    this.activatedRoute.queryParams.subscribe(params => {
      this.repairment = JSON.parse(params['repairment']);
    });
  }

  async ngOnInit() {

    console.log(this.repairmentStatus);
    this.employeeService.getAllEmployees().subscribe(
      data => {
        this.employees = data;
        //this.selectedEmp = this.employees.find((employee: any) => employee.firstName + " " + employee.lastName === this.repairment.employee);
      }
    );

    this.customerService.getAllCustomers().subscribe(
      data => {
        this.customers = data;
        this.selectedCus = this.customers.find((Customer: any) => Customer.firstName + " " + Customer.lastName === this.repairment.customer)!;
      }
    );

    this.itemService.getAllItems().subscribe(
      data => {
        this.items = data;
        //this.selectedCus = this.employees.find((employee: any) => employee.firstName + " " + employee.lastName === this.repairment.employee);
      }
    );

    console.log(this.repairment.remarks);
    console.log(this.repairment.estimatedCost);

    this.repairmentForm = this.formBuilder.group({
      customerId: [this.repairment.customer!.id, Validators.required],
      itemId: [this.repairment.item!.id, Validators.required],
      estimatedCost: [this.repairment.estimatedCost, Validators.required],
      remarks: [this.repairment.remarks, Validators.required],
      employeeId: [this.repairment.employee!.id, Validators.required],
      deliveryType: [this.repairment.deliveryType, Validators.required],
      total: [this.repairment.total, Validators.required],
      repairmentStatus: [this.repairment.status, Validators.required]
    });
    
  }

  onUpdate() {

    const updatedRepairment = this.getRepairmentFromForm();

    this.updated.emit(this.repairment);
    //console.log(updatedRepairment);
    //console.log(this.repairment);
      this.repairmentService.updateRepairment(this.repairment.id, updatedRepairment).subscribe(
        result => {
          console.log('Repairment updated successfully', result);
          this.router.navigate(['/home'], { queryParams: { selectedTab: 'REPAIRMENTS' } });
        },
        error => {
          console.error('Error updating repairment', error);
        }
      );

  }

  getRepairmentFromForm(){
    const request = {} as RepairmentRequest;
    request.customerId = this.repairmentForm.value['customerId'];
    request.employeeId = this.repairmentForm.value['employeeId'];
    request.itemId = this.repairmentForm.value['itemId'];
    request.remarks = this.repairmentForm.value['remarks'];
    request.estimatedCost = this.repairmentForm.value['estimatedCost'];
    request.repairmentStatus = this.repairmentForm.value['repairmentStatus'];
    request.total = this.repairmentForm.value['estimatedCost'];
    request.deliveryType = this.repairmentForm.value['deliveryType'];
    return request;
}
}