import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ShowCustomersComponent } from './show-customers/show-customers.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TextFieldComponent } from './create-customer/text-field/text-field.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    ShowCustomersComponent,
    TextFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {





}
