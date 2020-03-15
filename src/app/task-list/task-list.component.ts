import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {Task} from '../shared/task';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[];
  private subscription: Subscription;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.tasks = this.dataService.getTasks();
    this.subscription = this.dataService.tasksObservable.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  checkOrUncheck(i: number) {
    this.dataService.checkOrUncheckTask(i);
  }

  delete(i: number) {
    this.dataService.deleteTask(i);
  }

}
