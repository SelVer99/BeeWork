import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-lista-tasks',
  templateUrl: './lista-tasks.component.html',
  styleUrls: ['./lista-tasks.component.scss'],
})
export class ListaTasksComponent implements ViewWillEnter {

  tasks$: Observable<Task[]>;
  projectId: number;

  constructor(private taskService: TaskService, private activated: ActivatedRoute) {
    this.projectId = activated.snapshot.params.id;
  }


  ionViewWillEnter(): void {
    this.tasks$ = this.taskService.getProjectTask(this.projectId);
  }

}
