import { Component, OnInit } from '@angular/core';
import {Customer, CustomersService} from '../_services/customers.service';
import {CUSTOMER_PATH, CUSTOMER_UPDATE_PATH} from '../customer.constants';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.scss']
})
export class ShowCustomersComponent implements OnInit {

  customers: Customer[] = [];
  path = `/${CUSTOMER_PATH}/${CUSTOMER_UPDATE_PATH}`;
  customerPathPrefix = `/${CUSTOMER_PATH}/${CUSTOMER_UPDATE_PATH}/`;



  constructor(private customerService: CustomersService) {

    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }


  ngOnInit(): void {
  }

  deleteCustomer(id: number): void {
    if (confirm('Are you sure?')){
    this.customerService.deleteCustomer(id).subscribe(res => {
      window.location.reload();
    });
    }


  }
}
