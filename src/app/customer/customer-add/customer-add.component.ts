import { Component, OnInit } from '@angular/core';
import { Address, Customer, CustomerRequest, CustomerService, AddressRequest } from "../../api";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormBaseComponent } from 'src/app/common/form-base/form-base.component';

@Component({
    selector: 'app-customers-add',
    templateUrl: './customer-add.component.html',
    styleUrls: ['./customer-add.component.css']
})

export class CustomersAddComponent extends FormBaseComponent implements OnInit {
    adress: Address;
    customerForm: FormGroup;
    customer: Customer;

    constructor(private customerService: CustomerService,
        private formBuilder: FormBuilder) { super();}

    async ngOnInit() {
        this.customerForm = this.formBuilder.group({
            phoneNumber: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['',Validators.required],
            city: ['',Validators.required],
            postalCode: ['',Validators.required],
            country: ['',Validators.required],
            street: ['',Validators.required],
            apartment: ['',Validators.required],
            region: ['',Validators.required]
        })
        
        this.activeForm = this.customerForm;

        this.submitRequest.subscribe(()=>{
            this.addCustomer();
        })
    }

    addCustomer() {
        const customer = this.getCustomerFromForm();
        console.log(customer);
        this.customerService.addCustomer(customer).subscribe(
            result => {
                console.log('Successfuly added customer');
            },
            error => {
                console.error(error);
            }
        );
    };

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

    submit(){

    }
}
