import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utente} from '../model/utente.model';

@Injectable({
  providedIn: 'root'
})
export class ProgettiService {
  private utente: Utente = new Utente();

  constructor(private http: HttpClient) { }

  getProgetti(): Observable<any> {
      return this.http.get('http://localhost:8080/progetti');
  }

}
