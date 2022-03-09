import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextFieldComponent} from './form/text-field/text-field.component';
import { ButtonComponent } from './common/button/button.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [TextFieldComponent, ButtonComponent],
  exports: [
    TextFieldComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
