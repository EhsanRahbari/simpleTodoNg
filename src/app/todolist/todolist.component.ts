import { Component } from '@angular/core';
import { Todo } from '../types/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
  todoItems: Todo[] = [];
  todoTitle: string = '';
  todoDesc: string = '';

  handleAddTodo(): void {
    this.todoItems.push({
      title: this.todoTitle,
      description: this.todoDesc,
    });
    console.log('this todo has been added');
    console.log('this is the todos ==>>>', this.todoItems);
  }
  handleCancel(): void {
    this.todoTitle = '';
    this.todoDesc = '';
  }
}
