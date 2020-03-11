import {Injectable} from '@angular/core';
import {Task} from '../shared/task';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  static readonly STORAGE_KEY_TASKS = 'tasks';
  static readonly STORAGE_KEY_WORK_DURATION = 'time';
  static readonly STORAGE_KEY_BREAK_DURATION = 'break';
  static readonly STORAGE_SHOW_HIDE_TASK_LIST = 'show_hide_task_list';

  loadTasksStorage(): Task[] {
    return JSON.parse(localStorage.getItem(StorageService.STORAGE_KEY_TASKS)) || [];
  }

  saveTasksInStorage(tasks: Task[]) {
    localStorage.setItem(StorageService.STORAGE_KEY_TASKS, JSON.stringify(tasks));
  }

  saveDurationInStorage(workDuration: number, breakDuration: number) {
    localStorage.setItem(StorageService.STORAGE_KEY_WORK_DURATION, JSON.stringify(workDuration));
    localStorage.setItem(StorageService.STORAGE_KEY_BREAK_DURATION, JSON.stringify(breakDuration));
  }

  loadWorkDurationFromStorage(): number {
    return JSON.parse(localStorage.getItem(StorageService.STORAGE_KEY_WORK_DURATION));
  }

  loadBreakDurationFromStorage(): number {
    return JSON.parse(localStorage.getItem(StorageService.STORAGE_KEY_BREAK_DURATION));
  }

  saveShowHideTaskListInStorage(showHideTaskList: boolean) {
    localStorage.setItem(StorageService.STORAGE_SHOW_HIDE_TASK_LIST, JSON.stringify(showHideTaskList));
  }

  loadShowHideTaskListFromStorage(): boolean {
    if (localStorage.getItem(StorageService.STORAGE_SHOW_HIDE_TASK_LIST) === null) {
      return false;
    }
    return JSON.parse(localStorage.getItem(StorageService.STORAGE_SHOW_HIDE_TASK_LIST));
  }

}
