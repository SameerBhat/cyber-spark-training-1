import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer, CustomersService} from '../_services/customers.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CUSTOMER_PATH, CUSTOMER_SHOW_PATH, CUSTOMER_UPDATE_PATH} from '../customer.constants';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {



  form: FormGroup = new FormGroup({
    id: new FormControl('', []),
    name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
  });

  constructor(private customerService: CustomersService, private routingService: Router, private route: ActivatedRoute) {

    this.route.params.subscribe(({id}) => {
   if (id){

     this.customerService.getItem(id).subscribe(resp => {
       this.form.patchValue(resp);
     });
   }
    });
  }

  ngOnInit(): void {
  }

  formSubmitted(event): void {
    const customer: Customer = this.form.value;
    if (this.isEditMode()){
      this.customerService.updateItem(customer).subscribe(res => {
        this.routingService.navigateByUrl(CUSTOMER_PATH + '/' + CUSTOMER_SHOW_PATH);
      });
    }else{
      this.customerService.saveItem(customer).subscribe(res => {
        this.routingService.navigateByUrl(CUSTOMER_PATH + '/' + CUSTOMER_SHOW_PATH);
      });
    }

  }


  isEditMode(): boolean{
    return !!this.form.get('id').value;
  }
}

