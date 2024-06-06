import { Injectable } from '@angular/core';
import { Todo } from './todo.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    // new Todo('this is a test!', true),
    // new Todo('Lorem ipsen This is a placeholder for text This is a placeholder for text This is a placeholder for text This is a placeholder for text This is a placeholder for text This is a placeholder for text This is a placeholder for text This is a placeholder for text This is a placeholder for text.')
  ];

  constructor() { }

  getAllTodos(){
    return this.todos
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo){
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1)
  }

}
