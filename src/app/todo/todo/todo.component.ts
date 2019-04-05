import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [{
    _id: 'asdfasd',
    completedDate: '12-9-2019',
    isCompleted: false,
    title: 'New task'
  }];

  constructor() { }
  ngOnInit() {
  }

}
