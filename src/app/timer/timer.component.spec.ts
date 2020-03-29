import {ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';
import {TimerComponent} from '../timer/timer.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MinutesSecondsPipe} from '../shared/minutes-seconds.pipe';
import {localStorageProvider, LocalStorageToken} from '../shared/local-storage-provider';

describe('TimerComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule],
      declarations: [TimerComponent, MinutesSecondsPipe],
      providers: [
        {provide: ComponentFixtureAutoDetect, useValue: true},
        {provide: LocalStorageToken, useFactory: localStorageProvider},
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const timerComponent = TestBed.createComponent(TimerComponent);
    expect(timerComponent).toBeTruthy();
  });

// TODO (RV): experiment
/*  it('should ...', async(() => {
    const fixture = TestBed.createComponent(TimerComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      component.startStop();
      component.openCountDownSetupDialog();
    });
  }));*/
});

