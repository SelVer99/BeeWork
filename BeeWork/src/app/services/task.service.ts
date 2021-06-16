import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utente} from '../model/utente.model';
import {Task} from '../model/task.model';
import { URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) { }

  getTask(): Observable<any> {
    return this.http.get<Task>(URL.TASK);
  }

  postTask(task: Task): Observable<Task> {
    return this.http.post<Task>(URL.TASK, task);
  }
}
