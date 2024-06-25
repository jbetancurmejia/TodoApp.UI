import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-deleted-todo',
  templateUrl: './deleted-todo.component.html',
  styleUrl: './deleted-todo.component.css'
})
export class DeletedTodoComponent  implements OnInit{

  todos: Todo[] = [];
  constructor(private todoservice: TodoService) {}

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoservice.getDeletedTodos().subscribe({
      next: (todos) => {
        this.todos = todos;
      },
    });
  }

  restoreTodo(id: string,todo:Todo) {
    this.todoservice.restoreTodo(id,todo).subscribe({
      next: (response) => {
        this.getAllTodos();
      },
    });
    }

}
