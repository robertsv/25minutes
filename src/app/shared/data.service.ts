import {Injectable} from '@angular/core';
import {Task} from './task';
import {Subject} from 'rxjs';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly tasks: Task[];
  private tasksSource: Subject<Task[]> = new Subject();
  tasksObservable  = this.tasksSource.asObservable()

  constructor(private storageService: StorageService) {
    this.tasks = storageService.loadTasksStorage();
  }

  getTasks() {
    return [... this.tasks];
  }

  addTask(taskName: string) {
    this.tasks.push(new Task(taskName, false));
    this.storageService.saveTasksInStorage(this.tasks);
    this.tasksSource.next(this.tasks);
  }

  checkOrUncheckTask(i: number) {
    this.tasks[i].checked = !this.tasks[i].checked;
    this.storageService.saveTasksInStorage(this.tasks);
    this.tasksSource.next(this.tasks);
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
    this.storageService.saveTasksInStorage(this.tasks);
    this.tasksSource.next(this.tasks);
  }

}
