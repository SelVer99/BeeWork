import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-dettaglio-task',
  templateUrl: './dettaglio-task.component.html',
  styleUrls: ['./dettaglio-task.component.scss'],
})
export class DettaglioTaskComponent implements ViewWillEnter {

  projectId: number;
  taskId: number;
  task: Task;
  isCompleted: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router, 
    private tasksService: TaskService
    ) { 
      this.projectId = this.activatedRoute.snapshot.params.id;
      this.taskId = this.activatedRoute.snapshot.params.task;
  }

  completeTask(taskId: number) {
    this.tasksService.updateTaskState(this.projectId, taskId).subscribe(
      task => {
        this.task = task;
        this.isCompleted = true;
      }
    );
  }

  ionViewWillEnter(): void {
    this.tasksService.getTaskById(this.projectId, this.taskId).subscribe(task =>{
      this.task = task;
      this.isCompleted = task.completato;
    });
  }

}
