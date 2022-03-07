import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Customer, CustomersService} from '../customers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {


  form: FormGroup = new FormGroup({
    name: new FormControl('', []),
    phone: new FormControl('', []),
    email: new FormControl('', []),
    address: new FormControl('', []),
    city: new FormControl('', []),
  });

  constructor(private customerService: CustomersService, private routingService: Router) { }

  ngOnInit(): void {
  }

  formSubmitted(event): void {
    const customer: Customer = this.form.value;
    this.customerService.saveCustomer(customer).subscribe(res => {
    this.routingService.navigateByUrl('/show-customers');
    });
  }
}

