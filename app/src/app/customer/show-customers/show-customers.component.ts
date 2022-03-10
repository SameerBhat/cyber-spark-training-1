import { Component, OnInit } from '@angular/core';
import {Customer, CustomersService} from '../_services/customers.service';
import {CUSTOMER_PATH, CUSTOMER_UPDATE_PATH} from '../customer.constants';
import {TableColumn} from "../../shared/layout/table/table.component";

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.scss']
})
export class ShowCustomersComponent implements OnInit {

  customers: Customer[] = [];
  path = `/${CUSTOMER_PATH}/${CUSTOMER_UPDATE_PATH}`;
  customerPathPrefix = `/${CUSTOMER_PATH}/${CUSTOMER_UPDATE_PATH}/`;
  columns: TableColumn[] = [
    { label: 'Name', key: 'name'},
    { label: 'Phone', key: 'phone'},
    { label: 'Email', key: 'email'},
    { label: 'Address', key: 'address'},
    { label: 'City', key: 'city'}
  ];



  constructor(private customerService: CustomersService) {

    this.customerService.getItems().subscribe(customers => {
      this.customers = customers;
    });
  }


  ngOnInit(): void {
  }

  deleteCustomer(id: number): void {
    if (confirm('Are you sure?')){


    this.customerService.deleteItem(id).subscribe(res => {
      window.location.reload();
    });
    }


  }
}
