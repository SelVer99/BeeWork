import { Component, OnInit } from '@angular/core';
import {UtenteService} from "../../services/utente.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.page.html',
  styleUrls: ['./registrazione.page.scss'],
})
export class RegistrazionePage implements OnInit {

  registrazioneForm: FormGroup;

  constructor(
    private utenteService: UtenteService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.registrazioneForm = this.fb.group({
      username: '',
      nome: '',
      cognome : '',
      email : '',
      password : ''
    });
  }


  onRegister(): void {
    this.utenteService.registrazione(this.registrazioneForm.value).subscribe(
      () => this.router.navigateByUrl('login'),
      (error => console.error(error))
    );
  }

}
