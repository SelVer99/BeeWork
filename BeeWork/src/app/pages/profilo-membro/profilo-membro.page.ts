import { Component, OnInit } from '@angular/core';
import {UtenteService} from "../../services/utente.service";
import {Observable} from "rxjs";
import {Utente} from "../../model/utente.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profilo-membro',
  templateUrl: './profilo-membro.page.html',
  styleUrls: ['./profilo-membro.page.scss'],
})
export class ProfiloMembroPage implements OnInit {

  utente$: Observable<Utente>;
  userId: number;

  constructor(private utenteService: UtenteService, private activated: ActivatedRoute) {
    this.userId = this.activated.snapshot.params.id;
  }

  ngOnInit() {
    this.utente$ = this.utenteService.getUtenteById(this.userId);
  }

}
