import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import {ToDoListService} from '../to-do-list/to-do-list.service';
import { Todo } from '../to-do-list/to-do-list.model';

@Injectable()
export class DataStorageService {

  constructor(private _http: Http, private _toDoListService: ToDoListService) { }
  storeToDoList() {
    return this._http.put('https://to-do-assignment.firebaseio.com/to-do-list.json',this._toDoListService.getTodos());
    }

    getTodo() {
      this._http.get('https://to-do-assignment.firebaseio.com/to-do-list.json')
        .subscribe(
          (response:Response) => {
            const list: Todo[] = response.json();
            this._toDoListService.setTodos(list);
          }
        );
    }
}
