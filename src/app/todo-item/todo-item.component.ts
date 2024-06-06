import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../shared/todo.module';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
 @Input() todo?: Todo
 @Output() todoClicked: EventEmitter<void> = new EventEmitter()
 @Output() editClicked: EventEmitter<void> = new EventEmitter()
 @Output() deleteClicked: EventEmitter<void> = new EventEmitter()
 
 onTodoClicked(){
  this.todoClicked.emit()
 }
 onEditClicked(){
  this.editClicked.emit()
 }

 onDeleteClicked(){
  this.deleteClicked.emit()
 }
}
