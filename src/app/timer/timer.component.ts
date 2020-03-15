import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {NotificationService} from '../shared/notification.service';
import {StorageService} from '../shared/storage.service';
import {NgForm} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {DatePipe} from '@angular/common';
import * as bootstrap from 'bootstrap';

enum Mode {
  Work,
  Break
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  providers: [DatePipe]
})
export class TimerComponent implements OnInit {
  @Input('aboutSection') aboutSection: HTMLElement;
  @Output() showHideTaskSection = new EventEmitter<boolean>();
  @ViewChild('dialog', {static: false}) dialog: ElementRef;

  showTaskList = true;
  private cntDownInterval = interval(1000);
  private cntDownSub: Subscription;
  running = false;
  mode = Mode.Work;
  private workDurationSec;
  private breakDurationSec;
  workDurationMinEdit;
  breakDurationMinEdit;
  timeLeft;

  constructor(private notificationService: NotificationService,
              private storageService: StorageService,
              private title: Title,
              private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.workDurationSec = this.storageService.loadWorkDurationFromStorage() || 25 * 60;
    this.breakDurationSec = this.storageService.loadBreakDurationFromStorage() || 5 * 60;
    this.showTaskList = this.storageService.loadShowHideTaskListFromStorage();
    this.showHideTaskSection.emit(this.showTaskList);
    this.timeLeft = this.workDurationSec;
    this.updateTitle();
  }

  startStop() {
    if (!this.running) {
      this.start();
    } else {
      this.stop();
    }
  }

  private start() {
    this.notificationService.requestPermission();
    this.running = true;
    this.cntDownSub = this.cntDownInterval.subscribe(val => {
      this.timeLeft--;
      this.updateTitle();
      if (this.timeLeft === 0) {
        this.timeIsOut();
      }
    });
  }

  private stop() {
    this.running = false;
    this.cntDownSub.unsubscribe();
  }

  resetTimer() {
    this.stop();
    this.resetLeftTime();
  }

  private timeIsOut() {
    this.running = false;
    this.cntDownSub.unsubscribe();
    this.sendNotification();
    this.flipMode();
    this.resetLeftTime();
    const audio = new Audio();
    audio.src = 'assets/zapsplat_bell_small_hand_ring_short_012_39329.mp3';
    audio.load();
    audio.play();
    setTimeout(() => {
      this.startStop();
    }, 1000);
  }

  private sendNotification() {
    if (this.mode === Mode.Work) {
      this.notificationService.sendNotification('Take a break!', 'Well done! Take a break.');
    } else {
      this.notificationService.sendNotification('Break is over!', 'Time to work!');
    }
  }

  private resetLeftTime() {
    if (this.mode === Mode.Work) {
      this.timeLeft = this.workDurationSec;
    } else {
      this.timeLeft = this.breakDurationSec;
    }
    this.updateTitle();
  }

  private flipMode() {
    if (this.mode === Mode.Work) {
      this.mode = Mode.Break;
    } else {
      this.mode = Mode.Work;
    }
  }

  private getDuration(): number {
    if (this.mode === Mode.Work) {
      return this.workDurationSec;
    } else {
      return this.breakDurationSec;
    }
  }

  wasStarted(): boolean {
    return this.timeLeft !== this.getDuration();
  }

  openCountDownSetupDialog() {
    this.workDurationMinEdit = this.workDurationSec / 60;
    this.breakDurationMinEdit = this.breakDurationSec / 60;
    $(this.dialog.nativeElement).modal('show');
  }

  private closeCountDownSetupDialog() {
    $(this.dialog.nativeElement).modal('hide');
  }

  showHideTaskList() {
    this.showTaskList = !this.showTaskList;
    this.storageService.saveShowHideTaskListInStorage(this.showTaskList);
    this.showHideTaskSection.emit(this.showTaskList);
  }

  scrollToAbout() {
    setTimeout(() =>
        this.aboutSection.scrollIntoView({behavior: 'smooth'})
      , 0);
  }

  saveConfiguration(form: NgForm) {
    if (form.valid) {
      this.workDurationSec = this.workDurationMinEdit * 60;
      this.breakDurationSec = this.breakDurationMinEdit * 60;
      if (this.mode === Mode.Work) {
        this.timeLeft = this.workDurationSec;
      } else {
        this.timeLeft = this.breakDurationSec;
      }
      this.updateTitle();
      this.storageService.saveDurationInStorage(this.workDurationSec, this.breakDurationSec);
      this.closeCountDownSetupDialog();
    }
  }

  private updateTitle() {
    this.title.setTitle(this.datePipe.transform(this.timeLeft * 1000, 'mm:ss'));
  }

}
