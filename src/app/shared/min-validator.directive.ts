import {Directive, Input} from '@angular/core';
import {NG_VALIDATORS, FormControl, Validator} from '@angular/forms';

@Directive({
  selector: '[min]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: MinValidatorDirective, multi: true}
  ]
})
export class MinValidatorDirective implements Validator {

  @Input() min: number;

  constructor() {
  }

  validate(formControl: FormControl) {
    if (formControl.dirty) {
      const val = formControl.value;
      if (!isNaN(val) && val < this.min) {
        return {min: true};
      }
    }
    return null;
  }

}
