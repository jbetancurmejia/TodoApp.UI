import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { DeletedTodoComponent } from './components/deleted-todo/deleted-todo.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, DeletedTodoComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
