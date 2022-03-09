import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Order {
  id?: number;
  amount: string;
  description: string;
  quantity: string;
  customer_id: string;
  payment_status: 'PAID' | 'COD' | 'CANCELLED';
}


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }


  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + 'orders');
  }

  saveOrder(customer: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + 'orders', customer);
  }

  getOrder(id: number): Observable<Order> {
    return this.http.get<Order>(this.baseUrl + 'orders/' + id);
  }

  updateOrder(customer: Order): Observable<Order> {
    return this.http.put<Order>(this.baseUrl + 'orders/' + customer.id, customer);
  }

  deleteOrder(id: number): Observable<Order>  {
    return this.http.delete<Order>(this.baseUrl + 'orders/' + id);
  }
}
