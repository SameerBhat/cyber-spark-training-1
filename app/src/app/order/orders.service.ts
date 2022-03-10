import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseCrudService, BaseItem} from '../customer/base.crud.service';
import {ORDER_PATH} from './customer.constants';

export interface Order extends BaseItem {
  amount: string;
  description: string;
  quantity: string;
  customer_id: string;
  payment_status: 'PAID' | 'COD' | 'CANCELLED';
}


@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseCrudService<Order> {


  constructor(public http: HttpClient) {
    super(http);
  }

  get suffix(): string {
    return ORDER_PATH;
  }
}
