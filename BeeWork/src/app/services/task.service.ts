import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../model/task.model';
import { URL } from '../constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getProjectTask(projectId: number): Observable<Task[]> {
    return this.http.get(`${URL.PROGETTI}/${projectId}/tasks`).pipe(
      map(project => project['tasks'])
    );
  }

  createTask(projectId: number, task: Task): Observable<Task> {
    return this.http.post<Task>(`${URL.PROGETTI}/${projectId}/tasks`, task);
  }

  getTaskById(projectId: number, taskId: number): Observable<Task> {
    return this.http.get<Task>(`${URL.PROGETTI}/${projectId}/tasks/${taskId}`);
  }

  deleteTaskById(projectId: number, taskId: number): Observable<any> {
    return this.http.delete(`${URL.PROGETTI}/${projectId}/tasks/${taskId}`)
  }

  updateTaskState(projectId: number, taskId: number): Observable<Task> {
    return this.http.put<Task>(`${URL.PROGETTI}/${projectId}/tasks/${taskId}`, {});
  }

}
