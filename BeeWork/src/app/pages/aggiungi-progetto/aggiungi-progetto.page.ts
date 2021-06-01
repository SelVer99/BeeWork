import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-aggiungi-progetto',
  templateUrl: './aggiungi-progetto.page.html',
  styleUrls: ['./aggiungi-progetto.page.scss'],
})
export class AggiungiProgettoPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  newProjectForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
    expirationDate: ['', Validators.required]
  });
  
  public submit() {
    console.log(this.newProjectForm.value);
  }
}
