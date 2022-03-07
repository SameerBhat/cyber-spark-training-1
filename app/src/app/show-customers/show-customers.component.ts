import { Component, OnInit } from '@angular/core';
import {Customer, CustomersService} from "../customers.service";

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.scss']
})
export class ShowCustomersComponent implements OnInit {

  customers: Customer[] = [];


  constructor(private customerService: CustomersService) {

    this.customerService.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }


  ngOnInit(): void {
  }
}
