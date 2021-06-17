import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

import {NOTIFICHE} from '../constants';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {HttpClient} from "@angular/common/http";
import { URL } from '../constants';

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

  constructor(private storage: Storage, private http: HttpClient) {}

  getSceltaNotificheAttuale(): Observable<any> {
    return fromPromise(this.storage.get(NOTIFICHE));
  }

  updateNotifiche(nuovaScelta: string) {
    this.storage.set(NOTIFICHE, nuovaScelta);
  }

  getSceltaNotifichePreferita(): string {
    return this.notifyMe.valore;
  }

  getNotifiche(): Observable<any> {
    return this.http.get(URL.NOTIFICHE);
  }
}
