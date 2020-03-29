import { TestBed } from '@angular/core/testing';
import {StorageService} from './storage.service';
import {localStorageProvider, LocalStorageToken} from './local-storage-provider';
import {Task} from './task';

describe('StorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [StorageService, { provide: LocalStorageToken, useFactory: localStorageProvider}]
    });
  });

  it('should save and load empty task list', () => {
    const storageService: StorageService = TestBed.get(StorageService);
    const tasks: Task[] = [];
    storageService.saveTasksInStorage(tasks);
    expect(JSON.stringify(storageService.loadTasksStorage())).toBe(JSON.stringify(tasks));
  });

  it('should save and load non empty task list!', () => {
    const storageService: StorageService = TestBed.get(StorageService);
    const tasks: Task[] = [
      new Task('Test task #1', false, false),
      new Task('Test task #2', false, false)
    ];
    storageService.saveTasksInStorage(tasks);
    expect(JSON.stringify(storageService.loadTasksStorage())).toBe(JSON.stringify(tasks));
  });

  it('should save and load non empty task list', () => {
    const storageService: StorageService = TestBed.get(StorageService);
    const tasks: Task[] = [
      new Task('Test task #1', false, false),
      new Task('Test task #2', false, false)
    ];
    storageService.saveTasksInStorage(tasks);
    expect(JSON.stringify(storageService.loadTasksStorage())).toBe(JSON.stringify(tasks));
  });

  it('should save and load durations', () => {
    const storageService: StorageService = TestBed.get(StorageService);
    const workDurtion = 25;
    const breakDurtion = 5;
    storageService.saveDurationInStorage(workDurtion, breakDurtion);
    expect(storageService.loadWorkDurationFromStorage()).toBe(workDurtion);
    expect(storageService.loadBreakDurationFromStorage()).toBe(breakDurtion);
  });

  it('should save and load show/hide task list flag', () => {
    const storageService: StorageService = TestBed.get(StorageService);
    storageService.saveShowHideTaskListInStorage(true);
    expect(storageService.loadShowHideTaskListFromStorage()).toBe(true);
  });

});

