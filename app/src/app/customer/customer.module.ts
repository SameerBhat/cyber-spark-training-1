import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {ShowCustomersComponent} from './show-customers/show-customers.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateCustomerComponent,
    ShowCustomersComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  providers: []
})
export class CustomerModule { }
