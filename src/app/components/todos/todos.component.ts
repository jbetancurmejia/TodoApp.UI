import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  newTodo: Todo = {
    id: '',
    description: '',
    createdDate: new Date(),
    isCompleted: false,
    completedDate: new Date(),
  };
  constructor(private todoservice: TodoService) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoservice.getAllTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      },
    });
  }

  addTodo() {
    this.todoservice.addTodos(this.newTodo).subscribe({
      next: (todos) => {
        this.getAllTodos();
      },
    });
    this.newTodo.description = '';
  }

  completed(id: string, todo: Todo) {
    todo.isCompleted=!todo.isCompleted
    this.todoservice.updateTodo(id, todo).subscribe({
      next: (response) => {
        this.getAllTodos();
      },
    });
  }
  deleteTodo(id:string){
    this.todoservice.deleteTodo(id).subscribe({
      next: (response) => {
        this.getAllTodos();
      },
    });
  }



}
