import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Utente } from 'src/app/model/utente.model';
import { ProgettiService } from 'src/app/services/progetti.service';
import { UtenteService } from 'src/app/services/utente.service';

@Component({
  selector: 'app-aggiungi-membri',
  templateUrl: './aggiungi-membri.component.html',
  styleUrls: ['./aggiungi-membri.component.scss'],
})
export class AggiungiMembriComponent implements OnInit {

  utenti: Utente[];
  projectId: number;

  constructor(
    private utentiService: UtenteService,
    private activatedRoute: ActivatedRoute,
    private progettoService: ProgettiService
    ) { 
      this.projectId = activatedRoute.snapshot.params.id;
    }

  ngOnInit() {
   this.utentiService.getAllUsers().subscribe(data => this.utenti = data);
  }

  addUserToProject(userId: number): void {
    this.progettoService.aggiungiMembroAlProgetto(this.projectId, userId).subscribe(
      () => this.utenti = this.utenti.filter(utente => utente.id !== userId)
    );
  }



}
