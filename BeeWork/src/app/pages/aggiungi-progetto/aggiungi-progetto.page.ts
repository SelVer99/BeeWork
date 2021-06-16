import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {ProgettiService} from '../../services/progetti.service';
import {Progetto} from '../../model/progetto.model';
import {ModalController} from '@ionic/angular';
import {ProgettoPage} from '../progetto/progetto.page';

@Component({
  selector: 'app-aggiungi-progetto',
  templateUrl: './aggiungi-progetto.page.html',
  styleUrls: ['./aggiungi-progetto.page.scss'],
})
export class AggiungiProgettoPage implements OnInit {
  newProjectForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
    expirationDate: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private modalController: ModalController,
              private progettoService: ProgettiService) { }

  ngOnInit() {
  }

  async submit() {
    let progetto: Progetto = {
      nome: this.newProjectForm.value.name,
      descrizione: this.newProjectForm.value.description,
      scadenza: this.newProjectForm.value.expirationDate
    };
    this.progettoService.postProgetti(progetto).subscribe(console.log);
    const modal = await this.modalController.create({
      component: ProgettoPage,
      componentProps: {appParam: progetto}
    });
    await modal.present();
  }
}

