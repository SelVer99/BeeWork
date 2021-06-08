import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

import {NOTIFICHE} from '../constants';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';

export class Notifiche {
  etichetta: string;
  valore: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificheService {

  notifyMe: Notifiche = {etichetta: 'NotificheON', valore: 'on'};
  notifiche: Notifiche[] = [this.notifyMe, {etichetta: 'NotificheOFF', valore: 'off'}];

  constructor(private storage: Storage) {}

  getNotificheAttuale(): Observable<string> {
    return fromPromise(this.storage.get(NOTIFICHE));
  }

  getNotifichePreferite(): string {
    return this.notifyMe.valore;
  }

  getNotifiche(): Notifiche[] {
    return this.notifiche;
  }

  updateNotifiche(nuovaScelta: string) {
    this.storage.set(NOTIFICHE, nuovaScelta);
  }
}
