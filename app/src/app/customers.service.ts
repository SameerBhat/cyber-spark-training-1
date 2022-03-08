import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Customer {
  id?: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
}


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }


  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customers');
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('http://localhost:3000/customers', customer);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:3000/customers/' + id);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>('http://localhost:3000/customers/' + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<Customer>  {
    return this.http.delete<Customer>('http://localhost:3000/customers/' + id);
  }
}
