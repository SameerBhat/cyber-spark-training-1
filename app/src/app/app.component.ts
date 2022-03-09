import {Component} from '@angular/core';
import {CUSTOMER_PATH, CUSTOMER_SHOW_PATH, CUSTOMER_UPDATE_PATH} from './customer/customer.constants';
import {ORDER_PATH, ORDER_SHOW_PATH, ORDER_UPDATE_PATH} from './order/customer.constants';

export interface MenuItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  menuItems: MenuItem[] = [
    {
      label: 'Customers',
      path: `/${CUSTOMER_PATH}/${CUSTOMER_SHOW_PATH}`,
    },
    {
      label: 'Orders',
      path: `/${ORDER_PATH}/${ORDER_SHOW_PATH}`
    }
  ];










}
