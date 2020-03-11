import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pomodoro-timer';
  taskSectionIsVisible = true;
  private screenHeight: number;

  showHideTaskSection(showTaskList: boolean) {
    this.taskSectionIsVisible = showTaskList;
  }

  // TODO (RV): delete
  // @HostListener('window:resize', ['$event'])
  // getScreenSize() {
  //   this.screenHeight = window.innerHeight;
  //   console.log(this.screenHeight);
  // }

  ngOnInit(): void {
    this.screenHeight = window.innerHeight;
  }

}
