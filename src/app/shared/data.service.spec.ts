import {TestBed} from '@angular/core/testing';

import {DataService} from './data.service';
import {StorageService} from './storage.service';
import {Task} from './task';

describe('DataService', () => {
  let storageServiceSpy;
  beforeEach(() => {
    storageServiceSpy = jasmine.createSpyObj('StorageService', ['loadTasksStorage', 'saveTasksInStorage']);
    storageServiceSpy.loadTasksStorage.and.callFake(() => {
      return [
        new Task('Test task #1', false, false),
        new Task('Test task #2', false, false),
      ];
    });
    // storageServiceSpy.loadTasksStorage = () => [new Task('Test task1', false, false)];
    TestBed.configureTestingModule({
      declarations: [],
      providers: [DataService,
        {provide: StorageService, useValue: storageServiceSpy}
      ]
    });
  });

  it('should return tasks', () => {
    const dataService: DataService = TestBed.get(DataService);
    expect(dataService.getTasks()).toEqual([
      new Task('Test task #1', false, false),
      new Task('Test task #2', false, false)]
    );
  });

  it('should add task', () => {
    const dataService: DataService = TestBed.get(DataService);
    dataService.addTask('Test task #3');
    expect(dataService.getTasks()).toEqual([
      new Task('Test task #1', false, false),
      new Task('Test task #2', false, false),
      new Task('Test task #3', false, false)]
    );
    expect(storageServiceSpy.saveTasksInStorage).toHaveBeenCalled();
  });

  it('should mark task', () => {
    const dataService: DataService = TestBed.get(DataService);
    dataService.checkOrUncheckTask(0);
    dataService.checkOrUncheckTask(0);
    dataService.checkOrUncheckTask(1);
    expect(dataService.getTasks()).toEqual([
      new Task('Test task #1', false, false),
      new Task('Test task #2', true, false)]
    );
    expect(storageServiceSpy.saveTasksInStorage).toHaveBeenCalled();
  });

  it('should delete task', () => {
    const dataService: DataService = TestBed.get(DataService);
    dataService.deleteTask(0);
    expect(dataService.getTasks()).toEqual([
      new Task('Test task #2', false, false)]
    );
    expect(storageServiceSpy.saveTasksInStorage).toHaveBeenCalled();
  });

});
