import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import {CreateOrderComponent} from './create-order/create-order.component';
import {ShowOrdersComponent} from './show-orders/show-orders.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateOrderComponent,
    ShowOrdersComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule
  ]
})
export class OrderModule { }
