import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {TaskService} from '../../services/task.service';
import {Task} from '../../model/task.model';
import {ProgettiService} from '../../services/progetti.service';
import {Progetto} from '../../model/progetto.model';

@Component({
  selector: 'app-aggiungi-task',
  templateUrl: './aggiungi-task.page.html',
  styleUrls: ['./aggiungi-task.page.scss'],
})
export class AggiungiTaskPage implements OnInit {

  newTaskForm = this.formBuilder.group({
    label: [''],
    name: ['', Validators.required],
    description: [''],
    expirationDate: ['', Validators.required],
    priority: [''],
    members: ['']
  });
  // dall'api rest, /projects/{id}/members
  members = [
    'fla',
    'mo',
    'angelo',
    'selene',
    'bob'
  ];

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) {}

  ngOnInit() {
  }
  submit() {
    const task: Task = {
      nome: this.newTaskForm.value.name,
      descrizione: this.newTaskForm.value.description,
      scadenza: new Date(this.newTaskForm.value.expirationDate),
      etichetta: this.newTaskForm.value.label,
      priorita: this.newTaskForm.value.priority,
      listaMembri: this.newTaskForm.value.members
    };
    console.log(task);
    this.taskService.postTask(task).subscribe(console.log);
  }
}
