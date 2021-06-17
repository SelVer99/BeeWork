import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utente} from '../model/utente.model';
import {Progetto} from '../model/progetto.model';
import { URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ProgettiService {
  constructor(private http: HttpClient) { }

  getProgetti(): Observable<Progetto> {
    return this.http.get<Progetto>(URL.PROGETTI);
  }

  postProgetto(progetto: Progetto): Observable<Progetto> {
    return this.http.post<Progetto>(URL.PROGETTI, progetto);
  }

  deleteProgetto(id: number): Observable<Progetto> {
    const deleteUrl = `${URL.PROGETTI}/${id}`;
    return this.http.delete<Progetto>(deleteUrl);
  }

  getProgetto(id): Observable<Progetto> {
    const getUrl = `${URL.PROGETTI}/${id}`;
    return this.http.get<Progetto>(getUrl);
  }
}
