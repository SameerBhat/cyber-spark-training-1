import { Component, OnInit } from '@angular/core';
import {Order, OrdersService} from '../orders.service';

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.scss']
})
export class ShowOrdersComponent implements OnInit {

  orders: Order[] = [];


  constructor(private customerService: OrdersService) {

    this.customerService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }


  ngOnInit(): void {
  }

  deleteOrder(id: number): void {
    if (confirm('Are you sure?')){
    this.customerService.deleteOrder(id).subscribe(res => {
      window.location.reload();
    });
    }


  }
}
