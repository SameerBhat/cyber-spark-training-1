import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateOrderComponent} from './create-order/create-order.component';
import {ShowOrdersComponent} from './show-orders/show-orders.component';

const routes: Routes = [
  {
    path: 'create-order',
    component: CreateOrderComponent
  },
  {
    path: 'update-order/:id',
    component: CreateOrderComponent
  },
  {
    path: 'show-orders',
    component: ShowOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
