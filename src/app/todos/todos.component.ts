import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.module';
import { DataService } from '../shared/data.service';
import { NgFor, CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
  todos: Todo[] = []
  showValidationErrors: boolean = false


  constructor(private dataService: DataService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }

  onFormSubmit(form: NgForm){

    if (!form.valid) {
      this.showValidationErrors = true
    } 
    else{
      this.dataService.addTodo(new Todo(form.value.text))
      this.showValidationErrors = false
      form.reset()
    }
  }

  toggleCompleted(todo: Todo){
    todo.completed = !todo.completed;
  }

  editTodo(todo: Todo){
    
    let index = this.todos.indexOf(todo);
    let dialogRef = this.dialog.open(EditTodoDialogComponent,{
      width: '700px',
      data: todo
    });

    dialogRef.afterClosed().subscribe((result) =>{
      if(result){
        this.dataService.updateTodo(index, result)
      }
    })

  }

  deleteTodo(todo: Todo){
    let index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index)
  }
}
