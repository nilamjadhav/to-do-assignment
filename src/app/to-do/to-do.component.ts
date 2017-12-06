import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http/src/static_response';

import { ToDoListService } from '../to-do-list/to-do-list.service'
import { DataStorageService } from '../shared/data-storage.service'
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  toDoData: any = {}
  constructor(private _dataStorageService: DataStorageService, private _toDoListService: ToDoListService) { }

  ngOnInit() {
  }

  addToDo() {
    this.toDoData.status = false;
    this._toDoListService.addToDo(this.toDoData);
  }
  addToServer() {
    this._dataStorageService.storeToDoList()
      .subscribe(
      (response: Response) => {
        console.log(response);
      }
      );
  }
}
