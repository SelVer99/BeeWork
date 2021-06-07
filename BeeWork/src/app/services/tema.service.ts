import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

import {TEMA} from '../constants';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';

export class Tema {
  etichetta: string;
  valore: string;
}

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  light: Tema = {etichetta: 'Light', valore: 'light'};
  temi: Tema[] = [this.light, {etichetta: 'Dark', valore: 'dark'}];

  constructor(private storage: Storage) {}

  getTemaAttuale(): Observable<string> {
    return fromPromise(this.storage.get(TEMA));
  }

  getTemaPreferito(): string {
    return this.light.valore;
  }

  getTemi(): Tema[] {
    return this.temi;
  }

  updateTema(nuovoTema: string) {
    this.storage.set(TEMA, nuovoTema);
  }
}

