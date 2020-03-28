import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Component} from '@angular/core';
import {async, ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {MaxValidatorDirective} from './max-validator.directive';

describe('MaxValidatorDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [TestComponent, MaxValidatorDirective],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true},
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('should be invalid', async(() => {
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input[name=inputField]')).nativeElement;
      input.value = '6';
      input.dispatchEvent(new Event('input'));
      const inputRef = fixture.debugElement.query(By.css('input[name=inputField]')).references.inputFieldRef;
      expect(inputRef.valid).toBe(false);
    });
  }));

  it('should be valid', async(() => {
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input[name=inputField]')).nativeElement;
      input.value = '5';
      input.dispatchEvent(new Event('input'));
      const inputRef = fixture.debugElement.query(By.css('input[name=inputField]')).references.inputFieldRef;
      expect(inputRef.valid).toBe(true);
    });
  }));
});

@Component({
  template: '<form #form="ngForm">' +
    '<input name="inputField" [max]="5" #inputFieldRef="ngModel" [(ngModel)]="inputField">' +
    '</form>'
})

class TestComponent {
  inputField: string;
}
