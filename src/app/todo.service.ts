import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  /*apiURL : string = 'http://localhost:8080/api/todos';*/
  /* apiURL : string = 'https://todo-api-angular10-springboot.herokuapp.com/api/todos';*/
  apiURL : string = environment.apiURL

  constructor(
    private http: HttpClient
  ) { }

  salvar(todo : Todo): Observable<Todo>{
    return this.http.post<Todo>(this.apiURL,todo)
  }

  list() : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiURL)
  }

  delete(id?: number): Observable<void> {
    const urldelete = `${this.apiURL}/${id}`
    return this.http.delete<void>(urldelete)
  }
  
  marcarComoConcluido(id : number) : Observable<Todo>{
    const urldone = `${this.apiURL}/${id}/done`
    return this.http.patch<Todo>(urldone,{})
  }

}

