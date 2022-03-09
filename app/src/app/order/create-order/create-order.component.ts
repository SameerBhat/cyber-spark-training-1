import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Order, OrdersService} from '../orders.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {



  form: FormGroup = new FormGroup({
    id: new FormControl('', []),
    amount: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    payment_status: new FormControl('', [Validators.required]),
    customer_id: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
  });

  constructor(private orderService: OrdersService, private routingService: Router, private route: ActivatedRoute) {

    this.route.params.subscribe((params) => {
      console.log(params);
      const {id} = params;
      if (id){
     this.orderService.getOrder(id).subscribe(resp => {
       this.form.patchValue(resp);
     });
   }
    });
  }

  ngOnInit(): void {
  }

  formSubmitted(event): void {
    const order: Order = this.form.value;
    if (this.isEditMode()){
      this.orderService.updateOrder(order).subscribe(res => {
        this.routingService.navigateByUrl('/show-orders');
      });
    }else{
      this.orderService.saveOrder(order).subscribe(res => {
        this.routingService.navigateByUrl('/show-orders');
      });
    }

  }


  isEditMode(): boolean{
    return !!this.form.get('id').value;
  }
}

