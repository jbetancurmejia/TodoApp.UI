import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  baseApiUrl: string = 'https://localhost:44338';
  constructor(private http: HttpClient) {}

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseApiUrl + '/api/todo');
  }

  addTodos(newTodo: Todo): Observable<Todo> {
    newTodo.id = '00000000-0000-0000-0000-000000000000';
    //Empty Guid

    return this.http.post<Todo>(this.baseApiUrl + '/api/todo', newTodo);
  }

  updateTodo(id: string, todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(this.baseApiUrl + '/api/todo/'+id, todo);
  }

  deleteTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(this.baseApiUrl + '/api/todo/'+ id);
  }

  getDeletedTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseApiUrl + '/api/todo/get-deleted-todos');
  }

  restoreTodo(id: string,todo: Todo):Observable<Todo> {
    return this.http.put<Todo>(this.baseApiUrl + '/api/todo/undo-deleted-todo/'+id, todo);
  }

}
