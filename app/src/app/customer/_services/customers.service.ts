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

  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }


  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseUrl + 'customers');
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseUrl + 'customers', customer);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(this.baseUrl + 'customers/' + id);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.baseUrl + 'customers/' + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<Customer>  {
    return this.http.delete<Customer>(this.baseUrl + 'customers/' + id);
  }
}
