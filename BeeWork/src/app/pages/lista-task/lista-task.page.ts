import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import {Observable} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-lista-task',
  templateUrl: './lista-task.page.html',
  styleUrls: ['./lista-task.page.scss'],
})
export class ListaTaskPage implements ViewWillEnter {
  
  task$: Observable<any>;
  projectId: number;

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute) { 
    this.projectId = this.activatedRoute.snapshot.params.id
  }


  ionViewWillEnter(): void {
    this.task$ = this.taskService.getProjectTask(this.projectId);
  }


  deleteTaskById(taskId: number): void {
    this.task$ = this.taskService.deleteTaskById(this.projectId, taskId).pipe(
      switchMap(() => this.taskService.getProjectTask(this.projectId))
    )
  }

}
