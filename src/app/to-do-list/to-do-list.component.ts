import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ToDoListService } from './to-do-list.service';
import { DataStorageService } from '../shared/data-storage.service'
import { Todo } from './to-do-list.model';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit, OnDestroy {
  todoList: any= [];
  subscription: Subscription;

  constructor(private _toDoListService: ToDoListService, private _dataStorageService: DataStorageService) { }

  ngOnInit() {
    // this.todoList = this._toDoListService.getTodos();
    this.subscription = this._toDoListService.toDoChanged
      .subscribe(
      (todo) => {
        this.todoList = todo;
      }
      );
    // this.todoList = this._toDoListService.getTodos();
    this.todoList = this._dataStorageService.getTodo();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
