import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { Todo } from './to-do-list.model'

@Injectable()
export class ToDoListService {
  toDoChanged = new Subject<Todo[]>();
  private toDos: Todo[] = [
    new Todo(
      'To-do 1',
      '12/12/2016',
      'delectus aut autem',
      true
    ),
    new Todo(
      'To-do 2',
      '12/06/2016',
      'quis ut nam facilis et officia qui',
      true
    ),
    new Todo(
      'To-do 3',
      '12/12/2018',
      'fugiat veniam minus',
      false
    ),
    new Todo(
      'To-do 4',
      '12/12/2018',
      'et porro tempora',
      false
    ),
    new Todo(
      'To-do 5',
      '12/12/2018',
      'any random text',
      true
    ),
    new Todo(
      'To-do 6',
      '12/12/2018',
      'Official Metting',
      false
    )
  ];
  constructor(private _http: Http) { }

  getTodos() {
    return this.toDos.slice();
  }

  setTodos(_toDos) {
    this.toDos = _toDos;
    this.toDoChanged.next(this.toDos.slice());
  }
  addToDo(data) {
    this.toDos.push(data);
    this.toDoChanged.next(this.toDos.slice());
    // this._dataStorageService.storeToDoList()
    // .subscribe(
    // (response: Response) => {
    //   console.log(response);
    // }
    // );
   // return this._http.put('https://to-do-assignment.firebaseio.com/to-do-list.json',this.getTodos());
  }
}
