import { Component, OnInit } from '@angular/core';
import { PaymentService } from "../api";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  content?: string;

  delete = 'assets/delete.png'
  edit = 'assets/edit.png'
  check = 'assets/check.png'
  selectedPayment: any;
  paymentService : PaymentService;

  payments: any;

constructor(pser : PaymentService, private http: HttpClient, private router: Router) {

  this.paymentService = pser;

}

deletePayment(paymentId: string) {
  if (confirm("Are you sure you want to delete this payment?")) {
  this.paymentService.apiPaymentPaymentIdDelete(paymentId).subscribe(
    data => {
      console.log('Payment deleted successfully');
      // refresh the list of payments
      this.ngOnInit();
    },
    error => {
      console.error('Error deleting Payment: ', error);
    }
  );
  }
}

editPayment(paymentId: string) {
  this.router.navigate(['/update', paymentId]);
}
  
  
async ngOnInit(){

    console.log("dupa");

    this.paymentService.apiPaymentGet().subscribe(
      data => {
        this.payments = data;
      }
    );

    console.log(this.payments);

    console.log("chuj");
  }
}
