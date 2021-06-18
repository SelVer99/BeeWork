import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-crea-task',
  templateUrl: './crea-task.component.html',
  styleUrls: ['./crea-task.component.scss'],
})
export class CreaTaskComponent implements OnInit {

  newTaskForm: FormGroup;
  projectId: number;
  today: Date = new Date();
  formattedDate = this.today.getFullYear() + "-" + (this.today.getMonth() + 1) + "-" + this.today.getDate()
  

  constructor(
    private fb: FormBuilder, 
    private tasksService: TaskService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { 

    this.projectId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.newTaskForm = this.fb.group({
      etichetta: ['', ],
      nome: ['', [Validators.required, Validators.maxLength(14)]],
      descrizione: [''],
      scadenza: ['', [Validators.required]],
      priorita: ['']
    })
  }


  submit() {
    const task: Task = {
      nome: this.newTaskForm.value.nome,
      etichetta: this.newTaskForm.value.etichetta,
      descrizione: this.newTaskForm.value.descrizione,
      scadenza: this.newTaskForm.value.scadenza.substr(0,10),
      priorita: this.newTaskForm.value.priorita
    }
    this.tasksService.createTask(this.projectId, task).subscribe(
      task => this.router.navigateByUrl(`/progetti/${this.projectId}/tasks/${task.id}`)
    );
  }

}
