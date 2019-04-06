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
    isCompleted: true,
    title: 'New task',
    isEditMode: false
  }];

  isAddMode = false;
  newTodo = '';

  constructor() { }
  ngOnInit() {
  }

  deleteTodo(index: number, event: Event): void {
    event.stopPropagation();
    this.todoList.splice(index, 1);
  }

  addTodo() {
    this.todoList.push({
      completedDate: '12-06-2019',
      isCompleted: false,
      isEditMode: false,
      title: this.newTodo
    });
    this.newTodo = '';
    this.isAddMode = false;
  }

  editTodo(todo: Todo) {
    todo.isEditMode = !todo.isEditMode;
  }

}
