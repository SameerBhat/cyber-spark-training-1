import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

export type InputTypes = 'text' | 'email' | 'number' | 'date';
@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  @Input() control: FormControl | AbstractControl;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() col = 1;
  @Input() type: InputTypes = 'text';

  constructor() {
  }

  ngOnInit(): void {
  }

  showErrors() {
    const { dirty, touched, errors } = this.control
    return touched && dirty && errors
  }

}
