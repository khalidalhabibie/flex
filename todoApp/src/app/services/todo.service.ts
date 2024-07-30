// src/app/services/todo.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos = new BehaviorSubject<Todo[]>([]);
  public todos$ = this.todos.asObservable();

  constructor() {}

  addTask(title: string) {
    const newTodo: Todo = { id: Date.now().toString(), title, completed: false };
    this.todos.next([...this.todos.value, newTodo]);
  }

  toggleTask(id: string) {
    const updatedTodos = this.todos.value.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    this.todos.next(updatedTodos);
  }

  deleteTask(id: string) {
    const updatedTodos = this.todos.value.filter(todo => todo.id !== id);
    this.todos.next(updatedTodos);
  }
}
