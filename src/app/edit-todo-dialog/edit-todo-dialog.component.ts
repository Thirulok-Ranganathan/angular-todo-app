import { Component, Inject, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../shared/todo.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-todo-dialog',
  standalone: true,
  imports: [MatDialogModule, FormsModule, CommonModule],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.css'
})
export class EditTodoDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditTodoDialogComponent>, @Inject(MAT_DIALOG_DATA) public todo: Todo) { }

  ngOnInit(): void {

  }

  close(){
    this.dialogRef.close()
  }

  onFormSubmit(form: NgForm) {

    if(form.invalid) return

    this.todo.Text = form.value.text

    // const updatedTodo = {
    //   ...this.todo,
    //   ...form.value
    // }

    this.dialogRef.close(this.todo)
  }

}
