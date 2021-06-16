import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UtenteService} from '../../services/utente.service';
import {Utente} from '../../model/utente.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-profilo-personale',
  templateUrl: './profilo-personale.page.html',
  styleUrls: ['./profilo-personale.page.scss'],
})
export class ProfiloPersonalePage implements OnInit {
  private utente: Utente;
  isVisible = false;

  constructor(private utenteService: UtenteService) { }

  ngOnInit() {
    this.utenteService.getInfoUtente().subscribe((data: Utente) => this.utente = {
      id: (data as any).id,
      username: (data as any).username,
      nome: (data as any).nome,
      cognome: (data as any).cognome,
      email: (data as any).email,
      bio: (data as any).bio,
    });
  }

  toggleVisibility(): void {
    if (this.isVisible) {
      this.utenteService.putUtente(this.utente);
    }
    this.isVisible = !this.isVisible;
  }
}
