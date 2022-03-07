import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {ShowCustomersComponent} from './show-customers/show-customers.component';

const routes: Routes = [
  {
    path: 'create-customer',
    component: CreateCustomerComponent
  },
  {
    path: 'show-customers',
    component: ShowCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
