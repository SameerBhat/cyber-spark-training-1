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

const API = 'http://localhost:3000/customers/'


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }


  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API}`);
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${API}`, customer);
  }

  getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API}/` + id);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API}/` + customer.id, customer);
  }

  deleteCustomer(id: number): Observable<Customer>  {
    return this.http.delete<Customer>(`${API}/` + id);
  }
}
