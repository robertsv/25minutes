import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pomodoro-timer';
  taskSectionIsVisible = true;
  screenHeight: number;

  showHideTaskSection(showTaskList: boolean) {
    this.taskSectionIsVisible = showTaskList;
  }

  ngOnInit(): void {
    this.screenHeight = window.innerHeight;
  }

}
