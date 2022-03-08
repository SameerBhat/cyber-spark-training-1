import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer, CustomersService} from '../customers.service';
import {ActivatedRoute, Router} from '@angular/router';

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

     this.customerService.getCustomer(id).subscribe(resp => {
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
      this.customerService.updateCustomer(customer).subscribe(res => {
        this.routingService.navigateByUrl('/show-customers');
      });
    }else{
      this.customerService.saveCustomer(customer).subscribe(res => {
        this.routingService.navigateByUrl('/show-customers');
      });
    }

  }


  isEditMode(): boolean{
    return !!this.form.get('id').value;
  }
}

