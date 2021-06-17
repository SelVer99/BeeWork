import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ProgettiService} from '../../services/progetti.service';
import {Progetto} from '../../model/progetto.model';
import {Router} from "@angular/router";


@Component({
  selector: 'app-aggiungi-progetto',
  templateUrl: './aggiungi-progetto.page.html',
  styleUrls: ['./aggiungi-progetto.page.scss'],
})
export class AggiungiProgettoPage implements OnInit {
  newProjectForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: ['']
  });

  constructor(private formBuilder: FormBuilder,
              private progettoService: ProgettiService,
              private router: Router) { }

  ngOnInit() {
  }

  submit() {
    const progetto: Progetto = {
      nome: this.newProjectForm.value.name,
      descrizione: this.newProjectForm.value.description
    };
    this.progettoService.postProgetto(progetto).subscribe(
      p => this.router.navigateByUrl('/progetti/' + p.id));
  }
}

