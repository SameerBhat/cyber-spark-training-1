import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextFieldComponent} from './form/text-field/text-field.component';
import { ButtonComponent } from './common/button/button.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TableComponent } from './layout/table/table.component';



@NgModule({
  declarations: [TextFieldComponent, ButtonComponent, TableComponent],
    exports: [
        TextFieldComponent,
        ButtonComponent,
        TableComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
