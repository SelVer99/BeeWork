import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-aggiungi-task',
  templateUrl: './aggiungi-task.page.html',
  styleUrls: ['./aggiungi-task.page.scss'],
})
export class AggiungiTaskPage implements OnInit {
  // dall'api rest, /projects/{id}/members
  members = [
    'fla',
    'mo',
    'angelo',
    'selene',
    'bob'
  ];

  newTaskForm = this.formBuilder.group({
    label: [''],
    name: ['', Validators.required],
    description: [''],
    expirationDate: ['', Validators.required],
    priority: [''],
    members: ['']
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  }
}
