import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Customer, CustomerRequest, CustomerService, Address, AddressRequest } from "../../api";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class UpdateCustomerComponent {
  @Input() customer: Customer;
  @Output() updated = new EventEmitter<any>();

  customerForm: FormGroup;
  selectedCustomer: Customer;

  customerService: CustomerService;

  constructor(cser: CustomerService, private http: HttpClient,
    private router: Router, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) {

    this.customerService = cser;
    this.activatedRoute.queryParams.subscribe(params => {
      this.customer = JSON.parse(params['customer']);
    });
  }

  async ngOnInit() {

    this.customerForm = this.formBuilder.group({
      firstName: [this.customer.firstName, Validators.required],
      lastName: [this.customer.lastName, Validators.required],
      email: [this.customer.email, Validators.required]
    });
    
  }

  onUpdate() {

    const updatedCustomer = this.getCustomerFromForm();

    this.updated.emit(this.customer);
    //console.log(updatedRepairment);
    //console.log(this.repairment);
      this.customerService.updateCustomer(this.customer.id, updatedCustomer).subscribe(
        result => {
          console.log('Customer updated successfully', result);
          this.router.navigate(['/home'], { queryParams: { selectedTab: 'CUSTOMER' } });
        },
        error => {
          console.error('Error updating customer', error);
        }
      );

  }

  getCustomerFromForm(){
    const adressReq = {} as AddressRequest;
        adressReq.city = this.customerForm.value['city'];
        adressReq.region = this.customerForm.value['region'];
        adressReq.country = this.customerForm.value['country'];
        adressReq.postalCode = this.customerForm.value['postalCode'];
        adressReq.street = this.customerForm.value['street'];
        adressReq.apartment = this.customerForm.value['apartment'];

        const request = {} as CustomerRequest;
        request.firstName = this.customerForm.value['firstName'];
        request.lastName = this.customerForm.value['lastName'];
        request.email = this.customerForm.value['email'];
        request.phoneNumber = this.customerForm.value['phoneNumber'];
        request.address = adressReq;
        return request;
}
}