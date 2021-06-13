import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

import {AUTH_TOKEN, URL, UTENTE_STORAGE} from '../constants';
import {Utente} from '../model/utente.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Token} from '../model/Token.model';
import {LoginForm} from '../model/LoginForm.model';
import {RegistrazioneForm} from "../model/RegistrazioneForm.model";

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  private loggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private storage: Storage) { }

  login(account: LoginForm): Observable<Token> {
    return this.http.post<Token>(URL.LOGIN, account, {observe: 'response'}).pipe(
      map((resp: HttpResponse<Token>) => {
        const token = resp.body.token;
        this.storage.set(AUTH_TOKEN, token);
        // update dell'observable dell'utente
        this.loggedIn$.next(true);
        return resp.body;
      }));
  }

  logout() {
    this.storage.remove(AUTH_TOKEN).then(
      () => this.loggedIn$.next(false)
    );
  }

  isLogged(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }

  registrazione(formData: RegistrazioneForm): Observable<any> {
    return this.http.post(URL.REGISTRAZIONE, formData);
  }

  // DA RIVEDERE con il server
  updateProfilo(nuovoUtente: Utente): Observable<Utente> {
    return this.http.post<Utente>(URL.UTENTI, nuovoUtente, {observe: 'response'}).pipe(
      map((resp: HttpResponse<Utente>) => {
        // Aggiornamento dell'utente nello storage.
        // Utente memorizzato nello storage per evitare chiamata REST quando si vuole modificare il profilo
        // e se l'utente chiude la app e la riapre i dati sono gia' presenti
        this.storage.set(UTENTE_STORAGE, resp.body);
        return resp.body;
      }));
  }

}
