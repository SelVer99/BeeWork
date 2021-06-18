import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-crea-task',
  templateUrl: './crea-task.component.html',
  styleUrls: ['./crea-task.component.scss'],
})
export class CreaTaskComponent implements OnInit {

  newTaskForm: FormGroup;
  projectId: number;

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
      etichetta: [''],
      nome: ['', Validators.required],
      descrizione: [''],
      // scadenza: ['', Validators.required],
      priorita: [''],
      listaMebri: ['']
    })
  }


  submit() {
    this.tasksService.createTask(this.projectId, this.newTaskForm.value).subscribe(
      task => this.router.navigateByUrl(`/progetti/${this.projectId}/tasks/${task.id}`)
    );
  }

}
