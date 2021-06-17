import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-lista-task',
  templateUrl: './lista-task.page.html',
  styleUrls: ['./lista-task.page.scss'],
})
export class ListaTaskPage implements OnInit {
  task$: Observable<any>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.task$ = this.taskService.getTask();
  }

}
