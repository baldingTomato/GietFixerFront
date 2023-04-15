import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerService, Customer } from 'src/app/api';

@Component({
  selector: 'app-customers',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})

export class CustomerComponent implements OnInit {
  content?: string;
  
  customerService : CustomerService;
  customers: Customer[];

constructor(cser : CustomerService, private http: HttpClient, private router: Router) {

  this.customerService = cser;

}

deleteCustomer(customerId: string | undefined) {
  if(customerId == undefined){
    return;
  }
  if (confirm("Are you sure you want to delete this customer?")) {
  this.customerService.deleteCustomer(customerId).subscribe(
    data => {
      console.log('Customer deleted successfully');
      // refresh the list of customers
      this.ngOnInit();
    },
    error => {
      console.error('Error deleting customer: ', error);
    }
  );
  }
}

editCustomer(selectedCustomer: Customer) {
  console.log(selectedCustomer);
  this.router.navigate(['/update', selectedCustomer.id], { queryParams: { customer: JSON.stringify(selectedCustomer) } });
}
  
  
async ngOnInit(){
    this.customerService.getAllCustomers().subscribe(
      data => {
        this.customers = data;
        console.log(data);
      }
    );

   
  }
}
