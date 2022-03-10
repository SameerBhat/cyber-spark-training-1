import { Component, OnInit } from '@angular/core';
import {Order, OrdersService} from '../orders.service';
import {TableColumn} from '../../shared/layout/table/table.component';

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.scss']
})
export class ShowOrdersComponent implements OnInit {

  orders: Order[] = [];

  columns: TableColumn[] = [
    {
      key: 'amount',
      label: 'Amount'
    },
    {
      key: 'description',
      label: 'Description'
    },
    {
      key: 'payment_status',
      label: 'Payment Status'
    },
    {
      key: 'quantity',
      label: 'Quantity'
    },
  ];


  constructor(private customerService: OrdersService) {

    this.customerService.getItems().subscribe(orders => {
      this.orders = orders;
    });
  }


  ngOnInit(): void {
  }

  deleteOrder(id: number): void {
    if (confirm('Are you sure?')){
    this.customerService.deleteItem(id).subscribe(res => {
      window.location.reload();
    });
    }


  }
}
