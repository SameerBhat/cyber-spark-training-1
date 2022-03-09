import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CUSTOMER_PATH} from './customer/customer.constants';
import {ORDER_PATH} from './order/customer.constants';

const routes: Routes = [
  {
    path: CUSTOMER_PATH,
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: ORDER_PATH,
    loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
