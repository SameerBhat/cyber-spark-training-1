import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {ShowCustomersComponent} from './show-customers/show-customers.component';
import {CUSTOMER_SHOW_PATH, CUSTOMER_UPDATE_PATH} from './customer.constants';

const routes: Routes = [
  {
    path: CUSTOMER_UPDATE_PATH,
    component: CreateCustomerComponent
  },
  {
    path: CUSTOMER_UPDATE_PATH + '/:id',
    component: CreateCustomerComponent
  },
  {
    path: CUSTOMER_SHOW_PATH,
    component: ShowCustomersComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
