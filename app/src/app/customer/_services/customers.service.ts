import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseCrudService, BaseItem} from '../base.crud.service';
import {CUSTOMER_PATH} from '../customer.constants';

export interface Customer extends BaseItem{
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
}


@Injectable({
  providedIn: 'root'
})
export class CustomersService extends BaseCrudService<Customer> {


  constructor(public http: HttpClient) {
    super(http);
  }

  get suffix(): string {
    return CUSTOMER_PATH;
  }


}
