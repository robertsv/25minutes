import { MaxValidatorDirective } from './max-validator.directive';
import {async, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';
import {TimerComponent} from '../timer/timer.component';
import {CommonModule, DatePipe} from '@angular/common';
import {MinutesSecondsPipe} from './minutes-seconds.pipe';
import {FormsModule} from '@angular/forms';

describe('MaxValidatorDirective', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule],
      declarations: [TimerComponent, MinutesSecondsPipe],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
      ]
    }).compileComponents();
  });

  it('should validate', async(() => {
    const fixture = TestBed.createComponent(TimerComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      component.startStop();
      component.openCountDownSetupDialog();
    });
  }));
});

