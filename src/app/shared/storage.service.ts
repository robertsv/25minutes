import {Inject, Injectable} from '@angular/core';
import {Task} from '../shared/task';
import {LocalStorageToken} from './local-storage-provider';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  static readonly STORAGE_KEY_TASKS = 'tasks';
  static readonly STORAGE_KEY_WORK_DURATION = 'time';
  static readonly STORAGE_KEY_BREAK_DURATION = 'break';
  static readonly STORAGE_SHOW_HIDE_TASK_LIST = 'show_hide_task_list';

  constructor(@Inject(LocalStorageToken) private localStorage: Storage) {}

  saveTasksInStorage(tasks: Task[]) {
    this.localStorage.setItem(StorageService.STORAGE_KEY_TASKS, JSON.stringify(tasks));
  }

  loadTasksStorage(): Task[] {
    return JSON.parse(this.localStorage.getItem(StorageService.STORAGE_KEY_TASKS)) || [];
  }

  saveDurationInStorage(workDuration: number, breakDuration: number) {
    this.localStorage.setItem(StorageService.STORAGE_KEY_WORK_DURATION, JSON.stringify(workDuration));
    this.localStorage.setItem(StorageService.STORAGE_KEY_BREAK_DURATION, JSON.stringify(breakDuration));
  }

  loadWorkDurationFromStorage(): number {
    return JSON.parse(this.localStorage.getItem(StorageService.STORAGE_KEY_WORK_DURATION));
  }

  loadBreakDurationFromStorage(): number {
    return JSON.parse(this.localStorage.getItem(StorageService.STORAGE_KEY_BREAK_DURATION));
  }

  saveShowHideTaskListInStorage(showHideTaskList: boolean) {
    this.localStorage.setItem(StorageService.STORAGE_SHOW_HIDE_TASK_LIST, JSON.stringify(showHideTaskList));
  }

  loadShowHideTaskListFromStorage(): boolean {
    if (this.localStorage.getItem(StorageService.STORAGE_SHOW_HIDE_TASK_LIST) === null) {
      return false;
    }
    return JSON.parse(this.localStorage.getItem(StorageService.STORAGE_SHOW_HIDE_TASK_LIST));
  }

}
