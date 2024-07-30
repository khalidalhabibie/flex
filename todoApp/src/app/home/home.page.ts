// src/app/home/home.page.ts
import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taskTitle = '';
  todos = this.todoService.todos$;

  constructor(private todoService: TodoService) {}

  addTask(title: string) {
    if (title.trim()) {
      this.todoService.addTask(title);
      this.taskTitle = ''; // Clear the input field
    }
  }

  toggleTask(id: string) {
    this.todoService.toggleTask(id);
  }

  deleteTask(id: string) {
    this.todoService.deleteTask(id);
  }
}
