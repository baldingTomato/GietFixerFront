import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomerService, EmployeeService, ItemService, RepairmentService } from "../api";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  Customer: string = '';
  Item: string = '';
  EstimatedCost: number = 0.0;
  Employee: string = '';
  Remarks: string = '';
  static readonly AddTab = "ADD";
  static readonly RepairmentsTab = "REPAIRMENTS";
  static readonly Contact = "CONTACT";

  selectedTab = HomeComponent.AddTab;
  names = [
    { id: 1, name: 'Tomasz' },
    { id: 2, name: 'Piotr' },
    { id: 5, name: 'Zakochana' },
    { id: 3, name: 'Para' },
    { id: 4, name: 'LOOOOOO' }
  ];

  setTab(tab: string) {
    this.selectedTab = tab;
  }

  selectedCustomerId: any;
  selectedCustomer: any;
  customers: any;
  customerService: CustomerService;
  selectedItemId: any;
  selectedItem: any;
  items: any;
  itemService: ItemService;
  selectedEmployeeId: any;
  selectedEmployee: any;
  employees: any;
  employeeService: EmployeeService;
  repairmentService: RepairmentService;




  submit() {
    this.selectedCustomer = this.customers.find((c: any) => c.id === this.selectedCustomerId);
    this.selectedItem = this.items.find((c: any) => c.id === this.selectedItemId);
    this.selectedEmployee = this.employees.find((c: any) => c.id === this.selectedEmployeeId);

    let repairmentRequest = {
      estimatedCost: this.EstimatedCost,
      remarks: this.Remarks,
      employee: this.selectedEmployee,
      customer: this.selectedCustomer,
      item: this.selectedItem
      
    };
    this.repairmentService.apiRepairmentPost(repairmentRequest)
      .subscribe(response => {
        // handle the response
        console.log('Repairment added successfully: ', response);
        this.selectedCustomerId = '';
        this.selectedItemId = '';
        this.selectedEmployeeId = '';
        this.EstimatedCost = 0.0;
        this.Remarks = '';
      }, error => {
        // handle the error
        console.error('Error adding repairment: ', error);
        this.content = 'Error adding repairment, please try again later';
      });

  }

  constructor(cser: CustomerService, iser: ItemService, eser: EmployeeService, rser: RepairmentService, private http: HttpClient, private router: Router) {

    this.customerService = cser;
    this.itemService = iser;
    this.employeeService = eser;
    this.repairmentService = rser;

  }
  ngOnInit(): void {

    this.customerService.apiCustomerGet().subscribe(
      data => {
        this.customers = data;
      }
    );

    this.itemService.apiItemGet().subscribe(
      data => {
        this.items = data;
      });

    this.employeeService.apiEmployeeGet().subscribe(
      data => {
        this.employees = data;
      });





    // this.userService.getPublicContent().subscribe({
    //   next: data => {
    //     this.content = data;
    //   },
    //   error: err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // });
  }
}
