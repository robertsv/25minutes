import {Directive, Input} from '@angular/core';
import {NG_VALIDATORS, FormControl, Validator} from '@angular/forms';

@Directive({
  selector: '[max]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: MaxValidatorDirective, multi: true}
  ]
})
export class MaxValidatorDirective implements Validator {

  @Input() max: number;

  constructor() {
  }

  validate(formControl: FormControl) {
    if (formControl.dirty) {
      const val = formControl.value;
      if (!isNaN(val) && val > this.max) {
        return {max: true};
      }
    }
    return null;
  }

}
