import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  submittedInvalid: boolean;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.submittedInvalid = true;
      return;
    }
    this.submittedInvalid = false;
    this.dataService.addTask(form.value.task);
    form.reset();
  }

}
